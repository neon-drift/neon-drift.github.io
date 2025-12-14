// Minimal service worker for PWA install capability

self.addEventListener("install", () => {
  // Activate immediately after installation
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // Become the active service worker immediately
  self.clients.claim();
});