goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__27769 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__27770 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__27770);

try{try{var seq__27772 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27773 = null;
var count__27774 = (0);
var i__27775 = (0);
while(true){
if((i__27775 < count__27774)){
var vec__27793 = chunk__27773.cljs$core$IIndexed$_nth$arity$2(null,i__27775);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27793,(1),null);
var temp__5733__auto___27876 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27876)){
var effect_fn_27877 = temp__5733__auto___27876;
(effect_fn_27877.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27877.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27877.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27882 = seq__27772;
var G__27883 = chunk__27773;
var G__27884 = count__27774;
var G__27885 = (i__27775 + (1));
seq__27772 = G__27882;
chunk__27773 = G__27883;
count__27774 = G__27884;
i__27775 = G__27885;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27772);
if(temp__5735__auto__){
var seq__27772__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27772__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27772__$1);
var G__27890 = cljs.core.chunk_rest(seq__27772__$1);
var G__27891 = c__4556__auto__;
var G__27892 = cljs.core.count(c__4556__auto__);
var G__27893 = (0);
seq__27772 = G__27890;
chunk__27773 = G__27891;
count__27774 = G__27892;
i__27775 = G__27893;
continue;
} else {
var vec__27804 = cljs.core.first(seq__27772__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27804,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27804,(1),null);
var temp__5733__auto___27898 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27898)){
var effect_fn_27899 = temp__5733__auto___27898;
(effect_fn_27899.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27899.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27899.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27900 = cljs.core.next(seq__27772__$1);
var G__27901 = null;
var G__27902 = (0);
var G__27903 = (0);
seq__27772 = G__27900;
chunk__27773 = G__27901;
count__27774 = G__27902;
i__27775 = G__27903;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27417__auto___27904 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__27418__auto___27905 = (end__27417__auto___27904 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27418__auto___27905,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__27417__auto___27904);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__27769);
}} else {
var seq__27808 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27809 = null;
var count__27810 = (0);
var i__27811 = (0);
while(true){
if((i__27811 < count__27810)){
var vec__27828 = chunk__27809.cljs$core$IIndexed$_nth$arity$2(null,i__27811);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(1),null);
var temp__5733__auto___27913 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27913)){
var effect_fn_27914 = temp__5733__auto___27913;
(effect_fn_27914.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27914.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27914.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27915 = seq__27808;
var G__27916 = chunk__27809;
var G__27917 = count__27810;
var G__27918 = (i__27811 + (1));
seq__27808 = G__27915;
chunk__27809 = G__27916;
count__27810 = G__27917;
i__27811 = G__27918;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27808);
if(temp__5735__auto__){
var seq__27808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27808__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27808__$1);
var G__27919 = cljs.core.chunk_rest(seq__27808__$1);
var G__27920 = c__4556__auto__;
var G__27921 = cljs.core.count(c__4556__auto__);
var G__27922 = (0);
seq__27808 = G__27919;
chunk__27809 = G__27920;
count__27810 = G__27921;
i__27811 = G__27922;
continue;
} else {
var vec__27836 = cljs.core.first(seq__27808__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836,(1),null);
var temp__5733__auto___27927 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27927)){
var effect_fn_27928 = temp__5733__auto___27927;
(effect_fn_27928.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27928.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27928.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27930 = cljs.core.next(seq__27808__$1);
var G__27931 = null;
var G__27932 = (0);
var G__27933 = (0);
seq__27808 = G__27930;
chunk__27809 = G__27931;
count__27810 = G__27932;
i__27811 = G__27933;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27840 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27841 = null;
var count__27842 = (0);
var i__27843 = (0);
while(true){
if((i__27843 < count__27842)){
var map__27850 = chunk__27841.cljs$core$IIndexed$_nth$arity$2(null,i__27843);
var map__27850__$1 = (((((!((map__27850 == null))))?(((((map__27850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27850):map__27850);
var effect = map__27850__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__27840,chunk__27841,count__27842,i__27843,map__27850,map__27850__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__27840,chunk__27841,count__27842,i__27843,map__27850,map__27850__$1,effect,ms,dispatch))
,ms);
}


var G__27936 = seq__27840;
var G__27937 = chunk__27841;
var G__27938 = count__27842;
var G__27939 = (i__27843 + (1));
seq__27840 = G__27936;
chunk__27841 = G__27937;
count__27842 = G__27938;
i__27843 = G__27939;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27840);
if(temp__5735__auto__){
var seq__27840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27840__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27840__$1);
var G__27941 = cljs.core.chunk_rest(seq__27840__$1);
var G__27942 = c__4556__auto__;
var G__27943 = cljs.core.count(c__4556__auto__);
var G__27944 = (0);
seq__27840 = G__27941;
chunk__27841 = G__27942;
count__27842 = G__27943;
i__27843 = G__27944;
continue;
} else {
var map__27852 = cljs.core.first(seq__27840__$1);
var map__27852__$1 = (((((!((map__27852 == null))))?(((((map__27852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27852):map__27852);
var effect = map__27852__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27852__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27852__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__27840,chunk__27841,count__27842,i__27843,map__27852,map__27852__$1,effect,ms,dispatch,seq__27840__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__27840,chunk__27841,count__27842,i__27843,map__27852,map__27852__$1,effect,ms,dispatch,seq__27840__$1,temp__5735__auto__))
,ms);
}


var G__27954 = cljs.core.next(seq__27840__$1);
var G__27955 = null;
var G__27956 = (0);
var G__27957 = (0);
seq__27840 = G__27954;
chunk__27841 = G__27955;
count__27842 = G__27956;
i__27843 = G__27957;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__27860 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27861 = null;
var count__27862 = (0);
var i__27863 = (0);
while(true){
if((i__27863 < count__27862)){
var event = chunk__27861.cljs$core$IIndexed$_nth$arity$2(null,i__27863);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__27960 = seq__27860;
var G__27961 = chunk__27861;
var G__27962 = count__27862;
var G__27963 = (i__27863 + (1));
seq__27860 = G__27960;
chunk__27861 = G__27961;
count__27862 = G__27962;
i__27863 = G__27963;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27860);
if(temp__5735__auto__){
var seq__27860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27860__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27860__$1);
var G__27964 = cljs.core.chunk_rest(seq__27860__$1);
var G__27965 = c__4556__auto__;
var G__27966 = cljs.core.count(c__4556__auto__);
var G__27967 = (0);
seq__27860 = G__27964;
chunk__27861 = G__27965;
count__27862 = G__27966;
i__27863 = G__27967;
continue;
} else {
var event = cljs.core.first(seq__27860__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__27968 = cljs.core.next(seq__27860__$1);
var G__27969 = null;
var G__27970 = (0);
var G__27971 = (0);
seq__27860 = G__27968;
chunk__27861 = G__27969;
count__27862 = G__27970;
i__27863 = G__27971;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27869 = cljs.core.seq(value);
var chunk__27870 = null;
var count__27871 = (0);
var i__27872 = (0);
while(true){
if((i__27872 < count__27871)){
var event = chunk__27870.cljs$core$IIndexed$_nth$arity$2(null,i__27872);
clear_event(event);


var G__27972 = seq__27869;
var G__27973 = chunk__27870;
var G__27974 = count__27871;
var G__27975 = (i__27872 + (1));
seq__27869 = G__27972;
chunk__27870 = G__27973;
count__27871 = G__27974;
i__27872 = G__27975;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27869);
if(temp__5735__auto__){
var seq__27869__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27869__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27869__$1);
var G__27977 = cljs.core.chunk_rest(seq__27869__$1);
var G__27978 = c__4556__auto__;
var G__27979 = cljs.core.count(c__4556__auto__);
var G__27980 = (0);
seq__27869 = G__27977;
chunk__27870 = G__27978;
count__27871 = G__27979;
i__27872 = G__27980;
continue;
} else {
var event = cljs.core.first(seq__27869__$1);
clear_event(event);


var G__27981 = cljs.core.next(seq__27869__$1);
var G__27982 = null;
var G__27983 = (0);
var G__27984 = (0);
seq__27869 = G__27981;
chunk__27870 = G__27982;
count__27871 = G__27983;
i__27872 = G__27984;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
