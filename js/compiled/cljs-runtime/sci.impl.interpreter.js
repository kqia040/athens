goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__63863 = xs;
args__$2 = G__63863;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__63864 = xs;
args__$2 = G__63864;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63865 = arguments.length;
var i__4737__auto___63866 = (0);
while(true){
if((i__4737__auto___63866 < len__4736__auto___63865)){
args__4742__auto__.push((arguments[i__4737__auto___63866]));

var G__63867 = (i__4737__auto___63866 + (1));
i__4737__auto___63866 = G__63867;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__63868 = ctx__$2;
var G__63869 = rest_let_bindings;
ctx__$1 = G__63868;
let_bindings__$1 = G__63869;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__63870 = nexprs;
exprs__$1 = G__63870;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq63078){
var G__63079 = cljs.core.first(seq63078);
var seq63078__$1 = cljs.core.next(seq63078);
var G__63080 = cljs.core.first(seq63078__$1);
var seq63078__$2 = cljs.core.next(seq63078__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63079,G__63080,seq63078__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__63084){
var vec__63085 = p__63084;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63085,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63085,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63085,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63085,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__63091 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63091,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__63091;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__63092 = libspec;
var seq__63093 = cljs.core.seq(vec__63092);
var first__63094 = cljs.core.first(seq__63093);
var seq__63093__$1 = cljs.core.next(seq__63093);
var lib_name = first__63094;
var opts = seq__63093__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__63098 = opts;
var vec__63099 = G__63098;
var seq__63100 = cljs.core.seq(vec__63099);
var first__63101 = cljs.core.first(seq__63100);
var seq__63100__$1 = cljs.core.next(seq__63100);
var opt_name = first__63101;
var first__63101__$1 = cljs.core.first(seq__63100__$1);
var seq__63100__$2 = cljs.core.next(seq__63100__$1);
var fst_opt = first__63101__$1;
var rst_opts = seq__63100__$2;
var ret__$1 = ret;
var G__63098__$1 = G__63098;
while(true){
var ret__$2 = ret__$1;
var vec__63106 = G__63098__$1;
var seq__63107 = cljs.core.seq(vec__63106);
var first__63108 = cljs.core.first(seq__63107);
var seq__63107__$1 = cljs.core.next(seq__63107);
var opt_name__$1 = first__63108;
var first__63108__$1 = cljs.core.first(seq__63107__$1);
var seq__63107__$2 = cljs.core.next(seq__63107__$1);
var fst_opt__$1 = first__63108__$1;
var rst_opts__$1 = seq__63107__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__63109 = opt_name__$1;
var G__63109__$1 = (((G__63109 instanceof cljs.core.Keyword))?G__63109.fqn:null);
switch (G__63109__$1) {
case "as":
var G__63872 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__63873 = rst_opts__$1;
ret__$1 = G__63872;
G__63098__$1 = G__63873;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__63874 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__63875 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__63874;
G__63098__$1 = G__63875;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__63876 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__63877 = rst_opts__$1;
ret__$1 = G__63876;
G__63098__$1 = G__63877;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63109__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__63110){
var vec__63111 = p__63110;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63111,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__63117){
var map__63118 = p__63117;
var map__63118__$1 = (((((!((map__63118 == null))))?(((((map__63118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63118):map__63118);
var _parsed_libspec = map__63118__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63118__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63118__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63118__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63118__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63118__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63120 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63120,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__63123 = sci.impl.interpreter.parse_libspec(libspec);
var map__63123__$1 = (((((!((map__63123 == null))))?(((((map__63123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63123):map__63123);
var parsed_libspec = map__63123__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63123__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63123__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__63125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__63125) : load_fn.call(null,G__63125));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__63126 = temp__5733__auto____$2;
var map__63126__$1 = (((((!((map__63126 == null))))?(((((map__63126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63126):map__63126);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63126__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__63129_63886 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__63130_63887 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__63129_63886,G__63130_63887) : sci.impl.interpreter.eval_string_STAR_.call(null,G__63129_63886,G__63130_63887));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e63128){if((e63128 instanceof Error)){
var e_63888 = e63128;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_63888;
} else {
throw e63128;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63898 = arguments.length;
var i__4737__auto___63899 = (0);
while(true){
if((i__4737__auto___63899 < len__4736__auto___63898)){
args__4742__auto__.push((arguments[i__4737__auto___63899]));

var G__63901 = (i__4737__auto___63899 + (1));
i__4737__auto___63899 = G__63901;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__63142 = ctx;
var G__63143 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63142,G__63143) : sci.impl.interpreter.interpret.call(null,G__63142,G__63143));
})();
if((ret instanceof cljs.core.Symbol)){
var G__63905 = (function (){var G__63144 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63144,current_libspec);
} else {
return G__63144;
}
})();
var G__63906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__63907 = cljs.core.next(args__$1);
libspecs = G__63905;
current_libspec = G__63906;
args__$1 = G__63907;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__63909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__63910 = null;
var G__63911 = cljs.core.next(args__$1);
libspecs = G__63909;
current_libspec = G__63910;
args__$1 = G__63911;
continue;
} else {
var G__63915 = (function (){var G__63145 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63145,current_libspec);
} else {
return G__63145;
}
})();
var G__63916 = ret;
var G__63917 = cljs.core.next(args__$1);
libspecs = G__63915;
current_libspec = G__63916;
args__$1 = G__63917;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__63146 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63146,current_libspec);
} else {
return G__63146;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__63134_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__63134_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq63135){
var G__63136 = cljs.core.first(seq63135);
var seq63135__$1 = cljs.core.next(seq63135);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63136,seq63135__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63918 = arguments.length;
var i__4737__auto___63919 = (0);
while(true){
if((i__4737__auto___63919 < len__4736__auto___63918)){
args__4742__auto__.push((arguments[i__4737__auto___63919]));

var G__63920 = (i__4737__auto___63919 + (1));
i__4737__auto___63919 = G__63920;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq63147){
var G__63148 = cljs.core.first(seq63147);
var seq63147__$1 = cljs.core.next(seq63147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63148,seq63147__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__63149){
var vec__63150 = p__63149;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63150,(0),null);
var map__63153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63150,(1),null);
var map__63153__$1 = (((((!((map__63153 == null))))?(((((map__63153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63153):map__63153);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63153__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63153__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63153__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63156 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63156,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63156,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__63159 = ctx;
var G__63160 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63159,G__63160) : sci.impl.interpreter.interpret.call(null,G__63159,G__63160));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__63161 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__63161__$1 = (((((!((map__63161 == null))))?(((((map__63161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63161):map__63161);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__63169 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__63170 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__63170);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__63169);
}}catch (e63163){if((e63163 instanceof Error)){
var e = e63163;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__63164 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__63165 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63164,G__63165) : sci.impl.interpreter.interpret.call(null,G__63164,G__63165));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63166 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63166,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63166,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e63163;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__63174){
var vec__63175 = p__63174;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63175,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63175,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63178_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63178_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63178_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__63180){
var vec__63181 = p__63180;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63181,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63181,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63181,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63179_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63179_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63179_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__63186,p__63187){
var map__63189 = p__63186;
var map__63189__$1 = (((((!((map__63189 == null))))?(((((map__63189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63189):map__63189);
var ctx = map__63189__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63189__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__63190 = p__63187;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63190,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63190,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63190,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63190,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63185_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63185_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63185_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__63196){
var vec__63197 = p__63196;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63197,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63197,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__63200){
var vec__63201 = p__63200;
var seq__63202 = cljs.core.seq(vec__63201);
var first__63203 = cljs.core.first(seq__63202);
var seq__63202__$1 = cljs.core.next(seq__63202);
var _ = first__63203;
var first__63203__$1 = cljs.core.first(seq__63202__$1);
var seq__63202__$2 = cljs.core.next(seq__63202__$1);
var ns_sym = first__63203__$1;
var exprs = seq__63202__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__63204 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63204,(1),null);
var G__63207_63931 = k;
var G__63207_63932__$1 = (((G__63207_63931 instanceof cljs.core.Keyword))?G__63207_63931.fqn:null);
switch (G__63207_63932__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__63207_63931,G__63207_63932__$1,vec__63204,k,v,ns_sym__$1,vec__63201,seq__63202,first__63203,seq__63202__$1,_,first__63203__$1,seq__63202__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__63207_63931,G__63207_63932__$1,vec__63204,k,v,ns_sym__$1,vec__63201,seq__63202,first__63203,seq__63202__$1,_,first__63203__$1,seq__63202__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63207_63932__$1)].join('')));

}

var G__63935 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__63935;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__63216){
var vec__63218 = p__63216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63218,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63218,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63218,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__63224 = exprs;
var vec__63226 = G__63224;
var seq__63227 = cljs.core.seq(vec__63226);
var first__63228 = cljs.core.first(seq__63227);
var seq__63227__$1 = cljs.core.next(seq__63227);
var expr = first__63228;
var exprs__$1 = seq__63227__$1;
var G__63224__$1 = G__63224;
while(true){
var vec__63231 = G__63224__$1;
var seq__63232 = cljs.core.seq(vec__63231);
var first__63233 = cljs.core.first(seq__63232);
var seq__63232__$1 = cljs.core.next(seq__63232);
var expr__$1 = first__63233;
var exprs__$2 = seq__63232__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e63234){if((e63234 instanceof Error)){
var e = e63234;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e63234;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__63943 = exprs__$3;
G__63224__$1 = G__63943;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__63427 = cljs.core.count(args);
switch (G__63427) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg63237 = (function (){var G__63428 = ctx;
var G__63429 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63428,G__63429) : sci.impl.interpreter.interpret.call(null,G__63428,G__63429));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg63237) : f.call(null,arg63237));

break;
case (2):
var arg63238 = (function (){var G__63430 = ctx;
var G__63431 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63430,G__63431) : sci.impl.interpreter.interpret.call(null,G__63430,G__63431));
})();
var args__$1 = cljs.core.rest(args);
var arg63239 = (function (){var G__63432 = ctx;
var G__63433 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63432,G__63433) : sci.impl.interpreter.interpret.call(null,G__63432,G__63433));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg63238,arg63239) : f.call(null,arg63238,arg63239));

break;
case (3):
var arg63240 = (function (){var G__63434 = ctx;
var G__63435 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63434,G__63435) : sci.impl.interpreter.interpret.call(null,G__63434,G__63435));
})();
var args__$1 = cljs.core.rest(args);
var arg63241 = (function (){var G__63436 = ctx;
var G__63437 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63436,G__63437) : sci.impl.interpreter.interpret.call(null,G__63436,G__63437));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63242 = (function (){var G__63438 = ctx;
var G__63439 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63438,G__63439) : sci.impl.interpreter.interpret.call(null,G__63438,G__63439));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg63240,arg63241,arg63242) : f.call(null,arg63240,arg63241,arg63242));

break;
case (4):
var arg63243 = (function (){var G__63440 = ctx;
var G__63441 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63440,G__63441) : sci.impl.interpreter.interpret.call(null,G__63440,G__63441));
})();
var args__$1 = cljs.core.rest(args);
var arg63244 = (function (){var G__63442 = ctx;
var G__63443 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63442,G__63443) : sci.impl.interpreter.interpret.call(null,G__63442,G__63443));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63245 = (function (){var G__63444 = ctx;
var G__63445 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63444,G__63445) : sci.impl.interpreter.interpret.call(null,G__63444,G__63445));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63246 = (function (){var G__63446 = ctx;
var G__63447 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63446,G__63447) : sci.impl.interpreter.interpret.call(null,G__63446,G__63447));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg63243,arg63244,arg63245,arg63246) : f.call(null,arg63243,arg63244,arg63245,arg63246));

break;
case (5):
var arg63247 = (function (){var G__63448 = ctx;
var G__63449 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63448,G__63449) : sci.impl.interpreter.interpret.call(null,G__63448,G__63449));
})();
var args__$1 = cljs.core.rest(args);
var arg63248 = (function (){var G__63450 = ctx;
var G__63451 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63450,G__63451) : sci.impl.interpreter.interpret.call(null,G__63450,G__63451));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63249 = (function (){var G__63452 = ctx;
var G__63453 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63452,G__63453) : sci.impl.interpreter.interpret.call(null,G__63452,G__63453));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63250 = (function (){var G__63456 = ctx;
var G__63457 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63456,G__63457) : sci.impl.interpreter.interpret.call(null,G__63456,G__63457));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63251 = (function (){var G__63459 = ctx;
var G__63460 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63459,G__63460) : sci.impl.interpreter.interpret.call(null,G__63459,G__63460));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg63247,arg63248,arg63249,arg63250,arg63251) : f.call(null,arg63247,arg63248,arg63249,arg63250,arg63251));

break;
case (6):
var arg63252 = (function (){var G__63461 = ctx;
var G__63462 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63461,G__63462) : sci.impl.interpreter.interpret.call(null,G__63461,G__63462));
})();
var args__$1 = cljs.core.rest(args);
var arg63253 = (function (){var G__63463 = ctx;
var G__63464 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63463,G__63464) : sci.impl.interpreter.interpret.call(null,G__63463,G__63464));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63254 = (function (){var G__63465 = ctx;
var G__63466 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63465,G__63466) : sci.impl.interpreter.interpret.call(null,G__63465,G__63466));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63255 = (function (){var G__63467 = ctx;
var G__63468 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63467,G__63468) : sci.impl.interpreter.interpret.call(null,G__63467,G__63468));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63256 = (function (){var G__63469 = ctx;
var G__63470 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63469,G__63470) : sci.impl.interpreter.interpret.call(null,G__63469,G__63470));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63257 = (function (){var G__63471 = ctx;
var G__63472 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63471,G__63472) : sci.impl.interpreter.interpret.call(null,G__63471,G__63472));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg63252,arg63253,arg63254,arg63255,arg63256,arg63257) : f.call(null,arg63252,arg63253,arg63254,arg63255,arg63256,arg63257));

break;
case (7):
var arg63258 = (function (){var G__63474 = ctx;
var G__63475 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63474,G__63475) : sci.impl.interpreter.interpret.call(null,G__63474,G__63475));
})();
var args__$1 = cljs.core.rest(args);
var arg63259 = (function (){var G__63479 = ctx;
var G__63480 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63479,G__63480) : sci.impl.interpreter.interpret.call(null,G__63479,G__63480));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63260 = (function (){var G__63481 = ctx;
var G__63482 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63481,G__63482) : sci.impl.interpreter.interpret.call(null,G__63481,G__63482));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63261 = (function (){var G__63483 = ctx;
var G__63484 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63483,G__63484) : sci.impl.interpreter.interpret.call(null,G__63483,G__63484));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63262 = (function (){var G__63485 = ctx;
var G__63486 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63485,G__63486) : sci.impl.interpreter.interpret.call(null,G__63485,G__63486));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63263 = (function (){var G__63487 = ctx;
var G__63488 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63487,G__63488) : sci.impl.interpreter.interpret.call(null,G__63487,G__63488));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63264 = (function (){var G__63489 = ctx;
var G__63490 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63489,G__63490) : sci.impl.interpreter.interpret.call(null,G__63489,G__63490));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg63258,arg63259,arg63260,arg63261,arg63262,arg63263,arg63264) : f.call(null,arg63258,arg63259,arg63260,arg63261,arg63262,arg63263,arg63264));

break;
case (8):
var arg63265 = (function (){var G__63491 = ctx;
var G__63492 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63491,G__63492) : sci.impl.interpreter.interpret.call(null,G__63491,G__63492));
})();
var args__$1 = cljs.core.rest(args);
var arg63266 = (function (){var G__63493 = ctx;
var G__63494 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63493,G__63494) : sci.impl.interpreter.interpret.call(null,G__63493,G__63494));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63267 = (function (){var G__63495 = ctx;
var G__63496 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63495,G__63496) : sci.impl.interpreter.interpret.call(null,G__63495,G__63496));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63268 = (function (){var G__63497 = ctx;
var G__63498 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63497,G__63498) : sci.impl.interpreter.interpret.call(null,G__63497,G__63498));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63269 = (function (){var G__63499 = ctx;
var G__63500 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63499,G__63500) : sci.impl.interpreter.interpret.call(null,G__63499,G__63500));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63270 = (function (){var G__63501 = ctx;
var G__63502 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63501,G__63502) : sci.impl.interpreter.interpret.call(null,G__63501,G__63502));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63271 = (function (){var G__63503 = ctx;
var G__63504 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63503,G__63504) : sci.impl.interpreter.interpret.call(null,G__63503,G__63504));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63272 = (function (){var G__63505 = ctx;
var G__63506 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63505,G__63506) : sci.impl.interpreter.interpret.call(null,G__63505,G__63506));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg63265,arg63266,arg63267,arg63268,arg63269,arg63270,arg63271,arg63272) : f.call(null,arg63265,arg63266,arg63267,arg63268,arg63269,arg63270,arg63271,arg63272));

break;
case (9):
var arg63273 = (function (){var G__63507 = ctx;
var G__63508 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63507,G__63508) : sci.impl.interpreter.interpret.call(null,G__63507,G__63508));
})();
var args__$1 = cljs.core.rest(args);
var arg63274 = (function (){var G__63509 = ctx;
var G__63510 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63509,G__63510) : sci.impl.interpreter.interpret.call(null,G__63509,G__63510));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63275 = (function (){var G__63511 = ctx;
var G__63512 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63511,G__63512) : sci.impl.interpreter.interpret.call(null,G__63511,G__63512));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63276 = (function (){var G__63513 = ctx;
var G__63514 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63513,G__63514) : sci.impl.interpreter.interpret.call(null,G__63513,G__63514));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63277 = (function (){var G__63515 = ctx;
var G__63516 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63515,G__63516) : sci.impl.interpreter.interpret.call(null,G__63515,G__63516));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63278 = (function (){var G__63517 = ctx;
var G__63518 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63517,G__63518) : sci.impl.interpreter.interpret.call(null,G__63517,G__63518));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63279 = (function (){var G__63519 = ctx;
var G__63520 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63519,G__63520) : sci.impl.interpreter.interpret.call(null,G__63519,G__63520));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63280 = (function (){var G__63521 = ctx;
var G__63522 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63521,G__63522) : sci.impl.interpreter.interpret.call(null,G__63521,G__63522));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63281 = (function (){var G__63523 = ctx;
var G__63524 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63523,G__63524) : sci.impl.interpreter.interpret.call(null,G__63523,G__63524));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg63273,arg63274,arg63275,arg63276,arg63277,arg63278,arg63279,arg63280,arg63281) : f.call(null,arg63273,arg63274,arg63275,arg63276,arg63277,arg63278,arg63279,arg63280,arg63281));

break;
case (10):
var arg63282 = (function (){var G__63525 = ctx;
var G__63526 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63525,G__63526) : sci.impl.interpreter.interpret.call(null,G__63525,G__63526));
})();
var args__$1 = cljs.core.rest(args);
var arg63283 = (function (){var G__63527 = ctx;
var G__63528 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63527,G__63528) : sci.impl.interpreter.interpret.call(null,G__63527,G__63528));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63284 = (function (){var G__63529 = ctx;
var G__63530 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63529,G__63530) : sci.impl.interpreter.interpret.call(null,G__63529,G__63530));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63285 = (function (){var G__63531 = ctx;
var G__63532 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63531,G__63532) : sci.impl.interpreter.interpret.call(null,G__63531,G__63532));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63286 = (function (){var G__63533 = ctx;
var G__63534 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63533,G__63534) : sci.impl.interpreter.interpret.call(null,G__63533,G__63534));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63287 = (function (){var G__63535 = ctx;
var G__63536 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63535,G__63536) : sci.impl.interpreter.interpret.call(null,G__63535,G__63536));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63288 = (function (){var G__63537 = ctx;
var G__63538 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63537,G__63538) : sci.impl.interpreter.interpret.call(null,G__63537,G__63538));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63289 = (function (){var G__63539 = ctx;
var G__63540 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63539,G__63540) : sci.impl.interpreter.interpret.call(null,G__63539,G__63540));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63290 = (function (){var G__63541 = ctx;
var G__63542 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63541,G__63542) : sci.impl.interpreter.interpret.call(null,G__63541,G__63542));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63291 = (function (){var G__63543 = ctx;
var G__63544 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63543,G__63544) : sci.impl.interpreter.interpret.call(null,G__63543,G__63544));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg63282,arg63283,arg63284,arg63285,arg63286,arg63287,arg63288,arg63289,arg63290,arg63291) : f.call(null,arg63282,arg63283,arg63284,arg63285,arg63286,arg63287,arg63288,arg63289,arg63290,arg63291));

break;
case (11):
var arg63292 = (function (){var G__63545 = ctx;
var G__63546 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63545,G__63546) : sci.impl.interpreter.interpret.call(null,G__63545,G__63546));
})();
var args__$1 = cljs.core.rest(args);
var arg63293 = (function (){var G__63547 = ctx;
var G__63548 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63547,G__63548) : sci.impl.interpreter.interpret.call(null,G__63547,G__63548));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63294 = (function (){var G__63549 = ctx;
var G__63550 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63549,G__63550) : sci.impl.interpreter.interpret.call(null,G__63549,G__63550));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63295 = (function (){var G__63551 = ctx;
var G__63552 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63551,G__63552) : sci.impl.interpreter.interpret.call(null,G__63551,G__63552));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63296 = (function (){var G__63553 = ctx;
var G__63554 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63553,G__63554) : sci.impl.interpreter.interpret.call(null,G__63553,G__63554));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63297 = (function (){var G__63555 = ctx;
var G__63556 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63555,G__63556) : sci.impl.interpreter.interpret.call(null,G__63555,G__63556));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63298 = (function (){var G__63557 = ctx;
var G__63558 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63557,G__63558) : sci.impl.interpreter.interpret.call(null,G__63557,G__63558));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63299 = (function (){var G__63559 = ctx;
var G__63560 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63559,G__63560) : sci.impl.interpreter.interpret.call(null,G__63559,G__63560));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63300 = (function (){var G__63561 = ctx;
var G__63562 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63561,G__63562) : sci.impl.interpreter.interpret.call(null,G__63561,G__63562));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63301 = (function (){var G__63564 = ctx;
var G__63565 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63564,G__63565) : sci.impl.interpreter.interpret.call(null,G__63564,G__63565));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63302 = (function (){var G__63566 = ctx;
var G__63567 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63566,G__63567) : sci.impl.interpreter.interpret.call(null,G__63566,G__63567));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg63292,arg63293,arg63294,arg63295,arg63296,arg63297,arg63298,arg63299,arg63300,arg63301,arg63302) : f.call(null,arg63292,arg63293,arg63294,arg63295,arg63296,arg63297,arg63298,arg63299,arg63300,arg63301,arg63302));

break;
case (12):
var arg63303 = (function (){var G__63568 = ctx;
var G__63569 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63568,G__63569) : sci.impl.interpreter.interpret.call(null,G__63568,G__63569));
})();
var args__$1 = cljs.core.rest(args);
var arg63304 = (function (){var G__63570 = ctx;
var G__63571 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63570,G__63571) : sci.impl.interpreter.interpret.call(null,G__63570,G__63571));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63305 = (function (){var G__63572 = ctx;
var G__63573 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63572,G__63573) : sci.impl.interpreter.interpret.call(null,G__63572,G__63573));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63306 = (function (){var G__63574 = ctx;
var G__63575 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63574,G__63575) : sci.impl.interpreter.interpret.call(null,G__63574,G__63575));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63307 = (function (){var G__63576 = ctx;
var G__63577 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63576,G__63577) : sci.impl.interpreter.interpret.call(null,G__63576,G__63577));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63308 = (function (){var G__63578 = ctx;
var G__63579 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63578,G__63579) : sci.impl.interpreter.interpret.call(null,G__63578,G__63579));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63309 = (function (){var G__63580 = ctx;
var G__63581 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63580,G__63581) : sci.impl.interpreter.interpret.call(null,G__63580,G__63581));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63310 = (function (){var G__63582 = ctx;
var G__63583 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63582,G__63583) : sci.impl.interpreter.interpret.call(null,G__63582,G__63583));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63311 = (function (){var G__63584 = ctx;
var G__63585 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63584,G__63585) : sci.impl.interpreter.interpret.call(null,G__63584,G__63585));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63312 = (function (){var G__63586 = ctx;
var G__63587 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63586,G__63587) : sci.impl.interpreter.interpret.call(null,G__63586,G__63587));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63313 = (function (){var G__63589 = ctx;
var G__63590 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63589,G__63590) : sci.impl.interpreter.interpret.call(null,G__63589,G__63590));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63314 = (function (){var G__63592 = ctx;
var G__63593 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63592,G__63593) : sci.impl.interpreter.interpret.call(null,G__63592,G__63593));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg63303,arg63304,arg63305,arg63306,arg63307,arg63308,arg63309,arg63310,arg63311,arg63312,arg63313,arg63314) : f.call(null,arg63303,arg63304,arg63305,arg63306,arg63307,arg63308,arg63309,arg63310,arg63311,arg63312,arg63313,arg63314));

break;
case (13):
var arg63315 = (function (){var G__63596 = ctx;
var G__63597 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63596,G__63597) : sci.impl.interpreter.interpret.call(null,G__63596,G__63597));
})();
var args__$1 = cljs.core.rest(args);
var arg63316 = (function (){var G__63598 = ctx;
var G__63599 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63598,G__63599) : sci.impl.interpreter.interpret.call(null,G__63598,G__63599));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63317 = (function (){var G__63600 = ctx;
var G__63601 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63600,G__63601) : sci.impl.interpreter.interpret.call(null,G__63600,G__63601));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63318 = (function (){var G__63604 = ctx;
var G__63605 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63604,G__63605) : sci.impl.interpreter.interpret.call(null,G__63604,G__63605));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63319 = (function (){var G__63607 = ctx;
var G__63608 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63607,G__63608) : sci.impl.interpreter.interpret.call(null,G__63607,G__63608));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63320 = (function (){var G__63609 = ctx;
var G__63610 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63609,G__63610) : sci.impl.interpreter.interpret.call(null,G__63609,G__63610));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63321 = (function (){var G__63611 = ctx;
var G__63612 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63611,G__63612) : sci.impl.interpreter.interpret.call(null,G__63611,G__63612));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63322 = (function (){var G__63613 = ctx;
var G__63614 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63613,G__63614) : sci.impl.interpreter.interpret.call(null,G__63613,G__63614));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63323 = (function (){var G__63615 = ctx;
var G__63616 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63615,G__63616) : sci.impl.interpreter.interpret.call(null,G__63615,G__63616));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63324 = (function (){var G__63617 = ctx;
var G__63618 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63617,G__63618) : sci.impl.interpreter.interpret.call(null,G__63617,G__63618));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63325 = (function (){var G__63620 = ctx;
var G__63621 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63620,G__63621) : sci.impl.interpreter.interpret.call(null,G__63620,G__63621));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63326 = (function (){var G__63622 = ctx;
var G__63623 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63622,G__63623) : sci.impl.interpreter.interpret.call(null,G__63622,G__63623));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63327 = (function (){var G__63624 = ctx;
var G__63625 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63624,G__63625) : sci.impl.interpreter.interpret.call(null,G__63624,G__63625));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg63315,arg63316,arg63317,arg63318,arg63319,arg63320,arg63321,arg63322,arg63323,arg63324,arg63325,arg63326,arg63327) : f.call(null,arg63315,arg63316,arg63317,arg63318,arg63319,arg63320,arg63321,arg63322,arg63323,arg63324,arg63325,arg63326,arg63327));

break;
case (14):
var arg63328 = (function (){var G__63626 = ctx;
var G__63627 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63626,G__63627) : sci.impl.interpreter.interpret.call(null,G__63626,G__63627));
})();
var args__$1 = cljs.core.rest(args);
var arg63329 = (function (){var G__63628 = ctx;
var G__63629 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63628,G__63629) : sci.impl.interpreter.interpret.call(null,G__63628,G__63629));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63330 = (function (){var G__63630 = ctx;
var G__63631 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63630,G__63631) : sci.impl.interpreter.interpret.call(null,G__63630,G__63631));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63331 = (function (){var G__63632 = ctx;
var G__63633 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63632,G__63633) : sci.impl.interpreter.interpret.call(null,G__63632,G__63633));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63332 = (function (){var G__63636 = ctx;
var G__63637 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63636,G__63637) : sci.impl.interpreter.interpret.call(null,G__63636,G__63637));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63333 = (function (){var G__63639 = ctx;
var G__63640 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63639,G__63640) : sci.impl.interpreter.interpret.call(null,G__63639,G__63640));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63334 = (function (){var G__63641 = ctx;
var G__63642 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63641,G__63642) : sci.impl.interpreter.interpret.call(null,G__63641,G__63642));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63335 = (function (){var G__63643 = ctx;
var G__63644 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63643,G__63644) : sci.impl.interpreter.interpret.call(null,G__63643,G__63644));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63336 = (function (){var G__63645 = ctx;
var G__63646 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63645,G__63646) : sci.impl.interpreter.interpret.call(null,G__63645,G__63646));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63337 = (function (){var G__63647 = ctx;
var G__63648 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63647,G__63648) : sci.impl.interpreter.interpret.call(null,G__63647,G__63648));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63338 = (function (){var G__63649 = ctx;
var G__63650 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63649,G__63650) : sci.impl.interpreter.interpret.call(null,G__63649,G__63650));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63339 = (function (){var G__63651 = ctx;
var G__63652 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63651,G__63652) : sci.impl.interpreter.interpret.call(null,G__63651,G__63652));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63340 = (function (){var G__63653 = ctx;
var G__63654 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63653,G__63654) : sci.impl.interpreter.interpret.call(null,G__63653,G__63654));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63341 = (function (){var G__63655 = ctx;
var G__63656 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63655,G__63656) : sci.impl.interpreter.interpret.call(null,G__63655,G__63656));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg63328,arg63329,arg63330,arg63331,arg63332,arg63333,arg63334,arg63335,arg63336,arg63337,arg63338,arg63339,arg63340,arg63341) : f.call(null,arg63328,arg63329,arg63330,arg63331,arg63332,arg63333,arg63334,arg63335,arg63336,arg63337,arg63338,arg63339,arg63340,arg63341));

break;
case (15):
var arg63342 = (function (){var G__63657 = ctx;
var G__63658 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63657,G__63658) : sci.impl.interpreter.interpret.call(null,G__63657,G__63658));
})();
var args__$1 = cljs.core.rest(args);
var arg63343 = (function (){var G__63659 = ctx;
var G__63660 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63659,G__63660) : sci.impl.interpreter.interpret.call(null,G__63659,G__63660));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63344 = (function (){var G__63661 = ctx;
var G__63662 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63661,G__63662) : sci.impl.interpreter.interpret.call(null,G__63661,G__63662));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63345 = (function (){var G__63667 = ctx;
var G__63668 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63667,G__63668) : sci.impl.interpreter.interpret.call(null,G__63667,G__63668));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63346 = (function (){var G__63669 = ctx;
var G__63670 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63669,G__63670) : sci.impl.interpreter.interpret.call(null,G__63669,G__63670));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63347 = (function (){var G__63675 = ctx;
var G__63676 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63675,G__63676) : sci.impl.interpreter.interpret.call(null,G__63675,G__63676));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63348 = (function (){var G__63677 = ctx;
var G__63678 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63677,G__63678) : sci.impl.interpreter.interpret.call(null,G__63677,G__63678));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63349 = (function (){var G__63679 = ctx;
var G__63680 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63679,G__63680) : sci.impl.interpreter.interpret.call(null,G__63679,G__63680));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63350 = (function (){var G__63685 = ctx;
var G__63686 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63685,G__63686) : sci.impl.interpreter.interpret.call(null,G__63685,G__63686));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63351 = (function (){var G__63687 = ctx;
var G__63688 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63687,G__63688) : sci.impl.interpreter.interpret.call(null,G__63687,G__63688));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63352 = (function (){var G__63689 = ctx;
var G__63690 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63689,G__63690) : sci.impl.interpreter.interpret.call(null,G__63689,G__63690));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63353 = (function (){var G__63693 = ctx;
var G__63694 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63693,G__63694) : sci.impl.interpreter.interpret.call(null,G__63693,G__63694));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63354 = (function (){var G__63696 = ctx;
var G__63697 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63696,G__63697) : sci.impl.interpreter.interpret.call(null,G__63696,G__63697));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63355 = (function (){var G__63698 = ctx;
var G__63699 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63698,G__63699) : sci.impl.interpreter.interpret.call(null,G__63698,G__63699));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63356 = (function (){var G__63700 = ctx;
var G__63701 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63700,G__63701) : sci.impl.interpreter.interpret.call(null,G__63700,G__63701));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg63342,arg63343,arg63344,arg63345,arg63346,arg63347,arg63348,arg63349,arg63350,arg63351,arg63352,arg63353,arg63354,arg63355,arg63356) : f.call(null,arg63342,arg63343,arg63344,arg63345,arg63346,arg63347,arg63348,arg63349,arg63350,arg63351,arg63352,arg63353,arg63354,arg63355,arg63356));

break;
case (16):
var arg63357 = (function (){var G__63702 = ctx;
var G__63703 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63702,G__63703) : sci.impl.interpreter.interpret.call(null,G__63702,G__63703));
})();
var args__$1 = cljs.core.rest(args);
var arg63358 = (function (){var G__63704 = ctx;
var G__63705 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63704,G__63705) : sci.impl.interpreter.interpret.call(null,G__63704,G__63705));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63359 = (function (){var G__63706 = ctx;
var G__63707 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63706,G__63707) : sci.impl.interpreter.interpret.call(null,G__63706,G__63707));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63360 = (function (){var G__63708 = ctx;
var G__63709 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63708,G__63709) : sci.impl.interpreter.interpret.call(null,G__63708,G__63709));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63361 = (function (){var G__63710 = ctx;
var G__63711 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63710,G__63711) : sci.impl.interpreter.interpret.call(null,G__63710,G__63711));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63362 = (function (){var G__63712 = ctx;
var G__63713 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63712,G__63713) : sci.impl.interpreter.interpret.call(null,G__63712,G__63713));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63363 = (function (){var G__63714 = ctx;
var G__63715 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63714,G__63715) : sci.impl.interpreter.interpret.call(null,G__63714,G__63715));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63364 = (function (){var G__63716 = ctx;
var G__63717 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63716,G__63717) : sci.impl.interpreter.interpret.call(null,G__63716,G__63717));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63365 = (function (){var G__63718 = ctx;
var G__63719 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63718,G__63719) : sci.impl.interpreter.interpret.call(null,G__63718,G__63719));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63366 = (function (){var G__63720 = ctx;
var G__63721 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63720,G__63721) : sci.impl.interpreter.interpret.call(null,G__63720,G__63721));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63367 = (function (){var G__63722 = ctx;
var G__63723 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63722,G__63723) : sci.impl.interpreter.interpret.call(null,G__63722,G__63723));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63368 = (function (){var G__63724 = ctx;
var G__63725 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63724,G__63725) : sci.impl.interpreter.interpret.call(null,G__63724,G__63725));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63369 = (function (){var G__63726 = ctx;
var G__63727 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63726,G__63727) : sci.impl.interpreter.interpret.call(null,G__63726,G__63727));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63370 = (function (){var G__63728 = ctx;
var G__63729 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63728,G__63729) : sci.impl.interpreter.interpret.call(null,G__63728,G__63729));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63371 = (function (){var G__63730 = ctx;
var G__63731 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63730,G__63731) : sci.impl.interpreter.interpret.call(null,G__63730,G__63731));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63372 = (function (){var G__63732 = ctx;
var G__63733 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63732,G__63733) : sci.impl.interpreter.interpret.call(null,G__63732,G__63733));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg63357,arg63358,arg63359,arg63360,arg63361,arg63362,arg63363,arg63364,arg63365,arg63366,arg63367,arg63368,arg63369,arg63370,arg63371,arg63372) : f.call(null,arg63357,arg63358,arg63359,arg63360,arg63361,arg63362,arg63363,arg63364,arg63365,arg63366,arg63367,arg63368,arg63369,arg63370,arg63371,arg63372));

break;
case (17):
var arg63373 = (function (){var G__63734 = ctx;
var G__63735 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63734,G__63735) : sci.impl.interpreter.interpret.call(null,G__63734,G__63735));
})();
var args__$1 = cljs.core.rest(args);
var arg63374 = (function (){var G__63736 = ctx;
var G__63737 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63736,G__63737) : sci.impl.interpreter.interpret.call(null,G__63736,G__63737));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63375 = (function (){var G__63738 = ctx;
var G__63739 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63738,G__63739) : sci.impl.interpreter.interpret.call(null,G__63738,G__63739));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63376 = (function (){var G__63740 = ctx;
var G__63741 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63740,G__63741) : sci.impl.interpreter.interpret.call(null,G__63740,G__63741));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63377 = (function (){var G__63742 = ctx;
var G__63743 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63742,G__63743) : sci.impl.interpreter.interpret.call(null,G__63742,G__63743));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63378 = (function (){var G__63744 = ctx;
var G__63745 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63744,G__63745) : sci.impl.interpreter.interpret.call(null,G__63744,G__63745));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63379 = (function (){var G__63746 = ctx;
var G__63747 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63746,G__63747) : sci.impl.interpreter.interpret.call(null,G__63746,G__63747));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63380 = (function (){var G__63748 = ctx;
var G__63749 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63748,G__63749) : sci.impl.interpreter.interpret.call(null,G__63748,G__63749));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63381 = (function (){var G__63750 = ctx;
var G__63751 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63750,G__63751) : sci.impl.interpreter.interpret.call(null,G__63750,G__63751));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63382 = (function (){var G__63752 = ctx;
var G__63753 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63752,G__63753) : sci.impl.interpreter.interpret.call(null,G__63752,G__63753));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63383 = (function (){var G__63754 = ctx;
var G__63755 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63754,G__63755) : sci.impl.interpreter.interpret.call(null,G__63754,G__63755));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63384 = (function (){var G__63756 = ctx;
var G__63757 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63756,G__63757) : sci.impl.interpreter.interpret.call(null,G__63756,G__63757));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63385 = (function (){var G__63758 = ctx;
var G__63759 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63758,G__63759) : sci.impl.interpreter.interpret.call(null,G__63758,G__63759));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63386 = (function (){var G__63760 = ctx;
var G__63761 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63760,G__63761) : sci.impl.interpreter.interpret.call(null,G__63760,G__63761));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63387 = (function (){var G__63762 = ctx;
var G__63763 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63762,G__63763) : sci.impl.interpreter.interpret.call(null,G__63762,G__63763));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63388 = (function (){var G__63764 = ctx;
var G__63765 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63764,G__63765) : sci.impl.interpreter.interpret.call(null,G__63764,G__63765));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63389 = (function (){var G__63766 = ctx;
var G__63767 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63766,G__63767) : sci.impl.interpreter.interpret.call(null,G__63766,G__63767));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg63373,arg63374,arg63375,arg63376,arg63377,arg63378,arg63379,arg63380,arg63381,arg63382,arg63383,arg63384,arg63385,arg63386,arg63387,arg63388,arg63389) : f.call(null,arg63373,arg63374,arg63375,arg63376,arg63377,arg63378,arg63379,arg63380,arg63381,arg63382,arg63383,arg63384,arg63385,arg63386,arg63387,arg63388,arg63389));

break;
case (18):
var arg63390 = (function (){var G__63768 = ctx;
var G__63769 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63768,G__63769) : sci.impl.interpreter.interpret.call(null,G__63768,G__63769));
})();
var args__$1 = cljs.core.rest(args);
var arg63391 = (function (){var G__63770 = ctx;
var G__63771 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63770,G__63771) : sci.impl.interpreter.interpret.call(null,G__63770,G__63771));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63392 = (function (){var G__63772 = ctx;
var G__63773 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63772,G__63773) : sci.impl.interpreter.interpret.call(null,G__63772,G__63773));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63393 = (function (){var G__63774 = ctx;
var G__63775 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63774,G__63775) : sci.impl.interpreter.interpret.call(null,G__63774,G__63775));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63394 = (function (){var G__63776 = ctx;
var G__63777 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63776,G__63777) : sci.impl.interpreter.interpret.call(null,G__63776,G__63777));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63395 = (function (){var G__63778 = ctx;
var G__63779 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63778,G__63779) : sci.impl.interpreter.interpret.call(null,G__63778,G__63779));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63396 = (function (){var G__63780 = ctx;
var G__63781 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63780,G__63781) : sci.impl.interpreter.interpret.call(null,G__63780,G__63781));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63397 = (function (){var G__63782 = ctx;
var G__63783 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63782,G__63783) : sci.impl.interpreter.interpret.call(null,G__63782,G__63783));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63398 = (function (){var G__63784 = ctx;
var G__63785 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63784,G__63785) : sci.impl.interpreter.interpret.call(null,G__63784,G__63785));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63399 = (function (){var G__63786 = ctx;
var G__63787 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63786,G__63787) : sci.impl.interpreter.interpret.call(null,G__63786,G__63787));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63400 = (function (){var G__63788 = ctx;
var G__63789 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63788,G__63789) : sci.impl.interpreter.interpret.call(null,G__63788,G__63789));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63401 = (function (){var G__63790 = ctx;
var G__63791 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63790,G__63791) : sci.impl.interpreter.interpret.call(null,G__63790,G__63791));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63402 = (function (){var G__63792 = ctx;
var G__63793 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63792,G__63793) : sci.impl.interpreter.interpret.call(null,G__63792,G__63793));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63403 = (function (){var G__63794 = ctx;
var G__63795 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63794,G__63795) : sci.impl.interpreter.interpret.call(null,G__63794,G__63795));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63404 = (function (){var G__63796 = ctx;
var G__63797 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63796,G__63797) : sci.impl.interpreter.interpret.call(null,G__63796,G__63797));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63405 = (function (){var G__63798 = ctx;
var G__63799 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63798,G__63799) : sci.impl.interpreter.interpret.call(null,G__63798,G__63799));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63406 = (function (){var G__63800 = ctx;
var G__63801 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63800,G__63801) : sci.impl.interpreter.interpret.call(null,G__63800,G__63801));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63407 = (function (){var G__63802 = ctx;
var G__63803 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63802,G__63803) : sci.impl.interpreter.interpret.call(null,G__63802,G__63803));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg63390,arg63391,arg63392,arg63393,arg63394,arg63395,arg63396,arg63397,arg63398,arg63399,arg63400,arg63401,arg63402,arg63403,arg63404,arg63405,arg63406,arg63407) : f.call(null,arg63390,arg63391,arg63392,arg63393,arg63394,arg63395,arg63396,arg63397,arg63398,arg63399,arg63400,arg63401,arg63402,arg63403,arg63404,arg63405,arg63406,arg63407));

break;
case (19):
var arg63408 = (function (){var G__63804 = ctx;
var G__63805 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63804,G__63805) : sci.impl.interpreter.interpret.call(null,G__63804,G__63805));
})();
var args__$1 = cljs.core.rest(args);
var arg63409 = (function (){var G__63806 = ctx;
var G__63807 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63806,G__63807) : sci.impl.interpreter.interpret.call(null,G__63806,G__63807));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63410 = (function (){var G__63808 = ctx;
var G__63809 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63808,G__63809) : sci.impl.interpreter.interpret.call(null,G__63808,G__63809));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63411 = (function (){var G__63810 = ctx;
var G__63811 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63810,G__63811) : sci.impl.interpreter.interpret.call(null,G__63810,G__63811));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63412 = (function (){var G__63812 = ctx;
var G__63813 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63812,G__63813) : sci.impl.interpreter.interpret.call(null,G__63812,G__63813));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63413 = (function (){var G__63814 = ctx;
var G__63815 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63814,G__63815) : sci.impl.interpreter.interpret.call(null,G__63814,G__63815));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63414 = (function (){var G__63816 = ctx;
var G__63817 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63816,G__63817) : sci.impl.interpreter.interpret.call(null,G__63816,G__63817));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63415 = (function (){var G__63818 = ctx;
var G__63819 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63818,G__63819) : sci.impl.interpreter.interpret.call(null,G__63818,G__63819));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63416 = (function (){var G__63820 = ctx;
var G__63821 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63820,G__63821) : sci.impl.interpreter.interpret.call(null,G__63820,G__63821));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63417 = (function (){var G__63822 = ctx;
var G__63823 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63822,G__63823) : sci.impl.interpreter.interpret.call(null,G__63822,G__63823));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63418 = (function (){var G__63824 = ctx;
var G__63825 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63824,G__63825) : sci.impl.interpreter.interpret.call(null,G__63824,G__63825));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63419 = (function (){var G__63826 = ctx;
var G__63827 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63826,G__63827) : sci.impl.interpreter.interpret.call(null,G__63826,G__63827));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63420 = (function (){var G__63828 = ctx;
var G__63829 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63828,G__63829) : sci.impl.interpreter.interpret.call(null,G__63828,G__63829));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63421 = (function (){var G__63830 = ctx;
var G__63831 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63830,G__63831) : sci.impl.interpreter.interpret.call(null,G__63830,G__63831));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63422 = (function (){var G__63832 = ctx;
var G__63833 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63832,G__63833) : sci.impl.interpreter.interpret.call(null,G__63832,G__63833));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63423 = (function (){var G__63834 = ctx;
var G__63835 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63834,G__63835) : sci.impl.interpreter.interpret.call(null,G__63834,G__63835));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63424 = (function (){var G__63836 = ctx;
var G__63837 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63836,G__63837) : sci.impl.interpreter.interpret.call(null,G__63836,G__63837));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63425 = (function (){var G__63838 = ctx;
var G__63839 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63838,G__63839) : sci.impl.interpreter.interpret.call(null,G__63838,G__63839));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg63426 = (function (){var G__63840 = ctx;
var G__63841 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63840,G__63841) : sci.impl.interpreter.interpret.call(null,G__63840,G__63841));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg63408,arg63409,arg63410,arg63411,arg63412,arg63413,arg63414,arg63415,arg63416,arg63417,arg63418,arg63419,arg63420,arg63421,arg63422,arg63423,arg63424,arg63425,arg63426) : f.call(null,arg63408,arg63409,arg63410,arg63411,arg63412,arg63413,arg63414,arg63415,arg63416,arg63417,arg63418,arg63419,arg63420,arg63421,arg63422,arg63423,arg63424,arg63425,arg63426));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__63842 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__63842)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__63842)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__63842)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__63842)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__63842)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__63842)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__63843 = ctx;
var G__63844 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63843,G__63844) : sci.impl.interpreter.interpret.call(null,G__63843,G__63844));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__63842)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__63842)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__63842)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__63842)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__63842)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__63842)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__63842)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__63842)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__63842)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__63845 = ctx;
var G__63846 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63845,G__63846) : sci.impl.interpreter.interpret.call(null,G__63845,G__63846));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__63842)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__63842)){
return (new cljs.core.LazySeq(null,(function (){var G__63847 = ctx;
var G__63848 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63847,G__63848) : sci.impl.interpreter.interpret.call(null,G__63847,G__63848));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__63842)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__63842)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__63842)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__63842)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63842)].join('')));

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
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e63849){if((e63849 instanceof Error)){
var e = e63849;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e63849;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__63856 = op;
var G__63856__$1 = (((G__63856 instanceof cljs.core.Keyword))?G__63856.fqn:null);
switch (G__63856__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63853_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63853_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63853_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63854_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63854_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63854_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63855_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63855_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63855_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__64024 = cljs.core.rest(exprs);
var G__64025 = (function (){var G__63859 = ctx;
var G__63860 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__63859,G__63860) : sci.impl.interpreter.eval_form.call(null,G__63859,G__63860));
})();
exprs = G__64024;
ret = G__64025;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__64026 = ret__$1;
ret = G__64026;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__63862 = arguments.length;
switch (G__63862) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
