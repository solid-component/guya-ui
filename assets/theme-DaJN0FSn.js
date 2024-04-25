import{M as o,c as e,m as d}from"./index-CRTjpkgI.js";function c(s){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...o(),...s.components},{ComponentPreview:i,ComponentSource:n,Table:a}=r;return i||l("ComponentPreview"),n||l("ComponentSource"),a||l("Table"),[e(r.h1,{children:"Theme 主题"}),`
`,e(r.p,{children:`guya-ui 默认提供主题, guya-ui中的主题参考了antd的主题，将 Design Token 拆解为 Seed Token、Map Token 和 Alias Token 三部分。
这三组 Token 并不是简单的分组，而是一个三层的派生关系，由 Seed Token 派生 Map Token，再由 Map Token 派生 Alias Token。
在大部分情况下，使用 Seed Token 就可以满足定制主题的需要`}),`
`,e(r.h1,{children:"更换主题色"}),`
`,e(r.p,{get children(){return[`通过 theme 中的 token 属性，可以修改一些主题变量
`,e(r.a,{href:"https://ant-design.antgroup.com/docs/react/customize-theme#design-token",children:"基本概念"})]}}),`
`,e(r.p,{children:"通过Provider,可以对同一组件分别设置不同的主题色"}),`
`,e(i,{name:"theme",demo:"basic",get children(){return e(n,{get children(){return e(r.pre,{className:"shiki shiki-themes vitesse-light vitesse-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#121212",color:"#393a34","--shiki-dark":"#dbd7caee"},tabIndex:"0",get children(){return e(r.code,{get children(){return[e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#A0ADA0","--shiki-dark":"#758575DD"},children:'// import { setTheme } from "@/app";'})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" seedTokenStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"@/app"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" ThemeProvider"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"guya-ui"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" createSignal"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"solid-js"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"import"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" createStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" }"}),e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:" from"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"solid-js/store"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line"}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"export"}),e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:" function"}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" Basic"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ["}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"_"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" setSeedToken"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"]"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" seedTokenStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ["}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"innel"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" setInnel"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"]"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" createStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"({"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"    colorPrimary"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"#F77234"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"  });"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ["}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"current"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" setCurrent"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"]"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" createSignal"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"("}),e(r.span,{style:{color:"#2F798A","--shiki-dark":"#4C9A91"},children:"0"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:");"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ["}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"store"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" setStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"]"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" createStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"({"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"    colorPrimary"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"red"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"  });"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:"  const"}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" color"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ="}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ()"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"    if"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ("}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"current"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()"}),e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:" ==="}),e(r.span,{style:{color:"#2F798A","--shiki-dark":"#4C9A91"},children:" 0"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"      return"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"red"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"    }"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"    if"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ("}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"current"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()"}),e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:" ==="}),e(r.span,{style:{color:"#2F798A","--shiki-dark":"#4C9A91"},children:" 1"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"      return"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"orange"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"    }"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"    return"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"gold"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:";"})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"  };"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"  return"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" ("})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"    <"}),e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"        onClick"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"          setSeedToken"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"({"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"            colorPrimary"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"#165DFF"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"            colorError"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"#A1151E"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"          });"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        }}"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      >"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"        修改全局主题"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"ThemeProvider"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"        value"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={{"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"          seedToken"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" store"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"          prefixCls"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"demo"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        }}"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      >"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"          onClick"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" {"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"            setCurrent"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"(("}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"current"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"()"}),e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:" +"}),e(r.span,{style:{color:"#2F798A","--shiki-dark":"#4C9A91"},children:" 1"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:")"}),e(r.span,{style:{color:"#AB5959","--shiki-dark":"#CB7676"},children:" %"}),e(r.span,{style:{color:"#2F798A","--shiki-dark":"#4C9A91"},children:" 3"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:");"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"            setStore"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"({"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"              colorPrimary"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:" color"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"(),"})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"            });"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"          }}"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        >"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"          改变主题"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        </"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" type"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"="}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"primary"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"}),e(r.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"主题色"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"</"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"ThemeProvider"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"          value"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={{"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"            seedToken"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" innel"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"          }}"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        >"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"          <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" type"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"="}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"primary"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"}),e(r.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"主题色"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"</"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        </"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"ThemeProvider"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"ThemeProvider"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"        type"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"="}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"primary"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:"        onClick"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"={()"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:" =>"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#59873A","--shiki-dark":"#80A665"},children:"          setInnel"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"({"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"            colorPrimary"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:":"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:' "'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"#9FDB1D"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:","})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"          })"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"        }"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      >"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"        点击更改主题色"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      <"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" type"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"="}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#B56959","--shiki-dark":"#C98A7D"},children:"primary"}),e(r.span,{style:{color:"#B5695999","--shiki-dark":"#C98A7D99"},children:'"'}),e(r.span,{style:{color:"#B07D48","--shiki-dark":"#BD976A"},children:" danger"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#393A34","--shiki-dark":"#DBD7CAEE"},children:"        主题色"})}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"      </"}),e(r.span,{style:{color:"#998418","--shiki-dark":"#B8A965"},children:"Button"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return[e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"    </"}),e(r.span,{style:{color:"#1E754F","--shiki-dark":"#4D9375"},children:"div"}),e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:">"})]}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"  );"})}}),`
`,e(r.span,{className:"line",get children(){return e(r.span,{style:{color:"#999999","--shiki-dark":"#666666"},children:"}"})}}),`
`,e(r.span,{className:"line"})]}})}})}})}}),`
`,e(r.h1,{children:"属性"}),`
`,e(a,{data:[{property:"prefix",des:"设置组件前缀",type:"string",default:"h"}]}),`
`,e(r.h1,{children:"SeedToken"}),`
`,e(r.p,{get children(){return e(r.a,{href:"https://ant-design.antgroup.com/docs/react/customize-theme#seedtoken",children:"参考"})}})]}function k(s={}){const{wrapper:r}={...o(),...s.components};return r?e(r,d(s,{get children(){return e(c,s)}})):c(s)}function l(s,r){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};