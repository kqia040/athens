goog.provide('athens.devcards.db');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_49351){
var state_val_49353 = (state_49351[(1)]);
if((state_val_49353 === (7))){
var state_49351__$1 = state_49351;
var statearr_49354_49467 = state_49351__$1;
(statearr_49354_49467[(2)] = false);

(statearr_49354_49467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (1))){
var inst_49314 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49315 = [false];
var inst_49316 = cljs.core.PersistentHashMap.fromArrays(inst_49314,inst_49315);
var inst_49317 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49316], 0));
var state_49351__$1 = state_49351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49351__$1,(2),inst_49317);
} else {
if((state_val_49353 === (4))){
var state_49351__$1 = state_49351;
var statearr_49355_49469 = state_49351__$1;
(statearr_49355_49469[(2)] = false);

(statearr_49355_49469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (13))){
var inst_49347 = alert("Failed to retrieve data from GitHub");
var state_49351__$1 = state_49351;
var statearr_49356_49470 = state_49351__$1;
(statearr_49356_49470[(2)] = inst_49347);

(statearr_49356_49470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (6))){
var state_49351__$1 = state_49351;
var statearr_49357_49474 = state_49351__$1;
(statearr_49357_49474[(2)] = true);

(statearr_49357_49474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (3))){
var inst_49319 = (state_49351[(7)]);
var inst_49324 = inst_49319.cljs$lang$protocol_mask$partition0$;
var inst_49325 = (inst_49324 & (64));
var inst_49326 = inst_49319.cljs$core$ISeq$;
var inst_49327 = (cljs.core.PROTOCOL_SENTINEL === inst_49326);
var inst_49328 = ((inst_49325) || (inst_49327));
var state_49351__$1 = state_49351;
if(cljs.core.truth_(inst_49328)){
var statearr_49361_49482 = state_49351__$1;
(statearr_49361_49482[(1)] = (6));

} else {
var statearr_49362_49483 = state_49351__$1;
(statearr_49362_49483[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (12))){
var inst_49342 = (state_49351[(8)]);
var inst_49344 = athens.db.str_to_db_tx(inst_49342);
var inst_49345 = posh.reagent.transact_BANG_(athens.db.dsdb,inst_49344);
var state_49351__$1 = state_49351;
var statearr_49363_49484 = state_49351__$1;
(statearr_49363_49484[(2)] = inst_49345);

(statearr_49363_49484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (2))){
var inst_49319 = (state_49351[(7)]);
var inst_49319__$1 = (state_49351[(2)]);
var inst_49321 = (inst_49319__$1 == null);
var inst_49322 = cljs.core.not(inst_49321);
var state_49351__$1 = (function (){var statearr_49367 = state_49351;
(statearr_49367[(7)] = inst_49319__$1);

return statearr_49367;
})();
if(inst_49322){
var statearr_49369_49485 = state_49351__$1;
(statearr_49369_49485[(1)] = (3));

} else {
var statearr_49370_49486 = state_49351__$1;
(statearr_49370_49486[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (11))){
var inst_49340 = (state_49351[(2)]);
var inst_49341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49340,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49340,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49351__$1 = (function (){var statearr_49373 = state_49351;
(statearr_49373[(8)] = inst_49342);

return statearr_49373;
})();
if(cljs.core.truth_(inst_49341)){
var statearr_49375_49487 = state_49351__$1;
(statearr_49375_49487[(1)] = (12));

} else {
var statearr_49377_49488 = state_49351__$1;
(statearr_49377_49488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (9))){
var inst_49319 = (state_49351[(7)]);
var inst_49337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49319);
var state_49351__$1 = state_49351;
var statearr_49378_49489 = state_49351__$1;
(statearr_49378_49489[(2)] = inst_49337);

(statearr_49378_49489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (5))){
var inst_49335 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
if(cljs.core.truth_(inst_49335)){
var statearr_49379_49492 = state_49351__$1;
(statearr_49379_49492[(1)] = (9));

} else {
var statearr_49380_49493 = state_49351__$1;
(statearr_49380_49493[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (14))){
var inst_49349 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49351__$1,inst_49349);
} else {
if((state_val_49353 === (10))){
var inst_49319 = (state_49351[(7)]);
var state_49351__$1 = state_49351;
var statearr_49385_49499 = state_49351__$1;
(statearr_49385_49499[(2)] = inst_49319);

(statearr_49385_49499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (8))){
var inst_49332 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
var statearr_49388_49502 = state_49351__$1;
(statearr_49388_49502[(2)] = inst_49332);

(statearr_49388_49502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto____0 = (function (){
var statearr_49398 = [null,null,null,null,null,null,null,null,null];
(statearr_49398[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto__);

(statearr_49398[(1)] = (1));

return statearr_49398;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto____1 = (function (state_49351){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_49351);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e49401){var ex__42119__auto__ = e49401;
var statearr_49404_49507 = state_49351;
(statearr_49404_49507[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_49351[(4)]))){
var statearr_49405_49508 = state_49351;
(statearr_49405_49508[(1)] = cljs.core.first((state_49351[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49509 = state_49351;
state_49351 = G__49509;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto__ = function(state_49351){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto____1.call(this,state_49351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_49414 = f__42583__auto__();
(statearr_49414[(6)] = c__42582__auto__);

return statearr_49414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
})], null),"Reset DB"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49424 = (function (meta49425){
this.meta49425 = meta49425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49426,meta49425__$1){
var self__ = this;
var _49426__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49424(meta49425__$1));
}));

(athens.devcards.db.t_athens$devcards$db49424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49426){
var self__ = this;
var _49426__$1 = this;
return self__.meta49425;
}));

(athens.devcards.db.t_athens$devcards$db49424.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49424.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
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

(athens.devcards.db.t_athens$devcards$db49424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49425","meta49425",-1027927125,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49424.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49424.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49424");

(athens.devcards.db.t_athens$devcards$db49424.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db/t_athens$devcards$db49424");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49424.
 */
athens.devcards.db.__GT_t_athens$devcards$db49424 = (function athens$devcards$db$__GT_t_athens$devcards$db49424(meta49425){
return (new athens.devcards.db.t_athens$devcards$db49424(meta49425));
});

}

return (new athens.devcards.db.t_athens$devcards$db49424(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49440 = (function (meta49441){
this.meta49441 = meta49441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49442,meta49441__$1){
var self__ = this;
var _49442__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49440(meta49441__$1));
}));

(athens.devcards.db.t_athens$devcards$db49440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49442){
var self__ = this;
var _49442__$1 = this;
return self__.meta49441;
}));

(athens.devcards.db.t_athens$devcards$db49440.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49440.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49441","meta49441",-562094063,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49440.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49440.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49440");

(athens.devcards.db.t_athens$devcards$db49440.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db/t_athens$devcards$db49440");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49440.
 */
athens.devcards.db.__GT_t_athens$devcards$db49440 = (function athens$devcards$db$__GT_t_athens$devcards$db49440(meta49441){
return (new athens.devcards.db.t_athens$devcards$db49440(meta49441));
});

}

return (new athens.devcards.db.t_athens$devcards$db49440(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
