(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{2188:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2189:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),v=r,m=u["".concat(o,".").concat(v)]||u[v]||p[v]||c;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2191:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},2192:function(e,t,n){"use strict";var r=n(0),a=n(2193);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2193:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},2194:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(2192),o=n(2191),i=n(51),l=n.n(i),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,u=e.defaultValue,p=e.values,v=e.groupId,m=e.className,d=Object(c.a)(),O=d.tabGroupChoices,f=d.setTabGroupChoices,j=Object(r.useState)(u),y=j[0],g=j[1];if(null!=v){var h=O[v];null!=h&&h!==y&&p.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=v&&f(v,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(i.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},2195:function(e,t,n){"use strict";var r=n(2188),a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},603:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2188),a=n(2189),c=(n(0),n(2190)),o=n(2194),i=n(2195),l={title:"CoverView",sidebar_label:"CoverView"},b={unversionedId:"components/viewContainer/cover-view",id:"version-3.2.0-canary.1/components/viewContainer/cover-view",isDocsHomePage:!1,title:"CoverView",description:"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u6587\u672c\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u5305\u62ec map\u3001video\u3001canvas\u3001camera\u3001live-player\u3001live-pusher \u53ea\u652f\u6301\u5d4c\u5957 cover-view\u3001cover-image\uff0c\u53ef\u5728 cover-view \u4e2d\u4f7f\u7528 button\u3002",source:"@site/versioned_docs/version-3.2.0-canary.1/components/viewContainer/cover-view.md",slug:"/components/viewContainer/cover-view",permalink:"/taro/docs/3.2.0-canary.1/components/viewContainer/cover-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.1/components/viewContainer/cover-view.md",version:"3.2.0-canary.1",sidebar_label:"CoverView",sidebar:"version-3.2.0-canary.1/components",previous:{title:"MovableView",permalink:"/taro/docs/3.2.0-canary.1/components/viewContainer/movable-view"},next:{title:"CoverImage",permalink:"/taro/docs/3.2.0-canary.1/components/viewContainer/cover-image"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"CoverViewProps",id:"coverviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u6587\u672c\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u5305\u62ec map\u3001video\u3001canvas\u3001camera\u3001live-player\u3001live-pusher \u53ea\u652f\u6301\u5d4c\u5957 cover-view\u3001cover-image\uff0c\u53ef\u5728 cover-view \u4e2d\u4f7f\u7528 button\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CoverViewProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(o.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// js\nclass App extends Components {\n  render () {\n    return (\n      <View className='container'>\n      <Video id='myVideo' src='src'>\n        <CoverView className='controls'>\n          <CoverView className='play' onClick='play'>\n            <CoverImage className='img' src='src' />\n          </CoverView>\n        </CoverView>\n      </Video>\n    )\n  }\n}\n// css\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n"))),Object(c.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>\n    </video>\n    <cover-view class='controls'>\n      <cover-view class='play' onClick='play'>\n        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />\n      </cover-view>\n    </cover-view>\n  </view>\n</template>\n\n<style>\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n</style>\n\n")))),Object(c.b)("h2",{id:"coverviewprops"},"CoverViewProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"scrollTop"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u9876\u90e8\u6eda\u52a8\u504f\u79fb\u91cf\uff0c\u4ec5\u5728\u8bbe\u7f6e\u4e86 overflow-y: scroll \u6210\u4e3a\u6eda\u52a8\u5143\u7d20\u540e\u751f\u6548")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverViewProps.scrollTop"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverView"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);