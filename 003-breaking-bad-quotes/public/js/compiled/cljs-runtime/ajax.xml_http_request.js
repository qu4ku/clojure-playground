goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__26661 = e.target.readyState;
var fexpr__26660 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__26660.cljs$core$IFn$_invoke$arity$1 ? fexpr__26660.cljs$core$IFn$_invoke$arity$1(G__26661) : fexpr__26660.call(null,G__26661));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26663,handler){
var map__26664 = p__26663;
var map__26664__$1 = (((((!((map__26664 == null))))?(((((map__26664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26664):map__26664);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26664__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26664__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26664,map__26664__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26662_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__26662_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__26664,map__26664__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___26684 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___26684)){
var response_type_26685 = temp__5720__auto___26684;
this$__$1.responseType = cljs.core.name(response_type_26685);
} else {
}

var seq__26666_26686 = cljs.core.seq(headers);
var chunk__26667_26687 = null;
var count__26668_26688 = (0);
var i__26669_26689 = (0);
while(true){
if((i__26669_26689 < count__26668_26688)){
var vec__26676_26690 = chunk__26667_26687.cljs$core$IIndexed$_nth$arity$2(null,i__26669_26689);
var k_26691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676_26690,(0),null);
var v_26692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676_26690,(1),null);
this$__$1.setRequestHeader(k_26691,v_26692);


var G__26693 = seq__26666_26686;
var G__26694 = chunk__26667_26687;
var G__26695 = count__26668_26688;
var G__26696 = (i__26669_26689 + (1));
seq__26666_26686 = G__26693;
chunk__26667_26687 = G__26694;
count__26668_26688 = G__26695;
i__26669_26689 = G__26696;
continue;
} else {
var temp__5720__auto___26697 = cljs.core.seq(seq__26666_26686);
if(temp__5720__auto___26697){
var seq__26666_26698__$1 = temp__5720__auto___26697;
if(cljs.core.chunked_seq_QMARK_(seq__26666_26698__$1)){
var c__4550__auto___26699 = cljs.core.chunk_first(seq__26666_26698__$1);
var G__26700 = cljs.core.chunk_rest(seq__26666_26698__$1);
var G__26701 = c__4550__auto___26699;
var G__26702 = cljs.core.count(c__4550__auto___26699);
var G__26703 = (0);
seq__26666_26686 = G__26700;
chunk__26667_26687 = G__26701;
count__26668_26688 = G__26702;
i__26669_26689 = G__26703;
continue;
} else {
var vec__26679_26704 = cljs.core.first(seq__26666_26698__$1);
var k_26705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679_26704,(0),null);
var v_26706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679_26704,(1),null);
this$__$1.setRequestHeader(k_26705,v_26706);


var G__26707 = cljs.core.next(seq__26666_26698__$1);
var G__26708 = null;
var G__26709 = (0);
var G__26710 = (0);
seq__26666_26686 = G__26707;
chunk__26667_26687 = G__26708;
count__26668_26688 = G__26709;
i__26669_26689 = G__26710;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
