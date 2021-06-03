(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{435:function(e,r,t){e.exports=t.p+"assets/img/coresystem.f46f7c00.png"},436:function(e,r,t){e.exports=t.p+"assets/img/eventbus.a0c12890.png"},614:function(e,r,t){"use strict";t.r(r);var n=t(11),i=Object(n.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"soa-时代"}},[e._v("SOA 时代")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("SOA 架构（Service-Oriented Architecture）")]),e._v(" "),n("p",[e._v("面向服务的架构是一次具体地、系统性地成功解决分布式服务主要问题的架构模式。")])]),e._v(" "),n("p",[e._v("为了对大型的单体系统进行拆分，让每一个子系统都能独立地部署、运行、更新，开发者们曾经尝试过多种方案，这里列举以下三种较有代表性的架构模式，具体如下。")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Information_silo",target:"_blank",rel:"noopener noreferrer"}},[e._v("烟囱式架构"),n("OutboundLink")],1),e._v("（Information Silo Architecture）：信息烟囱又名信息孤岛（Information Island），使用这种架构的系统也被称为孤岛式信息系统或者烟囱式信息系统。它指的是一种完全不与其他相关信息系统进行互操作或者协调工作的设计模式。这样的系统其实并没有什么“架构设计”可言。接着上一节中企业与部门的例子来说，如果两个部门真的完全不会发生任何交互，就并没有什么理由强迫它们必须在一栋楼里办公；两个不发生交互的信息系统，让它们使用独立的数据库和服务器即可实现拆分，而唯一的问题，也是致命的问题是，企业中真的存在完全不发生交互的部门吗？对于两个信息系统来说，哪怕真的毫无业务往来关系，但系统的人员、组织、权限等主数据，会是完全独立、没有任何重叠的吗？这样“独立拆分”“老死不相往来”的系统，显然不可能是企业所希望见到的。")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Microkernel",target:"_blank",rel:"noopener noreferrer"}},[e._v("微内核架构"),n("OutboundLink")],1),e._v("（Microkernel Architecture）：微内核架构也被称为插件式架构（Plug-in Architecture）。既然在烟囱式架构中，没有业务往来关系的系统也可能需要共享人员、组织、权限等一些的公共的主数据，那不妨就将这些主数据，连同其他可能被各子系统使用到的公共服务、数据、资源集中到一块，成为一个被所有业务系统共同依赖的核心（Kernel，也称为 Core System），具体的业务系统以插件模块（Plug-in Modules）的形式存在，这样也可提供可扩展的、灵活的、天然隔离的功能特性，即微内核架构，如图 1-2 所示。"),n("br"),e._v("这种模式很适合桌面应用程序，也经常在 Web 应用程序中使用。任何计算机系统都是由各种软件互相配合工作来实现具体功能的，本节列举的不同架构实现的软件，都可视作整个系统的某种插件。对于平台型应用来说，如果我们希望将新特性或者新功能及时加入系统，微内核架构会是一种不错的方案。微内核架构也可以嵌入到其他的架构模式之中，通过插件的方式来提供新功能的定制开发能力，如果你准备实现一个能够支持二次开发的软件系统，微内核也会是一种良好的选择。"),n("br"),e._v("不过，微内核架构也有它的局限和使用前提，它假设系统中各个插件模块之间是互不认识，不可预知系统将安装哪些模块，因此这些插件可以访问内核中一些公共的资源，但不会直接交互。可是，无论是企业信息系统还是互联网应用，这一前提假设在许多场景中都并不成立，我们必须找到办法，既能拆分出独立的系统，也能让拆分后的子系统之间顺畅地互相调用通信。")])]),e._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:t(435),alt:""}}),e._v("\n图 1-2 微内核架构示意"),n("br"),e._v("\n图片来自 O'Reilly 的开放文档《"),n("a",{attrs:{href:"https://www.oreilly.com/programming/free/files/software-architecture-patterns.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software Architecture Patterns"),n("OutboundLink")],1),e._v("》")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Event-driven_architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("事件驱动架构"),n("OutboundLink")],1),e._v("（Event-Driven Architecture）：为了能让子系统互相通信，一种可行的方案是在子系统之间建立一套事件队列管道（Event Queues），来自系统外部的消息将以事件的形式发送至管道中，各个子系统从管道里获取自己感兴趣、能够处理的事件消息，也可以为事件新增或者修改其中的附加信息，甚至可以自己发布一些新的事件到管道队列中去，如此，每一个消息的处理者都是独立的，高度解耦的，但又能与其他处理者（如果存在该消息处理者的话）通过事件管道进行互动，如图 1-3 所示。")])]),e._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:t(436),alt:""}}),e._v("\n图 1-3 事件驱动架构示意"),n("br"),e._v("\n图片来自 O'Reilly 的开放文档《"),n("a",{attrs:{href:"https://www.oreilly.com/programming/free/files/software-architecture-patterns.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software Architecture Patterns"),n("OutboundLink")],1),e._v("》")])]),e._v(" "),n("p",[e._v("当系统演化至事件驱动架构时，"),n("RouterLink",{attrs:{to:"/architecture/architect-history/primitive-distribution.html"}},[e._v("原始分布式时代")]),e._v("结尾中提到的第二条通往更大规模软件的路径，即仍在并行发展的远程服务调用也迎来了 SOAP 协议的诞生（详见"),n("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/api-style/rpc.html"}},[e._v("远程服务调用")]),e._v("一文），此时“面向服务的架构”（Service Oriented Architecture，SOA）已经有了它登上软件架构舞台所需要的全部前置条件。")],1),e._v(" "),n("p",[e._v("SOA 的概念最早由 Gartner 公司在 1994 年提出，当时的 SOA 还不具备发展的条件，直至 2006 年情况才有所变化，由 IBM、Oracle、SAP 等公司共同成立了 OSOA 联盟（Open Service Oriented Architecture），用于联合制定和推进 SOA 相关行业标准。2007 年，在"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/OASIS_(organization)",target:"_blank",rel:"noopener noreferrer"}},[e._v("结构化资讯标准促进组织"),n("OutboundLink")],1),e._v("（Organization for the Advancement of Structured Information Standards，OASIS）的倡议与支持下，OSOA 由一个软件厂商组成的松散联盟，转变为一个制定行业标准的国际组织，联合 OASIS 共同新成立了的"),n("a",{attrs:{href:"http://www.oasis-opencsa.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open CSA"),n("OutboundLink")],1),e._v("组织（Open Composite Services Architecture），这便是 SOA 的官方管理机构。")]),e._v(" "),n("p",[e._v("软件架构来到 SOA 时代，许多概念、思想都已经能在今天微服务中找到对应的身影了，譬如服务之间的松散耦合、注册、发现、治理，隔离、编排，等等。这些在今天微服务中耳熟能详的名词概念，大多数也是在分布式服务刚被提出时就已经可以预见的困难点。SOA 针对这些问题，甚至是针对“软件开发”这件事情本身，都进行了更加系统性、更加具体的探索。")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("“更具体”体现在尽管 SOA 本身还是属抽象概念，而不是特指某一种具体的技术，但它比单体架构和前面所列举的三种架构模式的操作性要更强，已经不能简单视其为一种架构风格，而是可以称为一套软件设计的基础平台了。它拥有领导制定技术标准的组织 Open CSA；有清晰软件设计的指导原则，譬如服务的封装性、自治、松耦合、可重用、可组合、无状态，等等；明确了采用 SOAP 作为远程调用的协议，依靠 SOAP 协议族（WSDL、UDDI 和一大票 WS-*协议）来完成服务的发布、发现和治理；利用一个被称为"),n("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E4%BC%81%E4%B8%9A%E6%9C%8D%E5%8A%A1%E6%80%BB%E7%BA%BF",target:"_blank",rel:"noopener noreferrer"}},[e._v("企业服务总线"),n("OutboundLink")],1),e._v("（Enterprise Service Bus，ESB）的消息管道来实现各个子系统之间的通信交互，令各服务间在 ESB 调度下无须相互依赖却能相互通信，既带来了服务松耦合的好处，也为以后可以进一步实施"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%9A%E5%8A%A1%E6%B5%81%E7%A8%8B%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[e._v("业务流程编排"),n("OutboundLink")],1),e._v("（Business Process Management，BPM）提供了基础；使用"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务数据对象"),n("OutboundLink")],1),e._v("（Service Data Object，SDO）来访问和表示数据，使用"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E7%BB%84%E4%BB%B6%E6%9E%B6%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务组件架构"),n("OutboundLink")],1),e._v("（Service Component Architecture，SCA）来定义服务封装的形式和服务运行的容器，等等。在这一整套成体系可以互相精密协作的技术组件支持下，若仅从技术可行性这一个角度来评判的话，SOA 可以算是成功地解决了分布式环境下出现的主要技术问题。")])]),e._v(" "),n("li",[n("p",[e._v("“更系统”指的是 SOA 的宏大理想，它的终极目标是希望总结出一套自上而下的软件研发方法论，希望做到企业只需要跟着 SOA 的思路，就能够一揽子解决掉软件开发过程中的全部问题，譬如该如何挖掘需求、如何将需求分解为业务能力、如何编排已有服务、如何开发测试部署新的功能，等等。这里面技术问题确实是重点和难点，但也仅仅是其中的一个方面，SOA 不仅关注技术，还关注研发过程中涉及到的需求、管理、流程和组织。如果这个目标真的能够达成，软件开发就有可能从此迈进工业化大生产的阶段，试想如果有一天写出符合客户需求的软件会像写八股文一样有迹可循、有法可依，那对软件开发者来说也许是无趣的，但整个社会实施信息化的效率肯定会有大幅的提升。")])])]),e._v(" "),n("p",[e._v("SOA 在 21 世纪最初的十年里曾经盛行一时，有 IBM 等一众行业巨头厂商为其呐喊冲锋，吸引了不少软件开发商、尤其是企业级软件的开发商的跟随，最终却还是偃旗息鼓，沉寂了下去。在稍后的"),n("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/api-style/rpc.html"}},[e._v("远程服务调用")]),e._v("一节，笔者会提到 SOAP 协议被逐渐边缘化的本质原因：过于严格的规范定义带来过度的复杂性。而构建在 SOAP 基础之上的 ESB、BPM、SCA、SDO 等诸多上层建筑，进一步加剧了这种复杂性。开发信息系统毕竟不是作八股文章，过于精密的流程和理论也需要懂得复杂概念的专业人员才能够驾驭。SOA 诞生的那一天起，就已经注定了它只能是少数系统阳春白雪式的精致奢侈品，它可以实现多个异构大型系统之间的复杂集成交互，却很难作为一种具有广泛普适性的软件架构风格来推广。SOA 最终没有获得成功的致命伤与当年的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/EJB",target:"_blank",rel:"noopener noreferrer"}},[e._v("EJB"),n("OutboundLink")],1),e._v("如出一辙，尽管有 Sun Microsystems 和 IBM 等一众巨头在背后力挺，EJB 仍然败于以 Spring、Hibernate 为代表的“草根框架”，可见一旦脱离人民群众，终究会淹没在群众的海洋之中，连信息技术也不曾例外过。")],1),e._v(" "),n("p",[e._v("读到这里，你不妨回想下“如何使用多个独立的分布式服务共同构建一个更大型系统”这个问题，再回想下“原始分布式时代”一节中 Unix DCE 提出的分布式服务的设计主旨：“让开发人员不必关心服务是远程还是本地，都能够透明地调用服务或者访问资源”。经过了三十年的技术进步，信息系统经历了巨石、烟囱、插件、事件、SOA 等的架构模式，应用受架构复杂度的牵绊却是越来越大，已经距离“透明”二字越来越远了，这是否算不自觉间忘记掉了当年的初心？接下来我们所谈论的微服务时代，似乎正是带着这样的自省式的问句而开启的。")])])}),[],!1,null,null,null);r.default=i.exports}}]);