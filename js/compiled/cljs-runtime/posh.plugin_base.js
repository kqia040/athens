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
var fexpr__36190 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36190.cljs$core$IFn$_invoke$arity$3 ? fexpr__36190.cljs$core$IFn$_invoke$arity$3(db,query,id) : fexpr__36190.call(null,db,query,id));
} else {
if(cljs.core.vector_QMARK_(id)){
var temp__5733__auto__ = (function (){var fexpr__36194 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36194.cljs$core$IFn$_invoke$arity$2 ? fexpr__36194.cljs$core$IFn$_invoke$arity$2(db,id) : fexpr__36194.call(null,db,id));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var eid = temp__5733__auto__;
var fexpr__36195 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36195.cljs$core$IFn$_invoke$arity$3 ? fexpr__36195.cljs$core$IFn$_invoke$arity$3(db,query,eid) : fexpr__36195.call(null,db,query,eid));
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
var G__36197_36284 = conn;
var G__36198_36285 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766);
var G__36199_36286 = (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
});
var fexpr__36196_36287 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__36196_36287.cljs$core$IFn$_invoke$arity$3 ? fexpr__36196_36287.cljs$core$IFn$_invoke$arity$3(G__36197_36284,G__36198_36285,G__36199_36286) : fexpr__36196_36287.call(null,G__36197_36284,G__36198_36285,G__36199_36286));

cljs.core.add_watch(conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
}));

var G__36201_36288 = conn;
var G__36202_36289 = new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061);
var G__36203_36290 = (function (tx_report){
var map__36204 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__36204__$1 = (((((!((map__36204 == null))))?(((((map__36204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36204):map__36204);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36204__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36204__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__36206 = cljs.core.seq(changed);
var chunk__36207 = null;
var count__36208 = (0);
var i__36209 = (0);
while(true){
if((i__36209 < count__36208)){
var vec__36216 = chunk__36207.cljs$core$IIndexed$_nth$arity$2(null,i__36209);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36216,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__36293 = seq__36206;
var G__36294 = chunk__36207;
var G__36295 = count__36208;
var G__36296 = (i__36209 + (1));
seq__36206 = G__36293;
chunk__36207 = G__36294;
count__36208 = G__36295;
i__36209 = G__36296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36206);
if(temp__5735__auto__){
var seq__36206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36206__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36206__$1);
var G__36297 = cljs.core.chunk_rest(seq__36206__$1);
var G__36298 = c__4556__auto__;
var G__36299 = cljs.core.count(c__4556__auto__);
var G__36300 = (0);
seq__36206 = G__36297;
chunk__36207 = G__36298;
count__36208 = G__36299;
i__36209 = G__36300;
continue;
} else {
var vec__36219 = cljs.core.first(seq__36206__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__36301 = cljs.core.next(seq__36206__$1);
var G__36302 = null;
var G__36303 = (0);
var G__36304 = (0);
seq__36206 = G__36301;
chunk__36207 = G__36302;
count__36208 = G__36303;
i__36209 = G__36304;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__36200_36291 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__36200_36291.cljs$core$IFn$_invoke$arity$3 ? fexpr__36200_36291.cljs$core$IFn$_invoke$arity$3(G__36201_36288,G__36202_36289,G__36203_36290) : fexpr__36200_36291.call(null,G__36201_36288,G__36202_36289,G__36203_36290));

return conn;
});
posh.plugin_base.posh_BANG_ = (function posh$plugin_base$posh_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36305 = arguments.length;
var i__4737__auto___36306 = (0);
while(true){
if((i__4737__auto___36306 < len__4736__auto___36305)){
args__4742__auto__.push((arguments[i__4737__auto___36306]));

var G__36307 = (i__4737__auto___36306 + (1));
i__4737__auto___36306 = G__36307;
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
var G__36308 = (n + (1));
var G__36309 = cljs.core.rest(conns__$1);
var G__36310 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.plugin_base.set_conn_listener_BANG_(dcfg,posh_atom,cljs.core.first(conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(conns__$1))));
})();
n = G__36308;
conns__$1 = G__36309;
posh_tree = G__36310;
continue;
}
break;
}
})());
}));

(posh.plugin_base.posh_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.plugin_base.posh_BANG_.cljs$lang$applyTo = (function (seq36222){
var G__36223 = cljs.core.first(seq36222);
var seq36222__$1 = cljs.core.next(seq36222);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36223,seq36222__$1);
}));

posh.plugin_base.get_conn_var = (function posh$plugin_base$get_conn_var(dcfg,conn,var$){
var fexpr__36224 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
return (fexpr__36224.cljs$core$IFn$_invoke$arity$1 ? fexpr__36224.cljs$core$IFn$_invoke$arity$1(var$) : fexpr__36224.call(null,var$));
});
posh.plugin_base.get_posh_atom = (function posh$plugin_base$get_posh_atom(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__36226 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36226.cljs$core$IFn$_invoke$arity$1 ? fexpr__36226.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__36226.call(null,poshdb_or_conn));
})())){
return posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.plugin_base.get_db = (function posh$plugin_base$get_db(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__36227 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36227.cljs$core$IFn$_invoke$arity$1 ? fexpr__36227.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__36227.call(null,poshdb_or_conn));
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
var G__36229 = arguments.length;
switch (G__36229) {
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
var fexpr__36230 = new cljs.core.Keyword(null,"ratom","ratom",-126521267).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36230.cljs$core$IFn$_invoke$arity$1 ? fexpr__36230.cljs$core$IFn$_invoke$arity$1(query_result) : fexpr__36230.call(null,query_result));
}
})();
var query_reaction = (function (){var G__36232 = (function (){
return cljs.core.deref(query_ratom);
});
var G__36233 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__36234 = (function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
}));
}
});
var fexpr__36231 = new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36231.cljs$core$IFn$_invoke$arity$3 ? fexpr__36231.cljs$core$IFn$_invoke$arity$3(G__36232,G__36233,G__36234) : fexpr__36231.call(null,G__36232,G__36233,G__36234));
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
var G__36237 = arguments.length;
switch (G__36237) {
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
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__36235_SHARP_){
return posh.core.add_pull(p1__36235_SHARP_,true_poshdb,pull_pattern,eid);
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
var G__36240 = arguments.length;
switch (G__36240) {
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
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__36238_SHARP_){
return posh.core.add_pull_many(p1__36238_SHARP_,true_poshdb,pull_pattern,eids);
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
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__36241,query_item){
var vec__36242 = p__36241;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36242,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36242,(1),null);
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
var len__4736__auto___36323 = arguments.length;
var i__4737__auto___36324 = (0);
while(true){
if((i__4737__auto___36324 < len__4736__auto___36323)){
args__4742__auto__.push((arguments[i__4737__auto___36324]));

var G__36325 = (i__4737__auto___36324 + (1));
i__4737__auto___36324 = G__36325;
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
var vec__36251 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n_query_args + (1)),cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36251,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36251,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36245_SHARP_){
if(cljs.core.truth_((function (){var fexpr__36256 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36256.cljs$core$IFn$_invoke$arity$1 ? fexpr__36256.cljs$core$IFn$_invoke$arity$1(p1__36245_SHARP_) : fexpr__36256.call(null,p1__36245_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__36245_SHARP_);
} else {
return p1__36245_SHARP_;
}
}),args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36246_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__36246_SHARP_);
}),args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__36247_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__36247_SHARP_,query),true_poshdb_args);
}),options);
}));

(posh.plugin_base.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q.cljs$lang$applyTo = (function (seq36248){
var G__36249 = cljs.core.first(seq36248);
var seq36248__$1 = cljs.core.next(seq36248);
var G__36250 = cljs.core.first(seq36248__$1);
var seq36248__$2 = cljs.core.next(seq36248__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36249,G__36250,seq36248__$2);
}));

posh.plugin_base.q_info = (function posh$plugin_base$q_info(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36330 = arguments.length;
var i__4737__auto___36331 = (0);
while(true){
if((i__4737__auto___36331 < len__4736__auto___36330)){
args__4742__auto__.push((arguments[i__4737__auto___36331]));

var G__36332 = (i__4737__auto___36331 + (1));
i__4737__auto___36331 = G__36332;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36259_SHARP_){
if(cljs.core.truth_((function (){var fexpr__36264 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36264.cljs$core$IFn$_invoke$arity$1 ? fexpr__36264.cljs$core$IFn$_invoke$arity$1(p1__36259_SHARP_) : fexpr__36264.call(null,p1__36259_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__36259_SHARP_);
} else {
return p1__36259_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36260_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__36260_SHARP_);
}),args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
}));

(posh.plugin_base.q_info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q_info.cljs$lang$applyTo = (function (seq36261){
var G__36262 = cljs.core.first(seq36261);
var seq36261__$1 = cljs.core.next(seq36261);
var G__36263 = cljs.core.first(seq36261__$1);
var seq36261__$2 = cljs.core.next(seq36261__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36262,G__36263,seq36261__$2);
}));

posh.plugin_base.q_tx = (function posh$plugin_base$q_tx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36337 = arguments.length;
var i__4737__auto___36338 = (0);
while(true){
if((i__4737__auto___36338 < len__4736__auto___36337)){
args__4742__auto__.push((arguments[i__4737__auto___36338]));

var G__36339 = (i__4737__auto___36338 + (1));
i__4737__auto___36338 = G__36339;
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
(posh.plugin_base.q_tx.cljs$lang$applyTo = (function (seq36266){
var G__36267 = cljs.core.first(seq36266);
var seq36266__$1 = cljs.core.next(seq36266);
var G__36268 = cljs.core.first(seq36266__$1);
var seq36266__$2 = cljs.core.next(seq36266__$1);
var G__36269 = cljs.core.first(seq36266__$2);
var seq36266__$3 = cljs.core.next(seq36266__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36267,G__36268,G__36269,seq36266__$3);
}));

posh.plugin_base.filter_tx = (function posh$plugin_base$filter_tx(dcfg,poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.plugin_base.get_db(dcfg,poshdb),tx_patterns);
});
posh.plugin_base.filter_pull = (function posh$plugin_base$filter_pull(dcfg,poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.plugin_base.get_db(dcfg,poshdb),pull_pattern,eid);
});
posh.plugin_base.filter_q = (function posh$plugin_base$filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36341 = arguments.length;
var i__4737__auto___36342 = (0);
while(true){
if((i__4737__auto___36342 < len__4736__auto___36341)){
args__4742__auto__.push((arguments[i__4737__auto___36342]));

var G__36343 = (i__4737__auto___36342 + (1));
i__4737__auto___36342 = G__36343;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36271_SHARP_){
if(cljs.core.truth_((function (){var fexpr__36276 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36276.cljs$core$IFn$_invoke$arity$1 ? fexpr__36276.cljs$core$IFn$_invoke$arity$1(p1__36271_SHARP_) : fexpr__36276.call(null,p1__36271_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__36271_SHARP_);
} else {
return p1__36271_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
}));

(posh.plugin_base.filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.filter_q.cljs$lang$applyTo = (function (seq36272){
var G__36273 = cljs.core.first(seq36272);
var seq36272__$1 = cljs.core.next(seq36272);
var G__36274 = cljs.core.first(seq36272__$1);
var seq36272__$2 = cljs.core.next(seq36272__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36273,G__36274,seq36272__$2);
}));

posh.plugin_base.transact_BANG_ = (function posh$plugin_base$transact_BANG_(dcfg,poshdb_or_conn,txs){
var G__36281 = (cljs.core.truth_((function (){var fexpr__36283 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36283.cljs$core$IFn$_invoke$arity$1 ? fexpr__36283.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__36283.call(null,poshdb_or_conn));
})())?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn));
var G__36282 = txs;
var fexpr__36280 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__36280.cljs$core$IFn$_invoke$arity$2 ? fexpr__36280.cljs$core$IFn$_invoke$arity$2(G__36281,G__36282) : fexpr__36280.call(null,G__36281,G__36282));
});

//# sourceMappingURL=posh.plugin_base.js.map
