FROM nginx
COPY ./dist /dist
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get install vim -y