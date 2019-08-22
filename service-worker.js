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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","4cceecc3ce2a4a810dfbc18b9f36270b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","61a17aae349ce6f8b0d1cfd37fab0c94"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","357b6c7246c09a2d7e46c7ae28a3c33d"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","c285f158ed7724a5cc108f00dcb0aa53"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","dfa6baacdcb1c0623ad0a35ef0432531"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","6ccc1b2d0b33eabf439fed440220629e"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","059ae99ad019feffba113e8a12e6fe35"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","8e0693bb3a24910ff186a81c2ca1774a"],["G:/Blog/public/about/index.html","56cfea909ba7346c927fbed5eedf9054"],["G:/Blog/public/archives/2019/07/index.html","3ef040ba45fcf6051e3e1f5836fa3a66"],["G:/Blog/public/archives/2019/08/index.html","a810dacda4cc4012f43f568bf46d96ed"],["G:/Blog/public/archives/2019/08/page/2/index.html","84b854547cfd9d73397694bd810e62c2"],["G:/Blog/public/archives/2019/index.html","7b214d38e15dd9238af5972d3f0f6c07"],["G:/Blog/public/archives/2019/page/2/index.html","9f8cab0fc913785779196f9e294f3bd4"],["G:/Blog/public/archives/index.html","a88bdc62b2fbaa08045cfbac1945aee4"],["G:/Blog/public/archives/page/2/index.html","131523974192598c75e11ddafc46beae"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","47b1fb42319ac502cc494ebe2080e11c"],["G:/Blog/public/categories/hexo/index.html","ec917463c1afce15ec51de9dfa2001fa"],["G:/Blog/public/categories/index.html","01a2452dee2a52448db72e04a15d9f86"],["G:/Blog/public/categories/安全工具/index.html","2368314e45c146dec05bed07ee37a349"],["G:/Blog/public/categories/思维导图/index.html","c1e89693bbd5de0f3b8bf08dee646594"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","8b050022528c37a9f0f64098084b5ee5"],["G:/Blog/public/categories/教程/index.html","a1f66f8f95a645092c9413acc4bbf338"],["G:/Blog/public/categories/教程/好玩/index.html","286890d8695118aaec2c5faac6bdb7d5"],["G:/Blog/public/categories/数据库/index.html","35c888e4e8351a34705ca730d6652902"],["G:/Blog/public/categories/数据库/mysql/index.html","f31d280f47b6fc406fc1b165cdbadae5"],["G:/Blog/public/categories/渗透测试/index.html","38faf69c62a16fdc22b9222f243f3055"],["G:/Blog/public/categories/漏洞案例/index.html","cde0bb18969f7b3d1783748bcb67e392"],["G:/Blog/public/categories/记录生活/index.html","0ab2a9802b2fc5fcddbde41a4060a1f8"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","4846f2dfb57cb202065adf7a9fd3ff59"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","6baf200910a62c50857a30213a0390b8"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","ff79fa91ce42525d65de2da01833e6d2"],["G:/Blog/public/movies/index.html","410dc33d07c587b8fdaa01388d52e9ed"],["G:/Blog/public/page/2/index.html","73c1f75fb146d5ec9a03d4528162274f"],["G:/Blog/public/pan/index.html","6c7f0586d1204aa09be7956008f0da83"],["G:/Blog/public/tags/APPscan/index.html","48c5ded307389d39ddf23a6109ec2364"],["G:/Blog/public/tags/LADP/index.html","7dcbec3525580e359223b08803ee41da"],["G:/Blog/public/tags/Windows/index.html","fef6b92a518a67f55c0e5b9aa31ceb1a"],["G:/Blog/public/tags/github/index.html","6c13495ce53f28b1b24c731df4a672b9"],["G:/Blog/public/tags/hexo/index.html","1dadf8f510d39a4acefb4e11f1fe0804"],["G:/Blog/public/tags/index.html","af556726bf6a43e09cdc8a47c800351e"],["G:/Blog/public/tags/mysql/index.html","4f5d1ba7b13be4f12e6972fc72dbbb0d"],["G:/Blog/public/tags/onedrive/index.html","4c6ce9a2be8ef515b4c800b7a846c45f"],["G:/Blog/public/tags/oneindex-onedrive/index.html","c4be768bf12dcec043be4e9a9d092fd0"],["G:/Blog/public/tags/oneindex/index.html","7f355d53e071f9b126efa9fb12ccdbcf"],["G:/Blog/public/tags/个人网盘/index.html","3fce8059cee5c0724946eddf2b834213"],["G:/Blog/public/tags/主题功能/index.html","7ae5e01b1b142242ee4272f51ba9bdae"],["G:/Blog/public/tags/博客/index.html","8d6ad1c7384e180f4a547c3735370363"],["G:/Blog/public/tags/应用程序测试/index.html","eb9d8e83338cb816807319d747cc81ad"],["G:/Blog/public/tags/数据库/index.html","ba1d3d418a6ca7d98aad2001d47a5ac8"],["G:/Blog/public/tags/文章模板/index.html","fac64cc90c1a4066b34858fd36b0d055"],["G:/Blog/public/tags/方法论/index.html","b5d34a61d3a0fea9509cfcb4078d781b"],["G:/Blog/public/tags/渗透测试/index.html","1beba704ed99b05386a515eb7958c16a"],["G:/Blog/public/tags/漏洞案例/index.html","bfc7aa5db74950389f14901cac56a1c5"],["G:/Blog/public/tags/生活/index.html","079ea4f20dd21d809e0a1673a2d61a9f"],["G:/Blog/public/tags/解决问题/index.html","acf7529b727c806845a8a9e7089cc062"],["G:/Blog/public/tags/豆瓣书架/index.html","e052251a2647544415098923bbbd487e"],["G:/Blog/public/tags/面试/index.html","8bc2c2821d8daf13101bc7863e5724b3"],["G:/Blog/public/archives/index.html","36a7f318279e650acb84488e739b78f7"],["G:/Blog/public/留言板/index.html","cc43c861b07fdb8df01b7737116369f6"]];
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







