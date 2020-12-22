goog.provide('athens.views.node_page');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem 10rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"margin","margin",-995903681)],["1.40em","pre-line","visible","1","break-word",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null),"relative","-0.03em","0.10em 0 0.10em 1rem"]);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null));
});
athens.views.node_page.handle_enter = (function athens$views$node_page$handle_enter(e,uid,_state,children){
e.preventDefault();

var node_page = e.target.closest(".node-page");
var block_page = e.target.closest(".block-page");
var map__62059 = athens.keybindings.destruct_key_down(e);
var map__62059__$1 = (((((!((map__62059 == null))))?(((((map__62059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62059):map__62059);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(block_page)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"split-block-to-children","split-block-to-children",-669108006),uid,value,start], null));
} else {
if(cljs.core.truth_(node_page)){
if(cljs.core.empty_QMARK_(children)){
return athens.views.node_page.handle_new_first_child_block_click(uid);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570)], null));
}
} else {
return null;
}
}
});
athens.views.node_page.handle_page_arrow_key = (function athens$views$node_page$handle_page_arrow_key(e,uid,state){
var map__62061 = athens.keybindings.destruct_key_down(e);
var map__62061__$1 = (((((!((map__62061 == null))))?(((((map__62061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62061):map__62061);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start_QMARK_ = athens.keybindings.block_start_QMARK_(e);
var end_QMARK_ = athens.keybindings.block_end_QMARK_(e);
var map__62062 = cljs.core.deref(state);
var map__62062__$1 = (((((!((map__62062 == null))))?(((((map__62062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62062):map__62062);
var caret_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340));
var textarea_height = target.offsetHeight;
var map__62063 = caret_position;
var map__62063__$1 = (((((!((map__62063 == null))))?(((((map__62063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62063):map__62063);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rows = Math.round((textarea_height / height));
var row = Math.ceil((top / height));
var top_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(1));
var bottom_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,rows);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP);
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT);
var right_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT);
if(((((up_QMARK_) && (top_row_QMARK_))) || (((left_QMARK_) && (start_QMARK_))))){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null));
} else {
if(((((down_QMARK_) && (bottom_row_QMARK_))) || (((right_QMARK_) && (end_QMARK_))))){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null));
} else {
return null;
}
}
});
athens.views.node_page.handle_key_down = (function athens$views$node_page$handle_key_down(e,uid,state,children){
var map__62074 = athens.keybindings.destruct_key_down(e);
var map__62074__$1 = (((((!((map__62074 == null))))?(((((map__62074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62074):map__62074);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var caret_position = athens.util.get_caret_position(e.target);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340),caret_position);

if(athens.keybindings.arrow_key_direction(e)){
return athens.views.node_page.handle_page_arrow_key(e,uid,state);
} else {
if(((cljs.core.not(shift)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)))){
return athens.views.node_page.handle_enter(e,uid,state,children);
} else {
return null;
}
}
});
athens.views.node_page.handle_change = (function athens$views$node_page$handle_change(e,state){
var value = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("title","local","title/local",-1588788316),value);
});
athens.views.node_page.get_linked_refs = (function athens$views$node_page$get_linked_refs(ref_groups){
return cljs.core.second(cljs.core.first(cljs.core.second(cljs.core.first(ref_groups))));
});
/**
 * Find and replace linked ref with new linked ref, based on title change.
 */
athens.views.node_page.map_new_refs = (function athens$views$node_page$map_new_refs(linked_refs,old_title,new_title){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62076){
var map__62077 = p__62076;
var map__62077__$1 = (((((!((map__62077 == null))))?(((((map__62077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62077):map__62077);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62077__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62077__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var new_str = clojure.string.replace(string,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str], null);
}),linked_refs);
});
/**
 * ?uid used for navigate-uid. Go to existing page following the merge.
 */
athens.views.node_page.get_existing_page = (function athens$views$node_page$get_existing_page(local_title){
var G__62080 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__62081 = cljs.core.deref(athens.db.dsdb);
var G__62082 = local_title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__62080,G__62081,G__62082) : datascript.core.q.call(null,G__62080,G__62081,G__62082));
});
/**
 * Count is used to reindex blocks after merge.
 */
athens.views.node_page.existing_block_count = (function athens$views$node_page$existing_block_count(local_title){
return cljs.core.count((function (){var G__62083 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null)], null);
var G__62084 = cljs.core.deref(athens.db.dsdb);
var G__62085 = local_title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__62083,G__62084,G__62085) : datascript.core.q.call(null,G__62083,G__62084,G__62085));
})());
});
/**
 * When textarea blurs and its value is different from initial page title:
 * - if no other page exists, rewrite page title and linked refs
 * - else page with same title does exists: prompt to merge
 *   - confirm-fn: delete current page, rewrite linked refs, merge blocks, and navigate to existing page
 *   - cancel-fn: reset state
 *   The current blocks will be at the end of the existing page.
 */
athens.views.node_page.handle_blur = (function athens$views$node_page$handle_blur(node,state,ref_groups){
var map__62093 = node;
var map__62093__$1 = (((((!((map__62093 == null))))?(((((map__62093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62093):map__62093);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62093__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62093__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var map__62094 = cljs.core.deref(state);
var map__62094__$1 = (((((!((map__62094 == null))))?(((((map__62094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62094):map__62094);
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,new cljs.core.Keyword("title","initial","title/initial",-1990636610));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,new cljs.core.Keyword("title","local","title/local",-1588788316));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(initial,local)){
var existing_page = athens.views.node_page.get_existing_page(local);
var linked_refs = athens.views.node_page.get_linked_refs(ref_groups);
var new_linked_refs = athens.views.node_page.map_new_refs(linked_refs,initial,local);
if(cljs.core.empty_QMARK_(existing_page)){
var new_page = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),dbid,new cljs.core.Keyword("node","title","node/title",628940777),local], null);
var new_datoms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_page], null),new_linked_refs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("title","initial","title/initial",-1990636610),local);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new_datoms], null));
} else {
var new_parent_uid = existing_page;
var existing_page_block_count = athens.views.node_page.existing_block_count(local);
var reindex = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62097){
var map__62098 = p__62097;
var map__62098__$1 = (((((!((map__62098 == null))))?(((((map__62098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62098):map__62098);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62098__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62098__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","order","block/order",-1429282437),(order + existing_page_block_count),new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_parent_uid], null)], null);
}),children);
var delete_page = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),dbid], null);
var new_datoms = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delete_page], null),new_linked_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reindex], 0));
var cancel_fn = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,athens.views.node_page.init_state);
});
var confirm_fn = (function (){
athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new_parent_uid);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new_datoms], null));

return cancel_fn();
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("alert","show","alert/show",-785861637),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("alert","message","alert/message",-363559142),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local),"\""," already exists, merge pages?"].join(''),new cljs.core.Keyword("alert","confirm-fn","alert/confirm-fn",-1115580970),confirm_fn,new cljs.core.Keyword("alert","cancel-fn","alert/cancel-fn",-869919002),cancel_fn], 0));
}
} else {
return null;
}
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
/**
 * Ensures :title/initial is synced to node/title.
 *   Cases:
 *   - User opens a page for the first time.
 *   - User navigates from a page to another page.
 *   - User merges current page with existing page, navigating to existing page.
 */
athens.views.node_page.sync_title = (function athens$views$node_page$sync_title(title,state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.Keyword("title","initial","title/initial",-1990636610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("title","initial","title/initial",-1990636610),title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("title","local","title/local",-1588788316),title], 0));
} else {
return null;
}
});
athens.views.node_page.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("menu","show","menu/show",-580966400),new cljs.core.Keyword("menu","x","menu/x",2085660544),new cljs.core.Keyword("title","local","title/local",-1588788316),new cljs.core.Keyword("alert","cancel-fn","alert/cancel-fn",-869919002),new cljs.core.Keyword("alert","confirm-fn","alert/confirm-fn",-1115580970),new cljs.core.Keyword("alert","message","alert/message",-363559142),new cljs.core.Keyword("alert","show","alert/show",-785861637),new cljs.core.Keyword("title","initial","title/initial",-1990636610),new cljs.core.Keyword("menu","y","menu/y",-1754654817)],[false,null,null,null,null,null,null,null,null]);
athens.views.node_page.menu_dropdown = (function athens$views$node_page$menu_dropdown(_node,state){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_click_outside = (function (e){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword("menu","show","menu/show",-580966400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"node-page-menu",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return goog.events.listen(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
return goog.events.unlisten(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (node,state__$1){
var map__62102 = node;
var map__62102__$1 = (((((!((map__62102 == null))))?(((((map__62102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62102):map__62102);
var sidebar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__62103 = cljs.core.deref(state__$1);
var map__62103__$1 = (((((!((map__62103 == null))))?(((((map__62103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62103):map__62103);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
var timeline_page_QMARK_ = athens.util.is_timeline_page(uid);
if(cljs.core.truth_(show)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.dropdown_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__62101_SHARP_){
return cljs.core.reset_BANG_(ref,p1__62101_SHARP_);
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(sidebar)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),((timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null)),((timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid,title], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null))], null)], null);
} else {
return null;
}
})], null));
});
athens.views.node_page.ref_comp = (function athens$views$node_page$ref_comp(block){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.rest(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(block))], null));
var linked_ref_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"linked-ref","linked-ref",-925333945),true,new cljs.core.Keyword(null,"initial-open","initial-open",1546246992),true,new cljs.core.Keyword(null,"linked-ref-uid","linked-ref-uid",-1584425507),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"parent-uids","parent-uids",605223671),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(block)))], null);
return (function (_){
var map__62106 = cljs.core.deref(state);
var map__62106__$1 = (((((!((map__62106 == null))))?(((((map__62106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62106):map__62106);
var block__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62106__$1,new cljs.core.Keyword(null,"block","block",664686210));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62106__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
var block__$2 = athens.db.get_block_document(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$ref_comp_$_iter__62108(s__62109){
return (new cljs.core.LazySeq(null,(function (){
var s__62109__$1 = s__62109;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62109__$1);
if(temp__5735__auto__){
var s__62109__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62109__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62109__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62111 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62110 = (0);
while(true){
if((i__62110 < size__4528__auto__)){
var map__62112 = cljs.core._nth(c__4527__auto__,i__62110);
var map__62112__$1 = (((((!((map__62112 == null))))?(((((map__62112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62112):map__62112);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62112__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62112__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62112__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__62111,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62110,map__62112,map__62112__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__62111,s__62109__$2,temp__5735__auto__,map__62106,map__62106__$1,block__$1,parents,block__$2,state,linked_ref_data){
return (function (){
var new_B = athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_P = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",664686210),new_B,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parents","parents",-2027538891),new_P], 0));
});})(i__62110,map__62112,map__62112__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__62111,s__62109__$2,temp__5735__auto__,map__62106,map__62106__$1,block__$1,parents,block__$2,state,linked_ref_data))
], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__62345 = (i__62110 + (1));
i__62110 = G__62345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62111),athens$views$node_page$ref_comp_$_iter__62108(cljs.core.chunk_rest(s__62109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62111),null);
}
} else {
var map__62122 = cljs.core.first(s__62109__$2);
var map__62122__$1 = (((((!((map__62122 == null))))?(((((map__62122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62122):map__62122);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62122__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62122__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62122__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__62122,map__62122__$1,title,string,uid,s__62109__$2,temp__5735__auto__,map__62106,map__62106__$1,block__$1,parents,block__$2,state,linked_ref_data){
return (function (){
var new_B = athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_P = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",664686210),new_B,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parents","parents",-2027538891),new_P], 0));
});})(map__62122,map__62122__$1,title,string,uid,s__62109__$2,temp__5735__auto__,map__62106,map__62106__$1,block__$1,parents,block__$2,state,linked_ref_data))
], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$ref_comp_$_iter__62108(cljs.core.rest(s__62109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parents);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$2,linked_ref_data], null)], null);
});
});
/**
 * title/initial is the title when a page is first loaded.
 *   title/local is the value of the textarea.
 *   We have both, because we want to be able to change the local title without transacting to the db until user confirms.
 *   Similar to atom-string in blocks. Hacky, but state consistency is hard!
 */
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.init_state);
return (function (node,editing_uid,ref_groups){
var map__62125 = node;
var map__62125__$1 = (((((!((map__62125 == null))))?(((((map__62125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62125):map__62125);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62125__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62125__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62125__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__62126 = cljs.core.deref(state);
var map__62126__$1 = (((((!((map__62126 == null))))?(((((map__62126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62126):map__62126);
var alert_show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword("alert","show","alert/show",-785861637));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword("alert","message","alert/message",-363559142));
var confirm_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword("alert","confirm-fn","alert/confirm-fn",-1115580970));
var cancel_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword("alert","cancel-fn","alert/cancel-fn",-869919002));
var timeline_page_QMARK_ = athens.util.is_timeline_page(uid);
athens.views.node_page.sync_title(title,state);

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null),new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid], null)),(cljs.core.truth_(alert_show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"50px",new cljs.core.Keyword(null,"left","left",-399115937),"35%"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alerts.alert_component,message,confirm_fn,cancel_fn], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
})], null)),((timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("title","local","title/local",-1588788316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"id","id",-1388402092),["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (___$3){
return athens.views.node_page.handle_blur(node,state,ref_groups);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
return athens.views.node_page.handle_key_down(e,uid,state,children);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return athens.views.node_page.handle_change(e,state);
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.MoreHoriz], null)], null),new cljs.core.Keyword("title","local","title/local",-1588788316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.menu_dropdown,node,state], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__62142(s__62143){
return (new cljs.core.LazySeq(null,(function (){
var s__62143__$1 = s__62143;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62143__$1);
if(temp__5735__auto__){
var s__62143__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62143__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62143__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62145 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62144 = (0);
while(true){
if((i__62144 < size__4528__auto__)){
var map__62148 = cljs.core._nth(c__4527__auto__,i__62144);
var map__62148__$1 = (((((!((map__62148 == null))))?(((((map__62148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62148):map__62148);
var child = map__62148__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62148__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__62145,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__62376 = (i__62144 + (1));
i__62144 = G__62376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62145),athens$views$node_page$node_page_el_$_iter__62142(cljs.core.chunk_rest(s__62143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62145),null);
}
} else {
var map__62159 = cljs.core.first(s__62143__$2);
var map__62159__$1 = (((((!((map__62159 == null))))?(((((map__62159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62159):map__62159);
var child = map__62159__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__62142(cljs.core.rest(s__62143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__62161(s__62162){
return (new cljs.core.LazySeq(null,(function (){
var s__62162__$1 = s__62162;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62162__$1);
if(temp__5735__auto__){
var s__62162__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62162__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62162__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62164 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62163 = (0);
while(true){
if((i__62163 < size__4528__auto__)){
var vec__62165 = cljs.core._nth(c__4527__auto__,i__62163);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62165,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62165,(1),null);
cljs.core.chunk_append(b__62164,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__62163,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168(s__62169){
return (new cljs.core.LazySeq(null,((function (i__62163,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
var s__62169__$1 = s__62169;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62169__$1);
if(temp__5735__auto____$1){
var s__62169__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62169__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__62169__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__62171 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__62170 = (0);
while(true){
if((i__62170 < size__4528__auto____$1)){
var vec__62172 = cljs.core._nth(c__4527__auto____$1,i__62170);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62172,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62172,(1),null);
cljs.core.chunk_append(b__62171,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62170,i__62163,vec__62172,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__62171,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__62170,i__62163,vec__62172,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__62171,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__62170,i__62163,vec__62172,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__62171,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168_$_iter__62175(s__62176){
return (new cljs.core.LazySeq(null,((function (i__62170,i__62163,vec__62172,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__62171,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
var s__62176__$1 = s__62176;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__62176__$1);
if(temp__5735__auto____$2){
var s__62176__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__62176__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__62176__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__62178 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__62177 = (0);
while(true){
if((i__62177 < size__4528__auto____$2)){
var block = cljs.core._nth(c__4527__auto____$2,i__62177);
cljs.core.chunk_append(b__62178,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null));

var G__62401 = (i__62177 + (1));
i__62177 = G__62401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62178),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168_$_iter__62175(cljs.core.chunk_rest(s__62176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62178),null);
}
} else {
var block = cljs.core.first(s__62176__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168_$_iter__62175(cljs.core.rest(s__62176__$2)));
}
} else {
return null;
}
break;
}
});})(i__62170,i__62163,vec__62172,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__62171,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
,null,null));
});})(i__62170,i__62163,vec__62172,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__62171,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
;
return iter__4529__auto__(group);
})())], null));

var G__62402 = (i__62170 + (1));
i__62170 = G__62402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62171),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168(cljs.core.chunk_rest(s__62169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62171),null);
}
} else {
var vec__62180 = cljs.core.first(s__62169__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62180,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62180,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62163,vec__62180,group_title,group,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__62163,vec__62180,group_title,group,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__62163,vec__62180,group_title,group,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168_$_iter__62183(s__62184){
return (new cljs.core.LazySeq(null,((function (i__62163,vec__62180,group_title,group,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
var s__62184__$1 = s__62184;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__62184__$1);
if(temp__5735__auto____$2){
var s__62184__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__62184__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__62184__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__62186 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__62185 = (0);
while(true){
if((i__62185 < size__4528__auto____$1)){
var block = cljs.core._nth(c__4527__auto____$1,i__62185);
cljs.core.chunk_append(b__62186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null));

var G__62409 = (i__62185 + (1));
i__62185 = G__62409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62186),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168_$_iter__62183(cljs.core.chunk_rest(s__62184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62186),null);
}
} else {
var block = cljs.core.first(s__62184__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168_$_iter__62183(cljs.core.rest(s__62184__$2)));
}
} else {
return null;
}
break;
}
});})(i__62163,vec__62180,group_title,group,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
,null,null));
});})(i__62163,vec__62180,group_title,group,s__62169__$2,temp__5735__auto____$1,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62168(cljs.core.rest(s__62169__$2)));
}
} else {
return null;
}
break;
}
});})(i__62163,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
,null,null));
});})(i__62163,vec__62165,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__62164,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null));

var G__62416 = (i__62163 + (1));
i__62163 = G__62416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62164),athens$views$node_page$node_page_el_$_iter__62161(cljs.core.chunk_rest(s__62162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62164),null);
}
} else {
var vec__62188 = cljs.core.first(s__62162__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62188,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62188,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194(s__62195){
return (new cljs.core.LazySeq(null,(function (){
var s__62195__$1 = s__62195;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62195__$1);
if(temp__5735__auto____$1){
var s__62195__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62195__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62195__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62197 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62196 = (0);
while(true){
if((i__62196 < size__4528__auto__)){
var vec__62200 = cljs.core._nth(c__4527__auto__,i__62196);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62200,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62200,(1),null);
cljs.core.chunk_append(b__62197,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62196,vec__62200,group_title,group,c__4527__auto__,size__4528__auto__,b__62197,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__62196,vec__62200,group_title,group,c__4527__auto__,size__4528__auto__,b__62197,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__62196,vec__62200,group_title,group,c__4527__auto__,size__4528__auto__,b__62197,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194_$_iter__62203(s__62204){
return (new cljs.core.LazySeq(null,((function (i__62196,vec__62200,group_title,group,c__4527__auto__,size__4528__auto__,b__62197,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
var s__62204__$1 = s__62204;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__62204__$1);
if(temp__5735__auto____$2){
var s__62204__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__62204__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__62204__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__62206 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__62205 = (0);
while(true){
if((i__62205 < size__4528__auto____$1)){
var block = cljs.core._nth(c__4527__auto____$1,i__62205);
cljs.core.chunk_append(b__62206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null));

var G__62432 = (i__62205 + (1));
i__62205 = G__62432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62206),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194_$_iter__62203(cljs.core.chunk_rest(s__62204__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62206),null);
}
} else {
var block = cljs.core.first(s__62204__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194_$_iter__62203(cljs.core.rest(s__62204__$2)));
}
} else {
return null;
}
break;
}
});})(i__62196,vec__62200,group_title,group,c__4527__auto__,size__4528__auto__,b__62197,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
,null,null));
});})(i__62196,vec__62200,group_title,group,c__4527__auto__,size__4528__auto__,b__62197,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
;
return iter__4529__auto__(group);
})())], null));

var G__62433 = (i__62196 + (1));
i__62196 = G__62433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62197),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194(cljs.core.chunk_rest(s__62195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62197),null);
}
} else {
var vec__62213 = cljs.core.first(s__62195__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62213,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62213,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__62213,group_title,group,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__62213,group_title,group,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__62213,group_title,group,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state){
return (function athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194_$_iter__62217(s__62218){
return (new cljs.core.LazySeq(null,(function (){
var s__62218__$1 = s__62218;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__62218__$1);
if(temp__5735__auto____$2){
var s__62218__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__62218__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62218__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62220 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62219 = (0);
while(true){
if((i__62219 < size__4528__auto__)){
var block = cljs.core._nth(c__4527__auto__,i__62219);
cljs.core.chunk_append(b__62220,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null));

var G__62445 = (i__62219 + (1));
i__62219 = G__62445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62220),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194_$_iter__62217(cljs.core.chunk_rest(s__62218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62220),null);
}
} else {
var block = cljs.core.first(s__62218__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194_$_iter__62217(cljs.core.rest(s__62218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__62213,group_title,group,s__62195__$2,temp__5735__auto____$1,vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__62161_$_iter__62194(cljs.core.rest(s__62195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__62188,linked_or_unlinked,refs,s__62162__$2,temp__5735__auto__,map__62125,map__62125__$1,title,children,uid,map__62126,map__62126__$1,alert_show,show,message,confirm_fn,cancel_fn,timeline_page_QMARK_,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__62161(cljs.core.rest(s__62162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ref_groups);
})())], null);
});
});
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__62226 = athens.db.get_node_document(ident);
var map__62226__$1 = (((((!((map__62226 == null))))?(((((map__62226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62226):map__62226);
var node = map__62226__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62226__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
