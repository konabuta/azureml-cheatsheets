(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||h[d]||a;return n?o.a.createElement(b,s(s({ref:t},u),{},{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},155:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/logging-metrics-a151a23cc2167f2b40ef5d4ee5e86b01.png"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(101)),i={title:"Run History"},s={unversionedId:"cheatsheets/python/v1/run-history",id:"cheatsheets/python/v1/run-history",isDocsHomePage:!1,title:"Run History",description:"Azure ML can supercharge your ML workloads in (at least!) two ways:",source:"@site/docs/cheatsheets/python/v1/run-history.md",slug:"/cheatsheets/python/v1/run-history",permalink:"/azureml-cheatsheets/docs/cheatsheets/python/v1/run-history",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/run-history.md",version:"current"},c=[{value:"Experiments and Runs",id:"experiments-and-runs",children:[]},{value:"Snapshot",id:"snapshot",children:[]},{value:"Metrics",id:"metrics",children:[]}],u={rightToc:c};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Azure ML can supercharge your ML workloads in (at least!) two ways:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AML Compute: Providing powerful compute resoures to train larger models"),Object(a.b)("li",{parentName:"ul"},"Run history: Best-in-class lineage and reproducability")),Object(a.b)("p",null,"In this article we focus on Run History - and why you need it in your life!"),Object(a.b)("p",null,"As teams progress to running dozens, and eventually hundreds of experiments, having\nsome way to organize them is essential. Run History is a service that provides a number\nfeatures that quickly become essential to your ML-model builders:"),Object(a.b)("h3",{id:"experiments-and-runs"},"Experiments and Runs"),Object(a.b)("p",null,"When you are running dozens of experiments in multiple different projects, having a clear\nway to organize and search though the results is key. Azure ML provides two concepts to help\nwith this: ",Object(a.b)("inlineCode",{parentName:"p"},"Run"),"s and ",Object(a.b)("inlineCode",{parentName:"p"},"Experiment"),"s."),Object(a.b)("h4",{id:"runs"},"Runs"),Object(a.b)("p",null,"A run is a single execution of your code - usually a training script. The run has a life-cycle:\nthe code is prepared to be submited to Azure ML (e.g. via a ScriptRunConfig), then the code is\nsubmitted"),Object(a.b)("p",null,"Once the code is submitted to Azure ML (for example, via a ",Object(a.b)("inlineCode",{parentName:"p"},"ScriptRunConfig"),") a ",Object(a.b)("inlineCode",{parentName:"p"},"Run")," object is\ncreated. This compute target is prepared (nodes are provisioned, containers hosting your Python\nenvironment are fired up), the entry point script is called (",Object(a.b)("inlineCode",{parentName:"p"},"$ python run.py [args]"),") and logs\nstart being generated:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"Files already downloaded and verified\nepoch=1, batch= 2000: loss 2.19\nepoch=1, batch= 4000: loss 1.82\nepoch=1, batch= 6000: loss 1.66\n...\n")),Object(a.b)("p",null,"You may log metrics to Azure ML with ",Object(a.b)("inlineCode",{parentName:"p"},"run.log('<metric_name>', metric_value)")," and monitor them in the studio:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(155).default})),Object(a.b)("p",null,"The training concludes, usually some model files are saved, and the nodes are\nreleased."),Object(a.b)("p",null,"But the story doesn't end there. The run persists even after the nodes are returned\nto Azure. You can always return, either in code or via the studio, to see a history\nof your runs, all their outputs and metrics, and the exact code that was used to generate them."),Object(a.b)("h4",{id:"experiments"},"Experiments"),Object(a.b)("p",null,'An Experiment is a collection of runs. All runs belongs to an Experiment. Usually\nan Experiment is tied to a specific work item, for example, "Finetune Bert-Large",\nand will possess a number of runs as you iterate toward this goal.'),Object(a.b)("h3",{id:"snapshot"},"Snapshot"),Object(a.b)("p",null,"When you submit your code to run in Azure ML, a ",Object(a.b)("em",{parentName:"p"},"snapshot")," is taken. This is a copy of the exact\ncode that ran. Think of this as version control for your experiments. Want to reproduce the\nresults from that experiment 2-months ago even though you've iterated on the model and the\ntraining script in the meantime? No problem, snapshot has you covered!"),Object(a.b)("p",null,"You have total control of what goes into the snapshot with the ",Object(a.b)("inlineCode",{parentName:"p"},".amlignore")," file. This plays\nthe same role as a ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore")," so you can efficiently manage what to include in the snapshot."),Object(a.b)("h3",{id:"metrics"},"Metrics"),Object(a.b)("p",null,"As you run experiments, you track metrics - from validation loss through to GPU load. Analysing these metrics is essential to determining your best model. With Run History, these metrics are stored for all your runs."))}l.isMDXComponent=!0}}]);