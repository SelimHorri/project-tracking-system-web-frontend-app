
FROM node:14
RUN mkdir -p /home/app
#RUN apt-get install npm
RUN npm install -g @angular/cli
WORKDIR /home/app
COPY . .
EXPOSE 4200
ENTRYPOINT ["ng", "serve"]
