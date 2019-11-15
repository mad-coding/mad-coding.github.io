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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","018e418bc0c70c3cf9010d7946fa2c00"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","fb0316760e6d7d6916523e63cfa3f54c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","43e5846aecc42d216fd5a1e27c20f121"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","e91727ed893c3091ad194a55c222bc52"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","5966b27becd3bb09585b8161872f3a42"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","3a28ab1bcbfae53dcb4a981424ee999a"],["G:/Blog/public/2019/08/16/github-hexo-域名搭建一个自己的网站/index.html","55a55916d39c18c73f8d69f07cc5e5c8"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","9d57b3ec595c24b3079b5ba8853ef742"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","7f434ea7d063ea7653dff589eee2da70"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","d886f569e0f1da36aa3798691ef6eec3"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","d163e3f99b6df9e02b5f859561bccdf8"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","06fc8902e7ec4ec42fa5d43d9c8e57bc"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","2d9b0f95f1588662e0b81ce5a1912bf7"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","8473ec013d5c4ce9757b3daf44d3e850"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","2563d272a8ec2d11c4f1bb2d577b19ab"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","8871ae65431159f933f137fd9deef50d"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","8bee13a19c42480fbfb1bf8cacde48f2"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","acefe7cf949ddcbcd1329bef57893837"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","065d3560f2fb3ee69e1d3c3fcd323319"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","8541fe23d13e136c971147dfb9d6ac0c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","4c39bcca569df1923caf86e9bb98ee18"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","6986d4605e7775e645fee37b19df92f0"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","af360327f5578ad9512f7ed8d7ecb3cf"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","d6046e956c5b22d1255bb1f135c2f0a0"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","46d5e633b894030981b5b929418f1e4d"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","d0dec0534de50443d9d29229648626f8"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","14dc312c0df21cc4b234d0286fe64231"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","a6c221f4319ed322f3a32a36f24c5768"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","1d35b6a9b886ddbe964fa04c91eeef03"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","079ba1a7198569be1a7101054d9302bf"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","f000a7977cfc3e27825d1ac41f540965"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","98f0c8d0ced55fe97db8b2230cb42f87"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","ba13a87dca1000eba367f85a1ac76fb5"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","3da3a5af198c9f3bbb5320ff27246c6b"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","541888694dcf36af92874ff5a691f890"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","965b6e0b3086176488db159e69e70587"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","72abcfde79afaf33a726f158bf983630"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","d82e032b9028fcebdfde85e6b755d7fd"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","be809a471f4bf328942748cc0ef9b8bc"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","2c9de945c1fdd6b549ee334b68f69134"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","9abbf3d803294080596afab105c26a56"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","d58a971a10133feff1e26990d8741c84"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","797b01e026c3468c98aafd6ffaf31c78"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","9f7f82f2dfac173c44b26353cbae088f"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","4858ac26f9d4c824b9c0c43e9c2504f1"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","a881210a5b3d06a579d7fd0c80614a90"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","13f1e31eda366a3900c2a75bfd65c937"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","ae0f06fb74327eaab64e46f2a4aeaff9"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","a8817683d9e016873944884cf0c484df"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","1e584815973a5a671e80c035deb5063f"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","95c06e5a54f90c8959a884939aabcd1f"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","317ebcf7c375128372c2f2f73779ba12"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","106a61da4ddf98d3c1f02b38d912f754"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","fe9d5a28367db82f2c9492c7702dd1cd"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","4b842a3b7b4c0febb80890127fa867d7"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","dc854c41bc3ad063fc815db8e42ddb13"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","37085c913ce083d9084ad3d5a12a0d75"],["G:/Blog/public/2019/11/01/test页面/index.html","1c262d2a1c7090f58c5bbeb9c943a3c8"],["G:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","aaeffe30e3200d0338dd4fc5d7b31530"],["G:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","67a44caff87fa20639e9bac3f9296bee"],["G:/Blog/public/2019/11/13/黑客心理学/index.html","0ccb9f1fa26ec1d596c89bc850652182"],["G:/Blog/public/about/index.html","303da22c2d3e1de5e4a3ae712941b0ab"],["G:/Blog/public/archives/2019/07/index.html","6f781f90210a8989e94428dc6be85a0e"],["G:/Blog/public/archives/2019/08/index.html","be8aa41c22e6696470967835d8a9ac02"],["G:/Blog/public/archives/2019/08/page/2/index.html","8d687e8d756bcd1265d3cde16d896b0c"],["G:/Blog/public/archives/2019/08/page/3/index.html","9f4d9909c343ab31de3479dffcec246a"],["G:/Blog/public/archives/2019/09/index.html","bcb93b670f5f9f359b3c4571de506c6e"],["G:/Blog/public/archives/2019/09/page/2/index.html","4889a7b61bc2a79593e820acb231ae0d"],["G:/Blog/public/archives/2019/10/index.html","9dfbdb297e4f7c7e7d92ac7c87bce7d2"],["G:/Blog/public/archives/2019/10/page/2/index.html","adce408c2caf869229ef6a609f51a972"],["G:/Blog/public/archives/2019/11/index.html","230dfacd068050c326d4ed44229142ca"],["G:/Blog/public/archives/2019/index.html","1184ed1f2e56398d0aebb34df9ebd799"],["G:/Blog/public/archives/2019/page/2/index.html","442577367262e73e77f521aecfd23c61"],["G:/Blog/public/archives/2019/page/3/index.html","505bcf0d873f532c04a76d8c3f66ac29"],["G:/Blog/public/archives/2019/page/4/index.html","527c6e109e6be21b241c4dc061c890d2"],["G:/Blog/public/archives/2019/page/5/index.html","5726f7361cb131df6c37a58c30b98fba"],["G:/Blog/public/archives/2019/page/6/index.html","ceaf536d242bdc005c7dab93a8314db3"],["G:/Blog/public/archives/2019/page/7/index.html","a07c8f9f7ce04f6d5b22829c033ffbef"],["G:/Blog/public/archives/index.html","fd91f89102b28f0d1da335ac57b2af4c"],["G:/Blog/public/archives/page/2/index.html","b2f2f371b40a443978ce5e695ee6b6a5"],["G:/Blog/public/archives/page/3/index.html","4917ed642929cf4912b91dac405bfee5"],["G:/Blog/public/archives/page/4/index.html","3b18d2c3471da007972361899d2580ef"],["G:/Blog/public/archives/page/5/index.html","064dee053890f2d51bf4eb06e9e2edef"],["G:/Blog/public/archives/page/6/index.html","4595d14fea1c226b3089923de76b0887"],["G:/Blog/public/archives/page/7/index.html","90333900d16bfc49cf641003d51cf0a0"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/CTF相关/index.html","26d1a5e56cb13a473cf9143e6bcac3d5"],["G:/Blog/public/categories/Linux/index.html","dcceb6e8ec988f8e50bf68e20f6fc4fd"],["G:/Blog/public/categories/Windows/index.html","9f746bab39198caf1121fb0ab6709ca6"],["G:/Blog/public/categories/hexo/index.html","8a547d0164754e211bd2c420aeeeb07f"],["G:/Blog/public/categories/index.html","08dbcc6372038a91fb2dd236efef0bf4"],["G:/Blog/public/categories/web安全/index.html","6b274bb48fe2c7c9d6980b5ba85e99cf"],["G:/Blog/public/categories/web安全/安全资讯/index.html","19e6e0ba93c02a7b7a8dbd731d581d68"],["G:/Blog/public/categories/web安全/靶场练习/index.html","3939462b8d2c6869caffa74b8518b97d"],["G:/Blog/public/categories/主机安全/Linux/index.html","a89cec22e682e05bb11d906240842051"],["G:/Blog/public/categories/主机安全/index.html","9a9859a6b4fb5d3cf8a77e6576d51293"],["G:/Blog/public/categories/其他教程/index.html","7b2bb30d34a87dcd9e0d9c3dea94e6b2"],["G:/Blog/public/categories/其他文章/index.html","916584bb2f24247c4be6d82fd8bb8eff"],["G:/Blog/public/categories/好玩/index.html","95a0299f2f54aece5d8cf8035217d8b3"],["G:/Blog/public/categories/安全工具/index.html","774c19ce59a7f22e6c0525d843af4d27"],["G:/Blog/public/categories/安全工具/page/2/index.html","ce6fde76729dbd64c3852a4d6d640d43"],["G:/Blog/public/categories/安全工具/page/3/index.html","2c8679662e2db48ecd4cdca4defe0067"],["G:/Blog/public/categories/安全服务/index.html","6c3c41b39a14f762d863e990ef76b074"],["G:/Blog/public/categories/安全服务/渗透测试/index.html","186db88e960fd022b73a4059ecbaf324"],["G:/Blog/public/categories/安全服务/等级保护/index.html","e024795f2e37c8e7a36ca2f8ef9cc2af"],["G:/Blog/public/categories/安全资讯/index.html","5190115699c2c8650e474e82c1bb057e"],["G:/Blog/public/categories/思维导图/index.html","3268bd11641dbc46da1273bf7c4577b2"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","8333b85e12346f076e78972712f80260"],["G:/Blog/public/categories/教程/index.html","1bf2add7642f10f233b24276e8cde614"],["G:/Blog/public/categories/教程/好玩/index.html","6273daa8f05a84f15fb68d3d4e199c6f"],["G:/Blog/public/categories/数据库/index.html","6860dacb0c241280ddfe55409d6ea5f5"],["G:/Blog/public/categories/数据库/mysql/index.html","aa1fec0af3047507e76429c2136ee13e"],["G:/Blog/public/categories/渗透测试/index.html","d41666ad3a6059bdccf409dda172e4d0"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","f1233bc96e9a19bcee7b3c107050a3bf"],["G:/Blog/public/categories/渗透测试/靶场/index.html","e3261cab937dcd4885019c5e0b90b7cd"],["G:/Blog/public/categories/漏洞挖掘/index.html","8c5f484ee4e5496dc985db955a4240ae"],["G:/Blog/public/categories/社会工程/index.html","38bc466ccd4cf2150e4de495d9adb1e2"],["G:/Blog/public/categories/社工工程/index.html","393940df64683f6bc4576c503eed5d29"],["G:/Blog/public/categories/社工工程学/index.html","833d7fab528458c1e9771cdde068e139"],["G:/Blog/public/categories/神兵利器/index.html","df7f0c4b0c9638000aad9fe80c54db36"],["G:/Blog/public/categories/神兵利器/page/2/index.html","500ea003ab8474b6510765570264ed47"],["G:/Blog/public/categories/等级保护/index.html","c819cb625f8ada7af1af75e64294842e"],["G:/Blog/public/categories/翻译文章/index.html","09c2fd996519f2ec82fd89e3004b300c"],["G:/Blog/public/categories/记录生活/index.html","01d105a5c50e1db545f9093f72148e2e"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","9d912ec43ac89ca5ad756a58e95b8b7d"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","7f074700234346d249a50cad797b900a"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","6e291c6d22b0a420558e19c7bea6980d"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","13d74cf3d542dfd2a5dea8c4311f700e"],["G:/Blog/public/page/3/index.html","88f0a0f0ecefdc349d62fadbebfec44c"],["G:/Blog/public/page/4/index.html","4a9c28041cdad78770528dd344f10ae3"],["G:/Blog/public/page/5/index.html","882fbb6418b37317852e0b9e878b11ed"],["G:/Blog/public/page/6/index.html","1375cc49e51e7e81d4bc064b9f06ad8e"],["G:/Blog/public/page/7/index.html","f4a42e041b4b8dfa1455616b1fef8211"],["G:/Blog/public/pan/index.html","53b65005f7d5f19691ebd8add37d3ba0"],["G:/Blog/public/tags/APPscan/index.html","cdc67f5c068e8c65004dfd7e5f372f0e"],["G:/Blog/public/tags/CTF/index.html","5e91a88abc0df5dde16a0fc75b2f9cdb"],["G:/Blog/public/tags/CVE/index.html","2ab9f2986953cdf80aecf294c05ab641"],["G:/Blog/public/tags/DOS命令/index.html","f2fbdfeb0263d7ea2a7787f43d758fb0"],["G:/Blog/public/tags/GitHub信息泄露/index.html","81bae587a377b72465b23fb5d01eef27"],["G:/Blog/public/tags/HTTP状态码/index.html","1f4d09192bc7e92f18c872f70940e51c"],["G:/Blog/public/tags/LADP/index.html","ce259513c0f43d53477e51bd465f0fd5"],["G:/Blog/public/tags/Linux/index.html","07146e1ffb5faad97e1b76660c9968d8"],["G:/Blog/public/tags/Linux命令/index.html","d56002a01aeb5748da2b3fd9517abdaa"],["G:/Blog/public/tags/Linux笔记/index.html","6c4d8729cc8b6c740bc72fa01fd17091"],["G:/Blog/public/tags/MobSF/index.html","46a2e017184f7755853462445402921c"],["G:/Blog/public/tags/PHPstudy后门/index.html","7d68b9496fab40a67443297a9e139945"],["G:/Blog/public/tags/POC/index.html","f99a858acff2b806df1f9e318b641ac4"],["G:/Blog/public/tags/VPN/index.html","1af2b05168757cc8e1945f04f2aec884"],["G:/Blog/public/tags/Windows/index.html","ad31f1f2adcccbf6e6d2a4997d563c8a"],["G:/Blog/public/tags/Windows命令/index.html","0ffe8a3b9fedee2f9b41df1b2edbb837"],["G:/Blog/public/tags/X-RAY/index.html","2982aa88f779ea69c3a799c7e7e6ddb1"],["G:/Blog/public/tags/XSS平台/index.html","b4acf6ca5039a2d65a96d29d88b2a49c"],["G:/Blog/public/tags/burpsuite/index.html","a04aaf1083365f4c773f1da93f27fc9a"],["G:/Blog/public/tags/cewl/index.html","1aac4106686e3c1885772a0d56666268"],["G:/Blog/public/tags/github/index.html","d516b2c8ed1a4168c2d6523a1594c74a"],["G:/Blog/public/tags/hackthebox/index.html","dbbefbb3815fd75df4518501096dd428"],["G:/Blog/public/tags/hexo/index.html","3e1f7302d65c1b4b77421176bda14ff4"],["G:/Blog/public/tags/hexo博客/index.html","f71c1466f283fd6e98f5421ad4de35fd"],["G:/Blog/public/tags/index.html","0eb398ca1af5ce6101431a044faccc32"],["G:/Blog/public/tags/kali-Linux/index.html","c1289e30d369869cc4ea4a3b98f20b0d"],["G:/Blog/public/tags/mysql/index.html","4250b17471e76781fad9cfa321d777c9"],["G:/Blog/public/tags/nessus/index.html","b3af31e3ecc73c0af851d7d31031923e"],["G:/Blog/public/tags/onedrive/index.html","febf8a58054c1001a5f48051edb0ae1e"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","875eb0d6519bc2c6ce44ad8d11d18ee8"],["G:/Blog/public/tags/python/index.html","953c14304f7daa4648d11c3309f89414"],["G:/Blog/public/tags/python爬虫/index.html","8704c21faf2bf59905d69ddc5d435dfc"],["G:/Blog/public/tags/telegram/index.html","18ef2b853a860117bd1a67aadc3c03ad"],["G:/Blog/public/tags/tg机器人/index.html","c746aa7a2ef076ee909eed36a0a6e2b7"],["G:/Blog/public/tags/tor浏览器/index.html","3602d06b0fd738fc5db3b0ca962ef440"],["G:/Blog/public/tags/xray/index.html","155a2592de438ac1eb4e7c0d4e028b75"],["G:/Blog/public/tags/个人网盘/index.html","b5581692f8abea39cfe1ee5b0aa99454"],["G:/Blog/public/tags/主题功能/index.html","0c669f6f94663a72c8aa806e22567b0b"],["G:/Blog/public/tags/优秀文章/index.html","04654ed5e342ad875148cac4ecb83a7c"],["G:/Blog/public/tags/信息泄露/index.html","e1ee3ff4a6c4aff357f3a2195f7c1449"],["G:/Blog/public/tags/其他文章/index.html","e3568177b7e14a070d8ad739f734c56c"],["G:/Blog/public/tags/博客/index.html","30ea6ffaa4438f49b5071fe5ad80685c"],["G:/Blog/public/tags/命令/index.html","840899039e5009d25d75e25d520beb4f"],["G:/Blog/public/tags/图床/index.html","6b883e005d71ab20cca0b475a261a22e"],["G:/Blog/public/tags/基础教程/index.html","ef2e31b91ad44baa5ab893a4188fe19c"],["G:/Blog/public/tags/夺旗/index.html","58db9d4c87dd6d2d0383194dddbfb520"],["G:/Blog/public/tags/安全工具/index.html","b07310377af86ef86eb80f2d561db8b5"],["G:/Blog/public/tags/工作/index.html","6bbb4a67e89a023745ee4ba34f0d8b22"],["G:/Blog/public/tags/应用程序测试/index.html","ac5b2ad8c01f3676164c6c197bd32296"],["G:/Blog/public/tags/思维导图/index.html","276ffaa271edc8ced801f7dfefa7b7af"],["G:/Blog/public/tags/数据库/index.html","4913f20988c74fa464a2cbdc4f8d878f"],["G:/Blog/public/tags/文章模板/index.html","51744775192e17182a3ca542b204d02a"],["G:/Blog/public/tags/方法论/index.html","1776718adcb2a733825a481b353c1710"],["G:/Blog/public/tags/机器人/index.html","eb225b1ffe09dff6726731259adeed1b"],["G:/Blog/public/tags/法律/index.html","90dbb13eac90a7c3ec6920a0bc26cf5a"],["G:/Blog/public/tags/渗透测试/index.html","226d4c270ab11a41275dcf02a26a2e87"],["G:/Blog/public/tags/渗透测试方法论/index.html","9b09a70632c50acf68ca302de2e70994"],["G:/Blog/public/tags/渗透笔记/index.html","54e1b19849f97a77ba74adc5c325ba1a"],["G:/Blog/public/tags/漏洞/index.html","446d7c8f82621f6a623e293d5da7d6df"],["G:/Blog/public/tags/漏洞库/index.html","7570d65e6fbe33bb409fb111ab697343"],["G:/Blog/public/tags/漏洞案例/index.html","113a240098832c08cfa5ecc976504e89"],["G:/Blog/public/tags/火狐插件/index.html","933ea16dbd139d4270566a4d0d5ff5e8"],["G:/Blog/public/tags/爬虫/index.html","46e53008dfaebb7772603b9cb617cfe0"],["G:/Blog/public/tags/生活/index.html","fae4f8e327be9187fbf5550f7244c2c0"],["G:/Blog/public/tags/生活随笔/index.html","864cf38ea31e052911e49c941caff11b"],["G:/Blog/public/tags/社工/index.html","d161a2202eb0d4d3fd927012b9bd5bfe"],["G:/Blog/public/tags/科学上网/index.html","c6095c4dc7b1b95bdf308e1cfc3ef292"],["G:/Blog/public/tags/移动安全/index.html","b4ee9e6f2b4d3b19707d84697fc4caa5"],["G:/Blog/public/tags/等级保护/index.html","7a8986d9c3a297934bca003619dce727"],["G:/Blog/public/tags/缓冲区溢出/index.html","b3778400e91ae5d8e5aa35c2ccb7459b"],["G:/Blog/public/tags/翻译/index.html","917fc2c087b9287a71ab6827e0fb920e"],["G:/Blog/public/tags/翻译文章/index.html","2e0ba1b07f46cc830342df6ea47833a0"],["G:/Blog/public/tags/解决问题/index.html","e2dba7523e8c673e59c0a2f458bafb38"],["G:/Blog/public/tags/豆瓣书架/index.html","fe48d106829fe00c38255bedbe4a9a51"],["G:/Blog/public/tags/转载/index.html","bf8a37ce784f86dbd2da42984958c93e"],["G:/Blog/public/tags/面试/index.html","3f0eac4113806b5520ae057faed669c1"],["G:/Blog/public/tags/靶场/index.html","0cbff16394e1ffebebf600a08ffe1277"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","ded48eda06a3c9d8aa02186dd41ee8ef"],["G:/Blog/public/留言板/index.html","bea85d370b49bd7cd3dde8ecb91c0f1c"]];
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







