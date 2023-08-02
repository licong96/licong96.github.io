"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[18],{5672:(e,t,d)=>{d.r(t),d.d(t,{data:()=>i});const i={key:"v-77412522",path:"/web-developer/back-end/practice/simulation-subject.html",title:"练习-模拟选科",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 需求分析",slug:"_1-需求分析",children:[]},{level:2,title:"2. 技术方案选型",slug:"_2-技术方案选型",children:[{level:3,title:"前端",slug:"前端",children:[]},{level:3,title:"后端",slug:"后端",children:[]}]},{level:2,title:"3. 数据模型设计",slug:"_3-数据模型设计",children:[]},{level:2,title:"4. 页面路由和API设计",slug:"_4-页面路由和api设计",children:[{level:3,title:"页面路由",slug:"页面路由",children:[]},{level:3,title:"API接口",slug:"api接口",children:[]}]},{level:2,title:"5. 开发页面功能",slug:"_5-开发页面功能",children:[{level:3,title:"home",slug:"home",children:[]}]}],filePathRelative:"web-developer/back-end/practice/simulation-subject.md",git:{updatedTime:1647336186e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:1}]}}},7229:(e,t,d)=>{d.r(t),d.d(t,{default:()=>a});const i=(0,d(6252).uE)('<h1 id="练习-模拟选科" tabindex="-1"><a class="header-anchor" href="#练习-模拟选科" aria-hidden="true">#</a> 练习-模拟选科</h1><ol><li>需求分析</li><li>技术方案选型</li><li>数据模型设计</li><li>路由和API设计</li><li>开发页面功能</li></ol><h2 id="_1-需求分析" tabindex="-1"><a class="header-anchor" href="#_1-需求分析" aria-hidden="true">#</a> 1. 需求分析</h2><p>理解需求，流程，梳理功能</p><ul><li>微信授权，获取用户头像和昵称</li><li>保存用户选择的科目</li><li>获取出所有热门科目</li><li>模拟微信分享，建立关系</li><li>需要用户完成相应的任务</li></ul><h2 id="_2-技术方案选型" tabindex="-1"><a class="header-anchor" href="#_2-技术方案选型" aria-hidden="true">#</a> 2. 技术方案选型</h2><p>根据功能点，来制定前端与后端的技术方案，搭建基础项目</p><h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h3><ul><li>vue</li><li>微信SDK</li></ul><h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h3><ul><li>egg</li><li>mysql</li></ul><h2 id="_3-数据模型设计" tabindex="-1"><a class="header-anchor" href="#_3-数据模型设计" aria-hidden="true">#</a> 3. 数据模型设计</h2><p>设计数据、表关联</p><ul><li>用户表</li><li>选择的科目表</li><li>分享关系表</li></ul><h4 id="用户表simulation-subject-user" tabindex="-1"><a class="header-anchor" href="#用户表simulation-subject-user" aria-hidden="true">#</a> 用户表<code>simulation_subject_user</code></h4><table><thead><tr><th>字段名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>openid</td><td>varchar</td><td>用户的唯一标识</td></tr><tr><td>nick_name</td><td>varchar</td><td>用户昵称</td></tr><tr><td>head_img_url</td><td>varchar</td><td>用户头像</td></tr><tr><td>school</td><td>varchar</td><td>在读学校</td></tr><tr><td>email</td><td>varchar</td><td>邮箱</td></tr></tbody></table><h4 id="选择的科目表simulation-subject-choose" tabindex="-1"><a class="header-anchor" href="#选择的科目表simulation-subject-choose" aria-hidden="true">#</a> 选择的科目表<code>simulation_subject_choose</code></h4><table><thead><tr><th>字段名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>varchar</td><td>用户id，对应openid</td></tr><tr><td>subject</td><td>varchar</td><td>选择的科目</td></tr><tr><td>major</td><td>varchar</td><td>选择的专业</td></tr></tbody></table><h4 id="分享关系表simulation-subject-share" tabindex="-1"><a class="header-anchor" href="#分享关系表simulation-subject-share" aria-hidden="true">#</a> 分享关系表<code>simulation_subject_share</code></h4><table><thead><tr><th>字段名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>varchar</td><td>用户id，对应openid</td></tr><tr><td>share_id</td><td>varchar</td><td>分享人id，通过它注册</td></tr></tbody></table><h2 id="_4-页面路由和api设计" tabindex="-1"><a class="header-anchor" href="#_4-页面路由和api设计" aria-hidden="true">#</a> 4. 页面路由和API设计</h2><p>确定页面和接口，以及之间的关系</p><h3 id="页面路由" tabindex="-1"><a class="header-anchor" href="#页面路由" aria-hidden="true">#</a> 页面路由</h3><ul><li>/home</li><li>/login</li><li>/start</li><li>/hot</li><li>/share</li><li>/mail</li><li>/success</li></ul><h3 id="api接口" tabindex="-1"><a class="header-anchor" href="#api接口" aria-hidden="true">#</a> API接口</h3><ul><li>授权、登录<code>/login</code></li><li>获取用户信息接口<code>/getUserInfo</code></li><li>保存选择的科目<code>/putSubject</code></li><li>获取热门数据<code>/getHotSubject</code></li><li>获取分享数据<code>/getShareData</code></li><li>提交邮箱<code>/putEmail</code></li></ul><h2 id="_5-开发页面功能" tabindex="-1"><a class="header-anchor" href="#_5-开发页面功能" aria-hidden="true">#</a> 5. 开发页面功能</h2><p>开发每个页面的具体功能</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li>去授权</li></ul>',30),a={render:function(e,t){return i}}}}]);