(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-253d8d80"],{"06fc":function(e,t,r){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},2366:function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);function a(e,t){var n=t||0,a=r;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")}e.exports=a},"25a2":function(e,t,r){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},"3dbd":function(e,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"e",function(){return i}),r.d(t,"b",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"a",function(){return u});var n=r("b32d"),a=function(){return Object(n["a"])({url:"/services",method:"get"})},i=function(e,t){return Object(n["a"])({url:"/services/".concat(e),method:"PUT",data:t})},o=function(e){return Object(n["a"])({url:"/services/".concat(e),method:"GET"})},s=function(e){return Object(n["a"])({url:"/services/".concat(e),method:"DELETE"})},u=function(e){return Object(n["a"])({url:"/services",method:"POST",data:e})}},"504c":function(e,t,r){var n=r("9e1e"),a=r("0d58"),i=r("6821"),o=r("52a7").f;e.exports=function(e){return function(t){var r,s=i(t),u=a(s),c=u.length,l=0,d=[];while(c>l)r=u[l++],n&&!o.call(s,r)||d.push(e?[r,s[r]]:s[r]);return d}}},"7b78":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","show-message":!1}},[r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{placeholder:"Description"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{label:"URI",prop:"uri"}},[r("el-input",{attrs:{placeholder:"URI"},model:{value:e.form.uri,callback:function(t){e.$set(e.form,"uri",t)},expression:"form.uri"}})],1),r("el-form-item",{attrs:{label:"Host",prop:"host"}},[r("el-input",{attrs:{placeholder:"Host"},model:{value:e.form.host,callback:function(t){e.$set(e.form,"host",t)},expression:"form.host"}})],1),r("el-form-item",{attrs:{label:"Remote Adreess",prop:"remote_addr"}},[r("el-input",{attrs:{placeholder:"Remote Adreess"},model:{value:e.form.remote_addr,callback:function(t){e.$set(e.form,"remote_addr",t)},expression:"form.remote_addr"}})],1),r("el-form-item",{attrs:{label:"Methods"}},[r("el-select",{attrs:{multiple:"",placeholder:"Methods"},model:{value:e.form.methods,callback:function(t){e.$set(e.form,"methods",t)},expression:"form.methods"}},e._l(e.methods,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{label:"Upstream",prop:"upstream_id"}},[r("el-select",{attrs:{placeholder:"Upstream"},model:{value:e.form.upstream_id,callback:function(t){e.$set(e.form,"upstream_id",t)},expression:"form.upstream_id"}},e._l(e.upstreamList,function(e){return r("el-option",{key:e.id,attrs:{label:e.desc,value:e.id}})}),1)],1),r("el-form-item",{attrs:{label:"Service",prop:"service_id"}},[r("el-select",{attrs:{placeholder:"Service"},model:{value:e.form.service_id,callback:function(t){e.$set(e.form,"service_id",t)},expression:"form.service_id"}},e._l(e.serviceList,function(e){return r("el-option",{key:e.id,attrs:{label:e.desc,value:e.id}})}),1)],1),e._l(e.form.plugins,function(t,n){return r("el-form-item",{key:n,staticClass:"plugin-item",attrs:{label:"plugin"}},["tempPlugin"!==n?r("el-button",{attrs:{type:"info",plain:""},on:{click:function(t){return e.showPlugin(n)}}},[e._v("\n        "+e._s(n)+"\n      ")]):e._e(),"tempPlugin"!==n?r("el-button",{attrs:{type:"danger"},on:{click:function(t){return t.preventDefault(),e.removePlugin(n)}}},[e._v("\n        "+e._s(e.$t("button.delete"))+"\n      ")]):e._e(),"tempPlugin"===n?r("el-select",{staticClass:"plugin-select",attrs:{value:null,placeholder:"Select a Plugin"},on:{change:e.showPlugin}},e._l(e.filteredPluginList,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1):e._e()],1)}),r("el-form-item",[r("el-button",{attrs:{disabled:!e.filteredPluginList.length},on:{click:e.addPlugin}},[e._v("\n        "+e._s(e.$t("button.add_plugin"))+"\n      ")])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        "+e._s(e.$t("button.save"))+"\n      ")]),r("el-button",{on:{click:e.toPreviousPage}},[e._v("\n        "+e._s(e.$t("button.cancel"))+"\n      ")])],1)],2),r("PluginDialog",{attrs:{show:e.showPluginDialog,name:e.pluginName,"plugin-data":e.form.plugins[e.pluginName]},on:{hidePlugin:function(t){e.showPluginDialog=!1},save:e.onPluginSave}})],1)},a=[],i=(r("8e6e"),r("bd86")),o=(r("4917"),r("456d"),r("7618")),s=r("768b"),u=(r("ffc1"),r("ac6a"),r("96cf"),r("3b8d")),c=(r("7f7f"),r("d225")),l=r("b0b4"),d=r("308d"),p=r("6bb5"),m=r("4e2b"),f=r("9ab4"),h=r("60a3"),b=r("c8f9"),v=r("80a7"),g=r("7d98"),y=r("b5f7"),O=r("3dbd"),j=r("e741");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){Object(i["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(d["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.form={uri:"",host:"",remote_addr:"",upstream_id:"",service_id:"",methods:[],plugins:{},desc:""},e.rules={uri:{required:!0}},e.isEditMode=!1,e.methods=["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS"],e.pluginList=[],e.pluginName="",e.showPluginDialog=!1,e.upstreamList=[],e.serviceList=[],e}return Object(m["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){this.isEditMode=-1===this.$route.name.indexOf("Create"),this.isEditMode&&this.getData(),this.getPluginList(),this.getUpstreamList(),this.getServiceList()}},{key:"reset",value:function(){this.form={uri:"",host:"",remote_addr:"",upstream_id:"",service_id:"",methods:[],plugins:{},desc:""}}},{key:"getData",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a,i,o,s,u,c,l,d,p,m,f,h,b,g,y,O;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.next=3,Object(v["c"])(t);case 3:r=e.sent,n=r.node.value,a=n.uri,i=void 0===a?"":a,o=n.host,s=void 0===o?"":o,u=n.remote_addr,c=void 0===u?"":u,l=n.upstream_id,d=void 0===l?"":l,p=n.service_id,m=void 0===p?"":p,f=n.methods,h=void 0===f?[]:f,b=n.plugins,g=void 0===b?{}:b,y=n.desc,O=void 0===y?"":y,this.form={uri:i,host:s,remote_addr:c,upstream_id:d,service_id:m,methods:h,plugins:g,desc:O};case 22:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onSubmit",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.form.validate(function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=15;break}if(n=Object.assign({},t.form),n.methods.length||delete n.methods,Object.entries(n).forEach(function(e){var t=Object(s["a"])(e,2),r=t[0],a=t[1];"object"===Object(o["a"])(n[r])?"plugins"!==r&&0===Object.keys(a).length&&delete n[r]:""===a&&delete n[r]}),!t.isEditMode){e.next=9;break}return e.next=7,Object(v["e"])(t.$route.params.id,n);case 7:e.next=11;break;case 9:return e.next=11,Object(v["a"])(n);case 11:t.$message.success("".concat(t.isEditMode?"Update the":"Create a"," service successfully!")),t.isEditMode||(j["a"].delView(t.$route),t.$nextTick(function(){t.$router.push({name:"SchemaRoutesList"})})),e.next=16;break;case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"toPreviousPage",value:function(){this.$router.go(-1)}},{key:"getUpstreamList",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["c"])();case 2:t=e.sent,r=t.node.nodes,n=void 0===r?[]:r,this.upstreamList=n.map(function(e){var t=e.key.match(/\/([0-9]+)/)[1];return P({},e.value,{id:t})});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getServiceList",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["c"])();case 2:t=e.sent,r=t.node.nodes,n=void 0===r?[]:r,this.serviceList=n.map(function(e){var t=e.key.match(/\/([0-9]+)/)[1];return P({},e.value,{id:t})});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPluginList",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(g["a"])();case 2:this.pluginList=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"showPlugin",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.pluginName=t,this.showPluginDialog=!0;case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"onPluginSave",value:function(e,t){delete this.form.plugins["tempPlugin"],this.showPluginDialog=!1,this.form.plugins[e]=t}},{key:"addPlugin",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.form.plugins.hasOwnProperty("tempPlugin")){e.next=2;break}return e.abrupt("return");case 2:this.form.plugins=P({},this.form.plugins,{tempPlugin:null});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"removePlugin",value:function(e){h["c"].delete(this.form.plugins,e)}},{key:"filteredPluginList",get:function(){var e=this;return this.pluginList.filter(function(t){return!e.form.plugins.hasOwnProperty(t)})}}]),t}(h["c"]);k=f["a"]([Object(h["a"])({name:"RouterEdit",components:{PluginDialog:b["a"]}})],k);var x=k,_=x,E=(r("7bb4"),r("2877")),D=Object(E["a"])(_,n,a,!1,null,null,null);t["default"]=D.exports},"7bb4":function(e,t,r){"use strict";var n=r("25a2"),a=r.n(n);a.a},"7d98":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("b32d"),a=function(){return Object(n["a"])({url:"/plugins/list",method:"get"})}},"80a7":function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"e",function(){return i}),r.d(t,"c",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"a",function(){return u});var n=r("b32d"),a=function(){return Object(n["a"])({url:"/routes",method:"GET"})},i=function(e,t){return Object(n["a"])({url:"/routes/".concat(e),method:"PUT",data:t})},o=function(e){return Object(n["a"])({url:"/routes/".concat(e),method:"GET"})},s=function(e){return Object(n["a"])({url:"/routes/".concat(e),method:"DELETE"})},u=function(e){return Object(n["a"])({url:"/routes",method:"POST",data:e})}},b32d:function(e,t,r){"use strict";var n=r("bc3a"),a=r.n(n),i=r("5c96"),o=a.a.create({baseURL:"/apisix/admin/",timeout:5e3});o.interceptors.request.use(function(e){return e},function(e){Promise.reject(e)}),o.interceptors.response.use(function(e){return e.data},function(e){return Object(i["Message"])({message:e.response.data.error_msg||e.message,type:"error",duration:5e3}),Promise.reject(e)}),t["a"]=o},b5f7:function(e,t,r){"use strict";r.d(t,"e",function(){return a}),r.d(t,"b",function(){return i}),r.d(t,"d",function(){return o}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return u});var n=r("b32d"),a=function(e,t){return Object(n["a"])({url:"/upstreams/".concat(e),method:"PUT",data:t})},i=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"GET"})},o=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"DELETE"})},s=function(e){return Object(n["a"])({url:"/upstreams",method:"POST",data:e})},u=function(){return Object(n["a"])({url:"/upstreams",method:"GET"})}},c437:function(e,t,r){var n,a,i=r("e1f4"),o=r("2366"),s=0,u=0;function c(e,t,r){var c=t&&r||0,l=t||[];e=e||{};var d=e.node||n,p=void 0!==e.clockseq?e.clockseq:a;if(null==d||null==p){var m=i();null==d&&(d=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=a=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:u+1,b=f-s+(h-u)/1e4;if(b<0&&void 0===e.clockseq&&(p=p+1&16383),(b<0||f>s)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=f,u=h,a=p,f+=122192928e5;var v=(1e4*(268435455&f)+h)%4294967296;l[c++]=v>>>24&255,l[c++]=v>>>16&255,l[c++]=v>>>8&255,l[c++]=255&v;var g=f/4294967296*1e4&268435455;l[c++]=g>>>8&255,l[c++]=255&g,l[c++]=g>>>24&15|16,l[c++]=g>>>16&255,l[c++]=p>>>8|128,l[c++]=255&p;for(var y=0;y<6;++y)l[c+y]=d[y];return t||o(l)}e.exports=c},c8f9:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"plugin-dialog"},[r("el-dialog",{attrs:{title:"Plugin "+e.name+" Edit",visible:e.show},on:{"update:visible":function(t){e.show=t}}},[r("el-form",{ref:"form",attrs:{model:e.data,rules:e.rules,"show-message":!1}},e._l(e.schema.properties,function(t,n){return r("el-form-item",{key:n,attrs:{label:n,"label-width":"160px",prop:n}},["integer"===e.schema.properties[n].type||"number"===e.schema.properties[n].type?r("el-input-number",{attrs:{min:e.schema.properties[n].minimum||-99999999999,max:e.schema.properties[n].maximum||99999999999,label:"描述文字"},on:{change:function(t){return e.onPropertyChange(n,t)}},model:{value:e.data[n],callback:function(t){e.$set(e.data,n,t)},expression:"data[key]"}}):e._e(),e.schema.properties[n].hasOwnProperty("enum")?r("el-select",{attrs:{placeholder:"Select a "+n},on:{change:function(t){return e.onPropertyChange(n,t)}},model:{value:e.data[n],callback:function(t){e.$set(e.data,n,t)},expression:"data[key]"}},e._l(e.schema.properties[n]["enum"],function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1):e._e(),"string"!==e.schema.properties[n].type||e.schema.properties[n].hasOwnProperty("enum")?e._e():r("el-input",{attrs:{placeholder:n},model:{value:e.data[n],callback:function(t){e.$set(e.data,n,t)},expression:"data[key]"}})],1)}),1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.onCancel}},[e._v("\n        Cancel\n      ")]),r("el-button",{attrs:{type:"primary",disabled:!e.isDataChanged},on:{click:e.onSave}},[e._v("\n        Confirm\n      ")])],1)],1)],1)},a=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("6762"),r("2fdb"),r("bd86")),o=(r("96cf"),r("3b8d")),s=(r("7f7f"),r("d225")),u=r("b0b4"),c=r("308d"),l=r("6bb5"),d=r("4e2b"),p=r("9ab4"),m=r("60a3"),f=r("b32d"),h=function(e){return Object(f["a"])({url:"/schema/plugins/".concat(e),method:"get"})};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach(function(t){Object(i["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=r("c437"),y=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.schema={properties:{}},e.rules={},e.data={},e.isDataChanged=!1,e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"onShowChange",value:function(e){this.resetPlugin(),e&&this.getschema(this.name)}},{key:"resetPlugin",value:function(){this.schema={properties:{}},this.rules={},this.data={},this.isDataChanged=!1}},{key:"getschema",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(r=e.sent,r.properties){e.next=5;break}return e.abrupt("return");case 5:for(a in this.schema=Object.assign({},v({},r,{name:this.name})),n=Object.assign({},r.properties),n)i=Object.assign({},n[a]),n[a]={trigger:"blur"},r.required&&(n[a].required=r.required.includes(a)),i.hasOwnProperty("type")&&(n[a]["type"]=i["type"]),i.hasOwnProperty("minimum")&&(n[a]["min"]=i["minimum"]),i.hasOwnProperty("maximum")&&(n[a]["max"]=i["maximum"]),i.hasOwnProperty("enum")&&(n[a]["type"]="enum",n[a]["enum"]=i["enum"]);this.rules=n,this.pluginData&&(this.data=Object.assign({},this.pluginData)),"key-auth"!==this.name||this.pluginData||(this.data={key:g()});case 11:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"onCancel",value:function(){this.$emit("hidePlugin")}},{key:"onSave",value:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$emit("save",e.name,e.data),e.$message.warning("Your data will be saved after you click the Save button")})}},{key:"onPropertyChange",value:function(e,t){this.data[e]=t,this.isDataChanged=!0}}]),t}(m["c"]);p["a"]([Object(m["b"])({default:!1})],y.prototype,"show",void 0),p["a"]([Object(m["b"])({default:""})],y.prototype,"name",void 0),p["a"]([Object(m["b"])({default:null})],y.prototype,"pluginData",void 0),p["a"]([Object(m["d"])("show")],y.prototype,"onShowChange",null),y=p["a"]([Object(m["a"])({name:"PluginDialog"})],y);var O=y,j=O,w=(r("f02e"),r("2877")),P=Object(w["a"])(j,n,a,!1,null,null,null);t["a"]=P.exports},e1f4:function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},f02e:function(e,t,r){"use strict";var n=r("06fc"),a=r.n(n);a.a},ffc1:function(e,t,r){var n=r("5ca1"),a=r("504c")(!0);n(n.S,"Object",{entries:function(e){return a(e)}})}}]);