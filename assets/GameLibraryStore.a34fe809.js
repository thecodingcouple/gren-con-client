import{i as p}from"./index.9d592a9b.js";const w=p({id:"GameLibraryStore",state:()=>({username:"townsean",games:[],gameDetails:{}}),getters:{count:t=>t.games.length,roundedCount:t=>Math.round(t.games.length/10)*10},actions:{async loadGameLibrary(){const t=`https://boardgamegeek.com/xmlapi2/collection?username=${this.username}&own=1`;await fetch(t).then(n=>n.text()).then(n=>{const i=new DOMParser().parseFromString(n,"text/xml"),l=Array.from(i.getElementsByTagName("item"));this.games=l.map(a=>{let r=Array.from(a.children).find(o=>o.nodeName=="name").textContent,m=Array.from(a.children).find(o=>o.nodeName=="image").textContent,d=a.getAttribute("objectid");return{name:r,id:d,imageUrl:m}})})},async getGameDetails(t){if(this.gameDetails[t])return this.gameDetails[t];const n=`https://boardgamegeek.com/xmlapi2/thing?id=${t}`,s=await fetch(n).then(i=>i.text()).then(i=>{const a=new DOMParser().parseFromString(i,"text/xml"),r=Array.from(a.getElementsByTagName("item"))[0];if(!r)return;const m=Array.from(r.children).find(e=>e.nodeName=="description").textContent,o=Array.from(r.children).find(e=>e.nodeName=="name").getAttribute("value"),h=Array.from(r.children).find(e=>e.nodeName=="image").textContent,y=Array.from(r.children).find(e=>e.nodeName=="playingtime").getAttribute("value"),u=Array.from(r.children).find(e=>e.nodeName=="minplayers").getAttribute("value"),N=Array.from(r.children).find(e=>e.nodeName=="maxplayers").getAttribute("value"),f=Array.from(a.getElementsByTagName("link")).filter(e=>e.getAttribute("type")=="boardgamecategory").map(e=>e.getAttribute("value"));return{name:o,imageUrl:h,minPlayers:u,maxPlayers:N,playingTime:y,description:m,categories:f}});return this.gameDetails[t]=s,this.gameDetails[t]}}});export{w as u};
