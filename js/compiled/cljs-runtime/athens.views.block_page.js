goog.provide('athens.views.block_page');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.views.block_page.title_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.1em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.block_page.block_page_change = (function athens$views$block_page$block_page_change(e,_uid,state){
var value = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),value);
});
athens.views.block_page.block_page_el = (function athens$views$block_page$block_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("string","local","string/local",-578009907),null,new cljs.core.Keyword("string","previous","string/previous",1734905219),null], null));
return (function (block,parents,editing_uid,refs){
var map__62247 = block;
var map__62247__$1 = (((((!((map__62247 == null))))?(((((map__62247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62247):map__62247);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62247__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62247__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62247__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(string,new cljs.core.Keyword("string","previous","string/previous",1734905219).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("string","previous","string/previous",1734905219),string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),string], 0));
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-page","div.block-page",217515715),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$block_page$block_page_el_$_iter__62250(s__62251){
return (new cljs.core.LazySeq(null,(function (){
var s__62251__$1 = s__62251;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62251__$1);
if(temp__5735__auto__){
var s__62251__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62251__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62251__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62253 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62252 = (0);
while(true){
if((i__62252 < size__4528__auto__)){
var map__62258 = cljs.core._nth(c__4527__auto__,i__62252);
var map__62258__$1 = (((((!((map__62258 == null))))?(((((map__62258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62258):map__62258);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
cljs.core.chunk_append(b__62253,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62252,map__62258,map__62258__$1,title,uid__$1,string__$1,c__4527__auto__,size__4528__auto__,b__62253,s__62251__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$1);
});})(i__62252,map__62258,map__62258__$1,title,uid__$1,string__$1,c__4527__auto__,size__4528__auto__,b__62253,s__62251__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string__$1;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__62354 = (i__62252 + (1));
i__62252 = G__62354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62253),athens$views$block_page$block_page_el_$_iter__62250(cljs.core.chunk_rest(s__62251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62253),null);
}
} else {
var map__62265 = cljs.core.first(s__62251__$2);
var map__62265__$1 = (((((!((map__62265 == null))))?(((((map__62265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62265):map__62265);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62265__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62265__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62265__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__62265,map__62265__$1,title,uid__$1,string__$1,s__62251__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$1);
});})(map__62265,map__62265__$1,title,uid__$1,string__$1,s__62251__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string__$1;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$block_page$block_page_el_$_iter__62250(cljs.core.rest(s__62251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parents);
})())], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.block_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"block-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("string","local","string/local",-578009907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
return athens.views.node_page.handle_key_down(e,uid,state,null);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return athens.views.block_page.block_page_change(e,uid,state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("string","local","string/local",-578009907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$block_page$block_page_el_$_iter__62267(s__62268){
return (new cljs.core.LazySeq(null,(function (){
var s__62268__$1 = s__62268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62268__$1);
if(temp__5735__auto__){
var s__62268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62268__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62268__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62270 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62269 = (0);
while(true){
if((i__62269 < size__4528__auto__)){
var child = cljs.core._nth(c__4527__auto__,i__62269);
cljs.core.chunk_append(b__62270,(function (){var map__62273 = child;
var map__62273__$1 = (((((!((map__62273 == null))))?(((((map__62273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62273):map__62273);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62273__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__62375 = (i__62269 + (1));
i__62269 = G__62375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62270),athens$views$block_page$block_page_el_$_iter__62267(cljs.core.chunk_rest(s__62268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62270),null);
}
} else {
var child = cljs.core.first(s__62268__$2);
return cljs.core.cons((function (){var map__62282 = child;
var map__62282__$1 = (((((!((map__62282 == null))))?(((((map__62282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62282):map__62282);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62282__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),athens$views$block_page$block_page_el_$_iter__62267(cljs.core.rest(s__62268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null),(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"Linked References"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Linked References"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$block_page$block_page_el_$_iter__62285(s__62286){
return (new cljs.core.LazySeq(null,(function (){
var s__62286__$1 = s__62286;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62286__$1);
if(temp__5735__auto__){
var s__62286__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62286__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62286__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62288 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62287 = (0);
while(true){
if((i__62287 < size__4528__auto__)){
var vec__62290 = cljs.core._nth(c__4527__auto__,i__62287);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62290,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62290,(1),null);
cljs.core.chunk_append(b__62288,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62287,vec__62290,group_title,group,c__4527__auto__,size__4528__auto__,b__62288,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__62287,vec__62290,group_title,group,c__4527__auto__,size__4528__auto__,b__62288,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__62287,vec__62290,group_title,group,c__4527__auto__,size__4528__auto__,b__62288,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function athens$views$block_page$block_page_el_$_iter__62285_$_iter__62293(s__62294){
return (new cljs.core.LazySeq(null,((function (i__62287,vec__62290,group_title,group,c__4527__auto__,size__4528__auto__,b__62288,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function (){
var s__62294__$1 = s__62294;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62294__$1);
if(temp__5735__auto____$1){
var s__62294__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62294__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__62294__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__62296 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__62295 = (0);
while(true){
if((i__62295 < size__4528__auto____$1)){
var block__$1 = cljs.core._nth(c__4527__auto____$1,i__62295);
cljs.core.chunk_append(b__62296,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block__$1))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block__$1], null)], null));

var G__62396 = (i__62295 + (1));
i__62295 = G__62396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62296),athens$views$block_page$block_page_el_$_iter__62285_$_iter__62293(cljs.core.chunk_rest(s__62294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62296),null);
}
} else {
var block__$1 = cljs.core.first(s__62294__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block__$1))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block__$1], null)], null),athens$views$block_page$block_page_el_$_iter__62285_$_iter__62293(cljs.core.rest(s__62294__$2)));
}
} else {
return null;
}
break;
}
});})(i__62287,vec__62290,group_title,group,c__4527__auto__,size__4528__auto__,b__62288,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
,null,null));
});})(i__62287,vec__62290,group_title,group,c__4527__auto__,size__4528__auto__,b__62288,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
;
return iter__4529__auto__(group);
})())], null));

var G__62398 = (i__62287 + (1));
i__62287 = G__62398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62288),athens$views$block_page$block_page_el_$_iter__62285(cljs.core.chunk_rest(s__62286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62288),null);
}
} else {
var vec__62304 = cljs.core.first(s__62286__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62304,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62304,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__62304,group_title,group,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__62304,group_title,group,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__62304,group_title,group,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state){
return (function athens$views$block_page$block_page_el_$_iter__62285_$_iter__62311(s__62312){
return (new cljs.core.LazySeq(null,(function (){
var s__62312__$1 = s__62312;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62312__$1);
if(temp__5735__auto____$1){
var s__62312__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62312__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62312__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62314 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62313 = (0);
while(true){
if((i__62313 < size__4528__auto__)){
var block__$1 = cljs.core._nth(c__4527__auto__,i__62313);
cljs.core.chunk_append(b__62314,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block__$1))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block__$1], null)], null));

var G__62403 = (i__62313 + (1));
i__62313 = G__62403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62314),athens$views$block_page$block_page_el_$_iter__62285_$_iter__62311(cljs.core.chunk_rest(s__62312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62314),null);
}
} else {
var block__$1 = cljs.core.first(s__62312__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block__$1))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block__$1], null)], null),athens$views$block_page$block_page_el_$_iter__62285_$_iter__62311(cljs.core.rest(s__62312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__62304,group_title,group,s__62286__$2,temp__5735__auto__,map__62247,map__62247__$1,string,children,uid,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$block_page$block_page_el_$_iter__62285(cljs.core.rest(s__62286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(refs);
})())], null)], null)], null):null)], null);
});
});
athens.views.block_page.block_page_component = (function athens$views$block_page$block_page_component(ident){
var block = athens.db.get_block_document(ident);
var parents = athens.db.get_parents_recursively(ident);
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var refs = athens.db.get_linked_block_references(block);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.block_page.block_page_el,block,parents,editing_uid,refs], null);
});

//# sourceMappingURL=athens.views.block_page.js.map
