import{c as e,M as c,m as a}from"./index-DBPcm_A9.js";import{l as r}from"./index-CZ6wXKgu.js";import{b as i}from"./index-DR1t-lh7.js";import{C as t}from"./component-preview-1z9wgwgw.js";import{T as h}from"./table-Cl3C9Wpv.js";function s(){return e(i,{direction:"vertical",get children(){return[e(i,{align:"center",wrap:!0,get children(){return[e(r,{children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}}),e(i,{align:"start",wrap:!0,get children(){return[e(r,{size:"large",children:"按钮"}),e(r,{size:"small",children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}}),e(i,{align:"end",get children(){return[e(r,{size:"large",children:"按钮"}),e(r,{size:"small",children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}}),e(i,{align:"baseline",get children(){return[e(r,{size:"large",children:"按钮"}),e(r,{size:"small",children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}})]}})}function u(){return e(i,{direction:"vertical",get children(){return[e(i,{align:"center",size:"middle",get children(){return[e(r,{children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}}),e(i,{align:"start",size:"large",get children(){return[e(r,{size:"large",children:"按钮"}),e(r,{size:"small",children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}}),e(i,{align:"end",get children(){return[e(r,{size:"large",children:"按钮"}),e(r,{size:"small",children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}}),e(i,{align:"baseline",get children(){return[e(r,{size:"large",children:"按钮"}),e(r,{size:"small",children:"按钮"}),e(r,{children:"按钮"}),e(r,{children:"按钮"})]}})]}})}function d(l){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",div:"div"},c(),l.components);return[e(n.h1,{id:"space-间距",children:"Space 间距"}),`
`,e(n.h1,{id:"何时使用",children:"何时使用"}),`
`,e(n.p,{children:"避免组件紧贴在一起，拉开统一的空间。"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"适合行内元素的水平间距。"}),`
`,e(n.li,{children:"可以设置各种水平对齐方式。"}),`
`]}}),`
`,e(n.h1,{id:"基础使用",children:"基础使用"}),`
`,e(t,{path:"space/basic",get code(){return e(s,{})},get children(){return e(n.div,{})}}),`
`,e(n.h1,{id:"间隙大小",children:"间隙大小"}),`
`,e(n.p,{children:"使用 size 设置元素之间的间距，预设了 small、middle、large 三种尺寸，"}),`
`,e(t,{path:"space/size",get code(){return e(u,{})},get children(){return e(n.div,{})}}),`
`,e(n.h1,{id:"api",children:"API"}),`
`,e(h,{data:[{property:"direction",des:"间距方向",type:"vertical | horizontal",default:"horizontal"},{property:"size",des:"间距大小",type:"large | small | middle",default:"small"},{property:"wrap",des:"是否自动换行，仅在 horizontal 时有效",type:"boolean",default:"false"}]})]}function f(l={}){const{wrapper:n}=Object.assign({},c(),l.components);return n?e(n,a(l,{get children(){return e(d,l)}})):d(l)}export{f as default};
