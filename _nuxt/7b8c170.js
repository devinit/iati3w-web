(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{249:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("4e1ab684",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("5753a89d",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";n(167);var r={data:function(){return{}},props:{name:String,type:String,stub:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}}},o=n(54),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("nuxt-link",{attrs:{to:{name:"sectors-type-stub",params:{type:t.type,stub:t.stub}}}},[t._v(t._s(t.name))]),t._v(" "),t.org_count>-1?[n("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.org_count,"organisation","organisations")))])]:t._e(),t._v(" "),t.activity_count>-1?[n("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])]:t._e()],2)}),[],!1,null,null,null);e.a=component.exports},391:function(t,e,n){"use strict";n(249)},392:function(t,e,n){var r=n(55)(!1);r.push([t.i,".clickable[data-v-03de7aee]{cursor:pointer}",""]),t.exports=r},393:function(t,e,n){"use strict";n(250)},394:function(t,e,n){var r=n(55)(!1);r.push([t.i,".treemap[data-v-03de7aee]{max-width:100%;min-height:40vh;margin:auto}",""]),t.exports=r},397:function(t,e,n){"use strict";n(3),n(2),n(4),n(5);var r=n(0),o=(n(9),n(166),n(13),n(1),n(48)),c=n(390),l=n.n(c);n(400);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"TreeMap",props:{data:Object,type:String,summariseBy:{type:String,default:"activities"},colors:Object,clickable:{type:Boolean,default:!0}},data:function(){return{chart:null,defaultColors:["#CF3D1E","#F15623","#F68B1F","#FFC60B","#DFCE21","#BCD631","#95C93D","#48B85C","#00833D","#00B48D","#60C4B1","#27C4F4","#478DCB","#3E67B1","#4251A3","#59449B","#6E3F7C","#6A246D","#8A4873","#EB0080","#EF58A0","#C05A89"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({treeMapData:function(){var t=this;return Object.entries(this.data).map((function(e){return{entry:e[1].name,stub:e[1].stub,activities:e[1].activities?e[1].activities.filter((function(e){return t.checkSource(e)})).length:null,organisations:e[1].organisations?e[1].organisations:t.$options.filters.flatten(e[1].orgs).length}}))},datasets:function(){var t=this;return[{label:"Sectors",tree:this.treeMapData,key:this.summariseBy,groups:["entry"],borderWidth:1,fontColor:"white",borderColor:"rgba(255,255,255,1)",backgroundColor:function(e){return e.dataset.data.length<1?"transparent":t.colors?t.colors[e.dataset.data[e.dataIndex]._data.entry]:t.defaultColors[e.dataIndex]}}]}},Object(o.b)(["source"])),methods:{drawChart:function(){var t=this;this.chart=new l.a(this.$refs.treemapCanvas,{type:"treemap",data:{datasets:this.datasets},options:{maintainAspectRatio:!1,title:{display:!1},legend:{display:!1},tooltips:{callbacks:{title:function(t,data){return t=t[0],data.datasets[t.datasetIndex].data[t.index].g},label:function(t,data){var e=data.datasets[t.datasetIndex].data[t.index]._data.children[0],n=[];return e.activities?n.push(" Activities: ".concat(e.activities)):e.organisations&&n.push(" Organisations: ".concat(e.organisations)),n}}},onClick:function(e,i,n){if(t.clickable){var r=t.type,o=t.datasets[0].data[i[0]._index]._data.children[0].stub;t.$router.push({name:"sectors-type-stub",params:{type:r,stub:o}})}}}})},checkSource:function(t){return"all"==this.source||("3w"==this.source&&8==t.length||"iati"==this.source&&8!=t.length)}},mounted:function(){this.drawChart()},watch:{data:function(){this.chart.data.datasets[0].tree=this.treeMapData,this.chart.update()},source:function(){this.chart.data.datasets[0].tree=this.treeMapData,this.chart.update()}}},h=(n(391),n(393),n(54)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{ref:"treemapCanvas",class:"treemap"+(t.clickable?" clickable":"")})])}),[],!1,null,"03de7aee",null);e.a=component.exports},399:function(t,e,n){var map={"./af":255,"./af.js":255,"./ar":256,"./ar-dz":257,"./ar-dz.js":257,"./ar-kw":258,"./ar-kw.js":258,"./ar-ly":259,"./ar-ly.js":259,"./ar-ma":260,"./ar-ma.js":260,"./ar-sa":261,"./ar-sa.js":261,"./ar-tn":262,"./ar-tn.js":262,"./ar.js":256,"./az":263,"./az.js":263,"./be":264,"./be.js":264,"./bg":265,"./bg.js":265,"./bm":266,"./bm.js":266,"./bn":267,"./bn-bd":268,"./bn-bd.js":268,"./bn.js":267,"./bo":269,"./bo.js":269,"./br":270,"./br.js":270,"./bs":271,"./bs.js":271,"./ca":272,"./ca.js":272,"./cs":273,"./cs.js":273,"./cv":274,"./cv.js":274,"./cy":275,"./cy.js":275,"./da":276,"./da.js":276,"./de":277,"./de-at":278,"./de-at.js":278,"./de-ch":279,"./de-ch.js":279,"./de.js":277,"./dv":280,"./dv.js":280,"./el":281,"./el.js":281,"./en-au":282,"./en-au.js":282,"./en-ca":283,"./en-ca.js":283,"./en-gb":284,"./en-gb.js":284,"./en-ie":285,"./en-ie.js":285,"./en-il":286,"./en-il.js":286,"./en-in":287,"./en-in.js":287,"./en-nz":288,"./en-nz.js":288,"./en-sg":289,"./en-sg.js":289,"./eo":290,"./eo.js":290,"./es":291,"./es-do":292,"./es-do.js":292,"./es-mx":293,"./es-mx.js":293,"./es-us":294,"./es-us.js":294,"./es.js":291,"./et":295,"./et.js":295,"./eu":296,"./eu.js":296,"./fa":297,"./fa.js":297,"./fi":298,"./fi.js":298,"./fil":299,"./fil.js":299,"./fo":300,"./fo.js":300,"./fr":301,"./fr-ca":302,"./fr-ca.js":302,"./fr-ch":303,"./fr-ch.js":303,"./fr.js":301,"./fy":304,"./fy.js":304,"./ga":305,"./ga.js":305,"./gd":306,"./gd.js":306,"./gl":307,"./gl.js":307,"./gom-deva":308,"./gom-deva.js":308,"./gom-latn":309,"./gom-latn.js":309,"./gu":310,"./gu.js":310,"./he":311,"./he.js":311,"./hi":312,"./hi.js":312,"./hr":313,"./hr.js":313,"./hu":314,"./hu.js":314,"./hy-am":315,"./hy-am.js":315,"./id":316,"./id.js":316,"./is":317,"./is.js":317,"./it":318,"./it-ch":319,"./it-ch.js":319,"./it.js":318,"./ja":320,"./ja.js":320,"./jv":321,"./jv.js":321,"./ka":322,"./ka.js":322,"./kk":323,"./kk.js":323,"./km":324,"./km.js":324,"./kn":325,"./kn.js":325,"./ko":326,"./ko.js":326,"./ku":327,"./ku.js":327,"./ky":328,"./ky.js":328,"./lb":329,"./lb.js":329,"./lo":330,"./lo.js":330,"./lt":331,"./lt.js":331,"./lv":332,"./lv.js":332,"./me":333,"./me.js":333,"./mi":334,"./mi.js":334,"./mk":335,"./mk.js":335,"./ml":336,"./ml.js":336,"./mn":337,"./mn.js":337,"./mr":338,"./mr.js":338,"./ms":339,"./ms-my":340,"./ms-my.js":340,"./ms.js":339,"./mt":341,"./mt.js":341,"./my":342,"./my.js":342,"./nb":343,"./nb.js":343,"./ne":344,"./ne.js":344,"./nl":345,"./nl-be":346,"./nl-be.js":346,"./nl.js":345,"./nn":347,"./nn.js":347,"./oc-lnc":348,"./oc-lnc.js":348,"./pa-in":349,"./pa-in.js":349,"./pl":350,"./pl.js":350,"./pt":351,"./pt-br":352,"./pt-br.js":352,"./pt.js":351,"./ro":353,"./ro.js":353,"./ru":354,"./ru.js":354,"./sd":355,"./sd.js":355,"./se":356,"./se.js":356,"./si":357,"./si.js":357,"./sk":358,"./sk.js":358,"./sl":359,"./sl.js":359,"./sq":360,"./sq.js":360,"./sr":361,"./sr-cyrl":362,"./sr-cyrl.js":362,"./sr.js":361,"./ss":363,"./ss.js":363,"./sv":364,"./sv.js":364,"./sw":365,"./sw.js":365,"./ta":366,"./ta.js":366,"./te":367,"./te.js":367,"./tet":368,"./tet.js":368,"./tg":369,"./tg.js":369,"./th":370,"./th.js":370,"./tk":371,"./tk.js":371,"./tl-ph":372,"./tl-ph.js":372,"./tlh":373,"./tlh.js":373,"./tr":374,"./tr.js":374,"./tzl":375,"./tzl.js":375,"./tzm":376,"./tzm-latn":377,"./tzm-latn.js":377,"./tzm.js":376,"./ug-cn":378,"./ug-cn.js":378,"./uk":379,"./uk.js":379,"./ur":380,"./ur.js":380,"./uz":381,"./uz-latn":382,"./uz-latn.js":382,"./uz.js":381,"./vi":383,"./vi.js":383,"./x-pseudo":384,"./x-pseudo.js":384,"./yo":385,"./yo.js":385,"./zh-cn":386,"./zh-cn.js":386,"./zh-hk":387,"./zh-hk.js":387,"./zh-mo":388,"./zh-mo.js":388,"./zh-tw":389,"./zh-tw.js":389};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=399},416:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(47),n(48)),c=n(254),l=n(397),j={data:function(){return{busy:!0,sectorColors:{"Water Sanitation Hygiene":"#CF3D1E",Health:"#F15623",Protection:"#F68B1F","(No corresponding humanitarian cluster)":"#FFC60B",Nutrition:"#DFCE21","Food Security":"#BCD631",Education:"#95C93D","Shelter/ NFI":"#48B85C","Camp Coordination / Management":"#00833D","Early Recovery":"#00B48D","Emergency Shelter and NFI":"#60C4B1",Logistics:"#27C4F4","Emergency Telecommunications":"#478DCB","Gender Based Violence":"#3E67B1","Child Protection":"#4251A3","Housing, Land and Property":"#59449B","Mine Action":"#6E3F7C"}}},components:{Sector:c.a,Treemap:l.a},methods:{flatten:function(t){return this.$options.filters.flatten(t)},checkSource:function(t){return"all"==this.source||("3w"==this.source&&8==t.length||"iati"==this.source&&8!=t.length)}},computed:Object(o.b)(["sectors","source"]),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loadSectors");case 2:t.busy=!1;case 3:case"end":return e.stop()}}),e)})))()}},d=n(54),component=Object(d.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.busy?n("main",[n("div",{staticClass:"d-flex justify-content-center mb-3"},[n("b-spinner",{attrs:{variant:"secondary",label:"Loading..."}})],1)]):n("main",[n("h1",[t._v("Sectors in Somalia")]),t._v(" "),n("section",{attrs:{id:"content"}},[n("section",{attrs:{id:"humanitarian"}},[n("client-only",[n("Treemap",{staticClass:"mb-4",attrs:{data:t.sectors.humanitarian,type:"humanitarian",colors:t.sectorColors}})],1),t._v(" "),n("div",{staticClass:"inline-list"},t._l(Object.keys(t.sectors.humanitarian).sort(),(function(e){return n("Sector",{key:e,attrs:{name:t.sectors.humanitarian[e].name,stub:e,type:"humanitarian",org_count:t.flatten(t.sectors.humanitarian[e].orgs).length,activity_count:t.sectors.humanitarian[e].activities.filter((function(e){return t.checkSource(e)})).length}})})),1)],1)]),t._v(" "),n("b-alert",{attrs:{variant:"light",show:""}},[t._v("The sectors shown above are derived from humanitarian\n    clusters. Most activities published to IATI use OECD DAC CRS purpose codes\n    rather than humanitarian clusters. These have been mapped to the above\n    clusters. Note that this includes both humanitarian and development\n    activities.")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);