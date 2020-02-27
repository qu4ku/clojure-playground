goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__27624 = e.target.readyState;
var fexpr__27623 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__27623.cljs$core$IFn$_invoke$arity$1 ? fexpr__27623.cljs$core$IFn$_invoke$arity$1(G__27624) : fexpr__27623.call(null,G__27624));
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
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27626,handler){
var map__27627 = p__27626;
var map__27627__$1 = (((((!((map__27627 == null))))?(((((map__27627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27627):map__27627);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27627__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27627__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__27625_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__27625_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___27655 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___27655)){
var response_type_27656 = temp__5735__auto___27655;
(this$__$1.responseType = cljs.core.name(response_type_27656));
} else {
}

var seq__27629_27657 = cljs.core.seq(headers);
var chunk__27630_27658 = null;
var count__27631_27659 = (0);
var i__27632_27660 = (0);
while(true){
if((i__27632_27660 < count__27631_27659)){
var vec__27639_27661 = chunk__27630_27658.cljs$core$IIndexed$_nth$arity$2(null,i__27632_27660);
var k_27662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27639_27661,(0),null);
var v_27663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27639_27661,(1),null);
this$__$1.setRequestHeader(k_27662,v_27663);


var G__27664 = seq__27629_27657;
var G__27665 = chunk__27630_27658;
var G__27666 = count__27631_27659;
var G__27667 = (i__27632_27660 + (1));
seq__27629_27657 = G__27664;
chunk__27630_27658 = G__27665;
count__27631_27659 = G__27666;
i__27632_27660 = G__27667;
continue;
} else {
var temp__5735__auto___27668 = cljs.core.seq(seq__27629_27657);
if(temp__5735__auto___27668){
var seq__27629_27669__$1 = temp__5735__auto___27668;
if(cljs.core.chunked_seq_QMARK_(seq__27629_27669__$1)){
var c__4609__auto___27670 = cljs.core.chunk_first(seq__27629_27669__$1);
var G__27671 = cljs.core.chunk_rest(seq__27629_27669__$1);
var G__27672 = c__4609__auto___27670;
var G__27673 = cljs.core.count(c__4609__auto___27670);
var G__27674 = (0);
seq__27629_27657 = G__27671;
chunk__27630_27658 = G__27672;
count__27631_27659 = G__27673;
i__27632_27660 = G__27674;
continue;
} else {
var vec__27642_27675 = cljs.core.first(seq__27629_27669__$1);
var k_27676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27642_27675,(0),null);
var v_27677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27642_27675,(1),null);
this$__$1.setRequestHeader(k_27676,v_27677);


var G__27678 = cljs.core.next(seq__27629_27669__$1);
var G__27679 = null;
var G__27680 = (0);
var G__27681 = (0);
seq__27629_27657 = G__27678;
chunk__27630_27658 = G__27679;
count__27631_27659 = G__27680;
i__27632_27660 = G__27681;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
