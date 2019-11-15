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

var precacheConfig = [["G:/Blog/public/2019/07/01/我的大学生活/index.html","018e418bc0c70c3cf9010d7946fa2c00"],["G:/Blog/public/2019/08/02/自定义hexo创建文章的模板/index.html","fb0316760e6d7d6916523e63cfa3f54c"],["G:/Blog/public/2019/08/09/github-hexo-域名搭建一个自己的网站/index.html","43e5846aecc42d216fd5a1e27c20f121"],["G:/Blog/public/2019/08/09/onedrive-oneindex打造属于自己的个人网盘/index.html","e91727ed893c3091ad194a55c222bc52"],["G:/Blog/public/2019/08/09/给博客添加豆瓣书架功能/index.html","5966b27becd3bb09585b8161872f3a42"],["G:/Blog/public/2019/08/14/如何将-frm，-MYD和-MYI格式的文件导入MySQL中/index.html","3a28ab1bcbfae53dcb4a981424ee999a"],["G:/Blog/public/2019/08/16/github-hexo-域名搭建一个自己的网站/index.html","55a55916d39c18c73f8d69f07cc5e5c8"],["G:/Blog/public/2019/08/16/oneindex后续/index.html","9d57b3ec595c24b3079b5ba8853ef742"],["G:/Blog/public/2019/08/18/hexo蝴蝶主题的一些小功能-跟新中/index.html","7f434ea7d063ea7653dff589eee2da70"],["G:/Blog/public/2019/08/19/burp加载jython时出错/index.html","d886f569e0f1da36aa3798691ef6eec3"],["G:/Blog/public/2019/08/19/nessus数据库崩溃问题/index.html","d163e3f99b6df9e02b5f859561bccdf8"],["G:/Blog/public/2019/08/19/web应用程序测试方法论/index.html","06fc8902e7ec4ec42fa5d43d9c8e57bc"],["G:/Blog/public/2019/08/19/第一章：应用程序及表单风险/index.html","2d9b0f95f1588662e0b81ce5a1912bf7"],["G:/Blog/public/2019/08/20/渗透测试面试宝典/index.html","8473ec013d5c4ce9757b3daf44d3e850"],["G:/Blog/public/2019/08/21/AppScan-9-0-3-13-破解版本安装教程/index.html","2563d272a8ec2d11c4f1bb2d577b19ab"],["G:/Blog/public/2019/08/22/4款GitHub泄露敏感信息搜索工具的安装使用与比较/index.html","8871ae65431159f933f137fd9deef50d"],["G:/Blog/public/2019/08/22/LDAP-Admin-Tools工具安装激活教程/index.html","8bee13a19c42480fbfb1bf8cacde48f2"],["G:/Blog/public/2019/08/22/LDAP匿名访问漏洞/index.html","acefe7cf949ddcbcd1329bef57893837"],["G:/Blog/public/2019/08/22/picbed-GitHub打造自己的图床/index.html","065d3560f2fb3ee69e1d3c3fcd323319"],["G:/Blog/public/2019/08/22/密码生成工具-cewl的使用/index.html","8541fe23d13e136c971147dfb9d6ac0c"],["G:/Blog/public/2019/08/22/工作之杂谈/index.html","a896c73203004604049ec6ed718094a5"],["G:/Blog/public/2019/08/23/test/index.html","18fe3dca7d7f65d67bb27a4f915ade4e"],["G:/Blog/public/2019/08/26/Python工具库/index.html","4c39bcca569df1923caf86e9bb98ee18"],["G:/Blog/public/2019/08/27/ssh连接不上kali问题/index.html","f749b0e85481fa3c0f4535d4a0dc92a4"],["G:/Blog/public/2019/08/27/史上最全的Linux的常用命令/index.html","6986d4605e7775e645fee37b19df92f0"],["G:/Blog/public/2019/08/27/在安装vmtool时碰到的问题/index.html","af360327f5578ad9512f7ed8d7ecb3cf"],["G:/Blog/public/2019/08/30/爬取CNNVD上的漏洞预警/index.html","d6046e956c5b22d1255bb1f135c2f0a0"],["G:/Blog/public/2019/08/31/CTF夺旗培训学习笔记/index.html","46d5e633b894030981b5b929418f1e4d"],["G:/Blog/public/2019/09/03/CTF竞赛试题/index.html","d0dec0534de50443d9d29229648626f8"],["G:/Blog/public/2019/09/03/优秀文章整理/index.html","14dc312c0df21cc4b234d0286fe64231"],["G:/Blog/public/2019/09/03/优秀资源工具整理/index.html","a6c221f4319ed322f3a32a36f24c5768"],["G:/Blog/public/2019/09/05/CTF考试用题/index.html","1ef02067177846e5392e06737a9ea92f"],["G:/Blog/public/2019/09/05/基础DOS命令/index.html","1d35b6a9b886ddbe964fa04c91eeef03"],["G:/Blog/public/2019/09/05/基础Linux命令/index.html","079ba1a7198569be1a7101054d9302bf"],["G:/Blog/public/2019/09/05/基础SQL语句/index.html","f000a7977cfc3e27825d1ac41f540965"],["G:/Blog/public/2019/09/05/基础Vim命令/index.html","98f0c8d0ced55fe97db8b2230cb42f87"],["G:/Blog/public/2019/09/10/常见的HTTP响应状态码/index.html","ba13a87dca1000eba367f85a1ac76fb5"],["G:/Blog/public/2019/09/11/CVE-2019-0708复现教程/index.html","afa2221b6d7c5cfdb4624ed67c0386b1"],["G:/Blog/public/2019/09/17/XRay-一款好用的漏洞挖掘工具/index.html","3da3a5af198c9f3bbb5320ff27246c6b"],["G:/Blog/public/2019/09/17/本地搭建一个poc生成器/index.html","541888694dcf36af92874ff5a691f890"],["G:/Blog/public/2019/09/20/9元钱搭建一个自己的VPN/index.html","965b6e0b3086176488db159e69e70587"],["G:/Blog/public/2019/09/20/使用burpsuite抓取Google的数据包/index.html","72abcfde79afaf33a726f158bf983630"],["G:/Blog/public/2019/09/25/MS2016-Excel使用的一些技巧/index.html","d82e032b9028fcebdfde85e6b755d7fd"],["G:/Blog/public/2019/09/26/渗透测试实战靶场/index.html","be809a471f4bf328942748cc0ef9b8bc"],["G:/Blog/public/2019/09/29/XSS平台的搭建/index.html","2c9de945c1fdd6b549ee334b68f69134"],["G:/Blog/public/2019/10/04/burpsuite常用插件推荐与使用/index.html","9abbf3d803294080596afab105c26a56"],["G:/Blog/public/2019/10/08/python爬虫学习笔记（一）/index.html","d58a971a10133feff1e26990d8741c84"],["G:/Blog/public/2019/10/09/phpstudy后门检测及利用/index.html","797b01e026c3468c98aafd6ffaf31c78"],["G:/Blog/public/2019/10/10/使用telegram搭建一个rss订阅机器人/index.html","9f7f82f2dfac173c44b26353cbae088f"],["G:/Blog/public/2019/10/11/Linux Notes/index.html","4858ac26f9d4c824b9c0c43e9c2504f1"],["G:/Blog/public/2019/10/11/Linux注释-备忘单/index.html","3c42784230a215fa1ddd2330bfb77870"],["G:/Blog/public/2019/10/11/Win32缓冲区溢出-SEH溢出和Egghunters/index.html","a881210a5b3d06a579d7fd0c80614a90"],["G:/Blog/public/2019/10/11/Windows-Notes/index.html","13f1e31eda366a3900c2a75bfd65c937"],["G:/Blog/public/2019/10/11/使用docker安装移动安全框架（MobSF）/index.html","ae0f06fb74327eaab64e46f2a4aeaff9"],["G:/Blog/public/2019/10/11/我的漏洞库/index.html","a8817683d9e016873944884cf0c484df"],["G:/Blog/public/2019/10/12/CMS漏洞集合/index.html","1e584815973a5a671e80c035deb5063f"],["G:/Blog/public/2019/10/12/X-Ray白皮书/index.html","95c06e5a54f90c8959a884939aabcd1f"],["G:/Blog/public/2019/10/15/burpsuite专题学习指南/index.html","8dc058ba3412d7561c323888f53f25c0"],["G:/Blog/public/2019/10/16/华为账户信息一览表/index.html","317ebcf7c375128372c2f2f73779ba12"],["G:/Blog/public/2019/10/18/漏洞案例大全/index.html","106a61da4ddf98d3c1f02b38d912f754"],["G:/Blog/public/2019/10/24/等保服务内容及报价/index.html","fe9d5a28367db82f2c9492c7702dd1cd"],["G:/Blog/public/2019/10/24/网络安全法/index.html","cea255de05c2db88eac6912704feb9e4"],["G:/Blog/public/2019/10/25/2019年Tor浏览器终极指南/index.html","4b842a3b7b4c0febb80890127fa867d7"],["G:/Blog/public/2019/10/29/CVE-2019-16278-RCE复现/index.html","47786be17f24802ddc6b39ed8eba9a0a"],["G:/Blog/public/2019/10/29/火狐插件-hackbar与MaxHackbar/index.html","dc854c41bc3ad063fc815db8e42ddb13"],["G:/Blog/public/2019/10/31/手起刀落Notepad/index.html","16d369ce1b35e02640269b091ceb5a88"],["G:/Blog/public/2019/11/01/test页面/index.html","1c262d2a1c7090f58c5bbeb9c943a3c8"],["G:/Blog/public/2019/11/05/CTF夺旗训练视频课程PPT/index.html","8e6488727f35c90dadd70580de7261d9"],["G:/Blog/public/2019/11/11/hackthebox初探之获取邀请码/index.html","0e160ac61c752a85cf80a6042aff0fb2"],["G:/Blog/public/2019/11/13/黑客心理学/index.html","0ccb9f1fa26ec1d596c89bc850652182"],["G:/Blog/public/about/index.html","ce5584a6b5e0293580f6e0d99674a0bf"],["G:/Blog/public/archives/2019/07/index.html","8cca558693936fe677ed35a28b5ff369"],["G:/Blog/public/archives/2019/08/index.html","f1879060d72bbd4805e48de06df59dcc"],["G:/Blog/public/archives/2019/08/page/2/index.html","18028823c18a49fdd6805e7dcc6d7fc3"],["G:/Blog/public/archives/2019/08/page/3/index.html","7f66e19799fc08423d09aeabc75022e7"],["G:/Blog/public/archives/2019/09/index.html","b5a94e8625b57a10c030dd44115a73c2"],["G:/Blog/public/archives/2019/09/page/2/index.html","8bfeb8121609198b7c9b9a6077a86428"],["G:/Blog/public/archives/2019/10/index.html","c32bd9c12c2668e91952494325343dd5"],["G:/Blog/public/archives/2019/10/page/2/index.html","e8fb829687ddcaffb1f89293ede600e9"],["G:/Blog/public/archives/2019/11/index.html","19a975ba74cba83f102dede8eb913d7d"],["G:/Blog/public/archives/2019/index.html","7bfd50cfe0948ac3e6245811c18eae53"],["G:/Blog/public/archives/2019/page/2/index.html","89912050645e8ea3fb5f0cf68c53e7bd"],["G:/Blog/public/archives/2019/page/3/index.html","cb52dce605f21df941de6d454e3943d9"],["G:/Blog/public/archives/2019/page/4/index.html","d2036d5d4fa190611ff957c1743f0fed"],["G:/Blog/public/archives/2019/page/5/index.html","6137a8e0eb641219c3755ce3b5dae541"],["G:/Blog/public/archives/2019/page/6/index.html","1ce88bb19f881cef459471c6379abd29"],["G:/Blog/public/archives/2019/page/7/index.html","a07c8f9f7ce04f6d5b22829c033ffbef"],["G:/Blog/public/archives/index.html","5bcee7bbc91e98e03dbda24050c7ba57"],["G:/Blog/public/archives/page/2/index.html","355ed8e1d6afb116b06a1a9210b87322"],["G:/Blog/public/archives/page/3/index.html","66ed6d461cd80480946c534da76d24d7"],["G:/Blog/public/archives/page/4/index.html","53fb128147c0d2bab5fe990696a6844a"],["G:/Blog/public/archives/page/5/index.html","15c52a4e3f317fe021b801dcd0a82a66"],["G:/Blog/public/archives/page/6/index.html","3bcd3551532fad6de73fc3e92037e597"],["G:/Blog/public/archives/page/7/index.html","90333900d16bfc49cf641003d51cf0a0"],["G:/Blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["G:/Blog/public/books/index.html","23d837534805f08e8e98c1ad86818921"],["G:/Blog/public/categories/CTF相关/index.html","658194fa5feef8b8d3e5fc082d668cb2"],["G:/Blog/public/categories/Linux/index.html","e16ae96dacdf9c98dc577ce6e7fb24db"],["G:/Blog/public/categories/Windows/index.html","9f746bab39198caf1121fb0ab6709ca6"],["G:/Blog/public/categories/hexo/index.html","3f015f07816e8655e2ea83177c482107"],["G:/Blog/public/categories/index.html","64724709a2810c4e83d2db4da90c1f35"],["G:/Blog/public/categories/web安全/index.html","8fc7a25a4286865d4460b0d7bb256ba5"],["G:/Blog/public/categories/web安全/安全资讯/index.html","142bfe455f1905cc356ef0a8b5cc32ab"],["G:/Blog/public/categories/web安全/靶场练习/index.html","933d655135794514eacbdd5565ac1ba2"],["G:/Blog/public/categories/主机安全/Linux/index.html","9c1c15f9b1c56fe4816fbe49623750fa"],["G:/Blog/public/categories/主机安全/index.html","47a3698c98e8b94d7f50a18c6231d371"],["G:/Blog/public/categories/其他教程/index.html","eea3af4ccb6671fde99327de74b9dc00"],["G:/Blog/public/categories/其他文章/index.html","bf962480fbfbf35b5eee36699b2658d6"],["G:/Blog/public/categories/好玩/index.html","95a0299f2f54aece5d8cf8035217d8b3"],["G:/Blog/public/categories/安全工具/index.html","d07afeca0077cd6ddb977b0900faa7d8"],["G:/Blog/public/categories/安全工具/page/2/index.html","ce6fde76729dbd64c3852a4d6d640d43"],["G:/Blog/public/categories/安全工具/page/3/index.html","2c8679662e2db48ecd4cdca4defe0067"],["G:/Blog/public/categories/安全服务/index.html","b44d0547e74d0bdaea59858d305d7778"],["G:/Blog/public/categories/安全服务/渗透测试/index.html","e9491281209e8de2199a2ac63615ab78"],["G:/Blog/public/categories/安全服务/等级保护/index.html","927a39e810f5461fc07eb3f80121d501"],["G:/Blog/public/categories/安全资讯/index.html","5190115699c2c8650e474e82c1bb057e"],["G:/Blog/public/categories/思维导图/index.html","3268bd11641dbc46da1273bf7c4577b2"],["G:/Blog/public/categories/思维导图/渗透测试/index.html","8333b85e12346f076e78972712f80260"],["G:/Blog/public/categories/教程/index.html","1bf2add7642f10f233b24276e8cde614"],["G:/Blog/public/categories/教程/好玩/index.html","6273daa8f05a84f15fb68d3d4e199c6f"],["G:/Blog/public/categories/数据库/index.html","6860dacb0c241280ddfe55409d6ea5f5"],["G:/Blog/public/categories/数据库/mysql/index.html","aa1fec0af3047507e76429c2136ee13e"],["G:/Blog/public/categories/渗透测试/index.html","68a29ef8e88649d70c9f5c7f492a7813"],["G:/Blog/public/categories/渗透测试/漏洞复现/index.html","4147abb04046ce09f3f229030d1798ca"],["G:/Blog/public/categories/渗透测试/靶场/index.html","e3261cab937dcd4885019c5e0b90b7cd"],["G:/Blog/public/categories/漏洞挖掘/index.html","a73bd36f86e9eaa788de7a883059ef17"],["G:/Blog/public/categories/社会工程/index.html","0719a879b5010a6c79d21bbe74b8e06f"],["G:/Blog/public/categories/社工工程/index.html","69d2736900cc42acbfb181947414e68b"],["G:/Blog/public/categories/社工工程学/index.html","833d7fab528458c1e9771cdde068e139"],["G:/Blog/public/categories/神兵利器/index.html","0666a0f727909cb69d45bfe137ab5486"],["G:/Blog/public/categories/神兵利器/page/2/index.html","0b22b306136166a958a78f926ffd960d"],["G:/Blog/public/categories/等级保护/index.html","c819cb625f8ada7af1af75e64294842e"],["G:/Blog/public/categories/翻译文章/index.html","09c2fd996519f2ec82fd89e3004b300c"],["G:/Blog/public/categories/记录生活/index.html","5bc687dcbfcc26854784ad10888e0dcd"],["G:/Blog/public/css/index.css","b6721e08f055e7b744b2aaed2526089a"],["G:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/Blog/public/gallery/index.html","da23781e9544361db1988a3963a11f4e"],["G:/Blog/public/games/index.html","3b67eae7b14243182017c800946ac9a1"],["G:/Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["G:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["G:/Blog/public/img/alipay.jpg","7c7b4882fd1948630a783861a772d88f"],["G:/Blog/public/img/avatar.png","d8d535044fc6167b3e1cb8cfc85bb1cc"],["G:/Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["G:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/Blog/public/img/wechat.jpg","4a03c8622d08e01eedeeae03d6ac3b45"],["G:/Blog/public/index.html","2d0d6d9da19a50d15bfde4f342169ff9"],["G:/Blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["G:/Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["G:/Blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["G:/Blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["G:/Blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["G:/Blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["G:/Blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["G:/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["G:/Blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["G:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["G:/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["G:/Blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["G:/Blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["G:/Blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["G:/Blog/public/link/index.html","914677de385de49f8bedf62fff10df16"],["G:/Blog/public/movies/index.html","f82acdd6fca8d6efa704d4426177e7fb"],["G:/Blog/public/page/2/index.html","57a3f570ed4ff13ffe7b377f52918f3c"],["G:/Blog/public/page/3/index.html","e15c4414e8c1a1eb6d033204c2a8f277"],["G:/Blog/public/page/4/index.html","dbb9434405233e57e06cac9c01dd7020"],["G:/Blog/public/page/5/index.html","acce6e6ebe0ff39b21970c4cf017e48f"],["G:/Blog/public/page/6/index.html","4963920deb1ad367af832542401c788c"],["G:/Blog/public/page/7/index.html","f4a42e041b4b8dfa1455616b1fef8211"],["G:/Blog/public/pan/index.html","1022522fbeeff526f4e43b35fb08ba38"],["G:/Blog/public/tags/APPscan/index.html","9fa55c6a1479b33487aed7f60ec7146f"],["G:/Blog/public/tags/CTF/index.html","2f7f567fcc2bddbc07ecf48b1c080989"],["G:/Blog/public/tags/CVE/index.html","75796b63c988f48f55065443daac7d9d"],["G:/Blog/public/tags/DOS命令/index.html","f2fbdfeb0263d7ea2a7787f43d758fb0"],["G:/Blog/public/tags/GitHub信息泄露/index.html","beafb2022e955fe764172db75f09909a"],["G:/Blog/public/tags/HTTP状态码/index.html","c3b1ae405b0ec14dde643c0e478056d5"],["G:/Blog/public/tags/LADP/index.html","7610c06c8fdeb844f806612121a26bbb"],["G:/Blog/public/tags/Linux/index.html","cbd59e850d62662124866158b0457686"],["G:/Blog/public/tags/Linux命令/index.html","364213b02930e544dc166cc41ce54429"],["G:/Blog/public/tags/Linux笔记/index.html","0921634546b004c0fe640a1f8a8f2b59"],["G:/Blog/public/tags/MobSF/index.html","ca5a08c3e2d2fbd6fe6e4939aba24d80"],["G:/Blog/public/tags/PHPstudy后门/index.html","f08b8a4cb2041c1e414f5332053ae103"],["G:/Blog/public/tags/POC/index.html","a2d6bd6f4284d088f3d891714f5efce2"],["G:/Blog/public/tags/VPN/index.html","1af2b05168757cc8e1945f04f2aec884"],["G:/Blog/public/tags/Windows/index.html","75452e02ad16bc4e629fbcadbe294789"],["G:/Blog/public/tags/Windows命令/index.html","65649c8f51f15b3e2f37074401703999"],["G:/Blog/public/tags/X-RAY/index.html","df6cb525430d8d1411d213ad12c998f4"],["G:/Blog/public/tags/XSS平台/index.html","73b27153a8b6b79ae263fc7a60f94307"],["G:/Blog/public/tags/burpsuite/index.html","c606a3ae9ad81cfe19e148d0f41a508e"],["G:/Blog/public/tags/cewl/index.html","774ec10108fec1118baf95835b44293b"],["G:/Blog/public/tags/github/index.html","d516b2c8ed1a4168c2d6523a1594c74a"],["G:/Blog/public/tags/hackthebox/index.html","a972b2e83a54501701266353b56a91eb"],["G:/Blog/public/tags/hexo/index.html","a4ff0ce9cb5a81000ddb37a1ebd19f7f"],["G:/Blog/public/tags/hexo博客/index.html","aa0134f2c86e09bef3af52ed14b01253"],["G:/Blog/public/tags/index.html","75dce3602364ac6402f0129a02b77caf"],["G:/Blog/public/tags/kali-Linux/index.html","a59373dfb5f4c5392400d69e1f462d60"],["G:/Blog/public/tags/mysql/index.html","a196df9bced2f76cccbf2f035057056f"],["G:/Blog/public/tags/nessus/index.html","fd85556da75e5b32023823f18869706e"],["G:/Blog/public/tags/onedrive/index.html","c7de7227067f4538b5f0016dfd0fd848"],["G:/Blog/public/tags/oneindex-onedrive/index.html","1a22fcdbc9b14c2b7048ef4470f5e7a6"],["G:/Blog/public/tags/oneindex/index.html","6a9df2c7878d4c325a43490af226ab10"],["G:/Blog/public/tags/python/index.html","953c14304f7daa4648d11c3309f89414"],["G:/Blog/public/tags/python爬虫/index.html","f5da0f3fc4a19f5b67d5c8af6b31c465"],["G:/Blog/public/tags/telegram/index.html","18ef2b853a860117bd1a67aadc3c03ad"],["G:/Blog/public/tags/tg机器人/index.html","d80dda3651d97b0e7ace49274ff6ff2e"],["G:/Blog/public/tags/tor浏览器/index.html","dd94b77d573a7d32e42376e7a778c58e"],["G:/Blog/public/tags/xray/index.html","d7e283e9b81269c550422b8f3062f878"],["G:/Blog/public/tags/个人网盘/index.html","d99c88cae38a9656c3d9fb33f19689e8"],["G:/Blog/public/tags/主题功能/index.html","c1ff892bccfae747ad25001eed896cc0"],["G:/Blog/public/tags/优秀文章/index.html","2594f32426bd3cec5b314dacc6c06561"],["G:/Blog/public/tags/信息泄露/index.html","e1ee3ff4a6c4aff357f3a2195f7c1449"],["G:/Blog/public/tags/其他文章/index.html","783cf420e02823f367bcbb12b71a8789"],["G:/Blog/public/tags/博客/index.html","30ea6ffaa4438f49b5071fe5ad80685c"],["G:/Blog/public/tags/命令/index.html","5f159705f0e6f790fe9b3efcca831160"],["G:/Blog/public/tags/图床/index.html","c8be5601996011655065980b8bbb514f"],["G:/Blog/public/tags/基础教程/index.html","ef2e31b91ad44baa5ab893a4188fe19c"],["G:/Blog/public/tags/夺旗/index.html","2b5ff004acf1216a6821e4e301b58391"],["G:/Blog/public/tags/安全工具/index.html","3593f37c587c588ad78099be4e8949d1"],["G:/Blog/public/tags/工作/index.html","6bbb4a67e89a023745ee4ba34f0d8b22"],["G:/Blog/public/tags/应用程序测试/index.html","ac5b2ad8c01f3676164c6c197bd32296"],["G:/Blog/public/tags/思维导图/index.html","48661179544c1d060d534fadb9ab02ab"],["G:/Blog/public/tags/数据库/index.html","bb4dd9dcc5bcd9e31a5782a1bdf5ed72"],["G:/Blog/public/tags/文章模板/index.html","ec5dc185a92e422c505563fa53e3ca3e"],["G:/Blog/public/tags/方法论/index.html","e8ce9eb2436ed40c91cc2bb97a1aeca8"],["G:/Blog/public/tags/机器人/index.html","eb225b1ffe09dff6726731259adeed1b"],["G:/Blog/public/tags/法律/index.html","2e8b7e5d8ccccfbf154387b6d33a36f2"],["G:/Blog/public/tags/渗透测试/index.html","f497dcb284af8a637ccca190e1c10d28"],["G:/Blog/public/tags/渗透测试方法论/index.html","7fd22062ecb6d3b1299d440b698446b2"],["G:/Blog/public/tags/渗透笔记/index.html","54e1b19849f97a77ba74adc5c325ba1a"],["G:/Blog/public/tags/漏洞/index.html","83e5a24dd13f07082b5a7975e5c6f81d"],["G:/Blog/public/tags/漏洞库/index.html","0d039c5a8f5f067013899b170637d676"],["G:/Blog/public/tags/漏洞案例/index.html","89afc00f85cea351d9ece4d136d55076"],["G:/Blog/public/tags/火狐插件/index.html","1df179eeb8e987fb538a8c4e02e07427"],["G:/Blog/public/tags/爬虫/index.html","46e53008dfaebb7772603b9cb617cfe0"],["G:/Blog/public/tags/生活/index.html","fae4f8e327be9187fbf5550f7244c2c0"],["G:/Blog/public/tags/生活随笔/index.html","280f6637b12976f8170850e0f1d53834"],["G:/Blog/public/tags/社工/index.html","7fd77108ced503d6ad6ec8ea42123edc"],["G:/Blog/public/tags/科学上网/index.html","0924edcb86e543a1c66e50709bd9e5a1"],["G:/Blog/public/tags/移动安全/index.html","f1a3a6f1fca94dcc96d4835c90a8a00e"],["G:/Blog/public/tags/等级保护/index.html","65c3f55a182f4ceaa9c8fa05da9b3eb7"],["G:/Blog/public/tags/缓冲区溢出/index.html","b3778400e91ae5d8e5aa35c2ccb7459b"],["G:/Blog/public/tags/翻译/index.html","f95822fed7bdbaddb0a75cb43d80745a"],["G:/Blog/public/tags/翻译文章/index.html","ac6f97e65f137e0f9ca6ec27929b9b92"],["G:/Blog/public/tags/解决问题/index.html","e9450ca0f2038ae8fdbc92e362987508"],["G:/Blog/public/tags/豆瓣书架/index.html","f2fc4bc8d9c00fafc0a16311033ffd5f"],["G:/Blog/public/tags/转载/index.html","beab1c1ad95da5f658b63d50ad1a2cde"],["G:/Blog/public/tags/面试/index.html","aef330c2fdf03393c655016fd4cc117e"],["G:/Blog/public/tags/靶场/index.html","877799bdcfa435685c584b04afccf4e2"],["G:/Blog/public/test/index.html","720ad5c51541273d337f3faba39cae36"],["G:/Blog/public/archives/index.html","52f86fd1ca01a16e92364dab2ce86aa4"],["G:/Blog/public/留言板/index.html","f5d35a6ecff4b425aa7663a49d0ac0e1"]];
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







