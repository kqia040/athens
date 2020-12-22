goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__29856__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29857__i = 0, G__29857__a = new Array(arguments.length -  0);
while (G__29857__i < G__29857__a.length) {G__29857__a[G__29857__i] = arguments[G__29857__i + 0]; ++G__29857__i;}
  args = new cljs.core.IndexedSeq(G__29857__a,0,null);
} 
return G__29856__delegate.call(this,args);};
G__29856.cljs$lang$maxFixedArity = 0;
G__29856.cljs$lang$applyTo = (function (arglist__29861){
var args = cljs.core.seq(arglist__29861);
return G__29856__delegate(args);
});
G__29856.cljs$core$IFn$_invoke$arity$variadic = G__29856__delegate;
return G__29856;
})()
);

(o.error = (function() { 
var G__29862__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29863__i = 0, G__29863__a = new Array(arguments.length -  0);
while (G__29863__i < G__29863__a.length) {G__29863__a[G__29863__i] = arguments[G__29863__i + 0]; ++G__29863__i;}
  args = new cljs.core.IndexedSeq(G__29863__a,0,null);
} 
return G__29862__delegate.call(this,args);};
G__29862.cljs$lang$maxFixedArity = 0;
G__29862.cljs$lang$applyTo = (function (arglist__29864){
var args = cljs.core.seq(arglist__29864);
return G__29862__delegate(args);
});
G__29862.cljs$core$IFn$_invoke$arity$variadic = G__29862__delegate;
return G__29862;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
