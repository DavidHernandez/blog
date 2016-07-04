FROM node:wheezy

RUN npm install --global nodemon

ADD src /app
WORKDIR /app

CMD nodemon -L bin/www
