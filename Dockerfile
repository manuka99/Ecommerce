FROM node:12.13.1

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8075

CMD ["npm", "run", "start"]