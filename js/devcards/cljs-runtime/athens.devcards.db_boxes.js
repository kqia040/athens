goog.provide('athens.devcards.db_boxes');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59994){
var map__59995 = p__59994;
var map__59995__$1 = (((((!((map__59995 == null))))?(((((map__59995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59995):map__59995);
var box = map__59995__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59998 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60002){if((e60002 instanceof Error)){
var e = e60002;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60002;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59998,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59998,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__60010_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60010_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_60052){
var state_val_60053 = (state_60052[(1)]);
if((state_val_60053 === (7))){
var state_60052__$1 = state_60052;
var statearr_60054_60182 = state_60052__$1;
(statearr_60054_60182[(2)] = false);

(statearr_60054_60182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (1))){
var inst_60013 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60014 = [false];
var inst_60015 = cljs.core.PersistentHashMap.fromArrays(inst_60013,inst_60014);
var inst_60016 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60015], 0));
var state_60052__$1 = state_60052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60052__$1,(2),inst_60016);
} else {
if((state_val_60053 === (4))){
var state_60052__$1 = state_60052;
var statearr_60055_60186 = state_60052__$1;
(statearr_60055_60186[(2)] = false);

(statearr_60055_60186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (13))){
var inst_60048 = alert("Failed to retrieve data from GitHub");
var state_60052__$1 = state_60052;
var statearr_60060_60187 = state_60052__$1;
(statearr_60060_60187[(2)] = inst_60048);

(statearr_60060_60187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (6))){
var state_60052__$1 = state_60052;
var statearr_60061_60188 = state_60052__$1;
(statearr_60061_60188[(2)] = true);

(statearr_60061_60188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (3))){
var inst_60018 = (state_60052[(7)]);
var inst_60024 = inst_60018.cljs$lang$protocol_mask$partition0$;
var inst_60025 = (inst_60024 & (64));
var inst_60026 = inst_60018.cljs$core$ISeq$;
var inst_60027 = (cljs.core.PROTOCOL_SENTINEL === inst_60026);
var inst_60028 = ((inst_60025) || (inst_60027));
var state_60052__$1 = state_60052;
if(cljs.core.truth_(inst_60028)){
var statearr_60062_60189 = state_60052__$1;
(statearr_60062_60189[(1)] = (6));

} else {
var statearr_60063_60190 = state_60052__$1;
(statearr_60063_60190[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (12))){
var inst_60042 = (state_60052[(8)]);
var inst_60044 = athens.db.str_to_db_tx(inst_60042);
var inst_60045 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60044);
var inst_60046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60052__$1 = (function (){var statearr_60064 = state_60052;
(statearr_60064[(9)] = inst_60045);

return statearr_60064;
})();
var statearr_60065_60191 = state_60052__$1;
(statearr_60065_60191[(2)] = inst_60046);

(statearr_60065_60191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (2))){
var inst_60018 = (state_60052[(7)]);
var inst_60018__$1 = (state_60052[(2)]);
var inst_60021 = (inst_60018__$1 == null);
var inst_60022 = cljs.core.not(inst_60021);
var state_60052__$1 = (function (){var statearr_60070 = state_60052;
(statearr_60070[(7)] = inst_60018__$1);

return statearr_60070;
})();
if(inst_60022){
var statearr_60071_60194 = state_60052__$1;
(statearr_60071_60194[(1)] = (3));

} else {
var statearr_60072_60195 = state_60052__$1;
(statearr_60072_60195[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (11))){
var inst_60040 = (state_60052[(2)]);
var inst_60041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60040,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60040,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60052__$1 = (function (){var statearr_60074 = state_60052;
(statearr_60074[(8)] = inst_60042);

return statearr_60074;
})();
if(cljs.core.truth_(inst_60041)){
var statearr_60079_60196 = state_60052__$1;
(statearr_60079_60196[(1)] = (12));

} else {
var statearr_60080_60197 = state_60052__$1;
(statearr_60080_60197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (9))){
var inst_60018 = (state_60052[(7)]);
var inst_60037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60018);
var state_60052__$1 = state_60052;
var statearr_60081_60199 = state_60052__$1;
(statearr_60081_60199[(2)] = inst_60037);

(statearr_60081_60199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (5))){
var inst_60035 = (state_60052[(2)]);
var state_60052__$1 = state_60052;
if(cljs.core.truth_(inst_60035)){
var statearr_60082_60200 = state_60052__$1;
(statearr_60082_60200[(1)] = (9));

} else {
var statearr_60083_60201 = state_60052__$1;
(statearr_60083_60201[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (14))){
var inst_60050 = (state_60052[(2)]);
var state_60052__$1 = state_60052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60052__$1,inst_60050);
} else {
if((state_val_60053 === (10))){
var inst_60018 = (state_60052[(7)]);
var state_60052__$1 = state_60052;
var statearr_60086_60202 = state_60052__$1;
(statearr_60086_60202[(2)] = inst_60018);

(statearr_60086_60202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60053 === (8))){
var inst_60032 = (state_60052[(2)]);
var state_60052__$1 = state_60052;
var statearr_60088_60203 = state_60052__$1;
(statearr_60088_60203[(2)] = inst_60032);

(statearr_60088_60203[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto____0 = (function (){
var statearr_60089 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60089[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto__);

(statearr_60089[(1)] = (1));

return statearr_60089;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto____1 = (function (state_60052){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_60052);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e60090){var ex__42119__auto__ = e60090;
var statearr_60092_60204 = state_60052;
(statearr_60092_60204[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_60052[(4)]))){
var statearr_60093_60205 = state_60052;
(statearr_60093_60205[(1)] = cljs.core.first((state_60052[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60206 = state_60052;
state_60052 = G__60206;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto__ = function(state_60052){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto____1.call(this,state_60052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_60099 = f__42583__auto__();
(statearr_60099[(6)] = c__42582__auto__);

return statearr_60099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60100 = (function (meta60101){
this.meta60101 = meta60101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60102,meta60101__$1){
var self__ = this;
var _60102__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60100(meta60101__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60102){
var self__ = this;
var _60102__$1 = this;
return self__.meta60101;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60101","meta60101",250046534,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60100");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60100.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60100");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60100.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60100 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60100(meta60101){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60100(meta60101));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60100(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60108 = (function (meta60109){
this.meta60109 = meta60109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60110,meta60109__$1){
var self__ = this;
var _60110__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60108(meta60109__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60110){
var self__ = this;
var _60110__$1 = this;
return self__.meta60109;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60109","meta60109",-435495603,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60108");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60108.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60108");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60108.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60108 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60108(meta60109){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60108(meta60109));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60108(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60121 = arguments.length;
switch (G__60121) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60122){
var map__60127 = p__60122;
var map__60127__$1 = (((((!((map__60127 == null))))?(((((map__60127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60127):map__60127);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60127__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60127__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60127__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.views.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.views.data_browser.attr_many_QMARK_(attr)) && (athens.views.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60129(s__60130){
return (new cljs.core.LazySeq(null,(function (){
var s__60130__$1 = s__60130;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60130__$1);
if(temp__5735__auto__){
var s__60130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60130__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60130__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60132 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60131 = (0);
while(true){
if((i__60131 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__60131);
cljs.core.chunk_append(b__60132,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60133 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60133) : athens.devcards.db_boxes.cell.call(null,G__60133));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60218 = (i__60131 + (1));
i__60131 = G__60218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60132),athens$devcards$db_boxes$cell_$_iter__60129(cljs.core.chunk_rest(s__60130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60132),null);
}
} else {
var v = cljs.core.first(s__60130__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60134 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60134) : athens.devcards.db_boxes.cell.call(null,G__60134));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60129(cljs.core.rest(s__60130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60135(s__60136){
return (new cljs.core.LazySeq(null,(function (){
var s__60136__$1 = s__60136;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60136__$1);
if(temp__5735__auto__){
var s__60136__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60136__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60136__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60138 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60137 = (0);
while(true){
if((i__60137 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__60137);
cljs.core.chunk_append(b__60138,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60140 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60140) : athens.devcards.db_boxes.cell.call(null,G__60140));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60223 = (i__60137 + (1));
i__60137 = G__60223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60138),athens$devcards$db_boxes$cell_$_iter__60135(cljs.core.chunk_rest(s__60136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60138),null);
}
} else {
var v = cljs.core.first(s__60136__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60144 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60144) : athens.devcards.db_boxes.cell.call(null,G__60144));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60135(cljs.core.rest(s__60136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60145(s__60146){
return (new cljs.core.LazySeq(null,(function (){
var s__60146__$1 = s__60146;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60146__$1);
if(temp__5735__auto__){
var s__60146__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60146__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60146__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60148 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60147 = (0);
while(true){
if((i__60147 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__60147);
cljs.core.chunk_append(b__60148,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60150 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60150) : athens.devcards.db_boxes.cell.call(null,G__60150));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60245 = (i__60147 + (1));
i__60147 = G__60245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60148),athens$devcards$db_boxes$cell_$_iter__60145(cljs.core.chunk_rest(s__60146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60148),null);
}
} else {
var v = cljs.core.first(s__60146__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60151 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60151) : athens.devcards.db_boxes.cell.call(null,G__60151));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60145(cljs.core.rest(s__60146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__60160 = cljs.core.deref(box_state);
var map__60160__$1 = (((((!((map__60160 == null))))?(((((map__60160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60160):map__60160);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60160__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60160__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60160__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60166 = (function (meta60167){
this.meta60167 = meta60167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60168,meta60167__$1){
var self__ = this;
var _60168__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60166(meta60167__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60168){
var self__ = this;
var _60168__$1 = this;
return self__.meta60167;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60167","meta60167",1245883885,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60166");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60166.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60166");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60166.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60166 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60166(meta60167){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60166(meta60167));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60166(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60175 = (function (meta60176){
this.meta60176 = meta60176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60177,meta60176__$1){
var self__ = this;
var _60177__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60175(meta60176__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60177){
var self__ = this;
var _60177__$1 = this;
return self__.meta60176;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47591__auto__,devcard_opts__47592__auto__){
var self__ = this;
var this__47591__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47592__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47610__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47610__auto__)){
return (function (data_atom__47611__auto__,owner__47612__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47610__auto__,data_atom__47611__auto__,owner__47612__auto__], null));
});
} else {
return reagent.core.as_element(v__47610__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47592__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60176","meta60176",-420384119,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60175");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60175.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60175");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60175.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60175 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60175(meta60176){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60175(meta60176));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60175(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
