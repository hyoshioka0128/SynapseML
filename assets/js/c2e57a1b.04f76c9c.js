"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[26685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(83117),l=(n(67294),n(3905));const a={title:"Text Explainers",hide_title:!0,status:"stable"},i=void 0,o={unversionedId:"Explore Algorithms/Responsible AI/Text Explainers",id:"version-1.0.2/Explore Algorithms/Responsible AI/Text Explainers",title:"Text Explainers",description:"Interpretability - Text Explainers",source:"@site/versioned_docs/version-1.0.2/Explore Algorithms/Responsible AI/Text Explainers.md",sourceDirName:"Explore Algorithms/Responsible AI",slug:"/Explore Algorithms/Responsible AI/Text Explainers",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/Responsible AI/Text Explainers",draft:!1,tags:[],version:"1.0.2",frontMatter:{title:"Text Explainers",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Tabular Explainers",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/Responsible AI/Tabular Explainers"},next:{title:"Image Explainers",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/Responsible AI/Image Explainers"}},s={},p=[{value:"Interpretability - Text Explainers",id:"interpretability---text-explainers",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"interpretability---text-explainers"},"Interpretability - Text Explainers"),(0,l.kt)("p",null,"In this example, we use LIME and Kernel SHAP explainers to explain a text classification model."),(0,l.kt)("p",null,"First we import the packages and define some UDFs and a plotting function we will need later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"from pyspark.sql.functions import *\nfrom pyspark.sql.types import *\nfrom pyspark.ml import Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.ml.functions import vector_to_array\nfrom synapse.ml.explainers import *\nfrom synapse.ml.featurize.text import TextFeaturizer\nfrom synapse.ml.core.platform import *\n\nvec_access = udf(lambda v, i: float(v[i]), FloatType())\n")),(0,l.kt)("p",null,"Load training data, and convert rating to binary label."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'data = (\n    spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/BookReviewsFromAmazon10K.parquet")\n    .withColumn("label", (col("rating") > 3).cast(LongType()))\n    .select("label", "text")\n    .cache()\n)\n\ndisplay(data)\n')),(0,l.kt)("p",null,"We train a text classification model, and randomly sample 10 rows to explain."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'train, test = data.randomSplit([0.60, 0.40])\n\npipeline = Pipeline(\n    stages=[\n        TextFeaturizer(\n            inputCol="text",\n            outputCol="features",\n            useStopWordsRemover=True,\n            useIDF=True,\n            minDocFreq=20,\n            numFeatures=1 << 16,\n        ),\n        LogisticRegression(maxIter=100, regParam=0.005, labelCol="label", featuresCol="features"),\n    ]\n)\n\nmodel = pipeline.fit(train)\n\nprediction = model.transform(test)\n\nexplain_instances = prediction.orderBy(rand()).limit(10)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'def plotConfusionMatrix(df, label, prediction, classLabels):\n    from synapse.ml.plot import confusionMatrix\n    import matplotlib.pyplot as plt\n\n    fig = plt.figure(figsize=(4.5, 4.5))\n    confusionMatrix(df, label, prediction, classLabels)\n    if running_on_synapse():\n        plt.show()\n    else:\n        display(fig)\n\n\nplotConfusionMatrix(model.transform(test), "label", "prediction", [0, 1])\n')),(0,l.kt)("p",null,"First we use the LIME text explainer to explain the model's predicted probability for a given observation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'lime = TextLIME(\n    model=model,\n    outputCol="weights",\n    inputCol="text",\n    targetCol="probability",\n    targetClasses=[1],\n    tokensCol="tokens",\n    samplingFraction=0.7,\n    numSamples=2000,\n)\n\nlime_results = (\n    lime.transform(explain_instances)\n    .select("tokens", "weights", "r2", "probability", "text")\n    .withColumn("probability", vec_access("probability", lit(1)))\n    .withColumn("weights", vector_to_array(col("weights").getItem(0)))\n    .withColumn("r2", vec_access("r2", lit(0)))\n    .withColumn("tokens_weights", arrays_zip("tokens", "weights"))\n)\n\ndisplay(lime_results.select("probability", "r2", "tokens_weights", "text").orderBy(col("probability").desc()))\n')),(0,l.kt)("p",null,"Then we use the Kernel SHAP text explainer to explain the model's predicted probability for a given observation."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notice that we drop the base value from the SHAP output before displaying the SHAP values. The base value is the model output for an empty string.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'shap = TextSHAP(\n    model=model,\n    outputCol="shaps",\n    inputCol="text",\n    targetCol="probability",\n    targetClasses=[1],\n    tokensCol="tokens",\n    numSamples=5000,\n)\n\nshap_results = (\n    shap.transform(explain_instances)\n    .select("tokens", "shaps", "r2", "probability", "text")\n    .withColumn("probability", vec_access("probability", lit(1)))\n    .withColumn("shaps", vector_to_array(col("shaps").getItem(0)))\n    .withColumn("shaps", slice(col("shaps"), lit(2), size(col("shaps"))))\n    .withColumn("r2", vec_access("r2", lit(0)))\n    .withColumn("tokens_shaps", arrays_zip("tokens", "shaps"))\n)\n\ndisplay(shap_results.select("probability", "r2", "tokens_shaps", "text").orderBy(col("probability").desc()))\n')))}m.isMDXComponent=!0}}]);