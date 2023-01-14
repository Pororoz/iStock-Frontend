#! /bin/bash

echo "> run MySQL, redis and nginx container"
docker-compose -f docker-compose.prod.yml up mysql redis nginx -d --build

echo "> docker container up"

# docker up
docker-compose -f docker-compose.prod.yml up spring1 -d --build