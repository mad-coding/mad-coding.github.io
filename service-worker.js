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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","4cceecc3ce2a4a810dfbc18b9f36270b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","61a17aae349ce6f8b0d1cfd37fab0c94"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","73fb7ba9571340f4f4c505d30e4bd0d2"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","fa7d0a921a8333335fe6d017bcecb42b"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","7255e104cccec334f6c1b3c9b87b374d"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","514a84b7d2c4fd16c0a84e667045a79a"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","9639746305028fce1e3b05e506262fa4"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","2b22e87dcdebfdf3f6e3182345283da9"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","99169511e8ea5968ff217c97955849bb"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","49658c57e29f237abd124d08d9854a64"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","cd0825bf693379a0512b63cbccef066c"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","a8108d22c60976707ee592a1194259c7"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","84c6c2424678f18c521c3735c0de49c6"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","2291b42e512b10879bfa61de0ba04948"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","21875060e7953cb042e0f21d08332c8a"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","b3158b4170ede2018b540c0c068c5061"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","19f2106e69505ab06bd4eb3b5a4c98d7"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","c979bb4fedb05630c70dfe69b2b8ec3c"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","412cf4baed3666da56712ee7897ae0b7"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","8796337fb1ca67e706825d3e473db747"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","676d6ff512d25d5f575f36c9fd0020e0"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","53ea37ce69162213262a2fc13e9eb5b0"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","d740c724f26a87085ec8d3d7b79b3189"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","33007804093814f1ca27aa326d7a8ecc"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","b6d7c57570c38f1b92503de889259f30"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","fe11e97f5f0da705896d9683583b08c7"],["G:/Blog/public/about/index.html","580885aa3456caa624ad8cef46babf19"],["G:/Blog/public/archives/2019/07/index.html","9c3e5e2e63dbe38b00ab01e04b41ae22"],["G:/Blog/public/archives/2019/08/index.html","6a1a030b132ef90ff52359f217cbe6c1"],["G:/Blog/public/archives/2019/08/page/2/index.html","73f062fdba5a958b59a5fcfa78b8633c"],["G:/Blog/public/archives/2019/08/page/3/index.html","a33e6dfb9f8656da1ff15b95f479ee75"],["G:/Blog/public/archives/2019/09/index.html","c70c9e4577df08d1d2a6e3a0d45e87f6"],["G:/Blog/public/archives/2019/09/page/2/index.html","698f45796b17b93c5a974dc501caf7b0"],["G:/Blog/public/archives/2019/index.html","c982dfd5ede81ef0bbcc4ded9a131cec"],["G:/Blog/public/archives/2019/page/2/index.html","2704f25641a53fdefbdf0eeb24772b7f"],["G:/Blog/public/archives/2019/page/3/index.html","c9b285d1952d097e60ff1ff5a68a217c"],["G:/Blog/public/archives/2019/page/4/index.html","56e972cc7794f0f1bc74af97cc1ca870"],["G:/Blog/public/archives/index.html","a5d2203dc9e260756fefe93569848ee9"],["G:/Blog/public/archives/page/2/index.html","8a5d0295fd9f2117140a9a0cc8245975"],["G:/Blog/public/archives/page/3/index.html","891e0030ed150c098d0f369ff2bcccd0"],["G:/Blog/public/archives/page/4/index.html","ca004bac9d3676f10efdd9616dfcf5de"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","2e8b90d50c07874a695ab2d52c19ccc0"],["G:/Blog/public/categories/Linux/index.html","feb9eae33f4849dff577244acf628326"],["G:/Blog/public/categories/Windows/index.html","929bd2cbeef7cefc42847cd54655b234"],["G:/Blog/public/categories/hexo/index.html","91ae4cb223dc27996c3f344232d76794"],["G:/Blog/public/categories/index.html","ae270b2475ce899340fc0d0107ef8277"],["G:/Blog/public/categories/安全工具/index.html","74bce0f51160a281073ad41a4e9177ce"],["G:/Blog/public/categories/安全工具/page/2/index.html","56bd6908c28e82df88b1000bd6e48dd3"],["G:/Blog/public/categories/思维导图/index.html","a7c62059ffa20b1878306652371d4c87"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","5121d3c329dfc3bebff690af6fb2d497"],["G:/Blog/public/categories/教程/index.html","455dcdd6cbc3687d66298c738f8c1d33"],["G:/Blog/public/categories/教程/好玩/index.html","2867fec6bd024a265f7c97e54931ae68"],["G:/Blog/public/categories/数据库/index.html","0a36c6925bb653f7e14e1d6e6215d774"],["G:/Blog/public/categories/数据库/mysql/index.html","2eece40cca170ada993d7620c35cbe08"],["G:/Blog/public/categories/渗透测试/index.html","59f172633aaf6f0b98462c6265f6fa1e"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","9e0d3b5ad13d4a9e1b5f3ff2bc7b831c"],["G:/Blog/public/categories/记录生活/index.html","fde9b9c2c135861802c4249a95448b61"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","0365adb1c16255fa8d0189c56b7e4139"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","e8d1ffe155e8e3e93783ebfabe199411"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","b54408b2d69dc2706d283f0713be9f8f"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","2327cd2d0b62dd67ebd613cd3b1e7cc0"],["G:/Blog/public/page/3/index.html","ccb738c869586db689a62b810318c760"],["G:/Blog/public/page/4/index.html","c5f681e70f5ef9b7bcaeda57ef617a58"],["G:/Blog/public/pan/index.html","0187d614a27f3ceea70ae3f9ee092d52"],["G:/Blog/public/tags/APPscan/index.html","c2a7aea4b7b2286e08d9a9225b7c4357"],["G:/Blog/public/tags/CTF/index.html","a748d2ceba20da1e3fc2c9f19a97f37a"],["G:/Blog/public/tags/CVE/index.html","ec4b0e7fd2e9b1be3b7bec43bdd3cd45"],["G:/Blog/public/tags/DOS命令/index.html","f49d27d5f57778afbf4ff36468011b66"],["G:/Blog/public/tags/LADP/index.html","81397bc2f73bd96e9f063027b2fc3d46"],["G:/Blog/public/tags/Linux/index.html","3001f84f5c25eae0d6d9690eb7295455"],["G:/Blog/public/tags/POC/index.html","31c8985ffc6e550aefc98a3130249dcb"],["G:/Blog/public/tags/Windows/index.html","63d40cf09d4582f823a88ff3d7b46c7b"],["G:/Blog/public/tags/burpsuite/index.html","fe8efc062e211d962160feb7b908617b"],["G:/Blog/public/tags/github/index.html","df3b6ad8c08796cd2fe622b128704c6c"],["G:/Blog/public/tags/hexo/index.html","666854c7f2f2c7e72efa141ee898f6bb"],["G:/Blog/public/tags/index.html","0ea86b783eea82c06e1af87ceda85564"],["G:/Blog/public/tags/kali-Linux/index.html","3f4fb5b345c68fa30c726293ab3326c3"],["G:/Blog/public/tags/mysql/index.html","6dbb971607e50606a8d1356de0810788"],["G:/Blog/public/tags/onedrive/index.html","365ef354efcdc38a92cce59f4287e420"],["G:/Blog/public/tags/oneindex-onedrive/index.html","e2b6db8a7f5ca0adc56896879777529d"],["G:/Blog/public/tags/oneindex/index.html","e3759a32642150f3790dc2c6a0eb396c"],["G:/Blog/public/tags/python/index.html","b08e6b38c7a089d9e83857a3d14e5ef1"],["G:/Blog/public/tags/xray/index.html","4fa660d2526b91bfe088eb584f286399"],["G:/Blog/public/tags/个人网盘/index.html","9515fb715e59185eab27305b85f399d6"],["G:/Blog/public/tags/主题功能/index.html","b355c850d3d59550881d026ecfc5b530"],["G:/Blog/public/tags/优秀文章/index.html","fd3ba77bc851bf61e668c3065ff8a383"],["G:/Blog/public/tags/信息泄露/index.html","137f5298657ed3d3cf435fab6f585be7"],["G:/Blog/public/tags/博客/index.html","244bae848f49ef113fd87fb180e5ce18"],["G:/Blog/public/tags/命令/index.html","77d1902ab6e2dbe495eda167514263d5"],["G:/Blog/public/tags/图床/index.html","3be076ed405662f36c36a4bb42027ba9"],["G:/Blog/public/tags/基础教程/index.html","dead4f97f312aa612f1a22e7a5db1cb8"],["G:/Blog/public/tags/夺旗/index.html","f37071d1560e175580affa9efa4cb3e7"],["G:/Blog/public/tags/安全工具/index.html","e58e365b8f83659b67c4836ff53793a8"],["G:/Blog/public/tags/工作/index.html","e7334e534a5163ea5aad34175c83c672"],["G:/Blog/public/tags/应用程序测试/index.html","0040b6841fd42849d2bc97759018bad3"],["G:/Blog/public/tags/数据库/index.html","5f4be479e118bdd2825ea3036fe75747"],["G:/Blog/public/tags/文章模板/index.html","d71fe9fa43ba7590fd131d21a3d820bf"],["G:/Blog/public/tags/方法论/index.html","50a1491ce65a001a4e0d0c133569b459"],["G:/Blog/public/tags/渗透测试/index.html","b7805b4ab2f1d1aa9a3f3382a0d0890d"],["G:/Blog/public/tags/爬虫/index.html","76670423265f114fd331dab77265a48f"],["G:/Blog/public/tags/生活/index.html","14b311dcacae9e17909739bc5234385a"],["G:/Blog/public/tags/解决问题/index.html","9acd5468c265e896dd0aa7287529d1b6"],["G:/Blog/public/tags/豆瓣书架/index.html","c1a05d55faccc9e9a7de2839d8ad0346"],["G:/Blog/public/tags/转载/index.html","42f174e6855a283457f47feaaacbda38"],["G:/Blog/public/tags/面试/index.html","c97fe05f11b4924faf5296ff188c0ec3"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","5f40f1fdea38c3aad638ec7ef86b1609"],["G:/Blog/public/留言板/index.html","2347c73165d12dc26f3e4c85a00eccc9"]];
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







