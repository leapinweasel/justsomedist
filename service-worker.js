const CACHE_NAME = 'just-some-words-cache-v4';
const urlsToCache = [
    '/',
    'index.html',
    'styles.css',
    'script.js',
    'assets/wordlist.txt'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                console.log("load from cache. " + event.request);
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
