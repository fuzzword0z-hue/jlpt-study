// 네트워크 우선(network-first) 전략:
// 온라인이면 항상 최신 index.html / 데이터 파일을 받고, 받은 사본을 캐시에 저장.
// 오프라인일 때만 캐시로 대체 → 데이터 파일을 수정할 때마다 CACHE_NAME을 올리지 않아도 됨.
const CACHE_NAME = 'jlpt-study-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './vocab-data.js',
  './vocab-n1-data.js',
  './reading-data.js',
  './grammar-data.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // 외부 요청(Firebase, 구글 폰트 등)과 GET 이외의 요청은 브라우저 기본 처리
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(e.request, { ignoreSearch: true }).then((cached) => {
          if (cached) return cached;
          if (e.request.mode === 'navigate') return caches.match('./index.html');
          return Response.error();
        })
      )
  );
});
