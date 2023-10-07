# refer to: https://github.com/orgs/pnpm/discussions/5376
FROM node:lts-alpine as builder
WORKDIR /app
RUN npm install -g pnpm@7.27.0

COPY pnpm-lock.yaml ./
RUN pnpm fetch

COPY .npmrc package.json ./
COPY .yalc ./.yalc
RUN pnpm install -r
RUN pnpm prune --prod
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh && node-prune

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
ADD . ./
EXPOSE 8080
CMD [ "node", "main.js" ]
