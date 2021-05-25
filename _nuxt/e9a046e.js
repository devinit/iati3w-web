/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(t,e,n){"use strict";var r={data:function(){return{}},props:{name:String,stub:String,type:String}},o=n(54),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.stub,type:t.type}}}},[t._v("\n  "+t._s(t.name)+" "+t._s(t._f("capitalize")(t._f("location")(t.type)))+"\n")])}),[],!1,null,null,null);e.a=component.exports},252:function(t,e,n){"use strict";n(167);var r=n(246),o={data:function(){return{}},props:{stub:String,name:String,type:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}},components:{LocationLink:r.a}},c=n(54),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("LocationLink",{attrs:{stub:t.stub,name:t.name,type:t.type}}),t._v(" "),t.org_count>-1?n("span",{staticClass:"info"},[t._v("\n    "+t._s(t._f("plural")(t.org_count,"organisation","organisations"))+"\n  ")]):t._e(),t._v(" "),t.activity_count>-1?n("span",{staticClass:"info"},[t._v("\n    "+t._s(t._f("plural")(t.activity_count,"activity","activities"))+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},253:function(t,e,n){"use strict";n(167);var r={data:function(){return{}},props:{org:Object,activity_count:Number}},o=n(54),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",[n("nuxt-link",{attrs:{title:t.org.info.stub,to:{name:"organisations-stub",params:{stub:t.org.info.stub}}}},[t._v(t._s(t.org.info.name)),t.org.info.shortname!=t.org.info.name?[t._v(" ("+t._s(t.org.info.shortname)+")")]:t._e()],2),t._v(" "),n("span",{staticClass:"info"},[n("b",[t._v("Source:")]),t._v(" "+t._s(t._f("join")(t.org.sources)))]),t._v(" "),n("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])],1)}),[],!1,null,null,null);e.a=component.exports},395:function(t,e,n){t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){return(e=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t}).apply(this,arguments)}var n=4,r=.001,o=1e-7,c=10,l=11,f=1/(l-1),v="function"==typeof Float32Array;function d(t,e){return 1-3*e+3*t}function y(t,e){return 3*e-6*t}function h(t){return 3*t}function m(t,e,n){return((d(e,n)*t+y(e,n))*t+h(e))*t}function _(t,e,n){return 3*d(e,n)*t*t+2*y(e,n)*t+h(e)}function w(t,e,n,r,l){var f,v,i=0;do{(f=m(v=e+(n-e)/2,r,l)-t)>0?n=v:e=v}while(Math.abs(f)>o&&++i<c);return v}function O(t,e,r,o){for(var i=0;i<n;++i){var c=_(e,r,o);if(0===c)return e;e-=(m(e,r,o)-t)/c}return e}function j(t){return t}var P=function(t,e,n,o){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===o)return j;for(var c=v?new Float32Array(l):new Array(l),i=0;i<l;++i)c[i]=m(i*f,t,n);function d(e){for(var o=0,v=1,d=l-1;v!==d&&c[v]<=e;++v)o+=f;--v;var y=o+(e-c[v])/(c[v+1]-c[v])*f,h=_(y,t,n);return h>=r?O(e,y,t,n):0===h?y:w(e,o,o+f,t,n)}return function(t){return 0===t?0:1===t?1:m(d(t),e,o)}},S={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},k=!1;try{var C=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,C)}catch(t){}var x={$:function(t){return"string"!=typeof t?t:document.querySelector(t)},on:function(element,t,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};t instanceof Array||(t=[t]);for(var i=0;i<t.length;i++)element.addEventListener(t[i],e,!!k&&n)},off:function(element,t,e){t instanceof Array||(t=[t]);for(var i=0;i<t.length;i++)element.removeEventListener(t[i],e)},cumulativeOffset:function(element){var t=0,e=0;do{t+=element.offsetTop||0,e+=element.offsetLeft||0,element=element.offsetParent}while(element);return{top:t,left:e}}},E=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],L={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function A(t){L=e({},L,t)}var D=function(){var element,e,n,r,o,c,l,f,v,d,y,h,m,_,w,O,j,k,C,A,D,T,z,N,$,F,progress,V=function(t){f&&(z=t,A=!0)};function M(t){var e=t.scrollTop;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function R(t){var e=t.scrollLeft;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function H(){D=x.cumulativeOffset(e),T=x.cumulativeOffset(element),h&&(w=T.left-D.left+c,k=w-_),m&&(j=T.top-D.top+c,C=j-O)}function W(t){if(A)return J();$||($=t),o||H(),F=t-$,progress=Math.min(F/n,1),progress=N(progress),G(e,O+C*progress,_+k*progress),F<n?window.requestAnimationFrame(W):J()}function J(){A||G(e,j,w),$=!1,x.off(e,E,V),A&&y&&y(z,element),!A&&d&&d(element)}function G(element,t,e){m&&(element.scrollTop=t),h&&(element.scrollLeft=e),"body"===element.tagName.toLowerCase()&&(m&&(document.documentElement.scrollTop=t),h&&(document.documentElement.scrollLeft=e))}function I(w,D){var T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===t(D)?T=D:"number"==typeof D&&(T.duration=D),!(element=x.$(w)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+w);if(e=x.$(T.container||L.container),n=T.hasOwnProperty("duration")?T.duration:L.duration,o=T.hasOwnProperty("lazy")?T.lazy:L.lazy,r=T.easing||L.easing,c=T.hasOwnProperty("offset")?T.offset:L.offset,l=T.hasOwnProperty("force")?!1!==T.force:L.force,f=T.hasOwnProperty("cancelable")?!1!==T.cancelable:L.cancelable,v=T.onStart||L.onStart,d=T.onDone||L.onDone,y=T.onCancel||L.onCancel,h=void 0===T.x?L.x:T.x,m=void 0===T.y?L.y:T.y,"function"==typeof c&&(c=c(element,e)),_=R(e),O=M(e),H(),A=!1,!l){var $="body"===e.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:e.offsetHeight,F=O,J=F+$,G=j-c,I=G+element.offsetHeight;if(G>=F&&I<=J)return void(d&&d(element))}if(v&&v(element),C||k)return"string"==typeof r&&(r=S[r]||S.ease),N=P.apply(P,r),x.on(e,E,V,{passive:!0}),window.requestAnimationFrame(W),function(){z=null,A=!0};d&&d(element)}return I},T=D(),z=[];function N(t){for(var i=0;i<z.length;++i)if(z[i].el===t)return z.splice(i,1),!0;return!1}function $(t){for(var i=0;i<z.length;++i)if(z[i].el===t)return z[i]}function F(t){var e=$(t);return e||(z.push(e={el:t,binding:{}}),e)}function V(t){var e=F(this).binding;if(e.value){if(t.preventDefault(),"string"==typeof e.value)return T(e.value);T(e.value.el||e.value.element,e.value)}}var M={bind:function(t,e){F(t).binding=e,x.on(t,"click",V)},unbind:function(t){N(t),x.off(t,"click",V)},update:function(t,e){F(t).binding=e}},R={bind:M.bind,unbind:M.unbind,update:M.update,beforeMount:M.bind,unmounted:M.unbind,updated:M.update,scrollTo:T,bindings:z},H=function(t,e){e&&A(e),t.directive("scroll-to",R),(t.config.globalProperties||t.prototype).$scrollTo=R.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=R,window.VueScrollTo.setDefaults=A,window.VueScrollTo.scroller=D,window.Vue.use&&window.Vue.use(H)),R.install=H,R}()},396:function(t,e,n){"use strict";n(3),n(2),n(4),n(5);var r=n(0),o=(n(1),n(10),n(48)),c=n(11);n(47),n(166),n(9),n(13),n(50),n(41),n(15),n(40),n(406);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{busy:!0}},props:{activity:Object},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({orgNames:function(){var t=this;return 0==Object.keys(this.orgs).length?"":this.unique(Object.entries(this.activity.orgs).reduce((function(summary,e){e[0];return e[1].map((function(e){e in t.orgs&&summary.push(t.orgs[e].info.name)})),summary}),[]))},locationNames:function(){var t=this;return 0==Object.keys(this.locations).length?"":this.unique(Object.entries(this.activity.locations).reduce((function(summary,e){var n=e[0];return e[1].map((function(e){if("countries"==n)return summary.push(e),summary;null!=t.locations[n][e]?summary.push(t.locations[n][e].info.name):summary.push(e)})),summary}),[]))}},Object(o.b)(["orgs","locations"])),methods:{unique:function(t){return Array.from(new Set(t.filter((function(t){return""!=t}))))}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loadOrgs");case 2:return e.next=4,t.$store.dispatch("loadLocations");case 4:t.busy=!1;case 5:case"end":return e.stop()}}),e)})))()}},v=n(54);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={data:function(){return{perPage:50,page:1}},components:{Activity:Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0==this.busy?n("div",{staticClass:"item"},[n("nuxt-link",{attrs:{title:t.activity.title,to:{name:"activities-identifier",params:{identifier:t.activity.identifier}}}},[t._v("\n    "+t._s(t._f("truncate")(t.activity.title))+"\n  ")]),t._v(" "),n("span",{staticClass:"info"},[n("b",[t._v("Who:")]),t._v(" "+t._s(t._f("truncate")(t._f("join")(t.orgNames))))]),t._v(" "),n("span",{staticClass:"info"},[n("b",[t._v("Where:")]),t._v(" "+t._s(t._f("truncate")(t._f("join")(t.locationNames))))]),t._v(" "),n("span",{staticClass:"info"},[n("b",[t._v("Source:")]),t._v(" "+t._s(t.activity.source))])],1):t._e()}),[],!1,null,null,null).exports},props:{activities:Object,activitiesList:Array},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({totalRows:function(){return this.filteredActivities.length},filteredActivities:function(){var t=this;return this.activitiesList.filter((function(e){return t.checkSource(e)}))},pageActivities:function(){return this.filteredActivities.slice((this.page-1)*this.perPage,this.page*this.perPage)}},Object(o.b)(["source"])),methods:{checkSource:function(t){return"all"==this.source||("3w"==this.source&&8==t.length||"iati"==this.source&&8!=t.length)}},watch:{perPage:function(){this.page=1}}},h=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.totalRows>t.perPage?n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Activities per page","label-for":"per-page","label-class":"mb-0","label-size":"sm"}},[n("b-form-select",{staticClass:"my-0",attrs:{id:"per-page",size:"sm",options:[50,100,200,500,1e3]},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Page","label-size":"sm","label-class":"mb-1"}},[n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1):t._e(),t._v(" "),n("hr"),t._v(" "),n("section",{attrs:{id:"content"}},[n("div",{staticClass:"inline-list wide"},t._l(t.pageActivities,(function(e){return n("Activity",{key:e,attrs:{activity:t.activities[e]}})})),1)])],1)}),[],!1,null,null,null);e.a=h.exports},401:function(t,e,n){var r=n(26);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},406:function(t,e,n){"use strict";var strong=n(407),r=n(401);t.exports=n(408)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},407:function(t,e,n){"use strict";var r=n(29).f,o=n(77),c=n(171),l=n(49),f=n(169),v=n(170),d=n(117),y=n(172),h=n(118),m=n(27),_=n(115).fastKey,w=n(401),O=m?"_s":"size",j=function(t,e){var n,r=_(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,d){var y=t((function(t,r){f(t,y,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[O]=0,null!=r&&v(r,n,t[d],t)}));return c(y.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[O]=0},delete:function(t){var n=w(this,e),r=j(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[O]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!j(w(this,e),t)}}),m&&r(y.prototype,"size",{get:function(){return w(this,e)[O]}}),y},def:function(t,e,n){var r,o,c=j(t,e);return c?c.v=n:(t._l=c={i:o=_(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[O]++,"F"!==o&&(t._i[o]=c)),t},getEntry:j,setStrong:function(t,e,n){d(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?y(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,y(1))}),n?"entries":"values",!n,!0),h(e)}}},408:function(t,e,n){"use strict";var r=n(19),o=n(14),c=n(30),l=n(171),meta=n(115),f=n(170),v=n(169),d=n(26),y=n(23),h=n(116),m=n(76),_=n(119);t.exports=function(t,e,n,w,O,j){var P=r[t],S=P,k=O?"set":"add",C=S&&S.prototype,x={},E=function(t){var e=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(j&&!d(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return j&&!d(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(j||C.forEach&&!y((function(){(new S).entries().next()})))){var L=new S,A=L[k](j?{}:-0,1)!=L,D=y((function(){L.has(1)})),T=h((function(t){new S(t)})),z=!j&&y((function(){for(var t=new S,e=5;e--;)t[k](e,e);return!t.has(-0)}));T||((S=e((function(e,n){v(e,S,t);var r=_(new P,e,S);return null!=n&&f(n,O,r[k],r),r}))).prototype=C,C.constructor=S),(D||z)&&(E("delete"),E("has"),O&&E("get")),(z||A)&&E(k),j&&C.clear&&delete C.clear}else S=w.getConstructor(e,t,O,k),l(S.prototype,n),meta.NEED=!0;return m(S,t),x[t]=S,o(o.G+o.W+o.F*(S!=P),x),j||w.setStrong(S,t,O),S}}}]);