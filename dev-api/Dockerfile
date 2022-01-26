FROM node:14
RUN apt-get update
RUN apt-get install -y openssl
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD npm start