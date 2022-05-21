FROM node:alpine3.14

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install nodemon

EXPOSE 5000

CMD npm start