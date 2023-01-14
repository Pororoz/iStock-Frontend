#! /bin/bash

echo "> run nginx container"
docker-compose -f docker-compose.prod.yml up nginx -d --build

echo "> docker container up"

# docker up
docker-compose -f docker-compose.prod.yml up react -d --build