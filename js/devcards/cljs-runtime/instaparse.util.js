goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54943 = arguments.length;
var i__4737__auto___54944 = (0);
while(true){
if((i__4737__auto___54944 < len__4736__auto___54943)){
args__4742__auto__.push((arguments[i__4737__auto___54944]));

var G__54945 = (i__4737__auto___54944 + (1));
i__4737__auto___54944 = G__54945;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq54910){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54910));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54946 = arguments.length;
var i__4737__auto___54947 = (0);
while(true){
if((i__4737__auto___54947 < len__4736__auto___54946)){
args__4742__auto__.push((arguments[i__4737__auto___54947]));

var G__54948 = (i__4737__auto___54947 + (1));
i__4737__auto___54947 = G__54948;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq54915){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54915));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__54925 = "";
var G__54925__$1 = (cljs.core.truth_(re.ignoreCase)?[G__54925,"i"].join(''):G__54925);
var G__54925__$2 = (cljs.core.truth_(re.multiline)?[G__54925__$1,"m"].join(''):G__54925__$1);
if(cljs.core.truth_(re.unicode)){
return [G__54925__$2,"u"].join('');
} else {
return G__54925__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
