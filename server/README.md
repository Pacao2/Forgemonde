# Secure AI proxy for Forgemonde

This directory contains an example backend that protects AI provider keys and allows the browser to call a local, rate-limited endpoint instead of hitting external providers directly.

## Why this matters

The current browser-only setup stores API keys in the browser. This is convenient, but not secure for production or for public deployments. The secure pattern is:

- browser sends a request to your own backend
- backend holds the provider API key in a server environment variable
- backend validates input and rate limits calls
- backend calls the provider and returns the result

## Setup

1. In `server/`, copy `.env.example` to `.env`
2. Fill in your real values
3. Install dependencies:

   npm install

4. Start the proxy:

   npm start

5. Test it:

   curl http://localhost:3000/health

   curl -X POST http://localhost:3000/api/ai -H "Content-Type: application/json" -d '{"prompt":"Bonjour","provider":"anthropic"}'

## Front-end usage

Instead of calling the AI provider directly from the browser, call your own backend endpoint such as:

- `POST /api/ai`

Example body:

```json
{
  "prompt": "Raconte une scène de guerre sombre.",
  "provider": "anthropic",
  "model": "claude-haiku-4"
}
```

This prevents the AI key from being exposed in the browser, reduces abuse, and lets you add rate limiting and logging.

## Netlify note

For a hosting setup like Netlify, keep the actual AI backend on a server or a function platform with a secret store, not inside the public front-end bundle.
