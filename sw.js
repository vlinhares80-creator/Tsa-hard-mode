const CACHE_NAME = "tsa-hard-mode-cache-v840";

const FILES_TO_CACHE = [
  "./",
  "./index.html?v=840",
  "./style.css?v=840",
  "./questions.js?v=840",
  "./questionFilters.js?v=840",
  "./extraQuestions.js?v=840",
  "./extraQuestions2.js?v=840",
  "./flashcards.js?v=840",
  "./studyModules.js?v=840",
  "./app.js?v=840",
  "./manifest.json?v=840",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE).catch(() => {
        return Promise.resolve();
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
