(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{50291:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-federation",function(){return t(6898)}])},10063:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Z:function(){return d}});var a=t(85893),s=t(67294),i=t(84485),r=t(20550),o=t(48419),l=t(78464),c=i.Z.Title,u="#5a67d8";function d(e){var n=(0,s.useState)(""),t=n[0],i=n[1],d=e.title,h=e.description,f=e.placeholder,p=e.maxLength,m=e.values,v=e.handleDeleteIndex,g=e.handleCreateString,b=e.submitStatus,x=e.continuousStatusMessage;return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(c,{level:3,className:"section-title",children:d}),(0,a.jsx)("p",{className:"description",children:h}),(0,a.jsx)("div",{className:"edit-current-strings",children:null===m||void 0===m?void 0:m.map((function(e,n){return(0,a.jsx)(r.Z,{closable:!0,onClose:function(){v(n)},color:u,children:e},"tag-".concat(e,"-").concat(n))}))}),x&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(l.Z,{status:x})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(o.ZP,{fieldName:"string-input",value:t,onChange:function(e){var n=e.value;i(n)},onPressEnter:function(){var e=t.trim();g(e),i("")},maxLength:p,placeholder:f,status:b})})]})}d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var a=t(34051),s=t.n(a),i=t(85893),r=t(67294),o=t(94594),l=t(83192),c=t(78464),u=t(25964),d=t(35159);function h(e,n,t,a,s,i,r){try{var o=e[i](r),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(a,s)}function f(e){var n=(0,r.useState)(null),t=n[0],a=n[1],f=null,p=((0,r.useContext)(d.aC)||{}).setFieldInConfigState,m=e.apiPath,v=e.checked,g=e.reversed,b=void 0!==g&&g,x=e.configPath,w=void 0===x?"":x,j=e.disabled,y=void 0!==j&&j,k=e.fieldName,P=e.label,N=e.tip,S=e.useSubmit,Z=e.onChange,C=function(){a(null),clearTimeout(f),f=null},E=function(){var e,n=(e=s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=6;break}return a((0,l.kg)(l.Jk)),t=b?!n:n,e.next=5,(0,u.Si)({apiPath:m,data:{value:t},onSuccess:function(){p({fieldName:k,value:t,path:w}),a((0,l.kg)(l.zv))},onError:function(e){a((0,l.kg)(l.Un,"There was an error: ".concat(e)))}});case 5:f=setTimeout(C,u.sI);case 6:Z&&Z(n);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function r(e){h(i,a,s,r,o,"next",e)}function o(e){h(i,a,s,r,o,"throw",e)}r(void 0)}))});return function(e){return n.apply(this,arguments)}}(),T=null!==t&&t.type===l.Jk;return(0,i.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[P&&(0,i.jsx)("div",{className:"label-side",children:(0,i.jsx)("span",{className:"formfield-label",children:P})}),(0,i.jsxs)("div",{className:"input-side",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)(o.Z,{className:"switch field-".concat(k),loading:T,onChange:E,defaultChecked:v,checked:v,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:y}),(0,i.jsx)(c.Z,{status:t})]}),(0,i.jsx)("p",{className:"field-tip",children:N})]})]})}f.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},6898:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(85893),s=t(52455),i=t(71577),r=t(84485),o=t(14670),l=t(25968),c=t(6226),u=t(67294),d=t(45697),h=t.n(d),f=t(48419),p=t(50197),m=t(15976),v=t(10063),g=t(25964),b=t(35159),x=t(83192);function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){w(e,n,t[n])}))}return e}function y(e){var n=e.cancelPressed,t=e.okPressed;return(0,a.jsxs)(s.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:n,footer:(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{onClick:n,children:"Do not enable"}),(0,a.jsx)(i.Z,{type:"primary",onClick:t,children:"Enable Social Features"})]}),children:[(0,a.jsx)(r.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,a.jsxs)(r.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,a.jsx)(r.Z.Paragraph,{}),(0,a.jsx)(r.Z.Title,{level:3,children:"What do you need to know?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,a.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,a.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,a.jsxs)("li",{children:["Turning on ",(0,a.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,a.jsx)(r.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,a.jsxs)(r.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})}function k(){var e=function(){T(null)},n=function(){try{(0,g.Si)({apiPath:g.pE,data:{value:i.blockedDomains},onSuccess:function(){Z({fieldName:"forbiddenUsernames",value:i.forbiddenUsernames}),T(x.zv),setTimeout(e,g.sI)},onError:function(n){T((0,x.kg)(x.Un,n)),setTimeout(e,g.sI)}})}catch(n){console.error(n),T(x.Un)}},t=r.Z.Title,s=(0,u.useState)(null),i=s[0],d=s[1],h=(0,u.useState)(!1),k=h[0],P=h[1],N=(0,u.useContext)(b.aC)||{},S=N.serverConfig,Z=N.setFieldInConfigState,C=(0,u.useState)(null),E=C[0],T=C[1],O=S.federation,_=S.yp,U=S.instanceDetails,F=O.enabled,D=O.isPrivate,L=O.username,I=O.goLiveMessage,R=O.showEngagement,M=O.blockedDomains,q=_.instanceUrl,V=U.nsfw,z=function(e){var n=e.fieldName,t=e.value;d(j({},i,w({},n,t)))};if((0,u.useEffect)((function(){d({enabled:F,isPrivate:D,username:L,goLiveMessage:I,showEngagement:R,blockedDomains:M,nsfw:V,instanceUrl:_.instanceUrl})}),[S,_]),!i)return null;var K=""!==q,W=q.startsWith("https://"),X=!W&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,a.jsx)("br",{}),(0,a.jsx)(p.ZP,j({fieldName:"instanceUrl"},g.yi,{value:i.instanceUrl,initialValue:_.instanceUrl,type:f.xA,onChange:z,onSubmit:function(){var e=""!==i.instanceUrl,n=i.instanceUrl.startsWith("https://");e&&n||((0,g.Si)({apiPath:g.Kl.apiPath,data:{value:!1}}),d(j({},i,{enabled:!1})))},required:!0}))]});return(0,a.jsxs)("div",{children:[(0,a.jsx)(t,{children:"Configure Social Features"}),(0,a.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,a.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(c.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[X,(0,a.jsx)(m.Z,j({fieldName:"enabled",onChange:function(e){e?P(!0):d(j({},i,{enabled:!1}))}},g.Kl,{checked:i.enabled,disabled:!K||!W})),(0,a.jsx)(m.Z,j({fieldName:"isPrivate"},g.LC,{checked:i.isPrivate,disabled:!F})),(0,a.jsx)(m.Z,j({fieldName:"nsfw",useSubmit:!0},g.B_,{checked:i.nsfw,disabled:!K})),(0,a.jsx)(p.ZP,j({required:!0,fieldName:"username",type:f.Kx},g.Xc,{value:i.username,initialValue:L,onChange:z,disabled:!F})),(0,a.jsx)(p.ZP,j({fieldName:"goLiveMessage"},g.BF,{type:f.Sk,value:i.goLiveMessage,initialValue:I,onChange:z,disabled:!F})),(0,a.jsx)(m.Z,j({fieldName:"showEngagement"},g.FE,{checked:i.showEngagement,disabled:!F}))]}),(0,a.jsx)(c.Z,{span:8,className:"form-module",children:(0,a.jsx)(v.Z,{title:g.dR.label,placeholder:g.dR.placeholder,description:g.dR.tip,values:i.blockedDomains,handleDeleteIndex:function(e){i.blockedDomains.splice(e,1),n()},handleCreateString:function(e){var t;try{t=new URL(e).host}catch(a){t=e}i.blockedDomains.push(t),z({fieldName:"blockedDomains",value:i.blockedDomains}),n()},submitStatus:(0,x.kg)(E)})})]}),k&&(0,a.jsx)(y,{cancelPressed:function(){P(!1),d(j({},i,{enabled:!1}))},okPressed:function(){P(!1),d(j({},i,{enabled:!0}))}})]})}y.propTypes={cancelPressed:h().func.isRequired,okPressed:h().func.isRequired}}},function(e){e.O(0,[829,774,888,179],(function(){return n=50291,e(e.s=n);var n}));var n=e.O();_N_E=n}]);