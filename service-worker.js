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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","eac0cfc94ee4137cc7b01abbb11e61e7"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","fb0316760e6d7d6916523e63cfa3f54c"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","bfd564b8ac6892a7dd2cbe29a8219cd7"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","5966b27becd3bb09585b8161872f3a42"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","3a28ab1bcbfae53dcb4a981424ee999a"],["G:/Blog/public/2019/08/16/github-hexo-域名搭建一个自己的网站/index.html","5fe46a3e74c7c5c459cc1069b15f57db"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","9d57b3ec595c24b3079b5ba8853ef742"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","7f434ea7d063ea7653dff589eee2da70"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","d886f569e0f1da36aa3798691ef6eec3"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","4882b9bce4a5fa545608dbe8240ae626"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","06fc8902e7ec4ec42fa5d43d9c8e57bc"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","2d9b0f95f1588662e0b81ce5a1912bf7"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","8473ec013d5c4ce9757b3daf44d3e850"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","2563d272a8ec2d11c4f1bb2d577b19ab"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","8871ae65431159f933f137fd9deef50d"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","8bee13a19c42480fbfb1bf8cacde48f2"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","065d3560f2fb3ee69e1d3c3fcd323319"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","8541fe23d13e136c971147dfb9d6ac0c"],["G:/Blog/public/2019/08/26/Python工具库/index.html","4c39bcca569df1923caf86e9bb98ee18"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","6986d4605e7775e645fee37b19df92f0"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","af360327f5578ad9512f7ed8d7ecb3cf"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","d6046e956c5b22d1255bb1f135c2f0a0"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","46d5e633b894030981b5b929418f1e4d"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","d0dec0534de50443d9d29229648626f8"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","ae7852ff62a671cfdc7c357cee6b7887"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","a6c221f4319ed322f3a32a36f24c5768"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","1d35b6a9b886ddbe964fa04c91eeef03"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","079ba1a7198569be1a7101054d9302bf"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","ba13a87dca1000eba367f85a1ac76fb5"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","3da3a5af198c9f3bbb5320ff27246c6b"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","541888694dcf36af92874ff5a691f890"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","965b6e0b3086176488db159e69e70587"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","72abcfde79afaf33a726f158bf983630"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","be809a471f4bf328942748cc0ef9b8bc"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","2c9de945c1fdd6b549ee334b68f69134"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","9abbf3d803294080596afab105c26a56"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","797b01e026c3468c98aafd6ffaf31c78"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","9f7f82f2dfac173c44b26353cbae088f"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","4858ac26f9d4c824b9c0c43e9c2504f1"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","a881210a5b3d06a579d7fd0c80614a90"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","13f1e31eda366a3900c2a75bfd65c937"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","ae0f06fb74327eaab64e46f2a4aeaff9"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","a8817683d9e016873944884cf0c484df"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","1e584815973a5a671e80c035deb5063f"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","95c06e5a54f90c8959a884939aabcd1f"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","317ebcf7c375128372c2f2f73779ba12"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","106a61da4ddf98d3c1f02b38d912f754"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","fe9d5a28367db82f2c9492c7702dd1cd"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","4b842a3b7b4c0febb80890127fa867d7"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","dc854c41bc3ad063fc815db8e42ddb13"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","37085c913ce083d9084ad3d5a12a0d75"],["G:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","aaeffe30e3200d0338dd4fc5d7b31530"],["G:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","67a44caff87fa20639e9bac3f9296bee"],["G:/Blog/public/2019/11/13/黑客心理学/index.html","14e18f3f910f229cfa7c8dd36a7b0d4e"],["G:/Blog/public/2019/11/21/记一次主机中挖矿病毒/index.html","7b08f367074c2370c97a3bc0cc5faa51"],["G:/Blog/public/2019/11/26/实战脱壳奇虎360/index.html","292113fe186b34c126bea17d1e6550d5"],["G:/Blog/public/2019/11/27/nessus-pro破解安装及插件离线跟新/index.html","57aafce68f78a0933dd1b9b7b4c2966c"],["G:/Blog/public/2019/12/02/使用腾讯SCF-onedrive搭建5T个人网盘/index.html","3eaf4af774e51647d08eb837ed8af055"],["G:/Blog/public/about/index.html","44c8550eca4df6ccdab1b943a25a9055"],["G:/Blog/public/archives/2019/07/index.html","f05b7a27e022c21cd925280e603d16ca"],["G:/Blog/public/archives/2019/08/index.html","255745e8b524037cb505d97fa52bed70"],["G:/Blog/public/archives/2019/08/page/2/index.html","91cfb4fe8610a0c3306a4a2912f9945f"],["G:/Blog/public/archives/2019/08/page/3/index.html","ffe7b348cd94f624fd42c5079a9aa000"],["G:/Blog/public/archives/2019/09/index.html","6f89614d8b5a32ebd6fb8cdfc2e49449"],["G:/Blog/public/archives/2019/09/page/2/index.html","ae533d778067bb145273bb1a67546cec"],["G:/Blog/public/archives/2019/10/index.html","49b69e403ec2bfbce69256c9b0d4f10f"],["G:/Blog/public/archives/2019/10/page/2/index.html","564683a468a4aba9eda9b77d9355e56b"],["G:/Blog/public/archives/2019/11/index.html","8379dbdd0fe81f8519778109e187c534"],["G:/Blog/public/archives/2019/12/index.html","8d8f6d0e5cce0704b472b86c3bd972d3"],["G:/Blog/public/archives/2019/index.html","e4fd3677eeaa0fd8f60e62c3b2253a8e"],["G:/Blog/public/archives/2019/page/2/index.html","c5df89a99ab6b1ce1828436863790b54"],["G:/Blog/public/archives/2019/page/3/index.html","8b575567b7afdb47500746de4a66e68c"],["G:/Blog/public/archives/2019/page/4/index.html","fac4c5ffbad3251e6013816b907b6da4"],["G:/Blog/public/archives/2019/page/5/index.html","5d5d799ef2fc3dd02e719f4ed6767438"],["G:/Blog/public/archives/2019/page/6/index.html","e6bd9e3022a3c9525ba56ef5d6feb4d5"],["G:/Blog/public/archives/2019/page/7/index.html","faf64771246ce26db9f8f89096e850d1"],["G:/Blog/public/archives/index.html","8935e7a8bb35095531ecc92983e4b2a6"],["G:/Blog/public/archives/page/2/index.html","02a4345126b3e033919ee6826373d0ca"],["G:/Blog/public/archives/page/3/index.html","c73292a7724b360934458471969f9dd5"],["G:/Blog/public/archives/page/4/index.html","6e01e0c405bb45e95cae4746521d9a82"],["G:/Blog/public/archives/page/5/index.html","59dfd00c7e14e4fe61bc2e4743adf037"],["G:/Blog/public/archives/page/6/index.html","a04dfaf3bd59f34a3bd3018c2b1aaa80"],["G:/Blog/public/archives/page/7/index.html","f5c349b7ca23ecc66ae34bff9eda726e"],["G:/Blog/public/categories/CTF相关/index.html","d9cc67f3d6c77f48238bf17b804e6fec"],["G:/Blog/public/categories/Linux/index.html","ff982bcbcfe2234c5d3f65a77ed986e2"],["G:/Blog/public/categories/hexo/index.html","fc6a61e476961bb8fd8fa1cb7f861c93"],["G:/Blog/public/categories/index.html","420d7f2b1c765538bf91884ea0fa8f91"],["G:/Blog/public/categories/web安全/index.html","b393442a6c1040265213fcf1cdc41538"],["G:/Blog/public/categories/web安全/安全资讯/index.html","6b39bbd9fa40e3f60370298b0475592f"],["G:/Blog/public/categories/web安全/靶场练习/index.html","06f51b7992f6b80718fb418c9ce0a10e"],["G:/Blog/public/categories/主机安全/Linux/index.html","b8210f1010b1a23a870c1f054b545171"],["G:/Blog/public/categories/主机安全/index.html","94c7e51eeff6bebe9805427f9de38738"],["G:/Blog/public/categories/其他教程/index.html","bfe37430d1ebbe341d95c550d4c03b7e"],["G:/Blog/public/categories/其他文章/index.html","25bd9a7194ccf54b52e500d8a6d4a7ce"],["G:/Blog/public/categories/其他文章/随笔/index.html","86f9d087e576470d185ba1a4be2b40e2"],["G:/Blog/public/categories/安全工具/index.html","5e39f682249d196d814d6f604503f5b9"],["G:/Blog/public/categories/安全服务/index.html","e63c035e8fcfb0eee143234d1dbd6990"],["G:/Blog/public/categories/安全服务/渗透测试/index.html","501efc23d11bd2dcbbbf2a9dee542c3d"],["G:/Blog/public/categories/安全服务/等级保护/index.html","96dd10f47818060dfca92a52071c0b6a"],["G:/Blog/public/categories/渗透测试/index.html","716611a73a897e91835e7c735b1b1d8b"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","cae00f3e60701bbf013deca36ab989d9"],["G:/Blog/public/categories/漏洞挖掘/index.html","ccc04f46635036b03641aba4aa1320f6"],["G:/Blog/public/categories/病毒分析/index.html","794edcdb770760f29d2bfa9b8b773699"],["G:/Blog/public/categories/社会工程/index.html","c43cc1f375027387a7b3fa734b8121b1"],["G:/Blog/public/categories/社工工程/index.html","e39b3570e7c5048f9d9478f145f5f6a1"],["G:/Blog/public/categories/神兵利器/index.html","15ca54a4cfe062306ad5ebd7bb6733ec"],["G:/Blog/public/categories/神兵利器/page/2/index.html","6b5ab05f3a06ee615b4e77fee3ce0ff7"],["G:/Blog/public/categories/记录生活/index.html","01d105a5c50e1db545f9093f72148e2e"],["G:/Blog/public/categories/逆向分析/index.html","ef02b96577da032d660209f0cb9b8b1d"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","98d1fdfc1e98352b281cd0922cb67c18"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","d211f31608ea4f98568b65a8b3fe3db7"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","3c8f06b53cfefeb26270a0c2afe23a22"],["G:/Blog/public/page/2/index.html","3f9b9f5749b21bd9f0b027b02f30224c"],["G:/Blog/public/page/3/index.html","1c97847994a1791b6701e14950e20fe7"],["G:/Blog/public/page/4/index.html","0ec9cfe43b888bb307a7e0c29468708e"],["G:/Blog/public/page/5/index.html","8eba9e1d98f651b706818a417e46830b"],["G:/Blog/public/page/6/index.html","91127998c457317b336c4018a83be624"],["G:/Blog/public/page/7/index.html","766cb6edfdaad66fe54fa16370b7b429"],["G:/Blog/public/pan/index.html","742d04bd0f809f6e67991c19c34ab5ac"],["G:/Blog/public/tags/APPscan/index.html","e6c45efe0d27635902d6af502f746520"],["G:/Blog/public/tags/CTF/index.html","65e3e15760a93ec4f963de0f9524cd1a"],["G:/Blog/public/tags/CVE/index.html","bee345527e9337b1d3348e2310524bb1"],["G:/Blog/public/tags/GitHub信息泄露/index.html","48b28e0dde2f6839a5b5bce3ff4dca4b"],["G:/Blog/public/tags/HTTP状态码/index.html","27c017ff900d3f85ac1a7a3683be1de2"],["G:/Blog/public/tags/LADP/index.html","985dda638cedc8ee785d91839110e556"],["G:/Blog/public/tags/Linux/index.html","e70ca4c130f0db51bfdc0e10b666ce70"],["G:/Blog/public/tags/Linux命令/index.html","1af9d8d069131baef91b9125693e2056"],["G:/Blog/public/tags/Linux笔记/index.html","fc7800e8125ef437a27662673fd65d6c"],["G:/Blog/public/tags/MobSF/index.html","ae5c36d2fae0595d38877e3bbc4116d2"],["G:/Blog/public/tags/PHPstudy后门/index.html","91afba1536be046c62f506fd59d0d337"],["G:/Blog/public/tags/POC/index.html","64a2f1d009c455f67c4175b043db64d7"],["G:/Blog/public/tags/SCF/index.html","87d98d32f1551d597f9541c20f2b40a9"],["G:/Blog/public/tags/Windows/index.html","8cbfdfd4fc9ba4bb294088c08d72af29"],["G:/Blog/public/tags/Windows命令/index.html","c91a1b0baca3823b01dd9061eca19ac0"],["G:/Blog/public/tags/X-RAY/index.html","ecb99df4c5bce61f6c6173df797bc1b1"],["G:/Blog/public/tags/XSS平台/index.html","76ff5803b07c0293ec17e3cbb2d72c88"],["G:/Blog/public/tags/burpsuite/index.html","aaaf1a5c3c259ae7cc4626d5dd68ba18"],["G:/Blog/public/tags/cewl/index.html","d66e8955803a9bd62cf4173b81960bc2"],["G:/Blog/public/tags/hackthebox/index.html","845d2ede834f86a4c4afac306dfa335d"],["G:/Blog/public/tags/hexo/index.html","50df5d85d2858853ff7f1279e2a97a05"],["G:/Blog/public/tags/hexo博客/index.html","72a426f23935ab831f343a692b8a0dc5"],["G:/Blog/public/tags/index.html","a8adee9181ff9f648dcf44ca386aab04"],["G:/Blog/public/tags/kali-Linux/index.html","08d704734cf7225cd0b4146e14bd8d63"],["G:/Blog/public/tags/mysql/index.html","caf2d058c56db3da491402bbcb63242c"],["G:/Blog/public/tags/nessus/index.html","fbfda08247efc69d646401edc8ddeec1"],["G:/Blog/public/tags/onedrive/index.html","02b42056730eebb9f6d4a8da93263380"],["G:/Blog/public/tags/oneindex/index.html","55660d4767baad8b0ae3ed52cff5e252"],["G:/Blog/public/tags/python爬虫/index.html","3a095492711d95588a01a2c5f3050c34"],["G:/Blog/public/tags/tg机器人/index.html","3a4eacc69f99a1e989b557e91049b138"],["G:/Blog/public/tags/tor浏览器/index.html","4076612263c0061862656bb6e857d806"],["G:/Blog/public/tags/xray/index.html","f6a4a78b63aede5a9fa93011fcbbaea8"],["G:/Blog/public/tags/个人网盘/index.html","5fc807a807cfcf9706696bed70614fb0"],["G:/Blog/public/tags/主题功能/index.html","c061b68d48ae8b052ca6971cd9c1c33f"],["G:/Blog/public/tags/优秀文章/index.html","e34618708e20f95c5a8d8b063bc9057e"],["G:/Blog/public/tags/其他文章/index.html","e3568177b7e14a070d8ad739f734c56c"],["G:/Blog/public/tags/命令/index.html","cd95b6b6f0586c784e135ab27ac095f3"],["G:/Blog/public/tags/图床/index.html","8f71ea453c724918fc8e73e58138f9c7"],["G:/Blog/public/tags/夺旗/index.html","469147009492f304155c67a4727e79c1"],["G:/Blog/public/tags/安全工具/index.html","ce683c179194b0720480ad035f72360b"],["G:/Blog/public/tags/思维导图/index.html","b60401a6588120d97d31115a25c91af9"],["G:/Blog/public/tags/数据库/index.html","2b09cd9c2e209290db2c6e57e9a8d007"],["G:/Blog/public/tags/文章模板/index.html","b4a31431b96e7dbdfd6f57f538505270"],["G:/Blog/public/tags/方法论/index.html","5dea5a64da6186cc5c3f9e0c1cca4bab"],["G:/Blog/public/tags/法律/index.html","0e3df0d32d994db29e72f5fb7be3c21c"],["G:/Blog/public/tags/渗透测试/index.html","d4ab9e007f4c827368c7bc2c85455a80"],["G:/Blog/public/tags/渗透测试方法论/index.html","4e3467777c0a06dd2c0a0da66da9db44"],["G:/Blog/public/tags/漏洞/index.html","fd3d16abfdcc70482ddd03d440e2ec42"],["G:/Blog/public/tags/漏洞库/index.html","89415640665d44e529b94cd166b1605e"],["G:/Blog/public/tags/漏洞案例/index.html","887b4766ccc3da5d2f972b5991f2f8c9"],["G:/Blog/public/tags/火狐插件/index.html","ae433cef98a9b344dfa28651bb39def9"],["G:/Blog/public/tags/生活随笔/index.html","3d3549c26e0a07fd527c0aaf7be976db"],["G:/Blog/public/tags/病毒/index.html","6bb354231ba7bf0b7143c149ae847df5"],["G:/Blog/public/tags/社工/index.html","c2174840353d86a527743dfb75131f9c"],["G:/Blog/public/tags/科学上网/index.html","c3345509d244099b14008b20b58a2f21"],["G:/Blog/public/tags/移动安全/index.html","ffc8b91013ae5505a98ca6b34780138c"],["G:/Blog/public/tags/等级保护/index.html","41348cee5fd5e5509f3af0ae49603527"],["G:/Blog/public/tags/翻译/index.html","149e6166aa01aa97f351797b0214e29d"],["G:/Blog/public/tags/翻译文章/index.html","60fabb39a5e4ef545288d8d033a5c87a"],["G:/Blog/public/tags/脱壳/index.html","6bffaba30f7c2cdd3a4ef37bc2ad1faf"],["G:/Blog/public/tags/解决问题/index.html","6475f1a258a897a3eccdb592768f7692"],["G:/Blog/public/tags/豆瓣书架/index.html","be1fc0dbb46e51bf7fd9ecb4e83cb441"],["G:/Blog/public/tags/转载/index.html","83c6911ba465d3ebc5d56c7cd09aa727"],["G:/Blog/public/tags/面试/index.html","b8db02a5e902b40e21359a04e9628161"],["G:/Blog/public/tags/靶场/index.html","8f4ab2094b3eed4fe837f611d12f9112"],["G:/Blog/public/archives/index.html","bc1917f5ed163bf81de32f8028f531e3"],["G:/Blog/public/留言板/index.html","803f459ce731cdacebdcaaa86cbb71df"]];
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







