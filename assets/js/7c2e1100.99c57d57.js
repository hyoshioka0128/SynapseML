"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[58861],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||i;return n?t.createElement(d,o(o({ref:a},c),{},{components:n})):t.createElement(d,o({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32961:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(83117),r=(n(67294),n(3905));const i={title:"Langchain",hide_title:!0,status:"stable"},o="Using the LangChain Transformer",s={unversionedId:"Explore Algorithms/OpenAI/Langchain",id:"version-1.0.2/Explore Algorithms/OpenAI/Langchain",title:"Langchain",description:"LangChain is a software development framework designed to simplify the creation of applications using large language models (LLMs). Chains in LangChain go beyond just a single LLM call and are sequences of calls (can be a call to an LLM or a different utility), automating the execution of a series of calls and actions.",source:"@site/versioned_docs/version-1.0.2/Explore Algorithms/OpenAI/Langchain.md",sourceDirName:"Explore Algorithms/OpenAI",slug:"/Explore Algorithms/OpenAI/Langchain",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/OpenAI/Langchain",draft:!1,tags:[],version:"1.0.2",frontMatter:{title:"Langchain",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Predictive Maintenance",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/AI Services/Quickstart - Predictive Maintenance"},next:{title:"OpenAI",permalink:"/SynapseML/docs/1.0.2/Explore Algorithms/OpenAI/"}},p={},l=[{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:2},{value:"Step 2: Import this guide as a notebook",id:"step-2-import-this-guide-as-a-notebook",level:2},{value:"Step 3: Fill in the service information and construct the LLM",id:"step-3-fill-in-the-service-information-and-construct-the-llm",level:2},{value:"Step 4: Basic Usage of LangChain Transformer",id:"step-4-basic-usage-of-langchain-transformer",level:2},{value:"Create a chain",id:"create-a-chain",level:3},{value:"Create a dataset and apply the chain",id:"create-a-dataset-and-apply-the-chain",level:3},{value:"Save and load the LangChain transformer",id:"save-and-load-the-langchain-transformer",level:3},{value:"Step 5: Using LangChain for Large scale literature review",id:"step-5-using-langchain-for-large-scale-literature-review",level:2},{value:"Create a Sequential Chain for paper summarization",id:"create-a-sequential-chain-for-paper-summarization",level:3},{value:"Apply the LangChain transformer to perform this workload at scale",id:"apply-the-langchain-transformer-to-perform-this-workload-at-scale",level:3}],c={toc:l};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-langchain-transformer"},"Using the LangChain Transformer"),(0,r.kt)("p",null,"LangChain is a software development framework designed to simplify the creation of applications using large language models (LLMs). Chains in LangChain go beyond just a single LLM call and are sequences of calls (can be a call to an LLM or a different utility), automating the execution of a series of calls and actions.\nTo make it easier to scale up the LangChain execution on a large dataset, we have integrated LangChain with the distributed machine learning library ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/blog/synapseml-a-simple-multilingual-and-massively-parallel-machine-learning-library/"},"SynapseML"),". This integration makes it easy to use the ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," distributed computing framework to process millions of data with the LangChain Framework."),(0,r.kt)("p",null,"This tutorial shows how to apply LangChain at scale for paper summarization and organization. We start with a table of arxiv links and apply the LangChain Transformerto automatically extract the corresponding paper title, authors, summary, and some related works."),(0,r.kt)("h2",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,r.kt)("p",null,"The key prerequisites for this quickstart include a working Azure OpenAI resource, and an Apache Spark cluster with SynapseML installed. We suggest creating a Synapse workspace, but an Azure Databricks, HDInsight, or Spark on Kubernetes, or even a python environment with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pyspark")," package will work. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An Azure OpenAI resource \u2013 request access ",(0,r.kt)("a",{parentName:"li",href:"https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7en2Ais5pxKtso_Pz4b1_xUOFA5Qk1UWDRBMjg0WFhPMkIzTzhKQ1dWNyQlQCN0PWcu"},"here")," before ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource"},"creating a resource")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace"},"Create a Synapse workspace")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-analyze-spark#create-a-serverless-apache-spark-pool"},"Create a serverless Apache Spark pool"))),(0,r.kt)("h2",{id:"step-2-import-this-guide-as-a-notebook"},"Step 2: Import this guide as a notebook"),(0,r.kt)("p",null,"The next step is to add this code into your Spark cluster. You can either create a notebook in your Spark platform and copy the code into this notebook to run the demo. Or download the notebook and import it into Synapse Analytics"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import the notebook into ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/fabric/data-engineering/how-to-use-notebook"},"Microsoft Fabric"),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-development-using-notebooks#create-a-notebook"},"Synapse Workspace")," or if using Databricks into the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/notebooks/notebooks-manage#create-a-notebook"},"Databricks Workspace"),"."),(0,r.kt)("li",{parentName:"ol"},"Install SynapseML on your cluster. Please see the installation instructions for Synapse at the bottom of ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/SynapseML/"},"the SynapseML website"),". Note that this requires pasting an additional cell at the top of the notebook you just imported."),(0,r.kt)("li",{parentName:"ol"},"Connect your notebook to a cluster and follow along, editing and running the cells below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%pip install openai==0.28.1 langchain==0.0.331 pdf2image pdfminer.six unstructured==0.10.24 pytesseract numpy==1.22.4\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os, openai, langchain, uuid\nfrom langchain.llms import AzureOpenAI, OpenAI\nfrom langchain.agents import load_tools, initialize_agent, AgentType\nfrom langchain.chains import TransformChain, LLMChain, SimpleSequentialChain\nfrom langchain.document_loaders import OnlinePDFLoader\nfrom langchain.tools.bing_search.tool import BingSearchRun, BingSearchAPIWrapper\nfrom langchain.prompts import PromptTemplate\nfrom synapse.ml.services.langchain import LangchainTransformer\nfrom synapse.ml.core.platform import running_on_synapse, find_secret\n")),(0,r.kt)("h2",{id:"step-3-fill-in-the-service-information-and-construct-the-llm"},"Step 3: Fill in the service information and construct the LLM"),(0,r.kt)("p",null,"Next, please edit the cell in the notebook to point to your service. In particular set the ",(0,r.kt)("inlineCode",{parentName:"p"},"model_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"openai_api_base"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"open_api_key")," variables to match those for your OpenAI service. Please feel free to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"find_secret")," with your key as follows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'openai_api_key = "99sj2w82o...."')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'bing_subscription_key = "..."')),(0,r.kt)("p",null,"Note that you also need to set up your Bing search to gain access to your ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/create-bing-search-service-resource"},"Bing Search subscription key"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openai_api_key = find_secret(\n    secret_name="openai-api-key", keyvault="mmlspark-build-keys"\n)\nopenai_api_base = "https://synapseml-openai.openai.azure.com/"\nopenai_api_version = "2022-12-01"\nopenai_api_type = "azure"\ndeployment_name = "text-davinci-003"\nbing_search_url = "https://api.bing.microsoft.com/v7.0/search"\nbing_subscription_key = find_secret(\n    secret_name="bing-search-key", keyvault="mmlspark-build-keys"\n)\n\nos.environ["BING_SUBSCRIPTION_KEY"] = bing_subscription_key\nos.environ["BING_SEARCH_URL"] = bing_search_url\nos.environ["OPENAI_API_TYPE"] = openai_api_type\nos.environ["OPENAI_API_VERSION"] = openai_api_version\nos.environ["OPENAI_API_BASE"] = openai_api_base\nos.environ["OPENAI_API_KEY"] = openai_api_key\n\nllm = AzureOpenAI(\n    deployment_name=deployment_name,\n    model_name=deployment_name,\n    temperature=0.1,\n    verbose=True,\n)\n')),(0,r.kt)("h2",{id:"step-4-basic-usage-of-langchain-transformer"},"Step 4: Basic Usage of LangChain Transformer"),(0,r.kt)("h3",{id:"create-a-chain"},"Create a chain"),(0,r.kt)("p",null,"We will start by demonstrating the basic usage with a simple chain that creates definitions for input words"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'copy_prompt = PromptTemplate(\n    input_variables=["technology"],\n    template="Define the following word: {technology}",\n)\n\nchain = LLMChain(llm=llm, prompt=copy_prompt)\ntransformer = (\n    LangchainTransformer()\n    .setInputCol("technology")\n    .setOutputCol("definition")\n    .setChain(chain)\n    .setSubscriptionKey(openai_api_key)\n    .setUrl(openai_api_base)\n)\n')),(0,r.kt)("h3",{id:"create-a-dataset-and-apply-the-chain"},"Create a dataset and apply the chain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# construction of test dataframe\ndf = spark.createDataFrame(\n    [(0, "docker"), (1, "spark"), (2, "python")], ["label", "technology"]\n)\ndisplay(transformer.transform(df))\n')),(0,r.kt)("h3",{id:"save-and-load-the-langchain-transformer"},"Save and load the LangChain transformer"),(0,r.kt)("p",null,"LangChain Transformers can be saved and loaded. Note that LangChain serialization only works for chains that don't have memory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'temp_dir = "tmp"\nif not os.path.exists(temp_dir):\n    os.mkdir(temp_dir)\npath = os.path.join(temp_dir, "langchainTransformer")\ntransformer.save(path)\nloaded = LangchainTransformer.load(path)\ndisplay(loaded.transform(df))\n')),(0,r.kt)("h2",{id:"step-5-using-langchain-for-large-scale-literature-review"},"Step 5: Using LangChain for Large scale literature review"),(0,r.kt)("h3",{id:"create-a-sequential-chain-for-paper-summarization"},"Create a Sequential Chain for paper summarization"),(0,r.kt)("p",null,"We will now construct a Sequential Chain for extracting structured information from an arxiv link. In particular, we will ask langchain to extract the title, author information, and a summary of the paper content. After that, we use a web search tool to find the recent papers written by the first author."),(0,r.kt)("p",null,"To summarize, our sequential chain contains the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transform Chain"),": Extract Paper Content from arxiv Link ",(0,r.kt)("strong",{parentName:"li"},"=>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"LLMChain"),": Summarize the Paper, extract paper title and authors ",(0,r.kt)("strong",{parentName:"li"},"=>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transform Chain"),": to generate the prompt ",(0,r.kt)("strong",{parentName:"li"},"=>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Agent with Web Search Tool"),": Use Web Search to find the recent papers by the first author")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def paper_content_extraction(inputs: dict) -> dict:\n    arxiv_link = inputs["arxiv_link"]\n    loader = OnlinePDFLoader(arxiv_link)\n    pages = loader.load_and_split()\n    return {"paper_content": pages[0].page_content + pages[1].page_content}\n\n\ndef prompt_generation(inputs: dict) -> dict:\n    output = inputs["Output"]\n    prompt = (\n        "find the paper title, author, summary in the paper description below, output them. After that, Use websearch to find out 3 recent papers of the first author in the author section below (first author is the first name separated by comma) and list the paper titles in bullet points: <Paper Description Start>\\n"\n        + output\n        + "<Paper Description End>."\n    )\n    return {"prompt": prompt}\n\n\npaper_content_extraction_chain = TransformChain(\n    input_variables=["arxiv_link"],\n    output_variables=["paper_content"],\n    transform=paper_content_extraction,\n    verbose=False,\n)\n\npaper_summarizer_template = """You are a paper summarizer, given the paper content, it is your job to summarize the     paper into a short summary, and extract authors and paper title from the paper content.\nHere is the paper content:\n{paper_content}\nOutput:\npaper title, authors and summary.\n"""\nprompt = PromptTemplate(\n    input_variables=["paper_content"], template=paper_summarizer_template\n)\nsummarize_chain = LLMChain(llm=llm, prompt=prompt, verbose=False)\n\nprompt_generation_chain = TransformChain(\n    input_variables=["Output"],\n    output_variables=["prompt"],\n    transform=prompt_generation,\n    verbose=False,\n)\n\nbing = BingSearchAPIWrapper(k=3)\ntools = [BingSearchRun(api_wrapper=bing)]\nweb_search_agent = initialize_agent(\n    tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=False\n)\n\nsequential_chain = SimpleSequentialChain(\n    chains=[\n        paper_content_extraction_chain,\n        summarize_chain,\n        prompt_generation_chain,\n        web_search_agent,\n    ]\n)\n')),(0,r.kt)("h3",{id:"apply-the-langchain-transformer-to-perform-this-workload-at-scale"},"Apply the LangChain transformer to perform this workload at scale"),(0,r.kt)("p",null,"We can now use our chain at scale using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LangchainTransformer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'paper_df = spark.createDataFrame(\n    [\n        (0, "https://arxiv.org/pdf/2107.13586.pdf"),\n        (1, "https://arxiv.org/pdf/2101.00190.pdf"),\n        (2, "https://arxiv.org/pdf/2103.10385.pdf"),\n        (3, "https://arxiv.org/pdf/2110.07602.pdf"),\n    ],\n    ["label", "arxiv_link"],\n)\n\n# construct langchain transformer using the paper summarizer chain define above\npaper_info_extractor = (\n    LangchainTransformer()\n    .setInputCol("arxiv_link")\n    .setOutputCol("paper_info")\n    .setChain(sequential_chain)\n    .setSubscriptionKey(openai_api_key)\n    .setUrl(openai_api_base)\n)\n\n\n# extract paper information from arxiv links, the paper information needs to include:\n# paper title, paper authors, brief paper summary, and recent papers published by the first author\ndisplay(paper_info_extractor.transform(paper_df))\n')))}m.isMDXComponent=!0}}]);