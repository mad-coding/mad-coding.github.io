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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","5dafa170e09e13655dda18bdf19d957a"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","5c0f93c183f14a75bea47f8e2f5c9c28"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","43e5846aecc42d216fd5a1e27c20f121"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","622867e251ffaa3dfc45238220521c60"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","002a26ccc24a9aeebe8b6df5f4cd4184"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","84bec445f485bff51b20d5b5c472184f"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","e9e756d6e134b78588fea46195903d6f"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","980bc27469dc2832adcb99da6f601e63"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","25301d34d3396dfb811813716e28e5ff"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","3fa3f3fe0f5b73efada47dfbd210cf36"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","fb7b885b4d849141ca316cc281a24b22"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","997e56332d3a517caa6780ea7a270fdd"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","7678731988a1a0208e0d231b739ddb32"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","6b96067db37ddaaa36f99dc5f0b0ef83"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","5cb535a470897a5968702f43b12dd09c"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","1bfd51d47bb3a588096fda31812a367d"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","3546bd5a25aaef4b0402359aafa17cf0"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","cf50d8f35b9181a1d2362b068a542b31"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","e2ee52c9f2421739aa155db5b0b85387"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","7b61bb6192730e7b941513a22c1fff5f"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","63c7ae816d85a47e4084b2453d5f55a1"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","579a3a97c0b61fc0ce749e5759bdc006"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","e5304dd70a1fc17a8463afb2b25a63ae"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","46d5e633b894030981b5b929418f1e4d"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","d0dec0534de50443d9d29229648626f8"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","57a164a74d00a3bc41d92ccbf3eafea8"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","a66dfd9802fd8e69d2d2f44501d090b9"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","789ceca1641aef6dc3fbb4b7e07c2b35"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","b36d8dad1a89782586254966273a4625"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","f000a7977cfc3e27825d1ac41f540965"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","98f0c8d0ced55fe97db8b2230cb42f87"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","0de76c2960847a46b1ea7fd26545cc2a"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","cb0807c06bd11b4a4ca87a12b09acacd"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","68be1bf739ed0c5937ebb480c2d4bc77"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","fbd5c02ad4d763828741bb5eaca8b535"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","3e0c9cdae318531ea01554cd8c866832"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","d82e032b9028fcebdfde85e6b755d7fd"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","aa94b9aa1655a4fc96d062aad5c44229"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","8878df515b368feda1ecd3b82c50fed2"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","52193882fc54b52f4f55145e27608eaa"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","d58a971a10133feff1e26990d8741c84"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","e0e543077ab14e905317cf10bd1e03b7"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","b49231e8bc6ba1aa82fc33e44d710b9c"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","8e0f75940e6d566e313c90e0ca2dfcff"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","906bd6f91251e2639537b75cdf281659"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","0fea3e34a8522e88115d17129425bf75"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","5c171166eac801add6136a8ab5d7a83e"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","95b5e37f678a020201ed89bd279532a0"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","eccca0e9e36dac54d1d39b03b9e185fc"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","3735037b54a76130a0ee14dbcdf6c02c"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","1e695e9a818c802a51b3e62731a16350"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","e0b232f4f10a49263f762662c1d0279b"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","5657f4b990a00c3ae697c98fd8be4d68"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","231d24975990ef678578396b9dd07647"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","cd870b50fd2b6d73b3e7867a615872ed"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","7bec1e2ff2569df06611e82009a010cf"],["G:/Blog/public/about/index.html","4d41810b33fb946befbb9f057246a820"],["G:/Blog/public/archives/2019/07/index.html","c18832bc7f5988a0f5c82f09c18005db"],["G:/Blog/public/archives/2019/08/index.html","1c35077aa1a2d1ad1ad6b6664e5231ed"],["G:/Blog/public/archives/2019/08/page/2/index.html","92dae480c0060e281617febb86f1f289"],["G:/Blog/public/archives/2019/08/page/3/index.html","3288950f0cec11fb93cb01a954719cb3"],["G:/Blog/public/archives/2019/09/index.html","401ade6d31d4a2b592818918cefdaa0a"],["G:/Blog/public/archives/2019/09/page/2/index.html","3448db733b97d722de9d533465664ffe"],["G:/Blog/public/archives/2019/10/index.html","cee95116808f0eb45bce6894dbacf21d"],["G:/Blog/public/archives/2019/10/page/2/index.html","e04328657b61f907478b047d0d77115e"],["G:/Blog/public/archives/2019/index.html","0888f66177472b587735930a5d35b30a"],["G:/Blog/public/archives/2019/page/2/index.html","63189d899991fc1a3429478db38924e4"],["G:/Blog/public/archives/2019/page/3/index.html","4a62823b816fb9376b1fd9a9f3c6399e"],["G:/Blog/public/archives/2019/page/4/index.html","72d0a41067a5211b1e4a86b5fbaa0171"],["G:/Blog/public/archives/2019/page/5/index.html","6eeb608ac126f870695cba0f548eecb1"],["G:/Blog/public/archives/2019/page/6/index.html","3aada17f862eebcc8c05e45ab43182e0"],["G:/Blog/public/archives/2019/page/7/index.html","592948dee6a5e08f7091a95f6db5c555"],["G:/Blog/public/archives/index.html","1ba27e319c3ba9b550851128615561bc"],["G:/Blog/public/archives/page/2/index.html","b1cb9e90903e9cf82df911eeb95b5d54"],["G:/Blog/public/archives/page/3/index.html","a0be11468e47f952f7b57ec716c5d856"],["G:/Blog/public/archives/page/4/index.html","fd95cb67d22244e1ed85fcb26f2e6a37"],["G:/Blog/public/archives/page/5/index.html","fff8d4e10fbf8e135aa95ce5c8d739c4"],["G:/Blog/public/archives/page/6/index.html","c52f2f63f4e298a16824cc72f74d4b82"],["G:/Blog/public/archives/page/7/index.html","35b9e94e376095f6a9d3fad20eb82e3b"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/Linux/index.html","289a3c4a07a86090771848dd7b54c783"],["G:/Blog/public/categories/Windows/index.html","d33fcf8e5c87e1bb026a156291d3161e"],["G:/Blog/public/categories/hexo/index.html","faf9fd82f603b3f811a6bb5019f98265"],["G:/Blog/public/categories/index.html","488e8d9b7d70b29bd16639303150c48b"],["G:/Blog/public/categories/好玩/index.html","f82959d25d329f7573acc37d63fc5bc9"],["G:/Blog/public/categories/安全工具/index.html","dcc3e1969d890416b19f3d045da01f4b"],["G:/Blog/public/categories/安全工具/page/2/index.html","1deb8fa506ed6b1775628d553c04ee51"],["G:/Blog/public/categories/安全工具/page/3/index.html","4a0639d0302c44c26456a365bcc344e2"],["G:/Blog/public/categories/安全资讯/index.html","fd589335c1ea22ef0db9365ed0369871"],["G:/Blog/public/categories/思维导图/index.html","f664bbc89089a63f19d85ff97f44cdee"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","d223e438461c89ed732014d1d1b3961b"],["G:/Blog/public/categories/教程/index.html","3a02592b3fcf6397eba65b10618b1ce4"],["G:/Blog/public/categories/教程/好玩/index.html","6735f9ea200105b29d761c5fc2a59056"],["G:/Blog/public/categories/数据库/index.html","af5640fe70dc883c872f699ab4bb197e"],["G:/Blog/public/categories/数据库/mysql/index.html","95f11d859a558790e7ab4b4cdabf2745"],["G:/Blog/public/categories/渗透测试/index.html","98ed945cbb37e2408647462a8dc81d28"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","88350abba571605abd440cab6aa4e87c"],["G:/Blog/public/categories/渗透测试/靶场/index.html","246254f02a28cb54aabe486d29ae52a3"],["G:/Blog/public/categories/漏洞挖掘/index.html","df8974a2ccaee3e65aeefe85d03143d8"],["G:/Blog/public/categories/社工工程学/index.html","6bd8d9cc7a646b6d480a9778bffa55fd"],["G:/Blog/public/categories/等级保护/index.html","609b43fefcc4bbf04702c23032e9c48e"],["G:/Blog/public/categories/翻译文章/index.html","7bd815f0a29c61c2436d238501de9fa0"],["G:/Blog/public/categories/记录生活/index.html","19e0a1cf2e0071e2bdcfe389b6a14463"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","7cae569e07f14416403db047c16d8b33"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","1cb23dde5a3b3882bdbd6006a803ed42"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","6a9adc0253a17dd24143787757d00d55"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","90c5d75082883c7adb336484f0ceb348"],["G:/Blog/public/page/3/index.html","042b3b26fbd6a7992e17d1f38f6f0531"],["G:/Blog/public/page/4/index.html","ab195f3958ad0d8fac86fa28286608f9"],["G:/Blog/public/page/5/index.html","4b0401a3f393472e727dcbfd5d9bfef2"],["G:/Blog/public/page/6/index.html","9f21baafc83032feb2728668f1d54e19"],["G:/Blog/public/page/7/index.html","4f8cc84a30a951aecaaded07548e8fb1"],["G:/Blog/public/pan/index.html","979515d3a260837f1969ce845d3039ff"],["G:/Blog/public/tags/APPscan/index.html","bfad48595a1277f181453410aba514a4"],["G:/Blog/public/tags/CTF/index.html","83c7d7c9fa35c0028283dd77197007a9"],["G:/Blog/public/tags/CVE/index.html","c891abe0d7fcedfee20aff49c78203e4"],["G:/Blog/public/tags/DOS命令/index.html","212664277f96a0aaca71ee6e01d0a9dc"],["G:/Blog/public/tags/LADP/index.html","5e7ab4ebf9d556faa89e3049169467f7"],["G:/Blog/public/tags/Linux/index.html","2805deffbead85e24e26ce6a89182a56"],["G:/Blog/public/tags/Linux笔记/index.html","2c6a971b91ec29358874418ef7292c2a"],["G:/Blog/public/tags/MobSF/index.html","288c4e3a5f8f497c1eab47aebc3dc03a"],["G:/Blog/public/tags/PHPstudy后门/index.html","d9f137b0b0fb4c95cb237a308bd6ab1f"],["G:/Blog/public/tags/POC/index.html","5f0b4fc84d71a3503d6e1b997b52e671"],["G:/Blog/public/tags/VPN/index.html","1264528884dbeae69c6529346b054117"],["G:/Blog/public/tags/Windows/index.html","94b5063471eb844af2d090ad391b34d4"],["G:/Blog/public/tags/X-RAY/index.html","a38ca96cb3d337f68f606203ff3ff8ef"],["G:/Blog/public/tags/XSS平台/index.html","60703c3e3ff7c464781b017197b795f3"],["G:/Blog/public/tags/burpsuite/index.html","810e839c141b90efdc4c047c16a1f564"],["G:/Blog/public/tags/github/index.html","d516b2c8ed1a4168c2d6523a1594c74a"],["G:/Blog/public/tags/hexo/index.html","26171b1181e4f0cdc7ea84d0637702bd"],["G:/Blog/public/tags/index.html","8a9a066b991101b43464f6e547a45987"],["G:/Blog/public/tags/kali-Linux/index.html","7a43171031fa462c990e6a814b6e25b7"],["G:/Blog/public/tags/mysql/index.html","dc0ce0b67129c5796ff6ff1dbc46399f"],["G:/Blog/public/tags/onedrive/index.html","7baf2a1a17da6a6ce1ac555b55e05ad5"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","5b6b55b29611c8aab4e28437cf69b4ea"],["G:/Blog/public/tags/python/index.html","9f9c77b5003973a82d2fcfde9e391fa5"],["G:/Blog/public/tags/telegram/index.html","d08a06a44258afb969c6ade632d75710"],["G:/Blog/public/tags/tor浏览器/index.html","e54960d715158b7b62a1cd0c1f6235c3"],["G:/Blog/public/tags/xray/index.html","55124410b203903e28a4bdbb2b0b24fd"],["G:/Blog/public/tags/个人网盘/index.html","332446dcd6c1381fd2657523234b7c42"],["G:/Blog/public/tags/主题功能/index.html","11e2e9dd61e9158407837d921be4ff32"],["G:/Blog/public/tags/优秀文章/index.html","62744ae66e5a0ec883775493de2d4452"],["G:/Blog/public/tags/信息泄露/index.html","c9873e3997af9e876cbf18f8c55a164b"],["G:/Blog/public/tags/博客/index.html","30ea6ffaa4438f49b5071fe5ad80685c"],["G:/Blog/public/tags/命令/index.html","12e612b3faebfd6f390399a41a3abf8f"],["G:/Blog/public/tags/图床/index.html","0c3f9a3fe44f50052379220ff644412b"],["G:/Blog/public/tags/基础教程/index.html","4ad3a037d919f1c84f464ef42dd6d45a"],["G:/Blog/public/tags/夺旗/index.html","023f2cb6a8bfce8a9a30378daab740d0"],["G:/Blog/public/tags/安全工具/index.html","59d6afa5cedc249a7f90d5e87714ecfe"],["G:/Blog/public/tags/工作/index.html","6bbb4a67e89a023745ee4ba34f0d8b22"],["G:/Blog/public/tags/应用程序测试/index.html","916a5e852ace0d7f7d2cca51112f542e"],["G:/Blog/public/tags/数据库/index.html","8e7ce0a16488df7ff2a39f9249d57c92"],["G:/Blog/public/tags/文章模板/index.html","783117a3402d4ee8c332930b42f39346"],["G:/Blog/public/tags/方法论/index.html","de35d78156a91137c78e3d20cec4fb20"],["G:/Blog/public/tags/机器人/index.html","fedec07457641566375c3408a14bb6c7"],["G:/Blog/public/tags/法律/index.html","9f640f69b66d16b3602061901dfcc896"],["G:/Blog/public/tags/渗透测试/index.html","b641d22a307931269183893dfc3e6960"],["G:/Blog/public/tags/渗透笔记/index.html","4842ec3cbd2ceae3a6ae47e8eb44cef8"],["G:/Blog/public/tags/漏洞/index.html","cdc235d9becc1dee18fc42c4624b04e9"],["G:/Blog/public/tags/漏洞库/index.html","66430b59ea81caabd1afa5b7f00df5d3"],["G:/Blog/public/tags/火狐插件/index.html","3f7b810f0f596aa4e9145c6a9674f89d"],["G:/Blog/public/tags/爬虫/index.html","b5abe972fa1946a57a2262299ff7d104"],["G:/Blog/public/tags/生活/index.html","1d1e2093e699de9bccdd0ac95e625ef2"],["G:/Blog/public/tags/社工/index.html","35972526a85ed66eec1ee8de154eaf98"],["G:/Blog/public/tags/等级保护/index.html","ea4875202bc4b1fa9f81a831a8892a87"],["G:/Blog/public/tags/缓冲区溢出/index.html","12f71c75c854d50a90ece8d5ba18d11e"],["G:/Blog/public/tags/解决问题/index.html","f92dd140f0f029613adcafb6bf185cd7"],["G:/Blog/public/tags/豆瓣书架/index.html","f231a4b983b3fd0782720c3fc1cc8107"],["G:/Blog/public/tags/转载/index.html","588c79947776fbb1300ac9b5fe3df41f"],["G:/Blog/public/tags/面试/index.html","063e9607ff89e6406581a49d96ea890f"],["G:/Blog/public/tags/靶场/index.html","16eb770a2c42454407d1772f33285451"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","d22411e92a9e2e5b8fb623c683461bb9"],["G:/Blog/public/留言板/index.html","b8f8385841c45fd06b2e6898325f3c88"]];
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







