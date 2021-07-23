(window.webpackJsonp=window.webpackJsonp||[]).push([[1234],{1301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return j}));var b=n(3),l=n(7),r=(n(0),n(1798)),c=n(1802),a=n(1803),d=["components"],u={title:"Textarea",sidebar_label:"Textarea"},O={unversionedId:"components/forms/textarea",id:"components/forms/textarea",isDocsHomePage:!1,title:"Textarea",description:"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/docs/components/forms/textarea.md",slug:"/components/forms/textarea",permalink:"/taro/docs/next/components/forms/textarea",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/textarea.md",version:"current",sidebar_label:"Textarea",sidebar:"components",previous:{title:"Switch",permalink:"/taro/docs/next/components/forms/switch"},next:{title:"Navigator",permalink:"/taro/docs/next/components/navig/navigator"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"TextareaProps",id:"textareaprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onFocusEventDetail",id:"onfocuseventdetail",children:[]},{value:"onBlurEventDetail",id:"onblureventdetail",children:[]},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",children:[]},{value:"onInputEventDetail",id:"oninputeventdetail",children:[]},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",children:[]},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function j(e){var t=e.components,n=Object(l.a)(e,d);return Object(r.b)("wrapper",Object(b.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<TextareaProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"React",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),Object(r.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />\n    <text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />\n  </view>\n</template>\n')))),Object(r.b)("h2",{id:"textareaprops"},"TextareaProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u7684\u5185\u5bb9")),Object(r.b)("tr",null,Object(r.b)("td",null,"placeholder"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),Object(r.b)("tr",null,Object(r.b)("td",null,"placeholderStyle"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"placeholderClass"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"textarea-placeholder"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),Object(r.b)("tr",null,Object(r.b)("td",null,"disabled"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"maxlength"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"140")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"autoFocus"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),Object(r.b)("tr",null,Object(r.b)("td",null,"focus"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u83b7\u53d6\u7126\u70b9")),Object(r.b)("tr",null,Object(r.b)("td",null,"autoHeight"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u81ea\u52a8\u589e\u9ad8\uff0c\u8bbe\u7f6e autoHeight \u65f6\uff0cstyle.height\u4e0d\u751f\u6548")),Object(r.b)("tr",null,Object(r.b)("td",null,"fixed"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5982\u679c Textarea \u662f\u5728\u4e00\u4e2a ",Object(r.b)("code",null,"position:fixed")," \u7684\u533a\u57df\uff0c\u9700\u8981\u663e\u793a\u6307\u5b9a\u5c5e\u6027 fixed \u4e3a true")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursorSpacing"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"0")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 Textarea \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursorSpacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursor"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"-1")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a focus \u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),Object(r.b)("tr",null,Object(r.b)("td",null,"showConfirmBar"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"true")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u663e\u793a\u952e\u76d8\u4e0a\u65b9\u5e26\u6709\u201d\u5b8c\u6210\u201c\u6309\u94ae\u90a3\u4e00\u680f")),Object(r.b)("tr",null,Object(r.b)("td",null,"selectionStart"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"-1")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionEnd \u642d\u914d\u4f7f\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"selectionEnd"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"-1")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionStart \u642d\u914d\u4f7f\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"adjustPosition"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"true")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),Object(r.b)("tr",null,Object(r.b)("td",null,"holdKeyboard"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),Object(r.b)("tr",null,Object(r.b)("td",null,"disableDefaultPadding"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u53bb\u6389 iOS \u4e0b\u7684\u9ed8\u8ba4\u5185\u8fb9\u8ddd")),Object(r.b)("tr",null,Object(r.b)("td",null,"onFocus"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onFocusEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1")),Object(r.b)("tr",null,Object(r.b)("td",null,"onBlur"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onBlurEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1")),Object(r.b)("tr",null,Object(r.b)("td",null,"onLineChange"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onLineChangeEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u884c\u6570\u53d8\u5316\u65f6\u8c03\u7528\uff0cevent.detail = ","{height: 0, heightRpx: 0, lineCount: 0}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onInput"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onInputEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1 input \u4e8b\u4ef6\uff0cevent.detail = ","{value, cursor, keyCode}",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("strong",null,"onInput \u5904\u7406\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5e76\u4e0d\u4f1a\u53cd\u6620\u5230 textarea \u4e0a"))),Object(r.b)("tr",null,Object(r.b)("td",null,"onConfirm"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onConfirmEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u70b9\u51fb\u5b8c\u6210\u65f6\uff0c \u89e6\u53d1 confirm \u4e8b\u4ef6\uff0cevent.detail = ","{value: value}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onKeyboardHeightChange"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.value"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholder"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholderStyle"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholderClass"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.disabled"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.maxlength"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.autoFocus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.focus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.autoHeight"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.fixed"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.cursorSpacing"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.cursor"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.showConfirmBar"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.selectionStart"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.selectionEnd"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.adjustPosition"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.holdKeyboard"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.disableDefaultPadding"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.onFocus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.onBlur"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.onLineChange"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.onInput"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.onConfirm"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"TextareaProps.onKeyboardHeightChange"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("h3",{id:"onfocuseventdetail"},"onFocusEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")),Object(r.b)("tr",null,Object(r.b)("td",null,"height"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")))),Object(r.b)("h3",{id:"onblureventdetail"},"onBlurEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursor"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u5149\u6807\u4f4d\u7f6e")))),Object(r.b)("h3",{id:"onlinechangeeventdetail"},"onLineChangeEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"height"),Object(r.b)("td",null,Object(r.b)("code",null,"number"))),Object(r.b)("tr",null,Object(r.b)("td",null,"heightRpx"),Object(r.b)("td",null,Object(r.b)("code",null,"number"))),Object(r.b)("tr",null,Object(r.b)("td",null,"lineCount"),Object(r.b)("td",null,Object(r.b)("code",null,"number"))))),Object(r.b)("h3",{id:"oninputeventdetail"},"onInputEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursor"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u5149\u6807\u4f4d\u7f6e")),Object(r.b)("tr",null,Object(r.b)("td",null,"keyCode"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u952e\u503c")))),Object(r.b)("h3",{id:"onconfirmeventdetail"},"onConfirmEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")))),Object(r.b)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"height"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"Textarea"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}j.isMDXComponent=!0},1798:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var b=n(0),l=n.n(b);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,b,l=function(e,t){if(null==e)return{};var n,b,l={},r=Object.keys(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),O=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=O(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),o=O(n),j=b,p=o["".concat(c,".").concat(j)]||o[j]||i[j]||r;return n?l.a.createElement(p,a(a({ref:t},u),{},{components:n})):l.a.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=n.length,c=new Array(r);c[0]=j;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:b,c[1]=a;for(var u=2;u<r;u++)c[u]=n[u];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},1799:function(e,t,n){"use strict";function b(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(l&&(l+=" "),l+=t);return l}},1800:function(e,t,n){"use strict";var b=n(0),l=n(1801);t.a=function(){var e=Object(b.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1801:function(e,t,n){"use strict";var b=n(0),l=Object(b.createContext)(void 0);t.a=l},1802:function(e,t,n){"use strict";var b=n(0),l=n.n(b),r=n(1800),c=n(1799),a=n(53),d=n.n(a),u=37,O=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,o=e.defaultValue,i=e.values,j=e.groupId,p=e.className,s=Object(r.a)(),m=s.tabGroupChoices,g=s.setTabGroupChoices,h=Object(b.useState)(o),N=h[0],x=h[1];if(null!=j){var y=m[j];null!=y&&y!==N&&i.some((function(e){return e.value===y}))&&x(y)}var f=function(e){x(e),null!=j&&g(j,e)},v=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},i.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(c.a)("tabs__item",d.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case O:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return f(t)},onClick:function(){f(t)}},n)}))),t?Object(b.cloneElement)(a.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(b.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},1803:function(e,t,n){"use strict";var b=n(0),l=n.n(b);t.a=function(e){var t=e.children,n=e.hidden,b=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:b},t)}}}]);