const cacheName = 'glossy-site-v1';
const assets = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/offline.js',
  '/js/app.js',
  '/js/api.js',
  '/manifest.json',
  '/favicon.ico',
  '/images/icons/icon-512x512.png',
  '/images/icons/icon-384x384.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-96x96.png',
  '/images/icons/icon-72x72.png',
  '/images/products/baby-blue-womens-top.jpg',
  '/images/products/black-bag-over-the-shoulder.jpg',
  '/images/products/black-cocktail-dress-back.jpg',
  '/images/products/blue-gemstone-pendant.jpg',
  '/images/products/bright-red-purse-with-gold.jpg',
  '/images/products/chakra-bracelet-product-shot.jpg',
  '/images/products/cocktail-dress-off-shoulder.jpg',
  '/images/products/Cocooil-baby-oil-on-desk.jpeg',
  '/images/products/embroidery-detail-on-blouse.jpg',
  '/images/products/flower-print-summer-dress.jpg',
  '/images/products/gold-dream-catcher-necklace.jpg',
  '/images/products/gold-zipper-on-black-fashion-backpack.jpg',
  '/images/products/green-summer-dress.jpg',
  '/images/products/grey-t-shirt.jpg',
  '/images/products/kids-jacket.jpg',
  '/images/products/ladies-lingerie-top.jpg',
  '/images/products/legs-crossed-cat-socks.jpg',
  '/images/products/light-pink-purse.jpg',
  '/images/products/light-up-sneakers.jpg',
  '/images/products/lime-green-fitness-tracker.jpg',
  '/images/products/low-cut-cocktail-dress.jpg',
  '/images/products/red-LED-shoes.jpg',
  '/images/products/ruffled-dress-shoulder.jpg',
  '/images/products/summer-fashion-top-lace.jpg',
  '/images/products/summer-off-shoulder-dress.jpg',
  '/images/products/wind-breaker-in-blue.jpg',
  '/images/products/womens-black-choker-necklace.jpg',
  '/images/products/womens-boho-dress.jpg',
  '/images/products/wood-leather-watches.jpg',
  'https://node-express-cart-api.herokuapp.com/api/products'
];

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
