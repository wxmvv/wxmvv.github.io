(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{7544:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),o=n(7715),a=r&&"object"==typeof r&&"default"in r?r:{default:r},i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(){return Math.min(Math.max(1,"undefined"!=typeof window&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1),3)}"function"==typeof SuppressedError&&SuppressedError;var l=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),u=globalThis.ResizeObserver||l,d=void 0!==globalThis.ResizeObserver,f=!d,h={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function p(e){return Object.assign({},h,e)}function m(e){var t,n,o,a,i,s,l,h,m,v,y,b=e.riveLoaded,g=void 0!==b&&b,w=e.canvasElem,x=e.containerRef,S=e.options,E=e.onCanvasHasResized,C=e.artboardBounds,k=p(void 0===S?{}:S),j=r.useState({height:0,width:0}),O=j[0],R=O.height,_=O.width,L=j[1],M=r.useState({height:0,width:0}),T=M[0],N=T.height,P=T.width,I=M[1],A=r.useState(!0),H=A[0],z=A[1],q=k.fitCanvasToArtboardHeight,B=k.shouldResizeCanvasToContainer,K=k.useDevicePixelRatio,D=k.customDevicePixelRatio,U=(void 0===(t=B)&&(t=!0),o=(n=r.useState({width:0,height:0}))[0],a=n[1],r.useEffect(function(){if("undefined"!=typeof window&&t){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return f&&(e(),window.addEventListener("resize",e)),function(){return window.removeEventListener("resize",e)}}},[]),l=r.useRef(new u((i=function(e){d&&a({width:e[e.length-1].contentRect.width,height:e[e.length-1].contentRect.height})},s=0,function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];clearTimeout(s),s=window.setTimeout(function(){return i.apply(e,t)},0)}))),r.useEffect(function(){var e=l.current;if(t){var n=x.current;return x.current&&d&&e.observe(x.current),function(){e.disconnect(),n&&d&&e.unobserve(n)}}e.disconnect()},[x,l]),o),F=(h=D||c(),v=(m=r.useState(h))[0],y=m[1],r.useEffect(function(){if("undefined"!=typeof window&&"matchMedia"in window){var e=function(){y(D||c())},t=window.matchMedia("screen and (resolution: ".concat(v,"dppx)"));return t.hasOwnProperty("addEventListener")?t.addEventListener("change",e):t.addListener(e),function(){t.hasOwnProperty("removeEventListener")?t.removeEventListener("change",e):t.removeListener(e)}}},[v,D]),v),W=null!=C?C:{},J=W.maxX,G=W.maxY,V=r.useCallback(function(){var e,t,n,r,o=null!==(t=null===(e=x.current)||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0,a=null!==(r=null===(n=x.current)||void 0===n?void 0:n.clientHeight)&&void 0!==r?r:0;return q&&C?{width:o,height:C.maxY/C.maxX*o}:{width:o,height:a}},[x,q,J,G]);r.useEffect(function(){if(B&&x.current&&g){var e=V(),t=e.width,n=e.height,r=!1;if(w){var o=t!==_||n!==R;if(k.fitCanvasToArtboardHeight&&o&&(x.current.style.height=n+"px",r=!0),k.useDevicePixelRatio){if(o||t*F!==P||n*F!==N){var a=F*t,i=F*n;w.width=a,w.height=i,w.style.width=t+"px",w.style.height=n+"px",I({width:a,height:i}),r=!0}}else o&&(w.width=t,w.height=n,I({width:t,height:n}),r=!0);L({width:t,height:n})}E&&(H||r)&&E&&E(),H&&z(!1)}},[w,x,U,F,V,H,z,N,P,R,_,E,B,q,K,g]),r.useEffect(function(){I({width:0,height:0})},[w])}var v,y=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),b=globalThis.IntersectionObserver||y,g=function(){function e(){var e=this;this.elementsMap=new Map,this.onObserved=function(t){t.forEach(function(t){var n=e.elementsMap.get(t.target);n&&n(t)})},this.observer=new b(this.onObserved)}return e.prototype.registerCallback=function(e,t){this.observer.observe(e),this.elementsMap.set(e,t)},e.prototype.removeCallback=function(e){this.observer.unobserve(e),this.elementsMap.delete(e)},e}(),w=function(){return v||(v=new g),v};function x(e){var t=e.setContainerRef,n=e.setCanvasRef,r=e.className,o=void 0===r?"":r,c=e.style,l=e.children,u=s(e,["setContainerRef","setCanvasRef","className","style","children"]),d=i({width:"100%",height:"100%"},c);return a.default.createElement("div",i({ref:t,className:o},!o&&{style:d}),a.default.createElement("canvas",i({ref:n,style:{verticalAlign:"top",width:0,height:0}},u),l))}function S(e,t){void 0===t&&(t={});var n=r.useState(null),s=n[0],c=n[1],l=r.useRef(null),u=r.useState(null),d=u[0],f=u[1],h=p(t),v=r.useCallback(function(){d&&(d.startRendering(),d.resizeToCanvas())},[d]);m({riveLoaded:!!d,canvasElem:s,containerRef:l,options:h,onCanvasHasResized:v,artboardBounds:null==d?void 0:d.bounds});var y=r.useCallback(function(e){null===e&&s&&(s.height=0,s.width=0),c(e)},[]);r.useEffect(function(){if(s&&e&&null==d){var t=h.useOffscreenRenderer,n=new o.Rive(i(i({useOffscreenRenderer:t},e),{canvas:s}));n.on(o.EventType.Load,function(){s?f(n):n.cleanup()})}},[s,!!e,d]);var b=r.useCallback(function(e){l.current=e},[]),g={observe:r.useCallback(function(e,t){w().registerCallback(e,t)},[]),unobserve:r.useCallback(function(e){w().removeCallback(e)},[])},S=g.observe,E=g.unobserve;r.useEffect(function(){var e,t=!1,n=function(){if(s&&t){var e=s.getBoundingClientRect();e.width>0&&e.height>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)&&e.bottom>0&&e.left<(window.innerWidth||document.documentElement.clientWidth)&&e.right>0&&(null==d||d.startRendering(),t=!1)}};return s&&!1!==h.shouldUseIntersectionObserver&&S(s,function(r){r.isIntersecting?d&&d.startRendering():d&&d.stopRendering(),t=!r.isIntersecting,clearTimeout(e),r.isIntersecting||0!==r.boundingClientRect.width||(e=setTimeout(n,10))}),function(){s&&E(s)}},[S,E,d,s,h.shouldUseIntersectionObserver]),r.useEffect(function(){return function(){d&&(d.cleanup(),f(null))}},[d,s]);var C=null==e?void 0:e.animations;r.useEffect(function(){d&&C&&(d.isPlaying?(d.stop(d.animationNames),d.play(C)):d.isPaused&&(d.stop(d.animationNames),d.pause(C)))},[C,d]);var k=r.useCallback(function(e){return a.default.createElement(x,i({setContainerRef:b,setCanvasRef:y},e))},[y,b]);return{canvas:s,container:l.current,setCanvasRef:y,setContainerRef:b,rive:d,RiveComponent:k}}t.default=function(e){var t=e.src,n=e.artboard,r=e.animations,o=e.stateMachines,c=e.layout,l=e.useOffscreenRenderer,u=e.shouldDisableRiveListeners,d=e.shouldResizeCanvasToContainer,f=e.automaticallyHandleEvents,h=e.children,p=s(e,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),m=S({src:t,artboard:n,animations:r,layout:c,stateMachines:o,autoplay:!0,shouldDisableRiveListeners:void 0!==u&&u,automaticallyHandleEvents:void 0!==f&&f},{useOffscreenRenderer:void 0===l||l,shouldResizeCanvasToContainer:void 0===d||d}).RiveComponent;return a.default.createElement(m,i({},p),h)},t.useResizeCanvas=m,t.useRive=S,t.useRiveFile=function(e){var t=this,n=r.useState(null),a=n[0],i=n[1],s=r.useState("idle"),c=s[0],l=s[1];return r.useEffect(function(){var n,r,a,s=null;return n=void 0,r=void 0,a=function(){return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,function(t){try{l("loading"),(s=new o.RiveFile(e)).init(),s.on(o.EventType.Load,function(){null==s||s.getInstance(),i(s),l("success")}),s.on(o.EventType.LoadError,function(){l("failed")}),i(s)}catch(e){console.error(e),l("failed")}return[2]})},new(r||(r=Promise))(function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):((n=t.value)instanceof r?n:new r(function(e){e(n)})).then(i,s)}c((a=a.apply(t,n||[])).next())}),function(){null==s||s.cleanup()}},[e.src,e.buffer]),{riveFile:a,status:c}},t.useStateMachineInput=function(e,t,n,a){var i=r.useState(null),s=i[0],c=i[1];return r.useEffect(function(){function r(){if(e&&t&&n||c(null),e&&t&&n){var r=e.stateMachineInputs(t);if(r){var o=r.find(function(e){return e.name===n});void 0!==a&&o&&(o.value=a),c(o||null)}}else c(null)}r(),e&&e.on(o.EventType.Load,function(){r()})},[e]),s},Object.keys(o).forEach(function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},473:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return u}});var r=n(2265),o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,s=r.createContext(void 0),c={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=r.useContext(s))?e:c},u=e=>r.useContext(s)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:c=!0,storageKey:l="theme",themes:u=d,defaultTheme:f=i?"system":"light",attribute:y="data-theme",value:b,children:g,nonce:w}=e,[x,S]=r.useState(()=>p(l,f)),[E,C]=r.useState(()=>p(l)),k=b?Object.values(b):u,j=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=v());let r=b?b[t]:t,a=n?m():null,s=document.documentElement;if("class"===y?(s.classList.remove(...k),r&&s.classList.add(r)):r?s.setAttribute(y,r):s.removeAttribute(y),c){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==a||a()},[]),O=r.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(l,t)}catch(e){}},[t]),R=r.useCallback(e=>{C(v(e)),"system"===x&&i&&!t&&j("system")},[x,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(R),R(e),()=>e.removeListener(R)},[R]),r.useEffect(()=>{let e=e=>{e.key===l&&O(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[O]),r.useEffect(()=>{j(null!=t?t:x)},[t,x]);let _=r.useMemo(()=>({theme:x,setTheme:O,forcedTheme:t,resolvedTheme:"system"===x?E:x,themes:i?[...u,"system"]:u,systemTheme:i?E:void 0}),[x,O,t,E,i,u]);return r.createElement(s.Provider,{value:_},r.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:c,storageKey:l,themes:u,defaultTheme:f,attribute:y,value:b,children:g,attrs:k,nonce:w}),g)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:s,enableColorScheme:c,defaultTheme:l,value:u,attrs:d,nonce:f}=e,h="system"===l,p="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),m=c?(o.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),s="";return c&&n&&!t&&o.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||r?s+="c.add(".concat(a,")"):s+="null":r&&(s+="d[s](n,".concat(a,")")),s},y=t?"!function(){".concat(p).concat(v(t),"}()"):s?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(l,!1,!1)+"}").concat(m,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}else{").concat(v(l,!1,!1),";}").concat(m,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:y}})}),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(5601),o=n.n(r)},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),s=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var c;(null==n?void 0:null==(c=n.tagName)?void 0:c.toLowerCase())===e&&s.push(n)}let l=t.map(o).filter(e=>{for(let t=0,n=s.length;t<n;t++)if(a(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>n.insertBefore(e,r)),r.content=(i-s.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return y}});let r=n(8454),o=n(4385),a=n(7437),i=r._(n(4887)),s=o._(n(2265)),c=n(6590),l=n(905),u=n(9189),d=new Map,f=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:s="afterInteractive",onError:c,stylesheets:u}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,c);return}let v=()=>{o&&o(),f.add(m)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),v()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(a?(y.innerHTML=a.__html||"",v()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",v()):t&&(y.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||h.includes(n))continue;let e=l.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===s&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",s),u&&p(u),document.body.appendChild(y)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function y(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:l="afterInteractive",onError:d,stylesheets:h,...p}=e,{updateScripts:v,scripts:y,getIsSsr:b,appDir:g,nonce:w}=(0,s.useContext)(c.HeadManagerContext),x=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;x.current||(o&&e&&f.has(e)&&o(),x.current=!0)},[o,t,n]);let S=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!S.current&&("afterInteractive"===l?m(e):"lazyOnload"===l&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))})),S.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(v?(y[l]=(y[l]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...p}]),v(y)):b&&b()?f.add(t||n):b&&!b()&&m(e)),g){if(h&&h.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:w}:{as:"script",nonce:w}),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===l&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:w}:{as:"script",nonce:w})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return s}});let r=n(8454),o=n(497),a=n(8173),i=r._(n(1241));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=a.Image},5141:function(e,t,n){"use strict";n.r(t),n.d(t,{KBarModal:function(){return a}});var r=n(8665),o=n(7437),a=e=>{let{actions:t,isLoading:n}=e;return(0,r.useRegisterActions)(t,[t]),(0,o.jsx)(r.KBarPortal,{children:(0,o.jsx)(r.KBarPositioner,{className:"bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50",children:(0,o.jsx)(r.KBarAnimator,{className:"w-full max-w-xl",children:(0,o.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",children:[(0,o.jsxs)("div",{className:"flex items-center space-x-4 p-4",children:[(0,o.jsx)("span",{className:"block w-5",children:(0,o.jsx)("svg",{className:"text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,o.jsx)(r.KBarSearch,{className:"h-8 w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500"}),(0,o.jsx)("kbd",{className:"inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide text-xs text-gray-400 border-gray-400",children:"ESC"})]}),!n&&(0,o.jsx)(i,{}),n&&(0,o.jsx)("div",{className:"block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600",children:"Loading..."})]})})})})},i=()=>{let{results:e}=(0,r.useMatches)();return e.length?(0,o.jsx)(r.KBarResults,{items:e,onRender:e=>{var t;let{item:n,active:r}=e;return(0,o.jsx)("div",{children:"string"==typeof n?(0,o.jsx)("div",{className:"pt-3",children:(0,o.jsx)("div",{className:"block border-t border-gray-100 px-4 pb-2 pt-6 text-xs font-semibold uppercase text-primary-600 dark:border-gray-800",children:n})}):(0,o.jsxs)("div",{className:"flex cursor-pointer justify-between px-4 py-2 ".concat(r?"bg-primary-600 text-gray-100":"text-gray-700 dark:text-gray-100 bg-transparent"),children:[(0,o.jsxs)("div",{className:"flex space-x-2",children:[n.icon&&(0,o.jsx)("div",{className:"self-center",children:n.icon}),(0,o.jsxs)("div",{className:"block",children:[n.subtitle&&(0,o.jsx)("div",{className:"".concat(r?"text-gray-200":"text-gray-400"," text-xs"),children:n.subtitle}),(0,o.jsx)("div",{children:n.name})]})]}),(null==(t=n.shortcut)?void 0:t.length)?(0,o.jsx)("div",{"aria-hidden":!0,className:"flex flex-row items-center justify-center gap-x-2",children:n.shortcut.map(e=>(0,o.jsx)("kbd",{className:"font-medium h-7 w-6 flex items-center	justify-center text-xs rounded border ".concat(r?"text-gray-200 border-gray-200":"text-gray-400 border-gray-400"),children:e},e))}):null]})})}}):(0,o.jsx)("div",{className:"block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600",children:"No results for your search..."})}},5865:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=(e,t="en-US")=>new Date(e).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})},9032:function(e,t,n){"use strict";n.d(t,{KBarSearchProvider:function(){return u}});var r=n(5865),o=n(5141),a=n(6338),i=n(2265),s=n(8665),c=n(6463),l=n(7437),u=e=>{let{kbarConfig:t,children:n}=e,u=(0,c.useRouter)(),{searchDocumentsPath:d,defaultActions:f,onSearchDocumentsLoad:h}=t,[p,m]=(0,i.useState)([]),[v,y]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=e=>{let t=[];for(let n of e)t.push({id:n.path,name:n.title,keywords:(null==n?void 0:n.summary)||"",section:"Content",subtitle:(0,r.p)(n.date,"en-US"),perform:()=>u.push("/"+n.path)});return t};!v&&d?function(){return(0,a.Cr)(this,null,function*(){if(d){let t=d.indexOf("://")>0||0===d.indexOf("//")?d:new URL(d,window.location.origin),n=yield fetch(t),r=yield n.json();m(h?h(r):e(r)),y(!0)}})}():y(!0)},[f,v,u,d,h]),(0,l.jsxs)(s.KBarProvider,{actions:f,children:[(0,l.jsx)(o.KBarModal,{actions:p,isLoading:!v}),n]})}},7830:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,a={};function i(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||r}function s(){}function c(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||r}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=i.prototype;var l=c.prototype=new s;l.constructor=c,o(l,i.prototype),l.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)u.call(t,o)&&!d.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:null}}},4410:function(e,t,n){"use strict";e.exports=n(7830)},9907:function(){},5709:function(){}}]);