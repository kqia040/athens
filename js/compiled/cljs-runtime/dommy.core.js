goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__42868 = arguments.length;
switch (G__42868) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__42917 = arguments.length;
switch (G__42917) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__42938 = arguments.length;
switch (G__42938) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__42936_SHARP_){
return (!((p1__42936_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43936 = arguments.length;
var i__4737__auto___43937 = (0);
while(true){
if((i__4737__auto___43937 < len__4736__auto___43936)){
args__4742__auto__.push((arguments[i__4737__auto___43937]));

var G__43938 = (i__4737__auto___43937 + (1));
i__4737__auto___43937 = G__43938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__42992_43941 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42993_43942 = null;
var count__42994_43943 = (0);
var i__42995_43944 = (0);
while(true){
if((i__42995_43944 < count__42994_43943)){
var vec__43005_43946 = chunk__42993_43942.cljs$core$IIndexed$_nth$arity$2(null,i__42995_43944);
var k_43947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005_43946,(0),null);
var v_43948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005_43946,(1),null);
style.setProperty(dommy.utils.as_str(k_43947),v_43948);


var G__43950 = seq__42992_43941;
var G__43951 = chunk__42993_43942;
var G__43952 = count__42994_43943;
var G__43953 = (i__42995_43944 + (1));
seq__42992_43941 = G__43950;
chunk__42993_43942 = G__43951;
count__42994_43943 = G__43952;
i__42995_43944 = G__43953;
continue;
} else {
var temp__5735__auto___43957 = cljs.core.seq(seq__42992_43941);
if(temp__5735__auto___43957){
var seq__42992_43961__$1 = temp__5735__auto___43957;
if(cljs.core.chunked_seq_QMARK_(seq__42992_43961__$1)){
var c__4556__auto___43963 = cljs.core.chunk_first(seq__42992_43961__$1);
var G__43964 = cljs.core.chunk_rest(seq__42992_43961__$1);
var G__43965 = c__4556__auto___43963;
var G__43966 = cljs.core.count(c__4556__auto___43963);
var G__43967 = (0);
seq__42992_43941 = G__43964;
chunk__42993_43942 = G__43965;
count__42994_43943 = G__43966;
i__42995_43944 = G__43967;
continue;
} else {
var vec__43010_43968 = cljs.core.first(seq__42992_43961__$1);
var k_43969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010_43968,(0),null);
var v_43970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010_43968,(1),null);
style.setProperty(dommy.utils.as_str(k_43969),v_43970);


var G__43972 = cljs.core.next(seq__42992_43961__$1);
var G__43973 = null;
var G__43974 = (0);
var G__43975 = (0);
seq__42992_43941 = G__43972;
chunk__42993_43942 = G__43973;
count__42994_43943 = G__43974;
i__42995_43944 = G__43975;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq42986){
var G__42987 = cljs.core.first(seq42986);
var seq42986__$1 = cljs.core.next(seq42986);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42987,seq42986__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43984 = arguments.length;
var i__4737__auto___43985 = (0);
while(true){
if((i__4737__auto___43985 < len__4736__auto___43984)){
args__4742__auto__.push((arguments[i__4737__auto___43985]));

var G__43987 = (i__4737__auto___43985 + (1));
i__4737__auto___43985 = G__43987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__43027_43988 = cljs.core.seq(keywords);
var chunk__43028_43989 = null;
var count__43029_43990 = (0);
var i__43030_43991 = (0);
while(true){
if((i__43030_43991 < count__43029_43990)){
var kw_43992 = chunk__43028_43989.cljs$core$IIndexed$_nth$arity$2(null,i__43030_43991);
style.removeProperty(dommy.utils.as_str(kw_43992));


var G__43993 = seq__43027_43988;
var G__43994 = chunk__43028_43989;
var G__43995 = count__43029_43990;
var G__43996 = (i__43030_43991 + (1));
seq__43027_43988 = G__43993;
chunk__43028_43989 = G__43994;
count__43029_43990 = G__43995;
i__43030_43991 = G__43996;
continue;
} else {
var temp__5735__auto___43997 = cljs.core.seq(seq__43027_43988);
if(temp__5735__auto___43997){
var seq__43027_43999__$1 = temp__5735__auto___43997;
if(cljs.core.chunked_seq_QMARK_(seq__43027_43999__$1)){
var c__4556__auto___44001 = cljs.core.chunk_first(seq__43027_43999__$1);
var G__44002 = cljs.core.chunk_rest(seq__43027_43999__$1);
var G__44003 = c__4556__auto___44001;
var G__44004 = cljs.core.count(c__4556__auto___44001);
var G__44005 = (0);
seq__43027_43988 = G__44002;
chunk__43028_43989 = G__44003;
count__43029_43990 = G__44004;
i__43030_43991 = G__44005;
continue;
} else {
var kw_44008 = cljs.core.first(seq__43027_43999__$1);
style.removeProperty(dommy.utils.as_str(kw_44008));


var G__44009 = cljs.core.next(seq__43027_43999__$1);
var G__44010 = null;
var G__44011 = (0);
var G__44012 = (0);
seq__43027_43988 = G__44009;
chunk__43028_43989 = G__44010;
count__43029_43990 = G__44011;
i__43030_43991 = G__44012;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq43018){
var G__43019 = cljs.core.first(seq43018);
var seq43018__$1 = cljs.core.next(seq43018);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43019,seq43018__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44019 = arguments.length;
var i__4737__auto___44020 = (0);
while(true){
if((i__4737__auto___44020 < len__4736__auto___44019)){
args__4742__auto__.push((arguments[i__4737__auto___44020]));

var G__44022 = (i__4737__auto___44020 + (1));
i__4737__auto___44020 = G__44022;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__43057_44024 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__43058_44025 = null;
var count__43059_44026 = (0);
var i__43060_44027 = (0);
while(true){
if((i__43060_44027 < count__43059_44026)){
var vec__43071_44028 = chunk__43058_44025.cljs$core$IIndexed$_nth$arity$2(null,i__43060_44027);
var k_44029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43071_44028,(0),null);
var v_44030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43071_44028,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_44029,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_44030),"px"].join('')], 0));


var G__44037 = seq__43057_44024;
var G__44038 = chunk__43058_44025;
var G__44039 = count__43059_44026;
var G__44040 = (i__43060_44027 + (1));
seq__43057_44024 = G__44037;
chunk__43058_44025 = G__44038;
count__43059_44026 = G__44039;
i__43060_44027 = G__44040;
continue;
} else {
var temp__5735__auto___44042 = cljs.core.seq(seq__43057_44024);
if(temp__5735__auto___44042){
var seq__43057_44043__$1 = temp__5735__auto___44042;
if(cljs.core.chunked_seq_QMARK_(seq__43057_44043__$1)){
var c__4556__auto___44044 = cljs.core.chunk_first(seq__43057_44043__$1);
var G__44045 = cljs.core.chunk_rest(seq__43057_44043__$1);
var G__44046 = c__4556__auto___44044;
var G__44047 = cljs.core.count(c__4556__auto___44044);
var G__44048 = (0);
seq__43057_44024 = G__44045;
chunk__43058_44025 = G__44046;
count__43059_44026 = G__44047;
i__43060_44027 = G__44048;
continue;
} else {
var vec__43076_44049 = cljs.core.first(seq__43057_44043__$1);
var k_44050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43076_44049,(0),null);
var v_44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43076_44049,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_44050,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_44051),"px"].join('')], 0));


var G__44053 = cljs.core.next(seq__43057_44043__$1);
var G__44054 = null;
var G__44055 = (0);
var G__44056 = (0);
seq__43057_44024 = G__44053;
chunk__43058_44025 = G__44054;
count__43059_44026 = G__44055;
i__43060_44027 = G__44056;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq43048){
var G__43049 = cljs.core.first(seq43048);
var seq43048__$1 = cljs.core.next(seq43048);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43049,seq43048__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__43088 = arguments.length;
switch (G__43088) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44064 = arguments.length;
var i__4737__auto___44065 = (0);
while(true){
if((i__4737__auto___44065 < len__4736__auto___44064)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44065]));

var G__44067 = (i__4737__auto___44065 + (1));
i__4737__auto___44065 = G__44067;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__43095 = elem;
(G__43095[k__$1] = v);

return G__43095;
} else {
var G__43096 = elem;
G__43096.setAttribute(k__$1,v);

return G__43096;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__43098_44072 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__43099_44073 = null;
var count__43100_44074 = (0);
var i__43101_44075 = (0);
while(true){
if((i__43101_44075 < count__43100_44074)){
var vec__43121_44077 = chunk__43099_44073.cljs$core$IIndexed$_nth$arity$2(null,i__43101_44075);
var k_44078__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121_44077,(0),null);
var v_44079__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121_44077,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_44078__$1,v_44079__$1);


var G__44080 = seq__43098_44072;
var G__44081 = chunk__43099_44073;
var G__44082 = count__43100_44074;
var G__44083 = (i__43101_44075 + (1));
seq__43098_44072 = G__44080;
chunk__43099_44073 = G__44081;
count__43100_44074 = G__44082;
i__43101_44075 = G__44083;
continue;
} else {
var temp__5735__auto___44085 = cljs.core.seq(seq__43098_44072);
if(temp__5735__auto___44085){
var seq__43098_44086__$1 = temp__5735__auto___44085;
if(cljs.core.chunked_seq_QMARK_(seq__43098_44086__$1)){
var c__4556__auto___44087 = cljs.core.chunk_first(seq__43098_44086__$1);
var G__44088 = cljs.core.chunk_rest(seq__43098_44086__$1);
var G__44089 = c__4556__auto___44087;
var G__44090 = cljs.core.count(c__4556__auto___44087);
var G__44091 = (0);
seq__43098_44072 = G__44088;
chunk__43099_44073 = G__44089;
count__43100_44074 = G__44090;
i__43101_44075 = G__44091;
continue;
} else {
var vec__43128_44093 = cljs.core.first(seq__43098_44086__$1);
var k_44094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43128_44093,(0),null);
var v_44095__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43128_44093,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_44094__$1,v_44095__$1);


var G__44096 = cljs.core.next(seq__43098_44086__$1);
var G__44097 = null;
var G__44098 = (0);
var G__44099 = (0);
seq__43098_44072 = G__44096;
chunk__43099_44073 = G__44097;
count__43100_44074 = G__44098;
i__43101_44075 = G__44099;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq43083){
var G__43085 = cljs.core.first(seq43083);
var seq43083__$1 = cljs.core.next(seq43083);
var G__43086 = cljs.core.first(seq43083__$1);
var seq43083__$2 = cljs.core.next(seq43083__$1);
var G__43087 = cljs.core.first(seq43083__$2);
var seq43083__$3 = cljs.core.next(seq43083__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43085,G__43086,G__43087,seq43083__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__43144 = arguments.length;
switch (G__43144) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44101 = arguments.length;
var i__4737__auto___44103 = (0);
while(true){
if((i__4737__auto___44103 < len__4736__auto___44101)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44103]));

var G__44104 = (i__4737__auto___44103 + (1));
i__4737__auto___44103 = G__44104;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_44106__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__43152 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__43152.cljs$core$IFn$_invoke$arity$1 ? fexpr__43152.cljs$core$IFn$_invoke$arity$1(k_44106__$1) : fexpr__43152.call(null,k_44106__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_44106__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__43156_44108 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__43157_44109 = null;
var count__43158_44110 = (0);
var i__43159_44111 = (0);
while(true){
if((i__43159_44111 < count__43158_44110)){
var k_44112__$1 = chunk__43157_44109.cljs$core$IIndexed$_nth$arity$2(null,i__43159_44111);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_44112__$1);


var G__44113 = seq__43156_44108;
var G__44114 = chunk__43157_44109;
var G__44115 = count__43158_44110;
var G__44116 = (i__43159_44111 + (1));
seq__43156_44108 = G__44113;
chunk__43157_44109 = G__44114;
count__43158_44110 = G__44115;
i__43159_44111 = G__44116;
continue;
} else {
var temp__5735__auto___44118 = cljs.core.seq(seq__43156_44108);
if(temp__5735__auto___44118){
var seq__43156_44119__$1 = temp__5735__auto___44118;
if(cljs.core.chunked_seq_QMARK_(seq__43156_44119__$1)){
var c__4556__auto___44120 = cljs.core.chunk_first(seq__43156_44119__$1);
var G__44121 = cljs.core.chunk_rest(seq__43156_44119__$1);
var G__44122 = c__4556__auto___44120;
var G__44123 = cljs.core.count(c__4556__auto___44120);
var G__44124 = (0);
seq__43156_44108 = G__44121;
chunk__43157_44109 = G__44122;
count__43158_44110 = G__44123;
i__43159_44111 = G__44124;
continue;
} else {
var k_44125__$1 = cljs.core.first(seq__43156_44119__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_44125__$1);


var G__44127 = cljs.core.next(seq__43156_44119__$1);
var G__44128 = null;
var G__44129 = (0);
var G__44130 = (0);
seq__43156_44108 = G__44127;
chunk__43157_44109 = G__44128;
count__43158_44110 = G__44129;
i__43159_44111 = G__44130;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq43140){
var G__43141 = cljs.core.first(seq43140);
var seq43140__$1 = cljs.core.next(seq43140);
var G__43142 = cljs.core.first(seq43140__$1);
var seq43140__$2 = cljs.core.next(seq43140__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43141,G__43142,seq43140__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__43169 = arguments.length;
switch (G__43169) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__43183 = arguments.length;
switch (G__43183) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44136 = arguments.length;
var i__4737__auto___44137 = (0);
while(true){
if((i__4737__auto___44137 < len__4736__auto___44136)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44137]));

var G__44138 = (i__4737__auto___44137 + (1));
i__4737__auto___44137 = G__44138;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___44140 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___44140)){
var class_list_44141 = temp__5733__auto___44140;
var seq__43189_44142 = cljs.core.seq(classes__$1);
var chunk__43190_44143 = null;
var count__43191_44144 = (0);
var i__43192_44145 = (0);
while(true){
if((i__43192_44145 < count__43191_44144)){
var c_44147 = chunk__43190_44143.cljs$core$IIndexed$_nth$arity$2(null,i__43192_44145);
class_list_44141.add(c_44147);


var G__44148 = seq__43189_44142;
var G__44149 = chunk__43190_44143;
var G__44150 = count__43191_44144;
var G__44151 = (i__43192_44145 + (1));
seq__43189_44142 = G__44148;
chunk__43190_44143 = G__44149;
count__43191_44144 = G__44150;
i__43192_44145 = G__44151;
continue;
} else {
var temp__5735__auto___44152 = cljs.core.seq(seq__43189_44142);
if(temp__5735__auto___44152){
var seq__43189_44154__$1 = temp__5735__auto___44152;
if(cljs.core.chunked_seq_QMARK_(seq__43189_44154__$1)){
var c__4556__auto___44155 = cljs.core.chunk_first(seq__43189_44154__$1);
var G__44156 = cljs.core.chunk_rest(seq__43189_44154__$1);
var G__44157 = c__4556__auto___44155;
var G__44158 = cljs.core.count(c__4556__auto___44155);
var G__44159 = (0);
seq__43189_44142 = G__44156;
chunk__43190_44143 = G__44157;
count__43191_44144 = G__44158;
i__43192_44145 = G__44159;
continue;
} else {
var c_44161 = cljs.core.first(seq__43189_44154__$1);
class_list_44141.add(c_44161);


var G__44162 = cljs.core.next(seq__43189_44154__$1);
var G__44163 = null;
var G__44164 = (0);
var G__44165 = (0);
seq__43189_44142 = G__44162;
chunk__43190_44143 = G__44163;
count__43191_44144 = G__44164;
i__43192_44145 = G__44165;
continue;
}
} else {
}
}
break;
}
} else {
var seq__43199_44166 = cljs.core.seq(classes__$1);
var chunk__43200_44167 = null;
var count__43201_44168 = (0);
var i__43202_44169 = (0);
while(true){
if((i__43202_44169 < count__43201_44168)){
var c_44171 = chunk__43200_44167.cljs$core$IIndexed$_nth$arity$2(null,i__43202_44169);
var class_name_44172 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_44172,c_44171))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_44172 === ""))?c_44171:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_44172)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_44171)].join('')));
}


var G__44173 = seq__43199_44166;
var G__44174 = chunk__43200_44167;
var G__44175 = count__43201_44168;
var G__44176 = (i__43202_44169 + (1));
seq__43199_44166 = G__44173;
chunk__43200_44167 = G__44174;
count__43201_44168 = G__44175;
i__43202_44169 = G__44176;
continue;
} else {
var temp__5735__auto___44178 = cljs.core.seq(seq__43199_44166);
if(temp__5735__auto___44178){
var seq__43199_44179__$1 = temp__5735__auto___44178;
if(cljs.core.chunked_seq_QMARK_(seq__43199_44179__$1)){
var c__4556__auto___44180 = cljs.core.chunk_first(seq__43199_44179__$1);
var G__44181 = cljs.core.chunk_rest(seq__43199_44179__$1);
var G__44182 = c__4556__auto___44180;
var G__44183 = cljs.core.count(c__4556__auto___44180);
var G__44184 = (0);
seq__43199_44166 = G__44181;
chunk__43200_44167 = G__44182;
count__43201_44168 = G__44183;
i__43202_44169 = G__44184;
continue;
} else {
var c_44185 = cljs.core.first(seq__43199_44179__$1);
var class_name_44186 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_44186,c_44185))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_44186 === ""))?c_44185:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_44186)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_44185)].join('')));
}


var G__44188 = cljs.core.next(seq__43199_44179__$1);
var G__44189 = null;
var G__44190 = (0);
var G__44191 = (0);
seq__43199_44166 = G__44188;
chunk__43200_44167 = G__44189;
count__43201_44168 = G__44190;
i__43202_44169 = G__44191;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__43213_44192 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__43214_44193 = null;
var count__43215_44194 = (0);
var i__43216_44195 = (0);
while(true){
if((i__43216_44195 < count__43215_44194)){
var c_44196 = chunk__43214_44193.cljs$core$IIndexed$_nth$arity$2(null,i__43216_44195);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_44196);


var G__44197 = seq__43213_44192;
var G__44198 = chunk__43214_44193;
var G__44199 = count__43215_44194;
var G__44200 = (i__43216_44195 + (1));
seq__43213_44192 = G__44197;
chunk__43214_44193 = G__44198;
count__43215_44194 = G__44199;
i__43216_44195 = G__44200;
continue;
} else {
var temp__5735__auto___44202 = cljs.core.seq(seq__43213_44192);
if(temp__5735__auto___44202){
var seq__43213_44203__$1 = temp__5735__auto___44202;
if(cljs.core.chunked_seq_QMARK_(seq__43213_44203__$1)){
var c__4556__auto___44204 = cljs.core.chunk_first(seq__43213_44203__$1);
var G__44205 = cljs.core.chunk_rest(seq__43213_44203__$1);
var G__44206 = c__4556__auto___44204;
var G__44207 = cljs.core.count(c__4556__auto___44204);
var G__44208 = (0);
seq__43213_44192 = G__44205;
chunk__43214_44193 = G__44206;
count__43215_44194 = G__44207;
i__43216_44195 = G__44208;
continue;
} else {
var c_44209 = cljs.core.first(seq__43213_44203__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_44209);


var G__44211 = cljs.core.next(seq__43213_44203__$1);
var G__44212 = null;
var G__44213 = (0);
var G__44214 = (0);
seq__43213_44192 = G__44211;
chunk__43214_44193 = G__44212;
count__43215_44194 = G__44213;
i__43216_44195 = G__44214;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq43178){
var G__43179 = cljs.core.first(seq43178);
var seq43178__$1 = cljs.core.next(seq43178);
var G__43180 = cljs.core.first(seq43178__$1);
var seq43178__$2 = cljs.core.next(seq43178__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43179,G__43180,seq43178__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__43229 = arguments.length;
switch (G__43229) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44216 = arguments.length;
var i__4737__auto___44217 = (0);
while(true){
if((i__4737__auto___44217 < len__4736__auto___44216)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44217]));

var G__44218 = (i__4737__auto___44217 + (1));
i__4737__auto___44217 = G__44218;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___44221 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___44221)){
var class_list_44222 = temp__5733__auto___44221;
class_list_44222.remove(c__$1);
} else {
var class_name_44223 = dommy.core.class$(elem);
var new_class_name_44224 = dommy.utils.remove_class_str(class_name_44223,c__$1);
if((class_name_44223 === new_class_name_44224)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_44224);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__43231 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__43232 = null;
var count__43233 = (0);
var i__43234 = (0);
while(true){
if((i__43234 < count__43233)){
var c = chunk__43232.cljs$core$IIndexed$_nth$arity$2(null,i__43234);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__44229 = seq__43231;
var G__44230 = chunk__43232;
var G__44231 = count__43233;
var G__44232 = (i__43234 + (1));
seq__43231 = G__44229;
chunk__43232 = G__44230;
count__43233 = G__44231;
i__43234 = G__44232;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43231);
if(temp__5735__auto__){
var seq__43231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43231__$1);
var G__44233 = cljs.core.chunk_rest(seq__43231__$1);
var G__44234 = c__4556__auto__;
var G__44235 = cljs.core.count(c__4556__auto__);
var G__44236 = (0);
seq__43231 = G__44233;
chunk__43232 = G__44234;
count__43233 = G__44235;
i__43234 = G__44236;
continue;
} else {
var c = cljs.core.first(seq__43231__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__44237 = cljs.core.next(seq__43231__$1);
var G__44238 = null;
var G__44239 = (0);
var G__44240 = (0);
seq__43231 = G__44237;
chunk__43232 = G__44238;
count__43233 = G__44239;
i__43234 = G__44240;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq43226){
var G__43227 = cljs.core.first(seq43226);
var seq43226__$1 = cljs.core.next(seq43226);
var G__43228 = cljs.core.first(seq43226__$1);
var seq43226__$2 = cljs.core.next(seq43226__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43227,G__43228,seq43226__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__43295 = arguments.length;
switch (G__43295) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___44246 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___44246)){
var class_list_44247 = temp__5733__auto___44246;
class_list_44247.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__43324 = arguments.length;
switch (G__43324) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__43333 = arguments.length;
switch (G__43333) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__43350 = arguments.length;
switch (G__43350) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44257 = arguments.length;
var i__4737__auto___44258 = (0);
while(true){
if((i__4737__auto___44258 < len__4736__auto___44257)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44258]));

var G__44259 = (i__4737__auto___44258 + (1));
i__4737__auto___44258 = G__44259;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__43354 = parent;
G__43354.appendChild(child);

return G__43354;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43356_44261 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__43357_44262 = null;
var count__43358_44263 = (0);
var i__43359_44264 = (0);
while(true){
if((i__43359_44264 < count__43358_44263)){
var c_44266 = chunk__43357_44262.cljs$core$IIndexed$_nth$arity$2(null,i__43359_44264);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_44266);


var G__44267 = seq__43356_44261;
var G__44268 = chunk__43357_44262;
var G__44269 = count__43358_44263;
var G__44270 = (i__43359_44264 + (1));
seq__43356_44261 = G__44267;
chunk__43357_44262 = G__44268;
count__43358_44263 = G__44269;
i__43359_44264 = G__44270;
continue;
} else {
var temp__5735__auto___44272 = cljs.core.seq(seq__43356_44261);
if(temp__5735__auto___44272){
var seq__43356_44273__$1 = temp__5735__auto___44272;
if(cljs.core.chunked_seq_QMARK_(seq__43356_44273__$1)){
var c__4556__auto___44274 = cljs.core.chunk_first(seq__43356_44273__$1);
var G__44275 = cljs.core.chunk_rest(seq__43356_44273__$1);
var G__44276 = c__4556__auto___44274;
var G__44277 = cljs.core.count(c__4556__auto___44274);
var G__44278 = (0);
seq__43356_44261 = G__44275;
chunk__43357_44262 = G__44276;
count__43358_44263 = G__44277;
i__43359_44264 = G__44278;
continue;
} else {
var c_44279 = cljs.core.first(seq__43356_44273__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_44279);


var G__44280 = cljs.core.next(seq__43356_44273__$1);
var G__44281 = null;
var G__44282 = (0);
var G__44283 = (0);
seq__43356_44261 = G__44280;
chunk__43357_44262 = G__44281;
count__43358_44263 = G__44282;
i__43359_44264 = G__44283;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq43346){
var G__43347 = cljs.core.first(seq43346);
var seq43346__$1 = cljs.core.next(seq43346);
var G__43348 = cljs.core.first(seq43346__$1);
var seq43346__$2 = cljs.core.next(seq43346__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43347,G__43348,seq43346__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__43396 = arguments.length;
switch (G__43396) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44286 = arguments.length;
var i__4737__auto___44287 = (0);
while(true){
if((i__4737__auto___44287 < len__4736__auto___44286)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44287]));

var G__44288 = (i__4737__auto___44287 + (1));
i__4737__auto___44287 = G__44288;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__43402 = parent;
G__43402.insertBefore(child,parent.firstChild);

return G__43402;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43404_44290 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__43405_44291 = null;
var count__43406_44292 = (0);
var i__43407_44293 = (0);
while(true){
if((i__43407_44293 < count__43406_44292)){
var c_44295 = chunk__43405_44291.cljs$core$IIndexed$_nth$arity$2(null,i__43407_44293);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_44295);


var G__44296 = seq__43404_44290;
var G__44297 = chunk__43405_44291;
var G__44298 = count__43406_44292;
var G__44299 = (i__43407_44293 + (1));
seq__43404_44290 = G__44296;
chunk__43405_44291 = G__44297;
count__43406_44292 = G__44298;
i__43407_44293 = G__44299;
continue;
} else {
var temp__5735__auto___44300 = cljs.core.seq(seq__43404_44290);
if(temp__5735__auto___44300){
var seq__43404_44302__$1 = temp__5735__auto___44300;
if(cljs.core.chunked_seq_QMARK_(seq__43404_44302__$1)){
var c__4556__auto___44303 = cljs.core.chunk_first(seq__43404_44302__$1);
var G__44304 = cljs.core.chunk_rest(seq__43404_44302__$1);
var G__44305 = c__4556__auto___44303;
var G__44306 = cljs.core.count(c__4556__auto___44303);
var G__44307 = (0);
seq__43404_44290 = G__44304;
chunk__43405_44291 = G__44305;
count__43406_44292 = G__44306;
i__43407_44293 = G__44307;
continue;
} else {
var c_44308 = cljs.core.first(seq__43404_44302__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_44308);


var G__44309 = cljs.core.next(seq__43404_44302__$1);
var G__44310 = null;
var G__44311 = (0);
var G__44312 = (0);
seq__43404_44290 = G__44309;
chunk__43405_44291 = G__44310;
count__43406_44292 = G__44311;
i__43407_44293 = G__44312;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq43392){
var G__43393 = cljs.core.first(seq43392);
var seq43392__$1 = cljs.core.next(seq43392);
var G__43394 = cljs.core.first(seq43392__$1);
var seq43392__$2 = cljs.core.next(seq43392__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43393,G__43394,seq43392__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___44315 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___44315)){
var next_44316 = temp__5733__auto___44315;
dommy.core.insert_before_BANG_(elem,next_44316);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__43430 = arguments.length;
switch (G__43430) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__43433 = p;
G__43433.removeChild(elem);

return G__43433;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43435){
var vec__43436 = p__43435;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43436,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43436,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44322 = arguments.length;
var i__4737__auto___44324 = (0);
while(true){
if((i__4737__auto___44324 < len__4736__auto___44322)){
args__4742__auto__.push((arguments[i__4737__auto___44324]));

var G__44328 = (i__4737__auto___44324 + (1));
i__4737__auto___44324 = G__44328;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq43444){
var G__43445 = cljs.core.first(seq43444);
var seq43444__$1 = cljs.core.next(seq43444);
var G__43446 = cljs.core.first(seq43444__$1);
var seq43444__$2 = cljs.core.next(seq43444__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43445,G__43446,seq43444__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44331 = arguments.length;
var i__4737__auto___44332 = (0);
while(true){
if((i__4737__auto___44332 < len__4736__auto___44331)){
args__4742__auto__.push((arguments[i__4737__auto___44332]));

var G__44334 = (i__4737__auto___44332 + (1));
i__4737__auto___44332 = G__44334;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__43463_44336 = dommy.core.elem_and_selector(elem_sel);
var elem_44337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463_44336,(0),null);
var selector_44338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463_44336,(1),null);
var seq__43467_44339 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__43474_44340 = null;
var count__43475_44341 = (0);
var i__43476_44342 = (0);
while(true){
if((i__43476_44342 < count__43475_44341)){
var vec__43564_44344 = chunk__43474_44340.cljs$core$IIndexed$_nth$arity$2(null,i__43476_44342);
var orig_type_44345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43564_44344,(0),null);
var f_44346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43564_44344,(1),null);
var seq__43477_44347 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_44345,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_44345,cljs.core.identity])));
var chunk__43479_44348 = null;
var count__43480_44349 = (0);
var i__43481_44350 = (0);
while(true){
if((i__43481_44350 < count__43480_44349)){
var vec__43597_44352 = chunk__43479_44348.cljs$core$IIndexed$_nth$arity$2(null,i__43481_44350);
var actual_type_44353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597_44352,(0),null);
var factory_44354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597_44352,(1),null);
var canonical_f_44355 = (function (){var G__43606 = (factory_44354.cljs$core$IFn$_invoke$arity$1 ? factory_44354.cljs$core$IFn$_invoke$arity$1(f_44346) : factory_44354.call(null,f_44346));
var fexpr__43605 = (cljs.core.truth_(selector_44338)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_44337,selector_44338):cljs.core.identity);
return (fexpr__43605.cljs$core$IFn$_invoke$arity$1 ? fexpr__43605.cljs$core$IFn$_invoke$arity$1(G__43606) : fexpr__43605.call(null,G__43606));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44337,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44338,actual_type_44353,f_44346], null),canonical_f_44355], 0));

if(cljs.core.truth_(elem_44337.addEventListener)){
elem_44337.addEventListener(cljs.core.name(actual_type_44353),canonical_f_44355);
} else {
elem_44337.attachEvent(cljs.core.name(actual_type_44353),canonical_f_44355);
}


var G__44358 = seq__43477_44347;
var G__44359 = chunk__43479_44348;
var G__44360 = count__43480_44349;
var G__44361 = (i__43481_44350 + (1));
seq__43477_44347 = G__44358;
chunk__43479_44348 = G__44359;
count__43480_44349 = G__44360;
i__43481_44350 = G__44361;
continue;
} else {
var temp__5735__auto___44362 = cljs.core.seq(seq__43477_44347);
if(temp__5735__auto___44362){
var seq__43477_44363__$1 = temp__5735__auto___44362;
if(cljs.core.chunked_seq_QMARK_(seq__43477_44363__$1)){
var c__4556__auto___44365 = cljs.core.chunk_first(seq__43477_44363__$1);
var G__44366 = cljs.core.chunk_rest(seq__43477_44363__$1);
var G__44367 = c__4556__auto___44365;
var G__44368 = cljs.core.count(c__4556__auto___44365);
var G__44369 = (0);
seq__43477_44347 = G__44366;
chunk__43479_44348 = G__44367;
count__43480_44349 = G__44368;
i__43481_44350 = G__44369;
continue;
} else {
var vec__43619_44370 = cljs.core.first(seq__43477_44363__$1);
var actual_type_44371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43619_44370,(0),null);
var factory_44372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43619_44370,(1),null);
var canonical_f_44373 = (function (){var G__43623 = (factory_44372.cljs$core$IFn$_invoke$arity$1 ? factory_44372.cljs$core$IFn$_invoke$arity$1(f_44346) : factory_44372.call(null,f_44346));
var fexpr__43622 = (cljs.core.truth_(selector_44338)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_44337,selector_44338):cljs.core.identity);
return (fexpr__43622.cljs$core$IFn$_invoke$arity$1 ? fexpr__43622.cljs$core$IFn$_invoke$arity$1(G__43623) : fexpr__43622.call(null,G__43623));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44337,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44338,actual_type_44371,f_44346], null),canonical_f_44373], 0));

if(cljs.core.truth_(elem_44337.addEventListener)){
elem_44337.addEventListener(cljs.core.name(actual_type_44371),canonical_f_44373);
} else {
elem_44337.attachEvent(cljs.core.name(actual_type_44371),canonical_f_44373);
}


var G__44374 = cljs.core.next(seq__43477_44363__$1);
var G__44375 = null;
var G__44376 = (0);
var G__44377 = (0);
seq__43477_44347 = G__44374;
chunk__43479_44348 = G__44375;
count__43480_44349 = G__44376;
i__43481_44350 = G__44377;
continue;
}
} else {
}
}
break;
}

var G__44378 = seq__43467_44339;
var G__44379 = chunk__43474_44340;
var G__44380 = count__43475_44341;
var G__44381 = (i__43476_44342 + (1));
seq__43467_44339 = G__44378;
chunk__43474_44340 = G__44379;
count__43475_44341 = G__44380;
i__43476_44342 = G__44381;
continue;
} else {
var temp__5735__auto___44382 = cljs.core.seq(seq__43467_44339);
if(temp__5735__auto___44382){
var seq__43467_44383__$1 = temp__5735__auto___44382;
if(cljs.core.chunked_seq_QMARK_(seq__43467_44383__$1)){
var c__4556__auto___44384 = cljs.core.chunk_first(seq__43467_44383__$1);
var G__44385 = cljs.core.chunk_rest(seq__43467_44383__$1);
var G__44386 = c__4556__auto___44384;
var G__44387 = cljs.core.count(c__4556__auto___44384);
var G__44388 = (0);
seq__43467_44339 = G__44385;
chunk__43474_44340 = G__44386;
count__43475_44341 = G__44387;
i__43476_44342 = G__44388;
continue;
} else {
var vec__43628_44390 = cljs.core.first(seq__43467_44383__$1);
var orig_type_44391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43628_44390,(0),null);
var f_44392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43628_44390,(1),null);
var seq__43468_44396 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_44391,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_44391,cljs.core.identity])));
var chunk__43470_44397 = null;
var count__43471_44398 = (0);
var i__43472_44399 = (0);
while(true){
if((i__43472_44399 < count__43471_44398)){
var vec__43650_44400 = chunk__43470_44397.cljs$core$IIndexed$_nth$arity$2(null,i__43472_44399);
var actual_type_44401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43650_44400,(0),null);
var factory_44402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43650_44400,(1),null);
var canonical_f_44404 = (function (){var G__43655 = (factory_44402.cljs$core$IFn$_invoke$arity$1 ? factory_44402.cljs$core$IFn$_invoke$arity$1(f_44392) : factory_44402.call(null,f_44392));
var fexpr__43654 = (cljs.core.truth_(selector_44338)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_44337,selector_44338):cljs.core.identity);
return (fexpr__43654.cljs$core$IFn$_invoke$arity$1 ? fexpr__43654.cljs$core$IFn$_invoke$arity$1(G__43655) : fexpr__43654.call(null,G__43655));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44337,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44338,actual_type_44401,f_44392], null),canonical_f_44404], 0));

if(cljs.core.truth_(elem_44337.addEventListener)){
elem_44337.addEventListener(cljs.core.name(actual_type_44401),canonical_f_44404);
} else {
elem_44337.attachEvent(cljs.core.name(actual_type_44401),canonical_f_44404);
}


var G__44406 = seq__43468_44396;
var G__44407 = chunk__43470_44397;
var G__44408 = count__43471_44398;
var G__44409 = (i__43472_44399 + (1));
seq__43468_44396 = G__44406;
chunk__43470_44397 = G__44407;
count__43471_44398 = G__44408;
i__43472_44399 = G__44409;
continue;
} else {
var temp__5735__auto___44410__$1 = cljs.core.seq(seq__43468_44396);
if(temp__5735__auto___44410__$1){
var seq__43468_44411__$1 = temp__5735__auto___44410__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43468_44411__$1)){
var c__4556__auto___44412 = cljs.core.chunk_first(seq__43468_44411__$1);
var G__44413 = cljs.core.chunk_rest(seq__43468_44411__$1);
var G__44414 = c__4556__auto___44412;
var G__44415 = cljs.core.count(c__4556__auto___44412);
var G__44416 = (0);
seq__43468_44396 = G__44413;
chunk__43470_44397 = G__44414;
count__43471_44398 = G__44415;
i__43472_44399 = G__44416;
continue;
} else {
var vec__43658_44418 = cljs.core.first(seq__43468_44411__$1);
var actual_type_44419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43658_44418,(0),null);
var factory_44420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43658_44418,(1),null);
var canonical_f_44421 = (function (){var G__43662 = (factory_44420.cljs$core$IFn$_invoke$arity$1 ? factory_44420.cljs$core$IFn$_invoke$arity$1(f_44392) : factory_44420.call(null,f_44392));
var fexpr__43661 = (cljs.core.truth_(selector_44338)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_44337,selector_44338):cljs.core.identity);
return (fexpr__43661.cljs$core$IFn$_invoke$arity$1 ? fexpr__43661.cljs$core$IFn$_invoke$arity$1(G__43662) : fexpr__43661.call(null,G__43662));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44337,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44338,actual_type_44419,f_44392], null),canonical_f_44421], 0));

if(cljs.core.truth_(elem_44337.addEventListener)){
elem_44337.addEventListener(cljs.core.name(actual_type_44419),canonical_f_44421);
} else {
elem_44337.attachEvent(cljs.core.name(actual_type_44419),canonical_f_44421);
}


var G__44423 = cljs.core.next(seq__43468_44411__$1);
var G__44424 = null;
var G__44425 = (0);
var G__44426 = (0);
seq__43468_44396 = G__44423;
chunk__43470_44397 = G__44424;
count__43471_44398 = G__44425;
i__43472_44399 = G__44426;
continue;
}
} else {
}
}
break;
}

var G__44427 = cljs.core.next(seq__43467_44383__$1);
var G__44428 = null;
var G__44429 = (0);
var G__44430 = (0);
seq__43467_44339 = G__44427;
chunk__43474_44340 = G__44428;
count__43475_44341 = G__44429;
i__43476_44342 = G__44430;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq43458){
var G__43459 = cljs.core.first(seq43458);
var seq43458__$1 = cljs.core.next(seq43458);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43459,seq43458__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44432 = arguments.length;
var i__4737__auto___44433 = (0);
while(true){
if((i__4737__auto___44433 < len__4736__auto___44432)){
args__4742__auto__.push((arguments[i__4737__auto___44433]));

var G__44435 = (i__4737__auto___44433 + (1));
i__4737__auto___44433 = G__44435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__43672_44437 = dommy.core.elem_and_selector(elem_sel);
var elem_44438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672_44437,(0),null);
var selector_44439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672_44437,(1),null);
var seq__43675_44440 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__43684_44441 = null;
var count__43685_44442 = (0);
var i__43686_44443 = (0);
while(true){
if((i__43686_44443 < count__43685_44442)){
var vec__43767_44445 = chunk__43684_44441.cljs$core$IIndexed$_nth$arity$2(null,i__43686_44443);
var orig_type_44446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43767_44445,(0),null);
var f_44447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43767_44445,(1),null);
var seq__43687_44448 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_44446,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_44446,cljs.core.identity])));
var chunk__43689_44449 = null;
var count__43690_44450 = (0);
var i__43691_44451 = (0);
while(true){
if((i__43691_44451 < count__43690_44450)){
var vec__43786_44453 = chunk__43689_44449.cljs$core$IIndexed$_nth$arity$2(null,i__43691_44451);
var actual_type_44454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43786_44453,(0),null);
var __44455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43786_44453,(1),null);
var keys_44456 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44439,actual_type_44454,f_44447], null);
var canonical_f_44457 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_44438),keys_44456);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44438,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_44456], 0));

if(cljs.core.truth_(elem_44438.removeEventListener)){
elem_44438.removeEventListener(cljs.core.name(actual_type_44454),canonical_f_44457);
} else {
elem_44438.detachEvent(cljs.core.name(actual_type_44454),canonical_f_44457);
}


var G__44459 = seq__43687_44448;
var G__44460 = chunk__43689_44449;
var G__44461 = count__43690_44450;
var G__44462 = (i__43691_44451 + (1));
seq__43687_44448 = G__44459;
chunk__43689_44449 = G__44460;
count__43690_44450 = G__44461;
i__43691_44451 = G__44462;
continue;
} else {
var temp__5735__auto___44463 = cljs.core.seq(seq__43687_44448);
if(temp__5735__auto___44463){
var seq__43687_44465__$1 = temp__5735__auto___44463;
if(cljs.core.chunked_seq_QMARK_(seq__43687_44465__$1)){
var c__4556__auto___44466 = cljs.core.chunk_first(seq__43687_44465__$1);
var G__44467 = cljs.core.chunk_rest(seq__43687_44465__$1);
var G__44468 = c__4556__auto___44466;
var G__44469 = cljs.core.count(c__4556__auto___44466);
var G__44470 = (0);
seq__43687_44448 = G__44467;
chunk__43689_44449 = G__44468;
count__43690_44450 = G__44469;
i__43691_44451 = G__44470;
continue;
} else {
var vec__43807_44471 = cljs.core.first(seq__43687_44465__$1);
var actual_type_44472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43807_44471,(0),null);
var __44473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43807_44471,(1),null);
var keys_44475 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44439,actual_type_44472,f_44447], null);
var canonical_f_44476 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_44438),keys_44475);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44438,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_44475], 0));

if(cljs.core.truth_(elem_44438.removeEventListener)){
elem_44438.removeEventListener(cljs.core.name(actual_type_44472),canonical_f_44476);
} else {
elem_44438.detachEvent(cljs.core.name(actual_type_44472),canonical_f_44476);
}


var G__44477 = cljs.core.next(seq__43687_44465__$1);
var G__44478 = null;
var G__44479 = (0);
var G__44480 = (0);
seq__43687_44448 = G__44477;
chunk__43689_44449 = G__44478;
count__43690_44450 = G__44479;
i__43691_44451 = G__44480;
continue;
}
} else {
}
}
break;
}

var G__44482 = seq__43675_44440;
var G__44483 = chunk__43684_44441;
var G__44484 = count__43685_44442;
var G__44485 = (i__43686_44443 + (1));
seq__43675_44440 = G__44482;
chunk__43684_44441 = G__44483;
count__43685_44442 = G__44484;
i__43686_44443 = G__44485;
continue;
} else {
var temp__5735__auto___44486 = cljs.core.seq(seq__43675_44440);
if(temp__5735__auto___44486){
var seq__43675_44487__$1 = temp__5735__auto___44486;
if(cljs.core.chunked_seq_QMARK_(seq__43675_44487__$1)){
var c__4556__auto___44488 = cljs.core.chunk_first(seq__43675_44487__$1);
var G__44489 = cljs.core.chunk_rest(seq__43675_44487__$1);
var G__44490 = c__4556__auto___44488;
var G__44491 = cljs.core.count(c__4556__auto___44488);
var G__44492 = (0);
seq__43675_44440 = G__44489;
chunk__43684_44441 = G__44490;
count__43685_44442 = G__44491;
i__43686_44443 = G__44492;
continue;
} else {
var vec__43813_44494 = cljs.core.first(seq__43675_44487__$1);
var orig_type_44495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43813_44494,(0),null);
var f_44496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43813_44494,(1),null);
var seq__43677_44497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_44495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_44495,cljs.core.identity])));
var chunk__43679_44498 = null;
var count__43680_44499 = (0);
var i__43681_44500 = (0);
while(true){
if((i__43681_44500 < count__43680_44499)){
var vec__43828_44502 = chunk__43679_44498.cljs$core$IIndexed$_nth$arity$2(null,i__43681_44500);
var actual_type_44503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43828_44502,(0),null);
var __44504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43828_44502,(1),null);
var keys_44505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44439,actual_type_44503,f_44496], null);
var canonical_f_44506 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_44438),keys_44505);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44438,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_44505], 0));

if(cljs.core.truth_(elem_44438.removeEventListener)){
elem_44438.removeEventListener(cljs.core.name(actual_type_44503),canonical_f_44506);
} else {
elem_44438.detachEvent(cljs.core.name(actual_type_44503),canonical_f_44506);
}


var G__44508 = seq__43677_44497;
var G__44509 = chunk__43679_44498;
var G__44510 = count__43680_44499;
var G__44511 = (i__43681_44500 + (1));
seq__43677_44497 = G__44508;
chunk__43679_44498 = G__44509;
count__43680_44499 = G__44510;
i__43681_44500 = G__44511;
continue;
} else {
var temp__5735__auto___44512__$1 = cljs.core.seq(seq__43677_44497);
if(temp__5735__auto___44512__$1){
var seq__43677_44513__$1 = temp__5735__auto___44512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43677_44513__$1)){
var c__4556__auto___44515 = cljs.core.chunk_first(seq__43677_44513__$1);
var G__44516 = cljs.core.chunk_rest(seq__43677_44513__$1);
var G__44517 = c__4556__auto___44515;
var G__44518 = cljs.core.count(c__4556__auto___44515);
var G__44519 = (0);
seq__43677_44497 = G__44516;
chunk__43679_44498 = G__44517;
count__43680_44499 = G__44518;
i__43681_44500 = G__44519;
continue;
} else {
var vec__43838_44520 = cljs.core.first(seq__43677_44513__$1);
var actual_type_44521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43838_44520,(0),null);
var __44522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43838_44520,(1),null);
var keys_44524 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44439,actual_type_44521,f_44496], null);
var canonical_f_44525 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_44438),keys_44524);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_44438,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_44524], 0));

if(cljs.core.truth_(elem_44438.removeEventListener)){
elem_44438.removeEventListener(cljs.core.name(actual_type_44521),canonical_f_44525);
} else {
elem_44438.detachEvent(cljs.core.name(actual_type_44521),canonical_f_44525);
}


var G__44527 = cljs.core.next(seq__43677_44513__$1);
var G__44528 = null;
var G__44529 = (0);
var G__44530 = (0);
seq__43677_44497 = G__44527;
chunk__43679_44498 = G__44528;
count__43680_44499 = G__44529;
i__43681_44500 = G__44530;
continue;
}
} else {
}
}
break;
}

var G__44531 = cljs.core.next(seq__43675_44487__$1);
var G__44532 = null;
var G__44533 = (0);
var G__44534 = (0);
seq__43675_44440 = G__44531;
chunk__43684_44441 = G__44532;
count__43685_44442 = G__44533;
i__43686_44443 = G__44534;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq43668){
var G__43669 = cljs.core.first(seq43668);
var seq43668__$1 = cljs.core.next(seq43668);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43669,seq43668__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44536 = arguments.length;
var i__4737__auto___44537 = (0);
while(true){
if((i__4737__auto___44537 < len__4736__auto___44536)){
args__4742__auto__.push((arguments[i__4737__auto___44537]));

var G__44538 = (i__4737__auto___44537 + (1));
i__4737__auto___44537 = G__44538;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__43860_44540 = dommy.core.elem_and_selector(elem_sel);
var elem_44541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43860_44540,(0),null);
var selector_44542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43860_44540,(1),null);
var seq__43863_44543 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__43864_44544 = null;
var count__43865_44545 = (0);
var i__43866_44546 = (0);
while(true){
if((i__43866_44546 < count__43865_44545)){
var vec__43881_44548 = chunk__43864_44544.cljs$core$IIndexed$_nth$arity$2(null,i__43866_44546);
var type_44549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43881_44548,(0),null);
var f_44550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43881_44548,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_44549,((function (seq__43863_44543,chunk__43864_44544,count__43865_44545,i__43866_44546,vec__43881_44548,type_44549,f_44550,vec__43860_44540,elem_44541,selector_44542){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_44549,dommy$core$this_fn], 0));

return (f_44550.cljs$core$IFn$_invoke$arity$1 ? f_44550.cljs$core$IFn$_invoke$arity$1(e) : f_44550.call(null,e));
});})(seq__43863_44543,chunk__43864_44544,count__43865_44545,i__43866_44546,vec__43881_44548,type_44549,f_44550,vec__43860_44540,elem_44541,selector_44542))
], 0));


var G__44552 = seq__43863_44543;
var G__44553 = chunk__43864_44544;
var G__44554 = count__43865_44545;
var G__44555 = (i__43866_44546 + (1));
seq__43863_44543 = G__44552;
chunk__43864_44544 = G__44553;
count__43865_44545 = G__44554;
i__43866_44546 = G__44555;
continue;
} else {
var temp__5735__auto___44556 = cljs.core.seq(seq__43863_44543);
if(temp__5735__auto___44556){
var seq__43863_44557__$1 = temp__5735__auto___44556;
if(cljs.core.chunked_seq_QMARK_(seq__43863_44557__$1)){
var c__4556__auto___44558 = cljs.core.chunk_first(seq__43863_44557__$1);
var G__44559 = cljs.core.chunk_rest(seq__43863_44557__$1);
var G__44560 = c__4556__auto___44558;
var G__44561 = cljs.core.count(c__4556__auto___44558);
var G__44562 = (0);
seq__43863_44543 = G__44559;
chunk__43864_44544 = G__44560;
count__43865_44545 = G__44561;
i__43866_44546 = G__44562;
continue;
} else {
var vec__43887_44564 = cljs.core.first(seq__43863_44557__$1);
var type_44565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43887_44564,(0),null);
var f_44566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43887_44564,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_44565,((function (seq__43863_44543,chunk__43864_44544,count__43865_44545,i__43866_44546,vec__43887_44564,type_44565,f_44566,seq__43863_44557__$1,temp__5735__auto___44556,vec__43860_44540,elem_44541,selector_44542){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_44565,dommy$core$this_fn], 0));

return (f_44566.cljs$core$IFn$_invoke$arity$1 ? f_44566.cljs$core$IFn$_invoke$arity$1(e) : f_44566.call(null,e));
});})(seq__43863_44543,chunk__43864_44544,count__43865_44545,i__43866_44546,vec__43887_44564,type_44565,f_44566,seq__43863_44557__$1,temp__5735__auto___44556,vec__43860_44540,elem_44541,selector_44542))
], 0));


var G__44568 = cljs.core.next(seq__43863_44557__$1);
var G__44569 = null;
var G__44570 = (0);
var G__44571 = (0);
seq__43863_44543 = G__44568;
chunk__43864_44544 = G__44569;
count__43865_44545 = G__44570;
i__43866_44546 = G__44571;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq43846){
var G__43847 = cljs.core.first(seq43846);
var seq43846__$1 = cljs.core.next(seq43846);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43847,seq43846__$1);
}));


//# sourceMappingURL=dommy.core.js.map
