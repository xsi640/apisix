(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56bccb86"],{"28a5":function(e,t,r){"use strict";var n=r("aae3"),i=r("cb7c"),o=r("ebd6"),a=r("0390"),s=r("9def"),c=r("5f1b"),u=r("520a"),l=r("79e5"),f=Math.min,p=[].push,d="split",m="length",b="lastIndex",h=4294967295,v=!l(function(){RegExp(h,"y")});r("214f")("split",2,function(e,t,r,l){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(i,e,t);var o,a,s,c=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,d=void 0===t?h:t>>>0,v=new RegExp(e.source,l+"g");while(o=u.call(v,i)){if(a=v[b],a>f&&(c.push(i.slice(f,o.index)),o[m]>1&&o.index<i[m]&&p.apply(c,o.slice(1)),s=o[0][m],f=a,c[m]>=d))break;v[b]===o.index&&v[b]++}return f===i[m]?!s&&v.test("")||c.push(""):c.push(i.slice(f)),c[m]>d?c.slice(0,d):c}:"0"[d](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):y.call(String(i),r,n)},function(e,t){var n=l(y,e,this,t,y!==r);if(n.done)return n.value;var u=i(e),p=String(this),d=o(u,RegExp),m=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),g=new d(v?u:"^(?:"+u.source+")",b),O=void 0===t?h:t>>>0;if(0===O)return[];if(0===p.length)return null===c(g,p)?[p]:[];var k=0,j=0,w=[];while(j<p.length){g.lastIndex=v?j:0;var x,$=c(g,v?p:p.slice(j));if(null===$||(x=f(s(g.lastIndex+(v?0:j)),p.length))===k)j=a(p,j,m);else{if(w.push(p.slice(k,j)),w.length===O)return w;for(var E=1;E<=$.length-1;E++)if(w.push($[E]),w.length===O)return w;j=k=x}}return w.push(p.slice(k)),w}]})},"504c":function(e,t,r){var n=r("9e1e"),i=r("0d58"),o=r("6821"),a=r("52a7").f;e.exports=function(e){return function(t){var r,s=o(t),c=i(s),u=c.length,l=0,f=[];while(u>l)r=c[l++],n&&!a.call(s,r)||f.push(e?[r,s[r]]:s[r]);return f}}},"7a7e":function(e,t,r){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},b32d:function(e,t,r){"use strict";var n=r("bc3a"),i=r.n(n),o=r("5c96"),a=i.a.create({baseURL:"/apisix/admin/",timeout:5e3});a.interceptors.request.use(function(e){return e},function(e){Promise.reject(e)}),a.interceptors.response.use(function(e){return e.data},function(e){return Object(o["Message"])({message:e.response.data.error_msg||e.message,type:"error",duration:5e3}),Promise.reject(e)}),t["a"]=a},b5f7:function(e,t,r){"use strict";r.d(t,"e",function(){return i}),r.d(t,"b",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return c});var n=r("b32d"),i=function(e,t){return Object(n["a"])({url:"/upstreams/".concat(e),method:"PUT",data:t})},o=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"GET"})},a=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"DELETE"})},s=function(e){return Object(n["a"])({url:"/upstreams",method:"POST",data:e})},c=function(){return Object(n["a"])({url:"/upstreams",method:"GET"})}},c9c9:function(e,t,r){"use strict";var n=r("7a7e"),i=r.n(n);i.a},ea97:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","show-message":!1}},[r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{placeholder:"Description"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{label:"Type",prop:"type"}},[r("el-select",{attrs:{placeholder:"Select a Type"},on:{change:e.typeSelectorChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.types,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{label:"Key"}},[r("el-input",{attrs:{placeholder:"Input a Key",disabled:"chash"!==e.form.type},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),e._l(e.form.nodes,function(t,n){return r("el-form-item",{key:n,staticClass:"node-item",attrs:{label:"Node"+(n+1)}},[r("el-form-item",{attrs:{rules:[{required:!0,pattern:/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g,type:"string"}],prop:"nodes."+n+".ip"}},[r("el-input",{attrs:{placeholder:"IP"},model:{value:t.ip,callback:function(r){e.$set(t,"ip",r)},expression:"item.ip"}})],1),r("el-form-item",{attrs:{rules:[{required:!0}],prop:"nodes."+n+".port"}},[r("el-input",{attrs:{placeholder:"Port",type:"number"},model:{value:t.port,callback:function(r){e.$set(t,"port",r)},expression:"item.port"}})],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"Weights",type:"number"},model:{value:t.weights,callback:function(r){e.$set(t,"weights",r)},expression:"item.weights"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return r.preventDefault(),e.removeNode(t)}}},[e._v("\n          "+e._s(e.$t("button.delete"))+"\n        ")])],1)],1)}),r("el-form-item",[r("el-button",{on:{click:e.addNode}},[e._v("\n        "+e._s(e.$t("button.add_node"))+"\n      ")])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        "+e._s(e.$t("button.save"))+"\n      ")]),r("el-button",{on:{click:e.toPreviousPage}},[e._v("\n        "+e._s(e.$t("button.cancel"))+"\n      ")])],1)],2)],1)},i=[],o=(r("8e6e"),r("456d"),r("bd86")),a=(r("c5f6"),r("28a5"),r("768b")),s=(r("ac6a"),r("ffc1"),r("96cf"),r("3b8d")),c=(r("7f7f"),r("d225")),u=r("b0b4"),l=r("308d"),f=r("6bb5"),p=r("4e2b"),d=r("9ab4"),m=r("60a3"),b=r("b5f7"),h=r("e741");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments)),e.form={type:null,key:null,nodes:[],desc:""},e.rules={type:{required:!0}},e.isEditMode=!1,e.types=["roundrobin","chash"],e}return Object(p["a"])(t,e),Object(u["a"])(t,[{key:"created",value:function(){this.isEditMode=-1===this.$route.name.indexOf("Create"),this.isEditMode&&this.getData()}},{key:"getData",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,o,s,c,u,l,f,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.next=3,Object(b["b"])(t);case 3:r=e.sent,n=r.node.value,i=n.type,o=void 0===i?null:i,s=n.nodes,c=void 0===s?[]:s,u=n.key,l=void 0===u?null:u,f=n.desc,p=void 0===f?"":f,c=Object.entries(c).map(function(e){var t=Object(a["a"])(e,2),r=t[0],n=t[1],i=r.split(":")[0],o=r.split(":")[1],s=n;return{ip:i,port:o,weights:s}}),this.form={type:o,key:l,nodes:c,desc:p};case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onSubmit",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.form.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(r){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("onSubmit",t.form),n={},t.form.nodes.map(function(e){e.ip&&e.port&&String(e.weights)&&(n["".concat(e.ip,":").concat(e.port)]=Number(e.weights))}),!r){e.next=21;break}if(i=y({},t.form,{nodes:n}),t.form.nodes.length){e.next=8;break}return t.$message.error("Please add 1 node at least!"),e.abrupt("return");case 8:if("chash"!==i.type&&delete i.key,Object.entries(i).forEach(function(e){var t=Object(a["a"])(e,2),r=t[0],n=t[1];""!==n&&null!==n||delete i[r]}),!t.isEditMode){e.next=15;break}return e.next=13,Object(b["e"])(t.$route.params.id,i);case 13:e.next=17;break;case 15:return e.next=17,Object(b["a"])(i);case 17:t.$message.success("".concat(t.isEditMode?"Update the":"Create a"," upstream successfully!")),t.isEditMode||(h["a"].delView(t.$route),t.$nextTick(function(){t.$router.push({name:"SchemaUpstreamList"})})),e.next=22;break;case 21:return e.abrupt("return",!1);case 22:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"toPreviousPage",value:function(){this.$router.go(-1)}},{key:"typeSelectorChange",value:function(e){"chash"!==e&&(this.form.key=null)}},{key:"addNode",value:function(){this.form.nodes.push({ip:null,port:null,weights:null})}},{key:"removeNode",value:function(e){var t=this.form.nodes.indexOf(e);-1!==t&&this.form.nodes.splice(t,1)}}]),t}(m["c"]);g=d["a"]([Object(m["a"])({name:"RouterEdit"})],g);var O=g,k=O,j=(r("c9c9"),r("2877")),w=Object(j["a"])(k,n,i,!1,null,null,null);t["default"]=w.exports},ffc1:function(e,t,r){var n=r("5ca1"),i=r("504c")(!0);n(n.S,"Object",{entries:function(e){return i(e)}})}}]);