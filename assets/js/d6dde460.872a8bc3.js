(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(117)),c={},i={unversionedId:"cheatsheets/python/v1/templates",id:"cheatsheets/python/v1/templates",isDocsHomePage:!1,title:"Templates",description:"Introduction",source:"@site/docs/cheatsheets/python/v1/templates.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/templates",permalink:"/azureml-cheatsheets/docs/cheatsheets/python/v1/templates",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/templates.md",version:"current",frontMatter:{}},p=[{value:"Project Templates",id:"project-templates",children:[{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]}]}],l={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Introduction"),Object(o.a)("p",null,"Cookiecutter is a simple command-line tool that allows you to quickly create\nnew projects from pre-defined templates. Let's see it in action!"),Object(o.a)("p",null,"First go ahead and get cookiecutter using your environment manager of choice,\nfor example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"pip install cookiecutter\n")),Object(o.a)("p",null,"Then give this repo a home"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"cd ~/repos # or wherever your repos call home :-)\ngit clone <this-repo>\n")),Object(o.a)("p",null,"To create a new project from the ",Object(o.a)("inlineCode",{parentName:"p"},"ScriptRunConfig")," template for example, simply\nrun"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"cookiecutter path/to/cheatsheet/repo/templates/ScriptRunConfig\n")),Object(o.a)("p",null,"See ",Object(o.a)("a",{parentName:"p",href:"#ScriptRunConfig"},"ScriptRunConfig")," for more details for this template."),Object(o.a)("h2",{id:"project-templates"},"Project Templates"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"ScriptRunConfig: Create a project to run a script in AML making use of the\nScriptRunConfig class. This template is well suited for smaller projects and\nis especially handy for testing.")),Object(o.a)("h3",{id:"scriptrunconfig"},"ScriptRunConfig"),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://cookiecutter.readthedocs.io/en/1.7.2/README.html"},"Cookiecutter"),"\ntemplate for setting up an AML\n",Object(o.a)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.scriptrunconfig?view=azure-ml-py"},"ScriptRunConfig"),"\nused to run your script in Azure."),Object(o.a)("h4",{id:"usage"},"Usage"),Object(o.a)("p",null,"Run the cookiecutter command"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"cookiecutter <path/to/cookiecutter/templates>/ScriptRunConfig\n")),Object(o.a)("p",null,"to create a new ",Object(o.a)("inlineCode",{parentName:"p"},"ScriptRunConfig")," project."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Note.")," Install with ",Object(o.a)("inlineCode",{parentName:"p"},"pip install cookiecutter")," (see\n",Object(o.a)("a",{parentName:"p",href:"https://cookiecutter.readthedocs.io/en/1.7.2/installation.html"},"cookiecutter docs"),"\nfor more installation options)"),Object(o.a)("p",null,"You will be prompted for the following:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"directory_name"),': The desired name of the directory (default:\n"aml-src-script")'),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"script_name"),': The name of the python script to be run in Azure (default:\n"script")'),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"subscription_id"),": Your Azure Subscription ID"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"resource_group"),": Your Azure resource group name"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"workspace_name"),": Your Azure ML workspace name"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"compute_target_name"),': The name of the Azure ML compute target to run the\nscript on (default: "local", will run on your box)')),Object(o.a)("p",null,"Cookiecutter creates a new project with the following layout."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"{directory_name}/\n    {script_name}.py      # the script you want to run in the cloud\n    run.py                # wraps your script in ScriptRunConfig to send to Azure\n    config.json           # your Azure ML metadata\n    readme.md             # this readme file!\n")),Object(o.a)("p",null,"See\n",Object(o.a)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.scriptrunconfig?view=azure-ml-py"},"ScriptRunConfig"),"\nfor more options and details on configuring runs."))}u.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);