var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let e;return s(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(s(e,n))}function u(t){return null==t?"":t}function c(t,e,n){return t.set(n),e}function d(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function b(){return h(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){t.value=null==e?"":e}function y(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let k;function x(t){k=t}const A=[],_=[],w=[],E=[],N=Promise.resolve();let O=!1;function C(t){w.push(t)}let D=!1;const R=new Set;function G(){if(!D){D=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];x(e),I(e.$$)}for(x(null),A.length=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];R.has(e)||(R.add(e),e())}w.length=0}while(A.length);for(;E.length;)E.pop()();O=!1,D=!1,R.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const K=new Set;function P(t,e){t&&t.i&&(K.delete(t),t.i(e))}function T(t,n,a,s){const{fragment:i,on_mount:l,on_destroy:u,after_update:c}=t.$$;i&&i.m(n,a),s||C((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(C)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(A.push(t),O||(O=!0,N.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,a,s,i,l,u,c=[-1]){const d=k;x(e);const m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:c,skip_bound:!1,root:r.target||d.$$.root};u&&u(m.root);let p=!1;if(m.ctx=a?a(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&B(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();r.intro&&P(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),G()}x(d)}class M{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=[];function S(e,n=t){let o;const r=new Set;function s(t){if(a(e,t)&&(e=t,o)){const t=!U.length;for(const t of r)t[1](),U.push(t,e);if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,i=t){const l=[a,i];return r.add(l),1===r.size&&(o=n(s)||t),a(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}const z=t=>fetch(t).then((t=>t.json()));var F;!function(t){t.FOX="fox",t.BUNNY="bunny",t.DOG="dog",t.DUCK="duck",t.CAT="cat",t.RACCOON="raccoon",t.KANGAROO="kangaroo",t.BIRD="bird",t.PANDA="panda",t.KOALA="koala",t.RED_PANDA="red panda",t.GENERIC="generic"}(F||(F={}));let X=S([{name:F.FOX,url:()=>z("https://randomfox.ca/floof/").then((t=>t.image)),enabled:!0,provider:"https://randomfox.ca/"},{name:F.BUNNY,url:()=>z("https://api.bunnies.io/v2/loop/random/?media=gif").then((t=>t.media.gif)),enabled:!0,provider:"https://www.bunnies.io/"},{name:F.DOG,url:()=>z("https://dog.ceo/api/breeds/image/random").then((t=>t.message)),enabled:!0,provider:"https://dog.ceo"},{name:F.DUCK,url:async()=>"https://random-d.uk/api/randomimg?"+new Date,enabled:!0,provider:"https://random-d.uk/"},{name:F.CAT,url:async()=>"https://cataas.com/cat?"+new Date,enabled:!0,provider:"https://cataas.com/"},{name:F.RACCOON,url:()=>z("https://some-random-api.ml/img/raccoon").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:F.KANGAROO,url:()=>z("https://some-random-api.ml/img/kangaroo").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:F.BIRD,url:()=>z("https://some-random-api.ml/img/birb").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:F.PANDA,url:()=>z("https://some-random-api.ml/img/panda").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:F.KOALA,url:()=>z("https://some-random-api.ml/img/koala").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:F.RED_PANDA,url:()=>z("https://some-random-api.ml/img/red_panda").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:F.GENERIC,url:async()=>"https://picsum.photos/500/600?"+new Date,enabled:!1,provider:"https://picsum.photos/"}]);const Y=S(3),q=function(e,n,a){const i=!Array.isArray(e),l=i?[e]:e,u=n.length<2;return c=e=>{let a=!1;const c=[];let d=0,m=t;const f=()=>{if(d)return;m();const o=n(i?c[0]:c,e);u?e(o):m=r(o)?o:t},p=l.map(((t,e)=>s(t,(t=>{c[e]=t,d&=~(1<<e),a&&f()}),(()=>{d|=1<<e}))));return a=!0,f(),function(){o(p),m()}},{subscribe:S(a,c).subscribe};var c}(Y,(t=>Math.max(Math.min(1e3*t,6e4),500))),H=S([]);H.subscribe((t=>t.forEach((t=>{(new Image).src=t.url}))));const J=async()=>{const t=i(X).filter((t=>t.enabled));if(0==t.length)return{url:"https://picsum.photos/500/600.webp?blur=1",name:F.GENERIC};const e=t[~~(Math.random()*t.length)];return{name:e.name,url:await e.url()}},Q=S({name:F.GENERIC,url:"https://picsum.photos/500/600.webp?blur=1"});let V;function W(){V=setTimeout((async()=>{Q.set(await(async()=>{const t=i(X).filter((t=>t.enabled)).map((t=>t.name)),e=i(H).filter((e=>t.includes(e.name)));return e.length>0?(H.set(i(H).filter(((t,e)=>0!=e))),e[0]):J()})()),(async()=>{H.set([...i(H),await J()])})(),W()}),i(q))}function Z(t,e,n){const o=t.slice();return o[8]=e[n],o[9]=e,o[10]=n,o}function tt(t){let e,n,r,a,s,i,l,c=t[8].name+"";function b(){return t[5](t[8],t[9],t[10])}function v(...e){return t[6](t[10],...e)}return{c(){e=p("div"),n=p("span"),r=h(c),$(n,"tabindex",a=t[10]+1),$(n,"class",s=u(t[8].enabled?"enabled":"disabled")+" svelte-173e6u6"),$(e,"class","source svelte-173e6u6")},m(t,o){m(t,e,o),d(e,n),d(n,r),i||(l=[g(n,"click",b),g(n,"keydown",v)],i=!0)},p(e,o){t=e,1&o&&c!==(c=t[8].name+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,c),1&o&&s!==(s=u(t[8].enabled?"enabled":"disabled")+" svelte-173e6u6")&&$(n,"class",s)},d(t){t&&f(e),i=!1,o(l)}}}function et(e){let n,r,a,s,i,l,u,c,y,k,x,A,_,w,E,N=e[3]()?"enable":"disable",O=e[0],C=[];for(let t=0;t<O.length;t+=1)C[t]=tt(Z(e,O,t));return{c(){n=p("div");for(let t=0;t<C.length;t+=1)C[t].c();r=b(),a=p("span"),s=h("("),i=h(N),l=h(" all)"),c=b(),y=p("label"),k=p("input"),A=b(),_=p("span"),_.textContent="s",$(a,"tabindex",u=e[0].length+1),$(a,"class","svelte-173e6u6"),$(k,"tabindex",x=e[0].length+2),$(k,"class","svelte-173e6u6"),$(_,"class","svelte-173e6u6"),$(n,"id","settings"),$(n,"class","svelte-173e6u6")},m(t,o){m(t,n,o);for(let t=0;t<C.length;t+=1)C[t].m(n,null);d(n,r),d(n,a),d(a,s),d(a,i),d(a,l),d(n,c),d(n,y),d(y,k),v(k,e[1]),d(y,A),d(y,_),w||(E=[g(a,"click",e[4]),g(k,"input",e[7])],w=!0)},p(t,[e]){if(5&e){let o;for(O=t[0],o=0;o<O.length;o+=1){const a=Z(t,O,o);C[o]?C[o].p(a,e):(C[o]=tt(a),C[o].c(),C[o].m(n,r))}for(;o<C.length;o+=1)C[o].d(1);C.length=O.length}1&e&&u!==(u=t[0].length+1)&&$(a,"tabindex",u),1&e&&x!==(x=t[0].length+2)&&$(k,"tabindex",x),2&e&&k.value!==t[1]&&v(k,t[1])},i:t,o:t,d(t){t&&f(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(C,t),w=!1,o(E)}}}function nt(t,e,n){let o,r;function a(t,e){"Enter"==t.key&&t.shiftKey?c(X,o=o.map((t=>Object.assign({},t,{enabled:o[e]}))),o):"Enter"==t.key&&c(X,o[e].enabled=!o[e].enabled,o)}l(t,X,(t=>n(0,o=t))),l(t,Y,(t=>n(1,r=t)));const s=()=>o.filter((t=>t.enabled)).length!=o.length;return[o,r,a,s,()=>c(X,o=o.map((t=>Object.assign({},t,{enabled:s()}))),o),(t,e,n)=>c(X,e[n].enabled=!t.enabled,o),(t,e)=>a(e,t),function(){r=this.value,Y.set(r)}]}q.subscribe((t=>{void 0!==V&&clearTimeout(V),V=setTimeout(W,t)}));class ot extends M{constructor(t){super(),L(this,t,nt,et,a,{})}}function rt(t){let e,n,o,r;return o=new ot({}),{c(){var r;e=p("div"),n=b(),(r=o.$$.fragment)&&r.c(),$(e,"id","bigParent"),y(e,"background-image","url('"+t[0].url+"')"),$(e,"class","svelte-w042ym")},m(t,a){m(t,e,a),m(t,n,a),T(o,t,a),r=!0},p(t,[n]){(!r||1&n)&&y(e,"background-image","url('"+t[0].url+"')")},i(t){r||(P(o.$$.fragment,t),r=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),(void 0).c.push((()=>{K.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(o.$$.fragment,t),r=!1},d(t){t&&f(e),t&&f(n),j(o,t)}}}function at(t,e,n){let o;return l(t,Q,(t=>n(0,o=t))),[o]}return new class extends M{constructor(t){super(),L(this,t,at,rt,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map