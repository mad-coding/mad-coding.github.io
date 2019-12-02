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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","fcc4be1d6eb65b9370a8764f7ee9025c"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","19d0ba1fec082a4441ed92d7ea15f712"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","cceab9a90c1f0370e44b1b7048fc9df0"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","ebf4fbd8c32863aabf9ce3ef6f0564a0"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","d2802b4b93c76fe0cef9bb3507bc9a22"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","3a28ab1bcbfae53dcb4a981424ee999a"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","23c1dbb70dca6c03c59a198300db330e"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","270e37334f89a10165967584d57a363b"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","d886f569e0f1da36aa3798691ef6eec3"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","4882b9bce4a5fa545608dbe8240ae626"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","06fc8902e7ec4ec42fa5d43d9c8e57bc"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","2d9b0f95f1588662e0b81ce5a1912bf7"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","8473ec013d5c4ce9757b3daf44d3e850"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","2563d272a8ec2d11c4f1bb2d577b19ab"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","8871ae65431159f933f137fd9deef50d"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","8bee13a19c42480fbfb1bf8cacde48f2"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","065d3560f2fb3ee69e1d3c3fcd323319"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","8541fe23d13e136c971147dfb9d6ac0c"],["G:/Blog/public/2019/08/26/Python工具库/index.html","4c39bcca569df1923caf86e9bb98ee18"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","6986d4605e7775e645fee37b19df92f0"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","af360327f5578ad9512f7ed8d7ecb3cf"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","d6046e956c5b22d1255bb1f135c2f0a0"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","85f86aaa7ea1e03c53b4862c9ce828fa"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","49a69eafad634cf9672d10c140f05ed3"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","ae7852ff62a671cfdc7c357cee6b7887"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","b3b4f7ea7ef7946d5393abd595933806"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","efc633f816df2be669d46e72f22f5a8e"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","079ba1a7198569be1a7101054d9302bf"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","ba13a87dca1000eba367f85a1ac76fb5"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","3da3a5af198c9f3bbb5320ff27246c6b"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","541888694dcf36af92874ff5a691f890"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","965b6e0b3086176488db159e69e70587"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","72abcfde79afaf33a726f158bf983630"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","be809a471f4bf328942748cc0ef9b8bc"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","2c9de945c1fdd6b549ee334b68f69134"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","9abbf3d803294080596afab105c26a56"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","797b01e026c3468c98aafd6ffaf31c78"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","9f7f82f2dfac173c44b26353cbae088f"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","4858ac26f9d4c824b9c0c43e9c2504f1"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","a881210a5b3d06a579d7fd0c80614a90"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","13f1e31eda366a3900c2a75bfd65c937"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","ae0f06fb74327eaab64e46f2a4aeaff9"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","a8817683d9e016873944884cf0c484df"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","43bb639290b863354e10b85f063fda15"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","95c06e5a54f90c8959a884939aabcd1f"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","59317fb94a5cf7fb30da66942840dc76"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","106a61da4ddf98d3c1f02b38d912f754"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","fe9d5a28367db82f2c9492c7702dd1cd"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","4b842a3b7b4c0febb80890127fa867d7"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","dc854c41bc3ad063fc815db8e42ddb13"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","37085c913ce083d9084ad3d5a12a0d75"],["G:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","aaeffe30e3200d0338dd4fc5d7b31530"],["G:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","67a44caff87fa20639e9bac3f9296bee"],["G:/Blog/public/2019/11/13/黑客心理学/index.html","14e18f3f910f229cfa7c8dd36a7b0d4e"],["G:/Blog/public/2019/11/21/记一次主机中挖矿病毒/index.html","7b08f367074c2370c97a3bc0cc5faa51"],["G:/Blog/public/2019/11/26/实战脱壳奇虎360/index.html","292113fe186b34c126bea17d1e6550d5"],["G:/Blog/public/2019/11/27/nessus-pro破解安装及插件离线跟新/index.html","aec626fb8fb247005dacf63c45db284d"],["G:/Blog/public/2019/12/02/使用腾讯SCF-onedrive搭建5T个人网盘/index.html","24c5c29273eabbc3a7690247d4c9b2fe"],["G:/Blog/public/about/index.html","cf62d9ece2186a7491b7a6b5a7311a0d"],["G:/Blog/public/archives/2019/07/index.html","02726d166b62b9bfa122a4c5ee1ce433"],["G:/Blog/public/archives/2019/08/index.html","663499cda48c462969684c6fe02f1d29"],["G:/Blog/public/archives/2019/08/page/2/index.html","cb7099ee65d3d44a96431171be2c5ea3"],["G:/Blog/public/archives/2019/08/page/3/index.html","0e59a2f896729a299b3b39e199071381"],["G:/Blog/public/archives/2019/09/index.html","ddfc50faa5e9384cb1b1e5961cec30c6"],["G:/Blog/public/archives/2019/09/page/2/index.html","ae19fe7512cec3c9c15c06f48598ab02"],["G:/Blog/public/archives/2019/10/index.html","eea2cb1a76d8a9439afde1e7c2ad8496"],["G:/Blog/public/archives/2019/10/page/2/index.html","c0cf05bd1afd5869cd85392a1ec01227"],["G:/Blog/public/archives/2019/11/index.html","63cc8c2d6810ba2a6ea74259172aa030"],["G:/Blog/public/archives/2019/12/index.html","fb176a9d8ad1d830aa063de87d21ceff"],["G:/Blog/public/archives/2019/index.html","24e2ef8beb91895848ff5f1f7b3cde4c"],["G:/Blog/public/archives/2019/page/2/index.html","6184afbf25d92acbd03aa4ac766b7467"],["G:/Blog/public/archives/2019/page/3/index.html","ddf04ac4ce552a269d005f2e83579e2b"],["G:/Blog/public/archives/2019/page/4/index.html","881b3321f8e0db307ebd247b36c2db13"],["G:/Blog/public/archives/2019/page/5/index.html","39edbce80de8c6b44f79eac041eb9dca"],["G:/Blog/public/archives/2019/page/6/index.html","3dba9c95d019b083a03a7636b546162f"],["G:/Blog/public/archives/2019/page/7/index.html","3f4ed839ff97520d30d8d660e7b31852"],["G:/Blog/public/archives/index.html","9180a57258739a419b800c3e0c6608d9"],["G:/Blog/public/archives/page/2/index.html","249a699de0abafe8775878ad4edc75e9"],["G:/Blog/public/archives/page/3/index.html","9a880134a0a1fb598a77bad94b60a6cf"],["G:/Blog/public/archives/page/4/index.html","34ac3d2b1aa55bce579bceb0078ba4c9"],["G:/Blog/public/archives/page/5/index.html","937b8f4794f8e388665bbfdcaa006698"],["G:/Blog/public/archives/page/6/index.html","b67bb7467ec3c413a79fc179480c68e8"],["G:/Blog/public/archives/page/7/index.html","b3dca3e5d043aec5a8a512ec803e13f8"],["G:/Blog/public/categories/CTF相关/index.html","36f58b8f775f4835e0bce97f64789a4f"],["G:/Blog/public/categories/Linux/index.html","559a0869dd2f175f0a75566914354bee"],["G:/Blog/public/categories/index.html","521102a3c04023e520390826892eff40"],["G:/Blog/public/categories/web安全/index.html","4bc4caee802823e30c46d0880e53e405"],["G:/Blog/public/categories/web安全/安全资讯/index.html","ba0fca6a8ac4e238d0981fd08124fcc1"],["G:/Blog/public/categories/web安全/靶场练习/index.html","9a82c010b02c57141a3f6883055424cd"],["G:/Blog/public/categories/主机安全/Linux/index.html","c86728db65d61dcaceb555d5411d3b8d"],["G:/Blog/public/categories/主机安全/index.html","d3cd4fe5e3b2db24f32523f1e92d04fb"],["G:/Blog/public/categories/其他教程/index.html","2a25eb0c8de497de08a31c89a8268d0e"],["G:/Blog/public/categories/其他文章/hexo博客/index.html","fd3f634a781fcd3d4a4a4e0a0ee3db40"],["G:/Blog/public/categories/其他文章/index.html","7b07a8e8cf8ded5b50f7cdf6573f4af6"],["G:/Blog/public/categories/其他文章/记录生活/index.html","782fd40875ad9cb24075444b7e5cce00"],["G:/Blog/public/categories/安全工具/index.html","2c325bb978f1904afed3972266b834f1"],["G:/Blog/public/categories/安全服务/index.html","84624f7375151d1a7697af8e588fc429"],["G:/Blog/public/categories/安全服务/渗透测试/index.html","c3b8a5202005bc9d20fc388b807f059f"],["G:/Blog/public/categories/安全服务/等级保护/index.html","57cad695d60712c2c6252fbcaa7f511a"],["G:/Blog/public/categories/渗透测试/index.html","e298a624064f56455c813a967aa9be5d"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","e004167a590e3154c02ce3d83e3f4730"],["G:/Blog/public/categories/漏洞挖掘/index.html","98594f496fdaca75a6ea266f66f2c589"],["G:/Blog/public/categories/病毒分析/index.html","9cb3b058e72883393fc73e8fe72e93d4"],["G:/Blog/public/categories/社会工程/index.html","748f7da309106e62a044d5a2aa923d1a"],["G:/Blog/public/categories/神兵利器/index.html","27e0b5745f8d049e057ff3b7d452fa5b"],["G:/Blog/public/categories/神兵利器/page/2/index.html","e4abaf5a665005efaa44e60b588087be"],["G:/Blog/public/categories/逆向分析/index.html","3d4107f686546475d53d585c9c54e9f9"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","ebac1fc128ad962425f15c97fb723308"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","b6328f42d736991f624245e1df60a8ba"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","6fc67f5d3ded249565724f1a51b1f1d5"],["G:/Blog/public/page/2/index.html","cff670e1f5c23c3145aaf8f2c8ea5673"],["G:/Blog/public/page/3/index.html","c42a3a97f0f0f93e19626f7439a82db0"],["G:/Blog/public/page/4/index.html","192ad1d79f07a173e04a47367a2aa269"],["G:/Blog/public/page/5/index.html","0fab1db608c4d6ca8354f778e20e66e3"],["G:/Blog/public/page/6/index.html","253cbf5165e84c07587ee61d5ede9b49"],["G:/Blog/public/page/7/index.html","efb2c0e34430c89ffbc1616aa3ab8368"],["G:/Blog/public/pan/index.html","b20d5b5f4853a0ad24ba03e9c856557a"],["G:/Blog/public/tags/APPscan/index.html","f49dc1279d84805725c905b5cd988c7d"],["G:/Blog/public/tags/CTF/index.html","e9c1256af8a94065696657d802779ea0"],["G:/Blog/public/tags/CVE/index.html","3d72d51c9830e092f1ba3676f590e93f"],["G:/Blog/public/tags/GitHub信息泄露/index.html","d5c89e2a1d0bc3f33cdc218a3d3b7793"],["G:/Blog/public/tags/HTTP状态码/index.html","68a96b78574f16eabc9ebdf3f7e02c45"],["G:/Blog/public/tags/LADP/index.html","37d493efeda3dcaac5e8c9f2928ca57f"],["G:/Blog/public/tags/Linux/index.html","f97d2a88bc7acdff0032958637243308"],["G:/Blog/public/tags/Linux命令/index.html","9b3f361922928cf42ea4dd96abf566a6"],["G:/Blog/public/tags/Linux笔记/index.html","1604c86fe96fa07bce8d76e193e8a135"],["G:/Blog/public/tags/MobSF/index.html","0b3cc95294ef7b7111611aa26d372f48"],["G:/Blog/public/tags/PHPstudy后门/index.html","e619f5b5000e6191e288eef325c219fc"],["G:/Blog/public/tags/POC/index.html","9ddfda653ddf6166c543a6206348fa7d"],["G:/Blog/public/tags/SCF/index.html","6e270b5dd11adacdf7bc79776fba9b07"],["G:/Blog/public/tags/Windows/index.html","b0d94afbee5f677c85cb007406fbb27b"],["G:/Blog/public/tags/Windows命令/index.html","d9b221b4a21d795305c1b8784bfdb682"],["G:/Blog/public/tags/X-RAY/index.html","cb381debfd97ab6e3c8e2e926bf99081"],["G:/Blog/public/tags/XSS平台/index.html","44a129ba7320a09cca6bd5b41ac0b989"],["G:/Blog/public/tags/burpsuite/index.html","9acbc0d8e0f2907a37016093a0931946"],["G:/Blog/public/tags/cewl/index.html","9b86247ac2faff51d0cd5e720480fdcf"],["G:/Blog/public/tags/hackthebox/index.html","169fce96104b1326b36da983120e6dc5"],["G:/Blog/public/tags/hexo/index.html","e53dfec2129082ba66b7bf62276d9aa5"],["G:/Blog/public/tags/index.html","4684f6c364b2bbfd014aadf10bbbc7a7"],["G:/Blog/public/tags/kali-Linux/index.html","582f814756f09390e5cdd11d6ff49c02"],["G:/Blog/public/tags/mysql/index.html","2eb63f12362b00f095aa091103801269"],["G:/Blog/public/tags/nessus/index.html","143121af66ed630216df1e66d183ff9d"],["G:/Blog/public/tags/onedrive/index.html","f555c91fffcef13a5b4ddf5bc86790c7"],["G:/Blog/public/tags/oneindex/index.html","4ea3d76534deb85f1f52059a96b31de3"],["G:/Blog/public/tags/python爬虫/index.html","443166e533af4dd97c85a9c6491f8cbf"],["G:/Blog/public/tags/tg机器人/index.html","6c53880a0b2f7f490eb52e4fc8746919"],["G:/Blog/public/tags/tor浏览器/index.html","667e46c092da64aadbb09fd92e2fe120"],["G:/Blog/public/tags/xray/index.html","03df9bb658d2a5b3336f0be7eb62024d"],["G:/Blog/public/tags/个人网盘/index.html","d77b4c8c939f47a5a07f7b7febb6510c"],["G:/Blog/public/tags/主题功能/index.html","b593f9ddaa75003048dfe5b3874982ef"],["G:/Blog/public/tags/优秀文章/index.html","7a226bfc55d6fd5d95955d2c786eff49"],["G:/Blog/public/tags/博客/index.html","d8d802e0aa06f358c0f806ffb60bed83"],["G:/Blog/public/tags/命令/index.html","bfcfb0b4829f4359d071a858b7712073"],["G:/Blog/public/tags/图床/index.html","caac2aff67e522ada1713be4d333fd76"],["G:/Blog/public/tags/夺旗/index.html","6fd55d89dea5619842823692361922fe"],["G:/Blog/public/tags/安全工具/index.html","d5208b795e7e655b891c468bb7c80f1a"],["G:/Blog/public/tags/思维导图/index.html","27e99cf122b0f7fd28185d5099dfd4d5"],["G:/Blog/public/tags/数据库/index.html","6af79503c1dd889baf48bda63173bddd"],["G:/Blog/public/tags/文章模板/index.html","4ec59ea587b4f5056fef3300465a5307"],["G:/Blog/public/tags/方法论/index.html","0801601d42f6ba24fa49855851931edf"],["G:/Blog/public/tags/法律/index.html","9555c59b86a56c07f2b7a4defa944a14"],["G:/Blog/public/tags/渗透测试/index.html","c66fcad8df45b748ff2ceae1762b7aa1"],["G:/Blog/public/tags/渗透测试方法论/index.html","79d59c98363fc10573085fe28b4002bb"],["G:/Blog/public/tags/漏洞/index.html","207ff0ffa999657119c6e979231989d7"],["G:/Blog/public/tags/漏洞库/index.html","e4b07480dcedb92dd30c703b3e6001fc"],["G:/Blog/public/tags/漏洞案例/index.html","868b4fb36d16eed891fcabf5065601b4"],["G:/Blog/public/tags/火狐插件/index.html","4c6de81e4ad46ca0f55b14fcc593addb"],["G:/Blog/public/tags/生活随笔/index.html","46f48084c73830eb613d110ee3ef267b"],["G:/Blog/public/tags/病毒/index.html","e38b300f9844876986ed75204dd8b375"],["G:/Blog/public/tags/社工/index.html","0091e8a6348f7fc85ea4e7abae8ac3cf"],["G:/Blog/public/tags/科学上网/index.html","0f16b43ec321248b97dd8fd1ade87616"],["G:/Blog/public/tags/移动安全/index.html","0f36838c60dfec4623d830630497ce5c"],["G:/Blog/public/tags/等级保护/index.html","71bd9f6a69d7b2e24a9a4cd2fc67ce49"],["G:/Blog/public/tags/翻译/index.html","4310de60dc651bf3de90a300ea431fe8"],["G:/Blog/public/tags/翻译文章/index.html","4a23dc54be4b4479b90bbf44992f3966"],["G:/Blog/public/tags/脱壳/index.html","d22bb69377ff58b3fa6f1d5f7b9a48c8"],["G:/Blog/public/tags/解决问题/index.html","c7a78776c217371869f83b4024f8bded"],["G:/Blog/public/tags/豆瓣书架/index.html","44725f0142999010decd20da9ac72d62"],["G:/Blog/public/tags/转载/index.html","fc50707a94582dc037d70d6e1aca6ba0"],["G:/Blog/public/tags/面试/index.html","289adaa42885aacfa9d777a113f09d8c"],["G:/Blog/public/tags/靶场/index.html","1c5c0ba5380d9bf14fdd9441e3ba688b"],["G:/Blog/public/archives/index.html","5be61fc30466411e027a9821546a2110"],["G:/Blog/public/留言板/index.html","8be16bb26bec651f64776b8683964e19"]];
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







