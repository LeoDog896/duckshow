var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function u(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let f;function l(t){f=t}const d=[],p=[],m=[],g=[],h=Promise.resolve();let $=!1;function y(t){m.push(t)}let b=!1;const _=new Set;function w(){if(!b){b=!0;do{for(let t=0;t<d.length;t+=1){const n=d[t];l(n),x(n.$$)}for(l(null),d.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];_.has(n)||(_.add(n),n())}m.length=0}while(d.length);for(;g.length;)g.pop()();$=!1,b=!1,_.clear()}}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const k=new Set;function v(t,n){-1===t.$$.dirty[0]&&(d.push(t),$||($=!0,h.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(a,i,s,u,d,p,m,g=[-1]){const h=f;l(a);const $=a.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:i.target||h.$$.root};m&&m($.root);let b=!1;if($.ctx=s?s(a,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&d($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&v(a,t)),n})):[],$.update(),b=!0,o($.before_update),$.fragment=!!u&&u($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(c)}else $.fragment&&$.fragment.c();i.intro&&((_=a.$$.fragment)&&_.i&&(k.delete(_),_.i(x))),function(t,e,a,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:f}=t.$$;i&&i.m(e,a),c||y((()=>{const e=s.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(y)}(a,i.target,i.anchor,i.customElement),w()}var _,x;l(h)}function j(n){let e,o;return{c(){e=i("main"),o=i("div"),s(o,"id","bigParent"),u(o,"background-image","url('"+n[0]+"')"),s(o,"class","svelte-9jz3uo")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),function(t,n){t.appendChild(n)}(e,o)},p(t,[n]){1&n&&u(o,"background-image","url('"+t[0]+"')")},i:t,o:t,d(t){t&&c(e)}}}async function A(t){const n=await fetch(t);return await n.json()}function O(t,n,e){let o="https://random-d.uk/api/randomimg";const r=[async()=>(await A("https://randomfox.ca/floof/")).image,async()=>(await A("https://api.bunnies.io/v2/loop/random/?media=gif")).media.gif,async()=>(await A("https://dog.ceo/api/breeds/image/random")).message,async()=>"https://random-d.uk/api/randomimg?"+new Date,async()=>"https://cataas.com/cat?"+new Date];return setInterval((async()=>e(0,o=await(async()=>await r[~~(Math.random()*r.length)]())())),3e3),[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),E(this,t,O,j,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
