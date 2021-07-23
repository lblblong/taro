(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{1798:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=i(t),s=a,m=u["".concat(b,".").concat(s)]||u[s]||d[s]||c;return t?r.a.createElement(m,p(p({ref:n},o),{},{components:t})):r.a.createElement(m,p({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,b[1]=p;for(var o=2;o<c;o++)b[o]=t[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},958:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),c=(t(0),t(1798)),b=["components"],p={title:"\u5b89\u88c5\u53ca\u4f7f\u7528"},l={unversionedId:"GETTING-STARTED",id:"version-1.x/GETTING-STARTED",isDocsHomePage:!1,title:"\u5b89\u88c5\u53ca\u4f7f\u7528",description:"\u5b89\u88c5",source:"@site/versioned_docs/version-1.x/GETTING-STARTED.md",slug:"/GETTING-STARTED",permalink:"/taro/docs/1.x/GETTING-STARTED",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/GETTING-STARTED.md",version:"1.x",sidebar:"version-1.x/docs",previous:{title:"Taro \u56e2\u961f",permalink:"/taro/docs/1.x/team"},next:{title:"\u66f4\u591a\u8d44\u6e90",permalink:"/taro/docs/1.x/composition"}},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"CLI \u5de5\u5177\u5b89\u88c5",id:"cli-\u5de5\u5177\u5b89\u88c5",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"\u9879\u76ee\u521d\u59cb\u5316",id:"\u9879\u76ee\u521d\u59cb\u5316",children:[]},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",children:[]},{value:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",id:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",children:[]},{value:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",id:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",children:[]},{value:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",id:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",children:[]},{value:"QQ \u5c0f\u7a0b\u5e8f",id:"qq-\u5c0f\u7a0b\u5e8f",children:[]},{value:"\u5feb\u5e94\u7528",id:"\u5feb\u5e94\u7528",children:[]},{value:"H5",id:"h5",children:[]},{value:"React Native",id:"react-native",children:[]}]},{value:"\u5e38\u7528 CLI \u547d\u4ee4",id:"\u5e38\u7528-cli-\u547d\u4ee4",children:[{value:"\u67e5\u770b Taro \u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9",id:"\u67e5\u770b-taro-\u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9",children:[]},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",children:[]},{value:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b",id:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b",children:[]},{value:"Taro Doctor",id:"taro-doctor",children:[]},{value:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762",id:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762",children:[]},{value:"CLI \u914d\u7f6e",id:"cli-\u914d\u7f6e",children:[]}]},{value:"\u5176\u4ed6\u5e38\u89c1\u95ee\u9898",id:"\u5176\u4ed6\u5e38\u89c1\u95ee\u9898",children:[{value:"\u56de\u5230\u67d0\u4e2a\u7248\u672c",id:"\u56de\u5230\u67d0\u4e2a\u7248\u672c",children:[]}]}],i={rightToc:o};function u(e){var n=e.components,t=Object(r.a)(e,b);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(c.b)("p",null,"Taro \u9879\u76ee\u57fa\u4e8e node\uff0c\u8bf7\u786e\u4fdd\u5df2\u5177\u5907\u8f83\u65b0\u7684 node \u73af\u5883\uff08>=8.0.0\uff09\uff0c\u63a8\u8350\u4f7f\u7528 node \u7248\u672c\u7ba1\u7406\u5de5\u5177 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"nvm")," \u6765\u7ba1\u7406 node\uff0c\u8fd9\u6837\u4e0d\u4ec5\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5207\u6362 node \u7248\u672c\uff0c\u800c\u4e14\u5168\u5c40\u5b89\u88c5\u65f6\u5019\u4e5f\u4e0d\u7528\u52a0 sudo \u4e86\u3002"),Object(c.b)("h3",{id:"cli-\u5de5\u5177\u5b89\u88c5"},"CLI \u5de5\u5177\u5b89\u88c5"),Object(c.b)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u4f7f\u7528 npm \u6216\u8005 yarn \u5168\u5c40\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"@tarojs/cli"),"\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528 ",Object(c.b)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 npm \u5b89\u88c5 CLI\n$ npm install -g @tarojs/cli\n# OR \u4f7f\u7528 yarn \u5b89\u88c5 CLI\n$ yarn global add @tarojs/cli\n# OR \u5b89\u88c5\u4e86 cnpm\uff0c\u4f7f\u7528 cnpm \u5b89\u88c5 CLI\n$ cnpm install -g @tarojs/cli\n")),Object(c.b)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(c.b)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u5b89\u88c5\u8fc7\u7a0b\u51fa\u73b0",Object(c.b)("inlineCode",{parentName:"p"},"sass"),"\u76f8\u5173\u7684\u5b89\u88c5\u9519\u8bef\uff0c\u8bf7\u5728\u5b89\u88c5",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/mirror-config-china"},Object(c.b)("inlineCode",{parentName:"a"},"mirror-config-china")),"\u540e\u91cd\u8bd5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g mirror-config-china\n")),Object(c.b)("h4",{id:"\u67e5\u770b-taro-\u5168\u90e8\u7248\u672c\u4fe1\u606f"},"\u67e5\u770b Taro \u5168\u90e8\u7248\u672c\u4fe1\u606f"),Object(c.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"npm info")," \u67e5\u770b Taro \u7248\u672c\u4fe1\u606f\uff0c\u5728\u8fd9\u91cc\u4f60\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u6700\u65b0\u7248\u672c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm info @tarojs/cli\n")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img13.360buyimg.com/ling/jfs/t1/144770/7/20011/138415/5fe40491Ed0883578/11236962a3e672db.png",alt:"npm info @tarojs/cli screenshot"})),Object(c.b)("p",null,"\u7531\u56fe\u7b2c 1 \u884c\u53ef\u77e5\u6700\u65b0\u7248\u672c\uff0c\u5982\u679c\u4f60\u7528\u7684\u662f beta \u6216\u8005 canary \u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"dist-tags:")," \u4e0b\u9762\u90a3\u884c\u770b\u5230\u6700\u65b0\u7684\u7248\u672c\u3002"),Object(c.b)("h2",{id:"\u9879\u76ee\u521d\u59cb\u5316"},"\u9879\u76ee\u521d\u59cb\u5316"),Object(c.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u521b\u5efa\u6a21\u677f\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ taro init myApp\n")),Object(c.b)("p",null,"npm 5.2+ \u4e5f\u53ef\u5728\u4e0d\u5168\u5c40\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 npx \u521b\u5efa\u6a21\u677f\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ npx @tarojs/cli init myApp\n")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img30.360buyimg.com/ling/jfs/t1/121270/15/15083/672721/5f89357dEf36b7fe2/ecb98df1436cd3d5.jpg",alt:"taro init myApp command screenshot"})),Object(c.b)("p",null,"\u5728\u521b\u5efa\u5b8c\u9879\u76ee\u4e4b\u540e\uff0cTaro \u4f1a\u9ed8\u8ba4\u5f00\u59cb\u5b89\u88c5\u9879\u76ee\u6240\u9700\u8981\u7684\u4f9d\u8d56\uff0c\u5b89\u88c5\u4f7f\u7528\u7684\u5de5\u5177\u6309\u7167 yarn>cnpm>npm \u987a\u5e8f\u8fdb\u884c\u68c0\u6d4b\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u4f9d\u8d56\u5b89\u88c5\u4f1a\u6bd4\u8f83\u987a\u5229\uff0c\u4f46\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5b89\u88c5\u5931\u8d25\uff0c\u8fd9\u65f6\u5019\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u81ea\u5df1\u4f7f\u7528\u5b89\u88c5\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 yarn \u5b89\u88c5\u4f9d\u8d56\n$ yarn\n# OR \u4f7f\u7528 cnpm \u5b89\u88c5\u4f9d\u8d56\n$ cnpm install\n# OR \u4f7f\u7528 npm \u5b89\u88c5\u4f9d\u8d56\n$ npm install\n")),Object(c.b)("p",null,"\u8fdb\u5165\u9879\u76ee\u76ee\u5f55\u5f00\u59cb\u5f00\u53d1\uff0c\u76ee\u524d\u5df2\u7ecf\u652f\u6301 \u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8/QQ \u5c0f\u7a0b\u5e8f\u3001H5\u3001\u5feb\u5e94\u7528\u4ee5\u53ca ReactNative \u7b49\u7aef\u7684\u4ee3\u7801\u8f6c\u6362\uff0c\u9488\u5bf9\u4e0d\u540c\u7aef\u7684\u542f\u52a8\u4ee5\u53ca\u9884\u89c8\u3001\u6253\u5305\u65b9\u5f0f\u5e76\u4e0d\u4e00\u81f4"),Object(c.b)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),Object(c.b)("p",null,"Taro \u9700\u8981\u8fd0\u884c\u4e0d\u540c\u7684\u547d\u4ee4\uff0c\u5c06 Taro \u4ee3\u7801\u7f16\u8bd1\u6210\u4e0d\u540c\u7aef\u7684\u4ee3\u7801\uff0c\u7136\u540e\u5728\u5bf9\u5e94\u7684\u5f00\u53d1\u5de5\u5177\u4e2d\u67e5\u770b\u6548\u679c\u3002"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://storage.360buyimg.com/taro-resource/platforms.jpg",alt:"image"})),Object(c.b)("h3",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"\u9009\u62e9\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(c.b)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff08\u53bb\u6389 --watch \u5c06\u4e0d\u4f1a\u76d1\u542c\u6587\u4ef6\u4fee\u6539\uff0c\u5e76\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:weapp\n$ yarn build:weapp\n# npm script\n$ npm run dev:weapp\n$ npm run build:weapp\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type weapp --watch\n$ taro build --type weapp\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type weapp --watch\n$ npx taro build --type weapp\n")),Object(c.b)("h3",{id:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"\u9009\u62e9\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(c.b)("a",{parentName:"p",href:"https://smartprogram.baidu.com/docs/develop/devtools/show_sur/"},"\u767e\u5ea6\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(c.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(c.b)("p",null,"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff08\u53bb\u6389 --watch \u5c06\u4e0d\u4f1a\u76d1\u542c\u6587\u4ef6\u4fee\u6539\uff0c\u5e76\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:swan\n$ yarn build:swan\n# npm script\n$ npm run dev:swan\n$ npm run build:swan\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type swan --watch\n$ taro build --type swan\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type swan --watch\n$ npx taro build --type swan\n")),Object(c.b)("h3",{id:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"\u9009\u62e9\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(c.b)("a",{parentName:"p",href:"https://docs.alipay.com/mini/developer/getting-started/"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(c.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(c.b)("p",null,"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff08\u53bb\u6389 --watch \u5c06\u4e0d\u4f1a\u76d1\u542c\u6587\u4ef6\u4fee\u6539\uff0c\u5e76\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:alipay\n$ yarn build:alipay\n# npm script\n$ npm run dev:alipay\n$ npm run build:alipay\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type alipay --watch\n$ taro build --type alipay\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type alipay --watch\n$ npx taro build --type alipay\n")),Object(c.b)("h3",{id:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"\u9009\u62e9\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(c.b)("a",{parentName:"p",href:"https://microapp.bytedance.com/docs/devtool/versionUpdate.html"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(c.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(c.b)("p",null,"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff08\u53bb\u6389 --watch \u5c06\u4e0d\u4f1a\u76d1\u542c\u6587\u4ef6\u4fee\u6539\uff0c\u5e76\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:tt\n$ yarn build:tt\n# npm script\n$ npm run dev:tt\n$ npm run build:tt\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type tt --watch\n$ taro build --type tt\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type tt --watch\n$ npx taro build --type tt\n")),Object(c.b)("h3",{id:"qq-\u5c0f\u7a0b\u5e8f"},"QQ \u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"\u9009\u62e9 QQ \u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(c.b)("a",{parentName:"p",href:"https://q.qq.com/wiki/#_4-%E7%BC%96%E7%A0%81%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F"},"QQ \u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(c.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(c.b)("p",null,"QQ \u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff08\u53bb\u6389 --watch \u5c06\u4e0d\u4f1a\u76d1\u542c\u6587\u4ef6\u4fee\u6539\uff0c\u5e76\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:qq\n$ yarn build:qq\n# npm script\n$ npm run dev:qq\n$ npm run build:qq\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type qq --watch\n$ taro build --type qq\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type qq --watch\n$ npx taro build --type qq\n")),Object(c.b)("h3",{id:"\u5feb\u5e94\u7528"},"\u5feb\u5e94\u7528"),Object(c.b)("p",null,"\u9009\u62e9\u5feb\u5e94\u7528\u6a21\u5f0f\uff0c\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(c.b)("a",{parentName:"p",href:"https://www.quickapp.cn/docCenter/IDEPublicity"},"\u5feb\u5e94\u7528\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\uff0c\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u9009\u62e9\u300c\u6253\u5f00\u6587\u4ef6\u5939\u300d\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(c.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\uff0c\u70b9\u51fb\u5de6\u8fb9\u7684\u9884\u89c8\u56fe\u6807\uff08\u90a3\u4e2a\u773c\u775b\u56fe\u6807\uff09\u8fdb\u884c\u9884\u89c8\u3002"),Object(c.b)("p",null,"\u5feb\u5e94\u7528\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff08\u53bb\u6389 --watch \u5c06\u4e0d\u4f1a\u76d1\u542c\u6587\u4ef6\u4fee\u6539\uff0c\u5e76\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u6253\u5305\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:quickapp\n$ yarn build:quickapp\n# npm script\n$ npm run dev:quickapp\n$ npm run build:quickapp\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type quickapp --watch\n$ taro build --type quickapp\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type quickapp --watch\n$ npx taro build --type quickapp\n")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://doc.quickapp.cn/tutorial/ide/overview.html"},"\u5feb\u5e94\u7528\u5f00\u53d1\u8005\u5de5\u5177\u5982\u4f55\u4f7f\u7528\uff1f\u70b9\u51fb\u4e86\u89e3")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://docs.taro.zone/docs/quick-app"},"\u5feb\u5e94\u7528\u7aef\u5f00\u53d1\u6d41\u7a0b")),Object(c.b)("h3",{id:"h5"},"H5"),Object(c.b)("p",null,"H5 \u6a21\u5f0f\uff0c\u65e0\u9700\u7279\u5b9a\u7684\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u5728\u6267\u884c\u5b8c\u4e0b\u8ff0\u547d\u4ee4\u4e4b\u540e\u5373\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u8fdb\u884c\u9884\u89c8"),Object(c.b)("p",null,"H5 \u9884\u89c8\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:h5\n# npm script\n$ npm run dev:h5\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type h5 --watch\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type h5 --watch\n")),Object(c.b)("p",null,"H5 \u6253\u5305\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn build:h5\n# npm script\n$ npm run build:h5\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type h5\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type h5\n")),Object(c.b)("h3",{id:"react-native"},"React Native"),Object(c.b)("p",null,"React Native \u7aef\u8fd0\u884c\u9700\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0cReact Native \u7aef\u76f8\u5173\u7684\u8fd0\u884c\u8bf4\u660e\u8bf7\u53c2\u89c1 ",Object(c.b)("a",{parentName:"p",href:"./react-native"},"React Native \u6559\u7a0b")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# yarn\n$ yarn dev:rn\n# npm script\n$ npm run dev:rn\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type rn --watch\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type rn --watch\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note\uff1aReact Native \u7aef\u548c\u5176\u4ed6\u7aef\u6837\u5f0f\u517c\u5bb9\u6027\u5dee\u5f02\u8f83\u5927\uff0c\u5982\u679c\u9700\u8981\u517c\u5bb9 React Native \u7aef\uff0c\u5efa\u8bae React Native \u7aef\u548c\u5176\u4ed6\u7aef\u540c\u6b65\u5f00\u53d1\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note\uff1a\u5982\u679c\u8981\u652f\u6301 React Native \u7aef\uff0c\u5fc5\u987b\u91c7\u7528 Flex \u5e03\u5c40\uff0c\u5e76\u4e14\u6837\u5f0f\u9009\u62e9\u5668\u4ec5\u652f\u6301\u7c7b\u9009\u62e9\u5668\uff0c\u4e14\u4e0d\n\u652f\u6301 ",Object(c.b)("strong",{parentName:"p"},"\u7ec4\u5408\u5668")," ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors"},"Combinators and groups of selectors"),"\u3002")),Object(c.b)("p",null,"\u4ee5\u4e0b\u9009\u62e9\u5668\u7684\u5199\u6cd5\u90fd\u662f\u4e0d\u652f\u6301\u7684\uff0c\u5728\u6837\u5f0f\u8f6c\u6362\u65f6\u4f1a\u81ea\u52a8\u5ffd\u7565\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-css"},".button.button_theme_islands {\n  font-style: bold;\n}\n\nimg + p {\n  font-style: bold;\n}\n\np ~ span {\n  color: red;\n}\n\ndiv > span {\n  background-color: DodgerBlue;\n}\n\ndiv span {\n  background-color: DodgerBlue;\n}\n")),Object(c.b)("p",null,"\u6837\u5f0f\u4e0a H5 \u6700\u4e3a\u7075\u6d3b\uff0c\u5c0f\u7a0b\u5e8f\u6b21\u4e4b\uff0cRN \u6700\u5f31\uff0c\u7edf\u4e00\u591a\u7aef\u6837\u5f0f\u5373\u662f\u5bf9\u9f50\u77ed\u677f\uff0c\u4e5f\u5c31\u662f\u8981\u4ee5 RN \u7684\u7ea6\u675f\u6765\u7ba1\u7406\u6837\u5f0f\uff0c\u540c\u65f6\u517c\u987e\u5c0f\u7a0b\u5e8f\u7684\u9650\u5236\uff0c\u6838\u5fc3\u53ef\u4ee5\u7528\u4e09\u70b9\u6765\u6982\u62ec\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 Flex \u5e03\u5c40"),Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e BEM \u5199\u6837\u5f0f"),Object(c.b)("li",{parentName:"ul"},"\u91c7\u7528 style \u5c5e\u6027\u8986\u76d6\u7ec4\u4ef6\u6837\u5f0f")),Object(c.b)("p",null,"RN \u4e2d View \u6807\u7b7e\u9ed8\u8ba4\u4e3b\u8f74\u65b9\u5411\u662f column\uff0c\u5982\u679c\u4e0d\u5c06\u5176\u4ed6\u7aef\u6539\u6210\u4e0e RN \u4e00\u81f4\uff0c\u5c31\u9700\u8981\u5728\u6240\u6709\u7528\u5230 display: flex \u7684\u5730\u65b9\u90fd\u663e\u5f0f\u58f0\u660e\u4e3b\u8f74\u65b9\u5411\u3002"),Object(c.b)("h2",{id:"\u5e38\u7528-cli-\u547d\u4ee4"},"\u5e38\u7528 CLI \u547d\u4ee4"),Object(c.b)("h3",{id:"\u67e5\u770b-taro-\u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9"},"\u67e5\u770b Taro \u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ taro --help\n")),Object(c.b)("h3",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),Object(c.b)("p",null,"Taro \u63d0\u4f9b\u4e86\u66f4\u65b0\u547d\u4ee4\u6765\u66f4\u65b0 CLI \u5de5\u5177\u81ea\u8eab\u548c\u9879\u76ee\u4e2d Taro \u76f8\u5173\u7684\u4f9d\u8d56"),Object(c.b)("p",null,"\u66f4\u65b0 Taro CLI \u5de5\u5177"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# taro\n$ taro update self\n# npm\nnpm i -g @tarojs/cli@latest\n# yarn\nyarn global add @tarojs/cli@latest\n")),Object(c.b)("p",null,"\u66f4\u65b0\u9879\u76ee\u4e2d Taro \u76f8\u5173\u7684\u4f9d\u8d56"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ taro update project\n")),Object(c.b)("p",null,"\u5982\u547d\u4ee4\u66f4\u65b0\u5931\u8d25\uff0c\u9700\u8981\u5728 package.json \u6587\u4ef6\u624b\u52a8\u66f4\u65b0\u4f9d\u8d56\u7248\u672c\uff0c\u7136\u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"),Object(c.b)("h3",{id:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b"},"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b"),Object(c.b)("p",null,"Taro \u63d0\u4f9b\u4e86\u547d\u4ee4\u6765\u4e00\u952e\u68c0\u6d4b Taro \u73af\u5883\u53ca\u4f9d\u8d56\u7684\u7248\u672c\u7b49\u4fe1\u606f\uff0c\u65b9\u4fbf\u5927\u5bb6\u67e5\u770b\u9879\u76ee\u7684\u73af\u5883\u53ca\u4f9d\u8d56\uff0c\u6392\u67e5\u73af\u5883\u95ee\u9898\u3002\u5728\u63d0 issue \u7684\u65f6\u5019\uff0c\u8bf7\u9644\u4e0a ",Object(c.b)("inlineCode",{parentName:"p"},"taro info")," \u6253\u5370\u7684\u4fe1\u606f\uff0c\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ taro info\n\ud83d\udc7d Taro v1.2.0-beta.15\n\n\n  Taro CLI 1.2.0-beta.15 environment info:\n    System:\n      OS: macOS High Sierra 10.13.5\n      Shell: 5.3 - /bin/zsh\n    Binaries:\n      Node: 8.11.2 - /usr/local/bin/node\n      Yarn: 1.8.0 - /usr/local/bin/yarn\n      npm: 5.6.0 - /usr/local/bin/npm\n    npmPackages:\n      @tarojs/components: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/plugin-babel: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/plugin-csso: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/plugin-sass: ^1.2.0-beta.4 => 1.2.0-beta.4\n      @tarojs/plugin-uglifyjs: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/rn-runner: ^1.2.0-beta.4 => 1.2.0-beta.4\n      @tarojs/router: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/taro: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/taro-alipay: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/taro-h5: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/taro-swan: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/taro-weapp: ^1.2.0-beta.3 => 1.2.0-beta.3\n      @tarojs/webpack-runner: ^1.2.0-beta.3 => 1.2.0-beta.3\n      eslint-config-taro: ^1.2.0-beta.3 => 1.2.0-beta.3\n      eslint-plugin-taro: ^1.2.0-beta.3 => 1.2.0-beta.3\n")),Object(c.b)("h3",{id:"taro-doctor"},"Taro Doctor"),Object(c.b)("p",null,"Taro Doctor \u5c31\u50cf\u4e00\u4e2a\u533b\u751f\u4e00\u6837\uff0c\u53ef\u4ee5\u8bca\u65ad\u9879\u76ee\u7684\u4f9d\u8d56\u3001\u8bbe\u7f6e\u3001\u7ed3\u6784\uff0c\u4ee5\u53ca\u4ee3\u7801\u7684\u89c4\u8303\u662f\u5426\u5b58\u5728\u95ee\u9898\uff0c\u5e76\u5c1d\u8bd5\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002"),Object(c.b)("p",null,"\u4f46\u548c\u771f\u6b63\u7684\u533b\u751f\u4e0d\u4e00\u6837\uff0cTaro Doctor \u4e0d\u9700\u8981\u6392\u961f\u6302\u53f7\uff0c\u4e5f\u4e0d\u7528\u82b1\u94b1\u3002\u4f60\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u8fd0\u884c\u547d\u4ee4\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"taro doctor"),"\uff0c\u5c31\u50cf\u56fe\u91cc\u4e00\u6837\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png",alt:"Taro Doctor \u8bca\u65ad\u7ed3\u679c\u56fe"})),Object(c.b)("h3",{id:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762"},"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762"),Object(c.b)("p",null,"Taro create --name ","[\u9875\u9762\u540d\u79f0]"," \u80fd\u591f\u5728\u5f53\u524d\u9879\u76ee\u7684pages\u76ee\u5f55\u4e0b\u5feb\u901f\u751f\u6210\u65b0\u7684\u9875\u9762\u6587\u4ef6\uff0c\u5e76\u586b\u5145\u57fa\u7840\u4ee3\u7801\uff0c\u662f\u4e00\u4e2a\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u7684\u5229\u5668\u3002"),Object(c.b)("h3",{id:"cli-\u914d\u7f6e"},"CLI \u914d\u7f6e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u81ea ",Object(c.b)("inlineCode",{parentName:"p"},"1.3.9")," \u5f00\u59cb\u652f\u6301")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"1.3.9")," \u5f00\u59cb Taro \u4f1a\u5728\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u521b\u5efa .taro \u6587\u4ef6\u5939\uff0c\u5176\u4e2d .taro/index.json \u7528\u4e8e\u5b58\u653e CLI \u76f8\u5173\u914d\u7f6e\u3002"),Object(c.b)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"taro config")," \u547d\u4ee4\u5bf9\u914d\u7f6e\u9879\u8fdb\u884c\u4e00\u7cfb\u5217\u64cd\u4f5c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7528\u6cd5\n$ taro config --help\n# \u8bbe\u7f6e\u914d\u7f6e\u9879<key>\u7684\u503c\u4e3a<value>\n$ taro config set <key> <value>\n# \u8bfb\u53d6\u914d\u7f6e\u9879<key>\n$ taro config get <key>\n# \u5220\u9664\u914d\u7f6e\u9879<key>\n$ taro config delete <key>\n# \u6253\u5370\u6240\u6709\u914d\u7f6e\u9879\n$ taro config list [--json]\n")),Object(c.b)("h2",{id:"\u5176\u4ed6\u5e38\u89c1\u95ee\u9898"},"\u5176\u4ed6\u5e38\u89c1\u95ee\u9898"),Object(c.b)("h3",{id:"\u56de\u5230\u67d0\u4e2a\u7248\u672c"},"\u56de\u5230\u67d0\u4e2a\u7248\u672c"),Object(c.b)("p",null,"\u9700\u8981\u5b89\u88c5\u67d0\u4e2a\u56fa\u5b9a\u7248\u672c\uff0c\u6216\u8005\u56de\u5230\u67d0\u4e2a\u7248\u672c\uff0c\u4f8b\u5982\u6211\u4eec\u8981\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"1.3.9")," \uff0c \u5219\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 npm \u5b89\u88c5 CLI\n$ npm install -g @tarojs/cli@1.3.9\n# OR \u4f7f\u7528 yarn \u5b89\u88c5 CLI\n$ yarn global add @tarojs/cli@1.3.9\n# OR \u5b89\u88c5\u4e86 cnpm\uff0c\u4f7f\u7528 cnpm \u5b89\u88c5 CLI\n$ cnpm install -g @tarojs/cli@1.3.9\n")))}u.isMDXComponent=!0}}]);