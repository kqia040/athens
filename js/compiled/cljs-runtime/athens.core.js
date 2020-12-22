goog.provide('athens.core');
athens.core.dev_setup = (function athens$core$dev_setup(){
if(athens.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
athens.core.mount_root = (function athens$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

athens.router.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.main_panel], null),goog.dom.getElement("app"));
});
athens.core.init = (function athens$core$init(){
athens.style.init();

stylefy.core.tag("body",athens.style.app_styles);

athens.listeners.init();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("desktop","boot","desktop/boot",-656853611)], null));

athens.core.dev_setup();

return athens.core.mount_root();
});

//# sourceMappingURL=athens.core.js.map
