"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[53608],{63169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(67294),l=a(39960),n=a(95999),c=a(10833),m=a(7452);function s(e){let{year:t,posts:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function i(e){let{years:t}=e;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(s,e)))))))}function o(e){let{archive:t}=e;const a=(0,n.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),l=(0,n.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const t=e.reduceRight(((e,t)=>{var a;const r=t.metadata.date.split("-")[0],l=null!=(a=e.get(r))?a:[];return e.set(r,[t,...l])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return r.createElement(r.Fragment,null,r.createElement(c.d,{title:a,description:l}),r.createElement(m.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},a),r.createElement("p",{className:"hero__subtitle"},l))),r.createElement("main",null,s.length>0&&r.createElement(i,{years:s}))))}}}]);