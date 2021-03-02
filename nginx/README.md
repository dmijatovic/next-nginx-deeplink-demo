# NGINX config for NextJS

When using NextJs as SSG static pages there is a problem of deeplinking to dynamic pages.

In the custom error page I wrote small peace of code in useEffect to detect if the page is redirected.
This is posible because the original url path is in the addressbar of browser and Next router
picks this value in the prop asPath. Simple compare between route and asPath prop in next
router points that there is inconsistency between route root path "/" and the value in the
addressbar (asPath).

The NGINX setup should send 404 to this page. The location in this setup is /404/index.html
