goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__53950,match){
var map__53951 = p__53950;
var map__53951__$1 = (((((!((map__53951 == null))))?(((((map__53951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53951):map__53951);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__53961(s__53962){
return (new cljs.core.LazySeq(null,(function (){
var s__53962__$1 = s__53962;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53962__$1);
if(temp__5735__auto__){
var s__53962__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53962__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53962__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53964 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53963 = (0);
while(true){
if((i__53963 < size__4528__auto__)){
var vec__53970 = cljs.core._nth(c__4527__auto__,i__53963);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53970,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53970,(1),null);
cljs.core.chunk_append(b__53964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__54081 = (i__53963 + (1));
i__53963 = G__54081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53964),reitit$frontend$controllers$get_identity_$_iter__53961(cljs.core.chunk_rest(s__53962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53964),null);
}
} else {
var vec__53975 = cljs.core.first(s__53962__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53975,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53975,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__53961(cljs.core.rest(s__53962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__53983 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53983) : f.call(null,G__53983));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__53997_54107 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__53998_54108 = null;
var count__53999_54109 = (0);
var i__54000_54110 = (0);
while(true){
if((i__54000_54110 < count__53999_54109)){
var controller_54118 = chunk__53998_54108.cljs$core$IIndexed$_nth$arity$2(null,i__54000_54110);
reitit.frontend.controllers.apply_controller(controller_54118,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54119 = seq__53997_54107;
var G__54120 = chunk__53998_54108;
var G__54121 = count__53999_54109;
var G__54122 = (i__54000_54110 + (1));
seq__53997_54107 = G__54119;
chunk__53998_54108 = G__54120;
count__53999_54109 = G__54121;
i__54000_54110 = G__54122;
continue;
} else {
var temp__5735__auto___54123 = cljs.core.seq(seq__53997_54107);
if(temp__5735__auto___54123){
var seq__53997_54131__$1 = temp__5735__auto___54123;
if(cljs.core.chunked_seq_QMARK_(seq__53997_54131__$1)){
var c__4556__auto___54138 = cljs.core.chunk_first(seq__53997_54131__$1);
var G__54139 = cljs.core.chunk_rest(seq__53997_54131__$1);
var G__54140 = c__4556__auto___54138;
var G__54141 = cljs.core.count(c__4556__auto___54138);
var G__54142 = (0);
seq__53997_54107 = G__54139;
chunk__53998_54108 = G__54140;
count__53999_54109 = G__54141;
i__54000_54110 = G__54142;
continue;
} else {
var controller_54147 = cljs.core.first(seq__53997_54131__$1);
reitit.frontend.controllers.apply_controller(controller_54147,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54148 = cljs.core.next(seq__53997_54131__$1);
var G__54149 = null;
var G__54150 = (0);
var G__54151 = (0);
seq__53997_54107 = G__54148;
chunk__53998_54108 = G__54149;
count__53999_54109 = G__54150;
i__54000_54110 = G__54151;
continue;
}
} else {
}
}
break;
}

var seq__54026_54153 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__54027_54154 = null;
var count__54028_54155 = (0);
var i__54029_54156 = (0);
while(true){
if((i__54029_54156 < count__54028_54155)){
var controller_54157 = chunk__54027_54154.cljs$core$IIndexed$_nth$arity$2(null,i__54029_54156);
reitit.frontend.controllers.apply_controller(controller_54157,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54162 = seq__54026_54153;
var G__54163 = chunk__54027_54154;
var G__54164 = count__54028_54155;
var G__54165 = (i__54029_54156 + (1));
seq__54026_54153 = G__54162;
chunk__54027_54154 = G__54163;
count__54028_54155 = G__54164;
i__54029_54156 = G__54165;
continue;
} else {
var temp__5735__auto___54171 = cljs.core.seq(seq__54026_54153);
if(temp__5735__auto___54171){
var seq__54026_54172__$1 = temp__5735__auto___54171;
if(cljs.core.chunked_seq_QMARK_(seq__54026_54172__$1)){
var c__4556__auto___54173 = cljs.core.chunk_first(seq__54026_54172__$1);
var G__54174 = cljs.core.chunk_rest(seq__54026_54172__$1);
var G__54175 = c__4556__auto___54173;
var G__54176 = cljs.core.count(c__4556__auto___54173);
var G__54177 = (0);
seq__54026_54153 = G__54174;
chunk__54027_54154 = G__54175;
count__54028_54155 = G__54176;
i__54029_54156 = G__54177;
continue;
} else {
var controller_54182 = cljs.core.first(seq__54026_54172__$1);
reitit.frontend.controllers.apply_controller(controller_54182,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54183 = cljs.core.next(seq__54026_54172__$1);
var G__54184 = null;
var G__54185 = (0);
var G__54186 = (0);
seq__54026_54153 = G__54183;
chunk__54027_54154 = G__54184;
count__54028_54155 = G__54185;
i__54029_54156 = G__54186;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
