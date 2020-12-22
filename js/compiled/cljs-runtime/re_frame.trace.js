goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__31327){
var map__31328 = p__31327;
var map__31328__$1 = (((((!((map__31328 == null))))?(((((map__31328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31328):map__31328);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31328__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31328__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31328__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31328__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__31336_31390 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__31337_31391 = null;
var count__31338_31392 = (0);
var i__31339_31393 = (0);
while(true){
if((i__31339_31393 < count__31338_31392)){
var vec__31359_31394 = chunk__31337_31391.cljs$core$IIndexed$_nth$arity$2(null,i__31339_31393);
var k_31395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31359_31394,(0),null);
var cb_31396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31359_31394,(1),null);
try{var G__31363_31397 = cljs.core.deref(re_frame.trace.traces);
(cb_31396.cljs$core$IFn$_invoke$arity$1 ? cb_31396.cljs$core$IFn$_invoke$arity$1(G__31363_31397) : cb_31396.call(null,G__31363_31397));
}catch (e31362){var e_31401 = e31362;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31395,"while storing",cljs.core.deref(re_frame.trace.traces),e_31401], 0));
}

var G__31408 = seq__31336_31390;
var G__31409 = chunk__31337_31391;
var G__31410 = count__31338_31392;
var G__31411 = (i__31339_31393 + (1));
seq__31336_31390 = G__31408;
chunk__31337_31391 = G__31409;
count__31338_31392 = G__31410;
i__31339_31393 = G__31411;
continue;
} else {
var temp__5735__auto___31415 = cljs.core.seq(seq__31336_31390);
if(temp__5735__auto___31415){
var seq__31336_31417__$1 = temp__5735__auto___31415;
if(cljs.core.chunked_seq_QMARK_(seq__31336_31417__$1)){
var c__4556__auto___31418 = cljs.core.chunk_first(seq__31336_31417__$1);
var G__31420 = cljs.core.chunk_rest(seq__31336_31417__$1);
var G__31421 = c__4556__auto___31418;
var G__31422 = cljs.core.count(c__4556__auto___31418);
var G__31423 = (0);
seq__31336_31390 = G__31420;
chunk__31337_31391 = G__31421;
count__31338_31392 = G__31422;
i__31339_31393 = G__31423;
continue;
} else {
var vec__31364_31424 = cljs.core.first(seq__31336_31417__$1);
var k_31425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31364_31424,(0),null);
var cb_31426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31364_31424,(1),null);
try{var G__31369_31428 = cljs.core.deref(re_frame.trace.traces);
(cb_31426.cljs$core$IFn$_invoke$arity$1 ? cb_31426.cljs$core$IFn$_invoke$arity$1(G__31369_31428) : cb_31426.call(null,G__31369_31428));
}catch (e31367){var e_31433 = e31367;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31425,"while storing",cljs.core.deref(re_frame.trace.traces),e_31433], 0));
}

var G__31437 = cljs.core.next(seq__31336_31417__$1);
var G__31438 = null;
var G__31439 = (0);
var G__31440 = (0);
seq__31336_31390 = G__31437;
chunk__31337_31391 = G__31438;
count__31338_31392 = G__31439;
i__31339_31393 = G__31440;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
