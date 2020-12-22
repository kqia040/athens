goog.provide('athens.effects');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.effects.walk_string = (function athens$effects$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__60455_60570 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__60572__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__60452_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__60452_SHARP_,inner_title);
}));

return ["[[",inner_title,"]]"].join('');
};
var G__60572 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__60573__i = 0, G__60573__a = new Array(arguments.length -  0);
while (G__60573__i < G__60573__a.length) {G__60573__a[G__60573__i] = arguments[G__60573__i + 0]; ++G__60573__i;}
  title = new cljs.core.IndexedSeq(G__60573__a,0,null);
} 
return G__60572__delegate.call(this,title);};
G__60572.cljs$lang$maxFixedArity = 0;
G__60572.cljs$lang$applyTo = (function (arglist__60574){
var title = cljs.core.seq(arglist__60574);
return G__60572__delegate(title);
});
G__60572.cljs$core$IFn$_invoke$arity$variadic = G__60572__delegate;
return G__60572;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__60575__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__60453_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__60453_SHARP_,inner_title);
}));

return ["#",inner_title].join('');
};
var G__60575 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__60576__i = 0, G__60576__a = new Array(arguments.length -  0);
while (G__60576__i < G__60576__a.length) {G__60576__a[G__60576__i] = arguments[G__60576__i + 0]; ++G__60576__i;}
  title = new cljs.core.IndexedSeq(G__60576__a,0,null);
} 
return G__60575__delegate.call(this,title);};
G__60575.cljs$lang$maxFixedArity = 0;
G__60575.cljs$lang$applyTo = (function (arglist__60577){
var title = cljs.core.seq(arglist__60577);
return G__60575__delegate(title);
});
G__60575.cljs$core$IFn$_invoke$arity$variadic = G__60575__delegate;
return G__60575;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__60454_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__60454_SHARP_,uid);
}));
})], null);
var G__60456_60571 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__60455_60570,G__60456_60571) : instaparse.core.transform.call(null,G__60455_60570,G__60456_60571));

return cljs.core.deref(data);
});
/**
 * Filter: node/title doesn't exist yet in the db or in the titles being asserted (e.g. when renaming a page and changing it's references).
 *   Map: new node/title entity.
 */
athens.effects.new_titles_to_tx_data = (function athens$effects$new_titles_to_tx_data(new_titles,assert_titles){
var now = athens.util.now_ts();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),t,new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid(),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (((athens.db.search_exact_node_title(x) == null)) && ((!(cljs.core.contains_QMARK_(assert_titles,x)))));
}),new_titles));
});
/**
 * Filter: new-str doesn't include link, page exists, page has no children, and has no other [[linked refs]].
 *   Map: retractEntity
 */
athens.effects.old_titles_to_tx_data = (function athens$effects$old_titles_to_tx_data(old_titles,uid,new_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (title){
var temp__5735__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null)));
if(cljs.core.truth_(temp__5735__auto__)){
var eid = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),eid], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (title){
var node = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null));
if((!(clojure.string.includes_QMARK_(new_str,title)))){
var and__4115__auto__ = node;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.empty_QMARK_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(node))) && ((athens.db.count_linked_references_excl_uid(title,uid) === (0))));
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_titles));
});
/**
 * Filter: ((ref-uid)) points to an actual block (without a title), and block/ref relationship doesn't exist yet.
 *   Map: add block/ref relationship.
 */
athens.effects.new_refs_to_tx_data = (function athens$effects$new_refs_to_tx_data(new_block_refs,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var block = cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)));
var map__60457 = block;
var map__60457__$1 = (((((!((map__60457 == null))))?(((((map__60457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60457):map__60457);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var refs = cljs.core.set(athens.db.get_block_refs(e));
var and__4115__auto__ = block;
if(cljs.core.truth_(and__4115__auto__)){
return (((title == null)) && ((!(cljs.core.contains_QMARK_(refs,id)))));
} else {
return and__4115__auto__;
}
}),new_block_refs));
});
/**
 * Filter: new-str doesn't include block ref anymore, ((ref-uid)) points to an actual block, and block/ref relationship exists.
 *   Map: retract relationship.
 */
athens.effects.old_refs_to_tx_data = (function athens$effects$old_refs_to_tx_data(old_block_refs,e,new_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
if(clojure.string.includes_QMARK_(new_str,["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_uid),"))"].join(''))){
return null;
} else {
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid);
var refs = cljs.core.set(athens.db.get_block_refs(e));
return cljs.core.contains_QMARK_(refs,eid);
}
}),old_block_refs));
});
/**
 * When block/string is asserted, parse for links and block refs to add.
 *   When block/string is retracted, parse for links and block refs to remove.
 *   Retractions need to look at asserted block/string.
 * 
 *   TODO: when user edits title, parse for new pages.
 */
athens.effects.parse_for_links = (function athens$effects$parse_for_links(with_tx_data){
var assert_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60460_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__60460_SHARP_,(2));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60459_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__60459_SHARP_),new cljs.core.Keyword("node","title","node/title",628940777))) && (cljs.core.last(p1__60459_SHARP_) === true));
}),with_tx_data)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60463){
var vec__60464 = p__60463;
var assertion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60464,(0),null);
var retraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60464,(1),null);
if(((cljs.core.last(assertion) === true) && (cljs.core.last(retraction) === false))){
var eid = cljs.core.first(assertion);
var uid = athens.db.v_by_ea(eid,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var assert_data = athens.effects.walk_string(assert_string);
var retract_data = athens.effects.walk_string(retract_string);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),uid,assert_string);
var old_block_refs = athens.effects.old_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,old_titles,old_block_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === true) && ((retraction == null)))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var assert_data = athens.effects.walk_string(assert_string);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === false) && ((retraction == null)))){
var eid = cljs.core.first(retraction);
var uid = athens.db.v_by_ea(eid,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var assert_string = "";
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var retract_data = athens.effects.walk_string(retract_string);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),uid,assert_string);
var old_block_refs = athens.effects.old_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,old_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_block_refs], 0));
return tx_data;
} else {
return null;
}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__60467){
var vec__60468 = p__60467;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60468,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60468,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60462_SHARP_){
return cljs.core.not(cljs.core.last(p1__60462_SHARP_));
}),datoms);
}),cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60461_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__60461_SHARP_),new cljs.core.Keyword("block","string","block/string",-2066596447));
}),with_tx_data)))], 0));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (tx_data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX RAW INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(tx_data);

var with_tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.db.dsdb),tx_data));
var more_tx_data = athens.effects.parse_for_links(with_tx_data);
var final_tx_data = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data,more_tx_data));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX FINAL INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(final_tx_data);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,final_tx_data));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),(function (p__60471){
var vec__60472 = p__60471;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60472,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60472,(1),null);
return localStorage.setItem(key,value);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60475){
var map__60476 = p__60475;
var map__60476__$1 = (((((!((map__60476 == null))))?(((((map__60476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60476):map__60476);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_60520){
var state_val_60521 = (state_60520[(1)]);
if((state_val_60521 === (7))){
var inst_60487 = (state_60520[(7)]);
var inst_60487__$1 = (state_60520[(2)]);
var inst_60489 = (inst_60487__$1 == null);
var inst_60490 = cljs.core.not(inst_60489);
var state_60520__$1 = (function (){var statearr_60522 = state_60520;
(statearr_60522[(7)] = inst_60487__$1);

return statearr_60522;
})();
if(inst_60490){
var statearr_60523_60578 = state_60520__$1;
(statearr_60523_60578[(1)] = (8));

} else {
var statearr_60524_60579 = state_60520__$1;
(statearr_60524_60579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (1))){
var state_60520__$1 = state_60520;
var G__60525_60580 = method;
var G__60525_60581__$1 = (((G__60525_60580 instanceof cljs.core.Keyword))?G__60525_60580.fqn:null);
switch (G__60525_60581__$1) {
case "post":
var statearr_60526_60583 = state_60520__$1;
(statearr_60526_60583[(1)] = (3));


break;
case "get":
var statearr_60527_60584 = state_60520__$1;
(statearr_60527_60584[(1)] = (4));


break;
case "put":
var statearr_60528_60585 = state_60520__$1;
(statearr_60528_60585[(1)] = (5));


break;
case "delete":
var statearr_60529_60586 = state_60520__$1;
(statearr_60529_60586[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60525_60581__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (4))){
var state_60520__$1 = state_60520;
var statearr_60530_60587 = state_60520__$1;
(statearr_60530_60587[(2)] = cljs_http.client.get);

(statearr_60530_60587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (15))){
var inst_60487 = (state_60520[(7)]);
var state_60520__$1 = state_60520;
var statearr_60531_60588 = state_60520__$1;
(statearr_60531_60588[(2)] = inst_60487);

(statearr_60531_60588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (13))){
var inst_60500 = (state_60520[(2)]);
var state_60520__$1 = state_60520;
var statearr_60532_60589 = state_60520__$1;
(statearr_60532_60589[(2)] = inst_60500);

(statearr_60532_60589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (6))){
var state_60520__$1 = state_60520;
var statearr_60533_60590 = state_60520__$1;
(statearr_60533_60590[(2)] = cljs_http.client.delete$);

(statearr_60533_60590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (17))){
var inst_60510 = (state_60520[(8)]);
var inst_60512 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60510);
var inst_60513 = re_frame.core.dispatch(inst_60512);
var state_60520__$1 = state_60520;
var statearr_60534_60591 = state_60520__$1;
(statearr_60534_60591[(2)] = inst_60513);

(statearr_60534_60591[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (3))){
var state_60520__$1 = state_60520;
var statearr_60535_60592 = state_60520__$1;
(statearr_60535_60592[(2)] = cljs_http.client.post);

(statearr_60535_60592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (12))){
var state_60520__$1 = state_60520;
var statearr_60536_60593 = state_60520__$1;
(statearr_60536_60593[(2)] = false);

(statearr_60536_60593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (2))){
var inst_60484 = (state_60520[(2)]);
var inst_60485 = (inst_60484.cljs$core$IFn$_invoke$arity$2 ? inst_60484.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60484.call(null,url,opts));
var state_60520__$1 = state_60520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60520__$1,(7),inst_60485);
} else {
if((state_val_60521 === (19))){
var inst_60518 = (state_60520[(2)]);
var state_60520__$1 = state_60520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60520__$1,inst_60518);
} else {
if((state_val_60521 === (11))){
var state_60520__$1 = state_60520;
var statearr_60537_60594 = state_60520__$1;
(statearr_60537_60594[(2)] = true);

(statearr_60537_60594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (9))){
var state_60520__$1 = state_60520;
var statearr_60538_60595 = state_60520__$1;
(statearr_60538_60595[(2)] = false);

(statearr_60538_60595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (5))){
var state_60520__$1 = state_60520;
var statearr_60539_60596 = state_60520__$1;
(statearr_60539_60596[(2)] = cljs_http.client.put);

(statearr_60539_60596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (14))){
var inst_60487 = (state_60520[(7)]);
var inst_60505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60487);
var state_60520__$1 = state_60520;
var statearr_60540_60597 = state_60520__$1;
(statearr_60540_60597[(2)] = inst_60505);

(statearr_60540_60597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (16))){
var inst_60508 = (state_60520[(9)]);
var inst_60508__$1 = (state_60520[(2)]);
var inst_60509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60508__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60508__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60520__$1 = (function (){var statearr_60541 = state_60520;
(statearr_60541[(8)] = inst_60510);

(statearr_60541[(9)] = inst_60508__$1);

return statearr_60541;
})();
if(cljs.core.truth_(inst_60509)){
var statearr_60542_60598 = state_60520__$1;
(statearr_60542_60598[(1)] = (17));

} else {
var statearr_60543_60599 = state_60520__$1;
(statearr_60543_60599[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (10))){
var inst_60503 = (state_60520[(2)]);
var state_60520__$1 = state_60520;
if(cljs.core.truth_(inst_60503)){
var statearr_60544_60600 = state_60520__$1;
(statearr_60544_60600[(1)] = (14));

} else {
var statearr_60545_60601 = state_60520__$1;
(statearr_60545_60601[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (18))){
var inst_60508 = (state_60520[(9)]);
var inst_60515 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60508);
var inst_60516 = re_frame.core.dispatch(inst_60515);
var state_60520__$1 = state_60520;
var statearr_60546_60602 = state_60520__$1;
(statearr_60546_60602[(2)] = inst_60516);

(statearr_60546_60602[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (8))){
var inst_60487 = (state_60520[(7)]);
var inst_60492 = inst_60487.cljs$lang$protocol_mask$partition0$;
var inst_60493 = (inst_60492 & (64));
var inst_60494 = inst_60487.cljs$core$ISeq$;
var inst_60495 = (cljs.core.PROTOCOL_SENTINEL === inst_60494);
var inst_60496 = ((inst_60493) || (inst_60495));
var state_60520__$1 = state_60520;
if(cljs.core.truth_(inst_60496)){
var statearr_60547_60603 = state_60520__$1;
(statearr_60547_60603[(1)] = (11));

} else {
var statearr_60548_60604 = state_60520__$1;
(statearr_60548_60604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
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
return (function() {
var athens$effects$state_machine__42116__auto__ = null;
var athens$effects$state_machine__42116__auto____0 = (function (){
var statearr_60549 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60549[(0)] = athens$effects$state_machine__42116__auto__);

(statearr_60549[(1)] = (1));

return statearr_60549;
});
var athens$effects$state_machine__42116__auto____1 = (function (state_60520){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_60520);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e60550){var ex__42119__auto__ = e60550;
var statearr_60551_60605 = state_60520;
(statearr_60551_60605[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_60520[(4)]))){
var statearr_60552_60606 = state_60520;
(statearr_60552_60606[(1)] = cljs.core.first((state_60520[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60607 = state_60520;
state_60520 = G__60607;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
athens$effects$state_machine__42116__auto__ = function(state_60520){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42116__auto____0.call(this);
case 1:
return athens$effects$state_machine__42116__auto____1.call(this,state_60520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42116__auto____0;
athens$effects$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42116__auto____1;
return athens$effects$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_60553 = f__42583__auto__();
(statearr_60553[(6)] = c__42582__auto__);

return statearr_60553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60554){
var map__60555 = p__60554;
var map__60555__$1 = (((((!((map__60555 == null))))?(((((map__60555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60555):map__60555);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60557 = action;
var G__60557__$1 = (((G__60557 instanceof cljs.core.Keyword))?G__60557.fqn:null);
switch (G__60557__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60557__$1)].join('')));

}
});
})());
re_frame.core.reg_fx(new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),(function (p__60558){
var vec__60559 = p__60558;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60559,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60559,(1),null);
if((uid == null)){
var temp__5735__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5735__auto__)){
var active_el = temp__5735__auto__;
return active_el.blur();
} else {
return null;
}
} else {
return setTimeout((function (){
var html_id = ["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('');
var el = document.querySelector(html_id);
if(cljs.core.truth_(el)){
el.focus();

if(cljs.core.truth_(index)){
return goog.dom.selection.setCursorPosition(el,index);
} else {
return null;
}
} else {
return null;
}
}),(100));
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),(function (p__60562){
var vec__60563 = p__60562;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(2),null);
return setTimeout((function (){
var temp__5735__auto__ = document.querySelector(["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''));
if(cljs.core.truth_(temp__5735__auto__)){
var target = temp__5735__auto__;
target.focus();

(target.selectionStart = start);

return (target.selectionEnd = end);
} else {
return null;
}
}),(100));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),(function (p__60566){
var vec__60567 = p__60566;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60567,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60567,(1),null);
return stylefy.core.tag(tag,properties);
}));

//# sourceMappingURL=athens.effects.js.map
