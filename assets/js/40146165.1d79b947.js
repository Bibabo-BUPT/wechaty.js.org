"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6421],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_vU9c",c="tabItemActive_cw6a";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,s=e.values,u=e.groupId,m=e.className,h=a.Children.toArray(e.children),d=null!=s?s:h.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,y=o(),w=y.tabGroupChoices,g=y.setTabGroupChoices,k=(0,a.useState)(f),b=k[0],v=k[1],N=[];if(null!=u){var C=w[u];null!=C&&C!==b&&d.some((function(e){return e.value===C}))&&v(C)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;v(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,r,o,l,i,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,n>=0&&o<=p&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},86552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(55064),i=n(58215),c=["components"],p={title:"Deploy in WeChat"},s=void 0,u={unversionedId:"howto/deploy-wechat",id:"howto/deploy-wechat",isDocsHomePage:!1,title:"Deploy in WeChat",description:"With all-in-one system and massive audience base, deploying Wechaty in WeChat can prove to be a good choice.In this how to guide, you will learn how to deploy the bot in WeChat locally and integrate bot from the list of examples present in starter templete.",source:"@site/docs/howto/deploy-wechat.mdx",sourceDirName:"howto",slug:"/howto/deploy-wechat",permalink:"/docs/howto/deploy-wechat",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/deploy-wechat.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1637556557,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Deploy in WeChat"}},m=[{value:"Requirements",id:"requirements",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Integration",id:"integration",children:[{value:"Prerequisite",id:"prerequisite",children:[]}]},{value:"References",id:"references",children:[]},{value:"Blogs",id:"blogs",children:[]}],h={toc:m};function d(e){var t=e.components,p=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With all-in-one system and massive audience base, deploying Wechaty in WeChat can prove to be a good choice.In this how to guide, you will learn how to deploy the bot in WeChat locally and integrate bot from the list of examples present in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy in WeChat",src:n(12607).Z})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,o.kt)("li",{parentName:"ol"},"You must be familiar with ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-puppet-wechat"},"wechaty puppet wechat"),".")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n"))),(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n"))),(0,o.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nset WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n")))),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to WeChat. The step is similar for all other bots as well."),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Offical Wechaty package: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,o.kt)("li",{parentName:"ol"},"QRCode terminal edition: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"package/qrcode-terminal"),".")),(0,o.kt)("p",null,"You can follow up the steps mentioned below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize the project by creating a new folder ",(0,o.kt)("inlineCode",{parentName:"li"},"my-bot"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mkdir my-bot\ncd my-bot\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the dependencies using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty\nnpm install qrcode-terminal\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the dependencies for using the bot with WeChat:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty-puppet-wechat\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create a new folder ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," and add a file ",(0,o.kt)("inlineCode",{parentName:"li"},"my-bot.js"),". Add your functions to the snippet below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Message,\n  ScanStatus,\n  WechatyBuilder,\n  log,\n} from 'wechaty'\n\nimport { qrTerm } = from 'qrcode-terminal'\n\nconsole.log(welcome)\nconst bot = WechatyBuilder.build()\n\n/*\n *Your function goes here\n */\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"After you are done with the file, you can run the bot using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnode src/my-bot.js\n")),(0,o.kt)("p",null,"Scan it using your WeChat and you are ready to play with the bot!"),(0,o.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#a"},"Deploy with Heroku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#b"},"Deploy with Docker"))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out the more bot repository from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),".")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/17/python-wechaty-use-web/"},"Teach you to use python-wecahty and web protocol to develop robots"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"Teach you to use go-wecahty and web protocol to develop robots"),".")))}d.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},12607:function(e,t,n){t.Z=n.p+"assets/images/deploy-wechat-02a5347111d1c2a2959ec88d5ad32af9.webp"}}]);