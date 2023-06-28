"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[8519],{8794:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-233657dd",path:"/web-developer/front-end/engineering/eslint.html",title:"ESLint",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装使用",slug:"安装使用",children:[]},{level:2,title:"rules",slug:"rules",children:[]},{level:2,title:"pre-commit",slug:"pre-commit",children:[]},{level:2,title:"extends",slug:"extends",children:[]},{level:2,title:"忽视",slug:"忽视",children:[]}],filePathRelative:"web-developer/front-end/engineering/eslint.md",git:{updatedTime:1682314394e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:3},{name:"黎聪",email:"licong23@xdf.cn",commits:2}]}}},3077:(n,e,s)=>{s.r(e),s.d(e,{default:()=>p});var a=s(6252);const t=(0,a.Wm)("h1",{id:"eslint",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),(0,a.Uk)(" ESLint")],-1),l={href:"https://github.com/midwayjs/mwts/blob/master/.eslintrc.json",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)(".eslintrc.json"),r=(0,a.uE)('<h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h2><ul><li>执行<code>eslint --init</code>初始化</li></ul><h2 id="rules" tabindex="-1"><a class="header-anchor" href="#rules" aria-hidden="true">#</a> rules</h2><ul><li>0 = &#39;off&#39;：关闭</li><li>1 = &#39;warn&#39;: 警告</li><li>2 = &#39;error&#39;: 错误</li></ul><h4 id="比如-必须添加分号规则-否者报错" tabindex="-1"><a class="header-anchor" href="#比如-必须添加分号规则-否者报错" aria-hidden="true">#</a> 比如：必须添加分号规则，否者报错</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="pre-commit" tabindex="-1"><a class="header-anchor" href="#pre-commit" aria-hidden="true">#</a> pre-commit</h2><p>git 提交前运行代码检查</p><p>需要安装<code>husky</code></p><p>使用工具自动生成常见的 lint-staged 配置：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npx mrm@2 lint-staged\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2><p>里面引入一系列优秀团队已经制定好的<code>rules</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;@vue/typescript/recommended&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="忽视" tabindex="-1"><a class="header-anchor" href="#忽视" aria-hidden="true">#</a> 忽视</h2><ul><li><p>对一行代码忽略: <code>// eslint-disable-next-line</code></p></li><li><p>对一段代码忽略: <code>/* eslint-disable */</code></p></li><li><p>对全局变量忽略: 找到.eslintrc.js,添加 &#39;globals&#39;: { &#39;你的全局变量&#39;: null }</p></li></ul>',16),p={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[t,(0,a.Wm)("p",null,[(0,a.Wm)("a",l,[i,(0,a.Wm)(s)])]),r],64)}}}}]);