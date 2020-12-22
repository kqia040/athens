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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__60169,match){
var map__60171 = p__60169;
var map__60171__$1 = (((((!((map__60171 == null))))?(((((map__60171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60171):map__60171);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60171__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60171__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60171__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__60182(s__60183){
return (new cljs.core.LazySeq(null,(function (){
var s__60183__$1 = s__60183;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60183__$1);
if(temp__5735__auto__){
var s__60183__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60183__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60183__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60185 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60184 = (0);
while(true){
if((i__60184 < size__4528__auto__)){
var vec__60190 = cljs.core._nth(c__4527__auto__,i__60184);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60190,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60190,(1),null);
cljs.core.chunk_append(b__60185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__60300 = (i__60184 + (1));
i__60184 = G__60300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60185),reitit$frontend$controllers$get_identity_$_iter__60182(cljs.core.chunk_rest(s__60183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60185),null);
}
} else {
var vec__60197 = cljs.core.first(s__60183__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60197,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60197,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__60182(cljs.core.rest(s__60183__$2)));
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
var G__60206 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60206) : f.call(null,G__60206));
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
var seq__60220_60330 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__60221_60331 = null;
var count__60222_60332 = (0);
var i__60223_60333 = (0);
while(true){
if((i__60223_60333 < count__60222_60332)){
var controller_60335 = chunk__60221_60331.cljs$core$IIndexed$_nth$arity$2(null,i__60223_60333);
reitit.frontend.controllers.apply_controller(controller_60335,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60339 = seq__60220_60330;
var G__60340 = chunk__60221_60331;
var G__60341 = count__60222_60332;
var G__60342 = (i__60223_60333 + (1));
seq__60220_60330 = G__60339;
chunk__60221_60331 = G__60340;
count__60222_60332 = G__60341;
i__60223_60333 = G__60342;
continue;
} else {
var temp__5735__auto___60343 = cljs.core.seq(seq__60220_60330);
if(temp__5735__auto___60343){
var seq__60220_60348__$1 = temp__5735__auto___60343;
if(cljs.core.chunked_seq_QMARK_(seq__60220_60348__$1)){
var c__4556__auto___60349 = cljs.core.chunk_first(seq__60220_60348__$1);
var G__60353 = cljs.core.chunk_rest(seq__60220_60348__$1);
var G__60354 = c__4556__auto___60349;
var G__60355 = cljs.core.count(c__4556__auto___60349);
var G__60356 = (0);
seq__60220_60330 = G__60353;
chunk__60221_60331 = G__60354;
count__60222_60332 = G__60355;
i__60223_60333 = G__60356;
continue;
} else {
var controller_60357 = cljs.core.first(seq__60220_60348__$1);
reitit.frontend.controllers.apply_controller(controller_60357,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60358 = cljs.core.next(seq__60220_60348__$1);
var G__60359 = null;
var G__60360 = (0);
var G__60361 = (0);
seq__60220_60330 = G__60358;
chunk__60221_60331 = G__60359;
count__60222_60332 = G__60360;
i__60223_60333 = G__60361;
continue;
}
} else {
}
}
break;
}

var seq__60247_60365 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__60248_60366 = null;
var count__60249_60367 = (0);
var i__60250_60368 = (0);
while(true){
if((i__60250_60368 < count__60249_60367)){
var controller_60373 = chunk__60248_60366.cljs$core$IIndexed$_nth$arity$2(null,i__60250_60368);
reitit.frontend.controllers.apply_controller(controller_60373,new cljs.core.Keyword(null,"start","start",-355208981));


var G__60374 = seq__60247_60365;
var G__60375 = chunk__60248_60366;
var G__60376 = count__60249_60367;
var G__60377 = (i__60250_60368 + (1));
seq__60247_60365 = G__60374;
chunk__60248_60366 = G__60375;
count__60249_60367 = G__60376;
i__60250_60368 = G__60377;
continue;
} else {
var temp__5735__auto___60379 = cljs.core.seq(seq__60247_60365);
if(temp__5735__auto___60379){
var seq__60247_60380__$1 = temp__5735__auto___60379;
if(cljs.core.chunked_seq_QMARK_(seq__60247_60380__$1)){
var c__4556__auto___60382 = cljs.core.chunk_first(seq__60247_60380__$1);
var G__60389 = cljs.core.chunk_rest(seq__60247_60380__$1);
var G__60390 = c__4556__auto___60382;
var G__60391 = cljs.core.count(c__4556__auto___60382);
var G__60392 = (0);
seq__60247_60365 = G__60389;
chunk__60248_60366 = G__60390;
count__60249_60367 = G__60391;
i__60250_60368 = G__60392;
continue;
} else {
var controller_60397 = cljs.core.first(seq__60247_60380__$1);
reitit.frontend.controllers.apply_controller(controller_60397,new cljs.core.Keyword(null,"start","start",-355208981));


var G__60399 = cljs.core.next(seq__60247_60380__$1);
var G__60400 = null;
var G__60401 = (0);
var G__60402 = (0);
seq__60247_60365 = G__60399;
chunk__60248_60366 = G__60400;
count__60249_60367 = G__60401;
i__60250_60368 = G__60402;
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
