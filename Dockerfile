FROM node:14
ENV NODE_ENV=main

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["npm","start"]