import{_ as D}from"./YunCard.vue_vue_type_script_setup_true_lang-BpvS834H.js";import{_ as F}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-CebgZosO.js";import{aD as j,aE as P,d as A,o as e,b as S,g as _,t as T,am as z,an as I,e as M,u as W,W as H,y as O,N as G,q as Y,A as J,j as K,ak as Q,s as U,c,w as a,r as X,i as u,ao as Z,f as t,F as V,m as tt,n as et,v as st,al as nt}from"./app-CftBLVN4.js";import{_ as ot}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-B2zv5Aao.js";import{u as at}from"./helper-BHg7iUBE.js";function rt(g={primary:"#0078E7"}){const s=j(),m=new P("#999999"),f=new P(g.primary);return{tags:s,getTagStyle:o=>{const r=Array.from(s.value).map(([v,C])=>C.count),y=Math.max(...r),n=Math.min(...r),h=y-n,p=(o-n)/h;return{"--yun-tag-color":m.mix(f,p*100).toString(),fontSize:`${p*36+12}px`}}}}const lt={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},it={"inline-flex":""},ct={"inline-flex":"",text:"xs"},ut=A({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(g){return(s,m)=>(e(),S("span",lt,[_("span",it,"#"+T(s.title),1),_("span",ct,"["+T(s.count)+"]",1)]))}}),mt={class:"yun-text-light",text:"center",p:"2"},pt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},vt=A({__name:"tags",setup(g){z([I({"@type":"CollectionPage"})]);const s=M(),m=W(),f=H(),{t:d}=O(),o=G(),{tags:r,getTagStyle:y}=rt({primary:f.value.colors.primary}),n=Y(()=>s.query.tag||""),h=J(),p=Y(()=>h.postList.filter(i=>i.tags?typeof i.tags=="string"?i.tags===n.value:i.tags.includes(n.value):!1)),v=K(),{show:C}=at(v);function B(l){m.push({query:{tag:l}}),C()}const E=Q(o);return(l,i)=>{const $=nt,w=ot,L=ut,b=U("RouterView"),N=F,R=D;return e(),S(V,null,[l.$slots["sidebar-child"]?(e(),c($,{key:0},{default:a(()=>[X(l.$slots,"sidebar-child")]),_:3})):(e(),c($,{key:1})),u(b,null,{default:a(({Component:q})=>[(e(),c(Z(q),null,{"main-header":a(()=>[u(w,{title:t(E)||t(d)("menu.tags"),icon:t(o).icon||"i-ri-tag-line",color:t(o).color,"page-title-class":t(o).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":a(()=>[_("div",mt,T(t(d)("counter.tags",Array.from(t(r)).length)),1),_("div",pt,[(e(!0),S(V,null,tt(Array.from(t(r)).sort(),([x,k])=>(e(),c(L,{key:x,title:x,count:k.count,style:et(t(y)(k.count)),onClick:_t=>B(x.toString())},null,8,["title","count","style","onClick"]))),128))]),u(b)]),"main-nav-before":a(()=>[n.value?(e(),c(R,{key:0,ref_key:"collapse",ref:v,m:"t-4",w:"full"},{default:a(()=>[u(w,{title:n.value,icon:"i-ri-hashtag"},null,8,["title"]),u(N,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:p.value},null,8,["posts"])]),_:1},512)):st("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{vt as default};
