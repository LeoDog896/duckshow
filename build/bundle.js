var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?null:+t}function h(t,e){t.value=null==e?"":e}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let $;function y(t){$=t}const v=[],x=[],_=[],w=[],k=Promise.resolve();let E=!1;function z(t){_.push(t)}let j=!1;const A=new Set;function C(){if(!j){j=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),N(e.$$)}for(y(null),v.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];A.has(e)||(A.add(e),e())}_.length=0}while(v.length);for(;w.length;)w.pop()();E=!1,j=!1,A.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const O=new Set;function P(t,e){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(a,u,l,i,s,d,f,m=[-1]){const p=$;y(a);const b=a.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:u.target||p.$$.root};f&&f(b.root);let h=!1;if(b.ctx=l?l(a,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&s(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),h&&P(a,t)),e})):[],b.update(),h=!0,o(b.before_update),b.fragment=!!i&&i(b.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);b.fragment&&b.fragment.l(t),t.forEach(c)}else b.fragment&&b.fragment.c();u.intro&&((g=a.$$.fragment)&&g.i&&(O.delete(g),g.i(v))),function(t,n,a,u){const{fragment:l,on_mount:i,on_destroy:c,after_update:s}=t.$$;l&&l.m(n,a),u||z((()=>{const n=i.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(z)}(a,u.target,u.anchor,u.customElement),C()}var g,v;y(p)}function D(t,e,n){const o=t.slice();return o[9]=e[n],o[10]=e,o[11]=n,o}function L(t){let e,n,r,a,f,b,h,g=t[9].name+"";function $(){return t[3](t[9],t[10],t[11])}function y(...e){return t[4](t[9],t[10],t[11],...e)}return{c(){e=s("div"),n=s("span"),r=d(g),p(n,"tabindex",a=t[11]+1),p(n,"class",f=u(t[9].enabled?"enabled":"disabled")+" svelte-1bwiubz"),p(e,"class","animal svelte-1bwiubz")},m(t,o){i(t,e,o),l(e,n),l(n,r),b||(h=[m(n,"click",$),m(n,"keyup",y)],b=!0)},p(e,o){t=e,2&o&&g!==(g=t[9].name+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,g),2&o&&f!==(f=u(t[9].enabled?"enabled":"disabled")+" svelte-1bwiubz")&&p(n,"class",f)},d(t){t&&c(e),b=!1,o(h)}}}function M(e){let n,o,r,a,u,d,$,y,v,x,_,w,k=e[1],E=[];for(let t=0;t<k.length;t+=1)E[t]=L(D(e,k,t));return{c(){n=s("main"),o=s("div"),r=f(),a=s("div");for(let t=0;t<E.length;t+=1)E[t].c();u=f(),d=s("label"),$=s("span"),$.textContent="timing",y=f(),v=s("input"),p(o,"id","bigParent"),g(o,"background-image","url('"+e[0]+"')"),p(o,"class","svelte-1bwiubz"),p(v,"tabindex",x=e[1].length+1),p(v,"type","number"),p(v,"min","500"),p(v,"max","50000"),p(v,"class","svelte-1bwiubz"),p(a,"id","settings"),p(a,"class","svelte-1bwiubz")},m(t,c){i(t,n,c),l(n,o),l(n,r),l(n,a);for(let t=0;t<E.length;t+=1)E[t].m(a,null);l(a,u),l(a,d),l(d,$),l(d,y),l(d,v),h(v,e[2]),_||(w=m(v,"input",e[5]),_=!0)},p(t,[e]){if(1&e&&g(o,"background-image","url('"+t[0]+"')"),2&e){let n;for(k=t[1],n=0;n<k.length;n+=1){const o=D(t,k,n);E[n]?E[n].p(o,e):(E[n]=L(o),E[n].c(),E[n].m(a,u))}for(;n<E.length;n+=1)E[n].d(1);E.length=k.length}2&e&&x!==(x=t[1].length+1)&&p(v,"tabindex",x),4&e&&b(v.value)!==t[2]&&h(v,t[2])},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,t),_=!1,w()}}}function S(t,e,n){let o="https://picsum.photos/500/600.webp?blur=1";const r=t=>fetch(t).then((t=>t.json())),a=[{name:"fox",url:()=>r("https://randomfox.ca/floof/").then((t=>t.image)),enabled:!0},{name:"bunny",url:()=>r("https://api.bunnies.io/v2/loop/random/?media=gif").then((t=>t.media.gif)),enabled:!0},{name:"dog",url:()=>r("https://dog.ceo/api/breeds/image/random").then((t=>t.message)),enabled:!0},{name:"duck",url:async()=>"https://random-d.uk/api/randomimg?"+new Date,enabled:!0},{name:"cat",url:async()=>"https://cataas.com/cat?"+new Date,enabled:!0}];let u=3e3;!async function t(){n(0,o=await(async()=>{const t=a.filter((t=>t.enabled));return 0==t.length?"https://picsum.photos/500/600.webp?blur=1":await t[~~(Math.random()*t.length)].url()})()),setTimeout(t,u)}();return[o,a,u,(t,e,o)=>n(1,e[o].enabled=!t.enabled,a),(t,e,o,r)=>{"Enter"==r.key&&n(1,e[o].enabled=!t.enabled,a)},function(){u=b(this.value),n(2,u)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,S,M,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map