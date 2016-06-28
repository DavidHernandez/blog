# A NodeJS Blog

This is a very simple blog system wrote with a now classical MEAN stack: Mongo,
Express, Angular and NodeJS. I wrote this as an exercise to learn about those
tools.

## What does it use

* NodeJS is the technology used for the backend. Find more at https://nodejs.org
* Express is a framework wrote on top of NodeJS. Find more at http://expressjs.com
* Angular is a frontend framework develper by Google. Find more at https://angularjs.org
* MongoDB is a NoSQL database. Find more at https://mongodb.com

It also use other tools, but are not required to work. For example:

* Jasmine a simple JS testing framework. Find more at http://jasmine.github.io
* Docker a containerization platform. Fimd more at http://docker.com

## How to use

The easiest way to use it is with Docker Engine and Docker Compose. See the documentation
here: https://docs.docker.com/compose/install/

Just start the container with:

`docker-compose up`

If you, like me, like tmux and vim, you might prefer to use:

`tmux.sh`

It will create a tmux session with two windows, the first one with the nodejs
live log and the second one with the code in vim.
