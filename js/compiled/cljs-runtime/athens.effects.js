goog.provide('athens.effects');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.effects.walk_string = (function athens$effects$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__56448_56671 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__56676__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__56445_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56445_SHARP_,inner_title);
}));

return ["[[",inner_title,"]]"].join('');
};
var G__56676 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__56678__i = 0, G__56678__a = new Array(arguments.length -  0);
while (G__56678__i < G__56678__a.length) {G__56678__a[G__56678__i] = arguments[G__56678__i + 0]; ++G__56678__i;}
  title = new cljs.core.IndexedSeq(G__56678__a,0,null);
} 
return G__56676__delegate.call(this,title);};
G__56676.cljs$lang$maxFixedArity = 0;
G__56676.cljs$lang$applyTo = (function (arglist__56679){
var title = cljs.core.seq(arglist__56679);
return G__56676__delegate(title);
});
G__56676.cljs$core$IFn$_invoke$arity$variadic = G__56676__delegate;
return G__56676;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__56680__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__56446_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56446_SHARP_,inner_title);
}));

return ["#",inner_title].join('');
};
var G__56680 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__56681__i = 0, G__56681__a = new Array(arguments.length -  0);
while (G__56681__i < G__56681__a.length) {G__56681__a[G__56681__i] = arguments[G__56681__i + 0]; ++G__56681__i;}
  title = new cljs.core.IndexedSeq(G__56681__a,0,null);
} 
return G__56680__delegate.call(this,title);};
G__56680.cljs$lang$maxFixedArity = 0;
G__56680.cljs$lang$applyTo = (function (arglist__56682){
var title = cljs.core.seq(arglist__56682);
return G__56680__delegate(title);
});
G__56680.cljs$core$IFn$_invoke$arity$variadic = G__56680__delegate;
return G__56680;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__56447_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56447_SHARP_,uid);
}));
})], null);
var G__56449_56672 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__56448_56671,G__56449_56672) : instaparse.core.transform.call(null,G__56448_56671,G__56449_56672));

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
var map__56469 = block;
var map__56469__$1 = (((((!((map__56469 == null))))?(((((map__56469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56469):map__56469);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56469__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56469__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
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
var assert_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56474_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__56474_SHARP_,(2));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56473_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__56473_SHARP_),new cljs.core.Keyword("node","title","node/title",628940777))) && (cljs.core.last(p1__56473_SHARP_) === true));
}),with_tx_data)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__56482){
var vec__56483 = p__56482;
var assertion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56483,(0),null);
var retraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56483,(1),null);
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__56496){
var vec__56497 = p__56496;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56497,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56497,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56476_SHARP_){
return cljs.core.not(cljs.core.last(p1__56476_SHARP_));
}),datoms);
}),cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56475_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__56475_SHARP_),new cljs.core.Keyword("block","string","block/string",-2066596447));
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
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),(function (p__56506){
var vec__56507 = p__56506;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56507,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56507,(1),null);
return localStorage.setItem(key,value);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__56515){
var map__56516 = p__56515;
var map__56516__$1 = (((((!((map__56516 == null))))?(((((map__56516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56516):map__56516);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__50733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_56574){
var state_val_56575 = (state_56574[(1)]);
if((state_val_56575 === (7))){
var inst_56536 = (state_56574[(7)]);
var inst_56536__$1 = (state_56574[(2)]);
var inst_56539 = (inst_56536__$1 == null);
var inst_56540 = cljs.core.not(inst_56539);
var state_56574__$1 = (function (){var statearr_56588 = state_56574;
(statearr_56588[(7)] = inst_56536__$1);

return statearr_56588;
})();
if(inst_56540){
var statearr_56589_56705 = state_56574__$1;
(statearr_56589_56705[(1)] = (8));

} else {
var statearr_56590_56706 = state_56574__$1;
(statearr_56590_56706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (1))){
var state_56574__$1 = state_56574;
var G__56595_56707 = method;
var G__56595_56708__$1 = (((G__56595_56707 instanceof cljs.core.Keyword))?G__56595_56707.fqn:null);
switch (G__56595_56708__$1) {
case "post":
var statearr_56596_56711 = state_56574__$1;
(statearr_56596_56711[(1)] = (3));


break;
case "get":
var statearr_56597_56715 = state_56574__$1;
(statearr_56597_56715[(1)] = (4));


break;
case "put":
var statearr_56598_56716 = state_56574__$1;
(statearr_56598_56716[(1)] = (5));


break;
case "delete":
var statearr_56599_56717 = state_56574__$1;
(statearr_56599_56717[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56595_56708__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (4))){
var state_56574__$1 = state_56574;
var statearr_56600_56718 = state_56574__$1;
(statearr_56600_56718[(2)] = cljs_http.client.get);

(statearr_56600_56718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (15))){
var inst_56536 = (state_56574[(7)]);
var state_56574__$1 = state_56574;
var statearr_56601_56719 = state_56574__$1;
(statearr_56601_56719[(2)] = inst_56536);

(statearr_56601_56719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (13))){
var inst_56552 = (state_56574[(2)]);
var state_56574__$1 = state_56574;
var statearr_56602_56720 = state_56574__$1;
(statearr_56602_56720[(2)] = inst_56552);

(statearr_56602_56720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (6))){
var state_56574__$1 = state_56574;
var statearr_56603_56721 = state_56574__$1;
(statearr_56603_56721[(2)] = cljs_http.client.delete$);

(statearr_56603_56721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (17))){
var inst_56562 = (state_56574[(8)]);
var inst_56565 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_56562);
var inst_56566 = re_frame.core.dispatch(inst_56565);
var state_56574__$1 = state_56574;
var statearr_56608_56726 = state_56574__$1;
(statearr_56608_56726[(2)] = inst_56566);

(statearr_56608_56726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (3))){
var state_56574__$1 = state_56574;
var statearr_56609_56727 = state_56574__$1;
(statearr_56609_56727[(2)] = cljs_http.client.post);

(statearr_56609_56727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (12))){
var state_56574__$1 = state_56574;
var statearr_56610_56728 = state_56574__$1;
(statearr_56610_56728[(2)] = false);

(statearr_56610_56728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (2))){
var inst_56532 = (state_56574[(2)]);
var inst_56534 = (inst_56532.cljs$core$IFn$_invoke$arity$2 ? inst_56532.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_56532.call(null,url,opts));
var state_56574__$1 = state_56574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56574__$1,(7),inst_56534);
} else {
if((state_val_56575 === (19))){
var inst_56571 = (state_56574[(2)]);
var state_56574__$1 = state_56574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56574__$1,inst_56571);
} else {
if((state_val_56575 === (11))){
var state_56574__$1 = state_56574;
var statearr_56611_56734 = state_56574__$1;
(statearr_56611_56734[(2)] = true);

(statearr_56611_56734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (9))){
var state_56574__$1 = state_56574;
var statearr_56613_56738 = state_56574__$1;
(statearr_56613_56738[(2)] = false);

(statearr_56613_56738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (5))){
var state_56574__$1 = state_56574;
var statearr_56617_56739 = state_56574__$1;
(statearr_56617_56739[(2)] = cljs_http.client.put);

(statearr_56617_56739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (14))){
var inst_56536 = (state_56574[(7)]);
var inst_56557 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56536);
var state_56574__$1 = state_56574;
var statearr_56618_56740 = state_56574__$1;
(statearr_56618_56740[(2)] = inst_56557);

(statearr_56618_56740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (16))){
var inst_56560 = (state_56574[(9)]);
var inst_56560__$1 = (state_56574[(2)]);
var inst_56561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56560__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_56562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56560__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_56574__$1 = (function (){var statearr_56619 = state_56574;
(statearr_56619[(9)] = inst_56560__$1);

(statearr_56619[(8)] = inst_56562);

return statearr_56619;
})();
if(cljs.core.truth_(inst_56561)){
var statearr_56620_56742 = state_56574__$1;
(statearr_56620_56742[(1)] = (17));

} else {
var statearr_56621_56743 = state_56574__$1;
(statearr_56621_56743[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (10))){
var inst_56555 = (state_56574[(2)]);
var state_56574__$1 = state_56574;
if(cljs.core.truth_(inst_56555)){
var statearr_56622_56744 = state_56574__$1;
(statearr_56622_56744[(1)] = (14));

} else {
var statearr_56623_56746 = state_56574__$1;
(statearr_56623_56746[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (18))){
var inst_56560 = (state_56574[(9)]);
var inst_56568 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_56560);
var inst_56569 = re_frame.core.dispatch(inst_56568);
var state_56574__$1 = state_56574;
var statearr_56625_56748 = state_56574__$1;
(statearr_56625_56748[(2)] = inst_56569);

(statearr_56625_56748[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56575 === (8))){
var inst_56536 = (state_56574[(7)]);
var inst_56543 = inst_56536.cljs$lang$protocol_mask$partition0$;
var inst_56545 = (inst_56543 & (64));
var inst_56546 = inst_56536.cljs$core$ISeq$;
var inst_56547 = (cljs.core.PROTOCOL_SENTINEL === inst_56546);
var inst_56548 = ((inst_56545) || (inst_56547));
var state_56574__$1 = state_56574;
if(cljs.core.truth_(inst_56548)){
var statearr_56629_56749 = state_56574__$1;
(statearr_56629_56749[(1)] = (11));

} else {
var statearr_56630_56750 = state_56574__$1;
(statearr_56630_56750[(1)] = (12));

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
var athens$effects$state_machine__49502__auto__ = null;
var athens$effects$state_machine__49502__auto____0 = (function (){
var statearr_56631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56631[(0)] = athens$effects$state_machine__49502__auto__);

(statearr_56631[(1)] = (1));

return statearr_56631;
});
var athens$effects$state_machine__49502__auto____1 = (function (state_56574){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_56574);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e56633){var ex__49505__auto__ = e56633;
var statearr_56634_56751 = state_56574;
(statearr_56634_56751[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_56574[(4)]))){
var statearr_56635_56752 = state_56574;
(statearr_56635_56752[(1)] = cljs.core.first((state_56574[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56753 = state_56574;
state_56574 = G__56753;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
athens$effects$state_machine__49502__auto__ = function(state_56574){
switch(arguments.length){
case 0:
return athens$effects$state_machine__49502__auto____0.call(this);
case 1:
return athens$effects$state_machine__49502__auto____1.call(this,state_56574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__49502__auto____0;
athens$effects$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__49502__auto____1;
return athens$effects$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_56638 = f__50734__auto__();
(statearr_56638[(6)] = c__50733__auto__);

return statearr_56638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

return c__50733__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__56643){
var map__56644 = p__56643;
var map__56644__$1 = (((((!((map__56644 == null))))?(((((map__56644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56644):map__56644);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__56646 = action;
var G__56646__$1 = (((G__56646 instanceof cljs.core.Keyword))?G__56646.fqn:null);
switch (G__56646__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56646__$1)].join('')));

}
});
})());
re_frame.core.reg_fx(new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),(function (p__56650){
var vec__56651 = p__56650;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56651,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56651,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),(function (p__56658){
var vec__56659 = p__56658;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56659,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56659,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56659,(2),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),(function (p__56666){
var vec__56667 = p__56666;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56667,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56667,(1),null);
return stylefy.core.tag(tag,properties);
}));

//# sourceMappingURL=athens.effects.js.map
