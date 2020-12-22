goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55446){
var map__55448 = p__55446;
var map__55448__$1 = (((((!((map__55448 == null))))?(((((map__55448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55448):map__55448);
var m = map__55448__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55448__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__55456_55640 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55457_55641 = null;
var count__55458_55642 = (0);
var i__55459_55643 = (0);
while(true){
if((i__55459_55643 < count__55458_55642)){
var f_55649 = chunk__55457_55641.cljs$core$IIndexed$_nth$arity$2(null,i__55459_55643);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_55649], 0));


var G__55651 = seq__55456_55640;
var G__55652 = chunk__55457_55641;
var G__55653 = count__55458_55642;
var G__55654 = (i__55459_55643 + (1));
seq__55456_55640 = G__55651;
chunk__55457_55641 = G__55652;
count__55458_55642 = G__55653;
i__55459_55643 = G__55654;
continue;
} else {
var temp__5735__auto___55657 = cljs.core.seq(seq__55456_55640);
if(temp__5735__auto___55657){
var seq__55456_55658__$1 = temp__5735__auto___55657;
if(cljs.core.chunked_seq_QMARK_(seq__55456_55658__$1)){
var c__4556__auto___55659 = cljs.core.chunk_first(seq__55456_55658__$1);
var G__55660 = cljs.core.chunk_rest(seq__55456_55658__$1);
var G__55661 = c__4556__auto___55659;
var G__55662 = cljs.core.count(c__4556__auto___55659);
var G__55663 = (0);
seq__55456_55640 = G__55660;
chunk__55457_55641 = G__55661;
count__55458_55642 = G__55662;
i__55459_55643 = G__55663;
continue;
} else {
var f_55666 = cljs.core.first(seq__55456_55658__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_55666], 0));


var G__55667 = cljs.core.next(seq__55456_55658__$1);
var G__55668 = null;
var G__55669 = (0);
var G__55670 = (0);
seq__55456_55640 = G__55667;
chunk__55457_55641 = G__55668;
count__55458_55642 = G__55669;
i__55459_55643 = G__55670;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55671 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_55671], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_55671)))?cljs.core.second(arglists_55671):arglists_55671)], 0));
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
var seq__55471_55679 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55472_55680 = null;
var count__55473_55681 = (0);
var i__55474_55682 = (0);
while(true){
if((i__55474_55682 < count__55473_55681)){
var vec__55492_55684 = chunk__55472_55680.cljs$core$IIndexed$_nth$arity$2(null,i__55474_55682);
var name_55685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55492_55684,(0),null);
var map__55495_55686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55492_55684,(1),null);
var map__55495_55687__$1 = (((((!((map__55495_55686 == null))))?(((((map__55495_55686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55495_55686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55495_55686):map__55495_55686);
var doc_55688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55495_55687__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55495_55687__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_55685], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_55689], 0));

if(cljs.core.truth_(doc_55688)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_55688], 0));
} else {
}


var G__55690 = seq__55471_55679;
var G__55691 = chunk__55472_55680;
var G__55692 = count__55473_55681;
var G__55693 = (i__55474_55682 + (1));
seq__55471_55679 = G__55690;
chunk__55472_55680 = G__55691;
count__55473_55681 = G__55692;
i__55474_55682 = G__55693;
continue;
} else {
var temp__5735__auto___55696 = cljs.core.seq(seq__55471_55679);
if(temp__5735__auto___55696){
var seq__55471_55697__$1 = temp__5735__auto___55696;
if(cljs.core.chunked_seq_QMARK_(seq__55471_55697__$1)){
var c__4556__auto___55698 = cljs.core.chunk_first(seq__55471_55697__$1);
var G__55699 = cljs.core.chunk_rest(seq__55471_55697__$1);
var G__55700 = c__4556__auto___55698;
var G__55701 = cljs.core.count(c__4556__auto___55698);
var G__55702 = (0);
seq__55471_55679 = G__55699;
chunk__55472_55680 = G__55700;
count__55473_55681 = G__55701;
i__55474_55682 = G__55702;
continue;
} else {
var vec__55503_55703 = cljs.core.first(seq__55471_55697__$1);
var name_55704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55503_55703,(0),null);
var map__55506_55705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55503_55703,(1),null);
var map__55506_55706__$1 = (((((!((map__55506_55705 == null))))?(((((map__55506_55705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55506_55705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55506_55705):map__55506_55705);
var doc_55707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55506_55706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55506_55706__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_55704], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_55708], 0));

if(cljs.core.truth_(doc_55707)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_55707], 0));
} else {
}


var G__55709 = cljs.core.next(seq__55471_55697__$1);
var G__55710 = null;
var G__55711 = (0);
var G__55712 = (0);
seq__55471_55679 = G__55709;
chunk__55472_55680 = G__55710;
count__55473_55681 = G__55711;
i__55474_55682 = G__55712;
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

var seq__55512 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55513 = null;
var count__55514 = (0);
var i__55515 = (0);
while(true){
if((i__55515 < count__55514)){
var role = chunk__55513.cljs$core$IIndexed$_nth$arity$2(null,i__55515);
var temp__5735__auto___55715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___55715__$1)){
var spec_55716 = temp__5735__auto___55715__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_55716)], 0));
} else {
}


var G__55719 = seq__55512;
var G__55720 = chunk__55513;
var G__55721 = count__55514;
var G__55722 = (i__55515 + (1));
seq__55512 = G__55719;
chunk__55513 = G__55720;
count__55514 = G__55721;
i__55515 = G__55722;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__55512);
if(temp__5735__auto____$1){
var seq__55512__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55512__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55512__$1);
var G__55723 = cljs.core.chunk_rest(seq__55512__$1);
var G__55724 = c__4556__auto__;
var G__55725 = cljs.core.count(c__4556__auto__);
var G__55726 = (0);
seq__55512 = G__55723;
chunk__55513 = G__55724;
count__55514 = G__55725;
i__55515 = G__55726;
continue;
} else {
var role = cljs.core.first(seq__55512__$1);
var temp__5735__auto___55727__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___55727__$2)){
var spec_55728 = temp__5735__auto___55727__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_55728)], 0));
} else {
}


var G__55729 = cljs.core.next(seq__55512__$1);
var G__55730 = null;
var G__55731 = (0);
var G__55732 = (0);
seq__55512 = G__55729;
chunk__55513 = G__55730;
count__55514 = G__55731;
i__55515 = G__55732;
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
var G__55737 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__55738 = cljs.core.ex_cause(t);
via = G__55737;
t = G__55738;
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
var map__55543 = datafied_throwable;
var map__55543__$1 = (((((!((map__55543 == null))))?(((((map__55543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55543):map__55543);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55543__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55543__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55543__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__55544 = cljs.core.last(via);
var map__55544__$1 = (((((!((map__55544 == null))))?(((((map__55544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55544):map__55544);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55544__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55544__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__55545 = data;
var map__55545__$1 = (((((!((map__55545 == null))))?(((((map__55545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55545):map__55545);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55545__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55545__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55545__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__55546 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__55546__$1 = (((((!((map__55546 == null))))?(((((map__55546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55546):map__55546);
var top_data = map__55546__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__55551 = phase;
var G__55551__$1 = (((G__55551 instanceof cljs.core.Keyword))?G__55551.fqn:null);
switch (G__55551__$1) {
case "read-source":
var map__55552 = data;
var map__55552__$1 = (((((!((map__55552 == null))))?(((((map__55552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55552):map__55552);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55552__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55552__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__55554 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__55554__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55554,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55554);
var G__55554__$2 = (cljs.core.truth_((function (){var fexpr__55555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55555.cljs$core$IFn$_invoke$arity$1 ? fexpr__55555.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55555.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55554__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55554__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55554__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55554__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__55559 = top_data;
var G__55559__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55559,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55559);
var G__55559__$2 = (cljs.core.truth_((function (){var fexpr__55560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55560.cljs$core$IFn$_invoke$arity$1 ? fexpr__55560.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55560.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55559__$1);
var G__55559__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55559__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55559__$2);
var G__55559__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55559__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55559__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55559__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55559__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__55561 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(3),null);
var G__55564 = top_data;
var G__55564__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55564,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__55564);
var G__55564__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55564__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__55564__$1);
var G__55564__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55564__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__55564__$2);
var G__55564__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55564__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55564__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55564__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55564__$4;
}

break;
case "execution":
var vec__55566 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55566,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55566,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55566,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55566,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55542_SHARP_){
var or__4126__auto__ = (p1__55542_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__55570 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55570.cljs$core$IFn$_invoke$arity$1 ? fexpr__55570.cljs$core$IFn$_invoke$arity$1(p1__55542_SHARP_) : fexpr__55570.call(null,p1__55542_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__55571 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__55571__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55571,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__55571);
var G__55571__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55571__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55571__$1);
var G__55571__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55571__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__55571__$2);
var G__55571__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55571__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__55571__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55571__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55571__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55551__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__55574){
var map__55575 = p__55574;
var map__55575__$1 = (((((!((map__55575 == null))))?(((((map__55575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55575):map__55575);
var triage_data = map__55575__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55575__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__55582 = phase;
var G__55582__$1 = (((G__55582 instanceof cljs.core.Keyword))?G__55582.fqn:null);
switch (G__55582__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__55585 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__55586 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55587 = loc;
var G__55588 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55589_55820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55590_55821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55591_55822 = true;
var _STAR_print_fn_STAR__temp_val__55592_55823 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55591_55822);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55592_55823);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55572_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55572_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55590_55821);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55589_55820);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55585,G__55586,G__55587,G__55588) : format.call(null,G__55585,G__55586,G__55587,G__55588));

break;
case "macroexpansion":
var G__55595 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__55596 = cause_type;
var G__55597 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55598 = loc;
var G__55599 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55595,G__55596,G__55597,G__55598,G__55599) : format.call(null,G__55595,G__55596,G__55597,G__55598,G__55599));

break;
case "compile-syntax-check":
var G__55600 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__55601 = cause_type;
var G__55602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55603 = loc;
var G__55604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55600,G__55601,G__55602,G__55603,G__55604) : format.call(null,G__55600,G__55601,G__55602,G__55603,G__55604));

break;
case "compilation":
var G__55605 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__55606 = cause_type;
var G__55607 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55608 = loc;
var G__55609 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55605,G__55606,G__55607,G__55608,G__55609) : format.call(null,G__55605,G__55606,G__55607,G__55608,G__55609));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__55610 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__55611 = symbol;
var G__55612 = loc;
var G__55613 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55614_55843 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55615_55844 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55616_55845 = true;
var _STAR_print_fn_STAR__temp_val__55617_55846 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55616_55845);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55617_55846);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55573_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55573_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55615_55844);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55614_55843);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55610,G__55611,G__55612,G__55613) : format.call(null,G__55610,G__55611,G__55612,G__55613));
} else {
var G__55618 = "Execution error%s at %s(%s).\n%s\n";
var G__55620 = cause_type;
var G__55621 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55622 = loc;
var G__55623 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55618,G__55620,G__55621,G__55622,G__55623) : format.call(null,G__55618,G__55620,G__55621,G__55622,G__55623));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55582__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
