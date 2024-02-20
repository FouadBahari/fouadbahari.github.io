'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a4289f8006764e5e04ed26e230381658",
"assets/AssetManifest.bin.json": "65efb5ce6ca9c4d8cf8a651a8c3745fe",
"assets/AssetManifest.json": "407b96558ed15ee14f99bad876d4238a",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/android_studio.png": "2c194427c551c3e628064e359ee8ad82",
"assets/assets/icons/dart.png": "a8894c189a2795debee21fd0e6d4b24c",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/figma.png": "348f789a20e7b76f44b587cec9418151",
"assets/assets/icons/firebase.png": "d12cf916a663b52d01d2e0bbb2e7c18a",
"assets/assets/icons/flutter.png": "20ed1ffaf6047de27f152124d114127c",
"assets/assets/icons/git.png": "5dad01124c25d19c78aa763d94c6c3ee",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/herfa_logo.png": "e47d842ee2abcf591cbeb5c81bd96197",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/nodejs.png": "c502658a509d27b53679b3ef73c0d82f",
"assets/assets/icons/obtulus.png": "197ceeaee599a57e00917aadc441f0cf",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/trello.jpg": "f41ffef6dd2f3744aa0701d008fa9b5c",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/dileepabandara_dev.png": "3b07d4f121fb24862763aaaadbe22f3e",
"assets/assets/images/enpa.jpg": "89ff46b5ff65b0eb52b4bbbb1e471da3",
"assets/assets/images/esti.jpg": "950b486964b17bab54fdf6767697f885",
"assets/assets/images/flutterscope.png": "bf9d96f9660b19b398e0b02316f65523",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/logo.jpg": "a7eb4177f4741dde5a677c300eae9460",
"assets/assets/images/logo.png": "99d5f157c1281deae6519eb06dbcbabe",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/mms.png": "a8433784455e9ee9315e59d1fc1e1357",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/splash.png": "757d77d4e7f9912855f55274a00ab9e8",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "057071262697e945e35c87ba124272f4",
"assets/NOTICES": "ee0dade9b05ed527162d9cd0a791a770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "3de87ac25f57b245470068ee36479530",
"icons/android-icon-192x192.png": "79cb8de0db4c1ce6f3517890422f3aa0",
"icons/android-icon-36x36.png": "961f536fa5ae770826ad58ab13efe7b9",
"icons/android-icon-48x48.png": "bfa48d56838a9759ec3da483bf26d05b",
"icons/android-icon-72x72.png": "b4109ce26e716b827bb03ebf2ed26bf3",
"icons/android-icon-96x96.png": "91d5f1bb4ec3a43dfd88cb988a0df74e",
"icons/apple-icon-114x114.png": "0476e1dd29bc9400a654b712be49d3c4",
"icons/apple-icon-120x120.png": "b394d681849fa5beedde3600564e7e73",
"icons/apple-icon-144x144.png": "3de87ac25f57b245470068ee36479530",
"icons/apple-icon-152x152.png": "72376d865f9e9e4c83584595f36fb7a6",
"icons/apple-icon-180x180.png": "24448db4dd0b4c255bb669b8677f7794",
"icons/apple-icon-57x57.png": "91ec3e7567c77978e794bb0589f24251",
"icons/apple-icon-60x60.png": "ca05905a6263da7035372837f9c5e535",
"icons/apple-icon-72x72.png": "b4109ce26e716b827bb03ebf2ed26bf3",
"icons/apple-icon-76x76.png": "d308210b33d51a2fc5bb10c89603f7f8",
"icons/apple-icon-precomposed.png": "75c3a9a1422045b6c30d845ed5ad4553",
"icons/apple-icon.png": "75c3a9a1422045b6c30d845ed5ad4553",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "7d62980fe9b5c7fa9aebe3664de0acc1",
"icons/favicon-32x32.png": "78e383ea61a13d6f76767ab7b26a5d34",
"icons/favicon-96x96.png": "91d5f1bb4ec3a43dfd88cb988a0df74e",
"icons/favicon.ico": "cf2ceaadeb36810607c9ecd9b190fee5",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "3de87ac25f57b245470068ee36479530",
"icons/ms-icon-150x150.png": "c5a119c40f705a7a59efcfbe3e3af4fe",
"icons/ms-icon-310x310.png": "39f72835f5ba8726d67adaa6eb186975",
"icons/ms-icon-70x70.png": "830e9cb91299832f60525250d0ba45dc",
"index.html": "03ccb1b9d9030f6921069e38ade52d68",
"/": "03ccb1b9d9030f6921069e38ade52d68",
"main.dart.js": "142909aa06597b405521fdbe78dfc6fc",
"manifest.json": "0d41addfc3f48821e8e067eea75872dd",
"splash/img/dark-1x.png": "7115ca6bda3b4192e5e3778b5d6d044b",
"splash/img/dark-2x.png": "d58d7e26dbb0e079041697c772dc5288",
"splash/img/dark-3x.png": "d47ba90be9918160ea1ae9ee273a9bf0",
"splash/img/dark-4x.png": "111da032664c5af3600403d4c171c3da",
"splash/img/light-1x.png": "7115ca6bda3b4192e5e3778b5d6d044b",
"splash/img/light-2x.png": "d58d7e26dbb0e079041697c772dc5288",
"splash/img/light-3x.png": "d47ba90be9918160ea1ae9ee273a9bf0",
"splash/img/light-4x.png": "111da032664c5af3600403d4c171c3da",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"version.json": "fb0a84411d43fe4ae15506e31efb0c0a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
