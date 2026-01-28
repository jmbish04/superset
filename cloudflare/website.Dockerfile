FROM oven/bun:1.3.0 AS base

WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile
RUN bun run --filter @superset/website build

FROM oven/bun:1.3.0

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

WORKDIR /app

COPY --from=base /app /app

EXPOSE 8080

WORKDIR /app/apps/website

CMD ["bun", "run", "start"]
