goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49707 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49708 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49708);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___49864 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___49864)){
var new_db_49865 = temp__5735__auto___49864;
var fexpr__49711_49866 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49711_49866.cljs$core$IFn$_invoke$arity$1 ? fexpr__49711_49866.cljs$core$IFn$_invoke$arity$1(new_db_49865) : fexpr__49711_49866.call(null,new_db_49865));
} else {
}

var seq__49712 = cljs.core.seq(effects_without_db);
var chunk__49713 = null;
var count__49714 = (0);
var i__49715 = (0);
while(true){
if((i__49715 < count__49714)){
var vec__49727 = chunk__49713.cljs$core$IIndexed$_nth$arity$2(null,i__49715);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49727,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49727,(1),null);
var temp__5733__auto___49867 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49867)){
var effect_fn_49868 = temp__5733__auto___49867;
(effect_fn_49868.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49868.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49868.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49869 = seq__49712;
var G__49870 = chunk__49713;
var G__49871 = count__49714;
var G__49872 = (i__49715 + (1));
seq__49712 = G__49869;
chunk__49713 = G__49870;
count__49714 = G__49871;
i__49715 = G__49872;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49712);
if(temp__5735__auto__){
var seq__49712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49712__$1);
var G__49875 = cljs.core.chunk_rest(seq__49712__$1);
var G__49876 = c__4556__auto__;
var G__49877 = cljs.core.count(c__4556__auto__);
var G__49878 = (0);
seq__49712 = G__49875;
chunk__49713 = G__49876;
count__49714 = G__49877;
i__49715 = G__49878;
continue;
} else {
var vec__49731 = cljs.core.first(seq__49712__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49731,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49731,(1),null);
var temp__5733__auto___49880 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49880)){
var effect_fn_49883 = temp__5733__auto___49880;
(effect_fn_49883.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49883.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49883.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49885 = cljs.core.next(seq__49712__$1);
var G__49887 = null;
var G__49888 = (0);
var G__49889 = (0);
seq__49712 = G__49885;
chunk__49713 = G__49887;
count__49714 = G__49888;
i__49715 = G__49889;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__48931__auto___49893 = re_frame.interop.now();
var duration__48932__auto___49894 = (end__48931__auto___49893 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48932__auto___49894,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__48931__auto___49893);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49707);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___49895 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___49895)){
var new_db_49896 = temp__5735__auto___49895;
var fexpr__49737_49897 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49737_49897.cljs$core$IFn$_invoke$arity$1 ? fexpr__49737_49897.cljs$core$IFn$_invoke$arity$1(new_db_49896) : fexpr__49737_49897.call(null,new_db_49896));
} else {
}

var seq__49738 = cljs.core.seq(effects_without_db);
var chunk__49739 = null;
var count__49740 = (0);
var i__49741 = (0);
while(true){
if((i__49741 < count__49740)){
var vec__49755 = chunk__49739.cljs$core$IIndexed$_nth$arity$2(null,i__49741);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(1),null);
var temp__5733__auto___49898 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49898)){
var effect_fn_49899 = temp__5733__auto___49898;
(effect_fn_49899.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49899.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49899.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49900 = seq__49738;
var G__49901 = chunk__49739;
var G__49902 = count__49740;
var G__49903 = (i__49741 + (1));
seq__49738 = G__49900;
chunk__49739 = G__49901;
count__49740 = G__49902;
i__49741 = G__49903;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49738);
if(temp__5735__auto__){
var seq__49738__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49738__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49738__$1);
var G__49904 = cljs.core.chunk_rest(seq__49738__$1);
var G__49905 = c__4556__auto__;
var G__49906 = cljs.core.count(c__4556__auto__);
var G__49907 = (0);
seq__49738 = G__49904;
chunk__49739 = G__49905;
count__49740 = G__49906;
i__49741 = G__49907;
continue;
} else {
var vec__49759 = cljs.core.first(seq__49738__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(1),null);
var temp__5733__auto___49908 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49908)){
var effect_fn_49909 = temp__5733__auto___49908;
(effect_fn_49909.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49909.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49909.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49910 = cljs.core.next(seq__49738__$1);
var G__49911 = null;
var G__49912 = (0);
var G__49913 = (0);
seq__49738 = G__49910;
chunk__49739 = G__49911;
count__49740 = G__49912;
i__49741 = G__49913;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49763 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49764 = null;
var count__49765 = (0);
var i__49766 = (0);
while(true){
if((i__49766 < count__49765)){
var map__49779 = chunk__49764.cljs$core$IIndexed$_nth$arity$2(null,i__49766);
var map__49779__$1 = (((((!((map__49779 == null))))?(((((map__49779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49779):map__49779);
var effect = map__49779__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49763,chunk__49764,count__49765,i__49766,map__49779,map__49779__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49763,chunk__49764,count__49765,i__49766,map__49779,map__49779__$1,effect,ms,dispatch))
,ms);
}


var G__49919 = seq__49763;
var G__49920 = chunk__49764;
var G__49921 = count__49765;
var G__49922 = (i__49766 + (1));
seq__49763 = G__49919;
chunk__49764 = G__49920;
count__49765 = G__49921;
i__49766 = G__49922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49763);
if(temp__5735__auto__){
var seq__49763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49763__$1);
var G__49929 = cljs.core.chunk_rest(seq__49763__$1);
var G__49930 = c__4556__auto__;
var G__49931 = cljs.core.count(c__4556__auto__);
var G__49932 = (0);
seq__49763 = G__49929;
chunk__49764 = G__49930;
count__49765 = G__49931;
i__49766 = G__49932;
continue;
} else {
var map__49786 = cljs.core.first(seq__49763__$1);
var map__49786__$1 = (((((!((map__49786 == null))))?(((((map__49786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49786):map__49786);
var effect = map__49786__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49763,chunk__49764,count__49765,i__49766,map__49786,map__49786__$1,effect,ms,dispatch,seq__49763__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49763,chunk__49764,count__49765,i__49766,map__49786,map__49786__$1,effect,ms,dispatch,seq__49763__$1,temp__5735__auto__))
,ms);
}


var G__49947 = cljs.core.next(seq__49763__$1);
var G__49948 = null;
var G__49949 = (0);
var G__49950 = (0);
seq__49763 = G__49947;
chunk__49764 = G__49948;
count__49765 = G__49949;
i__49766 = G__49950;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__49796 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__49797 = null;
var count__49798 = (0);
var i__49799 = (0);
while(true){
if((i__49799 < count__49798)){
var vec__49819 = chunk__49797.cljs$core$IIndexed$_nth$arity$2(null,i__49799);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49819,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49819,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___49958 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49958)){
var effect_fn_49959 = temp__5733__auto___49958;
(effect_fn_49959.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49959.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49959.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49963 = seq__49796;
var G__49964 = chunk__49797;
var G__49965 = count__49798;
var G__49966 = (i__49799 + (1));
seq__49796 = G__49963;
chunk__49797 = G__49964;
count__49798 = G__49965;
i__49799 = G__49966;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49796);
if(temp__5735__auto__){
var seq__49796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49796__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49796__$1);
var G__49976 = cljs.core.chunk_rest(seq__49796__$1);
var G__49977 = c__4556__auto__;
var G__49978 = cljs.core.count(c__4556__auto__);
var G__49979 = (0);
seq__49796 = G__49976;
chunk__49797 = G__49977;
count__49798 = G__49978;
i__49799 = G__49979;
continue;
} else {
var vec__49824 = cljs.core.first(seq__49796__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___49984 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49984)){
var effect_fn_49985 = temp__5733__auto___49984;
(effect_fn_49985.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49985.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49985.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49987 = cljs.core.next(seq__49796__$1);
var G__49988 = null;
var G__49989 = (0);
var G__49990 = (0);
seq__49796 = G__49987;
chunk__49797 = G__49988;
count__49798 = G__49989;
i__49799 = G__49990;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49832 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49833 = null;
var count__49834 = (0);
var i__49835 = (0);
while(true){
if((i__49835 < count__49834)){
var event = chunk__49833.cljs$core$IIndexed$_nth$arity$2(null,i__49835);
re_frame.router.dispatch(event);


var G__50000 = seq__49832;
var G__50001 = chunk__49833;
var G__50002 = count__49834;
var G__50003 = (i__49835 + (1));
seq__49832 = G__50000;
chunk__49833 = G__50001;
count__49834 = G__50002;
i__49835 = G__50003;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49832);
if(temp__5735__auto__){
var seq__49832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49832__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49832__$1);
var G__50007 = cljs.core.chunk_rest(seq__49832__$1);
var G__50008 = c__4556__auto__;
var G__50009 = cljs.core.count(c__4556__auto__);
var G__50010 = (0);
seq__49832 = G__50007;
chunk__49833 = G__50008;
count__49834 = G__50009;
i__49835 = G__50010;
continue;
} else {
var event = cljs.core.first(seq__49832__$1);
re_frame.router.dispatch(event);


var G__50013 = cljs.core.next(seq__49832__$1);
var G__50014 = null;
var G__50015 = (0);
var G__50016 = (0);
seq__49832 = G__50013;
chunk__49833 = G__50014;
count__49834 = G__50015;
i__49835 = G__50016;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49850 = cljs.core.seq(value);
var chunk__49851 = null;
var count__49852 = (0);
var i__49853 = (0);
while(true){
if((i__49853 < count__49852)){
var event = chunk__49851.cljs$core$IIndexed$_nth$arity$2(null,i__49853);
clear_event(event);


var G__50024 = seq__49850;
var G__50025 = chunk__49851;
var G__50026 = count__49852;
var G__50027 = (i__49853 + (1));
seq__49850 = G__50024;
chunk__49851 = G__50025;
count__49852 = G__50026;
i__49853 = G__50027;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49850);
if(temp__5735__auto__){
var seq__49850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49850__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49850__$1);
var G__50033 = cljs.core.chunk_rest(seq__49850__$1);
var G__50034 = c__4556__auto__;
var G__50035 = cljs.core.count(c__4556__auto__);
var G__50036 = (0);
seq__49850 = G__50033;
chunk__49851 = G__50034;
count__49852 = G__50035;
i__49853 = G__50036;
continue;
} else {
var event = cljs.core.first(seq__49850__$1);
clear_event(event);


var G__50041 = cljs.core.next(seq__49850__$1);
var G__50042 = null;
var G__50043 = (0);
var G__50044 = (0);
seq__49850 = G__50041;
chunk__49851 = G__50042;
count__49852 = G__50043;
i__49853 = G__50044;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
