FROM node:22.3.0-slim

ENV NODE_ENV=development
ENV PORT=3000

WORKDIR /express-docker

COPY ./app .

RUN npm install

EXPOSE 3000:3000

CMD ["npm", "run-script", "dev"]
