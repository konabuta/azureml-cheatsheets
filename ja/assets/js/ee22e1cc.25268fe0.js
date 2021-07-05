(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[211],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||s[g]||p;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<p;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5594:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var r=n(4034),a=n(9973),p=(n(7294),n(3905)),i={title:"\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",description:"Guide to running code with Azure ML",keywords:["run","experiment","submit","remote","ScriptRunConfig"]},o={unversionedId:"cheatsheets/python/v1/script-run-config",id:"cheatsheets/python/v1/script-run-config",isDocsHomePage:!1,title:"\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",description:"Guide to running code with Azure ML",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cheatsheets/python/v1/script-run-config.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/script-run-config",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/script-run-config",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/script-run-config.md",version:"current",frontMatter:{title:"\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",description:"Guide to running code with Azure ML",keywords:["run","experiment","submit","remote","ScriptRunConfig"]},sidebar:"pythonSidebar",previous:{title:"Data",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/data"},next:{title:"Metrics",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/logging"}},l=[{value:"\u5b9f\u9a13\u3068\u5b9f\u884c",id:"\u5b9f\u9a13\u3068\u5b9f\u884c",children:[]},{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]},{value:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570",id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570",children:[{value:"\u5f15\u6570\u306e\u4f8b 1: <code>sys.argv</code>",id:"\u5f15\u6570\u306e\u4f8b-1-sysargv",children:[]},{value:"\u5f15\u6570\u306e\u4f8b 2: <code>argparse</code>",id:"\u5f15\u6570\u306e\u4f8b-2-argparse",children:[]}]},{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",children:[]},{value:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f7f\u7528",id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f7f\u7528",children:[{value:"\u5f15\u6570\u304b\u3089",id:"\u5f15\u6570\u304b\u3089",children:[]}]},{value:"\u5b9f\u884c",id:"\u5b9f\u884c",children:[{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6",id:"\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6",children:[]},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u53d6\u5f97",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u53d6\u5f97",children:[]}]}],u={toc:l};function c(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u5b9f\u9a13\u3068\u5b9f\u884c"},"\u5b9f\u9a13\u3068\u5b9f\u884c"),(0,p.kt)("p",null,"Azure ML \u306f\u6a5f\u68b0\u5b66\u7fd2\u30b3\u30fc\u30c9\u306e\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u306e\u5b9f\u884c\u3092\u652f\u63f4\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"\u5b9f\u884c"),"\u306f Azure ML \u306b\u30b5\u30d6\u30df\u30c3\u30c8\u3055\u308c\u305f\u30b8\u30e7\u30d6\u306e\u5c65\u6b74\u3092\u305f\u3060\u4fdd\u5b58\u3059\u308b\u3060\u3051\u3067\u306f\u306a\u304f\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u76e3\u8996\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u62bd\u8c61\u30ec\u30a4\u30e4\u30fc\u3067\u3059\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5b9f\u884c: \u4e00\u5ea6\u306e\u30b3\u30fc\u30c9\u5b9f\u884c\u3092\u8868\u3057\u307e\u3059\u3002\u8a73\u7d30: ",(0,p.kt)("a",{parentName:"li",href:"#run"},"Run")),(0,p.kt)("li",{parentName:"ul"},"\u5b9f\u9a13: \u5b9f\u9a13\u306f",(0,p.kt)("inlineCode",{parentName:"li"},"\u5b9f\u884c"),"\u306e\u8efd\u91cf\u306a\u30b3\u30f3\u30c6\u30ca\u3067\u3059\u3002\u5b9f\u9a13\u306f\u5b9f\u884c\u306e Azure ML \u3078\u306e\u30b5\u30d6\u30df\u30c3\u30c8\u3068\u8ffd\u8de1\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002")),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9",(0,p.kt)("inlineCode",{parentName:"p"},"ws"),"\u306b\u5b9f\u9a13\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Experiment\nexp = Experiment(ws, '<experiment-name>')\n")),(0,p.kt)("h2",{id:"scriptrunconfig"},"ScriptRunConfig"),(0,p.kt)("p",null,"\u4e00\u822c\u7684\u306b Azure ML \u3067\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u3092\u4f7f\u3063\u3066\u5b9f\u884c\u3059\u308b\u30b3\u30fc\u30c9\u306e\u60c5\u5831\u3068\u5b9f\u884c\u306e\u305f\u3081\u306e\u8a2d\u5b9a\u60c5\u5831\u3092\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3057\u3066\u3001\u30af\u30e9\u30a6\u30c9\u4e0a\u306b\u30b5\u30d6\u30df\u30c3\u30c8\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u5b9f\u884c\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u30b3\u30fc\u30c9\u304c\u4ee5\u4e0b\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u3060\u3068\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"source_directory/\n    script.py    # \u30b3\u30fc\u30c9\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\n    module1.py   # script.py \u306b\u3088\u3063\u3066\u547c\u3070\u308c\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\n    ...\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u3092\u4f7f\u3063\u3066",(0,p.kt)("inlineCode",{parentName:"p"},"script.py"),"\u3092\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u8a2d\u5b9a:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"config = ScriptRunConfig(\n    source_directory='<path/to/source_directory>',\n    script='script.py',\n    compute_target=target,\n    environment=env,\n    arguments = [\n        '--learning_rate', 0.001,\n        '--momentum', 0.9,\n    ]\n)\n")),(0,p.kt)("p",null,"\u3053\u3053\u3067:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"source_directory='source_directory'")," : \u5b9f\u884c\u3059\u308b\u30b3\u30fc\u30c9\u304c\u5b58\u5728\u3059\u308b\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"script='script.py'")," : \u5b9f\u884c\u3059\u308b Python \u30b9\u30af\u30ea\u30d7\u30c8\u3002\u5fc5\u305a\u3057\u3082",(0,p.kt)("inlineCode",{parentName:"li"},"source_directory"),"\u306e\u30eb\u30fc\u30c8\u306b\u3042\u308b\u5fc5\u8981\u306f\u306a\u3044\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"compute_taget=target")," : \u53c2\u7167 ",(0,p.kt)("a",{parentName:"li",href:"copute-target"},"Compute Target")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"environment")," : \u53c2\u7167 ",(0,p.kt)("a",{parentName:"li",href:"environment"},"Environment")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"arguments")," : \u53c2\u7167 ",(0,p.kt)("a",{parentName:"li",href:"#command-line-arguments"},"Arguments"))),(0,p.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3092 Azure ML \u306b\u30b5\u30d6\u30df\u30c3\u30c8\u3059\u308b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"exp = Experiment(ws, '<exp-name>')\nrun = exp.submit(config)\nprint(run)\nrun.wait_for_completion(show_output=True)\n")),(0,p.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u306f\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u306b\u30ed\u30b0\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u51fa\u529b\u3059\u308b\u3060\u3051\u3067\u306f\u306a\u304f\u3001\u30b5\u30d6\u30df\u30c3\u30c8\u3055\u308c\u305f\u5b9f\u884c\u3092 Web \u4e0a\u3067\u76e3\u8996\u3059\u308b\u305f\u3081\u306e\u30ea\u30f3\u30af\u3092\u51fa\u529b\u3057\u307e\u3059\u3002(",(0,p.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"https://ml.azure.com"),")"),(0,p.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"),(0,p.kt)("p",null,"\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3092\u6e21\u3059\u306b\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u306e\u4e2d\u306b\u3042\u308b",(0,p.kt)("inlineCode",{parentName:"p"},"arguments"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u5f15\u6570\u306f list \u5f62\u5f0f\u3067\u6307\u5b9a\u3057\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"arguments = [first, second, third, ...]\n")),(0,p.kt)("p",null,"\u3053\u306e\u3068\u304d\u5f15\u6570\u306f\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u306e\u3088\u3046\u306b\u6e21\u3055\u308c\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"$ python script.py first second third ...\n")),(0,p.kt)("p",null,"\u540d\u524d\u4ed8\u304d\u306e\u5f15\u6570\u3082\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"arguments = ['--first_arg', first_val, '--second_arg', second_val, ...]\n")),(0,p.kt)("p",null,"\u5f15\u6570\u306b\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"int"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"str"),"\u306a\u3069\u306e\u30c7\u30fc\u30bf\u578b\u306b\u52a0\u3048\u3066\u4ed6\u306e\u53c2\u7167\u578b\u306e\u30c7\u30fc\u30bf\u3082\u4f7f\u3048\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u306e\u8a73\u7d30: ",(0,p.kt)("a",{parentName:"p",href:"dataset#use-dataset-in-a-remote-run"},"Use dataset in a remote run")),(0,p.kt)("h3",{id:"\u5f15\u6570\u306e\u4f8b-1-sysargv"},"\u5f15\u6570\u306e\u4f8b 1: ",(0,p.kt)("inlineCode",{parentName:"h3"},"sys.argv")),(0,p.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f 2 \u3064\u306e\u5f15\u6570\u3092\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u6e21\u3057\u307e\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u5b9f\u884c\u3059\u308b\u5834\u5408:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="console"',title:'"console"'},"$ python script.py 0.001 0.9\n")),(0,p.kt)("p",null,"\u3053\u308c\u3092",(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u306e\u4e2d\u306e",(0,p.kt)("inlineCode",{parentName:"p"},"arguments"),"\u3092\u4f7f\u3063\u3066\u8868\u73fe\u3059\u308b\u5834\u5408:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="run.py"',title:'"run.py"'},"arguments = [0.001, 0.9]\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=arguments,\n)\n")),(0,p.kt)("p",null,"\u3053\u308c\u3089\u306e\u5f15\u6570\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4e2d\u3067\u901a\u5e38\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3068\u540c\u3058\u3088\u3046\u306b\u4f7f\u3048\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="script.py"',title:'"script.py"'},"import sys\nlearning_rate = sys.argv[1]     # 0.001 \u3092\u53d7\u3051\u53d6\u308b\nmomentum = sys.argv[2]          # 0.9 \u3092\u53d7\u3051\u53d6\u308b\n")),(0,p.kt)("h3",{id:"\u5f15\u6570\u306e\u4f8b-2-argparse"},"\u5f15\u6570\u306e\u4f8b 2: ",(0,p.kt)("inlineCode",{parentName:"h3"},"argparse")),(0,p.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f 2 \u3064\u306e\u540d\u524d\u4ed8\u304d\u306e\u5f15\u6570\u3092\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u6e21\u3057\u307e\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u5b9f\u884c\u3059\u308b\u5834\u5408:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="console"',title:'"console"'},"$ python script.py --learning_rate 0.001 --momentum 0.9\n")),(0,p.kt)("p",null,"\u3053\u308c\u3092",(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u306e\u4e2d\u306e",(0,p.kt)("inlineCode",{parentName:"p"},"arguments"),"\u3092\u4f7f\u3063\u3066\u8868\u73fe\u3059\u308b\u5834\u5408:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="run.py"',title:'"run.py"'},"arguments = [\n    '--learning_rate', 0.001,\n    '--momentum', 0.9,\n    ]\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=arguments,\n)\n")),(0,p.kt)("p",null,"\u3053\u308c\u3089\u306e\u5f15\u6570\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4e2d\u3067\u901a\u5e38\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3068\u540c\u3058\u3088\u3046\u306b\u4f7f\u3048\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="script.py"',title:'"script.py"'},"import argparse\nparser = argparse.Argparser()\nparser.add_argument('--learning_rate', type=float)\nparser.add_argument('--momentum', type=float)\nargs = parser.parse_args()\n\nlearning_rate = args.learning_rate      # 0.001 \u3092\u53d7\u3051\u53d6\u308b\nmomentum = args.momentum                # 0.9 \u3092\u53d7\u3051\u53d6\u308b\n")),(0,p.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,p.kt)("p",null,"\u660e\u793a\u7684\u306b\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u4e0e\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"command = 'python script.py'.split()\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/code>',\n    command=command,\n    compute_target=compute_target,\n    environment=environment,\n)\n")),(0,p.kt)("p",null,"\u3053\u306e\u4f8b\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"command"),"\u5f15\u6570\u306e\u4ee3\u308f\u308a\u306b",(0,p.kt)("inlineCode",{parentName:"p"},"script='script.py'"),"\u3068\u3044\u3046\u5f15\u6570\u3092\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u3068\u540c\u3058\u3067\u3059\u3002"),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u591a\u304f\u306e\u67d4\u8edf\u6027\u3092\u4e0e\u3048\u307e\u3059\u3002\u4f8b\u3048\u3070:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"),": \u3088\u304f\u3042\u308b\u4f8b:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-python"},"command = 'export PYTHONPATH=$PWD && python script.py'.split()\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-python"},"command = f'export RANK={rank} && python script.py'.split()\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c"),": \u30c7\u30fc\u30bf\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3084\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-python"},"command = 'python setup.py && python script.py'.split()\n")))),(0,p.kt)("h2",{id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f7f\u7528"},"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f7f\u7528"),(0,p.kt)("h3",{id:"\u5f15\u6570\u304b\u3089"},"\u5f15\u6570\u304b\u3089"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u306b\u5f15\u6570\u3068\u3057\u3066\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"# \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\ndatastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n\narguments = ['--dataset', dataset.as_mount()]\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=arguments,\n)\n")),(0,p.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"script.py"),"\u304b\u3089\u53c2\u7167\u53ef\u80fd\u306a\u5b9f\u884c\u306b\u5bfe\u3057\u3066\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u30de\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u5b9f\u884c"},"\u5b9f\u884c"),(0,p.kt)("h3",{id:"\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6"},"\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6"),(0,p.kt)("p",null,"Jupyter Notebook\u306a\u3069\u3092\u4f7f\u3046\u5834\u5408\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u8a2d\u5b9a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"run = exp.start_logging()\n")),(0,p.kt)("h4",{id:"\u4f8b--jupyter-notebook"},"\u4f8b : Jupyter Notebook"),(0,p.kt)("p",null,"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306f\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u5185\u3067\u5b66\u7fd2\u4e2d\u306e\u30e2\u30c7\u30eb\u306e\u30ed\u30b0\u3092\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u8868\u793a\u3059\u308b\u5834\u5408\u3067\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"from azureml.core import Workspace\nfrom azureml.core import Experiment\nws = Workspace.from_config()\nexp = Experiment(ws, 'example')\n\nrun = exp.start_logging()                   # \u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u5b9f\u884c\u306e\u958b\u59cb\nprint(run.get_portal_url())                 # Azure ML Studio \u3078\u306e\u30ea\u30f3\u30af\u306e\u53d6\u5f97\n\n# \u30e2\u30c7\u30eb\u5b66\u7fd2\u30b3\u30fc\u30c9\u306e\u30c0\u30df\u30fc\n# \u5b9f\u969b\u306f\u5b66\u7fd2\u3084EDA\u306a\u3069\nimport numpy as np\nfor x in np.linspace(0, 10):\n    y = np.sin(x)\n    run.log_row('sine', x=x, y=y)           # \u30e1\u30c8\u30ea\u30c3\u30af\u306e\u30ed\u30ae\u30f3\u30b0\n\nrun.complete()                              # \u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u5b9f\u884c\u306e\u7d42\u4e86\n")),(0,p.kt)("p",null,"Azure ML Studio \u3078\u306e\u30ea\u30f3\u30af\u304b\u3089\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u30ed\u30b0\u3084\u5b9f\u884c\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(5101).Z})),(0,p.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u53d6\u5f97"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u53d6\u5f97"),(0,p.kt)("p",null,"Azrue ML \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"\u5b9f\u884c"),"\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002\u30b5\u30d6\u30df\u30c3\u30c8\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306f",(0,p.kt)("inlineCode",{parentName:"p"},"\u5b9f\u884c"),"\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"from azureml.core import Run\nrun = Run.get_context()\n")),(0,p.kt)("h4",{id:"\u4f8b-\u5b9f\u884c\u4e2d\u306e\u30b3\u30fc\u30c9\u306e\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u30ed\u30b0\u306b\u4fdd\u5b58\u3059\u308b"},"\u4f8b: \u5b9f\u884c\u4e2d\u306e\u30b3\u30fc\u30c9\u306e\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u30ed\u30b0\u306b\u4fdd\u5b58\u3059\u308b"),(0,p.kt)("p",null,"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306f\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u306e\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u30ed\u30b0\u3067\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="train.py"',title:'"train.py"'},"from azureml.core import Run\n\nrun = Run.get_context()\n\n# training code\nfor epoch in range(n_epochs):\n    model.train()\n    ...\n    val = model.evaluate()\n    run.log('validation', val)\n")),(0,p.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u304c Azrue ML (\u4f8b\u3048\u3070",(0,p.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),"\u306b\u3088\u308a) \u306b\u30b5\u30d6\u30df\u30c3\u30c8\u3055\u308c\u305f\u6642\u3001\u3053\u306e\u30b3\u30fc\u30c9\u306f\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b",(0,p.kt)("inlineCode",{parentName:"p"},"\u5b9f\u884c"),"\u306b\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u30ed\u30b0\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u8a73\u7d30: ",(0,p.kt)("a",{parentName:"p",href:"logging"},"Logging Metrics")))}c.isMDXComponent=!0},5101:function(e,t,n){"use strict";t.Z=n.p+"assets/images/run-ex-sine-a78600f095ae349a514b9d3e3e3dbcea.png"}}]);