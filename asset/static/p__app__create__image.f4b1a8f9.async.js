"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3985],{99861:function(ge,ue,n){var le=n(15009),_=n.n(le),he=n(64599),X=n.n(he),ae=n(99289),w=n.n(ae),me=n(5574),O=n.n(me),ie=n(83062),_e=n(14726),l=n(42119),h=n(67294),H=n(92754),p=n(3393),pe=n(184),o=n(38345),R=n(85893),ne=(0,h.forwardRef)(function(r,Z){(0,h.useImperativeHandle)(Z,function(){return{}});var M=(0,h.useState)(0),c=O()(M,2),j=c[0],m=c[1],F=(0,h.useRef)();return(0,R.jsxs)(pe.a,{trigger:(0,R.jsx)(ie.Z,{title:"\u5F53\u90E8\u7F72\u65F6\u65E0\u6CD5\u6B63\u5E38\u62C9\u53D6\u955C\u50CF\u65F6\uFF0C\u53EF\u4EE5\u624B\u52A8\u4F7F\u7528\u9762\u677F\u7684\u4ED3\u5E93\u52A0\u901F\u529F\u80FD\u62C9\u53D6\u6240\u6709\u955C\u50CF",children:(0,R.jsx)(_e.ZP,{children:r.title?r.title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF"})}),width:800,submitter:!1,title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF",onOpenChange:function(){var x=w()(_()().mark(function L(re){var q,D,v,k,z,V,ve;return _()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!re){B.next=25;break}D=0,v=X()(r.image),B.prev=3,v.s();case 5:if((k=v.n()).done){B.next=15;break}return V=k.value,m(D),(z=F.current)===null||z===void 0||z.setStart(),B.next=11,(0,p.Gb)({tag:V,type:"pull"});case 11:ve=B.sent,D++;case 13:B.next=5;break;case 15:B.next=20;break;case 17:B.prev=17,B.t0=B.catch(3),v.e(B.t0);case 20:return B.prev=20,v.f(),B.finish(20);case 23:(q=F.current)===null||q===void 0||q.setFinish(),m(D);case 25:case"end":return B.stop()}},L,null,[[3,17,20,23]])}));return function(L){return x.apply(this,arguments)}}(),children:[(0,R.jsx)(o.Z,{children:(0,R.jsx)(l.Z,{current:j,items:r.image.map(function(x,L){return{title:x,key:L}})})}),(0,R.jsx)(o.Z,{children:(0,R.jsx)(H.Z,{ref:F})})]})});ue.Z=ne},91058:function(ge,ue,n){var le=n(5574),_=n.n(le),he=n(89035),X=n(38345),ae=n(17186),w=n(24739),me=n(5966),O=n(83062),ie=n(14726),_e=n(85576),l=n(67294),h=n(95089),H=n(85893),p="docker-image",pe=(0,l.forwardRef)(function(o,R){var ne=(0,l.useState)(p),r=_()(ne,2),Z=r[0],M=r[1],c=(0,l.useRef)(),j=(0,l.useState)(""),m=_()(j,2),F=m[0],x=m[1],L=function(){Z!="code"?M("code"):M(p)};(0,l.useImperativeHandle)(R,function(){return{addEnvItem:function(v,k){var z,V=(z=c.current)===null||z===void 0?void 0:z.getList(),ve=!1;if(V==null||V.map(function(B){if(B.name==v){ve=!0;return}}),!ve){var e;(e=c.current)===null||e===void 0||e.add({name:v,value:k})}},clear:function(){var v;(v=c.current)===null||v===void 0||(v=v.getList())===null||v===void 0||v.map(function(k,z){var V;(V=c.current)===null||V===void 0||V.remove(z)})}}});function re(D){try{for(var v,k,z=(v=(k=c.current)===null||k===void 0||(k=k.getList())===null||k===void 0?void 0:k.length)!==null&&v!==void 0?v:0,V=z;V>=0;V--){var ve;(ve=c.current)===null||ve===void 0||ve.remove(V)}var e=D.split(`
`),B=0;e.map(function(Ie){var xe,fe=Ie.split("=");fe.length<2||((xe=c.current)===null||xe===void 0||xe.add({name:fe[0],value:fe.slice(1).join("=")},B),B++)})}catch(Ie){}}function q(){if(c){var D,v=(D=c.current)===null||D===void 0?void 0:D.getList();if(v){var k=[];return v.map(function(z){k.push("".concat(z.name,"=").concat(z.value))}),k.join(`
`)}else return""}else return""}return(0,H.jsxs)(X.Z,{title:"\u73AF\u5883\u53D8\u91CF",headerBordered:!0,extra:(0,H.jsx)(O.Z,{title:"\u4EE3\u7801\u7F16\u8F91\u6A21\u5F0F",children:(0,H.jsx)(ie.ZP,{icon:(0,H.jsx)(he.Z,{}),type:Z=="code"?"primary":"default",onClick:L,children:"\u4EE3\u7801\u6A21\u5F0F"})}),children:[(0,H.jsx)(ae.u,{name:"environment",actionRef:c,creatorButtonProps:o.showAddButton?{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"}:!1,copyIconProps:!1,min:0,children:(0,H.jsxs)(w.UW,{children:[(0,H.jsx)(me.Z,{width:o.showInDrawer?"sm":"md",name:"name",label:"\u53D8\u91CF\u540D",required:!0,rules:[{required:!0}],disabled:o.showDisableName,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D\u79F0"}),(0,H.jsx)(me.Z,{width:"md",name:"value",label:"\u53D8\u91CF\u503C",rules:[{required:!!o.requireValue}],placeholder:"\u8F93\u5165\u53D8\u91CF\u503C\uFF0C\u53EF\u4EE5\u4E3A\u7A7A"})]})}),(0,H.jsx)(_e.Z,{width:"800px",open:Z=="code",onCancel:function(){return M("docker-image")},onOk:function(){re(F),M("docker-image")},children:(0,H.jsx)(h.ZP,{onChange:function(v){return x(v)},value:q(),height:"680px",theme:"light"})})]})});ue.Z=pe},82034:function(ge,ue,n){var le=n(5574),_=n.n(le),he=n(35880),X=n(38345),ae=n(52688),w=n(97462),me=n(17186),O=n(24739),ie=n(5966),_e=n(42075),l=n(67294),h=n(85893),H=(0,l.forwardRef)(function(p,pe){var o=(0,l.useState)(""),R=_()(o,2),ne=R[0],r=R[1],Z=(0,l.useRef)(),M=(0,l.useContext)(he.Z),c=M.createFormRef;return(0,l.useImperativeHandle)(pe,function(){return{setExposePort:function(m){if(m){var F,x,L=(F=(x=Z.current)===null||x===void 0?void 0:x.getList())!==null&&F!==void 0?F:[];Object.keys(m).map(function(re){var q=!1;if(L.map(function(v){v.dest==re&&(q=!0)}),!q){var D;(D=Z.current)===null||D===void 0||D.add({host:"",dest:re})}})}},setHostname:function(m){r(m)},addPortItem:function(m,F){var x,L=(x=Z.current)===null||x===void 0?void 0:x.getList(),re=!1;if(L==null||L.map(function(D){if(D.host==m){re=!0;return}}),!re){var q;(q=Z.current)===null||q===void 0||q.add({host:m,dest:F})}}}}),(0,h.jsx)(X.Z,{title:"\u7ED1\u5B9A\u7AEF\u53E3",tooltip:"\u8BBF\u95EE\u7AEF\u53E3\u7559\u7A7A\u65F6\u968F\u673A\u751F\u6210\u7AEF\u53E3\uFF0C\u5168\u90E8\u5220\u9664\u5219\u8868\u793A\u4E0D\u66B4\u9732\u7AEF\u53E3",headerBordered:!0,extra:(0,h.jsxs)(_e.Z,{children:[p.showBindHost&&(0,h.jsx)(ae.Z,{name:"useHostNetwork",fieldProps:{checkedChildren:"\u7ED1\u5B9AHost\u7F51\u7EDC",unCheckedChildren:"\u7ED1\u5B9AHost\u7F51\u7EDC",onChange:function(m){if(m){var F;(F=c.current)===null||F===void 0||F.setFieldsValue({bindIpV6:!1,publishAllPorts:!1})}}}}),p.showBindIpV6&&(0,h.jsx)(w.Z,{name:["siteName","useHostNetwork"],children:function(m){var F=m.useHostNetwork;return(0,h.jsx)(ae.Z,{name:"publishAllPorts",fieldProps:{checkedChildren:"\u7ED1\u5B9A\u5168\u90E8\u7AEF\u53E3",unCheckedChildren:"\u7ED1\u5B9A\u5168\u90E8\u7AEF\u53E3"},disabled:F},"publishAllPorts")}}),p.showBindIpV6&&(0,h.jsx)(w.Z,{name:["siteName","useHostNetwork"],children:function(m){var F=m.useHostNetwork;return(0,h.jsx)(ae.Z,{name:"bindIpV6",fieldProps:{checkedChildren:"IpV6",unCheckedChildren:"IpV6"},disabled:F},"bindIpV6")}})]}),children:(0,h.jsx)(w.Z,{name:["useHostNetwork","bindIpV6","publishAllPorts"],children:function(m){var F=m.useHostNetwork,x=m.bindIpV6,L=m.publishAllPorts;if(!F&&!L)return(0,h.jsx)(me.u,{name:"ports",actionRef:Z,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BF9\u5916\u90E8\u8BBF\u95EE"},min:0,copyIconProps:!1,children:(0,h.jsxs)(O.UW,{children:[(0,h.jsx)(ie.Z,{width:p.showInDrawer?"sm":"md",name:"host",label:"\u5916\u90E8\u8BBF\u95EE\u7AEF\u53E3",tooltip:"\u5BF9\u5916\u8BBF\u95EE\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u8BBF\u95EE\u7AEF\u53E3\u6216\u662F\u521B\u5EFA\u5B8C\u6210\u540E\u5BF9\u5BB9\u5668\u7ED1\u5B9A\u57DF\u540D",placeholder:"\u7559\u7A7A\u5C06\u4F7F\u7528\u968F\u673A\u7AEF\u53E3\uFF0C\u7ED1\u5B9AIpV6\u5FC5\u586B",required:x,rules:[{required:x}]}),(0,h.jsx)(ie.Z,{label:"\u5BB9\u5668\u5185\u7AEF\u53E3",width:p.showInDrawer?"sm":"md",name:"dest",placeholder:"\u6784\u5EFA\u65F6 Expose \u6307\u5B9A\u7684\u7AEF\u53E3",required:!0,rules:[{required:!0}]})]})})}})})});ue.Z=H},92067:function(ge,ue,n){n.d(ue,{Z:function(){return pe}});var le=n(15009),_=n.n(le),he=n(99289),X=n.n(he),ae=n(60335),w=n(27496),me=n(64789),O=n(10641),ie=n(42075),_e=n(66309),l=n(46464),h=n(14726),H=n(67294),p=n(85893);function pe(o){return(0,p.jsx)(O.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"names",render:function(ne,r,Z,M){return(0,p.jsx)(ie.Z,{direction:"vertical",style:{textAlign:"left"},children:r==null?void 0:r.Names.map(function(c){return c})},r.Id)}},{title:"\u7AEF\u53E3",dataIndex:"ports",search:!1,render:function(ne,r,Z,M){return r!=null&&r.Ports?(0,p.jsx)(ie.Z,{direction:"vertical",style:{textAlign:"left"},children:r==null?void 0:r.Ports.map(function(c,j){return(0,p.jsx)(_e.Z,{color:"#2db7f5",icon:c.PublicPort?(0,p.jsx)(w.Z,{}):"",children:"".concat(c.PublicPort?c.IP+":"+c.PublicPort+"->":"").concat(c.PrivatePort,"/").concat(c.Type)},j)})},r.Id):(0,p.jsx)(p.Fragment,{})}},{title:"\u8FD0\u884C\u5BB9\u5668",search:!1,render:function(ne,r,Z,M){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.Z.Text,{ellipsis:{tooltip:r.Image},children:r.Image},r.Id)})}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",ellipsis:!0,width:100,render:function(ne,r,Z,M){return[(0,p.jsx)(h.ZP,{type:"link",onClick:function(){(0,ae.jV)({md5:r.Id}).then(function(j){return o.onSelect&&o.onSelect(j.data.info),!0})},children:(0,p.jsx)(me.Z,{})},r.Id)]}}],rowKey:"Id",request:function(){var R=X()(_()().mark(function ne(r,Z,M){return _()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",new Promise(function(m,F){(0,ae.IE)({tag:r.names}).then(function(x){var L={data:x.data.list,success:!0,total:x.data.list.length};m(L)})}));case 1:case"end":return j.stop()}},ne)}));return function(ne,r,Z){return R.apply(this,arguments)}}(),pagination:{pageSize:5}})}},35880:function(ge,ue,n){var le=n(67294),_=(0,le.createContext)({});ue.Z=_},44025:function(ge,ue,n){n.r(ue),n.d(ue,{default:function(){return an}});var le=n(15009),_=n.n(le),he=n(99289),X=n.n(he),ae=n(5574),w=n.n(ae),me=n(90078),O=n(38345),ie=n(97269),_e=n(2236),l=n(5966),h=n(97462),H=n(64218),p=n(92398),pe=n(40056),o=n(67294),R=n(35880),ne=n(10641),r=n(62370),Z=n(85576),M=n(42075),c=n(96074),j=n(46464),m=n(83062),F=n(71230),x=n(15746),L=n(14726),re=n(3393),q=n(18148),D=n(5251),v=n(64789),k=n(75162),z=n(28307),V=n(78451),ve=n(99861),e=n(85893);function B(s){var Y=(0,o.useState)(!1),b=w()(Y,2),N=b[0],i=b[1],P=(0,o.useRef)(),f=(0,o.useContext)(R.Z),A=f.createFormRef,S=f.volumeListRef,U=f.createEnvRef,E=f.domainRef,C=(0,o.useRef)(),ee=function(){var y=X()(_()().mark(function I(a){var K,de,G,Q,d,oe,ce,Ce,se,$,W,u;return _()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return i(!1),J.next=3,(0,re.YU)({md5:a});case 3:d=J.sent,s.redeploy||(se=(oe=A.current)===null||oe===void 0?void 0:oe.getFieldsValue(),(ce=A.current)===null||ce===void 0||ce.resetFields(),(Ce=A.current)===null||Ce===void 0||Ce.setFieldsValue({siteName:se.siteName,siteTitle:se.siteTitle})),d.data.info.Config.Env&&d.data.info.Config.Env.map(function(te){var g,Ee=te.split("=");(g=U.current)===null||g===void 0||g.addEnvItem(Ee[0],Ee.slice(1).join("="))}),(K=A.current)===null||K===void 0||K.setFieldValue("imageName",a),(de=A.current)===null||de===void 0||de.setFieldValue("workDir",d.data.info.Config.WorkingDir),(G=E.current)===null||G===void 0||G.setExposePort(d.data.info.Config.ExposedPorts),d.data.info.Config.Volumes?(W=[],Object.keys(d.data.info.Config.Volumes).map(function(te,g){W.push(te)}),($=S.current)===null||$===void 0||$.setDefaultDestPath(W)):(u=S.current)===null||u===void 0||u.setDefaultDestPath([]),(Q=A.current)===null||Q===void 0||Q.setFieldsValue({workDir:{value:"",useDefault:!0,default:d.data.info.Config.WorkingDir},user:{value:"",useDefault:!0,default:d.data.info.Config.User},command:{value:"",useDefault:!0,default:d.data.info.Config.Cmd&&d.data.info.Config.Cmd.join(" ")},entrypoint:{value:"",useDefault:!0,default:d.data.info.Config.Entrypoint&&d.data.info.Config.Entrypoint.join(" ")}});case 11:case"end":return J.stop()}},I)}));return function(a){return y.apply(this,arguments)}}();return(0,o.useEffect)(function(){s.fromImageId&&ee(s.fromImageId)},[s.fromImageId]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Z.Z,{open:N,width:1024,title:"\u9009\u62E9\u955C\u50CF",footer:!1,onCancel:function(){return i(!1)},children:(0,e.jsx)(ne.Z,{scroll:{x:"max-content"},columns:[{title:"Id",dataIndex:"Id",search:!1,width:200,render:function(I,a,K,de,G){return(0,e.jsx)(V.Z,{content:a.Id})}},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"tag",width:200,render:function(I,a,K,de){return(0,e.jsx)(V.Z,{content:a.RepoTags[0]})}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(I,a,K,de){return(0,e.jsx)("div",{children:(0,D.ZM)(a.Created*1e3)},a.Id)},sorter:function(I,a){return I.Created-a.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:80,render:function(I,a,K,de){return(0,e.jsxs)(M.Z,{split:(0,e.jsx)(c.Z,{type:"vertical"}),children:[(0,e.jsx)(j.Z.Link,{onClick:X()(_()().mark(function G(){return _()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",ee(a.RepoTags[0]));case 1:case"end":return d.stop()}},G)})),children:(0,e.jsx)(m.Z,{title:"\u4F7F\u7528\u955C\u50CF",children:(0,e.jsx)(v.Z,{})})},"addImage"),(0,e.jsx)(j.Z.Link,{onClick:X()(_()().mark(function G(){var Q;return _()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:a.RepoTags[0]&&((Q=C.current)===null||Q===void 0||Q.setImageName(a.RepoTags[0]));case 1:case"end":return oe.stop()}},G)})),children:(0,e.jsx)(m.Z,{title:"\u66F4\u65B0\u955C\u50CF",children:(0,e.jsx)(k.Z,{})})},"updateImage")]})}}],request:function(){var y=X()(_()().mark(function I(a,K,de){var G,Q,d,oe,ce;return _()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return s.redeploy&&(Q=(G=A.current)===null||G===void 0?void 0:G.getFieldValue("imageName"),a.tag=Q?Q.split(":")[0]:a.tag),se.next=3,(0,q.KG)({tag:a.tag});case 3:return d=se.sent,oe=0,ce=[],d.data.list&&(ce=d.data.list.flatMap(function($){return $.RepoTags.map(function(W){return{Key:oe++,Id:$.Id,Created:$.Created,RepoTags:[W]}})})),se.abrupt("return",{data:ce,success:!0,total:ce.length});case 8:case"end":return se.stop()}},I)}));return function(I,a,K){return y.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(z.Z,{onClick:function(){i(!1)},buttonType:"primary",ref:C,onFinish:function(a){console.log(a),ee(a)}},"remote")]},formRef:P,rowKey:"Key",pagination:{pageSize:5}})},"imageTableList"),(0,e.jsxs)(F.Z,{children:[(0,e.jsx)(x.Z,{span:14,children:(0,e.jsx)(l.Z,{label:"\u955C\u50CF",tooltip:s.redeploy?"\u66F4\u65B0\u5BB9\u5668\u65F6,\u53EA\u53EF\u4EE5\u9009\u62E9\u8BE5\u955C\u50CF\u4E0B\u7684\u4E0D\u540Ctag.\u4E5F\u53EF\u4EE5\u5F3A\u5236\u66F4\u65B0\u5DF2\u90E8\u7F72tag,\u66F4\u6B21\u90E8\u7F72":"\u65B0\u5EFA\u5BB9\u5668\u65F6,\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u955C\u50CF,\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u5168\u65B0\u7684\u955C\u50CF\u6216\u662F\u66F4\u65B0\u672C\u5730\u955C\u50CF\u7684tag",name:"imageName",disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u955C\u50CF\uFF0C\u5982\u679C\u662F\u8FDC\u7A0B\u955C\u50CF\u8BF7\u5148\u4E0B\u8F7D",rules:[{required:!0}],required:!0})}),(0,e.jsx)(x.Z,{children:(0,e.jsx)(r.Z,{label:" ",children:(0,e.jsxs)(M.Z,{children:[(0,e.jsx)(L.ZP,{type:"primary",onClick:function(){return i(!0)},children:s.redeploy?"\u66F4\u65B0\u955C\u50CF":"\u9009\u62E9\u955C\u50CF"},"showBtn"),(0,e.jsx)(h.Z,{name:["imageName"],children:function(I){var a=I.imageName;if(s.redeploy)return(0,e.jsx)(ve.Z,{image:[a],title:"\u66F4\u65B0\u5F53\u524D\u955C\u50CF"})}})]})})})]})]})}var Ie=n(60335),xe=n(24969),fe=n(24739),Se=n(63434),Pe=n(17186),Ke=n(92067),we=(0,o.forwardRef)(function(s,Y){var b=(0,o.useState)(!1),N=w()(b,2),i=N[0],P=N[1],f=(0,o.useRef)(),A=function(E){var C=(0,o.useState)([]),ee=w()(C,2),y=ee[0],I=ee[1];return(0,o.useEffect)(function(){(0,Ie.jV)({md5:E.name}).then(function(a){var K;return I((K=a.data.info.Config.Env)!==null&&K!==void 0?K:[]),!0})},[]),(0,e.jsxs)(O.Z,{bordered:!0,extra:E.action,style:{marginBottom:10},children:[(0,e.jsx)(O.Z,{title:"\u5173\u8054\u4FE1\u606F",children:(0,e.jsxs)(fe.UW,{children:[(0,e.jsx)(l.Z,{label:"\u5BB9\u5668\u540D\u79F0",name:"name",width:"md",readonly:!0}),(0,e.jsx)(l.Z,{label:"\u8BBF\u95EEHostName",name:"alise",width:"md",tooltip:"\u901A\u8FC7\u914D\u7F6E\u6B64\u540D\u79F0\uFF0C\u5728\u5BB9\u5668\u5185\u90E8\u8FDB\u884C\u8BF7\u6C42\u8BBF\u95EE"}),(0,e.jsx)(Se.Z,{label:"\u5173\u8054\u5B58\u50A8",name:"volume"})]})}),(0,e.jsx)(O.Z,{title:"\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)(M.Z,{direction:"vertical",children:y&&y.map(function(a,K){return(0,e.jsx)(j.Z.Text,{copyable:{icon:(0,e.jsx)(xe.Z,{}),onCopy:function(){var G=a.split("=");s.onAddEnv(G[0],G[1])},tooltips:["add env","success"]},code:!0,ellipsis:{tooltip:a},style:{width:300},children:a},K)})},"linkEnv")})]})},S=function(E){var C,ee,y=!1,I=(C=(ee=f.current)===null||ee===void 0?void 0:ee.getList())!==null&&C!==void 0?C:[];if(I.map(function(K){K.name==E.name&&(y=!0)}),!y){var a;(a=f.current)===null||a===void 0||a.add(E)}};return(0,o.useImperativeHandle)(Y,function(){return{setDefaultLink:function(E){E&&E.map(function(C){C.name!=""&&S(C)})}}}),(0,e.jsxs)(O.Z,{title:"\u5173\u8054\u5BB9\u5668",headerBordered:!0,children:[(0,e.jsx)(Pe.u,{name:"links",actionRef:f,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5173\u8054"},actionGuard:{beforeAddRow:function(E,C){return P(!0),!1}},copyIconProps:!1,min:0,itemRender:function(E,C){return(0,e.jsx)(A,{action:E.action,name:C.record.name})}}),(0,e.jsx)(Z.Z,{title:"\u9009\u62E9\u5BB9\u5668",width:1024,footer:!1,open:i,onCancel:function(){return P(!1)},children:(0,e.jsx)(Ke.Z,{onSelect:function(E){S({name:E.Name,alise:E.Config.Hostname,volume:!1}),P(!1)}})})]})}),He=we,ke=n(91058),ye=n(86615),be=n(64317),Ve=(0,o.forwardRef)(function(s,Y){var b=(0,o.useRef)();return(0,o.useImperativeHandle)(Y,function(){return{setDefaultDestPath:function(i){var P,f,A=(P=(f=b.current)===null||f===void 0?void 0:f.getList())!==null&&P!==void 0?P:[];i.length!=0&&i.filter(function(S){return S!=""}).map(function(S){var U=!1;if(A.map(function(C){if(C.dest==S){U=!0;return}}),!U){var E;(E=b.current)===null||E===void 0||E.add({dest:S,permission:"write",inImage:!0,edit:!1})}})}}}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.Z,{title:"\u9ED8\u8BA4\u5B58\u50A8\uFF08Volume\uFF09",subTitle:"\u9ED8\u8BA4\u5B58\u50A8\u4E0E\u7AD9\u70B9\u6807\u8BC6\u4FDD\u6301\u4E00\u81F4",headerBordered:!0,children:(0,e.jsx)(Pe.u,{name:"volumesDefault",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u76EE\u5F55\u5230\u9ED8\u8BA4\u5B58\u50A8"},actionRef:b,copyIconProps:!1,min:0,children:function(i,P,f){var A=f.getCurrentRowData();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z,{width:"lg",name:"dest",label:"\u5BB9\u5668\u5185\u8DEF\u5F84",required:!0,rules:[{required:!0}],disabled:A.inImage}),(0,e.jsx)(ye.Z.Group,{hidden:!0,name:"inImage",label:"\u955C\u50CF\u5185\u6302\u8F7D",valueEnum:{1:"\u662F",0:"\u5426"}})]})}})}),(0,e.jsx)(O.Z,{title:"\u81EA\u5B9A\u4E49\u6302\u8F7D\u6216\u662F\u5B58\u50A8\u5377",tooltip:"\u6302\u8F7D\u53EF\u4EE5\u662F\u5BBF\u4E3B\u673A\u7684\u76EE\u5F55\u6216\u662F\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5B58\u50A8\u5377\u540D\uFF08\u81EA\u52A8\u65B0\u5EFA\uFF09\u3002",headerBordered:!0,direction:"column",children:(0,e.jsx)(Pe.u,{name:"volumes",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u6620\u5C04\u76EE\u5F55"},copyIconProps:!1,min:0,children:(0,e.jsxs)(fe.UW,{children:[(0,e.jsxs)(M.Z.Compact,{children:[(0,e.jsx)(l.Z,{label:"\u5BBF\u4E3B\u673A\u6587\u4EF6\u3001\u76EE\u5F55\u6216\u5B58\u50A8\u5377",name:"host",width:"md",required:!0,rules:[{required:!0}]}),(0,e.jsx)(be.Z,{label:" ",valueEnum:{write:"\u8BFB\u5199",readonly:"\u53EA\u8BFB"},initialValue:"write",name:"permission"})]}),(0,e.jsx)(l.Z,{label:"\u5BB9\u5668\u5185\u8DEF\u5F84",name:"dest",width:"md",required:!0,rules:[{required:!0}]})]})})})]})}),Ge=Ve,$e=n(2831),Ue=n(86125);function ze(s){var Y,b=(0,o.useState)(),N=w()(b,2),i=N[0],P=N[1];return(0,o.useEffect)(function(){(0,$e.a)().then(function(f){return P(f.data.info)})},[]),(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(l.Z,{label:"\u5171\u4EAB\u5185\u5B58\u5927\u5C0F - /dev/shm",name:"shmsize",initialValue:"64M",tooltip:"0 \u4E3A\u4F7F\u7528\u9ED8\u8BA464M"}),(0,e.jsx)(r.Z,{label:"\u6700\u5927Cpu\u914D\u989D",name:"cpus",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(Ue.Z,{step:.1,max:i==null?void 0:i.NCPU,marks:{0:"0",.5:"0.5\u6838",1:"1\u6838",1.5:"1.5\u6838",2:"2\u6838",4:"4\u6838",6:"6\u6838",8:"8\u6838"}})}),(0,e.jsx)(r.Z,{label:"\u6700\u5927\u5185\u5B58\u914D\u989D",name:"memory",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(Ue.Z,{step:256,max:Math.round(((Y=i==null?void 0:i.MemTotal)!==null&&Y!==void 0?Y:0)/1024/1024),marks:{0:"0",1024:"1G",2048:"2G",3072:"3G",4096:"4G"}})}),(0,e.jsx)(be.Z,{label:"\u65E5\u5FD7\u7C7B\u578B",name:["log","driver"],tooltip:"\u9ED8\u8BA4\u4F7F\u7528 json-file \u9A71\u52A8\u7531 docker \u7EDF\u4E00\u7BA1\u7406\u3002\u91C7\u7528 journal \u65F6\u65E5\u5FD7\u5C06\u6765\u5BBF\u4E3B\u673A\u7BA1\u7406",initialValue:"json-file",valueEnum:{"json-file":"json-file",journald:"journal (\u5BBF\u4E3B\u9700\u8981\u5B89\u88C5journal\u670D\u52A1)"}}),(0,e.jsx)(h.Z,{name:["log"],children:function(A){var S=A.log;if(S.driver=="json-file")return(0,e.jsxs)(fe.UW,{children:[(0,e.jsx)(l.Z,{label:"\u65E5\u5FD7\u5207\u5272\u5C3A\u5BF8",name:["log","maxSize"],placeholder:"\u4F8B\u5982\uFF1A10k,5M",tooltip:"\u9ED8\u8BA4 Docker \u5E76\u4E0D\u4F1A\u81EA\u52A8\u5207\u5272\u65E5\u5FD7"}),(0,e.jsx)(l.Z,{tooltip:"\u9ED8\u8BA4 Docker \u5E76\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7406\u65E5\u5FD7\u6587\u4EF6",label:"\u4FDD\u7559\u65E5\u5FD7\u6587\u4EF6\u6570",name:["log","maxFile"],placeholder:"\u4F8B\u5982\uFF1A10"})]})}})]})}var Ye=n(90672);function Je(){return(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(Ye.Z,{label:"DNS\u914D\u7F6E",name:"dns",placeholder:"\u8BF7\u6307\u5B9Adns\u5730\u5740\uFF0C\u4F8B\u5982\uFF1A8.8.8.8\uFF0C\u4E00\u884C\u6DFB\u4E00\u6761dns\u5730\u5740"}),(0,e.jsx)(Pe.u,{name:"label",label:"\u5BB9\u5668\u6807\u7B7E",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u6807\u7B7E"},copyIconProps:!1,min:0,children:(0,e.jsxs)(fe.UW,{children:[(0,e.jsx)(l.Z,{width:"md",name:"name",label:"\u540D\u79F0",placeholder:""}),(0,e.jsx)(l.Z,{width:"md",name:"value",label:"\u503C",placeholder:""})]})})]})}var Re=n(52688),Qe=n(44771),rn="default",on="user";function Xe(s){return(0,e.jsx)(r.Z,{label:s.label,tooltip:s.tooltip,children:(0,e.jsxs)(M.Z.Compact,{block:!0,children:[(0,e.jsx)(ye.Z.Group,{radioType:"button",name:[s.name,"useDefault"],options:[{label:"\u4F7F\u7528\u9ED8\u8BA4",value:!0},{label:"\u81EA\u5B9A\u4E49",value:!1}]}),(0,e.jsx)(h.Z,{name:[s.name],children:function(b){return b[s.name]&&b[s.name].useDefault?(0,e.jsx)(l.Z,{name:[s.name,"default"],disabled:!0,placeholder:"\u672A\u8BBE\u7F6E"}):(0,e.jsx)(l.Z,{name:[s.name,"value"]})}})]})})}var Oe=Xe;function qe(){return(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(Qe.Z,{label:"\u91CD\u542F\u7B56\u7565"}),(0,e.jsxs)(fe.UW,{children:[(0,e.jsx)(Re.Z,{name:"privileged",label:"\u8D4B\u4E88\u5BB9\u5668Root\u6743\u9650",initialValue:!1}),(0,e.jsx)(Re.Z,{name:"autoRemove",label:"\u505C\u6B62\u540E\u81EA\u52A8\u5220\u9664",initialValue:!1})]}),(0,e.jsx)(Oe,{label:"\u5DE5\u4F5C\u76EE\u5F55",tooltip:"\u9ED8\u8BA4\u4F7F\u7528\u955C\u50CF\u4E2D\u6307\u5B9A\u7684\u5DE5\u4F5C\u76EE\u5F55",name:"workDir"}),(0,e.jsx)(Oe,{label:"User",tooltip:"\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u547D\u4EE4\u7684\u7528\u6237",name:"user"}),(0,e.jsx)(Oe,{label:"Command",tooltip:"\u542F\u52A8\u5BB9\u5668\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u4EE5\u7A7A\u683C\u5206\u9694",name:"command"}),(0,e.jsx)(Oe,{label:"Entrypoint",tooltip:"\u65E0\u6CD5\u8986\u76D6\u955C\u50CF\u4E2D\u5DF2\u7ECF\u6307\u5B9A\u7684 Entrypoint \u547D\u4EE4",name:"entrypoint"})]})}var en=n(91845),We=n(62597),Le=n(54006),nn=n(4798),tn=n(82034);function je(s){return(0,e.jsx)("div",{style:{display:s.show?"block":"none"},children:s.children})}function un(){var s=(0,o.useRef)(),Y=function(i){var P,f,A=!1,S=(P=(f=s.current)===null||f===void 0?void 0:f.getList())!==null&&P!==void 0?P:[];if(S.map(function(E){E.name==i.name&&(A=!0)}),!A){var U;(U=s.current)===null||U===void 0||U.add(i)}},b=function(i){var P,f,A=!1,S=(P=(f=s.current)===null||f===void 0?void 0:f.getList())!==null&&P!==void 0?P:[];S.map(function(U,E){if(U.name==i){var C;(C=s.current)===null||C===void 0||C.remove(E)}})};return(0,e.jsx)(O.Z,{title:"\u5173\u8054\u5BBF\u4E3B\u7F51\u7EDC\u4E3B\u673A",tooltip:"\u5BB9\u5668\u5185\u5982\u679C\u9700\u8981\u8BF7\u6C42\u5BBF\u4E3B\u673A\u6240\u5728\u7684\u7F51\u7EDC\u4E2D\u7684\u4E3B\u673A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u914D\u7F6E\u5C06Ip\u6CE8\u5165\u5230\u5BB9\u5668\u4E2D",extra:(0,e.jsx)(M.Z,{children:(0,e.jsx)(Re.Z,{name:"enableBindHost",fieldProps:{checkedChildren:"\u7ED1\u5B9A\u5BBF\u4E3B\u673AIp",unCheckedChildren:"\u7ED1\u5B9A\u5BBF\u4E3B\u673AIp",onChange:function(i){i?Y({name:"host.dpanel.local",value:"host-gateway"}):b("host.dpanel.local")}}})}),children:(0,e.jsx)(Pe.u,{name:"extraHosts",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BBF\u4E3B\u673A\u7F51\u7EDC\u5173\u8054"},actionRef:s,copyIconProps:!1,min:0,children:(0,e.jsxs)(fe.UW,{children:[(0,e.jsx)(l.Z,{width:"md",name:"name",label:"Hostname",placeholder:""}),(0,e.jsx)(l.Z,{width:"md",name:"value",label:"ip",placeholder:""})]})})})}var Ae="update",Ne="copy",Te="new";function an(){var s,Y,b,N=(0,o.useContext)(R.Z),i=N.createFormRef,P=N.volumeListRef,f=N.domainRef,A=N.createEnvRef,S=N.createLinkRef,U=(0,o.useState)(Te),E=w()(U,2),C=E[0],ee=E[1],y=(0,Le.useSearchParams)(),I=w()(y,2),a=I[0],K=I[1],de=(0,Le.useNavigate)(),G=(0,o.useState)("basic"),Q=w()(G,2),d=Q[0],oe=Q[1],ce=parseInt((s=a.get("id"))!==null&&s!==void 0?s:""),Ce=(Y=a.get("containerId"))!==null&&Y!==void 0?Y:"",se=(b=a.get("imageId"))!==null&&b!==void 0?b:"";return(0,o.useEffect)(function(){if(Ce||ce)(0,We.iE)({md5:Ce,id:ce}).then(function(){var W=X()(_()().mark(function u(t){var J,te,g,Ee,Fe,Ze,Me;return _()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:if(g={info:{},layer:[]},!t.data.env.imageName){Be.next=6;break}return Be.next=4,(0,re.YU)({md5:t.data.env.imageName});case 4:Ee=Be.sent,g=Ee.data;case 6:a.get("op")==Ne?ee(Ne):ee(Ae),t.data.env.network&&t.data.env.network.map(function(T){return!T.alise&&T.name!="bridge"&&(T.alise=[t.data.siteName+".pod.dpanel.local"]),T}),t.data.env.ports&&t.data.env.ports.map(function(T){return T.host=="0"&&(T.host=""),T}),Fe=t.data.env.bindIpV6,t.data.containerInfo.Info&&t.data.containerInfo.Info.NetworkSettings.Networks&&Object.keys(t.data.containerInfo.Info.NetworkSettings.Networks).map(function(T){t.data.env.network&&(t.data.env.network=t.data.env.network.map(function(De){return T==De.name&&(De.subnet=t.data.containerInfo.Info.NetworkSettings.Networks[T].IPAddress+"/"+t.data.containerInfo.Info.NetworkSettings.Networks[T].IPPrefixLen),De})),t.data.containerInfo.Info.NetworkSettings.Networks[T].IPv6Gateway!=""&&(Fe=!0)}),t.data.env.extraHosts&&t.data.env.extraHosts.map(function(T){if(T.value=="host-gateway"){var De;(De=i.current)===null||De===void 0||De.setFieldValue("enableBindHost",!0)}}),Ze=t.data.env.ports,t.data.env.ports&&(Ze=t.data.env.ports.map(function(T){return T.host=(T.hostIp?T.hostIp+":":"")+T.host,T})),(J=i.current)===null||J===void 0||J.setFieldsValue({imageName:t.data.env.imageName,privileged:t.data.env.privileged,bindIpV6:t.data.env.useHostNetwork?!1:Fe,useHostNetwork:t.data.env.useHostNetwork,publishAllPorts:t.data.env.useHostNetwork?!1:t.data.env.publishAllPorts,workDir:{value:t.data.env.workDir,useDefault:!t.data.env.workDir,default:g&&g.info.Config.WorkingDir},user:{value:t.data.env.user,useDefault:!t.data.env.user,default:g&&g.info.Config.User},command:{value:t.data.env.command,useDefault:!t.data.env.command,default:g&&g.info.Config.Cmd&&g.info.Config.Cmd.join(" ")},entrypoint:{value:t.data.env.entrypoint,useDefault:!t.data.env.entrypoint,default:g&&g.info.Config.Entrypoint&&g.info.Config.Entrypoint.join(" ")},shmsize:(te=t.data.env.shmsize)!==null&&te!==void 0?te:"64M",cpus:t.data.env.cpus,memory:t.data.env.memory,environment:t.data.env.environment,label:t.data.env.label,volumesDefault:t.data.env.volumesDefault,volumes:t.data.env.volumes,ports:Ze,links:t.data.env.links,network:t.data.env.network,restart:t.data.env.restart,extraHosts:t.data.env.extraHosts,autoRemove:t.data.env.autoRemove,log:t.data.env.log,dns:t.data.env.dns&&t.data.env.dns.join(`
`)}),a.get("op")==Ae&&((Me=i.current)===null||Me===void 0||Me.setFieldsValue({siteTitle:t.data.siteTitle,siteName:t.data.siteName}));case 16:case"end":return Be.stop()}},u)}));return function(u){return W.apply(this,arguments)}}());else{var $;ee(Te),($=i.current)===null||$===void 0||$.resetFields()}},[a]),(0,e.jsx)(me._z,{children:(0,e.jsx)(O.Z,{direction:"column",gutter:[0,10],children:(0,e.jsxs)(ie.A,{submitter:{render:function(W,u){return(0,e.jsx)(_e.S,{children:u})}},formRef:i,onFinish:function(){var $=X()(_()().mark(function W(u){var t,J,te,g;return _()().wrap(function(Fe){for(;;)switch(Fe.prev=Fe.next){case 0:return g={siteTitle:u.siteTitle,siteName:u.siteName,imageName:u.imageName,environment:u.environment,links:u.links,ports:u.ports,volumes:u.volumes,volumesDefault:u.volumesDefault,network:u.network,privileged:(t=u.privileged)!==null&&t!==void 0?t:!1,autoRemove:(J=u.autoRemove)!==null&&J!==void 0?J:!1,restart:u.restart,cpus:u.cpus,memory:u.memory,shmsize:(te=u.shmsize)!==null&&te!==void 0?te:0,workDir:u.workDir&&!u.workDir.useDefault?u.workDir.value:"",user:u.user&&!u.user.useDefault?u.user.value:"",command:u.command&&!u.command.useDefault?u.command.value:"",entrypoint:u.entrypoint&&!u.entrypoint.useDefault?u.entrypoint.value:"",useHostNetwork:u.useHostNetwork,bindIpV6:u.bindIpV6,log:u.log,dns:u.dns&&u.dns!=""?u.dns.split(`
`):[],label:u.label,publishAllPorts:u.publishAllPorts,extraHosts:u.extraHosts},Ce&&C==Ae&&(g.containerId=Ce),Fe.next=4,(0,We.$G)(g);case 4:return de("/app/list"),Fe.abrupt("return",!0);case 6:case"end":return Fe.stop()}},W)}));return function(W){return $.apply(this,arguments)}}(),children:[(0,e.jsxs)(O.Z,{title:"\u57FA\u7840\u4FE1\u606F",headerBordered:!0,children:[(0,e.jsx)(l.Z,{name:"siteTitle",label:"\u7AD9\u70B9\u540D\u79F0",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(W){var u="";if(W.target.value&&C!=Ae){var t,J=(0,en.N9)(W.target.value.trim(),{toneType:"none",type:"array"});u=J.join(""),(t=i.current)===null||t===void 0||t.setFieldValue("siteName",u)}}},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(l.Z,{name:"siteName",label:"\u7AD9\u70B9\u6807\u8BC6",tooltip:"\u7AD9\u70B9\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u6807\u8BC6\u7AD9\u70B9\u548C\u5185\u90E8\u8BBF\u95EE",required:!0,disabled:C==Ae,rules:[{required:!0}],placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(B,{redeploy:C!=Te,fromImageId:se})]}),(0,e.jsx)(H.Z,{offsetTop:50,children:(0,e.jsx)(O.Z,{style:{marginBottom:-20},children:(0,e.jsx)(p.Z,{activeKey:d,onChange:function(W){oe(W),window.scrollTo(0,450)},items:[{label:"\u57FA\u672C\u914D\u7F6E",key:"basic"},{label:"\u5173\u8054\u914D\u7F6E",key:"link"},{label:"\u5B58\u50A8\u914D\u7F6E",key:"storage"},{label:"\u542F\u52A8\u914D\u7F6E",key:"run-command"},{label:"\u8D44\u6E90\u914D\u7F6E",key:"resource"},{label:"\u5176\u5B83",key:"other"}]})})}),(0,e.jsxs)(je,{show:d=="basic",children:[(0,e.jsx)(tn.Z,{ref:f,showBindHost:!0,showBindIpV6:!0}),(0,e.jsx)(ke.Z,{showAddButton:!0,ref:A})]}),(0,e.jsx)(je,{show:d=="link",children:(0,e.jsx)(h.Z,{name:["siteName","useHostNetwork"],children:function(W){var u=W.siteName,t=W.useHostNetwork;return t?(0,e.jsx)(pe.Z,{showIcon:!0,description:"\u7ED1\u5B9A\u5230\u5BBF\u4E3B\u673A\u7F51\u7EDC\u65F6\uFF0C\u65E0\u6CD5\u901A\u8FC7 Docker \u5173\u8054\u5176\u5B83\u5BB9\u5668\u3002\u8BF7\u4F7F\u7528\u5BBF\u4E3B\u673A\u5185\u7F51IP\u6216\u662F127.0.0.1\u4E92\u8054\u5BB9\u5668\u66B4\u9732\u7AEF\u53E3\u3002"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(He,{onAddEnv:function(te,g){var Ee;(Ee=A.current)===null||Ee===void 0||Ee.addEnvItem(te,g)},ref:S}),(0,e.jsx)(nn.Z,{siteName:u}),(0,e.jsx)(un,{})]})}})}),(0,e.jsx)(je,{show:d=="storage",children:(0,e.jsx)(Ge,{ref:P})}),(0,e.jsx)(je,{show:d=="run-command",children:(0,e.jsx)(qe,{})}),(0,e.jsx)(je,{show:d=="resource",children:(0,e.jsx)(ze,{})}),(0,e.jsx)(je,{show:d=="other",children:(0,e.jsx)(Je,{})})]},"form")})})}}}]);
