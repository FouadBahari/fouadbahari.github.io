'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3ea156325bca16b9dd604725b0d76ab1",
"assets/AssetManifest.bin.json": "ae77de18580e4bb2e6140b3d476b29f7",
"assets/AssetManifest.json": "0d031a730388f832710698310e655d0b",
"assets/assets/images/about_me.png": "4802c5706deccae959a0b961e06309ae",
"assets/assets/images/android_studio.png": "2c194427c551c3e628064e359ee8ad82",
"assets/assets/images/app_icon.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/assets/images/bigtwo.png": "9f9ab670c734eca146091359468ceb8c",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/breezy.png": "bfb4b131a398b0425b05a4a340ea64c5",
"assets/assets/images/codemagic.png": "8bd5fb29dfde84af45d1eec694f2b2ab",
"assets/assets/images/dart.png": "a8894c189a2795debee21fd0e6d4b24c",
"assets/assets/images/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/images/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/images/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/easyfood.png": "2aa7719acd9d7a0c6002887e9e4a1ff7",
"assets/assets/images/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/images/fastlane.png": "c6645b08a179092aad54138b92955c20",
"assets/assets/images/figma.png": "348f789a20e7b76f44b587cec9418151",
"assets/assets/images/firebase.png": "d12cf916a663b52d01d2e0bbb2e7c18a",
"assets/assets/images/flutter.png": "20ed1ffaf6047de27f152124d114127c",
"assets/assets/images/git.png": "5dad01124c25d19c78aa763d94c6c3ee",
"assets/assets/images/github.png": "f12560820c5070ee4be83c3feb569ce1",
"assets/assets/images/github_actions.png": "3343ef347a3cde358848507f2667b791",
"assets/assets/images/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/images/herfa_logo.png": "e47d842ee2abcf591cbeb5c81bd96197",
"assets/assets/images/home_page_screenshot.png": "e745cbf5853cf0646dc62e0a01542895",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/img.png": "72aa6075995b09e2da67f27980f07b65",
"assets/assets/images/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/images/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/images/nodejs.png": "c502658a509d27b53679b3ef73c0d82f",
"assets/assets/images/obtulus.png": "197ceeaee599a57e00917aadc441f0cf",
"assets/assets/images/plaza.jpg": "b60e39ec87ea28b8803664ec44e53d40",
"assets/assets/images/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/images/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/images/trello.jpg": "f41ffef6dd2f3744aa0701d008fa9b5c",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "c2dccd0ba6df5636ad2e866e1d889f1e",
"assets/NOTICES": "4213a6aac515d83d7fd4beb9fc33d6f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5106e24513918558b7a8af13259cc625",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "8013ca07122f5cc3a522e922135bca8c",
"icons/Icon-512.png": "8808c85aea0f0dbdf36d3072a3883536",
"icons/Icon-maskable-192.png": "8013ca07122f5cc3a522e922135bca8c",
"icons/Icon-maskable-512.png": "8808c85aea0f0dbdf36d3072a3883536",
"index.html": "6017da427d4a4095c134ddef1db0daf5",
"/": "6017da427d4a4095c134ddef1db0daf5",
"main.dart.js": "a024e6d1868c3b8caee3cd654956f8f3",
"manifest.json": "1ed4e023b421b638ffdcb54a19d4ee16",
"version.json": "99b2bdc86afbb17074187951c4c38bdf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
