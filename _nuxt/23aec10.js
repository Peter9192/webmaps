(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{260:function(e,t,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("21da013c",content,!0,{sourceMap:!1})},289:function(e,t,n){"use strict";n(260)},290:function(e,t,n){var r=n(58)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n#map{\n  width:600px;\n  height:420px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},306:function(e,t){},318:function(e,t){},325:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(35),n(17),n(36),n(303)),l=n(282),c=n(377),f={mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,map,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/era5_data_cutout.json").then((function(e){return e.json()}));case 2:t=e.sent,map=L.map(document.getElementById("map"),{center:[50,9],zoom:3}),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map),n=new o.LeafletLayer({views:[new l.a({repeat:!0})],layers:[new c.a({id:"cpm-layer",data:t,filled:!0,getPolygon:function(e){return[[e.lon-.25,e.lat-.25],[e.lon+.25,e.lat-.25],[e.lon+.25,e.lat+.25],[e.lon-.25,e.lat+.25]]},getElevation:1,getFillColor:function(e){return e.color},getLineColor:null,getLineWidth:0,opacity:.7})]}),map.addLayer(n);case 7:case"end":return e.stop()}}),e)})))()}},d=(n(289),n(37)),component=Object(d.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"map"}})}),[],!1,null,null,null);t.default=component.exports},381:function(e,t,n){"use strict";n.r(t);var r=n(37),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen p-10 flex place-items-center gap-4"},[n("div",{staticClass:"w-screen flex flex-col place-items-center gap-4"},[n("h1",{staticClass:"text-4xl"},[e._v("deck.gl map")]),e._v(" "),n("p",[e._v("\n      Background tiles from openstreetmap, overlaid with ERA5 data as polygon\n      layer.\n    ")]),e._v(" "),n("DeckGL")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DeckGL:n(325).default})}}]);