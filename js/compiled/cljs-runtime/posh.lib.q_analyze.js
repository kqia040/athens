goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__34191 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__34191) : stop_at_QMARK_.call(null,G__34191));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__34192 = stop_at_QMARK_;
var G__34193 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__34192,G__34193) : posh.lib.q_analyze.take_until.call(null,G__34192,G__34193));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__34195 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__34195) : rest_at_QMARK_.call(null,G__34195));
}
})())){
return ls;
} else {
var G__35859 = rest_at_QMARK_;
var G__35860 = cljs.core.rest(ls);
rest_at_QMARK_ = G__35859;
ls = G__35860;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__34199 = split_at_QMARK_;
var G__34200 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__34199,G__34200) : posh.lib.q_analyze.split_list_at.call(null,G__34199,G__34200));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__34210 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__34210) : posh.lib.q_analyze.get_all_vars.call(null,G__34210));
})(),(function (){var G__34211 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__34211) : posh.lib.q_analyze.get_all_vars.call(null,G__34211));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__34216 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__34216) : posh.lib.q_analyze.get_all_vars.call(null,G__34216));
})(),cljs.core.first(query));
} else {
var G__34217 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__34217) : posh.lib.q_analyze.get_all_vars.call(null,G__34217));

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
var G__34224 = cljs.core.rest(eav);
var G__34225 = (n - (1));
var G__34226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__34227 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__34224,G__34225,G__34226,G__34227) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__34224,G__34225,G__34226,G__34227));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__34228 = cljs.core.rest(eav);
var G__34229 = (n - (1));
var G__34230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__34231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__34228,G__34229,G__34230,G__34231) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__34228,G__34229,G__34230,G__34231));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__34235 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__34235) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__34235));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__34239 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__34239) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__34239));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__34246 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34246) : posh.lib.q_analyze.get_eavs.call(null,G__34246));
})(),(function (){var G__34251 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34251) : posh.lib.q_analyze.get_eavs.call(null,G__34251));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__34253 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34253) : posh.lib.q_analyze.get_eavs.call(null,G__34253));
})(),(function (){var G__34256 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34256) : posh.lib.q_analyze.get_eavs.call(null,G__34256));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__34258 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34258) : posh.lib.q_analyze.get_eavs.call(null,G__34258));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_34262 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_34262)) && ((cljs.core.count(ocr_34262) === 2)))){
try{var ocr_34262_0__34289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34262,(0));
if(((cljs.core.vector_QMARK_(ocr_34262_0__34289)) && ((cljs.core.count(ocr_34262_0__34289) === 5)))){
try{var ocr_34262_0__34289_0__34291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34262_0__34289,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34262_0__34289_0__34291,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34262_0__34289,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34262_0__34289,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34262_0__34289,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34262,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__34307 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34307) : posh.lib.q_analyze.get_eavs.call(null,G__34307));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e34306){if((e34306 instanceof Error)){
var e__33203__auto__ = e34306;
if((e__33203__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto__;
}
} else {
throw e34306;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34305){if((e34305 instanceof Error)){
var e__33203__auto__ = e34305;
if((e__33203__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto__;
}
} else {
throw e34305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34302){if((e34302 instanceof Error)){
var e__33203__auto__ = e34302;
if((e__33203__auto__ === cljs.core.match.backtrack)){
var G__34303 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34303) : posh.lib.q_analyze.get_eavs.call(null,G__34303));
} else {
throw e__33203__auto__;
}
} else {
throw e34302;

}
}} else {
var G__34308 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__34308) : posh.lib.q_analyze.get_eavs.call(null,G__34308));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__34309){
var vec__34310 = p__34309;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34310,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34314_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__34314_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__34314_SHARP_);
} else {
return p1__34314_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__34315 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__34315) : posh.lib.q_analyze.count_qvars.call(null,G__34315));
})(),(function (){var G__34316 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__34316) : posh.lib.q_analyze.count_qvars.call(null,G__34316));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__34317 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__34317) : posh.lib.q_analyze.count_qvars.call(null,G__34317));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__34319(s__34320){
return (new cljs.core.LazySeq(null,(function (){
var s__34320__$1 = s__34320;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34320__$1);
if(temp__5735__auto__){
var s__34320__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34320__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34320__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34322 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34321 = (0);
while(true){
if((i__34321 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__34321);
cljs.core.chunk_append(b__34322,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__36011 = (i__34321 + (1));
i__34321 = G__36011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34322),posh$lib$q_analyze$fill_qvar_set_$_iter__34319(cljs.core.chunk_rest(s__34320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34322),null);
}
} else {
var r = cljs.core.first(s__34320__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__34319(cljs.core.rest(s__34320__$2)));
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
return cljs.core.cons((function (){var G__34329 = cljs.core.first(seq1);
var G__34330 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34329,G__34330) : f.call(null,G__34329,G__34330));
})(),(function (){var G__34331 = f;
var G__34332 = cljs.core.rest(seq1);
var G__34333 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__34331,G__34332,G__34333) : posh.lib.q_analyze.seq_merge_with.call(null,G__34331,G__34332,G__34333));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__34336){
var vec__34337 = p__34336;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(2),null);
var eav = vec__34337;
var vec__34340 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343(s__34344){
return (new cljs.core.LazySeq(null,(function (){
var s__34344__$1 = s__34344;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34344__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__34344__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343_$_iter__34345(s__34346){
return (new cljs.core.LazySeq(null,((function (s__34344__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (){
var s__34346__$1 = s__34346;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34346__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__34346__$1,s__34344__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343_$_iter__34345_$_iter__34347(s__34348){
return (new cljs.core.LazySeq(null,((function (s__34346__$1,s__34344__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (){
var s__34348__$1 = s__34348;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__34348__$1);
if(temp__5735__auto____$2){
var s__34348__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34348__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34348__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34350 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34349 = (0);
while(true){
if((i__34349 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__34349);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34349,s__34348__$1,s__34346__$1,s__34344__$1,vv,c__4527__auto__,size__4528__auto__,b__34350,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (p1__34334_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__34334_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__34349,s__34348__$1,s__34346__$1,s__34344__$1,vv,c__4527__auto__,size__4528__auto__,b__34350,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34349,s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__34350,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (p__34352){
var vec__34353 = p__34352;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34353,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34353,(1),null);
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
});})(i__34349,s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__34350,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34349,s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__34350,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (p1__34335_SHARP_){
if(cljs.core.truth_(p1__34335_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__34349,s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__34350,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__34350,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__36086 = (i__34349 + (1));
i__34349 = G__36086;
continue;
} else {
var G__36087 = (i__34349 + (1));
i__34349 = G__36087;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34350),posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343_$_iter__34345_$_iter__34347(cljs.core.chunk_rest(s__34348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34350),null);
}
} else {
var vv = cljs.core.first(s__34348__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__34348__$1,s__34346__$1,s__34344__$1,vv,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (p1__34334_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__34334_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__34348__$1,s__34346__$1,s__34344__$1,vv,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,vv,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (p__34360){
var vec__34361 = p__34360;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34361,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34361,(1),null);
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
});})(s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,vv,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,exposed_qvars,vv,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav){
return (function (p1__34335_SHARP_){
if(cljs.core.truth_(p1__34335_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__34348__$1,s__34346__$1,s__34344__$1,wildcard_count,exposed_qvars,vv,s__34348__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343_$_iter__34345_$_iter__34347(cljs.core.rest(s__34348__$2)));
} else {
var G__36101 = cljs.core.rest(s__34348__$2);
s__34348__$1 = G__36101;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34346__$1,s__34344__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,null,null));
});})(s__34346__$1,s__34344__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343_$_iter__34345(cljs.core.rest(s__34346__$1)));
} else {
var G__36108 = cljs.core.rest(s__34346__$1);
s__34346__$1 = G__36108;
continue;
}
} else {
return null;
}
break;
}
});})(s__34344__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
,null,null));
});})(s__34344__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__34340,qe,qa,qv,vec__34337,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__34343(cljs.core.rest(s__34344__$1)));
} else {
var G__36112 = cljs.core.rest(s__34344__$1);
s__34344__$1 = G__36112;
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
var ocr_34384 = cljs.core.vec(eav);
var ocr_34385 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_34384)) && ((cljs.core.count(ocr_34384) === 3)))){
try{var ocr_34384_0__34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_0__34438,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34384_2__34440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_2__34440,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34931){if((e34931 instanceof Error)){
var e__33203__auto__ = e34931;
if((e__33203__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_34385)) && ((cljs.core.count(ocr_34385) === 3)))){
try{var ocr_34385_2__34476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34476 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34935){if((e34935 instanceof Error)){
var e__33203__auto____$1 = e34935;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34476 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34936){if((e34936 instanceof Error)){
var e__33203__auto____$2 = e34936;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$2;
}
} else {
throw e34936;

}
}} else {
throw e__33203__auto____$1;
}
} else {
throw e34935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34932){if((e34932 instanceof Error)){
var e__33203__auto____$1 = e34932;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e34932;

}
}} else {
throw e__33203__auto__;
}
} else {
throw e34931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34918){if((e34918 instanceof Error)){
var e__33203__auto__ = e34918;
if((e__33203__auto__ === cljs.core.match.backtrack)){
try{var ocr_34384_2__34440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_2__34440,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_34385)) && ((cljs.core.count(ocr_34385) === 3)))){
try{var ocr_34385_1__34490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34490 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34926){if((e34926 instanceof Error)){
var e__33203__auto____$1 = e34926;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34385_1__34490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34490 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34927){if((e34927 instanceof Error)){
var e__33203__auto____$2 = e34927;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$2;
}
} else {
throw e34927;

}
}} else {
throw e__33203__auto____$1;
}
} else {
throw e34926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34921){if((e34921 instanceof Error)){
var e__33203__auto____$1 = e34921;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e34921;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34920){if((e34920 instanceof Error)){
var e__33203__auto____$1 = e34920;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e34920;

}
}} else {
throw e__33203__auto__;
}
} else {
throw e34918;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34695){if((e34695 instanceof Error)){
var e__33203__auto__ = e34695;
if((e__33203__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_34385)) && ((cljs.core.count(ocr_34385) === 3)))){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34384_2__34440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_2__34440,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34917){if((e34917 instanceof Error)){
var e__33203__auto____$1 = e34917;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e34917;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34916){if((e34916 instanceof Error)){
var e__33203__auto____$1 = e34916;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e34916;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34706){if((e34706 instanceof Error)){
var e__33203__auto____$1 = e34706;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34384_2__34440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_2__34440,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34913){if((e34913 instanceof Error)){
var e__33203__auto____$2 = e34913;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34914){if((e34914 instanceof Error)){
var e__33203__auto____$3 = e34914;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34915){if((e34915 instanceof Error)){
var e__33203__auto____$4 = e34915;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e34915;

}
}} else {
throw e__33203__auto____$3;
}
} else {
throw e34914;

}
}} else {
throw e__33203__auto____$2;
}
} else {
throw e34913;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34912){if((e34912 instanceof Error)){
var e__33203__auto____$2 = e34912;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$2;
}
} else {
throw e34912;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34707){if((e34707 instanceof Error)){
var e__33203__auto____$2 = e34707;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
try{var ocr_34384_2__34440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_2__34440,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34910){if((e34910 instanceof Error)){
var e__33203__auto____$3 = e34910;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$3;
}
} else {
throw e34910;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34906){if((e34906 instanceof Error)){
var e__33203__auto____$3 = e34906;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
try{var ocr_34384_2__34440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_2__34440,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34909){if((e34909 instanceof Error)){
var e__33203__auto____$4 = e34909;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e34909;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34907){if((e34907 instanceof Error)){
var e__33203__auto____$4 = e34907;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e34907;

}
}} else {
throw e__33203__auto____$3;
}
} else {
throw e34906;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34708){if((e34708 instanceof Error)){
var e__33203__auto____$3 = e34708;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === true)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34904){if((e34904 instanceof Error)){
var e__33203__auto____$4 = e34904;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e34904;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34903){if((e34903 instanceof Error)){
var e__33203__auto____$4 = e34903;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e34903;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34713){if((e34713 instanceof Error)){
var e__33203__auto____$4 = e34713;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === false)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34901){if((e34901 instanceof Error)){
var e__33203__auto____$5 = e34901;
if((e__33203__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$5;
}
} else {
throw e34901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34900){if((e34900 instanceof Error)){
var e__33203__auto____$5 = e34900;
if((e__33203__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$5;
}
} else {
throw e34900;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34714){if((e34714 instanceof Error)){
var e__33203__auto____$5 = e34714;
if((e__33203__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === true)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34897){if((e34897 instanceof Error)){
var e__33203__auto____$6 = e34897;
if((e__33203__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$6;
}
} else {
throw e34897;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34895){if((e34895 instanceof Error)){
var e__33203__auto____$6 = e34895;
if((e__33203__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$6;
}
} else {
throw e34895;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34716){if((e34716 instanceof Error)){
var e__33203__auto____$6 = e34716;
if((e__33203__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === false)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34384_1__34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_1__34439,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34891){if((e34891 instanceof Error)){
var e__33203__auto____$7 = e34891;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$7;
}
} else {
throw e34891;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34890){if((e34890 instanceof Error)){
var e__33203__auto____$7 = e34890;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$7;
}
} else {
throw e34890;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34721){if((e34721 instanceof Error)){
var e__33203__auto____$7 = e34721;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === true)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
try{var ocr_34384_0__34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_0__34438,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34885){if((e34885 instanceof Error)){
var e__33203__auto____$8 = e34885;
if((e__33203__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$8;
}
} else {
throw e34885;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34884){if((e34884 instanceof Error)){
var e__33203__auto____$8 = e34884;
if((e__33203__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$8;
}
} else {
throw e34884;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34722){if((e34722 instanceof Error)){
var e__33203__auto____$8 = e34722;
if((e__33203__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === false)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
try{var ocr_34384_0__34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_0__34438,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34883){if((e34883 instanceof Error)){
var e__33203__auto____$9 = e34883;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$9;
}
} else {
throw e34883;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34881){if((e34881 instanceof Error)){
var e__33203__auto____$9 = e34881;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$9;
}
} else {
throw e34881;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34727){if((e34727 instanceof Error)){
var e__33203__auto____$9 = e34727;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === true)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
try{var ocr_34384_0__34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_0__34438,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34873){if((e34873 instanceof Error)){
var e__33203__auto____$10 = e34873;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e34873;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34858){if((e34858 instanceof Error)){
var e__33203__auto____$10 = e34858;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e34858;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34728){if((e34728 instanceof Error)){
var e__33203__auto____$10 = e34728;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === false)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
try{var ocr_34384_0__34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34384_0__34438,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34846){if((e34846 instanceof Error)){
var e__33203__auto____$11 = e34846;
if((e__33203__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$11;
}
} else {
throw e34846;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34841){if((e34841 instanceof Error)){
var e__33203__auto____$11 = e34841;
if((e__33203__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$11;
}
} else {
throw e34841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34729){if((e34729 instanceof Error)){
var e__33203__auto____$11 = e34729;
if((e__33203__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === true)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34831){if((e34831 instanceof Error)){
var e__33203__auto____$12 = e34831;
if((e__33203__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$12;
}
} else {
throw e34831;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34801){if((e34801 instanceof Error)){
var e__33203__auto____$12 = e34801;
if((e__33203__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34822){if((e34822 instanceof Error)){
var e__33203__auto____$13 = e34822;
if((e__33203__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$13;
}
} else {
throw e34822;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34802){if((e34802 instanceof Error)){
var e__33203__auto____$13 = e34802;
if((e__33203__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34804){if((e34804 instanceof Error)){
var e__33203__auto____$14 = e34804;
if((e__33203__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$14;
}
} else {
throw e34804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34803){if((e34803 instanceof Error)){
var e__33203__auto____$14 = e34803;
if((e__33203__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$14;
}
} else {
throw e34803;

}
}} else {
throw e__33203__auto____$13;
}
} else {
throw e34802;

}
}} else {
throw e__33203__auto____$12;
}
} else {
throw e34801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34734){if((e34734 instanceof Error)){
var e__33203__auto____$12 = e34734;
if((e__33203__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === false)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34797){if((e34797 instanceof Error)){
var e__33203__auto____$13 = e34797;
if((e__33203__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$13;
}
} else {
throw e34797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34795){if((e34795 instanceof Error)){
var e__33203__auto____$13 = e34795;
if((e__33203__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$13;
}
} else {
throw e34795;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34735){if((e34735 instanceof Error)){
var e__33203__auto____$13 = e34735;
if((e__33203__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === true)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34786){if((e34786 instanceof Error)){
var e__33203__auto____$14 = e34786;
if((e__33203__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$14;
}
} else {
throw e34786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34780){if((e34780 instanceof Error)){
var e__33203__auto____$14 = e34780;
if((e__33203__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$14;
}
} else {
throw e34780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34736){if((e34736 instanceof Error)){
var e__33203__auto____$14 = e34736;
if((e__33203__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_34385_2__34529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(2));
if((ocr_34385_2__34529 === false)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === true)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34767){if((e34767 instanceof Error)){
var e__33203__auto____$15 = e34767;
if((e__33203__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$15;
}
} else {
throw e34767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34748){if((e34748 instanceof Error)){
var e__33203__auto____$15 = e34748;
if((e__33203__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_34385_0__34527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(0));
if((ocr_34385_0__34527 === false)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34754){if((e34754 instanceof Error)){
var e__33203__auto____$16 = e34754;
if((e__33203__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_34385_1__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34385,(1));
if((ocr_34385_1__34528 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34384,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34755){if((e34755 instanceof Error)){
var e__33203__auto____$17 = e34755;
if((e__33203__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$17;
}
} else {
throw e34755;

}
}} else {
throw e__33203__auto____$16;
}
} else {
throw e34754;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34749){if((e34749 instanceof Error)){
var e__33203__auto____$16 = e34749;
if((e__33203__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$16;
}
} else {
throw e34749;

}
}} else {
throw e__33203__auto____$15;
}
} else {
throw e34748;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34741){if((e34741 instanceof Error)){
var e__33203__auto____$15 = e34741;
if((e__33203__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$15;
}
} else {
throw e34741;

}
}} else {
throw e__33203__auto____$14;
}
} else {
throw e34736;

}
}} else {
throw e__33203__auto____$13;
}
} else {
throw e34735;

}
}} else {
throw e__33203__auto____$12;
}
} else {
throw e34734;

}
}} else {
throw e__33203__auto____$11;
}
} else {
throw e34729;

}
}} else {
throw e__33203__auto____$10;
}
} else {
throw e34728;

}
}} else {
throw e__33203__auto____$9;
}
} else {
throw e34727;

}
}} else {
throw e__33203__auto____$8;
}
} else {
throw e34722;

}
}} else {
throw e__33203__auto____$7;
}
} else {
throw e34721;

}
}} else {
throw e__33203__auto____$6;
}
} else {
throw e34716;

}
}} else {
throw e__33203__auto____$5;
}
} else {
throw e34714;

}
}} else {
throw e__33203__auto____$4;
}
} else {
throw e34713;

}
}} else {
throw e__33203__auto____$3;
}
} else {
throw e34708;

}
}} else {
throw e__33203__auto____$2;
}
} else {
throw e34707;

}
}} else {
throw e__33203__auto____$1;
}
} else {
throw e34706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34696){if((e34696 instanceof Error)){
var e__33203__auto____$1 = e34696;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e34696;

}
}} else {
throw e__33203__auto__;
}
} else {
throw e34695;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34685){if((e34685 instanceof Error)){
var e__33203__auto__ = e34685;
if((e__33203__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__33203__auto__;
}
} else {
throw e34685;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_34963 = cljs.core.vec(eav);
var ocr_34964 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_34963)) && ((cljs.core.count(ocr_34963) === 3)))){
try{var ocr_34963_0__35001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_0__35001,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34963_1__35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_1__35002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34963_2__35003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_2__35003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e35498){if((e35498 instanceof Error)){
var e__33203__auto__ = e35498;
if((e__33203__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_34964)) && ((cljs.core.count(ocr_34964) === 3)))){
try{var ocr_34964_2__35016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35016 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35510){if((e35510 instanceof Error)){
var e__33203__auto____$1 = e35510;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35016 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35512){if((e35512 instanceof Error)){
var e__33203__auto____$2 = e35512;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$2;
}
} else {
throw e35512;

}
}} else {
throw e__33203__auto____$1;
}
} else {
throw e35510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35499){if((e35499 instanceof Error)){
var e__33203__auto____$1 = e35499;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e35499;

}
}} else {
throw e__33203__auto__;
}
} else {
throw e35498;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35460){if((e35460 instanceof Error)){
var e__33203__auto__ = e35460;
if((e__33203__auto__ === cljs.core.match.backtrack)){
try{var ocr_34963_2__35003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_2__35003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_34964)) && ((cljs.core.count(ocr_34964) === 3)))){
try{var ocr_34964_1__35024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35024 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35473){if((e35473 instanceof Error)){
var e__33203__auto____$1 = e35473;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34964_1__35024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35024 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35477){if((e35477 instanceof Error)){
var e__33203__auto____$2 = e35477;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$2;
}
} else {
throw e35477;

}
}} else {
throw e__33203__auto____$1;
}
} else {
throw e35473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35466){if((e35466 instanceof Error)){
var e__33203__auto____$1 = e35466;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e35466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35461){if((e35461 instanceof Error)){
var e__33203__auto____$1 = e35461;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e35461;

}
}} else {
throw e__33203__auto__;
}
} else {
throw e35460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35153){if((e35153 instanceof Error)){
var e__33203__auto__ = e35153;
if((e__33203__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_34964)) && ((cljs.core.count(ocr_34964) === 3)))){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === false)){
try{var ocr_34963_1__35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_1__35002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34963_2__35003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_2__35003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35439){if((e35439 instanceof Error)){
var e__33203__auto____$1 = e35439;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e35439;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35438){if((e35438 instanceof Error)){
var e__33203__auto____$1 = e35438;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e35438;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35159){if((e35159 instanceof Error)){
var e__33203__auto____$1 = e35159;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
try{var ocr_34963_2__35003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_2__35003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_34963_1__35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_1__35002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35421){if((e35421 instanceof Error)){
var e__33203__auto____$2 = e35421;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35422){if((e35422 instanceof Error)){
var e__33203__auto____$3 = e35422;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35423){if((e35423 instanceof Error)){
var e__33203__auto____$4 = e35423;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e35423;

}
}} else {
throw e__33203__auto____$3;
}
} else {
throw e35422;

}
}} else {
throw e__33203__auto____$2;
}
} else {
throw e35421;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35412){if((e35412 instanceof Error)){
var e__33203__auto____$2 = e35412;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$2;
}
} else {
throw e35412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35160){if((e35160 instanceof Error)){
var e__33203__auto____$2 = e35160;
if((e__33203__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === false)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
try{var ocr_34963_2__35003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_2__35003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35401){if((e35401 instanceof Error)){
var e__33203__auto____$3 = e35401;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$3;
}
} else {
throw e35401;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35396){if((e35396 instanceof Error)){
var e__33203__auto____$3 = e35396;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$3;
}
} else {
throw e35396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35165){if((e35165 instanceof Error)){
var e__33203__auto____$3 = e35165;
if((e__33203__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === true)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
try{var ocr_34963_1__35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_1__35002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35382){if((e35382 instanceof Error)){
var e__33203__auto____$4 = e35382;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e35382;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35374){if((e35374 instanceof Error)){
var e__33203__auto____$4 = e35374;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$4;
}
} else {
throw e35374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35166){if((e35166 instanceof Error)){
var e__33203__auto____$4 = e35166;
if((e__33203__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === false)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
try{var ocr_34963_1__35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_1__35002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35363){if((e35363 instanceof Error)){
var e__33203__auto____$5 = e35363;
if((e__33203__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$5;
}
} else {
throw e35363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35360){if((e35360 instanceof Error)){
var e__33203__auto____$5 = e35360;
if((e__33203__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$5;
}
} else {
throw e35360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35167){if((e35167 instanceof Error)){
var e__33203__auto____$5 = e35167;
if((e__33203__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === true)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === false)){
try{var ocr_34963_1__35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_1__35002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35350){if((e35350 instanceof Error)){
var e__33203__auto____$6 = e35350;
if((e__33203__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$6;
}
} else {
throw e35350;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35329){if((e35329 instanceof Error)){
var e__33203__auto____$6 = e35329;
if((e__33203__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
try{var ocr_34963_0__35001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_0__35001,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35339){if((e35339 instanceof Error)){
var e__33203__auto____$7 = e35339;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$7;
}
} else {
throw e35339;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35330){if((e35330 instanceof Error)){
var e__33203__auto____$7 = e35330;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$7;
}
} else {
throw e35330;

}
}} else {
throw e__33203__auto____$6;
}
} else {
throw e35329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35173){if((e35173 instanceof Error)){
var e__33203__auto____$6 = e35173;
if((e__33203__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === false)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
try{var ocr_34963_0__35001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_0__35001,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35317){if((e35317 instanceof Error)){
var e__33203__auto____$7 = e35317;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$7;
}
} else {
throw e35317;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35309){if((e35309 instanceof Error)){
var e__33203__auto____$7 = e35309;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$7;
}
} else {
throw e35309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35175){if((e35175 instanceof Error)){
var e__33203__auto____$7 = e35175;
if((e__33203__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === true)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === false)){
try{var ocr_34963_0__35001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34963_0__35001,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35300){if((e35300 instanceof Error)){
var e__33203__auto____$8 = e35300;
if((e__33203__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$8;
}
} else {
throw e35300;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35264){if((e35264 instanceof Error)){
var e__33203__auto____$8 = e35264;
if((e__33203__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35289){if((e35289 instanceof Error)){
var e__33203__auto____$9 = e35289;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35290){if((e35290 instanceof Error)){
var e__33203__auto____$10 = e35290;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e35290;

}
}} else {
throw e__33203__auto____$9;
}
} else {
throw e35289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35269){if((e35269 instanceof Error)){
var e__33203__auto____$9 = e35269;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === false)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35274){if((e35274 instanceof Error)){
var e__33203__auto____$10 = e35274;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e35274;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35271){if((e35271 instanceof Error)){
var e__33203__auto____$10 = e35271;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e35271;

}
}} else {
throw e__33203__auto____$9;
}
} else {
throw e35269;

}
}} else {
throw e__33203__auto____$8;
}
} else {
throw e35264;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35176){if((e35176 instanceof Error)){
var e__33203__auto____$8 = e35176;
if((e__33203__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === false)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35253){if((e35253 instanceof Error)){
var e__33203__auto____$9 = e35253;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$9;
}
} else {
throw e35253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35246){if((e35246 instanceof Error)){
var e__33203__auto____$9 = e35246;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$9;
}
} else {
throw e35246;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35200){if((e35200 instanceof Error)){
var e__33203__auto____$9 = e35200;
if((e__33203__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === true)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === false)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35235){if((e35235 instanceof Error)){
var e__33203__auto____$10 = e35235;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e35235;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35228){if((e35228 instanceof Error)){
var e__33203__auto____$10 = e35228;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$10;
}
} else {
throw e35228;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35201){if((e35201 instanceof Error)){
var e__33203__auto____$10 = e35201;
if((e__33203__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_34964_2__35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(2));
if((ocr_34964_2__35039 === false)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === true)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35221){if((e35221 instanceof Error)){
var e__33203__auto____$11 = e35221;
if((e__33203__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$11;
}
} else {
throw e35221;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35209){if((e35209 instanceof Error)){
var e__33203__auto____$11 = e35209;
if((e__33203__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_34964_0__35037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(0));
if((ocr_34964_0__35037 === false)){
try{var ocr_34964_1__35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34964,(1));
if((ocr_34964_1__35038 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34963,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35218){if((e35218 instanceof Error)){
var e__33203__auto____$12 = e35218;
if((e__33203__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$12;
}
} else {
throw e35218;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35210){if((e35210 instanceof Error)){
var e__33203__auto____$12 = e35210;
if((e__33203__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$12;
}
} else {
throw e35210;

}
}} else {
throw e__33203__auto____$11;
}
} else {
throw e35209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35206){if((e35206 instanceof Error)){
var e__33203__auto____$11 = e35206;
if((e__33203__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$11;
}
} else {
throw e35206;

}
}} else {
throw e__33203__auto____$10;
}
} else {
throw e35201;

}
}} else {
throw e__33203__auto____$9;
}
} else {
throw e35200;

}
}} else {
throw e__33203__auto____$8;
}
} else {
throw e35176;

}
}} else {
throw e__33203__auto____$7;
}
} else {
throw e35175;

}
}} else {
throw e__33203__auto____$6;
}
} else {
throw e35173;

}
}} else {
throw e__33203__auto____$5;
}
} else {
throw e35167;

}
}} else {
throw e__33203__auto____$4;
}
} else {
throw e35166;

}
}} else {
throw e__33203__auto____$3;
}
} else {
throw e35165;

}
}} else {
throw e__33203__auto____$2;
}
} else {
throw e35160;

}
}} else {
throw e__33203__auto____$1;
}
} else {
throw e35159;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35154){if((e35154 instanceof Error)){
var e__33203__auto____$1 = e35154;
if((e__33203__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__33203__auto____$1;
}
} else {
throw e35154;

}
}} else {
throw e__33203__auto__;
}
} else {
throw e35153;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35144){if((e35144 instanceof Error)){
var e__33203__auto__ = e35144;
if((e__33203__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__33203__auto__;
}
} else {
throw e35144;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35527){
var vec__35528 = p__35527;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35526_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__35526_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35540){
var vec__35541 = p__35540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35541,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35535_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__35535_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__35564 = cljs.core.rest(ins);
var G__35565 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__35564,G__35565) : posh.lib.q_analyze.just_qvars.call(null,G__35564,G__35565));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35571_SHARP_){
return cljs.core.zipmap(qvars,p1__35571_SHARP_);
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
var vec__35597 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__36320 = var$;
var G__36321 = dbvarmap;
var G__36322 = cljs.core.rest(dbeavs);
var$ = G__36320;
dbvarmap = G__36321;
dbeavs = G__36322;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__35610 = cljs.core.rest(vars);
var G__35611 = dbvarmap;
var G__35612 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__35610,G__35611,G__35612) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__35610,G__35611,G__35612));
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
var G__36326 = (n + (1));
var G__36327 = cljs.core.rest(xs__$1);
n = G__36326;
xs__$1 = G__36327;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35622_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__35622_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__35622_SHARP_) : type.call(null,p1__35622_SHARP_));
} else {
return p1__35622_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__35630 = cljs.core.rest(ins);
var G__35631 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__35630,G__35631) : posh.lib.q_analyze.make_dbarg_map.call(null,G__35630,G__35631));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35633){
var vec__35636 = p__35633;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__35646_SHARP_,p2__35645_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__35645_SHARP_)){
return p1__35646_SHARP_;
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
var pred__35666 = cljs.core._EQ_;
var expr__35667 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__35666.cljs$core$IFn$_invoke$arity$2 ? pred__35666.cljs$core$IFn$_invoke$arity$2((1),expr__35667) : pred__35666.call(null,(1),expr__35667)))){
return true;
} else {
if(cljs.core.truth_((pred__35666.cljs$core$IFn$_invoke$arity$2 ? pred__35666.cljs$core$IFn$_invoke$arity$2((3),expr__35667) : pred__35666.call(null,(3),expr__35667)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__36333 = cljs.core.first(remaining);
var G__36334 = cljs.core.rest(remaining);
clause = G__36333;
remaining = G__36334;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__36335 = cljs.core.first(remaining);
var G__36336 = cljs.core.rest(remaining);
clause = G__36335;
remaining = G__36336;
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
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__35677(s__35678){
return (new cljs.core.LazySeq(null,(function (){
var s__35678__$1 = s__35678;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35678__$1);
if(temp__5735__auto__){
var s__35678__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35678__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35678__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35680 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35679 = (0);
while(true){
if((i__35679 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__35679);
cljs.core.chunk_append(b__35680,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__36340 = (i__35679 + (1));
i__35679 = G__36340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35680),posh$lib$q_analyze$resolve_any_idents_$_iter__35677(cljs.core.chunk_rest(s__35678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35680),null);
}
} else {
var var_value = cljs.core.first(s__35678__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__35677(cljs.core.rest(s__35678__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35726){
var vec__35727 = p__35726;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35735){
var vec__35736 = p__35735;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35736,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35746){
var vec__35750 = p__35746;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35750,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35750,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35754){
var vec__35756 = p__35754;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35756,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35756,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__35763 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__35764 = cljs.core.vec(r);
var fexpr__35762 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__35762.cljs$core$IFn$_invoke$arity$2 ? fexpr__35762.cljs$core$IFn$_invoke$arity$2(G__35763,G__35764) : fexpr__35762.call(null,G__35763,G__35764));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35770){
var vec__35771 = p__35770;
var seq__35772 = cljs.core.seq(vec__35771);
var first__35773 = cljs.core.first(seq__35772);
var seq__35772__$1 = cljs.core.next(seq__35772);
var db = first__35773;
var eav = seq__35772__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35779){
var vec__35780 = p__35779;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__35714_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__35714_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__35714_SHARP_) : linked_qvars.call(null,p1__35714_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__35714_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__35715_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__35715_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__35715_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
