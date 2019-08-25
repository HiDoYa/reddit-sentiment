FROM nginx:1.17.2-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Set working directory
WORKDIR /usr/src/app

# Copy files to working directory
ADD . /usr/src/app