FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm build

ENV PORT=3333
ENV CORS_ORIGIN="*"

EXPOSE ${PORT}

CMD ["pnpm", "start"]
