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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","4cceecc3ce2a4a810dfbc18b9f36270b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","61a17aae349ce6f8b0d1cfd37fab0c94"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","abfb71875d199094d3cd332ffbc43e42"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","da4d5fe3e094db96c26c7bb56ca853b7"],["G:/Blog/public/about/index.html","5ad9fb635ea988c082ac0484fc1473be"],["G:/Blog/public/archives/2019/07/index.html","d93049573b67a93eec47672322b8bf24"],["G:/Blog/public/archives/2019/08/index.html","e12ffedb7edd0014a39e9f6db29d493d"],["G:/Blog/public/archives/2019/08/page/2/index.html","aa5c7e214050f44e5f2be9f517892f54"],["G:/Blog/public/archives/2019/index.html","35a6919ca2cd911e1f44f65d7e12e38e"],["G:/Blog/public/archives/2019/page/2/index.html","60bbb101d146af69dd4d8abc9d708bf9"],["G:/Blog/public/archives/index.html","58b80f2030141a10bf6e659ad65a2192"],["G:/Blog/public/archives/page/2/index.html","adac3fd567f3fdb06d51d25203abdcab"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","47b1fb42319ac502cc494ebe2080e11c"],["G:/Blog/public/categories/hexo/index.html","c8d9a9472f61028eae517a94333e3346"],["G:/Blog/public/categories/index.html","e66d4ba136eb1f1a02de750142fee441"],["G:/Blog/public/categories/安全工具/index.html","c3cec2479cc2a6faa51d1b7296c8b825"],["G:/Blog/public/categories/思维导图/index.html","9eeee033647314aed92e3c7f80588db3"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","68cb439a0fd14d7972eaaffa9f9dab2f"],["G:/Blog/public/categories/教程/index.html","92f31e428a1852b6b76a89e7f86ff6aa"],["G:/Blog/public/categories/教程/好玩/index.html","648beb43c4a9e4a114a9a8671c48963b"],["G:/Blog/public/categories/数据库/index.html","887d4b889656a429f9062ee8a9066d50"],["G:/Blog/public/categories/数据库/mysql/index.html","b18b79d9afcc4ece8af9e5df6e17801a"],["G:/Blog/public/categories/渗透测试/index.html","88fd84b1216f7c154b538cc945f8d89d"],["G:/Blog/public/categories/记录生活/index.html","331295ebad1723794df2f8e746c8d208"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","8c1e78f089c99d0d63a37e6ff6adbdc0"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","6953ccdb43d69ff3a6c5ec4a0d2e4b56"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","59669ffe2e96ad2550d34bffb5c0d2b0"],["G:/Blog/public/movies/index.html","410dc33d07c587b8fdaa01388d52e9ed"],["G:/Blog/public/page/2/index.html","67bc50de7559518dcea8b21ec6d66c24"],["G:/Blog/public/pan/index.html","f74d04cea5feb77dcdb1930d6d2eb3d6"],["G:/Blog/public/tags/Windows/index.html","32f250e789c7a6d4b3e849445abe1567"],["G:/Blog/public/tags/github/index.html","029448378f434b4c2e9e8d89a1aff747"],["G:/Blog/public/tags/hexo/index.html","26c91e9d3344d869862a0f4cbfb5f7a3"],["G:/Blog/public/tags/index.html","e6273718e0a4a81aebb65a7d85c9ee36"],["G:/Blog/public/tags/mysql/index.html","5e1cf49632a69b7173eea966f7567ad7"],["G:/Blog/public/tags/onedrive/index.html","9f3d33f8812e42139f992f2a3ff9c3c1"],["G:/Blog/public/tags/oneindex-onedrive/index.html","a1307ca1bd89771ba77679858730f4ee"],["G:/Blog/public/tags/oneindex/index.html","701be38a18ee73c4ceac15351b158837"],["G:/Blog/public/tags/个人网盘/index.html","db698c0e2d2c3ccc47b67e4f1962a747"],["G:/Blog/public/tags/主题功能/index.html","7131374f078af5629e97c828cd7f2de0"],["G:/Blog/public/tags/博客/index.html","425ac988548c09af38d1895b08266911"],["G:/Blog/public/tags/应用程序测试/index.html","e12e89e2e4d45ccc595ba1788742e05c"],["G:/Blog/public/tags/数据库/index.html","d9f5393b8760a1d58df5745d5c413549"],["G:/Blog/public/tags/文章模板/index.html","d6d0f2fc69829acfa542690385e5f5b0"],["G:/Blog/public/tags/方法论/index.html","ed4c2d08261621bccfdccf057bde4a10"],["G:/Blog/public/tags/渗透测试/index.html","f7b165d33eb12e231cf04505b084a370"],["G:/Blog/public/tags/生活/index.html","2562fff55f3f8c6ca8fa8db39157e2ca"],["G:/Blog/public/tags/解决问题/index.html","133cf0af9a49c1ddab2e44ea117bf6f2"],["G:/Blog/public/tags/豆瓣书架/index.html","34c75c53a5e490f754e81040463759a5"],["G:/Blog/public/archives/index.html","69106b7f577232ca652262a9f0956dc9"],["G:/Blog/public/留言板/index.html","16d57693f533657bd3f4e539ac69d0d0"]];
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







