(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3891d839"],{"06fc":function(e,t,n){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},2366:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);function a(e,t){var r=t||0,a=n;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}e.exports=a},"3dbd":function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return o});var r=n("b32d"),a=function(){return Object(r["a"])({url:"/services",method:"get"})},i=function(e,t){return Object(r["a"])({url:"/services/".concat(e),method:"PUT",data:t})},u=function(e){return Object(r["a"])({url:"/services/".concat(e),method:"GET"})},s=function(e){return Object(r["a"])({url:"/services/".concat(e),method:"DELETE"})},o=function(e){return Object(r["a"])({url:"/services",method:"POST",data:e})}},"504c":function(e,t,n){var r=n("9e1e"),a=n("0d58"),i=n("6821"),u=n("52a7").f;e.exports=function(e){return function(t){var n,s=i(t),o=a(s),c=o.length,l=0,p=[];while(c>l)n=o[l++],r&&!u.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}}},"7d98":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("b32d"),a=function(){return Object(r["a"])({url:"/plugins/list",method:"get"})}},ad67:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","show-message":!1}},[n("el-form-item",{attrs:{label:"Desc"}},[n("el-input",{attrs:{placeholder:"Description"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),n("el-form-item",{attrs:{label:"Upstream"}},[n("el-select",{attrs:{placeholder:"Upstream"},model:{value:e.form.upstream_id,callback:function(t){e.$set(e.form,"upstream_id",t)},expression:"form.upstream_id"}},e._l(e.upstreamList,function(e){return n("el-option",{key:e.id,attrs:{label:e.desc,value:e.id}})}),1)],1),e._l(e.form.plugins,function(t,r){return n("el-form-item",{key:r,staticClass:"plugin-item",attrs:{label:"plugin"}},["tempPlugin"!==r?n("el-button",{attrs:{type:"info",plain:""},on:{click:function(t){return e.showPlugin(r)}}},[e._v("\n        "+e._s(r)+"\n      ")]):e._e(),"tempPlugin"!==r?n("el-button",{attrs:{type:"danger"},on:{click:function(t){return t.preventDefault(),e.removePlugin(r)}}},[e._v("\n        "+e._s(e.$t("button.delete"))+"\n      ")]):e._e(),"tempPlugin"===r?n("el-select",{staticClass:"plugin-select",attrs:{value:null,placeholder:"Select a Plugin"},on:{change:e.showPlugin}},e._l(e.filteredPluginList,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}),1):e._e()],1)}),n("el-form-item",[n("el-button",{attrs:{disabled:!e.filteredPluginList.length},on:{click:e.addPlugin}},[e._v("\n        "+e._s(e.$t("button.add_plugin"))+"\n      ")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        "+e._s(e.$t("button.save"))+"\n      ")]),n("el-button",{on:{click:e.toPreviousPage}},[e._v("\n        "+e._s(e.$t("button.cancel"))+"\n      ")])],1)],2),n("PluginDialog",{attrs:{show:e.showPluginDialog,name:e.pluginName,"plugin-data":e.form.plugins[e.pluginName]},on:{hidePlugin:function(t){e.showPluginDialog=!1},save:e.onPluginSave}})],1)},a=[],i=(n("8e6e"),n("456d"),n("7618")),u=n("768b"),s=(n("ffc1"),n("ac6a"),n("bd86")),o=(n("4917"),n("96cf"),n("3b8d")),c=(n("7f7f"),n("d225")),l=n("b0b4"),p=n("308d"),f=n("6bb5"),m=n("4e2b"),d=n("9ab4"),h=n("60a3"),b=n("c8f9"),g=n("b5f7"),v=n("3dbd"),y=n("7d98"),O=n("e741");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(p["a"])(this,Object(f["a"])(t).apply(this,arguments)),e.form={plugins:{},upstream_id:"",desc:""},e.rules={},e.isEditMode=!1,e.pluginList=[],e.pluginName="",e.showPluginDialog=!1,e.upstreamList=[],e}return Object(m["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){this.isEditMode=-1===this.$route.name.indexOf("Create"),this.getUpstreamList(),this.getPluginList(),this.isEditMode&&this.getData()}},{key:"toPreviousPage",value:function(){this.$router.go(-1)}},{key:"getData",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,i,u,s,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.next=3,Object(v["b"])(t);case 3:n=e.sent,r=n.node.value,a=r.plugins,i=void 0===a?{}:a,u=r.upstream_id,s=void 0===u?"":u,o=r.desc,c=void 0===o?"":o,this.form={plugins:i,upstream_id:s,desc:c};case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getUpstreamList",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(g["c"])();case 2:t=e.sent,n=t.node.nodes,r=void 0===n?[]:n,this.upstreamList=r.map(function(e){var t=e.key.match(/\/([0-9]+)/)[1];return j({},e,{id:t})});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPluginList",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["a"])();case 2:this.pluginList=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"showPlugin",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.pluginName=t,this.showPluginDialog=!0;case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"onPluginSave",value:function(e,t){delete this.form.plugins["tempPlugin"],this.showPluginDialog=!1,this.form.plugins[e]=t}},{key:"addPlugin",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.form.plugins.hasOwnProperty("tempPlugin")){e.next=2;break}return e.abrupt("return");case 2:this.form.plugins=j({},this.form.plugins,{tempPlugin:null});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onSubmit",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.form.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("onSubmit",t.form),!n){e.next=15;break}if(r=Object.assign({},t.form),Object.entries(r).forEach(function(e){var t=Object(u["a"])(e,2),n=t[0],a=t[1];"object"===Object(i["a"])(r[n])?"plugins"!==n&&0===Object.keys(a).length&&delete r[n]:""===a&&delete r[n]}),!t.isEditMode){e.next=9;break}return e.next=7,Object(v["e"])(t.$route.params.id,r);case 7:e.next=11;break;case 9:return e.next=11,Object(v["a"])(r);case 11:t.$message.success("".concat(t.isEditMode?"Update the":"Create a"," service successfully!")),t.isEditMode||(O["a"].delView(t.$route),t.$nextTick(function(){t.$router.push({name:"SchemaServiceList"})})),e.next=16;break;case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"removePlugin",value:function(e){h["c"].delete(this.form.plugins,e)}},{key:"filteredPluginList",get:function(){var e=this;return this.pluginList.filter(function(t){return!e.form.plugins.hasOwnProperty(t)})}}]),t}(h["c"]);P=d["a"]([Object(h["a"])({name:"RouterEdit",components:{PluginDialog:b["a"]}})],P);var k=P,x=k,_=(n("d342"),n("2877")),D=Object(_["a"])(x,r,a,!1,null,null,null);t["default"]=D.exports},b32d:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),i=n("5c96"),u=a.a.create({baseURL:"/apisix/admin/",timeout:5e3});u.interceptors.request.use(function(e){return e},function(e){Promise.reject(e)}),u.interceptors.response.use(function(e){return e.data},function(e){return Object(i["Message"])({message:e.response.data.error_msg||e.message,type:"error",duration:5e3}),Promise.reject(e)}),t["a"]=u},b5f7:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return o});var r=n("b32d"),a=function(e,t){return Object(r["a"])({url:"/upstreams/".concat(e),method:"PUT",data:t})},i=function(e){return Object(r["a"])({url:"/upstreams/".concat(e),method:"GET"})},u=function(e){return Object(r["a"])({url:"/upstreams/".concat(e),method:"DELETE"})},s=function(e){return Object(r["a"])({url:"/upstreams",method:"POST",data:e})},o=function(){return Object(r["a"])({url:"/upstreams",method:"GET"})}},c437:function(e,t,n){var r,a,i=n("e1f4"),u=n("2366"),s=0,o=0;function c(e,t,n){var c=t&&n||0,l=t||[];e=e||{};var p=e.node||r,f=void 0!==e.clockseq?e.clockseq:a;if(null==p||null==f){var m=i();null==p&&(p=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=a=16383&(m[6]<<8|m[7]))}var d=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:o+1,b=d-s+(h-o)/1e4;if(b<0&&void 0===e.clockseq&&(f=f+1&16383),(b<0||d>s)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=d,o=h,a=f,d+=122192928e5;var g=(1e4*(268435455&d)+h)%4294967296;l[c++]=g>>>24&255,l[c++]=g>>>16&255,l[c++]=g>>>8&255,l[c++]=255&g;var v=d/4294967296*1e4&268435455;l[c++]=v>>>8&255,l[c++]=255&v,l[c++]=v>>>24&15|16,l[c++]=v>>>16&255,l[c++]=f>>>8|128,l[c++]=255&f;for(var y=0;y<6;++y)l[c+y]=p[y];return t||u(l)}e.exports=c},c8f9:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"plugin-dialog"},[n("el-dialog",{attrs:{title:"Plugin "+e.name+" Edit",visible:e.show},on:{"update:visible":function(t){e.show=t}}},[n("el-form",{ref:"form",attrs:{model:e.data,rules:e.rules,"show-message":!1}},e._l(e.schema.properties,function(t,r){return n("el-form-item",{key:r,attrs:{label:r,"label-width":"160px",prop:r}},["integer"===e.schema.properties[r].type||"number"===e.schema.properties[r].type?n("el-input-number",{attrs:{min:e.schema.properties[r].minimum||-99999999999,max:e.schema.properties[r].maximum||99999999999,label:"描述文字"},on:{change:function(t){return e.onPropertyChange(r,t)}},model:{value:e.data[r],callback:function(t){e.$set(e.data,r,t)},expression:"data[key]"}}):e._e(),e.schema.properties[r].hasOwnProperty("enum")?n("el-select",{attrs:{placeholder:"Select a "+r},on:{change:function(t){return e.onPropertyChange(r,t)}},model:{value:e.data[r],callback:function(t){e.$set(e.data,r,t)},expression:"data[key]"}},e._l(e.schema.properties[r]["enum"],function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}),1):e._e(),"string"!==e.schema.properties[r].type||e.schema.properties[r].hasOwnProperty("enum")?e._e():n("el-input",{attrs:{placeholder:r},model:{value:e.data[r],callback:function(t){e.$set(e.data,r,t)},expression:"data[key]"}})],1)}),1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.onCancel}},[e._v("\n        Cancel\n      ")]),n("el-button",{attrs:{type:"primary",disabled:!e.isDataChanged},on:{click:e.onSave}},[e._v("\n        Confirm\n      ")])],1)],1)],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),u=(n("96cf"),n("3b8d")),s=(n("7f7f"),n("d225")),o=n("b0b4"),c=n("308d"),l=n("6bb5"),p=n("4e2b"),f=n("9ab4"),m=n("60a3"),d=n("b32d"),h=function(e){return Object(d["a"])({url:"/schema/plugins/".concat(e),method:"get"})};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=n("c437"),y=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.schema={properties:{}},e.rules={},e.data={},e.isDataChanged=!1,e}return Object(p["a"])(t,e),Object(o["a"])(t,[{key:"onShowChange",value:function(e){this.resetPlugin(),e&&this.getschema(this.name)}},{key:"resetPlugin",value:function(){this.schema={properties:{}},this.rules={},this.data={},this.isDataChanged=!1}},{key:"getschema",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,n.properties){e.next=5;break}return e.abrupt("return");case 5:for(a in this.schema=Object.assign({},g({},n,{name:this.name})),r=Object.assign({},n.properties),r)i=Object.assign({},r[a]),r[a]={trigger:"blur"},n.required&&(r[a].required=n.required.includes(a)),i.hasOwnProperty("type")&&(r[a]["type"]=i["type"]),i.hasOwnProperty("minimum")&&(r[a]["min"]=i["minimum"]),i.hasOwnProperty("maximum")&&(r[a]["max"]=i["maximum"]),i.hasOwnProperty("enum")&&(r[a]["type"]="enum",r[a]["enum"]=i["enum"]);this.rules=r,this.pluginData&&(this.data=Object.assign({},this.pluginData)),"key-auth"!==this.name||this.pluginData||(this.data={key:v()});case 11:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"onCancel",value:function(){this.$emit("hidePlugin")}},{key:"onSave",value:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$emit("save",e.name,e.data),e.$message.warning("Your data will be saved after you click the Save button")})}},{key:"onPropertyChange",value:function(e,t){this.data[e]=t,this.isDataChanged=!0}}]),t}(m["c"]);f["a"]([Object(m["b"])({default:!1})],y.prototype,"show",void 0),f["a"]([Object(m["b"])({default:""})],y.prototype,"name",void 0),f["a"]([Object(m["b"])({default:null})],y.prototype,"pluginData",void 0),f["a"]([Object(m["d"])("show")],y.prototype,"onShowChange",null),y=f["a"]([Object(m["a"])({name:"PluginDialog"})],y);var O=y,w=O,j=(n("f02e"),n("2877")),P=Object(j["a"])(w,r,a,!1,null,null,null);t["a"]=P.exports},d342:function(e,t,n){"use strict";var r=n("ef54"),a=n.n(r);a.a},e1f4:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},ef54:function(e,t,n){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},f02e:function(e,t,n){"use strict";var r=n("06fc"),a=n.n(r);a.a},ffc1:function(e,t,n){var r=n("5ca1"),a=n("504c")(!0);r(r.S,"Object",{entries:function(e){return a(e)}})}}]);