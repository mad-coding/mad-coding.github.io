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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","94799a9029f3136ee4d9d2a2329caee2"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","b6bbfc91e1d90e2b10703ba76732be9c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","12f88ddcd6e826c5b8de72bb505faa74"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","d5d6fc6e743f1ddffa2299242b0ecc1c"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","cc96014996afbbbceb612bb1b882f1fd"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","cf8c1d91cf0ce52eaec0a9b0cf94b571"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","87ff288fea90f4a251be72b7a510e97e"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","c5ad0125a172301f4b8ac284a975a08a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","981cdc7b77691a509881d203d9367c2b"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","9d64b6c4af8239a19f4bfc23c2a822e6"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","17a2204c82122ff61a3686e6bc4e0208"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","23bc7c4a1e7f8cab8233d7833349399d"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","73fb7ba9571340f4f4c505d30e4bd0d2"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","47674a4ab7134f573beb38718c174c75"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","4fa52a8b6926ec20e0992b870e77b80a"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","5ed3a1018f60fc4f78d2c22e2b083611"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","84479ad24b25e2721a79b8fadfbac808"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","c1fd9a9497beadb1361c7ac29e823515"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","31abfc0bd9a7242ab572acb593ac5d7c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","3146f903afaf2750ab9b2e6bb4581c9f"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","49658c57e29f237abd124d08d9854a64"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","638422bdffabda388e7cdd8fb058bb1b"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","e2b08051c0535f07ff1c9a329ac392ae"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","cd0825bf693379a0512b63cbccef066c"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","ca77019f8ee3d51a606cb722dbec9648"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","86cef7a952d11cca1e172672aa08e593"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","22edd2519ed6e6d12158f23b434a3dc8"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","7ddaabd883b889135da3427759eee5a4"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","61d1f2c474ad3125875a45ce688221d3"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","bf1797cab47a9b4dc64ef1ae3cbf4739"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","7da753d5d3f34ca7280b75ffac32bbc4"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","c72f0e5ec56ecb1b90e375abfe694676"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","8b05997ff3b2c84eccbda8074155b1b2"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","70f420bde21c2f81c7c2ebe7cca5d875"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","d740c724f26a87085ec8d3d7b79b3189"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","3f497c5ad0a001e344ad0e3a613e6086"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","c793bb4d38fc9df8e7ff8f6d237b2eb3"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","d9e0e92eaf808d05d33eeadfe14d8fb0"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","1945cba6acb3a9c7a0ad13251e147f2c"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","0b0837ee79253612b2315cc63a72d2c3"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","a0e6def1aa5d4dd6c533d4be4349bb53"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","54f992297c8e8eab79bbbe29ff88d3ae"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","f87514c93501c535287f731167e4e9d8"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","1011b37eeb0affca9f25570e6cc9aad2"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","07ed182118a04a1b62e42cdd022b9c71"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","f6ed4bc2a83de41cb4f83d78267b6f2b"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","06119d8bb23355968cfccb4604a5efde"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","a485c41fe89bf7757820ee4dae1b0d8f"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","02dd3b769bdbf1aef7f76afddad74c39"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","79ce627ef5cf4a22e927c27be6283fb2"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","9ce21d5dc03eeba9574b0c7c704e5ff7"],["G:/Blog/public/about/index.html","016c1d08d60ac66b5e0b5a7a20ee1ee7"],["G:/Blog/public/archives/2019/07/index.html","defb3018770ed4c87941832a320bd1ed"],["G:/Blog/public/archives/2019/08/index.html","3d2eefd254057b67c4425832f79d230a"],["G:/Blog/public/archives/2019/08/page/2/index.html","2af1413034cfeb384bcdc645295e542a"],["G:/Blog/public/archives/2019/08/page/3/index.html","4e1713c99a5a2b3bbdb04864318a7c32"],["G:/Blog/public/archives/2019/09/index.html","4f3eede8105e3c561db124667929c277"],["G:/Blog/public/archives/2019/09/page/2/index.html","904efc1d5d69683f6ebdc632986684a4"],["G:/Blog/public/archives/2019/10/index.html","94b8d81883626262e23026c8f1f30b6d"],["G:/Blog/public/archives/2019/10/page/2/index.html","988ef5c7f36ed8e83580658251724547"],["G:/Blog/public/archives/2019/index.html","0c5ed46fd5f644330aa221a722ab1341"],["G:/Blog/public/archives/2019/page/2/index.html","a2b35fc53b735f858a29de01840b0ab4"],["G:/Blog/public/archives/2019/page/3/index.html","dfea3d824f6e3aa77b8c56cf0fc3266c"],["G:/Blog/public/archives/2019/page/4/index.html","67215d2716596b222030712ccb8a5449"],["G:/Blog/public/archives/2019/page/5/index.html","5da16c77c651815fccaa4a1306edfb4b"],["G:/Blog/public/archives/2019/page/6/index.html","78cdce549f314f157d7a238d08002ccf"],["G:/Blog/public/archives/index.html","3e7f79a7d8b014dd353ff0ea644e5d12"],["G:/Blog/public/archives/page/2/index.html","aae97bc2cb95a358f7229cc74a4a4ec7"],["G:/Blog/public/archives/page/3/index.html","6d40ef179b6631474e4f7d979e077b34"],["G:/Blog/public/archives/page/4/index.html","7390fdaa3b75b04ceb248b3b96e324c6"],["G:/Blog/public/archives/page/5/index.html","76dc747ba6e2233892efc54974239de5"],["G:/Blog/public/archives/page/6/index.html","16f112aae936b22609a23845c1500cee"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/Linux/index.html","f9ea23b2ed2dc491ef3e199198e76b3d"],["G:/Blog/public/categories/Windows/index.html","e316fe09b431b2e1573144467566d736"],["G:/Blog/public/categories/hexo/index.html","829b99f2201cd37a3e8db84b74bb5330"],["G:/Blog/public/categories/index.html","f99214791a9cb78d65904711bc7814b2"],["G:/Blog/public/categories/安全工具/index.html","72a66301130c2ab4ddb3d4b12eec1d52"],["G:/Blog/public/categories/安全工具/page/2/index.html","fbf4facfd1e42dea4493ac92fa729055"],["G:/Blog/public/categories/思维导图/index.html","2e803dd652bd692d6bc5e34906936c05"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","3e1399b8883f42ba29afe27c413dc3f1"],["G:/Blog/public/categories/教程/index.html","7a9b0dde94091de99af5c772cc183f85"],["G:/Blog/public/categories/教程/好玩/index.html","8e8557e6bd7729380935f1ab79afafc3"],["G:/Blog/public/categories/数据库/index.html","4efaebf7a5e20649dc9efed6f366acb0"],["G:/Blog/public/categories/数据库/mysql/index.html","05fde3609ab410f526fca3a078ea7f2d"],["G:/Blog/public/categories/渗透测试/index.html","a97b79d50a43bbddc53e6d0de9a33f8e"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","600ba03c90646436c68ee18f46ef9983"],["G:/Blog/public/categories/渗透测试/靶场/index.html","8d5bd42e408190a3ee6cb83d3cf93461"],["G:/Blog/public/categories/翻译文章/index.html","83c9944640c68c377c1f89eb05d4303e"],["G:/Blog/public/categories/记录生活/index.html","0dfb14b0c6fc2e67f62c133ebf3ceee0"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","4ea07d9f4d31ecde2ef64743e9085fff"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","359e0f0b0ea9d284c7ddde82c773d6be"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","2d88e82be883d8435818f68725274861"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","7a91989b5a98c841e94c5f03b6fb837d"],["G:/Blog/public/page/3/index.html","8a52c2cad507d595940df28c3a65a1c5"],["G:/Blog/public/page/4/index.html","5b1ef17da3c061f899a68e202c371c5c"],["G:/Blog/public/page/5/index.html","c45334f96700929554b78af40661bda3"],["G:/Blog/public/page/6/index.html","142bcf032bad2bed235c68b53b585810"],["G:/Blog/public/pan/index.html","9a3a916301dcf5da367ed2c8b63d0f4b"],["G:/Blog/public/tags/APPscan/index.html","834a54d46e92de36703ed5d9564286c1"],["G:/Blog/public/tags/CTF/index.html","c4b6fcbf40c99f23699ff4eee4cad949"],["G:/Blog/public/tags/CVE/index.html","f18deab08ebe367e29184b09762ad3b6"],["G:/Blog/public/tags/DOS命令/index.html","f2ac4cf7b5e6c1525b093975398f5da6"],["G:/Blog/public/tags/LADP/index.html","9d28b8b0a5346759767ab282118936c0"],["G:/Blog/public/tags/Linux/index.html","9f391787c8892b549140cfd25171c3c3"],["G:/Blog/public/tags/MobSF/index.html","85d6967660c7a5a0b9592e8387eb3826"],["G:/Blog/public/tags/PHPstudy后门/index.html","200b723358711b209e43821c88dfac4c"],["G:/Blog/public/tags/POC/index.html","627d9505eb627ce56d3ef049d076fcad"],["G:/Blog/public/tags/Windows/index.html","e5adff627d78dd038832d7c6298fa198"],["G:/Blog/public/tags/X-RAY/index.html","f51878356ea869b60d6bc7301e54aa69"],["G:/Blog/public/tags/XSS平台/index.html","4f19f2112403d02c7bfc6eafd71e6a42"],["G:/Blog/public/tags/burpsuite/index.html","1e07e496a2bcf8f9988e0e1d0257d273"],["G:/Blog/public/tags/github/index.html","7360d055c2882893d297424c89c3ea19"],["G:/Blog/public/tags/hexo/index.html","9e9d6478d678789494d3c521f6db324c"],["G:/Blog/public/tags/index.html","c67351e2261915af5582e36f1fc0b57d"],["G:/Blog/public/tags/kali-Linux/index.html","4399950bf07bf1db2b03c63b1f62764a"],["G:/Blog/public/tags/mysql/index.html","e6dc4a488211ac90bc9459dfcc363de5"],["G:/Blog/public/tags/onedrive/index.html","d6861b05739f719a2c8f4431a3ddd0f3"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","7c7199b3a15a326eb6f2cf348dfb93d0"],["G:/Blog/public/tags/python/index.html","b6a6e02b9abaf31537b619ab57cc8d41"],["G:/Blog/public/tags/telegram/index.html","8ee471b7d92dc7d3679435251ec59e93"],["G:/Blog/public/tags/xray/index.html","361364e836f8ced5c0e1d138722ceb1f"],["G:/Blog/public/tags/个人网盘/index.html","067565a249999322a64d987d835b0420"],["G:/Blog/public/tags/主题功能/index.html","8c9312f0eefed2bf173cb39107e436cd"],["G:/Blog/public/tags/优秀文章/index.html","56ee094bbffb44c75d46c24db02138ea"],["G:/Blog/public/tags/信息泄露/index.html","1ad56f66d56155ab5a9ae70b8b11854f"],["G:/Blog/public/tags/博客/index.html","61c1c0850f364e7ca4b802497a4b57ed"],["G:/Blog/public/tags/命令/index.html","9cea22d63631748ce5317ac12f2cfe39"],["G:/Blog/public/tags/图床/index.html","57e70f9607ad682f0c4637a13c305029"],["G:/Blog/public/tags/基础教程/index.html","13e83cf78bb6214cda7c6e6b080771ad"],["G:/Blog/public/tags/夺旗/index.html","54d2d3cea7cb732e8c0c13d2eeccdb2b"],["G:/Blog/public/tags/安全工具/index.html","bd874b6f39221980dd5a1f6961ff51c4"],["G:/Blog/public/tags/工作/index.html","6bbb4a67e89a023745ee4ba34f0d8b22"],["G:/Blog/public/tags/应用程序测试/index.html","b8d98051a67cb13e48f162de93d63daf"],["G:/Blog/public/tags/数据库/index.html","5bfbbf69a0b784025f0df062c350775a"],["G:/Blog/public/tags/文章模板/index.html","4c3653f58c1115aa04884f7d86aa7aeb"],["G:/Blog/public/tags/方法论/index.html","83d446e3e5f090352f3a44d0423cda5d"],["G:/Blog/public/tags/机器人/index.html","f2b3c070ab3fb0f7257d815c90c2d836"],["G:/Blog/public/tags/渗透测试/index.html","45c24a4ff7fb7503b9e93627272e3e0b"],["G:/Blog/public/tags/漏洞/index.html","16a352a0e1d1a766d5438463a48321a3"],["G:/Blog/public/tags/漏洞库/index.html","1977efe305e803d6d6221850e4029116"],["G:/Blog/public/tags/爬虫/index.html","71d546d6922bb3501d576ae5b2ed16ab"],["G:/Blog/public/tags/生活/index.html","87e10bf59a9f0e8176e51e13f441f622"],["G:/Blog/public/tags/缓冲区溢出/index.html","15d76f03df3337764973eacc43110f3f"],["G:/Blog/public/tags/解决问题/index.html","01518f1da8c42db8235a1e48a35ea8a0"],["G:/Blog/public/tags/豆瓣书架/index.html","fde26a2c75bd671aa29660b2e2c03516"],["G:/Blog/public/tags/转载/index.html","90f8156d79fa7ffb864fc6afe5493cf8"],["G:/Blog/public/tags/面试/index.html","faf9d2ad04f5ce898d6bc2ca84be65ce"],["G:/Blog/public/tags/靶场/index.html","9ccd1c23e504a62513ed1fbe26d27d55"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","1ae0b695d8200972f61388f6aadcd9cf"],["G:/Blog/public/留言板/index.html","36b832c39d0c1a218417e8f619eb6a78"]];
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







