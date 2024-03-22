"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[52804],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return t?n.createElement(b,o(o({ref:a},m),{},{components:t})):n.createElement(b,o({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(83117),r=(t(67294),t(3905));const i={title:"VW",hide_title:!0,sidebar_label:"About"},o=void 0,s={unversionedId:"Explore Algorithms/Vowpal Wabbit/Overview",id:"version-1.0.1/Explore Algorithms/Vowpal Wabbit/Overview",title:"VW",description:"Overview",source:"@site/versioned_docs/version-1.0.1/Explore Algorithms/Vowpal Wabbit/Overview.md",sourceDirName:"Explore Algorithms/Vowpal Wabbit",slug:"/Explore Algorithms/Vowpal Wabbit/Overview",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Vowpal Wabbit/Overview",draft:!1,tags:[],version:"1.0.1",frontMatter:{title:"VW",hide_title:!0,sidebar_label:"About"},sidebar:"docs",previous:{title:"Image Transformations",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/OpenCV/Image Transformations"},next:{title:"Multi-class classification",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Vowpal Wabbit/Multi-class classification"}},l={},p=[{value:"Overview",id:"overview",level:3},{value:"Advantages of VowpalWabbit",id:"advantages-of-vowpalwabbit",level:3},{value:"Limitations of VowpalWabbit on Spark",id:"limitations-of-vowpalwabbit-on-spark",level:3},{value:"Usage",id:"usage",level:3},{value:"Hyper-parameter tuning",id:"hyper-parameter-tuning",level:3},{value:"Architecture",id:"architecture",level:3}],m={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{width:"200",src:"https://mmlspark.blob.core.windows.net/graphics/vw-blue-dark-orange.svg"}),(0,r.kt)("h1",{id:"vowpalwabbit-on-apache-spark"},"VowpalWabbit on Apache Spark"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit"},"VowpalWabbit")," (VW) is a machine learning system that\npushes the frontier of machine learning with techniques such as online, hashing, allreduce,\nreductions, learning2search, active, and interactive learning.\nVowpalWabbit is a popular choice in ad-tech due to its speed and cost efficacy.\nFurthermore it includes many advances in the area of reinforcement learning (for instance, contextual bandits)."),(0,r.kt)("h3",{id:"advantages-of-vowpalwabbit"},"Advantages of VowpalWabbit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Composability"),": VowpalWabbit models can be incorporated into existing\nSparkML Pipelines, and used for batch, streaming, and serving workloads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Small footprint"),": VowpalWabbit memory consumption is rather small and can be controlled through '-b 18' or the setNumBits method.\nThis option determines the size of the model (2^18 * some_constant, in this example)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feature Interactions"),": Feature interactions (quadratic, cubic,... terms, for instance) are created on-the-fly within the most inner\nlearning loop in VW.\nInteractions can be specified by using the -q parameter and passing the first character of the namespaces that should be ",(0,r.kt)("em",{parentName:"li"},"interacted"),".\nThe VW namespace concept is mapped to Spark using columns. The column name is used as namespace name, thus one sparse or dense Spark ML vector corresponds to the features of a single namespace.\nTo allow passing of multiple namespaces, the VW estimator (classifier or regression) exposes a property called ",(0,r.kt)("em",{parentName:"li"},"additionalFeatures"),". Users can pass an array of column names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple deployment"),": all native dependencies are packaged into a single jars (including boost and zlib)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VowpalWabbit command line arguments"),": users can pass VW command line arguments to control the learning process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VowpalWabbit binary models")," To start the training, users can supply an initial VowpalWabbit model, which can be produced outside of\nVW on Spark, by invoking ",(0,r.kt)("em",{parentName:"li"},"setInitialModel")," and passing the model as a byte array. Similarly, users can access the binary model by invoking\n",(0,r.kt)("em",{parentName:"li"},"getModel")," on the trained model object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java-based hashing")," VW's version of murmur-hash was reimplemented in Java (praise to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jackdoe"},"JackDoe"),")\nproviding a major performance improvement compared to passing input strings through JNI and hashing in C++."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross language")," VowpalWabbit on Spark is available on Spark, PySpark, and SparklyR.")),(0,r.kt)("h3",{id:"limitations-of-vowpalwabbit-on-spark"},"Limitations of VowpalWabbit on Spark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux and CentOS only")," The native binaries included with the published jar are built Linux and CentOS only.\nWe're working on creating a more portable version by statically linking Boost and lib C++."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limited Parsing")," Features implemented in the native VW parser (ngrams, skips, ...) are not yet implemented in\nVowpalWabbitFeaturizer.")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In PySpark, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"VowpalWabbitClassifier")," via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitClassifier\nmodel = (VowpalWabbitClassifier(numPasses=5, args="--holdout_off --loss_function logistic")\n            .fit(train))\n')),(0,r.kt)("p",null,"Similarly, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"VowpalWabbitRegressor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitRegressor\nmodel = (VowpalWabbitRegressor(args="--holdout_off --loss_function quantile -q :: -l 0.1")\n            .fit(train))\n')),(0,r.kt)("p",null,"You can pass command line parameters to VW via the args parameter, as documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vowpalWabbit/vowpal_wabbit/wiki/Command-Line-Arguments"},"VW Wiki"),"."),(0,r.kt)("p",null,"For an end to end application, check out the VowpalWabbit ",(0,r.kt)("a",{parentName:"p",href:"../Quickstart%20-%20Classification,%20Quantile%20Regression,%20and%20Regression"},"notebook\nexample"),"."),(0,r.kt)("h3",{id:"hyper-parameter-tuning"},"Hyper-parameter tuning"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Common parameters can also be set through methods enabling the use of SparkMLs ParamGridBuilder and CrossValidator (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure/mmlspark/blob/master/src/test/scala/com/microsoft/azure/synapse/ml/vw/VerifyVowpalWabbitClassifier.scala#L29"},"example"),"). If\nthe same parameters are passed through the ",(0,r.kt)("em",{parentName:"li"},"args"),' property (for instance, args="-l 0.2" and setLearningRate(0.5)) the ',(0,r.kt)("em",{parentName:"li"},"args")," value will\ntake precedence.\nparameter")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"learningRate"),(0,r.kt)("li",{parentName:"ul"},"numPasses"),(0,r.kt)("li",{parentName:"ul"},"numBits"),(0,r.kt)("li",{parentName:"ul"},"l1"),(0,r.kt)("li",{parentName:"ul"},"l2"),(0,r.kt)("li",{parentName:"ul"},"powerT"),(0,r.kt)("li",{parentName:"ul"},"interactions"),(0,r.kt)("li",{parentName:"ul"},"ignoreNamespaces")),(0,r.kt)("h3",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"VowpalWabbit on Spark uses an optimized JNI layer to efficiently support Spark.\nJava bindings can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit/blob/master/java/src/main/c%2B%2B/jni_spark_vw_generated.h"},"VW GitHub repo"),"."),(0,r.kt)("p",null,"VW's command line tool uses a two-thread architecture (1x parsing/hashing, 1x learning) for learning and inference.\nTo fluently embed VW into the Spark ML ecosystem, the following adaptions were made:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VW classifier/regressor operates on Spark's dense/sparse vectors"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pro: best composability with existing Spark ML components."),(0,r.kt)("li",{parentName:"ul"},"Cons: due to type restrictions (for example, feature indices are Java integers), the maximum model size is limited to 30 bits. One could overcome this restriction by adding type support to the classifier/regressor to directly operate on input features (strings, int, double, ...)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VW hashing is separated out into the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/mmlspark/blob/master/src/test/scala/com/microsoft/azure/synapse/ml/vw/VerifyVowpalWabbitFeaturizer.scala#L34"},"VowpalWabbitFeaturizer")," transformer. It supports mapping Spark Dataframe schema into VW's namespaces and sparse\nfeatures."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- Pro: featurization can be scaled to many nodes, scale independent of distributed learning.\n- Pro: hashed features can be cached and efficiently reused when performing hyper-parameter sweeps.\n- Pro: featurization can be used for other Spark ML learning algorithms.\n- Cons: due to type restrictions (for instance, sparse indices are Java integers) the hash space is limited to 30 bits.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VW multi-pass training can be enabled using '--passes 4' argument or setNumPasses method. Cache file is automatically named."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pro: simplified usage."),(0,r.kt)("li",{parentName:"ul"},"Pro: certain algorithms (for example, l-bfgs) require a cache file when running in multi-pass node."),(0,r.kt)("li",{parentName:"ul"},"Cons: Since the cache file resides in the Java temp directory, a bottleneck may arise, depending on your node's I/O performance and the location of the temp directory."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VW distributed training is transparently set up and can be controlled through the input dataframes number of partitions.\nSimilar to LightGBM all training instances must be running at the same time, thus the maximum parallelism is restricted by the\nnumber of executors available in the cluster. Under the hood, VW's built-in spanning tree functionality is used to coordinate ",(0,r.kt)("em",{parentName:"p"},"allreduce"),".\nRequired parameters are automatically determined and supplied to VW. The spanning tree coordination process is run on the driver node."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pro: seamless parallelization."),(0,r.kt)("li",{parentName:"ul"},"Cons: currently barrier execution mode isn't implemented and thus if one node crashes the complete job needs to be manually restarted.")))))}c.isMDXComponent=!0}}]);