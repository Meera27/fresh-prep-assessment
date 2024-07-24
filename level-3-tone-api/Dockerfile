FROM node:21.7.1

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 9090

CMD ["node", "index.js"]
