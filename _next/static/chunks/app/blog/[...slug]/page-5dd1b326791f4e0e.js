(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{7115:function(e,t,r){Promise.resolve().then(r.bind(r,5228)),Promise.resolve().then(r.bind(r,7672)),Promise.resolve().then(r.bind(r,1740)),Promise.resolve().then(r.bind(r,5993)),Promise.resolve().then(r.bind(r,3327)),Promise.resolve().then(r.t.bind(r,894,23)),Promise.resolve().then(r.t.bind(r,4236,23)),Promise.resolve().then(r.t.bind(r,7325,23)),Promise.resolve().then(r.t.bind(r,8909,23)),Promise.resolve().then(r.bind(r,5677)),Promise.resolve().then(r.bind(r,217))},5228:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7720),o=r(2265),i=r(7437),a=e=>{let{shortname:t,slug:r}=e,{theme:a}=(0,n.F)(),s=(0,o.useCallback)(()=>{window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=r};let e=document.createElement("script");e.src="https://"+t+".disqus.com/embed.js",e.setAttribute("data-timestamp",Date.now().toString()),e.async=!0,document.body.appendChild(e)},[t,r,a]);return(0,o.useEffect)(()=>{s()},[s]),(0,i.jsx)("div",{className:"disqus-frame",id:"disqus_thread"})},s=r(4137),l=e=>{let{themeURL:t,theme:r,darkTheme:o,repo:a,repositoryId:l,category:c,categoryId:u,reactions:d,metadata:m,inputPosition:h,lang:f,mapping:p}=e,{theme:g,resolvedTheme:v}=(0,n.F)();return(0,i.jsx)(s.Z,{id:"comments-container",repo:a,repoId:l,category:c,categoryId:u,mapping:p,reactionsEnabled:d,emitMetadata:m,inputPosition:h,theme:""===t?"dark"===g||"dark"===v?o:r:t,lang:f,loading:"lazy"})},c=e=>{let{theme:t,darkTheme:r,repo:a,label:s,issueTerm:l}=e,{theme:c,resolvedTheme:u}=(0,n.F)(),d="dark"===c||"dark"===u?r:t,m="comments-container",h=(0,o.useCallback)(()=>{let e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo",a),e.setAttribute("issue-term",l),e.setAttribute("label",s),e.setAttribute("theme",d),e.setAttribute("crossorigin","anonymous"),e.async=!0;let t=document.getElementById(m);return t&&t.appendChild(e),()=>{let e=document.getElementById(m);e&&(e.innerHTML="")}},[d,l,s,a]);return(0,o.useEffect)(()=>{h()},[h]),(0,i.jsx)("div",{className:"utterances-frame relative",id:m})},u=r(5129),d=e=>{let{commentsConfig:t,slug:r}=e;switch(t.provider){case"giscus":return(0,i.jsx)(l,(0,u.ih)({},t.giscusConfig));case"utterances":return(0,i.jsx)(c,(0,u.ih)({},t.utterancesConfig));case"disqus":return(0,i.jsx)(a,(0,u.ih)({slug:r},t.disqusConfig))}},m=r(5372),h=r.n(m);function f(e){let{slug:t}=e,{0:r,1:n}=(0,o.useState)(!1);return h().comments?.provider?(0,i.jsx)(i.Fragment,{children:r?(0,i.jsx)(d,{commentsConfig:h().comments,slug:t}):(0,i.jsx)("button",{onClick:()=>n(!0),children:"Load Comments"})}):null}},7672:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(2265),o=r(5372),i=r.n(o),a=r(4137),s=r(7720),l=r(7437);function c(e){let{slug:t}=e,{0:r,1:o}=(0,n.useState)(!1),{theme:c,setTheme:u,resolvedTheme:d}=(0,s.F)();return i().comments?.provider?(0,l.jsx)(l.Fragment,{children:r?(0,l.jsx)(a.Z,{id:"comments",repo:"wxmvv/wxmvv.github.io",repoId:"R_kgDOI7nK0A",category:"Announcements",categoryId:"DIC_kwDOI7nK0M4Cgqgb",mapping:"pathname",term:"Welcome!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"dark"===d?"dark":"light",lang:"zh-CN",loading:"lazy"}):(0,l.jsx)("button",{onClick:()=>o(!0),children:"Load Comments"})}):null}},1740:function(e,t,r){"use strict";r.r(t),r.d(t,{MotionDiv:function(){return o},MotionLi:function(){return a},MotionP:function(){return i},containerVariants:function(){return s},itemVariants:function(){return l}});var n=r(391);let o=n.E.div,i=n.E.p,a=n.E.li,s={hidden:{opacity:0,filter:"blur(8px)",transform:"translateY(16px) translateZ(0)"},visible:{opacity:1,filter:"blur(0)",transform:"none",transition:{transform:{duration:.4,timeConstant:750},opacity:{duration:.7,timeConstant:350},filter:{duration:1,timeConstant:350,ease:[.25,.3,.5,1]},type:"tween",duration:.6,delayChildren:0,staggerChildren:.1}}},l={hidden:{opacity:0,filter:"blur(8px)",transform:"translateY(16px) translateZ(0)",transition:{}},visible:{opacity:1,filter:"blur(0)",transform:"none",transition:{transform:{duration:.2,timeConstant:350},opacity:{duration:.4,timeConstant:350},filter:{duration:.4,timeConstant:350,ease:[.25,.3,.5,1]},type:"tween",duration:.4}}}},5993:function(e,t,r){"use strict";r.r(t);var n=r(2265),o=r(7437);t.default=()=>{let{0:e,1:t}=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.jsx)("div",{className:`bottom-8 right-8 z-50 hidden flex-col gap-3 ${e?"fixed md:flex":"relative md:hidden"}`,children:(0,o.jsx)("button",{"aria-label":"Scroll To Top",onClick:()=>{window.scrollTo({top:0})},className:"rounded-md bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,o.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})})}},3327:function(e,t,r){"use strict";r.r(t);var n=r(5372),o=r.n(n),i=r(2265),a=r(7437);t.default=()=>{let{0:e,1:t}=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.jsxs)("div",{className:`fixed bottom-8 right-8 hidden flex-col gap-3 ${e?"md:flex":"md:hidden"}`,children:[o().comments?.provider&&(0,a.jsx)("button",{"aria-label":"Scroll To Comment",onClick:()=>{document.getElementById("comment")?.scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.jsx)("button",{"aria-label":"Scroll To Top",onClick:()=>{window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},5372:function(e,t,r){"use strict";var n=r(5566);let o={title:"wxm's Blog",author:"wxm",headerTitle:"wxm's Blog",description:"Developer",language:"zh-cn",theme:"system",siteUrl:"https://wxmvv.github.io",siteRepo:"https://github.com/wxmvv/wxmvv.github.io",siteLogo:"/static/images/avatar.png",socialBanner:"/static/images/avatar.png",email:"w05172075@outlook.com",github:"https://github.com/wxmvv",locale:"zh-CN",analytics:{umamiAnalytics:{umamiWebsiteId:n.env.NEXT_UMAMI_ID}},newsletter:{provider:"buttondown"},comments:{provider:"giscus",giscusConfig:{repo:n.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:n.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:n.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:n.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"cn"}},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"search.json"}}};e.exports=o},4137:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7437),o=r(2265);function i(e){let{id:t,host:i,repo:a,repoId:s,category:l,categoryId:c,mapping:u,term:d,strict:m,reactionsEnabled:h,emitMetadata:f,inputPosition:p,theme:g,lang:v,loading:b}=e,[y,x]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{y||(r.e(868).then(r.bind(r,5868)),x(!0))},[]),y?(0,n.jsx)("giscus-widget",{id:t,host:i,repo:a,repoid:s,category:l,categoryid:c,mapping:u,term:d,strict:m,reactionsenabled:h,emitmetadata:f,inputposition:p,theme:g,lang:v,loading:b}):null}},7720:function(e,t,r){"use strict";r.d(t,{F:function(){return u},f:function(){return d}});var n=r(5789),o=r(2265);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var a=["light","dark"],s="(prefers-color-scheme: dark)",l=o.createContext(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=o.useContext(l))?e:c},d=e=>o.useContext(l)?e.children:o.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e)),m=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:u=m,defaultTheme:d=n?"system":"light",attribute:h="data-theme",value:b,children:y,nonce:x}=e,[w,j]=o.useState(()=>p(c,d)),[C,k]=o.useState(()=>p(c)),S=b?Object.values(b):u,E=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=v());let o=b?b[t]:t,s=r?g():null,l=document.documentElement;if("class"===h?(l.classList.remove(...S),o&&l.classList.add(o)):o?l.setAttribute(h,o):l.removeAttribute(h),i){let e=a.includes(d)?d:null,r=a.includes(t)?t:e;l.style.colorScheme=r}null==s||s()},[]),T=o.useCallback(e=>{let t="function"==typeof e?e(e):e;j(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),O=o.useCallback(e=>{k(v(e)),"system"===w&&n&&!t&&E("system")},[w,t]);o.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),o.useEffect(()=>{let e=e=>{e.key===c&&T(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),o.useEffect(()=>{E(null!=t?t:w)},[t,w]);let P=o.useMemo(()=>({theme:w,setTheme:T,forcedTheme:t,resolvedTheme:"system"===w?C:w,themes:n?[...u,"system"]:u,systemTheme:n?C:void 0}),[w,T,t,C,n,u]);return o.createElement(l.Provider,{value:P},o.createElement(f,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:n,enableColorScheme:i,storageKey:c,themes:u,defaultTheme:d,attribute:h,value:b,children:y,attrs:S,nonce:x}),y)},f=o.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:u,attrs:d,nonce:m}=e,h="system"===c,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=l?(a.includes(c)?c:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=u?u[e]:e,i=t?e+"|| ''":`'${o}'`,s="";return l&&r&&!t&&a.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?t||o?s+=`c.add(${i})`:s+="null":o&&(s+=`d[s](n,${i})`),s},v=t?`!function(){${f}${g(t)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${r}');if('system'===e||(!e&&${h})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${g(u?"x[e]":"e",!0)}}${h?"":"else{"+g(c,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${r}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${g(u?"x[e]":"e",!0)}}else{${g(c,!1,!1)};}${p}}catch(t){}}();`;return o.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})}),p=(e,t)=>{let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},5789:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r){var o;return o=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===n(o)?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return o}})},5129:function(e,t,r){"use strict";r.d(t,{Cr:function(){return h},EZ:function(){return d},S0:function(){return m},ih:function(){return u}});var n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))0>t.indexOf(n)&&l.call(e,n)&&(r[n]=e[n]);return r},h=(e,t,r)=>new Promise((n,o)=>{var i=e=>{try{s(r.next(e))}catch(e){o(e)}},a=e=>{try{s(r.throw(e))}catch(e){o(e)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,a);s((r=r.apply(e,t)).next())})},5677:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var n=r(2265),o=r(7437),i=(e,t,r)=>new Promise((n,o)=>{var i=e=>{try{s(r.next(e))}catch(e){o(e)}},a=e=>{try{s(r.throw(e))}catch(e){o(e)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,a);s((r=r.apply(e,t)).next())}),a=e=>{let{title:t="Subscribe to the newsletter",apiUrl:r="/api/newsletter"}=e,a=(0,n.useRef)(null),{0:s,1:l}=(0,n.useState)(!1),{0:c,1:u}=(0,n.useState)(""),{0:d,1:m}=(0,n.useState)(!1);return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:t}),(0,o.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>i(void 0,null,function*(){e.preventDefault();let t=yield fetch(r,{body:JSON.stringify({email:a.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:n}=yield t.json();if(n){l(!0),u("Your e-mail address is invalid or you are already subscribed!");return}a.current.value="",l(!1),m(!0)}),children:[(0,o.jsx)("div",{children:(0,o.jsxs)("label",{htmlFor:"email-input",children:[(0,o.jsx)("span",{className:"sr-only",children:"Email address"}),(0,o.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:d?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:a,required:!0,type:"email",disabled:d})]})}),(0,o.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,o.jsx)("button",{className:`bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${d?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"} focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,type:"submit",disabled:d,children:d?"Thank you!":"Sign up"})})]}),s&&(0,o.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:c})]})},s=e=>{let{title:t,apiUrl:r}=e;return(0,o.jsx)("div",{className:"flex items-center justify-center",children:(0,o.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,o.jsx)(a,{title:t,apiUrl:r})})})}},217:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var n=r(2265),o=r(7437),i=e=>{let{children:t}=e,r=(0,n.useRef)(null),{0:i,1:a}=(0,n.useState)(!1),{0:s,1:l}=(0,n.useState)(!1);return(0,o.jsxs)("div",{ref:r,onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1),l(!1)},className:"relative",children:[i&&(0,o.jsx)("button",{"aria-label":"Copy code",className:`absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${s?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"}`,onClick:()=>{l(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout(()=>{l(!1)},2e3)},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:s?"text-green-400":"text-gray-300",children:s?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,o.jsx)("pre",{children:t})]})}},894:function(){},4236:function(){},5566:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&m())}function m(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||c||s(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[329,909,391,325,971,165,744],function(){return e(e.s=7115)}),_N_E=e.O()}]);