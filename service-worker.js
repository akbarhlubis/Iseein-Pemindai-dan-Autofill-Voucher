// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
let urlsToCache = [
    "/",
    "/index.html",
    "/components",
    "/components/images",
    "/components/images/favicon.ico", 
    "/components/images/Logo Iseein.png",
    "/components/images/favicon-16x16.png",
    "/components/images/manifest-icon.png",
    "/components/scripts",
    "/components/scripts/script.js", 
    "/components/scripts/pwa-handler.js",
    "/components/styles",
    "/components/styles/style.css"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
