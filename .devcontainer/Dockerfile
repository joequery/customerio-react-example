FROM node:22-alpine
RUN apk add --no-cache --virtual .gyp g++ make py3-pip
COPY package*.json .
RUN npm install
