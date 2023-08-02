"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[3690],{7426:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3b997662",path:"/web-developer/back-end/practice/case2-microblog.html",title:"案例-Koa2 框架生态模拟新浪微博",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"课程流程",slug:"课程流程",children:[]},{level:2,title:"技术选型",slug:"技术选型",children:[]},{level:2,title:"koa2 路由",slug:"koa2-路由",children:[]},{level:2,title:"ejs 渲染引擎",slug:"ejs-渲染引擎",children:[]},{level:2,title:"mysql",slug:"mysql",children:[{level:3,title:"建表",slug:"建表",children:[]},{level:3,title:"外键",slug:"外键",children:[]},{level:3,title:"连表查询",slug:"连表查询",children:[]}]},{level:2,title:"Sequelize",slug:"sequelize",children:[]},{level:2,title:"数据库连接池",slug:"数据库连接池",children:[]},{level:2,title:"redis",slug:"redis",children:[{level:3,title:"session 配置",slug:"session-配置",children:[]}]},{level:2,title:"jwt",slug:"jwt",children:[{level:3,title:"jwt 和 session 的对比",slug:"jwt-和-session-的对比",children:[]}]},{level:2,title:"koa2 开发环境搭建",slug:"koa2-开发环境搭建",children:[{level:3,title:"inspect 调试",slug:"inspect-调试",children:[]},{level:3,title:"jest 单元测试",slug:"jest-单元测试",children:[]}]},{level:2,title:"技术方案设计",slug:"技术方案设计",children:[{level:3,title:"架构设计图",slug:"架构设计图",children:[]},{level:3,title:"页面路由和 API 设计",slug:"页面路由和-api-设计",children:[]},{level:3,title:"数据模型设计",slug:"数据模型设计",children:[]}]},{level:2,title:"功能列表",slug:"功能列表",children:[{level:3,title:"用户管理模块",slug:"用户管理模块",children:[]},{level:3,title:"用户设置模块",slug:"用户设置模块",children:[]},{level:3,title:"图片上传功能",slug:"图片上传功能",children:[]},{level:3,title:"创建微博",slug:"创建微博",children:[]},{level:3,title:"广场页",slug:"广场页",children:[]},{level:3,title:"关注和取消关注",slug:"关注和取消关注",children:[]},{level:3,title:"难点",slug:"难点",children:[]}]},{level:2,title:"上线",slug:"上线",children:[{level:3,title:"线上环境",slug:"线上环境",children:[]},{level:3,title:"将代码部署到服务器",slug:"将代码部署到服务器",children:[]}]},{level:2,title:"最佳实践",slug:"最佳实践",children:[]}],filePathRelative:"web-developer/back-end/practice/case2-microblog.md",git:{updatedTime:1690944334e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:2}]}}},984:(n,s,a)=>{a.r(s),a.d(s,{default:()=>x});var e=a(6252);const l=(0,e.Wm)("h1",{id:"案例-koa2-框架生态模拟新浪微博",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#案例-koa2-框架生态模拟新浪微博","aria-hidden":"true"},"#"),(0,e.Uk)(" 案例-Koa2 框架生态模拟新浪微博")],-1),t={href:"https://pan.baidu.com/disk/home?#/all?vmode=list&path=%2F%E7%BC%96%E7%A8%8B%2F%E6%85%95%E8%AF%BE%E7%BD%91%E5%89%8D%E7%AB%AF%2FL206%20-%20Node.js%2BKoa2%E6%A1%86%E6%9E%B6%E7%94%9F%E6%80%81%E5%AE%9E%E6%88%98%20-%20%E4%BB%8E%E9%9B%B6%E6%A8%A1%E6%8B%9F%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A%EF%BC%88%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%89%20-%20366%E5%85%83",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("L206 - Node.js+Koa2 框架生态实战 - 从零模拟新浪微博"),o=(0,e.uE)('<h2 id="课程流程" tabindex="-1"><a class="header-anchor" href="#课程流程" aria-hidden="true">#</a> 课程流程</h2><ul><li>使用 koa2 脚手架工具创建项目</li><li>添加<code>corss-env</code>工具用来区分环境，添加<code>cross-env NODE_ENV=dev|production</code></li><li>重构页面结构</li><li>mysql 下载安装、接入、建库、建表</li><li>sequelize 工具</li><li>数据库连接池机制</li><li>redis &amp; cookie 和 session</li><li>jwt 做登录 &amp; 客户端存储用户信息</li><li>koa2 开发环境搭建</li><li>jest 单元测试</li><li><a href="#%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88%E8%AE%BE%E8%AE%A1">技术方案设计</a></li><li><a href="#%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8">功能列表</a></li><li><a href="#%E4%B8%8A%E7%BA%BF">上线</a></li><li><a href="#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">最佳实践</a></li></ul><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2><ul><li>框架 koa2</li><li>数据库 mysql</li><li>缓存数据库 redis</li><li>登录技术 session cookie | jwt</li><li>前端渲染引擎 ejs</li><li>单元测试 jest</li><li>数据库操作 sequelize</li><li>本地开发工具 nodemon</li><li>线上进程管理 PM2</li><li>校验数据 json-schema ajv</li></ul><h2 id="koa2-路由" tabindex="-1"><a class="header-anchor" href="#koa2-路由" aria-hidden="true">#</a> koa2 路由</h2><ul><li><code>get</code>请求获取参数: <code>ctx.request.params</code></li><li><code>post</code>请求获取参数: <code>ctx.request.body</code></li></ul><p>动态路由参数<code>:userName</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/profile/:userName&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> userName <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>params<span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>\n    userName<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 多个参数</span>\n<span class="token comment">// router.get(&#39;/profile/:userName/:pageIndex&#39;, async (ctx, next) =&gt; {})</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="ejs-渲染引擎" tabindex="-1"><a class="header-anchor" href="#ejs-渲染引擎" aria-hidden="true">#</a> ejs 渲染引擎</h2>',9),i={href:"https://ejs.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("文档地址"),r=(0,e.uE)('<ul><li><code>locals</code>：所有局部数据将存储在<code>locals</code>对象上，使用<code>locals.undefined</code>可以防止字段未定义报错</li></ul><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><ul><li>下载、安装、建库</li><li>建表、sql</li><li>外键、连表查询</li></ul><h3 id="建表" tabindex="-1"><a class="header-anchor" href="#建表" aria-hidden="true">#</a> 建表</h3><p>建立 users 表、建立 blogs 表</p><h3 id="外键" tabindex="-1"><a class="header-anchor" href="#外键" aria-hidden="true">#</a> 外键</h3><ul><li>创建外键</li><li>更新限制 &amp; 删除级联</li><li>连表查询</li></ul><p>创建成功之后，会有<code>FOREIGN KEY</code>标识，数据的更新被受到限制，数据的删除会同步。</p><p><strong>级联：</strong></p><p>设置更新时和删除时的值为<code>CASCADE</code></p><p><strong>ER 图：</strong></p><p>用图来表示 <code>blogs - userid</code> 外键到 <code>users - id</code></p><h3 id="连表查询" tabindex="-1"><a class="header-anchor" href="#连表查询" aria-hidden="true">#</a> 连表查询</h3><blockquote><p>没有外键也是可以用的，但一般情况下都是联合起来使用</p></blockquote><p>使用<code>inner join</code>：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> blogs <span class="token keyword">inner</span> <span class="token keyword">join</span> users <span class="token keyword">on</span> blogs<span class="token punctuation">.</span>userid <span class="token operator">=</span> users<span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> Sequelize</h2>',17),u=(0,e.Uk)("使用文档地址 Sequelize"),d=(0,e.uE)('<h2 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池" aria-hidden="true">#</a> 数据库连接池</h2><p>线上环境使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> conf <span class="token operator">=</span> <span class="token punctuation">{</span>\n  host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>\n  dialect<span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// 连接池</span>\nconf<span class="token punctuation">.</span>pool <span class="token operator">=</span> <span class="token punctuation">{</span>\n  max<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 连接池中最大的连接数量</span>\n  min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 最小数量</span>\n  idle<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 如果一个连接池 10s 之内没有被使用，则释放</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;case2-microblog&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span> conf<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><p>安装依赖：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> redis koa-redis koa-generic-session\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">REDIS_CONF</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../conf/db&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建客户端</span>\n<span class="token keyword">const</span> redisClient <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token constant">REDIS_CONF</span><span class="token punctuation">.</span>port<span class="token punctuation">,</span> <span class="token constant">REDIS_CONF</span><span class="token punctuation">.</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>\nredisClient<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;redis error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="session-配置" tabindex="-1"><a class="header-anchor" href="#session-配置" aria-hidden="true">#</a> session 配置</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-generic-session&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> redisStore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-redis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;UIsdf_7878#$&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  <span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    key<span class="token operator">:</span> <span class="token string">&#39;weibo.sid&#39;</span><span class="token punctuation">,</span> <span class="token comment">// cookie name 默认是 `koa.sid`</span>\n    prefix<span class="token operator">:</span> <span class="token string">&#39;weibo:sess:&#39;</span><span class="token punctuation">,</span> <span class="token comment">// redis key 的前缀，默认是 `koa:sess:`</span>\n    cookie<span class="token operator">:</span> <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n      httpOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      maxAge<span class="token operator">:</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 单位 ms</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    store<span class="token operator">:</span> <span class="token function">redisStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      all<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">REDIS_CONF</span><span class="token punctuation">.</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">REDIS_CONF</span><span class="token punctuation">.</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> jwt</h2><ul><li>json web token</li><li>用户认证成功之后，server 端返回一个加密的 token 给客户端</li><li>客户端后续每次请求都带 token，以示当前的用户身份</li></ul><p>安装使用<code>koa-jwt</code>：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> koa-jwt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装使用加密工具<code>jsonwebtoken</code>：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> jsonwebtoken\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>后续接口请求在要<code>headers</code>中添加<code>Authorization = Bearer ***</code></p><h3 id="jwt-和-session-的对比" tabindex="-1"><a class="header-anchor" href="#jwt-和-session-的对比" aria-hidden="true">#</a> jwt 和 session 的对比</h3><ul><li>都是为了解决：登录 &amp; 存储登录用户的信息</li><li>jwt 用户信息加密存储在客户端，不依赖 cookie，可跨域</li><li>session 用户信息存储在服务端，依赖 cookie，默认不可跨域</li><li>大型系统中两者可共用</li><li>jwt 更适合于服务节点较多，跨域比较多的系统</li><li>session 更适合统一的 web 服务</li></ul><h2 id="koa2-开发环境搭建" tabindex="-1"><a class="header-anchor" href="#koa2-开发环境搭建" aria-hidden="true">#</a> koa2 开发环境搭建</h2><ul><li>配置 eslint，以及 pre-commit 限制提交</li><li>inspect 调试</li><li>404 页和错误页</li></ul><h3 id="inspect-调试" tabindex="-1"><a class="header-anchor" href="#inspect-调试" aria-hidden="true">#</a> inspect 调试</h3><p>在<code>package.json - scripts</code>中添加<code>--inspect=9229</code>：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;dev&quot;: &quot;cross-env NODE_ENV=dev ./node_modules/.bin/nodemon --inspect=9229 bin/www&quot;,\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在代码中添加<code>debugger</code>就可以在浏览器 DevTools 中调试 node。</p><h3 id="jest-单元测试" tabindex="-1"><a class="header-anchor" href="#jest-单元测试" aria-hidden="true">#</a> jest 单元测试</h3>',26),k={href:"https://www.jestjs.cn/",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("文档地址"),b=(0,e.uE)('<ul><li>常用的断言</li><li>测试 http 接口</li></ul><p>安装<code>supertest</code>测试 http 接口：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> supertest -D\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;supertest&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../src/app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;string 接口返回&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;koa2 string&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="技术方案设计" tabindex="-1"><a class="header-anchor" href="#技术方案设计" aria-hidden="true">#</a> 技术方案设计</h2><ul><li>架构设计</li><li>页面路由和 API 设计</li><li>数据模型设计</li></ul><h3 id="架构设计图" tabindex="-1"><a class="header-anchor" href="#架构设计图" aria-hidden="true">#</a> 架构设计图</h3><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/node/case2-1.png" alt="image"></p><ul><li>routers：只负责接收参数和派发数据，校验入参规则，校验登录</li><li>controller：负责页面逻辑处理，调用 services 获取数据，统一返回格式</li><li>services：负责数据处理，操作数据库增删改查，数据格式化的处理</li><li>cache: 缓存公共的数据到 redis 中</li></ul><div class="custom-container tip"><p class="custom-container-title">注意</p><p><code>services</code>和<code>controller</code>模块有不同的关注点，不一定是完全对应的关系，里面的函数甚至字段名都可能不一样，<code>controller</code>关注的是业务层面，<code>services</code>关注的是数据层面。</p></div><h3 id="页面路由和-api-设计" tabindex="-1"><a class="header-anchor" href="#页面路由和-api-设计" aria-hidden="true">#</a> 页面路由和 API 设计</h3><p>routes：</p><ul><li><code>routes -&gt; api</code>负责接口</li><li><code>routes -&gt; view</code>负责页面</li></ul><p>页面：</p><ul><li>注册页面 - /register</li><li>登录 - /login</li><li>首页 - /</li><li>个人主页 - /profile/:userName</li><li>at 页 - /atMe</li><li>广场 - /square</li><li>设置 - /setting</li><li>错误页 - /error</li><li>404 - /*</li></ul><p><strong>注册页面</strong></p><ul><li>注册接口：<code>/api/user/register</code></li><li>校验用户名是否存在：<code>/api/user/isExist</code></li></ul><p><strong>登录页面</strong></p><ul><li>登录：<code>api/user/login</code></li></ul><p><strong>用户信息设置页面</strong></p><ul><li>修改用户信息：<code>/api/user/changeInfo</code></li><li>修改密码：<code>/api/user/changePassword</code></li><li>图片上传：<code>/api.utils/upload</code></li><li>退出登录： <code>/api/user/logout</code></li></ul><p><strong>首页</strong></p><ul><li>创建微博：<code>/api/blog/create</code></li><li>加载更多: <code>/api/blog/loadMore/:pageIndex</code></li></ul><h3 id="数据模型设计" tabindex="-1"><a class="header-anchor" href="#数据模型设计" aria-hidden="true">#</a> 数据模型设计</h3><ul><li>回顾 ER 图</li><li>关系型数据库的三大范式</li><li>数据模型设计</li></ul><p><strong>回顾 ER 图</strong><img src="http://www.lcong.cn/assets/images/knowledge/computers/node/case2-3.png" alt="image"></p><p><strong>关系型数据库的三大范式</strong></p><ol><li>属性的原子性：每一列都不可再拆解</li><li>记录的唯一性：有唯一主键，其他属性都依赖于主键</li><li>字段的冗余性：不存在数据冗余和传递依赖</li></ol><p><strong>数据模型设计</strong><img src="http://www.lcong.cn/assets/images/knowledge/computers/node/case2-4.png" alt="image"></p><h2 id="功能列表" tabindex="-1"><a class="header-anchor" href="#功能列表" aria-hidden="true">#</a> 功能列表</h2><ul><li>用户管理</li><li>用户设置</li><li>创建微博</li><li>个人主页</li><li>广场页</li><li>关注和取消关注</li><li>首页</li><li><code>@</code>和回复</li><li><code>@</code>提到我的</li></ul><h3 id="用户管理模块" tabindex="-1"><a class="header-anchor" href="#用户管理模块" aria-hidden="true">#</a> 用户管理模块</h3><ol><li>页面路由和模板</li><li>数据建模</li><li>开发注册功能</li><li>开发登录功能</li><li>抽离登录验证中间件</li><li>单元测试</li></ol><h4 id="_1-页面路由和模板" tabindex="-1"><a class="header-anchor" href="#_1-页面路由和模板" aria-hidden="true">#</a> 1. 页面路由和模板</h4><p>回顾技术方案，添加用户管理模块的前端 view 路由，主要用来渲染页面</p><h4 id="_2-数据建模" tabindex="-1"><a class="header-anchor" href="#_2-数据建模" aria-hidden="true">#</a> 2. 数据建模</h4><p>回顾技术方案，使用<code>sequelize.define</code>创建表模型，添加字段和约束，执行<code>sync</code></p><h4 id="_3-开发注册功能" tabindex="-1"><a class="header-anchor" href="#_3-开发注册功能" aria-hidden="true">#</a> 3. 开发注册功能</h4><p>回顾技术方案，开发注册接口，密码加密和用户信息校验</p>',40),m=(0,e.Wm)("li",null,[(0,e.Uk)("加密工具："),(0,e.Wm)("code",null,"crypto")],-1),g=(0,e.Wm)("li",null,[(0,e.Wm)("code",null,"json-schema"),(0,e.Uk)("校验入参规则；使用工具："),(0,e.Wm)("code",null,"ajv")],-1),v={href:"https://blog.csdn.net/tjj3027/article/details/107376215",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("json-schema 约束条件"),w=(0,e.uE)('<h3 id="用户设置模块" tabindex="-1"><a class="header-anchor" href="#用户设置模块" aria-hidden="true">#</a> 用户设置模块</h3><ol><li>页面：模板和路由</li><li>开发接口：修改信息、修改密码、退出登录、图片上传</li></ol><h3 id="图片上传功能" tabindex="-1"><a class="header-anchor" href="#图片上传功能" aria-hidden="true">#</a> 图片上传功能</h3><p>使用插件：</p><ul><li>formidable-upload-koa: 上传文件</li><li>fs-extra: 操作文件</li></ul><h4 id="使用统一文件服务" tabindex="-1"><a class="header-anchor" href="#使用统一文件服务" aria-hidden="true">#</a> 使用统一文件服务</h4><ul><li>图片服务器，云服务，CDN</li></ul><h3 id="创建微博" tabindex="-1"><a class="header-anchor" href="#创建微博" aria-hidden="true">#</a> 创建微博</h3><ul><li>数据建模，外键关联</li><li>创建页面和模板</li><li>预防 xss 攻击</li><li>数据格式校验，在插入数据库之前需要做</li><li>单元测试，运行之前用例，再开发新用例</li></ul><h3 id="广场页" tabindex="-1"><a class="header-anchor" href="#广场页" aria-hidden="true">#</a> 广场页</h3><ul><li>使用<code>cache</code>缓存广场数据</li></ul><h3 id="关注和取消关注" tabindex="-1"><a class="header-anchor" href="#关注和取消关注" aria-hidden="true">#</a> 关注和取消关注</h3><ul><li>1.创建数据模型：用户关系</li><li>2.路由和接口开发</li></ul><h4 id="_1-创建数据模型" tabindex="-1"><a class="header-anchor" href="#_1-创建数据模型" aria-hidden="true">#</a> 1.创建数据模型</h4><ol><li>回顾数据模型设计</li><li>开发数据模型</li><li>执行<code>sync.js</code>同步到数据库</li></ol><h3 id="难点" tabindex="-1"><a class="header-anchor" href="#难点" aria-hidden="true">#</a> 难点</h3><ul><li>数据模型设计，外键关联，多表查询</li></ul><h2 id="上线" tabindex="-1"><a class="header-anchor" href="#上线" aria-hidden="true">#</a> 上线</h2><ol><li>线上环境</li><li>将代码部署到服务器</li><li>执行命令重启服务</li></ol><h3 id="线上环境" tabindex="-1"><a class="header-anchor" href="#线上环境" aria-hidden="true">#</a> 线上环境</h3><p>需要前端开发人员了解必要的理论和工具：</p><ul><li>pm2 配置和使用</li><li>线上日志</li><li>nginx 代理</li></ul><h4 id="pm2-配置和使用" tabindex="-1"><a class="header-anchor" href="#pm2-配置和使用" aria-hidden="true">#</a> pm2 配置和使用</h4><ol><li>全局安装：</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 -g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li><p>添加<code>pm2.conf.json</code>配置文件</p></li><li><p>修改<code>package.json</code>中配置命令，并运行：</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># &quot;prd&quot;: &quot;cross-env NODE_ENV=production pm2 start pm2.conf.json&quot;</span>\n<span class="token function">npm</span> run prd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="线上日志" tabindex="-1"><a class="header-anchor" href="#线上日志" aria-hidden="true">#</a> 线上日志</h4><p>线上记录日志，可以在代码中使用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会记录到 /logs/www-error.log 文件中</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会记录到 /logs/www-out.log 文件中</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="nginx-代理" tabindex="-1"><a class="header-anchor" href="#nginx-代理" aria-hidden="true">#</a> nginx 代理</h4><ul><li>设置反向代理</li><li>重启 nginx</li><li>记录<code>access log</code>访问日志</li></ul><h3 id="将代码部署到服务器" tabindex="-1"><a class="header-anchor" href="#将代码部署到服务器" aria-hidden="true">#</a> 将代码部署到服务器</h3><p>如何部署，各个公司有不同的标准，属于团队管理的一部分。自己要去了解自己公司的部署流程。</p><p><strong>大公司</strong></p><ul><li>有自研上线平台，专业团队维护，制定规范，傻瓜式操作。</li><li>提交上线单，审批，检测代码，指定时间窗口发布。</li></ul><p><strong>中小公司</strong></p><ul><li>git 服务上加<code>webhook</code>，合并分支自动触发部署</li><li>使用<code>pm2 deploy</code>工具，手动将本地代码部署到线上</li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ul><li>项目结构 <ul><li>分层：<code>routes</code>、<code>controller</code>、<code>cache</code>、<code>services</code>、<code>db</code> 等</li><li>抽离中间件</li><li>抽离<code>utils</code>、<code>conf</code> 等</li><li>区分<code>app</code>和<code>www</code></li><li>用<code>NODE_ENV</code>区分环境</li></ul></li><li>错误处理 <ul><li>规范错误数据（错误码、错误信息）</li><li>统一错误输出（error 页）</li><li>对输入数据进行<code>schema</code>验证</li></ul></li><li>代码风格 <ul><li>使用<code>eslint</code>并强制<code>pre-commit</code></li><li>使用<code>jsdoc</code>注释文件和函数</li><li>使用<code>async</code>/<code>await</code>编写异步逻辑</li><li>规范<code>git</code>分支和<code>commit</code>格式</li></ul></li><li>质量保证 <ul><li>编写单元测试</li></ul></li><li>安全 <ul><li>处理<code>xss</code></li><li>使用<code>ORM</code>防止<code>sql</code>注入，或使用<code>Sequelize</code></li><li>加密敏感信息</li></ul></li><li>线上环境 <ul><li>记录日志</li><li>多进程</li><li>进程守护</li><li><code>nginx</code>代理</li><li>分服务（mysql、redis）</li><li>系统监控<code>APM</code></li></ul></li></ul>',40),x={render:function(n,s){const a=(0,e.up)("OutboundLink"),x=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[p,(0,e.Wm)(a)])]),o,(0,e.Wm)("p",null,[(0,e.Wm)("a",i,[c,(0,e.Wm)(a)])]),r,(0,e.Wm)("p",null,[(0,e.Wm)(x,{to:"/web-developer/back-end/database/sequelize.html"},{default:(0,e.w5)((()=>[u])),_:1})]),d,(0,e.Wm)("p",null,[(0,e.Wm)("a",k,[h,(0,e.Wm)(a)])]),b,(0,e.Wm)("ul",null,[m,g,(0,e.Wm)("li",null,[(0,e.Wm)("a",v,[f,(0,e.Wm)(a)])])]),w],64)}}}}]);