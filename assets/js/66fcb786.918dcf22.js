"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7597],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(g,s(s({ref:t},u),{},{components:a})):r.createElement(g,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9554:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),s=["components"],o={title:"Quickstart - Vowpal Wabbit and LightGBM",hide_title:!0,status:"stable"},l="Vowpal Wabbit and LightGBM for a Regression Problem",p={unversionedId:"Explore Algorithms/Regression/Quickstart - Vowpal Wabbit and LightGBM",id:"Explore Algorithms/Regression/Quickstart - Vowpal Wabbit and LightGBM",title:"Quickstart - Vowpal Wabbit and LightGBM",description:"This notebook shows how to build simple regression models by using",source:"@site/docs/Explore Algorithms/Regression/Quickstart - Vowpal Wabbit and LightGBM.md",sourceDirName:"Explore Algorithms/Regression",slug:"/Explore Algorithms/Regression/Quickstart - Vowpal Wabbit and LightGBM",permalink:"/SynapseML/docs/Explore Algorithms/Regression/Quickstart - Vowpal Wabbit and LightGBM",draft:!1,tags:[],version:"current",frontMatter:{title:"Quickstart - Vowpal Wabbit and LightGBM",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Train Regressor",permalink:"/SynapseML/docs/Explore Algorithms/Regression/Quickstart - Train Regressor"},next:{title:"Quickstart - Isolation Forests",permalink:"/SynapseML/docs/Explore Algorithms/Anomaly Detection/Quickstart - Isolation Forests"}},u={},c=[{value:"Prepare Dataset",id:"prepare-dataset",level:2},{value:"Baseline - Spark MLlib Linear Regressor",id:"baseline---spark-mllib-linear-regressor",level:2},{value:"Vowpal Wabbit",id:"vowpal-wabbit",level:2},{value:"LightGBM",id:"lightgbm",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vowpal-wabbit-and-lightgbm-for-a-regression-problem"},"Vowpal Wabbit and LightGBM for a Regression Problem"),(0,i.kt)("p",null,"This notebook shows how to build simple regression models by using\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit"},"Vowpal Wabbit (VW)")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/LightGBM"},"LightGBM")," with SynapseML.\nWe also compare the results with\n",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/ml-classification-regression.html#linear-regression"},"Spark MLlib Linear Regression"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import math\nfrom synapse.ml.train import ComputeModelStatistics\nfrom synapse.ml.vw import VowpalWabbitRegressor, VowpalWabbitFeaturizer\nfrom synapse.ml.lightgbm import LightGBMRegressor\nimport numpy as np\nimport pandas as pd\nfrom pyspark.ml.feature import VectorAssembler\nfrom pyspark.ml.regression import LinearRegression\nfrom sklearn.datasets import fetch_california_housing\n")),(0,i.kt)("h2",{id:"prepare-dataset"},"Prepare Dataset"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/datasets/real_world.html#california-housing-dataset"},(0,i.kt)("em",{parentName:"a"},"California Housing")," dataset"),".\nThe data was derived from the 1990 U.S. census. It consists of 20640 entries with 8 features.\nWe use ",(0,i.kt)("inlineCode",{parentName:"p"},"sklearn.datasets")," module to download it easily, then split the set into training and testing by 75/25."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'california = fetch_california_housing()\n\nfeature_cols = ["f" + str(i) for i in range(california.data.shape[1])]\nheader = ["target"] + feature_cols\ndf = spark.createDataFrame(\n    pd.DataFrame(\n        data=np.column_stack((california.target, california.data)), columns=header\n    )\n).repartition(1)\nprint("Dataframe has {} rows".format(df.count()))\ndisplay(df.limit(10).toPandas())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train_data, test_data = df.randomSplit([0.75, 0.25], seed=42)\n")),(0,i.kt)("p",null,"Following is the summary of the training set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"display(train_data.summary().toPandas())\n")),(0,i.kt)("p",null,"Plot feature distributions over different target values (house prices in our case)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'features = train_data.columns[1:]\nvalues = train_data.drop("target").toPandas()\nncols = 5\nnrows = math.ceil(len(features) / ncols)\n')),(0,i.kt)("h2",{id:"baseline---spark-mllib-linear-regressor"},"Baseline - Spark MLlib Linear Regressor"),(0,i.kt)("p",null,"First, we set a baseline performance by using Linear Regressor in Spark MLlib."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'featurizer = VectorAssembler(inputCols=feature_cols, outputCol="features")\nlr_train_data = featurizer.transform(train_data)["target", "features"]\nlr_test_data = featurizer.transform(test_data)["target", "features"]\ndisplay(lr_train_data.limit(10).toPandas())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# By default, `maxIter` is 100. Other params you may want to change include: `regParam`, `elasticNetParam`, etc.\nlr = LinearRegression(labelCol="target")\n\nlr_model = lr.fit(lr_train_data)\nlr_predictions = lr_model.transform(lr_test_data)\n\ndisplay(lr_predictions.limit(10).toPandas())\n')),(0,i.kt)("p",null,"We evaluate the prediction result by using ",(0,i.kt)("inlineCode",{parentName:"p"},"synapse.ml.train.ComputeModelStatistics")," which returns four metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mean_squared_error"},"MSE (Mean Squared Error)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Root-mean-square_deviation"},"RMSE (Root Mean Squared Error)")," = sqrt(MSE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Coefficient_of_determination"},"R Squared")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mean_absolute_error"},"MAE (Mean Absolute Error)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'metrics = ComputeModelStatistics(\n    evaluationMetric="regression", labelCol="target", scoresCol="prediction"\n).transform(lr_predictions)\n\nresults = metrics.toPandas()\nresults.insert(0, "model", ["Spark MLlib - Linear Regression"])\ndisplay(results)\n')),(0,i.kt)("h2",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,i.kt)("p",null,"Perform VW-style feature hashing. Many types (numbers, string, bool, map of string to (number, string)) are supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'vw_featurizer = VowpalWabbitFeaturizer(inputCols=feature_cols, outputCol="features")\n\nvw_train_data = vw_featurizer.transform(train_data)["target", "features"]\nvw_test_data = vw_featurizer.transform(test_data)["target", "features"]\ndisplay(vw_train_data.limit(10).toPandas())\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vowpalWabbit/vowpal_wabbit/wiki/Command-Line-Arguments"},"VW wiki")," for command line arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Use the same number of iterations as Spark MLlib\'s Linear Regression (=100)\nargs = "--holdout_off --loss_function quantile -l 0.004 -q :: --power_t 0.3"\nvwr = VowpalWabbitRegressor(labelCol="target", passThroughArgs=args, numPasses=100)\n\n# To reduce number of partitions (which will effect performance), use `vw_train_data.repartition(1)`\nvw_train_data_2 = vw_train_data.repartition(1).cache()\nprint(vw_train_data_2.count())\nvw_model = vwr.fit(vw_train_data_2.repartition(1))\nvw_predictions = vw_model.transform(vw_test_data)\n\ndisplay(vw_predictions.limit(10).toPandas())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'metrics = ComputeModelStatistics(\n    evaluationMetric="regression", labelCol="target", scoresCol="prediction"\n).transform(vw_predictions)\n\nvw_result = metrics.toPandas()\nvw_result.insert(0, "model", ["Vowpal Wabbit"])\nresults = results.append(vw_result, ignore_index=True)\n\ndisplay(results)\n')),(0,i.kt)("h2",{id:"lightgbm"},"LightGBM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'lgr = LightGBMRegressor(\n    objective="quantile",\n    alpha=0.2,\n    learningRate=0.3,\n    numLeaves=31,\n    labelCol="target",\n    numIterations=100,\n)\n\nrepartitioned_data = lr_train_data.repartition(1).cache()\nprint(repartitioned_data.count())\nlg_model = lgr.fit(repartitioned_data)\nlg_predictions = lg_model.transform(lr_test_data)\n\ndisplay(lg_predictions.limit(10))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'metrics = ComputeModelStatistics(\n    evaluationMetric="regression", labelCol="target", scoresCol="prediction"\n).transform(lg_predictions)\n\nlg_result = metrics.toPandas()\nlg_result.insert(0, "model", ["LightGBM"])\n\nresults = results.append(lg_result, ignore_index=True)\n\ndisplay(results)\n')),(0,i.kt)("p",null,"Following figure shows the actual-vs.-prediction graphs of the results:"),(0,i.kt)("img",{width:"1102",alt:"lr-vw-lg",src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/regression_comparison.png"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from matplotlib.colors import ListedColormap, Normalize\nfrom matplotlib.cm import get_cmap\nimport matplotlib.pyplot as plt\n\nf, axes = plt.subplots(nrows, ncols, sharey=True, figsize=(30, 10))\nf.tight_layout()\nyy = [r["target"] for r in train_data.select("target").collect()]\nfor irow in range(nrows):\n    axes[irow][0].set_ylabel("target")\n    for icol in range(ncols):\n        try:\n            feat = features[irow * ncols + icol]\n            xx = values[feat]\n            axes[irow][icol].scatter(xx, yy, s=10, alpha=0.25)\n            axes[irow][icol].set_xlabel(feat)\n            axes[irow][icol].get_yaxis().set_ticks([])\n        except IndexError:\n            f.delaxes(axes[irow][icol])\n\ncmap = get_cmap("YlOrRd")\n\ntarget = np.array(test_data.select("target").collect()).flatten()\nmodel_preds = [\n    ("Spark MLlib Linear Regression", lr_predictions),\n    ("Vowpal Wabbit", vw_predictions),\n    ("LightGBM", lg_predictions),\n]\n\nf, axes = plt.subplots(1, len(model_preds), sharey=True, figsize=(18, 6))\nf.tight_layout()\n\nfor i, (model_name, preds) in enumerate(model_preds):\n    preds = np.array(preds.select("prediction").collect()).flatten()\n    err = np.absolute(preds - target)\n\n    norm = Normalize()\n    clrs = cmap(np.asarray(norm(err)))[:, :-1]\n    axes[i].scatter(preds, target, s=60, c=clrs, edgecolors="#888888", alpha=0.75)\n    axes[i].plot((0, 60), (0, 60), line, color="#888888")\n    axes[i].set_xlabel("Predicted values")\n    if i == 0:\n        axes[i].set_ylabel("Actual values")\n    axes[i].set_title(model_name)\n')))}d.isMDXComponent=!0}}]);