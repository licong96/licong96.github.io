"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[9619],{9293:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-7862feda",path:"/web-developer/back-end/database/case2-retail.html",title:"案例-新零售数据库设计",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"业务介绍",slug:"业务介绍",children:[]},{level:2,title:"业务数据库设计流程",slug:"业务数据库设计流程",children:[{level:3,title:"ER 图",slug:"er-图",children:[]},{level:3,title:"数据模型图",slug:"数据模型图",children:[]},{level:3,title:"CRUD",slug:"crud",children:[]}]},{level:2,title:"表设计",slug:"表设计",children:[{level:3,title:"设计品牌和分类的关系",slug:"设计品牌和分类的关系",children:[]},{level:3,title:"设计产品表和商品表",slug:"设计产品表和商品表",children:[]},{level:3,title:"设计商品的库存表",slug:"设计商品的库存表",children:[]}]}],filePathRelative:"web-developer/back-end/database/case2-retail.md",git:{updatedTime:1690944334e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:3},{name:"黎聪",email:"licong23@xdf.cn",commits:1}]}}},1213:(e,a,i)=>{i.r(a),i.d(a,{default:()=>s});const l=(0,i(6252).uE)('<h1 id="案例-新零售数据库设计" tabindex="-1"><a class="header-anchor" href="#案例-新零售数据库设计" aria-hidden="true">#</a> 案例-新零售数据库设计</h1><blockquote><p>[L178 - 阿里新零售数据库设计与实战 （升级版） 提升数据库综合能力]</p></blockquote><h2 id="业务介绍" tabindex="-1"><a class="header-anchor" href="#业务介绍" aria-hidden="true">#</a> 业务介绍</h2><p>新零售是更高效的零售，从线上回到线下，使用线上技术和线下结合。</p><ol><li>企业先从小程序起家，开发成本低，上线周期短，功能比较简单明确</li><li>小程序做到一定的程度之后，再开发 APP，承载更多功能</li><li>用户使用量再大，功能再多之后，再搭建购物网站，服务器等技术成本很高</li><li>最后发展线下门店，投入非常巨大</li></ol><p>拼多多上市到现在还没有自己的购物网站，重点发展就是小程序和 APP。</p><h2 id="业务数据库设计流程" tabindex="-1"><a class="header-anchor" href="#业务数据库设计流程" aria-hidden="true">#</a> 业务数据库设计流程</h2><ol><li><p>需求分析：根据用户的需求，分析出需要记录的数据</p></li><li><p>概要设计：根据分析出的数据，设计 ER 图</p></li><li><p>详细设计：将 ER 图转换成数据库模型图和数据表</p></li></ol><h3 id="er-图" tabindex="-1"><a class="header-anchor" href="#er-图" aria-hidden="true">#</a> ER 图</h3><p>ER 图也称实体关系图，提供了表示实体类型、属性和关系的方法，用来描述现实世界的概念模型。</p><ul><li>复合属性是多个属性的组合</li><li>多值属性是某个属性可以有多个不同的取值</li><li>派生属性是不保存在实体中的属性</li><li>可选属性是允许没有值的属性</li></ul><h3 id="数据模型图" tabindex="-1"><a class="header-anchor" href="#数据模型图" aria-hidden="true">#</a> 数据模型图</h3><ul><li>表名</li><li>字段名</li><li>字段类型</li></ul><h3 id="crud" tabindex="-1"><a class="header-anchor" href="#crud" aria-hidden="true">#</a> CRUD</h3><ul><li>批量插入数据忽略失败的数据行</li><li>实现不存在就插入，存在就更新</li><li>使用 FROM 子查询，替代 WHERE 子查询</li></ul><h2 id="表设计" tabindex="-1"><a class="header-anchor" href="#表设计" aria-hidden="true">#</a> 表设计</h2><h4 id="什么是-spu" tabindex="-1"><a class="header-anchor" href="#什么是-spu" aria-hidden="true">#</a> 什么是 SPU?</h4><p>SPU 是标准产品单位，SPU 描述一个产品的各种特性。</p><p>比如：苹果 12 min 手机是一个产品，选择颜色、内存后的是一个上架商品。区分为产品表，商品表，一个产品中有多个商品。</p><h4 id="什么是-sku" tabindex="-1"><a class="header-anchor" href="#什么是-sku" aria-hidden="true">#</a> 什么是 SKU?</h4><p>SKU 是库存进出计量的单位，SKU 是物理上不可分割的最小存货单位。</p><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-设计品类参数.jpg" alt="image"></p><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-参数与SKU的关系.jpg" alt="image"></p><h3 id="设计品牌和分类的关系" tabindex="-1"><a class="header-anchor" href="#设计品牌和分类的关系" aria-hidden="true">#</a> 设计品牌和分类的关系</h3><h4 id="品牌表" tabindex="-1"><a class="header-anchor" href="#品牌表" aria-hidden="true">#</a> 品牌表</h4><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-品牌表ER图.jpg" alt="image"><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-品牌表结构图.jpg" alt="image"></p><h4 id="商品分类表" tabindex="-1"><a class="header-anchor" href="#商品分类表" aria-hidden="true">#</a> 商品分类表</h4><p>商品有三级分类：</p><ul><li><code>手机/数码/配件 -&gt; 手机通信 -&gt; 手机</code></li><li><code>手机/数码/配件 -&gt; 手机配件 -&gt; 移动电源</code></li></ul><p>在表里添加一个字段，记录上一个节点的 ID。就是每条记录都去关联它上一条记录，使用链表结构。各大论坛的留言表都是这样设计的。就算有一千级的分类，数据表都能存储。</p><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-商品分类表ER图.jpg" alt="image"><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-商品分类表结构图.jpg" alt="image"></p><h4 id="商品分类与品牌关联表结构" tabindex="-1"><a class="header-anchor" href="#商品分类与品牌关联表结构" aria-hidden="true">#</a> 商品分类与品牌关联表结构</h4><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-分类与品牌关联表结构图.jpg" alt="image"></p><h3 id="设计产品表和商品表" tabindex="-1"><a class="header-anchor" href="#设计产品表和商品表" aria-hidden="true">#</a> 设计产品表和商品表</h3><h4 id="产品表" tabindex="-1"><a class="header-anchor" href="#产品表" aria-hidden="true">#</a> 产品表</h4><p>产品表不能删除，会影响到其它表，只能设置下架。</p><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-产品表ER图.jpg" alt="image"><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-产品表结构图.jpg" alt="image"></p><h4 id="商品表" tabindex="-1"><a class="header-anchor" href="#商品表" aria-hidden="true">#</a> 商品表</h4><p><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-商品表ER图.jpg" alt="image"><img src="http://www.lcong.cn/assets/images/knowledge/computers/database/case2-商品表结构图.jpg" alt="image"></p><p>商品表<code>images</code>字段是<code>JSON</code>，里面存放商品详细图片，轮播图片。</p><p>商品参数字段也是<code>JSON</code>，具体的字段名和参数表一一对应。通过<code>spu_id</code>去获取对于的产品，再通过产品表获取对于的品类，再通过品类获取具体的参数。</p><h3 id="设计商品的库存表" tabindex="-1"><a class="header-anchor" href="#设计商品的库存表" aria-hidden="true">#</a> 设计商品的库存表</h3><p><strong>库存能定义到商品表吗？</strong></p><ul><li><p>如果零售系统没有分店和仓库，那么可以直接将库存定义到商品表。</p></li><li><p>如果存在分店和仓库，那就不能这样设计。</p></li></ul><p>零售店与仓库是多对多的关系。</p>',45),s={render:function(e,a){return l}}}}]);