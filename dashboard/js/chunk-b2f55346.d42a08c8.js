(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2f55346"],{"28a5":function(t,e,n){"use strict";var a=n("aae3"),r=n("cb7c"),i=n("ebd6"),o=n("0390"),c=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),p=Math.min,d=[].push,f="split",h="length",b="lastIndex",g=4294967295,m=!l(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,l){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(r,t,e);var i,o,c,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?g:e>>>0,m=new RegExp(t.source,l+"g");while(i=u.call(m,r)){if(o=m[b],o>p&&(s.push(r.slice(p,i.index)),i[h]>1&&i.index<r[h]&&d.apply(s,i.slice(1)),c=i[0][h],p=o,s[h]>=f))break;m[b]===i.index&&m[b]++}return p===r[h]?!c&&m.test("")||s.push(""):s.push(r.slice(p)),s[h]>f?s.slice(0,f):s}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,a):v.call(String(r),n,a)},function(t,e){var a=l(v,t,this,e,v!==n);if(a.done)return a.value;var u=r(t),d=String(this),f=i(u,RegExp),h=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),y=new f(m?u:"^(?:"+u.source+")",b),w=void 0===e?g:e>>>0;if(0===w)return[];if(0===d.length)return null===s(y,d)?[d]:[];var O=0,j=0,k=[];while(j<d.length){y.lastIndex=m?j:0;var S,x=s(y,m?d:d.slice(j));if(null===x||(S=p(c(y.lastIndex+(m?0:j)),d.length))===O)j=o(d,j,h);else{if(k.push(d.slice(O,j)),k.length===w)return k;for(var P=1;P<=x.length-1;P++)if(k.push(x[P]),k.length===w)return k;j=O=S}}return k.push(d.slice(O)),k}]})},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[],i=n("d225"),o=n("b0b4"),c=n("308d"),s=n("6bb5"),u=n("4e2b"),l=n("9ab4"),p=n("60a3"),d=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)},f=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),h=function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t},b=function(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop},g=function(t,e,n){var a=b(),r=t-a,i=20,o=0;e="undefined"===typeof e?500:e;var c=function t(){o+=i;var c=d(o,a,r,e);h(c),o<e?f(t):n&&"function"===typeof n&&n()};c()},m=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"handleSizeChange",value:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&g(0,800)}},{key:"handleCurrentChange",value:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&g(0,800)}},{key:"currentPage",get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},{key:"pageSize",get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}]),e}(p["c"]);l["a"]([Object(p["b"])({required:!0})],m.prototype,"total",void 0),l["a"]([Object(p["b"])({default:1})],m.prototype,"page",void 0),l["a"]([Object(p["b"])({default:20})],m.prototype,"limit",void 0),l["a"]([Object(p["b"])({default:function(){return[10,20,30,50]}})],m.prototype,"pageSizes",void 0),l["a"]([Object(p["b"])({default:"total, sizes, prev, pager, next, jumper"})],m.prototype,"layout",void 0),l["a"]([Object(p["b"])({default:!0})],m.prototype,"background",void 0),l["a"]([Object(p["b"])({default:!0})],m.prototype,"autoScroll",void 0),l["a"]([Object(p["b"])({default:!1})],m.prototype,"hidden",void 0),m=l["a"]([Object(p["a"])({name:"Pagination"})],m);var v=m,y=v,w=(n("34cc"),n("2877")),O=Object(w["a"])(y,a,r,!1,null,"2f4afb68",null);e["a"]=O.exports},"34cc":function(t,e,n){"use strict";var a=n("da29"),r=n.n(a);r.a},"504c":function(t,e,n){var a=n("9e1e"),r=n("0d58"),i=n("6821"),o=n("52a7").f;t.exports=function(t){return function(e){var n,c=i(e),s=r(c),u=s.length,l=0,p=[];while(u>l)n=s[l++],a&&!o.call(c,n)||p.push(t?[n,c[n]]:c[n]);return p}}},b32d:function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a),i=n("5c96"),o=r.a.create({baseURL:"/apisix/admin/",timeout:5e3});o.interceptors.request.use(function(t){return t},function(t){Promise.reject(t)}),o.interceptors.response.use(function(t){return t.data},function(t){return Object(i["Message"])({message:t.response.data.error_msg||t.message,type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=o},b5f7:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"c",function(){return s});var a=n("b32d"),r=function(t,e){return Object(a["a"])({url:"/upstreams/".concat(t),method:"PUT",data:e})},i=function(t){return Object(a["a"])({url:"/upstreams/".concat(t),method:"GET"})},o=function(t){return Object(a["a"])({url:"/upstreams/".concat(t),method:"DELETE"})},c=function(t){return Object(a["a"])({url:"/upstreams",method:"POST",data:t})},s=function(){return Object(a["a"])({url:"/upstreams",method:"GET"})}},da29:function(t,e,n){},f6e6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      "+t._s(t.$t("table.add"))+"\n    ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.tableData,"span-method":t.objectSpanMethod,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[t._l(t.tableKeys,function(e,a){return n("el-table-column",{key:a,attrs:{label:e.key,prop:e.key,width:e.width,"class-name":"left"===e.align?"":"status-col","header-align":"center"}},["nodes"===e.key?[n("el-table-column",{attrs:{label:"IP",width:"150",prop:"ip","class-name":"status-col"}}),n("el-table-column",{attrs:{label:"Port",width:"150",prop:"port","class-name":"status-col"}}),n("el-table-column",{attrs:{label:"Weights",width:"150",prop:"weights","class-name":"status-col"}})]:t._e()],2)}),n("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","class-name":"fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleToEdit(a)}}},[t._v("\n          "+t._s(t.$t("table.edit"))+"\n        ")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleRemove(a)}}},[t._v("\n          "+t._s(t.$t("table.delete"))+"\n        ")])]}}])})],2)],1)},r=[],i=(n("8e6e"),n("456d"),n("28a5"),n("bd86")),o=n("768b"),c=(n("ffc1"),n("ac6a"),n("a481"),n("4917"),n("75fc")),s=(n("96cf"),n("3b8d")),u=n("d225"),l=n("b0b4"),p=n("308d"),d=n("6bb5"),f=n("4e2b"),h=n("9ab4"),b=n("60a3"),g=n("333d"),m=n("b5f7");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var w=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(p["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.tableKey=0,t.list=[],t.total=0,t.listLoading=!0,t.listQuery={page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},t.tableData=[],t.tableKeys=[],t.spanArr=[],t.position=0,t}return Object(f["a"])(e,t),Object(l["a"])(e,[{key:"created",value:function(){this.getList()}},{key:"getList",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.tableKeys=[{key:"id",width:100},{key:"description",width:300,align:"left"},{key:"type",width:200},{key:"nodes",width:"auto"}],t.next=4,Object(m["c"])();case 4:e=t.sent,n=e.node.nodes,a=void 0===n?[]:n,a=Object(c["a"])(a).map(function(t){var e=t.key.match(/\/([0-9]+)/)[1],n=e.replace(/^(0+)/,""),a=t.value.type,r=t.value.desc;return{id:n,realId:e,type:a,nodes:t.value.nodes,description:r}}),r=[],a.forEach(function(t){Object.entries(t.nodes).forEach(function(e){var n=Object(o["a"])(e,2),a=n[0],i=n[1];r=r.concat(y({},t,{ip:a.split(":")[0],port:a.split(":")[1],weights:i}))})}),this.tableData=r,this.rowspan(0,"id"),this.rowspan(1,"description"),this.rowspan(2,"type"),this.total=a.length,setTimeout(function(){i.listLoading=!1},500);case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleFilter",value:function(){this.listQuery.page=1,this.getList()}},{key:"handleRemove",value:function(t){var e=this;this.$confirm("Do you want to remove upstream ".concat(t.id,"?"),"Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(m["d"])(t.realId);case 2:e.getList(),e.$message.success("Remove upstream ".concat(t.id," successfully!"));case 4:case"end":return n.stop()}},n)})))}},{key:"sortChange",value:function(t){var e=t.prop,n=t.order;"id"===e&&this.sortByID(n)}},{key:"sortByID",value:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()}},{key:"handleCreate",value:function(){this.$router.push({name:"SchemaUpstreamCreate"})}},{key:"handleToEdit",value:function(t){this.$router.push({name:"SchemaUpstreamEdit",params:{id:t.realId}})}},{key:"rowspan",value:function(t,e){var n=this;this.spanArr[t]=[],this.position=0,this.tableData.forEach(function(a,r){0===r?(n.spanArr[t].push(1),n.position=0):n.tableData[r][e]===n.tableData[r-1][e]?(n.spanArr[t][n.position]+=1,n.spanArr[t].push(0)):(n.spanArr[t].push(1),n.position=r)})}},{key:"objectSpanMethod",value:function(t){t.row,t.column;var e=t.rowIndex,n=t.columnIndex;return 6===n?{rowspan:this.spanArr[0][e],colspan:this.spanArr[0][e]>0?1:0}:n<3?{rowspan:this.spanArr[0][e],colspan:this.spanArr[0][e]>0?1:0}:void 0}}]),e}(b["c"]);w=h["a"]([Object(b["a"])({name:"UpstreamList",components:{Pagination:g["a"]}})],w);var O=w,j=O,k=n("2877"),S=Object(k["a"])(j,a,r,!1,null,null,null);e["default"]=S.exports},ffc1:function(t,e,n){var a=n("5ca1"),r=n("504c")(!0);a(a.S,"Object",{entries:function(t){return r(t)}})}}]);