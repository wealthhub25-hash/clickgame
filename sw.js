self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('chicken-cache').then(cache => {
      return cache.addAll(['index.html','game.js','manifest.json','icon.png','chicken.png']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
