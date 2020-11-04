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

var precacheConfig = [["2018/06/20/docker入门/index.html","292cc3014697390a0256e94d3b9b42c0"],["2018/09/17/你们都在用IDEA吗/index.html","3b6aa6e9793dacd49bef0807b206425c"],["2019/01/31/vagrant系列(1)/index.html","4956696c6c1ad5b45535fa808f9a7b43"],["2019/04/11/基于jsoup的爬虫实现/index.html","08ade616f48c07cbd355407fd14398a5"],["2019/05/06/Java异常设计/index.html","8d7b9e4cd2f4e1586c152ef391dd0e14"],["2019/06/11/你了解乐观锁和悲观锁吗/index.html","fd3b62b16b00072bf24727fd676cccc3"],["2019/11/05/推荐自己常用的几款IDEA插件/index.html","fbe542d572745f47052577e502b70ece"],["2020/10/31/hello-world/index.html","a11f3bc60a1e9522918e1fc6022cdb68"],["404.html","80bc987db8c123d6a6ce048421de13b8"],["about/index.html","94223d48d577f5a2d8a030e454df49f3"],["archives/2018/06/index.html","c9e1a303bc0b6d635a9d5aea4f58874c"],["archives/2018/09/index.html","860596c841142dc1d4f6f7914196e4b4"],["archives/2018/index.html","5bb5f3317dc977869dd48bd17a0670e3"],["archives/2019/01/index.html","95eca43fde1182a7d09142e1bec6a013"],["archives/2019/04/index.html","40f7ea9865e29b99b421bae9fa009f3b"],["archives/2019/05/index.html","bce36a269f81ff37a800fde72ea4aad3"],["archives/2019/06/index.html","a5799fdce03782107f653825557901a8"],["archives/2019/11/index.html","31a0018c5df5e31d3b269deeda2667f9"],["archives/2019/index.html","f0c226f5c4885e69ffa90cb5e5f7d2a3"],["archives/2020/10/index.html","00e4228035ed8dfc6c36169524f9a94c"],["archives/2020/index.html","8ee790512e37dd88e6dc79253f79d62e"],["archives/index.html","231abe7e8c157a44cccbdeafc1aead96"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["books/index.html","0945b58c4e54ae38f911fa88f159270d"],["categories/IDEA汇总/index.html","3dbfc70843d4dddd748052ceee7705f0"],["categories/devops/index.html","33e2426782280d57a8b0a8d605faa1fe"],["categories/index.html","4e318be642edb8075a6ad199ac6a8603"],["categories/java/index.html","95a99ca790757c71f08555091b3ababd"],["categories/容器/index.html","3568fe58165dff6ba2f66a28e36ae5f8"],["css/index.css","e77e0e2226a9e86e6531a2d185a4bd11"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/eva/index.html","8c4e686bb98fc03c9aa23789394484d0"],["gallery/index.html","9d270d278e4b8bb7f7f33a18280d4497"],["gallery/wallpaper/index.html","2b9a5c976202b706171a1b676d5c8c8e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/alipay.jpg","f2d6a9f558896124b2dd141a016d8f41"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/finder.jpg","032030120cf5fa6e211ca7fc8dfcd036"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechatpay.jpg","d32461f5d025c6d004e2fe61184f4e42"],["index.html","3dd81504979048ed3b10f54ba4d3441f"],["js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","282361a77a588fce7e027e13533c449c"],["live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["message/index.html","318c79275a522c969d4506e55d8008cb"],["movies/index.html","5d47c072b7d6a5fdfb5f792f9fc904a5"],["music/index.html","628ca45b884a45884f55cffb01584de8"],["shuoshuo/index.html","adefd7de1c9de3cda929a66b4e5a292e"],["tags/IDE/index.html","8fe1121610d54f7b354a1b1ef2c3bd0b"],["tags/Vagrant/index.html","3634764df661cbf1be598ae352af2254"],["tags/devops/index.html","03c702677c69a38119c959f135cfa4de"],["tags/docker/index.html","ad158c1f5af0f61c7b6c01ca06ab0a9d"],["tags/index.html","08b43c00855454fc68a152010ed3f48e"],["tags/intellij-idea-Plugins/index.html","8bb9d9a699301967725c74b72234cb76"],["tags/intellij-idea/index.html","02ef01de84418480625d618d0b2c4e5d"],["tags/java程序设计/index.html","6e5151cba12edae6d8c7ddc600c18b60"],["tags/jsoup/index.html","8578bf0c18f8a6c3b18b8828d1ca22dc"],["tags/乐观锁、悲观锁/index.html","8ac30b6b89a75950f03dbfd30fa33f0e"],["tags/多线程/index.html","46629612afaca1ec0e802885c312fd12"],["tags/容器/index.html","47cccf4c94417f7d99f2907b031643d0"],["tags/异常/index.html","f8c9d4deab07ccfc56cdc976a51aa51f"],["tags/爬虫/index.html","f062fa91f5a3d984cbac65becc5365af"],["tags/虚拟机/index.html","e7fd6ebb90ab124f627f68c64ab0612f"]];
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







