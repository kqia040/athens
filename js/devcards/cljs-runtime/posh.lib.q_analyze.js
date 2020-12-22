goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__24977 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24977) : stop_at_QMARK_.call(null,G__24977));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__24980 = stop_at_QMARK_;
var G__24981 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__24980,G__24981) : posh.lib.q_analyze.take_until.call(null,G__24980,G__24981));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__24991 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24991) : rest_at_QMARK_.call(null,G__24991));
}
})())){
return ls;
} else {
var G__25800 = rest_at_QMARK_;
var G__25801 = cljs.core.rest(ls);
rest_at_QMARK_ = G__25800;
ls = G__25801;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__24996 = split_at_QMARK_;
var G__24997 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__24996,G__24997) : posh.lib.q_analyze.split_list_at.call(null,G__24996,G__24997));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__25001 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25001) : posh.lib.q_analyze.get_all_vars.call(null,G__25001));
})(),(function (){var G__25002 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25002) : posh.lib.q_analyze.get_all_vars.call(null,G__25002));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__25003 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25003) : posh.lib.q_analyze.get_all_vars.call(null,G__25003));
})(),cljs.core.first(query));
} else {
var G__25004 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25004) : posh.lib.q_analyze.get_all_vars.call(null,G__25004));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__25015 = cljs.core.rest(eav);
var G__25016 = (n - (1));
var G__25017 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__25018 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__25015,G__25016,G__25017,G__25018) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__25015,G__25016,G__25017,G__25018));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__25022 = cljs.core.rest(eav);
var G__25023 = (n - (1));
var G__25024 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__25025 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__25022,G__25023,G__25024,G__25025) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__25022,G__25023,G__25024,G__25025));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__25036 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__25036) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__25036));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__25043 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__25043) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__25043));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__25047 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25047) : posh.lib.q_analyze.get_eavs.call(null,G__25047));
})(),(function (){var G__25048 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25048) : posh.lib.q_analyze.get_eavs.call(null,G__25048));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__25049 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25049) : posh.lib.q_analyze.get_eavs.call(null,G__25049));
})(),(function (){var G__25051 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25051) : posh.lib.q_analyze.get_eavs.call(null,G__25051));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__25052 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25052) : posh.lib.q_analyze.get_eavs.call(null,G__25052));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_25056 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_25056)) && ((cljs.core.count(ocr_25056) === 2)))){
try{var ocr_25056_0__25086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25056,(0));
if(((cljs.core.vector_QMARK_(ocr_25056_0__25086)) && ((cljs.core.count(ocr_25056_0__25086) === 5)))){
try{var ocr_25056_0__25086_0__25088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25056_0__25086,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25056_0__25086_0__25088,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25056_0__25086,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25056_0__25086,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25056_0__25086,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25056,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__25108 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25108) : posh.lib.q_analyze.get_eavs.call(null,G__25108));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e25105){if((e25105 instanceof Error)){
var e__23586__auto__ = e25105;
if((e__23586__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto__;
}
} else {
throw e25105;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25104){if((e25104 instanceof Error)){
var e__23586__auto__ = e25104;
if((e__23586__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto__;
}
} else {
throw e25104;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25099){if((e25099 instanceof Error)){
var e__23586__auto__ = e25099;
if((e__23586__auto__ === cljs.core.match.backtrack)){
var G__25101 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25101) : posh.lib.q_analyze.get_eavs.call(null,G__25101));
} else {
throw e__23586__auto__;
}
} else {
throw e25099;

}
}} else {
var G__25109 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25109) : posh.lib.q_analyze.get_eavs.call(null,G__25109));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__25110){
var vec__25111 = p__25110;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25111,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25115_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__25115_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__25115_SHARP_);
} else {
return p1__25115_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25116 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25116) : posh.lib.q_analyze.count_qvars.call(null,G__25116));
})(),(function (){var G__25117 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25117) : posh.lib.q_analyze.count_qvars.call(null,G__25117));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__25118 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25118) : posh.lib.q_analyze.count_qvars.call(null,G__25118));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__25119(s__25120){
return (new cljs.core.LazySeq(null,(function (){
var s__25120__$1 = s__25120;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25120__$1);
if(temp__5735__auto__){
var s__25120__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25120__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25120__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25122 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25121 = (0);
while(true){
if((i__25121 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__25121);
cljs.core.chunk_append(b__25122,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__25860 = (i__25121 + (1));
i__25121 = G__25860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25122),posh$lib$q_analyze$fill_qvar_set_$_iter__25119(cljs.core.chunk_rest(s__25120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25122),null);
}
} else {
var r = cljs.core.first(s__25120__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__25119(cljs.core.rest(s__25120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__25123 = cljs.core.first(seq1);
var G__25124 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25123,G__25124) : f.call(null,G__25123,G__25124));
})(),(function (){var G__25125 = f;
var G__25126 = cljs.core.rest(seq1);
var G__25127 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__25125,G__25126,G__25127) : posh.lib.q_analyze.seq_merge_with.call(null,G__25125,G__25126,G__25127));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__25139){
var vec__25140 = p__25139;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(2),null);
var eav = vec__25140;
var vec__25143 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150(s__25151){
return (new cljs.core.LazySeq(null,(function (){
var s__25151__$1 = s__25151;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25151__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__25151__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150_$_iter__25152(s__25153){
return (new cljs.core.LazySeq(null,((function (s__25151__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (){
var s__25153__$1 = s__25153;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__25153__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__25153__$1,s__25151__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150_$_iter__25152_$_iter__25154(s__25155){
return (new cljs.core.LazySeq(null,((function (s__25153__$1,s__25151__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (){
var s__25155__$1 = s__25155;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__25155__$1);
if(temp__5735__auto____$2){
var s__25155__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__25155__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25155__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25157 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25156 = (0);
while(true){
if((i__25156 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__25156);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25156,s__25155__$1,s__25153__$1,s__25151__$1,vv,c__4527__auto__,size__4528__auto__,b__25157,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (p1__25132_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__25132_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__25156,s__25155__$1,s__25153__$1,s__25151__$1,vv,c__4527__auto__,size__4528__auto__,b__25157,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25156,s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__25157,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (p__25164){
var vec__25165 = p__25164;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25165,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25165,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__25156,s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__25157,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25156,s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__25157,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (p1__25133_SHARP_){
if(cljs.core.truth_(p1__25133_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__25156,s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__25157,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__25157,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__25925 = (i__25156 + (1));
i__25156 = G__25925;
continue;
} else {
var G__25926 = (i__25156 + (1));
i__25156 = G__25926;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25157),posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150_$_iter__25152_$_iter__25154(cljs.core.chunk_rest(s__25155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25157),null);
}
} else {
var vv = cljs.core.first(s__25155__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25155__$1,s__25153__$1,s__25151__$1,vv,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (p1__25132_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__25132_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__25155__$1,s__25153__$1,s__25151__$1,vv,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,vv,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (p__25169){
var vec__25170 = p__25169;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25170,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25170,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,vv,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,exposed_qvars,vv,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav){
return (function (p1__25133_SHARP_){
if(cljs.core.truth_(p1__25133_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__25155__$1,s__25153__$1,s__25151__$1,wildcard_count,exposed_qvars,vv,s__25155__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150_$_iter__25152_$_iter__25154(cljs.core.rest(s__25155__$2)));
} else {
var G__25952 = cljs.core.rest(s__25155__$2);
s__25155__$1 = G__25952;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25153__$1,s__25151__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,null,null));
});})(s__25153__$1,s__25151__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150_$_iter__25152(cljs.core.rest(s__25153__$1)));
} else {
var G__25955 = cljs.core.rest(s__25153__$1);
s__25153__$1 = G__25955;
continue;
}
} else {
return null;
}
break;
}
});})(s__25151__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
,null,null));
});})(s__25151__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25143,qe,qa,qv,vec__25140,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__25150(cljs.core.rest(s__25151__$1)));
} else {
var G__25960 = cljs.core.rest(s__25151__$1);
s__25151__$1 = G__25960;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_25196 = cljs.core.vec(eav);
var ocr_25197 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_25196)) && ((cljs.core.count(ocr_25196) === 3)))){
try{var ocr_25196_0__25240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_0__25240,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25196_2__25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_2__25242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25419){if((e25419 instanceof Error)){
var e__23586__auto__ = e25419;
if((e__23586__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25197)) && ((cljs.core.count(ocr_25197) === 3)))){
try{var ocr_25197_2__25257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25257 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25421){if((e25421 instanceof Error)){
var e__23586__auto____$1 = e25421;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25257 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25422){if((e25422 instanceof Error)){
var e__23586__auto____$2 = e25422;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$2;
}
} else {
throw e25422;

}
}} else {
throw e__23586__auto____$1;
}
} else {
throw e25421;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25420){if((e25420 instanceof Error)){
var e__23586__auto____$1 = e25420;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25420;

}
}} else {
throw e__23586__auto__;
}
} else {
throw e25419;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25411){if((e25411 instanceof Error)){
var e__23586__auto__ = e25411;
if((e__23586__auto__ === cljs.core.match.backtrack)){
try{var ocr_25196_2__25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_2__25242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_25197)) && ((cljs.core.count(ocr_25197) === 3)))){
try{var ocr_25197_1__25263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25263 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25416){if((e25416 instanceof Error)){
var e__23586__auto____$1 = e25416;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25197_1__25263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25263 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25417){if((e25417 instanceof Error)){
var e__23586__auto____$2 = e25417;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$2;
}
} else {
throw e25417;

}
}} else {
throw e__23586__auto____$1;
}
} else {
throw e25416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25413){if((e25413 instanceof Error)){
var e__23586__auto____$1 = e25413;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25413;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25412){if((e25412 instanceof Error)){
var e__23586__auto____$1 = e25412;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25412;

}
}} else {
throw e__23586__auto__;
}
} else {
throw e25411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25303){if((e25303 instanceof Error)){
var e__23586__auto__ = e25303;
if((e__23586__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25197)) && ((cljs.core.count(ocr_25197) === 3)))){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25196_2__25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_2__25242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25409){if((e25409 instanceof Error)){
var e__23586__auto____$1 = e25409;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25408){if((e25408 instanceof Error)){
var e__23586__auto____$1 = e25408;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25408;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25305){if((e25305 instanceof Error)){
var e__23586__auto____$1 = e25305;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25196_2__25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_2__25242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25397){if((e25397 instanceof Error)){
var e__23586__auto____$2 = e25397;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25398){if((e25398 instanceof Error)){
var e__23586__auto____$3 = e25398;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25403){if((e25403 instanceof Error)){
var e__23586__auto____$4 = e25403;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25403;

}
}} else {
throw e__23586__auto____$3;
}
} else {
throw e25398;

}
}} else {
throw e__23586__auto____$2;
}
} else {
throw e25397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25392){if((e25392 instanceof Error)){
var e__23586__auto____$2 = e25392;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$2;
}
} else {
throw e25392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25306){if((e25306 instanceof Error)){
var e__23586__auto____$2 = e25306;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
try{var ocr_25196_2__25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_2__25242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25391){if((e25391 instanceof Error)){
var e__23586__auto____$3 = e25391;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$3;
}
} else {
throw e25391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25388){if((e25388 instanceof Error)){
var e__23586__auto____$3 = e25388;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
try{var ocr_25196_2__25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_2__25242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25390){if((e25390 instanceof Error)){
var e__23586__auto____$4 = e25390;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25389){if((e25389 instanceof Error)){
var e__23586__auto____$4 = e25389;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25389;

}
}} else {
throw e__23586__auto____$3;
}
} else {
throw e25388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25307){if((e25307 instanceof Error)){
var e__23586__auto____$3 = e25307;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === true)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25386){if((e25386 instanceof Error)){
var e__23586__auto____$4 = e25386;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25384){if((e25384 instanceof Error)){
var e__23586__auto____$4 = e25384;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25308){if((e25308 instanceof Error)){
var e__23586__auto____$4 = e25308;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === false)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25383){if((e25383 instanceof Error)){
var e__23586__auto____$5 = e25383;
if((e__23586__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$5;
}
} else {
throw e25383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25382){if((e25382 instanceof Error)){
var e__23586__auto____$5 = e25382;
if((e__23586__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$5;
}
} else {
throw e25382;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25309){if((e25309 instanceof Error)){
var e__23586__auto____$5 = e25309;
if((e__23586__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === true)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25378){if((e25378 instanceof Error)){
var e__23586__auto____$6 = e25378;
if((e__23586__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$6;
}
} else {
throw e25378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25376){if((e25376 instanceof Error)){
var e__23586__auto____$6 = e25376;
if((e__23586__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$6;
}
} else {
throw e25376;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25310){if((e25310 instanceof Error)){
var e__23586__auto____$6 = e25310;
if((e__23586__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === false)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25196_1__25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_1__25241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25371){if((e25371 instanceof Error)){
var e__23586__auto____$7 = e25371;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$7;
}
} else {
throw e25371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25368){if((e25368 instanceof Error)){
var e__23586__auto____$7 = e25368;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$7;
}
} else {
throw e25368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25311){if((e25311 instanceof Error)){
var e__23586__auto____$7 = e25311;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === true)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
try{var ocr_25196_0__25240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_0__25240,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25367){if((e25367 instanceof Error)){
var e__23586__auto____$8 = e25367;
if((e__23586__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$8;
}
} else {
throw e25367;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25366){if((e25366 instanceof Error)){
var e__23586__auto____$8 = e25366;
if((e__23586__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$8;
}
} else {
throw e25366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25312){if((e25312 instanceof Error)){
var e__23586__auto____$8 = e25312;
if((e__23586__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === false)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
try{var ocr_25196_0__25240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_0__25240,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25362){if((e25362 instanceof Error)){
var e__23586__auto____$9 = e25362;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$9;
}
} else {
throw e25362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25361){if((e25361 instanceof Error)){
var e__23586__auto____$9 = e25361;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$9;
}
} else {
throw e25361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25313){if((e25313 instanceof Error)){
var e__23586__auto____$9 = e25313;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === true)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
try{var ocr_25196_0__25240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_0__25240,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25360){if((e25360 instanceof Error)){
var e__23586__auto____$10 = e25360;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25359){if((e25359 instanceof Error)){
var e__23586__auto____$10 = e25359;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25359;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25314){if((e25314 instanceof Error)){
var e__23586__auto____$10 = e25314;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === false)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
try{var ocr_25196_0__25240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25196_0__25240,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25358){if((e25358 instanceof Error)){
var e__23586__auto____$11 = e25358;
if((e__23586__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$11;
}
} else {
throw e25358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25352){if((e25352 instanceof Error)){
var e__23586__auto____$11 = e25352;
if((e__23586__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$11;
}
} else {
throw e25352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25315){if((e25315 instanceof Error)){
var e__23586__auto____$11 = e25315;
if((e__23586__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === true)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25344){if((e25344 instanceof Error)){
var e__23586__auto____$12 = e25344;
if((e__23586__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$12;
}
} else {
throw e25344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25337){if((e25337 instanceof Error)){
var e__23586__auto____$12 = e25337;
if((e__23586__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25342){if((e25342 instanceof Error)){
var e__23586__auto____$13 = e25342;
if((e__23586__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$13;
}
} else {
throw e25342;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25338){if((e25338 instanceof Error)){
var e__23586__auto____$13 = e25338;
if((e__23586__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25340){if((e25340 instanceof Error)){
var e__23586__auto____$14 = e25340;
if((e__23586__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$14;
}
} else {
throw e25340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25339){if((e25339 instanceof Error)){
var e__23586__auto____$14 = e25339;
if((e__23586__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$14;
}
} else {
throw e25339;

}
}} else {
throw e__23586__auto____$13;
}
} else {
throw e25338;

}
}} else {
throw e__23586__auto____$12;
}
} else {
throw e25337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25316){if((e25316 instanceof Error)){
var e__23586__auto____$12 = e25316;
if((e__23586__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === false)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25334){if((e25334 instanceof Error)){
var e__23586__auto____$13 = e25334;
if((e__23586__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$13;
}
} else {
throw e25334;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25333){if((e25333 instanceof Error)){
var e__23586__auto____$13 = e25333;
if((e__23586__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$13;
}
} else {
throw e25333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25317){if((e25317 instanceof Error)){
var e__23586__auto____$13 = e25317;
if((e__23586__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === true)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25332){if((e25332 instanceof Error)){
var e__23586__auto____$14 = e25332;
if((e__23586__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$14;
}
} else {
throw e25332;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25331){if((e25331 instanceof Error)){
var e__23586__auto____$14 = e25331;
if((e__23586__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$14;
}
} else {
throw e25331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25318){if((e25318 instanceof Error)){
var e__23586__auto____$14 = e25318;
if((e__23586__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_25197_2__25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(2));
if((ocr_25197_2__25272 === false)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === true)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25327){if((e25327 instanceof Error)){
var e__23586__auto____$15 = e25327;
if((e__23586__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$15;
}
} else {
throw e25327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25320){if((e25320 instanceof Error)){
var e__23586__auto____$15 = e25320;
if((e__23586__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_25197_0__25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(0));
if((ocr_25197_0__25270 === false)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25322){if((e25322 instanceof Error)){
var e__23586__auto____$16 = e25322;
if((e__23586__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_25197_1__25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25197,(1));
if((ocr_25197_1__25271 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25196,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25323){if((e25323 instanceof Error)){
var e__23586__auto____$17 = e25323;
if((e__23586__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$17;
}
} else {
throw e25323;

}
}} else {
throw e__23586__auto____$16;
}
} else {
throw e25322;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25321){if((e25321 instanceof Error)){
var e__23586__auto____$16 = e25321;
if((e__23586__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$16;
}
} else {
throw e25321;

}
}} else {
throw e__23586__auto____$15;
}
} else {
throw e25320;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25319){if((e25319 instanceof Error)){
var e__23586__auto____$15 = e25319;
if((e__23586__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$15;
}
} else {
throw e25319;

}
}} else {
throw e__23586__auto____$14;
}
} else {
throw e25318;

}
}} else {
throw e__23586__auto____$13;
}
} else {
throw e25317;

}
}} else {
throw e__23586__auto____$12;
}
} else {
throw e25316;

}
}} else {
throw e__23586__auto____$11;
}
} else {
throw e25315;

}
}} else {
throw e__23586__auto____$10;
}
} else {
throw e25314;

}
}} else {
throw e__23586__auto____$9;
}
} else {
throw e25313;

}
}} else {
throw e__23586__auto____$8;
}
} else {
throw e25312;

}
}} else {
throw e__23586__auto____$7;
}
} else {
throw e25311;

}
}} else {
throw e__23586__auto____$6;
}
} else {
throw e25310;

}
}} else {
throw e__23586__auto____$5;
}
} else {
throw e25309;

}
}} else {
throw e__23586__auto____$4;
}
} else {
throw e25308;

}
}} else {
throw e__23586__auto____$3;
}
} else {
throw e25307;

}
}} else {
throw e__23586__auto____$2;
}
} else {
throw e25306;

}
}} else {
throw e__23586__auto____$1;
}
} else {
throw e25305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25304){if((e25304 instanceof Error)){
var e__23586__auto____$1 = e25304;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25304;

}
}} else {
throw e__23586__auto__;
}
} else {
throw e25303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25302){if((e25302 instanceof Error)){
var e__23586__auto__ = e25302;
if((e__23586__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__23586__auto__;
}
} else {
throw e25302;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_25435 = cljs.core.vec(eav);
var ocr_25436 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_25435)) && ((cljs.core.count(ocr_25435) === 3)))){
try{var ocr_25435_0__25464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_0__25464,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25435_1__25465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_1__25465,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25435_2__25466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_2__25466,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e25584){if((e25584 instanceof Error)){
var e__23586__auto__ = e25584;
if((e__23586__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25436)) && ((cljs.core.count(ocr_25436) === 3)))){
try{var ocr_25436_2__25471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25471 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25590){if((e25590 instanceof Error)){
var e__23586__auto____$1 = e25590;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25471 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25591){if((e25591 instanceof Error)){
var e__23586__auto____$2 = e25591;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$2;
}
} else {
throw e25591;

}
}} else {
throw e__23586__auto____$1;
}
} else {
throw e25590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25585){if((e25585 instanceof Error)){
var e__23586__auto____$1 = e25585;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25585;

}
}} else {
throw e__23586__auto__;
}
} else {
throw e25584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25578){if((e25578 instanceof Error)){
var e__23586__auto__ = e25578;
if((e__23586__auto__ === cljs.core.match.backtrack)){
try{var ocr_25435_2__25466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_2__25466,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_25436)) && ((cljs.core.count(ocr_25436) === 3)))){
try{var ocr_25436_1__25474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25474 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25582){if((e25582 instanceof Error)){
var e__23586__auto____$1 = e25582;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25436_1__25474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25474 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25583){if((e25583 instanceof Error)){
var e__23586__auto____$2 = e25583;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$2;
}
} else {
throw e25583;

}
}} else {
throw e__23586__auto____$1;
}
} else {
throw e25582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25581){if((e25581 instanceof Error)){
var e__23586__auto____$1 = e25581;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25580){if((e25580 instanceof Error)){
var e__23586__auto____$1 = e25580;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25580;

}
}} else {
throw e__23586__auto__;
}
} else {
throw e25578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25494){if((e25494 instanceof Error)){
var e__23586__auto__ = e25494;
if((e__23586__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25436)) && ((cljs.core.count(ocr_25436) === 3)))){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === false)){
try{var ocr_25435_1__25465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_1__25465,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25435_2__25466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_2__25466,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25576){if((e25576 instanceof Error)){
var e__23586__auto____$1 = e25576;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25573){if((e25573 instanceof Error)){
var e__23586__auto____$1 = e25573;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25499){if((e25499 instanceof Error)){
var e__23586__auto____$1 = e25499;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
try{var ocr_25435_2__25466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_2__25466,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25435_1__25465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_1__25465,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25569){if((e25569 instanceof Error)){
var e__23586__auto____$2 = e25569;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25570){if((e25570 instanceof Error)){
var e__23586__auto____$3 = e25570;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25571){if((e25571 instanceof Error)){
var e__23586__auto____$4 = e25571;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25571;

}
}} else {
throw e__23586__auto____$3;
}
} else {
throw e25570;

}
}} else {
throw e__23586__auto____$2;
}
} else {
throw e25569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25568){if((e25568 instanceof Error)){
var e__23586__auto____$2 = e25568;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$2;
}
} else {
throw e25568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25501){if((e25501 instanceof Error)){
var e__23586__auto____$2 = e25501;
if((e__23586__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === false)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
try{var ocr_25435_2__25466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_2__25466,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25566){if((e25566 instanceof Error)){
var e__23586__auto____$3 = e25566;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$3;
}
} else {
throw e25566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25565){if((e25565 instanceof Error)){
var e__23586__auto____$3 = e25565;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$3;
}
} else {
throw e25565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25503){if((e25503 instanceof Error)){
var e__23586__auto____$3 = e25503;
if((e__23586__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === true)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
try{var ocr_25435_1__25465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_1__25465,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25563){if((e25563 instanceof Error)){
var e__23586__auto____$4 = e25563;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25562){if((e25562 instanceof Error)){
var e__23586__auto____$4 = e25562;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$4;
}
} else {
throw e25562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25504){if((e25504 instanceof Error)){
var e__23586__auto____$4 = e25504;
if((e__23586__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === false)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
try{var ocr_25435_1__25465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_1__25465,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25559){if((e25559 instanceof Error)){
var e__23586__auto____$5 = e25559;
if((e__23586__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$5;
}
} else {
throw e25559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25558){if((e25558 instanceof Error)){
var e__23586__auto____$5 = e25558;
if((e__23586__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$5;
}
} else {
throw e25558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25506){if((e25506 instanceof Error)){
var e__23586__auto____$5 = e25506;
if((e__23586__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === true)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === false)){
try{var ocr_25435_1__25465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_1__25465,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25553){if((e25553 instanceof Error)){
var e__23586__auto____$6 = e25553;
if((e__23586__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$6;
}
} else {
throw e25553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25550){if((e25550 instanceof Error)){
var e__23586__auto____$6 = e25550;
if((e__23586__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
try{var ocr_25435_0__25464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_0__25464,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25552){if((e25552 instanceof Error)){
var e__23586__auto____$7 = e25552;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$7;
}
} else {
throw e25552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25551){if((e25551 instanceof Error)){
var e__23586__auto____$7 = e25551;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$7;
}
} else {
throw e25551;

}
}} else {
throw e__23586__auto____$6;
}
} else {
throw e25550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25508){if((e25508 instanceof Error)){
var e__23586__auto____$6 = e25508;
if((e__23586__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === false)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
try{var ocr_25435_0__25464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_0__25464,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25547){if((e25547 instanceof Error)){
var e__23586__auto____$7 = e25547;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$7;
}
} else {
throw e25547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25546){if((e25546 instanceof Error)){
var e__23586__auto____$7 = e25546;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$7;
}
} else {
throw e25546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25511){if((e25511 instanceof Error)){
var e__23586__auto____$7 = e25511;
if((e__23586__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === true)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === false)){
try{var ocr_25435_0__25464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25435_0__25464,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25545){if((e25545 instanceof Error)){
var e__23586__auto____$8 = e25545;
if((e__23586__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$8;
}
} else {
throw e25545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25535){if((e25535 instanceof Error)){
var e__23586__auto____$8 = e25535;
if((e__23586__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25541){if((e25541 instanceof Error)){
var e__23586__auto____$9 = e25541;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25542){if((e25542 instanceof Error)){
var e__23586__auto____$10 = e25542;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25542;

}
}} else {
throw e__23586__auto____$9;
}
} else {
throw e25541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25536){if((e25536 instanceof Error)){
var e__23586__auto____$9 = e25536;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === false)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25538){if((e25538 instanceof Error)){
var e__23586__auto____$10 = e25538;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25538;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25537){if((e25537 instanceof Error)){
var e__23586__auto____$10 = e25537;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25537;

}
}} else {
throw e__23586__auto____$9;
}
} else {
throw e25536;

}
}} else {
throw e__23586__auto____$8;
}
} else {
throw e25535;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25514){if((e25514 instanceof Error)){
var e__23586__auto____$8 = e25514;
if((e__23586__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === false)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25534){if((e25534 instanceof Error)){
var e__23586__auto____$9 = e25534;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$9;
}
} else {
throw e25534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25533){if((e25533 instanceof Error)){
var e__23586__auto____$9 = e25533;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$9;
}
} else {
throw e25533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25515){if((e25515 instanceof Error)){
var e__23586__auto____$9 = e25515;
if((e__23586__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === true)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === false)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25530){if((e25530 instanceof Error)){
var e__23586__auto____$10 = e25530;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25529){if((e25529 instanceof Error)){
var e__23586__auto____$10 = e25529;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$10;
}
} else {
throw e25529;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25516){if((e25516 instanceof Error)){
var e__23586__auto____$10 = e25516;
if((e__23586__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_25436_2__25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(2));
if((ocr_25436_2__25479 === false)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === true)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25525){if((e25525 instanceof Error)){
var e__23586__auto____$11 = e25525;
if((e__23586__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$11;
}
} else {
throw e25525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25518){if((e25518 instanceof Error)){
var e__23586__auto____$11 = e25518;
if((e__23586__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_25436_0__25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(0));
if((ocr_25436_0__25477 === false)){
try{var ocr_25436_1__25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25436,(1));
if((ocr_25436_1__25478 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25435,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25520){if((e25520 instanceof Error)){
var e__23586__auto____$12 = e25520;
if((e__23586__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$12;
}
} else {
throw e25520;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25519){if((e25519 instanceof Error)){
var e__23586__auto____$12 = e25519;
if((e__23586__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$12;
}
} else {
throw e25519;

}
}} else {
throw e__23586__auto____$11;
}
} else {
throw e25518;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25517){if((e25517 instanceof Error)){
var e__23586__auto____$11 = e25517;
if((e__23586__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$11;
}
} else {
throw e25517;

}
}} else {
throw e__23586__auto____$10;
}
} else {
throw e25516;

}
}} else {
throw e__23586__auto____$9;
}
} else {
throw e25515;

}
}} else {
throw e__23586__auto____$8;
}
} else {
throw e25514;

}
}} else {
throw e__23586__auto____$7;
}
} else {
throw e25511;

}
}} else {
throw e__23586__auto____$6;
}
} else {
throw e25508;

}
}} else {
throw e__23586__auto____$5;
}
} else {
throw e25506;

}
}} else {
throw e__23586__auto____$4;
}
} else {
throw e25504;

}
}} else {
throw e__23586__auto____$3;
}
} else {
throw e25503;

}
}} else {
throw e__23586__auto____$2;
}
} else {
throw e25501;

}
}} else {
throw e__23586__auto____$1;
}
} else {
throw e25499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25495){if((e25495 instanceof Error)){
var e__23586__auto____$1 = e25495;
if((e__23586__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23586__auto____$1;
}
} else {
throw e25495;

}
}} else {
throw e__23586__auto__;
}
} else {
throw e25494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25493){if((e25493 instanceof Error)){
var e__23586__auto__ = e25493;
if((e__23586__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__23586__auto__;
}
} else {
throw e25493;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25601){
var vec__25602 = p__25601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25602,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25595_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__25595_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25610){
var vec__25611 = p__25610;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25611,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25611,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25605_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__25605_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__25621 = cljs.core.rest(ins);
var G__25622 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__25621,G__25622) : posh.lib.q_analyze.just_qvars.call(null,G__25621,G__25622));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25623_SHARP_){
return cljs.core.zipmap(qvars,p1__25623_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__25630 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25630,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25630,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25630,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25630,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__26326 = var$;
var G__26327 = dbvarmap;
var G__26328 = cljs.core.rest(dbeavs);
var$ = G__26326;
dbvarmap = G__26327;
dbeavs = G__26328;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__25634 = cljs.core.rest(vars);
var G__25635 = dbvarmap;
var G__25636 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__25634,G__25635,G__25636) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__25634,G__25635,G__25636));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__26329 = (n + (1));
var G__26330 = cljs.core.rest(xs__$1);
n = G__26329;
xs__$1 = G__26330;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25640_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__25640_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__25640_SHARP_) : type.call(null,p1__25640_SHARP_));
} else {
return p1__25640_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__25645 = cljs.core.rest(ins);
var G__25646 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__25645,G__25646) : posh.lib.q_analyze.make_dbarg_map.call(null,G__25645,G__25646));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25651){
var vec__25652 = p__25651;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25652,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25652,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25664_SHARP_,p2__25663_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__25663_SHARP_)){
return p1__25664_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__25676 = cljs.core._EQ_;
var expr__25677 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__25676.cljs$core$IFn$_invoke$arity$2 ? pred__25676.cljs$core$IFn$_invoke$arity$2((1),expr__25677) : pred__25676.call(null,(1),expr__25677)))){
return true;
} else {
if(cljs.core.truth_((pred__25676.cljs$core$IFn$_invoke$arity$2 ? pred__25676.cljs$core$IFn$_invoke$arity$2((3),expr__25677) : pred__25676.call(null,(3),expr__25677)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__26338 = cljs.core.first(remaining);
var G__26339 = cljs.core.rest(remaining);
clause = G__26338;
remaining = G__26339;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__26340 = cljs.core.first(remaining);
var G__26341 = cljs.core.rest(remaining);
clause = G__26340;
remaining = G__26341;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__25686(s__25687){
return (new cljs.core.LazySeq(null,(function (){
var s__25687__$1 = s__25687;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25687__$1);
if(temp__5735__auto__){
var s__25687__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25687__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25687__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25689 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25688 = (0);
while(true){
if((i__25688 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__25688);
cljs.core.chunk_append(b__25689,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__26346 = (i__25688 + (1));
i__25688 = G__26346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25689),posh$lib$q_analyze$resolve_any_idents_$_iter__25686(cljs.core.chunk_rest(s__25687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25689),null);
}
} else {
var var_value = cljs.core.first(s__25687__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__25686(cljs.core.rest(s__25687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25715){
var vec__25716 = p__25715;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25716,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25716,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25723){
var vec__25724 = p__25723;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25724,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25737){
var vec__25738 = p__25737;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25738,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25738,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25745){
var vec__25747 = p__25745;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25747,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25747,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__25753 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__25754 = cljs.core.vec(r);
var fexpr__25752 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25752.cljs$core$IFn$_invoke$arity$2 ? fexpr__25752.cljs$core$IFn$_invoke$arity$2(G__25753,G__25754) : fexpr__25752.call(null,G__25753,G__25754));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25757){
var vec__25758 = p__25757;
var seq__25759 = cljs.core.seq(vec__25758);
var first__25760 = cljs.core.first(seq__25759);
var seq__25759__$1 = cljs.core.next(seq__25759);
var db = first__25760;
var eav = seq__25759__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25762){
var vec__25763 = p__25762;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25763,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__25702_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__25702_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__25702_SHARP_) : linked_qvars.call(null,p1__25702_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__25702_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__25703_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__25703_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__25703_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
