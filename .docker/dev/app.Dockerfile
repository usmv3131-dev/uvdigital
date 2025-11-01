# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.16.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /workspace
RUN apk add --no-cache libc6-compat bash wget

FROM base AS deps
WORKDIR /workspace

COPY MAIN/package.json MAIN/package-lock.json MAIN/
RUN cd MAIN && npm ci

COPY 50BOTS/package.json 50BOTS/package-lock.json 50BOTS/
RUN cd 50BOTS && npm ci

COPY AIMARKETING/package.json AIMARKETING/package-lock.json AIMARKETING/
RUN cd AIMARKETING && npm ci

COPY BEAUTYAI/package.json BEAUTYAI/package-lock.json BEAUTYAI/
RUN cd BEAUTYAI && npm ci

COPY CONTENTAI/package.json CONTENTAI/package-lock.json CONTENTAI/
RUN cd CONTENTAI && npm ci

COPY CASES/BEAUTYAICASE/package.json CASES/BEAUTYAICASE/package-lock.json CASES/BEAUTYAICASE/
RUN cd CASES/BEAUTYAICASE && npm ci

COPY CASES/CONTENTAICASE/package.json CASES/CONTENTAICASE/package-lock.json CASES/CONTENTAICASE/
RUN cd CASES/CONTENTAICASE && npm ci

FROM base AS runtime
WORKDIR /workspace

COPY --from=deps /workspace/MAIN/node_modules ./MAIN/node_modules
COPY --from=deps /workspace/50BOTS/node_modules ./50BOTS/node_modules
COPY --from=deps /workspace/AIMARKETING/node_modules ./AIMARKETING/node_modules
COPY --from=deps /workspace/BEAUTYAI/node_modules ./BEAUTYAI/node_modules
COPY --from=deps /workspace/CONTENTAI/node_modules ./CONTENTAI/node_modules
COPY --from=deps /workspace/CASES/BEAUTYAICASE/node_modules ./CASES/BEAUTYAICASE/node_modules
COPY --from=deps /workspace/CASES/CONTENTAICASE/node_modules ./CASES/CONTENTAICASE/node_modules

# Ensure node user owns workspace for write access during dev
RUN chown -R node:node /workspace

# Use default non-root Node user (uid 1000)
USER node

WORKDIR /workspace/MAIN
ENV PORT=3000
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 --port ${PORT:-3000}"]
