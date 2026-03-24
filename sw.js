const CACHE_NAME = "moon-log-cache-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match("./index.html"));
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const route = event.notification.data?.route || null;
  const targetUrl = new URL("./", self.location.origin);
  if (route?.type === "daily-log-detail" && route.logId) {
    targetUrl.searchParams.set("open", "daily-log-detail");
    targetUrl.searchParams.set("logId", route.logId);
    if (route.date) targetUrl.searchParams.set("date", route.date);
  } else if (route?.type === "daily-check") {
    targetUrl.searchParams.set("open", "daily-check");
    if (route.date) targetUrl.searchParams.set("date", route.date);
  }

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      const existing = clients.find((client) => "focus" in client);
      if (existing) {
        if (route) {
          existing.postMessage({ type: "notification-route", payload: route });
        }
        return existing.focus();
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl.toString());
      }
      return undefined;
    }),
  );
});
