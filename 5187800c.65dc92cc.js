(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1798:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),d=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=d(r),p=n,O=s["".concat(l,".").concat(p)]||s[p]||u[p]||a;return r?c.a.createElement(O,o(o({ref:t},i),{},{components:r})):c.a.createElement(O,o({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<a;i++)l[i]=r[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},616:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),a=(r(0),r(1798)),l=["components"],o={title:"Taro.startRecord(option)",sidebar_label:"startRecord"},b={unversionedId:"apis/media/recorder/startRecord",id:"version-2.x/apis/media/recorder/startRecord",isDocsHomePage:!1,title:"Taro.startRecord(option)",description:"\u5f00\u59cb\u5f55\u97f3\u3002\u5f53\u4e3b\u52a8\u8c03\u7528Taro.stopRecord\uff0c\u6216\u8005\u5f55\u97f3\u8d85\u8fc71\u5206\u949f\u65f6\u81ea\u52a8\u7ed3\u675f\u5f55\u97f3\uff0c\u8fd4\u56de\u5f55\u97f3\u6587\u4ef6\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u6b64\u63a5\u53e3\u65e0\u6cd5\u8c03\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/media/recorder/startRecord.md",slug:"/apis/media/recorder/startRecord",permalink:"/taro/docs/2.x/apis/media/recorder/startRecord",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/recorder/startRecord.md",version:"2.x",sidebar_label:"startRecord",sidebar:"version-2.x/API",previous:{title:"Taro.stopRecord(option)",permalink:"/taro/docs/2.x/apis/media/recorder/stopRecord"},next:{title:"Taro.getRecorderManager()",permalink:"/taro/docs/2.x/apis/media/recorder/getRecorderManager"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={rightToc:i};function s(e){var t=e.components,r=Object(c.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5f00\u59cb\u5f55\u97f3\u3002\u5f53\u4e3b\u52a8\u8c03\u7528",Object(a.b)("inlineCode",{parentName:"p"},"Taro.stopRecord"),"\uff0c\u6216\u8005\u5f55\u97f3\u8d85\u8fc71\u5206\u949f\u65f6\u81ea\u52a8\u7ed3\u675f\u5f55\u97f3\uff0c\u8fd4\u56de\u5f55\u97f3\u6587\u4ef6\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u6b64\u63a5\u53e3\u65e0\u6cd5\u8c03\u7528\u3002\n",Object(a.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a1.6.0 \u7248\u672c\u5f00\u59cb\uff0c\u672c\u63a5\u53e3\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 ",Object(a.b)("a",{parentName:"strong",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html"},"Taro.getRecorderManager")," \u63a5\u53e3"),"\n\u9700\u8981",Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u7528\u6237\u6388\u6743")," scope.record"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html"},"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"tempFilePath"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u5f55\u97f3\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),Object(a.b)("tr",null,Object(a.b)("td",null,"errMsg"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.startRecord({\n  success: function (res) {\n    const tempFilePath = res.tempFilePath\n  }\n})\nsetTimeout(function () {\n  Taro.stopRecord() // \u7ed3\u675f\u5f55\u97f3\n}, 10000)\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"Taro.startRecord"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);