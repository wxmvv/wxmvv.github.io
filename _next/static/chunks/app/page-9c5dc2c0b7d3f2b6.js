(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5739:function(e,t,r){Promise.resolve().then(r.bind(r,1155))},1155:function(e,t,r){"use strict";r.d(t,{default:function(){return P}});var n=[{href:"/",title:"Home"},{href:"/about",title:"About"},{href:"/blog",title:"Blog"},{href:"/connect",title:"Connect"}],a=r(9695),s=r(2265),i=r(2315),l=r(7437),o=e=>{let{src:t}=e,{0:r,1:n}=(0,s.useState)(!1),a=(0,s.useRef)(null);return((0,s.useEffect)(()=>{n(["mp4","webm","ogg"].includes(t?.split(".").pop()?.toLowerCase()||""))},[t]),t)?(0,l.jsx)("div",{children:r?(0,l.jsx)("video",{ref:a,src:t,muted:!0,loop:!0,preload:"auto",className:"max-h-[500px] rounded-[10px]",onCanPlay:()=>{let e=a.current;e&&e.play().catch(e=>console.error("Error playing video:",e))},onError:e=>console.error("Video error:",e)},t):(0,l.jsx)(i.default,{src:t,blurDataURL:"/static/place.webp",alt:"",loading:"lazy",width:0,height:0,sizes:"100vw",decoding:"async",className:"h-auto w-7/12 rounded-[10px] object-contain",style:{color:"transparent"}})}):(0,l.jsx)("div",{})},c=r(3326),u=e=>{let{text:t}=e;return(0,l.jsx)("span",{className:"mr-1 text-sm font-medium",children:t.split(" ").join("-")})},d=r(5372),m=r.n(d),h=r(7720),f=r(7002),x=r(4565),p=r(2524),g=r(7073);let v=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"group:hover:text-gray-100 h-6 w-6",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),y=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"group:hover:text-gray-100 h-6 w-6",children:(0,l.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),j=()=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"group:hover:text-gray-100 h-6 w-6",children:[(0,l.jsx)("rect",{x:"3",y:"3",width:"14",height:"10",rx:"2",ry:"2"}),(0,l.jsx)("line",{x1:"7",y1:"17",x2:"13",y2:"17"}),(0,l.jsx)("line",{x1:"10",y1:"13",x2:"10",y2:"17"})]}),w=()=>(0,l.jsx)("svg",{className:"h-6 w-6"});var b=e=>{let{isDown:t=!1}=e,{t:r,lang:n,resolvedLang:a}=(0,g.J)(),{0:i,1:o}=(0,s.useState)(!1),{theme:c,setTheme:u,resolvedTheme:d}=(0,h.F)();return((0,s.useEffect)(()=>o(!0),[]),i)?(0,l.jsx)("div",{className:"mr-5",children:(0,l.jsxs)(f.v2,{as:"div",className:"relative inline-block text-left",children:[(0,l.jsx)(f.j2,{className:"hover:text-primary-500 dark:hover:text-primary-400",children:i?"dark"===d?(0,l.jsx)(y,{}):(0,l.jsx)(v,{}):(0,l.jsx)(w,{})}),(0,l.jsx)(x.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,l.jsx)(f.sd,{className:`${t?"left-0 origin-top-right":"bottom-10 left-0 origin-bottom-right"} absolute  z-50 w-32 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800`,children:(0,l.jsx)(p.Ee,{value:c,onChange:u,children:(0,l.jsxs)("div",{className:"p-1",children:[(0,l.jsx)(p.Y8,{value:"light",children:(0,l.jsx)(f.sN,{children:e=>{let{focus:t}=e;return(0,l.jsxs)("button",{className:`${t?"bg-primary-600 text-white":""} group flex w-full items-center rounded-md px-2 py-2 text-sm`,children:[(0,l.jsx)("div",{className:"mr-2",children:(0,l.jsx)(v,{})}),r("light")]})}})}),(0,l.jsx)(p.Y8,{value:"dark",children:(0,l.jsx)(f.sN,{children:e=>{let{focus:t}=e;return(0,l.jsxs)("button",{className:`${t?"bg-primary-600 text-white":""} group flex w-full items-center rounded-md px-2 py-2 text-sm`,children:[(0,l.jsx)("div",{className:"mr-2",children:(0,l.jsx)(y,{})}),r("dark")]})}})}),(0,l.jsx)(p.Y8,{value:"system",children:(0,l.jsx)(f.sN,{children:e=>{let{focus:t}=e;return(0,l.jsxs)("button",{className:`${t?"bg-primary-600 text-white":""} group flex w-full items-center rounded-md px-2 py-2 text-sm`,children:[(0,l.jsx)("div",{className:"mr-2",children:(0,l.jsx)(j,{})}),r("system")]})}})})]})})})})]})}):null},N=r(9861),k=()=>{let{lang:e,setLang:t,resolvedLang:r}=(0,g.J)(),{0:n,1:a}=(0,s.useState)(!1);return((0,s.useEffect)(()=>a(!0),[]),n)?(0,l.jsxs)(f.v2,{as:"div",className:"relative inline-block text-left",children:[(0,l.jsxs)(f.j2,{className:"inline-flex font-mono text-sm font-semibold text-gray-400 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400",children:[e.charAt(0).toUpperCase()+e.slice(1),(0,l.jsx)(N.Z,{className:"size-3 self-end fill-gray-500 font-bold"})]}),(0,l.jsx)(f.sd,{className:"absolute left-0  z-50 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800",children:(0,l.jsx)(p.Ee,{value:e,onChange:t,children:(0,l.jsxs)("div",{className:"p-1",children:[(0,l.jsx)(p.Y8,{value:"cn",children:(0,l.jsx)(f.sN,{children:e=>{let{focus:t}=e;return(0,l.jsx)("button",{className:`${t?"bg-primary-600 text-white":""} group flex w-full items-center rounded-md px-2 py-2 text-sm font-normal`,children:"Cn 中文"})}})}),(0,l.jsx)(p.Y8,{value:"en",children:(0,l.jsx)(f.sN,{children:e=>{let{focus:t}=e;return(0,l.jsx)("button",{className:`${t?"bg-primary-600 text-white":""} group flex w-full items-center rounded-md px-2 py-2 text-sm font-normal`,children:"En English"})}})})]})})})]}):null},C=r(5628),O=r(391),E=r(1740);function P(e){let{posts:t}=e;(0,s.useEffect)(()=>{let e=console.error;return console.error=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"==typeof r[0]&&r[0].includes("Undeliverable message")||e(...r)},()=>{console.error=e}},[]);let{t:r,lang:i,resolvedLang:d}=(0,g.J)(),{0:h,1:f}=(0,s.useState)(null),{0:x,1:p}=(0,s.useState)(null),{0:v,1:y}=(0,s.useState)(null),{0:j,1:w}=(0,s.useState)(""),N=(0,s.useRef)(null),P=e=>{N.current&&clearTimeout(N.current),p(e),N.current=setTimeout(()=>{y(e),w(t[e]?.media),f(e)},100)},S=()=>{N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{y(null),f(null),w("")},1500)},z=(0,s.useRef)(Array(8).fill(null));return(0,s.useEffect)(()=>{z.current=z.current.slice(0,t.length)},[t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"fixed left-1/2 top-0 h-screen w-full",children:(0,l.jsx)("div",{className:"relative left-8 top-1/2 h-fit max-w-[484px] -translate-y-1/2 transform-gpu",children:(0,l.jsx)(C.M,{mode:"wait",children:null!==v&&(0,l.jsx)(O.E.div,{className:"h-fit w-full",initial:{opacity:0,filter:"blur(8px)",transform:"translateY(16px) translateZ(0)"},animate:{opacity:1,filter:"blur(0px)",transform:"none"},exit:{opacity:0,filter:"blur(8px)",transform:"none"},transition:{type:"tween",duration:.2},children:(0,l.jsx)(o,{src:j})},v)})})}),(0,l.jsxs)(O.E.div,{className:"flex origin-left flex-col gap-12",initial:"hidden",animate:"visible",variants:E.containerVariants,children:[(0,l.jsxs)(O.E.div,{variants:E.itemVariants,className:"flex w-full flex-col gap-1",children:[(0,l.jsxs)("div",{className:"relative inline-block w-fit",children:[(0,l.jsx)("h1",{className:"inline-block font-extrabold text-gray-900 dark:text-gray-100",children:m().author}),(0,l.jsx)("div",{className:"absolute -right-14 top-0",children:(0,l.jsx)(b,{isDown:!0})})]}),(0,l.jsx)("h2",{children:(0,l.jsx)("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:m().description})})]}),(0,l.jsxs)(O.E.div,{variants:E.itemVariants,className:"z-20 flex flex-row gap-4",children:[n.filter(e=>"/"!==e.href).map(e=>(0,l.jsx)(c.Z,{href:e.href,className:"block font-medium text-zinc-400 hover:underline dark:text-zinc-400 dark:hover:underline",children:r(e.title)},e.title)),(0,l.jsx)(a.Z,{}),(0,l.jsx)(k,{}),!1]}),(0,l.jsxs)("ul",{className:"z-10 flex w-fit shrink-0 flex-col gap-2",children:[(0,l.jsx)("div",{className:"absolute -ml-[16px] h-full w-full bg-zinc-100 dark:bg-zinc-800",style:{transition:null!==h?"opacity 0.5s ease, top 0.4s ease, left 0.5s ease, width 0.4s ease":"opacity 0.8s ease",top:null!==x?z.current[x]?.offsetTop:"none",left:null!==x?z.current[0]?.offsetLeft:"none",width:null!==x?z.current[x||0]?.offsetWidth+32:0,height:null!==x?z.current[x]?.offsetHeight:0,opacity:null!==h?1:0,borderRadius:"10px"}}),!t.length&&"No posts found.",t.slice(0,8).map((e,t)=>{let{slug:r,date:n,title:a,summary:s,tags:i,media:o}=e;return(0,l.jsx)(O.E.li,{variants:E.itemVariants,className:"inline w-fit",onMouseEnter:()=>P(t),onMouseLeave:S,ref:e=>{z.current[t]=e},children:(0,l.jsx)("article",{children:(0,l.jsx)(c.Z,{href:`/blog/${r}`,children:(0,l.jsxs)("div",{className:"relative inline-flex flex-col gap-1 py-2 text-gray-900 no-underline dark:text-gray-100",children:[(0,l.jsx)("span",{className:"font-medium text-gray-900 hover:underline  dark:text-gray-100",children:a}),(0,l.jsxs)("span",{className:"flex flex-row gap-2 text-sm font-normal text-zinc-400",children:[(0,l.jsxs)("time",{dateTime:n,children:[new Date(n).getFullYear()," "]}),(0,l.jsx)("div",{className:"flex flex-row flex-nowrap",children:i.map(e=>(0,l.jsx)(u,{text:e},e))})]})]})})})},r)})]})]})]})})}},7073:function(e,t,r){"use strict";r.d(t,{u:function(){return f},J:function(){return h}});var n=r(5789),a=r(2265),s=JSON.parse('{"cn":{"All Post":"所有文章","Home":"首页","About":"关于我","Blog":"博客","Tags":"标签","Connect":"联系","Projects":"项目","#AllPosts":"#全部文章","#TagList":"#标签列表","dark":"黑暗","light":"亮色","system":"系统","Back to homepage":"回到主页","Sorry we couldn\'t find this page.":"未知页面","But dont worry, you can find plenty of other things on our homepage.":"不过别担心，急也没用哦～"},"en":{"All Post":"All Post","Home":"Home","About":"About","Blog":"Blog","Tags":"Tags","Connect":"Contact","Projects":"Projects","#AllPosts":"#AllPosts","#TagList":"#TagList","light":"Light","dark":"Dark","system":"System","Back to homepage":"Back to homepage","Sorry we couldn\'t find this page.":"Sorry we couldn\'t find this page.","But dont worry, you can find plenty of other things on our homepage.":"But dont worry, you can find plenty of other things on our homepage."}}'),i=r(7437);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c=["cn","en"],u=["cn","en"],d=a.createContext(void 0),m={setLang:()=>{},langs:u,lang:"cn",t:e=>s.cn[e]||e},h=()=>a.useContext(d)??m,f=e=>a.useContext(d)?e.children:(0,i.jsx)(x,o(o({},e),{},{forcedLang:void 0})),x=e=>{let{forcedLang:t,disableTransitionOnChange:r=!1,enableLangScheme:n=!0,storageKey:l="lang",langs:o=u,defaultLang:m="cn",value:h,children:f,nonce:x}=e,[j,w]=a.useState(()=>g(l,m)),[b,N]=a.useState(()=>g(l)),k=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&(t=y()),h&&h[t];let a=r?v():null,s=document.documentElement;if(n){let e=c.includes(m)?m:null,r=c.includes(t)?t:e;s.style.langScheme=r}a?.()},[m,r,n,h]),C=a.useCallback(e=>{let t="function"==typeof e?e(j):e;w(t);try{localStorage.setItem(l,t)}catch(e){}},[j,l]),O=a.useCallback(e=>{let t=j||"cn";return s[t]?.[e]||(console.error(`Missing translation for key: ${e} in language: ${j}`),e)},[j]);a.useEffect(()=>{let e=e=>{e.key===l&&C(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[m,C,l]),a.useEffect(()=>{k(t??j)},[k,t,j]);let E=a.useMemo(()=>({lang:j,setLang:C,t:O,forcedLang:t,resolvedLang:"system"===j?b:j,langs:o}),[j,C,O,t,b,o]);return(0,i.jsxs)(d.Provider,{value:E,children:[(0,i.jsx)(p,{forcedLang:t,storageKey:l,enableLangScheme:n,defaultLang:m,value:h,langs:o,t:O,nonce:x}),f]})},p=a.memo(e=>{let{forcedLang:t,storageKey:r,enableLangScheme:n,defaultLang:a,value:s,langs:l,nonce:o}=e;return JSON.stringify([r,a,t,l,s,n]).slice(1,-1),(0,i.jsx)("script",{suppressHydrationWarning:!0,nonce:""})}),g=(e,t)=>localStorage.getItem(e)||t,v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=()=>navigator.language||navigator.languages[0]||"cn"},3326:function(e,t,r){"use strict";var n=r(5789),a=r(688),s=r(5343),i=r(7437);let l=["href"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}t.Z=e=>{let{href:t}=e,r=(0,a.Z)(e,l),n=t&&t.startsWith("/"),o=t&&t.startsWith("#");return n?(0,i.jsx)(s.default,c({href:t},r)):o?(0,i.jsx)("a",c({href:t},r)):(0,i.jsx)("a",c({target:"_blank",rel:"noopener noreferrer",href:t},r))}},1740:function(e,t,r){"use strict";r.r(t),r.d(t,{MotionDiv:function(){return a},MotionLi:function(){return i},MotionP:function(){return s},containerVariants:function(){return l},itemVariants:function(){return o}});var n=r(391);let a=n.E.div,s=n.E.p,i=n.E.li,l={hidden:{opacity:0,filter:"blur(8px)",transform:"translateY(16px) translateZ(0)"},visible:{opacity:1,filter:"blur(0)",transform:"none",transition:{transform:{duration:.4,timeConstant:750},opacity:{duration:.7,timeConstant:350},filter:{duration:1,timeConstant:350,ease:[.25,.3,.5,1]},type:"tween",duration:.6,delayChildren:0,staggerChildren:.1}}},o={hidden:{opacity:0,filter:"blur(8px)",transform:"translateY(16px) translateZ(0)",transition:{}},visible:{opacity:1,filter:"blur(0)",transform:"none",transition:{transform:{duration:.2,timeConstant:350},opacity:{duration:.4,timeConstant:350},filter:{duration:.4,timeConstant:350,ease:[.25,.3,.5,1]},type:"tween",duration:.4}}}},9695:function(e,t,r){"use strict";var n=r(1452),a=r(940),s=r(5372),i=r.n(s),l=r(7437);t.Z=()=>{if(i().search&&("algolia"===i().search.provider||"kbar"===i().search.provider)){let e="algolia"===i().search.provider?n.s:a.N;return(0,l.jsx)(e,{"aria-label":"Search",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6 text-gray-400 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})}}},5372:function(e,t,r){"use strict";var n=r(5566);let a={title:"wxm's Blog",author:"wxm",headerTitle:"wxm's Blog",description:"Developer",language:"zh-cn",theme:"system",siteUrl:"https://wxmvv.github.io",siteRepo:"https://github.com/wxmvv/wxmvv.github.io",siteLogo:"/static/images/avatar.png",socialBanner:"/static/images/avatar.png",email:"w05172075@outlook.com",github:"https://github.com/wxmvv",locale:"zh-CN",analytics:{umamiAnalytics:{umamiWebsiteId:n.env.NEXT_UMAMI_ID}},newsletter:{provider:"buttondown"},comments:{provider:"giscus",giscusConfig:{repo:n.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:n.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:n.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:n.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"cn"}},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"search.json"}}};e.exports=a}},function(e){e.O(0,[501,909,119,391,815,325,715,971,165,744],function(){return e(e.s=5739)}),_N_E=e.O()}]);