/**
 * ============================================
 * Service Worker - PWA
 * ফাইল: sw.js
 * ============================================
 */

const CACHE_NAME = 'krisok-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/crops.html',
  '/bazardor.html',
  '/equipment.html',
  '/rental.html',
  '/about.html',
  '/contact.html',
  '/chat.html',
  '/admin.html',
  '/crop-detail.html',
  '/equipment-detail.html',
  '/css/style.css',
  '/css/dark-mode.css',
  '/js/dark-mode.js',
  '/js/toast.js',
  '/js/back-to-top.js',
  '/js/page-transition.js',
  '/js/crops.js',
  '/js/crop-detail.js',
  '/js/bazardor.js',
  '/js/equipment.js',
  '/js/equipment-detail.js',
  '/js/rental.js',
  '/js/contact.js',
  '/js/live-chat.js',
  '/js/admin.js',
  '/js/firebase-config.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Bengali:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// ===== ইনস্টল =====
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('✅ ক্যাশ খোলা হয়েছে');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.error('❌ ক্যাশ করতে সমস্যা:', error);
      })
  );
});

// ===== ফেচ =====
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // ক্যাশে পাওয়া গেলে সেটা রিটার্ন, না হলে নেটওয়ার্ক থেকে আনো
        return response || fetch(event.request)
          .then(function(networkResponse) {
            // সফল হলে ক্যাশে সেভ করো
            if (networkResponse && networkResponse.status === 200) {
              var responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          });
      })
      .catch(function() {
        // অফলাইনে ডিফল্ট পেজ দেখাও
        return caches.match('/index.html');
      })
  );
});

// ===== অ্যাক্টিভেট =====
self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});