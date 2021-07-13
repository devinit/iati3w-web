(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{254:function(t,n,e){"use strict";e(167);var o={data:function(){return{}},props:{name:String,type:String,stub:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}}},r=e(54),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("nuxt-link",{attrs:{to:{name:"sectors-type-stub",params:{type:t.type,stub:t.stub}}}},[t._v(t._s(t.name))]),t._v(" "),t.org_count>-1?[e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.org_count,"organisation","organisations")))])]:t._e(),t._v(" "),t.activity_count>-1?[e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])]:t._e()],2)}),[],!1,null,null,null);n.a=component.exports},419:function(t,n,e){"use strict";e.r(n);e(2),e(1),e(4),e(5);var o=e(11),r=e(0),c=(e(47),e(17),e(3),e(13),e(395)),l=e.n(c),_=e(48),f=e(253),v=e(254),y=e(246),h=e(252),m=e(396);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var O={data:function(){return{busy:!0,location:{}}},components:{Org:f.a,Sector:v.a,LocationLink:y.a,Location:h.a,ActivitiesList:m.a},methods:{flatten:function(t){return this.$options.filters.flatten(t)},handleScroll:function(){var t=this.$route.hash.split("#")[1];this.$route.hash&&setTimeout((function(){var n=document.getElementById(t);l.a.scrollTo(n,500)}),300)},checkSource:function(t){return"all"==this.source||("3w"==this.source&&8==t.length||"iati"==this.source&&8!=t.length)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({sector_count:function(){return this.$options.filters.flatten(this.org.sectors).length},partner_count:function(){return this.$options.filters.flatten(this.org.partners).length},region_count:function(){return Object.keys(this.org.locations.admin1).length},activity_count:function(){return this.$options.filters.flatten(this.org.activities).length},location_name:function(){if(Object.keys(this.locations).length>0)return this.locations[this.$route.params.type][this.$route.params.stub].info.name},location_type:function(){return this.$route.params.type},stub:function(){return this.$route.params.stub}},Object(_.b)(["orgs","activities","locations","sectors","source"])),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("loadOrgs");case 2:return n.next=4,t.$store.dispatch("loadLocations");case 4:return n.next=6,t.$store.dispatch("loadActivities");case 6:return n.next=8,t.$store.dispatch("loadSectors");case 8:t.location=t.locations[t.$route.params.type][t.$route.params.stub],t.busy=!1,t.handleScroll();case 11:case"end":return n.stop()}}),n)})))()}},k=e(54),component=Object(k.a)(O,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t.busy?e("main",[e("div",{staticClass:"d-flex justify-content-center mb-3"},[e("b-spinner",{attrs:{variant:"secondary",label:"Loading..."}})],1)]):e("main",[e("section",{attrs:{id:"content"}},[e("nav",{staticClass:"secondary"},["admin1"==t.location_type?[e("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.location.info.stub,type:t.location_type},hash:"#districts"}}},[t._v("Districts")])]:t._e(),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.location.info.stub,type:t.location_type},hash:"#orgs"}}},[t._v("Organisations")]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.location.info.stub,type:t.location_type},hash:"#sectors"}}},[t._v("Sectors")]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.location.info.stub,type:t.location_type},hash:"#activities"}}},[t._v("Activities")])],2),t._v(" "),e("h2",[t._v(t._s(t.location_name)+" "+t._s(t._f("capitalize")(t._f("location")(t.location_type))))]),t._v(" "),t._l(["admin1","admin2"],(function(n){return t.location.info[n]?e("div",{key:n},[e("p",[e("b",[t._v(t._s(t._f("location")(n))+": ")]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.location.info[n],type:n}}}},[t._v("\n            "+t._s(t.locations[n][t.location.info[n]].info.name)+"\n          ")])],1)]):t._e()})),t._v(" "),"admin1"==t.location_type?e("section",{attrs:{id:"districts"}},[e("h3",[t._v("Districts of "+t._s(t.location_name))]),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.locations.admin2).sort(),(function(n){return t.locations.admin2[n].info.admin1==t.stub?e("Location",{key:n,attrs:{stub:n,name:t.locations.admin2[n].info.name,type:"admin2",org_count:t.flatten(t.locations.admin2[n].orgs[t.source]).length,activity_count:t.locations.admin2[n].activities.filter((function(n){return t.checkSource(n)})).length}}):t._e()})),1)]):t._e(),t._v(" "),e("section",{attrs:{id:"orgs"}},[e("h3",[t._v("Organisations working in "+t._s(t.location_name))]),t._v(" "),t._l(["local","regional","international","unknown"],(function(n){return Object.keys(t.location.orgs[t.source][n]).length>0?e("section",{attrs:{id:"orgs."+n}},[e("h4",[t._v(t._s(t._f("capitalize")(t._f("scope")(n)))+"s")]),t._v(" "),e("b-card-group",{attrs:{columns:""}},t._l(Object.keys(t.location.orgs[t.source][n]).sort(),(function(o){return e("Org",{key:o,attrs:{org:t.orgs[o],activity_count:t.location.orgs[t.source][n][o]}})})),1)],1):t._e()}))],2),t._v(" "),e("section",{attrs:{id:"sectors"}},[e("h3",[t._v("Sectors active in "+t._s(t.location_name))]),t._v(" "),t._l(Object.keys(t.location.sectors[t.source]),(function(n){return e("div",{key:n},[Object.keys(t.location.sectors[t.source][n]).length>0?e("section",{attrs:{id:"sectors."+n}},[e("h4",[t._v(t._s(t._f("sector")(n))+"s")]),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.location.sectors[t.source][n]).sort(),(function(o){return e("Sector",{key:o,attrs:{stub:o,name:t.sectors[n][o].name,type:n,activity_count:t.location.sectors[t.source][n][o]}})})),1)]):t._e()])}))],2),t._v(" "),e("section",{attrs:{id:"activities"}},[e("h3",[t._v("Aid activities in "+t._s(t.location_name))]),t._v(" "),e("ActivitiesList",{attrs:{activities:t.activities,activitiesList:t.location.activities}})],1)],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);