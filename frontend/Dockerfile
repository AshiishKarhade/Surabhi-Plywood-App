FROM node:alpine3.14

WORKDIR /app

COPY package.json package-lock.json /app/
# COPY . /app
RUN npm install

COPY . /app/

EXPOSE 3000

CMD npm start