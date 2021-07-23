(window.webpackJsonp=window.webpackJsonp||[]).push([[1664],{1731:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var c=n(3),r=n(7),o=(n(0),n(1798)),l=["components"],b={title:"Taro.connectSocket(option)",sidebar_label:"connectSocket"},a={unversionedId:"apis/network/webSocket/connectSocket",id:"version-3.x/apis/network/webSocket/connectSocket",isDocsHomePage:!1,title:"Taro.connectSocket(option)",description:"\u521b\u5efa\u4e00\u4e2a WebSocket \u8fde\u63a5\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.x/apis/network/webSocket/connectSocket.md",slug:"/apis/network/webSocket/connectSocket",permalink:"/taro/docs/apis/network/webSocket/connectSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/webSocket/connectSocket.md",version:"3.x",sidebar_label:"connectSocket",sidebar:"version-3.x/API",previous:{title:"Taro.onSocketClose(callback)",permalink:"/taro/docs/apis/network/webSocket/onSocketClose"},next:{title:"Taro.closeSocket(option)",permalink:"/taro/docs/apis/network/webSocket/closeSocket"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(c.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u521b\u5efa\u4e00\u4e2a WebSocket \u8fde\u63a5\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5e76\u53d1\u6570")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1.7.0 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u6700\u591a\u53ef\u4ee5\u540c\u65f6\u5b58\u5728 5 \u4e2a WebSocket \u8fde\u63a5\u3002"),Object(o.b)("li",{parentName:"ul"},"1.7.0 \u4ee5\u4e0b\u7248\u672c\uff0c\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u540c\u65f6\u53ea\u80fd\u6709\u4e00\u4e2a WebSocket \u8fde\u63a5\uff0c\u5982\u679c\u5f53\u524d\u5df2\u5b58\u5728\u4e00\u4e2a WebSocket \u8fde\u63a5\uff0c\u4f1a\u81ea\u52a8\u5173\u95ed\u8be5\u8fde\u63a5\uff0c\u5e76\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a WebSocket \u8fde\u63a5\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SocketTask>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"url"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(o.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668 wss \u63a5\u53e3\u5730\u5740")),Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"header"),Object(o.b)("td",null,Object(o.b)("code",null,"Record<string, any>")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"HTTP Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(o.b)("tr",null,Object(o.b)("td",null,"protocols"),Object(o.b)("td",null,Object(o.b)("code",null,"string[]")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u5b50\u534f\u8bae\u6570\u7ec4")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"tcpNoDelay"),Object(o.b)("td",null,Object(o.b)("code",null,"boolean")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u5efa\u7acb TCP \u8fde\u63a5\u7684\u65f6\u5019\u7684 TCP_NODELAY \u8bbe\u7f6e")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.connectSocket({\n  url: 'wss://example.qq.com',\n  header:{\n    'content-type': 'application/json'\n  },\n  protocols: ['protocol1']\n})\n")),Object(o.b)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.connectSocket({\n  url: 'ws://echo.websocket.org/echo',\n  success: function () {\n    console.log('connect success')\n  }\n}).then(task => {\n  task.onOpen(function () {\n    console.log('onOpen')\n    task.send({ data: 'xxx' })\n  })\n  task.onMessage(function (msg) {\n    console.log('onMessage: ', msg)\n    task.close()\n  })\n  task.onError(function () {\n    console.log('onError')\n  })\n  task.onClose(function (e) {\n    console.log('onClose: ', e)\n  })\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.connectSocket"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0},1798:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var c=n(0),r=n.n(c);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=c,O=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,l=new Array(o);l[0]=d;var b={};for(var a in t)hasOwnProperty.call(t,a)&&(b[a]=t[a]);b.originalType=e,b.mdxType="string"==typeof e?e:c,l[1]=b;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);