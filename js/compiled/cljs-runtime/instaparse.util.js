goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50880 = arguments.length;
var i__4737__auto___50881 = (0);
while(true){
if((i__4737__auto___50881 < len__4736__auto___50880)){
args__4742__auto__.push((arguments[i__4737__auto___50881]));

var G__50882 = (i__4737__auto___50881 + (1));
i__4737__auto___50881 = G__50882;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq50839){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50839));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50885 = arguments.length;
var i__4737__auto___50886 = (0);
while(true){
if((i__4737__auto___50886 < len__4736__auto___50885)){
args__4742__auto__.push((arguments[i__4737__auto___50886]));

var G__50888 = (i__4737__auto___50886 + (1));
i__4737__auto___50886 = G__50888;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq50850){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50850));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__50857 = "";
var G__50857__$1 = (cljs.core.truth_(re.ignoreCase)?[G__50857,"i"].join(''):G__50857);
var G__50857__$2 = (cljs.core.truth_(re.multiline)?[G__50857__$1,"m"].join(''):G__50857__$1);
if(cljs.core.truth_(re.unicode)){
return [G__50857__$2,"u"].join('');
} else {
return G__50857__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
