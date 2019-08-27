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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","4cceecc3ce2a4a810dfbc18b9f36270b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","61a17aae349ce6f8b0d1cfd37fab0c94"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","a14eb181b0e858e7ee3a3cd498d5c76c"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","cd00046c4fba990107851c582da7f748"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4dadcb8b5ba2dd9b526a8ca3aeafdfde"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","5ed3a1018f60fc4f78d2c22e2b083611"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","84479ad24b25e2721a79b8fadfbac808"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","c1fd9a9497beadb1361c7ac29e823515"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","5019d47a7250832c90930da061cfca69"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","c631bc38f13dbdd81a1a5e9349dcdad2"],["G:/Blog/public/about/index.html","d08bf642b7797dd2c8c3a1162370e939"],["G:/Blog/public/archives/2019/07/index.html","606e2e0cf54f3261fd460a70250b2bf7"],["G:/Blog/public/archives/2019/08/index.html","b39fb5656f936b1ce8ed2e02d027c33e"],["G:/Blog/public/archives/2019/08/page/2/index.html","ddd4ec6c226090f906ff4d48c33469e1"],["G:/Blog/public/archives/2019/index.html","d0c1f74707620c8ad01f18b21cbef8b6"],["G:/Blog/public/archives/2019/page/2/index.html","3c0f6e7909ccdb5a454ca6b377a2ba71"],["G:/Blog/public/archives/2019/page/3/index.html","de2cee376e89b0cfca3bf9115c5991f5"],["G:/Blog/public/archives/index.html","67edf72b0099133978ff613f8811f966"],["G:/Blog/public/archives/page/2/index.html","2e30004faa0fe917273e744ead4048b3"],["G:/Blog/public/archives/page/3/index.html","458a2039d736c8323623c2fedc572ad5"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","2e8b90d50c07874a695ab2d52c19ccc0"],["G:/Blog/public/categories/hexo/index.html","238031c3983a1c64fe9253d0179306e9"],["G:/Blog/public/categories/index.html","db8f1e747f84731e81477cc4d89926c0"],["G:/Blog/public/categories/安全工具/index.html","b4b1b2bfc1d0cec819a5265ebfbd02ac"],["G:/Blog/public/categories/思维导图/index.html","a3c9e5188b1bd614d365084bc1fa6c49"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","1ad186c616cb38f7c166a5852f947bdb"],["G:/Blog/public/categories/教程/index.html","b8923bbea4dd145d10f9a9b89970c5c8"],["G:/Blog/public/categories/教程/好玩/index.html","c36c05ee9a64e1c201a755f54b52b670"],["G:/Blog/public/categories/数据库/index.html","7cba83ddce418a4a7c1d021401dcc24c"],["G:/Blog/public/categories/数据库/mysql/index.html","f29f532325e6bb53e9ef39f435b334af"],["G:/Blog/public/categories/渗透测试/index.html","e96d4995f56c6cbe97cc96255a2a795e"],["G:/Blog/public/categories/记录生活/index.html","24fd0fda40caab42b44c76701dcf1e61"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","c3684c223f51382efe8fb4fa15e4a29e"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","0fdfa6be83abb82f90c63fcb220a69b9"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","cea23d65d89bd30fef8f965cb3c4d70a"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","2f5c481ef23bb44d6b813dbfb16d2c39"],["G:/Blog/public/page/3/index.html","3261f94757703e8c94c85f3161ee985b"],["G:/Blog/public/pan/index.html","6152ac38a18dadd14479df988a1a7aa1"],["G:/Blog/public/tags/APPscan/index.html","73e6d7d40b2181815433db0e1e32a89f"],["G:/Blog/public/tags/LADP/index.html","da0a0ca5566cf803793d409acea3db51"],["G:/Blog/public/tags/Windows/index.html","781b8e2d717a77b2fa4cc427622b4c54"],["G:/Blog/public/tags/github/index.html","5bf1e5451e861f09b39e846a41448987"],["G:/Blog/public/tags/hexo/index.html","7e527171a5ec272f7b0b0e066076c1cc"],["G:/Blog/public/tags/index.html","a3696125525464a4d4da605f40a95b07"],["G:/Blog/public/tags/mysql/index.html","39a2143984485f6bc171295ce3b9fdd0"],["G:/Blog/public/tags/onedrive/index.html","0f4d27f4bc7dedacb95eb4c08742d54f"],["G:/Blog/public/tags/oneindex-onedrive/index.html","ab0946e7868242cd494da1a58bae1bb4"],["G:/Blog/public/tags/oneindex/index.html","403d16f53e09794de2166fb8a5e7f94a"],["G:/Blog/public/tags/个人网盘/index.html","2a0c765ed8d241a108f510053c400cb7"],["G:/Blog/public/tags/主题功能/index.html","6f79d391be3fa3e5fdd00a611d0d8dcd"],["G:/Blog/public/tags/信息泄露/index.html","1881455a8dbd321d4056ffe8d0d17b18"],["G:/Blog/public/tags/博客/index.html","f434378bc11979d5c6a4355321f4a52f"],["G:/Blog/public/tags/图床/index.html","a44abe617229f79fc4c081e20309bf7d"],["G:/Blog/public/tags/工作/index.html","653cbe2f5eaadf1da31b98c4a35b0399"],["G:/Blog/public/tags/应用程序测试/index.html","2716202711c2f5bbded80f748b15f849"],["G:/Blog/public/tags/数据库/index.html","4d7705e2be44aedd70c9139173c565d2"],["G:/Blog/public/tags/文章模板/index.html","73f1b43fe9a49da2b1cdf131a3933de5"],["G:/Blog/public/tags/方法论/index.html","789018d9754124dd5d0a15f4437fba94"],["G:/Blog/public/tags/渗透测试/index.html","65a56490b5c73e5b62ea551f837acd5d"],["G:/Blog/public/tags/生活/index.html","b273510c31954927c909a575f8bca09c"],["G:/Blog/public/tags/解决问题/index.html","187e214ff7774281a5c0429337db8b06"],["G:/Blog/public/tags/豆瓣书架/index.html","edb0185e8162233c4d35af44e14dc357"],["G:/Blog/public/tags/转载/index.html","0585127dc86d5a57f8972357c9d66dad"],["G:/Blog/public/tags/面试/index.html","240ce898c81f055d0c01fa100eb64687"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","b35df0927381aa9ad5a672bd8379980f"],["G:/Blog/public/留言板/index.html","76b610976b98cff89e55ea05dc9621fe"]];
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







