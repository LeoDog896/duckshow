var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t){return null==t?"":t}function l(t,e,n){return t.set(n),e}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function f(){return m(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){t.value=null==e?"":e}function $(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let v;function y(t){v=t}const k=[],x=[],_=[],w=[],j=Promise.resolve();let E=!1;function O(t){_.push(t)}let A=!1;const M=new Set;function C(){if(!A){A=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];y(e),D(e.$$)}for(y(null),k.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];M.has(e)||(M.add(e),e())}_.length=0}while(k.length);for(;w.length;)w.pop()();E=!1,A=!1,M.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const N=new Set;function P(t,e){-1===t.$$.dirty[0]&&(k.push(t),E||(E=!0,j.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(a,i,s,l,u,c,p,m=[-1]){const f=v;y(a);const h=a.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:i.target||f.$$.root};p&&p(h.root);let b=!1;if(h.ctx=s?s(a,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),b&&P(a,t)),e})):[],h.update(),b=!0,o(h.before_update),h.fragment=!!l&&l(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();i.intro&&((g=a.$$.fragment)&&g.i&&(N.delete(g),g.i($))),function(t,n,a,i){const{fragment:s,on_mount:l,on_destroy:u,after_update:c}=t.$$;s&&s.m(n,a),i||O((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(O)}(a,i.target,i.anchor,i.customElement),C()}var g,$;y(f)}const T=[];const z=t=>fetch(t).then((t=>t.json()));let L=function(e,n=t){let o;const r=new Set;function i(t){if(a(e,t)&&(e=t,o)){const t=!T.length;for(const t of r)t[1](),T.push(t,e);if(t){for(let t=0;t<T.length;t+=2)T[t][0](T[t+1]);T.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,s=t){const l=[a,s];return r.add(l),1===r.size&&(o=n(i)||t),a(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}([{name:"fox",url:()=>z("https://randomfox.ca/floof/").then((t=>t.image)),enabled:!0,provider:"https://randomfox.ca/"},{name:"bunny",url:()=>z("https://api.bunnies.io/v2/loop/random/?media=gif").then((t=>t.media.gif)),enabled:!0,provider:"https://www.bunnies.io/"},{name:"dog",url:()=>z("https://dog.ceo/api/breeds/image/random").then((t=>t.message)),enabled:!0,provider:"https://dog.ceo"},{name:"duck",url:async()=>"https://random-d.uk/api/randomimg?"+Date.now(),enabled:!0,provider:"https://random-d.uk/"},{name:"cat",url:async()=>"https://cataas.com/cat?"+Date.now(),enabled:!0,provider:"https://cataas.com/"},{name:"raccoon",url:()=>z("https://some-random-api.ml/img/raccoon").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:"kangaroo",url:()=>z("https://some-random-api.ml/img/kangaroo").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:"bird",url:()=>z("https://some-random-api.ml/img/birb").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:"panda",url:()=>z("https://some-random-api.ml/img/panda").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:"koala",url:()=>z("https://some-random-api.ml/img/koala").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:"red panda",url:()=>z("https://some-random-api.ml/img/red_panda").then((t=>t.link)),enabled:!0,provider:"https://some-random-api.ml/"},{name:"generic",url:async()=>"https://picsum.photos/500/600?"+Date.now(),enabled:!1,provider:"https://picsum.photos/"}]);function q(t,e,n){const o=t.slice();return o[9]=e[n],o[10]=e,o[11]=n,o}function B(t){let e,n,r,a,i,l,f,g=t[9].name+"";function $(){return t[4](t[9],t[10],t[11])}function v(...e){return t[5](t[11],...e)}return{c(){e=p("div"),n=p("span"),r=m(g),b(n,"tabindex",a=t[11]+1),b(n,"class",i=s(t[9].enabled?"enabled":"disabled")+" svelte-1apjhir"),b(e,"class","animal svelte-1apjhir")},m(t,o){c(t,e,o),u(e,n),u(n,r),l||(f=[h(n,"click",$),h(n,"keydown",v)],l=!0)},p(e,o){t=e,4&o&&g!==(g=t[9].name+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,g),4&o&&i!==(i=s(t[9].enabled?"enabled":"disabled")+" svelte-1apjhir")&&b(n,"class",i)},d(t){t&&d(e),l=!1,o(f)}}}function K(e){let n,o,r,a,i,s,l,m,v,y,k,x=e[2],_=[];for(let t=0;t<x.length;t+=1)_[t]=B(q(e,x,t));return{c(){n=p("div"),o=f(),r=p("div");for(let t=0;t<_.length;t+=1)_[t].c();a=f(),i=p("label"),s=p("input"),m=f(),v=p("span"),v.textContent="s",b(n,"id","bigParent"),$(n,"background-image","url('"+e[0]+"')"),b(n,"class","svelte-1apjhir"),b(s,"tabindex",l=e[2].length+1),b(s,"class","svelte-1apjhir"),b(r,"id","settings"),b(r,"class","svelte-1apjhir")},m(t,l){c(t,n,l),c(t,o,l),c(t,r,l);for(let t=0;t<_.length;t+=1)_[t].m(r,null);u(r,a),u(r,i),u(i,s),g(s,e[1]),u(i,m),u(i,v),y||(k=h(s,"input",e[6]),y=!0)},p(t,[e]){if(1&e&&$(n,"background-image","url('"+t[0]+"')"),12&e){let n;for(x=t[2],n=0;n<x.length;n+=1){const o=q(t,x,n);_[n]?_[n].p(o,e):(_[n]=B(o),_[n].c(),_[n].m(r,a))}for(;n<_.length;n+=1)_[n].d(1);_.length=x.length}4&e&&l!==(l=t[2].length+1)&&b(s,"tabindex",l),2&e&&s.value!==t[1]&&g(s,t[1])},i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(_,t),y=!1,k()}}}function F(t,e,n){let o;i(t,L,(t=>n(2,o=t)));let r="https://picsum.photos/500/600.webp?blur=1";let a=3;function s(t,e){"Enter"==t.key&&t.shiftKey?l(L,o=o.map((t=>t==L[e]?Object.assign({},t,{enabled:!0}):Object.assign({},t,{enabled:!1}))),o):"Enter"==t.key&&(L[e].enabled=!L[e].enabled)}!async function t(){n(0,r=await(()=>{const t=o.filter((t=>t.enabled));return 0==t.length?"https://picsum.photos/500/600.webp?blur=1":t[~~(Math.random()*t.length)].url()})()),setTimeout(t,Math.max(Math.min(1e3*a,6e4),500))}();return[r,a,o,s,(t,e,n)=>l(L,e[n].enabled=!t.enabled,o),(t,e)=>s(e,t),function(){a=this.value,n(1,a)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,F,K,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
