# Security hardening: Backend proxy for API keys

This directory provides a backend example and should be deployed as a separate service, not as part of the static site bundle.

- The browser never stores the provider key.
- The server holds the key in a runtime environment variable.
- Requests are rate-limited and origin-checked.
- Provider access is centralized and easier to monitor.

## Recommended flow

1. Keep the static game hosted on Netlify.
2. Keep the AI provider API key on a backend service.
3. Browser calls `/api/ai` on the backend.
4. Backend validates, rate-limits, and forwards the request to the AI provider.

## Security controls included in the example

- `helmet` for HTTP security headers
- `cors` with allowlist
- `express-rate-limit` to prevent abuse
- environment-variable secret storage
- centralized provider call logic

## Production hardening suggestions

- Add request validation and a payload size cap
- Add logs for failed provider requests and abuse detection
- Rotate keys periodically
- Use Web Application Firewall / CDN in front of the public site
- Consider a dedicated backend host like Railway, Render, Fly.io, or Vercel serverless functions
