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

var precacheConfig = [["2018/06/20/docker入门/index.html","226221270438efdd5ada98d4b0dcaad9"],["2018/09/17/你们都在用IDEA吗/index.html","eff7edb6054f0309d1a079669c6cb13b"],["2019/01/31/vagrant系列(1)/index.html","acc992bc65eaf25cd38636e2a50a97c0"],["2019/04/11/基于jsoup的爬虫实现/index.html","c846d452fe2b45c87000e6aac4144f53"],["2019/05/06/Java异常设计/index.html","9c3b719ed34960abe624b25ab66fc0f2"],["2019/06/11/你了解乐观锁和悲观锁吗/index.html","71ada4915d607a194f0038446a8ed919"],["2020/10/31/hello-world/index.html","d3dccc80c0dfb9dc27fa3ad23b123cb0"],["404.html","0b818ab6e6532629c62a99ac2611f507"],["archives/2018/06/index.html","16abb7991788808c8780bd6bcc58406e"],["archives/2018/09/index.html","c7dff2fb2368a6496b93cc1ad8ac6193"],["archives/2018/index.html","62b9687163e28318df551cb116b2348d"],["archives/2019/01/index.html","4cee9a16b167a338617fd49d4575570f"],["archives/2019/04/index.html","b76517f432e0ae23e2410c74315becd3"],["archives/2019/05/index.html","f0d21aaeecc44838a0902f5ffe8cc9e6"],["archives/2019/06/index.html","55dc2e7f5b553d219b35fca30debd70e"],["archives/2019/index.html","bb79cf3dd1646e5fa567f20eddf2a179"],["archives/2020/10/index.html","df9fa2ab3996fd149ca10a8399e05168"],["archives/2020/index.html","2a67b2b8a5bb101dc6083809fbaf093f"],["archives/index.html","9a10f9bd6efcf5d576e4ec91d838ddf0"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["books/index.html","46b1b9fa335fd3f75ff93848eb83bc1c"],["categories/IDEA教程/index.html","cf672334e5e9b0712248122d5b075a7c"],["categories/devops/index.html","0dbab16bc294d05aa03744661eca1738"],["categories/index.html","881e22e63a84ba77ba1a75315c15529f"],["categories/java/index.html","da2a460e1ea9a4f13964020252d7ce06"],["categories/容器/index.html","30c9123b7f18b4930be0332cd7410ce6"],["css/index.css","b86664b371087a221908d48315dd970f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/eva/index.html","2967ba3b3ae9967d94dfd1b79f51ee4c"],["gallery/index.html","bac479fc530e713669e9ee58fe2740bb"],["gallery/wallpaper/index.html","7ab0a1a08bc7bda505670b293e674ab2"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/alipay.jpg","f2d6a9f558896124b2dd141a016d8f41"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/finder.jpg","032030120cf5fa6e211ca7fc8dfcd036"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechatpay.jpg","d32461f5d025c6d004e2fe61184f4e42"],["index.html","e7ccfc5223e293bd7621f95ea9c1f443"],["js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","5239772ed49a143bb5e8e2b8fa5b7a47"],["movies/index.html","4f8895a3bad0d3023ac5a8ebbb843d92"],["music/index.html","75f6f8ce63a3c4c13fae96f2499e80a7"],["shuoshuo/index.html","6506a57e2112941b793d9ee059983142"],["tags/IDE/index.html","c41808c90f1fe32d9e51c6b9bdedb089"],["tags/Vagrant/index.html","296e8c372dc8fd628e8ec1eb5831d547"],["tags/devops/index.html","fa3bef81c1374d51d2ee7ff13b4acfa1"],["tags/docker/index.html","b9557f89ab5c897e32457623e25d3ffc"],["tags/index.html","a23f4f01e3750e6aafc69531955b6a05"],["tags/intellij-idea/index.html","a9c35a1268571e6f9f417ada7a938836"],["tags/java程序设计/index.html","1861f4c52cbae7f3cefd3f6c69f7c0a9"],["tags/jsoup/index.html","29eca845240f046c80343a22bba98726"],["tags/乐观锁、悲观锁/index.html","856091e28445e92d1ee53012210fa246"],["tags/多线程/index.html","13ec88927d50e42d6b9cc380aa7e753b"],["tags/容器/index.html","acdd19de41ebd5996c9a03a7ac0d8118"],["tags/异常/index.html","9f60e149502f1b2c64fc99ad23f7f388"],["tags/爬虫/index.html","2fae5a629276c49e8f6c4eebc8ba043b"],["tags/虚拟机/index.html","3bb9d28cf01039cdb074efdc461da446"]];
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







