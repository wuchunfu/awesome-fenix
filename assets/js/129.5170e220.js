(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{643:function(e,t,r){"use strict";r.r(t);var n=r(11),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"微服务：kubernetes"}},[e._v("微服务：Kubernetes")]),e._v(" "),r("GitHubWrapper",[r("p",{attrs:{align:"center"}},[r("a",{attrs:{href:"https://icyfenix.cn",target:"_blank"}},[r("img",{attrs:{width:"180",src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/logo-color.png",alt:"logo"}})])]),e._v(" "),r("p",{attrs:{align:"center"}},[r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://icyfenix.cn"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/Release-v1.svg"}})]),e._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://travis-ci.com/fenixsoft/microservice_arch_springcloud",target:"_blank"}},[r("img",{attrs:{src:"https://travis-ci.com/fenixsoft/microservice_arch_kubernetes.svg?branch=master",alt:"Travis-CI"}})]),e._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/License-Apache.svg",alt:"License"}})]),e._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/DocLicense-CC-red.svg",alt:"Document License"}})]),e._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://icyfenix.cn/introduction/about-me.html",target:"_blank"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/Author-IcyFenix-blue.svg",alt:"About Author"}})])])]),e._v(" "),r("p",[e._v("如果你此时并不曾了解过什么是“The Fenix Project”，建议先阅读"),r("a",{attrs:{href:"https://icyfenix.cn/introduction/about-the-fenix-project.html"}},[e._v("这部分内容")]),e._v("。")]),e._v(" "),r("p",[e._v("2017 年，笔者曾在文章中描述其为“"),r("a",{attrs:{href:"https://icyfenix.cn/architecture/architect-history/post-microservices.html"}},[e._v("后微服务时代")]),e._v("”的开端，这年是容器生态发展历史中具有里程碑意义的一年。在这一年，长期作为 Docker 竞争对手的"),r("a",{attrs:{href:"https://coreos.com/rkt/docs/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RKT 容器"),r("OutboundLink")],1),e._v("一派的领导者 CoreOS 宣布放弃自己的容器管理系统 Fleet，未来将会把所有容器管理的功能移至 Kubernetes 之上去实现。在这一年，容器管理领域的独角兽 Rancher Labs 宣布放弃其内置了数年的容器管理系统 Cattle，提出了“All-in-Kubernetes”战略，从 2.0 版本开始把 1.x 版本能够支持多种容器管理工具的 Rancher，“反向升级”为只支持 Kubernetes 一种容器管理系统。在这一年，Kubernetes 的主要竞争者 Apache Mesos 在 9 月正式宣布了“"),r("a",{attrs:{href:"https://k8smeetup.github.io/docs/getting-started-guides/mesos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes on Mesos"),r("OutboundLink")],1),e._v("”集成计划，由竞争关系转为对 Kubernetes 提供支持，使其能够与 Mesos 的其他一级框架（如"),r("a",{attrs:{href:"https://docs.mesosphere.com/latest/usage/service-guides/hdfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://docs.mesosphere.com/latest/usage/service-guides/spark/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spark"),r("OutboundLink")],1),e._v(" 和"),r("a",{attrs:{href:"https://mesos.github.io/chronos/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chronos"),r("OutboundLink")],1),e._v("，等等）进行集群资源动态共享、分配与隔离。在这一年，Kubernetes 的最大竞争者 Docker Swarm 的母公司 Docker，终于在 10 月被迫宣布 Docker 要同时支持 Swarm 与 Kubernetes 两套容器管理系统，事实上承认了 Kubernetes 的统治地位。这场已经持续了三、四年时间，以 Docker Swarm、Apache Mesos 与 Kubernetes 为主要竞争者的“容器战争”终于有了明确的结果，Kubernetes 登基加冕是容器发展中一个时代的终章，也将是软件架构发展下一个纪元的开端。")]),e._v(" "),r("h2",{attrs:{id:"需求场景"}},[e._v("需求场景")]),e._v(" "),r("p",[e._v("当引入了"),r("a",{attrs:{href:"https://icyfenix.cn/exploration/projects/microservice_arch_springcloud.html"}},[e._v("基于 Spring Cloud 的微服务架构")]),e._v("后，小书店 Fenix's Bookstore 初步解决了扩容缩容、独立部署、运维和管理等问题，满足了产品经理不断提出的日益复杂的业务需求。可是，对于团队的开发人员、设计人员、架构人员来说，并没有感觉到工作变得轻松，微服务中的各种新技术名词，如配置中心、服务发现、网关、熔断、负载均衡等等，就够一名新手学习好长一段时间；从产品角度来看，各种 Spring Cloud 的技术套件，如 Config、Eureka、Zuul、Hystrix、Ribbon、Feign 等，也占据了产品的大部分编译后的代码容量。之所以微服务架构里，我们选择在应用层面而不是基础设施层面去解决这些分布式问题，完全是因为由硬件构成的基础设施，跟不上由软件构成的应用服务的灵活性的无奈之举。当 Kubernetes 统一了容器编排管理系统之后，这些纯技术性的底层问题，便开始有了被广泛认可和采纳的基础设施层面的解决方案。为此，Fenix's Bookstore 也迎来了它在“后微服务时代”中的下一次架构演进，这次升级的目标主要有如下两点：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("目标一")]),e._v("：尽可能缩减非业务功能代码的比例。"),r("br"),e._v("在 Fenix's Bookstore 中，用户服务（Account）、商品服务（Warehouse）、交易服务（Payment）三个工程是真正承载业务逻辑的，认证授权服务（Security）可以认为是同时涉及到了技术与业务，而配置中心（Configuration）、网关（Gateway）和服务注册中心（Registry）则是纯技术性。我们希望尽量消除这些纯技术的工程，以及那些依附在其他业务工程上的纯技术组件。")]),e._v(" "),r("li",[r("strong",[e._v("目标二")]),e._v("：尽可能在不影响原有的代码的前提下完成迁移。"),r("br"),e._v("得益于 Spring Framework 4 中的 Conditional Bean 等声明式特性的出现，对于近年来新发布的 Java 技术组件，"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Declarative_programming",target:"_blank",rel:"noopener noreferrer"}},[e._v("声明式编程"),r("OutboundLink")],1),e._v("（Declarative Programming）已经逐步取代"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Imperative_programming",target:"_blank",rel:"noopener noreferrer"}},[e._v("命令式编程"),r("OutboundLink")],1),e._v("（Imperative Programming）成为主流的选择。在声明式编程的支持下，我们可以从目的而不是过程的角度去描述编码意图，使得代码几乎不会与具体技术实现产生耦合，若要更换一种技术实现，只需要调整配置中的声明便可做到。")])]),e._v(" "),r("p",[e._v("从升级结果来看，如果仅以 Java 代码的角度来衡量，本工程与此前"),r("a",{attrs:{href:"https://icyfenix.cn/exploration/projects/microservice_arch_springcloud.html"}},[e._v("基于 Spring Cloud 的实现")]),e._v("没有丝毫差异，两者的每一行 Java 代码都是一模一样的；真正的区别在 Kubernetes 的实现版本中直接删除了配置中心、服务注册中心的工程，在其他工程的 pom.xml 中也删除了如 Eureka、Ribbon、Config 等组件的依赖。取而代之的是新增了若干以 YAML 配置文件为载体的"),r("a",{attrs:{href:"https://skaffold.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skaffold"),r("OutboundLink")],1),e._v("和 Kubernetes 的资源描述，这些资源描述文件，将会动态构建出 DNS 服务器、服务负载均衡器等一系列虚拟化的基础设施，去代替原有的应用层面的技术组件。升级改造之后的应用架构如下图所示：")]),e._v(" "),r("GitHubWrapper",[r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/kubernetes-ms.png"}})])]),e._v(" "),r("h2",{attrs:{id:"运行程序"}},[e._v("运行程序")]),e._v(" "),r("p",[e._v("在已经"),r("a",{attrs:{href:"https://icyfenix.cn/appendix/deployment-env-setup/setup-kubernetes/"}},[e._v("部署 Kubernetes 集群")]),e._v("的前提下，通过以下几种途径，可以运行程序，浏览最终的效果：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("直接在 Kubernetes 集群环境上运行："),r("br"),e._v("工程在编译时已通过 Kustomize 产生出集成式的资源描述文件，可通过该文件直接在 Kubernetes 集群中运行程序：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 资源描述文件")]),e._v("\n$ kubectl apply -f https://raw.githubusercontent.com/fenixsoft/microservice_arch_kubernetes/master/bookstore.yml\n")])])]),r("p",[e._v("命令执行过程一共需要下载几百 MB 的镜像，尤其是 Docker 中没有各层基础镜像缓存时，请根据自己的网速保持一定的耐心。未来 GraalVM 对 Spring Cloud 的支持更成熟一些后，可以考虑采用 GraalVM 来改善这一点。当所有的 Pod 都处于正常工作状态后，在浏览器访问："),r("a",{attrs:{href:"http://localhost:30080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:30080"),r("OutboundLink")],1),e._v("，系统预置了一个用户（"),r("code",[e._v("user:icyfenix，pw:123456")]),e._v("），也可以注册新用户来测试。")])]),e._v(" "),r("li",[r("p",[e._v("通过 Skaffold 在命令行或 IDE 中以调试方式运行："),r("br"),e._v("一般开发基于 Kubernetes 的微服务应用，是在本地针对单个服务编码、调试完成后，通过 CI/CD 流水线部署到 Kubernetes 中进行集成的。如果只是针对集成测试，这并没有什么问题，但同样的做法应用在开发阶段就不相当不便了，我们不希望每做一处修改都要经过一次 CI/CD 流程，这将非常耗时且难以调试。"),r("br"),e._v("Skaffold 是 Google 在 2018 年开源的一款加速应用在本地或远程 Kubernetes 集群中构建、推送、部署和调试的自动化命令行工具，对于 Java 应用来说，它可以帮助我们做到监视代码变动，自动打包出镜像，将镜像打上动态标签并更新部署到 Kubernetes 集群，为 Java 程序注入开放 JDWP 调试的参数，并根据 Kubernetes 的服务端口自动在本地生成端口转发。以上都是根据"),r("code",[e._v("skaffold.yml")]),e._v("中的配置来进行的，开发时 skaffold 通过"),r("code",[e._v("dev")]),e._v("指令来执行这些配置，具体的操作过程如下所示：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 克隆获取源码")]),e._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/fenixsoft/microservice_arch_kubernetes.git "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" microservice_arch_kubernetes\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 编译打包")]),e._v("\n$ ./mvnw package\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动Skaffold")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 此时将会自动打包Docker镜像，并部署到Kubernetes中")]),e._v("\n$ skaffold dev\n")])])]),r("p",[e._v("服务全部启动后，在浏览器访问："),r("a",{attrs:{href:"http://localhost:30080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:30080"),r("OutboundLink")],1),e._v("，系统预置了一个用户（"),r("code",[e._v("user:icyfenix，pw:123456")]),e._v("），也可以注册新用户来测试"),r("br")]),e._v(" "),r("p",[e._v("由于面向的是开发环境，基于效率原因，笔者并没有像传统 CI 工程那样直接使用 Maven 的 Docker 镜像来打包 Java 源码，这决定了构建 Dockerfile 时，要监视的变动目标将是 Jar 文件而不是 Java 源码，Skaffold 的执行是由 Jar 包的编译结果来驱动的，只在进行 Maven 编译、输出了新的 Jar 包后才会更新镜像。这样做一方面是考虑到在 Maven 镜像中打包不便于利用本地的仓库缓存，尤其在国内网络中，速度实在难以忍受；另外一方面，是笔者其实并不希望每保存一次源码时，都自动构建和更新一次镜像，毕竟比起传统的 HotSwap 或者 Spring Devtool Reload 来说，更新镜像重启 Pod 是一个更加重负载的操作。未来 CNCF 的"),r("a",{attrs:{href:"https://buildpacks.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buildpack"),r("OutboundLink")],1),e._v("成熟之后，应该可以绕过笨重的 Dockerfile，对打包和容器热更新做更加精细化的控制。")]),e._v(" "),r("p",[e._v("另外，对于有 IDE 调试需求的同学，推荐采用"),r("a",{attrs:{href:"https://cloud.google.com/code",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Code"),r("OutboundLink")],1),e._v("（Cloud Code 同时提供了 VS Code 和 IntelliJ Idea 的插件）来配合 Skaffold 使用，毕竟是同一个公司出品的产品，搭配起来能获得几乎与本地开发单体应用一致的编码和调试体验。")])])]),e._v(" "),r("h2",{attrs:{id:"技术组件"}},[e._v("技术组件")]),e._v(" "),r("p",[e._v("Fenix's Bookstore 采用基于 Kubernetes 的微服务架构，并采用 Spring Cloud Kubernetes 做了适配，其中主要的技术组件包括：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("环境感知")]),e._v("：Spring Cloud Kubernetes 本身引入了 Fabric8 的"),r("a",{attrs:{href:"https://github.com/fabric8io/kubernetes-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Client"),r("OutboundLink")],1),e._v("作为容器环境感知，不过引用的版本相当陈旧，如 Spring Cloud Kubernetes 1.1.2 中采用的是 Fabric8 Kubernetes Client 4.4.1，Fabric8 提供的兼容性列表中该版本只支持到 Kubernetes 1.14，实测在 1.16 上也能用，但是在 1.18 上无法识别到最新的 Api-Server，因此 Maven 引入依赖时需要手工处理，排除旧版本，引入新版本（本工程采用的是 4.10.1）。")]),e._v(" "),r("li",[r("strong",[e._v("配置中心")]),e._v("：采用 Kubernetes 的 ConfigMap 来管理，通过"),r("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-kubernetes/tree/master/spring-cloud-kubernetes-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Cloud Kubernetes Config"),r("OutboundLink")],1),e._v("自动将 ConfigMap 的内容注入到 Spring 配置文件中，并实现动态更新。")]),e._v(" "),r("li",[r("strong",[e._v("服务发现")]),e._v("：采用 Kubernetes 的 Service 来管理，通过"),r("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-kubernetes/tree/master/spring-cloud-kubernetes-discovery",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Cloud Kubernetes Discovery"),r("OutboundLink")],1),e._v("自动将 HTTP 访问中的服务转换为"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fully_qualified_domain_name",target:"_blank",rel:"noopener noreferrer"}},[e._v("FQDN"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[r("strong",[e._v("负载均衡")]),e._v("：采用 Kubernetes Service 本身的负载均衡能力实现（就是 DNS 负载均衡），可以不再需要 Ribbon 这样的客户端负载均衡了。Spring Cloud Kubernetes 从 1.1.2 开始也已经移除了对 Ribbon 的适配支持，也（暂时）没有对其代替品 Spring Cloud LoadBalancer 提供适配。")]),e._v(" "),r("li",[r("strong",[e._v("服务网关")]),e._v("：网关部分仍然保留了 Zuul，未采用 Ingress 代替。这里有两点考虑，一是 Ingress Controller 不算是 Kubernetes 的自带组件，它可以有不同的选择（KONG、Nginx、Haproxy，等等），同时也需要独立安装，作为演示工程，出于环境复杂度最小化考虑未使用 Ingress；二是 Fenix's Bookstore 的前端工程是存放在网关中的，移除了 Zuul 之后也仍然要维持一个前端工程的存在，不能进一步缩减工程数量，也就削弱了移除 Zuul 的动力。")]),e._v(" "),r("li",[r("strong",[e._v("服务熔断")]),e._v("：仍然采用 Hystrix，Kubernetes 本身无法做到精细化的服务治理，包括熔断、流控、监视，等等，我们将在基于 Istio 的服务网格架构中解决这个问题。")]),e._v(" "),r("li",[r("strong",[e._v("认证授权")]),e._v("：仍然采用 Spring Security OAuth 2，Kubernetes 的 RBAC 授权可以解决服务层面的访问控制问题，但 Security 是跨越了业务和技术的边界的，认证授权模块本身仍承担着对前端用户的认证、授权职责，这部分是与业务相关的。")])]),e._v(" "),r("h2",{attrs:{id:"协议"}},[e._v("协议")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("本文档代码部分采用"),r("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0 协议"),r("OutboundLink")],1),e._v("进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("署名")]),e._v("：在原有代码和衍生代码中，保留原作者署名及代码来源信息。")]),e._v(" "),r("li",[r("strong",[e._v("保留许可证")]),e._v("：在原有代码和衍生代码中，保留 Apache 2.0 协议文件。")])])]),e._v(" "),r("li",[r("p",[e._v("本作品文档部分采用"),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("知识共享署名 4.0 国际许可协议"),r("OutboundLink")],1),e._v("进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("署名")]),e._v("：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。")]),e._v(" "),r("li",[r("strong",[e._v("非商业性使用")]),e._v("：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。")]),e._v(" "),r("li",[r("strong",[e._v("相同方式共享的条件")]),e._v("：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0 国际许可协议进行许可。")])])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);