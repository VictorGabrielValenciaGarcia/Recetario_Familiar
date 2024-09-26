let cacheData = "appV1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then(
            (cache) => {
                cache.addAll([
                    '/static/js/bundle.js',
                    '/manifest.json',
                    '/img/pozole-rojo.jpg',
                    '/img/memelas.jpg',
                    '/img/tlayuda.jpg',
                    '/logo256.png',
                    '/logo600.png',
                    '/favicon.ico',
                    '/index.html',
                    '/',
                ]);
            }
        ),
    );
});

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            // Return the cached response if found
            if (res) return res;
        })
    );
});
