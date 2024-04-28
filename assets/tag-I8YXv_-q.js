import{i as r,c as e,W as a,t as l,M as i,m as c}from"./index-DBPcm_A9.js";import{C as p}from"./component-preview-1z9wgwgw.js";import{T as d}from"./table-Cl3C9Wpv.js";var u=l("<div>");function s(){return(()=>{var n=u();return r(n,e(a,{children:"123"}),null),r(n,e(a,{type:"primary",children:"123"}),null),r(n,e(a,{closeIcon:!0,children:"123"}),null),r(n,e(a,{type:"primary",closeIcon:!0,children:"123"}),null),n})()}function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",div:"div"},i(),n.components);return[e(t.h1,{id:"tag-标签",children:"Tag 标签"}),`
`,e(t.p,{children:"用于标记和选择。"}),`
`,e(t.h2,{id:"基础用法",children:"基础用法"}),`
`,e(t.p,{children:"由 type 属性来选择 tag 的类型"}),`
`,e(p,{path:"tag/basic",get demo(){return e(s,{})},get children(){return e(t.div,{})}}),`
`,e(t.h1,{id:"api",children:"API"}),`
`,e(d,{data:[{property:"type",des:"设置tag类型",type:"primary",default:""},{property:"closeIcon",des:"设置tag类型",type:"boolean | JSX.Element",default:"false"},{property:"onClose",des:"关闭时的回调（可用来阻止默认行为）",type:"JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>",default:""}]})]}function g(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e(t,c(n,{get children(){return e(o,n)}})):o(n)}export{g as default};
