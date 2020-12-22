goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47699){
var map__47701 = p__47699;
var map__47701__$1 = (((((!((map__47701 == null))))?(((((map__47701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47701):map__47701);
var m = map__47701__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47701__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47713_48008 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47715_48009 = null;
var count__47716_48010 = (0);
var i__47717_48011 = (0);
while(true){
if((i__47717_48011 < count__47716_48010)){
var f_48014 = chunk__47715_48009.cljs$core$IIndexed$_nth$arity$2(null,i__47717_48011);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48014], 0));


var G__48017 = seq__47713_48008;
var G__48018 = chunk__47715_48009;
var G__48019 = count__47716_48010;
var G__48020 = (i__47717_48011 + (1));
seq__47713_48008 = G__48017;
chunk__47715_48009 = G__48018;
count__47716_48010 = G__48019;
i__47717_48011 = G__48020;
continue;
} else {
var temp__5735__auto___48022 = cljs.core.seq(seq__47713_48008);
if(temp__5735__auto___48022){
var seq__47713_48023__$1 = temp__5735__auto___48022;
if(cljs.core.chunked_seq_QMARK_(seq__47713_48023__$1)){
var c__4556__auto___48024 = cljs.core.chunk_first(seq__47713_48023__$1);
var G__48025 = cljs.core.chunk_rest(seq__47713_48023__$1);
var G__48026 = c__4556__auto___48024;
var G__48027 = cljs.core.count(c__4556__auto___48024);
var G__48028 = (0);
seq__47713_48008 = G__48025;
chunk__47715_48009 = G__48026;
count__47716_48010 = G__48027;
i__47717_48011 = G__48028;
continue;
} else {
var f_48029 = cljs.core.first(seq__47713_48023__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48029], 0));


var G__48030 = cljs.core.next(seq__47713_48023__$1);
var G__48031 = null;
var G__48032 = (0);
var G__48033 = (0);
seq__47713_48008 = G__48030;
chunk__47715_48009 = G__48031;
count__47716_48010 = G__48032;
i__47717_48011 = G__48033;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48034 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48034], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48034)))?cljs.core.second(arglists_48034):arglists_48034)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47736_48039 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47737_48040 = null;
var count__47738_48041 = (0);
var i__47739_48042 = (0);
while(true){
if((i__47739_48042 < count__47738_48041)){
var vec__47758_48044 = chunk__47737_48040.cljs$core$IIndexed$_nth$arity$2(null,i__47739_48042);
var name_48045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47758_48044,(0),null);
var map__47761_48046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47758_48044,(1),null);
var map__47761_48047__$1 = (((((!((map__47761_48046 == null))))?(((((map__47761_48046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47761_48046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47761_48046):map__47761_48046);
var doc_48048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47761_48047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47761_48047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48049], 0));

if(cljs.core.truth_(doc_48048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48048], 0));
} else {
}


var G__48056 = seq__47736_48039;
var G__48057 = chunk__47737_48040;
var G__48058 = count__47738_48041;
var G__48059 = (i__47739_48042 + (1));
seq__47736_48039 = G__48056;
chunk__47737_48040 = G__48057;
count__47738_48041 = G__48058;
i__47739_48042 = G__48059;
continue;
} else {
var temp__5735__auto___48060 = cljs.core.seq(seq__47736_48039);
if(temp__5735__auto___48060){
var seq__47736_48061__$1 = temp__5735__auto___48060;
if(cljs.core.chunked_seq_QMARK_(seq__47736_48061__$1)){
var c__4556__auto___48062 = cljs.core.chunk_first(seq__47736_48061__$1);
var G__48063 = cljs.core.chunk_rest(seq__47736_48061__$1);
var G__48064 = c__4556__auto___48062;
var G__48065 = cljs.core.count(c__4556__auto___48062);
var G__48066 = (0);
seq__47736_48039 = G__48063;
chunk__47737_48040 = G__48064;
count__47738_48041 = G__48065;
i__47739_48042 = G__48066;
continue;
} else {
var vec__47770_48069 = cljs.core.first(seq__47736_48061__$1);
var name_48070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770_48069,(0),null);
var map__47773_48071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770_48069,(1),null);
var map__47773_48072__$1 = (((((!((map__47773_48071 == null))))?(((((map__47773_48071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47773_48071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47773_48071):map__47773_48071);
var doc_48073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47773_48072__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47773_48072__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48070], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48074], 0));

if(cljs.core.truth_(doc_48073)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48073], 0));
} else {
}


var G__48084 = cljs.core.next(seq__47736_48061__$1);
var G__48085 = null;
var G__48086 = (0);
var G__48087 = (0);
seq__47736_48039 = G__48084;
chunk__47737_48040 = G__48085;
count__47738_48041 = G__48086;
i__47739_48042 = G__48087;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__47781 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47782 = null;
var count__47783 = (0);
var i__47784 = (0);
while(true){
if((i__47784 < count__47783)){
var role = chunk__47782.cljs$core$IIndexed$_nth$arity$2(null,i__47784);
var temp__5735__auto___48090__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___48090__$1)){
var spec_48091 = temp__5735__auto___48090__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48091)], 0));
} else {
}


var G__48094 = seq__47781;
var G__48095 = chunk__47782;
var G__48096 = count__47783;
var G__48097 = (i__47784 + (1));
seq__47781 = G__48094;
chunk__47782 = G__48095;
count__47783 = G__48096;
i__47784 = G__48097;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__47781);
if(temp__5735__auto____$1){
var seq__47781__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47781__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47781__$1);
var G__48104 = cljs.core.chunk_rest(seq__47781__$1);
var G__48105 = c__4556__auto__;
var G__48106 = cljs.core.count(c__4556__auto__);
var G__48107 = (0);
seq__47781 = G__48104;
chunk__47782 = G__48105;
count__47783 = G__48106;
i__47784 = G__48107;
continue;
} else {
var role = cljs.core.first(seq__47781__$1);
var temp__5735__auto___48110__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___48110__$2)){
var spec_48113 = temp__5735__auto___48110__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48113)], 0));
} else {
}


var G__48115 = cljs.core.next(seq__47781__$1);
var G__48116 = null;
var G__48117 = (0);
var G__48118 = (0);
seq__47781 = G__48115;
chunk__47782 = G__48116;
count__47783 = G__48117;
i__47784 = G__48118;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__48128 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__48129 = cljs.core.ex_cause(t);
via = G__48128;
t = G__48129;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__47848 = datafied_throwable;
var map__47848__$1 = (((((!((map__47848 == null))))?(((((map__47848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47848):map__47848);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47848__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47848__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47848__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47849 = cljs.core.last(via);
var map__47849__$1 = (((((!((map__47849 == null))))?(((((map__47849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47849):map__47849);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47849__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47849__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47850 = data;
var map__47850__$1 = (((((!((map__47850 == null))))?(((((map__47850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47850):map__47850);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47850__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47850__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47850__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47852 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__47852__$1 = (((((!((map__47852 == null))))?(((((map__47852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47852):map__47852);
var top_data = map__47852__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47873 = phase;
var G__47873__$1 = (((G__47873 instanceof cljs.core.Keyword))?G__47873.fqn:null);
switch (G__47873__$1) {
case "read-source":
var map__47878 = data;
var map__47878__$1 = (((((!((map__47878 == null))))?(((((map__47878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47878):map__47878);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47878__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47878__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47887 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__47887__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47887,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47887);
var G__47887__$2 = (cljs.core.truth_((function (){var fexpr__47889 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47889.cljs$core$IFn$_invoke$arity$1 ? fexpr__47889.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47889.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47887__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47887__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47887__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47892 = top_data;
var G__47892__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47892,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47892);
var G__47892__$2 = (cljs.core.truth_((function (){var fexpr__47896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47896.cljs$core$IFn$_invoke$arity$1 ? fexpr__47896.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47896.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47892__$1);
var G__47892__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47892__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47892__$2);
var G__47892__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47892__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47892__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47892__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47892__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47904 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(3),null);
var G__47907 = top_data;
var G__47907__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47907,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47907);
var G__47907__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47907__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47907__$1);
var G__47907__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47907__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47907__$2);
var G__47907__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47907__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47907__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47907__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47907__$4;
}

break;
case "execution":
var vec__47915 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47846_SHARP_){
var or__4126__auto__ = (p1__47846_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__47922 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47922.cljs$core$IFn$_invoke$arity$1 ? fexpr__47922.cljs$core$IFn$_invoke$arity$1(p1__47846_SHARP_) : fexpr__47922.call(null,p1__47846_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__47928 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47928__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47928,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47928);
var G__47928__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47928__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47928__$1);
var G__47928__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47928__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47928__$2);
var G__47928__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47928__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47928__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47928__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47928__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47873__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47933){
var map__47934 = p__47933;
var map__47934__$1 = (((((!((map__47934 == null))))?(((((map__47934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47934):map__47934);
var triage_data = map__47934__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__47946 = phase;
var G__47946__$1 = (((G__47946 instanceof cljs.core.Keyword))?G__47946.fqn:null);
switch (G__47946__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__47947 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__47948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47949 = loc;
var G__47950 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47953_48242 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47954_48243 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47955_48244 = true;
var _STAR_print_fn_STAR__temp_val__47956_48245 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47955_48244);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47956_48245);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47931_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47931_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47954_48243);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47953_48242);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47947,G__47948,G__47949,G__47950) : format.call(null,G__47947,G__47948,G__47949,G__47950));

break;
case "macroexpansion":
var G__47961 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__47962 = cause_type;
var G__47963 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47964 = loc;
var G__47965 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47961,G__47962,G__47963,G__47964,G__47965) : format.call(null,G__47961,G__47962,G__47963,G__47964,G__47965));

break;
case "compile-syntax-check":
var G__47970 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__47971 = cause_type;
var G__47972 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47973 = loc;
var G__47974 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47970,G__47971,G__47972,G__47973,G__47974) : format.call(null,G__47970,G__47971,G__47972,G__47973,G__47974));

break;
case "compilation":
var G__47976 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__47977 = cause_type;
var G__47978 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47979 = loc;
var G__47980 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47976,G__47977,G__47978,G__47979,G__47980) : format.call(null,G__47976,G__47977,G__47978,G__47979,G__47980));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__47981 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__47982 = symbol;
var G__47983 = loc;
var G__47984 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47986_48267 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47987_48268 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47988_48269 = true;
var _STAR_print_fn_STAR__temp_val__47989_48270 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47988_48269);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47989_48270);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47932_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47932_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47987_48268);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47986_48267);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47981,G__47982,G__47983,G__47984) : format.call(null,G__47981,G__47982,G__47983,G__47984));
} else {
var G__47992 = "Execution error%s at %s(%s).\n%s\n";
var G__47993 = cause_type;
var G__47994 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47995 = loc;
var G__47996 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47992,G__47993,G__47994,G__47995,G__47996) : format.call(null,G__47992,G__47993,G__47994,G__47995,G__47996));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47946__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
