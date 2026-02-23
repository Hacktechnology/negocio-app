// Nombre del caché (puedes cambiar la versión cuando hagas cambios grandes)
const CACHE_NAME = 'delivery-pro-v1';
const ASSETS = [
    './',
    './delivery.html',
    './negocio.html',
    './style.css',
    'https://cdn-icons-png.flaticon.com/512/2972/2972185.png',
    'https://assets.mixkit.co/active_storage/sfx/1359/1359-preview.mp3'
];

// Instalación: Guarda los archivos en el teléfono
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activación: Limpia cachés antiguos
self.addEventListener('activate', (e) => {
    console.log("Service Worker activado.");
});

// Estrategia: Carga desde el caché si no hay internet
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
