const CACHE_NAME = 'yakutia-symbols-v1';
const urlsToCache = [
  '/',
  '/css/ykt.webflow.shared.5431d4cba.css',
  '/src/main.js',
  '/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/js/webflow.27bcb578.1d6738fa52905201.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});