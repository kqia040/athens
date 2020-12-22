goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__50869 = (line + (1));
var G__50870 = (1);
var G__50871 = (counter + (1));
line = G__50869;
col = G__50870;
counter = G__50871;
continue;
} else {
var G__50872 = line;
var G__50873 = (col + (1));
var G__50874 = (counter + (1));
line = G__50872;
col = G__50873;
counter = G__50874;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__50876 = cljs.core.next(chars);
var G__50877 = (n__$1 - (1));
chars = G__50876;
n__$1 = G__50877;
continue;
} else {
var G__50878 = cljs.core.next(chars);
var G__50879 = n__$1;
chars = G__50878;
n__$1 = G__50879;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__50837){
var map__50838 = p__50837;
var map__50838__$1 = (((((!((map__50838 == null))))?(((((map__50838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50838):map__50838);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__50851_50892 = cljs.core.seq(full_reasons);
var chunk__50852_50893 = null;
var count__50853_50894 = (0);
var i__50854_50895 = (0);
while(true){
if((i__50854_50895 < count__50853_50894)){
var r_50896 = chunk__50852_50893.cljs$core$IIndexed$_nth$arity$2(null,i__50854_50895);
instaparse.failure.print_reason(r_50896);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__50897 = seq__50851_50892;
var G__50898 = chunk__50852_50893;
var G__50899 = count__50853_50894;
var G__50900 = (i__50854_50895 + (1));
seq__50851_50892 = G__50897;
chunk__50852_50893 = G__50898;
count__50853_50894 = G__50899;
i__50854_50895 = G__50900;
continue;
} else {
var temp__5735__auto___50901 = cljs.core.seq(seq__50851_50892);
if(temp__5735__auto___50901){
var seq__50851_50902__$1 = temp__5735__auto___50901;
if(cljs.core.chunked_seq_QMARK_(seq__50851_50902__$1)){
var c__4556__auto___50903 = cljs.core.chunk_first(seq__50851_50902__$1);
var G__50904 = cljs.core.chunk_rest(seq__50851_50902__$1);
var G__50905 = c__4556__auto___50903;
var G__50906 = cljs.core.count(c__4556__auto___50903);
var G__50907 = (0);
seq__50851_50892 = G__50904;
chunk__50852_50893 = G__50905;
count__50853_50894 = G__50906;
i__50854_50895 = G__50907;
continue;
} else {
var r_50908 = cljs.core.first(seq__50851_50902__$1);
instaparse.failure.print_reason(r_50908);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__50909 = cljs.core.next(seq__50851_50902__$1);
var G__50910 = null;
var G__50911 = (0);
var G__50912 = (0);
seq__50851_50892 = G__50909;
chunk__50852_50893 = G__50910;
count__50853_50894 = G__50911;
i__50854_50895 = G__50912;
continue;
}
} else {
}
}
break;
}

var seq__50860 = cljs.core.seq(partial_reasons);
var chunk__50861 = null;
var count__50862 = (0);
var i__50863 = (0);
while(true){
if((i__50863 < count__50862)){
var r = chunk__50861.cljs$core$IIndexed$_nth$arity$2(null,i__50863);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__50913 = seq__50860;
var G__50914 = chunk__50861;
var G__50915 = count__50862;
var G__50916 = (i__50863 + (1));
seq__50860 = G__50913;
chunk__50861 = G__50914;
count__50862 = G__50915;
i__50863 = G__50916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50860);
if(temp__5735__auto__){
var seq__50860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50860__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50860__$1);
var G__50917 = cljs.core.chunk_rest(seq__50860__$1);
var G__50918 = c__4556__auto__;
var G__50919 = cljs.core.count(c__4556__auto__);
var G__50920 = (0);
seq__50860 = G__50917;
chunk__50861 = G__50918;
count__50862 = G__50919;
i__50863 = G__50920;
continue;
} else {
var r = cljs.core.first(seq__50860__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__50922 = cljs.core.next(seq__50860__$1);
var G__50923 = null;
var G__50924 = (0);
var G__50925 = (0);
seq__50860 = G__50922;
chunk__50861 = G__50923;
count__50862 = G__50924;
i__50863 = G__50925;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
