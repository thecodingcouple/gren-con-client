import{_ as c,o as n,c as s,a as e,t as r,F as l,g as i}from"./index.9d592a9b.js";const u="https://www.gren-con.com",f={data:()=>({events:[],profile:{}}),created(){this.profile=this.fetchData("/my-profile"),this.events=this.fetchData("/my-events")},methods:{async fetchData(t){const a=`${u}${t}`;return(await fetch(a)).json()}}},h=e("h2",null,"My Events",-1);function p(t,a,d,m,_,v){return n(),s(l,null,[e("main",null,[e("h1",null,r(t.profile),1)]),e("section",null,[h,e("ul",null,[(n(!0),s(l,null,i(t.events,o=>(n(),s("li",null,r(o),1))),256))])])],64)}var w=c(f,[["render",p]]);export{w as default};
