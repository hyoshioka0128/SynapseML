"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[10978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(83117),i=(a(67294),a(3905));const r={title:"Quickstart - Vowpal Wabbit on Text Data",hide_title:!0,status:"stable"},o="Twitter Sentiment Classification using Vowpal Wabbit in SynapseML",l={unversionedId:"Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data",id:"version-1.0.1/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data",title:"Quickstart - Vowpal Wabbit on Text Data",description:"In this example, we show how to build a sentiment classification model using Vowpal Wabbit (VW) in SynapseML. The data set we use to train and evaluate the model is Sentiment140 twitter data. First, we import a few packages that we need.",source:"@site/versioned_docs/version-1.0.1/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data.md",sourceDirName:"Explore Algorithms/Classification",slug:"/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data",draft:!1,tags:[],version:"1.0.1",frontMatter:{title:"Quickstart - Vowpal Wabbit on Text Data",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Vowpal Wabbit on Tabular Data",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data"},next:{title:"Quickstart - Data Cleaning",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Regression/Quickstart - Data Cleaning"}},s={},p=[{value:"Data Preparation",id:"data-preparation",level:2},{value:"VW SynapseML Training",id:"vw-synapseml-training",level:2},{value:"Model Performance Evaluation",id:"model-performance-evaluation",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twitter-sentiment-classification-using-vowpal-wabbit-in-synapseml"},"Twitter Sentiment Classification using Vowpal Wabbit in SynapseML"),(0,i.kt)("p",null,"In this example, we show how to build a sentiment classification model using Vowpal Wabbit (VW) in SynapseML. The data set we use to train and evaluate the model is ",(0,i.kt)("a",{parentName:"p",href:"http://help.sentiment140.com/for-students/?source=post_page---------------------------"},"Sentiment140")," twitter data. First, we import a few packages that we need."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport urllib.request\nimport pandas as pd\nfrom zipfile import ZipFile\nfrom pyspark.sql.functions import udf, rand, when, col\nfrom pyspark.ml import Pipeline\nfrom pyspark.ml.feature import CountVectorizer, RegexTokenizer\nfrom synapse.ml.vw import VowpalWabbitClassifier\nfrom synapse.ml.train import ComputeModelStatistics\nfrom pyspark.mllib.evaluation import BinaryClassificationMetrics\nimport matplotlib.pyplot as plt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# URL to download the sentiment140 dataset and data file names\nDATA_URL = "https://mmlspark.blob.core.windows.net/publicwasb/twittersentimenttrainingandtestdata.zip"\nTRAIN_FILENAME = "training.1600000.processed.noemoticon.csv"\nTEST_FILENAME = "testdata.manual.2009.06.14.csv"\n# Folder for storing the downloaded data\nDATA_FOLDER = "data"\n# Data column names\nCOL_NAMES = ["label", "id", "date", "query_string", "user", "text"]\n# Text encoding type of the data\nENCODING = "iso-8859-1"\n')),(0,i.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"http://help.sentiment140.com/for-students/?source=post_page---------------------------"},"Sentiment140")," twitter data which originated from a Stanford research project to train and evaluate VW classification model on Spark. The same dataset has been used in a previous ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/MachineLearningSamples-TwitterSentimentPrediction"},"Azure Machine Learning sample")," on twitter sentiment prediction. Before using the data to build the classification model, we first download and clean up the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def download_data(url, data_folder=DATA_FOLDER, filename="downloaded_data.zip"):\n    """Download and extract data from url"""\n\n    data_dir = "./" + DATA_FOLDER\n    if not os.path.exists(data_dir):\n        os.makedirs(data_dir)\n    downloaded_filepath = os.path.join(data_dir, filename)\n    print("Downloading data...")\n    urllib.request.urlretrieve(url, downloaded_filepath)\n    print("Extracting data...")\n    zipfile = ZipFile(downloaded_filepath)\n    zipfile.extractall(data_dir)\n    zipfile.close()\n    print("Finished data downloading and extraction.")\n\n\ndownload_data(DATA_URL)\n')),(0,i.kt)("p",null,"Let's read the training data into a Spark DataFrame."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df_train = pd.read_csv(\n    os.path.join(".", DATA_FOLDER, TRAIN_FILENAME),\n    header=None,\n    names=COL_NAMES,\n    encoding=ENCODING,\n)\ndf_train = spark.createDataFrame(df_train, verifySchema=False)\n')),(0,i.kt)("p",null,"We can take a look at the training data and check how many samples it has. We should see that there are 1.6 million samples in the training data. There are 6 fields in the training data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"label: the sentiment of the tweet (0.0 = negative, 2.0 = neutral, 4.0 = positive)"),(0,i.kt)("li",{parentName:"ul"},"id: the id of the tweet"),(0,i.kt)("li",{parentName:"ul"},"date: the date of the tweet"),(0,i.kt)("li",{parentName:"ul"},"query_string: The query used to extract the data. If there is no query, then this value is NO_QUERY."),(0,i.kt)("li",{parentName:"ul"},"user: the user that tweeted"),(0,i.kt)("li",{parentName:"ul"},"text: the text of the tweet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"df_train.limit(10).toPandas()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("Number of training samples: ", df_train.count())\n')),(0,i.kt)("p",null,"Before training the model, we randomly permute the data to mix negative and positive samples. This is helpful for properly training online learning algorithms like VW. To speed up model training, we use a subset of the data to train the model. If training with the full training set, typically you will see better performance of the model on the test set. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df_train = (\n    df_train.orderBy(rand())\n    .limit(100000)\n    .withColumn("label", when(col("label") > 0, 1.0).otherwise(0.0))\n    .select(["label", "text"])\n)\n')),(0,i.kt)("h2",{id:"vw-synapseml-training"},"VW SynapseML Training"),(0,i.kt)("p",null,"Now we are ready to define a pipeline which consists of feature engineering steps and the VW model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Specify featurizers\ntokenizer = RegexTokenizer(inputCol="text", outputCol="words")\n\ncount_vectorizer = CountVectorizer(inputCol="words", outputCol="features")\n\n# Define VW classification model\nargs = "--loss_function=logistic --quiet --holdout_off"\nvw_model = VowpalWabbitClassifier(\n    featuresCol="features", labelCol="label", passThroughArgs=args, numPasses=10\n)\n\n# Create a pipeline\nvw_pipeline = Pipeline(stages=[tokenizer, count_vectorizer, vw_model])\n')),(0,i.kt)("p",null,"With the prepared training data, we can fit the model pipeline as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"vw_trained = vw_pipeline.fit(df_train)\n")),(0,i.kt)("h2",{id:"model-performance-evaluation"},"Model Performance Evaluation"),(0,i.kt)("p",null,"After training the model, we evaluate the performance of the model using the test set which is manually labeled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df_test = pd.read_csv(\n    os.path.join(".", DATA_FOLDER, TEST_FILENAME),\n    header=None,\n    names=COL_NAMES,\n    encoding=ENCODING,\n)\ndf_test = spark.createDataFrame(df_test, verifySchema=False)\n')),(0,i.kt)("p",null,"We only use positive and negative tweets in the test set to evaluate the model, since our model is a binary classification model trained with only positive and negative tweets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("Number of test samples before filtering: ", df_test.count())\ndf_test = (\n    df_test.filter(col("label") != 2.0)\n    .withColumn("label", when(col("label") > 0, 1.0).otherwise(0.0))\n    .select(["label", "text"])\n)\nprint("Number of test samples after filtering: ", df_test.count())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Make predictions\npredictions = vw_trained.transform(df_test)\npredictions.limit(10).toPandas()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Compute model performance metrics\nmetrics = ComputeModelStatistics(\n    evaluationMetric="classification", labelCol="label", scoredLabelsCol="prediction"\n).transform(predictions)\nmetrics.toPandas()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Utility class for plotting ROC curve (https://stackoverflow.com/questions/52847408/pyspark-extract-roc-curve)\nclass CurveMetrics(BinaryClassificationMetrics):\n    def __init__(self, *args):\n        super(CurveMetrics, self).__init__(*args)\n\n    def get_curve(self, method):\n        rdd = getattr(self._java_model, method)().toJavaRDD()\n        points = []\n        for row in rdd.collect():\n            points += [(float(row._1()), float(row._2()))]\n        return points\n\n\npreds = predictions.select("label", "probability").rdd.map(\n    lambda row: (float(row["probability"][1]), float(row["label"]))\n)\nroc_points = CurveMetrics(preds).get_curve("roc")\n\n# Plot ROC curve\nfig = plt.figure()\nx_val = [x[0] for x in roc_points]\ny_val = [x[1] for x in roc_points]\nplt.title("ROC curve on test set")\nplt.xlabel("False positive rate")\nplt.ylabel("True positive rate")\nplt.plot(x_val, y_val)\n# Use display() if you\'re on Azure Databricks or you can do plt.show()\nplt.show()\n')),(0,i.kt)("p",null,"You should see an ROC curve like the following after the above cell is executed. "),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/20047467/69376052-9b0a3380-0c77-11ea-9266-11aa44350cbe.png",width:"400",height:"320"}))}c.isMDXComponent=!0}}]);