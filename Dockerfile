FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]