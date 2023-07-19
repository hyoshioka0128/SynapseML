"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1210],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6852:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],s={title:"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",description:"MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",keywords:["machine learning"]},c=void 0,l={permalink:"/SynapseML/blog/2019/06/01/MMLSpark Unifying Machine Learning Ecosystems at Massive Scales",source:"@site/blog/2019-06-01-MMLSpark Unifying Machine Learning Ecosystems at Massive Scales.md",title:"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",description:"MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",date:"2019-06-01T00:00:00.000Z",formattedDate:"June 1, 2019",tags:[],readingTime:.645,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",description:"MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales",keywords:["machine learning"]},prevItem:{title:"Dear Spark developers: Welcome to Azure Cognitive Services",permalink:"/SynapseML/blog/2019/08/24/Welcome to Azure Cognitive Services"},nextItem:{title:"Publication - Flexible and Scalable Deep Learning with MMLSpark",permalink:"/SynapseML/blog/2018/04/01/Flexible and Scalable Deep Learning with MMLSpark"}},p={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We introduce Microsoft Machine Learning for Apache Spark (MMLSpark), an ecosystem of enhancements that expand the Apache Spark distributed computing library. The library tackles problems in Deep Learning, Micro-Service Orchestration, Gradient Boosting, Model Interpretability, and other areas of modern computation. "," Furthermore, we present a novel system called Spark Serving that allows users to run any Apache Spark program as a distributed, submillisecond latency web service backed by their existing Spark Cluster. All MMLSpark contributions have the same API to enable simple composition across frameworks and usage across batch, streaming, and RESTful web serving scenarios on static, elastic, or serverless clusters. We showcase MMLSpark by creating a method for deep object detection capable of learning without human labeled data and demonstrate its effectiveness for Snow Leopard conservation."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/publication/mmlspark-unifying-machine-learning-ecosystems-at-massive-scales/"},"Read More")))}f.isMDXComponent=!0}}]);