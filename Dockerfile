# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Download dependencies as a separate step to take advantage of Docker's caching mechanism.
COPY ["package.json", "yarn.lock", "./"]
COPY ["./apps/web/package.json", "./apps/web/"]

RUN yarn set version 3.5.1
RUN yarn install

# Copy the rest of the source files into the image.
COPY . .

# Run the application.
CMD yarn dev
