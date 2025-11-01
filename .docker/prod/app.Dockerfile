# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.16.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /workspace
RUN apk add --no-cache libc6-compat

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

FROM base AS build
WORKDIR /workspace
COPY --from=deps /workspace/MAIN/node_modules ./MAIN/node_modules
COPY --from=deps /workspace/50BOTS/node_modules ./50BOTS/node_modules
COPY --from=deps /workspace/AIMARKETING/node_modules ./AIMARKETING/node_modules
COPY --from=deps /workspace/BEAUTYAI/node_modules ./BEAUTYAI/node_modules
COPY --from=deps /workspace/CONTENTAI/node_modules ./CONTENTAI/node_modules
COPY --from=deps /workspace/CASES/BEAUTYAICASE/node_modules ./CASES/BEAUTYAICASE/node_modules
COPY --from=deps /workspace/CASES/CONTENTAICASE/node_modules ./CASES/CONTENTAICASE/node_modules
COPY . .
WORKDIR /workspace/MAIN
RUN npm run build

FROM nginx:1.27-alpine AS production
RUN apk add --no-cache wget
COPY .docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/MAIN/build /usr/share/nginx/html
RUN mkdir -p /var/cache/nginx /var/run/nginx /var/log/nginx \
    && chown -R nginx:nginx /var/cache/nginx /var/run/nginx /var/log/nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://localhost:8080/ || exit 1
USER nginx
CMD ["nginx", "-g", "daemon off;"]
