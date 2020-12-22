goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__54767 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__54767.cljs$core$IFn$_invoke$arity$1 ? fexpr__54767.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__54767.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54772){
var vec__54773 = p__54772;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54773,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__54776 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__54776)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__54776)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__54776)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__54776)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__54776)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__54776)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54776)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__54777){
var map__54778 = p__54777;
var map__54778__$1 = (((((!((map__54778 == null))))?(((((map__54778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54778):map__54778);
var request = map__54778__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__54780 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__54780,default_headers);

cljs_http.core.apply_response_type_BANG_(G__54780,response_type);

G__54780.setTimeoutInterval(timeout);

G__54780.setWithCredentials(send_credentials);

return G__54780;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__54784){
var map__54786 = p__54784;
var map__54786__$1 = (((((!((map__54786 == null))))?(((((map__54786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54786):map__54786);
var request = map__54786__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54786__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54786__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54786__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54786__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54786__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54786__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__54789 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__54789) : cljs_http.core.error_kw.call(null,G__54789));
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
var listener_54881 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__54805_54883 = xhr;
G__54805_54883.setProgressEventsEnabled(true);

G__54805_54883.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_54881,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__54805_54883.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_54881,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__50733__auto___54885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_54819){
var state_val_54820 = (state_54819[(1)]);
if((state_val_54820 === (1))){
var state_54819__$1 = state_54819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54819__$1,(2),cancel);
} else {
if((state_val_54820 === (2))){
var inst_54810 = (state_54819[(2)]);
var inst_54811 = xhr.isComplete();
var inst_54812 = cljs.core.not(inst_54811);
var state_54819__$1 = (function (){var statearr_54821 = state_54819;
(statearr_54821[(7)] = inst_54810);

return statearr_54821;
})();
if(inst_54812){
var statearr_54822_54887 = state_54819__$1;
(statearr_54822_54887[(1)] = (3));

} else {
var statearr_54823_54888 = state_54819__$1;
(statearr_54823_54888[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (3))){
var inst_54814 = xhr.abort();
var state_54819__$1 = state_54819;
var statearr_54824_54889 = state_54819__$1;
(statearr_54824_54889[(2)] = inst_54814);

(statearr_54824_54889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (4))){
var state_54819__$1 = state_54819;
var statearr_54825_54891 = state_54819__$1;
(statearr_54825_54891[(2)] = null);

(statearr_54825_54891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (5))){
var inst_54817 = (state_54819[(2)]);
var state_54819__$1 = state_54819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54819__$1,inst_54817);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__49502__auto__ = null;
var cljs_http$core$xhr_$_state_machine__49502__auto____0 = (function (){
var statearr_54826 = [null,null,null,null,null,null,null,null];
(statearr_54826[(0)] = cljs_http$core$xhr_$_state_machine__49502__auto__);

(statearr_54826[(1)] = (1));

return statearr_54826;
});
var cljs_http$core$xhr_$_state_machine__49502__auto____1 = (function (state_54819){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_54819);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e54827){var ex__49505__auto__ = e54827;
var statearr_54828_54900 = state_54819;
(statearr_54828_54900[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_54819[(4)]))){
var statearr_54829_54902 = state_54819;
(statearr_54829_54902[(1)] = cljs.core.first((state_54819[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54905 = state_54819;
state_54819 = G__54905;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__49502__auto__ = function(state_54819){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__49502__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__49502__auto____1.call(this,state_54819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__49502__auto____0;
cljs_http$core$xhr_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__49502__auto____1;
return cljs_http$core$xhr_$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_54830 = f__50734__auto__();
(statearr_54830[(6)] = c__50733__auto___54885);

return statearr_54830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__54833){
var map__54834 = p__54833;
var map__54834__$1 = (((((!((map__54834 == null))))?(((((map__54834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54834):map__54834);
var request = map__54834__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54834__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54834__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54834__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54834__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_54915 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_54915], null));

if(cljs.core.truth_(cancel)){
var c__50733__auto___54920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_54847){
var state_val_54848 = (state_54847[(1)]);
if((state_val_54848 === (1))){
var state_54847__$1 = state_54847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54847__$1,(2),cancel);
} else {
if((state_val_54848 === (2))){
var inst_54844 = (state_54847[(2)]);
var inst_54845 = jsonp.cancel(req_54915);
var state_54847__$1 = (function (){var statearr_54855 = state_54847;
(statearr_54855[(7)] = inst_54844);

return statearr_54855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54847__$1,inst_54845);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__49502__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__49502__auto____0 = (function (){
var statearr_54856 = [null,null,null,null,null,null,null,null];
(statearr_54856[(0)] = cljs_http$core$jsonp_$_state_machine__49502__auto__);

(statearr_54856[(1)] = (1));

return statearr_54856;
});
var cljs_http$core$jsonp_$_state_machine__49502__auto____1 = (function (state_54847){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_54847);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e54860){var ex__49505__auto__ = e54860;
var statearr_54861_54928 = state_54847;
(statearr_54861_54928[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_54847[(4)]))){
var statearr_54862_54929 = state_54847;
(statearr_54862_54929[(1)] = cljs.core.first((state_54847[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54933 = state_54847;
state_54847 = G__54933;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__49502__auto__ = function(state_54847){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__49502__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__49502__auto____1.call(this,state_54847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__49502__auto____0;
cljs_http$core$jsonp_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__49502__auto____1;
return cljs_http$core$jsonp_$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_54867 = f__50734__auto__();
(statearr_54867[(6)] = c__50733__auto___54920);

return statearr_54867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__54869){
var map__54871 = p__54869;
var map__54871__$1 = (((((!((map__54871 == null))))?(((((map__54871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54871):map__54871);
var request = map__54871__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54871__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
