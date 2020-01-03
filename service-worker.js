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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","ce946bc0d384a281888d98a5bdc21141"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","ad20f33b6c69ca8f27ec31bd69ac276c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","37f71010de97b9fab6339ef17b1504e1"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","665105a7d83b18a96be26f52b44a0f1e"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","39fbbf38f48fdd91b292191541cf79e1"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","16722fc576d431af8e773f03cfbc8cf6"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","8dd6ccc87bd283eba8bc0430eb571f0b"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","6d9c24ce5da948100e54932d1b84980f"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","38e458ed22f647ebb4794dc56ea0f37f"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","39b6377b88a3f68a86757960b6a688ab"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","d13288db53a8a42358cdc47af3718dfa"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","c0bc6c9a0bafcd0f431c53f4f5254e4a"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","11da26718de11c497e0f0e455cb1c672"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","be9417b0952c6ccc25248f6f816f958d"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","02eedb306bc222ac6d094ec82b6d7649"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","c0d1e77807de20993e95b85331c87a41"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","346d4e76c7a3775e0043048f3c86d37c"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","6f747d85f54a27fa7a3be22430648cbc"],["G:/Blog/public/2019/08/26/Python工具库/index.html","cfcd7969bc011e8d59ccf8c30cc342ff"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","123cdc92d39140e4c77cea4990c308ba"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","cb17923c98aea3f08c9e1ee7cc3049bc"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","25f5fb09836f0161d89f7d03049275b8"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","4411b51a54ef9be56c4876561ed676a1"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","b748c12ec2f2bd50abd0b227fd96f8f6"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","241aec9282c61df938057ba37709d9c1"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","73c7ebd606bc3e2b8b0a54e7adbe35b9"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","46433e1a8aba4a9aa1d822d4bd3fab87"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","079496359e01f8b5d61d835707979a79"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","87b7ad11ef3feb4593a267f7129e11f4"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","2a7028f387ab8e6b30cfa9f3d8143ead"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","8ed9aed99aa18d5646ad407407b7fae1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","b570bc00f2db6f5bae4f2a6f63278b18"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","f3807aa5a6cb14bc0535f68e11fa38df"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","7a7f6c481566422dbc909c8c5722dd0e"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","65b3fc296480d0a4912cc6deb9a1bcd8"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","af0c336a99ca32c6ff7e37de09f8c516"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","3289a4bef65266035e57594eaf0e07dc"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","e355c7b89b078ec628b8caac7d486c53"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","752b87007e5f39dcaf6d44d088f55137"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","f1f019eb46dc3cd8a584d4fd96ec7d1b"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","6572f2840480a30fd8e54ce097b6d0fb"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","8e72dd60fde44310355ba0f2b984bd21"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","0b7c25b13a330f31afc97ee1006b66d6"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","626145a90b13391eaed2d1d845810be2"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","9b633192a85a65c37351ddbafb9e8fda"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","53613d2842bbb7b6ed5e594c974a25ae"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","97bbb9fbe1ee6f3e3c2181115f607b7e"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","ff25368c60325d40a97162aaef4e2c6d"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","e47051e926e95ce8f841c42ab0bfefdf"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","af1f48131434053585fe88c95c5d74b1"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","dc8a02603b70fbdaa9e433fa4eff7404"],["G:/Blog/public/2019/10/24/网络安全法/index.html","f0d136c097de32fd4912f1eeb06c3368"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","6778a071aa4537791be4811e8ad3c334"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","88aa5e2cb5ad2b1bd87f6e07f2228560"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","e9ca032e5af26aaff8131f40fa33a64b"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","6ec09b56aeefc6cf4b8b0cd02cd2c557"],["G:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","304fc265b01f4cb3c43b9bfc84bf6df2"],["G:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","17fc2bc49559c64cea25b5d5bd8f2098"],["G:/Blog/public/2019/11/13/黑客心理学/index.html","93a3fbe7f4d68cbf0e109d2021ab9ba9"],["G:/Blog/public/2019/11/21/记一次主机中挖矿病毒/index.html","25bde959454945dd7bf01257397f23ce"],["G:/Blog/public/2019/11/26/实战脱壳奇虎360/index.html","ffb5382aac93def87f1b48963a176dab"],["G:/Blog/public/2019/11/27/nessus-pro破解安装及插件离线跟新/index.html","af6dedcd523990066a42e6655dd3a160"],["G:/Blog/public/2019/12/02/使用腾讯SCF-onedrive搭建5T个人网盘/index.html","7137574292aed7779302fc64a29174f7"],["G:/Blog/public/2019/12/03/Kali-Linux-2019-4解决中文乱码问题/index.html","1a8235b01400bfcf19e4bd43a8db79dc"],["G:/Blog/public/2019/12/19/waf的识别与绕过（不断补充）/index.html","17bc7def785690f54ba9896771073e95"],["G:/Blog/public/2019/12/23/JS文件信息收集工具-LinkFinder/index.html","18fb0062c89239ce82aaeda2c64df48d"],["G:/Blog/public/2020/01/03/内网安全检查-渗透总结/index.html","6b12de6edcbb8b5cf8bf958ef92af260"],["G:/Blog/public/2020/01/03/黑客常用端口利用总结/index.html","3db559d433556bb8fc164ede5ae393e6"],["G:/Blog/public/about/index.html","d369218e608075f613943391714319f4"],["G:/Blog/public/archives/2019/07/index.html","5560bdda5bd0abb5a405ae869ebaa118"],["G:/Blog/public/archives/2019/08/index.html","d6fb9074a8280c4c8b5dd2f08b5df5c6"],["G:/Blog/public/archives/2019/08/page/2/index.html","51409af4c8245a442e5d2b93531f1dbc"],["G:/Blog/public/archives/2019/08/page/3/index.html","a77625388b604df8b3dc3cac2c8ce81b"],["G:/Blog/public/archives/2019/09/index.html","42f47008a8a3a385853f7d21a8b8c40e"],["G:/Blog/public/archives/2019/09/page/2/index.html","9d17d798cfd99b4592c927879353937a"],["G:/Blog/public/archives/2019/10/index.html","d9593fdd621401e5e221a318567e06ec"],["G:/Blog/public/archives/2019/10/page/2/index.html","595f88e43e0b000293f3821fb47b3abf"],["G:/Blog/public/archives/2019/11/index.html","a777c7b4471e92eb18966de53814aa69"],["G:/Blog/public/archives/2019/12/index.html","69538e6b5e3274548791b98ed9721e6f"],["G:/Blog/public/archives/2019/index.html","478c59850408ec3f302e56d018ada04b"],["G:/Blog/public/archives/2019/page/2/index.html","64df0cf04646e656668f1497178a8c7f"],["G:/Blog/public/archives/2019/page/3/index.html","de08c2f824a56d4220a9f8d3b370d343"],["G:/Blog/public/archives/2019/page/4/index.html","71ceaf63fb64764607b9d4c0d139d9f3"],["G:/Blog/public/archives/2019/page/5/index.html","b0e0353bada95ffa2ccab7fd1d62827b"],["G:/Blog/public/archives/2019/page/6/index.html","62dcb95a59a8d987e9574f922a898ece"],["G:/Blog/public/archives/2019/page/7/index.html","c809f0526858ab7483d0730b1b8aab55"],["G:/Blog/public/archives/2020/01/index.html","3031f17de874b8bdf8ce4718bb5cb2c3"],["G:/Blog/public/archives/2020/index.html","b4c95fa25598f6168ce3fbd4f506e5e8"],["G:/Blog/public/archives/index.html","b6dc21eb069b0bac7c473fb565e95f6f"],["G:/Blog/public/archives/page/2/index.html","557e1921dbcaa8b22ae722af56878a5e"],["G:/Blog/public/archives/page/3/index.html","cce2a05796bc85353cee2f7c5444b660"],["G:/Blog/public/archives/page/4/index.html","62c6da4117891bb7cc50e5a8780f8bd1"],["G:/Blog/public/archives/page/5/index.html","50f3d14054666a2460157fb366482751"],["G:/Blog/public/archives/page/6/index.html","8d088e194d7eecf7efdc119354c5e2f2"],["G:/Blog/public/archives/page/7/index.html","ebd39355b58c394ecb54cd43c019f7fc"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","da7a464789cb5f990f3ddcff37e7deeb"],["G:/Blog/public/categories/CTF相关/index.html","d13f0a0d45ad9e371a9cdb0e06c47b49"],["G:/Blog/public/categories/Linux/index.html","a5e3cb0663f557874717951a8d51342b"],["G:/Blog/public/categories/index.html","aa70b34ce747cb78e1c3f93fedac4524"],["G:/Blog/public/categories/web安全/index.html","f8e94a480fada9b71f67a0a3b7cf6cf7"],["G:/Blog/public/categories/web安全/安全资讯/index.html","6361110dce5a6c230c2f331ba31a6686"],["G:/Blog/public/categories/web安全/靶场练习/index.html","bf6e42d4cc45d28d6993a034b60d3cb5"],["G:/Blog/public/categories/主机安全/Linux/index.html","978055ff8ae84372c8d57463068fad73"],["G:/Blog/public/categories/主机安全/index.html","77948700514c6f5c0e05bf0107ac017e"],["G:/Blog/public/categories/其他教程/index.html","6a7b4a009cb16d4777320c53e7c339e0"],["G:/Blog/public/categories/其他文章/hexo博客/index.html","962cd40943eb1ccae861c9174a825faf"],["G:/Blog/public/categories/其他文章/index.html","873b73c757671b7f2f8d6d90dbcae243"],["G:/Blog/public/categories/其他文章/记录生活/index.html","cdf63c16019caee9db198a2e7e76edaa"],["G:/Blog/public/categories/内网安全/index.html","f278fd89dc6ed54fa729b9b2798d364f"],["G:/Blog/public/categories/安全工具/index.html","89cdeb9960b24be0d054ecc7f18eb178"],["G:/Blog/public/categories/安全服务/index.html","88ba6be04ec3e6da6bedbc4262487e73"],["G:/Blog/public/categories/安全服务/渗透测试/index.html","77e747e3a0fef7a61eff748d13dbfb28"],["G:/Blog/public/categories/安全服务/等级保护/index.html","e09e7bf5d14cef689ddcbb406bcd3a1d"],["G:/Blog/public/categories/渗透测试/index.html","0d3c5c149a9fc807748b3e84d910030b"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","84c181aa1d2e284c11c387440fa8c049"],["G:/Blog/public/categories/漏洞挖掘/index.html","7bc2ba4250e2a1c1dc4f82887eedfea2"],["G:/Blog/public/categories/病毒分析/index.html","998bd0f1d293796c6de83218ab7e67e6"],["G:/Blog/public/categories/社会工程/index.html","8121dd3e6c7221044ad5969fc448a162"],["G:/Blog/public/categories/神兵利器/index.html","baaf3764492ae354e2fc5593bd2a0829"],["G:/Blog/public/categories/神兵利器/page/2/index.html","2a55c0c6727e18f1a8e69ac94b9a33e6"],["G:/Blog/public/categories/神兵利器/page/3/index.html","8a5432a36e974e21563771097233ba1d"],["G:/Blog/public/categories/逆向分析/index.html","db6aaf8a2bc33bf9d77edb5f56153b2a"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","437e9f4c3938db2ab365f1030ae96ff6"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","61ea90d43638ac04e8f7d71b5703843e"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","ac64b1633bb87f92230013d62fac0901"],["G:/Blog/public/movies/index.html","d61f649a752db76993175385476b8cf4"],["G:/Blog/public/page/2/index.html","887e68c8634639cc1fe3c9a9464dae6f"],["G:/Blog/public/page/3/index.html","6e7bfa7c220bbf336948dd43bd769ecb"],["G:/Blog/public/page/4/index.html","e8eaaf97a54c08a9fbe3ecb01c7bf4b6"],["G:/Blog/public/page/5/index.html","20386064b31ad6a7121a7c28c5090b89"],["G:/Blog/public/page/6/index.html","9328a239024ba69f59695f651beec15f"],["G:/Blog/public/page/7/index.html","77599c8494367f1a6e99e4304d20584d"],["G:/Blog/public/pan/index.html","844c693ada57f81f8d83df9417161d6a"],["G:/Blog/public/tags/APPscan/index.html","82a800221e0d689da1e6d552af52202a"],["G:/Blog/public/tags/CTF/index.html","2ffa4f76550cfc8ff5ec8d2b03a78495"],["G:/Blog/public/tags/CVE/index.html","e88b161c70aa5b16e95fd79622affc79"],["G:/Blog/public/tags/GitHub信息泄露/index.html","337ce28dbfd15ed37988b3b2f9cd4c26"],["G:/Blog/public/tags/HTTP状态码/index.html","db374b4f4eea6c621aa011585a16ba16"],["G:/Blog/public/tags/LADP/index.html","a6793ff040d17732187050c9dace1cdc"],["G:/Blog/public/tags/LinkFinder/index.html","ba32c287bc0f1ff8bb98fb3da4f0a9d7"],["G:/Blog/public/tags/Linux/index.html","57b97f7fb45e74effdb465eba7bd3f97"],["G:/Blog/public/tags/Linux命令/index.html","2a0277225d9a7ab69ceef07a34423adb"],["G:/Blog/public/tags/Linux笔记/index.html","adc363f2adcfb45d7263c12f8e45a825"],["G:/Blog/public/tags/MobSF/index.html","d47523839cd06a22f87d2d5760a6c93f"],["G:/Blog/public/tags/PHPstudy后门/index.html","dff78d52c75623935e563d2b931e3596"],["G:/Blog/public/tags/POC/index.html","9c4eee1e362e4808c076fc7f1c75101c"],["G:/Blog/public/tags/SCF/index.html","b4197813c4bf3fdce8966f9b8516b584"],["G:/Blog/public/tags/Windows/index.html","9d3009d2de1436b4c6e13bfe1ab0bb24"],["G:/Blog/public/tags/Windows命令/index.html","f6e4712c8b7b84c36271253187df9e29"],["G:/Blog/public/tags/X-RAY/index.html","90c204b6899d0a07d2f90cedf566abf6"],["G:/Blog/public/tags/XSS平台/index.html","ba7815a8de754af34b1a899b42330665"],["G:/Blog/public/tags/burpsuite/index.html","7c056761677e4efd72cb2ddf7787d36e"],["G:/Blog/public/tags/cewl/index.html","c6237ee62ab0825fe526e9815996e28c"],["G:/Blog/public/tags/hackthebox/index.html","a92fd7afca693abe891ca1fa3c0aae69"],["G:/Blog/public/tags/hexo/index.html","001f8ff8bf256cad6441a1250f74de92"],["G:/Blog/public/tags/index.html","dd1d2d0c42de876413ae68324fe265e6"],["G:/Blog/public/tags/kali-Linux/index.html","cd98618de3acd061f727debfd56e3c80"],["G:/Blog/public/tags/kali/index.html","36761f9f538a61a031d82481a3027d00"],["G:/Blog/public/tags/mysql/index.html","e8ac3698a5e529c464b5bd51c8566ecc"],["G:/Blog/public/tags/nessus/index.html","e81af6672ade505ad634158ada53f59a"],["G:/Blog/public/tags/onedrive/index.html","b35508bc5c245ee8d2d8b2e71b5d6877"],["G:/Blog/public/tags/oneindex/index.html","c64473fd55917f34efef050737bbee71"],["G:/Blog/public/tags/python爬虫/index.html","c263b1582f92e7333e010980832e2d87"],["G:/Blog/public/tags/tg机器人/index.html","513158892949b4a463c2d6b0a5510297"],["G:/Blog/public/tags/tor浏览器/index.html","b71570bc196794556273502f28a68435"],["G:/Blog/public/tags/waf/index.html","b876ffa398cfc32995372bca982bc4f6"],["G:/Blog/public/tags/xray/index.html","1276ccd314a589c90748415c6aa11f50"],["G:/Blog/public/tags/个人网盘/index.html","8084bae904932e81b41ad29b8d3b395e"],["G:/Blog/public/tags/主题功能/index.html","57eab0707102eb37d0a9aa12f5f1f275"],["G:/Blog/public/tags/优秀文章/index.html","d44939fa8ea247260630d7163b85cd96"],["G:/Blog/public/tags/内网/index.html","df4d95e3a76847bad64177dbab69d602"],["G:/Blog/public/tags/博客/index.html","7ab35b3bea8b89a55cf05370284eff75"],["G:/Blog/public/tags/命令/index.html","135f6f928bfabcab7b00c89e4037b06a"],["G:/Blog/public/tags/图床/index.html","d10eeb772e28335edded4cf2aec40dbc"],["G:/Blog/public/tags/夺旗/index.html","5fb57f6cd31a2108d7f8eab711cf09fb"],["G:/Blog/public/tags/安全工具/index.html","c703ac921bf487e2da75eeebdaa11374"],["G:/Blog/public/tags/思维导图/index.html","c5e1d9264fa1bfd6d7a8fec4f3ba5452"],["G:/Blog/public/tags/数据库/index.html","ea3e7e5fb562f43ab3225a330ffbe600"],["G:/Blog/public/tags/文章模板/index.html","f367600368b690e3dc93c1fb61c54f3a"],["G:/Blog/public/tags/方法论/index.html","0482d5e6ed05d62c9397924338202950"],["G:/Blog/public/tags/法律/index.html","1a988ca3350c47361b9d2545d10966c9"],["G:/Blog/public/tags/渗透测试/index.html","aa117b5f3ebaf983c092bc03cb9a0a40"],["G:/Blog/public/tags/渗透测试方法论/index.html","b0503ed55a31c9ca0859906696e28f6b"],["G:/Blog/public/tags/漏洞/index.html","8b21a5a7fa670897b59e03adfaa8cf03"],["G:/Blog/public/tags/漏洞库/index.html","d423a55b19bba4e14e13fb849c17754a"],["G:/Blog/public/tags/漏洞案例/index.html","cdf209cd77cd010e78ed0f5ea600450c"],["G:/Blog/public/tags/火狐插件/index.html","31e54464a3c2769d11cd763192a821ee"],["G:/Blog/public/tags/生活随笔/index.html","87d02f982d8fa386c160b97eb96a1f0c"],["G:/Blog/public/tags/病毒/index.html","d42f18d3624977c50dcb1be7bd3c52ae"],["G:/Blog/public/tags/社工/index.html","f431c52776d2d25ec87292c8f7eeecba"],["G:/Blog/public/tags/科学上网/index.html","7dbc4d427c5e4b786604512552cdff85"],["G:/Blog/public/tags/移动安全/index.html","fdcf1ac346a8635c50f9ce2969dff371"],["G:/Blog/public/tags/等级保护/index.html","e275dc29d2e803ec58589bee0df4afff"],["G:/Blog/public/tags/翻译/index.html","2ad3e58d68b7f4f122dd7182a28ec094"],["G:/Blog/public/tags/翻译文章/index.html","04f235258a94f99a5a63c9235311499b"],["G:/Blog/public/tags/脱壳/index.html","5d35660ca2bb0ec57f8827c66c213171"],["G:/Blog/public/tags/解决问题/index.html","85ceb8870a61798045f41670aad43409"],["G:/Blog/public/tags/豆瓣书架/index.html","3c2c11397242e2a71ef20a56e38aadc2"],["G:/Blog/public/tags/转载/index.html","1dab2b23c7334675894c3fed5cb76600"],["G:/Blog/public/tags/面试/index.html","840b5e1814cd48ed2c521525c592cbf0"],["G:/Blog/public/tags/靶场/index.html","dbf5bcaaf103fcdbfc53cb6176f927fd"],["G:/Blog/public/archives/index.html","63d2001457f4aa36bad9d61c468cbff7"],["G:/Blog/public/留言板/index.html","ceeb14f0cd9b8b63453ec6817cfa606c"]];
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







