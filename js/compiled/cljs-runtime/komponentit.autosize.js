goog.provide('komponentit.autosize');
komponentit.autosize.base_sizer_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],["none",(0),(0),"hidden",(-1000),(0),"absolute","hidden",(0)]);
komponentit.autosize.base_sizer_style_str = cljs.core.reduce_kv((function (s,prop,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.name(prop),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),"",komponentit.autosize.base_sizer_style);
/**
 * List of style properties which affect the size of textarea
 */
komponentit.autosize.size_style_props = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["letter-spacing","line-height","font-family","font-kerning-settings","font-kerning","font-size","font-stretch","font-style","font-variant","font-variant-caps","font-variant-ligatures","font-variant-numeric","font-weight","text-rendering","text-indent","padding-left","padding-right","padding-top","padding-bottom","box-sizing","border-left-width","border-right-width","border-bottom-width","border-top-width","white-space","word-wrap"], null);
komponentit.autosize.copy_styles = (function komponentit$autosize$copy_styles(style,props){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,prop){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style.getPropertyValue(prop)),";"].join('');
}),"",props);
});
komponentit.autosize.get_property_value = (function komponentit$autosize$get_property_value(style,k){
var or__4126__auto__ = parseFloat(style.getPropertyValue(k));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
komponentit.autosize.apply_box_sizing = (function komponentit$autosize$apply_box_sizing(value,p__61241){
var map__61242 = p__61241;
var map__61242__$1 = (((((!((map__61242 == null))))?(((((map__61242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61242):map__61242);
var box_sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239));
var border_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"border-size","border-size",991975640));
var padding_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"padding-size","padding-size",-733651675));
var G__61250 = box_sizing;
switch (G__61250) {
case "border-box":
return (value + border_size);

break;
case "content-box":
return (value - padding_size);

break;
default:
return value;

}
});
komponentit.autosize.input_node_styles = (function komponentit$autosize$input_node_styles(el){
if(cljs.core.truth_(el)){
var style = window.getComputedStyle(el);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),style.getPropertyValue("box-sizing"),new cljs.core.Keyword(null,"border-size","border-size",991975640),(komponentit.autosize.get_property_value(style,"border-left-width") + komponentit.autosize.get_property_value(style,"border-right-width")),new cljs.core.Keyword(null,"padding-size","padding-size",-733651675),(komponentit.autosize.get_property_value(style,"padding-left") + komponentit.autosize.get_property_value(style,"padding-right")),new cljs.core.Keyword(null,"sizer-style","sizer-style",-1176226328),komponentit.autosize.copy_styles(style,komponentit.autosize.size_style_props)], null);
} else {
return null;
}
});
if((typeof komponentit !== 'undefined') && (typeof komponentit.autosize !== 'undefined') && (typeof komponentit.autosize.input_sizer !== 'undefined')){
} else {
komponentit.autosize.input_sizer = (new cljs.core.Delay((function (){
var G__61256 = document.createElement("div");
document.body.appendChild(G__61256);

return G__61256;
}),null));
}
komponentit.autosize.node_width = (function komponentit$autosize$node_width(value,placeholder,placeholder_is_min_width_QMARK_,p__61263){
var map__61267 = p__61263;
var map__61267__$1 = (((((!((map__61267 == null))))?(((((map__61267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61267):map__61267);
var styles = map__61267__$1;
var sizer_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61267__$1,new cljs.core.Keyword(null,"sizer-style","sizer-style",-1176226328));
var _ = (cljs.core.deref(komponentit.autosize.input_sizer).textContent = ((cljs.core.seq(value))?value:placeholder));
var ___$1 = cljs.core.deref(komponentit.autosize.input_sizer).setAttribute("style",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(komponentit.autosize.base_sizer_style_str),"width:auto;",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizer_style)].join(''));
var width = komponentit.autosize.apply_box_sizing(cljs.core.deref(komponentit.autosize.input_sizer).scrollWidth,styles);
var placeholder_width = (cljs.core.truth_(placeholder_is_min_width_QMARK_)?(function (){
(cljs.core.deref(komponentit.autosize.input_sizer).textContent = placeholder);

return komponentit.autosize.apply_box_sizing(cljs.core.deref(komponentit.autosize.input_sizer).scrollWidth,styles);
})()
:null);
var min_width = (cljs.core.truth_(placeholder_is_min_width_QMARK_)?placeholder_width:(- Infinity));
var width__$1 = ((2) + (function (){var x__4214__auto__ = min_width;
var y__4215__auto__ = (function (){var x__4214__auto____$1 = (1);
var y__4215__auto__ = width;
return ((x__4214__auto____$1 > y__4215__auto__) ? x__4214__auto____$1 : y__4215__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(cljs.core.truth_(isFinite(min_width))?min_width:null)], null);
});
/**
 * Calculate width of the input based on the contents.
 * 
 *   Content width is calculated using separate hidden element. This
 *   element is not managed by React and is placed outside of this
 *   component, for easier styling.
 */
komponentit.autosize.input = (function komponentit$autosize$input(p__61281){
var map__61286 = p__61281;
var map__61286__$1 = (((((!((map__61286 == null))))?(((((map__61286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61286):map__61286);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var placeholder_is_min_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"placeholder-is-min-width?","placeholder-is-min-width?",-1743052093));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"komponentit.autosize.input",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(state,komponentit.autosize.input_node_styles(reagent.dom.dom_node(this$)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__61290){
var vec__61291 = p__61290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61291,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61291,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(prev_props))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(prev_props))))){
return cljs.core.reset_BANG_(state,komponentit.autosize.input_node_styles(reagent.dom.dom_node(this$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__61297){
var map__61298 = p__61297;
var map__61298__$1 = (((((!((map__61298 == null))))?(((((map__61298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61298):map__61298);
var props = map__61298__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298__$1,new cljs.core.Keyword(null,"value","value",305978217));
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"min-width","min-width",1926193728),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"placeholder-is-min-width?","placeholder-is-min-width?",-1743052093)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,komponentit.autosize.node_width(value,placeholder__$1,placeholder_is_min_width_QMARK_,cljs.core.deref(state))], 0)))], null);
})], null));
});
komponentit.autosize.textarea_node_styles = (function komponentit$autosize$textarea_node_styles(el){
if(cljs.core.truth_(el)){
var style = window.getComputedStyle(el);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),style.getPropertyValue("box-sizing"),new cljs.core.Keyword(null,"border-size","border-size",991975640),(komponentit.autosize.get_property_value(style,"border-bottom-width") + komponentit.autosize.get_property_value(style,"border-top-width")),new cljs.core.Keyword(null,"padding-size","padding-size",-733651675),(komponentit.autosize.get_property_value(style,"padding-bottom") + komponentit.autosize.get_property_value(style,"padding-top")),new cljs.core.Keyword(null,"sizer-style","sizer-style",-1176226328),komponentit.autosize.copy_styles(style,cljs.core.into.cljs$core$IFn$_invoke$arity$2(komponentit.autosize.size_style_props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width"], null)))], null);
} else {
return null;
}
});
if((typeof komponentit !== 'undefined') && (typeof komponentit.autosize !== 'undefined') && (typeof komponentit.autosize.textarea_sizer !== 'undefined')){
} else {
komponentit.autosize.textarea_sizer = (new cljs.core.Delay((function (){
var G__61326 = document.createElement("div");
document.body.appendChild(G__61326);

return G__61326;
}),null));
}
komponentit.autosize.node_height = (function komponentit$autosize$node_height(value,min_rows,max_rows,p__61328){
var map__61329 = p__61328;
var map__61329__$1 = (((((!((map__61329 == null))))?(((((map__61329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61329):map__61329);
var styles = map__61329__$1;
var box_sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239));
var border_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"border-size","border-size",991975640));
var padding_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"padding-size","padding-size",-733651675));
var sizer_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"sizer-style","sizer-style",-1176226328));
var _ = (cljs.core.deref(komponentit.autosize.textarea_sizer).textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\u200B"].join(''));
var ___$1 = cljs.core.deref(komponentit.autosize.textarea_sizer).setAttribute("style",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(komponentit.autosize.base_sizer_style_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizer_style)].join(''));
var height = komponentit.autosize.apply_box_sizing(cljs.core.deref(komponentit.autosize.textarea_sizer).scrollHeight,styles);
var single_row_height = (cljs.core.truth_((function (){var or__4126__auto__ = min_rows;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return max_rows;
}
})())?(function (){
(cljs.core.deref(komponentit.autosize.textarea_sizer).textContent = "x");

return (cljs.core.deref(komponentit.autosize.textarea_sizer).scrollHeight - padding_size);
})()
:null);
var min_height = (cljs.core.truth_(min_rows)?(((min_rows * single_row_height) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("border-box",box_sizing))?(padding_size + border_size):null)) + (0)):(- Infinity));
var max_height = (cljs.core.truth_(max_rows)?((max_rows * single_row_height) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("border-box",box_sizing))?(padding_size + border_size):(0))):Infinity);
var height__$1 = (function (){var x__4217__auto__ = max_height;
var y__4218__auto__ = (function (){var x__4214__auto__ = min_height;
var y__4215__auto__ = height;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837),(cljs.core.truth_(isFinite(min_height))?min_height:null),new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(isFinite(max_height))?max_height:null)], null);
});
/**
 * Calculate height of the textarea based on the text contents.
 * 
 *   Content height is calculated using separate hidden textarea. This
 *   textarea is not managed by React and is placed outside of this
 *   component, for easier styling.
 */
komponentit.autosize.textarea = (function komponentit$autosize$textarea(p__61341){
var map__61342 = p__61341;
var map__61342__$1 = (((((!((map__61342 == null))))?(((((map__61342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61342):map__61342);
var min_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61342__$1,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61342__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"komponentit.autosize.textarea",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(state,komponentit.autosize.textarea_node_styles(reagent.dom.dom_node(this$)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__61349){
var vec__61350 = p__61349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(prev_props))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(prev_props))))){
return cljs.core.reset_BANG_(state,komponentit.autosize.textarea_node_styles(reagent.dom.dom_node(this$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__61353){
var map__61354 = p__61353;
var map__61354__$1 = (((((!((map__61354 == null))))?(((((map__61354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61354):map__61354);
var props = map__61354__$1;
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min_rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765));
var max_rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,komponentit.autosize.node_height(value,min_rows__$1,max_rows__$1,cljs.core.deref(state))], 0)))], null);
})], null));
});

//# sourceMappingURL=komponentit.autosize.js.map