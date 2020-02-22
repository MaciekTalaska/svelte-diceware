var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){(null!=e||t.value)&&(t.value=e)}function g(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let v;function m(t){v=t}function _(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}const $=[],w=[],y=[],x=[],b=Promise.resolve();let C=!1;function E(t){y.push(t)}let A=!1;const k=new Set;function S(){if(!A){A=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];m(e),z(e.$$)}for($.length=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];k.has(e)||(k.add(e),e())}y.length=0}while($.length);for(;x.length;)x.pop()();C=!1,A=!1,k.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const F=new Set;function M(t,e){t&&t.i&&(F.delete(t),t.i(e))}function N(t,n,l){const{fragment:a,on_mount:c,on_destroy:u,after_update:s}=t.$$;a&&a.m(n,l),E(()=>{const n=c.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(E)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&($.push(t),C||(C=!0,b.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,r,l,a,c,u,s=[-1]){const i=v;m(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:s};let p=!1;d.ctx=l?l(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&j(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&M(e.$$.fragment),N(e,r.target,r.anchor),S()),m(i)}class L{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}let O=function(t){return function(t){return new Promise((e,n)=>{let o=new Headers;o.append("Content-type","text/plain; charset=UTF-8"),fetch(t,o).then(t=>t.text()).then(t=>{let n=function(t){let e=Array.from(t.split(/\n/)),n=null;return e.forEach((t,o)=>{let[r,l]=t.split(/\s+/);null==n&&(n=new Array(e.length)),n[o]=l||r}),{words:n,size:e.length}}(t);e(n)})})}(location.href+"diceware-"+t+".txt").then(t=>t)};let T=function(){let t=new Uint32Array(1);return window.crypto.getRandomValues(t),t[0]};function U(e){let n,r,l,v,m,_,$,w,y,x,b,C,A,k,S,z,F,M,N,P,j,q,L,O,T,U,B=!1;function D(){B=!0,e[11].call(k)}return{c(){n=s("div"),r=s("div"),l=s("label"),l.textContent="language:",v=f(),m=s("select"),_=s("option"),_.textContent="English",$=s("option"),$.textContent="Polish",w=s("option"),w.textContent="Finnish",y=s("option"),y.textContent="Maori",x=f(),b=s("div"),C=s("label"),C.textContent="words per password (4-10):",A=f(),k=s("input"),S=f(),z=s("div"),F=s("label"),F.textContent="separator:",M=f(),N=s("input"),P=f(),j=s("div"),q=s("button"),q.textContent="Generate password",L=f(),O=s("p"),T=i(e[1]),p(l,"class","column-left svelte-1eo4gsh"),p(l,"for","language_ctrl"),_.__value="en",_.value=_.__value,$.__value="pl",$.value=$.__value,w.__value="fi",w.value=w.__value,y.__value="mi",y.value=y.__value,p(m,"class","column-right svelte-1eo4gsh"),p(m,"id","language_ctrl"),void 0===e[3]&&E(()=>e[9].call(m)),p(r,"class","svelte-1eo4gsh"),p(C,"class","column-left svelte-1eo4gsh"),p(C,"for","password_ctrl"),p(k,"id","password_ctrl"),p(k,"class","column-right svelte-1eo4gsh"),p(k,"type","number"),p(k,"onkeyup","this.value=this.value.replace(/[^\\d]/,'');"),p(k,"min","4"),p(k,"max","10"),p(k,"vlaue",e[4]),p(b,"class","svelte-1eo4gsh"),p(F,"class","column-left svelte-1eo4gsh"),p(F,"for","separator_ctrl"),p(N,"id","separator_ctrl"),p(N,"class","column-right svelte-1eo4gsh"),p(z,"class","svelte-1eo4gsh"),p(q,"class","svelte-1eo4gsh"),p(j,"class","svelte-1eo4gsh"),p(n,"class","container svelte-1eo4gsh")},m(t,o){c(t,n,o),a(n,r),a(r,l),a(r,v),a(r,m),a(m,_),a(m,$),a(m,w),a(m,y),g(m,e[3]),a(n,x),a(n,b),a(b,C),a(b,A),a(b,k),h(k,e[0]),a(n,S),a(n,z),a(z,F),a(z,M),a(z,N),h(N,e[2]),a(n,P),a(n,j),a(j,q),a(n,L),a(n,O),a(O,T),U=[d(m,"change",e[9]),d(m,"change",e[10]),d(k,"input",D),d(k,"change",e[7]),d(N,"input",e[12]),d(q,"click",e[6])]},p(t,[e]){8&e&&g(m,t[3]),!B&&1&e&&h(k,t[0]),B=!1,4&e&&N.value!==t[2]&&h(N,t[2]),2&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(T,t[1])},i:t,o:t,d(t){t&&u(n),o(U)}}}function B(t,e,n){let o=4,r="",l="-",a="en",c=new Map;async function u(){if(c.has(a))return;let t=await O(a);c.set(a,t)}_((async function(){await u()}));return[o,r,l,a,4,u,function(){n(1,r=""),c.get(a).words;for(var t=0;t<o;t++){c.get(a).diceCount;let t=T()%c.get(a).size,e=c.get(a).words[t];n(1,""!==r?r+=l+e:r=e)}},function(){o>10&&n(0,o=10),o<4&&n(0,o=4)},c,function(){a=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(3,a)},async t=>u(),function(){var t;t=this.value,o=""===t?void 0:+t,n(0,o)},function(){l=this.value,n(2,l)}]}class D extends L{constructor(t){super(),q(this,t,B,U,l,{})}}function G(e){let n,o,r,l;const i=new D({});return{c(){var t;n=s("main"),o=s("h1"),o.textContent="Diceware password generator in Svelte",r=f(),(t=i.$$.fragment)&&t.c(),p(n,"class","svelte-1na4wt1")},m(t,e){c(t,n,e),a(n,o),a(n,r),N(i,n,null),l=!0},p:t,i(t){l||(M(i.$$.fragment,t),l=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),(void 0).c.push(()=>{F.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(i.$$.fragment,t),l=!1},d(t){t&&u(n),P(i)}}}return new class extends L{constructor(t){super(),q(this,t,null,G,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
