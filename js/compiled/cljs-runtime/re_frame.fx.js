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
var _STAR_current_trace_STAR__orig_val__31816 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31817 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31817);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___31946 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___31946)){
var new_db_31947 = temp__5735__auto___31946;
var fexpr__31819_31948 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31819_31948.cljs$core$IFn$_invoke$arity$1 ? fexpr__31819_31948.cljs$core$IFn$_invoke$arity$1(new_db_31947) : fexpr__31819_31948.call(null,new_db_31947));
} else {
}

var seq__31821 = cljs.core.seq(effects_without_db);
var chunk__31822 = null;
var count__31823 = (0);
var i__31824 = (0);
while(true){
if((i__31824 < count__31823)){
var vec__31838 = chunk__31822.cljs$core$IIndexed$_nth$arity$2(null,i__31824);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31838,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31838,(1),null);
var temp__5733__auto___31950 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31950)){
var effect_fn_31951 = temp__5733__auto___31950;
(effect_fn_31951.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31951.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31951.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31952 = seq__31821;
var G__31953 = chunk__31822;
var G__31954 = count__31823;
var G__31955 = (i__31824 + (1));
seq__31821 = G__31952;
chunk__31822 = G__31953;
count__31823 = G__31954;
i__31824 = G__31955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31821);
if(temp__5735__auto__){
var seq__31821__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31821__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31821__$1);
var G__31956 = cljs.core.chunk_rest(seq__31821__$1);
var G__31957 = c__4556__auto__;
var G__31958 = cljs.core.count(c__4556__auto__);
var G__31959 = (0);
seq__31821 = G__31956;
chunk__31822 = G__31957;
count__31823 = G__31958;
i__31824 = G__31959;
continue;
} else {
var vec__31844 = cljs.core.first(seq__31821__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,(1),null);
var temp__5733__auto___31960 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31960)){
var effect_fn_31961 = temp__5733__auto___31960;
(effect_fn_31961.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31961.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31961.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31962 = cljs.core.next(seq__31821__$1);
var G__31963 = null;
var G__31964 = (0);
var G__31965 = (0);
seq__31821 = G__31962;
chunk__31822 = G__31963;
count__31823 = G__31964;
i__31824 = G__31965;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__31294__auto___31966 = re_frame.interop.now();
var duration__31295__auto___31967 = (end__31294__auto___31966 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31295__auto___31967,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__31294__auto___31966);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31816);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___31975 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___31975)){
var new_db_31979 = temp__5735__auto___31975;
var fexpr__31850_31980 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31850_31980.cljs$core$IFn$_invoke$arity$1 ? fexpr__31850_31980.cljs$core$IFn$_invoke$arity$1(new_db_31979) : fexpr__31850_31980.call(null,new_db_31979));
} else {
}

var seq__31851 = cljs.core.seq(effects_without_db);
var chunk__31852 = null;
var count__31853 = (0);
var i__31854 = (0);
while(true){
if((i__31854 < count__31853)){
var vec__31873 = chunk__31852.cljs$core$IIndexed$_nth$arity$2(null,i__31854);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(1),null);
var temp__5733__auto___31987 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31987)){
var effect_fn_31988 = temp__5733__auto___31987;
(effect_fn_31988.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31988.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31988.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31989 = seq__31851;
var G__31990 = chunk__31852;
var G__31991 = count__31853;
var G__31992 = (i__31854 + (1));
seq__31851 = G__31989;
chunk__31852 = G__31990;
count__31853 = G__31991;
i__31854 = G__31992;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31851);
if(temp__5735__auto__){
var seq__31851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31851__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31851__$1);
var G__31996 = cljs.core.chunk_rest(seq__31851__$1);
var G__31997 = c__4556__auto__;
var G__31998 = cljs.core.count(c__4556__auto__);
var G__31999 = (0);
seq__31851 = G__31996;
chunk__31852 = G__31997;
count__31853 = G__31998;
i__31854 = G__31999;
continue;
} else {
var vec__31877 = cljs.core.first(seq__31851__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31877,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31877,(1),null);
var temp__5733__auto___32000 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32000)){
var effect_fn_32001 = temp__5733__auto___32000;
(effect_fn_32001.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32001.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32001.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32002 = cljs.core.next(seq__31851__$1);
var G__32003 = null;
var G__32004 = (0);
var G__32005 = (0);
seq__31851 = G__32002;
chunk__31852 = G__32003;
count__31853 = G__32004;
i__31854 = G__32005;
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
var seq__31881 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31882 = null;
var count__31883 = (0);
var i__31884 = (0);
while(true){
if((i__31884 < count__31883)){
var map__31891 = chunk__31882.cljs$core$IIndexed$_nth$arity$2(null,i__31884);
var map__31891__$1 = (((((!((map__31891 == null))))?(((((map__31891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31891):map__31891);
var effect = map__31891__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31891__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31891__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__31881,chunk__31882,count__31883,i__31884,map__31891,map__31891__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__31881,chunk__31882,count__31883,i__31884,map__31891,map__31891__$1,effect,ms,dispatch))
,ms);
}


var G__32013 = seq__31881;
var G__32014 = chunk__31882;
var G__32015 = count__31883;
var G__32016 = (i__31884 + (1));
seq__31881 = G__32013;
chunk__31882 = G__32014;
count__31883 = G__32015;
i__31884 = G__32016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31881);
if(temp__5735__auto__){
var seq__31881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31881__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31881__$1);
var G__32020 = cljs.core.chunk_rest(seq__31881__$1);
var G__32021 = c__4556__auto__;
var G__32022 = cljs.core.count(c__4556__auto__);
var G__32023 = (0);
seq__31881 = G__32020;
chunk__31882 = G__32021;
count__31883 = G__32022;
i__31884 = G__32023;
continue;
} else {
var map__31893 = cljs.core.first(seq__31881__$1);
var map__31893__$1 = (((((!((map__31893 == null))))?(((((map__31893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31893):map__31893);
var effect = map__31893__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31893__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31893__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__31881,chunk__31882,count__31883,i__31884,map__31893,map__31893__$1,effect,ms,dispatch,seq__31881__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__31881,chunk__31882,count__31883,i__31884,map__31893,map__31893__$1,effect,ms,dispatch,seq__31881__$1,temp__5735__auto__))
,ms);
}


var G__32027 = cljs.core.next(seq__31881__$1);
var G__32028 = null;
var G__32029 = (0);
var G__32030 = (0);
seq__31881 = G__32027;
chunk__31882 = G__32028;
count__31883 = G__32029;
i__31884 = G__32030;
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
var seq__31895 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__31896 = null;
var count__31897 = (0);
var i__31898 = (0);
while(true){
if((i__31898 < count__31897)){
var vec__31906 = chunk__31896.cljs$core$IIndexed$_nth$arity$2(null,i__31898);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31906,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31906,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32034 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32034)){
var effect_fn_32035 = temp__5733__auto___32034;
(effect_fn_32035.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32035.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32035.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32039 = seq__31895;
var G__32040 = chunk__31896;
var G__32041 = count__31897;
var G__32042 = (i__31898 + (1));
seq__31895 = G__32039;
chunk__31896 = G__32040;
count__31897 = G__32041;
i__31898 = G__32042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31895);
if(temp__5735__auto__){
var seq__31895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31895__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31895__$1);
var G__32043 = cljs.core.chunk_rest(seq__31895__$1);
var G__32044 = c__4556__auto__;
var G__32045 = cljs.core.count(c__4556__auto__);
var G__32046 = (0);
seq__31895 = G__32043;
chunk__31896 = G__32044;
count__31897 = G__32045;
i__31898 = G__32046;
continue;
} else {
var vec__31912 = cljs.core.first(seq__31895__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31912,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31912,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32048 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32048)){
var effect_fn_32049 = temp__5733__auto___32048;
(effect_fn_32049.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32049.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32049.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32050 = cljs.core.next(seq__31895__$1);
var G__32051 = null;
var G__32052 = (0);
var G__32053 = (0);
seq__31895 = G__32050;
chunk__31896 = G__32051;
count__31897 = G__32052;
i__31898 = G__32053;
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
var seq__31921 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31922 = null;
var count__31923 = (0);
var i__31924 = (0);
while(true){
if((i__31924 < count__31923)){
var event = chunk__31922.cljs$core$IIndexed$_nth$arity$2(null,i__31924);
re_frame.router.dispatch(event);


var G__32061 = seq__31921;
var G__32062 = chunk__31922;
var G__32063 = count__31923;
var G__32064 = (i__31924 + (1));
seq__31921 = G__32061;
chunk__31922 = G__32062;
count__31923 = G__32063;
i__31924 = G__32064;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31921);
if(temp__5735__auto__){
var seq__31921__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31921__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31921__$1);
var G__32066 = cljs.core.chunk_rest(seq__31921__$1);
var G__32067 = c__4556__auto__;
var G__32068 = cljs.core.count(c__4556__auto__);
var G__32069 = (0);
seq__31921 = G__32066;
chunk__31922 = G__32067;
count__31923 = G__32068;
i__31924 = G__32069;
continue;
} else {
var event = cljs.core.first(seq__31921__$1);
re_frame.router.dispatch(event);


var G__32070 = cljs.core.next(seq__31921__$1);
var G__32071 = null;
var G__32072 = (0);
var G__32073 = (0);
seq__31921 = G__32070;
chunk__31922 = G__32071;
count__31923 = G__32072;
i__31924 = G__32073;
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
var seq__31926 = cljs.core.seq(value);
var chunk__31927 = null;
var count__31928 = (0);
var i__31929 = (0);
while(true){
if((i__31929 < count__31928)){
var event = chunk__31927.cljs$core$IIndexed$_nth$arity$2(null,i__31929);
clear_event(event);


var G__32075 = seq__31926;
var G__32076 = chunk__31927;
var G__32077 = count__31928;
var G__32078 = (i__31929 + (1));
seq__31926 = G__32075;
chunk__31927 = G__32076;
count__31928 = G__32077;
i__31929 = G__32078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31926);
if(temp__5735__auto__){
var seq__31926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31926__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31926__$1);
var G__32079 = cljs.core.chunk_rest(seq__31926__$1);
var G__32080 = c__4556__auto__;
var G__32081 = cljs.core.count(c__4556__auto__);
var G__32082 = (0);
seq__31926 = G__32079;
chunk__31927 = G__32080;
count__31928 = G__32081;
i__31929 = G__32082;
continue;
} else {
var event = cljs.core.first(seq__31926__$1);
clear_event(event);


var G__32083 = cljs.core.next(seq__31926__$1);
var G__32084 = null;
var G__32085 = (0);
var G__32086 = (0);
seq__31926 = G__32083;
chunk__31927 = G__32084;
count__31928 = G__32085;
i__31929 = G__32086;
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
