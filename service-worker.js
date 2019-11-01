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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","5dafa170e09e13655dda18bdf19d957a"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","57341d0d2f87d4d398c39bc449028b2b"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","43e5846aecc42d216fd5a1e27c20f121"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","622867e251ffaa3dfc45238220521c60"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","038bd12ec02a5807ab5a115a50da9bd8"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","84bec445f485bff51b20d5b5c472184f"],["G:/Blog/public/2019/08/16/github-hexo-域名搭建一个自己的网站/index.html","55a55916d39c18c73f8d69f07cc5e5c8"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","1636af76aa1edc0bdc740362348ff78e"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","0858c46d2cb041a4f8f252f07291155a"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","25301d34d3396dfb811813716e28e5ff"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","3fa3f3fe0f5b73efada47dfbd210cf36"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","fb7b885b4d849141ca316cc281a24b22"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","997e56332d3a517caa6780ea7a270fdd"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","7678731988a1a0208e0d231b739ddb32"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","ddc3e085245aeb68d7dc7c4f0c1d7dfd"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","5cb535a470897a5968702f43b12dd09c"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","b96c1a59689fa78599730d0ecb69256a"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","acefe7cf949ddcbcd1329bef57893837"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","2ade25b3fccea486f0ab2c8a73c1b30e"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","e2ee52c9f2421739aa155db5b0b85387"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","7b61bb6192730e7b941513a22c1fff5f"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","63c7ae816d85a47e4084b2453d5f55a1"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","579a3a97c0b61fc0ce749e5759bdc006"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","e5304dd70a1fc17a8463afb2b25a63ae"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","46d5e633b894030981b5b929418f1e4d"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","d0dec0534de50443d9d29229648626f8"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","57a164a74d00a3bc41d92ccbf3eafea8"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","a66dfd9802fd8e69d2d2f44501d090b9"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","789ceca1641aef6dc3fbb4b7e07c2b35"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","b36d8dad1a89782586254966273a4625"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","f000a7977cfc3e27825d1ac41f540965"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","98f0c8d0ced55fe97db8b2230cb42f87"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","0de76c2960847a46b1ea7fd26545cc2a"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","cb0807c06bd11b4a4ca87a12b09acacd"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","68be1bf739ed0c5937ebb480c2d4bc77"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","fbd5c02ad4d763828741bb5eaca8b535"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","3e0c9cdae318531ea01554cd8c866832"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","d82e032b9028fcebdfde85e6b755d7fd"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","aa94b9aa1655a4fc96d062aad5c44229"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","8878df515b368feda1ecd3b82c50fed2"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","52193882fc54b52f4f55145e27608eaa"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","d58a971a10133feff1e26990d8741c84"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","e0e543077ab14e905317cf10bd1e03b7"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","86931cb0ec820d76e683f85eb9ed7054"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","8e0f75940e6d566e313c90e0ca2dfcff"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","906bd6f91251e2639537b75cdf281659"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","0fea3e34a8522e88115d17129425bf75"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","5c171166eac801add6136a8ab5d7a83e"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","95b5e37f678a020201ed89bd279532a0"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","eccca0e9e36dac54d1d39b03b9e185fc"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","3735037b54a76130a0ee14dbcdf6c02c"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","1e695e9a818c802a51b3e62731a16350"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","e0b232f4f10a49263f762662c1d0279b"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","5657f4b990a00c3ae697c98fd8be4d68"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","231d24975990ef678578396b9dd07647"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","cd870b50fd2b6d73b3e7867a615872ed"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","29aa2d59a294fa76d53e0aef317ff797"],["G:/Blog/public/2019/11/01/test页面/index.html","1c262d2a1c7090f58c5bbeb9c943a3c8"],["G:/Blog/public/about/index.html","5d8ed4e68a2d06edc776c8ed34f40796"],["G:/Blog/public/archives/2019/07/index.html","c2f4c57fbc94fd6ede8d72a4010ba87a"],["G:/Blog/public/archives/2019/08/index.html","6d315afa1feb603649fd9b66accee311"],["G:/Blog/public/archives/2019/08/page/2/index.html","352411b853b03c9c0b554c3dd079bf0f"],["G:/Blog/public/archives/2019/08/page/3/index.html","6ffdc29775dd1e0d87009c6bbf5d2b75"],["G:/Blog/public/archives/2019/09/index.html","7dd33bbeab0d4a717dd26bcbbd04c767"],["G:/Blog/public/archives/2019/09/page/2/index.html","ee74ca626ac35f4b736780981cfc8eda"],["G:/Blog/public/archives/2019/10/index.html","3b6239187d0d358b949256e870f3e2ba"],["G:/Blog/public/archives/2019/10/page/2/index.html","b6d79079870cac1dc65dd29feddccf13"],["G:/Blog/public/archives/2019/11/index.html","7b0aab5e47bec4c57926bcebe5aa3256"],["G:/Blog/public/archives/2019/index.html","815e37cf74601637c277951856713277"],["G:/Blog/public/archives/2019/page/2/index.html","f92479e6575c2ee4097dfd034390f3fd"],["G:/Blog/public/archives/2019/page/3/index.html","bce7bbba0f639550a386884f0e30e682"],["G:/Blog/public/archives/2019/page/4/index.html","409ad877c145e79cec20229fae3d67fc"],["G:/Blog/public/archives/2019/page/5/index.html","419c318382672ac867bfc251645888bb"],["G:/Blog/public/archives/2019/page/6/index.html","de5e31e093b60ad8c2ca4c94937e323a"],["G:/Blog/public/archives/2019/page/7/index.html","a07c8f9f7ce04f6d5b22829c033ffbef"],["G:/Blog/public/archives/index.html","262f8226ab7eb3ce8868a0347e82411e"],["G:/Blog/public/archives/page/2/index.html","92a02e0d4cd635f217a65ad2ba845ba7"],["G:/Blog/public/archives/page/3/index.html","da144fd2c72e0890557f123c4b1aff7b"],["G:/Blog/public/archives/page/4/index.html","b3a8b3cb20d0736980c882c7b9548a27"],["G:/Blog/public/archives/page/5/index.html","e383857af51772cfa46358eb387866f0"],["G:/Blog/public/archives/page/6/index.html","84410fb0af0495eb2da0ba2d0b7d6e54"],["G:/Blog/public/archives/page/7/index.html","90333900d16bfc49cf641003d51cf0a0"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/Linux/index.html","dc17e060d3dda05ce63faa8a8a2d1408"],["G:/Blog/public/categories/Windows/index.html","9f746bab39198caf1121fb0ab6709ca6"],["G:/Blog/public/categories/hexo/index.html","270221b4d96ae88eac180cbab4909b67"],["G:/Blog/public/categories/index.html","0add9f4ad691def0ab649018db546442"],["G:/Blog/public/categories/好玩/index.html","95a0299f2f54aece5d8cf8035217d8b3"],["G:/Blog/public/categories/安全工具/index.html","6be6f1c48b1bf2435f2f1cf5b8cc8f94"],["G:/Blog/public/categories/安全工具/page/2/index.html","ce6fde76729dbd64c3852a4d6d640d43"],["G:/Blog/public/categories/安全工具/page/3/index.html","2c8679662e2db48ecd4cdca4defe0067"],["G:/Blog/public/categories/安全资讯/index.html","5190115699c2c8650e474e82c1bb057e"],["G:/Blog/public/categories/思维导图/index.html","3268bd11641dbc46da1273bf7c4577b2"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","8333b85e12346f076e78972712f80260"],["G:/Blog/public/categories/教程/index.html","1bf2add7642f10f233b24276e8cde614"],["G:/Blog/public/categories/教程/好玩/index.html","6273daa8f05a84f15fb68d3d4e199c6f"],["G:/Blog/public/categories/数据库/index.html","6860dacb0c241280ddfe55409d6ea5f5"],["G:/Blog/public/categories/数据库/mysql/index.html","aa1fec0af3047507e76429c2136ee13e"],["G:/Blog/public/categories/渗透测试/index.html","d11baa518a78e1fa010da11387ab0a57"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","09e11c4a74d5d7dc34dc16fe06a35e8f"],["G:/Blog/public/categories/渗透测试/靶场/index.html","e3261cab937dcd4885019c5e0b90b7cd"],["G:/Blog/public/categories/漏洞挖掘/index.html","f4699484e605258a49350e145bfa7369"],["G:/Blog/public/categories/社工工程学/index.html","833d7fab528458c1e9771cdde068e139"],["G:/Blog/public/categories/等级保护/index.html","c819cb625f8ada7af1af75e64294842e"],["G:/Blog/public/categories/翻译文章/index.html","09c2fd996519f2ec82fd89e3004b300c"],["G:/Blog/public/categories/记录生活/index.html","4b2bffb774a5aefd3a0166bc47c3875d"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","d43ec3ec2994774d87c66fe51721d141"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","337be1383a381455c3fd7f3bb03fff01"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","727c9e99cebbfa95a3ec0f29c26824bc"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","0eb1c1e30efa13ffc8a8d8437c5f195c"],["G:/Blog/public/page/3/index.html","139e4dfded546225d3a22e0cfc7062a8"],["G:/Blog/public/page/4/index.html","0f42daa9089ff453c12ee167f739cdde"],["G:/Blog/public/page/5/index.html","eced5d87858572e66c37c04543258ec0"],["G:/Blog/public/page/6/index.html","f6246d30aebe8740fc76615e73f5e55e"],["G:/Blog/public/page/7/index.html","f4a42e041b4b8dfa1455616b1fef8211"],["G:/Blog/public/pan/index.html","9705a3c5cdab1bf72641a5d2004b8ed8"],["G:/Blog/public/tags/APPscan/index.html","f7ef5a1b61c5a387fb6e2fe840a33758"],["G:/Blog/public/tags/CTF/index.html","11bcc4f6dd2722c9d4de00f4f4d5c41e"],["G:/Blog/public/tags/CVE/index.html","282951178d6383a464d5f8233ac5f089"],["G:/Blog/public/tags/DOS命令/index.html","f2fbdfeb0263d7ea2a7787f43d758fb0"],["G:/Blog/public/tags/LADP/index.html","a52a76bd6069e75d17f61fb3b648875c"],["G:/Blog/public/tags/Linux/index.html","b9f662a5590f30fea531a1aa6fe3ff3a"],["G:/Blog/public/tags/Linux笔记/index.html","ed2dae22616d4b23d1f6fc87044ec62a"],["G:/Blog/public/tags/MobSF/index.html","a34d4987a135fe1c340227eb4ca19dee"],["G:/Blog/public/tags/PHPstudy后门/index.html","68b6723e07165de82f637c2aeb1fc277"],["G:/Blog/public/tags/POC/index.html","ecb5c40a59964bdd6d500ff072357e2d"],["G:/Blog/public/tags/VPN/index.html","1af2b05168757cc8e1945f04f2aec884"],["G:/Blog/public/tags/Windows/index.html","83ca7debf883a975eaf8713e2c3caf48"],["G:/Blog/public/tags/X-RAY/index.html","b5694cf77da6dd6bbaa1c4311a44bab6"],["G:/Blog/public/tags/XSS平台/index.html","87656c3146d4c23060c785cef39a21b9"],["G:/Blog/public/tags/burpsuite/index.html","8811a01cefc0a323f9788492f5a781b8"],["G:/Blog/public/tags/github/index.html","d516b2c8ed1a4168c2d6523a1594c74a"],["G:/Blog/public/tags/hexo/index.html","b14ff1328880754817b39e5d74c76875"],["G:/Blog/public/tags/index.html","7ace314e344bd332eb47e94496efacd9"],["G:/Blog/public/tags/kali-Linux/index.html","6a03d436d63a6f3539e56c3e10b7daf4"],["G:/Blog/public/tags/mysql/index.html","28d528e3de19eda3f47006fd694e870f"],["G:/Blog/public/tags/onedrive/index.html","298f3121e86d57a6919e95d926ff6cbf"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","a264c7dc3cb1fa21201f30686386248a"],["G:/Blog/public/tags/python/index.html","953c14304f7daa4648d11c3309f89414"],["G:/Blog/public/tags/telegram/index.html","18ef2b853a860117bd1a67aadc3c03ad"],["G:/Blog/public/tags/tor浏览器/index.html","93e0c958910f5db389bff2e9ba84fc33"],["G:/Blog/public/tags/xray/index.html","cb5d35e932e01d2da02df9a2bd4ad518"],["G:/Blog/public/tags/个人网盘/index.html","e25db97e25fccf62f972e2e7405a43c5"],["G:/Blog/public/tags/主题功能/index.html","02fea250dff580db23083d10c6a7236c"],["G:/Blog/public/tags/优秀文章/index.html","703b5f13299eb15496d7859e62eab54f"],["G:/Blog/public/tags/信息泄露/index.html","e1ee3ff4a6c4aff357f3a2195f7c1449"],["G:/Blog/public/tags/博客/index.html","30ea6ffaa4438f49b5071fe5ad80685c"],["G:/Blog/public/tags/命令/index.html","da848fe6f012bd001cda22048dca3cf6"],["G:/Blog/public/tags/图床/index.html","f82f6fcafaf8f64129c14452c1558aae"],["G:/Blog/public/tags/基础教程/index.html","ef2e31b91ad44baa5ab893a4188fe19c"],["G:/Blog/public/tags/夺旗/index.html","0d8d7c3a6e4e3cca3e2f4cd26f186f42"],["G:/Blog/public/tags/安全工具/index.html","42e451d36dc480711e6b1611c1e9505c"],["G:/Blog/public/tags/工作/index.html","6bbb4a67e89a023745ee4ba34f0d8b22"],["G:/Blog/public/tags/应用程序测试/index.html","ac5b2ad8c01f3676164c6c197bd32296"],["G:/Blog/public/tags/数据库/index.html","a7e6a34e338ab1d40068725ee42ff6f4"],["G:/Blog/public/tags/文章模板/index.html","1da0db10ead7866dab94b17e1276175a"],["G:/Blog/public/tags/方法论/index.html","f3e096addabafc9427b05113f7566b38"],["G:/Blog/public/tags/机器人/index.html","eb225b1ffe09dff6726731259adeed1b"],["G:/Blog/public/tags/法律/index.html","02370c55acdba2f594c974486854fac0"],["G:/Blog/public/tags/渗透测试/index.html","b1741bc7f68fd600d75ba9b2ac3de654"],["G:/Blog/public/tags/渗透笔记/index.html","54e1b19849f97a77ba74adc5c325ba1a"],["G:/Blog/public/tags/漏洞/index.html","89409367c68d8bcb528765e63eb9cfe0"],["G:/Blog/public/tags/漏洞库/index.html","737c375f1ec505e3ab159fffe18223a5"],["G:/Blog/public/tags/火狐插件/index.html","5aa73a561253ffb3a0426b01765b2fed"],["G:/Blog/public/tags/爬虫/index.html","46e53008dfaebb7772603b9cb617cfe0"],["G:/Blog/public/tags/生活/index.html","fae4f8e327be9187fbf5550f7244c2c0"],["G:/Blog/public/tags/社工/index.html","a0d758893421c11b9c7a41c954e74134"],["G:/Blog/public/tags/等级保护/index.html","724395f92bbf40c6c95dd53fee24cb71"],["G:/Blog/public/tags/缓冲区溢出/index.html","b3778400e91ae5d8e5aa35c2ccb7459b"],["G:/Blog/public/tags/解决问题/index.html","593246b6f7eb457af5214c5cb164c57d"],["G:/Blog/public/tags/豆瓣书架/index.html","e577ae0ada0cfe296b7655d937c880cc"],["G:/Blog/public/tags/转载/index.html","855d9a1750070345e36c66b2f79cbc96"],["G:/Blog/public/tags/面试/index.html","73ec130189744a99a1d4a0f41ba8ff09"],["G:/Blog/public/tags/靶场/index.html","6300fa5501954b338fe7b413cb7503c2"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","c11eed8c5dd736ac4c76f19df7ffd0ef"],["G:/Blog/public/留言板/index.html","629b698214e6e397d008bcf0641e1497"]];
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







