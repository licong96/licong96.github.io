"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[8105],{8107:(e,t,l)=>{l.r(t),l.d(t,{data:()=>d});const d={key:"v-47b26700",path:"/web-developer/back-end/practice/arbor-day-2022.html",title:"练习-植树节",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"项目地址",slug:"项目地址",children:[]},{level:2,title:"开发",slug:"开发",children:[]},{level:2,title:"1. 需求梳理",slug:"_1-需求梳理",children:[]},{level:2,title:"2. 技术方案",slug:"_2-技术方案",children:[]},{level:2,title:"3. API 设计",slug:"_3-api-设计",children:[]},{level:2,title:"4. 数据表设计",slug:"_4-数据表设计",children:[]},{level:2,title:"5. 连接数据库",slug:"_5-连接数据库",children:[]},{level:2,title:"6. 完成业务逻辑",slug:"_6-完成业务逻辑",children:[]},{level:2,title:"注意事项",slug:"注意事项",children:[]}],filePathRelative:"web-developer/back-end/practice/arbor-day-2022.md",git:{updatedTime:1690944334e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:2},{name:"黎聪",email:"licong23@xdf.cn",commits:2}]}}},6193:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var d=l(6252);const i=(0,d.Wm)("h1",{id:"练习-植树节",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#练习-植树节","aria-hidden":"true"},"#"),(0,d.Uk)(" 练习-植树节")],-1),a=(0,d.Wm)("h2",{id:"项目地址",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#项目地址","aria-hidden":"true"},"#"),(0,d.Uk)(" 项目地址")],-1),r={href:"http://www.lcong.cn/arbor-day-2022/",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("http://www.lcong.cn/arbor-day-2022/"),h=(0,d.uE)('<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><ol><li>需求梳理</li><li>技术方案</li><li>API 设计</li><li>数据表设计</li><li>连接数据库</li><li>完成业务逻辑</li></ol><h2 id="_1-需求梳理" tabindex="-1"><a class="header-anchor" href="#_1-需求梳理" aria-hidden="true">#</a> 1. 需求梳理</h2><p>功能点：</p><ul><li>微信授权获取信息</li><li>保存用户提交的数据</li></ul><p>流程： <img src="http://www.lcong.cn/assets/images/knowledge/computers/node/practice/arbor-day-2022-流程图.png" alt="image"></p><h2 id="_2-技术方案" tabindex="-1"><a class="header-anchor" href="#_2-技术方案" aria-hidden="true">#</a> 2. 技术方案</h2><ul><li>node</li><li>mysql</li><li>sequelize</li></ul><h2 id="_3-api-设计" tabindex="-1"><a class="header-anchor" href="#_3-api-设计" aria-hidden="true">#</a> 3. API 设计</h2><ul><li><code>/loginUser</code>: 授权登录，获取用户信息</li><li><code>/joinActivity</code>: 提交活动</li><li><code>/checkActivity</code>: 检验是否参加了活动</li></ul><h2 id="_4-数据表设计" tabindex="-1"><a class="header-anchor" href="#_4-数据表设计" aria-hidden="true">#</a> 4. 数据表设计</h2><ol><li><p>业务分析：根据需求，分析出需要记录的数据</p></li><li><p>逻辑设计：根据分析出的数据，设计 ER 图，数据类型，对象命名</p></li><li><p>物理设计：将 ER 图转换成数据库模型图和数据表</p></li></ol><p><strong>用户信息表：user_info</strong></p><ul><li>id: 主键</li><li>微信 openid</li><li>微信名称</li><li>微信头像</li></ul><table><thead><tr><th>列名</th><th>数据类型</th><th>命名</th></tr></thead><tbody><tr><td>ID(PK)</td><td>int</td><td>id</td></tr><tr><td>微信 openid</td><td>varchar(50)</td><td>wxOpenId</td></tr><tr><td>微信名称</td><td>varchar(50)</td><td>wxNickName</td></tr><tr><td>微信头像</td><td>varchar(200)</td><td>wxAvatarUrl</td></tr></tbody></table><p><strong>提交数据表：activity</strong></p><ul><li>微信用户 id：关联主键</li><li>树苗名称</li><li>姓名</li><li>手机号</li><li>收获地址</li><li>随机到的树</li></ul><table><thead><tr><th>列名</th><th>数据类型</th><th>命名</th></tr></thead><tbody><tr><td>微信用户 id(PK)</td><td>int</td><td>wxUserId</td></tr><tr><td>树苗名称</td><td>varchar(50)</td><td>treeName</td></tr><tr><td>姓名</td><td>varchar(50)</td><td>stuName</td></tr><tr><td>手机号</td><td>varchar(24)</td><td>mobile</td></tr><tr><td>收获地址</td><td>varchar(128)</td><td>address</td></tr><tr><td>随机到的树</td><td>tinyint(2)</td><td>treeFlag</td></tr></tbody></table><h2 id="_5-连接数据库" tabindex="-1"><a class="header-anchor" href="#_5-连接数据库" aria-hidden="true">#</a> 5. 连接数据库</h2>',19),c=(0,d.Uk)("使用"),s={href:"http://www.midwayjs.org/docs/extensions/sequelize",target:"_blank",rel:"noopener noreferrer"},o=(0,d.Uk)("sequelize"),u=(0,d.Wm)("li",null,[(0,d.Wm)("p",null,"安装必要插件")],-1),p=(0,d.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i @midwayjs/sequelize@3 sequelize mysql2  --save\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>建立模型</li></ul><h2 id="_6-完成业务逻辑" tabindex="-1"><a class="header-anchor" href="#_6-完成业务逻辑" aria-hidden="true">#</a> 6. 完成业务逻辑</h2><p>页面路由和业务逻辑放在一个函数中，有点臃肿，需要拆分优化</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p><strong>驼峰命名与下划线问题</strong></p><p>数据库字段使用<code>下划线</code>命名，返回给前端的数据需要使用<code>驼峰命名</code>，代码中也应该使用<code>驼峰命名</code>比较方便。</p>',7),m={render:function(e,t){const l=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[i,a,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)("a",r,[n,(0,d.Wm)(l)])])]),h,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)("p",null,[c,(0,d.Wm)("a",s,[o,(0,d.Wm)(l)])])]),u]),p],64)}}}}]);