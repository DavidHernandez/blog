# A NodeJS Blog

This is a very simple blog system wrote over Elm and NodeJS. I wrote this as an
exercise to learn about those tools.

## What does it use

* NodeJS is the technology used for the backend. Find more at https://nodejs.org
* Elm is a functional language that compiles to Javascript and can be used for
frontend development. Find more at https://elm-lang.org

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

It will create a tmux session with three windows, the first one with the nodejs
live log, the second one with the code in vim and the last one will be a window
with a pseudo-elm command that actually runs a docker container with elm.
