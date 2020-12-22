goog.provide('posh.core');
posh.core.empty_tree = (function posh$core$empty_tree(p__25992,retrieve){
var map__25993 = p__25992;
var map__25993__$1 = (((((!((map__25993 == null))))?(((((map__25993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25993):map__25993);
var dcfg = map__25993__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__25996 = arguments.length;
switch (G__25996) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
}));

(posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__25997,db_id,conn,schema,base_filters){
var map__25998 = p__25997;
var map__25998__$1 = (((((!((map__25998 == null))))?(((((map__25998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25998):map__25998);
var posh_tree = map__25998__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.add_db.cljs$lang$maxFixedArity = 5);

posh.core.set_db = (function posh$core$set_db(var_args){
var G__26006 = arguments.length;
switch (G__26006) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
}));

(posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__26010,db_id,db,filter_pred){
var map__26011 = p__26010;
var map__26011__$1 = (((((!((map__26011 == null))))?(((((map__26011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26011):map__26011);
var posh_tree = map__26011__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26011__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26011__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26011__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.set_db.cljs$lang$maxFixedArity = 4);

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__26016,poshdb,tx_patterns){
var map__26017 = p__26016;
var map__26017__$1 = (((((!((map__26017 == null))))?(((((map__26017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26017):map__26017);
var posh_tree = map__26017__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26017__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26017__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__26024,poshdb,pull_pattern,eid){
var map__26025 = p__26024;
var map__26025__$1 = (((((!((map__26025 == null))))?(((((map__26025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26025):map__26025);
var posh_tree = map__26025__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26208 = arguments.length;
var i__4737__auto___26209 = (0);
while(true){
if((i__4737__auto___26209 < len__4736__auto___26208)){
args__4742__auto__.push((arguments[i__4737__auto___26209]));

var G__26214 = (i__4737__auto___26209 + (1));
i__4737__auto___26209 = G__26214;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__26038,query,args){
var map__26039 = p__26038;
var map__26039__$1 = (((((!((map__26039 == null))))?(((((map__26039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26039):map__26039);
var posh_tree = map__26039__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__26042 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__26042__$1 = (((((!((map__26042 == null))))?(((((map__26042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26042):map__26042);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26042__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26042__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_filter_q.cljs$lang$applyTo = (function (seq26034){
var G__26035 = cljs.core.first(seq26034);
var seq26034__$1 = cljs.core.next(seq26034);
var G__26036 = cljs.core.first(seq26034__$1);
var seq26034__$2 = cljs.core.next(seq26034__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26035,G__26036,seq26034__$2);
}));

posh.core.add_pull = (function posh$core$add_pull(p__26048,poshdb,pull_pattern,eid){
var map__26049 = p__26048;
var map__26049__$1 = (((((!((map__26049 == null))))?(((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26049):map__26049);
var posh_tree = map__26049__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__26051,poshdb,pull_pattern,eids){
var map__26052 = p__26051;
var map__26052__$1 = (((((!((map__26052 == null))))?(((((map__26052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26052):map__26052);
var posh_tree = map__26052__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26247 = arguments.length;
var i__4737__auto___26250 = (0);
while(true){
if((i__4737__auto___26250 < len__4736__auto___26247)){
args__4742__auto__.push((arguments[i__4737__auto___26250]));

var G__26255 = (i__4737__auto___26250 + (1));
i__4737__auto___26250 = G__26255;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__26071,query,args){
var map__26072 = p__26071;
var map__26072__$1 = (((((!((map__26072 == null))))?(((((map__26072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26072):map__26072);
var posh_tree = map__26072__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4126__auto__ = cached;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var map__26081 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__26081__$1 = (((((!((map__26081 == null))))?(((((map__26081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26081):map__26081);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26081__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26081__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_q.cljs$lang$applyTo = (function (seq26062){
var G__26063 = cljs.core.first(seq26062);
var seq26062__$1 = cljs.core.next(seq26062);
var G__26064 = cljs.core.first(seq26062__$1);
var seq26062__$2 = cljs.core.next(seq26062__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26063,G__26064,seq26062__$2);
}));

posh.core.remove_item = (function posh$core$remove_item(p__26083,storage_key){
var map__26084 = p__26083;
var map__26084__$1 = (((((!((map__26084 == null))))?(((((map__26084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26084):map__26084);
var posh_tree = map__26084__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26084__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26084__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item(graph,storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__26092,db_id,tx,new_cache,storage_key){
var map__26093 = p__26092;
var map__26093__$1 = (((((!((map__26093 == null))))?(((((map__26093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26093):map__26093);
var posh_tree = map__26093__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26093__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26093__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?(function (){var fexpr__26101 = new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis);
return (fexpr__26101.cljs$core$IFn$_invoke$arity$2 ? fexpr__26101.cljs$core$IFn$_invoke$arity$2(posh_tree,storage_key) : fexpr__26101.call(null,posh_tree,storage_key));
})():null);
var analysis = (function (){var or__4126__auto__ = reloaded;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return current_analysis;
}
})();
var map__26099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__26099__$1 = (((((!((map__26099 == null))))?(((((map__26099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26099):map__26099);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26099__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5735__auto__ = (((!(cljs.core.empty_QMARK_(outputs))))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4115__auto__)){
return posh.lib.datom_matcher.matching_datoms(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(temp__5735__auto__)){
var pass_tx = temp__5735__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
}),new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__26107,poshdb,tx){
var map__26108 = p__26107;
var map__26108__$1 = (((((!((map__26108 == null))))?(((((map__26108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26108):map__26108);
var posh_tree = map__26108__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26108__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26108__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__26121,conns_results){
var map__26122 = p__26121;
var map__26122__$1 = (((((!((map__26122 == null))))?(((((map__26122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26122):map__26122);
var posh_tree = map__26122__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function posh$core$after_transact_$_iter__26124(s__26125){
return (new cljs.core.LazySeq(null,(function (){
var s__26125__$1 = s__26125;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26125__$1);
if(temp__5735__auto__){
var s__26125__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26125__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26125__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26127 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26126 = (0);
while(true){
if((i__26126 < size__4528__auto__)){
var vec__26129 = cljs.core._nth(c__4527__auto__,i__26126);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(1),null);
cljs.core.chunk_append(b__26127,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])));

var G__26319 = (i__26126 + (1));
i__26126 = G__26319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26127),posh$core$after_transact_$_iter__26124(cljs.core.chunk_rest(s__26125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26127),null);
}
} else {
var vec__26133 = cljs.core.first(s__26125__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26133,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26133,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])),posh$core$after_transact_$_iter__26124(cljs.core.rest(s__26125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changed,p__26138){
var vec__26139 = p__26138;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26139,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26139,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changed,posh.core.cache_changes(new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,really_changed], 0)),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__26144){
var map__26145 = p__26144;
var map__26145__$1 = (((((!((map__26145 == null))))?(((((map__26145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26145):map__26145);
var posh_tree = map__26145__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv((function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,(function (){var fexpr__26147 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26147.cljs$core$IFn$_invoke$arity$2 ? fexpr__26147.cljs$core$IFn$_invoke$arity$2(conn,tx) : fexpr__26147.call(null,conn,tx));
})());
}),cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=posh.core.js.map
