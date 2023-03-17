FROM node:19-alpine

WORKDIR /app

COPY package* /app/

RUN npm install

COPY . /app/

RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]