FROM node:hydrogen-alpine

WORKDIR /express-app

COPY . .

RUN npm install

EXPOSE 5004

CMD ["node","index.js"]
