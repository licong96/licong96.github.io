"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[3248],{6009:(l,i,e)=>{e.r(i),e.d(i,{data:()=>a});const a={key:"v-0ae56d02",path:"/computers-core/constitute.html",title:"计算机组成原理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"第一部分",slug:"第一部分",children:[{level:3,title:"计算机的发展历史",slug:"计算机的发展历史",children:[]},{level:3,title:"计算机的分类",slug:"计算机的分类",children:[]},{level:3,title:"计算机的体系结构",slug:"计算机的体系结构",children:[]},{level:3,title:"计算机的层次与编程语言",slug:"计算机的层次与编程语言",children:[]},{level:3,title:"计算机的计算单位",slug:"计算机的计算单位",children:[]},{level:3,title:"计算机的字符与编码集",slug:"计算机的字符与编码集",children:[]}]},{level:2,title:"第二部分",slug:"第二部分",children:[{level:3,title:"计算机的总线与IO设备",slug:"计算机的总线与io设备",children:[]},{level:3,title:"计算机的存储器",slug:"计算机的存储器",children:[]},{level:3,title:"计算机的CPU",slug:"计算机的cpu",children:[]}]},{level:2,title:"第三部分",slug:"第三部分",children:[{level:3,title:"进制运算的基础知识",slug:"进制运算的基础知识",children:[]},{level:3,title:"二进制数据的表示方法",slug:"二进制数据的表示方法",children:[]},{level:3,title:"二进制数据的运算",slug:"二进制数据的运算",children:[]}]},{level:2,title:"第四部分",slug:"第四部分",children:[{level:3,title:"实现双向链表",slug:"实现双向链表",children:[]},{level:3,title:"实现置换算法",slug:"实现置换算法",children:[]}]},{level:2,title:"层层抽象",slug:"层层抽象",children:[{level:3,title:"相关概念",slug:"相关概念",children:[]},{level:3,title:"布尔逻辑和逻辑门",slug:"布尔逻辑和逻辑门",children:[]},{level:3,title:"寄存器&内存",slug:"寄存器-内存",children:[]},{level:3,title:"CPU",slug:"cpu",children:[]},{level:3,title:"编程方式",slug:"编程方式",children:[]},{level:3,title:"数据结构与算法",slug:"数据结构与算法",children:[]},{level:3,title:"软件工程",slug:"软件工程",children:[]},{level:3,title:"操作系统",slug:"操作系统",children:[]}]}],filePathRelative:"computers-core/constitute.md",git:{updatedTime:1651108487e3,contributors:[{name:"黎聪",email:"licong23@xdf.cn",commits:2},{name:"licong96",email:"licong19961204@gmail.com",commits:1}]}}},8802:(l,i,e)=>{e.r(i),e.d(i,{default:()=>r});var a=e(6252);const s=(0,a.uE)('<h1 id="计算机组成原理" tabindex="-1"><a class="header-anchor" href="#计算机组成原理" aria-hidden="true">#</a> 计算机组成原理</h1><h2 id="第一部分" tabindex="-1"><a class="header-anchor" href="#第一部分" aria-hidden="true">#</a> 第一部分</h2><ul><li>计算机的发展历史</li><li>计算机的分类</li><li>计算机的体系结构</li><li>计算机的层次与编程语言</li><li>计算机的计算单位</li><li>计算机的字符与编码集</li></ul><h3 id="计算机的发展历史" tabindex="-1"><a class="header-anchor" href="#计算机的发展历史" aria-hidden="true">#</a> 计算机的发展历史</h3><ul><li>第一阶段：电子管计算机，1946年开始</li><li>第二阶段：晶体管计算机，1957年开始</li><li>第三阶段：集成电路计算机，1964年开始</li><li>第四阶段：超大规模集成电路计算机，1980年开始直到现在</li></ul><p>微型计算机的发展主要是从单核到多核。</p><h3 id="计算机的分类" tabindex="-1"><a class="header-anchor" href="#计算机的分类" aria-hidden="true">#</a> 计算机的分类</h3><ul><li>超级计算机</li><li>大型计算机 <ul><li>去<code>IOE</code>行动</li></ul></li><li>工作站</li><li>小型机（普通服务器） <ul><li>普通服务器已经代替了传统的大型机，成为大厂的中枢</li></ul></li><li>微型计算机，又称为个人计算机</li></ul><p>我们接触最多的就是<code>普通服务器</code>和<code>微型计算机</code></p><h3 id="计算机的体系结构" tabindex="-1"><a class="header-anchor" href="#计算机的体系结构" aria-hidden="true">#</a> 计算机的体系结构</h3><ul><li>冯洛伊曼体系</li><li>现代计算机体系</li></ul><p><strong>冯洛伊曼体系</strong></p><p>概况为：将程序指令和数据一起存储的计算机设计概念结构。</p><p>早期计算机仅含固定用途程序，改变程序需更改结构、重新设计电路。冯若依曼的设计是存储程序指令，并设计通用电路，来解决早期计算机的问题。这种存储型计算机非常有弹性，通过指令来改变运算的内容，现代计算机都属于冯若依曼机。</p><p>必须有这五样：</p><ul><li>必须有一个存储器</li><li>必须有一个控制器</li><li>必须有一个运算器</li><li>必须有输入设备</li><li>必须有输出设备</li></ul><p>冯洛伊曼体系的瓶颈问题是<code>CPU（控制器+运算器）</code>和<code>存储器</code>分离，存储器没有CPU快，CPU经常空转等待数据传输，性能没有完全发挥出来。</p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-1.png" alt="image"></p><p><strong>现代计算机体系</strong></p><p>在冯洛伊曼体系结构中做了一点改变，解决了冯洛伊曼体系中CUP与存储器之间的性能差异问题。 解决方法是：把控制器、运算器、存储器都放在CPU中。</p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-2.png" alt="image"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这里的存储器主要是指围绕CPU的高速设备，比如：CPU的寄存器、内存</p></div><h3 id="计算机的层次与编程语言" tabindex="-1"><a class="header-anchor" href="#计算机的层次与编程语言" aria-hidden="true">#</a> 计算机的层次与编程语言</h3><ul><li>程序翻译与程序解释</li><li>计算机的层次与编程语言</li></ul><h4 id="程序翻译与程序解释" tabindex="-1"><a class="header-anchor" href="#程序翻译与程序解释" aria-hidden="true">#</a> 程序翻译与程序解释</h4><p>人类语言和计算机语言不相通，我需要使用<code>程序翻译</code>或者<code>程序解释</code>，让计算机能理解。</p><p>语言L1：编程语言</p><p>语言L0：计算机语言 010011</p><p><strong>程序翻译：</strong></p><p>过程：先使用语言L1编写程序，然后生成等价的语言L0程序，计算机实际执行的是L0程序。</p><p>中间用来生成的东西叫做<code>编译器</code>。</p><p>程序翻译是直接使用<code>编译器</code>，把语言L1生成为语言L0。</p><p><strong>程序解释：</strong></p><p>过程：先使用语言L1编写程序，使用语言L0实现另一个程序，将语言L1作为输入，等价得到语言L0再由计算机实际执行。</p><p>中间使用语言L0实现的程序叫<code>解释器</code>。</p><p>程序解释是使用语言L0实现另一个程序，将语言L1作为输入，在运行的过程中，把每一句转化为语言L0执行。</p><p><strong>总结：</strong></p><ul><li>计算机执行的指令都是语言L0。</li><li>程序翻译过程生成新的L0程序，程序解释过程不生成新的L0程序。</li><li>程序解释过程由语言L0编写的<code>解释器</code>去解释语言L1程序</li><li>区别是<code>解释器</code>运行时转换，而<code>编译器</code>提前转换</li></ul><p>程序翻译语言：<code>C/C++</code>、<code>Object-C</code>、<code>Golang</code></p><p>程序解释语言：<code>Python</code>、<code>Php</code>、<code>Javascript</code></p><h4 id="计算机的层次与编程语言-1" tabindex="-1"><a class="header-anchor" href="#计算机的层次与编程语言-1" aria-hidden="true">#</a> 计算机的层次与编程语言</h4><ol><li>硬件逻辑层</li><li>微程序机器层</li><li>传统机器层</li><li>操作系统层</li><li>汇编语言层</li><li>高级语言层</li><li>应用层</li></ol><p><code>1</code>、<code>2</code>、<code>3</code>属于实际机器，<code>4</code>、<code>5</code>、<code>6</code>、<code>7</code>属于虚拟机器，在虚拟机器中<code>7</code>属于应用软件，其它属于系统软件。</p><p>一条机器指令对应一个微程序，一个微程序对应一组微指令。</p><p><strong>4. 操作系统层</strong></p><ul><li>操作系统层是在软件和硬件之间的适配层</li><li>向上提供了简易的操作界面</li><li>向下对接了指令系统，管理硬件资源</li></ul><p><strong>5. 汇编语言层</strong></p><ul><li>编程语言就是汇编语言</li><li>汇编语言可以翻译成可直接执行的机器语言</li><li>完成翻译过程的程序就是汇编器</li></ul><p><strong>6. 高级语言层</strong></p><ul><li>常见的高级语言有：<code>C/C++</code>、<code>Python</code>、<code>Java</code>、<code>Javascript</code></li><li>为广大程序员所接受的高级语言，种类非常多，有几百种</li></ul><p><strong>7. 应用层</strong></p><ul><li>满足计算机针对某种用途而专门设计的软件</li></ul><h3 id="计算机的计算单位" tabindex="-1"><a class="header-anchor" href="#计算机的计算单位" aria-hidden="true">#</a> 计算机的计算单位</h3><ul><li>容量单位</li><li>速度单位</li></ul><h4 id="容量单位" tabindex="-1"><a class="header-anchor" href="#容量单位" aria-hidden="true">#</a> 容量单位</h4><ul><li>在物理层面，计算机通过高低电平记录信息，高电平表示1，低电平表示0</li><li>理论上只认识0/1两种状态</li><li>0/1称为bit（比特位）</li></ul><p><strong>字节单位：</strong></p><p>用8个bit（比特位）表示1个字节</p><p>字节：1Byte = 8bits</p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-3.png" alt="image"></p><p>硬盘商一般用10进位标记容量，方便自己开发，500G硬盘格式化之后只剩465G。</p><h4 id="速度单位" tabindex="-1"><a class="header-anchor" href="#速度单位" aria-hidden="true">#</a> 速度单位</h4><ul><li>网络速度</li><li>CPU速度</li></ul><h5 id="网络速度" tabindex="-1"><a class="header-anchor" href="#网络速度" aria-hidden="true">#</a> 网络速度</h5><p>问：100M宽带，说是100M每秒，但为什么下载速度只有12.5M每秒？</p><div class="custom-container tip"><p class="custom-container-title">回答：</p><p>因为网络常用单位为（Mbps），这之间有字节到比特位的转换，1bit = 8Byte，实际网络速度都需要除以8</p><p>100M/s = 100Mbps = 100Mbit/s</p><p>100Mbit/s = (100/8)Mb/s = 12.5Mb/s</p></div><h5 id="cpu速度" tabindex="-1"><a class="header-anchor" href="#cpu速度" aria-hidden="true">#</a> CPU速度</h5><ul><li>CPU的速度一般体现为CPU的时钟频率</li><li>CPU的时钟频率的单位一般是赫兹（Hz）</li><li>赫兹（Hz）是每秒中的次数计量，描述高低电平每秒中的变化次数</li></ul><h3 id="计算机的字符与编码集" tabindex="-1"><a class="header-anchor" href="#计算机的字符与编码集" aria-hidden="true">#</a> 计算机的字符与编码集</h3><ul><li>字符编码集的历史</li><li>中文编码集</li></ul><h4 id="字符编码集的历史" tabindex="-1"><a class="header-anchor" href="#字符编码集的历史" aria-hidden="true">#</a> 字符编码集的历史</h4><ul><li>ASCII码</li><li>Extended ASCII码</li><li>字符编码集的国际化</li></ul><p><strong>ASCII码：</strong></p><p>平时很常用的编码，比如大写字母、小写字母、符号等。</p><ul><li>使用7个bits就可以完全表示ASCII码</li><li>包含95个可打印字符，33个不可打印字符</li></ul><p><strong>Extended ASCII码：</strong></p><p>计算机发展到后来，有很多应用或者国家中的符号无法表示，所以对ASCII码进行第一次扩充，7bits =&gt; 8bits，用8个代替原来的7个。</p><p><strong>字符编码集的国际化</strong></p><ul><li>全球文字多种多样，体系也不一样</li><li>中、韩、日文字最为复杂</li></ul><h4 id="中文编码集" tabindex="-1"><a class="header-anchor" href="#中文编码集" aria-hidden="true">#</a> 中文编码集</h4><ul><li>GB2312</li><li>GBK</li><li>Unicode</li></ul><p><strong>GB2312：</strong></p><ul><li>第一套</li><li>一共收录7445个字符</li><li>但是不符合国际标准</li></ul><p><strong>GBK：</strong></p><ul><li>第二套</li><li>向下兼容GB2312，向上支持国际ISO标准</li><li>一共收录21003个汉字</li><li>在中国可以用，但如果国外的电脑访问GBK网页，而电脑中没有这个编码，会出现乱码</li></ul><p><strong>Unicode：</strong></p><ul><li>兼容全球的字符集，统一码、万国码</li><li>定义了世界通用的字符集，<code>UTF-*</code>实现了编码</li><li><code>UTF-8</code>以字节为单位对Unicode进行编码</li><li>编程推荐使用<code>UTF-8</code>编码</li></ul><h2 id="第二部分" tabindex="-1"><a class="header-anchor" href="#第二部分" aria-hidden="true">#</a> 第二部分</h2><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-5.png" alt="image"></p><ul><li>计算机的总线与IO设备</li><li>计算机的存储器</li><li>计算机的CPU</li></ul><h3 id="计算机的总线与io设备" tabindex="-1"><a class="header-anchor" href="#计算机的总线与io设备" aria-hidden="true">#</a> 计算机的总线与IO设备</h3><ul><li>计算机的总线</li><li>计算机的输入/输出设备</li></ul><h4 id="计算机的总线" tabindex="-1"><a class="header-anchor" href="#计算机的总线" aria-hidden="true">#</a> 计算机的总线</h4><ul><li><p><strong>总线是什么？</strong></p><ul><li>常用的有<code>USB</code>总线，也叫通用串行总线</li><li>还有电脑主板上的<code>PCI</code>总线，用来插显卡</li></ul></li><li><p><strong>总线有什么用？</strong></p><ul><li>解决不同设备之间的通信问题</li><li>提供了对外连接的统一标准接口</li><li>不同设备可以通过<code>USB</code>接口进行连接，比如：键盘、鼠标、U盘</li></ul></li><li><p><strong>有哪些常见总线？</strong></p><ul><li>地址总线</li><li>数据总线</li><li>控制总线</li></ul></li><li><p><strong>数据总线的位数是什么？</strong></p><ul><li>也叫总线的宽度，一般与CPU的位数相同（32位、64位）</li><li>一次可以传输32位的4个字节或64位的8个字节</li></ul></li><li><p><strong>总线仲裁是什么？</strong></p><ul><li>为了解决总线使用权的冲突问题</li></ul></li></ul><h4 id="计算机的输入-输出设备" tabindex="-1"><a class="header-anchor" href="#计算机的输入-输出设备" aria-hidden="true">#</a> 计算机的输入/输出设备</h4><ul><li>常见输入设备</li><li>常见输出设备</li><li>输入输出接口的通用设计</li><li>CPU与IO设备的通信方法</li></ul><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-4.png" alt="image"></p><p><strong>常见输入设备：</strong></p><ul><li>字符输入设备 <ul><li>键盘 <ul><li>薄膜键盘</li><li>机械键盘</li><li>电容键盘</li></ul></li></ul></li><li>图像输入设备 <ul><li>鼠标</li><li>数位板 <ul><li>输入板和压感笔</li></ul></li><li>扫描仪</li></ul></li></ul><p><strong>常见输出设备：</strong></p><ul><li>显示器</li><li>打印机</li><li>投影仪</li></ul><p><strong>输入输出接口的通用设计：</strong></p><p>需要向设备发送数据、读取数据、判断设备是否被占用、检查设备是否已经启动或正常连接</p><ul><li>数据线</li><li>状态线</li><li>命令线</li><li>设备选择线</li></ul><p><strong>CPU与IO设备的通信方法：</strong></p><ul><li>程序中断</li><li>DMA（直接存储器访问）</li></ul><h3 id="计算机的存储器" tabindex="-1"><a class="header-anchor" href="#计算机的存储器" aria-hidden="true">#</a> 计算机的存储器</h3><ul><li>计算机的存储器概览</li><li>计算机的主存储器与辅助存储器</li><li>计算机的高速存储器</li></ul><h4 id="计算机的存储器概览" tabindex="-1"><a class="header-anchor" href="#计算机的存储器概览" aria-hidden="true">#</a> 计算机的存储器概览</h4><ul><li>存储器的分类</li><li>存储器的层次结构</li></ul><p><strong>存储器的分类：</strong></p><ul><li><p>按存储介质分类：</p><ul><li>半导体存储器 <ul><li>内存</li><li>U盘</li><li>固态硬盘</li></ul></li><li>磁存储器 <ul><li>磁带</li><li>磁盘</li></ul></li></ul></li><li><p>按存取方式分类：</p><ul><li>随机存储器（RAM） <ul><li>随机读取</li><li>与位置无关</li></ul></li><li>串行存储器 <ul><li>按顺序查找</li><li>与位置有关</li></ul></li><li>只读存储器（ROM） <ul><li>只读不写</li></ul></li></ul></li></ul><p><strong>存储器的层次结构：</strong></p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-存储器-1.png" alt="image"></p><p>选购存储器的因素：</p><ul><li>速写速度：5400转/7200转，越高越好</li><li>存储容量：2T/4G，越高越好</li><li>价格，越低越好</li></ul><p>性价比：容量 + 价格 =&gt; 位价（每比特位价格）</p><p>根据位价划分层次结构：</p><ul><li>缓存：CPU里面的寄存器，高速缓存。速度快，位价高。</li><li>主存：计算机里面的内存。速度适中，位价适中。</li><li>辅存：外部辅存设备，扩展容量，比如磁盘、U盘、移动硬盘。速度慢，位价低。</li></ul><div class="custom-container tip"><p class="custom-container-title">局部性原理</p><p>当CPU访问存储器时，无论是存取指令还是存取数据，所访问的存储单元都趋于聚集在一个较小的连续区域中。</p><p>实现：在CPU与主存之间增加一层速度快、容量小的缓存，可以解决主存速度不足的问题，有效提高CPU的效率。</p></div><h4 id="计算机的主存储器与辅助存储器" tabindex="-1"><a class="header-anchor" href="#计算机的主存储器与辅助存储器" aria-hidden="true">#</a> 计算机的主存储器与辅助存储器</h4><ul><li>主存储器：内存</li><li>辅助存储器：磁盘</li></ul><p>为什么计算机断电，内存数据会丢失，而磁盘数据不会丢失？</p><p><strong>主存储器：内存</strong></p><p>就是计算机中的内存条，存取方式属于<code>随机存储器（RAM）</code>。</p><p><code>RAM</code>通过电容存储数据，必须隔一段时间刷新一次，刷新需要有电。如果断电，那么一段时间后将丢失所有数据。</p><ul><li>主存储器与操作系统的位数有关系： <ul><li>32位系统 <ul><li>最多支持4GB的内存，因为地址总线只有32位</li></ul></li><li>64位系统 <ul><li>最多能支持<code>2的34次方</code>GB的内存</li></ul></li></ul></li></ul><p><strong>辅助存储器：磁盘</strong></p><ul><li>物理结构</li><li>调度算法</li></ul><h4 id="计算机的高速存储器" tabindex="-1"><a class="header-anchor" href="#计算机的高速存储器" aria-hidden="true">#</a> 计算机的高速存储器</h4><p>高度缓存是为了解决CPU与主存的速度不匹配的瓶颈问题</p><ul><li>高速缓存的工作原理</li><li>高速缓存的替换策略</li></ul><p><strong>高速缓存的工作原理</strong></p><p>字：是指存放在一个存储单元中的二进制代码组合，比如一个数据、一个指令、一个字符串</p><p>字块：存储在连续的存储单元中而被看作是一个单元的一组字，包含多个字</p><p>CPU从高速缓存中取数据。命中率。访问效率。</p><p><strong>高速缓存的替换策略</strong></p><p>当CPU所需的数据不在高速缓存中，需要从主存载入所需数据。</p><ul><li>随机算法</li><li>先进先出算法（FIFO）</li><li>最不经常使用算法（LFU）</li><li>最近最少使用算法（LRU）</li></ul><h3 id="计算机的cpu" tabindex="-1"><a class="header-anchor" href="#计算机的cpu" aria-hidden="true">#</a> 计算机的CPU</h3><ul><li>计算机的指令系统</li><li>计算机的控制器</li><li>计算机的运算器</li><li>指令执行过程</li></ul><h4 id="计算机的指令系统" tabindex="-1"><a class="header-anchor" href="#计算机的指令系统" aria-hidden="true">#</a> 计算机的指令系统</h4><ul><li>机器指令的形式</li><li>机器指令的操作类型</li><li>机器指令的寻址方式</li></ul><p><strong>机器指令的形式：</strong></p><p>机器指令主要由两部分组成：操作码、地址码</p><p>操作码：指明指令所要完成的操作，位数反映了机器的操作种类</p><p>地址码：给出操作数或者操作数的地址，分为三地址指令、二地址指令、一地址指令</p><p><strong>机器指令的操作类型：</strong></p><ul><li><p>数据传输类型：数据读写、交换地址数据、清零等操作</p></li><li><p>算术逻辑操作类型：加减乘除运算、与或非逻辑运算</p></li><li><p>移位操作类型：左移、右移</p></li><li><p>控制指令类型： 等待指令、停机指令、中断指令</p></li></ul><p><strong>机器指令的寻址方式：</strong></p><ul><li><p>指令寻址</p><ul><li>顺序寻址</li><li>跳跃寻址</li></ul></li><li><p>数据寻址</p><ul><li>立即寻址</li><li>直接寻址</li><li>间接寻址</li></ul></li></ul><h4 id="计算机的控制器" tabindex="-1"><a class="header-anchor" href="#计算机的控制器" aria-hidden="true">#</a> 计算机的控制器</h4><p>组成部分：</p><ul><li><p>程序计数器：用来存储下一条指令的地址，循环拿出指令</p></li><li><p>时序发生器：用于发送时序脉冲</p></li><li><p>指令译码器：翻译操作码对应的操作，以及控制传输地址码对应的数据</p></li><li><p>指令寄存器：从主存或高速缓存取计算机指令</p></li><li><p>主存地址寄存器：保存当前CPU正要访问的内存单元的地址</p></li><li><p>主存数据寄存器：保存当前CPU正要读或写的主存数据</p></li><li><p>通用寄存器：用于暂时存放传输数据和指令</p></li></ul><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-控制器.png" alt="image"></p><h4 id="计算机的运算器" tabindex="-1"><a class="header-anchor" href="#计算机的运算器" aria-hidden="true">#</a> 计算机的运算器</h4><p>运算器是用来进行数据运算加工。</p><p>组成部分：</p><ul><li><p>ALU：算术逻辑单元。由逻辑门组成</p></li><li><p>数据缓冲器：暂时存放输入或输出的数据</p></li><li><p>状态字寄存器：存放运算状态和运算信息</p></li><li><p>通用寄存器：用于暂时存放传输数据和指令</p></li></ul><h4 id="指令执行过程" tabindex="-1"><a class="header-anchor" href="#指令执行过程" aria-hidden="true">#</a> 指令执行过程</h4><ul><li>指令执行过程</li><li>CPU的流水线设计</li></ul><p><strong>指令执行过程：</strong></p><ol><li>取指令</li><li>分析指令</li><li>执行指令</li></ol><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-指令执行过程.png" alt="image"></p><p><strong>CPU的流水线设计</strong></p><p>类似于工厂的流水线，多个产品可以同时被加工，不同时刻产品位于不同的加工阶段。</p><p>用来提高CPU的工作效率。</p><h2 id="第三部分" tabindex="-1"><a class="header-anchor" href="#第三部分" aria-hidden="true">#</a> 第三部分</h2><ul><li>进制运算的基础知识</li><li>二进制数据的表示方法</li><li>二进制数据的运算</li></ul><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-二进制知识.png" alt="image"></p><h3 id="进制运算的基础知识" tabindex="-1"><a class="header-anchor" href="#进制运算的基础知识" aria-hidden="true">#</a> 进制运算的基础知识</h3><ul><li>进制的概述</li><li>二进制的运算基础</li></ul><div class="custom-container tip"><p class="custom-container-title">逻辑门</p><p>加减乘数，计算的底层原理是逻辑门，一大堆逻辑门巧妙的连接在一起：<code>NOT</code>、<code>AND</code>、<code>OR</code>、<code>XOR</code>，本质上只true和false，或只是0和1。</p><p>层层抽象，使用几百个逻辑门制作成<code>ALU</code>计算工具。</p><p>有些设备用使用加减法，来代替乘数法。</p></div><h4 id="进制的概述" tabindex="-1"><a class="header-anchor" href="#进制的概述" aria-hidden="true">#</a> 进制的概述</h4><ul><li>进制的定义</li><li>常见的进制</li></ul><p><strong>进制的定义：</strong></p><ul><li><p>进制是一种记数方式，也称为进位记数法或位值记数法</p></li><li><p>使用有限数字符号，来表达无限的数值</p></li><li><p>使用的数字符号的数目称为这种进制的基数或底数，比如十进制使用0-9十个数字符号</p></li></ul><p><strong>常见的进制：</strong></p><ul><li><p>二进制</p></li><li><p>八进制：使用0-7八个数字</p></li><li><p>十进制</p></li><li><p>十六进制：网卡地址，使用0-9和A、B、C、D、E、F，十六个数字符号</p></li><li><p>二十进制：玛雅文明的玛雅数字</p></li><li><p>六十进制：运用在时间、坐标、角度等量化数据，比如一个小时六十分钟，六十作为一个进制</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>计算机中常用八进制或十六进制，是因为计算机本来喜欢二进制，但是二进制表达太长，所以使用八进制或十六进制来编码，从而缩短长度，且八和十六都满足2的n次方的要求。</p></div><h4 id="二进制的运算基础" tabindex="-1"><a class="header-anchor" href="#二进制的运算基础" aria-hidden="true">#</a> 二进制的运算基础</h4><ul><li>二进制转换十进制：按权展开法</li></ul><p>使用2的次方来计算二进制，从0开始</p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-二进制转换十进制.png" alt="image"></p><p>小数运算： <img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-进制运算-小数.png" alt="image"></p><ul><li>十进制转换二进制：重复相除法</li></ul><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-十进制转换二进制.png" alt="image"></p><p>小数运算： <img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-进制运算-小数-十转二.png" alt="image"></p><p>十进制与二进制的对比计算：</p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-十进制计算.png" alt="image"></p><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-二进制计算.png" alt="image"></p><h3 id="二进制数据的表示方法" tabindex="-1"><a class="header-anchor" href="#二进制数据的表示方法" aria-hidden="true">#</a> 二进制数据的表示方法</h3><ul><li>原码表示法</li><li>二进制补码表示法</li><li>二进制的反码表示法</li></ul><p>有符号数与无符号数</p><p><strong>负数怎么表达？</strong></p><ul><li>生活中使用<code>+</code>表示正数，<code>-</code>表示负数，计算机中前面使用<code>0</code>表示正数，使用<code>1</code>表示负数，比如：<code>+237</code>=<code>011101101</code>，<code>-237</code>=<code>111101101</code></li><li>符号位在数值第一位，后8位是数字位</li><li>这就是<code>原码表示法</code></li><li>会存在一些问题，某些情况的运算会非常复杂</li></ul><p><strong>二进制补码表示法</strong></p><p>解决原码表示法的问题。使用正数替代负数。使用加法代替减法操作。</p><p><strong>二进制的反码表示法</strong></p><p>消除转换过程中的减法。</p><h3 id="二进制数据的运算" tabindex="-1"><a class="header-anchor" href="#二进制数据的运算" aria-hidden="true">#</a> 二进制数据的运算</h3><ul><li>定点数与浮点数</li><li>定点数的加减法运算</li><li>浮点数的加减法运算</li><li>浮点数的乘数法运算</li></ul><h2 id="第四部分" tabindex="-1"><a class="header-anchor" href="#第四部分" aria-hidden="true">#</a> 第四部分</h2><ul><li>实现双向链表</li><li>实现置换算法</li></ul><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-6.png" alt="image"></p><h3 id="实现双向链表" tabindex="-1"><a class="header-anchor" href="#实现双向链表" aria-hidden="true">#</a> 实现双向链表</h3><ul><li>原理</li><li>实践</li></ul><h4 id="双向链表原理" tabindex="-1"><a class="header-anchor" href="#双向链表原理" aria-hidden="true">#</a> 双向链表原理</h4><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-6-原理.png" alt="image"></p><p>双向链表的好处：</p><ul><li>可以快速找到一个节点的下一个节点</li><li>可以快速找到一个节点的上一个节点</li><li>可以快速去掉链表中的某一个节点</li></ul><h4 id="双向链表实践" tabindex="-1"><a class="header-anchor" href="#双向链表实践" aria-hidden="true">#</a> 双向链表实践</h4><p><img src="http://www.casssb.com/assets/images/knowledge/computers/basics/constitute-6-实践.png" alt="image"></p><h3 id="实现置换算法" tabindex="-1"><a class="header-anchor" href="#实现置换算法" aria-hidden="true">#</a> 实现置换算法</h3><p>使用双向链表实现以下算法：</p><ul><li>先进先出算法（FIFO）</li><li>最不经常使用算法（LFU）</li><li>最近最少使用算法（LRU）</li></ul><h2 id="层层抽象" tabindex="-1"><a class="header-anchor" href="#层层抽象" aria-hidden="true">#</a> 层层抽象</h2>',217),t={href:"https://www.bilibili.com/video/BV1EW411u7th?from=search&seid=11442557052211082016&spm_id_from=333.337.0.0",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("计算机科学速成课"),p=(0,a.uE)('<ul><li>计算机早期历史</li><li>电子计算机</li><li>布尔逻辑和逻辑门</li><li>二进制</li><li>算术逻辑单元&amp;ALU</li><li>寄存器&amp;内存</li><li>CPU</li><li>编程方式</li><li>数据结构与算法</li><li>软件工程</li><li>操作系统</li></ul><h3 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h3><p>电、电路、逻辑门、锁存器、寄存器、RAM、ALU、CPU</p><h3 id="布尔逻辑和逻辑门" tabindex="-1"><a class="header-anchor" href="#布尔逻辑和逻辑门" aria-hidden="true">#</a> 布尔逻辑和逻辑门</h3><p>晶体管组成了逻辑门，ALU，寄存器，内存</p><h3 id="寄存器-内存" tabindex="-1"><a class="header-anchor" href="#寄存器-内存" aria-hidden="true">#</a> 寄存器&amp;内存</h3><p>锁存器，锁定了一个值就是一个bit，通过逻辑门，制作出这样的电路，能够锁定8个bit的一组锁存器叫做<code>寄存器</code>，<code>寄存器</code>能存一个数字，这个数字的位数就是<code>位宽</code>。早期计算机用8位寄存器，然后是16位，32位，现在计算机都有64位宽的寄存器。</p><p>锁存器 -&gt; 寄存器 -&gt; 内存（RAM）</p><p>一堆逻辑门抽象成锁存器，一堆锁存器抽象成寄存器，一堆寄存器抽象成内存。</p><p>数据和程序最终以二进制值存在内存里。</p><p>最早的存储介质是打孔纸卡，后来发明了延迟线存储器，磁芯存储器，磁盘，硬盘，光盘，固定硬盘</p><p>存储器（Storage）可以长久保存。</p><h3 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> CPU</h3><ul><li>时钟周期</li><li>RAM的瓶颈，CUP空等，加入缓存</li><li>缓存数据标记脏位，同步到RAM，指令流水线</li><li>多核，有多个处理单元，共享资源</li></ul><h3 id="编程方式" tabindex="-1"><a class="header-anchor" href="#编程方式" aria-hidden="true">#</a> 编程方式</h3><p>早期计算机的编程方式都是使用<code>穿孔纸卡</code>读取。</p><p>后来有了<code>存储型计算机</code>，也就是冯若依曼机。</p><p>指令有8位，前4位是指令码，后4位是地址码。</p><p>机器只理解二进制，这是机器的&quot;母语&quot;，也叫机器码。</p><p>使用二进制写出一个翻译程序，叫<code>汇编器</code>，把汇编语言写的程序转成机器码，但程序员还需要关注寄存器与内存。</p><p>编译器出现之后，有更高级的编程语言，无需关注底层细节，可以专心编程。运行速度慢一点，编程速度大大提升。</p><p>编程语言：语法，变量，语句，函数，</p><h3 id="数据结构与算法" tabindex="-1"><a class="header-anchor" href="#数据结构与算法" aria-hidden="true">#</a> 数据结构与算法</h3><p>算法无处不在。</p><p>数据结构：数组，矩阵，对象，链表，树，图</p><h3 id="软件工程" tabindex="-1"><a class="header-anchor" href="#软件工程" aria-hidden="true">#</a> 软件工程</h3><p>面向对象编程，封装组件，隐藏复杂度，再提升一层抽象。</p><p>需要有文档，API。</p><p>IDE，调试，源代码版本管理。</p><p>QA。</p><h3 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h3><p>操作系统提供API抽象硬件。</p><p>虚拟内存是新一层抽象。操作系统会自动处理虚拟内存和物理内存之间的映射，对程序来说得到的虚拟内存一直是连续的，真实的物理内存是分开的。程序的内存大小可以灵活增减，这叫<code>动态内存分配</code>。这样可以简化很多东西，同时运行多个程序有极大的灵活性，如果某程序出了问题，也不会影响到其它程序的内存，这是<code>内存保护</code>。</p>',33),r={render:function(l,i){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[s,(0,a.Wm)("p",null,[(0,a.Wm)("a",t,[d,(0,a.Wm)(e)])]),p],64)}}}}]);