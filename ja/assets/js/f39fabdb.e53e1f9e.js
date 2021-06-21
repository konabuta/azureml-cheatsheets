(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[265],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4564:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),s={title:"Workspace",description:"Overview of Azure ML Workspaces.",keywords:["workspace"]},i={unversionedId:"cheatsheets/python/v1/workspace",id:"cheatsheets/python/v1/workspace",isDocsHomePage:!1,title:"Workspace",description:"Overview of Azure ML Workspaces.",source:"@site/docs/cheatsheets/python/v1/workspace.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/workspace",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/workspace",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/workspace.md",version:"current",frontMatter:{title:"Workspace",description:"Overview of Azure ML Workspaces.",keywords:["workspace"]},sidebar:"pythonSidebar",previous:{title:"Installation",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/installation"},next:{title:"Compute Target",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/compute-targets"}},l=[{value:"Get workspace",id:"get-workspace",children:[{value:"Helpful methods",id:"helpful-methods",children:[]}]},{value:"Get Workspace Assets",id:"get-workspace-assets",children:[{value:"Compute Targets",id:"compute-targets",children:[]},{value:"Datastores",id:"datastores",children:[]},{value:"Keyvault",id:"keyvault",children:[]},{value:"Environments",id:"environments",children:[]},{value:"MLFlow",id:"mlflow",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Workspaces are a foundational object used throughout Azure ML and are used in the\nconstructors of many other classes. Throughout this documentation we frequently\nomit the workspace object instantiation and simply refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"ws"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"installation"},"Installation")," for instructions on creating a new workspace."),(0,o.kt)("h2",{id:"get-workspace"},"Get workspace"),(0,o.kt)("p",null,"Instantiate ",(0,o.kt)("inlineCode",{parentName:"p"},"Workspace")," object used to connect to your AML assets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="run.py"',title:'"run.py"'},'from azureml.core import Workspace\nws = Workspace(\n    subscription_id="<subscription_id>",\n    resource_group="<resource_group>",\n    workspace_name="<workspace_name>",\n)\n')),(0,o.kt)("p",null,"For convenience store your workspace metadata in a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".azureml/config.json"',title:'".azureml/config.json"'},'{\n    "subscription_id": <subscription-id>,\n    "resource_group": <resource-group>,\n    "workspace_name": <workspace-name>\n}\n')),(0,o.kt)("h3",{id:"helpful-methods"},"Helpful methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ws.write_config(path, file_name)")," : Write the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json")," on your behalf. The ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," defaults to '.azureml/' in the current working directory and ",(0,o.kt)("inlineCode",{parentName:"li"},"file_name")," defaults to 'config.json'."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Workspace.from_config(path, _file_name)"),": Read the workspace configuration from config. The parameter defaults to starting the search in the current directory.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is recommended to store these in a directory ",(0,o.kt)("inlineCode",{parentName:"p"},".azureml/")," as this path is searched ",(0,o.kt)("em",{parentName:"p"},"by default"),"\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"Workspace.from_config")," method."))),(0,o.kt)("h2",{id:"get-workspace-assets"},"Get Workspace Assets"),(0,o.kt)("p",null,"The workspace provides a handle to your Azure ML assets:"),(0,o.kt)("h3",{id:"compute-targets"},"Compute Targets"),(0,o.kt)("p",null,"Get all compute targets attached to the workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws.compute_targets: Dict[str, ComputeTarget]\n")),(0,o.kt)("h3",{id:"datastores"},"Datastores"),(0,o.kt)("p",null,"Get all datastores registered to the workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws.datastores: Dict[str, Datastore]\n")),(0,o.kt)("p",null,"Get the workspace's default datastore."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws.get_default_datastore(): Datastore\n")),(0,o.kt)("h3",{id:"keyvault"},"Keyvault"),(0,o.kt)("p",null,"Get workspace's default Keyvault."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws.get_default_keyvault(): Keyvault\n")),(0,o.kt)("h3",{id:"environments"},"Environments"),(0,o.kt)("p",null,"Get environments registered to the workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws.environments: Dict[str, Environment]\n")),(0,o.kt)("h3",{id:"mlflow"},"MLFlow"),(0,o.kt)("p",null,"Get MLFlow tracking uri."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ws.get_mlflow_tracking_uri(): str\n")))}p.isMDXComponent=!0}}]);