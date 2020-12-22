goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__46594__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__46142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__46143 = cljs.core.seq(vec__46142);
var first__46144 = cljs.core.first(seq__46143);
var seq__46143__$1 = cljs.core.next(seq__46143);
var tag = first__46144;
var body = seq__46143__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__46594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46603__i = 0, G__46603__a = new Array(arguments.length -  0);
while (G__46603__i < G__46603__a.length) {G__46603__a[G__46603__i] = arguments[G__46603__i + 0]; ++G__46603__i;}
  args = new cljs.core.IndexedSeq(G__46603__a,0,null);
} 
return G__46594__delegate.call(this,args);};
G__46594.cljs$lang$maxFixedArity = 0;
G__46594.cljs$lang$applyTo = (function (arglist__46604){
var args = cljs.core.seq(arglist__46604);
return G__46594__delegate(args);
});
G__46594.cljs$core$IFn$_invoke$arity$variadic = G__46594__delegate;
return G__46594;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__46152(s__46153){
return (new cljs.core.LazySeq(null,(function (){
var s__46153__$1 = s__46153;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46153__$1);
if(temp__5735__auto__){
var s__46153__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46153__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46153__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46155 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46154 = (0);
while(true){
if((i__46154 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__46154);
cljs.core.chunk_append(b__46155,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__46609 = (i__46154 + (1));
i__46154 = G__46609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46155),sablono$core$update_arglists_$_iter__46152(cljs.core.chunk_rest(s__46153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46155),null);
}
} else {
var args = cljs.core.first(s__46153__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__46152(cljs.core.rest(s__46153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46621 = arguments.length;
var i__4737__auto___46623 = (0);
while(true){
if((i__4737__auto___46623 < len__4736__auto___46621)){
args__4742__auto__.push((arguments[i__4737__auto___46623]));

var G__46625 = (i__4737__auto___46623 + (1));
i__4737__auto___46623 = G__46625;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__46178(s__46179){
return (new cljs.core.LazySeq(null,(function (){
var s__46179__$1 = s__46179;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46179__$1);
if(temp__5735__auto__){
var s__46179__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46179__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46179__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46181 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46180 = (0);
while(true){
if((i__46180 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__46180);
cljs.core.chunk_append(b__46181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__46650 = (i__46180 + (1));
i__46180 = G__46650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46181),sablono$core$iter__46178(cljs.core.chunk_rest(s__46179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46181),null);
}
} else {
var style = cljs.core.first(s__46179__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__46178(cljs.core.rest(s__46179__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq46170){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46170));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to46191 = (function sablono$core$link_to46191(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46657 = arguments.length;
var i__4737__auto___46658 = (0);
while(true){
if((i__4737__auto___46658 < len__4736__auto___46657)){
args__4742__auto__.push((arguments[i__4737__auto___46658]));

var G__46659 = (i__4737__auto___46658 + (1));
i__4737__auto___46658 = G__46659;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to46191.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to46191.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to46191.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to46191.cljs$lang$applyTo = (function (seq46193){
var G__46194 = cljs.core.first(seq46193);
var seq46193__$1 = cljs.core.next(seq46193);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46194,seq46193__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to46191);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to46203 = (function sablono$core$mail_to46203(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46663 = arguments.length;
var i__4737__auto___46664 = (0);
while(true){
if((i__4737__auto___46664 < len__4736__auto___46663)){
args__4742__auto__.push((arguments[i__4737__auto___46664]));

var G__46665 = (i__4737__auto___46664 + (1));
i__4737__auto___46664 = G__46665;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to46203.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to46203.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__46209){
var vec__46210 = p__46209;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46210,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to46203.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to46203.cljs$lang$applyTo = (function (seq46205){
var G__46206 = cljs.core.first(seq46205);
var seq46205__$1 = cljs.core.next(seq46205);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46206,seq46205__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to46203);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list46223 = (function sablono$core$unordered_list46223(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list46223_$_iter__46226(s__46227){
return (new cljs.core.LazySeq(null,(function (){
var s__46227__$1 = s__46227;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46227__$1);
if(temp__5735__auto__){
var s__46227__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46227__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46227__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46229 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46228 = (0);
while(true){
if((i__46228 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__46228);
cljs.core.chunk_append(b__46229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46672 = (i__46228 + (1));
i__46228 = G__46672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46229),sablono$core$unordered_list46223_$_iter__46226(cljs.core.chunk_rest(s__46227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46229),null);
}
} else {
var x = cljs.core.first(s__46227__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list46223_$_iter__46226(cljs.core.rest(s__46227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list46223);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list46244 = (function sablono$core$ordered_list46244(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list46244_$_iter__46246(s__46247){
return (new cljs.core.LazySeq(null,(function (){
var s__46247__$1 = s__46247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46247__$1);
if(temp__5735__auto__){
var s__46247__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46247__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46247__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46249 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46248 = (0);
while(true){
if((i__46248 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__46248);
cljs.core.chunk_append(b__46249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46679 = (i__46248 + (1));
i__46248 = G__46679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46249),sablono$core$ordered_list46244_$_iter__46246(cljs.core.chunk_rest(s__46247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46249),null);
}
} else {
var x = cljs.core.first(s__46247__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list46244_$_iter__46246(cljs.core.rest(s__46247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list46244);
/**
 * Create an image element.
 */
sablono.core.image46263 = (function sablono$core$image46263(var_args){
var G__46268 = arguments.length;
switch (G__46268) {
case 1:
return sablono.core.image46263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image46263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image46263.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image46263.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image46263.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image46263);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46278_SHARP_,p2__46279_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46278_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46279_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46285_SHARP_,p2__46286_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46285_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46286_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__46292 = arguments.length;
switch (G__46292) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field46300 = (function sablono$core$color_field46300(var_args){
var G__46302 = arguments.length;
switch (G__46302) {
case 1:
return sablono.core.color_field46300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field46300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field46300.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__46122__auto__);
}));

(sablono.core.color_field46300.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.color_field46300.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field46300);

/**
 * Creates a date input field.
 */
sablono.core.date_field46303 = (function sablono$core$date_field46303(var_args){
var G__46306 = arguments.length;
switch (G__46306) {
case 1:
return sablono.core.date_field46303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field46303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field46303.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__46122__auto__);
}));

(sablono.core.date_field46303.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.date_field46303.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field46303);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field46309 = (function sablono$core$datetime_field46309(var_args){
var G__46313 = arguments.length;
switch (G__46313) {
case 1:
return sablono.core.datetime_field46309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field46309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field46309.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__46122__auto__);
}));

(sablono.core.datetime_field46309.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.datetime_field46309.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field46309);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field46319 = (function sablono$core$datetime_local_field46319(var_args){
var G__46321 = arguments.length;
switch (G__46321) {
case 1:
return sablono.core.datetime_local_field46319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field46319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field46319.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__46122__auto__);
}));

(sablono.core.datetime_local_field46319.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.datetime_local_field46319.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field46319);

/**
 * Creates a email input field.
 */
sablono.core.email_field46338 = (function sablono$core$email_field46338(var_args){
var G__46341 = arguments.length;
switch (G__46341) {
case 1:
return sablono.core.email_field46338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field46338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field46338.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__46122__auto__);
}));

(sablono.core.email_field46338.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.email_field46338.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field46338);

/**
 * Creates a file input field.
 */
sablono.core.file_field46346 = (function sablono$core$file_field46346(var_args){
var G__46350 = arguments.length;
switch (G__46350) {
case 1:
return sablono.core.file_field46346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field46346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field46346.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__46122__auto__);
}));

(sablono.core.file_field46346.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.file_field46346.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field46346);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field46358 = (function sablono$core$hidden_field46358(var_args){
var G__46365 = arguments.length;
switch (G__46365) {
case 1:
return sablono.core.hidden_field46358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field46358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field46358.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__46122__auto__);
}));

(sablono.core.hidden_field46358.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.hidden_field46358.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field46358);

/**
 * Creates a month input field.
 */
sablono.core.month_field46373 = (function sablono$core$month_field46373(var_args){
var G__46378 = arguments.length;
switch (G__46378) {
case 1:
return sablono.core.month_field46373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field46373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field46373.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__46122__auto__);
}));

(sablono.core.month_field46373.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.month_field46373.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field46373);

/**
 * Creates a number input field.
 */
sablono.core.number_field46384 = (function sablono$core$number_field46384(var_args){
var G__46386 = arguments.length;
switch (G__46386) {
case 1:
return sablono.core.number_field46384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field46384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field46384.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__46122__auto__);
}));

(sablono.core.number_field46384.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.number_field46384.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field46384);

/**
 * Creates a password input field.
 */
sablono.core.password_field46396 = (function sablono$core$password_field46396(var_args){
var G__46401 = arguments.length;
switch (G__46401) {
case 1:
return sablono.core.password_field46396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field46396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field46396.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__46122__auto__);
}));

(sablono.core.password_field46396.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.password_field46396.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field46396);

/**
 * Creates a range input field.
 */
sablono.core.range_field46404 = (function sablono$core$range_field46404(var_args){
var G__46408 = arguments.length;
switch (G__46408) {
case 1:
return sablono.core.range_field46404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field46404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field46404.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__46122__auto__);
}));

(sablono.core.range_field46404.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.range_field46404.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field46404);

/**
 * Creates a search input field.
 */
sablono.core.search_field46413 = (function sablono$core$search_field46413(var_args){
var G__46417 = arguments.length;
switch (G__46417) {
case 1:
return sablono.core.search_field46413.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field46413.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__46122__auto__);
}));

(sablono.core.search_field46413.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.search_field46413.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field46413);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46423 = (function sablono$core$tel_field46423(var_args){
var G__46426 = arguments.length;
switch (G__46426) {
case 1:
return sablono.core.tel_field46423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field46423.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__46122__auto__);
}));

(sablono.core.tel_field46423.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.tel_field46423.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field46423);

/**
 * Creates a text input field.
 */
sablono.core.text_field46431 = (function sablono$core$text_field46431(var_args){
var G__46437 = arguments.length;
switch (G__46437) {
case 1:
return sablono.core.text_field46431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field46431.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__46122__auto__);
}));

(sablono.core.text_field46431.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.text_field46431.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field46431);

/**
 * Creates a time input field.
 */
sablono.core.time_field46444 = (function sablono$core$time_field46444(var_args){
var G__46446 = arguments.length;
switch (G__46446) {
case 1:
return sablono.core.time_field46444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field46444.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__46122__auto__);
}));

(sablono.core.time_field46444.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.time_field46444.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field46444);

/**
 * Creates a url input field.
 */
sablono.core.url_field46451 = (function sablono$core$url_field46451(var_args){
var G__46455 = arguments.length;
switch (G__46455) {
case 1:
return sablono.core.url_field46451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field46451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field46451.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__46122__auto__);
}));

(sablono.core.url_field46451.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.url_field46451.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field46451);

/**
 * Creates a week input field.
 */
sablono.core.week_field46459 = (function sablono$core$week_field46459(var_args){
var G__46463 = arguments.length;
switch (G__46463) {
case 1:
return sablono.core.week_field46459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field46459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field46459.cljs$core$IFn$_invoke$arity$1 = (function (name__46122__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__46122__auto__);
}));

(sablono.core.week_field46459.cljs$core$IFn$_invoke$arity$2 = (function (name__46122__auto__,value__46123__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__46122__auto__,value__46123__auto__);
}));

(sablono.core.week_field46459.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field46459);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box46468 = (function sablono$core$check_box46468(var_args){
var G__46472 = arguments.length;
switch (G__46472) {
case 1:
return sablono.core.check_box46468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box46468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box46468.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box46468.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box46468.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box46468.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box46468.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box46468);
/**
 * Creates a radio button.
 */
sablono.core.radio_button46483 = (function sablono$core$radio_button46483(var_args){
var G__46487 = arguments.length;
switch (G__46487) {
case 1:
return sablono.core.radio_button46483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button46483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button46483.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button46483.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button46483.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button46483.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button46483.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button46483);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options46512 = (function sablono$core$select_options46512(coll){
var iter__4529__auto__ = (function sablono$core$select_options46512_$_iter__46514(s__46515){
return (new cljs.core.LazySeq(null,(function (){
var s__46515__$1 = s__46515;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46515__$1);
if(temp__5735__auto__){
var s__46515__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46515__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46515__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46517 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46516 = (0);
while(true){
if((i__46516 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__46516);
cljs.core.chunk_append(b__46517,((cljs.core.sequential_QMARK_(x))?(function (){var vec__46519 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46519,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46519,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46519,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options46512.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options46512.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options46512.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__46816 = (i__46516 + (1));
i__46516 = G__46816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46517),sablono$core$select_options46512_$_iter__46514(cljs.core.chunk_rest(s__46515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46517),null);
}
} else {
var x = cljs.core.first(s__46515__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__46522 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46522,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46522,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46522,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options46512.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options46512.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options46512.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options46512_$_iter__46514(cljs.core.rest(s__46515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options46512);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down46525 = (function sablono$core$drop_down46525(var_args){
var G__46527 = arguments.length;
switch (G__46527) {
case 2:
return sablono.core.drop_down46525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down46525.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down46525.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down46525.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down46525.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down46525.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down46525);
/**
 * Creates a text area element.
 */
sablono.core.text_area46529 = (function sablono$core$text_area46529(var_args){
var G__46532 = arguments.length;
switch (G__46532) {
case 1:
return sablono.core.text_area46529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area46529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area46529.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area46529.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area46529.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area46529);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label46550 = (function sablono$core$label46550(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label46550);
/**
 * Creates a submit button.
 */
sablono.core.submit_button46562 = (function sablono$core$submit_button46562(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button46562);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button46566 = (function sablono$core$reset_button46566(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button46566);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to46571 = (function sablono$core$form_to46571(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46836 = arguments.length;
var i__4737__auto___46838 = (0);
while(true){
if((i__4737__auto___46838 < len__4736__auto___46836)){
args__4742__auto__.push((arguments[i__4737__auto___46838]));

var G__46839 = (i__4737__auto___46838 + (1));
i__4737__auto___46838 = G__46839;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to46571.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to46571.cljs$core$IFn$_invoke$arity$variadic = (function (p__46577,body){
var vec__46578 = p__46577;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46578,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46578,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to46571.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to46571.cljs$lang$applyTo = (function (seq46572){
var G__46573 = cljs.core.first(seq46572);
var seq46572__$1 = cljs.core.next(seq46572);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46573,seq46572__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to46571);

//# sourceMappingURL=sablono.core.js.map
