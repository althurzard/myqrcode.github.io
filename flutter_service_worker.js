'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3f4982f8931046b2a4f65594b67bc30f",
"index.html": "f1f394c2fa25bdbc4d7f764d986e9220",
"/": "f1f394c2fa25bdbc4d7f764d986e9220",
"main.dart.js": "4adcfaaeef91b0ff7919430732a87392",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"assets/AssetManifest.json": "af57dd6bdbbda8873ed1dc47c97d75f4",
"assets/NOTICES": "65c4a036d505659c7194d2f74a7c5ecf",
"assets/FontManifest.json": "f169834e9ecab13648429f2d799b5628",
"assets/AssetManifest.bin.json": "866be70bf779cc9541c3dbd82a7fcee1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp%255BFILL,GRAD,opsz,wght%255D.ttf": "9f9c257f1bc595b8b14eae8eb34ad0ba",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined%255BFILL,GRAD,opsz,wght%255D.ttf": "acb4218341ce6b7cbd1f9ade1a315574",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded%255BFILL,GRAD,opsz,wght%255D.ttf": "93a5294981f69056e808e3357f6c9b18",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/camerawesome/assets/icons/1_1.png": "9fccda0fa73f4e7870fc9db46a61b8f5",
"assets/packages/camerawesome/assets/icons/16_9.png": "ee01c5857314518ac7f3e31d891ae436",
"assets/packages/camerawesome/assets/icons/4_3.png": "0091aca9a18eb33b968ec3abf62699a3",
"assets/packages/camerawesome/assets/icons/minimized.png": "1589a3aefe13c85c8bf2296863881c3d",
"assets/packages/camerawesome/assets/icons/expanded.png": "b8bce8882199b9e134b7b2d102317d3a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f47684e52749e16fab18e9c71cbea41b",
"assets/fonts/MaterialIcons-Regular.otf": "bf130178f379f1de92b9f17ded34b53c",
"assets/assets/images/Loader.png": "1adab134ed212b84be1ebf44cccafaad",
"assets/assets/images/happy.png": "2c9695674f47d07a23688238118dc072",
"assets/assets/images/support.png": "9a79cd0593ec9a529137325bceafe3ea",
"assets/assets/images/rgb.png": "ac02dec85a38377a3bfb64f056272907",
"assets/assets/images/step3.png": "6a847ed65c1d63b5f8ff6c76cb4ce6b9",
"assets/assets/images/step2.png": "c3131e914c7bee1f2052f51cf9d4c195",
"assets/assets/images/Pattern_2.png": "999a8cdb026bee1df4403d4794f86337",
"assets/assets/images/step1.png": "4b8f54b0f9c1028bc1db92a7cab53758",
"assets/assets/images/zalo.png": "d7c3bc1b998d8c0eab67f52ebe91c800",
"assets/assets/images/step_es3.png": "f07e3aba0430f7438cf1d98ee59f8992",
"assets/assets/images/2.0x/happy.png": "f5e29156d74fbb56ed415621e108d3aa",
"assets/assets/images/2.0x/support.png": "ec16912a051a93767bc0bce71e52b154",
"assets/assets/images/2.0x/rgb.png": "c915bb6c4ff499830872b0a7c0af387a",
"assets/assets/images/2.0x/step3.png": "f04657d7b60afe6e25a5d97ac36ea789",
"assets/assets/images/2.0x/step2.png": "ea16cbd5b718f725eb95827986397138",
"assets/assets/images/2.0x/Pattern_2.png": "0b750e0b5d0c69ee163f868affcf747c",
"assets/assets/images/2.0x/step1.png": "a60bc7766ba16147d9fa1200d6ba1756",
"assets/assets/images/2.0x/zalo.png": "89336f68d64f0774996006152ed61832",
"assets/assets/images/2.0x/step_es3.png": "f589ad9338d803e33e105f737e9bab78",
"assets/assets/images/2.0x/step_es2.png": "daff52e4c89a224efed21eb51196bccc",
"assets/assets/images/2.0x/step_es1.png": "77b5446764b17b6ea9fa7abb776191f3",
"assets/assets/images/2.0x/happy_selected.png": "9971b6ba1da7b3ac5e87f3d88679a5ea",
"assets/assets/images/2.0x/step_es4.png": "49777a5d685bb95ca23fead72557bf57",
"assets/assets/images/2.0x/excited.png": "6b212f073820521d247d91d44414dbca",
"assets/assets/images/2.0x/Pattern.png": "25c6f962982e63a4703ac6cb3e740104",
"assets/assets/images/2.0x/bad_selected.png": "08b06ca8bffcc5e6d7ad14d9ec6b5380",
"assets/assets/images/2.0x/excited_selected.png": "e720760d3ffce9b06a3ed0401947ea2b",
"assets/assets/images/2.0x/not_good_selected.png": "6d34e6a97d183932c1e5a79fac92ab93",
"assets/assets/images/2.0x/no_grade.png": "923ab279efdf0764855093b9077e437c",
"assets/assets/images/2.0x/grade_3.png": "6b6676dddc512545c4df0973758607f3",
"assets/assets/images/2.0x/grade_2.png": "9a8ea9121a0ef3a436d0179e3c347e20",
"assets/assets/images/2.0x/not_good.png": "6572a9ba6c0545fcbc6d0d0c951b43c6",
"assets/assets/images/2.0x/grade_1.png": "e4f25cd57a22d5cc00f47953f0599bca",
"assets/assets/images/2.0x/LaunchImage.png": "5cbde0007aca793822a5ce1c66b7240a",
"assets/assets/images/2.0x/grade_5.png": "26848a0faa03d458d038d2744efea8af",
"assets/assets/images/2.0x/bad.png": "1d41d284a38724261d553ec4a18db4e8",
"assets/assets/images/2.0x/grade_4.png": "e91dae07d6cbb8e19da375b1f7c78518",
"assets/assets/images/step_es2.png": "9d127dcdc59f1c4dbce52bdcd9545b56",
"assets/assets/images/step_es1.png": "607c4786becbf0c8aae607c46774a11b",
"assets/assets/images/happy_selected.png": "1a48582d5060320155c26b1ad8345929",
"assets/assets/images/step_es4.png": "9c87347ffa1d8076b2e6c25e86cf8c09",
"assets/assets/images/excited.png": "3b7849b513a46b0ebf1fcb666d8d3080",
"assets/assets/images/Pattern.png": "ea83a2ad4ad06720ed6dbf390ae84d4e",
"assets/assets/images/3.0x/happy.png": "4b556872ab50e5eb77e088c840fd263c",
"assets/assets/images/3.0x/support.png": "bb8672009f39accf1273667e42bf0f16",
"assets/assets/images/3.0x/rgb.png": "f427be9ac54e2fd6d721aeeba73557a9",
"assets/assets/images/3.0x/step3.png": "551b049f7918139335f449c17d154366",
"assets/assets/images/3.0x/step2.png": "f5fba5c3108e5bdd126909072a2288d7",
"assets/assets/images/3.0x/Pattern_2.png": "96688d132e83efbc9672aa8451a62656",
"assets/assets/images/3.0x/step1.png": "ca037da6ad8edfaad22a88a63b8a3b85",
"assets/assets/images/3.0x/zalo.png": "1eddf34f66f59f1cf029d06bef3ed563",
"assets/assets/images/3.0x/step_es3.png": "62fabaa4e7041980521ff6620c4506f3",
"assets/assets/images/3.0x/step_es2.png": "f86809596b9463eb19a3f0ddd3e1c0bc",
"assets/assets/images/3.0x/step_es1.png": "4e374886edeaa38038cf9f7fdce6d241",
"assets/assets/images/3.0x/happy_selected.png": "e5c8a9d9c11f967a97c9ef51ea72a8ea",
"assets/assets/images/3.0x/step_es4.png": "a4a0aa558de58236ba4c751805d5e280",
"assets/assets/images/3.0x/excited.png": "ba7756054c9e7c95a3ad75deb6f49ade",
"assets/assets/images/3.0x/Pattern.png": "bd6fa22e1a6ec23d757c0cd59cf28bd7",
"assets/assets/images/3.0x/bad_selected.png": "19c2c192bda2dfb694eaebed55f96c6b",
"assets/assets/images/3.0x/excited_selected.png": "992e5ba9c3d902760d483303fb4a4235",
"assets/assets/images/3.0x/not_good_selected.png": "abc8e0bd39d2c1b1e2eb119d340f0639",
"assets/assets/images/3.0x/no_grade.png": "dd2865a302e90dfa286d9b1581f1d7b9",
"assets/assets/images/3.0x/grade_3.png": "1bfb48121e8b240225e4ddcd12c564a9",
"assets/assets/images/3.0x/grade_2.png": "0e02773df406ff8b3f0e66a783b996a5",
"assets/assets/images/3.0x/not_good.png": "ff2770f7eeae5c6599df1286fa27cd22",
"assets/assets/images/3.0x/grade_1.png": "316179bf633fe08ff700208303c06787",
"assets/assets/images/3.0x/LaunchImage.png": "d51d0f2b80ac0b61017a72c4ff26e4d6",
"assets/assets/images/3.0x/grade_5.png": "ad47bb0ba0b283a475cdb5a8fe0fcfb8",
"assets/assets/images/3.0x/bad.png": "7b6133f85c2f67e15966288426477754",
"assets/assets/images/3.0x/grade_4.png": "800753cdbd4f367faa6d8aaa914bed8f",
"assets/assets/images/bad_selected.png": "5d113dc70656b7f1f236a46526713c2a",
"assets/assets/images/excited_selected.png": "0f5db2a7d931d4f23aa7939e1bc2307a",
"assets/assets/images/not_good_selected.png": "5d9c337687bd523f510018fa975ecea1",
"assets/assets/images/logo.png": "18e7d055972ac0e5d46d46f41b53b7bd",
"assets/assets/images/no_grade.png": "33adcdcfa0d1f80335fd7d47730c627b",
"assets/assets/images/grade_3.png": "6ce26756a2aa2feffc8c80f8f3bf6397",
"assets/assets/images/grade_2.png": "c4c28c08b48a3852bf53b25ea57d71d4",
"assets/assets/images/not_good.png": "8ddbfeb2b4db20a2e5de235a269ec8ce",
"assets/assets/images/android12.png": "c114858be130e747156c8ef35c7812ff",
"assets/assets/images/grade_1.png": "22973103bdb34c05c41c4e33badcefed",
"assets/assets/images/LaunchImage.png": "e1df797ef91734e3075a07ad01b5ed8a",
"assets/assets/images/grade_5.png": "74a67c40f8e9c48ba169c92079c43f8a",
"assets/assets/images/bad.png": "4ffbe3d0011b8422737db064017403a9",
"assets/assets/images/grade_4.png": "7c18e83dfbdcd126ee9a40dd2091b636",
"assets/assets/lotties/landscape_to_portrait.json": "5262e681e272d34d50553ab0f0099544",
"assets/assets/lotties/device.json": "ed6f6c591fd25b1017da1f14e3bdca8e",
"assets/assets/lotties/prepare.json": "d4b534413739e2b6cd2dd5a68bef4d85",
"assets/assets/lotties/potrait_to_landscape.json": "d21cbe0ec2b8aff151db54b6df003b3e",
"assets/assets/sounds/s440Hz.mp3": "9c98adecad4a97591ad2cbed5794afae",
"assets/assets/sounds/s1kHz.mp3": "55240b9efe3e07aeb14776f6e57be494",
"assets/assets/sounds/beep_sound.wav": "265b460241dbf1e95e3cc2e5c12de34b",
"assets/assets/sounds/short.mp3": "ef903d4c8bbd5a1b904143d9889946d8",
"assets/assets/sounds/s8kHz.mp3": "30d5d7063d657dda7771c71dc6c8195e",
"assets/assets/sounds/s12kHz.mp3": "9040251dbafff5bfd07c631368791e3e",
"assets/assets/sounds/s2kHz.mp3": "dfd578fb58aec9aec6df16aec2d07abd",
"assets/assets/icons/LOGO.svg": "c5198dfd6e94e733ecd50eca60c65c57",
"assets/assets/gif/power_1.gif": "fea52480077385484be88f7cb7f973e2",
"assets/assets/gif/power_2.gif": "723c141677081a1767053521574d4af2",
"assets/assets/gif/power_3.gif": "ce112c11a9a2881a9d2477dd45b05b02",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
