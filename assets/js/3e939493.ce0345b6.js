"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[56848],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"CognitiveServices - LangchainTransformer",hide_title:!0,status:"stable",name:"CognitiveServices - LangchainTransformer"},p="Using the LangChain Transformer",l={unversionedId:"features/cognitive_services/CognitiveServices - LangchainTransformer",id:"features/cognitive_services/CognitiveServices - LangchainTransformer",title:"CognitiveServices - LangchainTransformer",description:"LangChain is a software development framework designed to simplify the creation of applications using large language models (LLMs). Chains in LangChain go beyond just a single LLM call and are sequences of calls (can be a call to an LLM or a different utility), automating the execution of a series of calls and actions.",source:"@site/docs/features/cognitive_services/CognitiveServices - LangchainTransformer.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - LangchainTransformer",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - LangchainTransformer",draft:!1,tags:[],version:"current",frontMatter:{title:"CognitiveServices - LangchainTransformer",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Custom Search for Art",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Custom Search for Art"},next:{title:"CognitiveServices - Multivariate Anomaly Detection",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection"}},c={},m=[{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:2},{value:"Step 2: Import this guide as a notebook",id:"step-2-import-this-guide-as-a-notebook",level:2},{value:"Step 3: Fill in the service information and construct the LLM",id:"step-3-fill-in-the-service-information-and-construct-the-llm",level:2},{value:"Step 4: Basic Usage of LangChain Transformer",id:"step-4-basic-usage-of-langchain-transformer",level:2},{value:"Create a chain",id:"create-a-chain",level:3},{value:"Create a dataset and apply the chain",id:"create-a-dataset-and-apply-the-chain",level:3},{value:"Save and load the LangChain transformer",id:"save-and-load-the-langchain-transformer",level:3},{value:"Step 5: Using LangChain for Large scale literature review",id:"step-5-using-langchain-for-large-scale-literature-review",level:2},{value:"Create a Sequential Chain for paper summarization",id:"create-a-sequential-chain-for-paper-summarization",level:3},{value:"Apply the LangChain transformer to perform this workload at scale",id:"apply-the-langchain-transformer-to-perform-this-workload-at-scale",level:3}],u={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-langchain-transformer"},"Using the LangChain Transformer"),(0,i.kt)("p",null,"LangChain is a software development framework designed to simplify the creation of applications using large language models (LLMs). Chains in LangChain go beyond just a single LLM call and are sequences of calls (can be a call to an LLM or a different utility), automating the execution of a series of calls and actions.\nTo make it easier to scale up the LangChain execution on a large dataset, we have integrated LangChain with the distributed machine learning library ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/blog/synapseml-a-simple-multilingual-and-massively-parallel-machine-learning-library/"},"SynapseML"),". This integration makes it easy to use the ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," distributed computing framework to process millions of data with the LangChain Framework."),(0,i.kt)("p",null,"This tutorial shows how to apply LangChain at scale for paper summarization and organization. We start with a table of arxiv links and apply the LangChain Transformerto automatically extract the corresponding paper title, authors, summary, and some related works."),(0,i.kt)("h2",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,i.kt)("p",null,"The key prerequisites for this quickstart include a working Azure OpenAI resource, and an Apache Spark cluster with SynapseML installed. We suggest creating a Synapse workspace, but an Azure Databricks, HDInsight, or Spark on Kubernetes, or even a python environment with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pyspark")," package will work. If you need to use the last component of the chain - An agent with web searching capabilities, you also need a SerpAPIKey."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Azure OpenAI resource \u2013 request access ",(0,i.kt)("a",{parentName:"li",href:"https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7en2Ais5pxKtso_Pz4b1_xUOFA5Qk1UWDRBMjg0WFhPMkIzTzhKQ1dWNyQlQCN0PWcu"},"here")," before ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource"},"creating a resource")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace"},"Create a Synapse workspace")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-analyze-spark#create-a-serverless-apache-spark-pool"},"Create a serverless Apache Spark pool")),(0,i.kt)("li",{parentName:"ol"},"Get a SerpAPIKey from ",(0,i.kt)("a",{parentName:"li",href:"https://serpapi.com/"},"SerpApi"),".")),(0,i.kt)("h2",{id:"step-2-import-this-guide-as-a-notebook"},"Step 2: Import this guide as a notebook"),(0,i.kt)("p",null,"The next step is to add this code into your Spark cluster. You can either create a notebook in your Spark platform and copy the code into this notebook to run the demo. Or download the notebook and import it into Synapse Analytics"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import the notebook ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-development-using-notebooks#create-a-notebook"},"into the Synapse Workspace")," or if using Databricks ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/notebooks/notebooks-manage#create-a-notebook"},"into the Databricks Workspace")),(0,i.kt)("li",{parentName:"ol"},"Install SynapseML on your cluster. Please see the installation instructions for Synapse at the bottom of ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/SynapseML/"},"the SynapseML website"),". Note that this requires pasting an additional cell at the top of the notebook you just imported"),(0,i.kt)("li",{parentName:"ol"},"Connect your notebook to a cluster and follow along, editing and running the cells below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# This cell ensures make magic command like '%pip install' works on synapse scheduled spark jobs\nfrom synapse.ml.core.platform import running_on_synapse\n\nif running_on_synapse():\n    from IPython import get_ipython\n    from IPython.terminal.interactiveshell import TerminalInteractiveShell\n\n    try:\n        shell = TerminalInteractiveShell.instance()\n    except:\n        pass\n    from notebookutils.visualization import display\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"%pip install langchain openai pdf2image pdfminer.six pytesseract unstructured\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import os, openai, langchain, uuid\nfrom langchain.llms import AzureOpenAI, OpenAI\nfrom langchain.agents import load_tools, initialize_agent, AgentType\nfrom langchain.chat_models import AzureChatOpenAI\nfrom langchain.chains import TransformChain, LLMChain, SimpleSequentialChain\nfrom langchain.document_loaders import OnlinePDFLoader\nfrom langchain.prompts import PromptTemplate\nimport pyspark.sql.functions as f\nfrom synapse.ml.cognitive.langchain import LangchainTransformer\nfrom synapse.ml.core.platform import running_on_synapse, find_secret\n")),(0,i.kt)("h2",{id:"step-3-fill-in-the-service-information-and-construct-the-llm"},"Step 3: Fill in the service information and construct the LLM"),(0,i.kt)("p",null,"Next, please edit the cell in the notebook to point to your service. In particular set the ",(0,i.kt)("inlineCode",{parentName:"p"},"model_name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment_name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openai_api_base"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"open_api_key")," variables to match those for your OpenAI service. Please feel free to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"find_secret")," with your key as follows"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'openai_api_key = "99sj2w82o...."')),(0,i.kt)("p",null,"Note: If using SerpAPI you'll need to first ",(0,i.kt)("a",{parentName:"p",href:"https://serpapi.com/dashboard"},"create a key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'os.environ["SERPAPI_API_KEY"] = "YOURSERPAPIKEY"\nopenai_api_key = find_secret("openai-api-key")\nopenai_api_base = "https://synapseml-openai.openai.azure.com/"\nopenai_api_version = "2022-12-01"\nopenai_api_type = "azure"\n\nos.environ["OPENAI_API_TYPE"] = openai_api_type\nos.environ["OPENAI_API_VERSION"] = openai_api_version\nos.environ["OPENAI_API_BASE"] = openai_api_base\nos.environ["OPENAI_API_KEY"] = openai_api_key\nllm = AzureOpenAI(\n    deployment_name="text-davinci-003",\n    model_name="text-davinci-003",\n    temperature=0.1,\n    verbose=True,\n)\n')),(0,i.kt)("h2",{id:"step-4-basic-usage-of-langchain-transformer"},"Step 4: Basic Usage of LangChain Transformer"),(0,i.kt)("h3",{id:"create-a-chain"},"Create a chain"),(0,i.kt)("p",null,"We will start by demonstrating the basic usage with a simple chain that creates definitions for input words"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'copy_prompt = PromptTemplate(\n    input_variables=["technology"],\n    template="Define the following word: {technology}",\n)\n\nchain = LLMChain(llm=llm, prompt=copy_prompt)\ntransformer = (\n    LangchainTransformer()\n    .setInputCol("technology")\n    .setOutputCol("definition")\n    .setChain(chain)\n    .setSubscriptionKey(openai_api_key)\n    .setUrl(openai_api_base)\n)\n')),(0,i.kt)("h3",{id:"create-a-dataset-and-apply-the-chain"},"Create a dataset and apply the chain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# construction of test dataframe\ndf = spark.createDataFrame(\n    [(0, "docker"), (1, "spark"), (2, "python")], ["label", "technology"]\n)\ndisplay(transformer.transform(df))\n')),(0,i.kt)("h3",{id:"save-and-load-the-langchain-transformer"},"Save and load the LangChain transformer"),(0,i.kt)("p",null,"LangChain Transformers can be saved and loaded. Note that LangChain serialization only works for chains that don't have memory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'temp_dir = "tmp"\nif not os.path.exists(temp_dir):\n    os.mkdir(temp_dir)\npath = os.path.join(temp_dir, "langchainTransformer")\ntransformer.save(path)\nloaded = LangchainTransformer.load(path)\ndisplay(loaded.transform(df))\n')),(0,i.kt)("h2",{id:"step-5-using-langchain-for-large-scale-literature-review"},"Step 5: Using LangChain for Large scale literature review"),(0,i.kt)("h3",{id:"create-a-sequential-chain-for-paper-summarization"},"Create a Sequential Chain for paper summarization"),(0,i.kt)("p",null,"We will now construct a Sequential Chain for extracting structured information from an arxiv link. In particular, we will ask langchain to extract the title, author information, and a summary of the paper content. After that, we use a web search tool to find the recent papers written by the first author."),(0,i.kt)("p",null,"To summarize, our sequential chain contains the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Transform Chain"),": Extract Paper Content from arxiv Link ",(0,i.kt)("strong",{parentName:"li"},"=>")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"LLMChain"),": Summarize the Paper, extract paper title and authors ",(0,i.kt)("strong",{parentName:"li"},"=>")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Transform Chain"),": to generate the prompt ",(0,i.kt)("strong",{parentName:"li"},"=>")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Agent with Web Search Tool"),": Use Web Search to find the recent papers by the first author (this part is commented out as it needs the SerpAPIKey to run successfully)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def paper_content_extraction(inputs: dict) -> dict:\n    arxiv_link = inputs["arxiv_link"]\n    loader = OnlinePDFLoader(arxiv_link)\n    pages = loader.load_and_split()\n    return {"paper_content": pages[0].page_content + pages[1].page_content}\n\n\ndef prompt_generation(inputs: dict) -> dict:\n    output = inputs["Output"]\n    prompt = (\n        "find the paper title, author, summary in the paper description below, output them. After that, Use websearch to find out 3 recent papers of the first author in the author section below (first author is the first name separated by comma) and list the paper titles in bullet points: <Paper Description Start>\\n"\n        + output\n        + "<Paper Description End>."\n    )\n    return {"prompt": prompt}\n\n\npaper_content_extraction_chain = TransformChain(\n    input_variables=["arxiv_link"],\n    output_variables=["paper_content"],\n    transform=paper_content_extraction,\n    verbose=False,\n)\n\npaper_summarizer_template = """You are a paper summarizer, given the paper content, it is your job to summarize the paper into a short summary, and extract authors and paper title from the paper content.\nHere is the paper content:\n{paper_content}\nOutput:\npaper title, authors and summary.\n"""\nprompt = PromptTemplate(\n    input_variables=["paper_content"], template=paper_summarizer_template\n)\nsummarize_chain = LLMChain(llm=llm, prompt=prompt, verbose=False)\n\nsequential_chain = SimpleSequentialChain(\n    chains=[paper_content_extraction_chain, summarize_chain]\n)\n\n"""\nUncomment the following when you have a SerpAPIKey to enable the final websearch component of the chain.\n"""\n# prompt_generation_chain = TransformChain(input_variables=["Output"], output_variables=["prompt"], transform=prompt_generation, verbose=False)\n# tools = load_tools(["serpapi"], llm=llm)\n# web_search_agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=False)\n# sequential_chain = SimpleSequentialChain(chains=[\n#   paper_content_extraction_chain, summarize_chain, prompt_generation_chain, web_search_agent\n# ])\n')),(0,i.kt)("h3",{id:"apply-the-langchain-transformer-to-perform-this-workload-at-scale"},"Apply the LangChain transformer to perform this workload at scale"),(0,i.kt)("p",null,"We can now use our chain at scale using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LangchainTransformer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'paper_df = spark.createDataFrame(\n    [\n        (0, "https://arxiv.org/pdf/2107.13586.pdf"),\n        (1, "https://arxiv.org/pdf/2101.00190.pdf"),\n        (2, "https://arxiv.org/pdf/2103.10385.pdf"),\n        (3, "https://arxiv.org/pdf/2110.07602.pdf"),\n    ],\n    ["label", "arxiv_link"],\n)\n\n# construct langchain transformer using the paper summarizer chain define above\npaper_info_extractor = (\n    LangchainTransformer()\n    .setInputCol("arxiv_link")\n    .setOutputCol("paper_info")\n    .setChain(sequential_chain)\n    .setSubscriptionKey(openai_api_key)\n    .setUrl(openai_api_base)\n)\n\n\n# extract paper information from arxiv links, the paper information needs to include:\n# paper title, paper authors, brief paper summary, and recent papers published by the first author\ndisplay(paper_info_extractor.transform(paper_df))\n')))}h.isMDXComponent=!0}}]);