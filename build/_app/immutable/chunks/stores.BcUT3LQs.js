import{g as u}from"./scheduler.CzUhcx96.js";import{w as d}from"./index.BszXJJMo.js";function h(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function _(t){return t*t*t}function w(t){const s=t-1;return s*s*s+1}function x(t){return--t*t*t*t*t+1}function I(t,{delay:s=0,duration:o=400,easing:n=w,x:c=0,y:e=0,opacity:a=0}={}){const r=getComputedStyle(t),i=+r.opacity,l=r.transform==="none"?"":r.transform,p=i*(1-a),[y,m]=u(c),[g,$]=u(e);return{delay:s,duration:o,easing:n,css:(f,b)=>`
			transform: ${l} translate(${(1-f)*y}${m}, ${(1-f)*g}${$});
			opacity: ${i-p*b}`}}function O(t,{delay:s=0,speed:o,duration:n,easing:c=h}={}){let e=t.getTotalLength();const a=getComputedStyle(t);return a.strokeLinecap!=="butt"&&(e+=parseInt(a.strokeWidth)),n===void 0?o===void 0?n=800:n=e/o:typeof n=="function"&&(n=n(e)),{delay:s,duration:n,easing:c,css:(r,i)=>`
			stroke-dasharray: ${e};
			stroke-dashoffset: ${i*e};
		`}}const S=d({homeTransition:!1,writingsTransition:!1,appsTransition:!1,edgeTransition:!1,edgeDelay:1500});export{S as a,_ as b,w as c,O as d,I as f,x as q};
