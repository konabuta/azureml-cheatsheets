(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[915],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),g=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=g(n),p=i,h=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1035:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(4034),i=n(9973),o=(n(7294),n(3905)),a={title:"Metrics",description:"Guide to metric logging in Azure ML.",keywords:["metric","logging"]},l={unversionedId:"cheatsheets/python/v1/logging",id:"cheatsheets/python/v1/logging",isDocsHomePage:!1,title:"Metrics",description:"Guide to metric logging in Azure ML.",source:"@site/docs/cheatsheets/python/v1/logging.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/logging",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/logging",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/logging.md",version:"current",frontMatter:{title:"Metrics",description:"Guide to metric logging in Azure ML.",keywords:["metric","logging"]},sidebar:"pythonSidebar",previous:{title:"Running Code in the Cloud",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/script-run-config"},next:{title:"Distributed GPU Training",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/distributed-training"}},c=[{value:"Logging metrics",id:"logging-metrics",children:[{value:"<code>log</code>",id:"log",children:[]},{value:"<code>log_row</code>",id:"log_row",children:[]}]},{value:"Viewing metrics",id:"viewing-metrics",children:[{value:"Via the SDK",id:"via-the-sdk",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Logging with MLFlow",id:"logging-with-mlflow",children:[]},{value:"Logging with PyTorch Lightning",id:"logging-with-pytorch-lightning",children:[]}]}],g={toc:c};function s(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logging-metrics"},"Logging metrics"),(0,o.kt)("p",null,"Logging a metric to a run causes that metric to be stored in the run record in the experiment.\nVisualize and keep a history of all logged metrics."),(0,o.kt)("h3",{id:"log"},(0,o.kt)("inlineCode",{parentName:"h3"},"log")),(0,o.kt)("p",null,"Log a single metric value to a run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Run\nrun = Run.get_context()\nrun.log('metric-name', metric_value)\n")),(0,o.kt)("p",null,"You can log the same metric multiple times within a run; the results will be displayed as a chart."),(0,o.kt)("h3",{id:"log_row"},(0,o.kt)("inlineCode",{parentName:"h3"},"log_row")),(0,o.kt)("p",null,"Log a metric with multiple columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from azureml.core import Run\nrun = Run.get_context()\nrun.log_row("Y over X", x=1, y=0.4)\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More logging options")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These are probably the most common APIs used for logging metrics, but see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/machine-learning/how-to-log-view-metrics#data-types"},"here")," for a complete\nlist, including logging lists, tables and images."))),(0,o.kt)("h2",{id:"viewing-metrics"},"Viewing metrics"),(0,o.kt)("p",null,"Metrics will be automatically available in the Azure ML Studio. Locate your run, e.g., either\nby visiting ",(0,o.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"ml.azure.com"),", or using the SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"run.get_workspace_url()\n")),(0,o.kt)("p",null,'Select the "Metrics" tab and select the metric(s) to view:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6897).Z})),(0,o.kt)("h3",{id:"via-the-sdk"},"Via the SDK"),(0,o.kt)("p",null,"Viewing metrics in a run (for more details on runs: ",(0,o.kt)("a",{parentName:"p",href:"run"},"Run"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"metrics = run.get_metrics()\n# metrics is of type Dict[str, List[float]] mapping mertic names\n# to a list of the values for that metric in the given run.\n\nmetrics.get('metric-name')\n# list of metrics in the order they were recorded\n")),(0,o.kt)("p",null,"To view all recorded values for a given metric ",(0,o.kt)("inlineCode",{parentName:"p"},"my-metric")," in a\ngiven experiment ",(0,o.kt)("inlineCode",{parentName:"p"},"my-experiment"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"experiments = ws.experiments\n# of type Dict[str, Experiment] mapping experiment names the\n# corresponding Experiment\n\nexp = experiments['my-experiment']\nfor run in exp.get_runs():\n    metrics = run.get_metrics()\n    \n    my_metric = metrics.get('my-metric')\n    if my_metric:\n        print(my_metric)\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"logging-with-mlflow"},"Logging with MLFlow"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://mlflow.org/"},"MLFlow")," to log metrics in Azure ML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Run\n\n# connect to the workspace from within your running code\nrun = Run.get_context()\nws = run.experiment.workspace\n\n# workspace has associated ml-flow-tracking-uri\nmlflow_url = ws.get_mlflow_tracking_uri()\n")),(0,o.kt)("h3",{id:"logging-with-pytorch-lightning"},"Logging with PyTorch Lightning"),(0,o.kt)("p",null,"This examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Includes Lightning's ",(0,o.kt)("inlineCode",{parentName:"li"},"TensorBoardLogger")),(0,o.kt)("li",{parentName:"ul"},"Sets up Lightning's ",(0,o.kt)("inlineCode",{parentName:"li"},"MLFlowLogger")," using AzureML ",(0,o.kt)("inlineCode",{parentName:"li"},"Run.get_context()"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only adds this logger when used as part of an Azure ML run")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pytorch_lightning as pl\n\nrun = None\ntry:\n    from azureml.core.run import Run, _OfflineRun\n    run = Run.get_context()\n    if isinstance(run, _OfflineRun):\n        run = None\nexcept ImportError:\n    print(\"Couldn't import azureml.core.run.Run\")\n\ndef get_logger():\n    tb_logger = pl.loggers.TensorBoardLogger('logs/')\n    logger = [tb_logger]\n    \n    if run is not None:\n        mlflow_url = run.experiment.workspace.get_mlflow_tracking_uri()\n        mlf_logger = pl.loggers.MLFlowLogger(\n          experiment_name=run.experiment.name,\n          tracking_uri=mlflow_url,\n          )\n        mlf_logger._run_id = run.id\n        logger.append(mlf_logger)\n\n    return logger\n")),(0,o.kt)("p",null,"Now include this logger in the lightning ",(0,o.kt)("inlineCode",{parentName:"p"},"Trainer")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"logger = get_logger()\n\ntrainer = pl.Trainer.from_argparse_args(\n    args=args,\n    logger=logger,\n    )\ntrainer.fit(model)\n")))}s.isMDXComponent=!0},6897:function(e,t,n){"use strict";t.Z=n.p+"assets/images/view-metrics-bf212fe7a27fb2be34c9c410a57c99f4.png"}}]);