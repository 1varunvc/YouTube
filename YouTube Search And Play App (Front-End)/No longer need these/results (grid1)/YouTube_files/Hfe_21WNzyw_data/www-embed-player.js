(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.m=0;this.C=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={Ga:b,Ha:!0};a.h=a.m||a.u}
oa.prototype.return=function(a){this.j={return:a};this.h=this.u};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.A=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.u=c)}
function sa(a){a.m=0;var b=a.j.Ga;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.u=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Ha?a.h=a.m||a.u:void 0!=b.A&&a.u<b.A?(a.h=b.A,a.j=null):a.h=a.u:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ha)throw b.Ga;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,H:p}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ca});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.u)}};
b.prototype.K=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ba(h,g):this.m(g)};
b.prototype.u=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.L();this.C()};
b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.ba=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(D){try{l(t(D))}catch(K){n(K)}}:q}
var l,n,p=new b(function(t,q){l=t;n=q});
this.ia(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(D){return function(K){t[D]=K;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).ia(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){a.va=void 0;a.getInstance=function(){return a.va?a.va:a.va=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Oa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Oa=Ma:Oa=Na;return Oa.apply(null,arguments)}
function Pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Qa(a,b){z(a,b,void 0)}
function B(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Wk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ra(a){return a}
;function Sa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Pa=b)}
B(Sa,Error);Sa.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ab(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(){var a=E("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(c){y.console&&y.console.error(c.message)}ob=a}else ob=a}return ob}
;var qb={};function rb(a){this.h=qb===qb?a:"";this.Y=!0}
rb.prototype.X=function(){return this.h.toString()};
rb.prototype.toString=function(){return this.h.toString()};function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.Y=!0;m.X=function(){return this.h.toString()};
m.ta=!0;m.qa=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;Ga(a);return"type_error:TrustedResourceUrl"}
var tb={};function vb(a){var b=pb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
;var wb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function xb(a,b){if(b)a=a.replace(yb,"&amp;").replace(zb,"&lt;").replace(Ab,"&gt;").replace(Bb,"&quot;").replace(Cb,"&#39;").replace(Db,"&#0;");else{if(!Eb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;"))}return a}
var yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a,b){this.h=b===Gb?a:""}
m=Fb.prototype;m.Y=!0;m.X=function(){return this.h.toString()};
m.ta=!0;m.qa=function(){return 1};
m.toString=function(){return this.h.toString()};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.h;Ga(a);return"type_error:SafeUrl"}
var Ib=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Jb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Lb(a){if(a instanceof Fb)return a;a="object"==typeof a&&a.Y?a.X():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return new Fb(a,Gb)}
var Gb={},Mb=new Fb("about:invalid#zClosurez",Gb);var Nb;a:{var Ob=y.navigator;if(Ob){var Pb=Ob.userAgent;if(Pb){Nb=Pb;break a}}Nb=""}function F(a){return-1!=Nb.indexOf(a)}
;function Qb(a,b,c){this.h=c===Rb?a:"";this.i=b}
m=Qb.prototype;m.ta=!0;m.qa=function(){return this.i};
m.Y=!0;m.X=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Rb={};function Sb(a,b){var c=pb();a=c?c.createHTML(a):a;return new Qb(a,b,Rb)}
;function Tb(a,b){b=b instanceof Fb?b:Lb(b);a.href=Hb(b)}
function Ub(a,b){a.rel="stylesheet";a.href=ub(b).toString();(b=Vb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Wb(){return Vb("script[nonce]",void 0)}
var Xb=/^[\w+/_-]+[=]{0,2}$/;function Vb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Xb.test(a)?a:"":""}
;function Yb(a){return a=xb(a,void 0)}
function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ac(a){return a?decodeURI(a):a}
function bc(a){return ac(a.match($b)[3]||null)}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){b=dc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var fc=/#|$/;function G(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function gc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function hc(a){hc[" "](a);return a}
hc[" "]=Ea;var ic=F("Opera"),jc=F("Trident")||F("MSIE"),kc=F("Edge"),lc=F("Gecko")&&!(-1!=Nb.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),mc=-1!=Nb.toLowerCase().indexOf("webkit")&&!F("Edge"),nc=F("Android");function oc(){var a=y.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=Nb;if(lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(kc)return/Edge\/([\d\.]+)/.exec(a);if(jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(mc)return/WebKit\/(\S+)/.exec(a);if(ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(jc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,uc;if(y.document&&jc){var vc=oc();uc=vc?vc:parseInt(tc,10)||void 0}else uc=void 0;var wc=uc;var xc=gc()||F("iPod"),yc=F("iPad"),zc=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F("Edge")||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(gc()||F("iPad")||F("iPod"));var Ac={},Bc=null;
function Cc(a){var b=3;Ha(a);void 0===b&&(b=0);if(!Bc){Bc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ac[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Bc[h]&&(Bc[h]=g)}}}b=Ac[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Dc={Yk:{value:!0,configurable:!0}};var Ec=Object,Fc=Ec.freeze,Gc=[];Array.isArray(Gc)&&!Object.isFrozen(Gc)&&Object.defineProperties(Gc,Dc);Fc.call(Ec,Gc);var H=window;function Hc(a,b){a.src=ub(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(c=(b=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;var Ic=!jc||9<=Number(wc);function Jc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Jc.prototype;m.clone=function(){return new Jc(this.x,this.y)};
m.equals=function(a){return a instanceof Jc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Kc(a,b){this.width=a;this.height=b}
m=Kc.prototype;m.clone=function(){return new Kc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Lc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Mc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.Y&&(c=c.X());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Nc.hasOwnProperty(d)?a.setAttribute(Nc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Nc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Oc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ic&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Yb(g.name),'"');if(g.type){f.push(' type="',Yb(g.type),'"');var h={};nb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Pc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Mc(f,g));2<d.length&&Qc(e,f,d);return f}
function Qc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}C(g?bb(f):f,d)}}}
function Pc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Rc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Sc(a){var b=Tc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Uc(){var a=[];Sc(function(b){a.push(b)});
return a}
var Tc={Hb:"allow-forms",Ib:"allow-modals",Jb:"allow-orientation-lock",Kb:"allow-pointer-lock",Lb:"allow-popups",Mb:"allow-popups-to-escape-sandbox",Nb:"allow-presentation",Ob:"allow-same-origin",Pb:"allow-scripts",Qb:"allow-top-navigation",Rb:"allow-top-navigation-by-user-activation"},Vc=Va(function(){return Uc()});
function Wc(){var a=Pc(document,"IFRAME"),b={};C(Vc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Xc(a){Yc();return vb(a)}
var Yc=Ea;function Zc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var $c=(new Date).getTime();function ad(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function bd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var D=e[1],K=e[2],N=e[3],X=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Y=N^D&(K^N);var I=1518500249}else Y=D^K^N,I=1859775393;else 60>q?(Y=D&K|N&(D|K),I=2400959708):(Y=D^K^N,I=3395469782);Y=((p<<5|p>>>27)&4294967295)+Y+X+I+t[q]&4294967295;X=N;N=K;K=(D<<30|D>>>2)&4294967295;D=p;p=Y}e[0]=e[0]+p&4294967295;e[1]=e[1]+D&4294967295;e[2]=
e[2]+K&4294967295;e[3]=e[3]+N&4294967295;e[4]=e[4]+X&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],D=0,K=p.length;D<K;++D)q.push(p.charCodeAt(D));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<t;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var D=24;0<=D;D-=8)p[t++]=e[q]>>D&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Qa:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function cd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,dd(ad(d),a,c||null)].join(" "):null}
function dd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],C(d,function(h){e.push(h)}),ed(e.join(" "));
var f=[],g=[];C(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(h){e.push(h)});
a=ed(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ed(a){var b=bd();b.update(a);return b.Qa().toLowerCase()}
;var fd={};function gd(a){this.h=a||{cookie:""}}
m=gd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{wa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.il;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.wa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{wa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=wb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var hd=new gd("undefined"==typeof document?null:document);function id(a){return!!fd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function jd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;id(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new gd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");id(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function kd(a,b,c,d){(a=y[a])||(a=(new gd(document)).get(b));return a?cd(a,c,d):null}
function ld(a){var b=void 0===b?!1:b;var c=ad(String(y.location.href)),d=[];if(jd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new gd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?cd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&id(b)&&((b=kd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=kd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function md(){this.data_=[];this.h=-1}
md.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
md.prototype.get=function(a){return!!this.data_[a]};
function nd(a){-1==a.h&&(a.h=Za(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function od(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
od.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function pd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var qd;
function rd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Pc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Oa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Da;c.Da=null;e()}};
return function(e){d.next={Da:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function sd(a){y.setTimeout(function(){throw a;},0)}
;function td(){this.i=this.h=null}
td.prototype.add=function(a,b){var c=ud.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
td.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ud=new od(function(){return new vd},function(a){return a.reset()});
function vd(){this.next=this.scope=this.h=null}
vd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
vd.prototype.reset=function(){this.next=this.scope=this.h=null};function wd(a,b){xd||yd();zd||(xd(),zd=!0);Ad.add(a,b)}
var xd;function yd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);xd=function(){a.then(Bd)}}else xd=function(){var b=Bd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!F("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(qd||(qd=rd()),qd(b)):y.setImmediate(b)}}
var zd=!1,Ad=new td;function Bd(){for(var a;a=Ad.remove();){try{a.h.call(a.scope)}catch(b){sd(b)}pd(ud,a)}zd=!1}
;function Cd(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Cd.prototype[Symbol.iterator]=function(){return this};
Cd.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Dd(a,b){return new Cd(a,b)}
;function Ed(){this.blockSize=-1}
;function Fd(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
B(Fd,Ed);Fd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Gd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Fd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Gd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Gd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Gd(this,e);f=0;break}}this.i=f;this.l+=b}};
Fd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Gd(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Hd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Id(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Jd[c])c=Jd[c];else{c=String(c);if(!Jd[c]){var f=/function\s+([^\(]+)/m.exec(c);Jd[c]=f?f[1]:"[Anonymous]"}c=Jd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Id(a,b){b||(b={});b[Kd(a)]=!0;var c=a.stack||"";(a=a.Pa)&&!b[Kd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Id(a,b));return c}
function Kd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Jd={};function Ld(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Md(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Md.apply(null,d):Ld(d)}}
;function J(){this.h=this.h;this.u=this.u}
J.prototype.h=!1;J.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Nd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
J.prototype.D=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Od(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Pd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Qd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Od(a).match(/\S+/g)||[],b=0<=Wa(a,b));return b}
function Rd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Qd(a,"inverted-hdpi")&&Pd(a,Xa(a.classList?a.classList:Od(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Sd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Td(){}
Td.prototype.next=function(){return Td.prototype.j.call(this)};
Td.prototype.j=function(){throw Sd;};
Td.prototype.M=function(){return this};function Ud(a){if(a instanceof Vd||a instanceof Wd||a instanceof Xd)return a;if("function"==typeof a.next)return new Vd(function(){return Yd(a)});
if("function"==typeof a[Symbol.iterator])return new Vd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new Vd(function(){return Yd(a.M())});
throw Error("Not an iterator or iterable.");}
function Yd(a){if(!(a instanceof Td))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==Sd)throw d;b=!0}return{value:c,done:b}}}}
function Vd(a){this.i=a}
Vd.prototype.M=function(){return new Wd(this.i())};
Vd.prototype[Symbol.iterator]=function(){return new Xd(this.i())};
Vd.prototype.h=function(){return new Xd(this.i())};
function Wd(a){this.i=a}
v(Wd,Td);Wd.prototype.next=function(){var a=this.i.next();if(a.done)throw Sd;return a.value};
Wd.prototype[Symbol.iterator]=function(){return new Xd(this.i)};
Wd.prototype.h=function(){return new Xd(this.i)};
function Xd(a){Vd.call(this,function(){return a});
this.j=a}
v(Xd,Vd);Xd.prototype.next=function(){return this.j.next()};function Zd(a,b){this.i={};this.h=[];this.V=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Zd)for(c=$d(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function $d(a){ae(a);return a.h.concat()}
m=Zd.prototype;m.has=function(a){return be(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ce;ae(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ce(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.V=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return be(this.i,a)?(delete this.i[a],--this.size,this.V++,this.h.length>2*this.size&&ae(this),!0):!1};
function ae(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];be(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],be(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return be(this.i,a)?this.i[a]:b};
m.set=function(a,b){be(this.i,a)||(this.size+=1,this.h.push(a),this.V++);this.i[a]=b};
m.forEach=function(a,b){for(var c=$d(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Zd(this)};
m.keys=function(){return Ud(this.M(!0)).h()};
m.values=function(){return Ud(this.M(!1)).h()};
m.entries=function(){var a=this;return Dd(this.keys(),function(b){return[b,a.get(b)]})};
m.M=function(a){ae(this);var b=0,c=this.V,d=this,e=new Td;e.next=function(){if(c!=d.V)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Sd;var f=d.h[b++];return a?f:d.i[f]};
return e};
function be(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var de=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function ee(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ee.prototype.stopPropagation=function(){this.j=!0};
ee.prototype.preventDefault=function(){this.defaultPrevented=!0};function fe(a,b){ee.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
B(fe,ee);var ge={2:"touch",3:"pen",4:"mouse"};
fe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(lc){a:{try{hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ge[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&fe.O.preventDefault.call(this)};
fe.prototype.stopPropagation=function(){fe.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
fe.prototype.preventDefault=function(){fe.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var he="closure_listenable_"+(1E6*Math.random()|0);var ie=0;function je(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.la=e;this.key=++ie;this.ea=this.ha=!1}
function ke(a){a.ea=!0;a.listener=null;a.h=null;a.src=null;a.la=null}
;function le(a){this.src=a;this.listeners={};this.h=0}
le.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=me(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new je(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
le.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=me(e,b,c,d);return-1<b?(ke(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ne(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(ke(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function me(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.la==d)return e}return-1}
;var oe="closure_lm_"+(1E6*Math.random()|0),pe={},qe=0;function re(a,b,c,d,e){if(d&&d.once)se(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=te(c),a&&a[he]?a.ca(b,c,Ia(d)?!!d.capture:!!d,e):ue(a,b,c,!1,d,e)}
function ue(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=ve(a);h||(a[oe]=h=new le(a));c=h.add(b,c,d,g,f);if(!c.h){d=we();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)de||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qe++}}
function we(){function a(c){return b.call(a.src,a.listener,c)}
var b=ye;return a}
function se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)se(a,b[f],c,d,e);else c=te(c),a&&a[he]?a.j.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):ue(a,b,c,!0,d,e)}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=te(c),a&&a[he])?a.j.remove(String(b),c,d,e):a&&(a=ve(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=me(b,c,d,e)),(c=-1<a?b[a]:null)&&Ae(c))}
function Ae(a){if("number"!==typeof a&&a&&!a.ea){var b=a.src;if(b&&b[he])ne(b.j,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qe--;(c=ve(b))?(ne(c,a),0==c.h&&(c.src=null,b[oe]=null)):ke(a)}}}
function xe(a){return a in pe?pe[a]:pe[a]="on"+a}
function ye(a,b){if(a.ea)a=!0;else{b=new fe(b,this);var c=a.listener,d=a.la||a.src;a.ha&&Ae(a);a=c.call(d,b)}return a}
function ve(a){a=a[oe];return a instanceof le?a:null}
var Be="__closure_events_fn_"+(1E9*Math.random()>>>0);function te(a){if("function"===typeof a)return a;a[Be]||(a[Be]=function(b){return a.handleEvent(b)});
return a[Be]}
;function Ce(){J.call(this);this.j=new le(this);this.P=this;this.F=null}
B(Ce,J);Ce.prototype[he]=!0;Ce.prototype.addEventListener=function(a,b,c,d){re(this,a,b,c,d)};
Ce.prototype.removeEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
function De(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.P;c=b.type||b;"string"===typeof b?b=new ee(b,a):b instanceof ee?b.target=b.target||a:(e=b,b=new ee(c,a),nb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ee(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ee(g,c,!0,b)&&e,b.j||(e=Ee(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ee(g,c,!1,b)&&e}
Ce.prototype.D=function(){Ce.O.D.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ke(d[e]);delete a.listeners[c];a.h--}}this.F=null};
Ce.prototype.ca=function(a,b,c,d){return this.j.add(String(a),b,!1,c,d)};
function Ee(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var h=g.listener,k=g.la||g.src;g.ha&&ne(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Fe(a){var b=[];Ge(new He,a,b);return b.join("")}
function He(){}
function Ge(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ge(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ie(d,c),c.push(":"),Ge(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ie(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Je={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ke=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ie(a,b){b.push('"',a.replace(Ke,function(c){var d=Je[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Je[c]=d);return d}),'"')}
;function Le(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Me(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Ne(b,2,c)},function(c){Ne(b,3,c)})}catch(c){Ne(this,3,c)}}
function Oe(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Oe.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Pe=new od(function(){return new Oe},function(a){a.reset()});
function Qe(a,b,c){var d=Pe.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Re(a){return new Me(function(b,c){c(a)})}
Me.prototype.then=function(a,b,c){return Se(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Me.prototype.$goog_Thenable=!0;function Te(a,b){return Se(a,null,b,void 0)}
Me.prototype.cancel=function(a){if(0==this.h){var b=new Ue(a);wd(function(){Ve(this,b)},this)}};
function Ve(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ve(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):We(c),Xe(c,e,3,b)))}a.j=null}else Ne(a,3,b)}
function Ye(a,b){a.i||2!=a.h&&3!=a.h||Ze(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Se(a,b,c,d){var e=Qe(null,null,null);e.h=new Me(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ue?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ye(a,e);return e.h}
Me.prototype.C=function(a){this.h=0;Ne(this,2,a)};
Me.prototype.F=function(a){this.h=0;Ne(this,3,a)};
function Ne(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof Me){Ye(d,Qe(e||Ea,f||null,a));var g=!0}else if(Le(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){$e(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Ze(a),3!=b||c instanceof Ue||af(a,c))}}
function $e(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ze(a){a.m||(a.m=!0,wd(a.B,a))}
function We(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Me.prototype.B=function(){for(var a;a=We(this);)Xe(this,a,this.h,this.o);this.m=!1};
function Xe(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,bf(b,c,d);else try{b.j?b.i.call(b.context):bf(b,c,d)}catch(e){cf.call(null,e)}pd(Pe,b)}
function bf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function af(a,b){a.u=!0;wd(function(){a.u&&cf.call(null,b)})}
var cf=sd;function Ue(a){Sa.call(this,a)}
B(Ue,Sa);Ue.prototype.name="cancel";function L(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
B(L,J);m=L.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function df(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=$a(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.da(b)}}
m.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&ab(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.W=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];ef(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function ef(a,b,c){wd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(C(b,this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){L.O.D.call(this);this.clear();this.l.length=0};function ff(a){this.h=a}
ff.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Fe(b))};
ff.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ff.prototype.remove=function(a){this.h.remove(a)};function gf(a){this.h=a}
B(gf,ff);function hf(a){this.data=a}
function jf(a){return void 0===a||a instanceof hf?a:new hf(a)}
gf.prototype.set=function(a,b){gf.O.set.call(this,a,jf(b))};
gf.prototype.i=function(a){a=gf.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function kf(a){this.h=a}
B(kf,gf);kf.prototype.set=function(a,b,c){if(b=jf(b)){if(c){if(c<Date.now()){kf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}kf.O.set.call(this,a,b)};
kf.prototype.i=function(a){var b=kf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())kf.prototype.remove.call(this,a);else return b}};function lf(){}
;function mf(){}
B(mf,lf);mf.prototype[Symbol.iterator]=function(){return Ud(this.M(!0)).h()};
mf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function nf(a){this.h=a}
B(nf,mf);m=nf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new Td;d.next=function(){if(b>=c.length)throw Sd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function of(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
B(of,nf);function pf(a,b){this.i=a;this.h=null;if(jc&&!(9<=Number(wc))){qf||(qf=new Zd);this.h=qf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),qf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
B(pf,mf);var rf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},qf=null;function sf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return rf[b]})}
m=pf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(sf(a),b);tf(this)};
m.get=function(a){a=this.h.getAttribute(sf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(sf(a));tf(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Td;d.next=function(){if(b>=c.length)throw Sd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);tf(this)};
function tf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function uf(a,b){this.i=a;this.h=b+"::"}
B(uf,mf);uf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
uf.prototype.get=function(a){return this.i.get(this.h+a)};
uf.prototype.remove=function(a){this.i.remove(this.h+a)};
uf.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new Td;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function vf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var wf,xf,yf=y.window,zf=(null===(wf=null===yf||void 0===yf?void 0:yf.yt)||void 0===wf?void 0:wf.config_)||(null===(xf=null===yf||void 0===yf?void 0:yf.ytcfg)||void 0===xf?void 0:xf.data_)||{};z("yt.config_",zf,void 0);function M(a){for(var b=0;b<arguments.length;++b);vf(zf,arguments)}
function E(a,b){return a in zf?zf[a]:b}
;var Af=[];function Bf(a){Af.forEach(function(b){return b(a)})}
function Cf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Df(b)}}:a}
function Df(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),M("ERRORS",b));Bf(a)}
function Ef(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),M("ERRORS",b))}
;var Ff=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Ff,void 0);function Gf(a){vf(Ff,arguments)}
;function O(a){a=Hf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function If(a,b){a=Hf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Hf(a){var b=E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:E("EXPERIMENT_FLAGS",{})[a]}
;var Jf=0,Kf=mc?"webkit":lc?"moz":jc?"ms":ic?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Jf},void 0);var Lf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Mf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Lf||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Nf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Mf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Mf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Mf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",fb,void 0);var Of=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Of,void 0);
function Pf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Qf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Rf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Pf(a,b,c,d);if(e)return e;e=++Of.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Mf(h);if(!Rc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Mf(h);
h.currentTarget=a;return c.call(a,h)};
g=Cf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Qf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fb[e]=[a,b,c,g,d];return e}
function Sf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in fb){var c=fb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Qf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[b]}}))}
;var Tf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Uf(a,b){"function"===typeof a&&(a=Cf(a));return window.setTimeout(a,b)}
function Vf(a){window.clearTimeout(a)}
;function Wf(a){this.C=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=Rf(window,"mousemove",Oa(this.K,this));a=Oa(this.F,this);"function"===typeof a&&(a=Cf(a));this.L=window.setInterval(a,25)}
B(Wf,J);Wf.prototype.K=function(a){void 0===a.h&&Nf(a);var b=a.h;void 0===a.i&&Nf(a);this.i=new Jc(b,a.i)};
Wf.prototype.F=function(){if(this.i){var a=Tf();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Wf.prototype.D=function(){window.clearInterval(this.L);Sf(this.J)};function Xf(){}
function Yf(a,b){return Zf(a,0,b)}
function $f(a,b){return Zf(a,1,b)}
;function ag(){Xf.apply(this,arguments)}
v(ag,Xf);function Zf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Uf(a,c||0)}
function bg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Vf(a)}}
ag.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
ag.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};ag.h||(ag.h=new ag);var cg={};
function dg(a){var b=void 0===a?{}:a;a=void 0===b.Va?!0:b.Va;b=void 0===b.jb?!1:b.jb;if(null==A("_lact",window)){var c=parseInt(E("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&eg();Rf(document,"keydown",eg);Rf(document,"keyup",eg);Rf(document,"mousedown",eg);Rf(document,"mouseup",eg);a&&(b?Rf(window,"touchmove",function(){fg("touchmove",200)},{passive:!0}):(Rf(window,"resize",function(){fg("resize",200)}),Rf(window,"scroll",function(){fg("scroll",200)})));
new Wf(function(){fg("mouse",100)});
Rf(document,"touchstart",eg,{passive:!0});Rf(document,"touchend",eg,{passive:!0})}}
function fg(a,b){cg[a]||(cg[a]=!0,$f(function(){eg();cg[a]=!1},b))}
function eg(){null==A("_lact",window)&&dg();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function gg(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function hg(){var a=ig;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function jg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var kg=/^[\w.]*$/,lg={q:!0,search_query:!0};function mg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ng(f[0]||""),h=ng(f[1]||"");g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(mg);k.args=[{key:l,value:f[1],query:a,method:og==n?"unchanged":n}];lg.hasOwnProperty(l)||Ef(k)}}return c}
var og=String(mg);function pg(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function qg(a){"?"==a.charAt(0)&&(a=a.substr(1));return mg(a,"&")}
function rg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),qg(1<a.length?a[1]:a[0])):{}}
function sg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ec(a,e)+d}
function tg(a){if(!b)var b=window.location.href;var c=a.match($b)[1]||null,d=bc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)==d&&(Number(b.match($b)[4]||null)||null)==(Number(a.match($b)[4]||null)||null):!0;return a}
function ng(a){return a&&a.match(kg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ug(a){var b=vg;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=$c;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ta){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?H:g;try{var h=g.history.length}catch(Ta){h=0}e.u_his=h;e.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(e.u_h=H.screen.height,e.u_w=H.screen.width,
e.u_ah=H.screen.availHeight,e.u_aw=H.screen.availWidth,e.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(e.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(e.u_nmime=H.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Ta){}try{var n=h.outerWidth;var p=h.outerHeight}catch(Ta){}try{var t=h.innerWidth;var q=h.innerHeight}catch(Ta){}try{var D=h.screenLeft;var K=h.screenTop}catch(Ta){}try{t=h.innerWidth,q=h.innerHeight}catch(Ta){}try{var N=
h.screen.availWidth;var X=h.screen.availTop}catch(Ta){}k=[D,K,k,l,N,X,n,p,t,q];l=b.h.top;try{var Y=(l||window).document,I="CSS1Compat"==Y.compatMode?Y.documentElement:Y.body;var T=(new Kc(I.clientWidth,I.clientHeight)).round()}catch(Ta){T=new Kc(-12245933,-12245933)}Y=T;T={};I=new md;y.SVGElement&&y.document.createElementNS&&I.set(0);l=Wc();l["allow-top-navigation-by-user-activation"]&&I.set(1);l["allow-popups-to-escape-sandbox"]&&I.set(2);y.crypto&&y.crypto.subtle&&I.set(3);y.TextDecoder&&y.TextEncoder&&
I.set(4);I=nd(I);T.bc=I;T.bih=Y.height;T.biw=Y.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!H.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var vg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return pg(ug(a))},void 0);var wg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function xg(){if(!wg)return null;var a=wg();return"open"in a?a:null}
function yg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var zg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Ag="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),Bg=!1;
function Cg(a,b){b=void 0===b?{}:b;var c=tg(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in zg){var f=E(zg[e]);!f||!c&&bc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!bc(a))b["X-YouTube-Ad-Signals"]=pg(ug(void 0));return b}
function Dg(a){var b=window.location.search,c=bc(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!tg(a)||(c=document.location.hostname);var d=ac(a.match($b)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=qg(b),f={};C(Ag,function(g){e[g]&&(f[g]=e[g])});
return sg(a,f||{},!1)}
function Eg(a,b){var c=b.format||"JSON";a=Fg(a,b);var d=Gg(a,b),e=!1,f=Hg(a,function(k){if(!e){e=!0;h&&Vf(h);var l=yg(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Ig(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Uf(function(){e||(e=!0,f.abort(),Vf(h),g.call(b.context||y,f))},b.timeout)}return f}
function Fg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=E("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=sg(a,b||{},!0);return a}
function Gg(a,b){var c=E("XSRF_FIELD_NAME",void 0),d=E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=E("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=qg(e),nb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):dc(e));f=e||f&&!gb(f);!Bg&&f&&
"POST"!=b.method&&(Bg=!0,Df(Error("AJAX request with postData should use POST")));return e}
function Ig(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ef(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Jg(a):null)e={},C(a.getElementsByTagName("*"),function(g){e[g.tagName]=Kg(g)})}d&&Lg(e);
return e}
function Lg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Sb(a[b],null);a[c]=d}else Lg(a[b])}}
function Jg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Kg(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Cf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=xg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Dg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Cg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Mg=xc||yc;function Ng(a){var b=Nb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Og={},Pg=0;
function Qg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Ng("cobalt")){if(a){a instanceof Fb||(a="object"==typeof a&&a.Y?a.X():String(a),Kb.test(a)?a=new Fb(a,Gb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Jb))&&Ib.test(b[1])?new Fb(a,Gb):null));a=Hb(a||Mb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Qb)){b="object"==typeof a;var f=null;b&&a.ta&&(f=a.qa());a=Sb(xb(b&&a.Y?a.X():String(a)),f)}a instanceof Qb&&a.constructor===Qb?a=a.h:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Fe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Oc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Hg(a,b,"POST",e,d);else if(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Hg(a,b,"GET","",d);else{b:{try{var g=new Ua({url:a});if(g.j&&g.i||g.l){var h=ac(a.match($b)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(fc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var t=c;break d}}c+=3}t=-1}if(0>t)var q=null;else{var D=a.indexOf("&",t);if(0>D||D>l)D=l;t+=3;q=decodeURIComponent(a.substr(t,D-t).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(K){}f=!1}f?Rg(a)?(b&&b(),f=!0):f=!1:f=!1;f||Sg(a,b)}}
function Tg(a,b,c){c=void 0===c?"":c;Rg(a,c)?b&&b():Qg(a,b,void 0,void 0,c)}
function Rg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Sg(a,b){var c=new Image,d=""+Pg++;Og[d]=c;c.onload=c.onerror=function(){b&&Og[d]&&b();delete Og[d]};
c.src=a}
;var Ug=y.ytPubsubPubsubInstance||new L,Vg=y.ytPubsubPubsubSubscribedKeys||{},Wg=y.ytPubsubPubsubTopicToKeys||{},Xg=y.ytPubsubPubsubIsSynchronous||{};function Yg(a,b){var c=Zg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Vg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Xg[a]?f():Uf(f,0)}catch(g){Df(g)}},void 0);
Vg[d]=!0;Wg[a]||(Wg[a]=[]);Wg[a].push(d);return d}return 0}
function $g(a){var b=Zg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete Vg[c]}))}
function ah(a,b){var c=Zg();c&&c.publish.apply(c,arguments)}
function bh(a){var b=Zg();if(b)if(b.clear(a),a)ch(a);else for(var c in Wg)ch(c)}
function Zg(){return y.ytPubsubPubsubInstance}
function ch(a){Wg[a]&&(a=Wg[a],C(a,function(b){Vg[b]&&delete Vg[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.da;L.prototype.publish=L.prototype.W;L.prototype.clear=L.prototype.clear;z("ytPubsubPubsubInstance",Ug,void 0);z("ytPubsubPubsubTopicToKeys",Wg,void 0);z("ytPubsubPubsubIsSynchronous",Xg,void 0);z("ytPubsubPubsubSubscribedKeys",Vg,void 0);var dh=window,P=dh.ytcsi&&dh.ytcsi.now?dh.ytcsi.now:dh.performance&&dh.performance.timing&&dh.performance.now&&dh.performance.timing.navigationStart?function(){return dh.performance.timing.navigationStart+dh.performance.now()}:function(){return(new Date).getTime()};var eh=If("initial_gel_batch_timeout",2E3),fh=Math.pow(2,16)-1,gh=null,hh=0,ih=void 0,jh=0,kh=0,lh=0,mh=!0,nh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",nh,void 0);var oh=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",oh,void 0);
function ph(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.G&&(oh[a.G.token]=qh(a.G),c=a.G.token);var d=nh.get(c)||[];nh.set(c,d);d.push(a.payload);b&&(ih=new b);a=If("tvhtml5_logging_max_batch")||If("web_logging_max_batch")||100;b=P();d.length>=a?rh({writeThenSend:!0}):10<=b-lh&&(sh(),lh=b)}}
function th(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.G&&(oh[a.G.token]=qh(a.G),c=a.G.token);var d=new Map;d.set(c,[a.payload]);b&&(ih=new b);return new Me(function(e){ih&&ih.isReady()?uh(d,e,{bypassNetworkless:!0}):e()})}}
function rh(a){a=void 0===a?{}:a;new Me(function(b){Vf(jh);Vf(kh);kh=0;ih&&ih.isReady()?(uh(nh,b,a),nh.clear()):(sh(),b())})}
function sh(){O("web_gel_timeout_cap")&&!kh&&(kh=Uf(function(){rh({writeThenSend:!0})},6E4));
Vf(jh);var a=E("LOGGING_BATCH_TIMEOUT",If("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&mh&&(a=eh);jh=Uf(function(){rh({writeThenSend:!0})},a)}
function uh(a,b,c){var d=ih;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=lb({context:vh(d.config_||wh())});h.events=k;(k=oh[g])&&xh(h,g,k);delete oh[g];g="visitorOnlyApprovedKey"===g;yh(h,e,g);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Tg("/generate_204");zh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();hh=Math.round(P()-e)},
onError:function(){f--;f||b()},
Ka:c,ja:g});mh=!1}}
function yh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=E("EVENT_ID",void 0))&&((c=E("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*fh/2)),c++,c>fh&&(c=1),M("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,gh&&hh&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:gh,roundtripMs:String(hh)}),gh=b,hh=0)}
function xh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function qh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Ah=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Ah,void 0);function Bh(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=gg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.U&&(a=e.context,b=d.U,Ah[b]=b in Ah?Ah[b]+1:0,a.sequence={index:Ah[b],groupKey:b},d.Ta&&delete Ah[d.U]);(d.jl?th:ph)({endpoint:"log_event",payload:e,G:d.G,ja:d.ja},c)}
;function Ch(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Dh(a,b,c,d,e){hd.set(""+a,b,{wa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Eh=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Eh,void 0);function Fh(){this.h=E("ALT_PREF_COOKIE_NAME","PREF");this.i=E("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=hd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Eh[d]=c.toString())}}}
Fh.prototype.get=function(a,b){Gh(a);Hh(a);a=void 0!==Eh[a]?Eh[a].toString():null;return null!=a?a:b?b:""};
Fh.prototype.set=function(a,b){Gh(a);Hh(a);if(null==b)throw Error("ExpectedNotNull");Eh[a]=b.toString()};
Fh.prototype.remove=function(a){Gh(a);Hh(a);delete Eh[a]};
Fh.prototype.clear=function(){for(var a in Eh)delete Eh[a]};
function Hh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ih(a){a=void 0!==Eh[a]?Eh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(Fh);var Jh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Kh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Lh(){var a=y.navigator;return a?a.connection:void 0}
;function Mh(){return"INNERTUBE_API_KEY"in zf&&"INNERTUBE_API_VERSION"in zf}
function wh(){return{innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),Wa:E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xa:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Za:E("INNERTUBE_CONTEXT_HL",void 0),Ya:E("INNERTUBE_CONTEXT_GL",void 0),ab:E("INNERTUBE_HOST_OVERRIDE",void 0)||"",cb:!!E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bb:!!E("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:E("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function vh(a){var b={client:{hl:a.Za,gl:a.Ya,clientName:a.Xa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Wa}};O("web_include_ua_it_context")&&navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=E("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=E("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=E("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&
void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Ch()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.Ja=null!=(h=b.client.Ja)?h:{};b.client.Ja.webDisplayMode=Ch()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);E("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});a:{if(h=Lh()){a=Jh[h.type||"unknown"]||"CONN_UNKNOWN";h=Jh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Lh(),a=null!==a&&void 0!==a&&a.effectiveType?Kh.hasOwnProperty(a.effectiveType)?Kh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(qg(E("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Nh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Vk||E("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Uk:b=ld([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=E("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));return d}
;function Oh(a){a=Object.assign({},a);delete a.Authorization;var b=ld();if(b){var c=new Fd;c.update(E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Cc(c.digest())}return a}
;function Ph(a){var b=new of;(b=b.isAvailable()?a?new uf(b,a):b:null)||(a=new pf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new kf(a):null;this.i=document.domain||window.location.hostname}
Ph.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fe(b))}catch(f){return}else e=escape(b);Dh(a,e,c,this.i)};
Ph.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=hd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ph.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;hd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Qh;function Rh(){Qh||(Qh=new Ph("yt.innertube"));return Qh}
function Sh(a,b,c,d){if(d)return null;d=Rh().get("nextId",!0)||1;var e=Rh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Oh(c),requestTime:Math.round(P())};Rh().set("nextId",d+1,86400,!0);Rh().set("requests",e,86400,!0);return d}
function Th(a){var b=Rh().get("requests",!0)||{};delete b[a];Rh().set("requests",b,86400,!0)}
function Uh(a){var b=Rh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Oh(Nh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),zh(a,d.method,e,{}));delete b[c]}}Rh().set("requests",b,86400,!0)}}
;function Vh(a,b){this.version=a;this.args=b}
;function Wh(a,b){this.topic=a;this.h=b}
Wh.prototype.toString=function(){return this.topic};var Xh=A("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.da;L.prototype.publish=L.prototype.W;L.prototype.clear=L.prototype.clear;z("ytPubsub2Pubsub2Instance",Xh,void 0);var Yh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Yh,void 0);var Zh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Zh,void 0);var $h=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",$h,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ai(a,b){var c=bi();c&&c.publish.call(c,a.toString(),a,b)}
function ci(a){var b=di,c=bi();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Yh[d])try{if(f&&b instanceof Wh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.V){var l=new h;h.V=l.version}var n=h.V}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Df(p)}},$h[b.toString()]?A("yt.scheduler.instance")?$f(g):Uf(g,0):g())});
Yh[d]=!0;Zh[b.toString()]||(Zh[b.toString()]=[]);Zh[b.toString()].push(d);return d}
function ei(){var a=fi,b=ci(function(c){a.apply(void 0,arguments);gi(b)});
return b}
function gi(a){var b=bi();b&&("number"===typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete Yh[c]}))}
function bi(){return A("ytPubsub2Pubsub2Instance")}
;function hi(){}
;var ii=function(){var a;return function(){a||(a=new Ph("ytidb"));return a}}();
function ji(){var a;return null===(a=ii())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ki(a){this.h=void 0===a?!1:a;(a=ji())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;O("ytidb_analyze_is_supported")&&(null===(c=ii())||void 0===c?0:c.h)&&(c={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(b=ii())||void 0===b?void 0:b.set("LAST_RESULT_ENTRY_KEY",c,2592E3,!0))}
ki.prototype.isSupported=function(){return this.h};var li=[],mi=!1;function ni(a){mi||(li.push({type:"ERROR",payload:a}),10<li.length&&li.shift())}
function oi(a,b){mi||(li.push({type:"EVENT",eventType:a,payload:b}),10<li.length&&li.shift())}
;function pi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(pi,Error);function qi(){if(void 0!==E("DATASYNC_ID",void 0))return E("DATASYNC_ID",void 0);throw new pi("Datasync ID not set","unknown");}
;function ri(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function si(a){return a.substr(0,a.indexOf(":"))||a}
;var ti={},ui=(ti.AUTH_INVALID="No user identifier specified.",ti.EXPLICIT_ABORT="Transaction was explicitly aborted.",ti.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ti.MISSING_OBJECT_STORE="Object store not created.",ti.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ti.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ti.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ti.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",ti),vi={},wi=(vi.AUTH_INVALID="ERROR",vi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",vi.EXPLICIT_ABORT="IGNORED",vi.IDB_NOT_SUPPORTED="ERROR",vi.MISSING_OBJECT_STORE="ERROR",vi.QUOTA_EXCEEDED="WARNING",vi.QUOTA_MAYBE_EXCEEDED="WARNING",vi.UNKNOWN_ABORT="WARNING",vi),xi={},yi=(xi.AUTH_INVALID=!1,xi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,xi.EXPLICIT_ABORT=!1,xi.IDB_NOT_SUPPORTED=!1,xi.MISSING_OBJECT_STORE=!1,xi.QUOTA_EXCEEDED=!1,xi.QUOTA_MAYBE_EXCEEDED=!0,
xi.UNKNOWN_ABORT=!0,xi);function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ui[a]:c;d=void 0===d?wi[a]:d;e=void 0===e?yi[a]:e;pi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,pi);function zi(a){Q.call(this,"MISSING_OBJECT_STORE",{al:a},ui.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,zi.prototype)}
v(zi,Q);var Ai=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bi(a,b,c){b=si(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof Q)return d;if("QuotaExceededError"===d.name)return new Q("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(zc&&"UnknownError"===d.name)return new Q("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Ai.some(function(e){return d.message.includes(e)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new Q("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",bl:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Ci(a){if(!a)throw Error();throw a;}
function Di(a){return a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={aa:0};f.aa<a.length;f={aa:f.aa},++f.aa)Ei(R.resolve(a[f.aa]).then(function(g){return function(h){d[g.aa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
R.resolve=function(a){return new R(function(b,c){a instanceof R?a.then(b,c):b(a)})};
R.reject=function(a){return new R(function(b,c){c(a)})};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Di,e=null!==b&&void 0!==b?b:Ci;return new R(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Fi(c,c,d,f,g)}),c.onRejected.push(function(){Gi(c,c,e,f,g)})):"FULFILLED"===c.state.status?Fi(c,c,d,f,g):"REJECTED"===c.state.status&&Gi(c,c,e,f,g)})};
function Ei(a,b){a.then(void 0,b)}
function Fi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?Hi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Gi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?Hi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?Hi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ii(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ji(a){return new Promise(function(b,c){Ii(a,b,c)})}
function Ki(a){return new R(function(b,c){Ii(a,b,c)})}
;function Li(a,b){return new R(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Mi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Mi.prototype;m.add=function(a,b,c){return Ni(this,[a],{mode:"readwrite",I:!0},function(d){return Oi(d,a).add(b,c)})};
m.clear=function(a){return Ni(this,[a],{mode:"readwrite",I:!0},function(b){return Oi(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Ni(this,[a],{mode:"readonly",I:!0},function(c){return Oi(c,a).count(b)})};
function Pi(a,b,c){a=a.h.createObjectStore(b,c);return new Qi(a)}
m.delete=function(a,b){return Ni(this,[a],{mode:"readwrite",I:!0},function(c){return Oi(c,a).delete(b)})};
m.get=function(a,b){return Ni(this,[a],{mode:"readonly",I:!0},function(c){return Oi(c,a).get(b)})};
function Ri(a,b,c,d){return Ni(a,[b],{mode:"readwrite",I:!0},function(e){e=Oi(e,b);return Ki(e.h.put(c,d))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ni(a,b,c,d){return G(a,function f(){var g=this,h,k,l,n,p,t,q,D,K,N,X,Y;return x(f,function(I){switch(I.h){case 1:var T={mode:"readonly",I:!1};"string"===typeof c?T.mode=c:T=c;h=T;g.transactionCount++;k=h.I?If("ytidb_transaction_try_count",1):1;l=0;case 2:if(n){I.A(3);break}l++;p=Math.round(P());ra(I,4);t=g.h.transaction(b,h.mode);T=new Si(t);T=Ti(T,d);return w(I,T,6);case 6:return q=I.i,D=Math.round(P()),Ui(g,p,D,l,void 0,b.join(),h),I.return(q);case 4:K=sa(I);N=Math.round(P());X=Bi(K,g.h.name,
b.join());if((Y=X instanceof Q&&!X.h)||l>=k)Ui(g,p,N,l,X,b.join(),h),n=X;I.A(2);break;case 3:return I.return(Promise.reject(n))}})})}
function Ui(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&oi("QUOTA_EXCEEDED",{dbName:si(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(oi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Vi(a,!1,d,f,b),ni(e)):Vi(a,!0,d,f,b)}
function Vi(a,b,c,d,e){oi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
m.getName=function(){return this.h.name};
function Qi(a){this.h=a}
m=Qi.prototype;m.add=function(a,b){return Ki(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Ki(this.h.clear()).then(function(){})};
m.count=function(a){return Ki(this.h.count(a))};
function Wi(a,b){return Xi(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Wi(this,a):Ki(this.h.delete(a))};
m.get=function(a){return Ki(this.h.get(a))};
m.index=function(a){return new Yi(this.h.index(a))};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Xi(a,b,c){a=a.h.openCursor(b.query,b.direction);return Zi(a).then(function(d){return Li(d,c)})}
function Si(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ti(a,b){var c=new Promise(function(d,e){try{Ei(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Si.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
function Oi(a,b){b=a.h.objectStore(b);var c=a.j.get(b);c||(c=new Qi(b),a.j.set(b,c));return c}
function Yi(a){this.h=a}
m=Yi.prototype;m.count=function(a){return Ki(this.h.count(a))};
m.delete=function(a){return $i(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Ki(this.h.get(a))};
m.getKey=function(a){return Ki(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function $i(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Zi(a).then(function(d){return Li(d,c)})}
function aj(a,b){this.request=a;this.cursor=b}
function Zi(a){return Ki(a).then(function(b){return null===b?null:new aj(a,b)})}
m=aj.prototype;m.advance=function(a){this.cursor.advance(a);return Zi(this.request)};
m.continue=function(a){this.cursor.continue(a);return Zi(this.request)};
m.delete=function(){return Ki(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Ki(this.cursor.update(a))};function bj(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Mi(g.result,{closed:p}));return t}
var g=self.indexedDB.open(a,b),h=c.blocked,k=c.blocking,l=c.ub,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&oi("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:si(a)});var D=f(),K=new Si(g.transaction);n&&n(D,q.oldVersion,q.newVersion,
K);K.done.catch(function(N){e(N)})}catch(N){e(N)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){oi("IDB_UNEXPECTEDLY_CLOSED",{dbName:si(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function cj(a,b,c){c=void 0===c?{}:c;return bj(a,b,c)}
function dj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Ji(e),0)})})}
;function ej(a,b){this.name=a;this.options=b;this.j=!1}
ej.prototype.i=function(a,b,c){c=void 0===c?{}:c;return cj(a,b,c)};
ej.prototype.delete=function(a){a=void 0===a?{}:a;return dj(this.name,a)};
ej.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,ub:c,upgrade:this.options.upgrade},e=function(){return G(a,function g(){var h=this,k,l,n;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var t=u(Object.keys(h.options.xa));for(var q=t.next();!q.done;q=t.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){t=q;break a}t=void 0}l=t;if(void 0===l){p.A(5);break}if(h.j){p.A(6);break}h.j=!0;return w(p,h.delete(),7);case 7:return p.return(e());case 6:throw new zi(l);case 5:return p.return(k);
case 2:n=sa(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var fj=new ej("YtIdbMeta",{xa:{databases:!0},upgrade:function(a,b){1>b&&Pi(a,"databases",{keyPath:"actualName"})}});
function gj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,fj.open(),2);d=e.i;return e.return(Ni(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=Oi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return Ki(g.h.put(a,void 0)).then(function(){})})}))})})}
function hj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,fj.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function ij(a){return G(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,fj.open(),2)):3!=f.h?(e=f.i,w(f,Ni(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return Xi(Oi(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function jj(){return ij(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var kj;
function lj(){return G(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:if(O("ytidb_is_supported_cache_success_result")&&(c=ji(),null===c||void 0===c?0:c.hasSucceededOnce))return f.return(new ki(!0));var g;if(g=Mg)g=/WebKit\/([0-9]+)/.exec(Nb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Nb),g=!(g&&602<=parseInt(g[1],10)));if(g||kc)return f.return(new ki(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ki(!1))}catch(h){return f.return(new ki(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new ki(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,gj(e),4);case 4:return w(f,hj("yt-idb-test-do-not-use"),5);case 5:return f.return(new ki(!0));case 2:return sa(f),f.return(new ki(!1))}})})}
function mj(){if(void 0!==kj)return kj;mi=!0;return kj=lj().then(function(a){mi=!1;return a.isSupported()})}
;function nj(a){try{qi();var b=!0}catch(c){b=!1}if(!b)throw a=new Q("AUTH_INVALID"),ni(a),a;b=qi();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function oj(a,b,c,d){var e,f;return G(this,function h(){var k,l;return x(h,function(n){switch(n.h){case 1:return w(n,pj({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return ri(a),k=c?{actualName:a,publicName:a,userIdentifier:void 0}:nj(a),k.clearDataOnAuthChange=O("remove_clear_data_on_auth_change_killswitch")?null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1:null!==(f=d.clearDataOnAuthChange)&&void 0!==f?f:!0,ra(n,3),w(n,gj(k),5);case 5:return w(n,cj(k.actualName,b,d),6);case 6:return n.return(n.i);
case 3:return l=sa(n),ra(n,7),w(n,hj(k.actualName),9);case 9:n.h=8;n.m=0;break;case 7:sa(n);case 8:throw l;}})})}
function pj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,mj(),2);if(!e.i)throw d=new Q("IDB_NOT_SUPPORTED",{context:a}),ni(d),d;e.h=0})})}
function qj(a,b,c){c=void 0===c?{}:c;return oj(a,b,!1,c)}
function rj(a,b,c){c=void 0===c?{}:c;return oj(a,b,!0,c)}
function sj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,mj(),2);if(3!=f.h){if(!f.i)return f.return();ri(a);e=nj(a);return w(f,dj(e.actualName,b),3)}return w(f,hj(e.actualName),0)})})}
function tj(a,b){var c=this;a=a.map(function(d){return G(c,function f(){return x(f,function(g){return 1==g.h?w(g,dj(d.actualName,b),2):w(g,hj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function uj(){var a=void 0===a?{}:a;return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,mj(),2);if(3!=e.h){if(!e.i)return e.return();ri("LogsDatabaseV2");return w(e,jj(),3)}d=e.i;return w(e,tj(d,a),0)})})}
function vj(a,b){b=void 0===b?{}:b;return G(this,function d(){return x(d,function(e){if(1==e.h)return w(e,mj(),2);if(3!=e.h){if(!e.i)return e.return();ri(a);return w(e,dj(a,b),3)}return w(e,hj(a),0)})})}
;function wj(){R.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(wj,R);wj.reject=R.reject;wj.resolve=R.resolve;wj.all=R.all;function xj(a,b){ej.call(this,a,b);this.options=b;ri(a)}
v(xj,ej);function yj(a,b){var c;return function(){c||(c=new xj(a,b));return c}}
xj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.za?rj:qj)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
xj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.za?vj:sj)(this.name,a)};
function zj(a,b){return yj(a,b)}
;var Aj;
function Bj(){if(Aj)return Aj();var a={};Aj=zj("LogsDatabaseV2",{xa:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),za:!O("nwl_use_ytidb_partitioning"),clearDataOnAuthChange:O("nwl_use_ytidb_partitioning"),upgrade:function(b,c,d){2>c&&2<=d&&(Pi(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Pi(b,"sapisid"));3>c&&3<=d&&Pi(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface",
"timestamp"],{unique:!1})},
version:3});return Aj()}
;function Cj(){return Bj().open()}
function Dj(a){return G(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,Ej(),2);case 2:return e=k.i,w(k,Cj(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,Ri(f,"LogsRequestsStore",g),4);case 4:return h=k.i,d.vb=P(),Fj(d),k.return(h)}})})}
function Gj(a){return G(this,function c(){var d,e,f,g,h,k,l,n;return x(c,function(p){switch(p.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(p,Ej(),2);case 2:return e=p.i,f=E("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,e,f,0],h=[a,e,f,P()],k=IDBKeyRange.bound(g,h),w(p,Cj(),3);case 3:return l=p.i,n=void 0,w(p,Ni(l,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(t){return $i(Oi(t,"LogsRequestsStore").index("newRequest"),{query:k,direction:"prev"},function(q){q.getValue()&&
(n=q.getValue(),"NEW"===a&&(n.status="QUEUED",q.update(n)))})}),4);
case 4:return d.vb=P(),Fj(d),p.return(n)}})})}
function Hj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Cj(),2);d=e.i;return e.return(Ni(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Oi(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Ki(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Ij(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Cj(),2);d=e.i;return e.return(Ni(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Oi(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Ki(g.h.put(h,void 0)).then(function(){return h})):wj.resolve(void 0)})}))})})}
function Jj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Cj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Kj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Cj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function Lj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Cj(),2);c=e.i;d=P()-2592E6;return w(e,Ni(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return Xi(Oi(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Mj(){return G(this,function b(){return x(b,function(c){return 1==c.h?w(c,uj(),2):w(c,vj("LogsDatabaseV2"),0)})})}
function Ej(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h){hi.h||(hi.h=new hi);var e={};var f=ld([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(E("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in zf||(e["X-Origin"]=window.location.origin),O("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in zf&&(e["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));e instanceof Me||(f=new Me(Ea),Ne(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Oh(c);var g=
new Fd;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Nj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Cj(),2);d=e.i;return w(e,Ri(d,"sapisid",a,"sapisid"),0)})})}
function Oj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Cj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function Fj(a){var b=If("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&ai("nwl_transaction_latency_payload",a)}
;var Pj={},Qj=zj("ServiceWorkerLogsDatabase",{xa:(Pj.SWHealthLog=!0,Pj),za:!0,upgrade:function(a,b,c){1>b&&1<=c&&Pi(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Rj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return O("web_clean_sw_logs_store")?w(e,Qj().open(),3):e.A(0);c=e.i;d=P()-2592E6;return w(e,Ni(c,["SWHealthLog"],{mode:"readwrite",I:!0},function(f){return Xi(Oi(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Sj(){return G(this,function b(){var c,d;return x(b,function(e){switch(e.h){case 1:return w(e,Qj().open(),2);case 2:return c=e.i,w(e,c.clear("SWHealthLog"),3);case 3:return w(e,Cj(),4);case 4:return d=e.i,e.return(d.clear("SWHealthLog"))}})})}
;var Tj=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function Uj(){for(var a=u(Tj),b=a.next();!b.done;b=a.next())if(b=hd.get(b.value))return b;return"LOGGED_OUT"}
function Vj(){Ce.call(this);this.pollingInterval=3E3;this.i=[null,null,null];this.m=!1;Wj(this)}
v(Vj,Ce);function Xj(){Vj.h||(Vj.h=new Vj);var a=Vj.h;a.m=!0;a.verifyUser();Yj(a)}
Vj.prototype.verifyUser=function(){var a=Wj(this),b=a.fb;if(!a.tb)return Yj(this),!0;De(this,"ytsessionchange");b&&De(this,"ytuserinvalid");Yj(this);return!1};
function Wj(a){var b=Tj.map(function(e){var f;return null!==(f=hd.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.i&&""!==a.i[f]&&""===e}),d=b.some(function(e,f){return a.i&&a.i[f]!==e});
a.i=b;return{fb:c,tb:d}}
function Yj(a){a.m&&(Zj(a),a.l=Yf(function(){a.verifyUser()},a.pollingInterval))}
function Zj(a){a.l&&(bg(a.l),a.l=void 0)}
;var ak;function bk(){ak||(ak=new Ph("yt.offline"));return ak}
function ck(a){if(O("offline_error_handling")){var b=bk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);bk().set("errors",b,2592E3,!0)}}
function dk(){if(O("offline_error_handling")){var a=bk().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new pi(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Df(c)}bk().set("errors",{},2592E3,!0)}}}
;var ek=If("network_polling_interval",3E4);function S(){Ce.call(this);this.L=0;this.o=this.l=!1;this.B=0;this.m=this.J=!1;this.i=this.ka();this.m=O("validate_network_status");fk(this);gk(this)}
v(S,Ce);function hk(){if(!S.h){var a=A("yt.networkStatusManager.instance")||new S;z("yt.networkStatusManager.instance",a,void 0);S.h=a}return S.h}
m=S.prototype;m.N=function(){this.m||this.i===this.ka()||Ef(new pi("NetworkStatusManager isOnline does not match window status"));return this.i};
m.gb=function(a){this.l=!0;if(void 0===a?0:a)this.L||ik(this)};
m.ka=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Ra=function(){this.J=!0};
m.ca=function(a,b){return Ce.prototype.ca.call(this,a,b)};
function gk(a){window.addEventListener("online",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,d.T(),2):(d.i=!0,d.l&&De(d,"ytnetworkstatus-online"),e.A(2));jk(d);d.J&&dk();e.h=0})})})}
function fk(a){window.addEventListener("offline",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,d.T(),2):(d.i=!1,d.l&&De(d,"ytnetworkstatus-offline"),e.A(2));jk(d);e.h=0})})})}
function ik(a){a.L=Yf(function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(O("trigger_nsm_validation_checks_with_nwl")&&!d.i)return w(e,d.T(),3);if(d.ka()){if(!1!==d.i)return e.A(3);d.o=!0;d.B=P();return d.l?d.m?w(e,d.T(),11):(d.i=!0,De(d,"ytnetworkstatus-online"),e.A(11)):e.A(11)}if(!0!==d.i)return e.A(3);d.o=!0;d.B=P();return d.l?d.m?w(e,d.T(),3):(d.i=!1,De(d,"ytnetworkstatus-offline"),e.A(3)):e.A(3)}if(3!=e.h)return d.J&&dk(),e.A(3);ik(d);e.h=0})})},ek)}
function jk(a){a.o&&(Ef(new pi("NetworkStatusManager state did not match poll",P()-a.B)),a.o=!1)}
m.T=function(a){var b=this;return this.C?this.C:this.C=new Promise(function(c){return G(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.K=$f(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.C=void 0;k.K&&bg(k.K);h!==k.i&&(k.i=h,k.i&&k.l?De(k,"ytnetworkstatus-online"):k.l&&De(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.A(3)}})})})};
S.prototype.sendNetworkCheckRequest=S.prototype.T;S.prototype.listen=S.prototype.ca;S.prototype.enableErrorFlushing=S.prototype.Ra;S.prototype.getWindowStatus=S.prototype.ka;S.prototype.monitorNetworkStatusChange=S.prototype.gb;S.prototype.isNetworkAvailable=S.prototype.N;S.getInstance=hk;function kk(a){a=void 0===a?{}:a;Ce.call(this);var b=this;this.l=this.o=0;this.i=hk();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Sa);a.eb&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.i))a.ma?(this.ma=a.ma,c("ytnetworkstatus-online",function(){lk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){lk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){De(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){De(b,"publicytnetworkstatus-offline")}))}
v(kk,Ce);kk.prototype.N=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
kk.prototype.T=function(a){return G(this,function c(){var d=this,e;return x(c,function(f){return(e=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function lk(a,b){a.ma?a.l?(bg(a.o),a.o=$f(function(){a.m!==b&&(De(a,b),a.m=b,a.l=P())},a.ma-(P()-a.l))):(De(a,b),a.m=b,a.l=P()):De(a,b)}
;var mk=!1,nk=!1,ok=0,pk=0,qk,rk=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:mk,isIdbSupported:nk,potentialEsfErrorCounter:pk};O("export_networkless_options")&&z("ytNetworklessLoggingInitializationOptions",rk,void 0);
function sk(){G(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,mj(),2);case 2:(c=g.i)&&(nk=!0);d=O("networkless_logging");if(c&&d)return O("nwl_use_ytidb_partitioning")?w(g,vj("LogsDatabaseV2"),8):w(g,uj(),8);if(!c){g.A(0);break}return w(g,Mj(),0);case 8:return Xj(),document.addEventListener("ytsessionchange",function(){tk()}),w(g,Oj(),11);
case 11:e=g.i;f=Uj();if(e===f){g.A(12);break}tk();return w(g,Nj(f),12);case 12:if(!(O("enable_nwl_cleaning_logic")&&Math.random()<=If("nwl_cleaning_rate",.1))){g.A(14);break}return w(g,Lj(),15);case 15:return w(g,Rj(),14);case 14:mk=!0;uk();vk().N()&&wk();vk().ca("publicytnetworkstatus-online",wk);vk().ca("publicytnetworkstatus-offline",xk);if(!O("networkless_immediately_drop_sw_health_store")){g.A(17);break}return w(g,yk(),17);case 17:if(!O("networkless_immediately_drop_all_requests")){g.A(19);break}return w(g,
Mj(),19);case 19:O("export_networkless_options")&&(rk.isNwlInitialized=mk,rk.isIdbSupported=nk),g.h=0}})})}
function zk(a,b){function c(d){var e=vk().N();if(!Ak()||!d||e&&O("vss_networkless_bypass_write"))Bk(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Dj(f).then(function(g){f.id=g;(vk().N()||O("networkless_always_online"))&&Ck(f)}).catch(function(g){Ck(f);
vk().N()?Df(g):ck(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?mj().then(function(d){c(d)}):c(Dk())}
function Ek(a,b){function c(d){if(Ak()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Jj(e.id):f=!0;g(h,k)};
Bk(e.url,e.options);Dj(e).then(function(h){e.id=h;f&&Jj(e.id)}).catch(function(h){vk().N()?Df(h):ck(h)})}else Bk(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?mj().then(function(d){c(d)}):c(Dk())}
function wk(){var a=this;ok||(ok=$f(function(){return G(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Gj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,Ck(d),3):(xk(),e.return());if(!O("nwl_throttling_race_fix")||ok)ok=0,wk();e.h=0})})},100))}
function xk(){bg(ok);ok=0}
function Ck(a){return G(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.A(2);break}return w(e,Hj(a.id),3);case 3:(d=e.i)?a=d:Ef(Error("The request cannot be found in the database."));case 2:if(Fk(a,2592E6)){e.A(4);break}Ef(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.A(5);break}return w(e,Jj(a.id),5);case 5:return e.return();case 4:var f=a=Gk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());(a=f)&&Bk(a.url,a.options);e.h=0}})})}
function Gk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return G(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!(O("trigger_nsm_validation_checks_with_nwl")&&(A("ytNetworklessLoggingInitializationOptions")?rk.potentialEsfErrorCounter:pk)<=If("potential_esf_error_limit",10))){k.A(2);break}return w(k,vk().T(),3);case 3:if(vk().N())A("ytNetworklessLoggingInitializationOptions")&&rk.potentialEsfErrorCounter++,pk++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.A(4);break}return 1>
a.sendCount?w(k,Ij(a.id),8):w(k,Jj(a.id),4);case 8:$f(function(){vk().N()&&wk()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return G(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.A(2):w(k,Jj(a.id),2);d(e,f);k.h=0})})};
return a}
function Fk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function uk(){var a=this;Gj("QUEUED").then(function(b){b&&!Fk(b,12E4)?$f(function(){return G(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.A(2):w(e,Ij(b.id),2);uk();e.h=0})})}):O("nwl_trigger_throttle_after_reset")&&vk().N()&&wk()})}
function tk(){Kj().catch(function(a){Df(a)})}
function yk(){return G(this,function b(){return x(b,function(c){return c.return(Sj().catch(function(d){Df(d)}))})})}
function vk(){qk||(qk=new kk({eb:!0,Sa:O("trigger_nsm_validation_checks_with_nwl")}));return qk}
function Bk(a,b){if(O("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Eg(a,b):Tg(a,void 0,b.postBody)}else Eg(a,b)}
function Ak(){return A("ytNetworklessLoggingInitializationOptions")?rk.isNwlInitialized:mk}
function Dk(){return A("ytNetworklessLoggingInitializationOptions")?rk.isIdbSupported:nk}
;function Hk(a){var b=this;this.config_=null;a?this.config_=a:Mh()&&(this.config_=wh());Yf(function(){Uh(b)},5E3)}
Hk.prototype.isReady=function(){!this.config_&&Mh()&&(this.config_=wh());return!!this.config_};
function zh(a,b,c,d){function e(t){t=void 0===t?!1:t;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||(q=Sh(b,c,l,k)),q)){var D=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(N,X){Th(q);D(N,X)};
c.onFetchSuccess=function(N,X){Th(q);K(N,X)}}try{t&&d.retry&&!d.Ka.bypassNetworkless?(g.method="POST",!d.Ka.writeThenSend&&O("nwl_send_fast_on_unload")?Ek(p,g):zk(p,g)):(g.method="POST",g.postParams||(g.postParams={}),Eg(p,g))}catch(N){if("InvalidAccessError"==N.name)q&&(Th(q),q=0),Ef(Error("An extension is blocking network request."));
else throw N;}q&&Yf(function(){Uh(a)},5E3)}
!E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ef(new pi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new pi("innertube xhrclient not ready",b,c,d);Df(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,q){if(d.onError)d.onError(q)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.ab)&&(h=f);var k=a.config_.cb||!1,l=Nh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.bb&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var p=sg(""+h+f,n||{},!0);Ak()?mj().then(function(t){e(t)}):e(!1)}
;function Ik(a,b,c){c=void 0===c?{}:c;var d=Hk;E("ytLoggingEventsDefaultDisabled",!1)&&Hk==Hk&&(d=null);Bh(a,b,d,c)}
;var Jk=[{Ia:function(a){return"Cannot read property '"+a.key+"'"},
ya:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ia:function(a){return"Cannot call '"+a.key+"'"},
ya:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var Lk={S:[],R:[{Ca:Kk,weight:500}]};function Kk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Mk(){this.R=[];this.S=[]}
var Nk;function Ok(){if(!Nk){var a=Nk=new Mk;a.S.length=0;a.R.length=0;Lk.S&&a.S.push.apply(a.S,Lk.S);Lk.R&&a.R.push.apply(a.R,Lk.R)}return Nk}
;var Pk=new L;function Qk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Rk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Rk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Rk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Rk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Sk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Tk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Qk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Tk(f+".ve",g,h,k):0;d+=f;d+=Tk(e,a[e],b,c);if(500<d)break}}else c[b]=Uk(a),d+=c[b].length;else c[b]=Uk(a),d+=c[b].length;return d}
function Tk(a,b,c,d){c+="."+a;a=Uk(b);d[c]=a;return c.length+a.length}
function Uk(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Vk=new Set,Wk=0,Xk=0,Yk=0,Zk=[],$k=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function al(a){bl(a,"WARNING")}
function bl(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Wk))){var g=Hd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Sk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,t=Uk(n[l]);c[p]=t;k+=p.length+t.length;if(500<k)break}}else c.params=Uk(n)}if(Zk.length)for(l=0;l<Zk.length&&!(k=Sk(Zk[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Ok();c=u(a.S);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Zk)){a=d.weight;break a}a=u(a.R);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ca(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Jk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ya[l.name])for(e=u(c.ya[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ia(f);break}l.params||(l.params={});a=Ok();l.params["params.errorServiceSignature"]="msg="+a.S.length+"&cb="+a.R.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Vk.has(l.message)){"ERROR"===b?(Pk.W("handleError",l),O("record_app_crashed_web")&&0===Yk&&1===l.sampleWeight&&
(Yk++,Ik("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Xk++):"WARNING"===b&&Pk.W("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u($k);for(d=c.next();!d.done;d=c.next())if(Ng(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};E("FEXP_EXPERIMENTS")&&(e.experimentIds=E("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=E("SERVER_NAME",void 0);g=E("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(Ik("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&rh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:E("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=E("SERVER_NAME",void 0);c=E("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Eg(E("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}Vk.add(l.message);Wk++}}}
function cl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;var dl={hc:3611,wb:27686,xb:85013,yb:23462,Ab:42016,Bb:62407,Cb:26926,zb:43781,Db:51236,Eb:79148,Fb:50160,Gb:77504,Sb:87907,Tb:18630,Ub:54445,Vb:80935,Wb:105675,Xb:37521,Yb:47786,Zb:98349,ac:123695,cc:6827,dc:29434,ec:7282,fc:124448,kc:32276,jc:76278,lc:93911,mc:106531,nc:27259,oc:27262,pc:27263,sc:21759,tc:27107,uc:62936,wc:49568,xc:38408,yc:80637,zc:68727,Ac:68728,Bc:80353,Cc:80356,Dc:74610,Ec:45707,Fc:83962,Gc:83970,Hc:46713,Ic:89711,Jc:74612,Kc:93265,Lc:74611,Nc:113533,Oc:93252,Pc:99357,Rc:94521,
Sc:114252,Tc:113532,Uc:94522,Qc:94583,Vc:88E3,Wc:93253,Xc:93254,Yc:94387,Zc:94388,bd:93255,cd:97424,Mc:72502,dd:110111,ed:76019,gd:117092,hd:117093,fd:89431,jd:110466,kd:77240,ld:60508,md:105350,nd:73393,od:113534,pd:92098,qd:84517,rd:83759,sd:80357,td:86113,ud:72598,vd:72733,wd:107349,xd:124275,yd:118203,zd:117431,Ad:117429,Bd:117430,Cd:117432,Dd:120080,Ed:117259,Fd:121692,Gd:97615,Hd:31402,Id:84774,Jd:95117,Kd:98930,Ld:98931,Md:98932,Nd:43347,Od:45474,Pd:100352,Qd:84758,Rd:98443,Sd:117985,Td:74613,
Ud:74614,Vd:64502,Wd:74615,Xd:74616,Yd:122224,Zd:74617,ae:77820,be:74618,ce:93278,de:93274,ee:93275,ge:93276,he:22110,ie:29433,ke:120541,me:82047,ne:113550,oe:75836,pe:75837,qe:42352,re:84512,se:76065,te:75989,ue:16623,we:32594,xe:27240,ye:32633,ze:74858,Be:3945,Ae:16989,Ce:45520,De:25488,Ee:25492,Fe:25494,Ge:55760,He:14057,Ie:18451,Je:57204,Ke:57203,Le:17897,Me:57205,Ne:18198,Oe:17898,Pe:17909,Qe:43980,Re:46220,Se:11721,Te:49954,Ue:96369,Ve:3854,We:56251,Xe:25624,Ye:16906,Ze:99999,af:68172,bf:27068,
cf:47973,df:72773,ef:26970,ff:26971,gf:96805,hf:17752,jf:73233,kf:109512,lf:22256,mf:14115,nf:22696,pf:89278,qf:89277,rf:109513,sf:43278,tf:43459,uf:43464,vf:89279,wf:43717,xf:55764,yf:22255,zf:89281,Af:40963,Bf:43277,Cf:43442,Df:91824,Ef:120137,Ff:96367,Gf:36850,Hf:72694,If:37414,Jf:36851,Lf:124863,Kf:121343,Mf:73491,Nf:54473,Of:43375,Pf:46674,Qf:32473,Rf:72901,Sf:72906,Tf:50947,Uf:50612,Vf:50613,Wf:50942,Xf:84938,Yf:84943,Zf:84939,ag:84941,cg:84944,dg:84940,eg:84942,fg:35585,gg:51926,hg:79983,ig:63238,
jg:18921,kg:63241,lg:57893,mg:41182,ng:33424,og:22207,pg:42993,qg:36229,rg:22206,sg:22205,tg:18993,ug:19001,vg:18990,wg:18991,xg:18997,yg:18725,zg:19003,Ag:36874,Bg:44763,Cg:33427,Dg:67793,Eg:22182,Fg:37091,Gg:34650,Hg:50617,Ig:47261,Jg:22287,Kg:25144,Lg:97917,Mg:62397,Ng:125598,Og:36961,Pg:108035,Qg:27426,Rg:27857,Sg:27846,Tg:27854,Ug:69692,Vg:61411,Wg:39299,Xg:38696,Yg:62520,Zg:36382,ah:108701,bh:50663,dh:36387,eh:14908,fh:37533,gh:105443,hh:61635,ih:62274,jh:65702,kh:65703,lh:65701,mh:76256,nh:37671,
oh:49953,qh:36216,rh:28237,sh:39553,th:29222,uh:26107,vh:38050,wh:26108,yh:120745,xh:26109,zh:26110,Ah:66881,Bh:28236,Ch:14586,Dh:57929,Eh:74723,Fh:44098,Gh:44099,Hh:23528,Ih:61699,Jh:59149,Kh:101951,Lh:97346,Mh:118051,Nh:95102,Oh:64882,Ph:119505,Qh:63595,Rh:63349,Sh:95101,Th:75240,Uh:27039,Vh:68823,Wh:21537,Xh:83464,Yh:75707,Zh:83113,ai:101952,bi:101953,di:79610,fi:125755,gi:24402,hi:24400,ii:32925,ji:57173,ki:122502,li:64423,mi:64424,ni:33986,oi:100828,ri:21409,si:11070,ti:11074,vi:17880,wi:14001,
yi:30709,zi:30707,Ai:30711,Bi:30710,Ci:30708,xi:26984,Di:63648,Ei:63649,Fi:51879,Gi:111059,Hi:5754,Ii:20445,Ji:110386,Ki:113746,Li:66557,Mi:17310,Ni:28631,Oi:21589,Pi:68012,Qi:60480,Ri:31571,Si:76980,Ti:41577,Ui:45469,Vi:38669,Wi:13768,Xi:13777,Yi:62985,Zi:4724,aj:59369,bj:43927,cj:43928,dj:12924,ej:100355,hj:56219,ij:27669,jj:10337,gj:47896,kj:122629,lj:121258,mj:107598,nj:127991,oj:96639,pj:107536,qj:96661,rj:96658,sj:116646,tj:121122,uj:96660,vj:127738,wj:127083,xj:104443,yj:96659,zj:106442,Aj:63667,
Bj:63668,Cj:63669,Dj:78314,Ej:55761,Fj:127098,Gj:96368,Hj:67374,Ij:48992,Jj:49956,Kj:31961,Lj:26388,Mj:23811,Nj:5E4,Oj:126250,Pj:96370,Qj:47355,Rj:47356,Sj:37935,Tj:45521,Uj:21760,Vj:83769,Wj:49977,Xj:49974,Yj:93497,Zj:93498,ak:34325,bk:115803,ck:123707,dk:100081,ek:35309,fk:68314,gk:25602,hk:100339,ik:59018,jk:18248,kk:50625,lk:9729,mk:37168,nk:37169,pk:21667,qk:16749,rk:18635,sk:39305,tk:18046,uk:53969,vk:8213,wk:93926,xk:102852,yk:110099,zk:22678,Ak:69076,Ck:100856,Dk:17736,Ek:3832,Fk:55759,Gk:64031,
Hk:93044,Ik:93045,Jk:34388,Kk:17657,Lk:17655,Mk:39579,Nk:39578,Ok:77448,Pk:8196,Qk:11357,Rk:69877,Sk:8197,Tk:82039};function el(){var a=kb(fl),b;return Te(new Me(function(c,d){a.onSuccess=function(e){yg(e)?c(new gl(e)):d(new hl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new hl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new hl("Request timed out","net.timeout",e))};
b=Eg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ue&&b.abort();
return Re(c)})}
function hl(a,b,c){Sa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(hl,Sa);function gl(a){this.xhr=a}
;function il(){this.i=0;this.h=null}
il.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Le(a)?a:jl(a)):2===this.i&&b?(a=b.call(c,this.h),Le(a)?a:kl(a)):this};
il.prototype.getValue=function(){return this.h};
il.prototype.$goog_Thenable=!0;function kl(a){var b=new il;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function jl(a){var b=new il;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function ll(){if(jd())return!0;var a=E("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Mg&&Ng("applewebkit")&&!Ng("version")&&(!Ng("safari")||Ng("gsa/"))||nc&&Ng("version/")?!0:(a=hd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function ml(a){Sa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof nl;this.isTimeout=a instanceof hl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ue}
v(ml,Sa);ml.prototype.name="BiscottiError";function nl(){Sa.call(this,"Biscotti ID is missing from server")}
v(nl,Sa);nl.prototype.name="BiscottiMissingError";var fl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ol=null;function ig(){if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!ll())return Re(Error("User has not consented - not fetching biscotti id."));if("1"==ib())return Re(Error("Biscotti ID is not available in private embed mode"));ol||(ol=Te(el().then(pl),function(a){return ql(2,a)}));
return ol}
function pl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new nl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new nl;a=a.id;jg(a);ol=jl(a);rl(18E5,2);return a}
function ql(a,b){b=new ml(b);jg("");ol=kl(b);0<a&&rl(12E4,a-1);throw b;}
function rl(a,b){Uf(function(){Te(el().then(pl,function(c){return ql(b,c)}),Ea)},a)}
function sl(){try{var a=A("yt.ads.biscotti.getId_");return a?a():ig()}catch(b){return Re(b)}}
;function tl(a){if("1"!=ib()){a&&hg();try{sl().then(function(){},function(){}),Uf(tl,18E5)}catch(b){Df(b)}}}
;var ul=Date.now().toString();
function vl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ul)for(a=1,b=0;b<ul.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ul.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var wl,xl=y.ytLoggingDocDocumentNonce_;xl||(xl=vl(),Qa("ytLoggingDocDocumentNonce_",xl));wl=xl;var yl={je:0,ic:1,qc:2,ph:3,le:4,Bk:5,ci:6,fj:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function zl(a){this.h=a}
function Al(a){return new zl({trackingParams:a})}
zl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
zl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
zl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Bl(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Cl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Dl(a){return E(Cl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Dl,void 0);function El(a){return(a=Dl(void 0===a?0:a))?new zl({veType:a,youtubeData:void 0}):null}
function Fl(){var a=E("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function Gl(a){a=void 0===a?0:a;var b=E(Bl(a));if(!b&&!E("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",Gl,void 0);function Hl(a,b,c){var d=Fl();(c=Gl(c))&&delete d[c];b&&(d[a]=b)}
function Il(a){return Fl()[a]}
z("yt_logging_screen.getCttAuthInfo",Il,void 0);function Jl(a,b,c,d){c=void 0===c?0:c;if(a!==E(Bl(c))||b!==E(Cl(c)))Hl(a,d,c),M(Bl(c),a),M(Cl(c),b),b=function(){setTimeout(function(){a&&Bh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:wl,clientScreenNonce:a},Hk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Jl,void 0);function Kl(a){Vh.call(this,1,arguments);this.csn=a}
v(Kl,Vh);var di=new Wh("screen-created",Kl),Ll=[],Nl=Ml,Ol=0;function Pl(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Ya(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(gb(e)||!e.trackingParams&&!e.veType)&&al(Error("Child VE logged with no data"));d={G:Il(b),U:b};"UNDEFINED_CSN"==b?Ql("visualElementAttached",c,d):a?Bh("visualElementAttached",c,a,d):Ik("visualElementAttached",c,d)}
function Ml(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Cc(b)}
function Ql(a,b,c){Ll.push({payloadName:a,payload:b,options:c});Ol||(Ol=ei())}
function fi(a){if(Ll){for(var b=u(Ll),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Bh(c.payloadName,c.payload,null,c.options));Ll.length=0}Ol=0}
;function Rl(){this.i=new Set;this.h=new Set;this.j=new Map}
Rl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Fa(Rl);function Sl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Tl(a)||c.some(function(e){return!Tl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Ul(a,d.value);return a}
function Ul(a,b){for(var c in b)if(Tl(b[c])){if(c in a&&!Tl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ul(a[c],b[c])}else if(Vl(b[c])){if(c in a&&!Vl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Wl(a[c],b[c])}else a[c]=b[c];return a}
function Wl(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Tl(c)?a.push(Ul({},c)):Vl(c)?a.push(Wl([],c)):a.push(c);return a}
function Tl(a){return"object"===typeof a&&!Array.isArray(a)}
function Vl(a){return"object"===typeof a&&Array.isArray(a)}
;function Xl(a,b){Vh.call(this,1,arguments)}
v(Xl,Vh);function Yl(a,b){Vh.call(this,1,arguments)}
v(Yl,Vh);var Zl=new Wh("aft-recorded",Xl),$l=new Wh("timing-sent",Yl);var am=window;function bm(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var U=am.performance||am.mozPerformance||am.msPerformance||am.webkitPerformance||new bm;var cm=!1,dm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Oa(U.clearResourceTimings||U.webkitClearResourceTimings||U.mozClearResourceTimings||U.msClearResourceTimings||U.oClearResourceTimings||Ea,U);function em(a){var b=fm(a);if(b.aft)return b.aft;a=E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function gm(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===U||void 0===U?void 0:U.getEntriesByType)||void 0===a?void 0:a.call(U,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=hm(e.requestStart),e.responseEnd=hm(e.responseEnd),e.redirectStart=hm(e.redirectStart),e.redirectEnd=hm(e.redirectEnd),e.domainLookupEnd=hm(e.domainLookupEnd),e.connectStart=hm(e.connectStart),
e.connectEnd=hm(e.connectEnd),e.responseStart=hm(e.responseStart),e.secureConnectionStart=hm(e.secureConnectionStart),e.domainLookupStart=hm(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=U.timing}else a=U.timing;return a}
function im(){return O("csi_use_time_origin")&&U.timeOrigin?Math.floor(U.timeOrigin):U.timing.navigationStart}
function hm(a){return Math.round(im()+a)}
function jm(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Qa("ytcsi."+(a||"")+"data_",b));return b}
function km(a){a=jm(a);a.info||(a.info={});return a.info}
function fm(a){a=jm(a);a.tick||(a.tick={});return a.tick}
function lm(a){var b=jm(a).nonce;b||(b=vl(),jm(a).nonce=b);return b}
function mm(a){var b=fm(a||""),c=em(a);c&&!cm&&(ai(Zl,new Xl(Math.round(c-b._start),a)),cm=!0)}
;function nm(){if(U.getEntriesByType){var a=U.getEntriesByType("paint");if(a=$a(a,function(b){return"first-paint"===b.name}))return hm(a.startTime)}a=U.timing;
return a.hb?Math.max(0,a.hb):0}
;function om(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function pm(a){a=a||"";var b=A("ytcsi.reference");b||(om(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=om(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var qm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",qm,void 0);function rm(){this.h=0}
function sm(){rm.h||(rm.h=new rm);return rm.h}
rm.prototype.tick=function(a,b,c){tm(this,"tick_"+a+"_"+b)||Ik("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
rm.prototype.info=function(a,b){var c=Object.keys(a).join("");tm(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ik("latencyActionInfo",a))};
rm.prototype.span=function(a,b){var c=Object.keys(a).join("");tm(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Ik("latencyActionSpan",a))};
function tm(a,b){qm[b]=qm[b]||{count:0};var c=qm[b];c.count++;c.time=P();a.h||(a.h=Yf(function(){var d=P(),e;for(e in qm)qm[e]&&6E4<d-qm[e].time&&delete qm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new pi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||al(c)),!0):!1}
;var V={},um=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V.app_startup="LATENCY_ACTION_APP_STARTUP",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V.browse="LATENCY_ACTION_BROWSE",V.channels="LATENCY_ACTION_CHANNELS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V.chips="LATENCY_ACTION_CHIPS",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",V.embed="LATENCY_ACTION_EMBED",V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
V.home="LATENCY_ACTION_HOME",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",V.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",
V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",V.reel_watch="LATENCY_ACTION_REEL_WATCH",V.results="LATENCY_ACTION_RESULTS",V.search_ui="LATENCY_ACTION_SEARCH_UI",V.search_suggest="LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
V.seek="LATENCY_ACTION_PLAYER_SEEK",V.settings="LATENCY_ACTION_SETTINGS",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",V["watch,watch7_html5"]="LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V["video.analytics"]=
"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",V["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch=
"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V),W={},vm=(W.ad_allowed="adTypesAllowed",W.yt_abt="adBreakType",W.ad_cpn="adClientPlaybackNonce",W.ad_docid="adVideoId",W.yt_ad_an="adNetworks",W.ad_at="adType",W.aida="appInstallDataAgeMs",W.browse_id="browseId",W.p="httpProtocol",W.t="transportProtocol",W.cpn="clientPlaybackNonce",W.ccs="creatorInfo.creatorCanaryState",W.csn="clientScreenNonce",W.docid="videoId",W.GetHome_rid="requestIds",
W.GetSearch_rid="requestIds",W.GetPlayer_rid="requestIds",W.GetWatchNext_rid="requestIds",W.GetBrowse_rid="requestIds",W.GetLibrary_rid="requestIds",W.is_continuation="isContinuation",W.is_nav="isNavigation",W.b_p="kabukiInfo.browseParams",W.is_prefetch="kabukiInfo.isPrefetch",W.is_secondary_nav="kabukiInfo.isSecondaryNav",W.prev_browse_id="kabukiInfo.prevBrowseId",W.query_source="kabukiInfo.querySource",W.voz_type="kabukiInfo.vozType",W.yt_lt="loadType",W.mver="creatorInfo.measurementVersion",W.yt_ad=
"isMonetized",W.nr="webInfo.navigationReason",W.nrsu="navigationRequestedSameUrl",W.ncnp="webInfo.nonPreloadedNodeCount",W.pnt="performanceNavigationTiming",W.prt="playbackRequiresTap",W.plt="playerInfo.playbackType",W.pis="playerInfo.playerInitializedState",W.paused="playerInfo.isPausedOnLoad",W.yt_pt="playerType",W.fmt="playerInfo.itag",W.yt_pl="watchInfo.isPlaylist",W.yt_pre="playerInfo.preloadType",W.yt_ad_pr="prerollAllowed",W.pa="previousAction",W.yt_red="isRedSubscriber",W.rce="mwebInfo.responseContentEncoding",
W.scrh="screenHeight",W.scrw="screenWidth",W.st="serverTimeMs",W.ssdm="shellStartupDurationMs",W.br_trs="tvInfo.bedrockTriggerState",W.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",W.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",W.label="tvInfo.label",W.is_mdx="tvInfo.isMdx",W.preloaded="tvInfo.isPreloaded",W.upg_player_vis="playerInfo.visibilityState",W.query="unpluggedInfo.query",W.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",W.yt_vst="videoStreamType",W.vph="viewportHeight",
W.vpw="viewportWidth",W.yt_vis="isVisible",W.rcl="mwebInfo.responseContentLength",W.GetSettings_rid="requestIds",W.GetTrending_rid="requestIds",W.GetMusicSearchSuggestions_rid="requestIds",W.REQUEST_ID="requestIds",W),wm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
xm={},ym=(xm.ccs="CANARY_STATE_",xm.mver="MEASUREMENT_VERSION_",xm.pis="PLAYER_INITIALIZED_STATE_",xm.yt_pt="LATENCY_PLAYER_",xm.pa="LATENCY_ACTION_",xm.yt_vst="VIDEO_STREAM_TYPE_",xm),zm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Am(a){return!!E("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||O("enable_csi_on_gel")||!!jm(a).useGel}
function Bm(a,b,c){var d=Cm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();return Am(c)?(pm(c||"").tick[a]=b||P(),d=lm(c),"_start"===a?(a=sm(),tm(a,"baseline_"+d)||Ik("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):sm().tick(a,d,b),mm(c),!0):!1}
function Dm(a,b,c){c=Cm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in vm){c=vm[a];0<=Wa(wm,c)&&(b=!!b);a in ym&&"string"===typeof b&&(b=ym[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Sl({},d)}0<=Wa(zm,a)||al(new pi("Unknown label logged with GEL CSI",a))}
function Cm(a){a=jm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Em(a){a=Cm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Fm(a,b,c){null!==b&&(km(c)[a]=b,Am(c)?(a=Dm(a,b,c))&&Am(c)&&(b=pm(c||""),Sl(b.info,a),Sl(Em(c),a),c=lm(c),sm().info(a,c)):pm(c||"").info[a]=b)}
function Z(a,b,c){var d=fm(c);if(!b&&"_"!==a[0]){var e=a;U.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),U.mark(e))}e=b||P();d[a]=e;Bm(a,b,c)||(Gm(c),pm(c||"").tick[a]=b||P());return d[a]}
function Hm(a,b){if(Am(void 0)){var c=Cm(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};pm("").span[String(a.spanName)]=a;b=Cm(void 0);b.gelSpans||(b.gelSpans={});Sl(b.gelSpans,a);b=lm(void 0);sm().span(a,b)}}
function Im(){var a=lm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===lm(void 0)&&Z("ol",void 0,void 0)},0)})}
function Gm(a){if(!A("yt.timing."+(a||"")+"pingSent_")){var b=E((a||"")+"TIMING_ACTION",void 0),c=fm(a);if(b=!!A("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in fm(void 0);if(b&&em(a))if(mm(a),a)Jm(a);else{b=!0;var d=E("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Jm(a)}}}
function Km(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Kf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Jm(a){if(!Am(a)){var b=fm(a),c=km(a),d=b._start,e=E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:E((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=em(a);var h=fm(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&km(a).yt_pvis&&"youtube"===e&&(Fm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=P();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var t in f)f.hasOwnProperty(t)&&(c+="&"+t+"="+f[t]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))?Tg(f):Qg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);ai($l,new Yl(n.aft+(Number(g)||0),a))}}
function Lm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Wb()&&a.setAttribute("nonce",Wb());return c?(a=U.getEntriesByName(c))&&a[0]&&(a=a[0],c=im(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=km(void 0),c=Em(void 0),"rc"in b||"rc"in c||Fm("rc",""),0===a.transferSize))?!0:!1:!1}
function Mm(){var a=window.location.protocol,b=U.getEntriesByType("resource");b=Xa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Za(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",hm(b.startTime)),Z("wffe",hm(b.responseEnd)))}
var Nm=window;Nm.ytcsi&&(Nm.ytcsi.info=Fm,Nm.ytcsi.tick=Z);function Om(){this.l=[];this.u=[];this.h=[];this.i=new Set;this.m=new Map}
function Pm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Gl(c),h=El(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Pl(a.client,g,h,[Al(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Pl(a.client,g,h,[Al(d.playerResponse.trackingParams)]))})}
function Qm(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=Gl(d);c=c||El(d);e&&c&&Pl(a.client,e,c,[b])}}
Om.prototype.clickCommand=function(a,b,c){c=Gl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Al(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={G:Il(c),U:c};"UNDEFINED_CSN"==c?Ql("visualElementGestured",a,b):d?Bh("visualElementGestured",a,d,b):Ik("visualElementGestured",a,b);return!0};
function Rm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Sm(a,b,c);var f=El(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Qm(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Gl(g);var l=k[0]||El(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={G:Il(h),U:h},"UNDEFINED_CSN"==h?Ql("visualElementStateChanged",k,l):g?Bh("visualElementStateChanged",k,g,l):Ik("visualElementStateChanged",
k,l))}}};
Gl(c.layer)||a.j();if(c.Fa)for(var d=u(c.Fa),e=d.next();!e.done;e=d.next())Pm(a,e.value,c.layer);else bl(Error("Delayed screen needs a data promise."))}
function Sm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ib?c.ib:c.layer;var e=Gl(d);d=El(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=E("EVENT_ID");O("screen_manager_log_servlet_ei")&&"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Ea,n=c.G,p=Nl(),t={csn:p,pageVe:(new zl({veType:b,youtubeData:g})).getAsJson()};h&&
h.visualElement?t.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&al(new pi("newScreen() parent element does not have a VE - rootVe",b));l&&(t.cloneCsn=l);l={G:n,U:p};k?Bh("screenCreated",t,k,l):Ik("screenCreated",t,l);ai(di,new Kl(p));var q=p}catch(D){cl(D,{fl:b,rootVe:d,parentVisualElement:void 0,Xk:e,dl:f,Ea:c.Ea});bl(D);return}Jl(q,b,c.layer,c.G);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(yl));
for(f=b.next();!f.done;f=b.next())if(Gl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={G:Il(e),U:e,Ta:f},"UNDEFINED_CSN"==e?Ql("visualElementHidden",d,f):b?Bh("visualElementHidden",d,b,f):Ik("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Fm("csn",q);Rl.getInstance().clear();d=El(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&
(e=q,q=O("use_default_events_client")?void 0:Hk,b={csn:e,ve:d.getAsJson(),eventType:1},f={G:Il(e),U:e},"UNDEFINED_CSN"==e?Ql("visualElementShown",b,f):q?Bh("visualElementShown",b,q,f):Ik("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&Qm(a,b,d,c.layer)}
;function Tm(a){a&&(a.dataset?a.dataset[Um("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Vm(a,b){return a?a.dataset?a.dataset[Um(b)]:a.getAttribute("data-"+b):null}
var Wm={};function Um(a){return Wm[a]||(Wm[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Xm=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ym=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Zm(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Xm,""),c=c.replace(Ym,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else $m(a,b,c)}
function $m(a,b,c){c=void 0===c?null:c;var d=an(a),e=document.getElementById(d),f=e&&Vm(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Yg(d,b),b=""+Ja(b),bn[b]=f),g||(e=cn(a,d,function(){Vm(e,"loaded")||(Tm(e),ah(d),Uf(Pa(bh,d),0))},c)))}
function cn(a,b,c,d){d=void 0===d?null:d;var e=Pc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Hc(e,Xc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function dn(a){a=an(a);var b=document.getElementById(a);b&&(bh(a),b.parentNode.removeChild(b))}
function en(a,b){a&&b&&(a=""+Ja(b),(a=bn[a])&&$g(a))}
function an(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var bn={};var fn=[],gn=!1;function hn(){if((!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||ll())&&"1"!=ib()){var a=function(){gn=!0;"google_ad_status"in window?M("DCLKSTAT",1):M("DCLKSTAT",2)};
try{Zm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}fn.push($f(function(){if(!(gn||"google_ad_status"in window)){try{en("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}gn=!0;M("DCLKSTAT",3)}},5E3))}}
function jn(){var a=Number(E("DCLKSTAT",0));return isNaN(a)?0:a}
;function kn(){this.i=!1;this.h=null}
kn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=pb();g=k?k.createScript(g):g;g=(new rb(g)).toString()}a.interpreterSafeUrl&&(h=vb(a.interpreterSafeUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());ln(this,g,h,a.program,b,c,d)}else al(Error("Cannot initialize botguard without program"))};
function ln(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,Zm(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?mn(a,d,!!g,h,e):(dn(c),al(new pi("Unable to load Botguard","from "+c)))},f)):b&&(f=Pc(document,"SCRIPT"),f.textContent=b,f.nonce=Wb(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?mn(a,d,!!g,b,e):al(Error("Unable to load Botguard from JS")))}
function mn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{nn(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&al(h)}else{try{nn(a,new d(b))}catch(h){h instanceof Error&&al(h)}e&&e(b)}else al(Error("Failed to finish initializing VM"))}
kn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
kn.prototype.dispose=function(){this.h=null};
function nn(a,b){a.h=b}
;var on=new kn;function pn(){return!!on.h}
function qn(a){a=void 0===a?{}:a;return on.invoke(a)}
;var rn=window,sn=/[A-Za-z]+\/[0-9.]+/g;function tn(a,b){if(a.replace(sn,"")!==b.replace(sn,""))return!1;a=a.match(sn);b=b.match(sn);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function un(){var a=rn.uaChPolyfill.state;if(0===a.type)Ik("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&tn(a.syntheticUa,b);Ik("clientHintsPolyfillEvent",{clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c});c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(d){return'"'+d.brand+'"; v="'+d.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&
(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Ik("clientHintsPolyfillDiagnostics",b))}}
var vn=!1;function wn(){var a;1===(null===(a=rn.uaChPolyfill)||void 0===a?void 0:a.state.type)?vn||(rn.uaChPolyfill.onReady=wn,vn=!0):rn.uaChPolyfill&&un()}
;function xn(a,b,c){J.call(this);var d=this;c=c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Wa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(xn,J);xn.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Ef(d)}}};
xn.prototype.D=function(){window.removeEventListener("message",this.B);J.prototype.D.call(this)};function yn(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new xn(!!E("WIDGET_ID_ENFORCE")),b=this.kb.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=E("WIDGET_ID"))this.h.sessionId=a}
m=yn.prototype;m.kb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,zn(this,a)),this.j[a]=!0)):this.Aa(a,b,c)};
m.Aa=function(){};
function zn(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ua=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.sa());this.sendMessage("onReady");C(this.i,this.Ma,this);this.i=[]};
m.sa=function(){return null};
function An(a,b){a.sendMessage("infoDelivery",b)}
m.Ma=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ma({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Bn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Cn(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Dn(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function En(a){yn.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.qb.bind(this));this.addEventListener("onVolumeChange",this.rb.bind(this));this.addEventListener("onApiChange",this.lb.bind(this));this.addEventListener("onPlaybackQualityChange",this.nb.bind(this));this.addEventListener("onPlaybackRateChange",this.ob.bind(this));this.addEventListener("onStateChange",this.pb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.sb.bind(this))}
v(En,yn);m=En.prototype;
m.Aa=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Bn(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Cn(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Cn(e);break;case "loadPlaylist":case "cuePlaylist":e=Dn(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Bn(a)&&An(this,this.sa())}};
m.onReady=function(){var a=this.Ua.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.sa=function(){if(!this.api)return null;var a=this.api.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.pb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());An(this,a)};
m.nb=function(a){An(this,{playbackQuality:a})};
m.ob=function(a){An(this,{playbackRate:a})};
m.lb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.rb=function(){An(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.qb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());An(this,a)};
m.sb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};An(this,a)};
m.dispose=function(){yn.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Fn(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.La,this)}
v(Fn,J);m=Fn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.Z("RECEIVING"))};
m.Z=function(a,b){this.started&&!this.h&&this.connection.Z(a,b)};
m.La=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Gn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Hn(a,c))&&this.Z(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.mb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.mb=function(a,b){this.started&&!this.h&&this.connection.Z(a,this.ra(a,b))};
m.ra=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||df(a.i,"command",this.La,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function In(a,b){Fn.call(this,b);this.api=a;this.start()}
v(In,Fn);In.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
In.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Gn(a,b){switch(a){case "loadVideoById":return a=Cn(b),[a];case "cueVideoById":return a=Cn(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Dn(b),[a];case "cuePlaylist":return a=Dn(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Hn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
In.prototype.ra=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Fn.prototype.ra.call(this,a,b)};
In.prototype.D=function(){Fn.prototype.D.call(this);delete this.api};function Jn(a){a=void 0===a?!1:a;J.call(this);this.i=new L(a);Nd(this,Pa(Ld,this.i))}
B(Jn,J);Jn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Jn.prototype.l=function(a,b){this.h||this.i.W.apply(this.i,arguments)};function Kn(a,b,c){Jn.call(this);this.j=a;this.destination=b;this.id=c}
v(Kn,Jn);Kn.prototype.Z=function(a,b){this.h||this.j.Z(this.destination,this.id,a,b)};
Kn.prototype.D=function(){this.destination=this.j=null;Jn.prototype.D.call(this)};function Ln(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=Rf(window,"message",this.j.bind(this));this.connection=new Kn(this,a,b);Nd(this,Pa(Ld,this.connection))}
v(Ln,J);Ln.prototype.Z=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Fe(a),this.origin))};
Ln.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Ln.prototype.D=function(){Sf(this.i);this.destination=null;J.prototype.D.call(this)};function Mn(){J.call(this);this.i=[]}
v(Mn,J);Mn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Ca)}J.prototype.D.call(this)};function Nn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Nn.prototype.clone=function(){var a=new Nn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=kb(c):a[b]=c}return a};var On=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Pn(a){a=a||"";if(window.spf){var b=a.match(On);spf.style.load(a,b?b[1]:"",void 0)}else Qn(a)}
function Qn(a){var b=Rn(a),c=document.getElementById(b),d=c&&Vm(c,"loaded");d||c&&!d||(c=Sn(a,b,function(){Vm(c,"loaded")||(Tm(c),ah(b),Uf(Pa(bh,b),0))}))}
function Sn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Xc(a);Ub(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Rn(a){var b=Pc(document,"A");Tb(b,new Fb(a,Gb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function Tn(a,b,c,d){J.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.na=!1;this.api={};this.ba=this.m=null;this.J=new L;this.i={};this.L=this.fa=this.elementId=this.oa=this.config=null;this.K=!1;this.l=this.B=null;this.ga={};this.Na=["onReady"];this.lastError=null;this.Ba=NaN;this.C={};this.Oa=new Mn(this);this.P=0;this.j=this.o=a;Nd(this,Pa(Ld,this.J));Un(this);Vn(this);Nd(this,Pa(Ld,this.Oa));c?this.P=Uf(function(){e.loadNewVideoConfig(c)},0):d&&(Wn(this),Xn(this))}
v(Tn,J);m=Tn.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.P&&(Vf(this.P),this.P=0);var b=a||{};b instanceof Nn||(b=new Nn(b));this.config=b;this.setConfig(a);Xn(this);this.isReady()&&Yn(this)}};
function Wn(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.oa=a;this.config=Zn(a);Wn(this);this.fa||(this.fa=$n(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Zc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Zc(Number(a)||a))};
function Yn(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function ao(a){var b=!0,c=bo(a);c&&a.config&&(a=co(a),b=Vm(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Xn(a){if(!a.h&&!a.K){var b=ao(a);if(b&&"html5"===(bo(a)?"html5":null))a.L="html5",a.isReady()||eo(a);else if(fo(a),a.L="html5",b&&a.l&&a.o)a.o.appendChild(a.l),eo(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=go(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Zn(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);eo(a)};
a.K=!0;b?a.B():(Zm(co(a),a.B),(b=ho(a))&&Pn(b),io(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function bo(a){var b=Lc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function eo(a){var b;if(!a.h){var c=bo(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!go(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||jo(a)):a.Ba=Uf(function(){eo(a)},50)}}
function jo(a){Un(a);a.na=!0;var b=bo(a);if(b){a.m=ko(a,b,"addEventListener");a.ba=ko(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ko(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Yn(a);a.fa&&a.fa(a.api);a.J.W("onReady",a.api)}
function ko(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,al(h))}}}
function Un(a){a.na=!1;if(a.ba)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ba(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&Vf(Number(c));a.C={};a.m=null;a.ba=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.oa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.na};
function Vn(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){ah("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){ah("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){ah("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=$n(this,b);d&&(0<=Wa(this.Na,a)||this.i[a]||(b=lo(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&Uf(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=$n(this,b))&&df(this.J,a,b)};
function $n(a,b){var c=b;if("string"===typeof b){if(a.ga[b])return a.ga[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=A(b))try{f.apply(y,e)}catch(g){bl(g)}};
a.ga[b]=c}return c?c:null}
function lo(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;y[c]=function(d){var e=Uf(function(){if(!a.h){a.J.W(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
hb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.L||(bo(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function fo(a){a.cancel();Un(a);a.L=null;a.config&&(a.config.loaded=!1);var b=bo(a);b&&(ao(a)||!io(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&en(co(this),this.B);Vf(this.Ba);this.K=!1};
m.D=function(){fo(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){bl(b)}this.ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.oa=this.config=this.api=null;delete this.o;delete this.j;J.prototype.D.call(this)};
function io(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function co(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ho(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function go(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===mg(d||"","&")[b]}
function Zn(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?kb(e):e}return b}
;var mo={},no="player_uid_"+(1E9*Math.random()>>>0);function oo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Lc(d):d;var e=no+"_"+Ja(d),f=mo[e];if(f&&c)return po(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Tn(d,e,a,b);mo[e]=f;ah("player-added",f.api);Nd(f,function(){delete mo[f.getId()]});
return f.api}
function po(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var qo=null,ro=null,so=null;function to(){var a=qo.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function uo(a,b,c){a="ST-"+Zb(a).toString(36);b=b?dc(b):"";c=c||5;O("drop_st_cookie_before_cb")&&!ll()||Dh(a,b,c)}
;function vo(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=E("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=bc(window.location.href);g&&f.push(g);g=bc(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Tb(f,d),d=f.href),d){g=d.match($b);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Gl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&uo(d,b,k)}else uo(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=ec(a,l)+n;a=a instanceof Fb?a:Lb(a);c.href=Hb(a)}return!0}
;z("yt.setConfig",M,void 0);z("yt.config.set",M,void 0);z("yt.setMsg",Gf,void 0);z("yt.msgs.set",Gf,void 0);z("yt.logging.errors.log",bl,void 0);
z("writeEmbed",function(){var a=E("PLAYER_CONFIG",void 0);if(!a){var b=E("PLAYER_VARS",void 0);b&&(a={args:b})}tl(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=E("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);O("embeds_js_api_set_1p_cookie")&&(c=rg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));M("FORCE_CSI_ON_GEL",!0);
c=["ol"];pm("").info.actionType="embed";c&&M("TIMING_AFT_KEYS",c);M("TIMING_ACTION","embed");c=E("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Fm(d,c[d]);Fm("is_nav",1);(d=Gl())&&Fm("csn",d);(d=E("PREVIOUS_ACTION",void 0))&&!Am()&&Fm("pa",d);d=km();c=E("CLIENT_PROTOCOL");var e=E("CLIENT_TRANSPORT");c&&Fm("p",c);e&&Fm("t",e);Fm("yt_vis",Km());Fm("yt_lt","cold");c=gm();if(e=im())Z("srt",c.responseStart),1!==d.prerender&&(Fm("yt_sts","n",void 0),Z("_start",e,void 0));d=nm();0<d&&Z("fpt",d);if(!O("log_deltas_killswitch")){var f,
g,h,k;U&&U.timing&&(U.timeOrigin&&U.timing.navigationStart&&Hm("startTimeDelta",Math.floor(U.timeOrigin)-U.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=U.getEntriesByType)||void 0===f?void 0:f.call(U,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&U.timing.responseEnd&&Hm("responseEndDelta",hm(d.responseEnd)-U.timing.responseEnd))}f=gm();f.isPerformanceNavigationTiming&&Fm("pnt",1,void 0);Z("nreqs",f.requestStart,
void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=im()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",
f.connectEnd,void 0));U&&U.getEntriesByType&&Mm();f=[];if(document.querySelector&&U&&U.getEntriesByName)for(var l in dm)dm.hasOwnProperty(l)&&(g=dm[l],Lm(l,g)&&f.push(g));f.length&&Fm("rc",f.join(","));if(Am(void 0)){l={actionType:um[E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:um[E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=Gl())l.clientScreenNonce=f;f=lm(void 0);sm().info(l,f)}l=km();g=fm();if("cold"===l.yt_lt&&(f=Cm(),h=f.gelTicks?f.gelTicks:f.gelTicks={},
f=f.gelInfos?f.gelInfos:f.gelInfos={},Am())){for(var n in g)"tick_"+n in h||Bm(n,g[n]);n=Em();g=lm();h={};for(var p in l)"info_"+p in f||!(k=Dm(p,l[p]))||(Sl(n,k),Sl(h,k));sm().info(h,g)}z("ytglobal.timingready_",!0,void 0);Gm();(p=E("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in p?(p=p.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,p.serializedForcedExperimentIds||(n=rg(),n.forced_experiments&&(p.serializedForcedExperimentIds=n.forced_experiments)),qo=oo(a,
p,!1)):qo=oo(a);qo.addEventListener("onVideoDataChange",to);a=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?so=new En(qo):E("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(ro=new Ln(window.parent,a,b),so=new In(qo,ro.connection));hn();O("networkless_logging_web_embedded")&&sk();O("embeds_enable_ua_ch_polyfill")&&wn()},void 0);
var wo=Cf(function(){Im();var a=Fh.getInstance(),b=!!((Ih("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Qd(document.body,"exp-invert-logo"))if(c&&!Qd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Qd(d,"inverted-hdpi")){var e=Od(d);Pd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Qd(document.body,"inverted-hdpi")&&Rd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Ih(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete Eh[b]:(c=d.toString(16),Eh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Eh)d.push(f+"="+encodeURIComponent(String(Eh[f])));Dh(b,d.join("&"),63072E3,a.i,c)}Om.h||(Om.h=new Om);a=Om.h;f=16623;var g=void 0===g?{}:g;Object.values(dl).includes(f)||(al(new pi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.u=[];g.Fa?Rm(a,f,g):Sm(a,f,g)}),xo=Cf(function(){qo&&
qo.sendAbandonmentPing&&qo.sendAbandonmentPing();
E("PL_ATT")&&on.dispose();for(var a=0,b=fn.length;a<b;a++)bg(fn[a]);fn.length=0;dn("//static.doubleclick.net/instream/ad_status.js");gn=!1;M("DCLKSTAT",0);Md(so,ro);qo&&(qo.removeEventListener("onVideoDataChange",to),qo.destroy())});
window.addEventListener?(window.addEventListener("load",wo),window.addEventListener("unload",xo)):window.attachEvent&&(window.attachEvent("onload",wo),window.attachEvent("onunload",xo));Qa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||pn);Qa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||qn);Qa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||jn);
Qa("yt.player.exports.navigate",A("yt.player.exports.navigate")||vo);Qa("yt.util.activity.init",A("yt.util.activity.init")||dg);Qa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||gg);Qa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||eg);}).call(this);
