var e=new WeakMap,t=0;function n(n,r={}){let i=r.edgeWidth??3,a=r.edgeFeather??2,o=r.refraction??12;if(![i,a,o].every(e=>Number.isFinite(e)&&e>=0))throw RangeError(`Glass edge width, feather and refraction must be finite, non-negative numbers.`);e.get(n)?.destroy();let s=n.ownerDocument,c;do c=`liquid-glass3-filter-${++t}`;while(s.getElementById(c));let l=s.createElement(`div`);l.className=`liquid-glass3-wrapper`,l.setAttribute(`aria-hidden`,`true`),l.style.setProperty(`--liquid-glass3-filter`,`url(#${c})`);let u=s.createElement(`div`);u.innerHTML=`<svg aria-hidden="true" focusable="false" width="0" height="0" style="position:absolute;pointer-events:none">
  <defs>
    <filter x="0%" y="0%" width="100%" height="100%" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feImage x="0" y="0" preserveAspectRatio="none" result="glass-displacement"></feImage>
      <feDisplacementMap in="SourceGraphic" in2="glass-displacement" scale="24" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
  </defs>
</svg>`;let d=u.firstElementChild;d.querySelector(`filter`).id=c;let f=d.querySelector(`feImage`),p=d.querySelector(`feDisplacementMap`),m=s.createElement(`canvas`),h=m.getContext(`2d`);if(!h)throw Error(`Liquid glass requires a 2D canvas context.`);let g=s.createElement(`style`);g.textContent=`
.liquid-glass3-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
}
.liquid-glass3-wrapper {
  --liquid-glass3-border-radius: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;

  border: 1px solid #00000020;
  background: linear-gradient(180deg, #ffffff10, #fafafa00);
  // box-shadow:
  //   inset 0 2px 4px 0 #fff,
  //   inset 0 -4px 4px 0 hsla(0, 0%, 100%, 0.1),
  //   inset 0 -4px 16px 0 #fff,
  //   inset 0 4px 10px 0 hsla(240, 3%, 45%, 0.07),
  //   0 4px 14px -10px rgba(53, 53, 79, 0.4),
  //   0 11px 28px -10px rgba(53, 53, 79, 0.1);
  border-radius: var(--liquid-glass3-border-radius);
}

.liquid-glass3-outer {
  backdrop-filter: var(--liquid-glass3-filter);
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: var(--liquid-glass3-border-radius);

  -webkit-mask-image: var(--liquid-glass3-edge-mask);
  mask-image: var(--liquid-glass3-edge-mask);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.liquid-glass3-cover {
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: var(--liquid-glass3-border-radius);
  background: rgba(0, 0, 0, 0.01);
}

.liquid-glass3-sharp {
  position: absolute;
  inset: 0;
  z-index: 3;

  box-shadow:
    inset 1px 1px 0px 0px rgba(255, 255, 255, 0.5),
    inset -1px -1px 0px 0px rgba(255, 255, 255, 0.3);
  border-radius: var(--liquid-glass3-border-radius);
}

.liquid-glass3-reflect {
  position: absolute;
  inset: 1px;
  z-index: 2;

  
  
  
  border-radius: var(--liquid-glass3-border-radius);
}


@media (prefers-color-scheme: dark) {
  
  .liquid-glass3-wrapper {
    --liquid-glass3-border-radius: 1rem;
    position: relative;
    display: flex;
    overflow: hidden;

    border: 1px solid #ffffff20;
    background: linear-gradient(180deg, #ffffff10, #fafafa00);
    // box-shadow:
    //   inset 0 2px 4px 0 #00000040,
    //   inset 0 -4px 4px 0 hsla(0, 0%, 0%, 0.1),
    //   inset 0 -4px 16px 0 #00000060,
    //   inset 0 4px 10px 0 hsla(0, 0%, 13%, 0.07),
    //   0 4px 14px -10px rgba(112, 112, 167, 0.4),
    //   0 11px 28px -10px rgba(53, 53, 79, 0.1);
    border-radius: var(--liquid-glass3-border-radius);
  }

  .liquid-glass3-cover {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: var(--liquid-glass3-border-radius);
    background: rgba(0, 0, 0, 0.02);
  }

  .liquid-glass3-sharp {
    position: absolute;
    inset: 0;
    z-index: 3;
    box-shadow:
      inset 1px 1px 0px 0px rgba(0, 0, 0, 0.1),
      inset -1px -1px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: var(--liquid-glass3-border-radius);
  }

  .liquid-glass3-reflect {
    position: absolute;
    inset: 1px;
    z-index: 2;
    border-radius: var(--liquid-glass3-border-radius);
  }
}
`,l.append(g);for(let e of[`outer`,`cover`,`sharp`,`reflect`]){let t=s.createElement(`div`);t.className=`liquid-glass3-${e}`,l.append(t)}n.append(d,l);let _=()=>{let e=l.clientWidth,t=l.clientHeight;if(!e||!t)return;let n=s.defaultView.getComputedStyle(l).borderTopLeftRadius,r=Math.min(parseFloat(n)||0,e/2,t/2);m.width=e,m.height=t;let c=h.createImageData(e,t),u=e/2,d=t/2,g=Math.max(1,Math.min(i+a*3,r||8,u,d)),_=Math.min(o,u/2,d/2);for(let n=0;n<t;n++)for(let t=0;t<e;t++){let i=t+.5-u,a=n+.5-d,o=Math.abs(i)-(u-r),s=Math.abs(a)-(d-r),l=Math.max(o,0),f=Math.max(s,0),p=Math.hypot(l,f),m=p+Math.min(Math.max(o,s),0)-r,h=0,_=0;p>0?(h=l/p*Math.sign(i),_=f/p*Math.sign(a)):o>s?h=Math.sign(i):_=Math.sign(a);let v=Math.max(0,Math.min(1,-m/g)),y=1-v*v*(3-2*v),b=(n*e+t)*4;c.data[b]=Math.round((.5-h*y*.5)*255),c.data[b+1]=Math.round((.5-_*y*.5)*255),c.data[b+2]=128,c.data[b+3]=255}h.putImageData(c,0,0),f.setAttribute(`width`,String(e)),f.setAttribute(`height`,String(t)),f.setAttribute(`href`,m.toDataURL()),p.setAttribute(`scale`,String(_*2));let v=Math.min(i,e/2,t/2),y=Math.max(0,e-v*2),b=Math.max(0,t-v*2),x=`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="0 0 ${e} ${t}">
      <defs>
        <filter id="feather" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="${a}"/></filter>
        <mask id="edge" maskUnits="userSpaceOnUse" x="0" y="0" width="${e}" height="${t}" style="mask-type:luminance">
          <rect width="${e}" height="${t}" fill="white"/>
          <rect x="${v}" y="${v}" width="${y}" height="${b}" rx="${Math.max(0,r-v)}" fill="black" filter="url(#feather)"/>
        </mask>
      </defs>
      <rect width="${e}" height="${t}" fill="white" mask="url(#edge)"/>
    </svg>`;l.style.setProperty(`--liquid-glass3-edge-mask`,`url("data:image/svg+xml,${encodeURIComponent(x)}")`)},v=new s.defaultView.ResizeObserver(_);v.observe(l),_();let y=!1,b={element:l,destroy(){y||(y=!0,v.disconnect(),l.remove(),d.remove(),e.delete(n))}};return e.set(n,b),b}var r=class extends HTMLElement{cleanup;connectedCallback(){this.cleanup?.();let e=this.querySelector(`.hover-background`),t=this.querySelector(`.hover-glass`),r=n(t),i=this.querySelector(`.previews`),a=[...this.querySelectorAll(`[data-post-index]`)],o=[...this.querySelectorAll(`[data-preview-index]`)];document.body.append(i);let s=matchMedia(`(prefers-reduced-motion: reduce)`),c=matchMedia(`(hover: hover) and (pointer: fine)`),l=new AbortController,{signal:u}=l,d=null,f=null,p=null,m,h=0,g=0,_={x:0,y:0},v={x:0,y:0},y={x:0,y:0},b=()=>{if(!f)return;let e=t.getBoundingClientRect();t.style.setProperty(`--border-x`,`${y.x-e.left}px`),t.style.setProperty(`--border-y`,`${y.y-e.top}px`)},x=e=>{y.x=e.clientX,y.y=e.clientY,t.classList.add(`is-pointer-hovered`),b()},S=()=>{t.style.transform=`translate(${_.x*4}px, ${_.y*4}px)`;let e=d?.querySelector(`.post-content`);e&&(e.style.transform=`translate(${_.x}px, ${_.y}px)`)},C=e=>{let t=g?Math.min(e-g,64):1e3/60;g=e;let n=1-.86**(t/(1e3/60));_.x+=(v.x-_.x)*n,_.y+=(v.y-_.y)*n;let r=Math.abs(v.x-_.x)+Math.abs(v.y-_.y)<.001;r&&Object.assign(_,v),S(),O(),b(),h=r&&!f&&!E()?0:requestAnimationFrame(C)},w=(e=0,t=0)=>{v.x=s.matches?0:e,v.y=s.matches?0:t,s.matches?(cancelAnimationFrame(h),h=0,Object.assign(_,v),S()):h||=(g=0,requestAnimationFrame(C))},T=()=>{for(let e of o){let t=e.dataset.previewIndex===d?.dataset.postIndex;e.classList.toggle(`is-active`,t);let n=e.querySelector(`video`);n&&(t&&!s.matches&&!document.hidden?(n.muted=!0,n.play().catch(()=>{})):n.pause())}},E=()=>d!==null&&!s.matches&&[`pending`,`entering`].includes(document.documentElement.dataset.pageMotion??``),D=()=>{let e=d?.closest(`[data-motion-item]`);if(!E()||!e){t.style.opacity=``,t.style.filter=``,i.style.opacity=``,i.style.filter=``,i.style.transform=``;return}let n=getComputedStyle(e);t.style.opacity=n.opacity,t.style.filter=n.filter;let r=1,a=0,o=[];for(let t=e;t&&t!==document.body;t=t.parentElement){let e=getComputedStyle(t);r*=Number(e.opacity),e.filter!==`none`&&o.push(e.filter),e.transform!==`none`&&(a+=new DOMMatrixReadOnly(e.transform).m42)}i.style.opacity=String(r),i.style.filter=o.join(` `)||`none`,i.style.transform=`translateY(${a}px)`},O=()=>{if(D(),e.classList.toggle(`is-tracking-motion`,E()),!d)return;let t=this.getBoundingClientRect(),n=d.getBoundingClientRect();Object.assign(e.style,{left:`${n.left-t.left}px`,top:`${n.top-t.top}px`,width:`${n.width}px`,height:`${n.height}px`})},k=()=>{let e=this.getBoundingClientRect(),t=Math.min(16,innerWidth/4),n=e.right+48,r=Math.min(484,innerWidth-t*2,Math.max(180,innerWidth-n-32)),a=Math.max(t,Math.min(n,innerWidth-r-t));i.style.setProperty(`--preview-left`,`${a}px`),i.style.setProperty(`--preview-width`,`${Math.max(300,r)}px`),O(),T()},A=t=>{if(clearTimeout(m),d!==t){let e=d?.querySelector(`.post-content`);e&&(e.style.transform=``),d=t,w()}this.dataset.activeIndex=t.dataset.postIndex,k(),e.classList.add(`is-active`)},j=()=>{clearTimeout(m);let n=d?.querySelector(`.post-content`);n&&(n.style.transform=``),d=null,t.classList.remove(`is-pointer-hovered`),delete this.dataset.activeIndex,e.classList.remove(`is-active`),w(),T()},M=()=>{w();let e=f??p;e?A(e):(clearTimeout(m),m=setTimeout(j,s.matches?0:1500))};for(let e of a){e.addEventListener(`pointerenter`,t=>{!c.matches||t.pointerType===`touch`||(f=e,A(e),x(t),w())},{signal:u}),e.addEventListener(`pointermove`,t=>{if(f!==e||t.pointerType===`touch`)return;x(t);let n=e.getBoundingClientRect(),r=e=>Math.max(-1,Math.min(1,e));w(r(((t.clientX-n.left)/n.width-.5)*2),r(((t.clientY-n.top)/n.height-.5)*2))},{signal:u});let n=()=>{f===e&&(f=null,t.classList.remove(`is-pointer-hovered`),M())};e.addEventListener(`pointerleave`,n,{signal:u}),e.addEventListener(`pointercancel`,n,{signal:u}),e.addEventListener(`focus`,()=>{e.matches(`:focus-visible`)&&(p=e,A(e))},{signal:u}),e.addEventListener(`blur`,()=>{p===e&&(p=null,M())},{signal:u})}let N=()=>{f=p=null,j()};window.addEventListener(`resize`,k,{signal:u}),document.addEventListener(`site:motion-start`,N,{signal:u}),document.addEventListener(`site:motion-complete`,k,{signal:u}),window.addEventListener(`blur`,N,{signal:u}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&N()},{signal:u}),s.addEventListener(`change`,()=>{w(),T()},{signal:u}),c.addEventListener(`change`,N,{signal:u});let P=new ResizeObserver(k);P.observe(this);for(let e of a)P.observe(e);k(),this.cleanup=()=>{l.abort(),r.destroy(),P.disconnect(),j(),cancelAnimationFrame(h),this.append(i)}}disconnectedCallback(){this.cleanup?.()}};customElements.get(`home-post-list`)||customElements.define(`home-post-list`,r);