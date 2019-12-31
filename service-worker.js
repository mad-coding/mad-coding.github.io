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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","fcc4be1d6eb65b9370a8764f7ee9025c"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","19d0ba1fec082a4441ed92d7ea15f712"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","cceab9a90c1f0370e44b1b7048fc9df0"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","ebf4fbd8c32863aabf9ce3ef6f0564a0"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","d2802b4b93c76fe0cef9bb3507bc9a22"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","3a28ab1bcbfae53dcb4a981424ee999a"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","23c1dbb70dca6c03c59a198300db330e"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","270e37334f89a10165967584d57a363b"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","d886f569e0f1da36aa3798691ef6eec3"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","4882b9bce4a5fa545608dbe8240ae626"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","06fc8902e7ec4ec42fa5d43d9c8e57bc"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","2d9b0f95f1588662e0b81ce5a1912bf7"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","8473ec013d5c4ce9757b3daf44d3e850"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","2563d272a8ec2d11c4f1bb2d577b19ab"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","8871ae65431159f933f137fd9deef50d"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","8bee13a19c42480fbfb1bf8cacde48f2"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","065d3560f2fb3ee69e1d3c3fcd323319"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","8541fe23d13e136c971147dfb9d6ac0c"],["G:/Blog/public/2019/08/26/Python工具库/index.html","4c39bcca569df1923caf86e9bb98ee18"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","6986d4605e7775e645fee37b19df92f0"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","af360327f5578ad9512f7ed8d7ecb3cf"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","d6046e956c5b22d1255bb1f135c2f0a0"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","85f86aaa7ea1e03c53b4862c9ce828fa"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","49a69eafad634cf9672d10c140f05ed3"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","ae7852ff62a671cfdc7c357cee6b7887"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","b3b4f7ea7ef7946d5393abd595933806"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","efc633f816df2be669d46e72f22f5a8e"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","079ba1a7198569be1a7101054d9302bf"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","ba13a87dca1000eba367f85a1ac76fb5"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","3da3a5af198c9f3bbb5320ff27246c6b"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","541888694dcf36af92874ff5a691f890"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","965b6e0b3086176488db159e69e70587"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","72abcfde79afaf33a726f158bf983630"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","be809a471f4bf328942748cc0ef9b8bc"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","2c9de945c1fdd6b549ee334b68f69134"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","9abbf3d803294080596afab105c26a56"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","797b01e026c3468c98aafd6ffaf31c78"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","9f7f82f2dfac173c44b26353cbae088f"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","4858ac26f9d4c824b9c0c43e9c2504f1"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","a881210a5b3d06a579d7fd0c80614a90"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","13f1e31eda366a3900c2a75bfd65c937"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","ae0f06fb74327eaab64e46f2a4aeaff9"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","a8817683d9e016873944884cf0c484df"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","43bb639290b863354e10b85f063fda15"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","95c06e5a54f90c8959a884939aabcd1f"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","59317fb94a5cf7fb30da66942840dc76"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","106a61da4ddf98d3c1f02b38d912f754"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","fe9d5a28367db82f2c9492c7702dd1cd"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","4b842a3b7b4c0febb80890127fa867d7"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","dc854c41bc3ad063fc815db8e42ddb13"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","37085c913ce083d9084ad3d5a12a0d75"],["G:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","aaeffe30e3200d0338dd4fc5d7b31530"],["G:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","67a44caff87fa20639e9bac3f9296bee"],["G:/Blog/public/2019/11/13/黑客心理学/index.html","14e18f3f910f229cfa7c8dd36a7b0d4e"],["G:/Blog/public/2019/11/21/记一次主机中挖矿病毒/index.html","7b08f367074c2370c97a3bc0cc5faa51"],["G:/Blog/public/2019/11/26/实战脱壳奇虎360/index.html","292113fe186b34c126bea17d1e6550d5"],["G:/Blog/public/2019/11/27/nessus-pro破解安装及插件离线跟新/index.html","aec626fb8fb247005dacf63c45db284d"],["G:/Blog/public/2019/12/02/使用腾讯SCF-onedrive搭建5T个人网盘/index.html","7f7f0e394ea33419fe563586729f2755"],["G:/Blog/public/2019/12/03/Kali-Linux-2019-4解决中文乱码问题/index.html","c1468e83d8eeda598bbadb1e60ab2755"],["G:/Blog/public/2019/12/19/waf的识别与绕过（不断补充）/index.html","b03515733eb50bf48e5a3253c9dcc211"],["G:/Blog/public/2019/12/23/JS文件信息收集工具-LinkFinder/index.html","e52ccc5848170fdb3c0294c23bf77176"],["G:/Blog/public/about/index.html","2bb1502c8489b989269b69490412a039"],["G:/Blog/public/archives/2019/07/index.html","16edbf71b6ed500dc391492dcc0435c8"],["G:/Blog/public/archives/2019/08/index.html","4b42849d4e45e14f8f3a9ea69e48229d"],["G:/Blog/public/archives/2019/08/page/2/index.html","724f119d560f1db6075c2892e1023e33"],["G:/Blog/public/archives/2019/08/page/3/index.html","c54d947734f7d25f5e8cbce483119dbe"],["G:/Blog/public/archives/2019/09/index.html","322b9401046082cf9de83daeb3259eec"],["G:/Blog/public/archives/2019/09/page/2/index.html","2d16007519519ccb84b110db6b584ed1"],["G:/Blog/public/archives/2019/10/index.html","b8d0d2f7c9e85e47b65b409b9f598def"],["G:/Blog/public/archives/2019/10/page/2/index.html","d6a22bac9daac3f59e43315d45fe4a01"],["G:/Blog/public/archives/2019/11/index.html","9f23bce04d64ce0a0bdc1571541693f5"],["G:/Blog/public/archives/2019/12/index.html","53589649068e851dc0fbf72a97a661ac"],["G:/Blog/public/archives/2019/index.html","a1ec04c5cc16f248fdeef7c4d45fd736"],["G:/Blog/public/archives/2019/page/2/index.html","8bda5161269e33700bbf9067b77b2801"],["G:/Blog/public/archives/2019/page/3/index.html","ea4a633099af4f740025a7a6dfc177b4"],["G:/Blog/public/archives/2019/page/4/index.html","3a3864d75d270b8038989c955afa1c4c"],["G:/Blog/public/archives/2019/page/5/index.html","c7f5733cc8c048a3676a26ae781730f4"],["G:/Blog/public/archives/2019/page/6/index.html","8b64da4f05c0b5a7e74e2168a95789e8"],["G:/Blog/public/archives/2019/page/7/index.html","410502ad17f20c560e83a36fd63e9571"],["G:/Blog/public/archives/index.html","ff8387f826ecd8789700d9a0f7be1d1d"],["G:/Blog/public/archives/page/2/index.html","bd7d12733c5839d908a07915a026c6f4"],["G:/Blog/public/archives/page/3/index.html","c981661f0e82dcbd91b74d8893102674"],["G:/Blog/public/archives/page/4/index.html","555deed18ae56c63ba14c63d85452a4f"],["G:/Blog/public/archives/page/5/index.html","1c8385e5a2385a7b51de9bcf40cc4735"],["G:/Blog/public/archives/page/6/index.html","78224993036fba29adb43ac911a3546d"],["G:/Blog/public/archives/page/7/index.html","d218402cc903cff9291d1cf85b3bb0d0"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","1408cbc6390f9f08e1e094d0b9b1b551"],["G:/Blog/public/categories/CTF相关/index.html","7ada7064ba664759df894eb41106fc40"],["G:/Blog/public/categories/Linux/index.html","993ac9adefe52a008b213faacd214e94"],["G:/Blog/public/categories/index.html","6890580fdfd8466e9bd1bf7ca1e0a400"],["G:/Blog/public/categories/web安全/index.html","6aca480e8527e03688288306ec076b84"],["G:/Blog/public/categories/web安全/安全资讯/index.html","14b7c9ff7c75938c4cb252971b8dc75f"],["G:/Blog/public/categories/web安全/靶场练习/index.html","ddd3a7dc32041f6c5000a95c1e5df749"],["G:/Blog/public/categories/主机安全/Linux/index.html","56f6e7bd64e33b256d21b4ff3d1ccbf4"],["G:/Blog/public/categories/主机安全/index.html","551954e28c30db6205cddc7f85f5e979"],["G:/Blog/public/categories/其他教程/index.html","b0e356d8313617e452ca057504eb81a3"],["G:/Blog/public/categories/其他文章/hexo博客/index.html","2e7cc7b4efd4da74bb00c8d90ca0f21d"],["G:/Blog/public/categories/其他文章/index.html","f926753d96c15cd3cda8ab16ecd493bf"],["G:/Blog/public/categories/其他文章/记录生活/index.html","c00a327e512e3318a4889ddfc231c90f"],["G:/Blog/public/categories/安全工具/index.html","b468e2e979909a473b9b75a1f25ccd13"],["G:/Blog/public/categories/安全服务/index.html","b963cc77a85615cb6a6711ce16f03ff1"],["G:/Blog/public/categories/安全服务/渗透测试/index.html","cc1b9c3ddaa55cf152aaeb393f1f7512"],["G:/Blog/public/categories/安全服务/等级保护/index.html","b4dee10023706bd59e4a18f2e212dd2e"],["G:/Blog/public/categories/渗透测试/index.html","9a528f1a2007df84b97d601878cf007b"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","80a1f6aab3622e9b6174846701a86421"],["G:/Blog/public/categories/漏洞挖掘/index.html","070a27cfff0625b266dd9a9b18ba38d1"],["G:/Blog/public/categories/病毒分析/index.html","7aa4455d12fc3378457a5a775f6c5e3b"],["G:/Blog/public/categories/社会工程/index.html","41c20d3d3eef618aef7a1dafae52fd60"],["G:/Blog/public/categories/神兵利器/index.html","7e91d8888b03c6f1593f9828aded753a"],["G:/Blog/public/categories/神兵利器/page/2/index.html","7b05b4c676671d292aa1482494e86cc9"],["G:/Blog/public/categories/神兵利器/page/3/index.html","31e1a7b431939b0bd836aa2a8d146420"],["G:/Blog/public/categories/逆向分析/index.html","35d61802a52aff9e472dad3853149ae6"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","6c8b4254e204562ec70a3f53cc5e0ff8"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","2849f6c0ca16ead3122b28bf5b15fb3e"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","6a9d8e55335c48712164f5b7ec27442a"],["G:/Blog/public/movies/index.html","ed9698c9e36d3a32a6c348c260cb7e34"],["G:/Blog/public/page/2/index.html","7ebdc85a71a817fae5f8689145019205"],["G:/Blog/public/page/3/index.html","b6fad117eb852ecae021e995f15bb2b2"],["G:/Blog/public/page/4/index.html","0da2c09183f2270b3885d71f95dc606a"],["G:/Blog/public/page/5/index.html","0958ae03215b116a542d668f4e9bc268"],["G:/Blog/public/page/6/index.html","8baf1b311d79afdba98cd95655492a84"],["G:/Blog/public/page/7/index.html","912d73d11db6096c2530f941b0f217dc"],["G:/Blog/public/pan/index.html","30b3dbec4a1f0e254d284a155235ebe6"],["G:/Blog/public/tags/APPscan/index.html","782c636687c928a91002bb2c5292913c"],["G:/Blog/public/tags/CTF/index.html","c53e8a858707ae2030bb2137c9cb327d"],["G:/Blog/public/tags/CVE/index.html","66e68b9bc7f589b76c4a14a078f6f37a"],["G:/Blog/public/tags/GitHub信息泄露/index.html","e33e234b85ee5104a26eaac5bc037df8"],["G:/Blog/public/tags/HTTP状态码/index.html","8c69b1f7559549628ff34ff4704c7e86"],["G:/Blog/public/tags/LADP/index.html","ca5de08b8188903cb1ae2a91fdf0bf63"],["G:/Blog/public/tags/LinkFinder/index.html","5acfc677212c4046a6047eda108090e4"],["G:/Blog/public/tags/Linux/index.html","88a4c4201a6c3da3ea66abed3c3c0051"],["G:/Blog/public/tags/Linux命令/index.html","d5d6464369a86b46d8c6adf25e8d287c"],["G:/Blog/public/tags/Linux笔记/index.html","01f247d04e8c18ca79516c455c372e19"],["G:/Blog/public/tags/MobSF/index.html","01ea336194535b43d678266d6a27c211"],["G:/Blog/public/tags/PHPstudy后门/index.html","2062a1e2e26662811faafb4be3083965"],["G:/Blog/public/tags/POC/index.html","787f0b935860234212144653c34a03a4"],["G:/Blog/public/tags/SCF/index.html","3c06c9360c621086c8497a8bce676cc7"],["G:/Blog/public/tags/Windows/index.html","e947485389958e7c8f13225ff4255a43"],["G:/Blog/public/tags/Windows命令/index.html","fd94f4525d1b2cad061785dfb67212ab"],["G:/Blog/public/tags/X-RAY/index.html","30123c317957e1d9f0730105bf852040"],["G:/Blog/public/tags/XSS平台/index.html","3f45b92c4eda96b5a27cf9be1af4dc67"],["G:/Blog/public/tags/burpsuite/index.html","6ab9f1b9305aae913e598f32263af113"],["G:/Blog/public/tags/cewl/index.html","eee24829bf52f81be1a41027d7305f1d"],["G:/Blog/public/tags/hackthebox/index.html","2cb037fb02bda479835b3b3a2c679a68"],["G:/Blog/public/tags/hexo/index.html","445cb0d29631a2903898a964164ad020"],["G:/Blog/public/tags/index.html","494b4b199f0d70bebcdd0c5e11051d2d"],["G:/Blog/public/tags/kali-Linux/index.html","af2da68ddf0f5581a10e2cb70971adfa"],["G:/Blog/public/tags/kali/index.html","6fe3b4e464eadbba0d46c1e7466632c2"],["G:/Blog/public/tags/mysql/index.html","fbc6bf53822747156406cdbd839f48e4"],["G:/Blog/public/tags/nessus/index.html","2df2a579a6089daa37eaea9c1c76b524"],["G:/Blog/public/tags/onedrive/index.html","8ce2cfe638d119088f5b979b7a49e1dc"],["G:/Blog/public/tags/oneindex/index.html","a86c5c53a328c8d7454712e2a959ae28"],["G:/Blog/public/tags/python爬虫/index.html","326d2f82da564c9e491304379ff0a5e3"],["G:/Blog/public/tags/tg机器人/index.html","cd14d0543b8ad80acef07d8fcccaebba"],["G:/Blog/public/tags/tor浏览器/index.html","cbd806786b0a464dcab2a8d6f6429b4b"],["G:/Blog/public/tags/waf/index.html","dd24dc15e614203bf2aecde908881381"],["G:/Blog/public/tags/xray/index.html","c20abe01466aa005720e0b9a745ad712"],["G:/Blog/public/tags/个人网盘/index.html","79df2acfe6947caeecff545e2f16eebc"],["G:/Blog/public/tags/主题功能/index.html","0f7983fd1d4a600496fb5853c0ed172a"],["G:/Blog/public/tags/优秀文章/index.html","401e444184142956578ff729e0966e08"],["G:/Blog/public/tags/博客/index.html","a36a2cba01e3cd36d8f742a7f25a05c5"],["G:/Blog/public/tags/命令/index.html","c11c85b6cfb9e5b636287d25a745d6b1"],["G:/Blog/public/tags/图床/index.html","5dc4454a338387eb4dbcac0e9ac9bb35"],["G:/Blog/public/tags/夺旗/index.html","273ac501c30095c883bd0a65c8a9e8d8"],["G:/Blog/public/tags/安全工具/index.html","38e787d5b694c94bd80201b904e73560"],["G:/Blog/public/tags/思维导图/index.html","4fe05751f4d99b2d9da17a3bbf34c913"],["G:/Blog/public/tags/数据库/index.html","756f9ac63b7e9ec3b97b1f2831417f04"],["G:/Blog/public/tags/文章模板/index.html","2f8e3be30420e70cc97e10960b09d27d"],["G:/Blog/public/tags/方法论/index.html","c37878f84c7182be49e6017fe22b9a2c"],["G:/Blog/public/tags/法律/index.html","da0c2f372203e614133857cbc5943be4"],["G:/Blog/public/tags/渗透测试/index.html","4832084c62759dbc8af5f3af8f85cd0f"],["G:/Blog/public/tags/渗透测试方法论/index.html","06ce2022e59aaebf762d5f1bdc546563"],["G:/Blog/public/tags/漏洞/index.html","30ae2edd801af619a6ed791bf326bf16"],["G:/Blog/public/tags/漏洞库/index.html","f26a11fb63ae293d9675f115bf120ca5"],["G:/Blog/public/tags/漏洞案例/index.html","8c8fd11ba22cd0540c5992a2c149699b"],["G:/Blog/public/tags/火狐插件/index.html","c2ef384a97805d8e80a8536884ed5a97"],["G:/Blog/public/tags/生活随笔/index.html","22941e0943e18c7ec7f5bde6f86dc9ab"],["G:/Blog/public/tags/病毒/index.html","136c05edc9841b397ac0cbdb1f8a2258"],["G:/Blog/public/tags/社工/index.html","2a5bde4860796be0302e1d8ca55545f9"],["G:/Blog/public/tags/科学上网/index.html","824b93e869f59701cb79e00f84dddd95"],["G:/Blog/public/tags/移动安全/index.html","0810905848fed152522a59bba644c988"],["G:/Blog/public/tags/等级保护/index.html","f901e42b48f78b799e772721f40de51e"],["G:/Blog/public/tags/翻译/index.html","4c49ef2a82a0637c641de16f9d668818"],["G:/Blog/public/tags/翻译文章/index.html","a84e1dfd84f077b7bb01a162e6b21f48"],["G:/Blog/public/tags/脱壳/index.html","11da57a517715de42287a968ba6c70c9"],["G:/Blog/public/tags/解决问题/index.html","772cf48edab8b920557c89e3fba4f5c8"],["G:/Blog/public/tags/豆瓣书架/index.html","869a85998533d39407c165b71613528a"],["G:/Blog/public/tags/转载/index.html","b29af873cf31c9a3d8e17c8571c8b418"],["G:/Blog/public/tags/面试/index.html","72a28c4b29df33deda62fd9870edd356"],["G:/Blog/public/tags/靶场/index.html","c94749b4e9f965b48219c4ddbd1203f1"],["G:/Blog/public/archives/index.html","b54f23c93b03a529891f840d781fcf3c"],["G:/Blog/public/留言板/index.html","16f2c6760abb7655af6b6d2c98fde000"]];
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







