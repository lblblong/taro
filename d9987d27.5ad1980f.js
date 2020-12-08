(window.webpackJsonp=window.webpackJsonp||[]).push([[1840],{1903:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2188),a=r(2189),o=(r(0),r(2190)),c={title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro"},i={unversionedId:"taroize",id:"version-3.x/taroize",isDocsHomePage:!1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro",description:"Taro \u53ef\u4ee5\u628a\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u8f6c\u6362\u4e3a Taro \u9879\u76ee\uff0c\u4ece\u800c\u4f7f\u9879\u76ee\u6210\u4e3a\u591a\u7aef\u5e94\u7528\u3002",source:"@site/versioned_docs/version-3.x/taroize.md",slug:"/taroize",permalink:"/taro/docs/taroize",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/taroize.md",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199",permalink:"/taro/docs/hybrid"},next:{title:"\u8f6c\u6362\u6210 React",permalink:"/taro/docs/convert-to-react"}},l=[{value:"\u53cd\u5411\u8f6c\u6362\u6b65\u9aa4",id:"\u53cd\u5411\u8f6c\u6362\u6b65\u9aa4",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro \u53ef\u4ee5\u628a",Object(o.b)("strong",{parentName:"p"},"\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u8f6c\u6362\u4e3a Taro \u9879\u76ee"),"\uff0c\u4ece\u800c\u4f7f\u9879\u76ee\u6210\u4e3a\u591a\u7aef\u5e94\u7528\u3002"),Object(o.b)("p",null,"\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u53ef\u8bfb\u6027\u9ad8\uff0c\u80fd\u591f\u7ee7\u7eed\u4f7f\u7528 ",Object(o.b)("strong",{parentName:"p"},"React"),"\uff08\u5c06\u6765\u652f\u6301\u8f6c\u6362\u4e3a ",Object(o.b)("strong",{parentName:"p"},"Vue"),"\uff09\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\u3002"),Object(o.b)("h3",{id:"\u53cd\u5411\u8f6c\u6362\u6b65\u9aa4"},"\u53cd\u5411\u8f6c\u6362\u6b65\u9aa4"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5b89\u88c5 Taro \u547d\u4ee4\u884c\u5de5\u5177\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm i -g @tarojs/cli\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u8fd0\u884c ",Object(o.b)("inlineCode",{parentName:"li"},"convert")," \u547d\u4ee4\u8fdb\u884c\u8f6c\u6362\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u8f6c\u6362\u540e\u7684\u4ee3\u7801\u4fdd\u5b58\u5728\u6839\u76ee\u5f55\u4e0b\u7684 `taroConvert` \u6587\u4ef6\u5939\u4e0b\n$ taro convert\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"\u8fdb\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},"taroConvert")," \u76ee\u5f55\uff0c\u5b89\u88c5\u4f9d\u8d56\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cd taroConvert\n$ npm install\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"\u8fd0\u884c ",Object(o.b)("inlineCode",{parentName:"li"},"build")," \u547d\u4ee4\uff0c\u628a\u9879\u76ee\u7f16\u8bd1\u5230\u4efb\u610f\u5e73\u53f0\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ taro build --type [platform]\n")))}b.isMDXComponent=!0},2188:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2189:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},2190:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),f=n,O=u["".concat(c,".").concat(f)]||u[f]||s[f]||o;return r?a.a.createElement(O,i(i({ref:t},p),{},{components:r})):a.a.createElement(O,i({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);