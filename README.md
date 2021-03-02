# Next SSG deep linking dynamic pages demo

This is simple deep linking demo using nginx server. It explores different approaches for handling 404 pages on SSG site witch uses dynamic routes and needs to support deep linking (eg. direct access to http://client/1/article/6 for example). When using SSG with nginx with basic definitions the attempt to access deep linked content will produce 404 page. The problem is that dynamic pages when generated have physical route http://client/[cid]/article[aid]. In other words the route /client/1/article/2 does not exist. Next JS router knows that [cid] and [aid] are dynamic parts of the route and substitute these. Nginx does not have this information and returns 404.

In this demo I tried 3 approaches;

- NGINX config file, rewrite all 404 to index of home page. This approach is used for SPA applications and I know it from the past. This approache ended up sending all errors to index but the path in location was not changed.

- NGINX config file, rederict all 404 to index of home page. This approach changes the url in the addressbar too, so it is clear that user is send back to home page. This could be confusing in some situations. There is one caviat: if you running nginx in the container on different port than 80 you will need to add support for that port? This demo solution works only if nginx is on default port (80).

- Custom next error page. In this case we create 404.js in the page directory and write additional code which tries to redirect user using next router prior to showing 404 error. During the attempt one additional parameter is attached (deeplink=true) to url. This information is used to determine if the rederect attempt is already perfomed. If the user comes back with "404?redirect=true" we assume that redirect failed and show the 404 page content. With this approach NGINX setup does not have to use rewrites or redirect.

## Build docker image

Complete process can be execute manually

- Build Docker image using Dockerfile in the root of the project

```bash
# build docker image
docker build -t next-deeplink:0.0.1 .

# run on port 3000
docker run -p 3000:80 -d next-deeplink:0.0.1

```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Build static site

```bash
npm run export
```
