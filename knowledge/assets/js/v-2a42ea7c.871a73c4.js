"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[7318],{8268:(l,i,e)=>{e.r(i),e.d(i,{data:()=>a});const a={key:"v-2a42ea7c",path:"/web-developer/project-design/development-process.html",title:"项目开发流程",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.需求分析",slug:"_1-需求分析",children:[{level:3,title:"分析接口可行性",slug:"分析接口可行性",children:[]},{level:3,title:"提出问题",slug:"提出问题",children:[]}]},{level:2,title:"2.技术方案设计",slug:"_2-技术方案设计",children:[{level:3,title:"前端设计",slug:"前端设计",children:[]},{level:3,title:"后端设计",slug:"后端设计",children:[]}]},{level:2,title:"3.开发",slug:"_3-开发",children:[{level:3,title:"前端开发",slug:"前端开发",children:[]},{level:3,title:"后端开发",slug:"后端开发",children:[]}]},{level:2,title:"4.联调",slug:"_4-联调",children:[]},{level:2,title:"5.测试",slug:"_5-测试",children:[{level:3,title:"需求方验收",slug:"需求方验收",children:[]}]},{level:2,title:"6.上线",slug:"_6-上线",children:[]},{level:2,title:"7.总结",slug:"_7-总结",children:[]},{level:2,title:"大厂做项目的流程",slug:"大厂做项目的流程",children:[{level:3,title:"1. 项目设计阶段：",slug:"_1-项目设计阶段",children:[]},{level:3,title:"2. 项目实施阶段：",slug:"_2-项目实施阶段",children:[]}]}],filePathRelative:"web-developer/project-design/development-process.md",git:{updatedTime:1690944334e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:3},{name:"黎聪",email:"licong23@xdf.cn",commits:3}]}}},758:(l,i,e)=>{e.r(i),e.d(i,{default:()=>h});const a=(0,e(6252).uE)('<h1 id="项目开发流程" tabindex="-1"><a class="header-anchor" href="#项目开发流程" aria-hidden="true">#</a> 项目开发流程</h1><p>参与人员：PM、FE、UI、RD、QA</p><p>主要流程：</p><ol><li>需求分析</li><li>技术方案设计</li><li>开发</li><li>联调</li><li>测试</li><li>上线</li><li>总结</li></ol><h2 id="_1-需求分析" tabindex="-1"><a class="header-anchor" href="#_1-需求分析" aria-hidden="true">#</a> 1.需求分析</h2><ul><li>理解需求，了解背景，分析可行性</li><li>仔细查看流程图和原型图</li><li>梳理功能点，提出问题，讨论问题</li></ul><h3 id="分析接口可行性" tabindex="-1"><a class="header-anchor" href="#分析接口可行性" aria-hidden="true">#</a> 分析接口可行性</h3><p>分析接口输入与输出结果是否可行</p><h3 id="提出问题" tabindex="-1"><a class="header-anchor" href="#提出问题" aria-hidden="true">#</a> 提出问题</h3><p>为什么要这样做？做这个功能为了什么？</p><p>要考虑时间成本，要考虑技术实现，上线后会出现的问题，要考虑现实落地。</p><h2 id="_2-技术方案设计" tabindex="-1"><a class="header-anchor" href="#_2-技术方案设计" aria-hidden="true">#</a> 2.技术方案设计</h2><h3 id="前端设计" tabindex="-1"><a class="header-anchor" href="#前端设计" aria-hidden="true">#</a> 前端设计</h3><ul><li>确定功能点的实现方案</li><li>确定设计图，与 UI 沟通，确定实现方案</li><li>技术选型 <ul><li>框架</li><li>组件</li><li>工具链</li></ul></li></ul><h3 id="后端设计" tabindex="-1"><a class="header-anchor" href="#后端设计" aria-hidden="true">#</a> 后端设计</h3><ul><li><p>技术选型</p><ul><li>框架选择</li><li>数据库</li><li>登录校验</li><li>单元测试和接口测试</li><li>开发环境提效工具</li><li>上线服务</li><li>CI/CD</li></ul></li><li><p>接口设计</p></li><li><p>数据库设计</p></li><li><p>画出系统整体架构图</p></li><li><p>整理出一份技术方案文档</p></li></ul><h2 id="_3-开发" tabindex="-1"><a class="header-anchor" href="#_3-开发" aria-hidden="true">#</a> 3.开发</h2><h3 id="前端开发" tabindex="-1"><a class="header-anchor" href="#前端开发" aria-hidden="true">#</a> 前端开发</h3><ol><li><p>代码仓库建立，做好分支管理</p></li><li><p>搭建项目基础架构</p></li><li><p>设计前端页面路由</p></li><li><p>仔细对照需求和设计图开发静态页面，有疑问随时提出</p></li><li><p>模拟数据，开发功能点</p></li><li><p>编写单元测试用例</p></li><li><p>与后端联调接口</p></li><li><p>测试项目完整功能</p></li><li><p>对项目做优化</p></li></ol><h3 id="后端开发" tabindex="-1"><a class="header-anchor" href="#后端开发" aria-hidden="true">#</a> 后端开发</h3><ol><li><p>做好代码的分支管理</p></li><li><p>数据库结构设计</p><ol><li>概要设计：根据需求，分析出需要记录的数据</li><li>逻辑设计：根据分析出的数据，设计 ER 图，确定数据类型</li><li>物理设计：将 ER 图转换成数据库模型图和数据表</li></ol></li><li><p>数据建模，外键关联，数据关系</p></li><li><p>开发路由与接口</p></li><li><p>开发具体功能，记录功能点，逐一实现</p></li><li><p>校验数据，考虑服务器安全</p></li><li><p>单元测试</p></li><li><p>整理文档</p></li></ol><h2 id="_4-联调" tabindex="-1"><a class="header-anchor" href="#_4-联调" aria-hidden="true">#</a> 4.联调</h2><ul><li><p>自己模拟数据接口</p></li><li><p>功能开发完成之后，可以让 PM 先来确认一些东西</p></li><li><p>测试项目完整功能通过之后，再提交测试</p></li></ul><h2 id="_5-测试" tabindex="-1"><a class="header-anchor" href="#_5-测试" aria-hidden="true">#</a> 5.测试</h2><ul><li>自动发布到测试服务器</li><li>提给 QA 测试</li></ul><h3 id="需求方验收" tabindex="-1"><a class="header-anchor" href="#需求方验收" aria-hidden="true">#</a> 需求方验收</h3><p>先验收再上线，可能会有微调。</p><h2 id="_6-上线" tabindex="-1"><a class="header-anchor" href="#_6-上线" aria-hidden="true">#</a> 6.上线</h2><ul><li><p>同步</p></li><li><p>做好分支管理，打 tag 发版</p></li></ul><h2 id="_7-总结" tabindex="-1"><a class="header-anchor" href="#_7-总结" aria-hidden="true">#</a> 7.总结</h2><p>将做过的所有项目都整理成一份文档</p><h2 id="大厂做项目的流程" tabindex="-1"><a class="header-anchor" href="#大厂做项目的流程" aria-hidden="true">#</a> 大厂做项目的流程</h2><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/architect/大厂做项目的流程.png" alt="image"></p><p>分为两个阶段：</p><ol><li>项目设计阶段</li><li>项目实施阶段</li></ol><h3 id="_1-项目设计阶段" tabindex="-1"><a class="header-anchor" href="#_1-项目设计阶段" aria-hidden="true">#</a> 1. 项目设计阶段：</h3><p>需要搞清楚整个业务和研发痛点，是哪里出了问题？要解决什么问题？</p><p>再通过痛点形成需求，再考虑怎么去解决问题。</p><p>这个阶段产品会产出文档。</p><p>然后是技术方案设计阶段。技术选型、技术架构、api 定义、技术调研、评估风险，技术架构师要产出文档。</p><p>结合产出与成本，再谈论是否要做。</p><p>项目启动。确定人力资源。项目排期。</p><p>约定时间点：联调时间、提测时间、上线时间。</p><h3 id="_2-项目实施阶段" tabindex="-1"><a class="header-anchor" href="#_2-项目实施阶段" aria-hidden="true">#</a> 2. 项目实施阶段：</h3><p>交互/视觉设计，设计稿</p><p>开发，联调</p><p>测试</p><p>项目验收，可能微调</p><p>发布上线</p>',49),h={render:function(l,i){return a}}}}]);