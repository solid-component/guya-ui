import{b as k,L as H,E as M,G as T,m as y,H as z,c as r,I,i as d,K as L,S as P,a as A,d as m,N as f,O as x,P as q,R as G,t as p,T as O,U as R,g as v,M as $}from"./index-uQuxrWgA.js";import{S as g}from"./index-BlbwEe2l.js";import{C as _}from"./component-preview-Cxi2OSdl.js";const W=()=>{const i=k({transition:"all .1s"}),e=k({scale:.7,opacity:0}),s=k({scale:1,opacity:1});return{panelTransition:()=>({enterActiveClass:i,enterClass:e,enterToClass:s,exitActiveClass:i,exitClass:s,exitToClass:e})}},l=i=>i+"px",j=i=>({footerBg:"transparent",headerBg:i.colorBgElevated,titleLineHeight:i.lineHeightHeading5,titleFontSize:i.fontSizeHeading5,contentBg:i.colorBgElevated,titleColor:i.colorTextHeading,contentPadding:i.wireframe?0:`${l(i.paddingMD)} ${l(i.paddingContentHorizontalLG)}`,headerPadding:i.wireframe?`${l(i.padding)} ${l(i.paddingLG)}`:0,headerBorderBottom:i.wireframe?`${l(i.lineWidth)} ${i.lineType} ${i.colorSplit}`:"none",headerMarginBottom:i.wireframe?0:i.marginXS,bodyPadding:i.wireframe?i.paddingLG:0,footerPadding:i.wireframe?`${l(i.paddingXS)} ${l(i.padding)}`:0,footerBorderTop:i.wireframe?`${l(i.lineWidth)} ${i.lineType} ${i.colorSplit}`:"none",footerBorderRadius:i.wireframe?`0 0 ${l(i.borderRadiusLG)} ${l(i.borderRadiusLG)}`:0,footerMarginTop:i.wireframe?0:i.marginSM,confirmBodyPadding:i.wireframe?`${l(i.padding*2)} ${l(i.padding*2)} ${l(i.paddingLG)}`:0,confirmIconMarginInlineEnd:i.wireframe?i.margin:i.marginSM,confirmBtnsMarginTop:i.wireframe?i.marginLG:i.marginSM}),X=i=>{const e={...i,...j(i)},s=e.padding,t=e.fontSizeHeading5,a=e.lineHeightHeading5;return{modalHeaderHeight:e.calc(e.calc(a).mul(t).equal()).add(e.calc(s).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()}},K=i=>({[`.${i.componentCls}-close-icon`]:{position:"absolute",right:0,top:i.calc(i.modalHeaderHeight).sub(i.modalCloseBtnSize).div(2).equal()+"px",insetInlineEnd:i.calc(i.modalHeaderHeight).sub(i.modalCloseBtnSize).div(2).equal()+"px",zIndex:i.calc(i.zIndexPopupBase).add(10).equal()+"px",padding:0,color:i.modalCloseIconColor,fontWeight:i.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:i.borderRadiusSM+"px",width:i.modalCloseBtnSize+"px",height:i.modalCloseBtnSize+"px",border:0,outline:0,cursor:"pointer",transition:`color ${i.motionDurationMid}, background-color ${i.motionDurationMid}`,"&:hover":{color:i.modalCloseIconHoverColor,backgroundColor:i.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:i.colorBgTextActive}}}),Q=()=>H("modal",i=>(console.log("tt",i),M({position:"absolute",inset:0,overflow:"auto",...K(i),[`&.${i.componentCls}-is-centered`]:{textAlign:"center","&:before":{display:"inline-block",content:"''",height:"100%",verticalAlign:"middle"},[`.${i.componentCls}`]:{top:0,margin:0,display:"inline-block",verticalAlign:"middle"}},[`.${i.componentCls}`]:{zIndex:i.zIndexPopupBase,position:"relative",background:"#fff","pointer-events":"auto","border-radius":"2px",top:"100px",padding:"16px",margin:"0 auto",width:"300px",textAlign:"start","margin-bottom":"24px","box-shadow":"0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"}})),X);var U=p("<div><div><div>"),Y=p("<footer>");const b=i=>{const[e,s]=T(i,["children","maskClosable"]),t=y({appendToBody:!0,mask:!0,maskClosable:!0},i),{panelTransition:a}=W();let h;const F=z(Q),N=()=>O(F(),x({"modal-wrap":!0,"modal-is-centered":i.centered}));return r(G,y(t,{get popup(){return r(I,y({destroyOnClose:!0,onClick:c=>{var o;h&&!(c.target===h||h.contains(c.target))&&t.maskClosable&&((o=i.onClose)==null||o.call(i,c))}},t,{panelTransition:a,get children(){var c=U(),o=c.firstChild,u=o.firstChild,B=h;return typeof B=="function"?R(B,o):h=o,d(o,r(L,i),u),d(u,()=>e.children),d(o,r(P,{get fallback(){return(()=>{var n=Y();return d(n,r(g,{get onClick(){return s.onClose},children:"取消"}),null),d(n,r(g,{type:"primary",children:"确认"}),null),A(()=>m(n,k({paddingTop:"16px",textAlign:"right",gap:"12px","button+button":{marginLeft:"12px"}}))),n})()},get children(){return[r(f,{get when(){return i.footer},get children(){return i.footer}}),r(f,{get when(){return i.footer===null},children:null})]}}),null),A(n=>{var D=N(),w=x({modal:!0}),C=k({fontSize:"14px",wordBreak:"break-word"});return D!==n.e&&m(c,n.e=D),n.t=q(o,w,n.t),C!==n.a&&m(u,n.a=C),n},{e:void 0,t:void 0,a:void 0}),c}}))}}))};var E=p("<div>对话框"),J=p("<div>"),V=p("<div>标题");function Z(){const[i,e]=v(!1),[s,t]=v(!1);return(()=>{var a=J();return d(a,r(g,{type:"primary",onClick:()=>e(!0),children:"打开对话框"}),null),d(a,r(g,{type:"primary",onClick:()=>t(!0),children:"居中打开对话框"}),null),d(a,r(b,{get open(){return i()},get title(){return V()},onClose:()=>e(!1),get children(){return E()}}),null),d(a,r(b,{centered:!0,get open(){return s()},onClose:()=>t(!1),get children(){return E()}}),null),a})()}function S(i){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span"},$(),i.components),{ComponentSource:s}=e;return s||ee("ComponentSource",!0),[r(e.h1,{id:"对话框",children:"对话框"}),`
`,r(e.h2,{id:"基础使用",children:"基础使用"}),`
`,r(_,{path:"modal/basic",get code(){return r(Z,{})},get children(){return r(s,{get children(){return r(e.pre,{className:"shiki shiki-themes vitesse-light vitesse-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#121212",color:"#393a34","--shiki-dark":"#dbd7caee"},tabIndex:"0",get children(){return r(e.code,{get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" Button"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" Modal"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),r(e.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"guya-ui"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" createSignal"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),r(e.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"solid-js"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" createStore"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),r(e.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"solid-js/store"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,r(e.span,{className:"line"}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"export"}),r(e.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:" function"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" Basic"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ["}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"open"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" setOpen"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"]"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" createSignal"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"false"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:");"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ["}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"centered"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" setCentered"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"]"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" createSignal"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"false"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:");"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"  return"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ("})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"    <"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" type"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"="}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"primary"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" onClick"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" setOpen"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"true"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")}>"})]}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"        打开对话框"})}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" type"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"="}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"primary"}),r(e.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" onClick"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" setCentered"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"true"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")}>"})]}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"        居中打开对话框"})}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Modal"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" open"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"open"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()}"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" title"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={<"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"}),r(e.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"标题"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"</"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">}"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" onClose"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" setOpen"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"false"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")}>"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        <"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"}),r(e.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"对话框"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"</"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Modal"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Modal"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" centered"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" open"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"centered"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()}"}),r(e.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" onClose"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),r(e.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" setCentered"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"false"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")}>"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        <"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"}),r(e.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"对话框"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"</"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),r(e.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Modal"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"    </"}),r(e.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"  );"})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"}"})}}),`
`,r(e.span,{className:"line"})]}})}})}})}})]}function ne(i={}){const{wrapper:e}=Object.assign({},$(),i.components);return e?r(e,y(i,{get children(){return r(S,i)}})):S(i)}function ee(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ne as default};