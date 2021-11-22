"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8169],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),c="tabItem_vU9c",p="tabItemActive_cw6a";var l=function(e){var t,n=e.lazy,a=e.block,l=e.defaultValue,s=e.values,u=e.groupId,m=e.className,h=r.Children.toArray(e.children),d=null!=s?s:h.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=l?l:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),v=f.tabGroupChoices,y=f.setTabGroupChoices,g=(0,r.useState)(k),b=g[0],w=g[1],N=[];if(null!=u){var M=v[u];null!=M&&M!==b&&d.some((function(e){return e.value===M}))&&w(M)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=d[n].value;w(r),null!=u&&(y(u,r),setTimeout((function(){var e,n,r,a,o,i,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:P,onClick:P},null!=n?n:t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},71393:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),c=n(58215),p=["components"],l={title:"Puppet Provider: Mock",sidebar_label:"Mock"},s=void 0,u={unversionedId:"puppet-providers/mock",id:"puppet-providers/mock",isDocsHomePage:!1,title:"Puppet Provider: Mock",description:"Wechaty Puppet Mock",source:"@site/docs/puppet-providers/mock.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/mock",permalink:"/docs/puppet-providers/mock",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-providers/mock.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1637556557,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Puppet Provider: Mock",sidebar_label:"Mock"},sidebar:"docs",previous:{title:"Service",permalink:"/docs/puppet-providers/service"},next:{title:"Puppet Provider: DIY",permalink:"/docs/puppet-providers/diy"}},m=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Mocker and Environment",id:"mocker-and-environment",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"Mocker",id:"mocker",children:[]}]},{value:"Helper Utilities",id:"helper-utilities",children:[{value:"StateSwitch",id:"stateswitch",children:[]},{value:"MemoryCard",id:"memorycard",children:[]}]},{value:"Example: unit testing for <code>math_master</code> game",id:"example-unit-testing-for-math_master-game",children:[]},{value:"History",id:"history",children:[{value:"v0.25 (July 13, 2020)",id:"v025-july-13-2020",children:[]},{value:"v0.22 (June 4, 2020)",id:"v022-june-4-2020",children:[]},{value:"v0.0.1 (Jun 27, 2018)",id:"v001-jun-27-2018",children:[]}]},{value:"Maintainers",id:"maintainers",children:[]}],h={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"mock"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Mock-blueviolet",alt:"Wechaty Puppet Mock"}))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-mock/HEAD/docs/images/mock.png",alt:"Wechaty Puppet Mock"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-mock"},(0,o.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"NPM Version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-mock"},"https://github.com/wechaty/wechaty-puppet-mock")),(0,o.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-mock/issues"},"https://github.com/wechaty/wechaty-puppet-mock/issues"))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Helps to test Wechaty framework with a mock puppet."),(0,o.kt)("li",{parentName:"ol"},"Can be used as a starter template for writing your own puppet provider.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-mock"),"."),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nexport WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n"))),(0,o.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nexport WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n"))),(0,o.kt)(c.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nset WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n")))),(0,o.kt)("h2",{id:"mocker-and-environment"},"Mocker and Environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  PuppetMock,\n  Mocker,\n  SimpleEnvironment,\n}                     from 'wechaty-puppet-mock'\n\nconst mocker = new Mocker()\nmocker.use(SimpleEnvironment())\n\nconst puppet = new PuppetMock({ mocker })\nconst wechaty = WechatyBuilder.build({ puppet })\n\nwechaty.start()\n\n// The Mocker will start perform the SimpleEnvironment...\n")),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock/blob/master/src/mock/environment.ts"},"SimpleEnvironment"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"mocker"},"Mocker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { \n  PuppetMock,\n  mock,\n}                   from 'wechaty-puppet-mock'\n\nconst mocker = new mock.Mocker()\nconst puppet = new PuppetMock({ mocker })\nconst bot = WechatyBuilder.build({ puppet })\n\nawait bot.start()\n\nmocker.scan('https://github.com/wechaty', 1)\n\nconst user = mocker.createContact()\nmocker.login(user)\n\nconst contact = mocker.createContact()\nconst room = mocker.createRoom()\n\nuser.say('Hello').to(contact)\ncontact.say('World').to(user)\n")),(0,o.kt)("h2",{id:"helper-utilities"},"Helper Utilities"),(0,o.kt)("h3",{id:"stateswitch"},"StateSwitch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"this.state.on('pending')\nthis.state.on(true)\nthis.state.off('pending')\nthis.state.off(true)\n\nawait this.state.ready('on')\nawait this.state.ready('off')\n\n")),(0,o.kt)("h3",{id:"memorycard"},"MemoryCard"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await memory.set('config', { id: 1, key: 'xxx' })\nconst config = await memory.get('config')\nconsole.log(config)\n// Output: { id: 1, key: 'xxx' }\n")),(0,o.kt)("h2",{id:"example-unit-testing-for-math_master-game"},"Example: unit testing for ",(0,o.kt)("inlineCode",{parentName:"h2"},"math_master")," game"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"math_master")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib"},"Wechaty Vorpal Contrib")," command which is a simple game for answering math questions that asked by a Wechaty bot."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-vorpal-contrib/HEAD/docs/images/math-master.png",alt:"Math Master Wechaty Game"})),(0,o.kt)("p",null,"You can read the unit testing script at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts"},"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Milestones for master branch:")),(0,o.kt)("h3",{id:"v025-july-13-2020"},"v0.25 (July 13, 2020)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rename MockXXX to XXXMock for keep the consistent naming style with PuppetMock."),(0,o.kt)("li",{parentName:"ol"},"Export mock namespace and move all related modules under it.")),(0,o.kt)("h3",{id:"v022-june-4-2020"},"v0.22 (June 4, 2020)"),(0,o.kt)("p",null,"Mocker Released. Mocker is a manager for controlling the behavior of the Puppet activities."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add MockContact, MockRoom, and MockMessage for Mockers"),(0,o.kt)("li",{parentName:"ol"},"Add MockEnvironment for mocking the server behaviors."),(0,o.kt)("li",{parentName:"ol"},"Support Wechaty#Contact.find() from the mocker.createContacts()."),(0,o.kt)("li",{parentName:"ol"},"Support Wechaty#Room.find() from the mocker.createRooms()."),(0,o.kt)("li",{parentName:"ol"},"Support message event for talker, listener, and room of MockMessage.")),(0,o.kt)("h3",{id:"v001-jun-27-2018"},"v0.0.1 (Jun 27, 2018)"),(0,o.kt)("p",null,"Initial version."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PuppetMock")," is a skelton Puppet without do anything, it will make testing easy when developing Wechaty."),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);