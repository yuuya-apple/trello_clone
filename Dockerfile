FROM node:18.12.1-alpine
WORKDIR /app

RUN apk update && \
    apk add git