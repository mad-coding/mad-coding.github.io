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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","0fbc678e147af70a0969e0486abad6f6"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","9d64b6c4af8239a19f4bfc23c2a822e6"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","73fb7ba9571340f4f4c505d30e4bd0d2"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","47674a4ab7134f573beb38718c174c75"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4fa52a8b6926ec20e0992b870e77b80a"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","5ed3a1018f60fc4f78d2c22e2b083611"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","84479ad24b25e2721a79b8fadfbac808"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","c1fd9a9497beadb1361c7ac29e823515"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","99169511e8ea5968ff217c97955849bb"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","49658c57e29f237abd124d08d9854a64"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","cd0825bf693379a0512b63cbccef066c"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","a8108d22c60976707ee592a1194259c7"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","84c6c2424678f18c521c3735c0de49c6"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","3bcc450335db43728cd84cd96902865d"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","cca76ade521dfba6e281e99ea31a0f64"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","b3158b4170ede2018b540c0c068c5061"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","19f2106e69505ab06bd4eb3b5a4c98d7"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","c979bb4fedb05630c70dfe69b2b8ec3c"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","412cf4baed3666da56712ee7897ae0b7"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","8796337fb1ca67e706825d3e473db747"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","676d6ff512d25d5f575f36c9fd0020e0"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","53ea37ce69162213262a2fc13e9eb5b0"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","d740c724f26a87085ec8d3d7b79b3189"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","3f497c5ad0a001e344ad0e3a613e6086"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","3613ef360b89e6d0e636b457be67e8b8"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","fe11e97f5f0da705896d9683583b08c7"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","78952ac927ab137776da38a237272d44"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","94c0e8ff0aff13116517c3ef419cc334"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","127e6c4b64697feda758bf94c46c4750"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","a8bafc4bcfc18d78dffbf7d4ee9cf7e3"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","ca2685462217081fa3f4c46ff59cae12"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","545c58c707286cad7a8e8b60995863ca"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","979698a6321a2ef7d7e387d27f3be6de"],["G:/Blog/public/about/index.html","560e8a2a0976a5c6e74b89f7118d19ec"],["G:/Blog/public/archives/2019/07/index.html","257682e1d960298d9659bac19a73061e"],["G:/Blog/public/archives/2019/08/index.html","6369f51967c2fb107442a1e00a1ab392"],["G:/Blog/public/archives/2019/08/page/2/index.html","d4b9e7163a68fb7b22eae8a132d89b9b"],["G:/Blog/public/archives/2019/08/page/3/index.html","57c98894e86b00e2816a28e0e92c8fc6"],["G:/Blog/public/archives/2019/09/index.html","d22943deda2f9fe20f51df839c89e289"],["G:/Blog/public/archives/2019/09/page/2/index.html","404e88b77ee07dd5b208815160282bfc"],["G:/Blog/public/archives/2019/10/index.html","9ec8b9c73654237f606d445d6c9d0325"],["G:/Blog/public/archives/2019/index.html","deda0c8c923b9f104da8f69dffb4b0c4"],["G:/Blog/public/archives/2019/page/2/index.html","7e62c054137245257ac8ed3354f103ad"],["G:/Blog/public/archives/2019/page/3/index.html","7e4d628005120ccc4f090618c246c9d5"],["G:/Blog/public/archives/2019/page/4/index.html","6bb482ea1a63641285b036650d104e66"],["G:/Blog/public/archives/2019/page/5/index.html","9b4e344713077b2b8ee060b2cf2b100d"],["G:/Blog/public/archives/index.html","5495e849683c3bb4af728ee95116e690"],["G:/Blog/public/archives/page/2/index.html","1910b72c4dd3d7ee49e6119b959bebf0"],["G:/Blog/public/archives/page/3/index.html","25484b2d332f1b020933339d2e479a17"],["G:/Blog/public/archives/page/4/index.html","ac9b6365324d6e44febe9305883def96"],["G:/Blog/public/archives/page/5/index.html","4aad5943d2953d4be0463a7d40cd8354"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","2e8b90d50c07874a695ab2d52c19ccc0"],["G:/Blog/public/categories/Linux/index.html","92c7f555434f126b7507a1a95b27df2c"],["G:/Blog/public/categories/Windows/index.html","512205375ab20248c48d8b86eec915af"],["G:/Blog/public/categories/hexo/index.html","31c8e6c63a1ca49dace1e4514a200432"],["G:/Blog/public/categories/index.html","69875cdd28e771b32e0662d328c880b3"],["G:/Blog/public/categories/安全工具/index.html","5495eb9114c324abe659ab327a13bc80"],["G:/Blog/public/categories/安全工具/page/2/index.html","4f6411daf4f597a750c5f22fc39ccf59"],["G:/Blog/public/categories/思维导图/index.html","c64be5bfda0f10a9bd58b56328901dc9"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","2d82e024d4264597689780ac6d000b7f"],["G:/Blog/public/categories/教程/index.html","2bea13faa7babd22be8d43bbab1efc8d"],["G:/Blog/public/categories/教程/好玩/index.html","ab4716f545c7998a20144ebba78d4f8d"],["G:/Blog/public/categories/数据库/index.html","ac4db75ecc285dfe6370291911a45d90"],["G:/Blog/public/categories/数据库/mysql/index.html","ed485ba32957eab5e4614ef98a141273"],["G:/Blog/public/categories/渗透测试/index.html","e9e993e366b4968620ba7b1742fd857c"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","dffefc4eccda927920c8eaec0faa3154"],["G:/Blog/public/categories/渗透测试/靶场/index.html","32ddfb9de5b5fa33a7ec2813ff5d908e"],["G:/Blog/public/categories/记录生活/index.html","69564b70cc023d445a9d4e1a1a7920af"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","e50743ab227d49a1ce164e13b2be4867"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","edca53137710f13b5dd76f564a069c16"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","ee217c104e1592456fbbaa8d9a180bfd"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","225c18cbdf7301712e61109b9a7e72d3"],["G:/Blog/public/page/3/index.html","1e14d96b7a8b1a260f05160cfec6e53b"],["G:/Blog/public/page/4/index.html","8ae89cc0757073cc6dccafed34233991"],["G:/Blog/public/page/5/index.html","1700469115c8da73c16f076d0de7d603"],["G:/Blog/public/pan/index.html","9f37f5ba7a42c0143c067026255e4cc7"],["G:/Blog/public/tags/APPscan/index.html","4f1988a163ac4b1131d1018ef4aadb88"],["G:/Blog/public/tags/CTF/index.html","ccce2edd3059d960620a19f7345381bf"],["G:/Blog/public/tags/CVE/index.html","2a892127e9c208065297dc5b8d7d51a3"],["G:/Blog/public/tags/DOS命令/index.html","f0477d8daf98d34ba9691fe6593f128f"],["G:/Blog/public/tags/LADP/index.html","15bf7482b9b2ed33127a48949b36798c"],["G:/Blog/public/tags/Linux/index.html","84ff9fea6663d64e55f4353c78b2360a"],["G:/Blog/public/tags/PHPstudy后门/index.html","c308f6f6949d329fcff6c3c08c07b45d"],["G:/Blog/public/tags/POC/index.html","742e3eab6c925c5f02937e2ba810c663"],["G:/Blog/public/tags/Windows/index.html","0892bcf6b60c84942d8b7afa711fcffc"],["G:/Blog/public/tags/burpsuite/index.html","2b36b6b723206b32ffbcaf100100ff87"],["G:/Blog/public/tags/github/index.html","991173d7b2079fe79003446bab3f67c6"],["G:/Blog/public/tags/hexo/index.html","757c9e83d61dc4fde905a7a76f8864ce"],["G:/Blog/public/tags/index.html","36ccc79f038c58c81ea9f96a93cf8014"],["G:/Blog/public/tags/kali-Linux/index.html","b33a5ed76e3a66ff52c65977f3d8df2c"],["G:/Blog/public/tags/mysql/index.html","851b1176515eac38e03226fa2612e335"],["G:/Blog/public/tags/onedrive/index.html","9b9ab49a5a86a5a7f17c0a7071fe6399"],["G:/Blog/public/tags/oneindex-onedrive/index.html","811b5f87d39e00ad7d9a89e2cac23890"],["G:/Blog/public/tags/oneindex/index.html","0d039aa6453f085faee97ab5848b0721"],["G:/Blog/public/tags/python/index.html","20ce7d0eccfd6251418457e775c0e814"],["G:/Blog/public/tags/telegram/index.html","c4a2b5fb03ede8006414bcbcfd288787"],["G:/Blog/public/tags/xray/index.html","12aba399d44f14aae56f241f2ae6d6a2"],["G:/Blog/public/tags/个人网盘/index.html","f905e5ef59d2439c6163f39471ce2c1f"],["G:/Blog/public/tags/主题功能/index.html","371342dcee67d34182bca226d6b8359c"],["G:/Blog/public/tags/优秀文章/index.html","33f3e2718aec6f7adcc3ca5dc0e0b64f"],["G:/Blog/public/tags/信息泄露/index.html","d8603a6af112129329df915b65fe8767"],["G:/Blog/public/tags/博客/index.html","eeaff244a5e7a257318aabe9015357cc"],["G:/Blog/public/tags/命令/index.html","903a5c1f97f538700fbbacadbc7ec671"],["G:/Blog/public/tags/图床/index.html","4197bb58c3d5e52f9e26bef2e0b9189b"],["G:/Blog/public/tags/基础教程/index.html","d0cc1e2fe00611e5112af431858fba5e"],["G:/Blog/public/tags/夺旗/index.html","3a7085b7214847536e924bf4d435098c"],["G:/Blog/public/tags/安全工具/index.html","a2ccf2e39dcbb17c76c64015a92a9f98"],["G:/Blog/public/tags/工作/index.html","78f0615c68d9f24561416be61f6d999f"],["G:/Blog/public/tags/应用程序测试/index.html","0793d48f0720cc61d92747d8a20f83a6"],["G:/Blog/public/tags/数据库/index.html","51440d27c249c7bee7d01c93f8373bfc"],["G:/Blog/public/tags/文章模板/index.html","c04c9ee6fbb6404b05853613b59e2ac0"],["G:/Blog/public/tags/方法论/index.html","b94739681ff915f6158533b4461f8fd7"],["G:/Blog/public/tags/机器人/index.html","9aa50553dbaef56a404ab5fa69b88983"],["G:/Blog/public/tags/渗透测试/index.html","6d837cd4daaac70d8d340a79dcf074b5"],["G:/Blog/public/tags/爬虫/index.html","817f2b653ed6f09a21a24666cd3834d8"],["G:/Blog/public/tags/生活/index.html","a32f664fd1ab779891ea7fc2d488f458"],["G:/Blog/public/tags/解决问题/index.html","ba9ed98e75f0e2e1798ca6e02e8ebb3b"],["G:/Blog/public/tags/豆瓣书架/index.html","5d161fd010e606ef8ff413a74ed42b98"],["G:/Blog/public/tags/转载/index.html","519962e94eb03570e4a04db66fafa944"],["G:/Blog/public/tags/面试/index.html","e20e9483cc808886752c16cf6a23ce7d"],["G:/Blog/public/tags/靶场/index.html","b85bd6a5d3d7b6ab9806e40da00c31ef"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","aef12b84934790d90eef7eed78dadcfe"],["G:/Blog/public/留言板/index.html","9a1fb542866c04e7af6b236e6455ee07"]];
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







