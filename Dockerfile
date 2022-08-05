FROM node:17.2.0

WORKDIR /app

COPY package.json .

ENV NODE_ENV production

RUN npm install 

COPY . .

RUN npm run build

RUN npm run start