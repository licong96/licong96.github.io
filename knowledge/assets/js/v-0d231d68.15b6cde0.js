"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[8848],{9808:(e,o,d)=>{d.r(o),d.d(o,{data:()=>l});const l={key:"v-0d231d68",path:"/computers-core/internet/Internet.html",title:"互联网",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"协议",slug:"协议",children:[]},{level:2,title:"五层模型",slug:"五层模型",children:[]},{level:2,title:"实体层",slug:"实体层",children:[]},{level:2,title:"链接层",slug:"链接层",children:[{level:3,title:"以太网协议",slug:"以太网协议",children:[]},{level:3,title:"MAC 地址",slug:"mac-地址",children:[]},{level:3,title:"广播",slug:"广播",children:[]}]},{level:2,title:"网络层",slug:"网络层",children:[{level:3,title:"IP 协议",slug:"ip-协议",children:[]},{level:3,title:"ARP 协议",slug:"arp-协议",children:[]}]},{level:2,title:"传输层",slug:"传输层",children:[{level:3,title:"端口（port）",slug:"端口-port",children:[]},{level:3,title:"UDP 协议",slug:"udp-协议",children:[]},{level:3,title:"TCP 协议",slug:"tcp-协议",children:[]}]},{level:2,title:"应用层",slug:"应用层",children:[]},{level:2,title:"用户上网设置",slug:"用户上网设置",children:[{level:3,title:"DHCP",slug:"dhcp",children:[]}]},{level:2,title:"域名",slug:"域名",children:[]},{level:2,title:"NDS 协议",slug:"nds-协议",children:[{level:3,title:"Hosts 文件",slug:"hosts-文件",children:[]}]}],filePathRelative:"computers-core/internet/Internet.md",git:{updatedTime:1690944334e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:2}]}}},8891:(e,o,d)=>{d.r(o),d.d(o,{default:()=>c});const l=(0,d(6252).uE)('<h1 id="互联网" tabindex="-1"><a class="header-anchor" href="#互联网" aria-hidden="true">#</a> 互联网</h1><p>互联网是由全世界众多网络连接而成的网络。互联网的核心就是<strong>一系列协议</strong>，总称为&quot;互联网协议&quot;。</p><h2 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h2><p>协议是定义了<strong>数据</strong>如何在计算机内或之间，进行交换的<strong>规则</strong>。它们对电脑如何连接和组网，做出了详尽的规定。</p><h2 id="五层模型" tabindex="-1"><a class="header-anchor" href="#五层模型" aria-hidden="true">#</a> 五层模型</h2><p>用户接触到的，只是最上面的一层，根本没有感觉到下面的层。越下面的层，越靠近硬件；越上面的层，越靠近用户。要理解互联网，必须从最下层开始，自下而上理解每一层的功能。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/201205/bg2012052902.png" alt="avatar"></p><p>每一层都是为了完成一种功能。为了实现这些功能，就需要大家都遵守共同的规则。<strong>大家都遵守的规则，就叫做&quot;协议&quot;（protocol）。</strong></p><p>互联网的每一层，都定义了很多协议。这些协议的总称，就叫做<strong>互联网协议（Internet Protocol Suite）</strong>。</p><h2 id="实体层" tabindex="-1"><a class="header-anchor" href="#实体层" aria-hidden="true">#</a> 实体层</h2><ul><li><p><strong>它是什么？</strong></p><p>它是把电脑连接起来的<code>物理手段</code>（网线、光缆、电缆、无线电波）。</p></li><li><p><strong>它的用途是什么？</strong></p><p>作用是负责传送<code>0</code>和<code>1</code>的电信号。</p></li></ul><h2 id="链接层" tabindex="-1"><a class="header-anchor" href="#链接层" aria-hidden="true">#</a> 链接层</h2><ul><li><p><strong>它的用途是什么？</strong></p><p>解读电信号，确定<code>0</code>和<code>1</code>的分组方式。</p></li></ul><h3 id="以太网协议" tabindex="-1"><a class="header-anchor" href="#以太网协议" aria-hidden="true">#</a> 以太网协议</h3><ul><li><p><strong>它有什么规则？</strong></p><p>它规定，一组电信号构成一个<code>数据包</code>，也叫做<code>帧（Frame）</code>。</p><p>每一个数据包为两个部分：</p><ul><li>标头（Head）：包含数据的一些说明项，如发送者、接受者、数据类型等等。</li><li>数据（Data）：数据包的具体内容。</li></ul></li></ul><h3 id="mac-地址" tabindex="-1"><a class="header-anchor" href="#mac-地址" aria-hidden="true">#</a> MAC 地址</h3><p><code>以太网</code>规定，连入网络的所有设备，都必须具有<code>网卡</code>接口。数据包必须是从一块网卡，传送到另一块网卡。</p><ul><li><p><strong>它是什么？</strong></p><p>它是网卡地址，也是数据包的发送和接收地址。</p></li><li><p><strong>它的作用是什么？</strong></p><p>用来定位网卡和数据包的路径。</p></li><li><p><strong>它的特点是什么？</strong></p><p>每一块网卡出厂的时候，都有一个全世界独一无二的<code>MAC地址</code>。</p></li></ul><h3 id="广播" tabindex="-1"><a class="header-anchor" href="#广播" aria-hidden="true">#</a> 广播</h3><ul><li><p><strong>它是什么？</strong></p><p>一种发送数据包的方式。</p></li><li><p><strong>它是怎么发送的？</strong></p><p>向本网络内所有计算机发送，让每台计算机自己判断，是否为接收方。</p></li><li><p><strong>它的特点是什么？</strong></p><p>广播的限制是，两台计算机要在同一个<code>子网络</code>中。这是合理的设计，可以避免很多灾难。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>我们有了<code>MAC地址</code>，然后<code>以太网</code>会使用<code>广播</code>的方式，将<code>数据包</code>发送给<code>局域网</code>内所有的计算机，它们读取数据包的<code>标头</code>，找到接收方的 MAC 地址，与自身的 MAC 地址相比较，如果相同就接收这个包，否则就丢弃这个包。</p><p>有了数据包的定义、网卡的 MAC 地址、广播的发送方式，“链接层”就可以在多台计算机之间传送数据。</p></div><h2 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h2><ul><li><p><strong>它是什么？</strong></p><p>一套新的地址，这套地址叫做<code>网络地址</code>，简称<code>网址</code>。</p></li><li><p><strong>它的用途是什么？</strong></p><p>引进一套新的地址，使我们能够区分不同的计算机是否属于同一个子网络。</p></li><li><p><strong>它是怎么区分的？</strong></p><p>通过<code>IP协议</code>和<code>子网掩码</code>。</p></li></ul><h3 id="ip-协议" tabindex="-1"><a class="header-anchor" href="#ip-协议" aria-hidden="true">#</a> IP 协议</h3><ul><li><p><strong>它是什么？</strong></p><p>用来规定<code>网络地址</code>的协议。</p></li><li><p><strong>它的作用是什么？</strong></p><p>一个是为每一台计算机分配 IP 地址，另一个是确定哪些地址在同一个子网络中。</p></li><li><p><strong>它长什么样？</strong></p><p>用四段十进制数表示，从<code>0.0.0.0</code>到<code>255.255.255.255</code>。前一部分表示网络，后一部分表示主机。</p></li><li><p><strong>它的特点是什么？</strong></p><p>网络部分相同，就表示处于同一个子网络。</p></li><li><p><strong>怎么判断网络部分是否相同？</strong></p><p>将两个<code>IP地址</code>与<code>子网掩码</code>分别进行<code>AND运算</code>，比较是否相同，就可以知道是否在一个子网络中。</p></li></ul><h3 id="arp-协议" tabindex="-1"><a class="header-anchor" href="#arp-协议" aria-hidden="true">#</a> ARP 协议</h3><ul><li><p><strong>它有什么用？</strong></p><p>在同一个子网络中，已知<code>IP地址</code>的情况下，通过<code>ARP</code>协议，可以得到主机的<code>MAC地址</code>。</p></li><li><p><strong>它的局限是什么？</strong></p><p>只作用于同一个子网络中，如果两台主机不在同一个子网络，那只能把数据包传送到两个子网络连接处的<code>网关</code>去处理。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>每台计算机有两种地址，一个种是<code>MAC地址</code>，另一种是<code>网络地址</code>。这两种地址之间没有任何联系，MAC 地址绑定在网卡上，网络地址由管理员分配，它们只是随机组合在一起。</p><p>网络地址用来确定计算机所在的子网络，MAC 地址则将数据包发送到该子网络中的目标网卡。</p><p>如果是同一个<code>子网络</code>，就采用广播方式发送，否则就采用<code>路由</code>方式发送。</p></div><h2 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h2><ul><li><p><strong>它的用途是什么？</strong></p><p>建立<code>端口</code>到<code>端口</code>之间的通信。</p></li></ul><h3 id="端口-port" tabindex="-1"><a class="header-anchor" href="#端口-port" aria-hidden="true">#</a> 端口（port）</h3><ul><li><p><strong>它是什么？</strong></p><p>它是一个编号。</p></li><li><p><strong>它的用途是什么？</strong></p><p>用来区分接收到的<code>数据包</code>要提供给哪个程序使用。</p></li><li><p><strong>它的特点是什么？</strong></p><p>由 16 个二进制位组成，一个<code>0</code>到<code>65535</code>之间的整数，前面<code>1023</code>个被系统占用。</p></li></ul><h3 id="udp-协议" tabindex="-1"><a class="header-anchor" href="#udp-协议" aria-hidden="true">#</a> UDP 协议</h3><ul><li><p><strong>它的用途是什么？</strong></p><p>在<code>数据包</code>中加入<code>端口</code>信息。</p></li><li><p><strong>它的缺陷是什么？</strong></p><p>可靠性较差，可以将数据发出，但是无法知道对方是否收到。</p></li></ul><h3 id="tcp-协议" tabindex="-1"><a class="header-anchor" href="#tcp-协议" aria-hidden="true">#</a> TCP 协议</h3><ul><li><p><strong>它是什么？</strong></p><p>一个有确认机制的<code>UDP协议</code>。</p></li><li><p><strong>它的用途是什么？</strong></p><p>为了解决<code>UDP协议</code>的问题，提高可靠性。</p></li><li><p><strong>它是怎么做到的？</strong></p><p>操作系统会有接口来管理它，它使用三次握手来建立一个连接，使用四次握手来中断一个连接。</p></li><li><p><strong>它还有什么特点？</strong></p><p>它会确保数据传输的可靠性，并保证每一个字节在接收时，维持它们的发送顺序。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>有了 MAC 地址和 IP 地址，我们已经可以在互联网上任意两台主机上建立通信。接下来的问题是，同一台主机上有许多程序都需要用到网络，想要知道接收到的<code>数据包</code>到底是给哪个程序使用，这还需要一个参数，就是<code>端口</code>。</p><p><code>网络层</code>的功能是建立<code>主机到主机</code>之间的通信，<code>传输层</code>的功能是建立<code>端口到端口</code>之间的通信。</p></div><p>每一层都会往<code>数据包</code>中追加新的信息，最后就是这个样子： <img src="https://www.ruanyifeng.com/blogimg/asset/201205/bg2012052913.png" alt="avatar"></p><h2 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h2><ul><li><p><strong>它是什么？</strong></p><p>它是应用程序的数据协议。</p></li><li><p><strong>它的作用是什么？</strong></p><p>用来规定应用程序的数据格式。应用层接收到传输层的数据，加下来就要进行解读。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>网络通信就是<code>交换数据包</code>，发送数据包需要知道两个地址：一个是对方的<code>MAC地址</code>，另一个是对方的<code>IP地址</code>。</p><p>如果两台电脑不在同一个子网络中，就无法知道对方的 MAC 地址，必须通过<code>网关转发</code>。</p></div><hr><h2 id="用户上网设置" tabindex="-1"><a class="header-anchor" href="#用户上网设置" aria-hidden="true">#</a> 用户上网设置</h2><p>通常必须做一些设置，需要四个参数：</p><ul><li>本机的 IP 地址</li><li>子网掩码</li><li>网关的 IP 地址</li><li>DNS 的 IP 地址</li></ul><h3 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h3><p>动态 IP 地址，指计算机开机后，会自动分配一个 IP 地址，使用的协议叫做<code>DHCP协议</code>。</p><p>每一个子网络中，有一台计算机负责管理本网络的所有 IP 地址，它叫做<code>DHCP服务器</code>。</p><h2 id="域名" tabindex="-1"><a class="header-anchor" href="#域名" aria-hidden="true">#</a> 域名</h2><ul><li><p><strong>它是什么？</strong></p><p>IP 地址的别名。</p></li></ul><h2 id="nds-协议" tabindex="-1"><a class="header-anchor" href="#nds-协议" aria-hidden="true">#</a> NDS 协议</h2><ul><li><p><strong>它的用途是什么？</strong></p><p>将域名查出 IP 地址。</p></li><li><p><strong>它是如何做到的？</strong></p><p>本机需要先知道 DNS 服务器的 IP 地址，然后根据域名的<code>层级</code>，使用<code>分级查询</code>。</p></li><li><p><strong>域名的层级是什么？</strong></p><ul><li>所有域名的尾部，实际上都有一个根域名。举例来说，<code>www.lcong.cn</code>真正的域名是<code>www.lcong.cn.root</code>，简写为<code>www.lcong.cn.</code>，后面有一个<code>.</code>。</li><li>主机名（三级域名）.次级域名（二级域名）.顶级域名（一级域名）.根域名</li></ul></li><li><p><strong>分级查询是什么？</strong></p><p>从根域名开始，依次查询每一级域名的 NS 记录，直到查到最终的 IP 地址。</p><ul><li>从<code>根域名服务器</code>查到<code>顶级域名服务器</code>的 NS 记录和 A 记录</li><li>从<code>顶级域名服务器</code>查到<code>次级域名服务器</code>的 NS 记录和 A 记录</li><li>从<code>次级域名服务器</code>查出<code>主机名</code>的 IP 地址</li></ul></li><li><p><strong>A 记录和 NS 记录是什么？</strong></p><p>域名与 IP 之间的对应关系，称为<code>记录</code>。根据使用场景，<code>记录</code>可以分成不同的类型，<code>NS</code>和<code>A</code>就是类型。</p></li><li><p><strong>常见的记录有哪些？</strong></p><ul><li><code>A</code>：地址记录，返回域名指向的 IP 地址</li><li><code>NS</code>：域名服务器记录，返回保存下一级域名信息的服务器地址，只能设置为域名</li><li><code>MX</code>：邮件记录，返回接收电子邮件的服务器地址</li><li><code>CNAME</code>：规范名称记录，返回另一个域名，即当前查询的域名是另一个域名的跳转</li></ul></li></ul><h3 id="hosts-文件" tabindex="-1"><a class="header-anchor" href="#hosts-文件" aria-hidden="true">#</a> Hosts 文件</h3><ul><li><p><strong>它是什么？</strong></p><p>Hosts 文件存放的是<code>域名</code>和<code>IP</code>的对应关系，在网络请求阶段发挥作用。</p></li></ul>',54),c={render:function(e,o){return l}}}}]);