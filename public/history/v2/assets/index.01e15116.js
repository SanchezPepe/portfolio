const Vo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Vo();function Or(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const qo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xo=Or(qo);function hi(e){return!!e||e===""}function Er(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Zo(r):Er(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(G(e))return e}}const Jo=/;(?![^(]*\))/g,Go=/:(.+)/;function Zo(e){const t={};return e.split(Jo).forEach(n=>{if(n){const r=n.split(Go);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cr(e){let t="";if(ee(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Cr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pa=e=>ee(e)?e:e==null?"":F(e)||G(e)&&(e.toString===yi||!z(e.toString))?JSON.stringify(e,gi,2):String(e),gi=(e,t)=>t&&t.__v_isRef?gi(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:vi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!xi(t)?String(t):t,Y={},gt=[],xe=()=>{},Qo=()=>!1,es=/^on[^a-z]/,kn=e=>es.test(e),Pr=e=>e.startsWith("onUpdate:"),re=Object.assign,Ir=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ts=Object.prototype.hasOwnProperty,$=(e,t)=>ts.call(e,t),F=Array.isArray,vt=e=>An(e)==="[object Map]",vi=e=>An(e)==="[object Set]",z=e=>typeof e=="function",ee=e=>typeof e=="string",Tr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",bi=e=>G(e)&&z(e.then)&&z(e.catch),yi=Object.prototype.toString,An=e=>yi.call(e),ns=e=>An(e).slice(8,-1),xi=e=>An(e)==="[object Object]",Sr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rs=/-(\w)/g,Ie=On(e=>e.replace(rs,(t,n)=>n?n.toUpperCase():"")),as=/\B([A-Z])/g,kt=On(e=>e.replace(as,"-$1").toLowerCase()),En=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bn=On(e=>e?`on${En(e)}`:""),Ut=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},is=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ha;const os=()=>ha||(ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Oe;class ss{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ls(e,t=Oe){t&&t.active&&t.effects.push(e)}const Nr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},wi=e=>(e.w&Ve)>0,_i=e=>(e.n&Ve)>0,fs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},cs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];wi(a)&&!_i(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},Gn=new WeakMap;let Nt=0,Ve=1;const Zn=30;let ge;const tt=Symbol(""),Qn=Symbol("");class Mr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ls(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=Ye;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,Ye=!0,Ve=1<<++Nt,Nt<=Zn?fs(this):ga(this),this.fn()}finally{Nt<=Zn&&cs(this),Ve=1<<--Nt,ge=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(ga(this),this.onStop&&this.onStop(),this.active=!1)}}function ga(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ye=!0;const ki=[];function At(){ki.push(Ye),Ye=!1}function Ot(){const e=ki.pop();Ye=e===void 0?!0:e}function de(e,t,n){if(Ye&&ge){let r=Gn.get(e);r||Gn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Nr()),Ai(a)}}function Ai(e,t){let n=!1;Nt<=Zn?_i(e)||(e.n|=Ve,n=!wi(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Fe(e,t,n,r,a,i){const o=Gn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Sr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),vt(e)&&s.push(o.get(Qn)));break;case"delete":F(e)||(s.push(o.get(tt)),vt(e)&&s.push(o.get(Qn)));break;case"set":vt(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&er(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);er(Nr(l))}}function er(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&va(r);for(const r of n)r.computed||va(r)}function va(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const us=Or("__proto__,__v_isRef,__isVue"),Oi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tr)),ds=Fr(),ms=Fr(!1,!0),ps=Fr(!0),ba=hs();function hs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){At();const r=U(this)[t].apply(this,n);return Ot(),r}}),e}function Fr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ss:Ti:t?Ii:Pi).get(r))return r;const o=F(r);if(!e&&o&&$(ba,a))return Reflect.get(ba,a,i);const s=Reflect.get(r,a,i);return(Tr(a)?Oi.has(a):us(a))||(e||de(r,"get",a),t)?s:Q(s)?o&&Sr(a)?s:s.value:G(s)?e?Si(s):jr(s):s}}const gs=Ei(),vs=Ei(!0);function Ei(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&Q(o)&&!Q(a))return!1;if(!e&&!Bt(a)&&(tr(a)||(a=U(a),o=U(o)),!F(n)&&Q(o)&&!Q(a)))return o.value=a,!0;const s=F(n)&&Sr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Ut(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function bs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function ys(e,t){const n=Reflect.has(e,t);return(!Tr(t)||!Oi.has(t))&&de(e,"has",t),n}function xs(e){return de(e,"iterate",F(e)?"length":tt),Reflect.ownKeys(e)}const Ci={get:ds,set:gs,deleteProperty:bs,has:ys,ownKeys:xs},ws={get:ps,set(e,t){return!0},deleteProperty(e,t){return!0}},_s=re({},Ci,{get:ms,set:vs}),Rr=e=>e,Cn=e=>Reflect.getPrototypeOf(e);function Gt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Cn(a),s=r?Rr:n?$r:Ht;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Zt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Qt(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",tt),Reflect.get(e,"size",e)}function ya(e){e=U(e);const t=U(this);return Cn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function xa(e,t){t=U(t);const n=U(this),{has:r,get:a}=Cn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Ut(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function wa(e){const t=U(this),{has:n,get:r}=Cn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function _a(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function en(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Rr:e?$r:Ht;return!e&&de(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function tn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=vt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Rr:t?$r:Ht;return!t&&de(i,"iterate",l?Qn:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function ks(){const e={get(i){return Gt(this,i)},get size(){return Qt(this)},has:Zt,add:ya,set:xa,delete:wa,clear:_a,forEach:en(!1,!1)},t={get(i){return Gt(this,i,!1,!0)},get size(){return Qt(this)},has:Zt,add:ya,set:xa,delete:wa,clear:_a,forEach:en(!1,!0)},n={get(i){return Gt(this,i,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:en(!0,!1)},r={get(i){return Gt(this,i,!0,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tn(i,!1,!1),n[i]=tn(i,!0,!1),t[i]=tn(i,!1,!0),r[i]=tn(i,!0,!0)}),[e,n,t,r]}const[As,Os,Es,Cs]=ks();function zr(e,t){const n=t?e?Cs:Es:e?Os:As;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ps={get:zr(!1,!1)},Is={get:zr(!1,!0)},Ts={get:zr(!0,!1)},Pi=new WeakMap,Ii=new WeakMap,Ti=new WeakMap,Ss=new WeakMap;function Ns(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ms(e){return e.__v_skip||!Object.isExtensible(e)?0:Ns(ns(e))}function jr(e){return Bt(e)?e:Lr(e,!1,Ci,Ps,Pi)}function Fs(e){return Lr(e,!1,_s,Is,Ii)}function Si(e){return Lr(e,!0,ws,Ts,Ti)}function Lr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ms(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function bt(e){return Bt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function tr(e){return!!(e&&e.__v_isShallow)}function Ni(e){return bt(e)||Bt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Mi(e){return dn(e,"__v_skip",!0),e}const Ht=e=>G(e)?jr(e):e,$r=e=>G(e)?Si(e):e;function Fi(e){Ye&&ge&&(e=U(e),Ai(e.dep||(e.dep=Nr())))}function Ri(e,t){e=U(e),e.dep&&er(e.dep)}function Q(e){return!!(e&&e.__v_isRef===!0)}function Rs(e){return zs(e,!1)}function zs(e,t){return Q(e)?e:new js(e,t)}class js{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Ht(t)}get value(){return Fi(this),this._value}set value(t){t=this.__v_isShallow?t:U(t),Ut(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ht(t),Ri(this))}}function Ls(e){return Q(e)?e.value:e}const $s={get:(e,t,n)=>Ls(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Q(a)&&!Q(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zi(e){return bt(e)?e:new Proxy(e,$s)}function Ds(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=Bs(e,n);return t}class Us{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Bs(e,t,n){const r=e[t];return Q(r)?r:new Us(e,t,n)}class Hs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Mr(t,()=>{this._dirty||(this._dirty=!0,Ri(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Fi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ws(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=xe):(r=e.get,a=e.set),new Hs(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Pn(i,t,n)}return a}function we(e,t,n,r){if(z(e)){const i=Ke(e,t,n,r);return i&&bi(i)&&i.catch(o=>{Pn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function Pn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ke(l,null,10,[e,o,s]);return}}Ys(e,n,a,r)}function Ys(e,t,n,r=!0){console.error(e)}let mn=!1,nr=!1;const ce=[];let Me=0;const Rt=[];let Mt=null,ut=0;const zt=[];let He=null,dt=0;const ji=Promise.resolve();let Dr=null,rr=null;function Ks(e){const t=Dr||ji;return e?t.then(this?e.bind(this):e):t}function Vs(e){let t=Me+1,n=ce.length;for(;t<n;){const r=t+n>>>1;Wt(ce[r])<e?t=r+1:n=r}return t}function Li(e){(!ce.length||!ce.includes(e,mn&&e.allowRecurse?Me+1:Me))&&e!==rr&&(e.id==null?ce.push(e):ce.splice(Vs(e.id),0,e),$i())}function $i(){!mn&&!nr&&(nr=!0,Dr=ji.then(Bi))}function qs(e){const t=ce.indexOf(e);t>Me&&ce.splice(t,1)}function Di(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),$i()}function Xs(e){Di(e,Mt,Rt,ut)}function Js(e){Di(e,He,zt,dt)}function In(e,t=null){if(Rt.length){for(rr=t,Mt=[...new Set(Rt)],Rt.length=0,ut=0;ut<Mt.length;ut++)Mt[ut]();Mt=null,ut=0,rr=null,In(e,t)}}function Ui(e){if(In(),zt.length){const t=[...new Set(zt)];if(zt.length=0,He){He.push(...t);return}for(He=t,He.sort((n,r)=>Wt(n)-Wt(r)),dt=0;dt<He.length;dt++)He[dt]();He=null,dt=0}}const Wt=e=>e.id==null?1/0:e.id;function Bi(e){nr=!1,mn=!0,In(e),ce.sort((n,r)=>Wt(n)-Wt(r));const t=xe;try{for(Me=0;Me<ce.length;Me++){const n=ce[Me];n&&n.active!==!1&&Ke(n,null,14)}}finally{Me=0,ce.length=0,Ui(),mn=!1,Dr=null,(ce.length||Rt.length||zt.length)&&Bi(e)}}function Gs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||Y;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(is))}let s,l=r[s=Bn(t)]||r[s=Bn(Ie(t))];!l&&i&&(l=r[s=Bn(kt(t))]),l&&we(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(u,e,6,a)}}function Hi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=u=>{const d=Hi(u,t,!0);d&&(s=!0,re(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):re(o,i),r.set(e,o),o)}function Tn(e,t){return!e||!kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,kt(t))||$(e,t))}let Ce=null,Wi=null;function pn(e){const t=Ce;return Ce=e,Wi=e&&e.type.__scopeId||null,t}function Zs(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Na(-1);const i=pn(t),o=e(...a);return pn(i),r._d&&Na(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Wn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:R,inheritAttrs:j}=e;let S,y;const E=pn(e);try{if(n.shapeFlag&4){const L=a||r;S=Ee(d.call(L,L,m,i,O,b,R)),y=l}else{const L=t;S=Ee(L.length>1?L(i,{attrs:l,slots:s,emit:u}):L(i,null)),y=t.props?l:Qs(l)}}catch(L){jt.length=0,Pn(L,e,1),S=q(at)}let N=S;if(y&&j!==!1){const L=Object.keys(y),{shapeFlag:W}=N;L.length&&W&7&&(o&&L.some(Pr)&&(y=el(y,o)),N=wt(N,y))}return n.dirs&&(N=wt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,pn(E),S}const Qs=e=>{let t;for(const n in e)(n==="class"||n==="style"||kn(n))&&((t||(t={}))[n]=e[n]);return t},el=(e,t)=>{const n={};for(const r in e)(!Pr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ka(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Tn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ka(r,o,u):!0:!!o;return!1}function ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Tn(n,i))return!0}return!1}function nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rl=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Js(e)}function il(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Yn(e,t,n=!1){const r=Z||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const Aa={};function an(e,t,n){return Yi(e,t,n)}function Yi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=Z;let l,u=!1,d=!1;if(Q(e)?(l=()=>e.value,u=tr(e)):bt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>bt(y)||tr(y)),l=()=>e.map(y=>{if(Q(y))return y.value;if(bt(y))return mt(y);if(z(y))return Ke(y,s,2)})):z(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[b])}:l=xe,t&&r){const y=l;l=()=>mt(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if(Kt)return b=xe,t?n&&we(t,s,3,[l(),d?[]:void 0,b]):l(),xe;let O=d?[]:Aa;const R=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((E,N)=>Ut(E,O[N])):Ut(y,O)))&&(m&&m(),we(t,s,3,[y,O===Aa?void 0:O,b]),O=y)}else S.run()};R.allowRecurse=!!t;let j;a==="sync"?j=R:a==="post"?j=()=>se(R,s&&s.suspense):j=()=>Xs(R);const S=new Mr(l,j);return t?n?R():O=S.run():a==="post"?se(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Ir(s.scope.effects,S)}}function ol(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Ki(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=Z;_t(this);const s=Yi(a,i.bind(r),n);return o?_t(o):rt(),s}function Ki(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Q(e))mt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(vi(e)||vt(e))e.forEach(n=>{mt(n,t)});else if(xi(e))for(const n in e)mt(e[n],t);return e}function Ur(e){return z(e)?{setup:e,name:e.name}:e}const on=e=>!!e.type.__asyncLoader,Vi=e=>e.type.__isKeepAlive;function sl(e,t){qi(e,"a",t)}function ll(e,t){qi(e,"da",t)}function qi(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Sn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Vi(a.parent.vnode)&&fl(r,t,n,a),a=a.parent}}function fl(e,t,n,r){const a=Sn(t,e,r,!0);Xi(()=>{Ir(r[t],a)},n)}function Sn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;At(),_t(n);const s=we(t,n,e,o);return rt(),Ot(),s});return r?a.unshift(i):a.push(i),i}}const Le=e=>(t,n=Z)=>(!Kt||e==="sp")&&Sn(e,t,n),cl=Le("bm"),ul=Le("m"),dl=Le("bu"),ml=Le("u"),pl=Le("bum"),Xi=Le("um"),hl=Le("sp"),gl=Le("rtg"),vl=Le("rtc");function bl(e,t=Z){Sn("ec",e,t)}function Je(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(At(),we(l,n,8,[e.el,s,e,t]),Ot())}}const Ji="components";function Br(e,t){return xl(Ji,e,!0,t)||e}const yl=Symbol();function xl(e,t,n=!0,r=!1){const a=Ce||Z;if(a){const i=a.type;if(e===Ji){const s=Gl(i,!1);if(s&&(s===t||s===Ie(t)||s===En(Ie(t))))return i}const o=Oa(a[e]||i[e],t)||Oa(a.appContext[e],t);return!o&&r?i:o}}function Oa(e,t){return e&&(e[t]||e[Ie(t)]||e[En(Ie(t))])}const ar=e=>e?fo(e)?Kr(e)||e.proxy:ar(e.parent):null,hn=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ar(e.parent),$root:e=>ar(e.root),$emit:e=>e.emit,$options:e=>Zi(e),$forceUpdate:e=>e.f||(e.f=()=>Li(e.update)),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>ol.bind(e)}),wl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&$(r,t))return o[t]=1,r[t];if(a!==Y&&$(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&$(u,t))return o[t]=3,i[t];if(n!==Y&&$(n,t))return o[t]=4,n[t];ir&&(o[t]=0)}}const d=hn[t];let m,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&$(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,$(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&$(a,t)?(a[t]=n,!0):r!==Y&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&$(e,o)||t!==Y&&$(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(hn,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ir=!0;function _l(e){const t=Zi(e),n=e.proxy,r=e.ctx;ir=!1,t.beforeCreate&&Ea(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:R,activated:j,deactivated:S,beforeDestroy:y,beforeUnmount:E,destroyed:N,unmounted:L,render:W,renderTracked:te,renderTriggered:le,errorCaptured:_e,serverPrefetch:ae,expose:Ct,inheritAttrs:st,components:Pt,directives:Xt,filters:la}=t;if(u&&kl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const K=o[J];z(K)&&(r[J]=K.bind(n))}if(a){const J=a.call(n,n);G(J)&&(e.data=jr(J))}if(ir=!0,i)for(const J in i){const K=i[J],Te=z(K)?K.bind(n,n):z(K.get)?K.get.bind(n,n):xe,$n=!z(K)&&z(K.set)?K.set.bind(n):xe,It=pe({get:Te,set:$n});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>It.value,set:lt=>It.value=lt})}if(s)for(const J in s)Gi(s[J],r,n,J);if(l){const J=z(l)?l.call(n):l;Reflect.ownKeys(J).forEach(K=>{il(K,J[K])})}d&&Ea(d,e,"c");function ie(J,K){F(K)?K.forEach(Te=>J(Te.bind(n))):K&&J(K.bind(n))}if(ie(cl,m),ie(ul,b),ie(dl,O),ie(ml,R),ie(sl,j),ie(ll,S),ie(bl,_e),ie(vl,te),ie(gl,le),ie(pl,E),ie(Xi,L),ie(hl,ae),F(Ct))if(Ct.length){const J=e.exposed||(e.exposed={});Ct.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});W&&e.render===xe&&(e.render=W),st!=null&&(e.inheritAttrs=st),Pt&&(e.components=Pt),Xt&&(e.directives=Xt)}function kl(e,t,n=xe,r=!1){F(e)&&(e=or(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Yn(i.from||a,i.default,!0):o=Yn(i.from||a):o=Yn(i),Q(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ea(e,t,n){we(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gi(e,t,n,r){const a=r.includes(".")?Ki(n,r):()=>n[r];if(ee(e)){const i=t[e];z(i)&&an(a,i)}else if(z(e))an(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>Gi(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&an(a,i,e)}}function Zi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>gn(l,u,o,!0)),gn(l,t,o)),i.set(t,l),l}function gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&gn(e,i,n,!0),a&&a.forEach(o=>gn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Al[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Al={data:Ca,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Ze,directives:Ze,watch:El,provide:Ca,inject:Ol};function Ca(e,t){return t?e?function(){return re(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Ol(e,t){return Ze(or(e),or(t))}function or(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?re(re(Object.create(null),e),t):t}function El(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Cl(e,t,n,r=!1){const a={},i={};dn(i,Nn,1),e.propsDefaults=Object.create(null),Qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Fs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Pl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Tn(e.emitsOptions,b))continue;const O=t[b];if(l)if($(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const R=Ie(b);a[R]=sr(l,s,R,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{Qi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=kt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=sr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function Qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(rn(l))continue;const u=t[l];let d;a&&$(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Tn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=sr(a,l,m,u[m],e,!$(u,m))}}return o}function sr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(_t(a),r=u[n]=l.call(null,t),rt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===kt(n))&&(r=!0))}return r}function eo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const d=m=>{l=!0;const[b,O]=eo(m,t,!0);re(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,gt),gt;if(F(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Pa(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Ie(d);if(Pa(m)){const b=i[d],O=o[m]=F(b)||z(b)?{type:b}:b;if(O){const R=Sa(Boolean,O.type),j=Sa(String,O.type);O[0]=R>-1,O[1]=j<0||R<j,(R>-1||$(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Pa(e){return e[0]!=="$"}function Ia(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ta(e,t){return Ia(e)===Ia(t)}function Sa(e,t){return F(t)?t.findIndex(n=>Ta(n,e)):z(t)&&Ta(t,e)?0:-1}const to=e=>e[0]==="_"||e==="$stable",Hr=e=>F(e)?e.map(Ee):[Ee(e)],Il=(e,t,n)=>{if(t._n)return t;const r=Zs((...a)=>Hr(t(...a)),n);return r._c=!1,r},no=(e,t,n)=>{const r=e._ctx;for(const a in e){if(to(a))continue;const i=e[a];if(z(i))t[a]=Il(a,i,r);else if(i!=null){const o=Hr(i);t[a]=()=>o}}},ro=(e,t)=>{const n=Hr(t);e.slots.default=()=>n},Tl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),dn(t,"_",n)):no(t,e.slots={})}else e.slots={},t&&ro(e,t);dn(e.slots,Nn,1)},Sl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(re(a,t),!n&&s===1&&delete a._):(i=!t.$stable,no(t,a)),o=t}else t&&(ro(e,t),o={default:1});if(i)for(const s in a)!to(s)&&!(s in o)&&delete a[s]};function ao(){return{app:null,config:{isNativeTag:Qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Ml(e,t){return function(r,a=null){z(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=ao(),o=new Set;let s=!1;const l=i.app={_uid:Nl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ql,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...d)):z(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=q(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Kr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function lr(e,t,n,r,a=!1){if(F(e)){e.forEach((b,O)=>lr(b,t&&(F(t)?t[O]:t),n,r,a));return}if(on(r)&&!a)return;const i=r.shapeFlag&4?Kr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,$(m,u)&&(m[u]=null)):Q(u)&&(u.value=null)),z(l))Ke(l,s,12,[o,d]);else{const b=ee(l),O=Q(l);if(b||O){const R=()=>{if(e.f){const j=b?d[l]:l.value;a?F(j)&&Ir(j,i):F(j)?j.includes(i)||j.push(i):b?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,$(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,se(R,n)):R()}}}const se=al;function Fl(e){return Rl(e)}function Rl(e,t){const n=os();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=xe,cloneNode:R,insertStaticContent:j}=e,S=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!St(f,c)&&(g=Jt(f),De(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:C}=c;switch(v){case Wr:y(f,c,p,g);break;case at:E(f,c,p,g);break;case sn:f==null&&N(c,p,g,k);break;case Ne:Xt(f,c,p,g,h,w,k,x,_);break;default:C&1?te(f,c,p,g,h,w,k,x,_):C&6?la(f,c,p,g,h,w,k,x,_):(C&64||C&128)&&v.process(f,c,p,g,h,w,k,x,_,ft)}P!=null&&h&&lr(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},E=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=j(f.children,c,p,g,f.el,f.anchor)},L=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},te=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?le(c,p,g,h,w,k,x,_):Ct(f,c,h,w,k,x,_)},le=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:C,shapeFlag:I,transition:M,patchFlag:D,dirs:B}=f;if(f.el&&R!==void 0&&D===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,w,C&&C.is,C),I&8?d(_,f.children):I&16&&ae(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),B&&Je(f,null,g,"created"),C){for(const V in C)V!=="value"&&!rn(V)&&i(_,V,null,C[V],w,f.children,g,h,Se);"value"in C&&i(_,"value",null,C.value),(v=C.onVnodeBeforeMount)&&Ae(v,g,f)}_e(_,f,f.scopeId,k,g)}B&&Je(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,p),((v=C&&C.onVnodeMounted)||H||B)&&se(()=>{v&&Ae(v,g,f),H&&M.enter(_),B&&Je(f,null,g,"mounted")},h)},_e=(f,c,p,g,h)=>{if(p&&O(f,p),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;_e(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ae=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?We(f[v]):Ee(f[v]);S(null,P,c,p,g,h,w,k,x)}},Ct=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const C=f.props||Y,I=c.props||Y;let M;p&&Ge(p,!1),(M=I.onVnodeBeforeUpdate)&&Ae(M,p,c,f),P&&Je(c,f,p,"beforeUpdate"),p&&Ge(p,!0);const D=h&&c.type!=="foreignObject";if(v?st(f.dynamicChildren,v,x,p,g,D,w):k||Te(f,c,x,null,p,g,D,w,!1),_>0){if(_&16)Pt(x,c,C,I,p,g,h);else if(_&2&&C.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",C.style,I.style,h),_&8){const B=c.dynamicProps;for(let H=0;H<B.length;H++){const V=B[H],he=C[V],ct=I[V];(ct!==he||V==="value")&&i(x,V,he,ct,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Pt(x,c,C,I,p,g,h);((M=I.onVnodeUpdated)||P)&&se(()=>{M&&Ae(M,p,c,f),P&&Je(c,f,p,"updated")},g)},st=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Ne||!St(_,v)||_.shapeFlag&70)?m(_.el):p;S(_,v,P,null,g,h,w,k,!0)}},Pt=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(rn(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==Y)for(const x in p)!rn(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Xt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),ae(c.children,p,P,h,w,k,x,_)):C>0&&C&64&&I&&f.dynamicChildren?(st(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&io(f,c,!0)):Te(f,c,p,P,h,w,k,x,_)},la=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Ln(c,p,g,h,w,k,_):ie(f,c,_)},Ln=(f,c,p,g,h,w,k)=>{const x=f.component=Kl(f,g,h);if(Vi(f)&&(x.ctx.renderer=ft),Vl(x),x.asyncDep){if(h&&h.registerDep(x,J),!f.el){const _=x.subTree=q(at);E(null,_,c,p)}return}J(x,f,c,p,h,w,k)},ie=(f,c,p)=>{const g=c.component=f.component;if(tl(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,qs(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:C,u:I,parent:M,vnode:D}=f,B=P,H;Ge(f,!1),P?(P.el=D.el,K(f,P,k)):P=D,C&&Hn(C),(H=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(H,M,P,D),Ge(f,!0);const V=Wn(f),he=f.subTree;f.subTree=V,S(he,V,m(he.el),Jt(he),f,h,w),P.el=V.el,B===null&&nl(f,V.el),I&&se(I,h),(H=P.props&&P.props.onVnodeUpdated)&&se(()=>Ae(H,M,P,D),h)}else{let P;const{el:C,props:I}=c,{bm:M,m:D,parent:B}=f,H=on(c);if(Ge(f,!1),M&&Hn(M),!H&&(P=I&&I.onVnodeBeforeMount)&&Ae(P,B,c),Ge(f,!0),C&&Un){const V=()=>{f.subTree=Wn(f),Un(C,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Wn(f);S(null,V,p,g,f,h,w),c.el=V.el}if(D&&se(D,h),!H&&(P=I&&I.onVnodeMounted)){const V=c;se(()=>Ae(P,B,V),h)}(c.shapeFlag&256||B&&on(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&se(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Mr(x,()=>Li(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ge(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Pl(f,c.props,g,p),Sl(f,c.children,p),At(),In(void 0,f.update),Ot()},Te=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,C=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){It(v,C,p,g,h,w,k,x,_);return}else if(I&256){$n(v,C,p,g,h,w,k,x,_);return}}M&8?(P&16&&Se(v,h,w),C!==v&&d(p,C)):P&16?M&16?It(v,C,p,g,h,w,k,x,_):Se(v,h,w,!0):(P&8&&d(p,""),M&16&&ae(C,p,g,h,w,k,x,_))},$n=(f,c,p,g,h,w,k,x,_)=>{f=f||gt,c=c||gt;const v=f.length,P=c.length,C=Math.min(v,P);let I;for(I=0;I<C;I++){const M=c[I]=_?We(c[I]):Ee(c[I]);S(f[I],M,p,null,h,w,k,x,_)}v>P?Se(f,h,w,!0,!1,C):ae(c,p,g,h,w,k,x,_,C)},It=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let C=f.length-1,I=P-1;for(;v<=C&&v<=I;){const M=f[v],D=c[v]=_?We(c[v]):Ee(c[v]);if(St(M,D))S(M,D,p,null,h,w,k,x,_);else break;v++}for(;v<=C&&v<=I;){const M=f[C],D=c[I]=_?We(c[I]):Ee(c[I]);if(St(M,D))S(M,D,p,null,h,w,k,x,_);else break;C--,I--}if(v>C){if(v<=I){const M=I+1,D=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=_?We(c[v]):Ee(c[v]),p,D,h,w,k,x,_),v++}}else if(v>I)for(;v<=C;)De(f[v],h,w,!0),v++;else{const M=v,D=v,B=new Map;for(v=D;v<=I;v++){const fe=c[v]=_?We(c[v]):Ee(c[v]);fe.key!=null&&B.set(fe.key,v)}let H,V=0;const he=I-D+1;let ct=!1,ua=0;const Tt=new Array(he);for(v=0;v<he;v++)Tt[v]=0;for(v=M;v<=C;v++){const fe=f[v];if(V>=he){De(fe,h,w,!0);continue}let ke;if(fe.key!=null)ke=B.get(fe.key);else for(H=D;H<=I;H++)if(Tt[H-D]===0&&St(fe,c[H])){ke=H;break}ke===void 0?De(fe,h,w,!0):(Tt[ke-D]=v+1,ke>=ua?ua=ke:ct=!0,S(fe,c[ke],p,null,h,w,k,x,_),V++)}const da=ct?zl(Tt):gt;for(H=da.length-1,v=he-1;v>=0;v--){const fe=D+v,ke=c[fe],ma=fe+1<P?c[fe+1].el:g;Tt[v]===0?S(null,ke,p,ma,h,w,k,x,_):ct&&(H<0||v!==da[H]?lt(ke,p,ma,2):H--)}}},lt=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){lt(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ft);return}if(k===Ne){r(w,c,p);for(let C=0;C<_.length;C++)lt(_[C],c,p,g);r(f.anchor,c,p);return}if(k===sn){L(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),se(()=>x.enter(w),h);else{const{leave:C,delayLeave:I,afterLeave:M}=x,D=()=>r(w,c,p),B=()=>{C(w,()=>{D(),M&&M()})};I?I(w,D,B):B()}else r(w,c,p)},De=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:C,dirs:I}=f;if(x!=null&&lr(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,D=!on(f);let B;if(D&&(B=k&&k.onVnodeBeforeUnmount)&&Ae(B,c,f),P&6)Ko(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Je(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,ft,g):v&&(w!==Ne||C>0&&C&64)?Se(v,c,p,!1,!0):(w===Ne&&C&384||!h&&P&16)&&Se(_,c,p),g&&fa(f)}(D&&(B=k&&k.onVnodeUnmounted)||M)&&se(()=>{B&&Ae(B,c,f),M&&Je(f,null,c,"unmounted")},p)},fa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Ne){Yo(p,g);return}if(c===sn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},Yo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Ko=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&Hn(g),h.stop(),w&&(w.active=!1,De(k,f,c,p)),x&&se(x,c),se(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)De(f[k],c,p,g,h)},Jt=f=>f.shapeFlag&6?Jt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ca=(f,c,p)=>{f==null?c._vnode&&De(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Ui(),c._vnode=f},ft={p:S,um:De,m:lt,r:fa,mt:Ln,mc:ae,pc:Te,pbc:st,n:Jt,o:e};let Dn,Un;return t&&([Dn,Un]=t(ft)),{render:ca,hydrate:Dn,createApp:Ml(ca,Dn)}}function Ge({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function io(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||io(o,s))}}function zl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const jl=e=>e.__isTeleport,Ne=Symbol(void 0),Wr=Symbol(void 0),at=Symbol(void 0),sn=Symbol(void 0),jt=[];let be=null;function nt(e=!1){jt.push(be=e?null:[])}function Ll(){jt.pop(),be=jt[jt.length-1]||null}let Yt=1;function Na(e){Yt+=e}function oo(e){return e.dynamicChildren=Yt>0?be||gt:null,Ll(),Yt>0&&be&&be.push(e),e}function yt(e,t,n,r,a,i){return oo(ue(e,t,n,r,a,i,!0))}function $l(e,t,n,r,a){return oo(q(e,t,n,r,a,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const Nn="__vInternal",so=({key:e})=>e!=null?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||Q(e)||z(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function ue(e,t=null,n=null,r=0,a=null,i=e===Ne?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&so(t),ref:t&&ln(t),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Yr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Yt>0&&!o&&be&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&be.push(l),l}const q=Dl;function Dl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===yl)&&(e=at),fr(e)){const s=wt(e,t,!0);return n&&Yr(s,n),Yt>0&&!i&&be&&(s.shapeFlag&6?be[be.indexOf(e)]=s:be.push(s)),s.patchFlag|=-2,s}if(Zl(e)&&(e=e.__vccOpts),t){t=Ul(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Cr(s)),G(l)&&(Ni(l)&&!F(l)&&(l=re({},l)),t.style=Er(l))}const o=ee(e)?1:rl(e)?128:jl(e)?64:G(e)?4:z(e)?2:0;return ue(e,t,n,r,a,o,i,!0)}function Ul(e){return e?Ni(e)||Nn in e?re({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Hl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&so(s),ref:t&&t.ref?n&&a?F(a)?a.concat(ln(t)):[a,ln(t)]:ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function lo(e=" ",t=0){return q(Wr,null,e,t)}function Bl(e,t){const n=q(sn,null,e);return n.staticCount=t,n}function Ma(e="",t=!1){return t?(nt(),$l(at,null,e)):q(at,null,e)}function Ee(e){return e==null||typeof e=="boolean"?q(at):F(e)?q(Ne,null,e.slice()):typeof e=="object"?We(e):q(Wr,null,String(e))}function We(e){return e.el===null||e.memo?e:wt(e)}function Yr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Yr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Nn in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[lo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Cr([t.class,r.class]));else if(a==="style")t.style=Er([t.style,r.style]);else if(kn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ae(e,t,n,r=null){we(e,t,7,[n,r])}const Wl=ao();let Yl=0;function Kl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Wl,i={uid:Yl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ss(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eo(r,a),emitsOptions:Hi(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gs.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const _t=e=>{Z=e,e.scope.on()},rt=()=>{Z&&Z.scope.off(),Z=null};function fo(e){return e.vnode.shapeFlag&4}let Kt=!1;function Vl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=fo(e);Cl(e,n,a,t),Tl(e,r);const i=a?ql(e,t):void 0;return Kt=!1,i}function ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Mi(new Proxy(e.ctx,wl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Jl(e):null;_t(e),At();const i=Ke(r,e,0,[e.props,a]);if(Ot(),rt(),bi(i)){if(i.then(rt,rt),t)return i.then(o=>{Fa(e,o,t)}).catch(o=>{Pn(o,e,0)});e.asyncDep=i}else Fa(e,i,t)}else co(e,t)}function Fa(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=zi(t)),co(e,n)}let Ra;function co(e,t,n){const r=e.type;if(!e.render){if(!t&&Ra&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=re(re({isCustomElement:i,delimiters:s},o),l);r.render=Ra(a,u)}}e.render=r.render||xe}_t(e),At(),_l(e),Ot(),rt()}function Xl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function Jl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Xl(e))},slots:e.slots,emit:e.emit,expose:t}}function Kr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zi(Mi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)}}))}function Gl(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Zl(e){return z(e)&&"__vccOpts"in e}const pe=(e,t)=>Ws(e,t,Kt);function uo(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?fr(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),q(e,t,n))}const Ql="3.2.37",ef="http://www.w3.org/2000/svg",Qe=typeof document!="undefined"?document:null,za=Qe&&Qe.createElement("template"),tf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(ef,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{za.innerHTML=r?`<svg>${e}</svg>`:e;const s=za.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function nf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function rf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)cr(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&cr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ja=/\s*!important$/;function cr(e,t,n){if(F(n))n.forEach(r=>cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=af(e,t);ja.test(n)?e.setProperty(kt(r),n.replace(ja,""),"important"):e[r]=n}}const La=["Webkit","Moz","ms"],Kn={};function af(e,t){const n=Kn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Kn[t]=r;r=En(r);for(let a=0;a<La.length;a++){const i=La[a]+r;if(i in e)return Kn[t]=i}return t}const $a="http://www.w3.org/1999/xlink";function of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($a,t.slice(6,t.length)):e.setAttributeNS($a,t,n);else{const i=Xo(t);n==null||i&&!hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function sf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=hi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[mo,lf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ur=0;const ff=Promise.resolve(),cf=()=>{ur=0},uf=()=>ur||(ff.then(cf),ur=mo());function df(e,t,n,r){e.addEventListener(t,n,r)}function mf(e,t,n,r){e.removeEventListener(t,n,r)}function pf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=hf(t);if(r){const u=i[t]=gf(r,a);df(e,s,u,l)}else o&&(mf(e,s,o,l),i[t]=void 0)}}const Da=/(?:Once|Passive|Capture)$/;function hf(e){let t;if(Da.test(e)){t={};let n;for(;n=e.match(Da);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[kt(e.slice(2)),t]}function gf(e,t){const n=r=>{const a=r.timeStamp||mo();(lf||a>=n.attached-1)&&we(vf(r,n.value),t,5,[r])};return n.value=e,n.attached=uf(),n}function vf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ua=/^on[a-z]/,bf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?nf(e,r,a):t==="style"?rf(e,n,r):kn(t)?Pr(t)||pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yf(e,t,r,a))?sf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),of(e,t,r,a))};function yf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ua.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ua.test(t)&&ee(n)?!1:t in e}const xf=re({patchProp:bf},tf);let Ba;function wf(){return Ba||(Ba=Fl(xf))}const _f=(...e)=>{const t=wf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=kf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function kf(e){return ee(e)?document.querySelector(e):e}var Vr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Af={},Of={class:"space-y-4 md:p-14 p-10"},Ef=ue("p",{class:"text-center md:text-4xl md:p-8 text-2xl p-5 border-solid dark:border-white border-4"}," Jos\xE9 S\xE1nchez ",-1),Cf={target:"_blank",href:"https://github.com/SanchezPepe"},Pf={target:"_blank",href:"https://dev.to/sanchezpepe"},If={target:"_blank",href:"https://www.linkedin.com/in/sanchezjose8"},Tf={target:"_blank",href:"mailto:sanchezpepe97@gmail.com"},Sf=Bl('<div class="md:text-xl"><p class=""> I&#39;m a Computer Engineer based in Mexico City. I work at <strong>Google</strong> as a Technical Solutions Engineer. </p><p class="md: mt-5"> I have experience in Information Security, Quality Assurance Testing and Front End Web Development (Vue.js) </p><p class="md: mt-5"> I like to learn new things. Some of my areas of interest are: </p><ul class="md:mt-5 ml-10 list-disc te"><li>Web Development</li><li>Machine Learning</li><li>Blockchain Technology</li></ul></div>',1);function Nf(e,t,n,r,a,i){const o=Br("font-awesome-icon");return nt(),yt("div",Of,[Ef,ue("div",null,[ue("a",Cf,[q(o,{class:"mr-5",icon:"fa-brands fa-github",size:"2x"})]),ue("a",Pf,[q(o,{class:"mr-5",icon:"fa-brands fa-dev",size:"2x"})]),ue("a",If,[q(o,{class:"mr-5",icon:"fa-brands fa-linkedin",size:"2x"})]),ue("a",Tf,[q(o,{class:"mr-5",icon:"fa-solid fa-envelope",size:"2x"})])]),Sf])}var Mf=Vr(Af,[["render",Nf]]);const Ff={props:{front:String,back:String,url:String},setup(){return{flip:Rs(!1)}}},Rf={key:0,class:"flex h-full dark:bg-stone-900"},zf={class:"m-auto"},jf={key:1,class:"flex h-full dark:bg-zinc-800"},Lf={class:"m-auto p-10"},$f=ue("br",null,null,-1),Df=ue("br",null,null,-1),Uf=["href"];function Bf(e,t,n,r,a,i){const o=Br("font-awesome-icon");return nt(),yt("div",{class:"font-sans inline-block align-middle text-center",onMouseover:t[0]||(t[0]=s=>r.flip=!0),onMouseleave:t[1]||(t[1]=s=>r.flip=!1)},[r.flip?Ma("",!0):(nt(),yt("div",Rf,[ue("div",zf,pa(n.front),1)])),r.flip?(nt(),yt("div",jf,[ue("div",Lf,[lo(pa(n.back)+" ",1),$f,Df,ue("a",{target:"_blank",href:n.url},[q(o,{icon:"fa-brands fa-github",size:"2x"})],8,Uf)])])):Ma("",!0)],32)}var Hf=Vr(Ff,[["render",Bf]]);const Wf={setup(){return{...Ds({projects:[{front:"Cryptocurrency to MXN",back:"Built an Android application using Bitso Exchange API to reduce mobile data consumption and fetch Bitcoin, Ethereum, Ripple, and Bitcoin Cash prices.",url:"https://github.com/SanchezPepe/CryptocurrencyToMXN"},{front:"App ITAM",back:"Developed for the student community a web app using Vue.js, Vueyify and Firebase to plan their schedules and track the school shuttle in real-time.",url:"https://github.com/SanchezPepe/AppITAM"},{front:"Vue3-Choropleth",back:"Migrating https://www.npmjs.com/package/vue-choropleth to Vue 3",url:"https://github.com/SanchezPepe/vue3-choropleth"},{front:"Tweet streaming",back:"Used Apache Spark Streaming and Twitter API to fetch trending topics in a range of time",url:"https://github.com/SanchezPepe/Twitter_Spark"}]})}},components:{Card:Hf}},Yf={class:"grid md:grid-cols-2"};function Kf(e,t,n,r,a,i){const o=Br("Card");return nt(),yt("div",Yf,[q(o,{class:"border-2 border-y-lime-50",front:e.projects[0].front,back:e.projects[0].back,url:e.projects[0].url},null,8,["front","back","url"]),q(o,{class:"border-2 border-y-lime-50",front:e.projects[1].front,back:e.projects[1].back,url:e.projects[1].url},null,8,["front","back","url"]),q(o,{class:"border-2 border-y-lime-50",front:e.projects[2].front,back:e.projects[2].back,url:e.projects[2].url},null,8,["front","back","url"]),q(o,{class:"border-2 border-y-lime-50",front:e.projects[3].front,back:e.projects[3].back,url:e.projects[3].url},null,8,["front","back","url"])])}var Vf=Vr(Wf,[["render",Kf]]);const qf={class:"grid lg:grid-cols-2 h-screen dark:bg-stone-900 dark:text-white font-serif"},Xf={__name:"App",setup(e){return(t,n)=>(nt(),yt("div",qf,[q(Mf),q(Vf)]))}};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ha(Object(n),!0).forEach(function(r){Zf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vn(e){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vn(e)}function Jf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gf(e,t,n){return t&&Wa(e.prototype,t),n&&Wa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qr(e,t){return ec(e)||nc(e,t)||po(e,t)||ac()}function Mn(e){return Qf(e)||tc(e)||po(e)||rc()}function Qf(e){if(Array.isArray(e))return dr(e)}function ec(e){if(Array.isArray(e))return e}function tc(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nc(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function po(e,t){if(!!e){if(typeof e=="string")return dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dr(e,t)}}function dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ac(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ya=function(){},Xr={},ho={},go=null,vo={mark:Ya,measure:Ya};try{typeof window!="undefined"&&(Xr=window),typeof document!="undefined"&&(ho=document),typeof MutationObserver!="undefined"&&(go=MutationObserver),typeof performance!="undefined"&&(vo=performance)}catch{}var ic=Xr.navigator||{},Ka=ic.userAgent,Va=Ka===void 0?"":Ka,qe=Xr,X=ho,qa=go,nn=vo;qe.document;var $e=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",bo=~Va.indexOf("MSIE")||~Va.indexOf("Trident/"),Re="___FONT_AWESOME___",mr=16,yo="fa",xo="svg-inline--fa",it="data-fa-i2svg",pr="data-fa-pseudo-element",oc="data-fa-pseudo-element-pending",Jr="data-prefix",Gr="data-icon",Xa="fontawesome-i2svg",sc="async",lc=["HTML","HEAD","STYLE","SCRIPT"],wo=function(){try{return!0}catch{return!1}}(),Zr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},bn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},_o={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},fc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},cc=/fa[srltdbk]?[\-\ ]/,ko="fa-layers-text",uc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,dc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Ao=[1,2,3,4,5,6,7,8,9,10],mc=Ao.concat([11,12,13,14,15,16,17,18,19,20]),pc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hc=[].concat(Mn(Object.keys(bn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(Ao.map(function(e){return"".concat(e,"x")})).concat(mc.map(function(e){return"w-".concat(e)})),Oo=qe.FontAwesomeConfig||{};function gc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var bc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bc.forEach(function(e){var t=qr(e,2),n=t[0],r=t[1],a=vc(gc(n));a!=null&&(Oo[r]=a)})}var yc={familyPrefix:yo,styleDefault:"solid",replacementClass:xo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Lt=A(A({},yc),Oo);Lt.autoReplaceSvg||(Lt.observeMutations=!1);var T={};Object.keys(Lt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Lt[e]=n,fn.forEach(function(r){return r(T)})},get:function(){return Lt[e]}})});qe.FontAwesomeConfig=T;var fn=[];function xc(e){return fn.push(e),function(){fn.splice(fn.indexOf(e),1)}}var Be=mr,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wc(e){if(!(!e||!$e)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var _c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,t="";e-- >0;)t+=_c[Math.random()*62|0];return t}function Et(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qr(e){return e.classList?Et(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Eo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Eo(e[n]),'" ')},"").trim()}function Fn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ea(e){return e.size!==Pe.size||e.x!==Pe.x||e.y!==Pe.y||e.rotate!==Pe.rotate||e.flipX||e.flipY}function Ac(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Oc(e){var t=e.transform,n=e.width,r=n===void 0?mr:n,a=e.height,i=a===void 0?mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&bo?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ec=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Co(){var e=yo,t=xo,n=T.familyPrefix,r=T.replacementClass,a=Ec;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ja=!1;function Vn(){T.autoAddCss&&!Ja&&(wc(Co()),Ja=!0)}var Cc={mixout:function(){return{dom:{css:Co,insertCss:Vn}}},hooks:function(){return{beforeDOMElementCreation:function(){Vn()},beforeI2svg:function(){Vn()}}}},ze=qe||{};ze[Re]||(ze[Re]={});ze[Re].styles||(ze[Re].styles={});ze[Re].hooks||(ze[Re].hooks={});ze[Re].shims||(ze[Re].shims=[]);var ye=ze[Re],Po=[],Pc=function e(){X.removeEventListener("DOMContentLoaded",e),yn=1,Po.map(function(t){return t()})},yn=!1;$e&&(yn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),yn||X.addEventListener("DOMContentLoaded",Pc));function Ic(e){!$e||(yn?setTimeout(e,0):Po.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Eo(e):"<".concat(t," ").concat(kc(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function Ga(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},qn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Tc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Sc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function hr(e){var t=Sc(e);return t.length===1?t[0].toString(16):null}function Nc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Za(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function gr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Za(t);typeof ye.hooks.addPack=="function"&&!a?ye.hooks.addPack(e,Za(t)):ye.styles[e]=A(A({},ye.styles[e]||{}),i),e==="fas"&&gr("fa",t)}var $t=ye.styles,Mc=ye.shims,Fc=Object.values(_o),ta=null,Io={},To={},So={},No={},Mo={},Rc=Object.keys(Zr);function zc(e){return~hc.indexOf(e)}function jc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!zc(a)?a:null}var Fo=function(){var t=function(i){return qn($t,function(o,s,l){return o[l]=qn(s,i,{}),o},{})};Io=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),To=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Mo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in $t||T.autoFetchSvg,r=qn(Mc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});So=r.names,No=r.unicodes,ta=Rn(T.styleDefault)};xc(function(e){ta=Rn(e.styleDefault)});Fo();function na(e,t){return(Io[e]||{})[t]}function Lc(e,t){return(To[e]||{})[t]}function pt(e,t){return(Mo[e]||{})[t]}function Ro(e){return So[e]||{prefix:null,iconName:null}}function $c(e){var t=No[e],n=na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xe(){return ta}var ra=function(){return{prefix:null,iconName:null,rest:[]}};function Rn(e){var t=Zr[e],n=bn[e]||bn[t],r=e in ye.styles?e:null;return n||r||null}function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=jc(T.familyPrefix,s);if($t[s]?(s=Fc.includes(s)?fc[s]:s,a=s,o.prefix=s):Rc.indexOf(s)>-1?(a=s,o.prefix=Rn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Ro(o.iconName):{},d=pt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!$t.far&&$t.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ra());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Xe()||"fas"),i}var Dc=function(){function e(){Jf(this,e),this.definitions={}}return Gf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),gr(s,o[s]);var l=_o[s];l&&gr(l,o[s]),Fo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Qa=[],ht={},xt={},Uc=Object.keys(xt);function Bc(e,t){var n=t.mixoutsTo;return Qa=e,ht={},Object.keys(xt).forEach(function(r){Uc.indexOf(r)===-1&&delete xt[r]}),Qa.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),vn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(xt)}),n}function vr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function br(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Xe();if(!!t)return t=pt(n,t)||t,Ga(zo.definitions,n,t)||Ga(ye.styles,n,t)}var zo=new Dc,Hc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,ot("noAuto")},Wc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $e?(ot("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Ic(function(){Kc({autoReplaceSvgRoot:n}),ot("watch",t)})}},Yc={icon:function(t){if(t===null)return null;if(vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rn(t[0]);return{prefix:r,iconName:pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(cc))){var a=zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Xe(),iconName:pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Xe();return{prefix:i,iconName:pt(i,t)||t}}}},me={noAuto:Hc,config:T,dom:Wc,parse:Yc,library:zo,findIconDefinition:br,toHtml:qt},Kc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ye.styles).length>0||T.autoFetchSvg)&&$e&&T.autoReplaceSvg&&me.dom.i2svg({node:r})};function jn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!$e){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ea(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Fn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function qc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,R=r.found?r:n,j=R.width,S=R.height,y=a==="fak",E=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(ae){return m.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(S)})},L=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/S*16*.0625,"em")}:{};O&&(N.attributes[it]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},L),m.styles)}),te=r.found&&n.found?je("generateAbstractMask",W)||{children:[],attributes:{}}:je("generateAbstractIcon",W)||{children:[],attributes:{}},le=te.children,_e=te.attributes;return W.children=le,W.attributes=_e,s?qc(W):Vc(W)}function ei(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[it]="");var d=A({},o.styles);ea(a)&&(d.transform=Oc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Fn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Xc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Fn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xn=ye.styles;function yr(e){var t=e[0],n=e[1],r=e.slice(4),a=qr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Jc={found:!1,width:512,height:512};function Gc(e,t){!wo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Xe()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=Ro(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Xn[t]&&Xn[t][e]){var o=Xn[t][e];return r(yr(o))}Gc(e,t),r(A(A({},Jc),{},{icon:T.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var ti=function(){},wr=T.measurePerformance&&nn&&nn.mark&&nn.measure?nn:{mark:ti,measure:ti},Ft='FA "6.1.2"',Zc=function(t){return wr.mark("".concat(Ft," ").concat(t," begins")),function(){return jo(t)}},jo=function(t){wr.mark("".concat(Ft," ").concat(t," ends")),wr.measure("".concat(Ft," ").concat(t),"".concat(Ft," ").concat(t," begins"),"".concat(Ft," ").concat(t," ends"))},ia={begin:Zc,end:jo},cn=function(){};function ni(e){var t=e.getAttribute?e.getAttribute(it):null;return typeof t=="string"}function Qc(e){var t=e.getAttribute?e.getAttribute(Jr):null,n=e.getAttribute?e.getAttribute(Gr):null;return t&&n}function eu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function tu(){if(T.autoReplaceSvg===!0)return un.replace;var e=un[T.autoReplaceSvg];return e||un.replace}function nu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ru(e){return X.createElement(e)}function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nu:ru:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Lo(o,{ceFn:r}))}),a}function au(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Lo(a),n)}),n.getAttribute(it)===null&&T.keepOriginalSource){var r=X.createComment(au(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qr(n).indexOf(T.replacementClass))return un.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(it,""),n.innerHTML=o}};function ri(e){e()}function $o(e,t){var n=typeof t=="function"?t:cn;if(e.length===0)n();else{var r=ri;T.mutateApproach===sc&&(r=qe.requestAnimationFrame||ri),r(function(){var a=tu(),i=ia.begin("mutate");e.map(a),i(),n()})}}var oa=!1;function Do(){oa=!0}function _r(){oa=!1}var xn=null;function ai(e){if(!!qa&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?cn:t,r=e.nodeCallback,a=r===void 0?cn:r,i=e.pseudoElementsCallback,o=i===void 0?cn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;xn=new qa(function(u){if(!oa){var d=Xe();Et(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ni(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ni(m.target)&&~pc.indexOf(m.attributeName))if(m.attributeName==="class"&&Qc(m.target)){var b=zn(Qr(m.target)),O=b.prefix,R=b.iconName;m.target.setAttribute(Jr,O||d),R&&m.target.setAttribute(Gr,R)}else eu(m.target)&&a(m.target)})}}),$e&&xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function iu(){!xn||xn.disconnect()}function ou(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function su(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zn(Qr(e));return a.prefix||(a.prefix=Xe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Lc(a.prefix,e.innerText)||na(a.prefix,hr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function lu(e){var t=Et(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function fu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=su(e),r=n.iconName,a=n.prefix,i=n.rest,o=lu(e),s=vr("parseNodeAttributes",{},e),l=t.styleParser?ou(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var cu=ye.styles;function Uo(e){var t=T.autoReplaceSvg==="nest"?ii(e,{styleParser:!1}):ii(e);return~t.extra.classes.indexOf(ko)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$e)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Xa,"-").concat(m))},a=function(m){return n.remove("".concat(Xa,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Zr):Object.keys(cu);i.includes("fa")||i.push("fa");var o=[".".concat(ko,":not([").concat(it,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(it,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Et(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ia.begin("onTree"),u=s.reduce(function(d,m){try{var b=Uo(m);b&&d.push(b)}catch(O){wo||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){$o(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function uu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Uo(e).then(function(n){n&&$o([n],t)})}function du(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:br(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:br(a||{})),e(r,A(A({},n),{},{mask:a}))}}var mu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,R=O===void 0?null:O,j=n.classes,S=j===void 0?[]:j,y=n.attributes,E=y===void 0?{}:y,N=n.styles,L=N===void 0?{}:N;if(!!t){var W=t.prefix,te=t.iconName,le=t.icon;return jn(A({type:"icon"},t),function(){return ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?E["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(R||Vt()):(E["aria-hidden"]="true",E.focusable="false")),aa({icons:{main:yr(le),mask:l?yr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:te,transform:A(A({},Pe),a),symbol:o,title:b,maskId:d,titleId:R,extra:{attributes:E,styles:L,classes:S}})})}},pu={mixout:function(){return{icon:du(mu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oi,n.nodeCallback=uu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return oi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,R){Promise.all([xr(a,s),d.iconName?xr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var S=qr(j,2),y=S[0],E=S[1];O([n,aa({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Fn(s);l.length>0&&(a.style=l);var u;return ea(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return jn({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Mn(i)).join(" ")},children:o}]})}}}},gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return jn({type:"counter",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),Xc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Mn(s))}})})}}}},vu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return jn({type:"text",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),ei({content:n,transform:A(A({},Pe),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Mn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(bo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ei({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},bu=new RegExp('"',"ug"),si=[1105920,1112319];function yu(e){var t=e.replace(bu,""),n=Nc(t,0),r=n>=si[0]&&n<=si[1],a=t.length===2?t[0]===t[1]:!1;return{value:hr(a?t[0]:t),isSecondary:r||a}}function li(e,t){var n="".concat(oc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Et(e.children),o=i.filter(function(te){return te.getAttribute(pr)===t})[0],s=qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?bn[l[2].toLowerCase()]:dc[u],O=yu(m),R=O.value,j=O.isSecondary,S=l[0].startsWith("FontAwesome"),y=na(b,R),E=y;if(S){var N=$c(R);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!j&&(!o||o.getAttribute(Jr)!==b||o.getAttribute(Gr)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var L=fu(),W=L.extra;W.attributes[pr]=t,xr(y,b).then(function(te){var le=aa(A(A({},L),{},{icons:{main:te,mask:ra()},prefix:b,iconName:E,extra:W,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=le.map(function(ae){return qt(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xu(e){return Promise.all([li(e,"::before"),li(e,"::after")])}function wu(e){return e.parentNode!==document.head&&!~lc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fi(e){if(!!$e)return new Promise(function(t,n){var r=Et(e.querySelectorAll("*")).filter(wu).map(xu),a=ia.begin("searchPseudoElements");Do(),Promise.all(r).then(function(){a(),_r(),t()}).catch(function(){a(),_r(),n()})})}var _u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&fi(a)}}},ci=!1,ku={mixout:function(){return{dom:{unwatch:function(){Do(),ci=!0}}}},hooks:function(){return{bootstrap:function(){ai(vr("mutationObserverCallbacks",{}))},noAuto:function(){iu()},watch:function(n){var r=n.observeMutationsRoot;ci?_r():ai(vr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ui=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Au={mixout:function(){return{parse:{transform:function(n){return ui(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ui(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},Jn={x:0,y:0,width:"100%",height:"100%"};function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ou(e){return e.tag==="g"?e.children:[e]}var Eu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zn(a.split(" ").map(function(o){return o.trim()})):ra();return i.prefix||(i.prefix=Xe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=Ac({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:A(A({},Jn),{},{fill:"white"})},j=d.children?{children:d.children.map(di)}:{},S={tag:"g",attributes:A({},O.inner),children:[di(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},j))]},y={tag:"g",attributes:A({},O.outer),children:[S]},E="mask-".concat(s||Vt()),N="clip-".concat(s||Vt()),L={tag:"mask",attributes:A(A({},Jn),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ou(b)},L]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},Jn)}),{children:r,attributes:a}}}},Cu={provides:function(t){var n=!1;qe.matchMedia&&(n=qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Iu=[Cc,pu,hu,gu,vu,_u,ku,Au,Eu,Cu,Pu];Bc(Iu,{mixoutsTo:me});me.noAuto;var Bo=me.config,Tu=me.library;me.dom;var wn=me.parse;me.findIconDefinition;me.toHtml;var Su=me.icon;me.layer;var Nu=me.text;me.counter;function mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mi(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _n(e){return _n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_n(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Fu(e,t){if(e==null)return{};var n=Mu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function kr(e){return Ru(e)||zu(e)||ju(e)||Lu()}function Ru(e){if(Array.isArray(e))return Ar(e)}function zu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ju(e,t){if(!!e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $u=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ho={exports:{}};(function(e){(function(t){var n=function(y,E,N){if(!u(E)||m(E)||b(E)||O(E)||l(E))return E;var L,W=0,te=0;if(d(E))for(L=[],te=E.length;W<te;W++)L.push(n(y,E[W],N));else{L={};for(var le in E)Object.prototype.hasOwnProperty.call(E,le)&&(L[y(le,N)]=n(y,E[le],N))}return L},r=function(y,E){E=E||{};var N=E.separator||"_",L=E.split||/(?=[A-Z])/;return y.split(L).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},j=function(y,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?y:function(L,W){return N(L,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(j(a,E),y)},decamelizeKeys:function(y,E){return n(j(o,E),y,E)},pascalizeKeys:function(y,E){return n(j(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})($u)})(Ho);var Du=Ho.exports,Uu=["class","style"];function Bu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Du.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Hu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return sa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Hu(d);break;case"style":l.style=Bu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Fu(n,Uu);return uo(e.tag,ve(ve(ve({},t),{},{class:a.class,style:ve(ve({},a.style),o)},a.attrs),s),r)}var Wo=!1;try{Wo=!0}catch{}function Wu(){if(!Wo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oe({},e,t):{}}function Yu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},oe(t,"fa-".concat(e.size),e.size!==null),oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),oe(t,"fa-pull-".concat(e.pull),e.pull!==null),oe(t,"fa-swap-opacity",e.swapOpacity),oe(t,"fa-bounce",e.bounce),oe(t,"fa-shake",e.shake),oe(t,"fa-beat",e.beat),oe(t,"fa-fade",e.fade),oe(t,"fa-beat-fade",e.beatFade),oe(t,"fa-flash",e.flash),oe(t,"fa-spin-pulse",e.spinPulse),oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function pi(e){if(e&&_n(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wn.icon)return wn.icon(e);if(e===null)return null;if(_n(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ku=Ur({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return pi(t.icon)}),i=pe(function(){return Dt("classes",Yu(t))}),o=pe(function(){return Dt("transform",typeof t.transform=="string"?wn.transform(t.transform):t.transform)}),s=pe(function(){return Dt("mask",pi(t.mask))}),l=pe(function(){return Su(a.value,ve(ve(ve(ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});an(l,function(d){if(!d)return Wu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pe(function(){return l.value?sa(l.value.abstract[0],{},r):null});return function(){return u.value}}});Ur({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Bo.familyPrefix,i=pe(function(){return["".concat(a,"-layers")].concat(kr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return uo("div",{class:i.value},r.default?r.default():[])}}});Ur({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Bo.familyPrefix,i=pe(function(){return Dt("classes",[].concat(kr(t.counter?["".concat(a,"-layers-counter")]:[]),kr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=pe(function(){return Dt("transform",typeof t.transform=="string"?wn.transform(t.transform):t.transform)}),s=pe(function(){var u=Nu(t.value.toString(),ve(ve({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pe(function(){return sa(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Vu={prefix:"fab",iconName:"dev",icon:[448,512,[],"f6cc","M120.1 208.3c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.5h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.4 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.1h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.7-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16 .29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.6 115.3c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.7 29.57-113.7h32.58l-38.46 144.8z"]},qu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Xu={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ju={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,61443,9993],"f0e0","M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"]};Tu.add(Xu,qu,Ju,Vu);_f(Xf).component("font-awesome-icon",Ku).mount("#app");
