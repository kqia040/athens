goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__47698 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__47698.cljs$core$IFn$_invoke$arity$1 ? fexpr__47698.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__47698.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47718){
var vec__47719 = p__47718;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47719,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__47723 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__47723)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__47723)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__47723)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__47723)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__47723)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__47723)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47723)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__47726){
var map__47727 = p__47726;
var map__47727__$1 = (((((!((map__47727 == null))))?(((((map__47727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47727):map__47727);
var request = map__47727__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47727__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47727__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47727__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__47729 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__47729,default_headers);

cljs_http.core.apply_response_type_BANG_(G__47729,response_type);

G__47729.setTimeoutInterval(timeout);

G__47729.setWithCredentials(send_credentials);

return G__47729;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__47750){
var map__47751 = p__47750;
var map__47751__$1 = (((((!((map__47751 == null))))?(((((map__47751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47751):map__47751);
var request = map__47751__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__47762 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__47762) : cljs_http.core.error_kw.call(null,G__47762));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_47938 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__47793_47939 = xhr;
G__47793_47939.setProgressEventsEnabled(true);

G__47793_47939.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_47938,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__47793_47939.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_47938,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__42582__auto___47943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_47811){
var state_val_47812 = (state_47811[(1)]);
if((state_val_47812 === (1))){
var state_47811__$1 = state_47811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47811__$1,(2),cancel);
} else {
if((state_val_47812 === (2))){
var inst_47801 = (state_47811[(2)]);
var inst_47803 = xhr.isComplete();
var inst_47804 = cljs.core.not(inst_47803);
var state_47811__$1 = (function (){var statearr_47818 = state_47811;
(statearr_47818[(7)] = inst_47801);

return statearr_47818;
})();
if(inst_47804){
var statearr_47820_47951 = state_47811__$1;
(statearr_47820_47951[(1)] = (3));

} else {
var statearr_47822_47952 = state_47811__$1;
(statearr_47822_47952[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (3))){
var inst_47806 = xhr.abort();
var state_47811__$1 = state_47811;
var statearr_47824_47957 = state_47811__$1;
(statearr_47824_47957[(2)] = inst_47806);

(statearr_47824_47957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (4))){
var state_47811__$1 = state_47811;
var statearr_47827_47959 = state_47811__$1;
(statearr_47827_47959[(2)] = null);

(statearr_47827_47959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (5))){
var inst_47809 = (state_47811[(2)]);
var state_47811__$1 = state_47811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47811__$1,inst_47809);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__42116__auto__ = null;
var cljs_http$core$xhr_$_state_machine__42116__auto____0 = (function (){
var statearr_47828 = [null,null,null,null,null,null,null,null];
(statearr_47828[(0)] = cljs_http$core$xhr_$_state_machine__42116__auto__);

(statearr_47828[(1)] = (1));

return statearr_47828;
});
var cljs_http$core$xhr_$_state_machine__42116__auto____1 = (function (state_47811){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_47811);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e47829){var ex__42119__auto__ = e47829;
var statearr_47830_47966 = state_47811;
(statearr_47830_47966[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_47811[(4)]))){
var statearr_47832_47969 = state_47811;
(statearr_47832_47969[(1)] = cljs.core.first((state_47811[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47975 = state_47811;
state_47811 = G__47975;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__42116__auto__ = function(state_47811){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__42116__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__42116__auto____1.call(this,state_47811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__42116__auto____0;
cljs_http$core$xhr_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__42116__auto____1;
return cljs_http$core$xhr_$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_47836 = f__42583__auto__();
(statearr_47836[(6)] = c__42582__auto___47943);

return statearr_47836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__47840){
var map__47843 = p__47840;
var map__47843__$1 = (((((!((map__47843 == null))))?(((((map__47843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47843):map__47843);
var request = map__47843__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47843__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47843__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47843__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47843__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_47990 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_47990], null));

if(cljs.core.truth_(cancel)){
var c__42582__auto___48001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_47869){
var state_val_47870 = (state_47869[(1)]);
if((state_val_47870 === (1))){
var state_47869__$1 = state_47869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47869__$1,(2),cancel);
} else {
if((state_val_47870 === (2))){
var inst_47864 = (state_47869[(2)]);
var inst_47867 = jsonp.cancel(req_47990);
var state_47869__$1 = (function (){var statearr_47874 = state_47869;
(statearr_47874[(7)] = inst_47864);

return statearr_47874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47869__$1,inst_47867);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__42116__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__42116__auto____0 = (function (){
var statearr_47882 = [null,null,null,null,null,null,null,null];
(statearr_47882[(0)] = cljs_http$core$jsonp_$_state_machine__42116__auto__);

(statearr_47882[(1)] = (1));

return statearr_47882;
});
var cljs_http$core$jsonp_$_state_machine__42116__auto____1 = (function (state_47869){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_47869);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e47885){var ex__42119__auto__ = e47885;
var statearr_47886_48007 = state_47869;
(statearr_47886_48007[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_47869[(4)]))){
var statearr_47888_48013 = state_47869;
(statearr_47888_48013[(1)] = cljs.core.first((state_47869[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48016 = state_47869;
state_47869 = G__48016;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__42116__auto__ = function(state_47869){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__42116__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__42116__auto____1.call(this,state_47869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__42116__auto____0;
cljs_http$core$jsonp_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__42116__auto____1;
return cljs_http$core$jsonp_$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_47891 = f__42583__auto__();
(statearr_47891[(6)] = c__42582__auto___48001);

return statearr_47891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__47900){
var map__47901 = p__47900;
var map__47901__$1 = (((((!((map__47901 == null))))?(((((map__47901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47901):map__47901);
var request = map__47901__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47901__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
