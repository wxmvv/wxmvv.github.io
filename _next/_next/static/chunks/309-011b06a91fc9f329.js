(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{9608:function(e,t,r){"use strict";let n,a,l;r.d(t,{E:function(){return F}});var o=r(2265),i=r(371),s=r(1944),u=r(4941),c=r(8615),d=r(9026);let f=(0,o.createContext)(null);function p(){let[e,t]=(0,o.useState)([]);return[e.length>0?e.join(" "):void 0,(0,o.useMemo)(()=>function(e){let r=(0,i.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,o.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return o.createElement(f.Provider,{value:n},e.children)},[t])]}let m=Object.assign((0,d.yV)(function(e,t){let r=(0,s.M)(),{id:n="headlessui-description-".concat(r),...a}=e,l=function e(){let t=(0,o.useContext)(f);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=(0,c.T)(t);(0,u.e)(()=>l.register(n),[n,l.register]);let p={ref:i,...l.props,id:n};return(0,d.sY)({ourProps:p,theirProps:a,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{});var h=r(3403);let v=(0,o.createContext)(null);function g(){let[e,t]=(0,o.useState)([]);return[e.length>0?e.join(" "):void 0,(0,o.useMemo)(()=>function(e){let r=(0,i.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,o.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return o.createElement(v.Provider,{value:n},e.children)},[t])]}let b=Object.assign((0,d.yV)(function(e,t){let r=(0,s.M)(),{id:n="headlessui-label-".concat(r),passive:a=!1,...l}=e,i=function e(){let t=(0,o.useContext)(v);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),f=(0,c.T)(t);(0,u.e)(()=>i.register(n),[n,i.register]);let p={ref:f,...i.props,id:n};return a&&("onClick"in p&&(delete p.htmlFor,delete p.onClick),"onClick"in l&&delete l.onClick),(0,d.sY)({ourProps:p,theirProps:l,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})}),{});var y=r(8245),E=r(5185),x=r(71),k=r(7667),T=((n=T||{})[n.None=1]="None",n[n.Focusable=2]="Focusable",n[n.Hidden=4]="Hidden",n);let w=(0,d.yV)(function(e,t){var r;let{features:n=1,...a}=e,l={ref:t,"aria-hidden":(2&n)==2||(null!=(r=a["aria-hidden"])?r:void 0),hidden:(4&n)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,d.sY)({ourProps:l,theirProps:a,slot:{},defaultTag:"div",name:"Hidden"})});var S=r(858),C=r(4360);function R(e,t){return e?e+"["+t+"]":t}var N=r(2419),_=r(2009),j=((a=j||{})[a.RegisterOption=0]="RegisterOption",a[a.UnregisterOption=1]="UnregisterOption",a);let L={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,C.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},M=(0,o.createContext)(null);M.displayName="RadioGroupDataContext";let O=(0,o.createContext)(null);function A(e,t){return(0,N.E)(t.type,L,e,t)}O.displayName="RadioGroupActionsContext";var P=((l=P||{})[l.Empty=1]="Empty",l[l.Active=2]="Active",l);let F=Object.assign((0,d.yV)(function(e,t){let r=(0,s.M)(),{id:n="headlessui-radiogroup-".concat(r),value:a,defaultValue:l,form:u,name:f,onChange:m,by:v=(e,t)=>e===t,disabled:b=!1,...E}=e,x=(0,i.z)("string"==typeof v?(e,t)=>(null==e?void 0:e[v])===(null==t?void 0:t[v]):v),[S,N]=(0,o.useReducer)(A,{options:[]}),j=S.options,[L,P]=g(),[F,I]=p(),H=(0,o.useRef)(null),z=(0,c.T)(H,t),[D,B]=function(e,t,r){let[n,a]=(0,o.useState)(r),l=void 0!==e,s=(0,o.useRef)(l),u=(0,o.useRef)(!1),c=(0,o.useRef)(!1);return!l||s.current||u.current?l||!s.current||c.current||(c.current=!0,s.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,s.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:n,(0,i.z)(e=>(l||a(e),null==t?void 0:t(e)))]}(a,m,l),G=(0,o.useMemo)(()=>j.find(e=>!e.propsRef.current.disabled),[j]),K=(0,o.useMemo)(()=>j.some(e=>x(e.propsRef.current.value,D)),[j,D]),V=(0,i.z)(e=>{var t;if(b||x(e,D))return!1;let r=null==(t=j.find(t=>x(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==B||B(e),!0)});(0,k.B)({container:H.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let q=(0,i.z)(e=>{let t=H.current;if(!t)return;let r=(0,_.r)(t),n=j.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case h.R.Enter:!function(e){var t,r;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let t of n.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(r=n.requestSubmit)||r.call(n)}}(e.currentTarget);break;case h.R.ArrowLeft:case h.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,C.jA)(n,C.TO.Previous|C.TO.WrapAround)===C.fE.Success){let e=j.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&V(e.propsRef.current.value)}break;case h.R.ArrowRight:case h.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,C.jA)(n,C.TO.Next|C.TO.WrapAround)===C.fE.Success){let e=j.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&V(e.propsRef.current.value)}break;case h.R.Space:{e.preventDefault(),e.stopPropagation();let t=j.find(e=>e.element.current===(null==r?void 0:r.activeElement));t&&V(t.propsRef.current.value)}}}),U=(0,i.z)(e=>(N({type:0,...e}),()=>N({type:1,id:e.id}))),Y=(0,o.useMemo)(()=>({value:D,firstOption:G,containsCheckedOption:K,disabled:b,compare:x,...S}),[D,G,K,b,x,S]),Z=(0,o.useMemo)(()=>({registerOption:U,change:V}),[U,V]),J=(0,o.useMemo)(()=>({value:D}),[D]),W=(0,o.useRef)(null),Q=(0,y.G)();return(0,o.useEffect)(()=>{W.current&&void 0!==l&&Q.addEventListener(W.current,"reset",()=>{V(l)})},[W,V]),o.createElement(I,{name:"RadioGroup.Description"},o.createElement(P,{name:"RadioGroup.Label"},o.createElement(O.Provider,{value:Z},o.createElement(M.Provider,{value:Y},null!=f&&null!=D&&(function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let[a,l]of Object.entries(t))!function t(r,n,a){if(Array.isArray(a))for(let[e,l]of a.entries())t(r,R(n,e.toString()),l);else a instanceof Date?r.push([n,a.toISOString()]):"boolean"==typeof a?r.push([n,a?"1":"0"]):"string"==typeof a?r.push([n,a]):"number"==typeof a?r.push([n,"".concat(a)]):null==a?r.push([n,""]):e(a,n,r)}(n,R(r,a),l);return n})({[f]:D}).map((e,t)=>{let[r,n]=e;return o.createElement(w,{features:T.Hidden,ref:0===t?e=>{var t;W.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,d.oA)({key:r,as:"input",type:"radio",checked:null!=n,hidden:!0,readOnly:!0,form:u,disabled:b,name:r,value:n})})}),(0,d.sY)({ourProps:{ref:z,id:n,role:"radiogroup","aria-labelledby":L,"aria-describedby":F,onKeyDown:q},theirProps:E,slot:J,defaultTag:"div",name:"RadioGroup"})))))}),{Option:(0,d.yV)(function(e,t){var r;let n=(0,s.M)(),{id:a="headlessui-radiogroup-option-".concat(n),value:l,disabled:f=!1,...m}=e,h=(0,o.useRef)(null),v=(0,c.T)(h,t),[b,y]=g(),[k,T]=p(),{addFlag:w,removeFlag:C,hasFlag:R}=(0,E.V)(1),N=(0,x.E)({value:l,disabled:f}),_=function e(t){let r=(0,o.useContext)(M);if(null===r){let r=Error("<".concat(t," /> is missing a parent <RadioGroup /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option"),j=function e(t){let r=(0,o.useContext)(O);if(null===r){let r=Error("<".concat(t," /> is missing a parent <RadioGroup /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option");(0,u.e)(()=>j.registerOption({id:a,element:h,propsRef:N}),[a,j,h,N]);let L=(0,i.z)(e=>{var t;if((0,S.P)(e.currentTarget))return e.preventDefault();j.change(l)&&(w(2),null==(t=h.current)||t.focus())}),A=(0,i.z)(e=>{if((0,S.P)(e.currentTarget))return e.preventDefault();w(2)}),P=(0,i.z)(()=>C(2)),F=(null==(r=_.firstOption)?void 0:r.id)===a,I=_.disabled||f,H=_.compare(_.value,l),z={ref:v,id:a,role:"radio","aria-checked":H?"true":"false","aria-labelledby":b,"aria-describedby":k,"aria-disabled":!!I||void 0,tabIndex:I?-1:H||!_.containsCheckedOption&&F?0:-1,onClick:I?void 0:L,onFocus:I?void 0:A,onBlur:I?void 0:P},D=(0,o.useMemo)(()=>({checked:H,disabled:I,active:R(2)}),[H,I,R]);return o.createElement(T,{name:"RadioGroup.Description"},o.createElement(y,{name:"RadioGroup.Label"},(0,d.sY)({ourProps:z,theirProps:m,slot:D,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:b,Description:m})},8784:function(e,t,r){"use strict";let n;r.d(t,{u:function(){return O}});var a=r(2265),l=r(8245),o=r(371),i=r(5185),s=r(159),u=r(4941),c=r(71),d=r(3333),f=r(8615),p=r(975),m=r(2419);function h(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];e&&r.length>0&&e.classList.add(...r)}function v(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];e&&r.length>0&&e.classList.remove(...r)}var g=r(615),b=r(3125),y=r(9026);function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(/\s+/).filter(e=>e.length>1)}let x=(0,a.createContext)(null);x.displayName="TransitionContext";var k=((n=k||{}).Visible="visible",n.Hidden="hidden",n);let T=(0,a.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function S(e,t){let r=(0,c.E)(e),n=(0,a.useRef)([]),i=(0,s.t)(),u=(0,l.G)(),d=(0,o.z)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.l4.Hidden,a=n.current.findIndex(t=>{let{el:r}=t;return r===e});-1!==a&&((0,m.E)(t,{[y.l4.Unmount](){n.current.splice(a,1)},[y.l4.Hidden](){n.current[a].state="hidden"}}),u.microTask(()=>{var e;!w(n)&&i.current&&(null==(e=r.current)||e.call(r))}))}),f=(0,o.z)(e=>{let t=n.current.find(t=>{let{el:r}=t;return r===e});return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>d(e,y.l4.Unmount)}),p=(0,a.useRef)([]),h=(0,a.useRef)(Promise.resolve()),v=(0,a.useRef)({enter:[],leave:[],idle:[]}),g=(0,o.z)((e,r,n)=>{p.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(t=>{let[r]=t;return r!==e})),null==t||t.chains.current[r].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(v.current[r].map(e=>{let[t,r]=e;return r})).then(()=>e())})]),"enter"===r?h.current=h.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),b=(0,o.z)((e,t,r)=>{Promise.all(v.current[t].splice(0).map(e=>{let[t,r]=e;return r})).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>r(t))});return(0,a.useMemo)(()=>({children:n,register:f,unregister:d,onStart:g,onStop:b,wait:h,chains:v}),[f,d,n,g,b,v,h])}function C(){}T.displayName="NestingContext";let R=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function N(e){var t;let r={};for(let n of R)r[n]=null!=(t=e[n])?t:C;return r}let _=y.AN.RenderStrategy,j=(0,y.yV)(function(e,t){let{show:r,appear:n=!1,unmount:l=!0,...i}=e,s=(0,a.useRef)(null),c=(0,f.T)(s,t);(0,d.H)();let p=(0,g.oJ)();if(void 0===r&&null!==p&&(r=(p&g.ZM.Open)===g.ZM.Open),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,h]=(0,a.useState)(r?"visible":"hidden"),v=S(()=>{h("hidden")}),[b,E]=(0,a.useState)(!0),k=(0,a.useRef)([r]);(0,u.e)(()=>{!1!==b&&k.current[k.current.length-1]!==r&&(k.current.push(r),E(!1))},[k,r]);let C=(0,a.useMemo)(()=>({show:r,appear:n,initial:b}),[r,n,b]);(0,a.useEffect)(()=>{if(r)h("visible");else if(w(v)){let e=s.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[r,v]);let R={unmount:l},N=(0,o.z)(()=>{var t;b&&E(!1),null==(t=e.beforeEnter)||t.call(e)}),j=(0,o.z)(()=>{var t;b&&E(!1),null==(t=e.beforeLeave)||t.call(e)});return a.createElement(T.Provider,{value:v},a.createElement(x.Provider,{value:C},(0,y.sY)({ourProps:{...R,as:a.Fragment,children:a.createElement(L,{ref:c,...R,...i,beforeEnter:N,beforeLeave:j})},theirProps:{},defaultTag:a.Fragment,features:_,visible:"visible"===m,name:"Transition"})))}),L=(0,y.yV)(function(e,t){var r,n,k;let C;let{beforeEnter:R,afterEnter:j,beforeLeave:L,afterLeave:M,enter:O,enterFrom:A,enterTo:P,entered:F,leave:I,leaveFrom:H,leaveTo:z,...D}=e,B=(0,a.useRef)(null),G=(0,f.T)(B,t),K=null==(r=D.unmount)||r?y.l4.Unmount:y.l4.Hidden,{show:V,appear:q,initial:U}=function(){let e=(0,a.useContext)(x);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,Z]=(0,a.useState)(V?"visible":"hidden"),J=function(){let e=(0,a.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:W,unregister:Q}=J;(0,a.useEffect)(()=>W(B),[W,B]),(0,a.useEffect)(()=>{if(K===y.l4.Hidden&&B.current){if(V&&"visible"!==Y){Z("visible");return}return(0,m.E)(Y,{hidden:()=>Q(B),visible:()=>W(B)})}},[Y,B,W,Q,V,K]);let X=(0,c.E)({base:E(D.className),enter:E(O),enterFrom:E(A),enterTo:E(P),entered:E(F),leave:E(I),leaveFrom:E(H),leaveTo:E(z)}),$=(k={beforeEnter:R,afterEnter:j,beforeLeave:L,afterLeave:M},C=(0,a.useRef)(N(k)),(0,a.useEffect)(()=>{C.current=N(k)},[k]),C),ee=(0,d.H)();(0,a.useEffect)(()=>{if(ee&&"visible"===Y&&null===B.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[B,Y,ee]);let et=q&&V&&U,er=ee&&(!U||q)?V?"enter":"leave":"idle",en=(0,i.V)(0),ea=(0,o.z)(e=>(0,m.E)(e,{enter:()=>{en.addFlag(g.ZM.Opening),$.current.beforeEnter()},leave:()=>{en.addFlag(g.ZM.Closing),$.current.beforeLeave()},idle:()=>{}})),el=(0,o.z)(e=>(0,m.E)(e,{enter:()=>{en.removeFlag(g.ZM.Opening),$.current.afterEnter()},leave:()=>{en.removeFlag(g.ZM.Closing),$.current.afterLeave()},idle:()=>{}})),eo=S(()=>{Z("hidden"),Q(B)},J),ei=(0,a.useRef)(!1);!function(e){let{immediate:t,container:r,direction:n,classes:a,onStart:o,onStop:i}=e,d=(0,s.t)(),f=(0,l.G)(),g=(0,c.E)(n);(0,u.e)(()=>{t&&(g.current="enter")},[t]),(0,u.e)(()=>{let e=(0,p.k)();f.add(e.dispose);let t=r.current;if(t&&"idle"!==g.current&&d.current){var n,l,s;let r,u,c,d,f,b,y;return e.dispose(),o.current(g.current),e.add((n=a.current,l="enter"===g.current,s=()=>{e.dispose(),i.current(g.current)},u=l?"enter":"leave",c=(0,p.k)(),d=void 0!==s?(r={called:!1},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!r.called)return r.called=!0,s(...t)}):()=>{},"enter"===u&&(t.removeAttribute("hidden"),t.style.display=""),f=(0,m.E)(u,{enter:()=>n.enter,leave:()=>n.leave}),b=(0,m.E)(u,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),y=(0,m.E)(u,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom}),v(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),h(t,...n.base,...f,...y),c.nextFrame(()=>{v(t,...n.base,...f,...y),h(t,...n.base,...f,...b),function(e,t){let r=(0,p.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,o]=[n,a].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),i=l+o;if(0!==i){r.group(r=>{r.setTimeout(()=>{t(),r.dispose()},i),r.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&r.dispose()})});let n=r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();r.add(()=>t()),r.dispose}(t,()=>(v(t,...n.base,...f),h(t,...n.base,...n.entered),d()))}),c.dispose)),e.dispose}},[n])}({immediate:et,container:B,classes:X,direction:er,onStart:(0,c.E)(e=>{ei.current=!0,eo.onStart(B,e,ea)}),onStop:(0,c.E)(e=>{ei.current=!1,eo.onStop(B,e,el),"leave"!==e||w(eo)||(Z("hidden"),Q(B))})});let es=D;return et?es={...es,className:(0,b.A)(D.className,...X.current.enter,...X.current.enterFrom)}:ei.current&&(es.className=(0,b.A)(D.className,null==(n=B.current)?void 0:n.className),""===es.className&&delete es.className),a.createElement(T.Provider,{value:eo},a.createElement(g.up,{value:(0,m.E)(Y,{visible:g.ZM.Open,hidden:g.ZM.Closed})|en.flags},(0,y.sY)({ourProps:{ref:G},theirProps:es,defaultTag:"div",features:_,visible:"visible"===Y,name:"Transition.Child"})))}),M=(0,y.yV)(function(e,t){let r=null!==(0,a.useContext)(x),n=null!==(0,g.oJ)();return a.createElement(a.Fragment,null,!r&&n?a.createElement(j,{ref:t,...e}):a.createElement(L,{ref:t,...e}))}),O=Object.assign(j,{Child:M,Root:j})},5185:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(2265),a=r(159);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,r]=(0,n.useState)(e),l=(0,a.t)(),o=(0,n.useCallback)(e=>{l.current&&r(t=>t|e)},[t,l]),i=(0,n.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:(0,n.useCallback)(e=>{l.current&&r(t=>t&~e)},[r,l]),toggleFlag:(0,n.useCallback)(e=>{l.current&&r(t=>t^e)},[r])}}},159:function(e,t,r){"use strict";r.d(t,{t:function(){return l}});var n=r(2265),a=r(4941);function l(){let e=(0,n.useRef)(!1);return(0,a.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},473:function(e,t,r){"use strict";r.d(t,{F:function(){return u},f:function(){return c}});var n=r(2265),a=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=n.createContext(void 0),s={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=n.useContext(i))?e:s},c=e=>n.useContext(i)?e.children:n.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:o=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:c=d,defaultTheme:f=o?"system":"light",attribute:g="data-theme",value:b,children:y,nonce:E}=e,[x,k]=n.useState(()=>m(u,f)),[T,w]=n.useState(()=>m(u)),S=b?Object.values(b):c,C=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=v());let n=b?b[t]:t,l=r?h():null,i=document.documentElement;if("class"===g?(i.classList.remove(...S),n&&i.classList.add(n)):n?i.setAttribute(g,n):i.removeAttribute(g),s){let e=a.includes(f)?f:null,r=a.includes(t)?t:e;i.style.colorScheme=r}null==l||l()},[]),R=n.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(u,t)}catch(e){}},[t]),N=n.useCallback(e=>{w(v(e)),"system"===x&&o&&!t&&C("system")},[x,t]);n.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),n.useEffect(()=>{let e=e=>{e.key===u&&R(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),n.useEffect(()=>{C(null!=t?t:x)},[t,x]);let _=n.useMemo(()=>({theme:x,setTheme:R,forcedTheme:t,resolvedTheme:"system"===x?T:x,themes:o?[...c,"system"]:c,systemTheme:o?T:void 0}),[x,R,t,T,o,c]);return n.createElement(i.Provider,{value:_},n.createElement(p,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:o,enableColorScheme:s,storageKey:u,themes:c,defaultTheme:f,attribute:g,value:b,children:y,attrs:S,nonce:E}),y)},p=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:o,enableSystem:i,enableColorScheme:s,defaultTheme:u,value:c,attrs:d,nonce:f}=e,p="system"===u,m="class"===o?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),h=s?(a.includes(u)?u:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=c?c[e]:e,l=t?e+"|| ''":"'".concat(n,"'"),i="";return s&&r&&!t&&a.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===o?t||n?i+="c.add(".concat(l,")"):i+="null":n&&(i+="d[s](n,".concat(l,")")),i},g=t?"!function(){".concat(m).concat(v(t),"}()"):i?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(v(c?"x[e]":"e",!0),"}").concat(p?"":"else{"+v(u,!1,!1)+"}").concat(h,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(v(c?"x[e]":"e",!0),"}else{").concat(v(u,!1,!1),";}").concat(h,"}catch(t){}}();");return n.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})}),m=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return o},isEqualNode:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:r}=e,a=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let l=n[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?a[l]=!!r[e]:a.setAttribute(l,r[e])}let{children:l,dangerouslySetInnerHTML:o}=r;return o?a.innerHTML=o.__html||"":l&&(a.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),a}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,a="";if(n){let{children:e}=n.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),o=Number(n.content),i=[];for(let t=0,r=n.previousElementSibling;t<o;t++,r=(null==r?void 0:r.previousElementSibling)||null){var s;(null==r?void 0:null==(s=r.tagName)?void 0:s.toLowerCase())===e&&i.push(r)}let u=t.map(a).filter(e=>{for(let t=0,r=i.length;t<r;t++)if(l(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>r.insertBefore(e,n)),n.content=(o-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return g}});let n=r(7657),a=r(9803),l=r(7437),o=n._(r(4887)),i=a._(r(2265)),s=r(6590),u=r(905),c=r(9189),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},h=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:o="",strategy:i="afterInteractive",onError:s,stylesheets:c}=e,h=r||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(n,s);return}let v=()=>{a&&a(),f.add(h)},g=document.createElement("script"),b=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),n&&n.call(this,t),v()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,n]of(l?(g.innerHTML=l.__html||"",v()):o?(g.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",v()):t&&(g.src=t,d.set(t,b)),Object.entries(e))){if(void 0===n||p.includes(r))continue;let e=u.DOMAttributeNames[r]||r.toLowerCase();g.setAttribute(e,n)}"worker"===i&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",i),c&&m(c),document.body.appendChild(g)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function g(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:v,scripts:g,getIsSsr:b,appDir:y,nonce:E}=(0,i.useContext)(s.HeadManagerContext),x=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;x.current||(a&&e&&f.has(e)&&a(),x.current=!0)},[a,t,r]);let k=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!k.current&&("afterInteractive"===u?h(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),k.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(v?(g[u]=(g[u]||[]).concat([{id:t,src:r,onLoad:n,onReady:a,onError:d,...m}]),v(g)):b&&b()?f.add(t||r):b&&!b()&&h(e)),y){if(p&&p.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return r?(o.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:E}:{as:"script",nonce:E}),(0,l.jsx)("script",{nonce:E,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:E,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===u&&r&&o.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:E}:{as:"script",nonce:E})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5141:function(e,t,r){"use strict";r.r(t),r.d(t,{KBarModal:function(){return l}});var n=r(8665),a=r(7437),l=e=>{let{actions:t,isLoading:r}=e;return(0,n.useRegisterActions)(t,[t]),(0,a.jsx)(n.KBarPortal,{children:(0,a.jsx)(n.KBarPositioner,{className:"bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50",children:(0,a.jsx)(n.KBarAnimator,{className:"w-full max-w-xl",children:(0,a.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4 p-4",children:[(0,a.jsx)("span",{className:"block w-5",children:(0,a.jsx)("svg",{className:"text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,a.jsx)(n.KBarSearch,{className:"h-8 w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500"}),(0,a.jsx)("kbd",{className:"inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide text-xs text-gray-400 border-gray-400",children:"ESC"})]}),!r&&(0,a.jsx)(o,{}),r&&(0,a.jsx)("div",{className:"block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600",children:"Loading..."})]})})})})},o=()=>{let{results:e}=(0,n.useMatches)();return e.length?(0,a.jsx)(n.KBarResults,{items:e,onRender:e=>{var t;let{item:r,active:n}=e;return(0,a.jsx)("div",{children:"string"==typeof r?(0,a.jsx)("div",{className:"pt-3",children:(0,a.jsx)("div",{className:"block border-t border-gray-100 px-4 pb-2 pt-6 text-xs font-semibold uppercase text-primary-600 dark:border-gray-800",children:r})}):(0,a.jsxs)("div",{className:"flex cursor-pointer justify-between px-4 py-2 ".concat(n?"bg-primary-600 text-gray-100":"text-gray-700 dark:text-gray-100 bg-transparent"),children:[(0,a.jsxs)("div",{className:"flex space-x-2",children:[r.icon&&(0,a.jsx)("div",{className:"self-center",children:r.icon}),(0,a.jsxs)("div",{className:"block",children:[r.subtitle&&(0,a.jsx)("div",{className:"".concat(n?"text-gray-200":"text-gray-400"," text-xs"),children:r.subtitle}),(0,a.jsx)("div",{children:r.name})]})]}),(null==(t=r.shortcut)?void 0:t.length)?(0,a.jsx)("div",{"aria-hidden":!0,className:"flex flex-row items-center justify-center gap-x-2",children:r.shortcut.map(e=>(0,a.jsx)("kbd",{className:"font-medium h-7 w-6 flex items-center	justify-center text-xs rounded border ".concat(n?"text-gray-200 border-gray-200":"text-gray-400 border-gray-400"),children:e},e))}):null]})})}}):(0,a.jsx)("div",{className:"block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600",children:"No results for your search..."})}},9032:function(e,t,r){"use strict";r.d(t,{KBarSearchProvider:function(){return c}});var n=r(5865),a=r(5141),l=r(6338),o=r(2265),i=r(8665),s=r(6463),u=r(7437),c=e=>{let{kbarConfig:t,children:r}=e,c=(0,s.useRouter)(),{searchDocumentsPath:d,defaultActions:f,onSearchDocumentsLoad:p}=t,[m,h]=(0,o.useState)([]),[v,g]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=e=>{let t=[];for(let r of e)t.push({id:r.path,name:r.title,keywords:(null==r?void 0:r.summary)||"",section:"Content",subtitle:(0,n.p)(r.date,"en-US"),perform:()=>c.push("/"+r.path)});return t};!v&&d?function(){return(0,l.Cr)(this,null,function*(){if(d){let t=d.indexOf("://")>0||0===d.indexOf("//")?d:new URL(d,window.location.origin),r=yield fetch(t),n=yield r.json();h(p?p(n):e(n)),g(!0)}})}():g(!0)},[f,v,c,d,p]),(0,u.jsxs)(i.KBarProvider,{actions:f,children:[(0,u.jsx)(a.KBarModal,{actions:m,isLoading:!v}),r]})}},9907:function(){},5709:function(){},8785:function(e){e.exports={style:{fontFamily:"'__Space_Grotesk_587f35', '__Space_Grotesk_Fallback_587f35'",fontStyle:"normal"},className:"__className_587f35",variable:"__variable_587f35"}}}]);