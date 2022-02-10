"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[8997],{7525:(l,e,i)=>{i.r(e),i.d(e,{data:()=>t});const t={key:"v-975a5b9a",path:"/computers/internet/http.html",title:"HTTP",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"TCP/IP协议族",slug:"tcp-ip协议族",children:[{level:3,title:"TCP/IP的分层管理",slug:"tcp-ip的分层管理",children:[]}]},{level:2,title:"IP协议",slug:"ip协议",children:[{level:3,title:"ARP协议",slug:"arp协议",children:[]}]},{level:2,title:"TCP协议",slug:"tcp协议",children:[{level:3,title:"三次握手",slug:"三次握手",children:[]}]},{level:2,title:"DNS服务",slug:"dns服务",children:[]},{level:2,title:"HTTP协议",slug:"http协议",children:[]},{level:2,title:"URI和URL",slug:"uri和url",children:[{level:3,title:"HTTP的请求和相应",slug:"http的请求和相应",children:[]},{level:3,title:"HTTP协议的状态",slug:"http协议的状态",children:[]},{level:3,title:"Method",slug:"method",children:[]},{level:3,title:"HTTP持久连接",slug:"http持久连接",children:[]},{level:3,title:"管线化",slug:"管线化",children:[]},{level:3,title:"Cookie",slug:"cookie",children:[]}]},{level:2,title:"HTTP信息",slug:"http信息",children:[{level:3,title:"HTTP报文",slug:"http报文",children:[]},{level:3,title:"HTTP首部字段",slug:"http首部字段",children:[]},{level:3,title:"HTTP请求报文",slug:"http请求报文",children:[]},{level:3,title:"HTTP响应报文",slug:"http响应报文",children:[]},{level:3,title:"HTTP状态码",slug:"http状态码",children:[]},{level:3,title:"状态码的类别",slug:"状态码的类别",children:[]}]},{level:2,title:"虚拟主机",slug:"虚拟主机",children:[{level:3,title:"代理服务器",slug:"代理服务器",children:[]}]},{level:2,title:"HTTPS",slug:"https",children:[]},{level:2,title:"SPDY",slug:"spdy",children:[]},{level:2,title:"WebSocket",slug:"websocket",children:[]},{level:2,title:"Web攻击",slug:"web攻击",children:[{level:3,title:"CSRF",slug:"csrf",children:[]}]}],filePathRelative:"computers/internet/http.md",git:{updatedTime:1635323627e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:1}]}}},7704:(l,e,i)=>{i.r(e),i.d(e,{default:()=>r});const t=(0,i(6252).uE)('<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><ul><li><p><strong>它是什么？</strong></p><p>Web文档的传输协议。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">诞生</p><p>HTTP的诞生，是因研究组织的博士提出了一种，想让远隔两地的研究者们共享知识的设想。</p><p>然后诞生了三项技术：第一个是页面的文本<code>HTML</code>；第二个是作为文档传递协议的<code>HTTP</code>；第三个是指定文档所在地址的<code>URL</code>。</p></div><h2 id="tcp-ip协议族" tabindex="-1"><a class="header-anchor" href="#tcp-ip协议族" aria-hidden="true">#</a> TCP/IP协议族</h2><ul><li><p><strong>它是什么？</strong></p><p>它是互联网协议集合的总称。HTTP协议是它的一个子集。</p></li></ul><h3 id="tcp-ip的分层管理" tabindex="-1"><a class="header-anchor" href="#tcp-ip的分层管理" aria-hidden="true">#</a> TCP/IP的分层管理</h3><p>也就是五层模型，这种设计的好处是，每个层次内部的设计就能够自由改动，只关心分派给自己的任务。</p><h4 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h4><ul><li>HTTP协议</li><li>FTP协议</li><li>DNS协议</li></ul><h4 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h4><ul><li>TCP协议</li><li>UDP协议</li></ul><h4 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h4><ul><li>IP协议</li><li>ARP协议</li></ul><h4 id="链接层" tabindex="-1"><a class="header-anchor" href="#链接层" aria-hidden="true">#</a> 链接层</h4><ul><li>以太网协议</li></ul><h2 id="ip协议" tabindex="-1"><a class="header-anchor" href="#ip协议" aria-hidden="true">#</a> IP协议</h2><ul><li><p><strong>它的作用是什么？</strong></p><p>IP协议的作用是把各种数据包传送给对方。</p></li><li><p><strong>怎么确保能传送到对方那里呢？</strong></p><p>需要依靠<code>IP地址</code>和<code>MAC地址</code></p></li></ul><h3 id="arp协议" tabindex="-1"><a class="header-anchor" href="#arp协议" aria-hidden="true">#</a> ARP协议</h3><ul><li><p><strong>它是什么？</strong></p><p>用来解析地址的协议。</p></li><li><p><strong>它的作用是什么？</strong></p><p>根据通信方的IP地址，就可以反查出对应的MAC地址。</p></li></ul><h2 id="tcp协议" tabindex="-1"><a class="header-anchor" href="#tcp协议" aria-hidden="true">#</a> TCP协议</h2><ul><li><p><strong>它的作用是什么？</strong></p><p>提供可靠的字节流服务。</p></li><li><p><strong>它具体做了什么？</strong></p><p>为更容易传送，把大块数据分割，并能够确认数据最终是否送达对方。</p></li></ul><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><ul><li><p><strong>它的作用是什么？</strong></p><p>确保数据能到达目标。</p></li><li><p><strong>它的过程是怎样的？</strong></p><ul><li>1.发送端，首先发送一个带有<code>SYN标志</code>的数据包给对方。</li><li>2.接收端收到后，回传一个带有<code>SYN/ACK标志</code>的数据包，以表示传达确认信息。</li><li>3.发送端，最后再回传一个带有<code>ACK标志</code>的数据包，代表握手结束。</li></ul></li></ul><h2 id="dns服务" tabindex="-1"><a class="header-anchor" href="#dns服务" aria-hidden="true">#</a> DNS服务</h2><ul><li><p><strong>它的作用是什么？</strong></p><p>提供域名到IP地址之间的解析服务。</p></li></ul><h2 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h2><ul><li><p><strong>它的作用是什么？</strong></p><p>生成针对目标Web服务器的HTTP请求报文。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">各种协议和HTTP协议的关系</p><p>客户端-应用层：客户端请求一个<code>URL网址</code>，先到<code>DNS服务</code>获得<code>IP地址</code>，<code>HTTP协议</code>的职责是生成针对目标Web服务器的HTTP请求报文。</p><p>客户端-传输层：接着<code>TCP协议</code>为了方便通信，将HTTP请求报文分割成报文段，把每个报文段可靠地传给对方。</p><p>网络层：再下一层<code>IP协议</code>搜索对方的地址，一边通过路由中转一边传送。</p><p>服务器-传送层：<code>TCP协议</code>将从对方那里接收到的报文段，按序号以原来的顺序重组请求报文。</p><p>服务器-传输层：<code>HTTP协议</code>对Web服务器请求的内容做处理。</p></div><h2 id="uri和url" tabindex="-1"><a class="header-anchor" href="#uri和url" aria-hidden="true">#</a> URI和URL</h2><ul><li><p><strong>它是什么？</strong></p><p>统一资源标识符。</p></li><li><p><strong>它有什么作用？</strong></p><p>可以定位互联网上的资源位置。</p></li></ul><h3 id="http的请求和相应" tabindex="-1"><a class="header-anchor" href="#http的请求和相应" aria-hidden="true">#</a> HTTP的请求和相应</h3><p>请求报文是由请求方法、请求URI、协议版本、可选的请求首部字段和内容实体构成的。</p><p>响应报文基本上由协议版本、状态码、用以解释状态码的原因短语、可选的响应首部字段以及实体主体构成。</p><h3 id="http协议的状态" tabindex="-1"><a class="header-anchor" href="#http协议的状态" aria-hidden="true">#</a> HTTP协议的状态</h3><p><code>HTTP协议</code>自身不具备保存之前发送过的请求或响应的功能。也就是无状态。</p><p>为了实现期望的保持状态功能，于是引入了<code>Cookie</code>技术。</p><h3 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> Method</h3><ul><li><p><strong>GET</strong></p><p>用来请求访问已被URI识别的资源。</p></li><li><p><strong>POST</strong></p><p>用来传输实体的主体。</p></li><li><p><strong>PUT</strong></p><p>用来传输文件。但是自身没有验证机制，存在安全性问题。</p></li><li><p><strong>HEAD</strong></p><p>用来获得报文首部信息。</p></li><li><p><strong>DELETE</strong></p><p>用来删除文件。但是自身不带验证机制。</p></li><li><p><strong>OPTIONS</strong></p><p>用来查询针对请求URI指定的资源支持的方法。</p></li></ul><h3 id="http持久连接" tabindex="-1"><a class="header-anchor" href="#http持久连接" aria-hidden="true">#</a> HTTP持久连接</h3><ul><li><p><strong>它是什么？</strong></p><p>建立1次TCP连接后，可以进行多次请求和响应的交互。</p></li><li><p><strong>它的好处是什么？</strong></p><p>减少额外开销，减轻服务器的负载，节省时间，提升速度。</p></li><li><p><strong>使用它有什么条件？</strong></p><p>需要HTTP/1.1及以上，服务器端也要能够支持持久连接，客户端也要支持。</p></li></ul><h3 id="管线化" tabindex="-1"><a class="header-anchor" href="#管线化" aria-hidden="true">#</a> 管线化</h3><ul><li><p><strong>它是什么？</strong></p><p>它是在持久连接的基础之上实现的一种技术。</p></li><li><p><strong>它的作用是什么？</strong></p><p>能够做到同时并行发送多个请求。</p></li></ul><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3><ul><li><p><strong>它是什么？</strong></p><p>一种技术。</p></li><li><p><strong>它的用途是什么？</strong></p><p>解决HTTP无状态的问题。</p></li><li><p><strong>它是怎么做到的？</strong></p><p>通过在请求和响应报文中写入Cookie信息，来控制客户端的状态。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>Cookie会根据从服务器端发送的响应报文内的一个叫<code>Set-Cookie</code>的首部字段信息，通知客户端保存Cookie。</p><p>当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入Cookie值，然后发送出去。</p><p>服务器端拿到客户端发送过来的Cookie后，会去对比服务器上的记录，辨别出这是哪一个客户端发送的请求，最后得到之前的状态信息。</p></div><h2 id="http信息" tabindex="-1"><a class="header-anchor" href="#http信息" aria-hidden="true">#</a> HTTP信息</h2><h3 id="http报文" tabindex="-1"><a class="header-anchor" href="#http报文" aria-hidden="true">#</a> HTTP报文</h3><ul><li><p><strong>它是什么？</strong></p><p>它是HTTP协议交互的信息。客户端发送的叫请求报文，服务器端响应的叫响应报文。</p></li><li><p><strong>它由什么组成？</strong></p><p>HTTP报文是由<code>报文首部</code>和<code>报文主体</code>组成，以空行分开。</p></li><li><p><strong>请求报文的组成部分有哪些？</strong></p><p>有方法、URI、HTTP版本、HTTP首部字段等部分。</p></li><li><p><strong>响应报文的组成部分有哪些？</strong></p><p>有HTTP版本、状态码、HTTP首部字段。</p></li></ul><h3 id="http首部字段" tabindex="-1"><a class="header-anchor" href="#http首部字段" aria-hidden="true">#</a> HTTP首部字段</h3><ul><li><p><strong>它是什么？</strong></p><p>它是构成<code>HTTP</code>报文的要素之一。</p></li></ul><h3 id="http请求报文" tabindex="-1"><a class="header-anchor" href="#http请求报文" aria-hidden="true">#</a> HTTP请求报文</h3><ul><li><p><strong>Accept</strong></p><p>用来告知服务器，那份资源最好是给什么样的格式。按照优先级可以指定多种媒体类型。</p></li><li><p><strong>Accept-Encoding</strong></p><p>用来告知服务器，用户代理支持的内容编码及内容编码的优先级顺序。</p></li><li><p><strong>Authorization</strong></p><p>用来告知服务器，用户代理的认证信息（证书值）。通常，想要通过服务器认证的用户代理会在接收到返回的 401 状态码响应后，把首部字段 Authorization 加入请求中。</p></li><li><p><strong>Connection</strong></p><p>keep-alive 持久连接。</p></li></ul><h3 id="http响应报文" tabindex="-1"><a class="header-anchor" href="#http响应报文" aria-hidden="true">#</a> HTTP响应报文</h3><h4 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache-Control</h4><p>通过指定首部字段 <code>Cache-Control</code> 的指令，就能操作缓存的工作机制。</p><pre><code>- no-cache 指令的目的是为了防止从缓存中返回过期的资源。\n- public 指令明确表明其他用户也可利用缓存。\n- private 指令表面响应只以特定的用户作为对象。\n- no-store 指令暗示请求或响应中包含机密信息。\n</code></pre><h3 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> HTTP状态码</h3><ul><li><p><strong>它是什么？</strong></p><p>一个用来描述请求结果的标记。</p></li><li><p><strong>它的用途是什么？</strong></p><p>用来告知客户端从服务器端返回的请求结果。</p></li></ul><h3 id="状态码的类别" tabindex="-1"><a class="header-anchor" href="#状态码的类别" aria-hidden="true">#</a> 状态码的类别</h3><ul><li>1XX Informational（信息性状态码） 接收的请求正在处理。</li><li>2XX Success（成功状态码） 请求正常处理完毕。 <ul><li>200 OK 表示发送的请求被正常处理。</li><li>204 No Content 表示请求处理成功，但是没有资源可返回。</li><li>206 Partial Content 表示对资源某一部分的请求。</li></ul></li><li>3XX Redirection（重定向状态码） 需要进行附加操作以完成请求。 <ul><li>301 Moved Permanently 永久性重定向，表示请求的资源已被分配了新的URI。</li><li>302 Found 临时性重定向，表示已移动的资源对应的URI将来还有可能发生改变。</li><li>303 See Other 表示由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源。</li><li>304 Not Modified 表示发送附带条件的请求时，服务器端找到资源，但条件未满足要求的情况。</li></ul></li><li>4XX Client Error（客户端错误状态码） 服务器无法处理请求。 <ul><li>400 Bad Request 表示客户端请求报文中存在语法错误。</li><li>401 Unauthorized 表示发送的请求需要有通过HTTP认证。</li><li>403 Forbidden 表明对请求资源的访问被服务器拒绝了，没有权限访问。</li><li>404 Not Found 表明服务器上无法找到请求的资源。</li></ul></li><li>5XX Server Error（服务器错误状态码） 服务器处理请求出错。 <ul><li>500 Internal Server Error 表明服务器端在执行请求时发生了错误。</li><li>503 Service Unavailable 表明服务器暂时处于超负载或正在进行停机维护。</li></ul></li></ul><h2 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机" aria-hidden="true">#</a> 虚拟主机</h2><ul><li><p><strong>它是什么？</strong></p><p>在物理层面只有一台服务器，但只要使用虚拟主机的功能，则可以假想已具有多台服务器。</p></li><li><p><strong>它的用途是什么？</strong></p><p>一台Web服务器可以搭建多个独立域名的Web网站。</p></li><li><p><strong>如何区分两个域名？</strong></p><p>指定URI。</p></li></ul><h3 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h3><ul><li><p><strong>它是什么？</strong></p><p>扮演了位于客户端和服务器中间人的角色。</p></li><li><p><strong>它做了什么？</strong></p><p>接收由客户端发送的请求并转发给服务器，同时也接收服务器返回的响应并转发给客户端。</p></li><li><p><strong>为什么要用它？</strong></p><ul><li>可以利用缓存技术减少网络带宽的流量。</li><li>可以组织内部针对特定网站的访问控制。</li></ul></li></ul><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h2><ul><li><p><strong>它是什么？</strong></p><p>它是与<code>SSL</code>组合使用的<code>HTTP</code>。（HTTPS = HTTP + 加密 + 认证 + 完整性保护）</p></li><li><p><strong>它解决什么问题？</strong></p><p>保障HTTP传输的安全。</p></li><li><p><strong>HTTP协议有哪些不安全的问题？</strong></p><ul><li>通信使用明文，内容可能会被窃听。</li><li>不验证通信方的身份，因此有可能遭遇伪装。</li><li>无法证明报文的完整性，所以有可能已遭篡改。</li></ul></li><li><p><strong>SSL是什么？</strong></p><p>一种使用最为广泛的网络安全技术。</p></li><li><p><strong>SSL可以做什么？</strong></p><ul><li>提供通信加密处理。</li><li>确认通信方的证书。</li></ul></li><li><p><strong>SSL有什么不足？</strong></p><ul><li>速度慢，HTTPS比HTTP要慢2到100倍。慢分为两种，一种是通信慢。另一种是会大量消耗CPU及内存资源，导致处理速度变慢。</li></ul></li></ul><h2 id="spdy" tabindex="-1"><a class="header-anchor" href="#spdy" aria-hidden="true">#</a> SPDY</h2><ul><li><p><strong>它有什么用？</strong></p><p>用来解决HTTP的性能瓶颈。</p></li><li><p><strong>HTTP有哪些性能瓶颈？</strong></p><ul><li>一条连接上只可发送一个请求。</li><li>请求只能从客户端开始。客户端不可以接收除响应以外的指令。</li><li>请求 / 响应首部未经压缩就发送。首部信息越多延迟越大。</li><li>每次互相发送相同的首部造成的浪费较多。</li></ul></li><li><p><strong>它是怎么解决的？</strong></p><p>SPDY 没有完全改写 HTTP 协议，而是在 TCP/IP 的应用层与运输层之间通过新加会话层的形式运作。同时，考虑到安全性问题，SPDY 规定通信中使用 SSL。</p></li><li><p><strong>使用SPDY后，可以获得哪些功能？</strong></p><ul><li>多路复用流。</li><li>赋予请求优先级。</li><li>压缩HTTP首部。</li><li>服务器主动推送功能。</li><li>服务器提示功能。</li></ul></li></ul><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2><ul><li><p><strong>它是什么？</strong></p><p>它是一套新的协议及API。</p></li><li><p><strong>它有什么用？</strong></p><p>实现Web浏览器与Web服务器之间全双工通信标准。</p></li><li><p><strong>它的主要特点有哪些？</strong></p><ul><li>推送功能。</li><li>减少通信量。</li></ul></li></ul><h2 id="web攻击" tabindex="-1"><a class="header-anchor" href="#web攻击" aria-hidden="true">#</a> Web攻击</h2><h3 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h3>',72),r={render:function(l,e){return t}}}}]);