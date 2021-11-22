"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6023],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(67294),a=n(79443);var r=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_vU9c",s="tabItemActive_cw6a";var p=function(e){var t,n=e.lazy,a=e.block,p=e.defaultValue,c=e.values,m=e.groupId,u=e.className,d=o.Children.toArray(e.children),g=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=p?p:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=r(),f=k.tabGroupChoices,w=k.setTabGroupChoices,b=(0,o.useState)(h),y=b[0],v=b[1],N=[];if(null!=m){var T=f[m];null!=T&&T!==y&&g.some((function(e){return e.value===T}))&&v(T)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),o=g[n].value;v(o),null!=m&&(w(m,o),setTimeout((function(){var e,n,o,a,r,i,l,p;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,r=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&r<=p&&a<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=N.indexOf(e.target)+1;n=N[o]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},u)},g.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,o.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var o=(0,n(67294).createContext)(void 0);t.Z=o},19524:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],p={title:"Room Bot"},c=void 0,m={unversionedId:"examples/advanced/room-bot",id:"examples/advanced/room-bot",isDocsHomePage:!1,title:"Room Bot",description:"Powered by Wechaty",source:"@site/docs/examples/advanced/room-bot.mdx",sourceDirName:"examples/advanced",slug:"/examples/advanced/room-bot",permalink:"/docs/examples/advanced/room-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/examples/advanced/room-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1637556557,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Room Bot"},sidebar:"docs",previous:{title:"Media File Bot",permalink:"/docs/examples/advanced/media-file-bot"},next:{title:"Friend Bot",permalink:"/docs/examples/advanced/friend-bot"}},u=[{value:"Try out the bot",id:"try-out-the-bot",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"1. Clone the repository",id:"1-clone-the-repository",children:[]},{value:"2. Install dependencies",id:"2-install-dependencies",children:[]},{value:"3. Run the bot",id:"3-run-the-bot",children:[]}]},{value:"Building the bot",id:"building-the-bot",children:[{value:"1. Initializse project",id:"1-initializse-project",children:[]},{value:"2. Install dependencies",id:"2-install-dependencies-1",children:[]},{value:"3. Writing code for the bot",id:"3-writing-code-for-the-bot",children:[]},{value:"4. Running the bot",id:"4-running-the-bot",children:[]}]},{value:"References",id:"references",children:[]}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-JavaScript-blue.svg",alt:"JavaScript"}))),(0,r.kt)("p",null,"Room bot is a practical example which illustrates how to do room handling. With room bot you can do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find a room"),(0,r.kt)("li",{parentName:"ul"},"Add people to the room"),(0,r.kt)("li",{parentName:"ul"},"Delete people from the room"),(0,r.kt)("li",{parentName:"ul"},"Change the room topic"),(0,r.kt)("li",{parentName:"ul"},"Monitor room events")),(0,r.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/sbis04/wechaty-room-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Froom-bot.js&theme=dark"},(0,r.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-room-bot"}))),(0,r.kt)("p",null,"You can try out the ",(0,r.kt)("strong",{parentName:"p"},"Wechaty Room bot")," using this interactive CodeSandbox."),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"TODO")," where you have to specify one of your friends' name (the CodeSandbox can be edited by using the above button). After that just scan the generated QR code with the ",(0,r.kt)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,r.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/sbis04/wechaty-room-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Froom-bot.js&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.dev/"},"Node.js")," v16+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-services/"},"Wechaty Puppet Service TOKEN")," (if you want to use RPA protocols other than Web)")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Before getting started make sure you have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12),\nthen you need to install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," in other platforms can be found ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,r.kt)("p",null,"You can head over to ",(0,r.kt)("a",{parentName:"p",href:"#building-the-bot"},"Building the bot")," section to learn how to build the bot on your own."),(0,r.kt)("p",null,"Otherwise if you want to try out the bot on your local system, follow the steps below:"),(0,r.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the repository"),(0,r.kt)("p",null,"Use the following command to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Github repository")," and navigate to the directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,r.kt)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," packages required for running the bot using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("h3",{id:"3-run-the-bot"},"3. Run the bot"),(0,r.kt)("p",null,"You have to export/set environment variables."),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There are various Wechaty puppets available, you can know more about them ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets"},"here"))),(0,r.kt)("p",null,"For running the bot, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node examples/advanced/room-bot.js\n")),(0,r.kt)("p",null,"This will generate a QR code. Scan it using ",(0,r.kt)("strong",{parentName:"p"},"Wechat/Whatsapp")," and you are ready to go."),(0,r.kt)("h2",{id:"building-the-bot"},"Building the bot"),(0,r.kt)("p",null,"Let's get started with building ",(0,r.kt)("strong",{parentName:"p"},"room-bot")," using Wechaty."),(0,r.kt)("h3",{id:"1-initializse-project"},"1. Initializse project"),(0,r.kt)("p",null,"Create a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"room-bot")," and move into that directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir room-bot\ncd room-bot\n")),(0,r.kt)("p",null,"Use the following command to initialize an npm project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.kt)("h3",{id:"2-install-dependencies-1"},"2. Install dependencies"),(0,r.kt)("p",null,"For building the room bot, you will require these dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"wechaty"),": Official Wechaty package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"qrcode-terminal"),": Displays the QR code")),(0,r.kt)("p",null,"For installing these dependencies run the following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For installing wechaty"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For installing qrcode-terminal"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install qrcode-terminal\n")),(0,r.kt)("p",null,"You will also need to add dependencies for using any ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"Wechaty Puppet")," which helps to integrate Wechaty with various ",(0,r.kt)("strong",{parentName:"p"},"instant messaging (IM) systems")," (such as WeChat, WhatsApp, and WeCom):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.whatsapp.com/"},"WhatsApp")),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.wechat.com/"},"WeChat")),", you can try the following puppets:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Web Protocol:")," Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-wechat"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-wechat\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iPad Protocol:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"padlocal: Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-padlocal"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-padlocal\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_padlocal_XXX"),", know more about puppet service padlocal ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/padlocal"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"paimon: Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_paimon_XXX"),", know more about puppet service paimon ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/paimon"},"here"),".")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://work.weixin.qq.com/"},"WeCom")),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_wxwork_XXXXX"),", more about puppet service wxwork ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/wxwork/"},"here"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can find more information about the puppets ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"here"),".")),(0,r.kt)("p",null,"Now, you are ready to write the main code for the bot."),(0,r.kt)("h3",{id:"3-writing-code-for-the-bot"},"3. Writing code for the bot"),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"room-bot.js"),". You will be writing code here."),(0,r.kt)("p",null,"Let's import required packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"room-bot.js")," file and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"HELPER_CONTACT_NAME")," variable which will be used to create a room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Put the name of one of your friend here,\n// or room create function will not work.\nconst HELPER_CONTACT_NAME = \"huan\";\n\nimport qrTerm  from 'qrcode-terminal';\n\nimport { Wechaty, log }  from 'wechaty';\n")),(0,r.kt)("p",null,"Now, we will write some functions which will be required for handling different events returned by bot."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manageDingRoom")),(0,r.kt)("p",null,"This function will help you find a room, join it, leave it, and change the topic of the room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function manageDingRoom() {\n  log.info("Bot", "manageDingRoom()");\n\n  /**\n   * Find Room\n   */\n  try {\n    const room = await bot.Room.find({ topic: /^ding/i });\n    if (!room) {\n      log.warn("Bot", "there is no room topic ding(yet)");\n      return;\n    }\n    log.info("Bot", \'start monitor "ding" room join/leave/topic event\');\n\n    /**\n     * Event: Join\n     */\n    room.on("join", function (inviteeList, inviter) {\n      log.verbose(\n        "Bot",\n        \'Room EVENT: join - "%s", "%s"\',\n        inviteeList.map((c) => c.name()).join(", "),\n        inviter.name()\n      );\n      console.log("room.on(join) id:", this.id);\n      checkRoomJoin.call(this, room, inviteeList, inviter);\n    });\n\n    /**\n     * Event: Leave\n     */\n    room.on("leave", (leaverList, remover) => {\n      log.info(\n        "Bot",\n        \'Room EVENT: leave - "%s" leave(remover "%s"), byebye\',\n        leaverList.join(","),\n        remover || "unknown"\n      );\n    });\n\n    /**\n     * Event: Topic Change\n     */\n    room.on("topic", (topic, oldTopic, changer) => {\n      log.info(\n        "Bot",\n        \'Room EVENT: topic - changed from "%s" to "%s" by member "%s"\',\n        oldTopic,\n        topic,\n        changer.name()\n      );\n    });\n  } catch (e) {\n    log.warn("Bot", \'Room.find rejected: "%s"\', e.stack);\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"checkRoomJoin")),(0,r.kt)("p",null,"This function checks who can send an invitation and who can't. If the invitation is sent by the owner, then the person could join the room. Otherwise, the invitation will be canceled and the person has to resend ding to the owner so that the owner can send him/her a new valid invitation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function checkRoomJoin(room, inviteeList, inviter) {\n  log.info(\n    "Bot",\n    \'checkRoomJoin("%s", "%s", "%s")\',\n    await room.topic(),\n    inviteeList.map((c) => c.name()).join(","),\n    inviter.name()\n  );\n\n  try {\n    // let to, content\n    const userSelf = bot.userSelf();\n\n    if (inviter.id !== userSelf.id) {\n      await room.say(\n        "RULE1: Invitation is limited to me, the owner only. Please do not invite people without notifying me.",\n        inviter\n      );\n      await room.say(\n        \'Please contact me: by send "ding" to me, I will re-send you an invitation. Now I will remove you out, sorry.\',\n        inviteeList\n      );\n\n      await room.topic("ding - warn " + inviter.name());\n      setTimeout((_) => inviteeList.forEach((c) => room.del(c)), 10 * 1000);\n    } else {\n      await room.say("Welcome to my room! :)");\n\n      let welcomeTopic;\n      welcomeTopic = inviteeList.map((c) => c.name()).join(", ");\n      await room.topic("ding - welcome " + welcomeTopic);\n    }\n  } catch (e) {\n    log.error("Bot", "checkRoomJoin() exception: %s", e.stack);\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"putInRoom")),(0,r.kt)("p",null,"This function adds people to the room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function putInRoom(contact, room) {\n  log.info("Bot", \'putInRoom("%s", "%s")\', contact.name(), await room.topic());\n\n  try {\n    await room.add(contact);\n    setTimeout((_) => room.say("Welcome ", contact), 10 * 1000);\n  } catch (e) {\n    log.error("Bot", "putInRoom() exception: " + e.stack);\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getOutRoom")),(0,r.kt)("p",null,"This function removes people from room, if they said ",(0,r.kt)("inlineCode",{parentName:"p"},"ding")," inside a room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function getOutRoom(contact, room) {\n  log.info("Bot", \'getOutRoom("%s", "%s")\', contact, room);\n\n  try {\n    await room.say(\'You said "ding" in my room, I will remove you out.\');\n    await room.del(contact);\n  } catch (e) {\n    log.error("Bot", "getOutRoom() exception: " + e.stack);\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getHelperContact")),(0,r.kt)("p",null,"This function returns a ",(0,r.kt)("em",{parentName:"p"},"Helper contact")," that you defined in the beginning."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function getHelperContact() {\n  log.info("Bot", "getHelperContact()");\n\n  // create a new room at least need 3 contacts\n  return bot.Contact.find({ name: HELPER_CONTACT_NAME });\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"createDingRoom")),(0,r.kt)("p",null,"This function is used to create a room but if ",(0,r.kt)("em",{parentName:"p"},"Helper contact")," is not found, then it asks you to set it first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function createDingRoom(contact) {\n  log.info("Bot", \'createDingRoom("%s")\', contact);\n\n  try {\n    const helperContact = await getHelperContact();\n\n    if (!helperContact) {\n      log.warn("Bot", "getHelperContact() found nobody");\n      await contact.say(`You don\'t have a friend called "${HELPER_CONTACT_NAME}",\n                         because create a new room at least need 3 contacts, please set [HELPER_CONTACT_NAME] in the code first!`);\n      return;\n    }\n\n    log.info("Bot", \'getHelperContact() ok. got: "%s"\', helperContact.name());\n\n    const contactList = [contact, helperContact];\n    log.verbose("Bot", \'contactList: "%s"\', contactList.join(","));\n\n    await contact.say(\n      `There isn\'t ding room. I\'m trying to create a room with "${helperContact.name()}" and you`\n    );\n    const room = await bot.Room.create(contactList, "ding");\n    log.info("Bot", \'createDingRoom() new ding room created: "%s"\', room);\n\n    await room.topic("ding - created");\n    await room.say("ding - created");\n\n    return room;\n  } catch (e) {\n    log.error("Bot", "getHelperContact() exception:", e.stack);\n    throw e;\n  }\n}\n')),(0,r.kt)("p",null,"Now initializing the bot by providing the name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const bot = WechatyBuilder.build({\n  name: "room-bot",\n})\n')),(0,r.kt)("p",null,"Assigning proper functions to call when an event is triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot\n  .on("scan", (qrcode, status) => {\n    qrTerm.generate(qrcode, { small: true });\n    console.log(`${qrcode}\\n[${status}] Scan QR Code in above url to login: `);\n  })\n  .on("logout", (user) => log.info("Bot", `"${user.name()}" logouted`))\n  .on("error", (e) => log.info("Bot", "error: %s", e))\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"scan")," is triggered, it generates QR code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logout")," will display the name of the user along with the status ",(0,r.kt)("inlineCode",{parentName:"li"},"logouted"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," is used to notify if the bot encounters an error.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Event: login")),(0,r.kt)("p",null,"This event gets the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and displays the login status of the user. After that, it displays the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," saying ",(0,r.kt)("inlineCode",{parentName:"p"},"setting to manageDingRoom() after 3 seconds ... ")," which means it will call ",(0,r.kt)("inlineCode",{parentName:"p"},"manageDingRoom")," function after 3 seconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'.on("login", async function (user) {\n    let msg = `${user.name()} logined`;\n\n    log.info("Bot", msg);\n    await this.say(msg);\n\n    msg = `setting to manageDingRoom() after 3 seconds ... `;\n    log.info("Bot", msg);\n    await this.say(msg);\n\n    setTimeout(manageDingRoom.bind(this), 3000);\n  })\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Event: room-join")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"room-join")," event lets people join a respective room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'.on("room-join", async function (room, inviteeList, inviter) {\n    log.info(\n      "Bot",\n      \'EVENT: room-join - Room "%s" got new member "%s", invited by "%s"\',\n      await room.topic(),\n      inviteeList.map((c) => c.name()).join(","),\n      inviter.name()\n    );\n    console.log("bot room-join room id:", room.id);\n    const topic = await room.topic();\n    await room.say(`welcome to "${topic}"!`, inviteeList[0]);\n  })\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Event: room-leave")),(0,r.kt)("p",null,"This event removes people from the room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'.on("room-leave", async function (room, leaverList) {\n    log.info(\n      "Bot",\n      \'EVENT: room-leave - Room "%s" lost member "%s"\',\n      await room.topic(),\n      leaverList.map((c) => c.name()).join(",")\n    );\n    const topic = await room.topic();\n    const name = leaverList[0] ? leaverList[0].name() : "no contact!";\n    await room.say(`kick off "${name}" from "${topic}"!`);\n  })\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Event: room-topic")),(0,r.kt)("p",null,"Using this event, you can change the topic of the room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'.on("room-topic", async function (room, topic, oldTopic, changer) {\n    try {\n      log.info(\n        "Bot",\n        \'EVENT: room-topic - Room "%s" change topic from "%s" to "%s" by member "%s"\',\n        room,\n        oldTopic,\n        topic,\n        changer\n      );\n      await room.say(\n        `room-topic - change topic from "${oldTopic}" to "${topic}" by member "${changer.name()}"`\n      );\n    } catch (e) {\n      log.error("Bot", "room-topic event exception: %s", e.stack);\n    }\n  })\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Event: message")),(0,r.kt)("p",null,"This event handles entry and exit in the room. If you send ",(0,r.kt)("inlineCode",{parentName:"p"},"ding")," the first time, then you will get an invitation but saying ",(0,r.kt)("inlineCode",{parentName:"p"},"ding")," in a room leads to exiting the room. Similarly, if you say ",(0,r.kt)("inlineCode",{parentName:"p"},"dong")," it will quit the room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'.on("message", async function (msg) {\n    if (msg.age() > 3 * 60) {\n      log.info(\n        "Bot",\n        \'on(message) skip age("%d") > 3 * 60 seconds: "%s"\',\n        msg.age(),\n        msg\n      );\n      return;\n    }\n\n    const room = msg.room();\n    const from = msg.from();\n    const text = msg.text();\n\n    if (!from) {\n      return;\n    }\n\n    console.log(\n      (room ? "[" + (await room.topic()) + "]" : "") +\n        "<" +\n        from.name() +\n        ">" +\n        ":" +\n        msg\n    );\n\n    if (msg.self()) {\n      return; // skip self\n    }\n\n    /**\n     * `dong` will be the magic(toggle) word:\n     *  bot will quit current room by herself.\n     */\n    if (/^dong$/i.test(text)) {\n      if (room) {\n        await room.say(\n          "You said dong in the room, I will quit by myself!",\n          from\n        );\n        await room.quit();\n      } else {\n        await from.say(\n          \'Nothing to do. If you say "dong" in a room, I will quit from the room.\'\n        );\n      }\n      return;\n    }\n\n    /**\n     * `ding` will be the magic(toggle) word:\n     *  1. say ding first time, will got a room invitation\n     *  2. say ding in room, will be removed out\n     */\n    if (/^ding$/i.test(text)) {\n      /**\n       *  in-room message\n       */\n      if (room) {\n        if (/^ding/i.test(await room.topic())) {\n          /**\n           * move contact out of room\n           */\n          await getOutRoom(from, room);\n        }\n\n        /**\n         * peer to peer message\n         */\n      } else {\n        /**\n         * find room name start with "ding"\n         */\n        try {\n          const dingRoom = await this.Room.find({ topic: /^ding/i });\n          if (dingRoom) {\n            /**\n             * room found\n             */\n            log.info(\n              "Bot",\n              \'onMessage: got dingRoom: "%s"\',\n              await dingRoom.topic()\n            );\n\n            if (await dingRoom.has(from)) {\n              /**\n               * speaker is already in room\n               */\n              const topic = await dingRoom.topic();\n              log.info("Bot", "onMessage: sender has already in dingRoom");\n              await dingRoom.say(\n                `I found you have joined in room "${topic}"!`,\n                from\n              );\n              await from.say(\n                `no need to ding again, because you are already in room: "${topic}"`\n              );\n              // sendMessage({\n              //   content: \'no need to ding again, because you are already in ding room\'\n              //   , to: sender\n              // })\n            } else {\n              /**\n               * put speaker into room\n               */\n              log.info(\n                "Bot",\n                \'onMessage: add sender("%s") to dingRoom("%s")\',\n                from.name(),\n                dingRoom.topic()\n              );\n              await from.say("ok, I will put you in ding room!");\n              await putInRoom(from, dingRoom);\n            }\n          } else {\n            /**\n             * room not found\n             */\n            log.info("Bot", "onMessage: dingRoom not found, try to create one");\n            /**\n             * create the ding room\n             */\n            const newRoom = await createDingRoom(from);\n            console.log("createDingRoom id:", newRoom.id);\n            /**\n             * listen events from ding room\n             */\n            await manageDingRoom();\n          }\n        } catch (e) {\n          log.error(e);\n        }\n      }\n    }\n  })\n')),(0,r.kt)("p",null,"Now, finally for starting the bot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.start()\n  .catch((e) => console.error(e));\n")),(0,r.kt)("h3",{id:"4-running-the-bot"},"4. Running the bot"),(0,r.kt)("p",null,"To run the bot, you have to export/set environment variables with the type of puppet you want to use."),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n")))),(0,r.kt)("p",null,"Run the bot using the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node room-bot.js\n")),(0,r.kt)("p",null,"Scan the generated QR code with ",(0,r.kt)("strong",{parentName:"p"},"Wechat")," app and you are ready to play with the bot."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting started Github repository"))))}g.isMDXComponent=!0},86010:function(e,t,n){function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);