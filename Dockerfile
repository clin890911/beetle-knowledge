FROM node:20 AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM docker.io/zeabur/caddy-static:latest
COPY --from=build /src/dist /var/www/html
