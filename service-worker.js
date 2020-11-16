/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/06/20/docker入门/index.html","5d40f91bfcf426b6674dc6f0f118d24b"],["2019/01/31/vagrant系列(1)/index.html","8778fc8741530cc8272c1ad00789d28b"],["2019/04/11/基于jsoup的爬虫实现/index.html","53de7aa20d7af466a40b25cee394d3e0"],["2019/05/06/Java异常设计/index.html","f1f248350f292cda908ba3197269483a"],["2019/06/11/你了解乐观锁和悲观锁吗/index.html","2d0fb77c641efd44fe115c7b7bfd7205"],["2019/09/17/你们都在用IDEA吗/index.html","993229a61e5207ef6b6109580ed21f4a"],["2019/11/05/推荐自己常用的几款IDEA插件/index.html","3a27c4a2c493bd932b89f2d278519fca"],["2020/10/31/hello-world/index.html","40090c2afbbef0fefa503de7c625e0c2"],["404.html","b2ce5a17681a079757b15b6e2e4b8c66"],["about/index.html","2f0f65b4fc5a531ec6b0a8c7f12e55b0"],["archives/2018/06/index.html","da224759ed9b3c13ecb92960dbf190ee"],["archives/2018/index.html","19e0ce37ea7fcd34eb8d30249902df3c"],["archives/2019/01/index.html","b4ce282162064d0c31f4a688b91e00fd"],["archives/2019/04/index.html","56c80841bc32151e833177e3bf8905d1"],["archives/2019/05/index.html","e4ebc340f6b7b0e637bc06e37e8f3969"],["archives/2019/06/index.html","c15f1b84cc1f92a35e1a0767d3398672"],["archives/2019/09/index.html","a7305fde8962072d45c22558b2dd6063"],["archives/2019/11/index.html","8f681d58ea7276ca8ef3ccefbdc32b5d"],["archives/2019/index.html","03460f2458916fa6c12185cad2abe806"],["archives/2020/10/index.html","11149351a63eeb4d787e7d1d0b8c6a4e"],["archives/2020/index.html","f06db25f035f09f43970275ed187dd76"],["archives/index.html","0023d5ae2e15b0f2af51b24f25e942fd"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["books/index.html","1f85e17512fa9135503c3e9942f01ebe"],["categories/IDEA汇总/index.html","c478c960006c996992b0f8c8f5a774de"],["categories/devops/index.html","c35d3914f56954fb0351c63a3a924095"],["categories/index.html","f19f7ebbdc2797c234adf3703513ad65"],["categories/java/index.html","2b21de3a4fa2a46b73b8d1b4bf521bb5"],["categories/容器/index.html","753e7d1fcbeb16b53a75b6f4d98b6ed0"],["css/index.css","e77e0e2226a9e86e6531a2d185a4bd11"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/eva/index.html","6bbad7d5ce8fd3f731d1ba7074f4bd11"],["gallery/index.html","d2e2d4a9d91383cb395f8ff19246044d"],["gallery/wallpaper/index.html","7ba022294a76c310b895094ddc466c75"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/alipay.jpg","f2d6a9f558896124b2dd141a016d8f41"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/finder.jpg","032030120cf5fa6e211ca7fc8dfcd036"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechatpay.jpg","d32461f5d025c6d004e2fe61184f4e42"],["index.html","92486d78b64178bf0dc5a085150d82ec"],["js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","bcf50fa29e928c4ea33c8eceabcc3e47"],["live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["message/index.html","3bbb194cdbf817075c05f0b05b842703"],["movies/index.html","385977ab816421084aa23105fd8cd7d9"],["music/index.html","281d998cab9108669eeef3e5b935d4ff"],["shuoshuo/index.html","b5259e0fcee3b3d9506f488d14f9ce15"],["tags/IDE/index.html","d5b9f51a2660af385f0e23b858415e6d"],["tags/Vagrant/index.html","ce1a8df4fd75063a01f60ed34af50377"],["tags/devops/index.html","6e442fbdad95d704d456da17727ad925"],["tags/docker/index.html","62a425fb6decb61265bba64273191502"],["tags/index.html","05b8664dbcd05a5089fd469c81407389"],["tags/intellij-idea/index.html","856c4dcfa7cb88e85edf4af30055248d"],["tags/java程序设计/index.html","dc7385fc422de3e620a833c5082ab246"],["tags/jsoup/index.html","435749d8bdd245830920955634bd1b1f"],["tags/乐观锁、悲观锁/index.html","a4235664031ed5e03a6d78042b83c876"],["tags/多线程/index.html","4d273b56b47fbb704f58e89b7affd2ce"],["tags/容器/index.html","98ca2c95bb857c93c99c04d671c88c2e"],["tags/异常/index.html","a2b68a60cf8d4795462a208d1b948a58"],["tags/爬虫/index.html","246b70ff6fd8e444bc496733c7c4e5ea"],["tags/虚拟机/index.html","5c705d8860379e69cb516934dd1de701"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







