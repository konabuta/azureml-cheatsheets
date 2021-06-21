(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[68],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,h=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4254:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),i={slug:"run-config",title:"What is a Run Configuration?",author:"Amin Saied",author_title:"Data Scientist @ Azure ML",author_url:"https://github.com/aminsaied",author_image_url:"https://avatars.githubusercontent.com/aminsaied",tags:["run"]},u={permalink:"/blog/run-config",source:"@site/blog/2020-10-08-run-config.md",title:"What is a Run Configuration?",description:"What is a RunConfiguration?  In practice you should never have to build one by hand.",date:"2020-10-08T00:00:00.000Z",formattedDate:"October 8, 2020",tags:[{label:"run",permalink:"/blog/tags/run"}],readingTime:.66,truncated:!0,prevItem:{title:"What is Run History?",permalink:"/blog/run-history"}},c=[{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What ",(0,a.kt)("em",{parentName:"p"},"is")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"RunConfiguration"),"?  In practice you should never have to build one by hand.\nAzure ML provides higher-level concepts that to handle this for you - for example, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig"),". It is however useful to know what aspects of a run it controls, and to see how to modify\nthe parts you may have cause to change."),(0,a.kt)("h2",{id:"scriptrunconfig"},"ScriptRunConfig"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ScriptRunConfig")," is a good place to start. The clue is in the name\nhere: this class combines your script together with your desired run-time configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Script:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Source code: usually a directory e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"src/")," consisting of models and training code"),(0,a.kt)("li",{parentName:"ul"},"Script arguments: a series of command-line arguments that control various hyperparameters"))),(0,a.kt)("li",{parentName:"ul"},"Run Configuration: Everything you need to make your script run as intended in a remote environment.")))}p.isMDXComponent=!0}}]);