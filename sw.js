// 네트워크 우선(network-first) 전략 + 시간 제한:
// 온라인이면 최신 index.html / 데이터 파일을 받고, 받은 사본을 캐시에 저장.
// 오프라인이거나 신호가 약해 NETWORK_TIMEOUT 안에 응답이 없으면 캐시로 먼저 보여 주고,
// 늦게 도착한 응답은 캐시만 갱신 (다음에 열 때 반영) → 데이터 파일을 고쳐도 CACHE_NAME을 올릴 필요 없음.
const CACHE_NAME = 'jlpt-study-v7';
const NETWORK_TIMEOUT = 3500;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './vocab-data.js',
  './vocab-n1-data.js',
  './reading-data.js',
  './grammar-data.js',
  './grammar-drill-data.js',
  './listening-data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
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
  const network = fetch(e.request).then((response) => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
    }
    return response;
  });
  const fromCache = () => caches.match(e.request, { ignoreSearch: true }).then((cached) => {
    if (cached) return cached;
    if (e.request.mode === 'navigate') return caches.match('./index.html');
    return undefined;
  });
  e.respondWith(new Promise((resolve) => {
    let done = false;
    const finish = (res) => { if (!done && res) { done = true; resolve(res); } };
    // 신호가 약하면 일정 시간 뒤 캐시본을 먼저 보여 줌 (캐시가 없으면 네트워크를 계속 기다림)
    const timer = setTimeout(() => fromCache().then(finish), NETWORK_TIMEOUT);
    network.then((res) => { clearTimeout(timer); finish(res); })
      .catch(() => { clearTimeout(timer); fromCache().then((res) => finish(res || Response.error())); });
  }));
  // 시간 제한으로 캐시를 먼저 보여 줘도, 늦게 온 응답으로 캐시는 갱신되도록 기다려 줌
  e.waitUntil(network.then(() => {}, () => {}));
});
