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

var precacheConfig = [["2018/06/20/docker入门/index.html","226221270438efdd5ada98d4b0dcaad9"],["2018/09/17/你们都在用IDEA吗/index.html","eff7edb6054f0309d1a079669c6cb13b"],["2019/01/31/vagrant系列(1)/index.html","acc992bc65eaf25cd38636e2a50a97c0"],["2019/04/11/基于jsoup的爬虫实现/index.html","c846d452fe2b45c87000e6aac4144f53"],["2019/05/06/Java异常设计/index.html","9c3b719ed34960abe624b25ab66fc0f2"],["2019/06/11/你了解乐观锁和悲观锁吗/index.html","71ada4915d607a194f0038446a8ed919"],["2020/10/31/hello-world/index.html","d3dccc80c0dfb9dc27fa3ad23b123cb0"],["404.html","73e7b11b4d53edf6fbcbb7fc6cb667ce"],["archives/2018/06/index.html","bfbc3f0573071ec7453168de492e8176"],["archives/2018/09/index.html","cc87b36a1e6d5dd85ab95c17bd82e750"],["archives/2018/index.html","0a96e1e0aadff2be448bd16462333e18"],["archives/2019/01/index.html","b9b3d1a2439bfbb6a876b8dfd4eeeafd"],["archives/2019/04/index.html","5dc7293e32a2b2ea40fe9cf555778e66"],["archives/2019/05/index.html","f80aca4b761aea2a7fdd15c4f02350be"],["archives/2019/06/index.html","d61bfc3f92c92af0c6b0917b2785f78f"],["archives/2019/index.html","ca1d39a70c1e9902298ca46ac6c4e5d4"],["archives/2020/10/index.html","05e0d229d8902664bcc0688a138967e3"],["archives/2020/index.html","abb40ab2760e4fb7a61a31e84e3af229"],["archives/index.html","2693bb1969afe3da9ab38244507724c4"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["books/index.html","48c58c0a4d2a009620c83ae2b03f2113"],["categories/IDEA教程/index.html","c762d911deb937946c510e6547a4c4c3"],["categories/devops/index.html","7c7430b30cac3d3dcd7f11d000e1b97b"],["categories/index.html","aea716070d22f0f7a6a1458155d3951f"],["categories/java/index.html","f15c9338aa4aaf2f724097d044c7328b"],["categories/容器/index.html","b2b445a708b5abdbd073360f62d2db3d"],["css/index.css","b86664b371087a221908d48315dd970f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/eva/index.html","09622f674be072b4dc38b10b37a5b7f7"],["gallery/index.html","4926b42d9aeb12663b665115476c61df"],["gallery/wallpaper/index.html","fc5e6443939893ff8df5afa4b3104af2"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/alipay.jpg","f2d6a9f558896124b2dd141a016d8f41"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/finder.jpg","032030120cf5fa6e211ca7fc8dfcd036"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechatpay.jpg","d32461f5d025c6d004e2fe61184f4e42"],["index.html","e6a7b73719159d81141bb04039a63aa7"],["js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","d6ceeab70ee7096323d703811edfdf67"],["movies/index.html","5d2762b2eebc57b5df841ad9e539740c"],["music/index.html","007b7db158b5e15ff9f826253dcae58d"],["shuoshuo/index.html","28cd00d38a4e9b22851ce99d23a3665b"],["tags/IDE/index.html","835b0e9c86c8e50848575f5e40b6c411"],["tags/Vagrant/index.html","d6016c910ba982ca4459e1493f4b0034"],["tags/devops/index.html","b9fefc1ef24a2d7c062f4b583518074f"],["tags/docker/index.html","d54241a3caff633abba10d58b2717d1c"],["tags/index.html","29e7a075f0a711ec0d470e2a2a50e308"],["tags/intellij-idea/index.html","47cb47f1fb6875acd1bd4e2bd8f3fc10"],["tags/java程序设计/index.html","9bfc0507c6f7cce2bda1d0d57be80164"],["tags/jsoup/index.html","78a3609557e880de4d75cb78e220025f"],["tags/乐观锁、悲观锁/index.html","44a1fcdb5c0ed8575d31a1f183acaf74"],["tags/多线程/index.html","a2506bd85650e9125d98cf539be410de"],["tags/容器/index.html","c344c41574658a28cc99c4017a32b134"],["tags/异常/index.html","6ae54efc6587c0260ba5fc260915d74c"],["tags/爬虫/index.html","3dde7a9d1fdf90730d91bc935a4f2864"],["tags/虚拟机/index.html","510d635cd64990cf945c64ed0ab8bb1a"]];
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







