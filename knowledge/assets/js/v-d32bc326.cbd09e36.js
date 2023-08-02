"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[7507],{5975:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-d32bc326",path:"/web-developer/front-end/utils/",title:"工具 & 库",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"html2canvas",slug:"html2canvas",children:[]},{level:3,title:"生成二维码",slug:"生成二维码",children:[]},{level:3,title:"图片压缩",slug:"图片压缩",children:[]},{level:3,title:"省市区数据",slug:"省市区数据",children:[]},{level:2,title:"Cmder",slug:"cmder",children:[]}],filePathRelative:"web-developer/front-end/utils/README.md",git:{updatedTime:1655965522e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:4},{name:"licong23@xdf.cn",email:"licong23@xdf.cn",commits:1}]}}},2969:(n,a,s)=>{s.r(a),s.d(a,{default:()=>w});var e=s(6252);const t=(0,e.Wm)("h1",{id:"工具-库",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#工具-库","aria-hidden":"true"},"#"),(0,e.Uk)(" 工具 & 库")],-1),p=(0,e.Wm)("h3",{id:"html2canvas",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#html2canvas","aria-hidden":"true"},"#"),(0,e.Uk)(" html2canvas")],-1),l=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("解决清晰度问题，部分手机不兼容，"),(0,e.Wm)("code",null,"dpi"),(0,e.Uk)("太高会有兼容问题")])],-1),o={href:"https://github.com/niklasvh/html2canvas/pull/1087",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("参考 html2canvas/pull/1087"),r=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"使用这个版本: https://hzxdffe-static.oss-cn-hangzhou.aliyuncs.com/public/html2canvas.min.js")],-1),u=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createPoster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;html2canvas&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n    dpi<span class="token operator">:</span> window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">*</span> <span class="token number">300</span><span class="token punctuation">,</span>\n    useCORS<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    width<span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>\n    height<span class="token operator">:</span> <span class="token number">667</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>html2canvas<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window\n      <span class="token punctuation">.</span><span class="token function">html2canvas</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">canvas<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        posterUrl<span class="token punctuation">.</span>value <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="生成二维码" tabindex="-1"><a class="header-anchor" href="#生成二维码" aria-hidden="true">#</a> 生成二维码</h3>',2),i={href:"https://www.npmjs.com/package/qrcode.vue",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("qrcode.vue"),m=(0,e.Wm)("h3",{id:"图片压缩",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#图片压缩","aria-hidden":"true"},"#"),(0,e.Uk)(" 图片压缩")],-1),d={href:"https://github.com/fengyuanchen/compressorjs",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("compressorjs"),b=(0,e.Wm)("h3",{id:"省市区数据",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#省市区数据","aria-hidden":"true"},"#"),(0,e.Uk)(" 省市区数据")],-1),g={href:"https://github.com/youzan/vant/edit/dev/packages/vant-area-data/src/index.ts",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("vant-area-data"),f=(0,e.Wm)("h2",{id:"cmder",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#cmder","aria-hidden":"true"},"#"),(0,e.Uk)(" Cmder")],-1),W=(0,e.Wm)("p",null,"widow下的命令行工具",-1),w={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,p,(0,e.Wm)("ul",null,[l,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",o,[c,(0,e.Wm)(s)])])]),r]),u,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",i,[k,(0,e.Wm)(s)])])]),m,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",d,[h,(0,e.Wm)(s)])])]),b,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",g,[v,(0,e.Wm)(s)])])]),f,W],64)}}}}]);