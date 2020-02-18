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

var precacheConfig = [["H:/Blog/public/2019/07/01/我的大学生活/index.html","ce946bc0d384a281888d98a5bdc21141"],["H:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","ad20f33b6c69ca8f27ec31bd69ac276c"],["H:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","37f71010de97b9fab6339ef17b1504e1"],["H:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","665105a7d83b18a96be26f52b44a0f1e"],["H:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","39fbbf38f48fdd91b292191541cf79e1"],["H:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","16722fc576d431af8e773f03cfbc8cf6"],["H:/Blog/public/2019/08/16/oneindex后续/index.html","8dd6ccc87bd283eba8bc0430eb571f0b"],["H:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","6d9c24ce5da948100e54932d1b84980f"],["H:/Blog/public/2019/08/19/burp加载jython时出错/index.html","38e458ed22f647ebb4794dc56ea0f37f"],["H:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","39b6377b88a3f68a86757960b6a688ab"],["H:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","d13288db53a8a42358cdc47af3718dfa"],["H:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","c0bc6c9a0bafcd0f431c53f4f5254e4a"],["H:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","11da26718de11c497e0f0e455cb1c672"],["H:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","be9417b0952c6ccc25248f6f816f958d"],["H:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","02eedb306bc222ac6d094ec82b6d7649"],["H:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","c0d1e77807de20993e95b85331c87a41"],["H:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","346d4e76c7a3775e0043048f3c86d37c"],["H:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","6f747d85f54a27fa7a3be22430648cbc"],["H:/Blog/public/2019/08/26/Python工具库/index.html","cfcd7969bc011e8d59ccf8c30cc342ff"],["H:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","123cdc92d39140e4c77cea4990c308ba"],["H:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","cb17923c98aea3f08c9e1ee7cc3049bc"],["H:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","25f5fb09836f0161d89f7d03049275b8"],["H:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","4411b51a54ef9be56c4876561ed676a1"],["H:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","b748c12ec2f2bd50abd0b227fd96f8f6"],["H:/Blog/public/2019/09/03/CTF竞赛试题/index.html","241aec9282c61df938057ba37709d9c1"],["H:/Blog/public/2019/09/03/优秀文章整理/index.html","73c7ebd606bc3e2b8b0a54e7adbe35b9"],["H:/Blog/public/2019/09/03/优秀资源工具整理/index.html","46433e1a8aba4a9aa1d822d4bd3fab87"],["H:/Blog/public/2019/09/05/基础DOS命令/index.html","079496359e01f8b5d61d835707979a79"],["H:/Blog/public/2019/09/05/基础Linux命令/index.html","87b7ad11ef3feb4593a267f7129e11f4"],["H:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","2a7028f387ab8e6b30cfa9f3d8143ead"],["H:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","8ed9aed99aa18d5646ad407407b7fae1"],["H:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","b570bc00f2db6f5bae4f2a6f63278b18"],["H:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","f3807aa5a6cb14bc0535f68e11fa38df"],["H:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","7a7f6c481566422dbc909c8c5722dd0e"],["H:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","65b3fc296480d0a4912cc6deb9a1bcd8"],["H:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","af0c336a99ca32c6ff7e37de09f8c516"],["H:/Blog/public/2019/09/29/XSS平台的搭建/index.html","3289a4bef65266035e57594eaf0e07dc"],["H:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","3974836abd2972f6dbc374207de30a0a"],["H:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","752b87007e5f39dcaf6d44d088f55137"],["H:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","f1f019eb46dc3cd8a584d4fd96ec7d1b"],["H:/Blog/public/2019/10/11/Linux Notes/index.html","6572f2840480a30fd8e54ce097b6d0fb"],["H:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","8e72dd60fde44310355ba0f2b984bd21"],["H:/Blog/public/2019/10/11/Windows-Notes/index.html","0b7c25b13a330f31afc97ee1006b66d6"],["H:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","626145a90b13391eaed2d1d845810be2"],["H:/Blog/public/2019/10/11/我的漏洞库/index.html","9b633192a85a65c37351ddbafb9e8fda"],["H:/Blog/public/2019/10/12/CMS漏洞集合/index.html","53613d2842bbb7b6ed5e594c974a25ae"],["H:/Blog/public/2019/10/12/X-Ray白皮书/index.html","97bbb9fbe1ee6f3e3c2181115f607b7e"],["H:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","ff25368c60325d40a97162aaef4e2c6d"],["H:/Blog/public/2019/10/16/华为账户信息一览表/index.html","e47051e926e95ce8f841c42ab0bfefdf"],["H:/Blog/public/2019/10/18/漏洞案例大全/index.html","af1f48131434053585fe88c95c5d74b1"],["H:/Blog/public/2019/10/24/等保服务内容及报价/index.html","dc8a02603b70fbdaa9e433fa4eff7404"],["H:/Blog/public/2019/10/24/网络安全法/index.html","f0d136c097de32fd4912f1eeb06c3368"],["H:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","6778a071aa4537791be4811e8ad3c334"],["H:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","88aa5e2cb5ad2b1bd87f6e07f2228560"],["H:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","e9ca032e5af26aaff8131f40fa33a64b"],["H:/Blog/public/2019/10/31/手起刀落Notepad/index.html","6ec09b56aeefc6cf4b8b0cd02cd2c557"],["H:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","304fc265b01f4cb3c43b9bfc84bf6df2"],["H:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","17fc2bc49559c64cea25b5d5bd8f2098"],["H:/Blog/public/2019/11/13/黑客心理学/index.html","93a3fbe7f4d68cbf0e109d2021ab9ba9"],["H:/Blog/public/2019/11/21/记一次主机中挖矿病毒/index.html","25bde959454945dd7bf01257397f23ce"],["H:/Blog/public/2019/11/26/实战脱壳奇虎360/index.html","ffb5382aac93def87f1b48963a176dab"],["H:/Blog/public/2019/11/27/nessus-pro破解安装及插件离线跟新/index.html","af6dedcd523990066a42e6655dd3a160"],["H:/Blog/public/2019/12/02/使用腾讯SCF-onedrive搭建5T个人网盘/index.html","7137574292aed7779302fc64a29174f7"],["H:/Blog/public/2019/12/03/Kali-Linux-2019-4解决中文乱码问题/index.html","1a8235b01400bfcf19e4bd43a8db79dc"],["H:/Blog/public/2019/12/19/waf的识别与绕过（不断补充）/index.html","17bc7def785690f54ba9896771073e95"],["H:/Blog/public/2019/12/23/JS文件信息收集工具-LinkFinder/index.html","18fb0062c89239ce82aaeda2c64df48d"],["H:/Blog/public/2020/01/03/内网安全检查-渗透总结/index.html","6b12de6edcbb8b5cf8bf958ef92af260"],["H:/Blog/public/2020/01/03/黑客常用端口利用总结/index.html","2a481dcb4655547572cce5fd53f39628"],["H:/Blog/public/2020/01/10/几款子域名挖掘工具的使用/index.html","80d389c39100dba542b83601730623de"],["H:/Blog/public/2020/01/16/Redis未授权访问漏洞总结/index.html","e06124a36cdf04d9d42b077c9a0194a6"],["H:/Blog/public/2020/01/30/2019总结/index.html","5c2f7d930798e71716fe14c7da2008b1"],["H:/Blog/public/2020/02/06/python学习-python基础知识/index.html","85f3e172eb9b5e9339cfcbe2ce1291e4"],["H:/Blog/public/2020/02/08/sqlmap命令集合/index.html","2c8668e639f2c039bdeb1c3b5b70e1bb"],["H:/Blog/public/2020/02/10/AppScan-Standard-9-0-3-14安装破解/index.html","f4822a4e435ea7cbb164f2cb2f2abcbc"],["H:/Blog/public/2020/02/14/分析菜刀及隐藏后门/index.html","cdd95924933cb52abca0a7230a30c4bc"],["H:/Blog/public/2020/02/16/kali中安装openvas扫描器/index.html","f418e661fe98761e83f2ca0f7d1f9f43"],["H:/Blog/public/about/index.html","cdfafc8984cb723d7d71a8f1f89dcc4e"],["H:/Blog/public/archives/2019/07/index.html","0363f25fe0c07170b844d037f5f60216"],["H:/Blog/public/archives/2019/08/index.html","142a129cea948c213489b51aaa0ee971"],["H:/Blog/public/archives/2019/08/page/2/index.html","98dd55ba53e94b7e14448e78426a2708"],["H:/Blog/public/archives/2019/08/page/3/index.html","8efff4e24131b5bb0638756a9f782e03"],["H:/Blog/public/archives/2019/09/index.html","42581ca900f7f52113c89534f929dfac"],["H:/Blog/public/archives/2019/09/page/2/index.html","4ec3662e8453e4675a6608b1c4fd7b1e"],["H:/Blog/public/archives/2019/10/index.html","fe880426d62780735cf691661db06b69"],["H:/Blog/public/archives/2019/10/page/2/index.html","b42a40d7044a6731389dee044a7b2e6e"],["H:/Blog/public/archives/2019/11/index.html","8f9315e4699ef552e8b5db62fce16941"],["H:/Blog/public/archives/2019/12/index.html","d1437ea9959e1bb6ed5961001441f9de"],["H:/Blog/public/archives/2019/index.html","d79003eee2cdb243241e0f4b6323b3f2"],["H:/Blog/public/archives/2019/page/2/index.html","9d9fc62a4d0b13cbd30de01cbfb7e68a"],["H:/Blog/public/archives/2019/page/3/index.html","a1814d156b314f88c64f515c77e4c243"],["H:/Blog/public/archives/2019/page/4/index.html","621c2ffbea088641296b82b2b0c0941b"],["H:/Blog/public/archives/2019/page/5/index.html","2a11ff0e3d88f53fc65645b8cfffdac0"],["H:/Blog/public/archives/2019/page/6/index.html","973bf9d9f3c13b8876ec501046fe8a01"],["H:/Blog/public/archives/2019/page/7/index.html","01f1281282d349d1c5e916a3f44f60ec"],["H:/Blog/public/archives/2020/01/index.html","879942b3680072d2541a546d4f77e0d9"],["H:/Blog/public/archives/2020/02/index.html","905ce4091106a33cbd822a66425115e9"],["H:/Blog/public/archives/2020/index.html","62e2b8156f46598ae0a83cb1b7a3f713"],["H:/Blog/public/archives/index.html","d9173970eea43e23d508d898474fa05b"],["H:/Blog/public/archives/page/2/index.html","f370d57c7d845ebbcf58d8a8885c2982"],["H:/Blog/public/archives/page/3/index.html","f8c06c69938e7b32e086d0f057d39fca"],["H:/Blog/public/archives/page/4/index.html","79bb65cee9681e3da8ccb36069c325d8"],["H:/Blog/public/archives/page/5/index.html","74a20adf9e704a2861a8fdaf75be435e"],["H:/Blog/public/archives/page/6/index.html","44dc78e13a00035d4ac4c9ef739ecbfc"],["H:/Blog/public/archives/page/7/index.html","a26af8440d71c90c742c2774cc90d8da"],["H:/Blog/public/archives/page/8/index.html","93190fb09bc2c9ac1d90758e25a9ae4b"],["H:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["H:/Blog/public/books/index.html","b97871df83796c58dc92c35c9d21c79f"],["H:/Blog/public/categories/CTF相关/index.html","9aef85fc0708a08a0fddeab376c6445c"],["H:/Blog/public/categories/Linux/index.html","cc66ae77ba0a60fc81ea90592f78c81d"],["H:/Blog/public/categories/index.html","2b0ac82fd2687a49dd00e35ba0016724"],["H:/Blog/public/categories/web安全/index.html","3da07e0f9af52af51d551db2ca45282b"],["H:/Blog/public/categories/web安全/安全资讯/index.html","c81c7f7aec847ef9e0351a6e2e04b798"],["H:/Blog/public/categories/web安全/靶场练习/index.html","7782f1f01c1bfe898032564369407b00"],["H:/Blog/public/categories/主机安全/Linux/index.html","35739861fb76860864af9d27ec23a95e"],["H:/Blog/public/categories/主机安全/index.html","a7add7a43b02b0f6de0eda3efeee5ce0"],["H:/Blog/public/categories/其他教程/index.html","8a4c69e253f88a5917544975b0473e60"],["H:/Blog/public/categories/其他文章/hexo博客/index.html","24d6ebd2ff563fe2c4229c34997cf8b8"],["H:/Blog/public/categories/其他文章/index.html","f1dc693b986c693783ee5cf3565df473"],["H:/Blog/public/categories/其他文章/page/2/index.html","f5ef45b042069397f9e7d637996dc5c1"],["H:/Blog/public/categories/其他文章/记录生活/index.html","f797122359cdd652fb54f40673aeb34f"],["H:/Blog/public/categories/内网安全/index.html","4ac5e8bf5a616973275372f642e1449e"],["H:/Blog/public/categories/安全工具/index.html","03c13a707b7215daf4d33ea9243566a1"],["H:/Blog/public/categories/安全服务/index.html","43db42c0d1f6e6606317e88d9a86ebdc"],["H:/Blog/public/categories/安全服务/渗透测试/index.html","16a37331829b41d10dde52340ffe1239"],["H:/Blog/public/categories/安全服务/等级保护/index.html","9bd3e446537b7f6677d79d721edc8879"],["H:/Blog/public/categories/渗透测试/index.html","4555f52c1be9f4e587819da139c5d78f"],["H:/Blog/public/categories/渗透测试/漏洞复现/index.html","6a31a2683926a630335e7b79567fbbed"],["H:/Blog/public/categories/漏洞挖掘/index.html","4ca8828184bf6866d042d5d0a7ed45a2"],["H:/Blog/public/categories/病毒分析/index.html","810a7cabb0dae03b2531c60e1d073f5a"],["H:/Blog/public/categories/社会工程/index.html","90c73612542501b59c17830cb568ba36"],["H:/Blog/public/categories/神兵利器/index.html","543021fef5572acf8bdb8d45eeac613f"],["H:/Blog/public/categories/神兵利器/page/2/index.html","b4a31858a7a620b04da9aac1c8d3a120"],["H:/Blog/public/categories/神兵利器/page/3/index.html","8c6f9489c936bf9acf3051d2ccb8114f"],["H:/Blog/public/categories/逆向分析/index.html","c6762ec69833cf45bb4fcc5c496b906d"],["H:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["H:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/Blog/public/gallery/index.html","6cee02de6848bfee7b4518de661da352"],["H:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["H:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["H:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["H:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["H:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["H:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["H:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["H:/Blog/public/index.html","b97c12fea6834812661ef59c8c57d75c"],["H:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["H:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["H:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["H:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["H:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["H:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["H:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["H:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["H:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["H:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["H:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["H:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["H:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["H:/Blog/public/link/index.html","16afa7725368e1e55cba17e3f59e6f40"],["H:/Blog/public/movies/index.html","37c15ce851d47687f93edae9e2395dce"],["H:/Blog/public/page/2/index.html","d13f184b46d2d6795bf13e8e8d08dd16"],["H:/Blog/public/page/3/index.html","db5df63f72964bd1298bc5f505b35e59"],["H:/Blog/public/page/4/index.html","3bb8793d91bb82e86b0cbf42dad355f1"],["H:/Blog/public/page/5/index.html","6e23efb5ec3d3c0571a18812721a214f"],["H:/Blog/public/page/6/index.html","21ddf38f63ca1d6f2f7e2d1dbdab0dd7"],["H:/Blog/public/page/7/index.html","8efd62e9af3c11b9a6ca43105c392bb1"],["H:/Blog/public/page/8/index.html","755f0aae46b61c299c000231788335cd"],["H:/Blog/public/pan/index.html","9745e5555c7a1faffebcbf697f3bc1fd"],["H:/Blog/public/tags/APPscan/index.html","9cd2f9e4373c84bc7303a95ae3d21e3f"],["H:/Blog/public/tags/CTF/index.html","7d8a858299c1f577c6474b235a8ddc71"],["H:/Blog/public/tags/CVE/index.html","9bddf7f0c15311eb4d7e2b82b5b6bdb9"],["H:/Blog/public/tags/GitHub信息泄露/index.html","c3e1fc9b55da0958cd76e57d20046f53"],["H:/Blog/public/tags/HTTP状态码/index.html","d9039ffe0f84a174c4a8512b90da8fc7"],["H:/Blog/public/tags/LADP/index.html","b0ec6c57c166de62174e228d92d45d79"],["H:/Blog/public/tags/LinkFinder/index.html","0e064e075120a155f37f5dc8d686ff50"],["H:/Blog/public/tags/Linux/index.html","eb3f04c83b96269d9ec81c7d5a6cc494"],["H:/Blog/public/tags/Linux命令/index.html","d9c2900ed215f72f48880ce8425209fc"],["H:/Blog/public/tags/Linux笔记/index.html","4fb439ebb092539b41591a15731f860b"],["H:/Blog/public/tags/MobSF/index.html","e97833a70c6e4e1aefef698f88753ddd"],["H:/Blog/public/tags/PHPstudy后门/index.html","991f9b23f7bc0518aeef604fa282099d"],["H:/Blog/public/tags/POC/index.html","785c05c7040303f55b4f2081e6ae23bc"],["H:/Blog/public/tags/SCF/index.html","ca7cc51369696659853c4ee7b7216bd9"],["H:/Blog/public/tags/Windows/index.html","7c4116c1d2835edb4eefc2083a9b1e05"],["H:/Blog/public/tags/Windows命令/index.html","6cac7f7a30232eaa0574916cb18b37b3"],["H:/Blog/public/tags/X-RAY/index.html","1b93e404e909c2f9f478b2ba399aa06b"],["H:/Blog/public/tags/XSS平台/index.html","038182ab4ee2d8d1286b8fb72b2d191d"],["H:/Blog/public/tags/burpsuite/index.html","823e6719909888c742e775027ff7290e"],["H:/Blog/public/tags/cewl/index.html","af7b8a56f38909cb90bc7843649c2f34"],["H:/Blog/public/tags/chopper/index.html","eea1da3ae43a7f7d18821feabfe6fc86"],["H:/Blog/public/tags/hackthebox/index.html","292248b0b8e944c898b66f769821055e"],["H:/Blog/public/tags/hexo/index.html","5f5fccf0b2afc81c69976550bb3c40f6"],["H:/Blog/public/tags/index.html","ec9759ed996647e9472a6265c472fbbc"],["H:/Blog/public/tags/kali-Linux/index.html","352d8d5eddf3abdc79c498b182709826"],["H:/Blog/public/tags/kali/index.html","f114eeca1d85994af12cc2b822d2cac4"],["H:/Blog/public/tags/mysql/index.html","7362c79cf650bad8aac7272e361b2731"],["H:/Blog/public/tags/nessus/index.html","0e3216eeec9063a2326df5116d94b4f7"],["H:/Blog/public/tags/onedrive/index.html","297c94109d7a9983952bd13aafdacbf1"],["H:/Blog/public/tags/oneindex/index.html","0156848cd57938eb0350bda2c7aff9ed"],["H:/Blog/public/tags/python爬虫/index.html","aef5fec21310da8dc26b8f9b56afb44d"],["H:/Blog/public/tags/redis/index.html","bff7e3575e0937c52d0a36959fbead32"],["H:/Blog/public/tags/tg机器人/index.html","6e67b0e62f5d23934afee39d772611ef"],["H:/Blog/public/tags/tor浏览器/index.html","ed9afe9382eef0e466a5578cf73a975f"],["H:/Blog/public/tags/waf/index.html","382c320e6196f810b46e3a0e1288ef62"],["H:/Blog/public/tags/xray/index.html","2d91084d0be5762a1ba99d3a91fcbd95"],["H:/Blog/public/tags/个人网盘/index.html","cc8258e4b8b1774d40261b94f992f595"],["H:/Blog/public/tags/主题功能/index.html","65f11dea965f6add1d54a10188b98064"],["H:/Blog/public/tags/优秀文章/index.html","7e07aa4e104cc2c0d92470adb9672298"],["H:/Blog/public/tags/内网/index.html","e8e911edd83e93fa7cbf9dc6f9416ad5"],["H:/Blog/public/tags/博客/index.html","3957a7f77fc7eb83f1f7782c838cc204"],["H:/Blog/public/tags/命令/index.html","128ec691614eae1699e69ef5910242e5"],["H:/Blog/public/tags/图床/index.html","058e9d0b3708a6ba5c840184ff83cc08"],["H:/Blog/public/tags/夺旗/index.html","dd67ab52f7f004d82886b07a111eb20a"],["H:/Blog/public/tags/子域名/index.html","3d83b9ad9791371c144803f1f50d01ce"],["H:/Blog/public/tags/安全工具/index.html","f50273e6d125515ceb20722dce08ffe9"],["H:/Blog/public/tags/思维导图/index.html","da70659c97fa4b7d53bde6819c66a5cf"],["H:/Blog/public/tags/总结/index.html","6794cfd6e174ddb672829f6b347ca379"],["H:/Blog/public/tags/数据库/index.html","8954dc5ced1b1d4a8343f3a499743bfd"],["H:/Blog/public/tags/文章模板/index.html","d4a6a3ce221fd9e7db71df3e3395e057"],["H:/Blog/public/tags/方法论/index.html","a6df3cda7be4a594c5113ccecb3a7ba6"],["H:/Blog/public/tags/未授权/index.html","8c09bcc2db6585e98b1c38624a8e196d"],["H:/Blog/public/tags/法律/index.html","2c5c011f708dbbfcd05ddf7229b947d3"],["H:/Blog/public/tags/渗透测试/index.html","9353198ccf4bddda82149e48b90fabd7"],["H:/Blog/public/tags/渗透测试方法论/index.html","3ebdebfd1911c54a5c69bcd2584aa0c6"],["H:/Blog/public/tags/漏洞/index.html","dd45473280fad66ae702d0adabd8122b"],["H:/Blog/public/tags/漏洞库/index.html","ae7fb1b36c62b8d126cc97bf429b3b49"],["H:/Blog/public/tags/漏洞案例/index.html","9b3daf1aacdc330baf21932d1866584b"],["H:/Blog/public/tags/火狐插件/index.html","951abb22bebea13c00f3d9634403db17"],["H:/Blog/public/tags/生活随笔/index.html","7140113b45b79d1e09619bba4329b269"],["H:/Blog/public/tags/病毒/index.html","b6e1392fe9d42df99a92d4faaf612d22"],["H:/Blog/public/tags/社工/index.html","ba00081e31173dfaeab2c810a26a8814"],["H:/Blog/public/tags/科学上网/index.html","98552323c4ed37f247bb4bfe8fc9773e"],["H:/Blog/public/tags/移动安全/index.html","69c369335df910c822deaabbc7353905"],["H:/Blog/public/tags/等级保护/index.html","5ed753571a7bd4461ca88e1a7ede192d"],["H:/Blog/public/tags/翻译/index.html","ac244a42cd6e2236eef9708d618c1d4a"],["H:/Blog/public/tags/翻译文章/index.html","98fc492ffd80b387c6f714f3d44c333a"],["H:/Blog/public/tags/脱壳/index.html","3298b7856f63fbf614e2b6270a64d32a"],["H:/Blog/public/tags/菜刀/index.html","68ca81c3596999d8b4882592380327b7"],["H:/Blog/public/tags/解决问题/index.html","dfdeff95c9a5ef1c10fd65680e195f5c"],["H:/Blog/public/tags/豆瓣书架/index.html","9e1892b44a5ffd4a350b31d7134b7638"],["H:/Blog/public/tags/转载/index.html","4eacc033fc3e0572e71b16212fee2477"],["H:/Blog/public/tags/面试/index.html","dcebb0e609bb699cb4b042ad1fc678f7"],["H:/Blog/public/tags/靶场/index.html","5514c81ffad984dc5c8b82490bde0896"],["H:/Blog/public/archives/index.html","600a39aa7c05fd704399f668ae7a7a39"],["H:/Blog/public/留言板/index.html","efefbc2c365ed51b822fc303d517c1c9"]];
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







