"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[6252],{8489:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-0bf57621",path:"/web-developer/front-end/javascript/typescript.html",title:"TypeScript",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"在Window下添加属性",slug:"在window下添加属性",children:[]},{level:3,title:"忽视警告",slug:"忽视警告",children:[]},{level:3,title:"使用[]避开检测",slug:"使用-避开检测",children:[]}],filePathRelative:"web-developer/front-end/javascript/typescript.md",git:{updatedTime:1674894334e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:2},{name:"licong96",email:"licong19961204@gmail.com",commits:1}]}}},1347:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><h3 id="在window下添加属性" tabindex="-1"><a class="header-anchor" href="#在window下添加属性" aria-hidden="true">#</a> 在Window下添加属性</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare global <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>\n\t\tkey<span class="token operator">:</span> any\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="忽视警告" tabindex="-1"><a class="header-anchor" href="#忽视警告" aria-hidden="true">#</a> 忽视警告</h3><p>注释会忽略下一行中产生的所有错误</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// @ts-ignore</span>\n\n<span class="token comment">// eslint-disable-next-line to ignore the next line.</span>\n\n<span class="token comment">/* eslint-disable */</span> to ignore all warnings <span class="token keyword">in</span> a file<span class="token punctuation">.</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="使用-避开检测" tabindex="-1"><a class="header-anchor" href="#使用-避开检测" aria-hidden="true">#</a> 使用<code>[]</code>避开检测</h3><p>往一个第三方实例的<code>prototype</code>属性上添加自定义的属性和方法</p><p>这样用会报错：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>attribute <span class="token operator">=</span> <span class="token string">&#39;value&#39;</span>  <span class="token comment">// Property &#39;attribute&#39; does not exist on type &#39;Object&#39;.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这样用可以通过：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span><span class="token string">&#39;attribute&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;value&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',12),t={render:function(n,a){return e}}}}]);