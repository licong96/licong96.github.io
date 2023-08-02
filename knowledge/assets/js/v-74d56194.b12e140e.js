"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[8253],{2045:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-74d56194",path:"/web-developer/back-end/wechat/login.html",title:"微信登录",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"1. 微信开放平台",slug:"_1-微信开放平台",children:[]},{level:3,title:"2. 微信公众号",slug:"_2-微信公众号",children:[]},{level:3,title:"网页授权",slug:"网页授权",children:[]},{level:2,title:"History路由配置",slug:"history路由配置",children:[{level:3,title:"H5端",slug:"h5端",children:[]}]},{level:2,title:"nginx配置",slug:"nginx配置",children:[]},{level:2,title:"request-promise",slug:"request-promise",children:[]},{level:2,title:"接入微信JS-SDK",slug:"接入微信js-sdk",children:[]}],filePathRelative:"web-developer/back-end/wechat/login.md",git:{updatedTime:1646300916e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:1}]}}},4967:(e,n,s)=>{s.r(n),s.d(n,{default:()=>w});var a=s(6252);const o=(0,a.uE)('<h1 id="微信登录" tabindex="-1"><a class="header-anchor" href="#微信登录" aria-hidden="true">#</a> 微信登录</h1><p>两种途径：</p><ol><li>微信开放平台</li><li>微信公众号</li></ol><p>之所以有两种途径，是因为微信只提供扫码登录，PC端可以直接扫码登录，手机端更优化的方式是微信公众号跳转登录链接</p><p><strong>1. 微信开放平台</strong></p><p>适用于PC端，扫码登录。</p><p><strong>2. 微信公众号</strong></p><p>适用于手机端，跳转登录地址授权。</p><h3 id="_1-微信开放平台" tabindex="-1"><a class="header-anchor" href="#_1-微信开放平台" aria-hidden="true">#</a> 1. 微信开放平台</h3><p>面向对象更加广泛，可以关联移动应用、网站、公众号。个人无法使用。</p>',10),c={href:"https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("开放平台文档"),i=(0,a.uE)('<p>网址应用登录方式：</p><ol><li>第三方发起微信授权登录请求，微信用户允许授权第三方应用后，微信会拉起应用或重定向到第三方网站，并且带上授权临时票据code参数；</li><li>通过code参数加上AppID和AppSecret等，通过API换取access_token；</li><li>通过access_token进行接口调用，获取用户基本数据资源或帮助用户实现基本操作。</li></ol><p>开放平台授权后的<code>openid</code>和公众号授权后的<code>openid</code>是相互独立的，是不同的。想要解决需要在开放平台里面绑定公众号，获取用户信息的时候，会返回用户统一标识<code>unionid</code>，这个是唯一的。</p><h3 id="_2-微信公众号" tabindex="-1"><a class="header-anchor" href="#_2-微信公众号" aria-hidden="true">#</a> 2. 微信公众号</h3>',4),t={href:"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("公众号文档"),p=(0,a.uE)('<p>登录有两种实现方法:</p><ol><li>没有自己的账号体系，直接拉取微信用户信息来进行登录</li><li>有自己的账号体系，授权成功之后需要绑定自己的账号</li></ol><h4 id="_1-没有自己的账号体系" tabindex="-1"><a class="header-anchor" href="#_1-没有自己的账号体系" aria-hidden="true">#</a> 1. 没有自己的账号体系</h4><p>授权成功之后，无需注册和绑定，直接获取用户昵称和头像。</p><h4 id="_2-有自己的账号体系" tabindex="-1"><a class="header-anchor" href="#_2-有自己的账号体系" aria-hidden="true">#</a> 2. 有自己的账号体系</h4><p>授权成功之后，还需要将微信与当前系统的账号进行绑定。</p><p>需要有用户表，通过<code>openid</code>进行绑定。授权拿到<code>openid</code>之后，判断是否有绑定过。如果没有绑定过，需要跳转到一个输入账号密码或手机号的绑定页面。如果已经绑定过，可以直接通过<code>openid</code>获取用户表里的数据，直接跳转到登录成功后的页面。</p>',7),d={id:"网页授权",tabindex:"-1"},u=(0,a.Wm)("a",{class:"header-anchor",href:"#网页授权","aria-hidden":"true"},"#",-1),h=(0,a.Uk)(),b={href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("网页授权"),g=(0,a.uE)('<p>流程分为四步：</p><ol><li><p>引导用户进入授权页面同意授权，获取code</p></li><li><p>通过code换取网页授权access_token（与基础支持中的access_token不同）</p></li><li><p>如果需要，开发者可以刷新网页授权access_token，避免过期</p></li><li><p>通过网页授权access_token和openid获取用户基本信息（支持UnionID机制）</p></li></ol><p><strong>1. 用户同意授权，获取code</strong></p><p>前端拼接参数跳转到微信授权页面，用户同意之后，跳回到指定页面，地址中有<code>code</code>。</p><p>注意：</p><ul><li>拼接参数的顺序</li><li>回调地址必须是在公网能够访问到</li><li>回调地址域名的设置；在接口权限中修改授权回调页面域名，不需要输入<code>http://</code></li><li><code>redirect_uri</code>如果有<code>#</code>需要<code>encodeURIComponent</code></li></ul><p>授权地址：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://open.weixin.qq.com/connect/oauth2/authorize?\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>scope</code>参数，有两种选择，一种不弹出授权页面(snsapi_base)，一种会弹出授权页面(snsapi_userinfo)。两种方式能获取到的信息有很大的差别。</p><p>一个可能的BUG，如果用户第一次使用<code>snsapi_userinfo</code>同意之后，后面再使用<code>snsapi_base</code>也能获得同<code>snsapi_userinfo</code>一样的信息。</p></div><p><strong>2. 通过code换取网页授权access_token</strong></p><p>前端拿到<code>code</code>之后，调用后端接口，将<code>code</code>传过去，后端拿<code>code</code>再去请求微信接口，拿<code>access_token</code>和<code>openid</code>给到前端。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果第1步中网页授权的<code>scope</code>参数为<code>snsapi_base</code>，则本步骤中获取到网页授权<code>access_token</code>的同时，也获取到了<code>openid</code>，<code>snsapi_base</code>式的网页授权流程即到此为止。</p></div><p><strong>3. 刷新access_token（如果需要）</strong></p><p><code>access_token</code>有效期只有2小时，如果过期的话，可以调用微信接口，通过第2步拿到的<code>refresh_token</code>参数进行刷新，拿到最新的<code>access_token</code>给到前端。<code>refresh_token</code>有效期为30天，当<code>refresh_token</code>失效之后，需要用户重新授权。</p><p><strong>4. 拉取用户信息(需scope为 snsapi_userinfo)</strong></p><p>前端调用后端接口，通过<code>access_token</code>和<code>openid</code>获取用户信息，有<code>用户昵称</code>、<code>性别</code>、<code>头像</code>、<code>填写的省份和城市</code></p><h2 id="history路由配置" tabindex="-1"><a class="header-anchor" href="#history路由配置" aria-hidden="true">#</a> History路由配置</h2><h3 id="h5端" tabindex="-1"><a class="header-anchor" href="#h5端" aria-hidden="true">#</a> H5端</h3><p>vue-router 4.0 设置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/wechat-h5/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  routes\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>vue.config.js设置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  publicPath<span class="token operator">:</span> <span class="token string">&quot;/wechat-h5/&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> nginx配置</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location /wechat-h5/ {\n\ttry_files $uri $uri/ /wechat-h5/index.html;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="request-promise" tabindex="-1"><a class="header-anchor" href="#request-promise" aria-hidden="true">#</a> request-promise</h2>',25),k=(0,a.Uk)("请求插件 "),x={href:"https://github.com/request/request-promise",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("request-promise"),v=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var options = {\n    uri: &#39;https://api.github.com/user/repos&#39;,\n    qs: {\n        access_token: &#39;xxxxx xxxxx&#39; // -&gt; uri + &#39;?access_token=xxxxx%20xxxxx&#39;\n    },\n    headers: {\n        &#39;User-Agent&#39;: &#39;Request-Promise&#39;\n    },\n    json: true // Automatically parses the JSON string in the response\n};\n\nrp(options)\n    .then(function (repos) {\n        console.log(&#39;User has %d repos&#39;, repos.length);\n    })\n    .catch(function (err) {\n        // API call failed...\n    });\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="接入微信js-sdk" tabindex="-1"><a class="header-anchor" href="#接入微信js-sdk" aria-hidden="true">#</a> 接入微信JS-SDK</h2>',2),f={href:"https://www.npmjs.com/package/weixin-js-sdk",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("weixin-js-sdk npm"),w={render:function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[o,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",c,[r,(0,a.Wm)(s)])])]),i,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",t,[l,(0,a.Wm)(s)])])]),p,(0,a.Wm)("h3",d,[u,h,(0,a.Wm)("a",b,[m,(0,a.Wm)(s)])]),g,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[k,(0,a.Wm)("a",x,[_,(0,a.Wm)(s)])])]),v,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",f,[W,(0,a.Wm)(s)])])])],64)}}}}]);