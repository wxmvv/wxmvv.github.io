"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{5868:function(t,e,i){let s;i.r(e),i.d(e,{GiscusWidget:function(){return tk}});var r,n,o=i(5789);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach(function(e){(0,o.Z)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=globalThis,d=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),u=new WeakMap,p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(d&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=u.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&u.set(e,t))}return t}toString(){return this.cssText}},g=t=>new p("string"==typeof t?t:t+"",void 0,c),_=(t,e)=>{if(d)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),s=a.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},f=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return g(e)})(t):t,{is:$,defineProperty:m,getOwnPropertyDescriptor:v,getOwnPropertyNames:y,getOwnPropertySymbols:A,getPrototypeOf:S}=Object,E=globalThis,b=E.trustedTypes,w=b?b.emptyScript:"",C=E.reactiveElementPolyfillSupport,P=(t,e)=>t,O={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},U=(t,e)=>!$(t,e),M={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:U};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&m(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=v(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){let n=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??M}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;let t=S(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){let t=this.properties;for(let e of[...y(t),...A(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(f(i));else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){let n=((null==(i=s.converter)?void 0:i.toAttribute)!==void 0?s.converter:O).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:(null==(i=t.converter)?void 0:i.fromAttribute)!==void 0?t.converter:O;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??U)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[P("elementProperties")]=new Map,N[P("finalized")]=new Map,null==C||C({ReactiveElement:N}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=globalThis,R=T.trustedTypes,I=R?R.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,k="?"+H,j=`<${k}>`,L=document,D=()=>L.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Y=Array.isArray,G=t=>Y(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),B=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,q=/>/g,K=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,F=/"/g,Z=/^(?:script|style|textarea|title)$/i,Q=function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];return{_$litType$:1,strings:t,values:i}},X=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),te=new WeakMap,ti=L.createTreeWalker(L,129);function ts(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(e):e}let tr=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=W;for(let e=0;e<i;e++){let i=t[e],l,h,a=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(h=o.exec(i)));)d=o.lastIndex,o===W?"!--"===h[1]?o=V:void 0!==h[1]?o=q:void 0!==h[2]?(Z.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=K):void 0!==h[3]&&(o=K):o===K?">"===h[0]?(o=r??W,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?K:'"'===h[3]?F:J):o===F||o===J?o=K:o===V||o===q?o=W:(o=K,r=void 0);let c=o===K&&t[e+1].startsWith("/>")?" ":"";n+=o===W?i+j:a>=0?(s.push(l),i.slice(0,a)+x+i.slice(a)+H+c):i+H+(-2===a?e:c)}return[ts(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class tn{constructor(t,e){let i,{strings:s,_$litType$:r}=t;this.parts=[];let n=0,o=0,l=s.length-1,h=this.parts,[a,d]=tr(s,r);if(this.el=tn.createElement(a,e),ti.currentNode=this.el.content,2===r){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=ti.nextNode())&&h.length<l;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(x)){let e=d[o++],s=i.getAttribute(t).split(H),r=/([.?@])?(.*)/.exec(e);h.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?td:"?"===r[1]?tc:"@"===r[1]?tu:ta}),i.removeAttribute(t)}else t.startsWith(H)&&(h.push({type:6,index:n}),i.removeAttribute(t));if(Z.test(i.tagName)){let t=i.textContent.split(H),e=t.length-1;if(e>0){i.textContent=R?R.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],D()),ti.nextNode(),h.push({type:2,index:++n});i.append(t[e],D())}}}else if(8===i.nodeType){if(i.data===k)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(H,t+1));)h.push({type:7,index:n}),t+=H.length-1}}n++}}static createElement(t,e){let i=L.createElement("template");return i.innerHTML=t,i}}function to(t,e){var i,s;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=arguments.length>3?arguments[3]:void 0;if(e===X)return e;let o=void 0!==n?null==(i=r._$Co)?void 0:i[n]:r._$Cl,l=z(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(s=null==o?void 0:o._$AO)||s.call(o,!1),void 0===l?o=void 0:(o=new l(t))._$AT(t,r,n),void 0!==n?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),void 0!==o&&(e=to(t,o._$AS(t,e.values),o,n)),e}let tl=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??L).importNode(e,!0);ti.currentNode=s;let r=ti.nextNode(),n=0,o=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new th(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tp(r,this,t)),this._$AV.push(e),l=i[++o]}n!==(null==l?void 0:l.index)&&(r=ti.nextNode(),n++)}return ti.currentNode=L,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class th{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&(null==t?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;z(t=to(this,t,e))?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):G(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==tt&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=tn.createElement(ts(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{let t=new tl(r,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=te.get(t.strings);return void 0===e&&te.set(t.strings,e=new tn(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new th(this.S(D()),this.S(D()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null==(t=this._$AP)||t.call(this,!1,!0,i);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class ta{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=tt}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,r=this.strings,n=!1;if(void 0===r)(n=!z(t=to(this,t,e,0))||t!==this._$AH&&t!==X)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=to(this,l[i+s],e,s))===X&&(o=this._$AH[s]),n||(n=!z(o)||o!==this._$AH[s]),o===tt?t=tt:t!==tt&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class td extends ta{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tt?void 0:t}}class tc extends ta{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==tt)}}class tu extends ta{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=to(this,t,e,0)??tt)===X)return;let i=this._$AH,s=t===tt&&i!==tt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==tt&&(i===tt||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class tp{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){to(this,t)}}let tg=T.litHtmlPolyfillSupport;null==tg||tg(tn,th),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.1.2");let t_=(t,e,i)=>{let s=(null==i?void 0:i.renderBefore)??e,r=s._$litPart$;if(void 0===r){let t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=r=new th(e.insertBefore(D(),t),t,void 0,i??{})}return r._$AI(t),r},tf=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=t_(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return X}};tf._$litElement$=!0,tf.finalized=!0,null==(n=globalThis.litElementHydrateSupport)||n.call(globalThis,{LitElement:tf});let t$=globalThis.litElementPolyfillSupport;null==t$||t$({LitElement:tf}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tm={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:U},tv=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tm,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,{kind:s,metadata:r}=i,n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ty(t){return(e,i)=>"object"==typeof i?tv(t,e,i):((t,e,i)=>{let s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?h(h({},t),{},{wrapped:!0}):t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tA=t=>void 0===t.strings,tS=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},tE=(t,e)=>{var i;let s=t._$AN;if(void 0===s)return!1;for(let t of s)null==(i=t._$AO)||i.call(t,e,!1),tE(t,e);return!0},tb=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while((null==i?void 0:i.size)===0)},tw=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),tO(e)}};function tC(t){void 0!==this._$AN?(tb(this),this._$AM=t,tw(this)):this._$AM=t}function tP(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(s))for(let t=i;t<s.length;t++)tE(s[t],!1),tb(s[t]);else null!=s&&(tE(s,!1),tb(s))}else tE(this,t)}}let tO=t=>{2==t.type&&(t._$AP??(t._$AP=tP),t._$AQ??(t._$AQ=tC))};class tU extends tS{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),tw(this),this.isConnected=t._$AU}_$AO(t){var e,i;let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null==(e=this.reconnected)||e.call(this):null==(i=this.disconnected)||i.call(this)),s&&(tE(this,t),tb(this))}setValue(t){if(tA(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tM=()=>new tN;class tN{}let tT=new WeakMap,tR=(s=class extends tU{render(t){return tt}update(t,e){var i;let[s]=e,r=s!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=s,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),tt}rt(t){if("function"==typeof this.Y){let e=this.ht??globalThis,i=tT.get(e);void 0===i&&(i=new WeakMap,tT.set(e,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=tT.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return{_$litDirective$:s,values:e}});var tI=Object.defineProperty,tx=Object.getOwnPropertyDescriptor,tH=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?tx(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&tI(e,i,n),n};let tk=class extends tf{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=tM(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){let t=new URL(location.href),e=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")??"";if(this.__session="",i){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(e)try{this.__session=JSON.parse(e)}catch(t){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==t?void 0:t.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;let{data:e}=t;if(!("object"==typeof e&&e.giscus))return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!e.giscus.error)return;let i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){console.warn(`${this._formatError(i)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(i.includes("Discussion not found")){console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;null!=(e=this.iframeRef)&&e.contentWindow&&this.hasLoaded&&this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){let t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(t,e,i){if(!this.hasUpdated||"host"===t){super.requestUpdate(t,e,i);return}this.updateConfig()}getMetaContent(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){let t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){let t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s},n=this._host,o=this.lang?`/${this.lang}`:"",l=new URLSearchParams(r);return`${n}${o}/widget?${l.toString()}`}render(){return Q`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${tR(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};tk.styles=(function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];return new p(1===t.length?t[0]:i.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,c)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,tH([ty({reflect:!0})],tk.prototype,"host",2),tH([ty({reflect:!0})],tk.prototype,"repo",2),tH([ty({reflect:!0})],tk.prototype,"repoId",2),tH([ty({reflect:!0})],tk.prototype,"category",2),tH([ty({reflect:!0})],tk.prototype,"categoryId",2),tH([ty({reflect:!0})],tk.prototype,"mapping",2),tH([ty({reflect:!0})],tk.prototype,"term",2),tH([ty({reflect:!0})],tk.prototype,"strict",2),tH([ty({reflect:!0})],tk.prototype,"reactionsEnabled",2),tH([ty({reflect:!0})],tk.prototype,"emitMetadata",2),tH([ty({reflect:!0})],tk.prototype,"inputPosition",2),tH([ty({reflect:!0})],tk.prototype,"theme",2),tH([ty({reflect:!0})],tk.prototype,"lang",2),tH([ty({reflect:!0})],tk.prototype,"loading",2),tk=tH([(r="giscus-widget",customElements.get(r)?t=>t:(t,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)})],tk)}}]);