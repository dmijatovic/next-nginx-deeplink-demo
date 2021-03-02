FROM node:14.15-alpine3.12 as build

WORKDIR /home/publistat

COPY . .

# install dependencies
RUN npm install
# run jest tests
# RUN npm test
# build and export next app to out folder
RUN npm run export

FROM nginx:alpine

# forward request and error logs to docker log collector
# RUN mkdir -p /home/LogFiles
#  \
# 	&& ln -sf /dev/stdout /home/LogFiles/access.log \
# 	&& ln -sf /dev/stderr /home/LogFiles/error.log
#  RUN ln -sf /dev/stderr /home/LogFiles/error.log

# copy static next output to nginx
COPY --from=build /home/publistat/out /usr/share/nginx/html
# copy static next output to azure app service default location
# COPY --from=build /home/publistat/out /home/site/wwwroot
# copy test coverage results
# COPY --from=build /home/publistat/coverage /home/publistat/coverage
# copy nginx config for Azure App Services
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf


