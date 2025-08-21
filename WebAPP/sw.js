self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vanalign-cache').then(cache => {
      return cache.addAll([
        'webble.html',
        'ble.js',
        'draw.js',
        'tabs.js',
        'manifest.json',
        // weitere Assets nach Bedarf
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
