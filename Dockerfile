FROM node

WORKDIR /node_app

COPY . ./

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]