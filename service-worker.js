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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","4cceecc3ce2a4a810dfbc18b9f36270b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","61a17aae349ce6f8b0d1cfd37fab0c94"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","f8cdb333f27b1332b19a448e47a1d295"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","a14eb181b0e858e7ee3a3cd498d5c76c"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","38705be95f93f65f601c58766fbe0c0e"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4dadcb8b5ba2dd9b526a8ca3aeafdfde"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","514a84b7d2c4fd16c0a84e667045a79a"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","9639746305028fce1e3b05e506262fa4"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","2b22e87dcdebfdf3f6e3182345283da9"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","99169511e8ea5968ff217c97955849bb"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","49658c57e29f237abd124d08d9854a64"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","cd0825bf693379a0512b63cbccef066c"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","cbcb35000dc23a3d321aaf54d6695329"],["G:/Blog/public/about/index.html","b74c8755666c31ba2c34baddd1da0073"],["G:/Blog/public/archives/2019/07/index.html","80867d65103845b3bf0f927a7c0e7e17"],["G:/Blog/public/archives/2019/08/index.html","b447c771d81b579400b7e0fa8c7a5aa5"],["G:/Blog/public/archives/2019/08/page/2/index.html","e9c2aa1b65f15fcca9a91b26edcfa95e"],["G:/Blog/public/archives/2019/08/page/3/index.html","675ea0f507baece503fb2eb94dbfaea3"],["G:/Blog/public/archives/2019/index.html","5b73ab35680c5c37c32614445cdd397d"],["G:/Blog/public/archives/2019/page/2/index.html","334d17b9b33b8d012323b2fca56be768"],["G:/Blog/public/archives/2019/page/3/index.html","361df8c9596e4ca69b9be1fd65483871"],["G:/Blog/public/archives/index.html","8222453b07eaf1b2af57a9131b92dee0"],["G:/Blog/public/archives/page/2/index.html","a7533483e6ee972f3ad9c72d0abc0a94"],["G:/Blog/public/archives/page/3/index.html","44302478560d40284eb31eb32449e2ef"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","2e8b90d50c07874a695ab2d52c19ccc0"],["G:/Blog/public/categories/Linux/index.html","4cdcf008957cb61fbbd547f11f6273ce"],["G:/Blog/public/categories/hexo/index.html","a5d9ab0a2a46bbf57842790ffc956b6b"],["G:/Blog/public/categories/index.html","6d4510345129bf4f28551fdb71a26483"],["G:/Blog/public/categories/安全工具/index.html","2b489104303d2d1bd464e8309f1efc61"],["G:/Blog/public/categories/思维导图/index.html","45ac2b4279a196e4be5dd7b47625531b"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","c60182b451adf60b58ccc96a02622cb7"],["G:/Blog/public/categories/教程/index.html","dce5a9fbb9b78648383f63628025d346"],["G:/Blog/public/categories/教程/好玩/index.html","bde0b39dae7ea8a86740adaf6c152609"],["G:/Blog/public/categories/数据库/index.html","b08211820d8964712a87c1d2d9b4f8e6"],["G:/Blog/public/categories/数据库/mysql/index.html","02d07119b707b6622dfc81782fbfad3a"],["G:/Blog/public/categories/渗透测试/index.html","8f8dd5efa6c2ced713992a20c3baaa3d"],["G:/Blog/public/categories/记录生活/index.html","3e09a3de7f557f4bf32fb570b4b6d267"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","1d8c421557ae96d6fb06a411f6f2891e"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","69e2e9e962a35f152e9067961123a163"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","8b0194f9142699d86cd543bbf55430a6"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","0207bc55cd1aa7be811b7b92dfb44aaf"],["G:/Blog/public/page/3/index.html","2220710b4227c431ea0d75482c9f38d9"],["G:/Blog/public/pan/index.html","699d1abb2438a97802c2cf55c1c35cec"],["G:/Blog/public/tags/APPscan/index.html","0cc64e1cc5efe8de911ef956bce6c4da"],["G:/Blog/public/tags/CTF/index.html","c23d28d5bd0ab571bb9894784682233e"],["G:/Blog/public/tags/LADP/index.html","ff5eb662908ba3284611a6800bb23d1b"],["G:/Blog/public/tags/Linux/index.html","fb93ad2512de1c846c1ed0c04f361181"],["G:/Blog/public/tags/Windows/index.html","4a201636e5056af5f17b12978f1390a5"],["G:/Blog/public/tags/github/index.html","5eddc65ec3429de02c25bdf696eb78a0"],["G:/Blog/public/tags/hexo/index.html","e40a06fe3e6a726be8b4d2f5d41b04d6"],["G:/Blog/public/tags/index.html","1ac0f94bdbf8ea3bd690e3cba9110683"],["G:/Blog/public/tags/kali-Linux/index.html","140754b855b2dd642ec72f4f64ac421c"],["G:/Blog/public/tags/mysql/index.html","e08018cdb46f53daaa7d47c8b77783fa"],["G:/Blog/public/tags/onedrive/index.html","5da76a5ac912821047c8842700a6f613"],["G:/Blog/public/tags/oneindex-onedrive/index.html","d4eb808ae17590c21df4bbca97a8faa6"],["G:/Blog/public/tags/oneindex/index.html","ae2a9a8f949dbf2f263b1e03db63a8f2"],["G:/Blog/public/tags/python/index.html","d2233e2e7f6079b2e2f60e1b5b71f25c"],["G:/Blog/public/tags/个人网盘/index.html","f03652c48a34abf659c0de034bd41ec2"],["G:/Blog/public/tags/主题功能/index.html","e2eb9bc477784a55582d607d1fe0a530"],["G:/Blog/public/tags/信息泄露/index.html","a72d03068007fee321c7218a2d481240"],["G:/Blog/public/tags/博客/index.html","3be7e7f25882e38854ca18ec715b34e4"],["G:/Blog/public/tags/命令/index.html","63cd5600790a0d7e754f7792cab5f23c"],["G:/Blog/public/tags/图床/index.html","b16f8b676f9e4a167699fea3e6030e5f"],["G:/Blog/public/tags/夺旗/index.html","e51eb74da47302520c91f0a08c9dfd40"],["G:/Blog/public/tags/工作/index.html","39f761bb089e5b3708f6b4383897cfe9"],["G:/Blog/public/tags/应用程序测试/index.html","fdc93d24a187e72fb81b21a6723dfff2"],["G:/Blog/public/tags/数据库/index.html","2add5a3eb3d453dbbd8bd913c29314cb"],["G:/Blog/public/tags/文章模板/index.html","89909c8b22f647d9940a10a74109f1b0"],["G:/Blog/public/tags/方法论/index.html","ded6419172ea3206508bbc682be0a391"],["G:/Blog/public/tags/渗透测试/index.html","bb8032ca83d9835f45af487831f42a6d"],["G:/Blog/public/tags/爬虫/index.html","75c649edb1977293538cb2f9a8395173"],["G:/Blog/public/tags/生活/index.html","b52880550cce233e33853f17e020084f"],["G:/Blog/public/tags/解决问题/index.html","5fd1dd55190be0412aad1b4796c1bfa9"],["G:/Blog/public/tags/豆瓣书架/index.html","3a3904a3d89a8b49c97eccadb30551d2"],["G:/Blog/public/tags/转载/index.html","89b6535ee3143c4dc7329ec767ce9970"],["G:/Blog/public/tags/面试/index.html","19d5314e85fdccf28a26dd5ef9f5f874"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","7e808693584160a2dcc5f924871df862"],["G:/Blog/public/留言板/index.html","3bdcccaba859d78e212bf3ff46a9c405"]];
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







