FROM node:wheezy
ADD src /app
WORKDIR /app

CMD node bin/www
