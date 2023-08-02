"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[9962],{8177:(e,d,l)=>{l.r(d),l.d(d,{data:()=>i});const i={key:"v-09d88b54",path:"/web-developer/back-end/server/terminal.html",title:"终端命令",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"常用命令",slug:"常用命令",children:[]},{level:2,title:"Mac 查看命令",slug:"mac-查看命令",children:[{level:3,title:"进程相关命令",slug:"进程相关命令",children:[]}]},{level:2,title:"Windows",slug:"windows",children:[]},{level:2,title:"Mac 终端命令",slug:"mac-终端命令",children:[]}],filePathRelative:"web-developer/back-end/server/terminal.md",git:{updatedTime:1679291328e3,contributors:[{name:"licong96",email:"licong19961204@gmail.com",commits:1}]}}},7395:(e,d,l)=>{l.r(d),l.d(d,{default:()=>c});const i=(0,l(6252).uE)('<h1 id="终端命令" tabindex="-1"><a class="header-anchor" href="#终端命令" aria-hidden="true">#</a> 终端命令</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><p>查看当前所有 tcp 端口：<code>netstat -ntlp</code></p></li><li><p>查看端口占用情况：<code>lsof -i:端口号</code></p></li><li><p>杀掉对应的进程：<code>kill -9 [PID]</code></p></li></ul><h2 id="mac-查看命令" tabindex="-1"><a class="header-anchor" href="#mac-查看命令" aria-hidden="true">#</a> Mac 查看命令</h2><ul><li>查看当前所有 tcp 端口： <code>netstat -AaLlnW</code> (相当于 linux 的 netstat -lntp)</li></ul><p>其它命令和上面一样。</p><h3 id="进程相关命令" tabindex="-1"><a class="header-anchor" href="#进程相关命令" aria-hidden="true">#</a> 进程相关命令</h3><ul><li><p>查看所有进程：<code>ps -ef</code></p></li><li><p>查看 Node 启动的进程：<code>ps -ef|grep node</code></p></li><li><p>查看指定的子进程：<code>ps -ef|grep [84926]</code></p></li></ul><h4 id="字段说明" tabindex="-1"><a class="header-anchor" href="#字段说明" aria-hidden="true">#</a> 字段说明</h4><table><thead><tr><th>UID</th><th>PID</th><th>PPID</th></tr></thead><tbody><tr><td>权限</td><td>进程 ID</td><td>该进程的父进程 ID（嵌套关系）</td></tr></tbody></table><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2><ul><li><p>查看所有端口占用情况：<code>netstat</code></p></li><li><p>查看某一端口占用情况：<code>netstat -ano | findstr &quot;7001&quot;</code></p></li><li><p>根据 PID 查找相应的进程名： <code>tasklist | findstr [PID]</code></p></li><li><p>根据 PID 杀死进程： <code>taskkill /PID [PID] /F</code></p></li></ul><h2 id="mac-终端命令" tabindex="-1"><a class="header-anchor" href="#mac-终端命令" aria-hidden="true">#</a> Mac 终端命令</h2><ul><li><p><code>cd</code>: 进入指定文件夹路径</p></li><li><p><code>cd -</code>: 跳转到上一次所在的路径</p></li><li><p><code>cd ~</code>: 跳转到当前用户的家目录</p></li><li><p><code>pwd</code>: 显示当前的目录路径</p></li><li><p><code>ls</code>: 显示当前目录下的内容</p></li><li><p><code>ls -la</code>: 显示当前目录下的详细内容，软链接引用</p></li><li><p><code>ls -A</code>: 显示当前目录下的内容，包含隐藏内容</p></li><li><p><code>ln -s source target</code>: 创建软链接</p></li><li><p><code>mkdir</code>: 创建目录</p></li><li><p><code>rm</code>: 删除文件</p></li><li><p><code>rm -rf</code>: 删除目录</p></li><li><p><code>echo</code>: 写入内容</p></li><li><p><code>open</code>: 使用默认的程序打开文件</p></li><li><p><code>:wq</code>: 保存后退出 vi</p></li><li><p><code>:q</code>: 离开 vi</p></li></ul><h4 id="查找命令全局软链接路径" tabindex="-1"><a class="header-anchor" href="#查找命令全局软链接路径" aria-hidden="true">#</a> 查找命令全局软链接路径</h4><ul><li><code>which [name]</code>: 比如<code>which npm</code></li></ul>',16),c={render:function(e,d){return i}}}}]);