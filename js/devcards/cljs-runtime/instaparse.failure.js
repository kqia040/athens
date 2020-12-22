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
var G__54949 = (line + (1));
var G__54950 = (1);
var G__54951 = (counter + (1));
line = G__54949;
col = G__54950;
counter = G__54951;
continue;
} else {
var G__54952 = line;
var G__54953 = (col + (1));
var G__54954 = (counter + (1));
line = G__54952;
col = G__54953;
counter = G__54954;
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
var G__54955 = cljs.core.next(chars);
var G__54956 = (n__$1 - (1));
chars = G__54955;
n__$1 = G__54956;
continue;
} else {
var G__54957 = cljs.core.next(chars);
var G__54958 = n__$1;
chars = G__54957;
n__$1 = G__54958;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__54920){
var map__54921 = p__54920;
var map__54921__$1 = (((((!((map__54921 == null))))?(((((map__54921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54921):map__54921);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__54933_54959 = cljs.core.seq(full_reasons);
var chunk__54934_54960 = null;
var count__54935_54961 = (0);
var i__54936_54962 = (0);
while(true){
if((i__54936_54962 < count__54935_54961)){
var r_54963 = chunk__54934_54960.cljs$core$IIndexed$_nth$arity$2(null,i__54936_54962);
instaparse.failure.print_reason(r_54963);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__54964 = seq__54933_54959;
var G__54965 = chunk__54934_54960;
var G__54966 = count__54935_54961;
var G__54967 = (i__54936_54962 + (1));
seq__54933_54959 = G__54964;
chunk__54934_54960 = G__54965;
count__54935_54961 = G__54966;
i__54936_54962 = G__54967;
continue;
} else {
var temp__5735__auto___54968 = cljs.core.seq(seq__54933_54959);
if(temp__5735__auto___54968){
var seq__54933_54969__$1 = temp__5735__auto___54968;
if(cljs.core.chunked_seq_QMARK_(seq__54933_54969__$1)){
var c__4556__auto___54971 = cljs.core.chunk_first(seq__54933_54969__$1);
var G__54972 = cljs.core.chunk_rest(seq__54933_54969__$1);
var G__54973 = c__4556__auto___54971;
var G__54974 = cljs.core.count(c__4556__auto___54971);
var G__54975 = (0);
seq__54933_54959 = G__54972;
chunk__54934_54960 = G__54973;
count__54935_54961 = G__54974;
i__54936_54962 = G__54975;
continue;
} else {
var r_54976 = cljs.core.first(seq__54933_54969__$1);
instaparse.failure.print_reason(r_54976);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__54977 = cljs.core.next(seq__54933_54969__$1);
var G__54978 = null;
var G__54979 = (0);
var G__54980 = (0);
seq__54933_54959 = G__54977;
chunk__54934_54960 = G__54978;
count__54935_54961 = G__54979;
i__54936_54962 = G__54980;
continue;
}
} else {
}
}
break;
}

var seq__54939 = cljs.core.seq(partial_reasons);
var chunk__54940 = null;
var count__54941 = (0);
var i__54942 = (0);
while(true){
if((i__54942 < count__54941)){
var r = chunk__54940.cljs$core$IIndexed$_nth$arity$2(null,i__54942);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__54982 = seq__54939;
var G__54983 = chunk__54940;
var G__54984 = count__54941;
var G__54985 = (i__54942 + (1));
seq__54939 = G__54982;
chunk__54940 = G__54983;
count__54941 = G__54984;
i__54942 = G__54985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54939);
if(temp__5735__auto__){
var seq__54939__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54939__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54939__$1);
var G__54988 = cljs.core.chunk_rest(seq__54939__$1);
var G__54989 = c__4556__auto__;
var G__54990 = cljs.core.count(c__4556__auto__);
var G__54991 = (0);
seq__54939 = G__54988;
chunk__54940 = G__54989;
count__54941 = G__54990;
i__54942 = G__54991;
continue;
} else {
var r = cljs.core.first(seq__54939__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__54992 = cljs.core.next(seq__54939__$1);
var G__54993 = null;
var G__54994 = (0);
var G__54995 = (0);
seq__54939 = G__54992;
chunk__54940 = G__54993;
count__54941 = G__54994;
i__54942 = G__54995;
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
