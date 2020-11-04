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

var precacheConfig = [["2018/06/20/docker入门/index.html","292cc3014697390a0256e94d3b9b42c0"],["2018/09/17/你们都在用IDEA吗/index.html","3b6aa6e9793dacd49bef0807b206425c"],["2019/01/31/vagrant系列(1)/index.html","4956696c6c1ad5b45535fa808f9a7b43"],["2019/04/11/基于jsoup的爬虫实现/index.html","08ade616f48c07cbd355407fd14398a5"],["2019/05/06/Java异常设计/index.html","8d7b9e4cd2f4e1586c152ef391dd0e14"],["2019/06/11/你了解乐观锁和悲观锁吗/index.html","fd3b62b16b00072bf24727fd676cccc3"],["2019/11/05/推荐自己常用的几款IDEA插件/index.html","ba52003340295dad52b741306b898b8e"],["2020/10/31/hello-world/index.html","a11f3bc60a1e9522918e1fc6022cdb68"],["404.html","c32b27b815f2fdbc1bcdddee4ef21f9c"],["about/index.html","657f35f5cd4cc9c8803d4c46d85df208"],["archives/2018/06/index.html","8e5e3dd1b3d685a1cfcf54606b71253e"],["archives/2018/09/index.html","2fcbab1c59e024447c0ad5b486e27b60"],["archives/2018/index.html","f352f5a9897009c7ddbb8dd1b4a57afd"],["archives/2019/01/index.html","2a822f6965a15b7a538d912ac9d2d703"],["archives/2019/04/index.html","f10743033ea49ca76bcc84b4d4314cc4"],["archives/2019/05/index.html","50ae8c846cdc6d55435493d5a9e0b4ea"],["archives/2019/06/index.html","fd033f02b53ca1743a6965de5ad233fa"],["archives/2019/11/index.html","4bd6e40a26cd6eb120553338b7633395"],["archives/2019/index.html","746f67bb6ffba5e1e1d21150a198a33b"],["archives/2020/10/index.html","93eb08b019870a6eb7e82a3ea276af37"],["archives/2020/index.html","3f283229586b4c516563b2e3c9a4b46d"],["archives/index.html","2b7eedfdcc0873c74786e5ca10c24943"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["books/index.html","c57e1fa5ca0e2952c96e01f8d3c0fe56"],["categories/IDEA汇总/index.html","20facf7fc0305dcd31d5f544b6a61357"],["categories/devops/index.html","694405f5e7fb9c461399ab81ecf14e96"],["categories/index.html","8f35090a2574dd15a8df5f8b5d0aced8"],["categories/java/index.html","8ac335bab7e19beed4d6ef2d1bb68be5"],["categories/容器/index.html","149e20c7c87522effbea2cbfd45e1ad7"],["css/index.css","e77e0e2226a9e86e6531a2d185a4bd11"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/eva/index.html","8736e267ff2b5356c6fcd4a331dc7968"],["gallery/index.html","661d9f0d7b05251b5c34dc2522954082"],["gallery/wallpaper/index.html","b96196d117c9cbe22fe78140382963e7"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/alipay.jpg","f2d6a9f558896124b2dd141a016d8f41"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/finder.jpg","032030120cf5fa6e211ca7fc8dfcd036"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechatpay.jpg","d32461f5d025c6d004e2fe61184f4e42"],["index.html","80d1731efb254f62dfe35b0e16562604"],["js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","560cf230b3fb2ced9eaf8dc7bb1df30f"],["live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["message/index.html","f92671d55153f2fd2fec53f3ee2092fc"],["movies/index.html","7833bb68577b91138a87414be06c0303"],["music/index.html","d9aa51a40ce3b84007b6774349f23ed5"],["shuoshuo/index.html","58b67f4a185e9b590803d2740b12d360"],["tags/IDE/index.html","1ee1d2b53766ed97708f95b8e7db121e"],["tags/Vagrant/index.html","8c6c631c791a66193950ef3dc73c0492"],["tags/devops/index.html","1141baad7e6188faeea26262b07e4b88"],["tags/docker/index.html","31493f8430937121926cf7b165d8fd47"],["tags/index.html","ad15a624ecb67d1720827b6c9a71792b"],["tags/intellij-idea-Plugins/index.html","f966812b75e78e1974cdbcfe3dcd99c1"],["tags/intellij-idea/index.html","87cedcad2a1c2c7cd17e5561f538e2e2"],["tags/java程序设计/index.html","74d13c7170eee4cc6f88c3f15e857753"],["tags/jsoup/index.html","0295d64bfa07fd30a68e21fbfc8ca6c0"],["tags/乐观锁、悲观锁/index.html","b51abee81c6501f94b2f723a7daeb80c"],["tags/多线程/index.html","99e33cc6a2bac58240808464f669233a"],["tags/容器/index.html","0fffbd4963c3768ae39a65eae679fb5b"],["tags/异常/index.html","2c31ee263d1ab358f6c995372c388856"],["tags/爬虫/index.html","673dc04d953087a33205fc040364dcca"],["tags/虚拟机/index.html","cc6c2136e968d02d87cb97d60bf8794a"]];
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







