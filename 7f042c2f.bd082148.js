(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1798:function(e,t,l){"use strict";l.d(t,"a",(function(){return s})),l.d(t,"b",(function(){return j}));var n=l(0),r=l.n(n);function b(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(l),d=n,j=s["".concat(c,".").concat(d)]||s[d]||O[d]||b;return l?r.a.createElement(j,a(a({ref:t},o),{},{components:l})):r.a.createElement(j,a({ref:t},o))}));function j(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=l.length,c=new Array(b);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var o=2;o<b;o++)c[o]=l[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},929:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return s}));var n=l(3),r=l(7),b=(l(0),l(1798)),c=["components"],a={title:"Taro.getFileInfo(option)",sidebar_label:"getFileInfo"},i={unversionedId:"apis/files/getFileInfo",id:"version-2.x/apis/files/getFileInfo",isDocsHomePage:!1,title:"Taro.getFileInfo(option)",description:"\u83b7\u53d6\u8be5\u5c0f\u7a0b\u5e8f\u4e0b\u7684 \u672c\u5730\u4e34\u65f6\u6587\u4ef6 \u6216 \u672c\u5730\u7f13\u5b58\u6587\u4ef6 \u4fe1\u606f",source:"@site/versioned_docs/version-2.x/apis/files/getFileInfo.md",slug:"/apis/files/getFileInfo",permalink:"/taro/docs/2.x/apis/files/getFileInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/files/getFileInfo.md",version:"2.x",sidebar_label:"getFileInfo",sidebar:"version-2.x/API",previous:{title:"Taro.getFileSystemManager()",permalink:"/taro/docs/2.x/apis/files/getFileSystemManager"},next:{title:"FileSystemManager",permalink:"/taro/docs/2.x/apis/files/FileSystemManager"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function s(e){var t=e.components,l=Object(r.a)(e,c);return Object(b.b)("wrapper",Object(n.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u83b7\u53d6\u8be5\u5c0f\u7a0b\u5e8f\u4e0b\u7684 \u672c\u5730\u4e34\u65f6\u6587\u4ef6 \u6216 \u672c\u5730\u7f13\u5b58\u6587\u4ef6 \u4fe1\u606f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"filePath"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u8981\u8bfb\u53d6\u7684\u6587\u4ef6\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: FailCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u9519\u8bef\u4fe1\u606f",Object(b.b)("br",null),Object(b.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(b.b)("br",null),"- 'fail file not exist': \u6307\u5b9a\u7684 filePath \u627e\u4e0d\u5230\u6587\u4ef6;")))),Object(b.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"size"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u6587\u4ef6\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d")),Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.getFileInfo({\n    success: function (res) {\n        console.log(res.size)\n        console.log(res.digest)\n    }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Taro.getFileInfo"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);