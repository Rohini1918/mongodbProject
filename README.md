# Introduction

This is an Express Application to get the status of the orders using data from a MongoDB database.

## Installation

Check if you node installed in your system using below command.

- node -v (this will return node version if installed)
- if not installed you can install it from [NodeJS official website](https://nodejs.org/en)
- run npm install in the project root directory - this should install all required dependencies for you


## Usage
- To run server locally use below command

node index.js

- Used Docker for containerizing the application and it uses node-alpine as base image and refer to Dockerfile for more details.

- To generate docker image locally use below command

docker build . -t express-app


- To run the docker image docker image locally

docker run -p 5004:5004 express-app
