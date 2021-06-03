(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{416:function(t,n,s){t.exports=s.p+"assets/img/cloudflare.1f16c80f.gif"},582:function(t,n,s){"use strict";s.r(n);var e=s(11),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"内容分发网络"}},[t._v("内容分发网络")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("内容分发网络（Content Distribution Network）")]),t._v(" "),e("p",[t._v("CDN 是一种十分古老而又十分透明，没什么存在感的分流系统，许多人都说听过它，但真正了解过它的人却很少。")])]),t._v(" "),e("p",[t._v("前面几节介绍了客户端缓存、域名解析、链路优化，这节我们来讨论它们的一个经典的综合运用案例："),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Content_delivery_network",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容分发网络"),e("OutboundLink")],1),t._v("（Content Distribution Network，CDN，也有写作 Content Delivery Network）。")]),t._v(" "),e("p",[t._v("内容分发网络是一种十分古老的应用，相信大部分读者都或多或少对其有一定了解，至少听过它的名字。如果把某个互联网系统比喻为一家企业，那内容分发网络就是它遍布世界各地的分支销售机构，现在有客户要买一块 CPU，那么订机票飞到美国加州 Intel 总部肯定是不合适的，到本地电脑城找个装机铺才是通常的做法，在此场景中，内容分发网络就相当于电脑城里的本地经销商。")]),t._v(" "),e("p",[t._v("内容分发网络又是一种十分透明的应用，可能绝大多数读者对于它为互联网站点分流的工作原理并没有什么系统性的概念，至少没有自己亲自使用过。")]),t._v(" "),e("p",[t._v("如果抛却其他影响服务质量的因素，仅从网络传输的角度看，一个互联网系统的速度取决于以下四点因素：")]),t._v(" "),e("ol",[e("li",[t._v("网站服务器接入网络运营商的链路所能提供的出口带宽。")]),t._v(" "),e("li",[t._v("用户客户端接入网络运营商的链路所能提供的入口带宽。")]),t._v(" "),e("li",[t._v("从网站到用户之间经过的不同运营商之间互联节点的带宽，一般来说两个运营商之间只有固定的若干个点是互通的，所有跨运营商之间的交互都要经过这些点。")]),t._v(" "),e("li",[t._v("从网站到用户之间的物理链路传输时延。爱打游戏的同学应该都清楚，延迟（Ping 值）比带宽更重要。")])]),t._v(" "),e("p",[t._v("以上四个网络问题，除了第二个只能通过换一个更好的宽带才能解决之外，其余三个都能通过内容分发网络来显著改善。一个运作良好的内容分发网络，能为互联网系统解决跨运营商、跨地域物理距离所导致的时延问题，能为网站流量带宽起到分流、减负的作用。举个例子，如果不是有遍布全国乃至全世界的阿里云 CDN 网络支持，哪怕把整个杭州所有市民上网的权力都剥夺了，把带宽全部让给淘宝的机房，恐怕也撑不住全国乃至全球用户在双十一期间的疯狂“围殴”。")]),t._v(" "),e("p",[t._v("内容分发网络的工作过程，主要涉及路由解析、内容分发、负载均衡和所能支持的 CDN 应用内容四个方面，由于下一节会专门讨论负载均衡的内容，所以这部分在本节就暂不涉及，我们来逐一了解 CDN 其余三个方面。")]),t._v(" "),e("h2",{attrs:{id:"路由解析"}},[t._v("路由解析")]),t._v(" "),e("p",[t._v("介绍 DNS 域名解析时，笔者曾提到翻译域名无须像查电话本一样刻板地一对一翻译，根据来访机器、网络链路、服务内容等各种信息，可以玩出很多花样，内容分发网络将用户请求路由到它的资源服务器上就是依靠 DNS 服务器来实现的。根据我们对 DNS 域名解析的了解，一次没有内容分发网络参与的用户访问，其解析过程如图 4-5 所示。")]),t._v(" "),e("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n    浏览器 ->> 本地DNS: 查询网站icyfenix.cn\n    loop 递归查询\n\t    本地DNS ->> 权威DNS: 查询网站icyfenix.cn\n\tend\n\t权威DNS --\x3e> 本地DNS: 地址:xx.xx.xx.xx\n\t本地DNS --\x3e> 浏览器: 地址:xx.xx.xx.xx\n\t浏览器 ->> 网站服务器: 请求\n\t网站服务器 --\x3e> 浏览器: 响应\n")]),t._v(" "),e("div",{staticClass:"custom-block center"},[e("p",[t._v("图 4-5 没有内容分发网络参与的用户访问的解析过程")])]),t._v(" "),e("p",[t._v("有内容分发网络介入会发生什么变化呢？我们不妨先来看一段对网站"),e("code",[t._v("icyfenix.cn")]),t._v("进行 DNS 查询的真实应答记录，这个网站就是通过国内的内容分发网络对位于"),e("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),e("OutboundLink")],1),t._v("上的静态页面进行加速的。通过 dig 或者 host 命令，就能很方便地得到 DNS 服务器的返回结果（结果中头 4 个 IP 的城市地址是笔者手工加入的，后面的其他记录就不一个一个查了），如下所示：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dig")]),t._v(" icyfenix.cn\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" DiG "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.11")]),t._v(".3-1ubuntu1.8-Ubuntu "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" icyfenix.cn\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" global options: +cmd\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Got answer:\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("HEADER"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),t._v(" opcode: QUERY, status: NOERROR, id: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60630")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" flags: qr rd ra"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" QUERY: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", ANSWER: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(", AUTHORITY: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", ADDITIONAL: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" OPT PSEUDOSECTION:\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" EDNS: version: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", flags:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" udp: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("65494")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" QUESTION SECTION:\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("icyfenix.cn.                   IN      A\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ANSWER SECTION:\nicyfenix.cn.            "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v("     IN      CNAME   icyfenix.cn.cdn.dnsv1.com.\nicyfenix.cn.cdn.dnsv1.com. "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("599")]),t._v("  IN      CNAME   4yi4q4z6.dispatch.spcdntip.com.\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("101.71")]),t._v(".72.192      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#浙江宁波市")]),t._v("\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("113.200")]),t._v(".16.234     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#陕西省榆林市")]),t._v("\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.95")]),t._v(".25.196      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#内蒙古自治区呼和浩特市")]),t._v("\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.178")]),t._v(".66.65      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新疆维吾尔自治区乌鲁木齐市")]),t._v("\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("118.212")]),t._v(".234.144\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("211.91")]),t._v(".160.228\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("211.97")]),t._v(".73.224\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("218.11")]),t._v(".8.232\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("221.204")]),t._v(".166.70\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.204")]),t._v(".74.140\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("43.242")]),t._v(".166.88\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.80")]),t._v(".39.110\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.83")]),t._v(".204.12\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.83")]),t._v(".204.14\n4yi4q4z6.dispatch.spcdntip.com.\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IN\tA\t"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.83")]),t._v(".218.235\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Query time: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("74")]),t._v(" msec\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" SERVER: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.53"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#53(127.0.0.53)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" WHEN: Sat Apr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":33:56 CST "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" MSG SIZE  rcvd: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("152")]),t._v("\n")])])]),e("p",[t._v("根据以上解析信息，DNS 服务为"),e("code",[t._v("icyfenix.cn")]),t._v("的查询结果先返回了一个"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/CNAME_record",target:"_blank",rel:"noopener noreferrer"}},[t._v("CNAME 记录"),e("OutboundLink")],1),t._v("（"),e("code",[t._v("icyfenix.cn.cdn.dnsv1.com.")]),t._v("），递归查询该 CNAME 时候，返回了另一个看起来更奇怪的 CNAME（"),e("code",[t._v("4yi4q4z6.dispatch.spcdntip.com.")]),t._v("）。继续查询后，这个 CNAME 返回了十几个位于全国不同地区的 A 记录，很明显，那些 A 记录就是分布在全国各地、存有本站缓存的 CDN 节点。CDN 路由解析的具体工作过程是：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("架设好“"),e("code",[t._v("icyfenix.cn")]),t._v("”的服务器后，将服务器的 IP 地址在你的 CDN 服务商上注册为“源站”，注册后你会得到一个 CNAME，即本例中的“"),e("code",[t._v("icyfenix.cn.cdn.dnsv1.com.")]),t._v("”。")])]),t._v(" "),e("li",[e("p",[t._v("将得到的 CNAME 在你购买域名的 DNS 服务商上注册为一条 CNAME 记录。")])]),t._v(" "),e("li",[e("p",[t._v("当第一位用户来访你的站点时，将首先发生一次未命中缓存的 DNS 查询，域名服务商解析出 CNAME 后，返回给本地 DNS，至此之后链路解析的主导权就开始由内容分发网络的调度服务接管了。")])]),t._v(" "),e("li",[e("p",[t._v("本地 DNS 查询 CNAME 时，由于能解析该 CNAME 的权威服务器只有 CDN 服务商所架设的权威 DNS，这个 DNS 服务将根据一定的均衡策略和参数，如拓扑结构、容量、时延等，在全国各地能提供服务的 CDN 缓存节点中挑选一个最适合的，将它的 IP 代替源站的 IP 地址，返回给本地 DNS。")])]),t._v(" "),e("li",[e("p",[t._v("浏览器从本地 DNS 拿到 IP 地址，将该 IP 当作源站服务器来进行访问，此时该 IP 的 CDN 节点上可能有，也可能没有缓存过源站的资源，这点将在稍后“"),e("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/diversion-system/cdn.html#内容分发"}},[t._v("内容分发")]),t._v("”小节讨论。")],1)]),t._v(" "),e("li",[e("p",[t._v("经过内容分发后的 CDN 节点，就有能力代替源站向用户提供所请求的资源。")])])]),t._v(" "),e("p",[t._v("以上步骤反映在时序图上，会如图 4-6 所示，请与本节开头给出的没有 CDN 参与的图 4-5 进行对比。")]),t._v(" "),e("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n    浏览器 ->> 本地DNS: 查询网站icyfenix.cn\n    loop 递归查询\n\t    本地DNS ->> 域名的权威DNS: 查询网站icyfenix.cn\n\tend\n\t域名的权威DNS --\x3e> 本地DNS: CNAME:icyfenix.cn.cdn.dnsv1.com.\n\t本地DNS --\x3e> CNAME的权威DNS: 查询CNAME：icyfenix.cn.cdn.dnsv1.com.\n\tloop 递归查询\n\t\tCNAME的权威DNS ->> CNAME的权威DNS: 经过递归查询和负载均衡，确定合适的CDN\n\tend\n\tCNAME的权威DNS --\x3e> 本地DNS: 地址:xx.xx.xx.xx\n\t本地DNS --\x3e> 浏览器: 地址:xx.xx.xx.xx\n\t浏览器 ->> CDN服务器: 请求\n\tCDN服务器 ->> 源站服务器: 请求\n\t源站服务器 --\x3e> CDN服务器: 响应\n\tCDN服务器 --\x3e> 浏览器: 缓存并响应\n")]),t._v(" "),e("div",{staticClass:"custom-block center"},[e("p",[t._v("图 4-6 CDN 路由解析")])]),t._v(" "),e("h2",{attrs:{id:"内容分发"}},[t._v("内容分发")]),t._v(" "),e("p",[t._v("在 DNS 服务器的协助下，无论是对用户还是服务器，内容分发网络都可以是完全透明的，在两者都不知情的情况下，由 CDN 的缓存节点接管了用户向服务器发出的资源请求。后面随之而来的问题是缓存节点中必须有用户想要请求的资源副本，才可能代替源站来响应用户请求。这里面又包括了两个子问题：“如何获取源站资源”和“如何管理（更新）资源”。")]),t._v(" "),e("p",[t._v("CDN 获取源站资源的过程被称为“内容分发”，“内容分发网络”的名字正是由此而来，可见这是 CDN 的核心价值。目前主要有以下两种主流的内容分发方式：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("主动分发")]),t._v("（Push）：分发由源站主动发起，将内容从源站或者其他资源库推送到用户边缘的各个 CDN 缓存节点上。这个推送的操作没有什么业界标准可循，可以采用任何传输方式（HTTP、FTP、P2P，等等）、任何推送策略（满足特定条件、定时、人工，等等）、任何推送时间，只要与后面说的更新策略相匹配即可。由于主动分发通常需要源站、CDN 服务双方提供程序 API 接层面的配合，所以它对源站并不是透明的，只对用户一侧单向透明。主动分发一般用于网站要预载大量资源的场景。譬如双十一之前一段时间内，淘宝、京东等各个网络商城就会开始把未来活动中所需用到的资源推送到 CDN 缓存节点中，特别常用的资源甚至会直接缓存到你的手机 APP 的存储空间或者浏览器的"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Web_storage#localStorage",target:"_blank",rel:"noopener noreferrer"}},[t._v("localStorage"),e("OutboundLink")],1),t._v("上。")]),t._v(" "),e("li",[e("strong",[t._v("被动回源")]),t._v("（Pull）：被动回源由用户访问所触发全自动、双向透明的资源缓存过程。当某个资源首次被用户请求的时候，CDN 缓存节点发现自己没有该资源，就会实时从源站中获取，这时资源的响应时间可粗略认为是资源从源站到 CDN 缓存节点的时间，再加上资源从 CDN 发送到用户的时间之和。因此，被动回源的首次访问通常是比较慢的（但由于 CDN 的网络条件一般远高于普通用户，并不一定就会比用户直接访问源站更慢），不适合应用于数据量较大的资源。被动回源的优点是可以做到完全的双向透明，不需要源站在程序上做任何的配合，使用起来非常方便。这种分发方式是小型站点使用 CDN 服务的主流选择，如果不是自建 CDN，而是购买阿里云、腾讯云的 CDN 服务的站点，多数采用的就是这种方式。")])]),t._v(" "),e("p",[t._v("对于“CDN 如何管理（更新）资源”这个问题，同样没有统一的标准可言，尽管在 HTTP 协议中，关于缓存的 Header 定义中确实是有对 CDN 这类共享缓存的一些指引性参数，譬如"),e("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/diversion-system/client-cache.html#强制缓存"}},[t._v("Cache-Control")]),t._v("的 s-maxage，但是否要遵循，完全取决于 CDN 本身的实现策略。更令人感到无奈的是，由于大多数网站的开发和运维人员并不十分了解 HTTP 缓存机制，所以导致如果 CDN 完全照着 HTTP Headers 来控制缓存失效和更新，效果反而会相当的差，还可能引发其他问题。因此，CDN 缓存的管理就不存在通用的准则。")],1),t._v(" "),e("p",[t._v("现在，最常见的做法是超时被动失效与手工主动失效相结合。超时失效是指给予缓存资源一定的生存期，超过了生存期就在下次请求时重新被动回源一次。而手工失效是指 CDN 服务商一般会提供给程序调用来失效缓存的接口，在网站更新时，由持续集成的流水线自动调用该接口来实现缓存更新，譬如“"),e("code",[t._v("icyfenix.cn")]),t._v("”就是依靠"),e("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis-CI"),e("OutboundLink")],1),t._v("的持续集成服务来触发 CDN 失效和重新预热的。")]),t._v(" "),e("h2",{attrs:{id:"cdn-应用"}},[t._v("CDN 应用")]),t._v(" "),e("p",[t._v("内容分发网络最初是为了快速分发静态资源而设计的，但今天的 CDN 所能做的事情已经远远超越了开始建设时的目标，这部分应用太多，无法展开逐一细说，笔者只能对现在 CDN 可以做的事情简要列举，以便读者有个总体认知。")]),t._v(" "),e("ul",[e("li",[t._v("加速静态资源：这是 CDN 本职工作。")]),t._v(" "),e("li",[t._v("安全防御：CDN 在广义上可以视作网站的堡垒机，源站只对 CDN 提供服务，由 CDN 来对外界其他用户服务，这样恶意攻击者就不容易直接威胁源站。CDN 对某些攻击手段的防御，如对"),e("a",{attrs:{href:"https://zh.wikipedia.org/zh-tw/%E9%98%BB%E6%96%B7%E6%9C%8D%E5%8B%99%E6%94%BB%E6%93%8A",target:"_blank",rel:"noopener noreferrer"}},[t._v("DDoS 攻击"),e("OutboundLink")],1),t._v("的防御尤其有效。但需注意，将安全都寄托在 CDN 上本身是不安全的，一旦源站真实 IP 被泄漏，就会面临很高的风险。")]),t._v(" "),e("li",[t._v("协议升级：不少 CDN 提供商都同时对接（代售 CA 的）SSL 证书服务，可以实现源站是 HTTP 协议的，而对外开放的网站是基于 HTTPS 的。同理，可以实现源站到 CDN 是 HTTP/1.x 协议，CDN 提供的外部服务是 HTTP/2 或 HTTP/3 协议、实现源站是基于 IPv4 网络的，CDN 提供的外部服务支持 IPv6 网络，等等。")]),t._v(" "),e("li",[t._v("状态缓存：第一节介绍客户端缓存时简要提到了状态缓存，CDN 不仅可以缓存源站的资源，还可以缓存源站的状态，譬如源站的 301/302 转向就可以缓存起来让客户端直接跳转、还可以通过 CDN 开启"),e("a",{attrs:{href:"https://es.wikipedia.org/wiki/HTTP_Strict_Transport_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("HSTS"),e("OutboundLink")],1),t._v("、可以通过 CDN 进行"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/OCSP%E8%A3%85%E8%AE%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("OCSP 装订"),e("OutboundLink")],1),t._v("加速 SSL 证书访问，等等。有一些情况下甚至可以配置 CDN 对任意状态码（譬如 404）进行一定时间的缓存，以减轻源站压力，但这个操作应当慎重，在网站状态发生改变时去及时刷新缓存。")]),t._v(" "),e("li",[t._v("修改资源：CDN 可以在返回资源给用户的时候修改它的任何内容，以实现不同的目的。譬如，可以对源站未压缩的资源自动压缩并修改 Content-Encoding，以节省用户的网络带宽消耗、可以对源站未启用客户端缓存的内容加上缓存 Header，自动启用客户端缓存，可以修改"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),e("OutboundLink")],1),t._v("的相关 Header，将源站不支持跨域的资源提供跨域能力，等等。")]),t._v(" "),e("li",[t._v("访问控制：CDN 可以实现 IP 黑/白名单功能，根据不同的来访 IP 提供不同的响应结果，根据 IP 的访问流量来实现 QoS 控制、根据 HTTP 的 Referer 来实现防盗链，等等。")]),t._v(" "),e("li",[t._v("注入功能：CDN 可以在不修改源站代码的前提下，为源站注入各种功能，为源站注入各种功能，图 4-7 是国际 CDN 巨头 CloudFlare 提供的 Google Analytics、PACE、Hardenize 等第三方应用，在 CDN 下均能做到无须修改源站任何代码即可使用。"),e("div",{staticClass:"custom-block center"},[e("p",[e("img",{attrs:{src:s(416),alt:""}}),t._v("\n图 4-7 CloudFlare 提供的第三方应用")])])]),t._v(" "),e("li",[t._v("绕过某些“不存在的”网络措施，这也是在国内申请 CDN 也必须实名备案的原因，就不细说了。")]),t._v(" "),e("li",[t._v("…………")])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);