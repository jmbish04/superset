# Cloudflare Workers (Containers)

This repository ships a minimal Cloudflare Workers (Containers) setup for the `@superset/website` app.

## Prerequisites

- Cloudflare account with Containers enabled
- Wrangler CLI installed
- A Docker-compatible container runtime for local builds
- `DATABASE_URL` configured for the API layer (use `wrangler secret put DATABASE_URL`)

## Deploy

1. Build and publish the container image (or let Wrangler build it from the Dockerfile):

```bash
wrangler deploy --config cloudflare/wrangler.toml
```

2. Set runtime secrets:

```bash
wrangler secret put DATABASE_URL --config cloudflare/wrangler.toml
```

3. Deploy again to apply the secret:

```bash
wrangler deploy --config cloudflare/wrangler.toml
```

## Notes

- The worker proxies all traffic to the containerized Next.js website.
- The container listens on port `8080` to align with Cloudflare Containers defaults.
- Update `cloudflare/wrangler.toml` with your Cloudflare account and route settings as needed.
