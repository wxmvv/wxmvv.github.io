var e=0;function t(e){if(!Number.isFinite(e)||e<0)throw RangeError(`LiquidGlass refraction must be a finite, non-negative number.`);return e}function n(n,r={}){let i=t(r.refraction??24),a=n.ownerDocument,o;do o=`liquid-glass-filter-${++e}`;while(a.getElementById(o));let s=a.createElement(`div`);s.className=`liquid-glass-effect`,s.setAttribute(`aria-hidden`,`true`),s.style.setProperty(`--glass-filter`,`url(#${o})`),s.innerHTML=`<svg class="liquid-glass-effect-filter" aria-hidden="true" focusable="false" width="0" height="0">
  <defs>
    <filter  x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.008 0.008"
        numOctaves="2"
        seed="92"
        result="noise"></feTurbulence>
      <feGaussianBlur in="noise" stdDeviation="0.02" result="refraction"></feGaussianBlur>
      <feDisplacementMap
        in="SourceGraphic"
        in2="refraction"
        scale="24"
        xChannelSelector="R"
        yChannelSelector="G"></feDisplacementMap>
    </filter>
  </defs>
</svg>`,s.querySelector(`filter`).id=o;let c=s.querySelector(`feDisplacementMap`);c.setAttribute(`scale`,String(i));let l=a.createElement(`style`);return l.textContent=`
  .liquid-glass-effect-filter {
    position: absolute;
    pointer-events: none;
  }

  /* Separate the refracted backdrop from the crisp rim and the readable post text. */
  .liquid-glass-effect {
    position: relative;
    pointer-events: none;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    background: rgb(125 135 150 / 5%);
    box-shadow: 0 3px 12px -6px rgb(20 30 45 / 18%);
  }

  .liquid-glass-effect::before,
  .liquid-glass-effect::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  .liquid-glass-effect::before {
    -webkit-backdrop-filter: blur(2px) saturate(1.15);
    backdrop-filter: blur(2px) saturate(1.15);
    filter: var(--glass-filter);
  }

  .liquid-glass-effect::after {
    background: linear-gradient(145deg, rgb(255 255 255 / 12%), transparent 55%);
    box-shadow:
      inset 2px 2px 0 -2px rgb(255 255 255 / 70%),
      inset 0 0 3px 1px rgb(255 255 255 / 70%),
      inset 0 -1px 1px rgb(35 45 60 / 12%);
  }

  .dark .liquid-glass-effect {
    background: rgb(255 255 255 / 5%);
    box-shadow: 0 3px 12px -6px rgb(0 0 0 / 35%);
  }

  .dark .liquid-glass-effect::after {
    box-shadow:
      inset 2px 2px 0 -2px rgb(255 255 255 / 45%),
      inset 0 0 3px 1px rgb(255 255 255 / 22%),
      inset 0 -1px 1px rgb(255 255 255 / 10%);
  }
`,s.append(l),n.append(s),{element:s,setRefraction(e){c.setAttribute(`scale`,String(t(e)))},destroy(){s.remove()}}}var r=class extends HTMLElement{cleanup;connectedCallback(){this.cleanup?.();let e=this.querySelector(`.hover-background`),t=this.querySelector(`.hover-glass`),r=n(t);r.setRefraction(100);let i=this.querySelector(`.previews`),a=[...this.querySelectorAll(`[data-post-index]`)],o=[...this.querySelectorAll(`[data-preview-index]`)];document.body.append(i);let s=matchMedia(`(prefers-reduced-motion: reduce)`),c=matchMedia(`(hover: hover) and (pointer: fine)`),l=new AbortController,{signal:u}=l,d=null,f=null,p=null,m,h=0,g=0,_={x:0,y:0},v={x:0,y:0},y=()=>{t.style.transform=`translate(${_.x*4}px, ${_.y*4}px)`;let e=d?.querySelector(`.post-content`);e&&(e.style.transform=`translate(${_.x}px, ${_.y}px)`)},b=e=>{let t=g?Math.min(e-g,64):1e3/60;g=e;let n=1-.86**(t/(1e3/60));_.x+=(v.x-_.x)*n,_.y+=(v.y-_.y)*n;let r=Math.abs(v.x-_.x)+Math.abs(v.y-_.y)<.001;r&&Object.assign(_,v),y(),w(),h=r&&!C()?0:requestAnimationFrame(b)},x=(e=0,t=0)=>{v.x=s.matches?0:e,v.y=s.matches?0:t,s.matches?(cancelAnimationFrame(h),h=0,Object.assign(_,v),y()):h||=(g=0,requestAnimationFrame(b))},S=()=>{for(let e of o){let t=e.dataset.previewIndex===d?.dataset.postIndex;e.classList.toggle(`is-active`,t);let n=e.querySelector(`video`);n&&(t&&!s.matches&&!document.hidden?(n.muted=!0,n.play().catch(()=>{})):n.pause())}},C=()=>d!==null&&document.documentElement.dataset.pageMotion===`entering`,w=()=>{if(e.classList.toggle(`is-tracking-motion`,C()),!d)return;let t=this.getBoundingClientRect(),n=d.getBoundingClientRect();Object.assign(e.style,{left:`${n.left-t.left}px`,top:`${n.top-t.top}px`,width:`${n.width}px`,height:`${n.height}px`})},T=()=>{let e=this.getBoundingClientRect(),t=Math.min(16,innerWidth/4),n=e.right+48,r=Math.min(484,innerWidth-t*2,Math.max(180,innerWidth-n-32)),a=Math.max(t,Math.min(n,innerWidth-r-t));i.style.setProperty(`--preview-left`,`${a}px`),i.style.setProperty(`--preview-width`,`${Math.max(300,r)}px`),w(),S()},E=t=>{if(clearTimeout(m),d!==t){let e=d?.querySelector(`.post-content`);e&&(e.style.transform=``),d=t,x()}this.dataset.activeIndex=t.dataset.postIndex,T(),e.classList.add(`is-active`)},D=()=>{clearTimeout(m);let t=d?.querySelector(`.post-content`);t&&(t.style.transform=``),d=null,delete this.dataset.activeIndex,e.classList.remove(`is-active`),x(),S()},O=()=>{x();let e=f??p;e?E(e):(clearTimeout(m),m=setTimeout(D,s.matches?0:1500))};for(let e of a){e.addEventListener(`pointerenter`,t=>{!c.matches||t.pointerType===`touch`||(f=e,E(e))},{signal:u}),e.addEventListener(`pointermove`,t=>{if(f!==e||t.pointerType===`touch`)return;let n=e.getBoundingClientRect(),r=e=>Math.max(-1,Math.min(1,e));x(r(((t.clientX-n.left)/n.width-.5)*2),r(((t.clientY-n.top)/n.height-.5)*2))},{signal:u});let t=()=>{f===e&&(f=null,O())};e.addEventListener(`pointerleave`,t,{signal:u}),e.addEventListener(`pointercancel`,t,{signal:u}),e.addEventListener(`focus`,()=>{e.matches(`:focus-visible`)&&(p=e,E(e))},{signal:u}),e.addEventListener(`blur`,()=>{p===e&&(p=null,O())},{signal:u})}let k=()=>{f=p=null,D()};window.addEventListener(`resize`,T,{signal:u}),document.addEventListener(`site:motion-start`,k,{signal:u}),document.addEventListener(`site:motion-complete`,T,{signal:u}),window.addEventListener(`blur`,k,{signal:u}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&k()},{signal:u}),s.addEventListener(`change`,()=>{x(),S()},{signal:u}),c.addEventListener(`change`,k,{signal:u});let A=new ResizeObserver(T);A.observe(this);for(let e of a)A.observe(e);T(),this.cleanup=()=>{l.abort(),r.destroy(),A.disconnect(),D(),cancelAnimationFrame(h),this.append(i)}}disconnectedCallback(){this.cleanup?.()}};customElements.get(`home-post-list`)||customElements.define(`home-post-list`,r);