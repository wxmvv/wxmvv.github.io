"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{2144:function(e,t,n){let r,o;n.d(t,{Y8:function(){return j},Ee:function(){return _}});var l=n(8700),i=n(4123),a=n(2265);function u(e,t){return null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t&&"id"in e&&"id"in t?e.id===t.id:e===t}var s=n(371),c=n(4941),d=n(71),f=n(8615),m=n(3360),p=n(4887),h=n(8245);function v(e,t){return e?e+"["+t+"]":t}var b=n(9026),g=((r=g||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let y=(0,b.yV)(function(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(2&r)==2||(null!=(n=o["aria-hidden"])?n:void 0),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,b.sY)({ourProps:l,theirProps:o,slot:{},defaultTag:"span",name:"Hidden"})}),E=(0,a.createContext)(null);function R(e){let{children:t}=e,n=(0,a.useContext)(E);if(!n)return a.createElement(a.Fragment,null,t);let{target:r}=n;return r?(0,p.createPortal)(a.createElement(a.Fragment,null,t),r):null}function T(e){let{data:t,form:n,disabled:r,onReset:o,overrides:l}=e,[i,u]=(0,a.useState)(null),s=(0,h.G)();return(0,a.useEffect)(()=>{if(o&&i)return s.addEventListener(i,"reset",o)},[i,n,o]),a.createElement(R,null,a.createElement(w,{setForm:u,formId:n}),(function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let[o,l]of Object.entries(t))!function t(n,r,o){if(Array.isArray(o))for(let[e,l]of o.entries())t(n,v(r,e.toString()),l);else o instanceof Date?n.push([r,o.toISOString()]):"boolean"==typeof o?n.push([r,o?"1":"0"]):"string"==typeof o?n.push([r,o]):"number"==typeof o?n.push([r,"".concat(o)]):null==o?n.push([r,""]):e(o,r,n)}(r,v(n,o),l);return r})(t).map(e=>{let[t,o]=e;return a.createElement(y,{features:g.Hidden,...(0,b.oA)({key:t,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,disabled:r,name:t,value:o,...l})})}))}function w(e){let{setForm:t,formId:n}=e;return(0,a.useEffect)(()=>{if(n){let e=document.getElementById(n);e&&t(e)}},[t,n]),n?null:a.createElement(y,{features:g.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:e=>{if(!e)return;let n=e.closest("form");n&&t(n)}})}var C=n(2343),S=n(858),O=n(4360),k=n(2419),P=n(2009),x=n(7253),F=n(3403),A=n(5456),M=((o=M||{})[o.RegisterOption=0]="RegisterOption",o[o.UnregisterOption=1]="UnregisterOption",o);let N={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,O.z2)(n,e=>e.element.current)}},1(e,t){let n=e.options.slice(),r=e.options.findIndex(e=>e.id===t.id);return -1===r?e:(n.splice(r,1),{...e,options:n})}},I=(0,a.createContext)(null);function z(e){let t=(0,a.useContext)(I);if(null===t){let t=Error("<".concat(e," /> is missing a parent <RadioGroup /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}I.displayName="RadioGroupDataContext";let L=(0,a.createContext)(null);function G(e){let t=(0,a.useContext)(L);if(null===t){let t=Error("<".concat(e," /> is missing a parent <RadioGroup /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function D(e,t){return(0,k.E)(t.type,N,e,t)}L.displayName="RadioGroupActionsContext";let H=(0,b.yV)(function(e,t){let n=(0,a.useId)(),r=(0,m.B)(),{id:o="headlessui-radiogroup-".concat(n),value:l,form:i,name:c,onChange:d,by:p,disabled:h=r||!1,defaultValue:v,...g}=e,y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return(0,a.useCallback)((t,n)=>"string"==typeof e?(null==t?void 0:t[e])===(null==n?void 0:n[e]):e(t,n),[e])}(p),[E,R]=(0,a.useReducer)(D,{options:[]}),w=E.options,[C,S]=(0,A.bE)(),[k,M]=(0,x.fw)(),N=(0,a.useRef)(null),z=(0,f.T)(N,t),G=function(e){let[t]=(0,a.useState)(e);return t}(v),[H,V]=function(e,t,n){let[r,o]=(0,a.useState)(n),l=void 0!==e,i=(0,a.useRef)(l),u=(0,a.useRef)(!1),c=(0,a.useRef)(!1);return!l||i.current||u.current?l||!i.current||c.current||(c.current=!0,i.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,i.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:r,(0,s.z)(e=>(l||o(e),null==t?void 0:t(e)))]}(l,d,G),j=(0,a.useMemo)(()=>w.find(e=>!e.propsRef.current.disabled),[w]),_=(0,a.useMemo)(()=>w.some(e=>y(e.propsRef.current.value,H)),[w,H]),U=(0,s.z)(e=>{var t;if(h||y(e,H))return!1;let n=null==(t=w.find(t=>y(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==V||V(e),!0)}),Y=(0,s.z)(e=>{let t=N.current;if(!t)return;let n=(0,P.r)(t),r=w.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case F.R.Enter:!function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget);break;case F.R.ArrowLeft:case F.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,O.jA)(r,O.TO.Previous|O.TO.WrapAround)===O.fE.Success){let e=w.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&U(e.propsRef.current.value)}break;case F.R.ArrowRight:case F.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,O.jA)(r,O.TO.Next|O.TO.WrapAround)===O.fE.Success){let e=w.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&U(e.propsRef.current.value)}break;case F.R.Space:{e.preventDefault(),e.stopPropagation();let t=w.find(e=>e.element.current===(null==n?void 0:n.activeElement));t&&U(t.propsRef.current.value)}}}),Z=(0,s.z)(e=>(R({type:0,...e}),()=>R({type:1,id:e.id}))),B=(0,a.useMemo)(()=>({value:H,firstOption:j,containsCheckedOption:_,disabled:h,compare:y,...E}),[H,j,_,h,y,E]),J=(0,a.useMemo)(()=>({registerOption:Z,change:U}),[Z,U]),K=(0,a.useMemo)(()=>({value:H}),[H]),W=(0,a.useCallback)(()=>{if(void 0!==G)return U(G)},[U,G]);return a.createElement(M,{name:"RadioGroup.Description"},a.createElement(S,{name:"RadioGroup.Label"},a.createElement(L.Provider,{value:J},a.createElement(I.Provider,{value:B},null!=c&&a.createElement(T,{disabled:h,data:{[c]:H||"on"},overrides:{type:"radio",checked:null!=H},form:i,onReset:W}),(0,b.sY)({ourProps:{ref:z,id:o,role:"radiogroup","aria-labelledby":C,"aria-describedby":k,onKeyDown:Y},theirProps:g,slot:K,defaultTag:"div",name:"RadioGroup"})))))}),V=(0,b.yV)(function(e,t){var n;let r=z("RadioGroup.Option"),o=G("RadioGroup.Option"),u=(0,a.useId)(),{id:m="headlessui-radiogroup-option-".concat(u),value:p,disabled:h=r.disabled||!1,autoFocus:v=!1,...g}=e,y=(0,a.useRef)(null),E=(0,f.T)(y,t),[R,T]=(0,A.bE)(),[w,C]=(0,x.fw)(),O=(0,d.E)({value:p,disabled:h});(0,c.e)(()=>o.registerOption({id:m,element:y,propsRef:O}),[m,o,y,O]);let k=(0,s.z)(e=>{var t;if((0,S.P)(e.currentTarget))return e.preventDefault();o.change(p)&&(null==(t=y.current)||t.focus())}),P=(null==(n=r.firstOption)?void 0:n.id)===m,{isFocusVisible:F,focusProps:M}=(0,l.F)({autoFocus:v}),{isHovered:N,hoverProps:I}=(0,i.X)({isDisabled:h}),L=r.compare(r.value,p),D=(0,b.dG)({ref:E,id:m,role:"radio","aria-checked":L?"true":"false","aria-labelledby":R,"aria-describedby":w,"aria-disabled":!!h||void 0,tabIndex:h?-1:L||!r.containsCheckedOption&&P?0:-1,onClick:h?void 0:k,autoFocus:v},M,I),H=(0,a.useMemo)(()=>({checked:L,disabled:h,active:F,hover:N,focus:F,autofocus:v}),[L,h,N,F,v]);return a.createElement(C,{name:"RadioGroup.Description"},a.createElement(T,{name:"RadioGroup.Label"},(0,b.sY)({ourProps:D,theirProps:g,slot:H,defaultTag:"div",name:"RadioGroup.Option"})))}),j=(0,b.yV)(function(e,t){var n;let r=z("Radio"),o=G("Radio"),u=(0,a.useId)(),p=(0,C.Q)(),h=(0,m.B)(),{id:v=p||"headlessui-radio-".concat(u),value:g,disabled:y=r.disabled||h||!1,autoFocus:E=!1,...R}=e,T=(0,a.useRef)(null),w=(0,f.T)(T,t),O=(0,A.wp)(),k=(0,x.zH)(),P=(0,d.E)({value:g,disabled:y});(0,c.e)(()=>o.registerOption({id:v,element:T,propsRef:P}),[v,o,T,P]);let F=(0,s.z)(e=>{var t;if((0,S.P)(e.currentTarget))return e.preventDefault();o.change(g)&&(null==(t=T.current)||t.focus())}),{isFocusVisible:M,focusProps:N}=(0,l.F)({autoFocus:E}),{isHovered:I,hoverProps:L}=(0,i.X)({isDisabled:y}),D=(null==(n=r.firstOption)?void 0:n.id)===v,H=r.compare(r.value,g),V=(0,b.dG)({ref:w,id:v,role:"radio","aria-checked":H?"true":"false","aria-labelledby":O,"aria-describedby":k,"aria-disabled":!!y||void 0,tabIndex:y?-1:H||!r.containsCheckedOption&&D?0:-1,autoFocus:E,onClick:y?void 0:F},N,L),j=(0,a.useMemo)(()=>({checked:H,disabled:y,hover:I,focus:M,autofocus:E}),[H,y,I,M,E]);return(0,b.sY)({ourProps:V,theirProps:R,slot:j,defaultTag:"span",name:"Radio"})}),_=Object.assign(H,{Option:V,Radio:j,Label:A.__,Description:x.dk})},2174:function(e,t,n){let r;n.d(t,{u:function(){return P}});var o=n(2265),l=n(8245),i=n(371),a=n(4941),u=n(71),s=n(7398),c=n(3333),d=n(8615),f=n(8545),m=n(615),p=n(3125),h=n(2419),v=n(9026);function b(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||(null!=(t=e.as)?t:w)!==o.Fragment||1===o.Children.count(e.children)}let g=(0,o.createContext)(null);g.displayName="TransitionContext";var y=((r=y||{}).Visible="visible",r.Hidden="hidden",r);let E=(0,o.createContext)(null);function R(e){return"children"in e?R(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function T(e,t){let n;let r=(0,u.E)(e),s=(0,o.useRef)([]),c=(n=(0,o.useRef)(!1),(0,a.e)(()=>(n.current=!0,()=>{n.current=!1}),[]),n),d=(0,l.G)(),f=(0,i.z)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.l4.Hidden,n=s.current.findIndex(t=>{let{el:n}=t;return n===e});-1!==n&&((0,h.E)(t,{[v.l4.Unmount](){s.current.splice(n,1)},[v.l4.Hidden](){s.current[n].state="hidden"}}),d.microTask(()=>{var e;!R(s)&&c.current&&(null==(e=r.current)||e.call(r))}))}),m=(0,i.z)(e=>{let t=s.current.find(t=>{let{el:n}=t;return n===e});return t?"visible"!==t.state&&(t.state="visible"):s.current.push({el:e,state:"visible"}),()=>f(e,v.l4.Unmount)}),p=(0,o.useRef)([]),b=(0,o.useRef)(Promise.resolve()),g=(0,o.useRef)({enter:[],leave:[]}),y=(0,i.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(t=>{let[n]=t;return n!==e})),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(g.current[n].map(e=>{let[t,n]=e;return n})).then(()=>e())})]),"enter"===n?b.current=b.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),E=(0,i.z)((e,t,n)=>{Promise.all(g.current[t].splice(0).map(e=>{let[t,n]=e;return n})).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:s,register:m,unregister:f,onStart:y,onStop:E,wait:b,chains:g}),[m,f,s,y,E,g,b])}E.displayName="NestingContext";let w=o.Fragment,C=v.VN.RenderStrategy,S=(0,v.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...u}=e,f=(0,o.useRef)(null),p=b(e),h=(0,d.T)(...p?[f,t]:null===t?[]:[t]);(0,c.H)();let y=(0,m.oJ)();if(void 0===n&&null!==y&&(n=(y&m.ZM.Open)===m.ZM.Open),void 0===n)throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[w,S]=(0,o.useState)(n?"visible":"hidden"),k=T(()=>{n||S("hidden")}),[P,x]=(0,o.useState)(!0),F=(0,o.useRef)([n]);(0,a.e)(()=>{!1!==P&&F.current[F.current.length-1]!==n&&(F.current.push(n),x(!1))},[F,n]);let A=(0,o.useMemo)(()=>({show:n,appear:r,initial:P}),[n,r,P]);(0,s.m)(n,f,()=>S("hidden")),(0,a.e)(()=>{n?S("visible"):R(k)||null===f.current||S("hidden")},[n,k]);let M={unmount:l},N=(0,i.z)(()=>{var t;P&&x(!1),null==(t=e.beforeEnter)||t.call(e)}),I=(0,i.z)(()=>{var t;P&&x(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(E.Provider,{value:k},o.createElement(g.Provider,{value:A},(0,v.sY)({ourProps:{...M,as:o.Fragment,children:o.createElement(O,{ref:h,...M,...u,beforeEnter:N,beforeLeave:I})},theirProps:{},defaultTag:o.Fragment,features:C,visible:"visible"===w,name:"Transition"})))}),O=(0,v.yV)(function(e,t){var n,r;let{transition:l=!0,beforeEnter:u,afterEnter:s,beforeLeave:y,afterLeave:S,enter:O,enterFrom:k,enterTo:P,entered:x,leave:F,leaveFrom:A,leaveTo:M,...N}=e,I=(0,o.useRef)(null),z=b(e),L=(0,d.T)(...z?[I,t]:null===t?[]:[t]),G=null==(n=N.unmount)||n?v.l4.Unmount:v.l4.Hidden,{show:D,appear:H,initial:V}=function(){let e=(0,o.useContext)(g);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[j,_]=(0,o.useState)(D?"visible":"hidden"),U=function(){let e=(0,o.useContext)(E);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Y,unregister:Z}=U;(0,a.e)(()=>Y(I),[Y,I]),(0,a.e)(()=>{if(G===v.l4.Hidden&&I.current){if(D&&"visible"!==j){_("visible");return}return(0,h.E)(j,{hidden:()=>Z(I),visible:()=>Y(I)})}},[j,I,Y,Z,D,G]);let B=(0,c.H)();(0,a.e)(()=>{if(z&&B&&"visible"===j&&null===I.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[I,j,B,z]);let J=V&&!H,K=H&&D&&V,W=(0,o.useRef)(!1),X=T(()=>{W.current||(_("hidden"),Z(I))},U),q=(0,i.z)(e=>{W.current=!0,X.onStart(I,e?"enter":"leave",e=>{"enter"===e?null==u||u():"leave"===e&&(null==y||y())})}),Q=(0,i.z)(e=>{let t=e?"enter":"leave";W.current=!1,X.onStop(I,t,e=>{"enter"===e?null==s||s():"leave"===e&&(null==S||S())}),"leave"!==t||R(X)||(_("hidden"),Z(I))});(0,o.useEffect)(()=>{z&&l||(q(D),Q(D))},[D,z,l]);let $=!(!l||!z||!B||J),[,ee]=(0,f.Y)($,I,D,{start:q,end:Q}),et=(0,v.oA)({ref:L,className:(null==(r=(0,p.A)(N.className,K&&O,K&&k,ee.enter&&O,ee.enter&&ee.closed&&k,ee.enter&&!ee.closed&&P,ee.leave&&F,ee.leave&&!ee.closed&&A,ee.leave&&ee.closed&&M,!ee.transition&&D&&x))?void 0:r.trim())||void 0,...(0,f.X)(ee)}),en=0;return"visible"===j&&(en|=m.ZM.Open),"hidden"===j&&(en|=m.ZM.Closed),ee.enter&&(en|=m.ZM.Opening),ee.leave&&(en|=m.ZM.Closing),o.createElement(E.Provider,{value:X},o.createElement(m.up,{value:en},(0,v.sY)({ourProps:et,theirProps:N,defaultTag:w,features:C,visible:"visible"===j,name:"Transition.Child"})))}),k=(0,v.yV)(function(e,t){let n=null!==(0,o.useContext)(g),r=null!==(0,m.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(S,{ref:t,...e}):o.createElement(O,{ref:t,...e}))}),P=Object.assign(S,{Child:k,Root:S})},473:function(e,t,n){n.d(t,{F:function(){return s},f:function(){return c}});var r=n(2265),o=["light","dark"],l="(prefers-color-scheme: dark)",i="undefined"==typeof window,a=r.createContext(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=r.useContext(a))?e:u},c=e=>r.useContext(a)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:u=!0,storageKey:s="theme",themes:c=d,defaultTheme:f=i?"system":"light",attribute:b="data-theme",value:g,children:y,nonce:E}=e,[R,T]=r.useState(()=>p(s,f)),[w,C]=r.useState(()=>p(s)),S=g?Object.values(g):c,O=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=v());let r=g?g[t]:t,l=n?h():null,a=document.documentElement;if("class"===b?(a.classList.remove(...S),r&&a.classList.add(r)):r?a.setAttribute(b,r):a.removeAttribute(b),u){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;a.style.colorScheme=n}null==l||l()},[]),k=r.useCallback(e=>{let t="function"==typeof e?e(e):e;T(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),P=r.useCallback(e=>{C(v(e)),"system"===R&&i&&!t&&O("system")},[R,t]);r.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===s&&k(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),r.useEffect(()=>{O(null!=t?t:R)},[t,R]);let x=r.useMemo(()=>({theme:R,setTheme:k,forcedTheme:t,resolvedTheme:"system"===R?w:R,themes:i?[...c,"system"]:c,systemTheme:i?w:void 0}),[R,k,t,w,i,c]);return r.createElement(a.Provider,{value:x},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:u,storageKey:s,themes:c,defaultTheme:f,attribute:b,value:g,children:y,attrs:S,nonce:E}),y)},m=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:a,enableColorScheme:u,defaultTheme:s,value:c,attrs:d,nonce:f}=e,m="system"===s,p="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),h=u?(o.includes(s)?s:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=c?c[e]:e,l=t?e+"|| ''":"'".concat(r,"'"),a="";return u&&n&&!t&&o.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||r?a+="c.add(".concat(l,")"):a+="null":r&&(a+="d[s](n,".concat(l,")")),a},b=t?"!function(){".concat(p).concat(v(t),"}()"):a?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(v(c?"x[e]":"e",!0),"}").concat(m?"":"else{"+v(s,!1,!1)+"}").concat(h,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(v(c?"x[e]":"e",!0),"}else{").concat(v(s,!1,!1),";}").concat(h,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:b}})}),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},6648:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(5601),o=n.n(r)},5601:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return a}});let r=n(8454),o=n(497),l=n(8173),i=r._(n(1241));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=l.Image}}]);