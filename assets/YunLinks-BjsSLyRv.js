import{j as d,k as m,l as f,d as p,o as l,b as i,g as s,F as h,m as u,n as g,t as c,f as k,_ as y}from"./app-CftBLVN4.js";import{o as v}from"./index-CvZMZL0e.js";function b(a,n=!1){const o=d();return m(()=>a,async()=>{let e;if(typeof a=="string"){if(!f)return;e=await fetch(a).then(r=>r.json())||[]}else e=a;o.value=n?Array.from(e).sort(()=>Math.random()-.5):e},{immediate:!0}),{data:o}}const w={class:"links"},x={class:"link-items"},B=["href","title"],I={class:"link-left"},D=["src","alt"],E={class:"link-info",m:"l-2"},j={class:"link-blog",font:"serif black"},z={class:"link-desc"},C=p({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(a){const n=a,{data:o}=b(n.links,n.random);function e(r){v(r,n.errorImg)}return(r,F)=>(l(),i("div",w,[s("ul",x,[(l(!0),i(h,null,u(k(o),(t,_)=>(l(),i("li",{key:_,class:"link-item",style:g(`--primary-color: ${t.color}`)},[s("a",{class:"link-url",p:"x-4 y-2",href:t.url,title:t.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",I,[s("img",{class:"link-avatar",width:"64",height:"64",w:"16",h:"16",loading:"lazy",src:t.avatar,alt:t.name,onError:e},null,40,D)]),s("div",E,[s("div",j,c(t.blog),1),s("div",z,c(t.desc),1)])],8,B)],4))),128))])]))}}),A=y(C,[["__scopeId","data-v-64ff5004"]]);export{A as _};
