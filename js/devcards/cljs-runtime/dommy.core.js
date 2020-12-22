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
var G__39996 = arguments.length;
switch (G__39996) {
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
var G__40022 = arguments.length;
switch (G__40022) {
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
var G__40037 = arguments.length;
switch (G__40037) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__40034_SHARP_){
return (!((p1__40034_SHARP_ === base)));
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
var len__4736__auto___41414 = arguments.length;
var i__4737__auto___41415 = (0);
while(true){
if((i__4737__auto___41415 < len__4736__auto___41414)){
args__4742__auto__.push((arguments[i__4737__auto___41415]));

var G__41416 = (i__4737__auto___41415 + (1));
i__4737__auto___41415 = G__41416;
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
var seq__40150_41474 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40151_41475 = null;
var count__40152_41476 = (0);
var i__40153_41477 = (0);
while(true){
if((i__40153_41477 < count__40152_41476)){
var vec__40174_41479 = chunk__40151_41475.cljs$core$IIndexed$_nth$arity$2(null,i__40153_41477);
var k_41480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40174_41479,(0),null);
var v_41481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40174_41479,(1),null);
style.setProperty(dommy.utils.as_str(k_41480),v_41481);


var G__41483 = seq__40150_41474;
var G__41484 = chunk__40151_41475;
var G__41485 = count__40152_41476;
var G__41486 = (i__40153_41477 + (1));
seq__40150_41474 = G__41483;
chunk__40151_41475 = G__41484;
count__40152_41476 = G__41485;
i__40153_41477 = G__41486;
continue;
} else {
var temp__5735__auto___41487 = cljs.core.seq(seq__40150_41474);
if(temp__5735__auto___41487){
var seq__40150_41515__$1 = temp__5735__auto___41487;
if(cljs.core.chunked_seq_QMARK_(seq__40150_41515__$1)){
var c__4556__auto___41516 = cljs.core.chunk_first(seq__40150_41515__$1);
var G__41517 = cljs.core.chunk_rest(seq__40150_41515__$1);
var G__41518 = c__4556__auto___41516;
var G__41519 = cljs.core.count(c__4556__auto___41516);
var G__41520 = (0);
seq__40150_41474 = G__41517;
chunk__40151_41475 = G__41518;
count__40152_41476 = G__41519;
i__40153_41477 = G__41520;
continue;
} else {
var vec__40189_41521 = cljs.core.first(seq__40150_41515__$1);
var k_41522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40189_41521,(0),null);
var v_41523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40189_41521,(1),null);
style.setProperty(dommy.utils.as_str(k_41522),v_41523);


var G__41525 = cljs.core.next(seq__40150_41515__$1);
var G__41526 = null;
var G__41527 = (0);
var G__41528 = (0);
seq__40150_41474 = G__41525;
chunk__40151_41475 = G__41526;
count__40152_41476 = G__41527;
i__40153_41477 = G__41528;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40129){
var G__40130 = cljs.core.first(seq40129);
var seq40129__$1 = cljs.core.next(seq40129);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40130,seq40129__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41536 = arguments.length;
var i__4737__auto___41537 = (0);
while(true){
if((i__4737__auto___41537 < len__4736__auto___41536)){
args__4742__auto__.push((arguments[i__4737__auto___41537]));

var G__41540 = (i__4737__auto___41537 + (1));
i__4737__auto___41537 = G__41540;
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
var seq__40213_41545 = cljs.core.seq(keywords);
var chunk__40214_41546 = null;
var count__40215_41547 = (0);
var i__40216_41548 = (0);
while(true){
if((i__40216_41548 < count__40215_41547)){
var kw_41551 = chunk__40214_41546.cljs$core$IIndexed$_nth$arity$2(null,i__40216_41548);
style.removeProperty(dommy.utils.as_str(kw_41551));


var G__41552 = seq__40213_41545;
var G__41553 = chunk__40214_41546;
var G__41554 = count__40215_41547;
var G__41555 = (i__40216_41548 + (1));
seq__40213_41545 = G__41552;
chunk__40214_41546 = G__41553;
count__40215_41547 = G__41554;
i__40216_41548 = G__41555;
continue;
} else {
var temp__5735__auto___41556 = cljs.core.seq(seq__40213_41545);
if(temp__5735__auto___41556){
var seq__40213_41557__$1 = temp__5735__auto___41556;
if(cljs.core.chunked_seq_QMARK_(seq__40213_41557__$1)){
var c__4556__auto___41585 = cljs.core.chunk_first(seq__40213_41557__$1);
var G__41586 = cljs.core.chunk_rest(seq__40213_41557__$1);
var G__41587 = c__4556__auto___41585;
var G__41588 = cljs.core.count(c__4556__auto___41585);
var G__41589 = (0);
seq__40213_41545 = G__41586;
chunk__40214_41546 = G__41587;
count__40215_41547 = G__41588;
i__40216_41548 = G__41589;
continue;
} else {
var kw_41590 = cljs.core.first(seq__40213_41557__$1);
style.removeProperty(dommy.utils.as_str(kw_41590));


var G__41591 = cljs.core.next(seq__40213_41557__$1);
var G__41592 = null;
var G__41593 = (0);
var G__41594 = (0);
seq__40213_41545 = G__41591;
chunk__40214_41546 = G__41592;
count__40215_41547 = G__41593;
i__40216_41548 = G__41594;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40209){
var G__40210 = cljs.core.first(seq40209);
var seq40209__$1 = cljs.core.next(seq40209);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40210,seq40209__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41597 = arguments.length;
var i__4737__auto___41598 = (0);
while(true){
if((i__4737__auto___41598 < len__4736__auto___41597)){
args__4742__auto__.push((arguments[i__4737__auto___41598]));

var G__41599 = (i__4737__auto___41598 + (1));
i__4737__auto___41598 = G__41599;
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

var seq__40260_41605 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40261_41606 = null;
var count__40262_41607 = (0);
var i__40263_41608 = (0);
while(true){
if((i__40263_41608 < count__40262_41607)){
var vec__40289_41609 = chunk__40261_41606.cljs$core$IIndexed$_nth$arity$2(null,i__40263_41608);
var k_41610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289_41609,(0),null);
var v_41611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289_41609,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41610,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41611),"px"].join('')], 0));


var G__41639 = seq__40260_41605;
var G__41640 = chunk__40261_41606;
var G__41641 = count__40262_41607;
var G__41642 = (i__40263_41608 + (1));
seq__40260_41605 = G__41639;
chunk__40261_41606 = G__41640;
count__40262_41607 = G__41641;
i__40263_41608 = G__41642;
continue;
} else {
var temp__5735__auto___41643 = cljs.core.seq(seq__40260_41605);
if(temp__5735__auto___41643){
var seq__40260_41644__$1 = temp__5735__auto___41643;
if(cljs.core.chunked_seq_QMARK_(seq__40260_41644__$1)){
var c__4556__auto___41646 = cljs.core.chunk_first(seq__40260_41644__$1);
var G__41647 = cljs.core.chunk_rest(seq__40260_41644__$1);
var G__41648 = c__4556__auto___41646;
var G__41649 = cljs.core.count(c__4556__auto___41646);
var G__41650 = (0);
seq__40260_41605 = G__41647;
chunk__40261_41606 = G__41648;
count__40262_41607 = G__41649;
i__40263_41608 = G__41650;
continue;
} else {
var vec__40303_41651 = cljs.core.first(seq__40260_41644__$1);
var k_41652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40303_41651,(0),null);
var v_41653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40303_41651,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41652,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41653),"px"].join('')], 0));


var G__41658 = cljs.core.next(seq__40260_41644__$1);
var G__41659 = null;
var G__41660 = (0);
var G__41661 = (0);
seq__40260_41605 = G__41658;
chunk__40261_41606 = G__41659;
count__40262_41607 = G__41660;
i__40263_41608 = G__41661;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40246){
var G__40247 = cljs.core.first(seq40246);
var seq40246__$1 = cljs.core.next(seq40246);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40247,seq40246__$1);
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
var G__40319 = arguments.length;
switch (G__40319) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___41664 = arguments.length;
var i__4737__auto___41666 = (0);
while(true){
if((i__4737__auto___41666 < len__4736__auto___41664)){
args_arr__4757__auto__.push((arguments[i__4737__auto___41666]));

var G__41668 = (i__4737__auto___41666 + (1));
i__4737__auto___41666 = G__41668;
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
var G__40325 = elem;
(G__40325[k__$1] = v);

return G__40325;
} else {
var G__40326 = elem;
G__40326.setAttribute(k__$1,v);

return G__40326;
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

var seq__40333_41672 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40334_41673 = null;
var count__40335_41674 = (0);
var i__40336_41675 = (0);
while(true){
if((i__40336_41675 < count__40335_41674)){
var vec__40351_41678 = chunk__40334_41673.cljs$core$IIndexed$_nth$arity$2(null,i__40336_41675);
var k_41679__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40351_41678,(0),null);
var v_41680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40351_41678,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41679__$1,v_41680__$1);


var G__41686 = seq__40333_41672;
var G__41687 = chunk__40334_41673;
var G__41688 = count__40335_41674;
var G__41689 = (i__40336_41675 + (1));
seq__40333_41672 = G__41686;
chunk__40334_41673 = G__41687;
count__40335_41674 = G__41688;
i__40336_41675 = G__41689;
continue;
} else {
var temp__5735__auto___41690 = cljs.core.seq(seq__40333_41672);
if(temp__5735__auto___41690){
var seq__40333_41709__$1 = temp__5735__auto___41690;
if(cljs.core.chunked_seq_QMARK_(seq__40333_41709__$1)){
var c__4556__auto___41710 = cljs.core.chunk_first(seq__40333_41709__$1);
var G__41711 = cljs.core.chunk_rest(seq__40333_41709__$1);
var G__41712 = c__4556__auto___41710;
var G__41713 = cljs.core.count(c__4556__auto___41710);
var G__41714 = (0);
seq__40333_41672 = G__41711;
chunk__40334_41673 = G__41712;
count__40335_41674 = G__41713;
i__40336_41675 = G__41714;
continue;
} else {
var vec__40356_41715 = cljs.core.first(seq__40333_41709__$1);
var k_41716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40356_41715,(0),null);
var v_41717__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40356_41715,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41716__$1,v_41717__$1);


var G__41719 = cljs.core.next(seq__40333_41709__$1);
var G__41720 = null;
var G__41721 = (0);
var G__41722 = (0);
seq__40333_41672 = G__41719;
chunk__40334_41673 = G__41720;
count__40335_41674 = G__41721;
i__40336_41675 = G__41722;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40314){
var G__40315 = cljs.core.first(seq40314);
var seq40314__$1 = cljs.core.next(seq40314);
var G__40316 = cljs.core.first(seq40314__$1);
var seq40314__$2 = cljs.core.next(seq40314__$1);
var G__40317 = cljs.core.first(seq40314__$2);
var seq40314__$3 = cljs.core.next(seq40314__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40315,G__40316,G__40317,seq40314__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40370 = arguments.length;
switch (G__40370) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___41727 = arguments.length;
var i__4737__auto___41728 = (0);
while(true){
if((i__4737__auto___41728 < len__4736__auto___41727)){
args_arr__4757__auto__.push((arguments[i__4737__auto___41728]));

var G__41731 = (i__4737__auto___41728 + (1));
i__4737__auto___41728 = G__41731;
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
var k_41737__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40375 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40375.cljs$core$IFn$_invoke$arity$1 ? fexpr__40375.cljs$core$IFn$_invoke$arity$1(k_41737__$1) : fexpr__40375.call(null,k_41737__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41737__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40378_41738 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40379_41739 = null;
var count__40380_41740 = (0);
var i__40381_41741 = (0);
while(true){
if((i__40381_41741 < count__40380_41740)){
var k_41781__$1 = chunk__40379_41739.cljs$core$IIndexed$_nth$arity$2(null,i__40381_41741);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41781__$1);


var G__41782 = seq__40378_41738;
var G__41783 = chunk__40379_41739;
var G__41784 = count__40380_41740;
var G__41785 = (i__40381_41741 + (1));
seq__40378_41738 = G__41782;
chunk__40379_41739 = G__41783;
count__40380_41740 = G__41784;
i__40381_41741 = G__41785;
continue;
} else {
var temp__5735__auto___41787 = cljs.core.seq(seq__40378_41738);
if(temp__5735__auto___41787){
var seq__40378_41789__$1 = temp__5735__auto___41787;
if(cljs.core.chunked_seq_QMARK_(seq__40378_41789__$1)){
var c__4556__auto___41793 = cljs.core.chunk_first(seq__40378_41789__$1);
var G__41795 = cljs.core.chunk_rest(seq__40378_41789__$1);
var G__41796 = c__4556__auto___41793;
var G__41797 = cljs.core.count(c__4556__auto___41793);
var G__41798 = (0);
seq__40378_41738 = G__41795;
chunk__40379_41739 = G__41796;
count__40380_41740 = G__41797;
i__40381_41741 = G__41798;
continue;
} else {
var k_41799__$1 = cljs.core.first(seq__40378_41789__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41799__$1);


var G__41800 = cljs.core.next(seq__40378_41789__$1);
var G__41801 = null;
var G__41802 = (0);
var G__41803 = (0);
seq__40378_41738 = G__41800;
chunk__40379_41739 = G__41801;
count__40380_41740 = G__41802;
i__40381_41741 = G__41803;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40367){
var G__40368 = cljs.core.first(seq40367);
var seq40367__$1 = cljs.core.next(seq40367);
var G__40369 = cljs.core.first(seq40367__$1);
var seq40367__$2 = cljs.core.next(seq40367__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40368,G__40369,seq40367__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40408 = arguments.length;
switch (G__40408) {
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
var G__40421 = arguments.length;
switch (G__40421) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___41818 = arguments.length;
var i__4737__auto___41820 = (0);
while(true){
if((i__4737__auto___41820 < len__4736__auto___41818)){
args_arr__4757__auto__.push((arguments[i__4737__auto___41820]));

var G__41827 = (i__4737__auto___41820 + (1));
i__4737__auto___41820 = G__41827;
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
var temp__5733__auto___41831 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41831)){
var class_list_41832 = temp__5733__auto___41831;
var seq__40429_41833 = cljs.core.seq(classes__$1);
var chunk__40430_41834 = null;
var count__40431_41835 = (0);
var i__40432_41836 = (0);
while(true){
if((i__40432_41836 < count__40431_41835)){
var c_41837 = chunk__40430_41834.cljs$core$IIndexed$_nth$arity$2(null,i__40432_41836);
class_list_41832.add(c_41837);


var G__41838 = seq__40429_41833;
var G__41839 = chunk__40430_41834;
var G__41840 = count__40431_41835;
var G__41841 = (i__40432_41836 + (1));
seq__40429_41833 = G__41838;
chunk__40430_41834 = G__41839;
count__40431_41835 = G__41840;
i__40432_41836 = G__41841;
continue;
} else {
var temp__5735__auto___41845 = cljs.core.seq(seq__40429_41833);
if(temp__5735__auto___41845){
var seq__40429_41846__$1 = temp__5735__auto___41845;
if(cljs.core.chunked_seq_QMARK_(seq__40429_41846__$1)){
var c__4556__auto___41847 = cljs.core.chunk_first(seq__40429_41846__$1);
var G__41848 = cljs.core.chunk_rest(seq__40429_41846__$1);
var G__41849 = c__4556__auto___41847;
var G__41850 = cljs.core.count(c__4556__auto___41847);
var G__41851 = (0);
seq__40429_41833 = G__41848;
chunk__40430_41834 = G__41849;
count__40431_41835 = G__41850;
i__40432_41836 = G__41851;
continue;
} else {
var c_41854 = cljs.core.first(seq__40429_41846__$1);
class_list_41832.add(c_41854);


var G__41855 = cljs.core.next(seq__40429_41846__$1);
var G__41856 = null;
var G__41857 = (0);
var G__41858 = (0);
seq__40429_41833 = G__41855;
chunk__40430_41834 = G__41856;
count__40431_41835 = G__41857;
i__40432_41836 = G__41858;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40442_41859 = cljs.core.seq(classes__$1);
var chunk__40443_41860 = null;
var count__40444_41861 = (0);
var i__40445_41862 = (0);
while(true){
if((i__40445_41862 < count__40444_41861)){
var c_41863 = chunk__40443_41860.cljs$core$IIndexed$_nth$arity$2(null,i__40445_41862);
var class_name_41865 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41865,c_41863))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41865 === ""))?c_41863:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41865)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41863)].join('')));
}


var G__41867 = seq__40442_41859;
var G__41868 = chunk__40443_41860;
var G__41869 = count__40444_41861;
var G__41870 = (i__40445_41862 + (1));
seq__40442_41859 = G__41867;
chunk__40443_41860 = G__41868;
count__40444_41861 = G__41869;
i__40445_41862 = G__41870;
continue;
} else {
var temp__5735__auto___41886 = cljs.core.seq(seq__40442_41859);
if(temp__5735__auto___41886){
var seq__40442_41887__$1 = temp__5735__auto___41886;
if(cljs.core.chunked_seq_QMARK_(seq__40442_41887__$1)){
var c__4556__auto___41888 = cljs.core.chunk_first(seq__40442_41887__$1);
var G__41889 = cljs.core.chunk_rest(seq__40442_41887__$1);
var G__41890 = c__4556__auto___41888;
var G__41891 = cljs.core.count(c__4556__auto___41888);
var G__41892 = (0);
seq__40442_41859 = G__41889;
chunk__40443_41860 = G__41890;
count__40444_41861 = G__41891;
i__40445_41862 = G__41892;
continue;
} else {
var c_41894 = cljs.core.first(seq__40442_41887__$1);
var class_name_41895 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41895,c_41894))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41895 === ""))?c_41894:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41895)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41894)].join('')));
}


var G__41897 = cljs.core.next(seq__40442_41887__$1);
var G__41898 = null;
var G__41899 = (0);
var G__41900 = (0);
seq__40442_41859 = G__41897;
chunk__40443_41860 = G__41898;
count__40444_41861 = G__41899;
i__40445_41862 = G__41900;
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
var seq__40469_41901 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40470_41902 = null;
var count__40471_41903 = (0);
var i__40472_41904 = (0);
while(true){
if((i__40472_41904 < count__40471_41903)){
var c_41908 = chunk__40470_41902.cljs$core$IIndexed$_nth$arity$2(null,i__40472_41904);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41908);


var G__41909 = seq__40469_41901;
var G__41910 = chunk__40470_41902;
var G__41911 = count__40471_41903;
var G__41912 = (i__40472_41904 + (1));
seq__40469_41901 = G__41909;
chunk__40470_41902 = G__41910;
count__40471_41903 = G__41911;
i__40472_41904 = G__41912;
continue;
} else {
var temp__5735__auto___41913 = cljs.core.seq(seq__40469_41901);
if(temp__5735__auto___41913){
var seq__40469_41915__$1 = temp__5735__auto___41913;
if(cljs.core.chunked_seq_QMARK_(seq__40469_41915__$1)){
var c__4556__auto___41916 = cljs.core.chunk_first(seq__40469_41915__$1);
var G__41917 = cljs.core.chunk_rest(seq__40469_41915__$1);
var G__41918 = c__4556__auto___41916;
var G__41919 = cljs.core.count(c__4556__auto___41916);
var G__41920 = (0);
seq__40469_41901 = G__41917;
chunk__40470_41902 = G__41918;
count__40471_41903 = G__41919;
i__40472_41904 = G__41920;
continue;
} else {
var c_41921 = cljs.core.first(seq__40469_41915__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41921);


var G__41924 = cljs.core.next(seq__40469_41915__$1);
var G__41925 = null;
var G__41926 = (0);
var G__41927 = (0);
seq__40469_41901 = G__41924;
chunk__40470_41902 = G__41925;
count__40471_41903 = G__41926;
i__40472_41904 = G__41927;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40417){
var G__40419 = cljs.core.first(seq40417);
var seq40417__$1 = cljs.core.next(seq40417);
var G__40420 = cljs.core.first(seq40417__$1);
var seq40417__$2 = cljs.core.next(seq40417__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40419,G__40420,seq40417__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40497 = arguments.length;
switch (G__40497) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___41943 = arguments.length;
var i__4737__auto___41944 = (0);
while(true){
if((i__4737__auto___41944 < len__4736__auto___41943)){
args_arr__4757__auto__.push((arguments[i__4737__auto___41944]));

var G__41945 = (i__4737__auto___41944 + (1));
i__4737__auto___41944 = G__41945;
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
var temp__5733__auto___41949 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41949)){
var class_list_41950 = temp__5733__auto___41949;
class_list_41950.remove(c__$1);
} else {
var class_name_41951 = dommy.core.class$(elem);
var new_class_name_41952 = dommy.utils.remove_class_str(class_name_41951,c__$1);
if((class_name_41951 === new_class_name_41952)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41952);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40515 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__40517 = null;
var count__40518 = (0);
var i__40519 = (0);
while(true){
if((i__40519 < count__40518)){
var c = chunk__40517.cljs$core$IIndexed$_nth$arity$2(null,i__40519);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41958 = seq__40515;
var G__41959 = chunk__40517;
var G__41960 = count__40518;
var G__41961 = (i__40519 + (1));
seq__40515 = G__41958;
chunk__40517 = G__41959;
count__40518 = G__41960;
i__40519 = G__41961;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40515);
if(temp__5735__auto__){
var seq__40515__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40515__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40515__$1);
var G__41965 = cljs.core.chunk_rest(seq__40515__$1);
var G__41966 = c__4556__auto__;
var G__41967 = cljs.core.count(c__4556__auto__);
var G__41968 = (0);
seq__40515 = G__41965;
chunk__40517 = G__41966;
count__40518 = G__41967;
i__40519 = G__41968;
continue;
} else {
var c = cljs.core.first(seq__40515__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41976 = cljs.core.next(seq__40515__$1);
var G__41977 = null;
var G__41978 = (0);
var G__41979 = (0);
seq__40515 = G__41976;
chunk__40517 = G__41977;
count__40518 = G__41978;
i__40519 = G__41979;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40494){
var G__40495 = cljs.core.first(seq40494);
var seq40494__$1 = cljs.core.next(seq40494);
var G__40496 = cljs.core.first(seq40494__$1);
var seq40494__$2 = cljs.core.next(seq40494__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40495,G__40496,seq40494__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40539 = arguments.length;
switch (G__40539) {
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
var temp__5733__auto___41989 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41989)){
var class_list_41990 = temp__5733__auto___41989;
class_list_41990.toggle(c__$1);
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
var G__40556 = arguments.length;
switch (G__40556) {
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
var G__40583 = arguments.length;
switch (G__40583) {
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
var G__40595 = arguments.length;
switch (G__40595) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___42037 = arguments.length;
var i__4737__auto___42038 = (0);
while(true){
if((i__4737__auto___42038 < len__4736__auto___42037)){
args_arr__4757__auto__.push((arguments[i__4737__auto___42038]));

var G__42039 = (i__4737__auto___42038 + (1));
i__4737__auto___42038 = G__42039;
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
var G__40603 = parent;
G__40603.appendChild(child);

return G__40603;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40604_42041 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40605_42042 = null;
var count__40606_42043 = (0);
var i__40607_42044 = (0);
while(true){
if((i__40607_42044 < count__40606_42043)){
var c_42046 = chunk__40605_42042.cljs$core$IIndexed$_nth$arity$2(null,i__40607_42044);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42046);


var G__42047 = seq__40604_42041;
var G__42048 = chunk__40605_42042;
var G__42049 = count__40606_42043;
var G__42050 = (i__40607_42044 + (1));
seq__40604_42041 = G__42047;
chunk__40605_42042 = G__42048;
count__40606_42043 = G__42049;
i__40607_42044 = G__42050;
continue;
} else {
var temp__5735__auto___42051 = cljs.core.seq(seq__40604_42041);
if(temp__5735__auto___42051){
var seq__40604_42052__$1 = temp__5735__auto___42051;
if(cljs.core.chunked_seq_QMARK_(seq__40604_42052__$1)){
var c__4556__auto___42053 = cljs.core.chunk_first(seq__40604_42052__$1);
var G__42054 = cljs.core.chunk_rest(seq__40604_42052__$1);
var G__42055 = c__4556__auto___42053;
var G__42056 = cljs.core.count(c__4556__auto___42053);
var G__42057 = (0);
seq__40604_42041 = G__42054;
chunk__40605_42042 = G__42055;
count__40606_42043 = G__42056;
i__40607_42044 = G__42057;
continue;
} else {
var c_42060 = cljs.core.first(seq__40604_42052__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42060);


var G__42061 = cljs.core.next(seq__40604_42052__$1);
var G__42062 = null;
var G__42063 = (0);
var G__42064 = (0);
seq__40604_42041 = G__42061;
chunk__40605_42042 = G__42062;
count__40606_42043 = G__42063;
i__40607_42044 = G__42064;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40591){
var G__40592 = cljs.core.first(seq40591);
var seq40591__$1 = cljs.core.next(seq40591);
var G__40593 = cljs.core.first(seq40591__$1);
var seq40591__$2 = cljs.core.next(seq40591__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40592,G__40593,seq40591__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40627 = arguments.length;
switch (G__40627) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___42070 = arguments.length;
var i__4737__auto___42071 = (0);
while(true){
if((i__4737__auto___42071 < len__4736__auto___42070)){
args_arr__4757__auto__.push((arguments[i__4737__auto___42071]));

var G__42076 = (i__4737__auto___42071 + (1));
i__4737__auto___42071 = G__42076;
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
var G__40630 = parent;
G__40630.insertBefore(child,parent.firstChild);

return G__40630;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40633_42078 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40634_42079 = null;
var count__40635_42080 = (0);
var i__40636_42081 = (0);
while(true){
if((i__40636_42081 < count__40635_42080)){
var c_42082 = chunk__40634_42079.cljs$core$IIndexed$_nth$arity$2(null,i__40636_42081);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42082);


var G__42083 = seq__40633_42078;
var G__42084 = chunk__40634_42079;
var G__42085 = count__40635_42080;
var G__42086 = (i__40636_42081 + (1));
seq__40633_42078 = G__42083;
chunk__40634_42079 = G__42084;
count__40635_42080 = G__42085;
i__40636_42081 = G__42086;
continue;
} else {
var temp__5735__auto___42087 = cljs.core.seq(seq__40633_42078);
if(temp__5735__auto___42087){
var seq__40633_42088__$1 = temp__5735__auto___42087;
if(cljs.core.chunked_seq_QMARK_(seq__40633_42088__$1)){
var c__4556__auto___42089 = cljs.core.chunk_first(seq__40633_42088__$1);
var G__42091 = cljs.core.chunk_rest(seq__40633_42088__$1);
var G__42092 = c__4556__auto___42089;
var G__42093 = cljs.core.count(c__4556__auto___42089);
var G__42094 = (0);
seq__40633_42078 = G__42091;
chunk__40634_42079 = G__42092;
count__40635_42080 = G__42093;
i__40636_42081 = G__42094;
continue;
} else {
var c_42096 = cljs.core.first(seq__40633_42088__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42096);


var G__42097 = cljs.core.next(seq__40633_42088__$1);
var G__42098 = null;
var G__42099 = (0);
var G__42100 = (0);
seq__40633_42078 = G__42097;
chunk__40634_42079 = G__42098;
count__40635_42080 = G__42099;
i__40636_42081 = G__42100;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40624){
var G__40625 = cljs.core.first(seq40624);
var seq40624__$1 = cljs.core.next(seq40624);
var G__40626 = cljs.core.first(seq40624__$1);
var seq40624__$2 = cljs.core.next(seq40624__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40625,G__40626,seq40624__$2);
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
var temp__5733__auto___42103 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___42103)){
var next_42105 = temp__5733__auto___42103;
dommy.core.insert_before_BANG_(elem,next_42105);
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
var G__40663 = arguments.length;
switch (G__40663) {
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
var G__40666 = p;
G__40666.removeChild(elem);

return G__40666;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40670){
var vec__40671 = p__40670;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40671,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40671,(1),null);
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
var len__4736__auto___42120 = arguments.length;
var i__4737__auto___42121 = (0);
while(true){
if((i__4737__auto___42121 < len__4736__auto___42120)){
args__4742__auto__.push((arguments[i__4737__auto___42121]));

var G__42122 = (i__4737__auto___42121 + (1));
i__4737__auto___42121 = G__42122;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40691){
var G__40692 = cljs.core.first(seq40691);
var seq40691__$1 = cljs.core.next(seq40691);
var G__40693 = cljs.core.first(seq40691__$1);
var seq40691__$2 = cljs.core.next(seq40691__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40692,G__40693,seq40691__$2);
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
var len__4736__auto___42129 = arguments.length;
var i__4737__auto___42130 = (0);
while(true){
if((i__4737__auto___42130 < len__4736__auto___42129)){
args__4742__auto__.push((arguments[i__4737__auto___42130]));

var G__42132 = (i__4737__auto___42130 + (1));
i__4737__auto___42130 = G__42132;
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

var vec__40713_42133 = dommy.core.elem_and_selector(elem_sel);
var elem_42134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40713_42133,(0),null);
var selector_42135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40713_42133,(1),null);
var seq__40716_42136 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40723_42137 = null;
var count__40724_42138 = (0);
var i__40725_42139 = (0);
while(true){
if((i__40725_42139 < count__40724_42138)){
var vec__40834_42140 = chunk__40723_42137.cljs$core$IIndexed$_nth$arity$2(null,i__40725_42139);
var orig_type_42141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40834_42140,(0),null);
var f_42142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40834_42140,(1),null);
var seq__40726_42143 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42141,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42141,cljs.core.identity])));
var chunk__40728_42144 = null;
var count__40729_42145 = (0);
var i__40730_42146 = (0);
while(true){
if((i__40730_42146 < count__40729_42145)){
var vec__40858_42147 = chunk__40728_42144.cljs$core$IIndexed$_nth$arity$2(null,i__40730_42146);
var actual_type_42148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40858_42147,(0),null);
var factory_42149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40858_42147,(1),null);
var canonical_f_42151 = (function (){var G__40862 = (factory_42149.cljs$core$IFn$_invoke$arity$1 ? factory_42149.cljs$core$IFn$_invoke$arity$1(f_42142) : factory_42149.call(null,f_42142));
var fexpr__40861 = (cljs.core.truth_(selector_42135)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42134,selector_42135):cljs.core.identity);
return (fexpr__40861.cljs$core$IFn$_invoke$arity$1 ? fexpr__40861.cljs$core$IFn$_invoke$arity$1(G__40862) : fexpr__40861.call(null,G__40862));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42134,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42135,actual_type_42148,f_42142], null),canonical_f_42151], 0));

if(cljs.core.truth_(elem_42134.addEventListener)){
elem_42134.addEventListener(cljs.core.name(actual_type_42148),canonical_f_42151);
} else {
elem_42134.attachEvent(cljs.core.name(actual_type_42148),canonical_f_42151);
}


var G__42152 = seq__40726_42143;
var G__42153 = chunk__40728_42144;
var G__42154 = count__40729_42145;
var G__42155 = (i__40730_42146 + (1));
seq__40726_42143 = G__42152;
chunk__40728_42144 = G__42153;
count__40729_42145 = G__42154;
i__40730_42146 = G__42155;
continue;
} else {
var temp__5735__auto___42156 = cljs.core.seq(seq__40726_42143);
if(temp__5735__auto___42156){
var seq__40726_42157__$1 = temp__5735__auto___42156;
if(cljs.core.chunked_seq_QMARK_(seq__40726_42157__$1)){
var c__4556__auto___42158 = cljs.core.chunk_first(seq__40726_42157__$1);
var G__42159 = cljs.core.chunk_rest(seq__40726_42157__$1);
var G__42160 = c__4556__auto___42158;
var G__42161 = cljs.core.count(c__4556__auto___42158);
var G__42162 = (0);
seq__40726_42143 = G__42159;
chunk__40728_42144 = G__42160;
count__40729_42145 = G__42161;
i__40730_42146 = G__42162;
continue;
} else {
var vec__40872_42163 = cljs.core.first(seq__40726_42157__$1);
var actual_type_42164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872_42163,(0),null);
var factory_42165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872_42163,(1),null);
var canonical_f_42166 = (function (){var G__40877 = (factory_42165.cljs$core$IFn$_invoke$arity$1 ? factory_42165.cljs$core$IFn$_invoke$arity$1(f_42142) : factory_42165.call(null,f_42142));
var fexpr__40876 = (cljs.core.truth_(selector_42135)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42134,selector_42135):cljs.core.identity);
return (fexpr__40876.cljs$core$IFn$_invoke$arity$1 ? fexpr__40876.cljs$core$IFn$_invoke$arity$1(G__40877) : fexpr__40876.call(null,G__40877));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42134,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42135,actual_type_42164,f_42142], null),canonical_f_42166], 0));

if(cljs.core.truth_(elem_42134.addEventListener)){
elem_42134.addEventListener(cljs.core.name(actual_type_42164),canonical_f_42166);
} else {
elem_42134.attachEvent(cljs.core.name(actual_type_42164),canonical_f_42166);
}


var G__42167 = cljs.core.next(seq__40726_42157__$1);
var G__42168 = null;
var G__42169 = (0);
var G__42170 = (0);
seq__40726_42143 = G__42167;
chunk__40728_42144 = G__42168;
count__40729_42145 = G__42169;
i__40730_42146 = G__42170;
continue;
}
} else {
}
}
break;
}

var G__42171 = seq__40716_42136;
var G__42172 = chunk__40723_42137;
var G__42173 = count__40724_42138;
var G__42174 = (i__40725_42139 + (1));
seq__40716_42136 = G__42171;
chunk__40723_42137 = G__42172;
count__40724_42138 = G__42173;
i__40725_42139 = G__42174;
continue;
} else {
var temp__5735__auto___42175 = cljs.core.seq(seq__40716_42136);
if(temp__5735__auto___42175){
var seq__40716_42176__$1 = temp__5735__auto___42175;
if(cljs.core.chunked_seq_QMARK_(seq__40716_42176__$1)){
var c__4556__auto___42177 = cljs.core.chunk_first(seq__40716_42176__$1);
var G__42178 = cljs.core.chunk_rest(seq__40716_42176__$1);
var G__42179 = c__4556__auto___42177;
var G__42180 = cljs.core.count(c__4556__auto___42177);
var G__42181 = (0);
seq__40716_42136 = G__42178;
chunk__40723_42137 = G__42179;
count__40724_42138 = G__42180;
i__40725_42139 = G__42181;
continue;
} else {
var vec__40883_42182 = cljs.core.first(seq__40716_42176__$1);
var orig_type_42183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40883_42182,(0),null);
var f_42184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40883_42182,(1),null);
var seq__40717_42185 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42183,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42183,cljs.core.identity])));
var chunk__40719_42186 = null;
var count__40720_42187 = (0);
var i__40721_42188 = (0);
while(true){
if((i__40721_42188 < count__40720_42187)){
var vec__40910_42193 = chunk__40719_42186.cljs$core$IIndexed$_nth$arity$2(null,i__40721_42188);
var actual_type_42194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40910_42193,(0),null);
var factory_42195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40910_42193,(1),null);
var canonical_f_42197 = (function (){var G__40916 = (factory_42195.cljs$core$IFn$_invoke$arity$1 ? factory_42195.cljs$core$IFn$_invoke$arity$1(f_42184) : factory_42195.call(null,f_42184));
var fexpr__40915 = (cljs.core.truth_(selector_42135)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42134,selector_42135):cljs.core.identity);
return (fexpr__40915.cljs$core$IFn$_invoke$arity$1 ? fexpr__40915.cljs$core$IFn$_invoke$arity$1(G__40916) : fexpr__40915.call(null,G__40916));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42134,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42135,actual_type_42194,f_42184], null),canonical_f_42197], 0));

if(cljs.core.truth_(elem_42134.addEventListener)){
elem_42134.addEventListener(cljs.core.name(actual_type_42194),canonical_f_42197);
} else {
elem_42134.attachEvent(cljs.core.name(actual_type_42194),canonical_f_42197);
}


var G__42198 = seq__40717_42185;
var G__42199 = chunk__40719_42186;
var G__42200 = count__40720_42187;
var G__42201 = (i__40721_42188 + (1));
seq__40717_42185 = G__42198;
chunk__40719_42186 = G__42199;
count__40720_42187 = G__42200;
i__40721_42188 = G__42201;
continue;
} else {
var temp__5735__auto___42202__$1 = cljs.core.seq(seq__40717_42185);
if(temp__5735__auto___42202__$1){
var seq__40717_42203__$1 = temp__5735__auto___42202__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40717_42203__$1)){
var c__4556__auto___42204 = cljs.core.chunk_first(seq__40717_42203__$1);
var G__42205 = cljs.core.chunk_rest(seq__40717_42203__$1);
var G__42206 = c__4556__auto___42204;
var G__42207 = cljs.core.count(c__4556__auto___42204);
var G__42208 = (0);
seq__40717_42185 = G__42205;
chunk__40719_42186 = G__42206;
count__40720_42187 = G__42207;
i__40721_42188 = G__42208;
continue;
} else {
var vec__40919_42209 = cljs.core.first(seq__40717_42203__$1);
var actual_type_42210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40919_42209,(0),null);
var factory_42211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40919_42209,(1),null);
var canonical_f_42212 = (function (){var G__40925 = (factory_42211.cljs$core$IFn$_invoke$arity$1 ? factory_42211.cljs$core$IFn$_invoke$arity$1(f_42184) : factory_42211.call(null,f_42184));
var fexpr__40924 = (cljs.core.truth_(selector_42135)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42134,selector_42135):cljs.core.identity);
return (fexpr__40924.cljs$core$IFn$_invoke$arity$1 ? fexpr__40924.cljs$core$IFn$_invoke$arity$1(G__40925) : fexpr__40924.call(null,G__40925));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42134,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42135,actual_type_42210,f_42184], null),canonical_f_42212], 0));

if(cljs.core.truth_(elem_42134.addEventListener)){
elem_42134.addEventListener(cljs.core.name(actual_type_42210),canonical_f_42212);
} else {
elem_42134.attachEvent(cljs.core.name(actual_type_42210),canonical_f_42212);
}


var G__42213 = cljs.core.next(seq__40717_42203__$1);
var G__42214 = null;
var G__42215 = (0);
var G__42216 = (0);
seq__40717_42185 = G__42213;
chunk__40719_42186 = G__42214;
count__40720_42187 = G__42215;
i__40721_42188 = G__42216;
continue;
}
} else {
}
}
break;
}

var G__42218 = cljs.core.next(seq__40716_42176__$1);
var G__42219 = null;
var G__42220 = (0);
var G__42221 = (0);
seq__40716_42136 = G__42218;
chunk__40723_42137 = G__42219;
count__40724_42138 = G__42220;
i__40725_42139 = G__42221;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40701){
var G__40703 = cljs.core.first(seq40701);
var seq40701__$1 = cljs.core.next(seq40701);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40703,seq40701__$1);
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
var len__4736__auto___42223 = arguments.length;
var i__4737__auto___42225 = (0);
while(true){
if((i__4737__auto___42225 < len__4736__auto___42223)){
args__4742__auto__.push((arguments[i__4737__auto___42225]));

var G__42226 = (i__4737__auto___42225 + (1));
i__4737__auto___42225 = G__42226;
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

var vec__40947_42228 = dommy.core.elem_and_selector(elem_sel);
var elem_42229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40947_42228,(0),null);
var selector_42230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40947_42228,(1),null);
var seq__40950_42232 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40957_42233 = null;
var count__40958_42234 = (0);
var i__40959_42235 = (0);
while(true){
if((i__40959_42235 < count__40958_42234)){
var vec__41058_42237 = chunk__40957_42233.cljs$core$IIndexed$_nth$arity$2(null,i__40959_42235);
var orig_type_42238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41058_42237,(0),null);
var f_42239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41058_42237,(1),null);
var seq__40960_42240 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42238,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42238,cljs.core.identity])));
var chunk__40962_42241 = null;
var count__40963_42242 = (0);
var i__40964_42243 = (0);
while(true){
if((i__40964_42243 < count__40963_42242)){
var vec__41101_42244 = chunk__40962_42241.cljs$core$IIndexed$_nth$arity$2(null,i__40964_42243);
var actual_type_42245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41101_42244,(0),null);
var __42246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41101_42244,(1),null);
var keys_42248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42230,actual_type_42245,f_42239], null);
var canonical_f_42249 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42229),keys_42248);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42229,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42248], 0));

if(cljs.core.truth_(elem_42229.removeEventListener)){
elem_42229.removeEventListener(cljs.core.name(actual_type_42245),canonical_f_42249);
} else {
elem_42229.detachEvent(cljs.core.name(actual_type_42245),canonical_f_42249);
}


var G__42251 = seq__40960_42240;
var G__42252 = chunk__40962_42241;
var G__42253 = count__40963_42242;
var G__42254 = (i__40964_42243 + (1));
seq__40960_42240 = G__42251;
chunk__40962_42241 = G__42252;
count__40963_42242 = G__42253;
i__40964_42243 = G__42254;
continue;
} else {
var temp__5735__auto___42256 = cljs.core.seq(seq__40960_42240);
if(temp__5735__auto___42256){
var seq__40960_42258__$1 = temp__5735__auto___42256;
if(cljs.core.chunked_seq_QMARK_(seq__40960_42258__$1)){
var c__4556__auto___42259 = cljs.core.chunk_first(seq__40960_42258__$1);
var G__42260 = cljs.core.chunk_rest(seq__40960_42258__$1);
var G__42261 = c__4556__auto___42259;
var G__42262 = cljs.core.count(c__4556__auto___42259);
var G__42263 = (0);
seq__40960_42240 = G__42260;
chunk__40962_42241 = G__42261;
count__40963_42242 = G__42262;
i__40964_42243 = G__42263;
continue;
} else {
var vec__41114_42264 = cljs.core.first(seq__40960_42258__$1);
var actual_type_42265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41114_42264,(0),null);
var __42266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41114_42264,(1),null);
var keys_42268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42230,actual_type_42265,f_42239], null);
var canonical_f_42269 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42229),keys_42268);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42229,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42268], 0));

if(cljs.core.truth_(elem_42229.removeEventListener)){
elem_42229.removeEventListener(cljs.core.name(actual_type_42265),canonical_f_42269);
} else {
elem_42229.detachEvent(cljs.core.name(actual_type_42265),canonical_f_42269);
}


var G__42271 = cljs.core.next(seq__40960_42258__$1);
var G__42272 = null;
var G__42273 = (0);
var G__42274 = (0);
seq__40960_42240 = G__42271;
chunk__40962_42241 = G__42272;
count__40963_42242 = G__42273;
i__40964_42243 = G__42274;
continue;
}
} else {
}
}
break;
}

var G__42275 = seq__40950_42232;
var G__42276 = chunk__40957_42233;
var G__42277 = count__40958_42234;
var G__42278 = (i__40959_42235 + (1));
seq__40950_42232 = G__42275;
chunk__40957_42233 = G__42276;
count__40958_42234 = G__42277;
i__40959_42235 = G__42278;
continue;
} else {
var temp__5735__auto___42279 = cljs.core.seq(seq__40950_42232);
if(temp__5735__auto___42279){
var seq__40950_42281__$1 = temp__5735__auto___42279;
if(cljs.core.chunked_seq_QMARK_(seq__40950_42281__$1)){
var c__4556__auto___42282 = cljs.core.chunk_first(seq__40950_42281__$1);
var G__42284 = cljs.core.chunk_rest(seq__40950_42281__$1);
var G__42285 = c__4556__auto___42282;
var G__42286 = cljs.core.count(c__4556__auto___42282);
var G__42287 = (0);
seq__40950_42232 = G__42284;
chunk__40957_42233 = G__42285;
count__40958_42234 = G__42286;
i__40959_42235 = G__42287;
continue;
} else {
var vec__41131_42288 = cljs.core.first(seq__40950_42281__$1);
var orig_type_42289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131_42288,(0),null);
var f_42290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131_42288,(1),null);
var seq__40951_42291 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42289,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42289,cljs.core.identity])));
var chunk__40953_42292 = null;
var count__40954_42293 = (0);
var i__40955_42294 = (0);
while(true){
if((i__40955_42294 < count__40954_42293)){
var vec__41216_42295 = chunk__40953_42292.cljs$core$IIndexed$_nth$arity$2(null,i__40955_42294);
var actual_type_42296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41216_42295,(0),null);
var __42297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41216_42295,(1),null);
var keys_42298 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42230,actual_type_42296,f_42290], null);
var canonical_f_42299 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42229),keys_42298);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42229,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42298], 0));

if(cljs.core.truth_(elem_42229.removeEventListener)){
elem_42229.removeEventListener(cljs.core.name(actual_type_42296),canonical_f_42299);
} else {
elem_42229.detachEvent(cljs.core.name(actual_type_42296),canonical_f_42299);
}


var G__42300 = seq__40951_42291;
var G__42301 = chunk__40953_42292;
var G__42302 = count__40954_42293;
var G__42303 = (i__40955_42294 + (1));
seq__40951_42291 = G__42300;
chunk__40953_42292 = G__42301;
count__40954_42293 = G__42302;
i__40955_42294 = G__42303;
continue;
} else {
var temp__5735__auto___42304__$1 = cljs.core.seq(seq__40951_42291);
if(temp__5735__auto___42304__$1){
var seq__40951_42305__$1 = temp__5735__auto___42304__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40951_42305__$1)){
var c__4556__auto___42306 = cljs.core.chunk_first(seq__40951_42305__$1);
var G__42307 = cljs.core.chunk_rest(seq__40951_42305__$1);
var G__42308 = c__4556__auto___42306;
var G__42309 = cljs.core.count(c__4556__auto___42306);
var G__42310 = (0);
seq__40951_42291 = G__42307;
chunk__40953_42292 = G__42308;
count__40954_42293 = G__42309;
i__40955_42294 = G__42310;
continue;
} else {
var vec__41226_42311 = cljs.core.first(seq__40951_42305__$1);
var actual_type_42312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41226_42311,(0),null);
var __42313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41226_42311,(1),null);
var keys_42314 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42230,actual_type_42312,f_42290], null);
var canonical_f_42315 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42229),keys_42314);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42229,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42314], 0));

if(cljs.core.truth_(elem_42229.removeEventListener)){
elem_42229.removeEventListener(cljs.core.name(actual_type_42312),canonical_f_42315);
} else {
elem_42229.detachEvent(cljs.core.name(actual_type_42312),canonical_f_42315);
}


var G__42318 = cljs.core.next(seq__40951_42305__$1);
var G__42319 = null;
var G__42320 = (0);
var G__42321 = (0);
seq__40951_42291 = G__42318;
chunk__40953_42292 = G__42319;
count__40954_42293 = G__42320;
i__40955_42294 = G__42321;
continue;
}
} else {
}
}
break;
}

var G__42324 = cljs.core.next(seq__40950_42281__$1);
var G__42325 = null;
var G__42326 = (0);
var G__42327 = (0);
seq__40950_42232 = G__42324;
chunk__40957_42233 = G__42325;
count__40958_42234 = G__42326;
i__40959_42235 = G__42327;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40930){
var G__40931 = cljs.core.first(seq40930);
var seq40930__$1 = cljs.core.next(seq40930);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40931,seq40930__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42332 = arguments.length;
var i__4737__auto___42333 = (0);
while(true){
if((i__4737__auto___42333 < len__4736__auto___42332)){
args__4742__auto__.push((arguments[i__4737__auto___42333]));

var G__42335 = (i__4737__auto___42333 + (1));
i__4737__auto___42333 = G__42335;
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

var vec__41257_42336 = dommy.core.elem_and_selector(elem_sel);
var elem_42337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41257_42336,(0),null);
var selector_42338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41257_42336,(1),null);
var seq__41261_42340 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41262_42341 = null;
var count__41263_42342 = (0);
var i__41264_42343 = (0);
while(true){
if((i__41264_42343 < count__41263_42342)){
var vec__41289_42344 = chunk__41262_42341.cljs$core$IIndexed$_nth$arity$2(null,i__41264_42343);
var type_42345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289_42344,(0),null);
var f_42346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289_42344,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42345,((function (seq__41261_42340,chunk__41262_42341,count__41263_42342,i__41264_42343,vec__41289_42344,type_42345,f_42346,vec__41257_42336,elem_42337,selector_42338){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42345,dommy$core$this_fn], 0));

return (f_42346.cljs$core$IFn$_invoke$arity$1 ? f_42346.cljs$core$IFn$_invoke$arity$1(e) : f_42346.call(null,e));
});})(seq__41261_42340,chunk__41262_42341,count__41263_42342,i__41264_42343,vec__41289_42344,type_42345,f_42346,vec__41257_42336,elem_42337,selector_42338))
], 0));


var G__42348 = seq__41261_42340;
var G__42349 = chunk__41262_42341;
var G__42350 = count__41263_42342;
var G__42351 = (i__41264_42343 + (1));
seq__41261_42340 = G__42348;
chunk__41262_42341 = G__42349;
count__41263_42342 = G__42350;
i__41264_42343 = G__42351;
continue;
} else {
var temp__5735__auto___42352 = cljs.core.seq(seq__41261_42340);
if(temp__5735__auto___42352){
var seq__41261_42356__$1 = temp__5735__auto___42352;
if(cljs.core.chunked_seq_QMARK_(seq__41261_42356__$1)){
var c__4556__auto___42357 = cljs.core.chunk_first(seq__41261_42356__$1);
var G__42358 = cljs.core.chunk_rest(seq__41261_42356__$1);
var G__42359 = c__4556__auto___42357;
var G__42360 = cljs.core.count(c__4556__auto___42357);
var G__42361 = (0);
seq__41261_42340 = G__42358;
chunk__41262_42341 = G__42359;
count__41263_42342 = G__42360;
i__41264_42343 = G__42361;
continue;
} else {
var vec__41299_42362 = cljs.core.first(seq__41261_42356__$1);
var type_42363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41299_42362,(0),null);
var f_42364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41299_42362,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42363,((function (seq__41261_42340,chunk__41262_42341,count__41263_42342,i__41264_42343,vec__41299_42362,type_42363,f_42364,seq__41261_42356__$1,temp__5735__auto___42352,vec__41257_42336,elem_42337,selector_42338){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42363,dommy$core$this_fn], 0));

return (f_42364.cljs$core$IFn$_invoke$arity$1 ? f_42364.cljs$core$IFn$_invoke$arity$1(e) : f_42364.call(null,e));
});})(seq__41261_42340,chunk__41262_42341,count__41263_42342,i__41264_42343,vec__41299_42362,type_42363,f_42364,seq__41261_42356__$1,temp__5735__auto___42352,vec__41257_42336,elem_42337,selector_42338))
], 0));


var G__42366 = cljs.core.next(seq__41261_42356__$1);
var G__42367 = null;
var G__42368 = (0);
var G__42369 = (0);
seq__41261_42340 = G__42366;
chunk__41262_42341 = G__42367;
count__41263_42342 = G__42368;
i__41264_42343 = G__42369;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41234){
var G__41235 = cljs.core.first(seq41234);
var seq41234__$1 = cljs.core.next(seq41234);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41235,seq41234__$1);
}));


//# sourceMappingURL=dommy.core.js.map
