(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{591:function(t,e,r){"use strict";r.r(e);var n=r(11),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"授权"}},[t._v("授权")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("授权（ Authorization）")]),t._v(" "),r("p",[t._v("系统如何控制一个用户该看到哪些数据、能操作哪些功能？")])]),t._v(" "),r("p",[t._v("授权这个概念通常伴随着认证、审计、账号一同出现，并称为 AAAA（Authentication、Authorization、Audit、Account，也有一些领域把 Account 解释为计费的意思）。授权行为在程序中的应用非常广泛，给某个类或某个方法设置范围控制符（public、protected、private、<Package>）在本质上也是一种授权（访问控制）行为。而在安全领域中所说的授权就更具体一些，通常涉及以下两个相对独立的问题：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("确保授权的过程可靠")]),t._v("：对于单一系统来说，授权的过程是比较容易做到可控的，以前很多语境上提到授权，实质上讲的都是访问控制，理论上两者是应该分开的。而在涉及多方的系统中，授权过程则是一个比较困难却必须严肃对待的问题：如何既让第三方系统能够访问到所需的资源，又能保证其不泄露用户的敏感数据呢？常用的多方授权协议主要有 OAuth2 和 SAML 2.0（两个协议涵盖的功能并不是直接对等的）。")]),t._v(" "),r("li",[r("strong",[t._v("确保授权的结果可控")]),t._v("：授权的结果用于对程序功能或者资源的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Access-control_list",target:"_blank",rel:"noopener noreferrer"}},[t._v("访问控制"),r("OutboundLink")],1),t._v("（Access Control），成理论体系的权限控制模型有很多，譬如"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Discretionary_access_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("自主访问控制"),r("OutboundLink")],1),t._v("（Discretionary Access Control，DAC）、"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mandatory_access_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("强制访问控制"),r("OutboundLink")],1),t._v("（Mandatory Access Control，MAC）、"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Attribute-based_access_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于属性的访问控制"),r("OutboundLink")],1),t._v("（Attribute-Based Access Control，ABAC），还有最为常用的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Role-based_access_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于角色的访问控制"),r("OutboundLink")],1),t._v("（Role-Based Access Control，RBAC）。")])]),t._v(" "),r("p",[t._v("由于篇幅原因，在这一节里我们只介绍 Fenix's Bookstore 的代码中直接使用到的，也是日常开发中最常用到的 RBAC 和 OAuth2 这两种访问控制和授权方案。")]),t._v(" "),r("h2",{attrs:{id:"rbac"}},[t._v("RBAC")]),t._v(" "),r("p",[t._v("所有的访问控制模型，实质上都是在解决同一个问题：“"),r("strong",[t._v("谁")]),t._v("（User）拥有什么"),r("strong",[t._v("权限")]),t._v("（Authority）去"),r("strong",[t._v("操作")]),t._v("（Operation）哪些"),r("strong",[t._v("资源")]),t._v("（Resource）”。")]),t._v(" "),r("p",[t._v("这个问题初看起来并不难，一种直观的解决方案就是在用户对象上设定一些权限，当用户使用资源时，检查是否有对应的操作权限即可。很多著名的安全框架，譬如 Spring Security 的访问控制本质上就是支持这么做的。不过，这种把权限直接关联在用户身上的简单设计，在复杂系统上确实会导致一些比较烦琐的问题。试想一下，如果某个系统涉及到成百上千的资源，又有成千上万的用户，一旦两者搅合到一起，要为每个用户访问每个资源都分配合适的权限，必定导致巨大的操作量和极高的出错概率，这也正是 RBAC 所关注的问题之一。")]),t._v(" "),r("p",[t._v("RBAC 模型在业界中有多种说法，其中以美国 George Mason 大学信息安全技术实验室提出的 RBAC96 模型最具有系统性，得到普遍的认可。为了避免对每一个用户设定权限，RBAC 将权限从用户身上剥离，改为绑定到“"),r("strong",[t._v("角色")]),t._v("”（Role）上，将权限控制变为对“"),r("strong",[t._v("角色")]),t._v("拥有操作哪些"),r("strong",[t._v("资源")]),t._v("的"),r("strong",[t._v("许可")]),t._v("”这个逻辑表达式的值是否为真的求解过程。RBAC 的主要元素的关系可以图 5-5 来表示。")]),t._v(" "),r("mermaid",[t._v('\ngraph LR\n    User("用户（User）") --隶属--\x3e Role("角色（Role）") \n    Role --拥有--\x3ePermission("许可（Permission）") \n    Permission --操作--\x3eResource("资源（Resource）") \n')]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-5 RBAC 的主要元素的关系示意图")])]),t._v(" "),r("p",[t._v("图 5-5 中出现了一个新的名词“"),r("strong",[t._v("许可")]),t._v("”（Permission）。许可是抽象权限的具象化体现，权限在 RBAC 系统中的含义是“允许何种"),r("strong",[t._v("操作")]),t._v("作用于哪些"),r("strong",[t._v("资源")]),t._v("之上”，这句话的具体实例即为“许可”。提出许可这个概念的目的其实与提出角色的目的是完全一致的，只是更为抽象。角色为的是解耦用户与权限之间的多对多关系，而许可为的是解耦操作与资源之间的多对多关系，譬如不同的数据都能够有增、删、改等操作，如果将数据与操作搅和在一起也会面临配置膨胀问题。这里举个更具体的例子帮助你理清众多名词之间的关系，譬如某个论文管理系统的 UserStory 中，与访问控制相关的 Backlog 可能会是这样描述的：")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Backlog")]),t._v("：")]),t._v(" "),r("p",[r("strong",[t._v("周同学")]),t._v("（User）是某 SCI 杂志的"),r("strong",[t._v("审稿人")]),t._v("（Role），职责之一是在系统中"),r("strong",[t._v("审核论文")]),t._v("（Authority）。在"),r("strong",[t._v("审稿过程")]),t._v("（Session）中，当他认为某篇"),r("strong",[t._v("论文")]),t._v("（Resource）达到了可以公开发表标准时，就会在后台"),r("strong",[t._v("点击通过按钮")]),t._v("（Operation）来完成审核。")])]),t._v(" "),r("p",[t._v("以上 Backlog 中“给论文点击通过按钮”就是一种许可，它是“审核论文”这项权限的具象化体现。")]),t._v(" "),r("p",[t._v("采用 RBAC 不仅是为了简化配置操作，还天然地满足了计算机安全中的“"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege",target:"_blank",rel:"noopener noreferrer"}},[t._v("最小特权原则"),r("OutboundLink")],1),t._v("”（Least Privilege）。在 RBAC 模型中，角色拥有许可的数量是根据完成该角色工作职责所需的最小权限来赋予的，最典型例子是操作系统权限管理中的用户组，根据对不同角色的职责分工，如管理员（Administrator）、系统用户（System）、验证用户（Authenticated Users）、普通用户（Users）、来宾用户（Guests）等分配各自的权限，既保证用户能够正常工作，也避免用户出现越权操作的风险。当用户的职责发生变化时，在系统中就体现为它所隶属的角色被改变，譬如将“普通用户角色”改变“管理员角色”，就可以迅速让该用户具备管理员的多个细分权限，降低权限分配错误的风险。")]),t._v(" "),r("p",[t._v("RBAC 还允许对不同角色之间定义关联与约束，进一步强化它的抽象描述能力。如不同的角色之间可以有继承性，典型的是 RBAC-1 模型的角色权限继承关系。譬如描述开发经理应该和开发人员一样具有代码提交的权限，描述开发人员都应该和任何公司员工一样具有食堂就餐的权限，就可以直接将食堂就餐赋予公司员工的角色上，把代码提交赋予到开发人员的角色上，再让开发人员的角色从公司员工派生，开发经理的角色从开发人员中派生即可。")]),t._v(" "),r("p",[t._v("不同角色之间也可以具有互斥性，典型的是 RBAC-2 模型的角色职责分离关系。互斥性要求权限被赋予角色时，或角色被赋予用户时应遵循的强制性职责分离规定。举个例子，角色的互斥约束可限制同一用户只能分配到一组互斥角色集合中至多一个角色，譬如不能让同一名员工既当会计，也当出纳，否则资金安全无法保证。角色的基数约束可限制某一个用户拥有的最大角色数目，譬如不能让同一名员工从产品、设计、开发、测试全部包揽，否则产品质量无法保证。")]),t._v(" "),r("p",[t._v("建立访问控制模型的基本目的是为了管理垂直权限和水平权限。垂直权限即功能权限，譬如前面提到的审稿编辑有通过审核的权限、开发经理有代码提交的权限、出纳有从账户提取资金的权限，这一类某个角色完成某项操作的许可，都可以直接翻译为功能权限。由于实际应用与权限模型具有高度对应关系，将权限从具体的应用中抽离出来，放到通用的模型中是相对容易的，Spring Security、Apache Shiro 等权限框架就是这样的抽象产物，大多数系统都能采用这些权限框架来管理功能权限。")]),t._v(" "),r("p",[t._v("与此相对，水平权限即数据权限管理起来则要困难许多。譬如用户 A、B 都属于同一个角色，但它们各自在系统中产生的数据完全有可能是私有的，A 访问或删除了 B 的数据也照样属于越权。一般来说，数据权限是很难抽象与通用的，仅在角色层面控制并不能满足全部业务的需要，很多时候只能具体到用户，甚至要具体管理到发生数据的某一行、某一列之上，因此数据权限基本只能由信息系统自主来来完成，并不存在能放之四海皆准的通用数据权限框架。")]),t._v(" "),r("p",[t._v("本书后面章节中的“重要角色”Kubernetes 完全遵循 RBAC 了来进行服务访问控制，Fenix's Bookstore 所使用的 Spring Security 也参考了（但并没有完全遵循）RBAC 来设计它的访问控制功能。Spring Security 的设计里，用户和角色都可以拥有权限，譬如在它的 HttpSecurity 接口就同时有着 hasRole()和 hasAuthority()方法，可能刚接触的程序员会疑惑，混淆它们之间的关系。Spring Security 的访问控制模型如图 5-6 所示，可与前面 RBAC 的关系图对比一下。")]),t._v(" "),r("mermaid",[t._v('\ngraph LR\n    User("用户（User）") --隶属--\x3e Role("角色（Role）") \n    User --赋予--\x3e Authority("权限（Authority）")\n    Role --拥有--\x3ePermission("许可（Permission）") \n    Authority --拥有--\x3e Permission\n    Permission --操作--\x3eResource("资源（Resource）") \n')]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-6 Spring Security 的访问控制模型")])]),t._v(" "),r("p",[t._v("从实现角度来看，Spring Security 中的 Role 和 Authority 的差异很小，它们完全共享同一套存储结构，唯一的差别仅是 Role 会在存储时自动带上“ROLE_”前缀罢了。但从使用角度来看，Role 和 Authority 的差异可以很大，用户可以自行决定系统中到底 Permission 只能对应到角色身上，还是可以让用户也拥有某些角色中没有的权限。这一点不符合 RBAC 的思想，但笔者个人认同这是一种创新而非破坏，在 Spring Security 的文档上说的很清楚：这取决于你自己如何使用。")]),t._v(" "),r("blockquote",[r("p",[t._v("The core difference between these two（注：指 Role 和 Authority） is the semantics we attach to how we use the feature. For the framework, the difference is minimal – and it basically deals with these in exactly the same way.")]),t._v(" "),r("p",[t._v("Role 和 Authority 的核心差异取决于用户打算如何使用这些特性，在框架层面它们的差别是极小的，基本采用了完全相同的方式来进行处理。")])]),t._v(" "),r("p",[t._v("通过 RBAC 很容易控制最终用户在广义和精细级别上能够做什么，可以指定用户是管理员、专家用户抑或普通用户，并使角色和访问权限与组织中员工的身份职位保持一致，仅根据需要为员工完成工作的最低限度来分配权限。这些都是大量软件系统、长时间积累下来的经验，将这些经验运用在软件产品上，绝大多数情况下要比自己发明创造一个新的轮子更加安全。")]),t._v(" "),r("h2",{attrs:{id:"oauth2"}},[t._v("OAuth2")]),t._v(" "),r("p",[t._v("了解过 RBAC 的内容后，下面我们再来看看相对更复杂烦琐的 OAuth2 认证授权协议（更烦琐的 OAuth1 已经完全被废弃了）。OAuth2 是在"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc6749",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 6749"),r("OutboundLink")],1),t._v("中定义的国际标准，在 RFC 6749 正文的第一句就阐明了 OAuth2 是"),r("strong",[t._v("面向于解决第三方应用")]),t._v("（Third-Party Application）的认证授权协议。如果你的系统并不涉及第三方，譬如我们单体架构的 Fenix's Bookstore 中就既不为第三方提供服务，也不使用第三方的服务，那引入 OAuth2 其实并无必要。为什么强调第三方？在多方系统授权过程具体会有什么问题需要专门制订一个标准协议来解决呢？笔者举个现实的例子来解释。")]),t._v(" "),r("p",[t._v("譬如你现在正在阅读的这个网站（"),r("a",{attrs:{href:"https://icyfenix.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://icyfenix.cn"),r("OutboundLink")],1),t._v("），它的建设和更新大致流程是：笔者以 Markdown 形式写好了某篇文章，上传到由"),r("a",{attrs:{href:"https://github.com/fenixsoft/awesome-fenix",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 提供的代码仓库"),r("OutboundLink")],1),t._v("，接着由"),r("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis-CI"),r("OutboundLink")],1),t._v("提供的持续集成服务会检测到该仓库发生了变化，触发一次 Vuepress 编译活动，生成目录和静态的 HTML 页面，然后推送回"),r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),r("OutboundLink")],1),t._v("，再触发国内的 CDN 缓存刷新。这个过程要能顺利进行，就存在一系列必须解决的授权问题，Travis-CI 只有得到了我的明确授权，GitHub 才能同意它读取我代码仓库中的内容，问题是它该如何获得我的授权呢？一种最简单粗暴的方案是把我的用户账号和密码都告诉 Travis-CI，但这显然导致了以下这些问题：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("密码泄漏")]),t._v("：如果 Travis-CI 被黑客攻破，将导致我的 GitHub 的密码也同时被泄漏。")]),t._v(" "),r("li",[r("strong",[t._v("访问范围")]),t._v("：Travis-CI 将有能力读取、修改、删除、更新我放在 GitHub 上的所有代码仓库，而我并不希望它能够修改删除文件。")]),t._v(" "),r("li",[r("strong",[t._v("授权回收")]),t._v("：只有修改密码才能回收我授予给 Travis-CI 的权力，可是我在 GitHub 的密码只有一个，授权的应用除了 Travis-CI 之外却还有许多，修改了意味着所有别的第三方的应用程序会全部失效。")])]),t._v(" "),r("p",[t._v("以上列举的这些问题，也正是 OAuth2 所要解决的问题，尤其是要求第三方系统没有支持 HTTPS 传输安全的环境下依然能够解决这些问题，这并非易事。")]),t._v(" "),r("p",[t._v("OAuth2 给出了多种解决办法，这些办法的共同特征是以令牌（Token）代替用户密码作为授权的凭证。有了令牌之后，哪怕令牌被泄漏，也不会导致密码的泄漏；令牌上可以设定访问资源的范围以及时效性；每个应用都持有独立的令牌，哪个失效都不会波及其他。这样上面提出的三个问题就都解决了。有了一层令牌之后，整个授权的流程如图 5-7 所示。")]),t._v(" "),r("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n    第三方应用->>+资源所有者: 要求用户给予授权\n    资源所有者--\x3e>-第三方应用: 同意给予该应用授权\n    第三方应用->>+授权服务器: 我有用户授权，申请访问令牌\n    授权服务器--\x3e>-第三方应用: 同意发放访问令牌\n    第三方应用->>+资源服务器: 我有访问令牌，申请开放资源\n    资源服务器--\x3e>-第三方应用: 同意开放资源\n")]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-7 加令牌后的授权流程示意图")])]),t._v(" "),r("p",[t._v("这个时序图里面涉及到了 OAuth2 中几个关键术语，我们通过前面那个具体的上下文语境来解释其含义，这对理解后续几种认证流程十分重要：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("第三方应用")]),t._v("（Third-Party Application）：需要得到授权访问我资源的那个应用，即此场景中的“Travis-CI”。")]),t._v(" "),r("li",[r("strong",[t._v("授权服务器")]),t._v("（Authorization Server）：能够根据我的意愿提供授权（授权之前肯定已经进行了必要的认证过程，但它与授权可以没有直接关系）的服务器，即此场景中的“GitHub”。")]),t._v(" "),r("li",[r("strong",[t._v("资源服务器")]),t._v("（Resource Server）：能够提供第三方应用所需资源的服务器，它与认证服务可以是相同的服务器，也可以是不同的服务器，此场景中的“我的代码仓库”。")]),t._v(" "),r("li",[r("strong",[t._v("资源所有者")]),t._v("（Resource Owner）： 拥有授权权限的人，即此场景中的“我”。")]),t._v(" "),r("li",[r("strong",[t._v("操作代理")]),t._v("（User Agent）：指用户用来访问服务器的工具，对于人类用户来说，这个通常是指浏览器，但在微服务中一个服务经常会作为另一个服务的用户，此时指的可能就是 HttpClient、RPCClient 或者其他访问途径。")])]),t._v(" "),r("p",[t._v("“用令牌代替密码”确实是解决问题的好方法，但这充其量只能算个思路，距离可实施的步骤还是不够具体的，时序图中的“要求/同意授权”、“要求/同意发放令牌”、“要求/同意开放资源”几个服务请求、响应该如何设计，这就是执行步骤的关键了。对此，OAuth2 一共提出了四种不同的授权方式（这也是 OAuth2 复杂烦琐的主要原因），分别为：")]),t._v(" "),r("ul",[r("li",[t._v("授权码模式（Authorization Code）")]),t._v(" "),r("li",[t._v("隐式授权模式（Implicit）")]),t._v(" "),r("li",[t._v("密码模式（Resource Owner Password Credentials）")]),t._v(" "),r("li",[t._v("客户端模式（Client Credentials）")])]),t._v(" "),r("h3",{attrs:{id:"授权码模式"}},[t._v("授权码模式")]),t._v(" "),r("p",[t._v("授权码模式是四种模式中最严（luō）谨（suō）的，它考虑到了几乎所有敏感信息泄漏的预防和后果。具体步骤的时序如图 5-8 所示。")]),t._v(" "),r("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n\t资源所有者 ->> 操作代理: 通过操作代理访问应用\n\t操作代理 ->> 第三方应用: 遇到需要使用的资源\n\t第三方应用 ->> 授权服务器: 转向授权服务器的授权页面\n\t资源所有者 ->>+ 授权服务器: 认证身份，同意授权\n\t授权服务器 --\x3e>- 操作代理: 返回第三方应用的回调地址，附带授权码\n\t操作代理 ->> 第三方应用: 转向回调地址\n\t第三方应用 ->>+ 授权服务器: 将授权码发回给授权服务器，换取访问令牌\n\t授权服务器 --\x3e>- 第三方应用: 给予访问令牌\n\topt  资源访问过程 \n\t\t第三方应用 ->>+ 资源服务器: 提供访问令牌\n\t\t资源服务器 --\x3e>- 第三方应用: 提供返回资源\n\t\t第三方应用 --\x3e> 资源所有者: 返回对资源的处理给用户\n\tend\n")]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-8 授权码模式的调用时序图")])]),t._v(" "),r("p",[t._v("开始进行授权过程以前，第三方应用先要到授权服务器上进行注册，所谓注册，是指向认证服务器提供一个域名地址，然后从授权服务器中获取 ClientID 和 ClientSecret，以便能够顺利完成如下授权过程：")]),t._v(" "),r("ol",[r("li",[t._v("第三方应用将资源所有者（用户）导向授权服务器的授权页面，并向授权服务器提供 ClientID 及用户同意授权后的回调 URI，这是一次客户端页面转向。")]),t._v(" "),r("li",[t._v("授权服务器根据 ClientID 确认第三方应用的身份，用户在授权服务器中决定是否同意向该身份的应用进行授权，用户认证的过程未定义在此步骤中，在此之前应该已经完成。")]),t._v(" "),r("li",[t._v("如果用户同意授权，授权服务器将转向第三方应用在第 1 步调用中提供的回调 URI，并附带上一个授权码和获取令牌的地址作为参数，这是第二次客户端页面转向。")]),t._v(" "),r("li",[t._v("第三方应用通过回调地址收到授权码，然后将授权码与自己的 ClientSecret 一起作为参数，通过服务器向授权服务器提供的获取令牌的服务地址发起请求，换取令牌。该服务器的地址应与注册时提供的域名处于同一个域中。")]),t._v(" "),r("li",[t._v("授权服务器核对授权码和 ClientSecret，确认无误后，向第三方应用授予令牌。令牌可以是一个或者两个，其中必定要有的是访问令牌（Access Token），可选的是刷新令牌（Refresh Token）。访问令牌用于到资源服务器获取资源，有效期较短，刷新令牌用于在访问令牌失效后重新获取，有效期较长。")]),t._v(" "),r("li",[t._v("资源服务器根据访问令牌所允许的权限，向第三方应用提供资源。")])]),t._v(" "),r("p",[t._v("这个过程设计，已经考虑到了几乎所有合理的意外情况，笔者再举几个最容易遇到的意外状况，以便你能够更好地理解为何要这样设计 OAuth2。")]),t._v(" "),r("ul",[r("li",[t._v("会不会有其他应用冒充第三方应用骗取授权？"),r("br"),t._v("ClientID 代表一个第三方应用的“用户名”，这项信息是可以完全公开的。但 ClientSecret 应当只有应用自己才知道，这个代表了第三方应用的“密码”。在第 5 步发放令牌时，调用者必须能够提供 ClientSecret 才能成功完成。只要第三方应用妥善保管好 ClientSecret，就没有人能够冒充它。")]),t._v(" "),r("li",[t._v("为什么要先发放授权码，再用授权码换令牌？"),r("br"),t._v("这是因为客户端转向（通常就是一次 HTTP 302 重定向）对于用户是可见的，换而言之，授权码可能会暴露给用户以及用户机器上的其他程序，但由于用户并没有 ClientSecret，光有授权码也是无法换取到令牌的，所以避免了令牌在传输转向过程中被泄漏的风险。")]),t._v(" "),r("li",[t._v("为什么要设计一个时限较长的刷新令牌和时限较短的访问令牌？不能直接把访问令牌的时间调长吗？"),r("br"),t._v("这是为了缓解 OAuth2 在实际应用中的一个主要缺陷，通常访问令牌一旦发放，除非超过了令牌中的有效期，否则很难（需要付出较大代价）有其他方式让它失效，所以访问令牌的时效性一般设计的比较短，譬如几个小时，如果还需要继续用，那就定期用刷新令牌去更新，授权服务器就可以在更新过程中决定是否还要继续给予授权。至于为什么说很难让它失效，我们将放到下一节“"),r("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/system-security/credentials.html"}},[t._v("凭证")]),t._v("”中去解释。")],1)]),t._v(" "),r("p",[t._v("尽管授权码模式是严谨的，但是它并不够好用，这不仅仅体现在它那繁复的调用过程上，还体现在它对第三方应用提出了一个“貌似不难”的要求：第三方应用必须有应用服务器，因为第 4 步要发起服务端转向，而且要求服务端的地址必须与注册时提供的地址在同一个域内。不要觉得要求一个系统要有应用服务器是天经地义理所当然的事情，你现在阅读文章的这个网站就没有任何应用服务器的支持，里面使用到了 Gitalk 作为每篇文章的留言板，它对 GitHub 来说照样是第三方应用，需要 OAuth2 授权来解决。除基于浏览器的应用外，现在越来越普遍的是移动或桌面端的客户端 Web 应用（Client-Side Web Applications），譬如现在大量的基于 Cordova、Electron、Node-Webkit.js 的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Progressive_web_application",target:"_blank",rel:"noopener noreferrer"}},[t._v("PWA 应用"),r("OutboundLink")],1),t._v("，它们都没有应用服务器的支持。由于有这样的实际需求，因此引出了 OAuth2 的第二种授权模式：隐式授权。")]),t._v(" "),r("h3",{attrs:{id:"隐式授权模式"}},[t._v("隐式授权模式")]),t._v(" "),r("p",[t._v("隐式授权省略掉了通过授权码换取令牌的步骤，整个授权过程都不需要服务端支持，一步到位。代价是在隐式授权中，授权服务器不会再去验证第三方应用的身份，因为已经没有应用服务器了，ClientSecret 没有人保管，就没有存在的意义了。但其实还是会限制第三方应用的回调 URI 地址必须与注册时提供的域名一致，尽管有可能被 DNS 污染之类的攻击所攻破，但仍算是尽可能努力一下。同样的原因，也不能避免令牌暴露给资源所有者，不能避免用户机器上可能意图不轨的其他程序、HTTP 的中间人攻击等风险了。")]),t._v(" "),r("p",[t._v("隐私授权的调用时序如图 5-9（从此之后的授权模式，时序中笔者就不再画出资源访问部分的内容了，就是前面 opt 框中的那一部分，以便更聚焦重点）所示。")]),t._v(" "),r("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n\t资源所有者 ->> 操作代理: 通过操作代理访问应用\n\t操作代理 ->> 第三方应用: 遇到需要使用的资源\n\t第三方应用 ->> 授权服务器: 转向授权服务器的授权页面\n\t资源所有者 ->> 授权服务器: 认证身份，同意授权\n\t授权服务器 --\x3e> 操作代理: 返回第三方应用的回调地址，通过Fragment附带访问令牌\n\t操作代理 ->> 第三方应用: 转向回调地址，通过脚本提取出Fragment中的令牌\n")]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-9 隐私授权的调用时序图")])]),t._v(" "),r("p",[t._v("在时序图所示的交互过程里，隐式模式与授权码模式的显著区别是授权服务器在得到用户授权后，直接返回了访问令牌，这显著地降低了安全性，但 OAuth2 仍然努力尽可能地做到相对安全，譬如在前面提到的隐私授权中，尽管不需要用到服务端，但仍然需要在注册时提供回调域名，此时会要求该域名与接受令牌的服务处于同一个域内。此外，同样基于安全考虑，在隐私模式中明确禁止发放刷新令牌。")]),t._v(" "),r("p",[t._v("还有一点，在 RFC 6749 对隐式授权的描述中，特别强调了令牌必须是“通过 Fragment 带回”的。部分对超文本协议没有了解的读者，可能还根本不知道"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/URI_fragment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fragment"),r("OutboundLink")],1),t._v("是个什么东西？")]),t._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[t._v("额外知识：Fragment")]),r("p",[t._v("In computer hypertext, a fragment identifier is a string of characters that refers to a resource that is subordinate to another, primary resource. The primary resource is identified by a Uniform Resource Identifier (URI), and the fragment identifier points to the subordinate resource.")]),t._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[t._v("——"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/URI_fragment",target:"_blank",rel:"noopener noreferrer"}},[t._v("URI Fragment"),r("OutboundLink")],1),t._v("，Wikipedia")])])]),r("p",[t._v("看了这段英文定义还是觉得概念不好的话，我简单告诉你，Fragment 就是地址中"),r("code",[t._v("#")]),t._v("号后面的部分，譬如这个地址：")]),t._v(" "),r("blockquote",[r("p",[t._v("http://bookstore.icyfenix.cn/#/detail/1")])]),t._v(" "),r("p",[t._v("后面的"),r("code",[t._v("/detail/1")]),t._v("便是 Fragment，这个语法是在"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc3986",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 3986"),r("OutboundLink")],1),t._v("中定义的，RFC 3986 中解释了 Fragment 是用于客户端定位的 URI 从属资源，譬如 HTML 中就可以使用 Fragment 来做文档内的跳转而不会发起服务端请求，你现在可以点击一下这篇文章左边菜单中的几个子标题，看看浏览器地址栏的变化。此外，RFC 3986 还规定了如果浏览器对一个带有 Fragment 的地址发出 Ajax 请求，那 Fragment 是不会跟随请求被发送到服务端的，只能在客户端通过 Script 脚本来读取。所以隐式授权巧妙地利用这个特性，尽最大努力地避免了令牌从操作代理到第三方服务之间的链路存在被攻击而泄漏出去的可能性。至于认证服务器到到操作代理之间的这一段链路的安全，则只能通过 TLS（即 HTTPS）来保证中间不会受到攻击了，我们可以要求认证服务器必须都是启用 HTTPS 的，但无法要求第三方应用同样都支持 HTTPS。")]),t._v(" "),r("h3",{attrs:{id:"密码模式"}},[t._v("密码模式")]),t._v(" "),r("p",[t._v("前面所说的授权码模式和隐私模式属于纯粹的授权模式，它们与认证没有直接的联系，如何认证用户的真实身份是与进行授权互相独立的过程。但在密码模式里，认证和授权就被整合成了同一个过程了。")]),t._v(" "),r("p",[t._v("密码模式原本的设计意图是仅限于用户对第三方应用是高度可信任的场景中使用，因为用户需要把密码明文提供给第三方应用，第三方以此向授权服务器获取令牌。这种高度可信的第三方是极为较罕见的，尽管介绍 OAuth2 的材料中，经常举的例子是“操作系统作为第三方应用向授权服务器申请资源”，但真实应用中极少遇到这样的情况，合理性依然十分有限。")]),t._v(" "),r("p",[t._v("笔者认为，如果要采用密码模式，那“第三方”属性就必须弱化，把“第三方”视作是系统中与授权服务器相对独立的子模块，在物理上独立于授权服务器部署，但是在逻辑上与授权服务器仍同属一个系统，这样将认证和授权一并完成的密码模式才会有合理的应用场景。")]),t._v(" "),r("p",[t._v("譬如 Fenix's Bookstore 便直接采用了密码模式，将认证和授权统一到一个过程中完成，尽管 Fenix's Bookstore 中的 Frontend 工程和 Account 工程都能直接接触到用户名和密码，但它们事实上都是整个系统的一部分，这个前提下密码模式才具有可用性。关于分布式系统各个服务之间的信任关系，后续会在“"),r("RouterLink",{attrs:{to:"/distribution/secure/zero-trust.html"}},[t._v("零信任网络")]),t._v("”与“"),r("RouterLink",{attrs:{to:"/distribution/secure/service-security.html"}},[t._v("服务安全")]),t._v("”中作进一步讨论。")],1),t._v(" "),r("p",[t._v("理解了密码模式的用途，它的调用过程就很简单了，就是第三方应用拿着用户名和密码向授权服务器换令牌而已。具体时序如图 5-10 所示。")]),t._v(" "),r("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n\t资源所有者 ->> 第三方应用: 提供密码凭证\n\t第三方应用 ->> 授权服务器: 发送用户的密码凭证\n\t授权服务器 --\x3e> 第三方应用: 发放访问令牌和刷新令牌\n")]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-10 密码模式的调用时序图")])]),t._v(" "),r("p",[t._v("密码模式下“如何保障安全”的职责无法由 OAuth2 来承担，只能由用户和第三方应用来自行保障，尽管 OAuth2 在规范中强调到“此模式下，第三方应用不得保存用户的密码”，但这并没有任何技术上的约束力。")]),t._v(" "),r("h3",{attrs:{id:"客户端模式"}},[t._v("客户端模式")]),t._v(" "),r("p",[t._v("客户端模式是四种模式中最简单的，它只涉及到两个主体，第三方应用和授权服务器。如果严谨一点，现在称“第三方应用”其实已经不合适了，因为已经没有了“第二方”的存在，资源所有者、操作代理在客户端模式中都是不必出现的。甚至严格来说叫“授权”都已不太恰当，资源所有者都没有了，也就不会有谁授予谁权限的过程。")]),t._v(" "),r("p",[t._v("客户端模式是指第三方应用（行文一致考虑，还是继续沿用这个称呼）以自己的名义，向授权服务器申请资源许可。此模式通常用于管理操作或者自动处理类型的场景中。举个具体例子，譬如笔者开了一家叫 Fenix's Bookstore 的书店，因为小本经营，不像京东那样全国多个仓库可以调货，因此必须保证只要客户成功购买，书店就必须有货可发，不允许超卖。但经常有顾客下了订单又拖着不付款，导致部分货物处于冻结状态。所以 Fenix's Bookstore 中有一个订单清理的定时服务，自动清理超过两分钟还未付款的订单。在这个场景里，订单肯定是属于下单用户自己的资源，如果把订单清理服务看作一个独立的第三方应用的话，它是不可能向下单用户去申请授权来删掉订单的，而应该直接以自己的名义向授权服务器申请一个能清理所有用户订单的授权。客户端模式的时序如图 5-11 所示。")]),t._v(" "),r("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n\t应用 ->>+ 授权服务器: 申请授权\n\t授权服务器 --\x3e>- 应用: 发放访问令牌\n")]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-11 客户端模式的调用时序图")])]),t._v(" "),r("p",[t._v("微服务架构并不提倡同一个系统的各服务间有默认的信任关系，所以服务之间调用也需要先进行认证授权，然后才能通信。此时，客户端模式便是一种常用的服务间认证授权的解决方案。"),r("RouterLink",{attrs:{to:"/exploration/projects/microservice_arch_springcloud.html"}},[t._v("Spring Cloud 版本的 Fenix's Bookstore")]),t._v("是采用这种方案来保证微服务之间的合法调用的，"),r("RouterLink",{attrs:{to:"/exploration/projects/servicemesh_arch_istio.html"}},[t._v("Istio 版本的 Fenix's Bookstore")]),t._v("则启用了双向 mTLS 通信，使用客户端证书来保障安全，它们可作为上一节介绍认证时提到的“通信信道认证”和“通信内容认证”例子，感兴趣的读者可以对比一下这两种方式差异优劣。")],1),t._v(" "),r("p",[t._v("OAuth2 中还有一种与客户端模式类似的授权模式，在"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc8628#section-3.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 8628"),r("OutboundLink")],1),t._v("中定义为“设备码模式”（Device Code），这里顺带提一下。设备码模式用于在无输入的情况下区分设备是否被许可使用，典型的应用便是手机锁网解锁（锁网在国内较少，但在国外很常见）或者设备激活（譬如某游戏机注册到某个游戏平台）的过程。它的时序如图 5-12 所示。")]),t._v(" "),r("mermaid",{staticStyle:{"margin-bottom":"0px"}},[t._v("\nsequenceDiagram\n\t设备 ->> 授权服务器: 要求授权\n\t授权服务器 --\x3e> 设备: 提供验证URI和用户码\n\tloop 循环直至超时\n\t\t设备 ->> 授权服务器: 申请令牌\n\tend\n")]),t._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[t._v("图 5-12 设备码模式的调用时序图")])]),t._v(" "),r("p",[t._v("进行验证时，设备需要从授权服务器获取一个 URI 地址和一个用户码，然后需要用户手动或设备自动地到验证 URI 中输入用户码。在这个过程中，设备会一直循环，尝试去获取令牌，直到拿到令牌或者用户码过期为止。")])],1)}),[],!1,null,null,null);e.default=i.exports}}]);