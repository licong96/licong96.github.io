(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,a,n){e.exports=n(69)},57:function(e,a,n){},58:function(e,a,n){},59:function(e,a,n){},65:function(e,a,n){},68:function(e,a,n){},69:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(8),i=n.n(o),r=(n(57),n(29)),u=n(6),l=(n(58),n(14)),m=(n(59),n(44)),s=n(45),d="http://lc.594sj.cn/licong/english",f="http://dict.youdao.com/dictvoice";function g(e,a){return Math.floor(Math.random()*(a-e)+e)}function p(e,a){return Math.random()>.5?-1:1}var E={house:[{name:"blanket",count:6},{name:"cushion",count:6},{name:"cotton",count:4},{name:"quilt",count:7},{name:"pillow",count:7},{name:"carpet",count:6},{name:"sofa",count:4},{name:"bed",count:6},{name:"curtain",count:6},{name:"dinningroom",count:6},{name:"bedroom",count:6},{name:"livingroom",count:6}],kitchen:[{name:"apron",count:6},{name:"bowl",count:6},{name:"bucket",count:4},{name:"chair",count:4},{name:"fork",count:4},{name:"kettle",count:6},{name:"kitchen",count:6},{name:"knife",count:6},{name:"ladle",count:6},{name:"plate",count:6},{name:"refrigerator",count:6},{name:"spoon",count:6},{name:"table",count:6},{name:"tap",count:4},{name:"wok",count:4}],clothing:[{name:"coat",count:6},{name:"dress",count:6},{name:"glove",count:6},{name:"hat",count:6},{name:"jacket",count:6},{name:"jeans",count:6},{name:"pants",count:6},{name:"scarf",count:6},{name:"shirt",count:6},{name:"shoes",count:6},{name:"skirt",count:6},{name:"stocking",count:6},{name:"suit",count:6},{name:"sweater",count:6},{name:"tie",count:6},{name:"underwear",count:6},{name:"vest",count:6}]},h=function(){function e(a){Object(m.a)(this,e),this.type=a,this.allData=this.handleAllData(a)}return Object(s.a)(e,[{key:"getType",value:function(){return Object.keys(E)}},{key:"getData",value:function(){var e=this,a=JSON.parse(JSON.stringify(this.allData)),n=[];return a.forEach((function(t){var c={};c.audio="".concat(f,"?audio=").concat(t.name,"&type=2"),c.name=t.name,c.count=t.count;for(var o=1;o<=4;o++)if(c.image)c.image.push(e.randomImageData(a,c.image));else{var i=g(1,c.count);c.image=[{url:"".concat(d,"/images/").concat(e.type,"/").concat(c.name,"/").concat(i,".jpg"),name:c.name,structure:-1,index:o}]}c.image.sort(p),n.push(c)})),{type:this.type,data:n.sort(p)}}},{key:"randomImageData",value:function(e,a){var n="";a.forEach((function(e){n+=e.name+","}));var t=[];e.forEach((function(e){-1===n.indexOf(e.name)&&t.push(e)}));var c=g(0,t.length),o=g(0,t[c].image.length);return t[c].image[o]}},{key:"handleAllData",value:function(e){var a=JSON.parse(JSON.stringify(E[e]));return a.forEach((function(a){a.audio="".concat(f,"?audio=").concat(a.name,"&type=2");for(var n=1;n<=a.count;n++)a.image?a.image.push({url:"".concat(d,"/images/").concat(e,"/").concat(a.name,"/").concat(n,".jpg"),name:a.name,structure:-1,index:n}):a.image=[{url:"".concat(d,"/images/").concat(e,"/").concat(a.name,"/").concat(n,".jpg"),name:a.name,structure:-1,index:n}]})),a}}]),e}(),v=n(94),b=n(102),y=new h("kitchen");console.log(y.getType());var k=function(){var e=Object(t.useState)(y.getType()),a=Object(l.a)(e,2),n=a[0];return a[1],c.a.createElement("div",{className:"home"},c.a.createElement("ul",{className:"home__wrap"},n.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(r.b,{className:"home__list",to:"/detailAudio?type=".concat(e,"&mode=1")},c.a.createElement(v.a,{component:"nav","aria-label":"secondary mailbox folders"},c.a.createElement(b.a,{button:!0},e))))}))))},O=(n(65),n(33)),_=n.n(O),j=n(100),N=n(99),w=n(101),S=n(98),D=n(97),x=n(103);function C(e){var a=e.isShowDialogEng,n=e.handlerDialogEndConfirm,t=e.handlerDialogEndCancel;return c.a.createElement("div",null,c.a.createElement(w.a,{open:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(x.a,{id:"alert-dialog-title"},"\u672c\u5c0f\u8282\u7ed3\u675f"),c.a.createElement(D.a,{style:{minWidth:"300px"}},"\u662f\u5426\u518d\u6765\u4e00\u6b21\uff1f"),c.a.createElement(S.a,null,c.a.createElement(N.a,{variant:"outlined",onClick:t,color:"primary"},"\u53d6\u6d88"),c.a.createElement(N.a,{variant:"contained",color:"primary",onClick:n},"\u786e\u5b9a"))))}var J=null,B=!1,I=0,L={};var T=function(e){var a=_.a.parse(window.location.href.split("?")[1]).type,n=void 0===a?"house":a,o=Object(t.useState)({}),i=Object(l.a)(o,2),r=i[0],u=i[1],m=Object(t.useState)(0),s=Object(l.a)(m,2),d=s[0],f=s[1],g=Object(t.useState)(!1),p=Object(l.a)(g,2),E=p[0],v=p[1],b=Object(t.useState)(!1),y=Object(l.a)(b,2),k=y[0],O=y[1];return Object(t.useEffect)((function(){var e=new h(n);L=e.getData(),I=L.data.length-1,(J=document.getElementById("audio")).addEventListener("pause",(function(){v(!1)}))}),[n]),Object(t.useEffect)((function(){u(L.data[d])}),[d]),c.a.createElement("div",{className:"detail"},r?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detail__item"},c.a.createElement("div",{className:"detail__audio",onClick:function(){J.addEventListener("pause",(function e(){v(!1),J.removeEventListener("pause",e)})),v(!0),J.play()}},c.a.createElement("audio",{id:"audio",src:r.audio}),c.a.createElement(j.a,{color:"secondary"},c.a.createElement("i",{className:"icon__audio iconfont ".concat(E?"icon-caozuo-bofang-zanting":"icon-kaishi")}))),c.a.createElement("ul",{className:"detail__image"},r.image&&r.image.map((function(e,a){return c.a.createElement("li",{className:"detail__block",key:a,onClick:function(){return function(e){if(!B){B=!0;var a=JSON.parse(JSON.stringify(r)),n=a.image.find((function(a){return a.name===e.name&&a.index===e.index}));n.name===r.name?n.structure=1:n.structure=0,u(a),setTimeout((function(){B=!1,d<I?f(++d):O(!0)}),500)}}(e)}},c.a.createElement("img",{className:"img",src:e.url}),0===e.structure?c.a.createElement("i",{className:"icon__img iconfont icon-Group-"}):null,1===e.structure?c.a.createElement("i",{className:"icon__img iconfont icon-dui"}):null)}))))):c.a.createElement("p",null,"\u5168\u90e8\u5b8c\u6210"),c.a.createElement(C,{isShowDialogEng:k,handlerDialogEndConfirm:function(){O(!1),f(0)},handlerDialogEndCancel:function(){O(!1),e.history.goBack()}}))},z=(n(68),null),A=!1,M=0,W={};var F=function(e){var a=_.a.parse(window.location.href.split("?")[1]).type,n=void 0===a?"house":a,o=Object(t.useState)({}),i=Object(l.a)(o,2),r=i[0],u=i[1],m=Object(t.useState)(0),s=Object(l.a)(m,2),d=s[0],f=s[1],g=Object(t.useState)(!1),p=Object(l.a)(g,2),E=p[0],v=p[1],b=Object(t.useState)(!1),y=Object(l.a)(b,2),k=y[0],O=y[1];return Object(t.useEffect)((function(){(z=document.getElementById("audio")).addEventListener("pause",(function(){v(!1)}));var e=new h(n);W=e.getData(),M=W.data.length-1,u(W.data[d]),console.log("detail-image",W)}),[n]),Object(t.useEffect)((function(){u(W.data[d])}),[d]),c.a.createElement("div",{className:"detail"},r?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detail__item"},c.a.createElement("div",{className:"detail__audio",onClick:function(){z.addEventListener("pause",(function e(){v(!1),z.removeEventListener("pause",e)})),v(!0),z.play()}},c.a.createElement("audio",{id:"audio",src:r.audio}),c.a.createElement(j.a,{color:"secondary"},c.a.createElement("i",{className:"icon__audio iconfont ".concat(E?"icon-caozuo-bofang-zanting":"icon-kaishi")}))),c.a.createElement("ul",{className:"detail__image"},r.image&&r.image.map((function(e,a){return c.a.createElement("li",{className:"detail__block",key:a,onClick:function(){return function(e){if(!A){A=!0;var a=JSON.parse(JSON.stringify(r)),n=a.image.find((function(a){return a.name===e.name&&a.index===e.index}));n.name===r.name?n.structure=1:n.structure=0,u(a),setTimeout((function(){A=!1,d<M?f(++d):O(!0)}),500)}}(e)}},c.a.createElement("img",{className:"img",src:e.url}),0===e.structure?c.a.createElement("i",{className:"icon__img iconfont icon-Group-"}):null,1===e.structure?c.a.createElement("i",{className:"icon__img iconfont icon-dui"}):null)}))))):c.a.createElement("p",null,"\u5168\u90e8\u5b8c\u6210"),c.a.createElement(C,{isShowDialogEng:k,handlerDialogEndConfirm:function(){O(!1),f(0)},handlerDialogEndCancel:function(){O(!1),e.history.goBack()}}))};var G=function(){return c.a.createElement(r.a,null,c.a.createElement(u.a,{exact:!0,path:"/",component:k}),c.a.createElement(u.a,{exact:!0,path:"/detailAudio",component:T}),c.a.createElement(u.a,{exact:!0,path:"/detailImage",component:F}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.0e023e10.chunk.js.map