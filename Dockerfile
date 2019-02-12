FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 9876

EXPOSE 9876

CMD ["npm", "run", "dev"]
