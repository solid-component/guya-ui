import{g as d,c as e,b as s,Z as n,i as p,t as h,M as o,m as g}from"./index-DBPcm_A9.js";import{b as l}from"./index-DR1t-lh7.js";import{l as m}from"./index-CZ6wXKgu.js";import{C as a}from"./component-preview-1z9wgwgw.js";import{T as f}from"./table-Cl3C9Wpv.js";var v=h("<div>");function b(){const[r,t]=d("default"),[u]=d("contro");return e(l,{direction:"vertical",get class(){return s({width:"100%",">div":{width:"100%"}})},get children(){return[e(n,{placeholder:"placeholder"}),e(l,{get children(){return[e(n,{get value(){return r()},onChangeValue:i=>{t(i)}}),(()=>{var i=v();return p(i,r),i})()]}}),e(n,{get value(){return r()}}),e(n,{get value(){return u()},clearable:!0}),e(n,{clearable:!0})]}})}function y(){return e(l,{get children(){return e(n,{disabled:!0,placeholder:"disabled"})}})}function C(){const[r,t]=d(0),u=()=>{if(r()===0)return"small";if(r()!==1)return"large"};return e(l,{direction:"vertical",style:{width:"100%"},get children(){return[e(m,{onClick:()=>t((r()+1)%3),children:"调整尺寸"}),e(n,{placeholder:"default",get size(){return u()}}),e(n,{placeholder:"small",size:"small"}),e(n,{placeholder:"large",size:"large"})]}})}function c(r){const t=Object.assign({h1:"h1",div:"div",p:"p"},o(),r.components);return[e(t.h1,{id:"input-输入框",children:"Input 输入框"}),`
`,e(t.h1,{id:"基础用法",children:"基础用法"}),`
`,e(a,{path:"input/basic",get code(){return e(b,{})},get children(){return e(t.div,{})}}),`
`,e(t.h1,{id:"禁用状态",children:"禁用状态"}),`
`,e(t.p,{children:"通过 disabled 属性指定是否禁用 input 组件"}),`
`,e(a,{path:"input/disabled",get code(){return e(y,{})},get children(){return e(t.div,{})}}),`
`,e(t.h1,{id:"调整尺寸",children:"调整尺寸"}),`
`,e(t.p,{children:"通过size属性指定 input 组件大小"}),`
`,e(a,{path:"input/size",get code(){return e(C,{})},get children(){return e(t.div,{})}}),`
`,e(t.h1,{id:"api",children:"API"}),`
`,e(f,{data:[{property:"size",des:"设置按钮大小",type:"large | small",default:""},{property:"value",des:"输入框内容",type:"string"},{property:"clearable",des:"可以点击清除图标删除内容",type:"boolean"},{property:"prefix",des:"带有前缀图标的 input",type:"JSX.Element"},{property:"suffix",des:"带有后缀图标的 input",type:"JSX.Element"}]})]}function S(r={}){const{wrapper:t}=Object.assign({},o(),r.components);return t?e(t,g(r,{get children(){return e(c,r)}})):c(r)}export{S as default};
