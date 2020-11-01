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

var precacheConfig = [["2018/06/20/docker入门/index.html","226221270438efdd5ada98d4b0dcaad9"],["2018/09/17/你们都在用IDEA吗/index.html","eff7edb6054f0309d1a079669c6cb13b"],["2019/01/31/vagrant系列(1)/index.html","acc992bc65eaf25cd38636e2a50a97c0"],["2019/04/11/基于jsoup的爬虫实现/index.html","c846d452fe2b45c87000e6aac4144f53"],["2019/05/06/Java异常设计/index.html","9c3b719ed34960abe624b25ab66fc0f2"],["2019/06/11/你了解乐观锁和悲观锁吗/index.html","71ada4915d607a194f0038446a8ed919"],["2020/10/31/hello-world/index.html","d3dccc80c0dfb9dc27fa3ad23b123cb0"],["404.html","b210f49625328cbd9241fd19e39203d1"],["archives/2018/06/index.html","3c9b6a1eec40fa81cf8ca47fc198e9f2"],["archives/2018/09/index.html","40d778cc3d74d22d28c8ae9741dcccca"],["archives/2018/index.html","e158cfe7ad531c8146f9dbe2428f6a39"],["archives/2019/01/index.html","aa8c62fb79f28810a355d35bd916c597"],["archives/2019/04/index.html","09999d445694d88c2ac97054075c9e98"],["archives/2019/05/index.html","4cf80710ee6a358db3e9011fb8a07c7b"],["archives/2019/06/index.html","a5974cb3fce8bb49d2ce21d935c11a1c"],["archives/2019/index.html","4c62238c82d72c526cc6405238c815cf"],["archives/2020/10/index.html","226f26aba73b45d6133bae88078778d7"],["archives/2020/index.html","af659a2a5c3935a790dc8777943f51fc"],["archives/index.html","f153c1c9be9103f700f18e6ff1de7fb2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["books/index.html","db846604384a3e505eb8f3a75160c035"],["categories/IDEA教程/index.html","8d4b7962e65b42510fe73f5f9d0c79c4"],["categories/devops/index.html","21675394e7c9a35d6b2e8d0dfc50c0aa"],["categories/index.html","9c84785f45832b36c9394107028bcb70"],["categories/java/index.html","137cfaf34aa9441661149a580209038f"],["categories/容器/index.html","9d5799425732f53a0c4c917edc0dbda0"],["css/index.css","b86664b371087a221908d48315dd970f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/eva/index.html","6eef06e7d7119db1edc73a91637e61d7"],["gallery/index.html","2399443b1a4fb1122dee79420321c284"],["gallery/wallpaper/index.html","cf65c91bf3b4b738b9ac9b60ed63b8b1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/alipay.jpg","f2d6a9f558896124b2dd141a016d8f41"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/finder.jpg","032030120cf5fa6e211ca7fc8dfcd036"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechatpay.jpg","d32461f5d025c6d004e2fe61184f4e42"],["index.html","d8a3c4bc2358c2a00f8308f98eef44eb"],["js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","15fc3850c8f0abfbec714ee38127d662"],["movies/index.html","4091e57e6b211d5144a9cc52ff34d8f0"],["music/index.html","c57ffdcd68433557d20e3ff4374125dc"],["shuoshuo/index.html","fab6b5b847bc006b8aa78b90f16292c5"],["tags/IDE/index.html","34cfdeffd9e1ec7ab41162c446b46543"],["tags/Vagrant/index.html","3d494f1b6f02f511912cd5db0438a66f"],["tags/devops/index.html","9082702444b0a6682425b320a3238839"],["tags/docker/index.html","68dec8c0678d36a875c21fcc8471b33c"],["tags/index.html","9413b19c6aa65bcd6ad9b26b58aec45d"],["tags/intellij-idea/index.html","5116434e1c470443be8854ecd709251c"],["tags/java程序设计/index.html","d4918af2ac8aadf95ce4ad43ef1a2f4d"],["tags/jsoup/index.html","d4019d641f030a5f91ed48fe6362fefb"],["tags/乐观锁、悲观锁/index.html","8680225030f0bd75a0f59456ab8dd5db"],["tags/多线程/index.html","3a15ecbba1e5ba59360307cca79e5f7d"],["tags/容器/index.html","af506d244609fbcb3bd33127900ce9ae"],["tags/异常/index.html","bb43f6e8642664f5e0654ade1fb0d60c"],["tags/爬虫/index.html","211ac08d5e0f9ec4f3b22d41fa5d896b"],["tags/虚拟机/index.html","d4454a21243fbdfa28845a5448737b32"]];
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







