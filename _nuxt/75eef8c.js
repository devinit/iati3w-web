(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(t,e,n){"use strict";n(1),n(14),n(33),n(34),n(9),n(8),n(3);var r=n(6),o={implementing:"Implementing partner",programming:"Programming partner",funding:"Funding partner"},c={local:"local/national actor",regional:"regional actor",international:"international actor",unknown:"undetermined actor"},l={dac:"OECD-DAC sector",humanitarian:"Humanitarian cluster"},f={admin1:"Region",admin2:"District",unclassified:"Unclassified location"};r.default.filter("urlenc",encodeURIComponent),r.default.filter("length",(function(t){return t?t.length:0})),r.default.filter("capitalize",(function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""})),r.default.filter("plural",(function(t,e,n){return t>1?t+" "+n:t+" "+e})),r.default.filter("truncate",(function(s,t){return t||(t=100),s.length<=t?s:s.substring(0,t)+"…"})),r.default.filter("join",(function(t,e){if(e||(e=", "),t){var n=[];if(Array.isArray(t))n=t;else for(var r in t)n=n.concat(t[r]);return n.join(e)}return""})),r.default.filter("keyed",(function(t,e){return t.map((function(t){return t[e]}))})),r.default.filter("flatten",(function(t){var e=[];for(var n in t)Array.isArray(t[n])?e=e.concat(t[n]):t[n]&&(e=e.concat(Object.keys(t[n])));return e})),r.default.filter("role",(function(code){return o[code]})),r.default.filter("scope",(function(code){return c[code]})),r.default.filter("sector",(function(code){return l[code]})),r.default.filter("location",(function(code){return f[code]}))},143:function(t,e,n){var content=n(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("932a8f60",content,!0,{sourceMap:!1})},162:function(t,e,n){"use strict";n(205);var r=n(51),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column h-100"},[r("b-navbar",{staticClass:"navbar-primary",attrs:{toggleable:"lg",type:"light",variant:"light",sticky:""}},[r("b-navbar-brand",{attrs:{to:{name:"index"},title:"Home"}},[r("img",{staticClass:"logo",attrs:{src:n(204)}}),t._v("\n      IATI/3W Explorer\n    ")]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:{name:"orgs"},title:"Organisations involved in activites in Somalia.","active-class":"active"}},[t._v("Who?")]),t._v(" "),r("b-nav-item",{attrs:{to:{name:"sectors"},title:"Aid sectors active in Somalia.","active-class":"active"}},[t._v("What?")]),t._v(" "),r("b-nav-item",{attrs:{to:{name:"locations"},title:"Locations active in Somalia.","active-class":"active"}},[t._v("Where?")]),t._v(" "),r("b-nav-item",{attrs:{to:{name:"about"},title:"About the prototype IATI/3W explorer","active-class":"active"}},[t._v("About")])],1)],1)],1),t._v(" "),r("nuxt"),t._v(" "),r("footer",{staticClass:"mt-auto"},[r("b-container",[r("b-row",[r("b-col",{attrs:{md:"6"}},[t._v("\n          Created by "),r("a",{attrs:{href:"https://www.devinit.org/",target:"_blank"}},[t._v("Development Initiatives")]),t._v(", with funding\n          from the "),r("a",{attrs:{href:"https://www.government.nl/ministries/ministry-of-foreign-affairs",target:"_blank"}},[t._v("Netherlands Ministry of Foreign\n          Affairs")]),t._v(" on behalf of the "),r("a",{attrs:{href:"https://interagencystandingcommittee.org/greater-transparency",target:"_blank"}},[t._v("Grand Bargain Transparency Workstream")])]),t._v(" "),r("b-col",{staticClass:"text-md-right",attrs:{md:"6"}},[t._v("\n          This site is a prototype. Quality and accuracy are not guaranteed.\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},170:function(t,e,n){t.exports=n(171)},204:function(t,e,n){t.exports=n.p+"img/iati3w-icon.0764b93.png"},205:function(t,e,n){"use strict";n(143)},206:function(t,e,n){var r=n(68)(!1);r.push([t.i,"body{font-family:sans-serif}footer{padding:20px;background-color:#e9ecef}img.logo{height:2ex}div#__layout,div#__nuxt{height:100%!important;flex-direction:column!important;display:flex!important}.navbar-primary{align-items:center;padding:1ex;background:#fff;border-bottom:1px solid #add8e6}nav a{padding-left:1em;text-decoration:none}a.active{font-weight:700}nav.secondary{display:flex;font-size:80%}nav.secondary a{font-size:80%;text-decoration:none;font-style:italic;padding:0 2em 0 0}main{margin-top:60px;word-wrap:break-word}main h2{font-size:172.8%}main h3{font-size:144%;font-weight:400}main h4{font-size:120%;font-weight:400}.pre{white-space:pre-wrap}#activity-list li{margin-bottom:2ex}.info{display:block;font-size:69.5%}.inline-list{display:flex;flex-wrap:wrap;justify-content:flex-start}.inline-list .item{width:15em;margin:0 1em 1em}.inline-list.wide .item{width:32em}dl{display:grid;grid-template-columns:10em auto}dt{grid-column:1;text-align:right;font-size:83.333333%;font-weight:700}dd{grid-column:2;margin-bottom:2ex}ul li{margin-bottom:1ex}.fixture{text-decoration:underline;margin-bottom:.5ex;color:#333;font-size:83.333333%}h2{margin-top:0;font-size:120%}#map{width:100vw;height:50vh}",""]),t.exports=r},207:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return f})),n.d(e,"mutations",(function(){return d})),n.d(e,"actions",(function(){return m}));var r=n(11),o=(n(52),n(3),n(35)),c=n.n(o),l="https://davidmegginson.github.io/iati3w-data",f=function(){return{orgs:{},sectors:{},activities:{},locations:{}}},d={setOrgs:function(t,e){t.orgs=e},setSectors:function(t,e){t.sectors=e},setActivities:function(t,e){t.activities=e},setLocations:function(t,e){t.locations=e}},m={loadOrgs:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!(Object.keys(r.orgs).length>0)){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,c.a.get("".concat(l,"/org-index.json"));case 5:o=e.sent,data=o.data,n("setOrgs",data);case 8:case"end":return e.stop()}}),e)})))()},loadSectors:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!(Object.keys(r.sectors).length>0)){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,c.a.get("".concat(l,"/sector-index.json"));case 5:o=e.sent,data=o.data,n("setSectors",data);case 8:case"end":return e.stop()}}),e)})))()},loadLocations:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!(Object.keys(r.locations).length>0)){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,c.a.get("".concat(l,"/location-index.json"));case 5:o=e.sent,data=o.data,n("setLocations",data);case 8:case"end":return e.stop()}}),e)})))()},loadActivities:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!(Object.keys(r.activities).length>0)){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,c.a.get("".concat(l,"/activities.json"));case 5:o=e.sent,data=o.data,n("setActivities",data);case 8:case"end":return e.stop()}}),e)})))()}}}},[[170,11,1,12]]]);