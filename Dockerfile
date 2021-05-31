FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

CMD ["npm", "start"]
