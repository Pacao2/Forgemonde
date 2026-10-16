require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const AI_API_KEY = process.env.AI_API_KEY || '';
const AI_PROVIDER = (process.env.AI_PROVIDER || 'anthropic').toLowerCase();
const AI_BASE_URL = (process.env.AI_BASE_URL || '').replace(/\/+$/, '');
const AI_MODEL = process.env.AI_MODEL || 'claude-haiku-4';

if (!AI_API_KEY) {
  console.warn('WARNING: AI_API_KEY is not set. The proxy will reject requests.');
}

if (!AI_BASE_URL) {
  console.warn('WARNING: AI_BASE_URL is not set. Configure it before using the proxy.');
}

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
      imgSrc: ["'self'", 'data:'],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));

app.use(cors({
  origin: (origin, callback) => {
    const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(v => v.trim()).filter(Boolean);
    if (!origin || allowed.length === 0 || allowed.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Origin not allowed'));
  },
  credentials: true,
}));

app.use(express.json({ limit: '1mb' }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please slow down.' },
});
app.use('/api', limiter);

const makeBody = ({ prompt, model, provider, stream = false }) => {
  if (provider === 'anthropic') {
    return {
      model: model || AI_MODEL,
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
      stream,
    };
  }

  return {
    model: model || AI_MODEL,
    messages: [{ role: 'user', content: prompt }],
    stream,
  };
};

const callProvider = async (req, res) => {
  const { prompt, model, provider, stream } = req.body || {};

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Field "prompt" is required.' });
  }

  if (!AI_API_KEY || !AI_BASE_URL) {
    return res.status(500).json({
      error: 'AI proxy is not configured. Set AI_API_KEY and AI_BASE_URL in the environment.',
    });
  }

  const selectedProvider = (provider || AI_PROVIDER).toLowerCase();
  const selectedModel = model || AI_MODEL;
  const base = AI_BASE_URL.replace(/\/+$/, '');

  const headers = {
    'Content-Type': 'application/json',
  };

  let url = `${base}/chat/completions`;
  let payload = makeBody({ prompt, model: selectedModel, provider: selectedProvider, stream: Boolean(stream) });

  if (selectedProvider === 'anthropic') {
    headers['x-api-key'] = AI_API_KEY;
    headers['anthropic-version'] = '2023-06-01';
    url = `${base}/v1/messages`;
    payload = {
      model: selectedModel,
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
      stream: Boolean(stream),
    };
  } else {
    headers.Authorization = `Bearer ${AI_API_KEY}`;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    if (!response.ok) {
      return res.status(response.status).json({
        error: 'Provider rejected the request',
        provider: selectedProvider,
        details: text.slice(0, 500),
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { raw: text };
    }

    if (selectedProvider === 'anthropic') {
      const blocks = parsed.content || [];
      const content = blocks.map(block => block.text || '').join('');
      return res.json({ content });
    }

    const firstChoice = parsed.choices?.[0]?.message?.content ?? parsed.choices?.[0]?.text ?? '';
    return res.json({ content: firstChoice });
  } catch (error) {
    console.error('AI proxy error:', error);
    return res.status(502).json({
      error: 'Failed to reach AI provider',
      message: error.message || 'Unknown error',
    });
  }
};

app.get('/health', (req, res) => {
  res.json({ ok: true, provider: AI_PROVIDER, hasKey: Boolean(AI_API_KEY) });
});

app.post('/api/ai', callProvider);

app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`AI proxy listening on http://localhost:${PORT}`);
});
