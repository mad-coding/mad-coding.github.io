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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","4cceecc3ce2a4a810dfbc18b9f36270b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","61a17aae349ce6f8b0d1cfd37fab0c94"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","a14eb181b0e858e7ee3a3cd498d5c76c"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","38705be95f93f65f601c58766fbe0c0e"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4dadcb8b5ba2dd9b526a8ca3aeafdfde"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","514a84b7d2c4fd16c0a84e667045a79a"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","9639746305028fce1e3b05e506262fa4"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","2b22e87dcdebfdf3f6e3182345283da9"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","99169511e8ea5968ff217c97955849bb"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","1cad92a74dceca99fa338a891da46448"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/about/index.html","64b7af1651e4934be740ab2ddb4e44b9"],["G:/Blog/public/archives/2019/07/index.html","4fd1a3ccbaf6c52498b7ef49cdc2f4b4"],["G:/Blog/public/archives/2019/08/index.html","0484995360366e19c58ac6d6c3249c81"],["G:/Blog/public/archives/2019/08/page/2/index.html","7942b7ad06b2e8feb307b069ae5f47f4"],["G:/Blog/public/archives/2019/08/page/3/index.html","66554119176bc6770e87e8f75a80aa44"],["G:/Blog/public/archives/2019/index.html","7fe29de68b6a87e57c235bb3c80af5c8"],["G:/Blog/public/archives/2019/page/2/index.html","3775da435bf2e76f1020e4f7dee73d0f"],["G:/Blog/public/archives/2019/page/3/index.html","6d1f50737e0e1a13422b1c7bf554f0b7"],["G:/Blog/public/archives/index.html","9e50a4cb6c935896c43b6a3c86d8e812"],["G:/Blog/public/archives/page/2/index.html","9a86572ca7f956adb7b797e992697c11"],["G:/Blog/public/archives/page/3/index.html","7be1ae13a77343150f955294df2e7599"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","2e8b90d50c07874a695ab2d52c19ccc0"],["G:/Blog/public/categories/Linux/index.html","60dea785426c34880caa0ec00eefaa5f"],["G:/Blog/public/categories/hexo/index.html","48ad5e03c760b78a3bc674055cfe6f6e"],["G:/Blog/public/categories/index.html","ad880dc66867c18bc97f33626aec2780"],["G:/Blog/public/categories/安全工具/index.html","4fe12088b1478e6c807ccff5c77b5019"],["G:/Blog/public/categories/思维导图/index.html","88942f7736e3422bb3988fe3501e5156"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","c4d1168886f05b3b92ff74a77bb18e82"],["G:/Blog/public/categories/教程/index.html","d515e2ad45a8c1e3ffe9983e162e03c1"],["G:/Blog/public/categories/教程/好玩/index.html","ae1862625b279924c33e15ea0438a572"],["G:/Blog/public/categories/数据库/index.html","5340d8b209070b48b75fedf680090742"],["G:/Blog/public/categories/数据库/mysql/index.html","f4019c56d39c23321083ce64f83d2758"],["G:/Blog/public/categories/渗透测试/index.html","b5fb1d4d92f2247de3f4cbe250791b62"],["G:/Blog/public/categories/记录生活/index.html","edeee79b221dced1e8c8a357778c8418"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","a056eefbfd778e093c1882c0d4db1534"],["G:/Blog/public/img/404.jpg","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/img/wechat.jpg","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/index.html","d75af0b0e06550e91d4568bea2dfb251"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","80a77d8362235c6d2808bc0caef46bd3"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","a3abd489935285efe6694f85051b3af0"],["G:/Blog/public/page/3/index.html","72996fd74eb603541dfd5c40d8dc0500"],["G:/Blog/public/pan/index.html","4cf024700f14e3e267bd973f32e17682"],["G:/Blog/public/tags/APPscan/index.html","401744145e763cc65f595de0fd41c9c3"],["G:/Blog/public/tags/LADP/index.html","ddd71cfe3e37b9cce4864b6b67e1e47f"],["G:/Blog/public/tags/Linux/index.html","e5155fc26ea019ba771c818797216c6e"],["G:/Blog/public/tags/Windows/index.html","bdb9c303c5ff515a62d90787de6db410"],["G:/Blog/public/tags/github/index.html","2d7acc755fd37d542887b70f9b7b9c61"],["G:/Blog/public/tags/hexo/index.html","b697bdead5b96fdc22e0d4857888fd7b"],["G:/Blog/public/tags/index.html","33ee70a0154e01573f88eb6ad533ddd3"],["G:/Blog/public/tags/kali-Linux/index.html","8ef919f40a5e68c4aeb35d7a49256d0a"],["G:/Blog/public/tags/mysql/index.html","6f56d5e3245f9430b5896e18e4c13b5d"],["G:/Blog/public/tags/onedrive/index.html","e3bc3c0183fc14b0f6098a2af6a7ec67"],["G:/Blog/public/tags/oneindex-onedrive/index.html","6f3e141d0eb1cf6d161ed9422ccb4e5f"],["G:/Blog/public/tags/oneindex/index.html","e1c89181791d735e44ee8658211cc11c"],["G:/Blog/public/tags/个人网盘/index.html","0ec15862a377bc0436bd50209e298f96"],["G:/Blog/public/tags/主题功能/index.html","61d0fbfc3fca3987d732807ad7b52614"],["G:/Blog/public/tags/信息泄露/index.html","9e79b3a97e5553e175db06e15df48aeb"],["G:/Blog/public/tags/博客/index.html","712220933277529fb9adb4a52852e336"],["G:/Blog/public/tags/命令/index.html","f6df54e8fb566069e4213a6b88259ffe"],["G:/Blog/public/tags/图床/index.html","276c8297efe6f8b8744ba8cac71b5811"],["G:/Blog/public/tags/工作/index.html","0ec57862a037ed9c858c6fadc8911fdc"],["G:/Blog/public/tags/应用程序测试/index.html","5cf87d4703deb16ef7353bd750b87cd3"],["G:/Blog/public/tags/数据库/index.html","cd80e4078060fc91b696892f3280c2a6"],["G:/Blog/public/tags/文章模板/index.html","2f719aa70c5f2cbca364f11e9012629f"],["G:/Blog/public/tags/方法论/index.html","f3c4e404ca2ca1b0556a3a8b139c892f"],["G:/Blog/public/tags/渗透测试/index.html","5f2c803fddf72d3fd00d6147c279c8b3"],["G:/Blog/public/tags/生活/index.html","d1333120f1b5d7d94c656f50c45ab197"],["G:/Blog/public/tags/解决问题/index.html","0226f5e350152ccfd066819ed004ad60"],["G:/Blog/public/tags/豆瓣书架/index.html","4a1d419e5c7e5cc80853e643dea8b933"],["G:/Blog/public/tags/转载/index.html","77e7929022a9ff96aef252fa6a231439"],["G:/Blog/public/tags/面试/index.html","e2d31740f52e0d7b70f6f8e3ecdddde7"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","494ece4c7e400a2d86249988ab23087a"],["G:/Blog/public/留言板/index.html","e4bf2bd114d1f13e42526de7c1e5f3b5"]];
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







