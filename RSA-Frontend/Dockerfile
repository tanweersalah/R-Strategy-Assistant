# baseimage
FROM node:18.20-alpine 

# download and install program 

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install

COPY ./ ./

# what to do when start the container
CMD ["npm","run","dev", "--","--host"]

