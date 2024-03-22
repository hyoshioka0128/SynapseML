"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[91895],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38547:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={title:"Quickstart - Classification using VW-native Format",hide_title:!0,status:"stable"},o=void 0,s={unversionedId:"Explore Algorithms/Vowpal Wabbit/Quickstart - Classification using VW-native Format",id:"version-1.0.1/Explore Algorithms/Vowpal Wabbit/Quickstart - Classification using VW-native Format",title:"Quickstart - Classification using VW-native Format",description:"SparkML Vector input",source:"@site/versioned_docs/version-1.0.1/Explore Algorithms/Vowpal Wabbit/Quickstart - Classification using VW-native Format.md",sourceDirName:"Explore Algorithms/Vowpal Wabbit",slug:"/Explore Algorithms/Vowpal Wabbit/Quickstart - Classification using VW-native Format",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Vowpal Wabbit/Quickstart - Classification using VW-native Format",draft:!1,tags:[],version:"1.0.1",frontMatter:{title:"Quickstart - Classification using VW-native Format",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Classification using SparkML Vectors",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Vowpal Wabbit/Quickstart - Classification using SparkML Vectors"},next:{title:"SAR Algorithm",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Other Algorithms/Smart Adaptive Recommendations"}},l={},p=[{value:"SparkML Vector input",id:"sparkml-vector-input",level:2},{value:"Read dataset",id:"read-dataset",level:4},{value:"Reformat into VW-native format",id:"reformat-into-vw-native-format",level:4},{value:"Split the dataset into train and test",id:"split-the-dataset-into-train-and-test",level:4},{value:"Model Training",id:"model-training",level:4},{value:"Model Prediction",id:"model-prediction",level:4}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("img",{width:"200",src:"https://mmlspark.blob.core.windows.net/graphics/emails/vw-blue-dark-orange.svg"}),(0,r.kt)("h1",{id:"binary-classification-with-vowpalwabbit-on-criteo-dataset"},"Binary Classification with VowpalWabbit on Criteo Dataset"),(0,r.kt)("h2",{id:"sparkml-vector-input"},"SparkML Vector input"),(0,r.kt)("h4",{id:"read-dataset"},"Read dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark.sql.types as T\nfrom pyspark.sql import functions as F\n\nschema = T.StructType(\n    [\n        T.StructField("label", T.IntegerType(), True),\n        *[T.StructField("i" + str(i), T.IntegerType(), True) for i in range(1, 13)],\n        *[T.StructField("s" + str(i), T.StringType(), True) for i in range(26)],\n    ]\n)\n\ndf = (\n    spark.read.format("csv")\n    .option("header", False)\n    .option("delimiter", "\\t")\n    .schema(schema)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/criteo_day0_1k.csv.gz")\n)\n# print dataset basic info\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,r.kt)("h4",{id:"reformat-into-vw-native-format"},"Reformat into VW-native format"),(0,r.kt)("p",null,"See VW ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit/wiki/Input-format"},"docs")," for format details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# create VW string format\ncols = [\n    F.col("label"),\n    F.lit("|"),\n    *[F.col("i" + str(i)) for i in range(1, 13)],\n    *[F.col("s" + str(i)) for i in range(26)],\n]\n\ndf = df.select(F.concat_ws(" ", *cols).alias("value"))\ndisplay(df)\n')),(0,r.kt)("h4",{id:"split-the-dataset-into-train-and-test"},"Split the dataset into train and test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"train, test = df.randomSplit([0.6, 0.4], seed=1)\n")),(0,r.kt)("h4",{id:"model-training"},"Model Training"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitGeneric\n\n# number of partitions determines data parallelism\ntrain = train.repartition(2)\n\nmodel = VowpalWabbitGeneric(\n    numPasses=5,\n    useBarrierExecutionMode=False,\n    passThroughArgs="--holdout_off --loss_function logistic --link logistic",\n).fit(train)\n')),(0,r.kt)("h4",{id:"model-prediction"},"Model Prediction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'predictions = model.transform(test)\n\npredictions = predictions.withColumn(\n    "prediction", F.col("prediction").cast("double")\n).withColumn("label", F.substring("value", 0, 1).cast("double"))\n\ndisplay(predictions)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\nmetrics = ComputeModelStatistics(\n    evaluationMetric="classification", labelCol="label", scoredLabelsCol="prediction"\n).transform(predictions)\ndisplay(metrics)\n')))}d.isMDXComponent=!0}}]);