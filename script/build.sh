#! /bin/bash

cd ../

docker-compose -f docker-compose.test.yml up -d --build

./gradlew clean build

docker-compose -f docker-compose.test.yml down