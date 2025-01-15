import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan di-caching
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-92x92.png',
  './icons/icon-144x144.png',
  './icons/icon-196x196.png',
  './icons/icon-256x256.png',
  './icons/icon-512x512.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  'https://kit.fontawesome.com/5b874e663b.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('kit.fontawesome.com') || event.request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open('font-awesome-cache').then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        const networkResponse = await fetch(event.request);
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      })
    );
  } else {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
