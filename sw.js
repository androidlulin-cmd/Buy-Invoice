const CACHE_NAME = "money-tracker-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// ဖိုင်တွေကို Cache ထဲသိမ်းခြင်း
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Offline ဖြစ်နေချိန်မှာ Cache ထဲက ဖိုင်တွေကို ပြန်ခေါ်သုံးခြင်း
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
