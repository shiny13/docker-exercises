FROM node:16.15.1-alpine 
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . . 
CMD node index.js
