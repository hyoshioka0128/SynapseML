"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[94330],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>d});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),m=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=m(e.components);return t.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=m(r),d=n,f=h["".concat(i,".").concat(d)]||h[d]||p[d]||s;return r?t.createElement(f,o(o({ref:a},c),{},{components:r})):t.createElement(f,o({ref:a},c))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<s;m++)o[m]=r[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7627:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var t=r(83117),n=(r(67294),r(3905));const s={title:"CyberML",hide_title:!0,sidebar_label:"CyberML"},o="CyberML",l={unversionedId:"Explore Algorithms/Other Algorithms/Cyber ML",id:"Explore Algorithms/Other Algorithms/Cyber ML",title:"CyberML",description:"access anomalies: complementaccess.py",source:"@site/docs/Explore Algorithms/Other Algorithms/Cyber ML.md",sourceDirName:"Explore Algorithms/Other Algorithms",slug:"/Explore Algorithms/Other Algorithms/Cyber ML",permalink:"/SynapseML/docs/next/Explore Algorithms/Other Algorithms/Cyber ML",draft:!1,tags:[],version:"current",frontMatter:{title:"CyberML",hide_title:!0,sidebar_label:"CyberML"},sidebar:"docs",previous:{title:"SAR Algorithm",permalink:"/SynapseML/docs/next/Explore Algorithms/Other Algorithms/Smart Adaptive Recommendations"},next:{title:"Quickstart - Anomalous Access Detection",permalink:"/SynapseML/docs/next/Explore Algorithms/Other Algorithms/Quickstart - Anomalous Access Detection"}},i={},m=[{value:"access anomalies: complement_access.py",id:"access-anomalies-complement_accesspy",level:2},{value:"feature engineering: indexers.py",id:"feature-engineering-indexerspy",level:2},{value:"feature engineering: scalers.py",id:"feature-engineering-scalerspy",level:2},{value:"access anomalies: collaborative_filtering.py",id:"access-anomalies-collaborative_filteringpy",level:2}],c={toc:m};function p(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cyberml"},"CyberML"),(0,n.kt)("h2",{id:"access-anomalies-complement_accesspy"},"access anomalies: ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/python/synapse/ml/cyber/anomaly/complement_access.py"},"complement_access.py")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://databricks.com/session_eu19/cybermltoolkit-anomaly-detection-as-a-scalable-generic-service-over-apache-spark"},"Talk at European Spark Conference 2019")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://resnet.microsoft.com/video/42395"},"(Internal Microsoft) Talk at MLADS November 2018")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://resnet.microsoft.com/video/43618"},"(Internal Microsoft) Talk at MLADS June 2019"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/python/synapse/ml/cyber/anomaly/complement_access.py"},"ComplementAccessTransformer"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nGiven a dataframe, it returns a new dataframe comprised of access patterns sampled from\nthe set of possible access patterns not present in the original dataframe.\nIn other words, it returns a sample from the complement set.")),(0,n.kt)("h2",{id:"feature-engineering-indexerspy"},"feature engineering: ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/python/synapse/ml/cyber/feature/indexers.py"},"indexers.py")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.indexers.IdIndexer"},"IdIndexer"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Estimator.html"},"Estimator"),".\nGiven a dataframe, it creates an IdIndexerModel (described next) for categorical features. The model\nmaps each partition and column seen in the given dataframe to an ID,\nfor each partition or one consecutive range for all partition and column values."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.indexers.IdIndexerModel"},"IdIndexerModel"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nGiven a dataframe maps each partition and column field to a consecutive integer ID.\nPartitions or column values not encountered in the estimator are mapped to 0.\nThe model can operate in two modes, either create consecutive integer ID independently"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.indexers.MultiIndexer"},"MultiIndexer"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Estimator.html"},"Estimator"),".\nUses multiple IdIndexers to generate a MultiIndexerModel (described next) for categorical features. The model\ncontains multiple IdIndexers for multiple partitions and columns."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.indexers.MultiIndexerModel"},"MultiIndexerModel"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nGiven a dataframe maps each partition and column field to a consecutive integer ID.\nPartitions or column values not encountered in the estimator are mapped to 0.\nThe model can operate in two modes, either create consecutive integer ID independently")),(0,n.kt)("h2",{id:"feature-engineering-scalerspy"},"feature engineering: ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/python/synapse/ml/cyber/feature/scalers.py"},"scalers.py")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.scalers.StandardScalarScaler"},"StandardScalarScaler"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Estimator.html"},"Estimator"),".\nGiven a dataframe it creates a StandardScalarScalerModel (described next) which normalizes\nany given dataframe according to the mean and standard deviation calculated on the\ndataframe given to the estimator."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.scalers.StandardScalarScalerModel"},"StandardScalarScalerModel"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nGiven a dataframe with a value column x, the transformer changes its value as follows:\nx'=(x-mean)/stddev.  That is, if the transformer is given the same dataframe the estimator\nwas given then the value column will have a mean of 0.0 and a standard deviation of 1.0."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.scalers.LinearScalarScaler"},"LinearScalarScaler"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Estimator.html"},"Estimator"),".\nGiven a dataframe it creates a LinearScalarScalerModel (described next) which normalizes\nany given dataframe according to the minimum and maximum values calculated on the\ndataframe given to the estimator."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.feature.html#synapse.ml.cyber.feature.scalers.LinearScalarScalerModel"},"LinearScalarScalerModel"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nGiven a dataframe with a value column x, the transformer changes its value such that\nif the transformer is given the same dataframe the estimator\nwas given then the value column will be scaled linearly to the given ranges.")),(0,n.kt)("h2",{id:"access-anomalies-collaborative_filteringpy"},"access anomalies: ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/python/synapse/ml/cyber/anomaly/collaborative_filtering.py"},"collaborative_filtering.py")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.anomaly.html#synapse.ml.cyber.anomaly.collaborative_filtering.AccessAnomaly"},"AccessAnomaly"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Estimator.html"},"Estimator"),".\nGiven a dataframe, the estimator generates an AccessAnomalyModel (described next). The model\ncan detect anomalous access of users to resources where the access\nis outside of the user's or resources's profile. For instance, a user from HR accessing\na resource from Finance. This result is based solely on access patterns rather than explicit features.\nInternally, the code is based on Collaborative Filtering as implemented in Spark, using\nMatrix Factorization with Alternating Least Squares."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.anomaly.html#synapse.ml.cyber.anomaly.collaborative_filtering.AccessAnomalyModel"},"AccessAnomalyModel"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nGiven a dataframe the transformer computes a value between (-inf, inf) where positive\nvalues indicate an anomaly score. Anomaly scores are computed to have a mean of 1.0\nand a standard deviation of 1.0 over the original dataframe given to the estimator."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.anomaly.html#synapse.ml.cyber.anomaly.collaborative_filtering.ModelNormalizeTransformer"},"ModelNormalizeTransformer"),"\nis a SparkML ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/api/java/index.html?org/apache/spark/ml/Transformer.html"},"Transformer"),".\nThis transformer is used internally by AccessAnomaly to normalize a model to generate\nanomaly scores with mean 0.0 and standard deviation of 1.0."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/1.0.3/pyspark/synapse.ml.cyber.anomaly.html#synapse.ml.cyber.anomaly.collaborative_filtering.AccessAnomalyConfig"},"AccessAnomalyConfig"),"\ncontains the default values for AccessAnomaly.")))}p.isMDXComponent=!0}}]);