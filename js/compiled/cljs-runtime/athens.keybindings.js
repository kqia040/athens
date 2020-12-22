goog.provide('athens.keybindings');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.keybindings.modifier_keys = (function athens$keybindings$modifier_keys(e){
var shift = e.shiftKey;
var meta = e.metaKey;
var ctrl = e.ctrlKey;
var alt = e.altKey;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),ctrl,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null);
});
athens.keybindings.get_end_points = (function athens$keybindings$get_end_points(target){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.dom.selection.getEndPoints(target));
});
athens.keybindings.set_cursor_position = (function athens$keybindings$set_cursor_position(target,idx){
return goog.dom.selection.setCursorPosition(target,idx);
});
athens.keybindings.destruct_target = (function athens$keybindings$destruct_target(target){
var value = target.value;
var vec__61181 = athens.keybindings.get_end_points(target);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61181,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61181,(1),null);
var selection = goog.dom.selection.getText(target);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),head,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),selection], null)], 0));
});
athens.keybindings.destruct_key_down = (function athens$keybindings$destruct_key_down(e){
var key = e.key;
var key_code = e.keyCode;
var target = e.target;
var value = target.value;
var event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var modifiers = athens.keybindings.modifier_keys(e);
var target_data = athens.keybindings.destruct_target(target);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifiers,event,target_data], 0));
});
athens.keybindings.ARROW_KEYS = cljs.core.PersistentHashSet.createAsIfByAssoc([goog.events.KeyCodes.LEFT,goog.events.KeyCodes.DOWN,goog.events.KeyCodes.RIGHT,goog.events.KeyCodes.UP]);
athens.keybindings.arrow_key_direction = (function athens$keybindings$arrow_key_direction(e){
return cljs.core.contains_QMARK_(athens.keybindings.ARROW_KEYS,e.keyCode);
});
athens.keybindings.slash_options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Add Todo",module$node_modules$$material_ui$icons$index.Done,"{{[[TODO]]}} ","cmd-enter",null], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current Time",module$node_modules$$material_ui$icons$index.Timer,(function (){
return (new Date()).toLocaleTimeString(cljs.core.PersistentVector.EMPTY,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["timeStyle","short"], null)));
}),null,null], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Today",module$node_modules$$material_ui$icons$index.Today,(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0)))),"]] "].join('');
}),null,null], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tomorrow",module$node_modules$$material_ui$icons$index.Today,(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((-1)))),"]]"].join('');
}),null,null], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yesterday",module$node_modules$$material_ui$icons$index.Today,(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((1)))),"]]"].join('');
}),null,null], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YouTube Embed",module$node_modules$$material_ui$icons$index.YouTube,"{{[[youtube]]: }}",null,(2)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["iframe Embed",module$node_modules$$material_ui$icons$index.DesktopWindows,"{{iframe: }}",null,(2)], null)], null);
athens.keybindings.filter_slash_options = (function athens$keybindings$filter_slash_options(query){
if(clojure.string.blank_QMARK_(query)){
return athens.keybindings.slash_options;
} else {
return cljs.core.filterv((function (p__61208){
var vec__61213 = p__61208;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61213,(0),null);
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')),text);
}),athens.keybindings.slash_options);
}
});
/**
 * Used by backspace and write-char.
 *   write-char appends key character. Pass empty string during backspace.
 *   query-start is determined by doing a greedy regex find up to head.
 *   Head goes up to the text caret position.
 */
athens.keybindings.update_query = (function athens$keybindings$update_query(state,head,key,type){
var query_fn = (function (){var G__61219 = type;
var G__61219__$1 = (((G__61219 instanceof cljs.core.Keyword))?G__61219.fqn:null);
switch (G__61219__$1) {
case "block":
return athens.db.search_in_block_content;

break;
case "page":
return athens.db.search_in_node_title;

break;
case "hashtag":
return athens.db.search_in_node_title;

break;
case "slash":
return athens.keybindings.filter_slash_options;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61219__$1)].join('')));

}
})();
var regex = (function (){var G__61223 = type;
var G__61223__$1 = (((G__61223 instanceof cljs.core.Keyword))?G__61223.fqn:null);
switch (G__61223__$1) {
case "block":
return /.*\(\(/s;

break;
case "page":
return /.*\[\[/s;

break;
case "hashtag":
return /.*#/s;

break;
case "slash":
return /.*\//s;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61223__$1)].join('')));

}
})();
var find = cljs.core.re_find(regex,head);
var query_start_idx = cljs.core.count(find);
var new_query = [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(head,query_start_idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
var results = (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(new_query) : query_fn.call(null,new_query));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))) && (cljs.core.empty_QMARK_(results)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","query","search/query",1830322034),new_query,new cljs.core.Keyword("search","results","search/results",107824727),results], 0));
}
});
athens.keybindings.auto_complete_slash = (function athens$keybindings$auto_complete_slash(var_args){
var G__61232 = arguments.length;
switch (G__61232) {
case 2:
return athens.keybindings.auto_complete_slash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.keybindings.auto_complete_slash.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.keybindings.auto_complete_slash.cljs$core$IFn$_invoke$arity$2 = (function (state,e){
var map__61235 = cljs.core.deref(state);
var map__61235__$1 = (((((!((map__61235 == null))))?(((((map__61235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61235):map__61235);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var map__61236 = athens.keybindings.destruct_key_down(e);
var map__61236__$1 = (((((!((map__61236 == null))))?(((((map__61236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61236):map__61236);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"target","target",253001721));
var vec__61237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,index);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237,(1),null);
var expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237,(3),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237,(4),null);
var expand = ((cljs.core.fn_QMARK_(expansion))?(expansion.cljs$core$IFn$_invoke$arity$0 ? expansion.cljs$core$IFn$_invoke$arity$0() : expansion.call(null)):expansion);
var start_idx = (cljs.core.count(cljs.core.re_find(/.*\//s,head)) - (1));
var new_head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_idx);
var new_str = [new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));

(target.value = new_str);

if(cljs.core.truth_(pos)){
var new_idx = ((([new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand)].join('')).length) - pos);
return athens.keybindings.set_cursor_position(target,new_idx);
} else {
return null;
}
}));

(athens.keybindings.auto_complete_slash.cljs$core$IFn$_invoke$arity$3 = (function (state,target,item){
var map__61258 = athens.keybindings.destruct_target(target);
var map__61258__$1 = (((((!((map__61258 == null))))?(((((map__61258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61258):map__61258);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61258__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61258__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61258__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var vec__61259 = item;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(1),null);
var expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(3),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(4),null);
var expand = ((cljs.core.fn_QMARK_(expansion))?(expansion.cljs$core$IFn$_invoke$arity$0 ? expansion.cljs$core$IFn$_invoke$arity$0() : expansion.call(null)):expansion);
var start_idx = (cljs.core.count(cljs.core.re_find(/.*\//s,head)) - (1));
var new_head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_idx);
var new_str = [new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));

(target.value = new_str);

if(cljs.core.truth_(pos)){
var new_idx = ((([new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand)].join('')).length) - pos);
return athens.keybindings.set_cursor_position(target,new_idx);
} else {
return null;
}
}));

(athens.keybindings.auto_complete_slash.cljs$lang$maxFixedArity = 3);

athens.keybindings.auto_complete_hashtag = (function athens$keybindings$auto_complete_hashtag(var_args){
var G__61274 = arguments.length;
switch (G__61274) {
case 2:
return athens.keybindings.auto_complete_hashtag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.keybindings.auto_complete_hashtag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.keybindings.auto_complete_hashtag.cljs$core$IFn$_invoke$arity$2 = (function (state,e){
var map__61276 = cljs.core.deref(state);
var map__61276__$1 = (((((!((map__61276 == null))))?(((((map__61276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61276):map__61276);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61276__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61276__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var map__61277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(results,index,null);
var map__61277__$1 = (((((!((map__61277 == null))))?(((((map__61277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61277):map__61277);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61277__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61277__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__61278 = athens.keybindings.destruct_key_down(e);
var map__61278__$1 = (((((!((map__61278 == null))))?(((((map__61278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61278):map__61278);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61278__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61278__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61278__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var expansion = (function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})();
var start_idx = cljs.core.count(cljs.core.re_find(/.*#/s,head));
var new_head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_idx);
var new_str = [new_head,"[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expansion),"]]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
if((expansion == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));
}
}));

(athens.keybindings.auto_complete_hashtag.cljs$core$IFn$_invoke$arity$3 = (function (state,target,expansion){
var map__61288 = athens.keybindings.destruct_target(target);
var map__61288__$1 = (((((!((map__61288 == null))))?(((((map__61288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61288):map__61288);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61288__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61288__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61288__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var start_idx = cljs.core.count(cljs.core.re_find(/.*#/s,head));
var new_head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_idx);
var new_str = [new_head,"[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expansion),"]]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
if((expansion == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));
}
}));

(athens.keybindings.auto_complete_hashtag.cljs$lang$maxFixedArity = 3);

athens.keybindings.auto_complete_inline = (function athens$keybindings$auto_complete_inline(var_args){
var G__61311 = arguments.length;
switch (G__61311) {
case 2:
return athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$2 = (function (state,e){
var map__61316 = cljs.core.deref(state);
var map__61316__$1 = (((((!((map__61316 == null))))?(((((map__61316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61316):map__61316);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var map__61317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(results,index,null);
var map__61317__$1 = (((((!((map__61317 == null))))?(((((map__61317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61317):map__61317);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61317__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61317__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__61318 = athens.keybindings.destruct_key_down(e);
var map__61318__$1 = (((((!((map__61318 == null))))?(((((map__61318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61318):map__61318);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"target","target",253001721));
var expansion = (function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})();
var block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210));
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397));
var head_pattern = ((block_QMARK_)?cljs.core.re_pattern(["(?s)(.*)\\(\\(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')):((page_QMARK_)?cljs.core.re_pattern(["(?s)(.*)\\[\\[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')):null));
var tail_pattern = ((block_QMARK_)?/(\)\))?(.*)/s:((page_QMARK_)?/(\]\])?(.*)/s:null));
var new_head = ((block_QMARK_)?"$1((":((page_QMARK_)?"$1[[":null));
var closing_str = ((block_QMARK_)?"))":((page_QMARK_)?"]]":null));
var replacement = [new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expansion),closing_str].join('');
var replace_str = clojure.string.replace_first(head,head_pattern,replacement);
var matches = cljs.core.re_matches(tail_pattern,tail);
var vec__61319 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(1),null);
var after_closing_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(2),null);
var new_str = [replace_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(after_closing_str)].join('');
if((expansion == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));
}

return goog.dom.selection.setStart(target,((2) + start));
}));

(athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$3 = (function (state,target,expansion){
var map__61334 = cljs.core.deref(state);
var map__61334__$1 = (((((!((map__61334 == null))))?(((((map__61334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61334):map__61334);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var map__61335 = athens.keybindings.destruct_target(target);
var map__61335__$1 = (((((!((map__61335 == null))))?(((((map__61335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61335):map__61335);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210));
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397));
var head_pattern = ((block_QMARK_)?cljs.core.re_pattern(["(?s)(.*)\\(\\(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')):((page_QMARK_)?cljs.core.re_pattern(["(?s)(.*)\\[\\[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')):null));
var tail_pattern = ((block_QMARK_)?/(\)\))?(.*)/s:((page_QMARK_)?/(\]\])?(.*)/s:null));
var new_head = ((block_QMARK_)?"$1((":((page_QMARK_)?"$1[[":null));
var closing_str = ((block_QMARK_)?"))":((page_QMARK_)?"]]":null));
var replacement = [new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expansion),closing_str].join('');
var replace_str = clojure.string.replace_first(head,head_pattern,replacement);
var matches = cljs.core.re_matches(tail_pattern,tail);
var vec__61336 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61336,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61336,(1),null);
var after_closing_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61336,(2),null);
var new_str = [replace_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(after_closing_str)].join('');
if((expansion == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));
}

return goog.dom.selection.setStart(target,((2) + start));
}));

(athens.keybindings.auto_complete_inline.cljs$lang$maxFixedArity = 3);

athens.keybindings.block_start_QMARK_ = (function athens$keybindings$block_start_QMARK_(e){
var vec__61344 = athens.keybindings.get_end_points(e.target);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61344,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61344,(1),null);
return (start === (0));
});
athens.keybindings.block_end_QMARK_ = (function athens$keybindings$block_end_QMARK_(e){
var map__61347 = athens.keybindings.destruct_key_down(e);
var map__61347__$1 = (((((!((map__61347 == null))))?(((((map__61347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61347):map__61347);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61347__$1,new cljs.core.Keyword(null,"value","value",305978217));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61347__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(value));
});
athens.keybindings.dec_cycle = (function athens$keybindings$dec_cycle(min,max,idx){
if((idx <= min)){
return max;
} else {
return (idx - (1));
}
});
athens.keybindings.inc_cycle = (function athens$keybindings$inc_cycle(min,max,idx){
if((idx >= max)){
return min;
} else {
return (idx + (1));
}
});
/**
 * If user has slash menu or inline search dropdown open:
 *   - pressing down increments index
 *   - pressing up decrements index
 *   0 is typically min index
 *   max index is collection length minus 1
 */
athens.keybindings.cycle_list = (function athens$keybindings$cycle_list(min,max,idx,up_QMARK_,down_QMARK_){
var f = (cljs.core.truth_(up_QMARK_)?athens.keybindings.dec_cycle:(cljs.core.truth_(down_QMARK_)?athens.keybindings.inc_cycle:null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(min,max,idx) : f.call(null,min,max,idx));
});
athens.keybindings.max_idx = (function athens$keybindings$max_idx(coll){
return (cljs.core.count(coll) - (1));
});
athens.keybindings.handle_arrow_key = (function athens$keybindings$handle_arrow_key(e,uid,state){
var map__61356 = athens.keybindings.destruct_key_down(e);
var map__61356__$1 = (((((!((map__61356 == null))))?(((((map__61356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61356):map__61356);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"target","target",253001721));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var selection_QMARK_ = (!(clojure.string.blank_QMARK_(selection)));
var start_QMARK_ = athens.keybindings.block_start_QMARK_(e);
var end_QMARK_ = athens.keybindings.block_end_QMARK_(e);
var map__61357 = cljs.core.deref(state);
var map__61357__$1 = (((((!((map__61357 == null))))?(((((map__61357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61357):map__61357);
var caret_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var textarea_height = target.offsetHeight;
var map__61358 = caret_position;
var map__61358__$1 = (((((!((map__61358 == null))))?(((((map__61358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61358):map__61358);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61358__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61358__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rows = Math.round((textarea_height / height));
var row = Math.ceil((top / height));
var top_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(1));
var bottom_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,rows);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP);
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT);
var right_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT);
if(cljs.core.truth_(shift)){
if(left_QMARK_){
return null;
} else {
if(right_QMARK_){
return null;
} else {
if(((((up_QMARK_) && (top_row_QMARK_))) || (((down_QMARK_) && (bottom_row_QMARK_))))){
target.blur();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null));
} else {
return null;
}
}
}
} else {
if(cljs.core.truth_(type)){
if(((left_QMARK_) || (right_QMARK_))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","type","search/type",-1745335484),null], 0));
} else {
if(((up_QMARK_) || (down_QMARK_))){
var cur_index = index;
var min_index = (0);
var max_index = athens.keybindings.max_idx(results);
var next_index = athens.keybindings.cycle_list(min_index,max_index,cur_index,up_QMARK_,down_QMARK_);
var container_el = goog.dom.getElement("dropdown-menu");
var target_el = goog.dom.getElement(["dropdown-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_index)].join(''));
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),next_index);

return athens.util.scroll_if_needed(target_el,container_el);
} else {
return null;
}
}
} else {
if(selection_QMARK_){
return null;
} else {
if(((((up_QMARK_) && (top_row_QMARK_))) || (((left_QMARK_) && (start_QMARK_))))){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null));
} else {
if(((((down_QMARK_) && (bottom_row_QMARK_))) || (((right_QMARK_) && (end_QMARK_))))){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null));
} else {
return null;
}
}
}
}
}
});
/**
 * Bug: indenting sets the cursor position to 0, likely because a new textarea element is created on the DOM. Set selection appropriately.
 *   See :indent event for why value must be passed as well.
 */
athens.keybindings.handle_tab = (function athens$keybindings$handle_tab(e,uid,_state){
e.preventDefault();

var map__61363 = athens.keybindings.destruct_key_down(e);
var map__61363__$1 = (((((!((map__61363 == null))))?(((((map__61363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61363):map__61363);
var d_key_down = map__61363__$1;
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61363__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.empty_QMARK_(selected_items)){
if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid,d_key_down], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),uid,d_key_down], null));
}
} else {
return null;
}
});
/**
 * BUG: escape is fired 24 times for some reason.
 */
athens.keybindings.handle_escape = (function athens$keybindings$handle_escape(e,state){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));
});
athens.keybindings.throttle_dispatch = goog.functions.throttle((function (p1__61366_SHARP_){
return re_frame.core.dispatch(p1__61366_SHARP_);
}),(100));
athens.keybindings.handle_enter = (function athens$keybindings$handle_enter(e,uid,state){
var map__61367 = athens.keybindings.destruct_key_down(e);
var map__61367__$1 = (((((!((map__61367 == null))))?(((((map__61367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61367):map__61367);
var d_key_down = map__61367__$1;
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__61368 = cljs.core.deref(state);
var map__61368__$1 = (((((!((map__61368 == null))))?(((((map__61368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61368):map__61368);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
e.preventDefault();

if(cljs.core.truth_(type)){
var G__61371 = type;
var G__61371__$1 = (((G__61371 instanceof cljs.core.Keyword))?G__61371.fqn:null);
switch (G__61371__$1) {
case "slash":
return athens.keybindings.auto_complete_slash.cljs$core$IFn$_invoke$arity$2(state,e);

break;
case "page":
return athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$2(state,e);

break;
case "block":
return athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$2(state,e);

break;
case "hashtag":
return athens.keybindings.auto_complete_hashtag.cljs$core$IFn$_invoke$arity$2(state,e);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61371__$1)].join('')));

}
} else {
if(cljs.core.truth_(shift)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join(''));
} else {
if(cljs.core.truth_(athens.util.shortcut_key_QMARK_(meta,ctrl))){
var first = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(13));
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(13));
var new_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[TODO]]}} "))?["{{[[DONE]]}} ",new_tail].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[DONE]]}} "))?new_tail:["{{[[TODO]]}} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')
));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),new_str);
} else {
var G__61372 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624),uid,d_key_down], null);
return (athens.keybindings.throttle_dispatch.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.throttle_dispatch.cljs$core$IFn$_invoke$arity$1(G__61372) : athens.keybindings.throttle_dispatch.call(null,G__61372));

}
}
}
});
athens.keybindings.PAIR_CHARS = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
/**
 * https://github.com/tpope/vim-surround
 */
athens.keybindings.surround = (function athens$keybindings$surround(selection,around){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,around);
if(cljs.core.truth_(temp__5733__auto__)){
var complement = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(complement)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(around)].join('');
}
});
athens.keybindings.handle_shortcuts = (function athens$keybindings$handle_shortcuts(e,uid,state){
var map__61373 = athens.keybindings.destruct_key_down(e);
var map__61373__$1 = (((((!((map__61373 == null))))?(((((map__61373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61373):map__61373);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"target","target",253001721));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var selection_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.A)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection,value)))){
var closest_node_page = target.closest(".node-page");
var closest_block_page = target.closest(".block-page");
var closest = (function (){var or__4126__auto__ = closest_node_page;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return closest_block_page;
}
})();
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),closest.dataset.uid], null));
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-items","selected/add-items",142460854),children], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.Z)){
var map__61375 = cljs.core.deref(state);
var map__61375__$1 = (((((!((map__61375 == null))))?(((((map__61375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61375):map__61375);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword("string","local","string/local",-578009907));
var previous = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword("string","previous","string/previous",1734905219));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(local,previous)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.B)){
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),athens.keybindings.surround(selection,"**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),new_str);

(target.value = new_str);

if(selection_QMARK_){
goog.dom.selection.setStart(target,((2) + start));

return goog.dom.selection.setEnd(target,((2) + end));
} else {
return athens.keybindings.set_cursor_position(target,((2) + start));
}
} else {
if(((cljs.core.not(shift)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.I)))){
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),athens.keybindings.surround(selection,"__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),new_str);

(target.value = new_str);

if(selection_QMARK_){
goog.dom.selection.setStart(target,((2) + start));

return goog.dom.selection.setEnd(target,((2) + end));
} else {
return athens.keybindings.set_cursor_position(target,((2) + start));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.O)){
var link = [clojure.string.replace_first(head,/(.*)\[\[/s,""),clojure.string.replace_first(tail,/\]\](.*)/s,"")].join('');
var hashtag = [clojure.string.replace_first(head,/.*#/s,""),clojure.string.replace_first(tail,/\s(.*)/s,"")].join('');
var block_ref = [clojure.string.replace_first(head,/(.*)\(\(/s,""),clojure.string.replace_first(tail,/\)\)(.*)/s,"")].join('');
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.re_find(/\[\[/s,head);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.re_find(/\]\]/s,tail);
if(cljs.core.truth_(and__4115__auto____$1)){
return (((cljs.core.re_find(/\[/s,link) == null)) && ((cljs.core.re_find(/\]/s,link) == null)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var eid = athens.db.e_by_av(new cljs.core.Keyword("node","title","node/title",628940777),link);
var uid__$1 = athens.db.v_by_ea(eid,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
if(cljs.core.truth_(eid)){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid__$1,e);
} else {
var new_uid = athens.util.gen_block_uid();
target.blur();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),link,new_uid], null));

return setTimeout((function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new_uid,e);
}),(50));
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.re_find(/#/s,head);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.re_find(/\s/s,tail);
} else {
return and__4115__auto__;
}
})())){
var eid = athens.db.e_by_av(new cljs.core.Keyword("node","title","node/title",628940777),hashtag);
var uid__$1 = athens.db.v_by_ea(eid,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
if(cljs.core.truth_(eid)){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid__$1,e);
} else {
var new_uid = athens.util.gen_block_uid();
target.blur();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),link,new_uid], null));

return setTimeout((function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new_uid,e);
}),(50));
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.re_find(/\(\(/s,head);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.re_find(/\)\)/s,tail);
if(cljs.core.truth_(and__4115__auto____$1)){
if((cljs.core.re_find(/\(/s,block_ref) == null)){
if((cljs.core.re_find(/\)/s,block_ref) == null)){
return athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),block_ref);
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(block_ref,e);
} else {
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);

}
}
}
} else {
return null;
}
}
}
}
}
});
athens.keybindings.pair_char_QMARK_ = (function athens$keybindings$pair_char_QMARK_(e){
var map__61378 = athens.keybindings.destruct_key_down(e);
var map__61378__$1 = (((((!((map__61378 == null))))?(((((map__61378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61378):map__61378);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pair_char_set = cljs.core.set(cljs.core.flatten(cljs.core.seq(athens.keybindings.PAIR_CHARS)));
return (pair_char_set.cljs$core$IFn$_invoke$arity$1 ? pair_char_set.cljs$core$IFn$_invoke$arity$1(key) : pair_char_set.call(null,key));
});
athens.keybindings.handle_pair_char = (function athens$keybindings$handle_pair_char(e,_,state){
var map__61380 = athens.keybindings.destruct_key_down(e);
var map__61380__$1 = (((((!((map__61380 == null))))?(((((map__61380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61380):map__61380);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"value","value",305978217));
var close_pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,key);
var lookbehind_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(value,start,null);
var map__61381 = cljs.core.deref(state);
var map__61381__$1 = (((((!((map__61381 == null))))?(((((map__61381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61381):map__61381);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61381__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
e.preventDefault();

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(")",key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lookbehind_char], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("}",key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lookbehind_char], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("\"",key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lookbehind_char], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("]",key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lookbehind_char], 0))))){
goog.dom.selection.setStart(target,(start + (1)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_str_61488 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_pair),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var new_idx_61489 = (start + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),new_str_61488);

(target.value = new_str_61488);

athens.keybindings.set_cursor_position(target,new_idx_61489);

if(cljs.core.truth_(type)){
athens.keybindings.update_query(state,head,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_pair)].join(''),type);
} else {
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var surround_selection_61491 = athens.keybindings.surround(selection,key);
var new_str_61492 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),surround_selection_61491,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),new_str_61492);

(target.value = new_str_61492);

(target.selectionStart = (start + (1)));

(target.selectionEnd = (end + (1)));
} else {
}
}
}

if((cljs.core.count(new cljs.core.Keyword("string","local","string/local",-578009907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))) >= (4))){
var four_char = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("string","local","string/local",-578009907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(start - (1)),(start + (3)));
var double_brackets_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[[]]",four_char);
var double_parens_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(())",four_char);
var type__$1 = ((double_brackets_QMARK_)?new cljs.core.Keyword(null,"page","page",849072397):((double_parens_QMARK_)?new cljs.core.Keyword(null,"block","block",664686210):null));
if(cljs.core.truth_(type__$1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),type__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","query","search/query",1830322034),"",new cljs.core.Keyword("search","results","search/results",107824727),cljs.core.PersistentVector.EMPTY], 0));
} else {
return null;
}
} else {
return null;
}
});
athens.keybindings.handle_backspace = (function athens$keybindings$handle_backspace(e,uid,state){
var map__61384 = athens.keybindings.destruct_key_down(e);
var map__61384__$1 = (((((!((map__61384 == null))))?(((((map__61384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61384):map__61384);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"value","value",305978217));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"target","target",253001721));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var no_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
var sub_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(start - (1)),(start + (1)));
var possible_pair = (function (){var fexpr__61389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["[]",null,"{}",null,"()",null], null), null);
return (fexpr__61389.cljs$core$IFn$_invoke$arity$1 ? fexpr__61389.cljs$core$IFn$_invoke$arity$1(sub_str) : fexpr__61389.call(null,sub_str));
})();
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var map__61385 = cljs.core.deref(state);
var map__61385__$1 = (((((!((map__61385 == null))))?(((((map__61385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61385):map__61385);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var look_behind_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(value,(start - (1)),null);
if(((athens.keybindings.block_start_QMARK_(e)) && (no_selection_QMARK_))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),uid,value], null));
} else {
if(cljs.core.truth_(possible_pair)){
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(start + (1)));
var new_str = [head__$1,tail].join('');
var new_idx = (start - (1));
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),new_str], 0));

(target.value = new_str);

return athens.keybindings.set_cursor_position(target,new_idx);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",look_behind_char)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",look_behind_char)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
if(cljs.core.truth_(type)){
return athens.keybindings.update_query(state,head,"",type);
} else {
return null;
}
}
}
}
}
});
/**
 * Closure returns true even when using modifier keys. We do not make that assumption.
 */
athens.keybindings.is_character_key_QMARK_ = (function athens$keybindings$is_character_key_QMARK_(e){
var map__61396 = athens.keybindings.destruct_key_down(e);
var map__61396__$1 = (((((!((map__61396 == null))))?(((((map__61396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61396):map__61396);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core.not(meta)){
if(cljs.core.not(ctrl)){
if(cljs.core.not(alt)){
return goog.events.KeyCodes.isCharacterKey(key_code);
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
/**
 * When user types /, trigger slash menu.
 *   If user writes a character while there is a slash/type, update query and results.
 */
athens.keybindings.write_char = (function athens$keybindings$write_char(e,_,state){
var map__61401 = athens.keybindings.destruct_key_down(e);
var map__61401__$1 = (((((!((map__61401 == null))))?(((((map__61401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61401):map__61401);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var map__61402 = cljs.core.deref(state);
var map__61402__$1 = (((((!((map__61402 == null))))?(((((map__61402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61402):map__61402);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61402__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key," ")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","results","search/results",107824727),cljs.core.PersistentVector.EMPTY], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"/")) && ((type == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","query","search/query",1830322034),"",new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"slash","slash",-1449773022),new cljs.core.Keyword("search","results","search/results",107824727),athens.keybindings.slash_options], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#")) && ((type == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","query","search/query",1830322034),"",new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword("search","results","search/results",107824727),cljs.core.PersistentVector.EMPTY], 0));
} else {
if(cljs.core.truth_(type)){
return athens.keybindings.update_query(state,head,key,type);
} else {
return null;
}
}
}
}
});
/**
 * Delete has the same behavior as pressing backspace on the next block.
 */
athens.keybindings.handle_delete = (function athens$keybindings$handle_delete(e,uid,_state){
var map__61408 = athens.keybindings.destruct_key_down(e);
var map__61408__$1 = (((((!((map__61408 == null))))?(((((map__61408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61408):map__61408);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"value","value",305978217));
var no_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
var end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(value));
var next_block_uid = athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1(uid);
if(cljs.core.truth_(((no_selection_QMARK_)?((end_QMARK_)?next_block_uid:false):false))){
var next_block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),next_block_uid], null));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),next_block_uid,new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(next_block)], null));
} else {
return null;
}
});
athens.keybindings.textarea_key_down = (function athens$keybindings$textarea_key_down(e,uid,state){
var d_event = athens.keybindings.destruct_key_down(e);
var map__61411 = d_event;
var map__61411__$1 = (((((!((map__61411 == null))))?(((((map__61411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61411):map__61411);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"last-keydown","last-keydown",348696018),d_event);

if((new cljs.core.Keyword("search","type","search/type",-1745335484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null)){
var caret_position_61527 = athens.util.get_caret_position(e.target);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340),caret_position_61527);
} else {
}

if(athens.keybindings.arrow_key_direction(e)){
return athens.keybindings.handle_arrow_key(e,uid,state);
} else {
if(cljs.core.truth_(athens.keybindings.pair_char_QMARK_(e))){
return athens.keybindings.handle_pair_char(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.TAB)){
return athens.keybindings.handle_tab(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)){
return athens.keybindings.handle_enter(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE)){
return athens.keybindings.handle_backspace(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DELETE)){
return athens.keybindings.handle_delete(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ESC)){
return athens.keybindings.handle_escape(e,state);
} else {
if(cljs.core.truth_(athens.util.shortcut_key_QMARK_(meta,ctrl))){
return athens.keybindings.handle_shortcuts(e,uid,state);
} else {
if(cljs.core.truth_(athens.keybindings.is_character_key_QMARK_(e))){
return athens.keybindings.write_char(e,uid,state);
} else {
return null;
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=athens.keybindings.js.map
