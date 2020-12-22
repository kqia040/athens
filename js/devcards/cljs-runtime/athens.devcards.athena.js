goog.provide('athens.devcards.athena');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56011 = (function (meta56012){
this.meta56012 = meta56012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56013,meta56012__$1){
var self__ = this;
var _56013__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56011(meta56012__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56013){
var self__ = this;
var _56013__$1 = this;
return self__.meta56012;
}));

(athens.devcards.athena.t_athens$devcards$athena56011.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56011.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
})], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56012","meta56012",1462123428,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56011.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56011.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56011");

(athens.devcards.athena.t_athens$devcards$athena56011.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.athena/t_athens$devcards$athena56011");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56011.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56011 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56011(meta56012){
return (new athens.devcards.athena.t_athens$devcards$athena56011(meta56012));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56011(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56015 = (function (meta56016){
this.meta56016 = meta56016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56017,meta56016__$1){
var self__ = this;
var _56017__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56015(meta56016__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56017){
var self__ = this;
var _56017__$1 = this;
return self__.meta56016;
}));

(athens.devcards.athena.t_athens$devcards$athena56015.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56015.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56016","meta56016",-2115058870,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56015.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56015.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56015");

(athens.devcards.athena.t_athens$devcards$athena56015.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.athena/t_athens$devcards$athena56015");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56015.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56015 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56015(meta56016){
return (new athens.devcards.athena.t_athens$devcards$athena56015(meta56016));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56015(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56025 = (function (meta56026){
this.meta56026 = meta56026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56027,meta56026__$1){
var self__ = this;
var _56027__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56025(meta56026__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56027){
var self__ = this;
var _56027__$1 = this;
return self__.meta56026;
}));

(athens.devcards.athena.t_athens$devcards$athena56025.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56025.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_component], null)], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56026","meta56026",-1828765225,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56025.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56025.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56025");

(athens.devcards.athena.t_athens$devcards$athena56025.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.athena/t_athens$devcards$athena56025");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56025.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56025 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56025(meta56026){
return (new athens.devcards.athena.t_athens$devcards$athena56025(meta56026));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56025(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map
