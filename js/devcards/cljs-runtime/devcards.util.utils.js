goog.provide('devcards.util.utils');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42779_42791 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42780_42792 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42781_42793 = true;
var _STAR_print_fn_STAR__temp_val__42782_42794 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42781_42793);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42782_42794);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42780_42792);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42779_42791);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e42775){if((e42775 instanceof Error)){
var e1 = e42775;
try{return obj.toString();
}catch (e42776){if((e42776 instanceof Error)){
var e2 = e42776;
return "<<Un-printable Type>>";
} else {
throw e42776;

}
}} else {
throw e42775;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__42784 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__42785 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__42785);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__42784);
}});

//# sourceMappingURL=devcards.util.utils.js.map
