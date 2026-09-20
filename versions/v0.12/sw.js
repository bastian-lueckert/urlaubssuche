/* Urlaubssuche – Service Worker
   Ziel: Die App startet auch ohne Netz. Beim Laden wird immer zuerst das Netz
   gefragt, damit neue Versionen sofort ankommen; erst wenn das scheitert,
   kommt die gespeicherte Fassung. Externe Daten (Wikipedia, Karten, Routen)
   werden bewusst nicht zwischengespeichert. */
const CACHE = "urlaubssuche-v4";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-maskable.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Anbieter-Logos zwischenspeichern, damit die Liste auch offline erkennbar bleibt
  if (url.hostname === "icons.duckduckgo.com") {
    e.respondWith(caches.open(CACHE + "-logos").then(c =>
      c.match(req).then(hit => hit || fetch(req).then(res => { if (res && res.ok) c.put(req, res.clone()); return res; }).catch(() => hit))
    ));
    return;
  }
  if (url.origin !== self.location.origin) return; // fremde Dienste nie abfangen

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const kopie = res.clone();
          caches.open(CACHE).then(c => c.put(req, kopie)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});
