self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        cache.addAll(['/', '/index.html', '/manifest.json','/assets']); // Agrega las rutas de los archivos estáticos que deseas almacenar en caché
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  