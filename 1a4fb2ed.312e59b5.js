(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1798:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(r),u=n,m=l["".concat(c,".").concat(u)]||l[u]||b[u]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},264:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(1798)),c=["components"],s={title:"Taro.chooseAddress(OBJECT)",sidebar_label:"chooseAddress"},i={unversionedId:"apis/open-api/address/chooseAddress",id:"version-1.x/apis/open-api/address/chooseAddress",isDocsHomePage:!1,title:"Taro.chooseAddress(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.chooseAddress\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/open-api/address/chooseAddress.md",slug:"/apis/open-api/address/chooseAddress",permalink:"/taro/docs/1.x/apis/open-api/address/chooseAddress",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/open-api/address/chooseAddress.md",version:"1.x",sidebar_label:"chooseAddress",sidebar:"version-1.x/API",previous:{title:"SocketTask",permalink:"/taro/docs/1.x/apis/network/socket/SocketTask"},next:{title:"Taro.authorize(OBJECT)",permalink:"/taro/docs/1.x/apis/open-api/auth/authorize"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],d={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseAddress.html"},Object(o.b)("inlineCode",{parentName:"a"},"wx.chooseAddress")),"\uff0c\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.chooseAddress(params).then(...)\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.chooseAddress"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})))))}l.isMDXComponent=!0}}]);