import{i as t,c as y,I as x,t as n}from"./index-DBPcm_A9.js";var $=n("<table><thead><tr></tr></thead><tbody>"),c=n("<th>"),P=n("<tr><td></td><td></td><td></td><td></td><td>");const h=[{title:"属性名"},{title:"说明"},{title:"类型"},{title:"默认值"},{title:"版本"}];function m(g){return(()=>{var l=$(),a=l.firstChild,b=a.firstChild,_=a.nextSibling;return l.style.setProperty("width","100%"),l.style.setProperty("text-align","left"),l.style.setProperty("border","1px solid rgb(5 5 5 / 6%)"),l.style.setProperty("border-radius","4px"),t(b,y(x,{each:h,children:e=>(()=>{var r=c();return r.style.setProperty("background","rgb(0 0 0 / 2%)"),r.style.setProperty("padding-block",".5rem"),t(r,()=>e.title),r})()})),t(_,y(x,{get each(){return g.data},children:e=>(()=>{var r=P(),d=r.firstChild,i=d.nextSibling,p=i.nextSibling,s=p.nextSibling,o=s.nextSibling;return d.style.setProperty("padding","12px 24px"),t(d,()=>e.property),i.style.setProperty("padding","12px 24px"),t(i,()=>e.des),p.style.setProperty("color","#c41d7f"),p.style.setProperty("padding","12px 24px"),t(p,()=>e.type),s.style.setProperty("padding","12px 24px"),t(s,()=>e.default||"-"),o.style.setProperty("padding","12px 24px"),t(o,()=>e.version),r})()})),l})()}export{m as T};
