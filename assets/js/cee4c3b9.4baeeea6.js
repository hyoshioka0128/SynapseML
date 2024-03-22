"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[25844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,y=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return r?a.createElement(y,s(s({ref:t},m),{},{components:r})):a.createElement(y,s({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},30877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const o={title:"Quickstart - Random Search",hide_title:!0,status:"stable"},s="HyperParameterTuning - Fighting Breast Cancer",i={unversionedId:"Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search",id:"version-1.0.3/Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search",title:"Quickstart - Random Search",description:"This tutorial shows how SynapseML can be used to identify the best combination of hyperparameters for your chosen classifiers, ultimately resulting in more accurate and reliable models. In order to demonstrate this, we'll show how to perform distributed randomized grid search hyperparameter tuning to build a model to identify breast cancer.",source:"@site/versioned_docs/version-1.0.3/Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search.md",sourceDirName:"Explore Algorithms/Hyperparameter Tuning",slug:"/Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search",permalink:"/SynapseML/docs/Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search",draft:!1,tags:[],version:"1.0.3",frontMatter:{title:"Quickstart - Random Search",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"HyperOpt",permalink:"/SynapseML/docs/Explore Algorithms/Hyperparameter Tuning/HyperOpt"},next:{title:"Image Transformations",permalink:"/SynapseML/docs/Explore Algorithms/OpenCV/Image Transformations"}},l={},p=[{value:"1 - Set up dependencies",id:"1---set-up-dependencies",level:2},{value:"2 - Find the best model using AutoML",id:"2---find-the-best-model-using-automl",level:2},{value:"3 - Evaluate the model",id:"3---evaluate-the-model",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hyperparametertuning---fighting-breast-cancer"},"HyperParameterTuning - Fighting Breast Cancer"),(0,n.kt)("p",null,"This tutorial shows how SynapseML can be used to identify the best combination of hyperparameters for your chosen classifiers, ultimately resulting in more accurate and reliable models. In order to demonstrate this, we'll show how to perform distributed randomized grid search hyperparameter tuning to build a model to identify breast cancer. "),(0,n.kt)("h2",{id:"1---set-up-dependencies"},"1 - Set up dependencies"),(0,n.kt)("p",null,"Start by importing pandas and setting up our Spark session."),(0,n.kt)("p",null,"Next, read the data and split it into tuning and test sets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/BreastCancer.parquet"\n).cache()\ntune, test = data.randomSplit([0.80, 0.20])\ntune.limit(10).toPandas()\n')),(0,n.kt)("p",null,"Define the models to be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.automl import TuneHyperparameters\nfrom synapse.ml.train import TrainClassifier\nfrom pyspark.ml.classification import (\n    LogisticRegression,\n    RandomForestClassifier,\n    GBTClassifier,\n)\n\nlogReg = LogisticRegression()\nrandForest = RandomForestClassifier()\ngbt = GBTClassifier()\nsmlmodels = [logReg, randForest, gbt]\nmmlmodels = [TrainClassifier(model=model, labelCol="Label") for model in smlmodels]\n')),(0,n.kt)("h2",{id:"2---find-the-best-model-using-automl"},"2 - Find the best model using AutoML"),(0,n.kt)("p",null,"Import SynapseML's AutoML classes from ",(0,n.kt)("inlineCode",{parentName:"p"},"synapse.ml.automl"),".\nSpecify the hyperparameters using the ",(0,n.kt)("inlineCode",{parentName:"p"},"HyperparamBuilder"),". Add either ",(0,n.kt)("inlineCode",{parentName:"p"},"DiscreteHyperParam")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"RangeHyperParam")," hyperparameters. ",(0,n.kt)("inlineCode",{parentName:"p"},"TuneHyperparameters")," will randomly choose values from a uniform distribution:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.automl import *\n\nparamBuilder = (\n    HyperparamBuilder()\n    .addHyperparam(logReg, logReg.regParam, RangeHyperParam(0.1, 0.3))\n    .addHyperparam(randForest, randForest.numTrees, DiscreteHyperParam([5, 10]))\n    .addHyperparam(randForest, randForest.maxDepth, DiscreteHyperParam([3, 5]))\n    .addHyperparam(gbt, gbt.maxBins, RangeHyperParam(8, 16))\n    .addHyperparam(gbt, gbt.maxDepth, DiscreteHyperParam([3, 5]))\n)\nsearchSpace = paramBuilder.build()\n# The search space is a list of params to tuples of estimator and hyperparam\nprint(searchSpace)\nrandomSpace = RandomSpace(searchSpace)\n")),(0,n.kt)("p",null,"Next, run TuneHyperparameters to get the best model."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'bestModel = TuneHyperparameters(\n    evaluationMetric="accuracy",\n    models=mmlmodels,\n    numFolds=2,\n    numRuns=len(mmlmodels) * 2,\n    parallelism=1,\n    paramSpace=randomSpace.space(),\n    seed=0,\n).fit(tune)\n')),(0,n.kt)("h2",{id:"3---evaluate-the-model"},"3 - Evaluate the model"),(0,n.kt)("p",null,"We can view the best model's parameters and retrieve the underlying best model pipeline"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"print(bestModel.getBestModelInfo())\nprint(bestModel.getBestModel())\n")),(0,n.kt)("p",null,"We can score against the test set and view metrics."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\n\nprediction = bestModel.transform(test)\nmetrics = ComputeModelStatistics().transform(prediction)\nmetrics.limit(10).toPandas()\n")))}d.isMDXComponent=!0}}]);