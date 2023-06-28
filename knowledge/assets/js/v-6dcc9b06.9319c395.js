"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[6528],{2254:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-6dcc9b06",path:"/web-developer/back-end/tools/node-monitoring.html",title:"node 性能监控工具",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"阿里云 Node.js 性能平台",slug:"阿里云-node-js-性能平台",children:[]},{level:2,title:"Easy-monitor 工具",slug:"easy-monitor-工具",children:[{level:3,title:"非 Egg.js 接入",slug:"非-egg-js-接入",children:[]},{level:3,title:"mailer 邮件服务配置",slug:"mailer-邮件服务配置",children:[]}]}],filePathRelative:"web-developer/back-end/tools/node-monitoring.md",git:{updatedTime:1679291328e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:2},{name:"licong23@xdf.cn",email:"licong23@xdf.cn",commits:1},{name:"黎聪",email:"licong23@xdf.cn",commits:1}]}}},1783:(n,a,s)=>{s.r(a),s.d(a,{default:()=>b});var e=s(6252);const l=(0,e.Wm)("h1",{id:"node-性能监控工具",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#node-性能监控工具","aria-hidden":"true"},"#"),(0,e.Uk)(" node 性能监控工具")],-1),o=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"分析日志"),(0,e.Wm)("li",null,"监控内存泄漏")],-1),r=(0,e.Wm)("h2",{id:"阿里云-node-js-性能平台",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#阿里云-node-js-性能平台","aria-hidden":"true"},"#"),(0,e.Uk)(" 阿里云 Node.js 性能平台")],-1),t={href:"https://www.aliyun.com/product/nodejs",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("Node.js 性能平台"),p=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"不支持 Windows 系统")],-1),c=(0,e.Wm)("p",null,"Egg.js 文档中写了，Node.js 性能平台 (alinode) 目前仅支持 macOS 和 Linux，不支持 Windows。",-1),d=(0,e.Wm)("h2",{id:"easy-monitor-工具",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#easy-monitor-工具","aria-hidden":"true"},"#"),(0,e.Uk)(" Easy-monitor 工具")],-1),u={href:"https://www.yuque.com/hyj1991/easy-monitor",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("文档地址"),h=(0,e.uE)('<p>可以部署到本地，完全私有化。</p><p>安装步骤：</p><ol><li>数据库初始化，建库，下载 sql 执行</li><li>部署控制台，拉取项目代码<code>xprofiler-console</code>，修改配置</li><li>部署采集器管理服务，拉取项目代码<code>xtransit-manager</code>，修改配置</li><li>部署采集器长连接服务，拉取项目代码<code>xtransit-server</code>，修改配置</li><li>node 项目接入</li></ol><h3 id="非-egg-js-接入" tabindex="-1"><a class="header-anchor" href="#非-egg-js-接入" aria-hidden="true">#</a> 非 Egg.js 接入</h3><p>需要下载插件<code>xprofiler</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> xprofiler --save --xprofiler_binary_host_mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/xprofiler\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="mailer-邮件服务配置" tabindex="-1"><a class="header-anchor" href="#mailer-邮件服务配置" aria-hidden="true">#</a> mailer 邮件服务配置</h3><p>框架使用了<code>nodemailer</code>搭建邮件服务。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>config<span class="token punctuation">.</span>mailer <span class="token operator">=</span> <span class="token punctuation">{</span>\n  host<span class="token operator">:</span> <span class="token string">&#39;smtp.qq.com&#39;</span><span class="token punctuation">,</span>\n  port<span class="token operator">:</span> <span class="token number">465</span><span class="token punctuation">,</span>\n  secure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  auth<span class="token operator">:</span> <span class="token punctuation">{</span>\n    user<span class="token operator">:</span> <span class="token string">&#39;1347436746@qq.com&#39;</span><span class="token punctuation">,</span>\n    pass<span class="token operator">:</span> <span class="token string">&#39;boapfbalzaqigccj&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 在QQ邮箱中设置开启IMAP/SMTP服务获得</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',9),b={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,o,r,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",t,[i,(0,e.Wm)(s)])])]),p,c,d,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",u,[m,(0,e.Wm)(s)])])]),h],64)}}}}]);