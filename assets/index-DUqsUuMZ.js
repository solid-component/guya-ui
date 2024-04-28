import{g as z,c as B,u as H,i as g,a as L,b as f,S as G,t as p,d as c,e as h,s as T,f as R,h as M,j as P,k as u,l as o,m as I,n as m,o as x,p as F}from"./index-CEbFxx_N.js";import{B as b}from"./index-IslPpieZ.js";import{S as N}from"./index-Da_Ll017.js";const W=(e,a=!1)=>({boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize+"px",lineHeight:e.lineHeight,listStyle:"none",fontFamily:a?"inherit":e.fontFamily}),_=e=>({[`.${e.componentCls}-header`]:{display:"flex",justifyContent:"center",minHeight:e.headerHeight+"px",marginBottom:"-1px",paddingInline:e.cardPaddingBase+"px",borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`.${e.componentCls}-header-wrapper`]:{width:"100%",display:"flex",alignItems:"center"},[`.${e.componentCls}-header-title`]:{flex:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},[`.${e.componentCls}-header-extra`]:{}}),j=()=>z("card",e=>{const a={...e,cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12,headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText};return B({...W(e),..._(a),position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG+"px",[`.${e.componentCls}-body`]:{padding:a.cardPaddingBase+"px"},[`&.${e.componentCls}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`},[`&:not(.${e.componentCls}-bordered)`]:{boxShadow:e.boxShadowTertiary},[`&.${e.componentCls}-hoverable:hover`]:{position:"relative",zIndex:1,boxShadow:a.cardShadow}})});var E=p("<div><div><div></div><div>"),O=p("<div><div>");const S=e=>{const a=H(j),v=()=>M(a(),c({"card-hoverable":e.hoverable,"card-bordered":e.bordered,card:!0}),e.classList,e.class);return(()=>{var i=O(),s=i.firstChild;return g(i,L(G,{get when(){return e.title||e.extra},get children(){var r=E(),n=r.firstChild,d=n.firstChild,l=d.nextSibling;return g(d,()=>e.title),g(l,()=>e.extra),f(t=>{var C={...c({"card-header":!0})},$={...c({"card-header-wrapper":!0})},y={...c({"card-header-title":!0})},w={...c({"card-header-extra":!0})};return t.e=h(r,C,t.e),t.t=h(n,$,t.t),t.a=h(d,y,t.a),t.o=h(l,w,t.o),t},{e:void 0,t:void 0,a:void 0,o:void 0}),r}}),s),g(s,()=>e.children),f(r=>{var n=e.style,d=v(),l={...c({"card-body":!0})};return r.e=T(i,n,r.e),d!==r.t&&R(i,r.t=d),r.a=h(s,l,r.a),r},{e:void 0,t:void 0,a:void 0}),i})()};var A=F("<div><div>guya-ui 构建你的Solid组件库</div><div>设计精美的组件，您可以将其复制和粘贴到您的应用程序中。可访问。可定制。开源。</div><div>");function J(){const e=P();return(()=>{var a=A(),v=a.firstChild,i=v.nextSibling,s=i.nextSibling;return u(s,o(b,{type:"primary",onClick:()=>{e("components/button")},children:"开始使用"}),null),u(s,o(b,{onClick:()=>window.open("https://github.com/solid-component","_blank"),children:"Github"}),null),u(a,o(N,{style:{"margin-top":"50px"},get children(){return[o(S,{style:{width:"300px"},hoverable:!0,children:"One"}),o(S,{style:{width:"300px"},hoverable:!0,get extra(){return o(b,{type:"link",children:"更多"})},children:"Two"}),o(S,{style:{width:"300px"},hoverable:!0,bordered:!0,children:"Three"})]}}),null),I(r=>{var n=m({display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"}),d=m({fontSize:"3.75rem",fontWeight:700}),l=m({fontSize:"1.25rem",color:"hsl(240 3.8% 46.1%)"});return n!==r.e&&x(a,r.e=n),d!==r.t&&x(v,r.t=d),l!==r.a&&x(i,r.a=l),r},{e:void 0,t:void 0,a:void 0}),a})()}export{J as default};