(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1798:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,O=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?a.a.createElement(O,b(b({ref:t},o),{},{components:n})):a.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(1798)),c=["components"],b={title:"PickerView",sidebar_label:"PickerView"},l={unversionedId:"components/forms/picker-view",id:"version-1.x/components/forms/picker-view",isDocsHomePage:!1,title:"PickerView",description:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",source:"@site/versioned_docs/version-1.x/components/forms/picker-view.md",slug:"/components/forms/picker-view",permalink:"/taro/docs/1.x/components/forms/picker-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/components/forms/picker-view.md",version:"1.x",sidebar_label:"PickerView",sidebar:"version-1.x/components",previous:{title:"Picker",permalink:"/taro/docs/1.x/components/forms/picker"},next:{title:"Radio",permalink:"/taro/docs/1.x/components/forms/radio"}},o=[],p={rightToc:o};function m(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668"},"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5c5e\u6027")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"value"),Object(i.b)("td",{parentName:"tr",align:"left"},"NumberArray"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u4f9d\u6b21\u8868\u793a picker-view \u5185\u7684 picker-view-column \u9009\u62e9\u7684\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0c\u6570\u5b57\u5927\u4e8e picker-view-column \u53ef\u9009\u9879\u957f\u5ea6\u65f6\uff0c\u9009\u62e9\u6700\u540e\u4e00\u9879\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"indicatorStyle"),Object(i.b)("td",{parentName:"tr",align:"left"},"String"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u6837\u5f0f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"indicatorClass"),Object(i.b)("td",{parentName:"tr",align:"left"},"String"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u7c7b\u540d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"maskStyle"),Object(i.b)("td",{parentName:"tr",align:"left"},"String"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u8499\u5c42\u7684\u6837\u5f0f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"maskClass"),Object(i.b)("td",{parentName:"tr",align:"left"},"String"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u8499\u5c42\u7684\u7c7b\u540d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"onChange"),Object(i.b)("td",{parentName:"tr",align:"left"},"EventHandle"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u5f53\u6eda\u52a8\u9009\u62e9\uff0cvalue \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = {value: value}\uff1bvalue \u4e3a\u6570\u7ec4\uff0c\u8868\u793a picker-view \u5185\u7684 picker-view-column \u5f53\u524d\u9009\u62e9\u7684\u662f\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5404\u7aef\u652f\u6301\u5ea6")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"left"},"ReactNative"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"value"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"indicatorStyle"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"indicatorClass"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"maskStyle"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"maskClass"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"onChange"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u2714")))),Object(i.b)("h5",{id:"pickerviewcolumn"},"PickerViewColumn"),Object(i.b)("h5",{id:"\u4ec5\u53ef\u653e\u7f6e\u4e8e-pickerview-\u4e2d\uff0c\u5176\u5b69\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u6210\u4e0e-pickerview-\u7684\u9009\u4e2d\u6846\u7684\u9ad8\u5ea6\u4e00\u81f4"},"\u4ec5\u53ef\u653e\u7f6e\u4e8e PickerView \u4e2d\uff0c\u5176\u5b69\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u6210\u4e0e PickerView \u7684\u9009\u4e2d\u6846\u7684\u9ad8\u5ea6\u4e00\u81f4"),Object(i.b)("h6",{id:"\u793a\u4f8b\uff1a"},"\u793a\u4f8b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { View, PickerView, PickerViewColumn } from '@tarojs/components'\n\nexport default class Picks extends Component {\n\n  constructor () {\n    super(...arguments)\n    const date = new Date()\n    const years = []\n    const months = []\n    const days = []\n    for (let i = 1990; i <= date.getFullYear(); i++) {\n      years.push(i)\n    }\n    for (let i = 1; i <= 12; i++) {\n      months.push(i)\n    }\n    for (let i = 1; i <= 31; i++) {\n      days.push(i)\n    }\n    this.state = {\n      years: years,\n      year: date.getFullYear(),\n      months: months,\n      month: 2,\n      days: days,\n      day: 2,\n      value: [9999, 1, 1]\n    }\n  }\n\n  onChange = e => {\n    const val = e.detail.value\n    this.setState({\n      year: this.state.years[val[0]],\n      month: this.state.months[val[1]],\n      day: this.state.days[val[2]],\n      value: val\n    })\n  }\n\n  render() {\n    return (\n      <View>\n        <View>{this.state.year}\u5e74{this.state.month}\u6708{this.state.day}\u65e5</View>\n        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>\n          <PickerViewColumn>\n            {this.state.years.map(item => {\n              return (\n                <View>{item}\u5e74</View>\n              );\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.months.map(item => {\n              return (\n                <View>{item}\u6708</View>\n              )\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.days.map(item => {\n              return (\n                <View>{item}\u65e5</View>\n              )\n            })}\n          </PickerViewColumn>\n        </PickerView>\n      </View>\n    )\n  }\n}\n\n")))}m.isMDXComponent=!0}}]);