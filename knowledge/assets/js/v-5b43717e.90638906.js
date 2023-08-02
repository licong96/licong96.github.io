"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[7226],{1229:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5b43717e",path:"/web-developer/back-end/node/egg.html",title:"框架 - Egg.js",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"日志问题",slug:"日志问题",children:[]},{level:2,title:"配置问题",slug:"配置问题",children:[]}],filePathRelative:"web-developer/back-end/node/egg.md",git:{updatedTime:1676882536e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:2},{name:"licong96",email:"licong19961204@gmail.com",commits:1}]}}},1371:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(6252);const p=(0,e.Wm)("h1",{id:"框架-egg-js",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#框架-egg-js","aria-hidden":"true"},"#"),(0,e.Uk)(" 框架 - Egg.js")],-1),t={href:"https://www.eggjs.org/zh-CN/intro/quickstart",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("文档"),c=(0,e.uE)('<h2 id="日志问题" tabindex="-1"><a class="header-anchor" href="#日志问题" aria-hidden="true">#</a> 日志问题</h2><p><code>npm run start</code>运行之后，注意看输出的日志保存地址，默认配置下并没有保存到项目文件夹中，而是保存到了根目录。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[egg-scripts] Save log file to C:\\Users\\licong23\\logs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置问题" tabindex="-1"><a class="header-anchor" href="#配置问题" aria-hidden="true">#</a> 配置问题</h2><p>使用脚手架快速搭建的项目，在<code>config.default.js</code>中修改日志<code>dir</code>配置没有生效。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">appInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * built-in config\n   * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Egg<span class="token punctuation">.</span>EggAppConfig<span class="token punctuation">}</span></span>\n   **/</span>\n  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">(</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// use for cookie sign key, should change to your own and keep security</span>\n  config<span class="token punctuation">.</span>keys <span class="token operator">=</span> appInfo<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;_1638953880850_2501&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// add your middleware config here</span>\n  config<span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// add your user config here</span>\n  <span class="token keyword">const</span> userConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// myAppName: &#39;egg&#39;,</span>\n    logger<span class="token operator">:</span> <span class="token punctuation">{</span>\n      dir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;logs&#39;</span><span class="token punctuation">,</span> appInfo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>config<span class="token punctuation">,</span>\n    <span class="token operator">...</span>userConfig<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',6),l={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",t,[o,(0,e.Wm)(a)])])]),c],64)}}}}]);