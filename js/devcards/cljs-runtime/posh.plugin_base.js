goog.provide('posh.plugin_base');
posh.plugin_base.missing_pull_result = (function posh$plugin_base$missing_pull_result(dcfg,pull_expr){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.plugin_base.safe_pull = (function posh$plugin_base$safe_pull(dcfg,db,query,id){
if(cljs.core.integer_QMARK_(id)){
var fexpr__26237 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26237.cljs$core$IFn$_invoke$arity$3 ? fexpr__26237.cljs$core$IFn$_invoke$arity$3(db,query,id) : fexpr__26237.call(null,db,query,id));
} else {
if(cljs.core.vector_QMARK_(id)){
var temp__5733__auto__ = (function (){var fexpr__26238 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26238.cljs$core$IFn$_invoke$arity$2 ? fexpr__26238.cljs$core$IFn$_invoke$arity$2(db,id) : fexpr__26238.call(null,db,id));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var eid = temp__5733__auto__;
var fexpr__26240 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26240.cljs$core$IFn$_invoke$arity$3 ? fexpr__26240.cljs$core$IFn$_invoke$arity$3(db,query,eid) : fexpr__26240.call(null,db,query,eid));
} else {
return posh.plugin_base.missing_pull_result(dcfg,query);
}
} else {
if((id == null)){
return posh.plugin_base.missing_pull_result(dcfg,query);
} else {
return null;
}
}
}
});
posh.plugin_base.set_conn_listener_BANG_ = (function posh$plugin_base$set_conn_listener_BANG_(dcfg,posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
var G__26243_26441 = conn;
var G__26244_26442 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766);
var G__26245_26443 = (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
});
var fexpr__26242_26444 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__26242_26444.cljs$core$IFn$_invoke$arity$3 ? fexpr__26242_26444.cljs$core$IFn$_invoke$arity$3(G__26243_26441,G__26244_26442,G__26245_26443) : fexpr__26242_26444.call(null,G__26243_26441,G__26244_26442,G__26245_26443));

cljs.core.add_watch(conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
}));

var G__26259_26446 = conn;
var G__26260_26447 = new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061);
var G__26261_26448 = (function (tx_report){
var map__26263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__26263__$1 = (((((!((map__26263 == null))))?(((((map__26263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26263):map__26263);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26263__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26263__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__26268 = cljs.core.seq(changed);
var chunk__26269 = null;
var count__26270 = (0);
var i__26271 = (0);
while(true){
if((i__26271 < count__26270)){
var vec__26280 = chunk__26269.cljs$core$IIndexed$_nth$arity$2(null,i__26271);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26280,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__26454 = seq__26268;
var G__26455 = chunk__26269;
var G__26456 = count__26270;
var G__26457 = (i__26271 + (1));
seq__26268 = G__26454;
chunk__26269 = G__26455;
count__26270 = G__26456;
i__26271 = G__26457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26268);
if(temp__5735__auto__){
var seq__26268__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26268__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26268__$1);
var G__26459 = cljs.core.chunk_rest(seq__26268__$1);
var G__26460 = c__4556__auto__;
var G__26461 = cljs.core.count(c__4556__auto__);
var G__26462 = (0);
seq__26268 = G__26459;
chunk__26269 = G__26460;
count__26270 = G__26461;
i__26271 = G__26462;
continue;
} else {
var vec__26284 = cljs.core.first(seq__26268__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__26463 = cljs.core.next(seq__26268__$1);
var G__26464 = null;
var G__26465 = (0);
var G__26466 = (0);
seq__26268 = G__26463;
chunk__26269 = G__26464;
count__26270 = G__26465;
i__26271 = G__26466;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__26258_26449 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__26258_26449.cljs$core$IFn$_invoke$arity$3 ? fexpr__26258_26449.cljs$core$IFn$_invoke$arity$3(G__26259_26446,G__26260_26447,G__26261_26448) : fexpr__26258_26449.call(null,G__26259_26446,G__26260_26447,G__26261_26448));

return conn;
});
posh.plugin_base.posh_BANG_ = (function posh$plugin_base$posh_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26468 = arguments.length;
var i__4737__auto___26469 = (0);
while(true){
if((i__4737__auto___26469 < len__4736__auto___26468)){
args__4742__auto__.push((arguments[i__4737__auto___26469]));

var G__26470 = (i__4737__auto___26469 + (1));
i__4737__auto___26469 = G__26470;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,conns){
var posh_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_(posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.empty_tree(dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY], 0));
while(true){
if(cljs.core.empty_QMARK_(conns__$1)){
return posh_tree;
} else {
var G__26473 = (n + (1));
var G__26474 = cljs.core.rest(conns__$1);
var G__26475 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.plugin_base.set_conn_listener_BANG_(dcfg,posh_atom,cljs.core.first(conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(conns__$1))));
})();
n = G__26473;
conns__$1 = G__26474;
posh_tree = G__26475;
continue;
}
break;
}
})());
}));

(posh.plugin_base.posh_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.plugin_base.posh_BANG_.cljs$lang$applyTo = (function (seq26287){
var G__26288 = cljs.core.first(seq26287);
var seq26287__$1 = cljs.core.next(seq26287);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26288,seq26287__$1);
}));

posh.plugin_base.get_conn_var = (function posh$plugin_base$get_conn_var(dcfg,conn,var$){
var fexpr__26297 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
return (fexpr__26297.cljs$core$IFn$_invoke$arity$1 ? fexpr__26297.cljs$core$IFn$_invoke$arity$1(var$) : fexpr__26297.call(null,var$));
});
posh.plugin_base.get_posh_atom = (function posh$plugin_base$get_posh_atom(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__26300 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26300.cljs$core$IFn$_invoke$arity$1 ? fexpr__26300.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__26300.call(null,poshdb_or_conn));
})())){
return posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.plugin_base.get_db = (function posh$plugin_base$get_db(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__26306 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26306.cljs$core$IFn$_invoke$arity$1 ? fexpr__26306.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__26306.call(null,poshdb_or_conn));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.plugin_base.rm_posh_item = (function posh$plugin_base$rm_posh_item(dcfg,posh_atom,storage_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key)], 0));
}));
});
posh.plugin_base.make_query_reaction = (function posh$plugin_base$make_query_reaction(var_args){
var G__26316 = arguments.length;
switch (G__26316) {
case 5:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,posh_atom,storage_key,add_query_fn,options){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
var posh_atom_with_query = (add_query_fn.cljs$core$IFn$_invoke$arity$1 ? add_query_fn.cljs$core$IFn$_invoke$arity$1(posh_atom_val) : add_query_fn.call(null,posh_atom_val));
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__26321 = new cljs.core.Keyword(null,"ratom","ratom",-126521267).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26321.cljs$core$IFn$_invoke$arity$1 ? fexpr__26321.cljs$core$IFn$_invoke$arity$1(query_result) : fexpr__26321.call(null,query_result));
}
})();
var query_reaction = (function (){var G__26323 = (function (){
return cljs.core.deref(query_ratom);
});
var G__26324 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__26325 = (function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
}));
}
});
var fexpr__26322 = new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26322.cljs$core$IFn$_invoke$arity$3 ? fexpr__26322.cljs$core$IFn$_invoke$arity$3(G__26323,G__26324,G__26325) : fexpr__26322.call(null,G__26323,G__26324,G__26325));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction)], 0));
}))),storage_key);
}
}));

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,posh_atom,storage_key,add_query_fn){
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.make_query_reaction.cljs$lang$maxFixedArity = 5);

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.plugin_base.pull = (function posh$plugin_base$pull(var_args){
var G__26336 = arguments.length;
switch (G__26336) {
case 5:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eid,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__26334_SHARP_){
return posh.core.add_pull(p1__26334_SHARP_,true_poshdb,pull_pattern,eid);
}),options);
}));

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eid){
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_info = (function posh$plugin_base$pull_info(dcfg,poshdb,pull_pattern,eid){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_pull(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.plugin_base.pull_many = (function posh$plugin_base$pull_many(var_args){
var G__26345 = arguments.length;
switch (G__26345) {
case 5:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eids,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),true_poshdb,pull_pattern,eids], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__26343_SHARP_){
return posh.core.add_pull_many(p1__26343_SHARP_,true_poshdb,pull_pattern,eids);
}),options);
}));

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eids){
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eids,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull_many.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_tx = (function posh$plugin_base$pull_tx(dcfg,tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pull-tx is deprecated. Calling pull without your tx-patterns."], 0));

return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4(dcfg,poshdb,pull_pattern,eid);
});
posh.plugin_base.parse_q_query = (function posh$plugin_base$parse_q_query(dcfg,query){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26357,query_item){
var vec__26358 = p__26357;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26358,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26358,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.plugin_base.q_args_count = (function posh$plugin_base$q_args_count(dcfg,query){
var parsed_query = posh.plugin_base.parse_q_query(dcfg,query);
var temp__5733__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5733__auto__)){
var in_clause = temp__5733__auto__;
return cljs.core.count(in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.plugin_base.q = (function posh$plugin_base$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26503 = arguments.length;
var i__4737__auto___26504 = (0);
while(true){
if((i__4737__auto___26504 < len__4736__auto___26503)){
args__4742__auto__.push((arguments[i__4737__auto___26504]));

var G__26507 = (i__4737__auto___26504 + (1));
i__4737__auto___26504 = G__26507;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var n_query_args = posh.plugin_base.q_args_count(dcfg,query);
var vec__26382 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n_query_args + (1)),cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26366_SHARP_){
if(cljs.core.truth_((function (){var fexpr__26385 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26385.cljs$core$IFn$_invoke$arity$1 ? fexpr__26385.cljs$core$IFn$_invoke$arity$1(p1__26366_SHARP_) : fexpr__26385.call(null,p1__26366_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__26366_SHARP_);
} else {
return p1__26366_SHARP_;
}
}),args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26367_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__26367_SHARP_);
}),args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__26368_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__26368_SHARP_,query),true_poshdb_args);
}),options);
}));

(posh.plugin_base.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q.cljs$lang$applyTo = (function (seq26371){
var G__26372 = cljs.core.first(seq26371);
var seq26371__$1 = cljs.core.next(seq26371);
var G__26373 = cljs.core.first(seq26371__$1);
var seq26371__$2 = cljs.core.next(seq26371__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26372,G__26373,seq26371__$2);
}));

posh.plugin_base.q_info = (function posh$plugin_base$q_info(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26517 = arguments.length;
var i__4737__auto___26518 = (0);
while(true){
if((i__4737__auto___26518 < len__4736__auto___26517)){
args__4742__auto__.push((arguments[i__4737__auto___26518]));

var G__26519 = (i__4737__auto___26518 + (1));
i__4737__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26388_SHARP_){
if(cljs.core.truth_((function (){var fexpr__26399 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26399.cljs$core$IFn$_invoke$arity$1 ? fexpr__26399.cljs$core$IFn$_invoke$arity$1(p1__26388_SHARP_) : fexpr__26399.call(null,p1__26388_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__26388_SHARP_);
} else {
return p1__26388_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26389_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__26389_SHARP_);
}),args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
}));

(posh.plugin_base.q_info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q_info.cljs$lang$applyTo = (function (seq26392){
var G__26393 = cljs.core.first(seq26392);
var seq26392__$1 = cljs.core.next(seq26392);
var G__26394 = cljs.core.first(seq26392__$1);
var seq26392__$2 = cljs.core.next(seq26392__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26393,G__26394,seq26392__$2);
}));

posh.plugin_base.q_tx = (function posh$plugin_base$q_tx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26529 = arguments.length;
var i__4737__auto___26530 = (0);
while(true){
if((i__4737__auto___26530 < len__4736__auto___26529)){
args__4742__auto__.push((arguments[i__4737__auto___26530]));

var G__26531 = (i__4737__auto___26530 + (1));
i__4737__auto___26530 = G__26531;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,tx_patterns,query,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["q-tx is deprecated. Calling q without your tx-patterns."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.plugin_base.q,dcfg,query,args);
}));

(posh.plugin_base.q_tx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(posh.plugin_base.q_tx.cljs$lang$applyTo = (function (seq26404){
var G__26405 = cljs.core.first(seq26404);
var seq26404__$1 = cljs.core.next(seq26404);
var G__26406 = cljs.core.first(seq26404__$1);
var seq26404__$2 = cljs.core.next(seq26404__$1);
var G__26407 = cljs.core.first(seq26404__$2);
var seq26404__$3 = cljs.core.next(seq26404__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26405,G__26406,G__26407,seq26404__$3);
}));

posh.plugin_base.filter_tx = (function posh$plugin_base$filter_tx(dcfg,poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.plugin_base.get_db(dcfg,poshdb),tx_patterns);
});
posh.plugin_base.filter_pull = (function posh$plugin_base$filter_pull(dcfg,poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.plugin_base.get_db(dcfg,poshdb),pull_pattern,eid);
});
posh.plugin_base.filter_q = (function posh$plugin_base$filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26535 = arguments.length;
var i__4737__auto___26536 = (0);
while(true){
if((i__4737__auto___26536 < len__4736__auto___26535)){
args__4742__auto__.push((arguments[i__4737__auto___26536]));

var G__26537 = (i__4737__auto___26536 + (1));
i__4737__auto___26536 = G__26537;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26410_SHARP_){
if(cljs.core.truth_((function (){var fexpr__26417 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26417.cljs$core$IFn$_invoke$arity$1 ? fexpr__26417.cljs$core$IFn$_invoke$arity$1(p1__26410_SHARP_) : fexpr__26417.call(null,p1__26410_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__26410_SHARP_);
} else {
return p1__26410_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
}));

(posh.plugin_base.filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.filter_q.cljs$lang$applyTo = (function (seq26412){
var G__26413 = cljs.core.first(seq26412);
var seq26412__$1 = cljs.core.next(seq26412);
var G__26414 = cljs.core.first(seq26412__$1);
var seq26412__$2 = cljs.core.next(seq26412__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26413,G__26414,seq26412__$2);
}));

posh.plugin_base.transact_BANG_ = (function posh$plugin_base$transact_BANG_(dcfg,poshdb_or_conn,txs){
var G__26424 = (cljs.core.truth_((function (){var fexpr__26426 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26426.cljs$core$IFn$_invoke$arity$1 ? fexpr__26426.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__26426.call(null,poshdb_or_conn));
})())?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn));
var G__26425 = txs;
var fexpr__26423 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26423.cljs$core$IFn$_invoke$arity$2 ? fexpr__26423.cljs$core$IFn$_invoke$arity$2(G__26424,G__26425) : fexpr__26423.call(null,G__26424,G__26425));
});

//# sourceMappingURL=posh.plugin_base.js.map
