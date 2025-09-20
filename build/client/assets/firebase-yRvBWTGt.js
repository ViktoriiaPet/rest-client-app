import{r as Cr,L as Wa,_ as Ha,C as Xa,a as Ja,F as Ya,b as bt,g as Za,c as tu,d as eu,i as eo,p as nu,u as ru,e as iu,f as su,h as ze,j as ou,k as au,S as uu,l as lu,m as hu,s as cu,n as fu,o as du,q as pu,t as mu}from"./index.esm-DEVYYNpo.js";var gu="firebase",_u="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr(gu,_u,"app");var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,f){function m(){}m.prototype=f.prototype,E.D=f.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,y,v){for(var p=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)p[Ct-2]=arguments[Ct];return f.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,f,m){m||(m=0);var _=Array(16);if(typeof f=="string")for(var y=0;16>y;++y)_[y]=f.charCodeAt(m++)|f.charCodeAt(m++)<<8|f.charCodeAt(m++)<<16|f.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=f[m++]|f[m++]<<8|f[m++]<<16|f[m++]<<24;f=E.g[0],m=E.g[1],y=E.g[2];var v=E.g[3],p=f+(v^m&(y^v))+_[0]+3614090360&4294967295;f=m+(p<<7&4294967295|p>>>25),p=v+(y^f&(m^y))+_[1]+3905402710&4294967295,v=f+(p<<12&4294967295|p>>>20),p=y+(m^v&(f^m))+_[2]+606105819&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(f^y&(v^f))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=f+(v^m&(y^v))+_[4]+4118548399&4294967295,f=m+(p<<7&4294967295|p>>>25),p=v+(y^f&(m^y))+_[5]+1200080426&4294967295,v=f+(p<<12&4294967295|p>>>20),p=y+(m^v&(f^m))+_[6]+2821735955&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(f^y&(v^f))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=f+(v^m&(y^v))+_[8]+1770035416&4294967295,f=m+(p<<7&4294967295|p>>>25),p=v+(y^f&(m^y))+_[9]+2336552879&4294967295,v=f+(p<<12&4294967295|p>>>20),p=y+(m^v&(f^m))+_[10]+4294925233&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(f^y&(v^f))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=f+(v^m&(y^v))+_[12]+1804603682&4294967295,f=m+(p<<7&4294967295|p>>>25),p=v+(y^f&(m^y))+_[13]+4254626195&4294967295,v=f+(p<<12&4294967295|p>>>20),p=y+(m^v&(f^m))+_[14]+2792965006&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(f^y&(v^f))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=f+(y^v&(m^y))+_[1]+4129170786&4294967295,f=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(f^m))+_[6]+3225465664&4294967295,v=f+(p<<9&4294967295|p>>>23),p=y+(f^m&(v^f))+_[11]+643717713&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^f&(y^v))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=f+(y^v&(m^y))+_[5]+3593408605&4294967295,f=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(f^m))+_[10]+38016083&4294967295,v=f+(p<<9&4294967295|p>>>23),p=y+(f^m&(v^f))+_[15]+3634488961&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^f&(y^v))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=f+(y^v&(m^y))+_[9]+568446438&4294967295,f=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(f^m))+_[14]+3275163606&4294967295,v=f+(p<<9&4294967295|p>>>23),p=y+(f^m&(v^f))+_[3]+4107603335&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^f&(y^v))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=f+(y^v&(m^y))+_[13]+2850285829&4294967295,f=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(f^m))+_[2]+4243563512&4294967295,v=f+(p<<9&4294967295|p>>>23),p=y+(f^m&(v^f))+_[7]+1735328473&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^f&(y^v))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=f+(m^y^v)+_[5]+4294588738&4294967295,f=m+(p<<4&4294967295|p>>>28),p=v+(f^m^y)+_[8]+2272392833&4294967295,v=f+(p<<11&4294967295|p>>>21),p=y+(v^f^m)+_[11]+1839030562&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^f)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=f+(m^y^v)+_[1]+2763975236&4294967295,f=m+(p<<4&4294967295|p>>>28),p=v+(f^m^y)+_[4]+1272893353&4294967295,v=f+(p<<11&4294967295|p>>>21),p=y+(v^f^m)+_[7]+4139469664&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^f)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=f+(m^y^v)+_[13]+681279174&4294967295,f=m+(p<<4&4294967295|p>>>28),p=v+(f^m^y)+_[0]+3936430074&4294967295,v=f+(p<<11&4294967295|p>>>21),p=y+(v^f^m)+_[3]+3572445317&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^f)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=f+(m^y^v)+_[9]+3654602809&4294967295,f=m+(p<<4&4294967295|p>>>28),p=v+(f^m^y)+_[12]+3873151461&4294967295,v=f+(p<<11&4294967295|p>>>21),p=y+(v^f^m)+_[15]+530742520&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^f)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=f+(y^(m|~v))+_[0]+4096336452&4294967295,f=m+(p<<6&4294967295|p>>>26),p=v+(m^(f|~y))+_[7]+1126891415&4294967295,v=f+(p<<10&4294967295|p>>>22),p=y+(f^(v|~m))+_[14]+2878612391&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~f))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=f+(y^(m|~v))+_[12]+1700485571&4294967295,f=m+(p<<6&4294967295|p>>>26),p=v+(m^(f|~y))+_[3]+2399980690&4294967295,v=f+(p<<10&4294967295|p>>>22),p=y+(f^(v|~m))+_[10]+4293915773&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~f))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=f+(y^(m|~v))+_[8]+1873313359&4294967295,f=m+(p<<6&4294967295|p>>>26),p=v+(m^(f|~y))+_[15]+4264355552&4294967295,v=f+(p<<10&4294967295|p>>>22),p=y+(f^(v|~m))+_[6]+2734768916&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~f))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=f+(y^(m|~v))+_[4]+4149444226&4294967295,f=m+(p<<6&4294967295|p>>>26),p=v+(m^(f|~y))+_[11]+3174756917&4294967295,v=f+(p<<10&4294967295|p>>>22),p=y+(f^(v|~m))+_[2]+718787259&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~f))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+f&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+v&4294967295}r.prototype.u=function(E,f){f===void 0&&(f=E.length);for(var m=f-this.blockSize,_=this.B,y=this.h,v=0;v<f;){if(y==0)for(;v<=m;)s(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<f;)if(_[y++]=E.charCodeAt(v++),y==this.blockSize){s(this,_),y=0;break}}else for(;v<f;)if(_[y++]=E[v++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=f},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var f=1;f<E.length-8;++f)E[f]=0;var m=8*this.o;for(f=E.length-8;f<E.length;++f)E[f]=m&255,m/=256;for(this.u(E),E=Array(16),f=m=0;4>f;++f)for(var _=0;32>_;_+=8)E[m++]=this.g[f]>>>_&255;return E};function a(E,f){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=f(E)}function l(E,f){this.h=f;for(var m=[],_=!0,y=E.length-1;0<=y;y--){var v=E[y]|0;_&&v==f||(m[y]=v,_=!1)}this.g=m}var c={};function d(E){return-128<=E&&128>E?a(E,function(f){return new l([f|0],0>f?-1:0)}):new l([E|0],0>E?-1:0)}function g(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return k(g(-E));for(var f=[],m=1,_=0;E>=m;_++)f[_]=E/m|0,m*=4294967296;return new l(f,0)}function A(E,f){if(E.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(E.charAt(0)=="-")return k(A(E.substring(1),f));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(f,8)),_=w,y=0;y<E.length;y+=8){var v=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+v),f);8>v?(v=g(Math.pow(f,v)),_=_.j(v).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var w=d(0),S=d(1),b=d(16777216);i=l.prototype,i.m=function(){if(M(this))return-k(this).m();for(var E=0,f=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*f,f*=4294967296}return E},i.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(M(this))return"-"+k(this).toString(E);for(var f=g(Math.pow(E,6)),m=this,_="";;){var y=yt(m,f).g;m=W(m,y.j(f));var v=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,D(m))return v+_;for(;6>v.length;)v="0"+v;_=v+_}},i.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var f=0;f<E.g.length;f++)if(E.g[f]!=0)return!1;return!0}function M(E){return E.h==-1}i.l=function(E){return E=W(this,E),M(E)?-1:D(E)?0:1};function k(E){for(var f=E.g.length,m=[],_=0;_<f;_++)m[_]=~E.g[_];return new l(m,~E.h).add(S)}i.abs=function(){return M(this)?k(this):this},i.add=function(E){for(var f=Math.max(this.g.length,E.g.length),m=[],_=0,y=0;y<=f;y++){var v=_+(this.i(y)&65535)+(E.i(y)&65535),p=(v>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,v&=65535,p&=65535,m[y]=p<<16|v}return new l(m,m[m.length-1]&-2147483648?-1:0)};function W(E,f){return E.add(k(f))}i.j=function(E){if(D(this)||D(E))return w;if(M(this))return M(E)?k(this).j(k(E)):k(k(this).j(E));if(M(E))return k(this.j(k(E)));if(0>this.l(b)&&0>E.l(b))return g(this.m()*E.m());for(var f=this.g.length+E.g.length,m=[],_=0;_<2*f;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var v=this.i(_)>>>16,p=this.i(_)&65535,Ct=E.i(y)>>>16,Te=E.i(y)&65535;m[2*_+2*y]+=p*Te,$(m,2*_+2*y),m[2*_+2*y+1]+=v*Te,$(m,2*_+2*y+1),m[2*_+2*y+1]+=p*Ct,$(m,2*_+2*y+1),m[2*_+2*y+2]+=v*Ct,$(m,2*_+2*y+2)}for(_=0;_<f;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=f;_<2*f;_++)m[_]=0;return new l(m,0)};function $(E,f){for(;(E[f]&65535)!=E[f];)E[f+1]+=E[f]>>>16,E[f]&=65535,f++}function z(E,f){this.g=E,this.h=f}function yt(E,f){if(D(f))throw Error("division by zero");if(D(E))return new z(w,w);if(M(E))return f=yt(k(E),f),new z(k(f.g),k(f.h));if(M(f))return f=yt(E,k(f)),new z(k(f.g),f.h);if(30<E.g.length){if(M(E)||M(f))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=f;0>=_.l(E);)m=Mt(m),_=Mt(_);var y=Et(m,1),v=Et(_,1);for(_=Et(_,2),m=Et(m,2);!D(_);){var p=v.add(_);0>=p.l(E)&&(y=y.add(m),v=p),_=Et(_,1),m=Et(m,1)}return f=W(E,y.j(f)),new z(y,f)}for(y=w;0<=E.l(f);){for(m=Math.max(1,Math.floor(E.m()/f.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),v=g(m),p=v.j(f);M(p)||0<p.l(E);)m-=_,v=g(m),p=v.j(f);D(v)&&(v=S),y=y.add(v),E=W(E,p)}return new z(y,E)}i.A=function(E){return yt(this,E).h},i.and=function(E){for(var f=Math.max(this.g.length,E.g.length),m=[],_=0;_<f;_++)m[_]=this.i(_)&E.i(_);return new l(m,this.h&E.h)},i.or=function(E){for(var f=Math.max(this.g.length,E.g.length),m=[],_=0;_<f;_++)m[_]=this.i(_)|E.i(_);return new l(m,this.h|E.h)},i.xor=function(E){for(var f=Math.max(this.g.length,E.g.length),m=[],_=0;_<f;_++)m[_]=this.i(_)^E.i(_);return new l(m,this.h^E.h)};function Mt(E){for(var f=E.g.length+1,m=[],_=0;_<f;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(m,E.h)}function Et(E,f){var m=f>>5;f%=32;for(var _=E.g.length-m,y=[],v=0;v<_;v++)y[v]=0<f?E.i(v+m)>>>f|E.i(v+m+1)<<32-f:E.i(v+m);return new l(y,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=A,qr=l}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var no,Fe,ro,Cn,Dr,io,so,oo;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,u){return n==Array.prototype||n==Object.prototype||(n[o]=u.value),n};function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var o=0;o<n.length;++o){var u=n[o];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(n,o){if(o)t:{var u=r;n=n.split(".");for(var h=0;h<n.length-1;h++){var T=n[h];if(!(T in u))break t;u=u[T]}n=n[n.length-1],h=u[n],o=o(h),o!=h&&o!=null&&t(u,n,{configurable:!0,writable:!0,value:o})}}function a(n,o){n instanceof String&&(n+="");var u=0,h=!1,T={next:function(){if(!h&&u<n.length){var I=u++;return{value:o(I,n[I]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(n){return n||function(){return a(this,function(o,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function g(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function A(n,o,u){return n.call.apply(n.bind,arguments)}function w(n,o,u){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),n.apply(o,T)}}return function(){return n.apply(o,arguments)}}function S(n,o,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:w,S.apply(null,arguments)}function b(n,o){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function D(n,o){function u(){}u.prototype=o.prototype,n.aa=o.prototype,n.prototype=new u,n.prototype.constructor=n,n.Qb=function(h,T,I){for(var V=Array(arguments.length-2),j=2;j<arguments.length;j++)V[j-2]=arguments[j];return o.prototype[T].apply(h,V)}}function M(n){const o=n.length;if(0<o){const u=Array(o);for(let h=0;h<o;h++)u[h]=n[h];return u}return[]}function k(n,o){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const T=n.length||0,I=h.length||0;n.length=T+I;for(let V=0;V<I;V++)n[T+V]=h[V]}else n.push(h)}}class W{constructor(o,u){this.i=o,this.j=u,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function $(n){return/^[\s\xa0]*$/.test(n)}function z(){var n=c.navigator;return n&&(n=n.userAgent)?n:""}function yt(n){return yt[" "](n),n}yt[" "]=function(){};var Mt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function Et(n,o,u){for(const h in n)o.call(u,n[h],h,n)}function E(n,o){for(const u in n)o.call(void 0,n[u],u,n)}function f(n){const o={};for(const u in n)o[u]=n[u];return o}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(n,o){let u,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(u in h)n[u]=h[u];for(let I=0;I<m.length;I++)u=m[I],Object.prototype.hasOwnProperty.call(h,u)&&(n[u]=h[u])}}function y(n){var o=1;n=n.split(":");const u=[];for(;0<o&&n.length;)u.push(n.shift()),o--;return n.length&&u.push(n.join(":")),u}function v(n){c.setTimeout(()=>{throw n},0)}function p(){var n=er;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class Ct{constructor(){this.h=this.g=null}add(o,u){const h=Te.get();h.set(o,u),this.h?this.h.next=h:this.g=h,this.h=h}}var Te=new W(()=>new da,n=>n.reset());class da{constructor(){this.next=this.g=this.h=null}set(o,u){this.h=o,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,Ae=!1,er=new Ct,di=()=>{const n=c.Promise.resolve(void 0);ve=()=>{n.then(pa)}};var pa=()=>{for(var n;n=p();){try{n.h.call(n.g)}catch(u){v(u)}var o=Te;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}Ae=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var ma=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const u=()=>{};c.addEventListener("test",u,o),c.removeEventListener("test",u,o)}catch{}return n})();function Ie(n,o){if(ot.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var u=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(Mt){t:{try{yt(o.nodeName);var T=!0;break t}catch{}T=!1}T||(o=null)}}else u=="mouseover"?o=n.fromElement:u=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ga[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ie.aa.h.call(this)}}D(Ie,ot);var ga={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),_a=0;function ya(n,o,u,h,T){this.listener=n,this.proxy=null,this.src=o,this.type=u,this.capture=!!h,this.ha=T,this.key=++_a,this.da=this.fa=!1}function sn(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function on(n){this.src=n,this.g={},this.h=0}on.prototype.add=function(n,o,u,h,T){var I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);var V=rr(n,o,h,T);return-1<V?(o=n[V],u||(o.fa=!1)):(o=new ya(o,this.src,I,!!h,T),o.fa=u,n.push(o)),o};function nr(n,o){var u=o.type;if(u in n.g){var h=n.g[u],T=Array.prototype.indexOf.call(h,o,void 0),I;(I=0<=T)&&Array.prototype.splice.call(h,T,1),I&&(sn(o),n.g[u].length==0&&(delete n.g[u],n.h--))}}function rr(n,o,u,h){for(var T=0;T<n.length;++T){var I=n[T];if(!I.da&&I.listener==o&&I.capture==!!u&&I.ha==h)return T}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),sr={};function pi(n,o,u,h,T){if(Array.isArray(o)){for(var I=0;I<o.length;I++)pi(n,o[I],u,h,T);return null}return u=_i(u),n&&n[rn]?n.K(o,u,g(h)?!!h.capture:!1,T):Ea(n,o,u,!1,h,T)}function Ea(n,o,u,h,T,I){if(!o)throw Error("Invalid event type");var V=g(T)?!!T.capture:!!T,j=ar(n);if(j||(n[ir]=j=new on(n)),u=j.add(o,u,h,V,I),u.proxy)return u;if(h=Ta(),u.proxy=h,h.src=n,h.listener=u,n.addEventListener)ma||(T=V),T===void 0&&(T=!1),n.addEventListener(o.toString(),h,T);else if(n.attachEvent)n.attachEvent(gi(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ta(){function n(u){return o.call(n.src,n.listener,u)}const o=va;return n}function mi(n,o,u,h,T){if(Array.isArray(o))for(var I=0;I<o.length;I++)mi(n,o[I],u,h,T);else h=g(h)?!!h.capture:!!h,u=_i(u),n&&n[rn]?(n=n.i,o=String(o).toString(),o in n.g&&(I=n.g[o],u=rr(I,u,h,T),-1<u&&(sn(I[u]),Array.prototype.splice.call(I,u,1),I.length==0&&(delete n.g[o],n.h--)))):n&&(n=ar(n))&&(o=n.g[o.toString()],n=-1,o&&(n=rr(o,u,h,T)),(u=-1<n?o[n]:null)&&or(u))}function or(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[rn])nr(o.i,n);else{var u=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(u,h,n.capture):o.detachEvent?o.detachEvent(gi(u),h):o.addListener&&o.removeListener&&o.removeListener(h),(u=ar(o))?(nr(u,n),u.h==0&&(u.src=null,o[ir]=null)):sn(n)}}}function gi(n){return n in sr?sr[n]:sr[n]="on"+n}function va(n,o){if(n.da)n=!0;else{o=new Ie(o,this);var u=n.listener,h=n.ha||n.src;n.fa&&or(n),n=u.call(h,o)}return n}function ar(n){return n=n[ir],n instanceof on?n:null}var ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function _i(n){return typeof n=="function"?n:(n[ur]||(n[ur]=function(o){return n.handleEvent(o)}),n[ur])}function at(){Lt.call(this),this.i=new on(this),this.M=this,this.F=null}D(at,Lt),at.prototype[rn]=!0,at.prototype.removeEventListener=function(n,o,u,h){mi(this,n,o,u,h)};function pt(n,o){var u,h=n.F;if(h)for(u=[];h;h=h.F)u.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new ot(o,n);else if(o instanceof ot)o.target=o.target||n;else{var T=o;o=new ot(h,n),_(o,T)}if(T=!0,u)for(var I=u.length-1;0<=I;I--){var V=o.g=u[I];T=an(V,h,!0,o)&&T}if(V=o.g=n,T=an(V,h,!0,o)&&T,T=an(V,h,!1,o)&&T,u)for(I=0;I<u.length;I++)V=o.g=u[I],T=an(V,h,!1,o)&&T}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var u=n.g[o],h=0;h<u.length;h++)sn(u[h]);delete n.g[o],n.h--}}this.F=null},at.prototype.K=function(n,o,u,h){return this.i.add(String(n),o,!1,u,h)},at.prototype.L=function(n,o,u,h){return this.i.add(String(n),o,!0,u,h)};function an(n,o,u,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var T=!0,I=0;I<o.length;++I){var V=o[I];if(V&&!V.da&&V.capture==u){var j=V.listener,et=V.ha||V.src;V.fa&&nr(n.i,V),T=j.call(et,h)!==!1&&T}}return T&&!h.defaultPrevented}function yi(n,o,u){if(typeof n=="function")u&&(n=S(n,u));else if(n&&typeof n.handleEvent=="function")n=S(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:c.setTimeout(n,o||0)}function Ei(n){n.g=yi(()=>{n.g=null,n.i&&(n.i=!1,Ei(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Aa extends Lt{constructor(o,u){super(),this.m=o,this.l=u,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(n){Lt.call(this),this.h=n,this.g={}}D(we,Lt);var Ti=[];function vi(n){Et(n.g,function(o,u){this.g.hasOwnProperty(u)&&or(o)},n),n.g={}}we.prototype.N=function(){we.aa.N.call(this),vi(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,Ia=c.JSON.parse,wa=class{stringify(n){return c.JSON.stringify(n,void 0)}parse(n){return c.JSON.parse(n,void 0)}};function hr(){}hr.prototype.h=null;function Ai(n){return n.h||(n.h=n.i())}function Ii(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){ot.call(this,"d")}D(cr,ot);function fr(){ot.call(this,"c")}D(fr,ot);var Kt={},wi=null;function un(){return wi=wi||new at}Kt.La="serverreachability";function Ri(n){ot.call(this,Kt.La,n)}D(Ri,ot);function Pe(n){const o=un();pt(o,new Ri(o))}Kt.STAT_EVENT="statevent";function Pi(n,o){ot.call(this,Kt.STAT_EVENT,n),this.stat=o}D(Pi,ot);function mt(n){const o=un();pt(o,new Pi(o,n))}Kt.Ma="timingevent";function Vi(n,o){ot.call(this,Kt.Ma,n),this.size=o}D(Vi,ot);function Ve(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){n()},o)}function Se(){this.g=!0}Se.prototype.xa=function(){this.g=!1};function Ra(n,o,u,h,T,I){n.info(function(){if(n.g)if(I)for(var V="",j=I.split("&"),et=0;et<j.length;et++){var F=j[et].split("=");if(1<F.length){var ut=F[0];F=F[1];var lt=ut.split("_");V=2<=lt.length&&lt[1]=="type"?V+(ut+"="+F+"&"):V+(ut+"=redacted&")}}else V=null;else V=I;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+o+`
`+u+`
`+V})}function Pa(n,o,u,h,T,I,V){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+o+`
`+u+`
`+I+" "+V})}function se(n,o,u,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Sa(n,u)+(h?" "+h:"")})}function Va(n,o){n.info(function(){return"TIMEOUT: "+o})}Se.prototype.info=function(){};function Sa(n,o){if(!n.g)return o;if(!o)return null;try{var u=JSON.parse(o);if(u){for(n=0;n<u.length;n++)if(Array.isArray(u[n])){var h=u[n];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var I=T[0];if(I!="noop"&&I!="stop"&&I!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return lr(u)}catch{return o}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function hn(){}D(hn,hr),hn.prototype.g=function(){return new XMLHttpRequest},hn.prototype.i=function(){return{}},dr=new hn;function Ft(n,o,u,h){this.j=n,this.i=o,this.l=u,this.R=h||1,this.U=new we(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ci}function Ci(){this.i=null,this.g="",this.h=!1}var Di={},pr={};function mr(n,o,u){n.L=1,n.v=pn(Dt(o)),n.m=u,n.P=!0,Ni(n,null)}function Ni(n,o){n.F=Date.now(),cn(n),n.A=Dt(n.v);var u=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),Gi(u.i,"t",h),n.C=0,u=n.j.J,n.h=new Ci,n.g=ls(n.j,u?o:null,!n.m),0<n.O&&(n.M=new Aa(S(n.Y,n,n.g),n.O)),o=n.U,u=n.g,h=n.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ti[0]=T.toString()),T=Ti);for(var I=0;I<T.length;I++){var V=pi(u,T[I],h||o.handleEvent,!1,o.h||o);if(!V)break;o.g[V.key]=V}o=n.H?f(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),Pe(),Ra(n.i,n.u,n.A,n.l,n.R,n.m)}Ft.prototype.ca=function(n){n=n.target;const o=this.M;o&&Nt(n)==3?o.j():this.Y(n)},Ft.prototype.Y=function(n){try{if(n==this.g)t:{const lt=Nt(this.g);var o=this.g.Ba();const ue=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Yi(this.g)))){this.J||lt!=4||o==7||(o==8||0>=ue?Pe(3):Pe(2)),gr(this);var u=this.g.Z();this.X=u;e:if(bi(this)){var h=Yi(this.g);n="";var T=h.length,I=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Ce(this);var V="";break e}this.h.i=new c.TextDecoder}for(o=0;o<T;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(I&&o==T-1)});h.length=0,this.h.g+=n,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=u==200,Pa(this.i,this.u,this.A,this.l,this.R,lt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var j,et=this.g;if((j=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(j)){var F=j;break e}}F=null}if(u=F)se(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_r(this,u);else{this.o=!1,this.s=3,mt(12),Qt(this),Ce(this);break t}}if(this.P){u=!0;let vt;for(;!this.J&&this.C<V.length;)if(vt=Ca(this,V),vt==pr){lt==4&&(this.s=4,mt(14),u=!1),se(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Di){this.s=4,mt(15),se(this.i,this.l,V,"[Invalid Chunk]"),u=!1;break}else se(this.i,this.l,vt,null),_r(this,vt);if(bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||V.length!=0||this.h.h||(this.s=1,mt(16),u=!1),this.o=this.o&&u,!u)se(this.i,this.l,V,"[Invalid Chunked Response]"),Qt(this),Ce(this);else if(0<V.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ir(ut),ut.M=!0,mt(11))}}else se(this.i,this.l,V,null),_r(this,V);lt==4&&Qt(this),this.o&&!this.J&&(lt==4?ss(this.j,this):(this.o=!1,cn(this)))}else Ka(this.g),u==400&&0<V.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Qt(this),Ce(this)}}}catch{}finally{}};function bi(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Ca(n,o){var u=n.C,h=o.indexOf(`
`,u);return h==-1?pr:(u=Number(o.substring(u,h)),isNaN(u)?Di:(h+=1,h+u>o.length?pr:(o=o.slice(h,h+u),n.C=h+u,o)))}Ft.prototype.cancel=function(){this.J=!0,Qt(this)};function cn(n){n.S=Date.now()+n.I,ki(n,n.I)}function ki(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ve(S(n.ba,n),o)}function gr(n){n.B&&(c.clearTimeout(n.B),n.B=null)}Ft.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(Va(this.i,this.A),this.L!=2&&(Pe(),mt(17)),Qt(this),this.s=2,Ce(this)):ki(this,this.S-n)};function Ce(n){n.j.G==0||n.J||ss(n.j,n)}function Qt(n){gr(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,vi(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function _r(n,o){try{var u=n.j;if(u.G!=0&&(u.g==n||yr(u.h,n))){if(!n.K&&yr(u.h,n)&&u.G==3){try{var h=u.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<n.F)Tn(u),yn(u);else break t;Ar(u),mt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ve(S(u.Za,u),6e3));if(1>=Mi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ht(u,11)}else if((n.K||u.g==n)&&Tn(u),!$(o))for(T=u.Da.g.parse(o),o=0;o<T.length;o++){let F=T[o];if(u.T=F[0],F=F[1],u.G==2)if(F[0]=="c"){u.K=F[1],u.ia=F[2];const ut=F[3];ut!=null&&(u.la=ut,u.j.info("VER="+u.la));const lt=F[4];lt!=null&&(u.Aa=lt,u.j.info("SVER="+u.Aa));const ue=F[5];ue!=null&&typeof ue=="number"&&0<ue&&(h=1.5*ue,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const vt=n.g;if(vt){const An=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var I=h.h;I.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Er(I,I.h),I.h=null))}if(h.D){const wr=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;wr&&(h.ya=wr,q(h.I,h.D,wr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-n.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var V=n;if(h.qa=us(h,h.J?h.ia:null,h.W),V.K){Li(h.h,V);var j=V,et=h.L;et&&(j.I=et),j.B&&(gr(j),cn(j)),h.g=V}else rs(h);0<u.i.length&&En(u)}else F[0]!="stop"&&F[0]!="close"||Ht(u,7);else u.G==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?Ht(u,7):vr(u):F[0]!="noop"&&u.l&&u.l.ta(F),u.v=0)}}Pe(4)}catch{}}var Da=class{constructor(n,o){this.g=n,this.map=o}};function Oi(n){this.l=n||10,c.PerformanceNavigationTiming?(n=c.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xi(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Mi(n){return n.h?1:n.g?n.g.size:0}function yr(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function Er(n,o){n.g?n.g.add(o):n.h=o}function Li(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}Oi.prototype.cancel=function(){if(this.i=Fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Fi(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const u of n.g.values())o=o.concat(u.D);return o}return M(n.i)}function Na(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(d(n)){for(var o=[],u=n.length,h=0;h<u;h++)o.push(n[h]);return o}o=[],u=0;for(h in n)o[u++]=n[h];return o}function ba(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(d(n)||typeof n=="string"){var o=[];n=n.length;for(var u=0;u<n;u++)o.push(u);return o}o=[],u=0;for(const h in n)o[u++]=h;return o}}}function Ui(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(d(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var u=ba(n),h=Na(n),T=h.length,I=0;I<T;I++)o.call(void 0,h[I],u&&u[I],n)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ka(n,o){if(n){n=n.split("&");for(var u=0;u<n.length;u++){var h=n[u].indexOf("="),T=null;if(0<=h){var I=n[u].substring(0,h);T=n[u].substring(h+1)}else I=n[u];o(I,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Wt(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof Wt){this.h=n.h,fn(this,n.j),this.o=n.o,this.g=n.g,dn(this,n.s),this.l=n.l;var o=n.i,u=new be;u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),Bi(this,u),this.m=n.m}else n&&(o=String(n).match(ji))?(this.h=!1,fn(this,o[1]||"",!0),this.o=De(o[2]||""),this.g=De(o[3]||"",!0),dn(this,o[4]),this.l=De(o[5]||"",!0),Bi(this,o[6]||"",!0),this.m=De(o[7]||"")):(this.h=!1,this.i=new be(null,this.h))}Wt.prototype.toString=function(){var n=[],o=this.j;o&&n.push(Ne(o,qi,!0),":");var u=this.g;return(u||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Ne(o,qi,!0),"@"),n.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&n.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&n.push("/"),n.push(Ne(u,u.charAt(0)=="/"?Ma:xa,!0))),(u=this.i.toString())&&n.push("?",u),(u=this.m)&&n.push("#",Ne(u,Fa)),n.join("")};function Dt(n){return new Wt(n)}function fn(n,o,u){n.j=u?De(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function dn(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function Bi(n,o,u){o instanceof be?(n.i=o,Ua(n.i,n.h)):(u||(o=Ne(o,La)),n.i=new be(o,n.h))}function q(n,o,u){n.i.set(o,u)}function pn(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function De(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ne(n,o,u){return typeof n=="string"?(n=encodeURI(n).replace(o,Oa),u&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Oa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var qi=/[#\/\?@]/g,xa=/[#\?:]/g,Ma=/[#\?]/g,La=/[#\?@]/g,Fa=/#/g;function be(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Ut(n){n.g||(n.g=new Map,n.h=0,n.i&&ka(n.i,function(o,u){n.add(decodeURIComponent(o.replace(/\+/g," ")),u)}))}i=be.prototype,i.add=function(n,o){Ut(this),this.i=null,n=oe(this,n);var u=this.g.get(n);return u||this.g.set(n,u=[]),u.push(o),this.h+=1,this};function $i(n,o){Ut(n),o=oe(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function zi(n,o){return Ut(n),o=oe(n,o),n.g.has(o)}i.forEach=function(n,o){Ut(this),this.g.forEach(function(u,h){u.forEach(function(T){n.call(o,T,h,this)},this)},this)},i.na=function(){Ut(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),u=[];for(let h=0;h<o.length;h++){const T=n[h];for(let I=0;I<T.length;I++)u.push(o[h])}return u},i.V=function(n){Ut(this);let o=[];if(typeof n=="string")zi(this,n)&&(o=o.concat(this.g.get(oe(this,n))));else{n=Array.from(this.g.values());for(let u=0;u<n.length;u++)o=o.concat(n[u])}return o},i.set=function(n,o){return Ut(this),this.i=null,n=oe(this,n),zi(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},i.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function Gi(n,o,u){$i(n,o),0<u.length&&(n.i=null,n.g.set(oe(n,o),M(u)),n.h+=u.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var u=0;u<o.length;u++){var h=o[u];const I=encodeURIComponent(String(h)),V=this.V(h);for(h=0;h<V.length;h++){var T=I;V[h]!==""&&(T+="="+encodeURIComponent(String(V[h]))),n.push(T)}}return this.i=n.join("&")};function oe(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Ua(n,o){o&&!n.j&&(Ut(n),n.i=null,n.g.forEach(function(u,h){var T=h.toLowerCase();h!=T&&($i(this,h),Gi(this,T,u))},n)),n.j=o}function ja(n,o){const u=new Se;if(c.Image){const h=new Image;h.onload=b(jt,u,"TestLoadImage: loaded",!0,o,h),h.onerror=b(jt,u,"TestLoadImage: error",!1,o,h),h.onabort=b(jt,u,"TestLoadImage: abort",!1,o,h),h.ontimeout=b(jt,u,"TestLoadImage: timeout",!1,o,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Ba(n,o){const u=new Se,h=new AbortController,T=setTimeout(()=>{h.abort(),jt(u,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(I=>{clearTimeout(T),I.ok?jt(u,"TestPingServer: ok",!0,o):jt(u,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(T),jt(u,"TestPingServer: error",!1,o)})}function jt(n,o,u,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(u)}catch{}}function qa(){this.g=new wa}function $a(n,o,u){const h=u||"";try{Ui(n,function(T,I){let V=T;g(T)&&(V=lr(T)),o.push(h+I+"="+encodeURIComponent(V))})}catch(T){throw o.push(h+"type="+encodeURIComponent("_badmap")),T}}function mn(n){this.l=n.Ub||null,this.j=n.eb||!1}D(mn,hr),mn.prototype.g=function(){return new gn(this.l,this.j)},mn.prototype.i=(function(n){return function(){return n}})({});function gn(n,o){at.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(gn,at),i=gn.prototype,i.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Oe(this)},i.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||c).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=0},i.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Oe(this)),this.g&&(this.readyState=3,Oe(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ki(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ki(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}i.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?ke(this):Oe(this),this.readyState==3&&Ki(this)}},i.Ra=function(n){this.g&&(this.response=this.responseText=n,ke(this))},i.Qa=function(n){this.g&&(this.response=n,ke(this))},i.ga=function(){this.g&&ke(this)};function ke(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Oe(n)}i.setRequestHeader=function(n,o){this.u.append(n,o)},i.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var u=o.next();!u.done;)u=u.value,n.push(u[0]+": "+u[1]),u=o.next();return n.join(`\r
`)};function Oe(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Qi(n){let o="";return Et(n,function(u,h){o+=h,o+=":",o+=u,o+=`\r
`}),o}function Tr(n,o,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=Qi(u),typeof n=="string"?u!=null&&encodeURIComponent(String(u)):q(n,o,u))}function H(n){at.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(H,at);var za=/^https?$/i,Ga=["POST","PUT"];i=H.prototype,i.Ha=function(n){this.J=n},i.ea=function(n,o,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?Ai(this.o):Ai(dr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(I){Wi(this,I);return}if(n=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)u.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())u.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(I=>I.toLowerCase()=="content-type"),T=c.FormData&&n instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ga,o,void 0))||h||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,V]of u)this.g.setRequestHeader(I,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ji(this),this.u=!0,this.g.send(n),this.u=!1}catch(I){Wi(this,I)}};function Wi(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,Hi(n),_n(n)}function Hi(n){n.A||(n.A=!0,pt(n,"complete"),pt(n,"error"))}i.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,pt(this,"complete"),pt(this,"abort"),_n(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),H.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Xi(this):this.bb())},i.bb=function(){Xi(this)};function Xi(n){if(n.h&&typeof l<"u"&&(!n.v[1]||Nt(n)!=4||n.Z()!=2)){if(n.u&&Nt(n)==4)yi(n.Ea,0,n);else if(pt(n,"readystatechange"),Nt(n)==4){n.h=!1;try{const V=n.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var u;if(!(u=o)){var h;if(h=V===0){var T=String(n.D).match(ji)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!za.test(T?T.toLowerCase():"")}u=h}if(u)pt(n,"complete"),pt(n,"success");else{n.m=6;try{var I=2<Nt(n)?n.g.statusText:""}catch{I=""}n.l=I+" ["+n.Z()+"]",Hi(n)}}finally{_n(n)}}}}function _n(n,o){if(n.g){Ji(n);const u=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||pt(n,"ready");try{u.onreadystatechange=h}catch{}}}function Ji(n){n.I&&(c.clearTimeout(n.I),n.I=null)}i.isActive=function(){return!!this.g};function Nt(n){return n.g?n.g.readyState:0}i.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Ia(o)}};function Yi(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ka(n){const o={};n=(n.g&&2<=Nt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if($(n[h]))continue;var u=y(n[h]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const I=o[T]||[];o[T]=I,I.push(u)}E(o,function(h){return h.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xe(n,o,u){return u&&u.internalChannelParams&&u.internalChannelParams[n]||o}function Zi(n){this.Aa=0,this.i=[],this.j=new Se,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xe("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xe("baseRetryDelayMs",5e3,n),this.cb=xe("retryDelaySeedMs",1e4,n),this.Wa=xe("forwardChannelMaxRetries",2,n),this.wa=xe("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(n&&n.concurrentRequestLimit),this.Da=new qa,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Zi.prototype,i.la=8,i.G=1,i.connect=function(n,o,u,h){mt(0),this.W=n,this.H=o||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=us(this,null,this.W),En(this)};function vr(n){if(ts(n),n.G==3){var o=n.U++,u=Dt(n.I);if(q(u,"SID",n.K),q(u,"RID",o),q(u,"TYPE","terminate"),Me(n,u),o=new Ft(n,n.j,o),o.L=2,o.v=pn(Dt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(o.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=o.v,u=!0),u||(o.g=ls(o.j,null),o.g.ea(o.v)),o.F=Date.now(),cn(o)}as(n)}function yn(n){n.g&&(Ir(n),n.g.cancel(),n.g=null)}function ts(n){yn(n),n.u&&(c.clearTimeout(n.u),n.u=null),Tn(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&c.clearTimeout(n.s),n.s=null)}function En(n){if(!xi(n.h)&&!n.s){n.s=!0;var o=n.Ga;ve||di(),Ae||(ve(),Ae=!0),er.add(o,n),n.B=0}}function Qa(n,o){return Mi(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=Ve(S(n.Ga,n,o),os(n,n.B)),n.B++,!0)}i.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const T=new Ft(this,this.j,n);let I=this.o;if(this.S&&(I?(I=f(I),_(I,this.S)):I=this.S),this.m!==null||this.O||(T.H=I,I=null),this.P)t:{for(var o=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=u;break t}if(o===4096||u===this.i.length-1){o=u+1;break t}}o=1e3}else o=1e3;o=ns(this,T,o),u=Dt(this.I),q(u,"RID",n),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),Me(this,u),I&&(this.O?o="headers="+encodeURIComponent(String(Qi(I)))+"&"+o:this.m&&Tr(u,this.m,I)),Er(this.h,T),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",o),q(u,"SID","null"),T.T=!0,mr(T,u,null)):mr(T,u,o),this.G=2}}else this.G==3&&(n?es(this,n):this.i.length==0||xi(this.h)||es(this))};function es(n,o){var u;o?u=o.l:u=n.U++;const h=Dt(n.I);q(h,"SID",n.K),q(h,"RID",u),q(h,"AID",n.T),Me(n,h),n.m&&n.o&&Tr(h,n.m,n.o),u=new Ft(n,n.j,u,n.B+1),n.m===null&&(u.H=n.o),o&&(n.i=o.D.concat(n.i)),o=ns(n,u,1e3),u.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),Er(n.h,u),mr(u,h,o)}function Me(n,o){n.H&&Et(n.H,function(u,h){q(o,h,u)}),n.l&&Ui({},function(u,h){q(o,h,u)})}function ns(n,o,u){u=Math.min(n.i.length,u);var h=n.l?S(n.l.Na,n.l,n):null;t:{var T=n.i;let I=-1;for(;;){const V=["count="+u];I==-1?0<u?(I=T[0].g,V.push("ofs="+I)):I=0:V.push("ofs="+I);let j=!0;for(let et=0;et<u;et++){let F=T[et].g;const ut=T[et].map;if(F-=I,0>F)I=Math.max(0,T[et].g-100),j=!1;else try{$a(ut,V,"req"+F+"_")}catch{h&&h(ut)}}if(j){h=V.join("&");break t}}}return n=n.i.splice(0,u),o.D=n,h}function rs(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;ve||di(),Ae||(ve(),Ae=!0),er.add(o,n),n.v=0}}function Ar(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=Ve(S(n.Fa,n),os(n,n.v)),n.v++,!0)}i.Fa=function(){if(this.u=null,is(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=Ve(S(this.ab,this),n)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),yn(this),is(this))};function Ir(n){n.A!=null&&(c.clearTimeout(n.A),n.A=null)}function is(n){n.g=new Ft(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=Dt(n.qa);q(o,"RID","rpc"),q(o,"SID",n.K),q(o,"AID",n.T),q(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&q(o,"TO",n.ja),q(o,"TYPE","xmlhttp"),Me(n,o),n.m&&n.o&&Tr(o,n.m,n.o),n.L&&(n.g.I=n.L);var u=n.g;n=n.ia,u.L=1,u.v=pn(Dt(o)),u.m=null,u.P=!0,Ni(u,n)}i.Za=function(){this.C!=null&&(this.C=null,yn(this),Ar(this),mt(19))};function Tn(n){n.C!=null&&(c.clearTimeout(n.C),n.C=null)}function ss(n,o){var u=null;if(n.g==o){Tn(n),Ir(n),n.g=null;var h=2}else if(yr(n.h,o))u=o.D,Li(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){u=o.m?o.m.length:0,o=Date.now()-o.F;var T=n.B;h=un(),pt(h,new Vi(h,u)),En(n)}else rs(n);else if(T=o.s,T==3||T==0&&0<o.X||!(h==1&&Qa(n,o)||h==2&&Ar(n)))switch(u&&0<u.length&&(o=n.h,o.i=o.i.concat(u)),T){case 1:Ht(n,5);break;case 4:Ht(n,10);break;case 3:Ht(n,6);break;default:Ht(n,2)}}}function os(n,o){let u=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(u*=2),u*o}function Ht(n,o){if(n.j.info("Error code "+o),o==2){var u=S(n.fb,n),h=n.Xa;const T=!h;h=new Wt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fn(h,"https"),pn(h),T?ja(h.toString(),u):Ba(h.toString(),u)}else mt(2);n.G=0,n.l&&n.l.sa(o),as(n),ts(n)}i.fb=function(n){n?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function as(n){if(n.G=0,n.ka=[],n.l){const o=Fi(n.h);(o.length!=0||n.i.length!=0)&&(k(n.ka,o),k(n.ka,n.i),n.h.i.length=0,M(n.i),n.i.length=0),n.l.ra()}}function us(n,o,u){var h=u instanceof Wt?Dt(u):new Wt(u);if(h.g!="")o&&(h.g=o+"."+h.g),dn(h,h.s);else{var T=c.location;h=T.protocol,o=o?o+"."+T.hostname:T.hostname,T=+T.port;var I=new Wt(null);h&&fn(I,h),o&&(I.g=o),T&&dn(I,T),u&&(I.l=u),h=I}return u=n.D,o=n.ya,u&&o&&q(h,u,o),q(h,"VER",n.la),Me(n,h),h}function ls(n,o,u){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new H(new mn({eb:u})):new H(n.pa),o.Ha(n.J),o}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function hs(){}i=hs.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function vn(){}vn.prototype.g=function(n,o){return new Tt(n,o)};function Tt(n,o){at.call(this),this.g=new Zi(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!$(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!$(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new ae(this)}D(Tt,at),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){vr(this.g)},Tt.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var u={};u.__data__=n,n=u}else this.u&&(u={},u.__data__=lr(n),n=u);o.i.push(new Da(o.Ya++,n)),o.G==3&&En(o)},Tt.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,Tt.aa.N.call(this)};function cs(n){cr.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){t:{for(const u in o){n=u;break t}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}D(cs,cr);function fs(){fr.call(this),this.status=1}D(fs,fr);function ae(n){this.g=n}D(ae,hs),ae.prototype.ua=function(){pt(this.g,"a")},ae.prototype.ta=function(n){pt(this.g,new cs(n))},ae.prototype.sa=function(n){pt(this.g,new fs)},ae.prototype.ra=function(){pt(this.g,"b")},vn.prototype.createWebChannel=vn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,oo=function(){return new vn},so=function(){return un()},io=Kt,Dr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Cn=ln,Si.COMPLETE="complete",ro=Si,Ii.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",at.prototype.listen=at.prototype.K,Fe=Ii,H.prototype.listenOnce=H.prototype.L,H.prototype.getLastError=H.prototype.Ka,H.prototype.getLastErrorCode=H.prototype.Ba,H.prototype.getStatus=H.prototype.Z,H.prototype.getResponseJson=H.prototype.Oa,H.prototype.getResponseText=H.prototype.oa,H.prototype.send=H.prototype.ea,H.prototype.setWithCredentials=H.prototype.Ha,no=H}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const ps="@firebase/firestore",ms="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Wa("@firebase/firestore");function le(){return Zt.logLevel}function C(i,...t){if(Zt.logLevel<=bt.DEBUG){const e=t.map($r);Zt.debug(`Firestore (${ye}): ${i}`,...e)}}function te(i,...t){if(Zt.logLevel<=bt.ERROR){const e=t.map($r);Zt.error(`Firestore (${ye}): ${i}`,...e)}}function Kn(i,...t){if(Zt.logLevel<=bt.WARN){const e=t.map($r);Zt.warn(`Firestore (${ye}): ${i}`,...e)}}function $r(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ao(i,r,e)}function ao(i,t,e){let r=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw te(r),new Error(r)}function X(i,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,i||ao(t,s,r)}function B(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ya{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ct.UNAUTHENTICATED)))}shutdown(){}}class Eu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Tu{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let a=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Jt,t.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const d=a;t.enqueueRetryable((async()=>{await d.promise,await s(this.currentUser)}))},c=d=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Jt)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new uo(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new ct(t)}}class vu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Au{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new vu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iu{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ja(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=a=>{a.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,C("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable((()=>r(a)))};const s=a=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gs(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new gs(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wu(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<e&&(r+=t.charAt(s[a]%62))}return r}}function U(i,t){return i<t?-1:i>t?1:0}function Nr(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const s=i.charAt(r),a=t.charAt(r);if(s!==a)return Rr(s)===Rr(a)?U(s,a):Rr(s)?1:-1}return U(i.length,t.length)}const Ru=55296,Pu=57343;function Rr(i){const t=i.charCodeAt(0);return t>=Ru&&t<=Pu}function de(i,t,e){return i.length===t.length&&i.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const a=Pt.compareSegments(t.get(s),e.get(s));if(a!==0)return a}return U(t.length,e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),s=Pt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):Nr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return qr.fromString(t.substring(4,t.length-2))}}class Q extends Pt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const Vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Pt{construct(t,e,r){return new it(t,e,r)}static isValidIdentifier(t){return Vu.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_s}static keyField(){return new it([_s])}static fromServerFormat(t){const e=[];let r="",s=0;const a=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(r+=c,s++):(a(),s++)}if(a(),l)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(i,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Su(i,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function ys(i){if(!O.isDocumentKey(i))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Es(i){if(O.isDocumentKey(i))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ho(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Gr(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":x(12329,{type:typeof i})}function co(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Gr(i);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(i,t){const e={typeString:i};return t&&(e.value=t),e}function Xe(i,t){if(!ho(i))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const l=i[r];if(s&&typeof l!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&l!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new N(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=-62135596800,vs=1e6;class K{static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*vs);return new K(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ts)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vs}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:K._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Xe(t,K._jsonSchema))return new K(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ts;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}K._jsonSchemaVersion="firestore/timestamp/1.0",K._jsonSchema={type:Y("string",K._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new K(0,0))}static max(){return new G(new K(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=-1;function Cu(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new K(e+1,0):new K(e,r));return new qt(s,O.empty(),t)}function Du(i){return new qt(i.readTime,i.key,Ge)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(G.min(),O.empty(),Ge)}static max(){return new qt(G.max(),O.empty(),Ge)}}function Nu(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(i.documentKey,t.documentKey),e!==0?e:U(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ku{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(i){if(i.code!==P.FAILED_PRECONDITION||i.message!==bu)throw i;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,a=0,l=!1;t.forEach((c=>{++s,c.next((()=>{++a,l&&a===s&&e()}),(d=>r(d)))})),l=!0,a===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,a)=>{r.push(e.call(this,s,a))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const a=t.length,l=new Array(a);let c=0;for(let d=0;d<a;d++){const g=d;e(t[g]).next((A=>{l[g]=A,++c,c===a&&r(l)}),(A=>s(A)))}}))}static doWhile(t,e){return new R(((r,s)=>{const a=()=>{t()===!0?e().next((()=>{a()}),s):r()};a()}))}}function Ou(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Je(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Qr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=-1;function Hr(i){return i==null}function xn(i){return i===0&&1/i==-1/0}function xu(i){return typeof i=="number"&&Number.isInteger(i)&&!xn(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="";function Mu(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=As(t)),t=Lu(i.get(e),t);return As(t)}function Lu(i,t){let e=t;const r=i.length;for(let s=0;s<r;s++){const a=i.charAt(s);switch(a){case"\0":e+="";break;case fo:e+="";break;default:e+=a}}return e}function As(i){return i+fo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function Ee(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function po(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,r,s,a){this.key=t,this.value=e,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=a??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,a){return new nt(t??this.key,e??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const a=r(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,r),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,s,a){return this}insert(t,e,r){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ws(this.data.getIterator())}getIteratorFrom(t){return new ws(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class ws{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new st(it.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Fu("Invalid base64 string: "+a):a}})(t);return new Vt(e)}static fromUint8Array(t){const e=(function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a})(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Uu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(i){if(X(!!i,39018),typeof i=="string"){let t=0;const e=Uu.exec(i);if(X(!!e,46558,{timestamp:i}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pe(i){return typeof i=="string"?Vt.fromBase64String(i):Vt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="server_timestamp",go="__type__",_o="__previous_value__",yo="__local_write_time__";function Xr(i){return(i?.mapValue?.fields||{})[go]?.stringValue===mo}function Jr(i){const t=i.mapValue.fields[_o];return Xr(t)?Jr(t):t}function Mn(i){const t=ee(i.mapValue.fields[yo].timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e,r,s,a,l,c,d,g,A){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=g,this.isUsingEmulator=A}}const Ln="(default)";class Fn{constructor(t,e){this.projectId=t,this.database=e||Ln}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database===Ln}isEqual(t){return t instanceof Fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="__type__",Bu="__max__",Rn={mapValue:{}},To="__vector__",br="value";function ne(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Xr(i)?4:$u(i)?9007199254740991:qu(i)?10:11:x(28295,{value:i})}function St(i,t){if(i===t)return!0;const e=ne(i);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Mn(i).isEqual(Mn(t));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const l=ee(s.timestampValue),c=ee(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos})(i,t);case 5:return i.stringValue===t.stringValue;case 6:return(function(s,a){return pe(s.bytesValue).isEqual(pe(a.bytesValue))})(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return(function(s,a){return rt(s.geoPointValue.latitude)===rt(a.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(a.geoPointValue.longitude)})(i,t);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return rt(s.integerValue)===rt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const l=rt(s.doubleValue),c=rt(a.doubleValue);return l===c?xn(l)===xn(c):isNaN(l)&&isNaN(c)}return!1})(i,t);case 9:return de(i.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return(function(s,a){const l=s.mapValue.fields||{},c=a.mapValue.fields||{};if(Is(l)!==Is(c))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(c[d]===void 0||!St(l[d],c[d])))return!1;return!0})(i,t);default:return x(52216,{left:i})}}function Ke(i,t){return(i.values||[]).find((e=>St(e,t)))!==void 0}function me(i,t){if(i===t)return 0;const e=ne(i),r=ne(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(i.booleanValue,t.booleanValue);case 2:return(function(a,l){const c=rt(a.integerValue||a.doubleValue),d=rt(l.integerValue||l.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(i,t);case 3:return Rs(i.timestampValue,t.timestampValue);case 4:return Rs(Mn(i),Mn(t));case 5:return Nr(i.stringValue,t.stringValue);case 6:return(function(a,l){const c=pe(a),d=pe(l);return c.compareTo(d)})(i.bytesValue,t.bytesValue);case 7:return(function(a,l){const c=a.split("/"),d=l.split("/");for(let g=0;g<c.length&&g<d.length;g++){const A=U(c[g],d[g]);if(A!==0)return A}return U(c.length,d.length)})(i.referenceValue,t.referenceValue);case 8:return(function(a,l){const c=U(rt(a.latitude),rt(l.latitude));return c!==0?c:U(rt(a.longitude),rt(l.longitude))})(i.geoPointValue,t.geoPointValue);case 9:return Ps(i.arrayValue,t.arrayValue);case 10:return(function(a,l){const c=a.fields||{},d=l.fields||{},g=c[br]?.arrayValue,A=d[br]?.arrayValue,w=U(g?.values?.length||0,A?.values?.length||0);return w!==0?w:Ps(g,A)})(i.mapValue,t.mapValue);case 11:return(function(a,l){if(a===Rn.mapValue&&l===Rn.mapValue)return 0;if(a===Rn.mapValue)return 1;if(l===Rn.mapValue)return-1;const c=a.fields||{},d=Object.keys(c),g=l.fields||{},A=Object.keys(g);d.sort(),A.sort();for(let w=0;w<d.length&&w<A.length;++w){const S=Nr(d[w],A[w]);if(S!==0)return S;const b=me(c[d[w]],g[A[w]]);if(b!==0)return b}return U(d.length,A.length)})(i.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function Rs(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return U(i,t);const e=ee(i),r=ee(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Ps(i,t){const e=i.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const a=me(e[s],r[s]);if(a)return a}return U(e.length,r.length)}function ge(i){return kr(i)}function kr(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(e){return pe(e).toBase64()})(i.bytesValue):"referenceValue"in i?(function(e){return O.fromName(e).toString()})(i.referenceValue):"geoPointValue"in i?(function(e){return`geo(${e.latitude},${e.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(e){let r="[",s=!0;for(const a of e.values||[])s?s=!1:r+=",",r+=kr(a);return r+"]"})(i.arrayValue):"mapValue"in i?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const l of r)a?a=!1:s+=",",s+=`${l}:${kr(e.fields[l])}`;return s+"}"})(i.mapValue):x(61005,{value:i})}function Dn(i){switch(ne(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Jr(i);return t?16+Dn(t):16;case 5:return 2*i.stringValue.length;case 6:return pe(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Dn(a)),0)})(i.arrayValue);case 10:case 11:return(function(r){let s=0;return Ee(r.fields,((a,l)=>{s+=a.length+Dn(l)})),s})(i.mapValue);default:throw x(13486,{value:i})}}function Or(i){return!!i&&"integerValue"in i}function Yr(i){return!!i&&"arrayValue"in i}function Nn(i){return!!i&&"mapValue"in i}function qu(i){return(i?.mapValue?.fields||{})[Eo]?.stringValue===To}function Ue(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return Ee(i.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Ue(r))),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ue(i.arrayValue.values[e]);return t}return{...i}}function $u(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Bu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Nn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ue(e)}setAll(t){let e=it.emptyPath(),r={},s=[];t.forEach(((l,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=c.popLast()}l?r[c.lastSegment()]=Ue(l):s.push(c.lastSegment())}));const a=this.getFieldsMap(e);this.applyChanges(a,r,s)}delete(t){const e=this.field(t.popLast());Nn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Nn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ee(e,((s,a)=>t[s]=a));for(const s of r)delete t[s]}clone(){return new It(Ue(this.value))}}function vo(i){const t=[];return Ee(i.fields,((e,r)=>{const s=new it([e]);if(Nn(r)){const a=vo(r.mapValue).fields;if(a.length===0)t.push(s);else for(const l of a)t.push(s.child(l))}else t.push(s)})),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,a,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(t){return new At(t,0,G.min(),G.min(),G.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,G.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,G.min(),G.min(),It.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,G.min(),G.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e){this.position=t,this.inclusive=e}}function Vs(i,t,e){let r=0;for(let s=0;s<i.position.length;s++){const a=t[s],l=i.position[s];if(a.field.isKeyField()?r=O.comparator(O.fromName(l.referenceValue),e.key):r=me(l,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ss(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!St(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function zu(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{}class tt extends Ao{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ku(t,e,r):e==="array-contains"?new Hu(t,r):e==="in"?new Xu(t,r):e==="not-in"?new Ju(t,r):e==="array-contains-any"?new Yu(t,r):new tt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Qu(t,r):new Wu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(me(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Ao{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new $t(t,e)}matches(t){return Io(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Io(i){return i.op==="and"}function wo(i){return Gu(i)&&Io(i)}function Gu(i){for(const t of i.filters)if(t instanceof $t)return!1;return!0}function xr(i){if(i instanceof tt)return i.field.canonicalString()+i.op.toString()+ge(i.value);if(wo(i))return i.filters.map((t=>xr(t))).join(",");{const t=i.filters.map((e=>xr(e))).join(",");return`${i.op}(${t})`}}function Ro(i,t){return i instanceof tt?(function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)})(i,t):i instanceof $t?(function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,l,c)=>a&&Ro(l,s.filters[c])),!0):!1})(i,t):void x(19439)}function Po(i){return i instanceof tt?(function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`})(i):i instanceof $t?(function(e){return e.op.toString()+" {"+e.getFilters().map(Po).join(" ,")+"}"})(i):"Filter"}class Ku extends tt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qu extends tt{constructor(t,e){super(t,"in",e),this.keys=Vo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Wu extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Vo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Vo(i,t){return(t.arrayValue?.values||[]).map((e=>O.fromName(e.referenceValue)))}class Hu extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yr(e)&&Ke(e.arrayValue,this.value)}}class Xu extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ke(this.value.arrayValue,e)}}class Ju extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ke(this.value.arrayValue,e)}}class Yu extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Ke(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e=null,r=[],s=[],a=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function Cs(i,t=null,e=[],r=[],s=null,a=null,l=null){return new Zu(i,t,e,r,s,a,l)}function Zr(i){const t=B(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>xr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>ge(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>ge(r))).join(",")),t.Te=e}return t.Te}function ti(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!zu(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Ro(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Ss(i.startAt,t.startAt)&&Ss(i.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e=null,r=[],s=[],a=null,l="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tl(i,t,e,r,s,a,l,c){return new Qn(i,t,e,r,s,a,l,c)}function el(i){return new Qn(i)}function Ds(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function nl(i){return i.collectionGroup!==null}function je(i){const t=B(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new st(it.comparator);return l.filters.forEach((d=>{d.getFlattenedFilters().forEach((g=>{g.isInequality()&&(c=c.add(g.field))}))})),c})(t).forEach((a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new jn(a,r))})),e.has(it.keyField().canonicalString())||t.Ie.push(new jn(it.keyField(),r))}return t.Ie}function Yt(i){const t=B(i);return t.Ee||(t.Ee=rl(t,je(i))),t.Ee}function rl(i,t){if(i.limitType==="F")return Cs(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new jn(s.field,a)}));const e=i.endAt?new Un(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new Un(i.startAt.position,i.startAt.inclusive):null;return Cs(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function Mr(i,t,e){return new Qn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function So(i,t){return ti(Yt(i),Yt(t))&&i.limitType===t.limitType}function Co(i){return`${Zr(Yt(i))}|lt:${i.limitType}`}function Le(i){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Po(s))).join(", ")}]`),Hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>ge(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>ge(s))).join(",")),`Target(${r})`})(Yt(i))}; limitType=${i.limitType})`}function ei(i,t){return t.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):O.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(i,t)&&(function(r,s){for(const a of je(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(i,t)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(i,t)&&(function(r,s){return!(r.startAt&&!(function(l,c,d){const g=Vs(l,c,d);return l.inclusive?g<=0:g<0})(r.startAt,je(r),s)||r.endAt&&!(function(l,c,d){const g=Vs(l,c,d);return l.inclusive?g>=0:g>0})(r.endAt,je(r),s))})(i,t)}function il(i){return(t,e)=>{let r=!1;for(const s of je(i)){const a=sl(s,t,e);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function sl(i,t,e){const r=i.field.isKeyField()?O.comparator(t.key,e.key):(function(a,l,c){const d=l.data.field(a),g=c.data.field(a);return d!==null&&g!==null?me(d,g):x(42886)})(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,((e,r)=>{for(const[s,a]of r)t(s,a)}))}isEmpty(){return po(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new _t(O.comparator);function Bn(){return ol}const Do=new _t(O.comparator);function Pn(...i){let t=Do;for(const e of i)t=t.insert(e.key,e);return t}function No(i){let t=Do;return i.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Xt(){return Be()}function bo(){return Be()}function Be(){return new re((i=>i.toString()),((i,t)=>i.isEqual(t)))}const al=new _t(O.comparator),ul=new st(O.comparator);function ft(...i){let t=ul;for(const e of i)t=t.add(e);return t}const ll=new st(U);function hl(){return ll}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xn(t)?"-0":t}}function ko(i){return{integerValue:""+i}}function cl(i,t){return xu(t)?ko(t):ni(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this._=void 0}}function fl(i,t,e){return i instanceof Qe?(function(s,a){const l={fields:{[go]:{stringValue:mo},[yo]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Xr(a)&&(a=Jr(a)),a&&(l.fields[_o]=a),{mapValue:l}})(e,t):i instanceof We?xo(i,t):i instanceof He?Mo(i,t):(function(s,a){const l=Oo(s,a),c=Ns(l)+Ns(s.Ae);return Or(l)&&Or(s.Ae)?ko(c):ni(s.serializer,c)})(i,t)}function dl(i,t,e){return i instanceof We?xo(i,t):i instanceof He?Mo(i,t):e}function Oo(i,t){return i instanceof qn?(function(r){return Or(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(t)?t:{integerValue:0}:null}class Qe extends Wn{}class We extends Wn{constructor(t){super(),this.elements=t}}function xo(i,t){const e=Lo(t);for(const r of i.elements)e.some((s=>St(s,r)))||e.push(r);return{arrayValue:{values:e}}}class He extends Wn{constructor(t){super(),this.elements=t}}function Mo(i,t){let e=Lo(t);for(const r of i.elements)e=e.filter((s=>!St(s,r)));return{arrayValue:{values:e}}}class qn extends Wn{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ns(i){return rt(i.integerValue||i.doubleValue)}function Lo(i){return Yr(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.field=t,this.transform=e}}function ml(i,t){return i.field.isEqual(t.field)&&(function(r,s){return r instanceof We&&s instanceof We||r instanceof He&&s instanceof He?de(r.elements,s.elements,St):r instanceof qn&&s instanceof qn?St(r.Ae,s.Ae):r instanceof Qe&&s instanceof Qe})(i.transform,t.transform)}class gl{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bn(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Hn{}function Fo(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new jo(i.key,kt.none()):new Ye(i.key,i.data,kt.none());{const e=i.data,r=It.empty();let s=new st(it.comparator);for(let a of t.fields)if(!s.has(a)){let l=e.field(a);l===null&&a.length>1&&(a=a.popLast(),l=e.field(a)),l===null?r.delete(a):r.set(a,l),s=s.add(a)}return new ie(i.key,r,new Rt(s.toArray()),kt.none())}}function _l(i,t,e){i instanceof Ye?(function(s,a,l){const c=s.value.clone(),d=ks(s.fieldTransforms,a,l.transformResults);c.setAll(d),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()})(i,t,e):i instanceof ie?(function(s,a,l){if(!bn(s.precondition,a))return void a.convertToUnknownDocument(l.version);const c=ks(s.fieldTransforms,a,l.transformResults),d=a.data;d.setAll(Uo(s)),d.setAll(c),a.convertToFoundDocument(l.version,d).setHasCommittedMutations()})(i,t,e):(function(s,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()})(0,t,e)}function qe(i,t,e,r){return i instanceof Ye?(function(a,l,c,d){if(!bn(a.precondition,l))return c;const g=a.value.clone(),A=Os(a.fieldTransforms,d,l);return g.setAll(A),l.convertToFoundDocument(l.version,g).setHasLocalMutations(),null})(i,t,e,r):i instanceof ie?(function(a,l,c,d){if(!bn(a.precondition,l))return c;const g=Os(a.fieldTransforms,d,l),A=l.data;return A.setAll(Uo(a)),A.setAll(g),l.convertToFoundDocument(l.version,A).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(i,t,e,r):(function(a,l,c){return bn(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c})(i,t,e)}function yl(i,t){let e=null;for(const r of i.fieldTransforms){const s=t.data.field(r.field),a=Oo(r.transform,s||null);a!=null&&(e===null&&(e=It.empty()),e.set(r.field,a))}return e||null}function bs(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&de(r,s,((a,l)=>ml(a,l)))})(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class Ye extends Hn{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ie extends Hn{constructor(t,e,r,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Uo(i){const t=new Map;return i.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}})),t}function ks(i,t,e){const r=new Map;X(i.length===e.length,32656,{Re:e.length,Ve:i.length});for(let s=0;s<e.length;s++){const a=i[s],l=a.transform,c=t.data.field(a.field);r.set(a.field,dl(l,c,e[s]))}return r}function Os(i,t,e){const r=new Map;for(const s of i){const a=s.transform,l=e.data.field(s.field);r.set(s.field,fl(a,l,t))}return r}class jo extends Hn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class El extends Hn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&_l(a,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=bo();return this.mutations.forEach((s=>{const a=t.get(s.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=e.has(s.key)?null:c;const d=Fo(l,c);d!==null&&r.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(G.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ft())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,((e,r)=>bs(e,r)))&&de(this.baseMutations,t.baseMutations,((e,r)=>bs(e,r)))}}class ri{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){X(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return al})();const a=t.mutations;for(let l=0;l<a.length;l++)s=s.insert(a[l].key,r[l].version);return new ri(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,L;function Al(i){switch(i){case P.OK:return x(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return x(15467,{code:i})}}function Il(i){if(i===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(i){case J.OK:return P.OK;case J.CANCELLED:return P.CANCELLED;case J.UNKNOWN:return P.UNKNOWN;case J.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case J.INTERNAL:return P.INTERNAL;case J.UNAVAILABLE:return P.UNAVAILABLE;case J.UNAUTHENTICATED:return P.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case J.NOT_FOUND:return P.NOT_FOUND;case J.ALREADY_EXISTS:return P.ALREADY_EXISTS;case J.PERMISSION_DENIED:return P.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case J.ABORTED:return P.ABORTED;case J.OUT_OF_RANGE:return P.OUT_OF_RANGE;case J.UNIMPLEMENTED:return P.UNIMPLEMENTED;case J.DATA_LOSS:return P.DATA_LOSS;default:return x(39323,{code:i})}}(L=J||(J={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new qr([4294967295,4294967295],0);class wl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Lr(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rl(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function Pl(i,t){return Lr(i,t.toTimestamp())}function ce(i){return X(!!i,49232),G.fromTimestamp((function(e){const r=ee(e);return new K(r.seconds,r.nanos)})(i))}function Bo(i,t){return Fr(i,t).canonicalString()}function Fr(i,t){const e=(function(s){return new Q(["projects",s.projectId,"databases",s.database])})(i).child("documents");return t===void 0?e:e.child(t)}function Vl(i){const t=Q.fromString(i);return X(xl(t),10190,{key:t.toString()}),t}function Ur(i,t){return Bo(i.databaseId,t.path)}function Sl(i){const t=Vl(i);return t.length===4?Q.emptyPath():Dl(t)}function Cl(i){return new Q(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Dl(i){return X(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function xs(i,t,e){return{name:Ur(i,t),fields:e.value.mapValue.fields}}function Nl(i,t){let e;if(t instanceof Ye)e={update:xs(i,t.key,t.value)};else if(t instanceof jo)e={delete:Ur(i,t.key)};else if(t instanceof ie)e={update:xs(i,t.key,t.data),updateMask:Ol(t.fieldMask)};else{if(!(t instanceof El))return x(16599,{Vt:t.type});e={verify:Ur(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(a,l){const c=l.transform;if(c instanceof Qe)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof We)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof He)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qn)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw x(20930,{transform:l.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:Pl(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:x(27497)})(i,t.precondition)),e}function bl(i,t){return i&&i.length>0?(X(t!==void 0,14353),i.map((e=>(function(s,a){let l=s.updateTime?ce(s.updateTime):ce(a);return l.isEqual(G.min())&&(l=ce(a)),new gl(l,s.transformResults||[])})(e,t)))):[]}function kl(i){let t=Sl(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1,65062);const A=e.from[0];A.allDescendants?s=A.collectionId:t=t.child(A.collectionId)}let a=[];e.where&&(a=(function(w){const S=qo(w);return S instanceof $t&&wo(S)?S.getFilters():[S]})(e.where));let l=[];e.orderBy&&(l=(function(w){return w.map((S=>(function(D){return new jn(he(D.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(S)))})(e.orderBy));let c=null;e.limit&&(c=(function(w){let S;return S=typeof w=="object"?w.value:w,Hr(S)?null:S})(e.limit));let d=null;e.startAt&&(d=(function(w){const S=!!w.before,b=w.values||[];return new Un(b,S)})(e.startAt));let g=null;return e.endAt&&(g=(function(w){const S=!w.before,b=w.values||[];return new Un(b,S)})(e.endAt)),tl(t,s,l,a,c,"F",d,g)}function qo(i){return i.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=he(e.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=he(e.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=he(e.unaryFilter.field);return tt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=he(e.unaryFilter.field);return tt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(i):i.fieldFilter!==void 0?(function(e){return tt.create(he(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(e){return $t.create(e.compositeFilter.filters.map((r=>qo(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(e.compositeFilter.op))})(i):x(30097,{filter:i})}function he(i){return it.fromServerFormat(i.fieldPath)}function Ol(i){const t=[];return i.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function xl(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t){this.yt=t}}function Ll(i){const t=kl({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Mr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.Cn=new Ul}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(qt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Ul{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new st(Q.comparator),a=!s.has(r);return this.index[e]=s.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new st(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$o=41943040;class gt{static withCacheSize(t){return new gt(t,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt($o,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new _e(0)}static cr(){return new _e(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="LruGarbageCollector",jl=1048576;function Fs([i,t],[e,r]){const s=U(i,e);return s===0?U(t,r):s}class Bl{constructor(t){this.Ir=t,this.buffer=new st(Fs),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Fs(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ql{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){C(Ls,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Je(e)?C(Ls,"Ignoring IndexedDB error during garbage collection: ",e):await Kr(e)}await this.Vr(3e5)}))}}class $l{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Qr.ce);const r=new Bl(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ms)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ms):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,a,l,c,d,g;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,l=Date.now(),this.nthSequenceNumber(t,s)))).next((w=>(r=w,c=Date.now(),this.removeTargets(t,r,e)))).next((w=>(a=w,d=Date.now(),this.removeOrphanedDocuments(t,r)))).next((w=>(g=Date.now(),le()<=bt.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-A}ms
	Determined least recently used ${s} in `+(c-l)+`ms
	Removed ${a} targets in `+(d-c)+`ms
	Removed ${w} documents in `+(g-d)+`ms
Total Duration: ${g-A}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function zl(i,t){return new $l(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.changes=new re((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&qe(r.mutation,s,Rt.empty(),K.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,ft()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=ft()){const s=Xt();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((a=>{let l=Pn();return a.forEach(((c,d)=>{l=l.insert(c,d.overlayedDocument)})),l}))))}getOverlayedDocuments(t,e){const r=Xt();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,ft())))}populateOverlays(t,e,r){const s=[];return r.forEach((a=>{e.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(t,s).next((a=>{a.forEach(((l,c)=>{e.set(l,c)}))}))}computeViews(t,e,r,s){let a=Bn();const l=Be(),c=(function(){return Be()})();return e.forEach(((d,g)=>{const A=r.get(g.key);s.has(g.key)&&(A===void 0||A.mutation instanceof ie)?a=a.insert(g.key,g):A!==void 0?(l.set(g.key,A.mutation.getFieldMask()),qe(A.mutation,g,A.mutation.getFieldMask(),K.now())):l.set(g.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,a).next((d=>(d.forEach(((g,A)=>l.set(g,A))),e.forEach(((g,A)=>c.set(g,new Kl(A,l.get(g)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=Be();let s=new _t(((l,c)=>l-c)),a=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((l=>{for(const c of l)c.keys().forEach((d=>{const g=e.get(d);if(g===null)return;let A=r.get(d)||Rt.empty();A=c.applyToLocalView(g,A),r.set(d,A);const w=(s.get(c.batchId)||ft()).add(d);s=s.insert(c.batchId,w)}))})).next((()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),g=d.key,A=d.value,w=bo();A.forEach((S=>{if(!a.has(S)){const b=Fo(e.get(S),r.get(S));b!==null&&w.set(S,b),a=a.add(S)}})),l.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):nl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((a=>{const l=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-a.size):R.resolve(Xt());let c=Ge,d=a;return l.next((g=>R.forEach(g,((A,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),a.get(A)?R.resolve():this.remoteDocumentCache.getEntry(t,A).next((S=>{d=d.insert(A,S)}))))).next((()=>this.populateOverlays(t,g,a))).next((()=>this.computeViews(t,d,g,ft()))).next((A=>({batchId:c,changes:No(A)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=Pn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const a=e.collectionGroup;let l=Pn();return this.indexManager.getCollectionParents(t,a).next((c=>R.forEach(c,(d=>{const g=(function(w,S){return new Qn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,d.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,r,s).next((A=>{A.forEach(((w,S)=>{l=l.insert(w,S)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,s)))).next((l=>{a.forEach(((d,g)=>{const A=g.getKey();l.get(A)===null&&(l=l.insert(A,At.newInvalidDocument(A)))}));let c=Pn();return l.forEach(((d,g)=>{const A=a.get(d);A!==void 0&&qe(A.mutation,g,Rt.empty(),K.now()),ei(e,g)&&(c=c.insert(d,g))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ce(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:Ll(s.bundledQuery),readTime:ce(s.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.overlays=new _t(O.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Xt();return R.forEach(e,(s=>this.getOverlay(t,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,a)=>{this.St(t,e,a)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=Xt(),a=e.length+1,l=new O(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const d=c.getNext().value,g=d.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&d.largestBatchId>r&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let a=new _t(((g,A)=>g-A));const l=this.overlays.getIterator();for(;l.hasNext();){const g=l.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let A=a.get(g.largestBatchId);A===null&&(A=Xt(),a=a.insert(g.largestBatchId,A)),A.set(g.getKey(),g)}}const c=Xt(),d=a.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((g,A)=>c.set(g,A))),!(c.size()>=s)););return R.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new vl(e,r));let a=this.qr.get(e);a===void 0&&(a=ft(),this.qr.set(e,a)),this.qr.set(e,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.Qr=new st(Z.$r),this.Ur=new st(Z.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new Z(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new Z(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new O(new Q([])),r=new Z(e,t),s=new Z(e,t+1),a=[];return this.Ur.forEachInRange([r,s],(l=>{this.Gr(l),a.push(l.key)})),a}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new Q([])),r=new Z(e,t),s=new Z(e,t+1);let a=ft();return this.Ur.forEachInRange([r,s],(l=>{a=a.add(l.key)})),a}containsKey(t){const e=new Z(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Z{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||U(t.Yr,e.Yr)}static Kr(t,e){return U(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(Z.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Tl(a,e,r,s);this.mutationQueue.push(l);for(const c of s)this.Zr=this.Zr.add(new Z(c.key,a)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),a=s<0?0:s;return R.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Wr:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Z(e,0),s=new Z(e,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,s],(l=>{const c=this.Xr(l.Yr);a.push(c)})),R.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(U);return e.forEach((s=>{const a=new Z(s,0),l=new Z(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,l],(c=>{r=r.add(c.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let a=r;O.isDocumentKey(a)||(a=a.child(""));const l=new Z(new O(a),0);let c=new st(U);return this.Zr.forEachWhile((d=>{const g=d.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(c=c.add(d.Yr)),!0)}),l),R.resolve(this.ti(c))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){X(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(s=>{const a=new Z(s.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new Z(e,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.ri=t,this.docs=(function(){return new _t(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),a=s?s.size:0,l=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Bn();return e.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():At.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let a=Bn();const l=e.path,c=new O(l.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:g,value:{document:A}}=d.getNext();if(!l.isPrefixOf(g.path))break;g.path.length>l.length+1||Nu(Du(A),r)<=0||(s.has(A.key)||ei(e,A))&&(a=a.insert(A.key,A.mutableCopy()))}return R.resolve(a)}getAllFromCollectionGroup(t,e,r,s){x(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Zl(this)}getSize(t){return R.resolve(this.size)}}class Zl extends Gl{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t){this.persistence=t,this.si=new re((e=>Zr(e)),ti),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new ii,this.targetCount=0,this.ai=_e.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new _e(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const a=[];return this.si.forEach(((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(l),a.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),R.waitFor(a).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach((l=>{a.push(s.markPotentiallyOrphaned(t,l))})),R.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e){this.ui={},this.overlays={},this.ci=new Qr(0),this.li=!1,this.li=!0,this.hi=new Xl,this.referenceDelegate=t(this),this.Pi=new th(this),this.indexManager=new Fl,this.remoteDocumentCache=(function(s){return new Yl(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Ml(e),this.Ii=new Wl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Jl(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){C("MemoryPersistence","Starting transaction:",t);const s=new eh(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class eh extends ku{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.Ri=new ii,this.Vi=null}static mi(t){return new si(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=O.fromPath(r);return this.gi(t,s).next((a=>{a||e.removeEntry(s,G.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class $n{constructor(t,e){this.persistence=t,this.pi=new re((r=>Mu(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=zl(this,e)}static mi(t,e){return new $n(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,s)=>this.br(t,r,s).next((a=>a?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ii(t,(l=>this.br(t,l,e).next((c=>{c||(r++,a.removeEntry(l,G.min()))})))).next((()=>a.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Dn(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=ft(),s=ft();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new oi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ou()?8:Ou(au())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const a={result:null};return this.ys(t,e).next((l=>{a.result=l})).next((()=>{if(!a.result)return this.ws(t,e,s,r).next((l=>{a.result=l}))})).next((()=>{if(a.result)return;const l=new nh;return this.Ss(t,e,l).next((c=>{if(a.result=c,this.Vs)return this.bs(t,e,l,c.size)}))})).next((()=>a.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(le()<=bt.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(le()<=bt.DEBUG&&C("QueryEngine","Query:",Le(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(le()<=bt.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Yt(e))):R.resolve())}ys(t,e){if(Ds(e))return R.resolve(null);let r=Yt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Mr(e,null,"F"),r=Yt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((a=>{const l=ft(...a);return this.ps.getDocuments(t,l).next((c=>this.indexManager.getMinOffset(t,r).next((d=>{const g=this.Ds(e,c);return this.Cs(e,g,l,d.readTime)?this.ys(t,Mr(e,null,"F")):this.vs(t,g,e,d)}))))})))))}ws(t,e,r,s){return Ds(e)||s.isEqual(G.min())?R.resolve(null):this.ps.getDocuments(t,r).next((a=>{const l=this.Ds(e,a);return this.Cs(e,l,r,s)?R.resolve(null):(le()<=bt.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Le(e)),this.vs(t,l,e,Cu(s,Ge)).next((c=>c)))}))}Ds(t,e){let r=new st(il(t));return e.forEach(((s,a)=>{ei(t,a)&&(r=r.add(a))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ss(t,e,r){return le()<=bt.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Le(e)),this.ps.getDocumentsMatchingQuery(t,e,qt.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((a=>(e.forEach((l=>{a=a.insert(l.key,l)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="LocalStore";class sh{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new _t(U),this.xs=new re((a=>Zr(a)),ti),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ql(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function oh(i,t,e,r){return new sh(i,t,e,r)}async function Go(i,t){const e=B(i);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((a=>{const l=[],c=[];let d=ft();for(const g of s){l.push(g.batchId);for(const A of g.mutations)d=d.add(A.key)}for(const g of a){c.push(g.batchId);for(const A of g.mutations)d=d.add(A.key)}return e.localDocuments.getDocuments(r,d).next((g=>({Ls:g,removedBatchIds:l,addedBatchIds:c})))}))}))}function ah(i,t){const e=B(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),a=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,d,g,A){const w=g.batch,S=w.keys();let b=R.resolve();return S.forEach((D=>{b=b.next((()=>A.getEntry(d,D))).next((M=>{const k=g.docVersions.get(D);X(k!==null,48541),M.version.compareTo(k)<0&&(w.applyToRemoteDocument(M,g),M.isValidDocument()&&(M.setReadTime(g.commitVersion),A.addEntry(M)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(d,w)))})(e,r,t,a).next((()=>a.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let d=ft();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(d=d.add(c.batch.mutations[g].key));return d})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function uh(i){const t=B(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function lh(i,t){const e=B(i);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Wr),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Us{constructor(){this.activeTargetIds=hl()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hh{constructor(){this.Mo=new Us,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Us,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="ConnectivityMonitor";class Bs{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){C(js,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){C(js,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=null;function jr(){return Vn===null?Vn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vn++,"0x"+Vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="RestConnection",fh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dh{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ln?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,a){const l=jr(),c=this.zo(t,e.toUriEncodedString());C(Pr,`Sending RPC '${t}' ${l}:`,c,r);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,s,a);const{host:g}=new URL(c),A=eo(g);return this.Jo(t,c,d,r,A).then((w=>(C(Pr,`Received RPC '${t}' ${l}: `,w),w)),(w=>{throw Kn(Pr,`RPC '${t}' ${l} failed with error: `,w,"url: ",c,"request:",r),w}))}Ho(t,e,r,s,a,l){return this.Go(t,e,r,s,a)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ye})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,a)=>t[a]=s)),r&&r.headers.forEach(((s,a)=>t[a]=s))}zo(t,e){const r=fh[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class mh extends dh{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,a){const l=jr();return new Promise(((c,d)=>{const g=new no;g.setWithCredentials(!0),g.listenOnce(ro.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Cn.NO_ERROR:const w=g.getResponseJson();C(ht,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(w)),c(w);break;case Cn.TIMEOUT:C(ht,`RPC '${t}' ${l} timed out`),d(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Cn.HTTP_ERROR:const S=g.getStatus();if(C(ht,`RPC '${t}' ${l} failed with status:`,S,"response text:",g.getResponseText()),S>0){let b=g.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b?.error;if(D&&D.status&&D.message){const M=(function(W){const $=W.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN})(D.status);d(new N(M,D.message))}else d(new N(P.UNKNOWN,"Server responded with status "+g.getStatus()))}else d(new N(P.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:l,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{C(ht,`RPC '${t}' ${l} completed.`)}}));const A=JSON.stringify(s);C(ht,`RPC '${t}' ${l} sending request:`,s),g.send(e,"POST",A,r,15)}))}T_(t,e,r){const s=jr(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=oo(),c=so(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(d.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const A=a.join("");C(ht,`Creating RPC '${t}' stream ${s}: ${A}`,d);const w=l.createWebChannel(A,d);this.I_(w);let S=!1,b=!1;const D=new ph({Yo:k=>{b?C(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(S||(C(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),C(ht,`RPC '${t}' stream ${s} sending:`,k),w.send(k))},Zo:()=>w.close()}),M=(k,W,$)=>{k.listen(W,(z=>{try{$(z)}catch(yt){setTimeout((()=>{throw yt}),0)}}))};return M(w,Fe.EventType.OPEN,(()=>{b||(C(ht,`RPC '${t}' stream ${s} transport opened.`),D.o_())})),M(w,Fe.EventType.CLOSE,(()=>{b||(b=!0,C(ht,`RPC '${t}' stream ${s} transport closed`),D.a_(),this.E_(w))})),M(w,Fe.EventType.ERROR,(k=>{b||(b=!0,Kn(ht,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),D.a_(new N(P.UNAVAILABLE,"The operation could not be completed")))})),M(w,Fe.EventType.MESSAGE,(k=>{if(!b){const W=k.data[0];X(!!W,16349);const $=W,z=$?.error||$[0]?.error;if(z){C(ht,`RPC '${t}' stream ${s} received error:`,z);const yt=z.status;let Mt=(function(f){const m=J[f];if(m!==void 0)return Il(m)})(yt),Et=z.message;Mt===void 0&&(Mt=P.INTERNAL,Et="Unknown error status: "+yt+" with message "+z.message),b=!0,D.a_(new N(Mt,Et)),w.close()}else C(ht,`RPC '${t}' stream ${s} received:`,W),D.u_(W)}})),M(c,io.STAT_EVENT,(k=>{k.stat===Dr.PROXY?C(ht,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Dr.NOPROXY&&C(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Vr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(i){return new wl(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e,r=1e3,s=1.5,a=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="PersistentStream";class gh{constructor(t,e,r,s,a,l,c,d){this.Mi=t,this.S_=r,this.b_=s,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ko(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return C(qs,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(C(qs,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _h extends gh{constructor(t,e,r,s,a,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=bl(t.writeResults,t.commitTime),r=ce(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Cl(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Nl(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{}class Eh extends yh{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Go(t,Fr(e,r),s,a,l))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())}))}Ho(t,e,r,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Ho(t,Fr(e,r),s,l,c,a))).catch((l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(P.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Th{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(te(e),this.aa=!1):C("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="RemoteStore";class vh{constructor(t,e,r,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{en(this)&&(C(Ze,"Restarting streams for network reachability change."),await(async function(d){const g=B(d);g.Ea.add(4),await tn(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Jn(g)})(this))}))})),this.Ra=new Th(r,s)}}async function Jn(i){if(en(i))for(const t of i.da)await t(!0)}async function tn(i){for(const t of i.da)await t(!1)}function en(i){return B(i).Ea.size===0}async function Qo(i,t,e){if(!Je(t))throw t;i.Ea.add(1),await tn(i),i.Ra.set("Offline"),e||(e=()=>uh(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{C(Ze,"Retrying IndexedDB access"),await e(),i.Ea.delete(1),await Jn(i)}))}function Wo(i,t){return t().catch((e=>Qo(i,e,t)))}async function Yn(i){const t=B(i),e=zt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Wr;for(;Ah(t);)try{const s=await lh(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Ih(t,s)}catch(s){await Qo(t,s)}Ho(t)&&Xo(t)}function Ah(i){return en(i)&&i.Ta.length<10}function Ih(i,t){i.Ta.push(t);const e=zt(i);e.O_()&&e.X_&&e.ea(t.mutations)}function Ho(i){return en(i)&&!zt(i).x_()&&i.Ta.length>0}function Xo(i){zt(i).start()}async function wh(i){zt(i).ra()}async function Rh(i){const t=zt(i);for(const e of i.Ta)t.ea(e.mutations)}async function Ph(i,t,e){const r=i.Ta.shift(),s=ri.from(r,t,e);await Wo(i,(()=>i.remoteSyncer.applySuccessfulWrite(s))),await Yn(i)}async function Vh(i,t){t&&zt(i).X_&&await(async function(r,s){if((function(l){return Al(l)&&l!==P.ABORTED})(s.code)){const a=r.Ta.shift();zt(r).B_(),await Wo(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Yn(r)}})(i,t),Ho(i)&&Xo(i)}async function $s(i,t){const e=B(i);e.asyncQueue.verifyOperationInProgress(),C(Ze,"RemoteStore received new credentials");const r=en(e);e.Ea.add(3),await tn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Jn(e)}async function Sh(i,t){const e=B(i);t?(e.Ea.delete(2),await Jn(e)):t||(e.Ea.add(2),await tn(e),e.Ra.set("Unknown"))}function zt(i){return i.fa||(i.fa=(function(e,r,s){const a=B(e);return a.sa(),new _h(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:wh.bind(null,i),r_:Vh.bind(null,i),ta:Rh.bind(null,i),na:Ph.bind(null,i)}),i.da.push((async t=>{t?(i.fa.B_(),await Yn(i)):(await i.fa.stop(),i.Ta.length>0&&(C(Ze,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,r,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,a){const l=Date.now()+r,c=new ai(t,e,l,s,a);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(i,t){if(te("AsyncQueue",`${t}: ${i}`),Je(i))return new N(P.UNAVAILABLE,`${t}: ${i}`);throw i}class Ch{constructor(){this.queries=zs(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=B(e),a=s.queries;s.queries=zs(),a.forEach(((l,c)=>{for(const d of c.Sa)d.onError(r)}))})(this,new N(P.ABORTED,"Firestore shutting down"))}}function zs(){return new re((i=>Co(i)),So)}function Dh(i){i.Ca.forEach((t=>{t.next()}))}var Gs,Ks;(Ks=Gs||(Gs={})).Ma="default",Ks.Cache="cache";const Nh="SyncEngine";class bh{constructor(t,e,r,s,a,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new re((c=>Co(c)),So),this.Iu=new Map,this.Eu=new Set,this.du=new _t(O.comparator),this.Au=new Map,this.Ru=new ii,this.Vu={},this.mu=new Map,this.fu=_e.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kh(i,t,e){const r=Lh(i);try{const s=await(function(l,c){const d=B(l),g=K.now(),A=c.reduce(((b,D)=>b.add(D.key)),ft());let w,S;return d.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let D=Bn(),M=ft();return d.Ns.getEntries(b,A).next((k=>{D=k,D.forEach(((W,$)=>{$.isValidDocument()||(M=M.add(W))}))})).next((()=>d.localDocuments.getOverlayedDocuments(b,D))).next((k=>{w=k;const W=[];for(const $ of c){const z=yl($,w.get($.key).overlayedDocument);z!=null&&W.push(new ie($.key,z,vo(z.value.mapValue),kt.exists(!0)))}return d.mutationQueue.addMutationBatch(b,g,W,c)})).next((k=>{S=k;const W=k.applyToLocalDocumentSet(w,M);return d.documentOverlayCache.saveOverlays(b,k.batchId,W)}))})).then((()=>({batchId:S.batchId,changes:No(w)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(l,c,d){let g=l.Vu[l.currentUser.toKey()];g||(g=new _t(U)),g=g.insert(c,d),l.Vu[l.currentUser.toKey()]=g})(r,s.batchId,e),await Zn(r,s.changes),await Yn(r.remoteStore)}catch(s){const a=Jo(s,"Failed to persist write");e.reject(a)}}function Qs(i,t,e){const r=B(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((a,l)=>{const c=l.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(l,c){const d=B(l);d.onlineState=c;let g=!1;d.queries.forEach(((A,w)=>{for(const S of w.Sa)S.va(c)&&(g=!0)})),g&&Dh(d)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Oh(i,t){const e=B(i),r=t.batch.batchId;try{const s=await ah(e.localStore,t);Zo(e,r,null),Yo(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Zn(e,s)}catch(s){await Kr(s)}}async function xh(i,t,e){const r=B(i);try{const s=await(function(l,c){const d=B(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let A;return d.mutationQueue.lookupMutationBatch(g,c).next((w=>(X(w!==null,37113),A=w.keys(),d.mutationQueue.removeMutationBatch(g,w)))).next((()=>d.mutationQueue.performConsistencyCheck(g))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(g,A,c))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,A))).next((()=>d.localDocuments.getDocuments(g,A)))}))})(r.localStore,t);Zo(r,t,e),Yo(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Zn(r,s)}catch(s){await Kr(s)}}function Yo(i,t){(i.mu.get(t)||[]).forEach((e=>{e.resolve()})),i.mu.delete(t)}function Zo(i,t,e){const r=B(i);let s=r.Vu[r.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}async function Zn(i,t,e){const r=B(i),s=[],a=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,d)=>{l.push(r.pu(d,t,e).then((g=>{if((g||e)&&r.isPrimaryClient){const A=g?!g.fromCache:e?.targetChanges.get(d.targetId)?.current;r.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(g){s.push(g);const A=oi.As(d.targetId,g);a.push(A)}})))})),await Promise.all(l),r.Pu.H_(s),await(async function(d,g){const A=B(d);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>R.forEach(g,(S=>R.forEach(S.Es,(b=>A.persistence.referenceDelegate.addReference(w,S.targetId,b))).next((()=>R.forEach(S.ds,(b=>A.persistence.referenceDelegate.removeReference(w,S.targetId,b)))))))))}catch(w){if(!Je(w))throw w;C(ih,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const b=A.Ms.get(S),D=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(D);A.Ms=A.Ms.insert(S,M)}}})(r.localStore,a))}async function Mh(i,t){const e=B(i);if(!e.currentUser.isEqual(t)){C(Nh,"User change. New user:",t.toKey());const r=await Go(e.localStore,t);e.currentUser=t,(function(a,l){a.mu.forEach((c=>{c.forEach((d=>{d.reject(new N(P.CANCELLED,l))}))})),a.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Zn(e,r.Ls)}}function Lh(i){const t=B(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Oh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xh.bind(null,t),t}class zn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xn(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return oh(this.persistence,new rh,t.initialUser,this.serializer)}Cu(t){return new zo(si.mi,this.serializer)}Du(t){return new hh}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zn.provider={build:()=>new zn};class Fh extends zn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){X(this.persistence.referenceDelegate instanceof $n,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ql(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new zo((r=>$n.mi(r,e)),this.serializer)}}class Br{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qs(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mh.bind(null,this.syncEngine),await Sh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ch})()}createDatastore(t){const e=Xn(t.databaseInfo.databaseId),r=(function(a){return new mh(a)})(t.databaseInfo);return(function(a,l,c,d){return new Eh(a,l,c,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,a,l,c){return new vh(r,s,a,l,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Qs(this.syncEngine,e,0)),(function(){return Bs.v()?new Bs:new ch})())}createSyncEngine(t,e){return(function(s,a,l,c,d,g,A){const w=new bh(s,a,l,c,d,g);return A&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=B(e);C(Ze,"RemoteStore shutting down."),r.Ea.add(5),await tn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Br.provider={build:()=>new Br};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="FirestoreClient";class Uh{constructor(t,e,r,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=zr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async l=>{C(Gt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(C(Gt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Jo(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Sr(i,t){i.asyncQueue.verifyOperationInProgress(),C(Gt,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Go(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=t}async function Ws(i,t){i.asyncQueue.verifyOperationInProgress();const e=await jh(i);C(Gt,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener((r=>$s(t.remoteStore,r))),i.setAppCheckTokenChangeListener(((r,s)=>$s(t.remoteStore,s))),i._onlineComponents=t}async function jh(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){C(Gt,"Using user provided OfflineComponentProvider");try{await Sr(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Kn("Error using user provided cache. Falling back to memory cache: "+e),await Sr(i,new zn)}}else C(Gt,"Using default OfflineComponentProvider"),await Sr(i,new Fh(void 0));return i._offlineComponents}async function Bh(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(C(Gt,"Using user provided OnlineComponentProvider"),await Ws(i,i._uninitializedComponentsProvider._online)):(C(Gt,"Using default OnlineComponentProvider"),await Ws(i,new Br))),i._onlineComponents}function qh(i){return Bh(i).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="firestore.googleapis.com",Xs=!0;class Js{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ea,this.ssl=Xs}else this.host=t.host,this.ssl=t.ssl??Xs;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=$o;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jl)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Su("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ta(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class tr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Js({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Js(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new yu;switch(r.type){case"firstParty":return new Au(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Hs.get(e);r&&(C("ComponentProvider","Removing Datastore"),Hs.delete(e),r.terminate())})(this),Promise.resolve()}}function $h(i,t,e,r={}){i=co(i,tr);const s=eo(t),a=i._getSettings(),l={...a,emulatorOptions:i._getEmulatorOptions()},c=`${t}:${e}`;s&&(nu(`https://${c}`),ru("Firestore",!0)),a.host!==ea&&a.host!==c&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...a,host:c,ssl:s,emulatorOptions:r};if(!iu(d,l)&&(i._setSettings(d),r.mockUserToken)){let g,A;if(typeof r.mockUserToken=="string")g=r.mockUserToken,A=ct.MOCK_USER;else{g=su(r.mockUserToken,i._app?.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new ct(w)}i._authCredentials=new Eu(new uo(g,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ui(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Xe(e,dt._jsonSchema))return new dt(t,r||null,new O(Q.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:Y("string",dt._jsonSchemaVersion),referencePath:Y("string")};class Bt extends ui{constructor(t,e,r){super(t,e,el(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new O(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function zh(i,t,...e){if(i=ze(i),lo("collection","path",t),i instanceof tr){const r=Q.fromString(t,...e);return Es(r),new Bt(i,null,r)}{if(!(i instanceof dt||i instanceof Bt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Q.fromString(t,...e));return Es(r),new Bt(i.firestore,null,r)}}function Gh(i,t,...e){if(i=ze(i),arguments.length===1&&(t=zr.newId()),lo("doc","path",t),i instanceof tr){const r=Q.fromString(t,...e);return ys(r),new dt(i,null,new O(r))}{if(!(i instanceof dt||i instanceof Bt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Q.fromString(t,...e));return ys(r),new dt(i.firestore,i instanceof Bt?i.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="AsyncQueue";class Zs{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ko(this,"async_queue_retry"),this._c=()=>{const r=Vr();r&&C(Ys,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Vr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Vr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Jt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Je(t))throw t;C(Ys,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,te("INTERNAL UNHANDLED ERROR: ",to(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=ai.createAndSchedule(this,t,e,r,(a=>this.hc(a)));return this.tc.push(s),s}uc(){this.nc&&x(47125,{Pc:to(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function to(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class na extends tr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Zs,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zs(t),this._firestoreClient=void 0,await t}}}function Kh(i,t){const e=typeof i=="object"?i:Za(),r=typeof i=="string"?i:Ln,s=tu(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=eu("firestore");a&&$h(s,...a)}return s}function Qh(i){if(i._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Wh(i),i._firestoreClient}function Wh(i){const t=i._freezeSettings(),e=(function(s,a,l,c){return new ju(s,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ta(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,t);i._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new Uh(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&(function(s){const a=s?._online.build();return{_offline:s?._offline.build(a),_online:a}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wt(Vt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wt(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Xe(t,wt._jsonSchema))return wt.fromBase64String(t.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:Y("string",wt._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(Xe(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:Y("string",Ot._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Xe(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new xt(t.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:Y("string",xt._jsonSchemaVersion),vectorValues:Y("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=/^__.*__$/;class Xh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ye(t,this.data,e,this.fieldTransforms)}}function ra(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:i})}}class ci{constructor(t,e,r,s,a,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ci({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Gn(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ra(this.Ac)&&Hh.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Jh{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Xn(t)}Cc(t,e,r,s=!1){return new ci({Ac:t,methodName:e,Dc:r,path:it.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yh(i){const t=i._freezeSettings(),e=Xn(i._databaseId);return new Jh(i._databaseId,!!t.ignoreUndefinedProperties,e)}function Zh(i,t,e,r,s,a={}){const l=i.Cc(a.merge||a.mergeFields?2:0,t,e,s);aa("Data must be an object, but it was:",l,r);const c=sa(r,l);let d,g;if(a.merge)d=new Rt(l.fieldMask),g=l.fieldTransforms;else if(a.mergeFields){const A=[];for(const w of a.mergeFields){const S=tc(t,w,e);if(!l.contains(S))throw new N(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);nc(A,S)||A.push(S)}d=new Rt(A),g=l.fieldTransforms.filter((w=>d.covers(w.field)))}else d=null,g=l.fieldTransforms;return new Xh(new It(c),d,g)}class fi extends hi{_toFieldTransform(t){return new pl(t.path,new Qe)}isEqual(t){return t instanceof fi}}function ia(i,t){if(oa(i=ze(i)))return aa("Unsupported field value:",t,i),sa(i,t);if(i instanceof hi)return(function(r,s){if(!ra(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const a=[];let l=0;for(const c of r){let d=ia(c,s.wc(l));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),l++}return{arrayValue:{values:a}}})(i,t)}return(function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cl(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=K.fromDate(r);return{timestampValue:Lr(s.serializer,a)}}if(r instanceof K){const a=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lr(s.serializer,a)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wt)return{bytesValue:Rl(s.serializer,r._byteString)};if(r instanceof dt){const a=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw s.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Bo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xt)return(function(l,c){return{mapValue:{fields:{[Eo]:{stringValue:To},[br]:{arrayValue:{values:l.toArray().map((g=>{if(typeof g!="number")throw c.Sc("VectorValues must only contain numeric values.");return ni(c.serializer,g)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Gr(r)}`)})(i,t)}function sa(i,t){const e={};return po(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(i,((r,s)=>{const a=ia(s,t.mc(r));a!=null&&(e[r]=a)})),{mapValue:{fields:e}}}function oa(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof K||i instanceof Ot||i instanceof wt||i instanceof dt||i instanceof hi||i instanceof xt)}function aa(i,t,e){if(!oa(e)||!ho(e)){const r=Gr(e);throw r==="an object"?t.Sc(i+" a custom object"):t.Sc(i+" "+r)}}function tc(i,t,e){if((t=ze(t))instanceof li)return t._internalPath;if(typeof t=="string")return ua(i,t);throw Gn("Field path arguments must be of type string or ",i,!1,void 0,e)}const ec=new RegExp("[~\\*/\\[\\]]");function ua(i,t,e){if(t.search(ec)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new li(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Gn(i,t,e,r,s){const a=r&&!r.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(a||l)&&(d+=" (found",a&&(d+=` in field ${r}`),l&&(d+=` in document ${s}`),d+=")"),new N(P.INVALID_ARGUMENT,c+i+d)}function nc(i,t){return i.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,r,s,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ha("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class rc extends la{data(){return super.data()}}function ha(i,t){return typeof t=="string"?ua(i,t):t instanceof li?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(i,t,e){let r;return r=i?i.toFirestore(t):t,r}class Sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fe extends la{constructor(t,e,r,s,a,l){super(t,e,r,s,l),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ha("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=fe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}fe._jsonSchemaVersion="firestore/documentSnapshot/1.0",fe._jsonSchema={type:Y("string",fe._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class kn extends fe{data(t={}){return super.data(t)}}class $e{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Sn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new kn(this._firestore,this._userDataWriter,r.key,r,new Sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((c=>{const d=new kn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Sn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>a||c.type!==3)).map((c=>{const d=new kn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Sn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,A=-1;return c.type!==0&&(g=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),A=l.indexOf(c.doc.key)),{type:sc(c.type),doc:d,oldIndex:g,newIndex:A}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$e._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=zr.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function sc(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:i})}}$e._jsonSchemaVersion="firestore/querySnapshot/1.0",$e._jsonSchema={type:Y("string",$e._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};function oc(i,t){const e=co(i.firestore,na),r=Gh(i),s=ic(i.converter,t);return ac(e,[Zh(Yh(i.firestore),"addDoc",r._key,s,i.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then((()=>r))}function ac(i,t){return(function(r,s){const a=new Jt;return r.asyncQueue.enqueueAndForget((async()=>kh(await qh(r),s,a))),a.promise})(Qh(i),t)}function pc(){return new fi("serverTimestamp")}(function(t,e=!0){(function(s){ye=s})(uu),Ha(new Xa("firestore",((r,{instanceIdentifier:s,options:a})=>{const l=r.getProvider("app").getImmediate(),c=new na(new Tu(r.getProvider("auth-internal")),new Iu(l,r.getProvider("app-check-internal")),(function(g,A){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(g.options.projectId,A)})(l,s),l);return a={useFetchStreams:e,...a},c._setSettings(a),c}),"PUBLIC").setMultipleInstances(!0)),Cr(ps,ms,t),Cr(ps,ms,"esm2020")})();const uc={apiKey:"AIzaSyAFMdW1Th1OKcBvFuxokKb8GAzHtyxU6Wk",authDomain:"rest-client-app-5769b.firebaseapp.com",projectId:"rest-client-app-5769b",storageBucket:"rest-client-app-5769b.firebasestorage.app",messagingSenderId:"871751415386",appId:"1:871751415386:web:5e24636a4e7fbf9a640a63",measurementId:"G-H091NY0HYV"},ca=lu(uc),nn=hu(ca),fa=Kh(ca);function lc(i){let t=!1;return pu(nn,r=>{(async()=>{if(t)return;const s=window.location.pathname;if(!r){t=!0,On(),s!=="/"&&i("/");return}try{const a=await r.getIdTokenResult();new Date(a.expirationTime).getTime()<=Date.now()&&(t=!0,On(),s!=="/"&&i("/"))}catch(a){console.error(a),t=!0,On(),s!=="/"&&i("/")}})()})}const hc=async(i,t)=>{const r=(await cu(nn,i,t)).user,s=await r.getIdToken();return{user:r,token:s}},cc=async(i,t,e)=>{const s=(await fu(nn,t,e)).user;await du(s,{displayName:i});const a=await s.getIdToken();return await oc(zh(fa,"users"),{uid:s.uid,name:i,authProvider:"local",email:t}),{user:s,token:a}},On=async()=>{try{await mu(nn),console.log("Logged out")}catch(i){console.error("Logout failed:",i)}},mc=Object.freeze(Object.defineProperty({__proto__:null,auth:nn,db:fa,initAuthWatcher:lc,logInWithEmailAndPassword:hc,logout:On,registerWithEmailAndPassword:cc},Symbol.toStringTag,{value:"Module"}));export{oc as a,zh as c,fa as d,mc as f,lc as i,hc as l,cc as r,pc as s};
