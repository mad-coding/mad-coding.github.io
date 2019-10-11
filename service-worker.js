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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","d5d6fc6e743f1ddffa2299242b0ecc1c"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","87ff288fea90f4a251be72b7a510e97e"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","0fbc678e147af70a0969e0486abad6f6"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","9d64b6c4af8239a19f4bfc23c2a822e6"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","73fb7ba9571340f4f4c505d30e4bd0d2"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","47674a4ab7134f573beb38718c174c75"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4fa52a8b6926ec20e0992b870e77b80a"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","5ed3a1018f60fc4f78d2c22e2b083611"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","84479ad24b25e2721a79b8fadfbac808"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","c1fd9a9497beadb1361c7ac29e823515"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","99169511e8ea5968ff217c97955849bb"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","49658c57e29f237abd124d08d9854a64"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","cd0825bf693379a0512b63cbccef066c"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","ca77019f8ee3d51a606cb722dbec9648"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","86cef7a952d11cca1e172672aa08e593"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","c23d1c2a2aaa8f09d1f20b9cec2f9700"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","4ab21e2d1b99fc1d07ed52cd86196a72"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","61d1f2c474ad3125875a45ce688221d3"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","bf1797cab47a9b4dc64ef1ae3cbf4739"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","7da753d5d3f34ca7280b75ffac32bbc4"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","c72f0e5ec56ecb1b90e375abfe694676"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","8b05997ff3b2c84eccbda8074155b1b2"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","70f420bde21c2f81c7c2ebe7cca5d875"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","d740c724f26a87085ec8d3d7b79b3189"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","3f497c5ad0a001e344ad0e3a613e6086"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","c793bb4d38fc9df8e7ff8f6d237b2eb3"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","d9e0e92eaf808d05d33eeadfe14d8fb0"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","1945cba6acb3a9c7a0ad13251e147f2c"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","0b0837ee79253612b2315cc63a72d2c3"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","a0e6def1aa5d4dd6c533d4be4349bb53"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","ad18d8227da7f824d6acae96b6d33966"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","f87514c93501c535287f731167e4e9d8"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","1011b37eeb0affca9f25570e6cc9aad2"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","4145cdb3c739c0bec1eb9f9e4c84443d"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","f6ed4bc2a83de41cb4f83d78267b6f2b"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","06119d8bb23355968cfccb4604a5efde"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","9fa4e4457813d6a2de3208b232301577"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","02dd3b769bdbf1aef7f76afddad74c39"],["G:/Blog/public/about/index.html","2186e7e5d31687515999227cbbdf4076"],["G:/Blog/public/archives/2019/07/index.html","bdd6ecefced748020f53da32844b005f"],["G:/Blog/public/archives/2019/08/index.html","31c596a924eab648f9ca46e341bc1b8c"],["G:/Blog/public/archives/2019/08/page/2/index.html","782fbe682b6f6e3d13c36b96b59a9daf"],["G:/Blog/public/archives/2019/08/page/3/index.html","25340bc05b81ddec29de41e5dd2b4243"],["G:/Blog/public/archives/2019/09/index.html","65e9e3d3bbe6c633d3cec3a7a463c974"],["G:/Blog/public/archives/2019/09/page/2/index.html","43c832a7d75ab4dc8586602d101688a0"],["G:/Blog/public/archives/2019/10/index.html","381dff986a13b02f1bb3d9e46c0b6f81"],["G:/Blog/public/archives/2019/index.html","3f029df05916c61546ceaefc42e99d23"],["G:/Blog/public/archives/2019/page/2/index.html","063241331fdbbb7207a3fb44bdefdd89"],["G:/Blog/public/archives/2019/page/3/index.html","264817deccc8dee46bba87fb6d0be176"],["G:/Blog/public/archives/2019/page/4/index.html","3d350cfe92272f193515a723f2c58567"],["G:/Blog/public/archives/2019/page/5/index.html","ce4512aeff756d0e1fa0b4939afe44bb"],["G:/Blog/public/archives/2019/page/6/index.html","41e0d3c3bb5902932b5195eb72fbb802"],["G:/Blog/public/archives/index.html","2fdee8f61c344501defc2e42db4787b3"],["G:/Blog/public/archives/page/2/index.html","2379c3b10d8e7a9c5cdfaacbeff68c2a"],["G:/Blog/public/archives/page/3/index.html","391787d5fdb3f8a7fead59ed8100544b"],["G:/Blog/public/archives/page/4/index.html","463a0ecd839802f345c1cf092f21e9b3"],["G:/Blog/public/archives/page/5/index.html","fdfb08a5b38bbec2083e617d019b6ead"],["G:/Blog/public/archives/page/6/index.html","37e6f4c524c02a1faf5cc2fd17ec1094"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/Linux/index.html","fd366c6b7101c15475233cf2f7c4a806"],["G:/Blog/public/categories/Windows/index.html","c2d3cd18465ddb70c51a9c9831a5a0ba"],["G:/Blog/public/categories/hexo/index.html","4e02568c58bdc37c66436b5e79e34d78"],["G:/Blog/public/categories/index.html","d96b645626b0dcc4b65f3254d7e2d1e4"],["G:/Blog/public/categories/安全工具/index.html","b4689b76be10470197fe9bbed6afa399"],["G:/Blog/public/categories/安全工具/page/2/index.html","61c2fb635c5675430c026258c3feebdd"],["G:/Blog/public/categories/思维导图/index.html","e8c01932fea17a741dde648859ee5d7b"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","57ab6d5ba4f4b4e1566cb2c77ea84e24"],["G:/Blog/public/categories/教程/index.html","48b08e62a80005e47dc5a0d996f5ce12"],["G:/Blog/public/categories/教程/好玩/index.html","0672ba4e4ea768c13997fb82fd4052f9"],["G:/Blog/public/categories/数据库/index.html","d1d30a0f9f1e4e02d37bb8564570e62a"],["G:/Blog/public/categories/数据库/mysql/index.html","fdae25d66d84a88fcadb36b4b8f028c8"],["G:/Blog/public/categories/渗透测试/index.html","f89e8372703b14e027f2b1d605a271de"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","2da5c24de39e40ebe1b3972b87d028bb"],["G:/Blog/public/categories/渗透测试/靶场/index.html","cb6ac62d95320a9e79c3c116b9638d8b"],["G:/Blog/public/categories/翻译文章/index.html","f9bfe208f1a6aad657ae3343b37ef048"],["G:/Blog/public/categories/记录生活/index.html","c1aed5dc7a9d3c64a88f49f8a011c01b"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","2034b6591c2442b85d1d4758716c6f91"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","dfb88867f153af24a65392b39fdf0dd1"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","c8d0993666c9b003fed7dbf9de167a6a"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","b495609e7a5e3bf94e4ea13f39ced4ea"],["G:/Blog/public/page/3/index.html","aa1d540ff78107f4f76c53cec35fff1b"],["G:/Blog/public/page/4/index.html","5d1206b3a37fde2e29ebd3965704b001"],["G:/Blog/public/page/5/index.html","b4e1ccaadc6b23529838be769ba878f2"],["G:/Blog/public/page/6/index.html","c61883a42d3bbc4023d3a9bf46c5f84a"],["G:/Blog/public/pan/index.html","5794f2804fb9a24d1f4eaa8c4a9279af"],["G:/Blog/public/tags/APPscan/index.html","e89b6f0cbc4846102a1c075d2fa51ccf"],["G:/Blog/public/tags/CTF/index.html","67ecaffb125125bdadb78aa38894aeec"],["G:/Blog/public/tags/CVE/index.html","ca71d45a728385eae7b17cb498ccf852"],["G:/Blog/public/tags/DOS命令/index.html","ed91fb6b513c2caba8f79696794bc0aa"],["G:/Blog/public/tags/LADP/index.html","68df3f1f195c405983d6420a3e61ee28"],["G:/Blog/public/tags/Linux/index.html","d43046462bdf8c0fb59beb2aa1075bd1"],["G:/Blog/public/tags/MobSF/index.html","da309661ae2075a59fb60eb1f1c7beb7"],["G:/Blog/public/tags/PHPstudy后门/index.html","c26cca0511c1ed90bcee85b5f6640ea9"],["G:/Blog/public/tags/POC/index.html","93624f553fc36f31d5c7c40892ba9f8c"],["G:/Blog/public/tags/Windows/index.html","a781600cb275a916b0f2b4ccc4e483f1"],["G:/Blog/public/tags/XSS平台/index.html","2cd5daaef3c66b7f1f4dc50eb7777e4a"],["G:/Blog/public/tags/burpsuite/index.html","b6cefe466a0d46be76d28555a2aba631"],["G:/Blog/public/tags/github/index.html","efdf51c398cfebc4d21fb3e5f8ae0a1e"],["G:/Blog/public/tags/hexo/index.html","b2771ab7a4bbc7ea017b2cc73a314778"],["G:/Blog/public/tags/index.html","dda804667cd4e3aad1de5d2f2860adfb"],["G:/Blog/public/tags/kali-Linux/index.html","269da0ea333495262f96b1fe0272c83d"],["G:/Blog/public/tags/mysql/index.html","e719b6850208f23368cdef82edecf2db"],["G:/Blog/public/tags/onedrive/index.html","24f92077e01a73a6a48142d8cce757f8"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","3c4ad0695b35526858204e1769c364b3"],["G:/Blog/public/tags/python/index.html","9aa1a0281c29bf05a028d9ee82f2b86e"],["G:/Blog/public/tags/telegram/index.html","b38795ea0e9d44f2b833fb83a35526d5"],["G:/Blog/public/tags/xray/index.html","b727f22115ddce461a9fe5cad06a3d23"],["G:/Blog/public/tags/个人网盘/index.html","fa8365db4692938c8ad87390277caf2c"],["G:/Blog/public/tags/主题功能/index.html","d415886bbbbf663920ca5f4fc80ca3ed"],["G:/Blog/public/tags/优秀文章/index.html","3aa7b98cfbb684151f9b3b53adb8bf6e"],["G:/Blog/public/tags/信息泄露/index.html","7df889cca614e0c41f5aa009070f1d12"],["G:/Blog/public/tags/博客/index.html","b695368d24d3e0446105053e7f07b828"],["G:/Blog/public/tags/命令/index.html","ecf5a67fa77e622da8394a484fc32eda"],["G:/Blog/public/tags/图床/index.html","00f5e3e72af36e0d9709c204dc1d69ba"],["G:/Blog/public/tags/基础教程/index.html","20c4a1e753b5d11f0fcbb9ff3cff79a9"],["G:/Blog/public/tags/夺旗/index.html","c6f7a5d98f7cea870ade4f93d2df0670"],["G:/Blog/public/tags/安全工具/index.html","9442012d6dd6feb4a0fdf1b7eadf95f6"],["G:/Blog/public/tags/工作/index.html","6b3a698f797e42ac9063fecc8da391e5"],["G:/Blog/public/tags/应用程序测试/index.html","19164eb61fc8d9f35f33f2e9a7e14fde"],["G:/Blog/public/tags/数据库/index.html","b342ded517bf769241b27d07e72f5bb4"],["G:/Blog/public/tags/文章模板/index.html","db99b42afdf838900376148eb9a5fc9c"],["G:/Blog/public/tags/方法论/index.html","8dd4ceade8d1c75593593dd616cd8270"],["G:/Blog/public/tags/机器人/index.html","c8e5e6ca81a8cebf62be064ba002e268"],["G:/Blog/public/tags/渗透测试/index.html","91fd68e9c95a1b226857fe7521d8a405"],["G:/Blog/public/tags/漏洞库/index.html","64cf7f7a04da72dd60039ad14b531b99"],["G:/Blog/public/tags/爬虫/index.html","2285f40413d5f7a042a2fa9d18e1c7b7"],["G:/Blog/public/tags/生活/index.html","2d8e025434584d462268eb94c795ca41"],["G:/Blog/public/tags/缓冲区溢出/index.html","e10a62a3b48d8dc2ce75512500de4321"],["G:/Blog/public/tags/解决问题/index.html","433a6eee93aa301e3072f9b2cfda9ad0"],["G:/Blog/public/tags/豆瓣书架/index.html","58a174dc558599feb5d41f693c3adad2"],["G:/Blog/public/tags/转载/index.html","3838c507780c1eec40efce587346dbaa"],["G:/Blog/public/tags/面试/index.html","3cb0f57be0dcde9b0d303aa4d533a29d"],["G:/Blog/public/tags/靶场/index.html","fc2aa27fe135fb68f6c5be45905c9557"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","5e2a25bb196c68236cde3c67179c676d"],["G:/Blog/public/留言板/index.html","55bd858f087b064b0f3cbf82ac81c929"]];
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







