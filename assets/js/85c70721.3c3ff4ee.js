(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[962],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=a,h=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3535:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i={title:"Cheat Sheet",id:"cheatsheet",description:"A cheat sheet for Azure ML.",keywords:["azure machine learning","aml","cheatsheet","overview"]},p={unversionedId:"cheatsheets/python/v1/cheatsheet",id:"cheatsheets/python/v1/cheatsheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"A cheat sheet for Azure ML.",source:"@site/docs/cheatsheets/python/v1/cheatsheet.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/cheatsheet",permalink:"/docs/cheatsheets/python/v1/cheatsheet",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/cheatsheet.md",version:"current",frontMatter:{title:"Cheat Sheet",id:"cheatsheet",description:"A cheat sheet for Azure ML.",keywords:["azure machine learning","aml","cheatsheet","overview"]},sidebar:"pythonSidebar",next:{title:"Installation",permalink:"/docs/cheatsheets/python/v1/installation"}},c=[{value:"Basic setup",id:"basic-setup",children:[{value:"Connect to workspace",id:"connect-to-workspace",children:[]},{value:"Connect to compute target",id:"connect-to-compute-target",children:[]},{value:"Prepare Python environment",id:"prepare-python-environment",children:[]}]},{value:"Submit code",id:"submit-code",children:[{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]},{value:"Experiment",id:"experiment",children:[]},{value:"Sample usage",id:"sample-usage",children:[]}]},{value:"Distributed GPU Training",id:"distributed-gpu-training",children:[]},{value:"Connect to data",id:"connect-to-data",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,o.kt)("h3",{id:"connect-to-workspace"},"Connect to workspace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Workspace\nws = Workspace.from_config()\n")),(0,o.kt)("p",null,"The workspace object is the fundamental handle on your Azure ML assets and is used\nthroughout (often simply referred to by ",(0,o.kt)("inlineCode",{parentName:"p"},"ws"),")."),(0,o.kt)("p",null,"For more details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/workspace"},"Workspaces")),(0,o.kt)("h3",{id:"connect-to-compute-target"},"Connect to compute target"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"compute_target = ws.compute_targets['<compute-target-name>']\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample usage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"compute_target = ws.compute_targets['powerful-gpu']\n\nconfig = ScriptRunConfig(\n    compute_target=compute_target,  # compute target used to run train.py script\n    source_directory='.',\n    script='train.py',\n)\n")),(0,o.kt)("p",null,"For more details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/compute-targets"},"Compute Target")),(0,o.kt)("h3",{id:"prepare-python-environment"},"Prepare Python environment"),(0,o.kt)("p",null,"You can use a pip ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file or a Conda ",(0,o.kt)("inlineCode",{parentName:"p"},"env.yml")," file to define a Python environment on your compute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Environment\n# Option 1. From pip\nenvironment = Environment.from_pip_requirements('<env-name>', '<path/to/requirements.txt>')\n# Option 2. From Conda\nenvironment = Environment.from_conda_specification('<env-name>', '<path/to/env.yml>')\n")),(0,o.kt)("p",null,"You can also use docker images to prepare your environments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample usage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"environment = Environment.from_pip_requirements('<env-name>', '<path/to/requirements.txt>')\n\nconfig = ScriptRunConfig(\n    environment=environment,  # set the python environment\n    source_directory='.',\n    script='train.py',\n)\n")),(0,o.kt)("p",null,"For more details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/environment"},"Environment")),(0,o.kt)("h2",{id:"submit-code"},"Submit code"),(0,o.kt)("p",null,"To run code in Azure ML you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Configure"),": Configuration includes specifying the code to run, the compute\ntarget to run on and the Python environment to run in."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Submit"),": Create or reuse an Azure ML Experiment and submit the run.")),(0,o.kt)("h3",{id:"scriptrunconfig"},"ScriptRunConfig"),(0,o.kt)("p",null,"A typical directory may have the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source_directory/\n    script.py    # entry point to your code\n    module1.py   # modules called by script.py     \n    ...\n")),(0,o.kt)("p",null,"To run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ (env) python <path/to/code>/script.py [arguments]")," on a remote compute\ncluster ",(0,o.kt)("inlineCode",{parentName:"p"},"target: ComputeTarget")," with an environment ",(0,o.kt)("inlineCode",{parentName:"p"},"env: Environment")," we can use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import ScriptRunConfig\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/code>',  # relative paths okay\n    script='script.py',\n    compute_target=compute_target,\n    environment=environment,\n    arguments=arguments,\n)\n")),(0,o.kt)("p",null,"For more details on arguments: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/script-run-config#command-line-arguments"},"Command line arguments")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"compute_target"),": If not provided the script will run on your local machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environment"),": If not provided, uses a default Python environment managed by Azure ML. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/cheatsheets/python/v1/environment"},"Environment")," for more details.")))),(0,o.kt)("h4",{id:"commands"},"Commands"),(0,o.kt)("p",null,"It is possible to provide the explicit command to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"command = 'echo cool && python script.py'.split()\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/code>',  # relative paths okay\n    command=command,\n    compute_target=compute_target,\n    environment=environment,\n    arguments=arguments,\n)\n")),(0,o.kt)("p",null,"For more details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/script-run-config#commands"},"Commands")),(0,o.kt)("h3",{id:"experiment"},"Experiment"),(0,o.kt)("p",null,"To submit this code, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Experiment"),": a light-weight container that helps to\norganize our submissions and keep track of code (See ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/run-history"},"Run History"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"exp = Experiment(ws, '<experiment-name>')\nrun = exp.submit(config)\nprint(run.get_portal_url())\n")),(0,o.kt)("p",null,"This link will take you to the Azure ML Studio where you can monitor your run."),(0,o.kt)("p",null,"For more details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/script-run-config"},"ScriptRunConfig")),(0,o.kt)("h3",{id:"sample-usage"},"Sample usage"),(0,o.kt)("p",null,"Here is a fairly typical example using a Conda environment to run a training\nscript ",(0,o.kt)("inlineCode",{parentName:"p"},"train.py")," on our local machine from the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ conda env create -f env.yml  # create environment called pytorch\n$ conda activate pytorch\n(pytorch) $ cd <path/to/code>\n(pytorch) $ python train.py --learning_rate 0.001 --momentum 0.9\n")),(0,o.kt)("p",null,"Suppose you want to run this on a GPU in Azure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws = Workspace.from_config()\ncompute_target = ws.compute_targets['powerful-gpu']\nenvironment = Environment.from_conda_specification('pytorch', 'env.yml')\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/code>',\n    script='train.py',\n    environment=environment,\n    arguments=['--learning_rate', 0.001, '--momentum', 0.9],\n)\n\nrun = Experiment(ws, 'PyTorch model training').submit(config)\n")),(0,o.kt)("h2",{id:"distributed-gpu-training"},"Distributed GPU Training"),(0,o.kt)("p",null,"Adapt your ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig")," to enable distributed GPU training."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{3,8-9,12,19}","{3,8-9,12,19}":!0},"from azureml.core import Workspace, Experiment, ScriptRunConfig\nfrom azureml.core import Environment\nfrom azureml.core.runconfig import MpiConfiguration\n\nws = Workspace.from_config()\ncompute_target = ws.compute_targets['powerful-gpu']\nenvironment = Environment.from_conda_specification('pytorch', 'env.yml')\nenvironment.docker.enabled = True\nenvironment.docker.base_image = 'mcr.microsoft.com/azureml/openmpi3.1.2-cuda10.1-cudnn7-ubuntu18.04'\n\n# train on 2 nodes each with 4 GPUs\nmpiconfig = MpiConfiguration(process_count_per_node=4, node_count=2)\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/code>',  # directory containing train.py\n    script='train.py',\n    environment=environment,\n    arguments=['--learning_rate', 0.001, '--momentum', 0.9],\n    distributed_job_config=mpiconfig,   # add the distributed configuration\n)\n\nrun = Experiment(ws, 'PyTorch model training').submit(config)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/azureml/openmpi3.1.2-cuda10.1-cudnn7-ubuntu18.04")," is a docker image\nwith OpenMPI. This is required for distributed training on Azure ML."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MpiConfiguration")," is where you specify the number of nodes and GPUs (per node) you\nwant to train on.")))),(0,o.kt)("p",null,"For more details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/distributed-training"},"Distributed GPU Training")),(0,o.kt)("h2",{id:"connect-to-data"},"Connect to data"),(0,o.kt)("p",null,"To work with data in your training scripts using your workspace ",(0,o.kt)("inlineCode",{parentName:"p"},"ws")," and its default datastore:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"datastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n")),(0,o.kt)("p",null,"For more details see: ",(0,o.kt)("a",{parentName:"p",href:"/docs/cheatsheets/python/v1/data"},"Data")),(0,o.kt)("p",null,"Pass this to your training script as a command line argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"arguments=['--data', dataset.as_mount()]\n")))}m.isMDXComponent=!0}}]);