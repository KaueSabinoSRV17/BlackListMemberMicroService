FROM node:19-alpine

WORKDIR /app

COPY package* /app/

RUN npm install

RUN npm install typescript -G

COPY . /app/

RUN tsc 

ENTRYPOINT [ "npm", "start" ]