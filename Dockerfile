FROM node:11.1.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "start"]
