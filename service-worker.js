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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","5dafa170e09e13655dda18bdf19d957a"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","5c0f93c183f14a75bea47f8e2f5c9c28"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","43e5846aecc42d216fd5a1e27c20f121"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","622867e251ffaa3dfc45238220521c60"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","002a26ccc24a9aeebe8b6df5f4cd4184"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","84bec445f485bff51b20d5b5c472184f"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","e9e756d6e134b78588fea46195903d6f"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","980bc27469dc2832adcb99da6f601e63"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","25301d34d3396dfb811813716e28e5ff"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","3fa3f3fe0f5b73efada47dfbd210cf36"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","fb7b885b4d849141ca316cc281a24b22"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","997e56332d3a517caa6780ea7a270fdd"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","7678731988a1a0208e0d231b739ddb32"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","ddc3e085245aeb68d7dc7c4f0c1d7dfd"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","5cb535a470897a5968702f43b12dd09c"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","b96c1a59689fa78599730d0ecb69256a"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","acefe7cf949ddcbcd1329bef57893837"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","2ade25b3fccea486f0ab2c8a73c1b30e"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","e2ee52c9f2421739aa155db5b0b85387"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","7b61bb6192730e7b941513a22c1fff5f"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","63c7ae816d85a47e4084b2453d5f55a1"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","579a3a97c0b61fc0ce749e5759bdc006"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","e5304dd70a1fc17a8463afb2b25a63ae"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","46d5e633b894030981b5b929418f1e4d"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","d0dec0534de50443d9d29229648626f8"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","57a164a74d00a3bc41d92ccbf3eafea8"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","a66dfd9802fd8e69d2d2f44501d090b9"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","789ceca1641aef6dc3fbb4b7e07c2b35"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","b36d8dad1a89782586254966273a4625"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","f000a7977cfc3e27825d1ac41f540965"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","98f0c8d0ced55fe97db8b2230cb42f87"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","0de76c2960847a46b1ea7fd26545cc2a"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","8d7a3297863f35fc7eb0cd683758da26"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","7eb0a5990081133ed1c35cb1f4786f50"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","68be1bf739ed0c5937ebb480c2d4bc77"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","e83c3c3f0c397ce1834b6e18e0d0b272"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","3e0c9cdae318531ea01554cd8c866832"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","d82e032b9028fcebdfde85e6b755d7fd"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","aa94b9aa1655a4fc96d062aad5c44229"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","8878df515b368feda1ecd3b82c50fed2"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","52193882fc54b52f4f55145e27608eaa"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","d58a971a10133feff1e26990d8741c84"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","e0e543077ab14e905317cf10bd1e03b7"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","c0d10fe2a768c845194213124784cdbe"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","8e0f75940e6d566e313c90e0ca2dfcff"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","906bd6f91251e2639537b75cdf281659"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","0fea3e34a8522e88115d17129425bf75"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","5c171166eac801add6136a8ab5d7a83e"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","d728389f2847a08b95e639e1d6b27cd6"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","1e584815973a5a671e80c035deb5063f"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","3735037b54a76130a0ee14dbcdf6c02c"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","3aab1ba9d7ab62ca2d80cb6a649667ad"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","ee6fbc84ea038fda62ee1a329e117687"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","5657f4b990a00c3ae697c98fd8be4d68"],["G:/Blog/public/2019/10/24/网络安全法/index.html","a5bd32de49d0ace0e8add0dff6bd9927"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","81799cad1b4da169af2e0b132e0cb4c9"],["G:/Blog/public/about/index.html","7cfd55416acb8a60ab0f641634b33ef7"],["G:/Blog/public/archives/2019/07/index.html","ebcf0cc9938853936dd94df2ad8b331b"],["G:/Blog/public/archives/2019/08/index.html","1964b35244383e77945dfb40aab3bcd5"],["G:/Blog/public/archives/2019/08/page/2/index.html","2d7f46bacba37e545f8704e96a482062"],["G:/Blog/public/archives/2019/08/page/3/index.html","6a4e8123c76c300c63cf52a07af9d064"],["G:/Blog/public/archives/2019/09/index.html","8eb3d6b8c8bd8158efcc961606cf008f"],["G:/Blog/public/archives/2019/09/page/2/index.html","6f440b6ada997e066dec1a3435992707"],["G:/Blog/public/archives/2019/10/index.html","551a626d27107fe2cfc1e4bc887d4845"],["G:/Blog/public/archives/2019/10/page/2/index.html","dd313b7e12646f78608399a8ce7ba0d6"],["G:/Blog/public/archives/2019/index.html","de8e58db5a41436bd7a974023a5294a5"],["G:/Blog/public/archives/2019/page/2/index.html","70620ee6a8529ba43668a744742ff06c"],["G:/Blog/public/archives/2019/page/3/index.html","61ed485c58934c7af0e9b212af78d9d0"],["G:/Blog/public/archives/2019/page/4/index.html","ea80f968b7acc112a6ff6bb25c5863f9"],["G:/Blog/public/archives/2019/page/5/index.html","f9198046dfe6a8664c6d2e7e787b93a6"],["G:/Blog/public/archives/2019/page/6/index.html","afd9f232e1cdae4fa9028f350a11bef1"],["G:/Blog/public/archives/index.html","29db8e435f650d7f141bb79a3f2a549b"],["G:/Blog/public/archives/page/2/index.html","b2cbfe4ae33d9af06ea783a045a64880"],["G:/Blog/public/archives/page/3/index.html","4d3f9c90c15f622bc782f3b67a9397a0"],["G:/Blog/public/archives/page/4/index.html","b218a9031948dafdbdbd5095995c43c6"],["G:/Blog/public/archives/page/5/index.html","dda1e2af569e18c471507b9fd513c123"],["G:/Blog/public/archives/page/6/index.html","244cee262cbe44a9b8ff6e2803a51eb8"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/Linux/index.html","4eee12b3db9b8062c8169221a8db6c64"],["G:/Blog/public/categories/Windows/index.html","912e9ccbcc3dbcdd02ac1c025c7b7948"],["G:/Blog/public/categories/hexo/index.html","ccdf5248eb8f846145fbe2c38ea95278"],["G:/Blog/public/categories/index.html","8b85c7f92b8c36582020f04d2b7f073c"],["G:/Blog/public/categories/安全工具/index.html","b93650a970078db828fbb158f37a1eb1"],["G:/Blog/public/categories/安全工具/page/2/index.html","4c47ef3f5449d1bb251f63369279f19d"],["G:/Blog/public/categories/思维导图/index.html","d9cb92fdca5af8c997c8e28213a35ac5"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","a3e5471dfb0e49ff38b5f58a37c2ff4a"],["G:/Blog/public/categories/教程/index.html","62176d2f8d31243d9f3f95314aa53f76"],["G:/Blog/public/categories/教程/好玩/index.html","2fcda6901b9e47ca0342392504eb6dfc"],["G:/Blog/public/categories/数据库/index.html","0644f001cb60e8e9a1a1cab9baa34eba"],["G:/Blog/public/categories/数据库/mysql/index.html","ff1f0a91417aaedf5fc9d176e4053108"],["G:/Blog/public/categories/渗透测试/index.html","308d38a7a55090bbf9ea8b6a041d1be7"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","cebbf228f517228f4ce83831bf215fea"],["G:/Blog/public/categories/渗透测试/靶场/index.html","38afb8b7036673fe6d2ab867d9faa0ca"],["G:/Blog/public/categories/社工工程学/index.html","01def9fbbf45665497f9c04ec691e1a8"],["G:/Blog/public/categories/等级保护/index.html","a7d861f94eee88abb6fbbca644a68797"],["G:/Blog/public/categories/翻译文章/index.html","5620ed14603c747788a0b16a5c5e9893"],["G:/Blog/public/categories/记录生活/index.html","0ec5c9431925e52ef1fe444a19c71cd9"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","4550d7d7111cba0e4fc5238829d9ea5a"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","f7b05a349da1fd7265e36eb27703be41"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","70b557bba894c43f168dca4551da58b3"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","7ea9c42a652df44799dcb2b628c2f236"],["G:/Blog/public/page/3/index.html","290590a4f05805bd7be01a34ac9b6db5"],["G:/Blog/public/page/4/index.html","a1c0a95aada38aef5b6d9181de964e1b"],["G:/Blog/public/page/5/index.html","5017bcc9ae83be60d2f7edca06afd029"],["G:/Blog/public/page/6/index.html","07b736484a56488f2598ec457a565175"],["G:/Blog/public/pan/index.html","da4c8b2ba6dcb97c4939876a8e68885f"],["G:/Blog/public/tags/APPscan/index.html","d2be44a6bfc34080870f2f692686b0e0"],["G:/Blog/public/tags/CTF/index.html","998bfd5278e0db6828e9cc0e8d2ae9e3"],["G:/Blog/public/tags/CVE/index.html","94afdff5fe2b390ef4ac05558e9ae8df"],["G:/Blog/public/tags/DOS命令/index.html","9ba1934d2221218eb3a7ddd2808d1708"],["G:/Blog/public/tags/LADP/index.html","3934c0c0753d812284b534572b6aae70"],["G:/Blog/public/tags/Linux/index.html","5100ffbbced9af7c0e9926a27b05f843"],["G:/Blog/public/tags/Linux笔记/index.html","59e335a6cf9626964d176b0f80e2e581"],["G:/Blog/public/tags/MobSF/index.html","0f16fc068f256f8a52fff7c45c7117a9"],["G:/Blog/public/tags/PHPstudy后门/index.html","3b57fa82805ef62ab4aec72815a727f0"],["G:/Blog/public/tags/POC/index.html","3559e9c0f6c06e3e07026419951c7166"],["G:/Blog/public/tags/Windows/index.html","bd9c11ad6a63994499e40b1d1978d618"],["G:/Blog/public/tags/X-RAY/index.html","7e43334fdbd8818d9c5c0098607acc29"],["G:/Blog/public/tags/XSS平台/index.html","920c4f4fb25e363b4129c15853833169"],["G:/Blog/public/tags/burpsuite/index.html","d2e50c3dfe8c9a3e054a761180504a83"],["G:/Blog/public/tags/github/index.html","2b9bc8569260b56a976ad6a099d01c64"],["G:/Blog/public/tags/hexo/index.html","d56066a9e38ac27ade79e326e6d4726d"],["G:/Blog/public/tags/index.html","a1b0b4f527fe9c25ad6fb3b36783635b"],["G:/Blog/public/tags/kali-Linux/index.html","275c939c1825e6e55f8ff2deea21008b"],["G:/Blog/public/tags/mysql/index.html","ca111cc188fc02f3299ee0c40edc1554"],["G:/Blog/public/tags/onedrive/index.html","3a4bc1056742a274ea0c524489d3f0c4"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","918f49dc6854c282ef089643d7f95325"],["G:/Blog/public/tags/python/index.html","793a26e370393e680d1df578947ef16d"],["G:/Blog/public/tags/telegram/index.html","d6e2348735fc230cd5bd13b367f4e3e9"],["G:/Blog/public/tags/tor浏览器/index.html","af6781a0d1b1cf2252688c001ceb499b"],["G:/Blog/public/tags/xray/index.html","ef7aabd5ed2a99ad03d9b1c672889b26"],["G:/Blog/public/tags/个人网盘/index.html","c621517c42bdaf167418b750dcfa476e"],["G:/Blog/public/tags/主题功能/index.html","07505fba0717339b1f0c3963767f554b"],["G:/Blog/public/tags/优秀文章/index.html","187b2fd3b51317bb26789a0f16f8f93f"],["G:/Blog/public/tags/信息泄露/index.html","b0d62d7f0d948a5471caffa4de1c5fec"],["G:/Blog/public/tags/博客/index.html","3a1900226f48deed8cb7eefaadbc8968"],["G:/Blog/public/tags/命令/index.html","a0ccfe6e083e1f9071250864b86dfdac"],["G:/Blog/public/tags/图床/index.html","8a1f8fc81c009ebad679e2b676399f57"],["G:/Blog/public/tags/基础教程/index.html","0b24838a8f6012bfa21914a61ddf8f51"],["G:/Blog/public/tags/夺旗/index.html","2fcea29a5a6726dff300a419327c7d38"],["G:/Blog/public/tags/安全工具/index.html","b82e2ad508567aa4bcd5c2603f3f70bd"],["G:/Blog/public/tags/工作/index.html","6bbb4a67e89a023745ee4ba34f0d8b22"],["G:/Blog/public/tags/应用程序测试/index.html","75d2aeb3b4f496f6ae494573aee45801"],["G:/Blog/public/tags/数据库/index.html","9304b1c2b74fcc533d41660693f95f91"],["G:/Blog/public/tags/文章模板/index.html","66f78c67b750471cfbca408dd782db03"],["G:/Blog/public/tags/方法论/index.html","b3c363d080a9c07f179d448a2afc8a51"],["G:/Blog/public/tags/机器人/index.html","d0a8f29d5102a1e305eb766b21811859"],["G:/Blog/public/tags/法律/index.html","53cb21d510e8852b35f2ba2cca8be863"],["G:/Blog/public/tags/渗透测试/index.html","225d62a41c6b9a113013b2749852782e"],["G:/Blog/public/tags/渗透笔记/index.html","8a0c6a4c6b13dc2f710beffb0edb7911"],["G:/Blog/public/tags/漏洞/index.html","dee141db5d277b040891be6800d5acec"],["G:/Blog/public/tags/漏洞库/index.html","8f3c7bbd05eee8a5e4772082013322fb"],["G:/Blog/public/tags/爬虫/index.html","4315b7e64808d7109e58eaeb54c6dafd"],["G:/Blog/public/tags/生活/index.html","cf6f22ed05f13dfb587e8c07e47cf00d"],["G:/Blog/public/tags/社工/index.html","a91e1b493f34413046a19ecdb645ceef"],["G:/Blog/public/tags/等级保护/index.html","927761fd38c894f24476aed2a329724e"],["G:/Blog/public/tags/缓冲区溢出/index.html","f42f7776d431a3a9d798eabc3166be8f"],["G:/Blog/public/tags/解决问题/index.html","9852e38c49daf1b4fb9f441036e4e2fb"],["G:/Blog/public/tags/豆瓣书架/index.html","f67caaec1d22d362641e423ba5470fc4"],["G:/Blog/public/tags/转载/index.html","7d6b048bbd68e5dc266c302e1804188d"],["G:/Blog/public/tags/面试/index.html","f72397a9176fe4fc323842eafb70b34b"],["G:/Blog/public/tags/靶场/index.html","f4db54c4513c1f7cb9bd8a2d6f7a2931"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","5831e49e6cace589b1c67ca40bedc261"],["G:/Blog/public/留言板/index.html","fcd156e7a8b7d76787435c9be2fd25cd"]];
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







