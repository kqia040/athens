goog.provide('athens.devcards.right_sidebar');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Toggle","Toggle",-1755095056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322 = (function (meta60323){
this.meta60323 = meta60323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60324,meta60323__$1){
var self__ = this;
var _60324__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322(meta60323__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60324){
var self__ = this;
var _60324__$1 = this;
return self__.meta60323;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null));
})], null),"Toggle"], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60323","meta60323",1665964303,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60322");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60322");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60322.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar60322 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar60322(meta60323){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322(meta60323));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60322(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Right-Sidebar","Right-Sidebar",-1012062233)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Right-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325 = (function (meta60326){
this.meta60326 = meta60326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60327,meta60326__$1){
var self__ = this;
var _60327__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325(meta60326__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60327){
var self__ = this;
var _60327__$1 = this;
return self__.meta60326;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"60vh",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.right_sidebar.right_sidebar_component], null)], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60326","meta60326",596697594,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60325");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60325");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60325.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar60325 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar60325(meta60326){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325(meta60326));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60325(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.right_sidebar.js.map
