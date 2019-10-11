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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","73c5e780cab75e44968020eefe3613a8"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","a6374fb8a9982dea7b5902adc87fd341"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","0fbc678e147af70a0969e0486abad6f6"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","9d64b6c4af8239a19f4bfc23c2a822e6"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","73fb7ba9571340f4f4c505d30e4bd0d2"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","47674a4ab7134f573beb38718c174c75"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4fa52a8b6926ec20e0992b870e77b80a"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","5ed3a1018f60fc4f78d2c22e2b083611"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","84479ad24b25e2721a79b8fadfbac808"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","c1fd9a9497beadb1361c7ac29e823515"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","99169511e8ea5968ff217c97955849bb"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","49658c57e29f237abd124d08d9854a64"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","cd0825bf693379a0512b63cbccef066c"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","a8108d22c60976707ee592a1194259c7"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","84c6c2424678f18c521c3735c0de49c6"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","3bcc450335db43728cd84cd96902865d"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","cca76ade521dfba6e281e99ea31a0f64"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","b3158b4170ede2018b540c0c068c5061"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","19f2106e69505ab06bd4eb3b5a4c98d7"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","c979bb4fedb05630c70dfe69b2b8ec3c"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","412cf4baed3666da56712ee7897ae0b7"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","8796337fb1ca67e706825d3e473db747"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","676d6ff512d25d5f575f36c9fd0020e0"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","53ea37ce69162213262a2fc13e9eb5b0"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","d740c724f26a87085ec8d3d7b79b3189"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","3f497c5ad0a001e344ad0e3a613e6086"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","3613ef360b89e6d0e636b457be67e8b8"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","fe11e97f5f0da705896d9683583b08c7"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","78952ac927ab137776da38a237272d44"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","94c0e8ff0aff13116517c3ef419cc334"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","127e6c4b64697feda758bf94c46c4750"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","a8bafc4bcfc18d78dffbf7d4ee9cf7e3"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","ca2685462217081fa3f4c46ff59cae12"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","545c58c707286cad7a8e8b60995863ca"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","0658af355fc5ef438f00cac37f88a78f"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","3b546d52c168ab29608e92a09d10079a"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","06119d8bb23355968cfccb4604a5efde"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","e35067ab66a582db3eaf7558522be714"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","4dedf055cfacaf1d3ce10f5bdda5e2a7"],["G:/Blog/public/about/index.html","a8d545ae3869cc3aff03c80588220ad1"],["G:/Blog/public/archives/2019/07/index.html","974cad00bf92b8aed7dd3c5396a35f8a"],["G:/Blog/public/archives/2019/08/index.html","b7871f016f2099e6222e7ce50e2384ae"],["G:/Blog/public/archives/2019/08/page/2/index.html","f9c59977267092c78c45290d99059f24"],["G:/Blog/public/archives/2019/08/page/3/index.html","cdd0e470dd8ca5d8c27081eb3e8ec6b2"],["G:/Blog/public/archives/2019/09/index.html","f66882f9f1ef0f76d232c1ab24ff2936"],["G:/Blog/public/archives/2019/09/page/2/index.html","d1128ed4001ae92f776a034435613c23"],["G:/Blog/public/archives/2019/10/index.html","48cac4a078b7f49ea82c9f77b7d39258"],["G:/Blog/public/archives/2019/index.html","a9e47c591e081499d27d1acbfaf202c9"],["G:/Blog/public/archives/2019/page/2/index.html","8397a01da2b0b4506fb4c384b4bed498"],["G:/Blog/public/archives/2019/page/3/index.html","7f36b6868079af01924badc5a5788ee1"],["G:/Blog/public/archives/2019/page/4/index.html","6ea28a579921687e96ec3fc082a15b9d"],["G:/Blog/public/archives/2019/page/5/index.html","b3528e442ccd9e0663350ca5344467b9"],["G:/Blog/public/archives/2019/page/6/index.html","52ae0a180d2b9bc23c036cfa7e1f139f"],["G:/Blog/public/archives/index.html","89abd1acdc0051490685a8dd57b469f3"],["G:/Blog/public/archives/page/2/index.html","c5cc98d06853715d952bc7f1c8b0d736"],["G:/Blog/public/archives/page/3/index.html","bad98d47047605b6f0e94655c76bacd8"],["G:/Blog/public/archives/page/4/index.html","d6004a9ed2d91bde19bbc931701e268f"],["G:/Blog/public/archives/page/5/index.html","8f7929d3b2df348ba35bc46efc3a43fe"],["G:/Blog/public/archives/page/6/index.html","28f2318e9ed2e99bfaad9be8089a63bb"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","2e8b90d50c07874a695ab2d52c19ccc0"],["G:/Blog/public/categories/Linux/index.html","54a5000faa7a83db530b090a36492474"],["G:/Blog/public/categories/Windows/index.html","2dd04d420c943b5a03e69d6d2b6c0d94"],["G:/Blog/public/categories/hexo/index.html","d9b89908010a43e9596b8ec62ba359c4"],["G:/Blog/public/categories/index.html","ee98cfc3de0f6b9c25891e24ea77be7e"],["G:/Blog/public/categories/安全工具/index.html","9afc1b3b3e279086628a1063d79a37d5"],["G:/Blog/public/categories/安全工具/page/2/index.html","b46bcf8dd9cf54bf4c08e2d057841790"],["G:/Blog/public/categories/思维导图/index.html","a16f14961e912346046a94e2c9c1707f"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","1a6edf8a4391b3e29669eee5c2343230"],["G:/Blog/public/categories/教程/index.html","815f9b531a9782a0aa4bbed1d2a66184"],["G:/Blog/public/categories/教程/好玩/index.html","e49a0292c52d0be5b973d78a9de86be7"],["G:/Blog/public/categories/数据库/index.html","469f35277fcf22434c3406dd9559c072"],["G:/Blog/public/categories/数据库/mysql/index.html","1d6693c26f185317f1ec43377d29f1f5"],["G:/Blog/public/categories/渗透测试/index.html","9fcceb091f567b3a169ee83f18c42b39"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","27a0e7a5bc7ec3e73e9640fadd111691"],["G:/Blog/public/categories/渗透测试/靶场/index.html","192d05387ecce2f4e8af77a124411c69"],["G:/Blog/public/categories/翻译文章/index.html","0c64549a61b687ac1e56cdda072cf4e5"],["G:/Blog/public/categories/记录生活/index.html","f67897c7e7fa94fdbd268dba5ebecf63"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","b4df0366df66dce3c536490e238d0a4d"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","da9e8aacb13da3c299d01e07d3dd8cb1"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","03d3a94c5591f5bd35ad2205031c4728"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","af9577daf4e85b8aafe7ddb5075b8843"],["G:/Blog/public/page/3/index.html","e4c999c0e47a2b3dc50ec7c19fed070b"],["G:/Blog/public/page/4/index.html","22bd62261247bfb9c33724dd9df41d02"],["G:/Blog/public/page/5/index.html","3a849e6ea1351e5b4c8d52aa25fbbdda"],["G:/Blog/public/page/6/index.html","a0a57e1566c2b37a490ab7766d4e6baa"],["G:/Blog/public/pan/index.html","72dfd90958fc45d0e9baf79dbcac1f61"],["G:/Blog/public/tags/APPscan/index.html","567316dba75fe0392d82eca424e7959f"],["G:/Blog/public/tags/CTF/index.html","3dcecad25392a75f8e0c17317e23bd2e"],["G:/Blog/public/tags/CVE/index.html","c62c0d3c215429f2cfcd17d3a2a71318"],["G:/Blog/public/tags/DOS命令/index.html","284e769993512c57fe58bc2914361ab7"],["G:/Blog/public/tags/LADP/index.html","13debf64b07c93331f9be7c08260aa03"],["G:/Blog/public/tags/Linux/index.html","142b228d2ea937e19c5c874c1b493538"],["G:/Blog/public/tags/MobSF/index.html","98f2f578bfcc6a62af8983d6f5980ea1"],["G:/Blog/public/tags/PHPstudy后门/index.html","090baa6b56b72a59821045019c0cd2f8"],["G:/Blog/public/tags/POC/index.html","d5f56c4b3e5ca5643afbd9166c4988e0"],["G:/Blog/public/tags/Windows/index.html","5a7f1b088d85a1a6395150ff26284de6"],["G:/Blog/public/tags/burpsuite/index.html","af8490d405f508c533905028869ef532"],["G:/Blog/public/tags/github/index.html","d578dfd0e8178df64d78d8cc57a10ad9"],["G:/Blog/public/tags/hexo/index.html","e3f5fda089452663f7613985867894c0"],["G:/Blog/public/tags/index.html","2c1ecfab3013ff1291e1b456644f9878"],["G:/Blog/public/tags/kali-Linux/index.html","34d0b4dd7545794d9537eb24fd6a2e80"],["G:/Blog/public/tags/mysql/index.html","47d2586ba44e2f18011cb84e44e2e79a"],["G:/Blog/public/tags/onedrive/index.html","bb2c5a0e7cd67ca3060d447e48a85048"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","3eb1bbdcbb2ef5293b76d65171a5086a"],["G:/Blog/public/tags/python/index.html","b9ae90ff304638cc466850d09ce97293"],["G:/Blog/public/tags/telegram/index.html","a4d12b83af64db802af8238b05bb1b32"],["G:/Blog/public/tags/xray/index.html","9ac2ed3d25cf085672c045768e5b7f24"],["G:/Blog/public/tags/个人网盘/index.html","3691f849980d9567a227729a97e96bab"],["G:/Blog/public/tags/主题功能/index.html","9c62fcbdd04f28fba0e1a7cebc905ec6"],["G:/Blog/public/tags/优秀文章/index.html","a9e382b0963ee59b8d07b4e3a291fe5e"],["G:/Blog/public/tags/信息泄露/index.html","3dc4fd52aafb5cfd1542ec3772de4016"],["G:/Blog/public/tags/博客/index.html","c8564b440657ed6fd150040e2804f344"],["G:/Blog/public/tags/命令/index.html","c49198cbac386dea1927bdf0ece32850"],["G:/Blog/public/tags/图床/index.html","94f6b16a4f3af18cef5299406326a113"],["G:/Blog/public/tags/基础教程/index.html","d0bb21eaae97b1b1a47c5b421ff45bfd"],["G:/Blog/public/tags/夺旗/index.html","1b480d2f0299ad4dfb11ed101a143e52"],["G:/Blog/public/tags/安全工具/index.html","4ec2bd09397247c4e15ddf4b5baf40f3"],["G:/Blog/public/tags/工作/index.html","99e674189823cfae099c3abc9669f4d6"],["G:/Blog/public/tags/应用程序测试/index.html","bfa9bdd70566103e7b438baaf5442a0e"],["G:/Blog/public/tags/数据库/index.html","980d1984767f055d490c63d923727e93"],["G:/Blog/public/tags/文章模板/index.html","69c197e9dd8262349b667951068afb77"],["G:/Blog/public/tags/方法论/index.html","76da667083027bdebb33e81788d4583c"],["G:/Blog/public/tags/机器人/index.html","792f41de2c265c7ee3c3978a86893f64"],["G:/Blog/public/tags/渗透测试/index.html","43afee70159d14fc564806b0a3d10f5e"],["G:/Blog/public/tags/爬虫/index.html","fcdaeeb14ea5e87c58e05911f9efa5db"],["G:/Blog/public/tags/生活/index.html","14a1023fbe0cbe202e4fbd64fab0ec45"],["G:/Blog/public/tags/缓冲区溢出/index.html","f4f9791ac1687d085aeb3fb01ace84d4"],["G:/Blog/public/tags/解决问题/index.html","d6482ede989a4941b5e286eae40bdfb3"],["G:/Blog/public/tags/豆瓣书架/index.html","754fa075d7570eca6bea1e0ccc0d6c99"],["G:/Blog/public/tags/转载/index.html","5250ddc019dc58591bd922c586f2f9b3"],["G:/Blog/public/tags/面试/index.html","cfd5c91dfb62a02e5fb355ca170fc387"],["G:/Blog/public/tags/靶场/index.html","5221055ce7c9235e04b63ff1826137a7"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","09d767bd6e6dc6db17214a8691373bdd"],["G:/Blog/public/留言板/index.html","1b4946d9dfb0a686892c3dab2433ef12"]];
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







