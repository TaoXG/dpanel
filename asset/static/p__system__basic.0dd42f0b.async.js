"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1050],{80821:function(ee,M,n){n.d(M,{Z:function(){return o}});var z=n(5574),b=n.n(z),K=n(24963),d=n(86738),S=n(28036),y=n(83062),Z=n(67294),_=n(85893);function o(s){var O=(0,Z.useState)(!1),$=b()(O,2),k=$[0],j=$[1],W=(0,Z.useContext)(K.Z),I=W.lang,u=W.notice,x=W.message,P=function(){j(!0),s.action().then(function(L){if(j(!1),typeof s.onSuccess=="function"&&s.onSuccess(L),s.messageSuccess){var N="";typeof s.messageSuccess=="function"?N=s.messageSuccess(L):N=s.messageSuccess,N=I("notification.finish"),s.asynced?x.info(N):x.success(N)}}).catch(function(L){j(!1),typeof s.onError=="function"&&s.onError(L)})};return s.confirm?(0,_.jsx)(d.Z,{style:{width:500},title:s.confirmTitle?s.confirmTitle:I("notification.title.tip"),description:s.confirm,onConfirm:P,okText:"Yes",cancelText:"No",children:(0,_.jsx)(S.ZP,{disabled:s.disabled,icon:s.icon,loading:k,danger:s.danger,type:s.type,children:s.children})}):(0,_.jsx)(y.Z,{title:s.tips,children:(0,_.jsx)(S.ZP,{disabled:s.disabled,icon:s.icon,loading:k,onClick:P,danger:s.danger,type:s.type,children:s.children})})}},44349:function(ee,M,n){var z=n(97857),b=n.n(z),K=n(17186),d=n(5966),S=n(86250),y=n(67294),Z=n(85893),_=(0,y.forwardRef)(function(o,s){var O=(0,y.useRef)();(0,y.useImperativeHandle)(s,function(){return{addItem:function(j,W){var I,u=(I=O.current)===null||I===void 0?void 0:I.getList(),x=!1;if(u==null||u.map(function(h){if(h.name==j){x=!0;return}}),!x){var P;(P=O.current)===null||P===void 0||P.add({name:j,value:W})}},clear:function(){var j;(j=O.current)===null||j===void 0||(j=j.getList())===null||j===void 0||j.map(function(W,I){var u;(u=O.current)===null||u===void 0||u.remove(I)})}}});var $={};return o.hideCopyButton===!0&&($.copyIconProps=!1),o.hideDeleteButton===!0&&($.deleteIconProps=!1),(0,Z.jsx)(K.u,b()(b()({initialValue:o.initialValue,label:o.label,name:o.name,actionRef:O,creatorButtonProps:o.showAddButton?{creatorButtonText:"\u6DFB\u52A0"+(o.label?o.label:o.name)}:!1,min:o.min?o.min:0},$),{},{children:function(j,W,I){return(0,Z.jsx)(S.Z,{justify:o.justify,gap:o.gap,children:o.items.map(function(u){return u.render?(0,Z.jsx)("div",{children:u.render&&u.render(j,W,I)},"".concat(o.name,"-").concat(u.name,"-").concat(j.key)):(0,Z.jsx)(d.Z,{width:u.width,name:u.name,label:u.label,required:u.required,rules:[{required:u.required}],disabled:u.disabled,placeholder:u.placeholder},"".concat(o.name,"-").concat(u.name,"-").concat(j.key))})})}}))});M.Z=_},34879:function(ee,M,n){n.d(M,{Z:function(){return d}});var z=n(97961),b=n(1677),K=n(85893);function d(S){return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(b.Z,{max:1,title:S.title,label:S.label,required:S.required,rules:[{required:S.required}],fieldProps:{name:"file",accept:S.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(Z){return new Promise(function(_){var o;(0,z._2)({path:(o=Z.response.data.path)!==null&&o!==void 0?o:""}).then(function(s){_(!0)})})}},name:S.name})})}},24963:function(ee,M,n){var z=n(67294),b=(0,z.createContext)({});M.Z=b},91518:function(ee,M,n){n.r(M),n.d(M,{default:function(){return Ie}});var z=n(5574),b=n.n(z),K=n(15009),d=n.n(K),S=n(99289),y=n.n(S),Z=n(24963),_=n(87662),o=n(63713);function s(C){return O.apply(this,arguments)}function O(){return O=y()(d()().mark(function C(p){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("/api/pro/two-fa/enable",{method:"POST",data:p}));case 1:case"end":return a.stop()}},C)})),O.apply(this,arguments)}function $(){return k.apply(this,arguments)}function k(){return k=y()(d()().mark(function C(){return d()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",(0,o.request)("/api/pro/two-fa/get-setting",{method:"POST"}));case 1:case"end":return F.stop()}},C)})),k.apply(this,arguments)}var j=n(87547),W=n(86548),I=n(97937),u=n(12119),x=n(38345),P=n(97269),h=n(97462),L=n(5966),N=n(52688),Y=n(62370),re=n(28036),de=n(98163),T=n(67294),e=n(85893);function ce(){var C=(0,T.useRef)(),p=(0,o.useModel)("@@initialState"),F=p.initialState,a=p.loading,q=p.error,G=p.refresh,v=p.setInitialState,A=(0,T.useContext)(Z.Z),E=A.message,U=A.notice,w=A.lang,D=(0,T.useRef)(),V=(0,T.useState)(0),l=b()(V,2),r=l[0],m=l[1],f=(0,o.useAccess)();return(0,T.useEffect)(function(){$().then(function(t){var c;(c=D.current)===null||c===void 0||c.setFieldsValue({enable:t.data.enable,email:t.data.email,qrcode:t.data.qrcode})})},[r]),(0,e.jsxs)(x.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsx)(x.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(j.Z,{}),subTitle:"\u7BA1\u7406\u5458",children:(0,e.jsxs)(P.A,{layout:"horizontal",labelAlign:"right",labelCol:{span:3,offset:0},formRef:C,onFinish:function(){var t=y()(d()().mark(function c(i){var g,B;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,_.Jn)({username:i.username,password:i.password,newPassword:i.newPassword});case 2:if(g=R.sent,!(g&&g.data)){R.next=9;break}return(B=C.current)===null||B===void 0||B.resetFields(),E.success("\u4FEE\u6539\u7BA1\u7406\u5458\u7528\u6237\u540D\u548C\u5BC6\u7801\u6210\u529F"),localStorage.removeItem("token"),G(),R.abrupt("return",!0);case 9:case"end":return R.stop()}},c)}));return function(c){return t.apply(this,arguments)}}(),children:[(0,e.jsx)(h.Z,{name:["enableUsername"],children:function(c){var i=c.enableUsername;return(0,e.jsx)(L.Z,{label:"\u7528\u6237\u540D",name:"username",style:{width:"80%"},initialValue:F==null?void 0:F.user.username,disabled:!i,addonAfter:[(0,e.jsx)(re.ZP,{type:"link",hidden:!!i,icon:(0,e.jsx)(W.Z,{}),onClick:function(){var B;(B=C.current)===null||B===void 0||B.setFieldValue("enableUsername",!0)}},"editBtn"),(0,e.jsx)(re.ZP,{type:"link",hidden:!i,icon:(0,e.jsx)(I.Z,{}),onClick:function(){var B;(B=C.current)===null||B===void 0||B.setFieldValue("enableUsername",!1)}},"closeBtn")]},"username")}}),(0,e.jsx)(L.Z.Password,{label:"\u5F53\u524D\u5BC6\u7801",name:"password",placeholder:"\u8F93\u5165\u7BA1\u7406\u5458\u5F53\u524D\u5BC6\u7801",rules:[{required:!0}]},"password"),(0,e.jsx)(L.Z.Password,{label:"\u65B0\u5BC6\u7801",name:"newPassword"},"newPasword"),(0,e.jsx)(h.Z,{name:["newPassword"],children:function(c){var i=c.newPassword;return(0,e.jsx)(L.Z.Password,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",name:"newPassword2",dependencies:["newPassword"],rules:[{required:typeof i!="undefined"&&i!=""},function(g){var B=g.getFieldValue;return{validator:function(R,oe){return!oe||B("newPassword")===oe?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"))}}}]},"newPasword2")}})]})}),f.canSeeTwoFa&&(0,e.jsx)(x.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(u.Z,{}),subTitle:"\u767B\u5F55\u53CC\u56E0\u7D20\u914D\u7F6E",children:(0,e.jsxs)(P.A,{onFinish:function(){var t=y()(d()().mark(function c(i){var g,B;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,s({email:i.email,enable:i.enable});case 2:g=R.sent,g&&g.data.qrcode&&((B=D.current)===null||B===void 0||B.setFieldValue("qrcode",g.data.qrcode)),m(r+1);case 5:case"end":return R.stop()}},c)}));return function(c){return t.apply(this,arguments)}}(),formRef:D,layout:"horizontal",labelAlign:"right",labelCol:{span:3,offset:0},children:[(0,e.jsx)(N.Z,{label:"\u5F00\u542F",name:"enable"}),(0,e.jsx)(L.Z,{label:"\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u90AE\u7BB1",rules:[{required:!0},{type:"email"}]}),(0,e.jsx)(Y.Z,{name:"qrcode",hidden:!0}),(0,e.jsx)(h.Z,{name:["qrcode"],children:function(c){var i=c.qrcode;if(i)return(0,e.jsx)(Y.Z,{label:"\u7ED1\u5B9A\u4E8C\u7EF4\u7801",tooltip:"\u4F7F\u7528\u652F\u6301 2fa \u7684\u9A8C\u8BC1 App \u626B\u7801\u8BE5\u4E8C\u7EF4\u7801",children:(0,e.jsx)(de.Z,{style:{border:"#d1d9e0b3 solid 1px",padding:"10px",borderRadius:"10px"},width:200,src:"data:image/png;base64,".concat(i)})})}})]})})]})}var me=n(43215);function he(){var C=(0,T.useRef)(),p=(0,T.useContext)(Z.Z),F=p.message,a=p.notice,q=p.lang,G=function(){var v=y()(d()().mark(function A(){var E,U,w,D;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,_.pe)({groupName:"setting",name:"server"});case 2:w=l.sent,(E=C.current)===null||E===void 0||E.setFieldsValue({serverIp:(U=w.data.setting.value.serverIp)!==null&&U!==void 0?U:""}),w.data.setting.value.requestTimeout&&((D=C.current)===null||D===void 0||D.setFieldsValue({requestTimeout:w.data.setting.value.requestTimeout}));case 5:case"end":return l.stop()}},A)}));return function(){return v.apply(this,arguments)}}();return(0,e.jsx)(x.Z,{direction:"column",gutter:[0,10],ghost:!0,children:(0,e.jsx)(x.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(me.Z,{}),subTitle:"\u670D\u52A1\u5668\u5730\u5740",children:(0,e.jsx)(P.A,{layout:"horizontal",labelAlign:"right",labelCol:{span:3,offset:0},formRef:C,onInit:y()(d()().mark(function v(){return d()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return G(),E.abrupt("return",!0);case 2:case"end":return E.stop()}},v)})),onFinish:function(){var v=y()(d()().mark(function A(E){var U,w,D;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return w={groupName:"setting",name:"server",value:{serverIp:E.serverIp}},E.requestTimeout&&(w.value.requestTimeout=E.requestTimeout),l.next=4,(0,_.KU)(w);case 4:return D=l.sent,(U=C.current)===null||U===void 0||U.resetFields(),G(),F.success("\u4FEE\u6539\u670D\u52A1\u5668\u914D\u7F6E\u6210\u529F"),l.abrupt("return",!0);case 9:case"end":return l.stop()}},A)}));return function(A){return v.apply(this,arguments)}}(),children:(0,e.jsx)(L.Z,{tooltip:"\u8BBE\u7F6E\u5BBF\u4E3B\u673A\u7684Ip\u6216\u662F\u57DF\u540D\uFF0C\u7528\u4E8E\u901A\u8FC7\u7AEF\u53E3\u7684\u5F62\u5F0F\u8BBF\u95EE\u5BB9\u5668\u3002\u652F\u6301IpV4\u53CAIpV6",label:"\u5BB9\u5668\u7AEF\u53E3\u8BBF\u95EE\u5730\u5740",name:"serverIp",placeholder:"\u4F8B\u5982:192.168.1.25\u30012001:db8:1::2\u3001example.com"})})})})}var fe={xs:6,sm:6,md:6,lg:3,xl:3,xxl:3,offset:0},le=n(43425),ne=n(86615),ge=n(64317),ie=n(42075),se=n(86125),ve=n(184),H=n(24739),pe=n(25054),te=n(31199),be=n(90672),Ee=n(51663),je=n(9361),xe=n(21532),Ce=n(86250),ue=n(34879),Fe=n(44349),ae=n(65451),Q=function(p){return(0,e.jsx)(Y.Z,{name:p.name,label:p.label,tooltip:p.tooltip,children:(0,e.jsx)(Ee.Z,{showText:function(a){return a.toRgbString()},allowClear:!0,presets:[{label:"\u9884\u8BBE\u989C\u8272",colors:["#1677ff","#722ed1","#13c2c2","#52c41a","#eb2f96","#f5222d","#fa8c16","#fadb14","#fa541c","#2f54eb","#faad14","#a0d911","#000000","#5cdbd3","#b37feb","#b7eb8f","#61affe","#9254de","#36cfc9","#ff9c6e","#ff6f00","#ffc069","#28a745","#6610f2","#6f42c1","#007bff","#17a2b8","#20c997","#00cccc","#ff6666"]}]})})},X={colorPrimary:"",colorTextBase:"",colorLink:"",colorBgContainer:"",colorBorder:"",colorBgElevated:"",colorBorderSecondary:"colorBorder"},Be=["borderRadius","wireframe"],Pe=(0,T.forwardRef)(function(C,p){(0,T.useImperativeHandle)(p,function(){return{show:function(){G(!0)},reset:function(){var l;(l=v.current)===null||l===void 0||l.resetFields(["siteLogo","siteTitle","siteCopyright","siteLink","bgImage","bgSize"])}}});var F=(0,T.useState)(!1),a=b()(F,2),q=a[0],G=a[1],v=(0,T.useRef)(),A=(0,T.useContext)(Z.Z),E=A.message,U=A.lang,w=je.Z.useToken(),D=w.token;return(0,e.jsx)(xe.ZP,{children:(0,e.jsxs)(ve.a,{drawerProps:{forceRender:!0},submitter:{render:function(l,r){return(0,e.jsx)(ie.Z,{children:r[1]})}},title:"\u81EA\u5B9A\u4E49\u4E3B\u9898",formRef:v,open:q,onOpenChange:function(l){var r;(r=v.current)===null||r===void 0||r.resetFields(["bgImageUpload","siteLogoUpload"]),l&&((0,ae.Py)().then(function(m){var f=m.data.config;if(f){var t;if((t=v.current)===null||t===void 0||t.setFieldsValue({siteLogo:f.siteLogo,siteTitle:f.siteTitle,siteCopyright:f.siteCopyright,siteLink:f.siteLink,bgImage:f.bgImage,loginLogo:f.loginLogo}),!f.bgImage||!f.bgImage.width||f.bgImage.width=="100%"){var c;(c=v.current)===null||c===void 0||c.setFieldValue("bgSize","full")}else{var i;(i=v.current)===null||i===void 0||i.setFieldValue("bgSize","default")}}}),Object.keys(X).map(function(m){var f=m;X[m]!=""&&(f=X[m]),v!=null&&v.current&&(v==null||v.current.setFieldValue(m,D[f]))})),G(l)},name:"theme-user",onFinish:function(){var V=y()(d()().mark(function l(r){var m,f,t;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t={token:{},bgImage:r.bgImage,siteLink:r.siteLink,siteTitle:(m=r.siteTitle)!==null&&m!==void 0?m:"",siteCopyright:r.siteCopyright,siteLogo:(f=r.siteLogo)!==null&&f!==void 0?f:"",loginLogo:r.loginLogo},r.siteLogoUpload&&r.siteLogoUpload.length>0&&(t.siteLogo=r.siteLogoUpload[0].response.data.path),t.bgImage||(t.bgImage={}),r.bgImageUpload&&r.bgImageUpload.length>0&&(t.bgImage.src=r.bgImageUpload[0].response.data.path),t.bgImage.width=r.bgSize=="full"?"100%":"",r.loginLogoUpload&&r.loginLogoUpload.length>0&&(t.loginLogo=r.loginLogoUpload[0].response.data.path),Object.keys(X).map(function(g){t.token||(t.token={});var B=g;X[g]!=""&&(B=X[g]);var J=v.current&&v.current.getFieldValue(B);J&&J.toRgbString?J.cleared||(t.token[g]=J.toRgbString()):t.token[g]=J}),Be.map(function(g){t.token||(t.token={});var B=v.current&&v.current.getFieldValue(g);t.token[g]=B}),i.next=10,(0,ae.Z8)(t);case 10:return C.onFinish&&C.onFinish(),E.success(U("notification.finishTheme")),i.abrupt("return",!0);case 13:case"end":return i.stop()}},l)}));return function(l){return V.apply(this,arguments)}}(),children:[(0,e.jsx)(H.UW,{title:"\u76AE\u80A4\u8272\u7CFB",children:Q({name:"colorPrimary",label:"\u54C1\u724C\u8272",tooltip:"\u54C1\u724C\u8272\u662F\u4F53\u73B0\u4EA7\u54C1\u7279\u6027\u548C\u4F20\u64AD\u7406\u5FF5\u6700\u76F4\u89C2\u7684\u89C6\u89C9\u5143\u7D20\u4E4B\u4E00\u3002\u5728\u4F60\u5B8C\u6210\u54C1\u724C\u4E3B\u8272\u7684\u9009\u53D6\u4E4B\u540E\uFF0C\u4F1A\u81EA\u52A8\u5E2E\u4F60\u751F\u6210\u4E00\u5957\u5B8C\u6574\u7684\u8272\u677F\uFF0C\u5E76\u8D4B\u4E88\u5B83\u4EEC\u6709\u6548\u7684\u8BBE\u8BA1\u8BED\u4E49"})}),(0,e.jsxs)(H.UW,{children:[Q({name:"colorBgContainer",label:"\u4E3B\u7A97\u53E3\u80CC\u666F\u8272\u53CA\u900F\u660E\u5EA6"}),Q({name:"colorBgElevated",label:"\u5F39\u51FA\u7A97\u80CC\u666F\u8272\u53CA\u900F\u660E\u5EA6"})]}),(0,e.jsxs)(H.UW,{children:[Q({name:"colorTextBase",label:"\u57FA\u7840\u6587\u672C"}),Q({name:"colorLink",label:"\u94FE\u63A5\u6587\u672C"}),Q({name:"colorBorder",label:"\u8FB9\u6846\u8272"})]}),(0,e.jsx)(H.UW,{title:"\u98CE\u683C",children:(0,e.jsxs)(Ce.Z,{gap:40,children:[(0,e.jsx)(N.Z,{label:"\u7EBF\u6846\u5316",name:"wireframe",initialValue:!1}),(0,e.jsx)(pe.Z,{min:1,max:16,label:"\u5706\u89D2",initialValue:6,name:"borderRadius"})]})}),(0,e.jsx)(H.UW,{title:"\u9762\u677F"}),(0,e.jsx)(L.Z,{label:"\u6807\u9898",name:"siteTitle",placeholder:"\u5C55\u793A\u5728\u9762\u677F\u5DE6\u4E0A\u89D2\u53CA\u9875\u9762\u6807\u7B7E\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u663E\u793A"}),(0,e.jsxs)(H.UW,{children:[(0,e.jsx)(ue.Z,{label:"Logo",title:"\u4E0A\u4F20 Logo",name:"siteLogoUpload",accept:".jpg,.png,.webp,.svg"}),(0,e.jsx)(L.Z,{width:"md",placeholder:"\u4EE5 https \u6216\u662F http \u5F00\u5934\uFF0C\u4F18\u5148\u4F7F\u7528\u4E0A\u4F20\u56FE\u7247",label:"\u8FDC\u7A0BUrl",name:"siteLogo"})]}),(0,e.jsxs)(H.UW,{children:[(0,e.jsx)(ue.Z,{label:"\u80CC\u666F\u56FE",title:"\u4E0A\u4F20\u80CC\u666F\u56FE",name:"bgImageUpload",accept:".jpg,.png,.webp,.svg"}),(0,e.jsx)(L.Z,{width:"md",placeholder:"\u4EE5 https \u6216\u662F http \u5F00\u5934\uFF0C\u4F18\u5148\u4F7F\u7528\u4E0A\u4F20\u56FE\u7247",label:"\u8FDC\u7A0BUrl",name:["bgImage","src"]}),(0,e.jsx)(ne.Z.Group,{name:"bgSize",label:"\u5C3A\u5BF8",initialValue:"full",valueEnum:{full:"\u5168\u5C4F",default:"\u9ED8\u8BA4"}})]}),(0,e.jsx)(H.UW,{children:(0,e.jsx)(h.Z,{name:["bgSize"],children:function(l){var r=l.bgSize;if(r=="default")return(0,e.jsxs)(H.UW,{children:[(0,e.jsx)(te.Z,{width:"xs",name:["bgImage","top"],label:"\u8DDD\u9876\u90E8\u504F\u79FB\u91CF"}),(0,e.jsx)(te.Z,{width:"xs",name:["bgImage","bottom"],label:"\u8DDD\u5E95\u90E8\u504F\u79FB\u91CF"}),(0,e.jsx)(te.Z,{width:"xs",name:["bgImage","left"],label:"\u8DDD\u5DE6\u4FA7\u504F\u79FB\u91CF"}),(0,e.jsx)(te.Z,{width:"xs",name:["bgImage","right"],label:"\u8DDD\u53F3\u4FA7\u504F\u79FB\u91CF"})]})}})}),(0,e.jsx)(Fe.Z,{name:"siteLink",label:"\u5E95\u90E8\u94FE\u63A5",showAddButton:!0,hideCopyButton:!0,gap:10,items:[{name:"title",label:"\u6587\u672C"},{name:"href",label:"\u94FE\u63A5"}]}),(0,e.jsx)(be.Z,{label:"\u7248\u6743\u4FE1\u606F",name:"siteCopyright"}),(0,e.jsxs)(H.UW,{title:"\u767B\u5F55\u9875",children:[(0,e.jsx)(ue.Z,{label:"Logo",title:"Logo",name:"loginLogoUpload",accept:".jpg,.png,.webp,.svg"}),(0,e.jsx)(L.Z,{width:"md",placeholder:"\u4EE5 https \u6216\u662F http \u5F00\u5934\uFF0C\u4F18\u5148\u4F7F\u7528\u4E0A\u4F20\u56FE\u7247",label:"\u8FDC\u7A0BUrl",name:"loginLogo"})]})]})})}),Se=Pe,ye=n(68602),Te=n(80821);function Ae(){var C=(0,T.useRef)(),p=(0,T.useRef)(),F=(0,o.useModel)("@@initialState"),a=F.initialState,q=F.loading,G=F.error,v=F.refresh,A=F.setInitialState,E=(0,o.useAccess)(),U=(0,T.useContext)(Z.Z),w=U.message,D=U.lang,V=(0,o.useAntdConfigSetter)();return(0,T.useEffect)(function(){var l,r,m,f,t,c,i,g;(l=C.current)===null||l===void 0||l.setFieldsValue({algorithm:(r=a==null?void 0:a.theme.algorithm)!==null&&r!==void 0?r:"default",mainMenu:(m=a==null?void 0:a.theme.mainMenu)!==null&&m!==void 0?m:"top",compact:(f=a==null?void 0:a.theme.compact)!==null&&f!==void 0?f:"default",fontSize:(t=a==null?void 0:a.theme.fontSize)!==null&&t!==void 0?t:14,fontSizeConsole:(c=a==null?void 0:a.theme.fontSizeConsole)!==null&&c!==void 0?c:12,sideMenu:(i=a==null?void 0:a.theme.sideMenu)!==null&&i!==void 0?i:"default",tablePageSize:(g=a==null?void 0:a.theme.tablePageSize)!==null&&g!==void 0?g:"20"})},[a]),(0,e.jsx)(x.Z,{direction:"column",gutter:[0,10],ghost:!0,children:(0,e.jsxs)(x.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u57FA\u672C\u914D\u7F6E",children:[E.canSeeThemeUser&&(0,e.jsx)(Se,{ref:p}),(0,e.jsxs)(P.A,{layout:"horizontal",labelAlign:"right",labelCol:fe,formRef:C,submitter:{render:function(r,m){return[m[1]]}},onFinish:function(){var l=y()(d()().mark(function r(m){var f;return d()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(f={algorithm:m.algorithm,mainMenu:m.mainMenu,sideMenu:m.sideMenu,compact:m.compact,fontSizeConsole:m.fontSizeConsole,fontSize:m.fontSize,tablePageSize:m.tablePageSize},m.algorithm==(a==null?void 0:a.theme.algorithm)){c.next=4;break}return c.next=4,(0,ae.H)({clearColor:!0});case 4:return localStorage.setItem("dpanel-theme",m.algorithm),localStorage.setItem("dpanel-compact",m.compact),c.next=8,(0,ye.Gk)(f);case 8:w.success(D("notification.finishTheme"));case 9:case"end":return c.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),children:[(0,e.jsx)(ne.Z.Group,{name:"algorithm",label:"\u4E3B\u9898\u76AE\u80A4",initialValue:"default",radioType:"button",valueEnum:function(){var r={default:"\u4EAE\u8272",dark:"\u6697\u8272",system:"\u8DDF\u968F\u7CFB\u7EDF"};return r}}),E.canSeeThemeUser&&(0,e.jsx)(h.Z,{name:["algorithm"],children:function(r){var m=r.algorithm;if(m!="system")return(0,e.jsx)(Y.Z,{label:"\u81EA\u5B9A\u4E49\u76AE\u80A4\u914D\u7F6E",children:(0,e.jsxs)(ie.Z.Compact,{children:[(0,e.jsx)(re.ZP,{onClick:function(){var t;(t=p.current)===null||t===void 0||t.show()},icon:(0,e.jsx)(le.Z,{}),children:"\u914D\u7F6E"}),(0,e.jsx)(Te.Z,{action:y()(d()().mark(function f(){var t;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,ae.H)({clearColor:!0,clearSite:!0});case 2:V(function(g){return g.theme={token:{}},g}),(t=p.current)===null||t===void 0||t.reset(),window.location.reload();case 5:case"end":return i.stop()}},f)})),messageSuccess:"finish",children:"\u6062\u590D\u9ED8\u8BA4"})]})})}}),(0,e.jsx)(ne.Z.Group,{name:"mainMenu",label:"\u4E3B\u83DC\u5355\u4F4D\u7F6E",initialValue:"top",radioType:"button",valueEnum:{top:"\u9876\u90E8",side:"\u4FA7\u9762"}}),(0,e.jsx)(ne.Z.Group,{name:"sideMenu",label:"\u5DE6\u4FA7\u83DC\u5355",initialValue:"default",radioType:"button",valueEnum:{default:"\u9ED8\u8BA4\u5C55\u5F00",collapse:"\u9ED8\u8BA4\u6536\u7F29"}}),(0,e.jsx)(ne.Z.Group,{name:"compact",label:"\u6587\u672C\u5E03\u5C40",initialValue:"default",radioType:"button",valueEnum:{default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1"}}),(0,e.jsx)(Y.Z,{name:"fontSize",label:"\u4E3B\u9898\u5B57\u53F7",initialValue:14,children:(0,e.jsx)(se.Z,{step:2,max:30,min:8,marks:{8:"8",10:"10",12:"12",14:"14",16:"16",20:"20",26:"26",30:"20"}})}),(0,e.jsx)(Y.Z,{name:"fontSizeConsole",label:"\u63A7\u5236\u53F0\u5B57\u53F7",initialValue:12,children:(0,e.jsx)(se.Z,{step:2,max:30,min:8,marks:{8:"8",10:"10",12:"12",14:"14",16:"16",20:"20",26:"26",30:"20"}})}),(0,e.jsx)(ge.Z,{initialValue:"20",label:"\u8868\u683C\u5206\u9875\u6570",name:"tablePageSize",valueEnum:{10:"\u6BCF\u987510\u6761",20:"\u6BCF\u987520\u6761",50:"\u6BCF\u987550\u6761",100:"\u6BCF\u9875100\u6761",all:"\u663E\u793A\u5168\u90E8"}})]})]})})}var Ze=n(90078),_e=n(92398);function Ie(){var C=(0,o.useSearchParams)(),p=b()(C,2),F=p[0],a=p[1],q=(0,T.useState)("user"),G=b()(q,2),v=G[0],A=G[1];return(0,T.useEffect)(function(){var E;A((E=F.get("tab"))!==null&&E!==void 0?E:"user")},[]),(0,e.jsx)(Ze._z,{children:(0,e.jsx)(x.Z,{children:(0,e.jsx)(_e.Z,{activeKey:v,onChange:function(U){A(U),a("tab="+U)},items:[{key:"user",label:"\u767B\u5F55\u914D\u7F6E",children:(0,e.jsx)(ce,{})},{key:"theme",label:"\u754C\u9762\u914D\u7F6E",children:(0,e.jsx)(Ae,{})},{key:"other",label:"\u5176\u5B83",children:(0,e.jsx)(he,{})}]})})})}},97961:function(ee,M,n){n.d(M,{GH:function(){return O},MF:function(){return W},_2:function(){return k},fN:function(){return Z},ii:function(){return y},vC:function(){return o}});var z=n(15009),b=n.n(z),K=n(99289),d=n.n(K),S=n(63713),y=[{name:"linux/amd64",arch:"amd64",search:["amd64","x86_64","86_64"]},{name:"linux/arm64",arch:"arm64",search:["arm64","arrch64"]},{name:"linux/i386",arch:"386",search:[]},{name:"linux/arm/v6",arch:"arm",search:[]},{name:"linux/arm/v7",arch:"arm",search:[]},{name:"linux/arm/v8",arch:"arm64",search:[]},{name:"linux/ppc64le",arch:"ppc64le",search:[]},{name:"linux/riscv64",arch:"riscv64",search:[]}];function Z(u){return _.apply(this,arguments)}function _(){return _=d()(b()().mark(function u(x){return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,S.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:x}));case 1:case"end":return h.stop()}},u)})),_.apply(this,arguments)}function o(u){return s.apply(this,arguments)}function s(){return s=d()(b()().mark(function u(x){return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,S.request)("/api/app/image/import-by-container-tar",{method:"POST",data:x}));case 1:case"end":return h.stop()}},u)})),s.apply(this,arguments)}function O(u){return $.apply(this,arguments)}function $(){return $=d()(b()().mark(function u(x){return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,S.request)("/api/app/image/import-by-image-tar",{method:"POST",data:x}));case 1:case"end":return h.stop()}},u)})),$.apply(this,arguments)}function k(u){return j.apply(this,arguments)}function j(){return j=d()(b()().mark(function u(x){return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,S.request)("/api/common/attach/delete",{method:"POST",data:x});case 2:return h.abrupt("return",h.sent);case 3:case"end":return h.stop()}},u)})),j.apply(this,arguments)}function W(){return I.apply(this,arguments)}function I(){return I=d()(b()().mark(function u(){return b()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",(0,S.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return P.stop()}},u)})),I.apply(this,arguments)}}}]);
