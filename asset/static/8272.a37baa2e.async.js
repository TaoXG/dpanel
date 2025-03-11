"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8272],{43831:function(le,V,e){var G=e(15009),c=e.n(G),z=e(99289),d=e.n(z),Q=e(5574),R=e.n(Q),o=e(67294),F=e(14946),Z=e(43425),$=e(48689),b=e(38345),N=e(78099),w=e(42075),L=e(25593),U=e(83062),f=e(60335),ee=e(78498),J=e(80821),ne=e(10032),te=e(5251),X=e(28230),k=e(46442),Y=e(78451),l=e(85893),n=(0,o.forwardRef)(function(E,_){var W;(0,o.useImperativeHandle)(_,function(){return{}});var g=(0,o.useRef)(),t=(0,o.useRef)(),x=(0,o.useState)(),C=R()(x,2),q=C[0],re=C[1];return(0,o.useEffect)(function(){var D,j;re(E.containerInfo),!((D=g.current)===null||D===void 0)&&D.reloadAndRest&&((j=g.current)===null||j===void 0||j.reloadAndRest())},[E.containerInfo]),(0,l.jsxs)(b.Z,{ghost:E.ghost,children:[(0,l.jsx)(ne.Z,{ref:t}),(0,l.jsx)(N.Z,{scroll:{x:"max-content"},rowKey:"key",actionRef:g,pagination:!1,columns:[{title:"\u6240\u5C5E\u7F51\u7EDC",key:"name",dataIndex:"networkName"},{title:"\u5BB9\u5668\u540D\u79F0",key:"containerName",dataIndex:"containerName",width:100,render:function(j,u,M,A,h){return(0,l.jsx)(Y.Z,{content:(0,te.fi)(u.containerName,"/")})}},{title:(0,l.jsx)(ee.Z,{title:"hostname",help:"\u63D0\u4F9B\u5BB9\u5668\u5185\u90E8\u8BBF\u95EE"}),key:"hostName",render:function(j,u,M){return u.hostName?(0,l.jsx)(w.Z,{direction:"vertical",children:u.hostName.map(function(A){if(A)return(0,l.jsx)(L.Z.Text,{copyable:!0,keyboard:!0,children:A},A)})}):(0,l.jsx)(l.Fragment,{})}},{title:"Ip",key:"ip",render:function(j,u,M,A,h){return(0,l.jsxs)(w.Z,{direction:"vertical",children:[(0,l.jsx)("span",{children:u.networkInfo.IPv4Address}),u.networkInfo.IPv6Address&&(0,l.jsx)("span",{children:u.networkInfo.IPv6Address})]})}},{title:"\u64CD\u4F5C",key:"option",width:50,fixed:"right",render:function(j,u,M,A,h){return(0,l.jsxs)(w.Z,{children:[u.networkName!=""&&(0,l.jsx)(L.Z.Link,{onClick:function(){var a;(a=t.current)===null||a===void 0||a.show(u.networkName)},children:(0,l.jsx)(U.Z,{title:"\u7BA1\u7406",children:(0,l.jsx)(Z.Z,{})})}),u.key!="bridge"&&u.key!="none"&&u.key!="host"&&u.networkName!=""&&(0,l.jsx)(J.Z,{type:"link",action:function(){return(0,F.t9)({name:u.networkName,containerName:E.containerInfo.Name})},onSuccess:function(){var a,s;!((a=g.current)===null||a===void 0)&&a.reloadAndRest&&((s=g.current)===null||s===void 0||s.reloadAndRest())},tips:"\u9000\u51FA\u8BE5\u7F51\u7EDC",children:(0,l.jsx)($.Z,{})})]})}}],request:function(){var D=d()(c()().mark(function j(u,M,A){var h,i;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,f.jV)({md5:E.containerInfo.Name});case 2:return h=s.sent,re(h.data.info),s.next=6,(0,F._3)({name:Object.keys(h.data.info.NetworkSettings.Networks)});case 6:return i=s.sent,s.abrupt("return",{data:i.data.list,success:!0,total:i.data.list.length});case 8:case"end":return s.stop()}},j)}));return function(j,u,M){return D.apply(this,arguments)}}(),toolBarRender:function(){return[(0,l.jsx)(k.Z,{showTriggerButton:!0,onSelect:function(){var j=d()(c()().mark(function u(M){var A,h;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,F.HY)({name:M.Name,containerName:E.containerInfo.Name,ipV4:""});case 2:h=a.sent,!((A=g.current)===null||A===void 0)&&A.reloadAndRest&&g.current.reloadAndRest();case 4:case"end":return a.stop()}},u)}));return function(u){return j.apply(this,arguments)}}()},"joinNetwork"),(0,l.jsx)(X.Z,{onFinish:function(){var u,M;!((u=g.current)===null||u===void 0)&&u.reloadAndRest&&((M=g.current)===null||M===void 0||M.reloadAndRest())}},"create")]},search:!1,expandable:{expandRowByClick:!1,expandedRowKeys:Object.keys((W=q==null?void 0:q.NetworkSettings.Networks)!==null&&W!==void 0?W:{bridge:[]})}})]})});V.Z=n},78272:function(le,V,e){e.d(V,{Z:function(){return h}});var G=e(5574),c=e.n(G),z=e(15009),d=e.n(z),Q=e(99289),R=e.n(Q),o=e(67294),F=e(37767),Z=e(60335),$=e(82346),b=e(58638),N=e(85265),w=e(42075),L=e(96074),U=e(83062),f=e(86250),ee=e(52031),J=e(14189),ne=e(27813),te=e(46934),X=e(184),k=e(25593),Y=e(95591),l=e(5251),n=e(85893),E=(0,o.forwardRef)(function(i,a){var s,I=(0,o.useState)(!1),T=c()(I,2),H=T[0],r=T[1];return(0,o.useImperativeHandle)(a,function(){return{}}),(0,n.jsx)(X.a,{submitter:!1,title:(0,l.fi)(i.containerInfo.Name,"/")+" - \u6587\u4EF6\u7BA1\u7406",onOpenChange:function(y){r(y)},trigger:(0,n.jsx)(k.Z.Link,{children:(0,n.jsx)(Y.Z,{})},"file"),children:H&&(0,n.jsx)(te.Z,{md5:i.containerInfo.Id,initPath:(s=i.containerInfo.Config.WorkingDir)!==null&&s!==void 0?s:"/"})})}),_=E,W=e(43831),g=e(52209),t=(0,o.forwardRef)(function(i,a){(0,o.useImperativeHandle)(a,function(){return{}});var s=(0,o.useState)(!1),I=c()(s,2),T=I[0],H=I[1];return(0,n.jsx)(X.a,{submitter:!1,title:(0,l.fi)(i.containerInfo.Name,"/")+" - \u7F51\u7EDC\u7BA1\u7406",onOpenChange:function(ae){H(ae)},open:T,trigger:(0,n.jsx)(k.Z.Link,{children:(0,n.jsx)(g.Z,{})},"file"),children:(0,n.jsx)(W.Z,{ghost:!0,containerInfo:i.containerInfo})})}),x=t,C=e(81146),q=e(45742),re=e(62597),D=(0,o.forwardRef)(function(i,a){(0,o.useImperativeHandle)(a,function(){return{show:function(K){return R()(d()().mark(function m(){var P;return d()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,Z.jV)({md5:K});case 2:P=O.sent,P.data&&ie(P.data.info),H(!0);case 5:case"end":return O.stop()}},m)}))()}}});var s=(0,o.useState)(!1),I=c()(s,2),T=I[0],H=I[1],r=(0,o.useState)(),ae=c()(r,2),y=ae[0],ie=ae[1],oe=(0,o.useRef)();return(0,n.jsxs)(n.Fragment,{children:[i.showTriggerButton&&(0,n.jsx)(k.Z.Link,{onClick:R()(d()().mark(function S(){return d()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:ie(i.containerInfo),H(!0);case 2:case"end":return m.stop()}},S)})),children:(0,n.jsx)(U.Z,{title:"\u8FD0\u884C\u65E5\u5FD7",children:(0,n.jsx)(q.Z,{})})},"log"),(0,n.jsx)(N.Z,{title:"\u5BB9\u5668\u65E5\u5FD7",open:T,forceRender:!0,onClose:function(){H(!1)},afterOpenChange:function(K){if(K)setTimeout(function(){var P,v;(P=oe.current)===null||P===void 0||P.start(),(v=oe.current)===null||v===void 0||v.fit()},1e3);else{var m;(m=oe.current)===null||m===void 0||m.close()}},width:800,children:y&&T&&(0,n.jsx)(C.Z,{ref:oe,showInDrawer:!0,id:"container:log:".concat(y==null?void 0:y.Id),request:function(){var S=R()(d()().mark(function K(m){var P;return d()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,re.Tb)({id:(P=y.Id)!==null&&P!==void 0?P:"",lineTotal:m.lineTotal,download:m.download,showTime:m.showTime});case 2:case"end":return O.stop()}},K)}));return function(K){return S.apply(this,arguments)}}(),download:function(){var S=R()(d()().mark(function K(m){var P,v,O,p;return d()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,(0,re.XH)({id:(P=y.Id)!==null&&P!==void 0?P:"",lineTotal:m.lineTotal,showTime:m.showTime});case 2:return O=B.sent,B.next=5,(0,Z.jV)({md5:(v=y.Id)!==null&&v!==void 0?v:""});case 5:return p=B.sent,B.abrupt("return",{data:new Blob([O],{type:"text/plain"}),name:p.data.info.Name.replaceAll("/","")+"_"+new Date().toLocaleDateString()+".log"});case 7:case"end":return B.stop()}},K)}));return function(K){return S.apply(this,arguments)}}()})})]})}),j=D,u=e(65913),M=e(14245),A=(0,o.forwardRef)(function(i,a){var s;(0,o.useImperativeHandle)(a,function(){return{show:function(P){return R()(d()().mark(function v(){return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return S(!0),p.next=3,K(P);case 3:case"end":return p.stop()}},v)}))()}}});var I=(0,o.useRef)(),T=(0,o.useState)(),H=c()(T,2),r=H[0],ae=H[1],y=(0,o.useState)(!1),ie=c()(y,2),oe=ie[0],S=ie[1],K=function(){var m=R()(d()().mark(function P(v){var O,p;return d()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return(O=I.current)===null||O===void 0||O.show(),B.next=3,(0,Z.jV)({md5:v}).finally(function(){var se;(se=I.current)===null||se===void 0||se.destroy()});case 3:p=B.sent,p.data&&(p.data.info.HostConfig.NetworkMode=="host"&&p.data.info.Config.ExposedPorts&&Object.keys(p.data.info.Config.ExposedPorts).map(function(se){p.data.info.NetworkSettings.Ports[se]=[{HostIp:"0.0.0.0",HostPort:se.substring(0,se.indexOf("/"))}]}),ae(p.data));case 5:case"end":return B.stop()}},P)}));return function(v){return m.apply(this,arguments)}}();return(0,n.jsx)(N.Z,{title:"\u5FEB\u6377\u67E5\u770B\u5BB9\u5668 - ".concat((0,l.fi)((s=r==null?void 0:r.info.Name)!==null&&s!==void 0?s:"","/")),open:oe,onClose:function(){S(!1),i.onFinish&&i.onFinish()},width:800,extra:(0,n.jsxs)(w.Z,{split:(0,n.jsx)(L.Z,{type:"vertical"}),children:[(r==null?void 0:r.info)&&r.info.State.Running&&(0,n.jsx)(_,{containerInfo:r.info}),(r==null?void 0:r.info)&&(0,n.jsx)(x,{containerInfo:r.info}),(r==null?void 0:r.info)&&r.info.State.Running&&(0,n.jsx)(j,{containerInfo:r.info,showTriggerButton:!0}),(0,n.jsx)(U.Z,{title:"\u67E5\u770B\u5B8C\u6574\u4FE1\u606F",children:(0,n.jsx)($.Link,{to:"/app/detail/edit/"+(r==null?void 0:r.info.Id),children:(0,n.jsx)(b.Z,{})},"detail")})]}),children:(0,n.jsx)(u.Z,{ref:I,children:(0,n.jsxs)(f.Z,{vertical:!0,gap:20,children:[r&&(0,n.jsx)(J.Z,{ghost:!0,data:r==null?void 0:r.info,onFinish:R()(d()().mark(function m(){return d()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,K(r.info.Id);case 2:return v.t0=v.sent,v.abrupt("return",[v.t0]);case 4:case"end":return v.stop()}},m)}))}),r&&(0,n.jsx)(ne.Z,{ghost:!0,data:r,checkContainerUpgrade:function(){S(!1),i.onUpgradeFinish&&i.onUpgradeFinish()}}),r&&(0,n.jsx)(F.Z,{data:r,ghost:!0}),(0,n.jsx)(ee.Z,{data:r==null?void 0:r.info,ghost:!0}),r&&(0,n.jsx)(M.Z,{data:r.info,ghost:!0})]})})})}),h=A},81146:function(le,V,e){var G=e(15009),c=e.n(G),z=e(99289),d=e.n(z),Q=e(97857),R=e.n(Q),o=e(67294),F=e(97269),Z=e(62370),$=e(5966),b=e(97462),N=e(82346),w=e(71230),L=e(15746),U=e(34041),f=e(28036),ee=e(84567),J=e(42075),ne=e(54964),te=e(80821),X=e(23430),k=e(93162),Y=e.n(k),l=e(12320),n=e.n(l),E=e(78267),_=e.n(E),W=e(75458),g=e.n(W),t=e(85893),x=new l.Terminal(R()(R()({},ne.a),{},{fontSize:12})),C=new E.FitAddon,q=new W.SearchAddon,re=(0,o.forwardRef)(function(D,j){(0,o.useImperativeHandle)(j,function(){return{fit:function(){x.clear(),C.fit()},start:function(){return d()(c()().mark(function i(){return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,A({lineTotal:500});case 2:case"end":return s.stop()}},i)}))()},close:function(){M.progress.close(D.id)}}});var u=(0,o.useRef)(),M=(0,N.useModel)("subscriber");M.addDataHandler(D.id,function(h){x.write(h.data.replaceAll(`
`,`

`))});var A=function(){var h=d()(c()().mark(function i(a){return c()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return x.clear(),a.download=!1,I.next=4,D.request(a);case 4:case"end":return I.stop()}},i)}));return function(a){return h.apply(this,arguments)}}();return(0,o.useEffect)(function(){return window.addEventListener("resize",function(){C.fit()}),x.loadAddon(C),x.open(document.getElementById("terminal-container-log")),C.fit(),function(){x.clear(),x.reset(),M.progress.close(D.id)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.A,{submitter:!1,layout:"horizontal",onValuesChange:function(i,a){A({md5:D.id,lineTotal:parseInt(a.lineTotal),showTime:a.showTime})},formRef:u,children:(0,t.jsxs)(w.Z,{gutter:[10,0],children:[(0,t.jsx)(L.Z,{span:8,children:(0,t.jsx)(Z.Z,{name:"lineTotal",initialValue:"500",label:"\u83B7\u53D6\u65E5\u5FD7\u6761\u6570",children:(0,t.jsxs)(U.Z,{defaultValue:"500",children:[(0,t.jsx)(U.Z.Option,{value:"100",children:"100\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(U.Z.Option,{value:"200",children:"200\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(U.Z.Option,{value:"500",children:"500\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(U.Z.Option,{value:"1000",children:"1000\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(U.Z.Option,{value:"-1",children:"\u5168\u90E8\uFF08\u4E0B\u8F7D\u53EF\u89C1\uFF09"})]})})}),(0,t.jsx)(L.Z,{children:(0,t.jsx)(f.ZP,{onClick:function(){x.clear()},children:"\u6E05\u5C4F"})}),(0,t.jsx)(L.Z,{children:(0,t.jsx)(Z.Z,{name:"showTime",valuePropName:"checked",children:(0,t.jsx)(ee.Z,{children:"\u663E\u793A\u65F6\u95F4"})})}),(0,t.jsx)(L.Z,{children:(0,t.jsx)($.Z,{label:"\u67E5\u627E",name:"keywork"})}),(0,t.jsx)(L.Z,{children:(0,t.jsx)(b.Z,{name:["keywork"],children:function(i){var a=i.keywork;return(0,t.jsxs)(J.Z,{size:10,children:[(0,t.jsx)(f.ZP,{onClick:function(){q.findNext(a)},children:"\u4E0B\u4E00\u4E2A"},"next"),(0,t.jsx)(f.ZP,{onClick:function(){q.findPrevious(a)},children:"\u4E0A\u4E00\u4E2A"},"prev")]})}})}),(0,t.jsx)(L.Z,{children:(0,t.jsx)(te.Z,{icon:(0,t.jsx)(X.Z,{}),action:d()(c()().mark(function h(){var i,a,s;return c()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(!D.download){T.next=5;break}return T.next=3,D.download({lineTotal:parseInt((i=u.current)===null||i===void 0?void 0:i.getFieldValue("lineTotal")),showTime:(a=u.current)===null||a===void 0?void 0:a.getFieldValue("showTime")});case 3:s=T.sent,(0,k.saveAs)(s.data,s.name);case 5:case"end":return T.stop()}},h)})),children:"\u4E0B\u8F7D\u65E5\u5FD7"})})]})}),(0,t.jsx)("div",{style:{marginTop:"20px",height:D.showInDrawer?"75vh":"580px"},id:"terminal-container-log"})]})});V.Z=re},46442:function(le,V,e){var G=e(15009),c=e.n(G),z=e(99289),d=e.n(z),Q=e(5574),R=e.n(Q),o=e(67294),F=e(14946),Z=e(64789),$=e(78099),b=e(28036),N=e(85265),w=e(42075),L=e(66309),U=e(28230),f=e(85893),ee=(0,o.forwardRef)(function(J,ne){(0,o.useImperativeHandle)(ne,function(){return{show:function(){Y(!0)}}});var te=(0,o.useState)(!1),X=R()(te,2),k=X[0],Y=X[1],l=(0,o.useRef)();return(0,f.jsxs)(f.Fragment,{children:[J.showTriggerButton&&(0,f.jsx)(b.ZP,{onClick:function(){Y(!0)},children:"\u52A0\u5165\u7F51\u7EDC"}),(0,f.jsx)(N.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:800,footer:!1,open:k,onClose:function(){return Y(!1)},extra:(0,f.jsx)(w.Z,{children:(0,f.jsx)(U.Z,{onFinish:function(){var E,_;!((E=l.current)===null||E===void 0)&&E.reloadAndRest&&((_=l.current)===null||_===void 0||_.reloadAndRest())}},"create")}),children:(0,f.jsx)($.Z,{rowKey:"Name",toolBarRender:!1,actionRef:l,columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(E,_,W,g,t){return _.Name=="none"||_.Name=="bridge"||_.Name=="host"?(0,f.jsxs)(f.Fragment,{children:[_.Name," ",(0,f.jsx)(L.Z,{color:"blue",children:"System"})]}):(0,f.jsx)(f.Fragment,{children:E})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Network",search:!1,dataIndex:["IPAM","Config",0,"Subnet"],render:function(E,_,W,g,t){return(0,f.jsxs)(w.Z,{children:[_.IPAM.Config&&_.IPAM.Config[0]&&"".concat(_.IPAM.Config[0].Subnet," - ").concat(_.IPAM.Config[0].Gateway),_.IPAM.Config&&_.IPAM.Config[1]&&"".concat(_.IPAM.Config[1].Subnet," - ").concat(_.IPAM.Config[1].Gateway)]})}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(E,_,W,g,t){return[_.Name!="none"&&_.Name!="bridge"&&_.Name!="host"&&(0,f.jsx)(b.ZP,{type:"link",onClick:function(){J.onSelect(_),Y(!1)},children:(0,f.jsx)(Z.Z,{})},_.Id)]}}],request:function(){var n=d()(c()().mark(function E(_,W,g){var t;return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,F.jR)({name:_.Name});case 2:return t=C.sent,C.abrupt("return",{data:t.data.list,success:!0,total:t.data.list.length});case 4:case"end":return C.stop()}},E)}));return function(E,_,W){return n.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})});V.Z=ee},65913:function(le,V,e){var G=e(5574),c=e.n(G),z=e(74330),d=e(67294),Q=e(85893),R=(0,d.forwardRef)(function(o,F){(0,d.useImperativeHandle)(F,function(){return{show:function(){N(!0)},destroy:function(){N(!1)}}});var Z=(0,d.useState)(!1),$=c()(Z,2),b=$[0],N=$[1];return(0,Q.jsx)(z.Z,{spinning:b,size:"default",children:o.children})});V.Z=R}}]);
