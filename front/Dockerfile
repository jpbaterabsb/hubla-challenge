
FROM node:18-alpine

WORKDIR /usr/src/app/front

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]