(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{8546:function(e,t,n){Promise.resolve().then(n.bind(n,4296))},6176:function(e,t,n){"use strict";n.d(t,{u:function(){return d},J:function(){return c}});var r=n(7437),a=n(2265),s=JSON.parse('{"cn":{"All Post":"所有文章","Home":"首页","About":"关于我","Blog":"博客","Tags":"标签","Connect":"联系","Projects":"项目","#AllPosts":"#全部文章","#TagList":"#标签列表","dark":"黑暗","light":"亮色","system":"系统"},"en":{"All Post":"All Post","Home":"Home","About":"About","Blog":"Blog","Tags":"Tags","Connect":"Contact","Projects":"Projects","#AllPosts":"#AllPosts","#TagList":"#TagList","light":"Light","dark":"Dark","system":"System"}}');let i=["cn","en"],o=a.createContext(void 0),l={setLang:e=>{},langs:[],t:e=>e},c=()=>{var e;return null!==(e=a.useContext(o))&&void 0!==e?e:l},d=e=>a.useContext(o)?e.children:(0,r.jsx)(m,{...e}),u=["en","cn"],m=e=>{let{forcedLang:t,disableTransitionOnChange:n=!1,enableLangScheme:l=!0,storageKey:c="lang",langs:d=u,defaultLang:m="cn",value:p,children:b,nonce:v}=e,[j,y]=a.useState(()=>f(c,m)),[k,w]=a.useState(()=>f(c)),N=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&(t=x(!1)),p&&p[t];let r=n?h():null,a=document.documentElement;if(l){let e=i.includes(m)?m:null,n=i.includes(t)?t:e;a.style.langScheme=n}null==r||r()},[m,n,l,p]),C=a.useCallback(e=>{let t="function"==typeof e?e(j):e;y(t);try{localStorage.setItem(c,t)}catch(e){}},[j,c]),P=a.useCallback(e=>{var t;return(null===(t=s[j||"cn"])||void 0===t?void 0:t[e])||(console.error("Missing translation for key: ".concat(e," in language: ").concat(j)),e)},[j]);a.useEffect(()=>{let e=e=>{e.key===c&&C(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[m,C,c]),a.useEffect(()=>{N(null!=t?t:j)},[N,t,j]);let S=a.useMemo(()=>({lang:j,setLang:C,t:P,forcedLang:t,resolvedLang:"system"===j?k:j,langs:d}),[j,C,P,t,k,d]);return(0,r.jsxs)(o.Provider,{value:S,children:[(0,r.jsx)(g,{forcedLang:t,storageKey:c,enableLangScheme:l,defaultLang:m,value:p,langs:d,t:P,nonce:v}),b]})},g=a.memo(e=>{let{forcedLang:t,storageKey:n,enableLangScheme:a,defaultLang:s,value:i,langs:o,nonce:l}=e;return JSON.stringify([n,s,t,o,i,a]).slice(1,-1),(0,r.jsx)("script",{suppressHydrationWarning:!0,nonce:""})}),f=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>navigator.language||navigator.languages[0]||"cn"},9904:function(e,t,n){"use strict";var r=n(7437),a=n(7138);t.Z=e=>{let{href:t,...n}=e,s=t&&t.startsWith("/"),i=t&&t.startsWith("#");return s?(0,r.jsx)(a.default,{href:t,...n}):i?(0,r.jsx)("a",{href:t,...n}):(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:t,...n})}},4296:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(7437),a=[{title:"Obsidian custom css",description:"我的obsidian定制css",imgSrc:"https://obsidian.md/images/obsidian-logo-gradient.svg",href:"https://github.com/wxmvv/obsidian-custom-css"}],s=n(6648),i=e=>{let{...t}=e;return(0,r.jsx)(s.default,{...t})},o=n(9904),l=e=>{let{title:t,description:n,imgSrc:a,href:s}=e;return(0,r.jsx)("div",{className:"md max-w-[544px] p-4 md:w-1/2",children:(0,r.jsxs)("div",{className:"".concat(a&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[a&&(s?(0,r.jsx)(o.Z,{href:s,"aria-label":"Link to ".concat(t),children:(0,r.jsx)(i,{alt:t,src:a,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})}):(0,r.jsx)(i,{alt:t,src:a,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h2",{className:"mb- text-lg font-bold leading-4 tracking-tight",children:s?(0,r.jsx)(o.Z,{href:s,"aria-label":"Link to ".concat(t),children:t}):t}),(0,r.jsx)("p",{className:"prose prose-sm mb-3 mt-3 max-w-none text-gray-500 dark:text-gray-400",children:n}),s&&(0,r.jsx)(o.Z,{href:s,className:"text-base font-medium leading-6 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Link to ".concat(t),children:"Detail →"})]})]})})},c=n(2265),d=n(6176);function u(){let{t:e}=(0,d.J)(),[t,n]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{n(!0)},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",style:{opacity:t?1:0,filter:t?"blur(0)":"blur(8px)",transform:t?"none":"translateY(16px) translateZ(0)",transition:"opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease"},children:[(0,r.jsxs)("div",{className:"flex w-fit flex-col gap-1",children:[(0,r.jsx)("h1",{className:"font-medium tracking-tight text-gray-900 dark:text-gray-100",children:"\xa0"}),(0,r.jsx)("h2",{children:(0,r.jsx)("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e("Projects")})})]}),(0,r.jsx)("div",{className:"container py-12",children:(0,r.jsx)("div",{className:"-m-4 flex flex-wrap",children:a.map(e=>(0,r.jsx)(l,{title:e.title,description:e.description,imgSrc:e.imgSrc,href:e.href},e.title))})})]})})}},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(5601),a=n.n(r)},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(231),a=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return o}});let r=n(8454),a=n(497),s=n(8173),i=r._(n(1241));function o(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=s.Image}},function(e){e.O(0,[231,173,971,23,744],function(){return e(e.s=8546)}),_N_E=e.O()}]);