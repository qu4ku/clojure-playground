goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34990 = coll;
var G__34991 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34990,G__34991) : shadow.dom.lazy_native_coll_seq.call(null,G__34990,G__34991));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35005 = arguments.length;
switch (G__35005) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35010 = arguments.length;
switch (G__35010) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35012 = arguments.length;
switch (G__35012) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35014 = arguments.length;
switch (G__35014) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35016 = arguments.length;
switch (G__35016) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35018 = document;
var G__35019 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35018,G__35019);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35020 = shadow.dom.dom_node(parent);
var G__35021 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35020,G__35021);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35024 = shadow.dom.dom_node(el);
var G__35025 = cls;
return goog.dom.classlist.add(G__35024,G__35025);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35027 = shadow.dom.dom_node(el);
var G__35028 = cls;
return goog.dom.classlist.remove(G__35027,G__35028);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35030 = arguments.length;
switch (G__35030) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35031 = shadow.dom.dom_node(el);
var G__35032 = cls;
return goog.dom.classlist.toggle(G__35031,G__35032);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35033){if((e35033 instanceof Object)){
var e = e35033;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35033;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35034 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35035 = null;
var count__35036 = (0);
var i__35037 = (0);
while(true){
if((i__35037 < count__35036)){
var el = chunk__35035.cljs$core$IIndexed$_nth$arity$2(null,i__35037);
var handler_35608__$1 = ((function (seq__35034,chunk__35035,count__35036,i__35037,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35034,chunk__35035,count__35036,i__35037,el))
;
var G__35044_35610 = el;
var G__35045_35611 = cljs.core.name(ev);
var G__35046_35612 = handler_35608__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35044_35610,G__35045_35611,G__35046_35612) : shadow.dom.dom_listen.call(null,G__35044_35610,G__35045_35611,G__35046_35612));


var G__35614 = seq__35034;
var G__35615 = chunk__35035;
var G__35616 = count__35036;
var G__35617 = (i__35037 + (1));
seq__35034 = G__35614;
chunk__35035 = G__35615;
count__35036 = G__35616;
i__35037 = G__35617;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35034);
if(temp__5720__auto__){
var seq__35034__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35034__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35034__$1);
var G__35618 = cljs.core.chunk_rest(seq__35034__$1);
var G__35619 = c__4550__auto__;
var G__35620 = cljs.core.count(c__4550__auto__);
var G__35621 = (0);
seq__35034 = G__35618;
chunk__35035 = G__35619;
count__35036 = G__35620;
i__35037 = G__35621;
continue;
} else {
var el = cljs.core.first(seq__35034__$1);
var handler_35623__$1 = ((function (seq__35034,chunk__35035,count__35036,i__35037,el,seq__35034__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35034,chunk__35035,count__35036,i__35037,el,seq__35034__$1,temp__5720__auto__))
;
var G__35047_35624 = el;
var G__35048_35625 = cljs.core.name(ev);
var G__35049_35626 = handler_35623__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35047_35624,G__35048_35625,G__35049_35626) : shadow.dom.dom_listen.call(null,G__35047_35624,G__35048_35625,G__35049_35626));


var G__35627 = cljs.core.next(seq__35034__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35034 = G__35627;
chunk__35035 = G__35628;
count__35036 = G__35629;
i__35037 = G__35630;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35051 = arguments.length;
switch (G__35051) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35052 = shadow.dom.dom_node(el);
var G__35053 = cljs.core.name(ev);
var G__35054 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35052,G__35053,G__35054) : shadow.dom.dom_listen.call(null,G__35052,G__35053,G__35054));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35055 = shadow.dom.dom_node(el);
var G__35056 = cljs.core.name(ev);
var G__35057 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35055,G__35056,G__35057) : shadow.dom.dom_listen_remove.call(null,G__35055,G__35056,G__35057));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35058 = cljs.core.seq(events);
var chunk__35059 = null;
var count__35060 = (0);
var i__35061 = (0);
while(true){
if((i__35061 < count__35060)){
var vec__35068 = chunk__35059.cljs$core$IIndexed$_nth$arity$2(null,i__35061);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35643 = seq__35058;
var G__35644 = chunk__35059;
var G__35645 = count__35060;
var G__35646 = (i__35061 + (1));
seq__35058 = G__35643;
chunk__35059 = G__35644;
count__35060 = G__35645;
i__35061 = G__35646;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35058);
if(temp__5720__auto__){
var seq__35058__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35058__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35058__$1);
var G__35648 = cljs.core.chunk_rest(seq__35058__$1);
var G__35649 = c__4550__auto__;
var G__35650 = cljs.core.count(c__4550__auto__);
var G__35651 = (0);
seq__35058 = G__35648;
chunk__35059 = G__35649;
count__35060 = G__35650;
i__35061 = G__35651;
continue;
} else {
var vec__35071 = cljs.core.first(seq__35058__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35652 = cljs.core.next(seq__35058__$1);
var G__35653 = null;
var G__35654 = (0);
var G__35655 = (0);
seq__35058 = G__35652;
chunk__35059 = G__35653;
count__35060 = G__35654;
i__35061 = G__35655;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35074 = cljs.core.seq(styles);
var chunk__35075 = null;
var count__35076 = (0);
var i__35077 = (0);
while(true){
if((i__35077 < count__35076)){
var vec__35094 = chunk__35075.cljs$core$IIndexed$_nth$arity$2(null,i__35077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(1),null);
var G__35098_35659 = dom;
var G__35099_35660 = cljs.core.name(k);
var G__35100_35661 = (((v == null))?"":v);
goog.style.setStyle(G__35098_35659,G__35099_35660,G__35100_35661);


var G__35662 = seq__35074;
var G__35663 = chunk__35075;
var G__35664 = count__35076;
var G__35665 = (i__35077 + (1));
seq__35074 = G__35662;
chunk__35075 = G__35663;
count__35076 = G__35664;
i__35077 = G__35665;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35074);
if(temp__5720__auto__){
var seq__35074__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35074__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35074__$1);
var G__35666 = cljs.core.chunk_rest(seq__35074__$1);
var G__35667 = c__4550__auto__;
var G__35668 = cljs.core.count(c__4550__auto__);
var G__35669 = (0);
seq__35074 = G__35666;
chunk__35075 = G__35667;
count__35076 = G__35668;
i__35077 = G__35669;
continue;
} else {
var vec__35103 = cljs.core.first(seq__35074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103,(1),null);
var G__35107_35670 = dom;
var G__35108_35671 = cljs.core.name(k);
var G__35109_35672 = (((v == null))?"":v);
goog.style.setStyle(G__35107_35670,G__35108_35671,G__35109_35672);


var G__35673 = cljs.core.next(seq__35074__$1);
var G__35674 = null;
var G__35675 = (0);
var G__35676 = (0);
seq__35074 = G__35673;
chunk__35075 = G__35674;
count__35076 = G__35675;
i__35077 = G__35676;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35116_35677 = key;
var G__35116_35678__$1 = (((G__35116_35677 instanceof cljs.core.Keyword))?G__35116_35677.fqn:null);
switch (G__35116_35678__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35680 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35680,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35680,"aria-");
}
})())){
el.setAttribute(ks_35680,value);
} else {
(el[ks_35680] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35124 = shadow.dom.dom_node(el);
var G__35125 = cls;
return goog.dom.classlist.contains(G__35124,G__35125);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35133){
var map__35135 = p__35133;
var map__35135__$1 = (((((!((map__35135 == null))))?(((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35135):map__35135);
var props = map__35135__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35140 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35143 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35143,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35143;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35146 = arguments.length;
switch (G__35146) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35147){
var vec__35148 = p__35147;
var seq__35149 = cljs.core.seq(vec__35148);
var first__35150 = cljs.core.first(seq__35149);
var seq__35149__$1 = cljs.core.next(seq__35149);
var nn = first__35150;
var first__35150__$1 = cljs.core.first(seq__35149__$1);
var seq__35149__$2 = cljs.core.next(seq__35149__$1);
var np = first__35150__$1;
var nc = seq__35149__$2;
var node = vec__35148;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35151 = nn;
var G__35152 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35151,G__35152) : create_fn.call(null,G__35151,G__35152));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35155 = nn;
var G__35156 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35155,G__35156) : create_fn.call(null,G__35155,G__35156));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35158 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35158,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35158,(1),null);
var seq__35161_35711 = cljs.core.seq(node_children);
var chunk__35162_35712 = null;
var count__35163_35713 = (0);
var i__35164_35714 = (0);
while(true){
if((i__35164_35714 < count__35163_35713)){
var child_struct_35716 = chunk__35162_35712.cljs$core$IIndexed$_nth$arity$2(null,i__35164_35714);
var children_35717 = shadow.dom.dom_node(child_struct_35716);
if(cljs.core.seq_QMARK_(children_35717)){
var seq__35177_35718 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35717));
var chunk__35179_35719 = null;
var count__35180_35720 = (0);
var i__35181_35721 = (0);
while(true){
if((i__35181_35721 < count__35180_35720)){
var child_35753 = chunk__35179_35719.cljs$core$IIndexed$_nth$arity$2(null,i__35181_35721);
if(cljs.core.truth_(child_35753)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35753);


var G__35754 = seq__35177_35718;
var G__35755 = chunk__35179_35719;
var G__35756 = count__35180_35720;
var G__35757 = (i__35181_35721 + (1));
seq__35177_35718 = G__35754;
chunk__35179_35719 = G__35755;
count__35180_35720 = G__35756;
i__35181_35721 = G__35757;
continue;
} else {
var G__35758 = seq__35177_35718;
var G__35759 = chunk__35179_35719;
var G__35760 = count__35180_35720;
var G__35761 = (i__35181_35721 + (1));
seq__35177_35718 = G__35758;
chunk__35179_35719 = G__35759;
count__35180_35720 = G__35760;
i__35181_35721 = G__35761;
continue;
}
} else {
var temp__5720__auto___35762 = cljs.core.seq(seq__35177_35718);
if(temp__5720__auto___35762){
var seq__35177_35763__$1 = temp__5720__auto___35762;
if(cljs.core.chunked_seq_QMARK_(seq__35177_35763__$1)){
var c__4550__auto___35765 = cljs.core.chunk_first(seq__35177_35763__$1);
var G__35766 = cljs.core.chunk_rest(seq__35177_35763__$1);
var G__35767 = c__4550__auto___35765;
var G__35768 = cljs.core.count(c__4550__auto___35765);
var G__35769 = (0);
seq__35177_35718 = G__35766;
chunk__35179_35719 = G__35767;
count__35180_35720 = G__35768;
i__35181_35721 = G__35769;
continue;
} else {
var child_35770 = cljs.core.first(seq__35177_35763__$1);
if(cljs.core.truth_(child_35770)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35770);


var G__35771 = cljs.core.next(seq__35177_35763__$1);
var G__35772 = null;
var G__35773 = (0);
var G__35774 = (0);
seq__35177_35718 = G__35771;
chunk__35179_35719 = G__35772;
count__35180_35720 = G__35773;
i__35181_35721 = G__35774;
continue;
} else {
var G__35775 = cljs.core.next(seq__35177_35763__$1);
var G__35776 = null;
var G__35777 = (0);
var G__35778 = (0);
seq__35177_35718 = G__35775;
chunk__35179_35719 = G__35776;
count__35180_35720 = G__35777;
i__35181_35721 = G__35778;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35717);
}


var G__35779 = seq__35161_35711;
var G__35780 = chunk__35162_35712;
var G__35781 = count__35163_35713;
var G__35782 = (i__35164_35714 + (1));
seq__35161_35711 = G__35779;
chunk__35162_35712 = G__35780;
count__35163_35713 = G__35781;
i__35164_35714 = G__35782;
continue;
} else {
var temp__5720__auto___35783 = cljs.core.seq(seq__35161_35711);
if(temp__5720__auto___35783){
var seq__35161_35784__$1 = temp__5720__auto___35783;
if(cljs.core.chunked_seq_QMARK_(seq__35161_35784__$1)){
var c__4550__auto___35785 = cljs.core.chunk_first(seq__35161_35784__$1);
var G__35789 = cljs.core.chunk_rest(seq__35161_35784__$1);
var G__35790 = c__4550__auto___35785;
var G__35791 = cljs.core.count(c__4550__auto___35785);
var G__35792 = (0);
seq__35161_35711 = G__35789;
chunk__35162_35712 = G__35790;
count__35163_35713 = G__35791;
i__35164_35714 = G__35792;
continue;
} else {
var child_struct_35795 = cljs.core.first(seq__35161_35784__$1);
var children_35798 = shadow.dom.dom_node(child_struct_35795);
if(cljs.core.seq_QMARK_(children_35798)){
var seq__35183_35799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35798));
var chunk__35185_35800 = null;
var count__35186_35801 = (0);
var i__35187_35802 = (0);
while(true){
if((i__35187_35802 < count__35186_35801)){
var child_35803 = chunk__35185_35800.cljs$core$IIndexed$_nth$arity$2(null,i__35187_35802);
if(cljs.core.truth_(child_35803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35803);


var G__35804 = seq__35183_35799;
var G__35805 = chunk__35185_35800;
var G__35806 = count__35186_35801;
var G__35807 = (i__35187_35802 + (1));
seq__35183_35799 = G__35804;
chunk__35185_35800 = G__35805;
count__35186_35801 = G__35806;
i__35187_35802 = G__35807;
continue;
} else {
var G__35808 = seq__35183_35799;
var G__35809 = chunk__35185_35800;
var G__35810 = count__35186_35801;
var G__35811 = (i__35187_35802 + (1));
seq__35183_35799 = G__35808;
chunk__35185_35800 = G__35809;
count__35186_35801 = G__35810;
i__35187_35802 = G__35811;
continue;
}
} else {
var temp__5720__auto___35812__$1 = cljs.core.seq(seq__35183_35799);
if(temp__5720__auto___35812__$1){
var seq__35183_35813__$1 = temp__5720__auto___35812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35183_35813__$1)){
var c__4550__auto___35814 = cljs.core.chunk_first(seq__35183_35813__$1);
var G__35815 = cljs.core.chunk_rest(seq__35183_35813__$1);
var G__35816 = c__4550__auto___35814;
var G__35817 = cljs.core.count(c__4550__auto___35814);
var G__35818 = (0);
seq__35183_35799 = G__35815;
chunk__35185_35800 = G__35816;
count__35186_35801 = G__35817;
i__35187_35802 = G__35818;
continue;
} else {
var child_35819 = cljs.core.first(seq__35183_35813__$1);
if(cljs.core.truth_(child_35819)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35819);


var G__35820 = cljs.core.next(seq__35183_35813__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35183_35799 = G__35820;
chunk__35185_35800 = G__35821;
count__35186_35801 = G__35822;
i__35187_35802 = G__35823;
continue;
} else {
var G__35824 = cljs.core.next(seq__35183_35813__$1);
var G__35825 = null;
var G__35826 = (0);
var G__35827 = (0);
seq__35183_35799 = G__35824;
chunk__35185_35800 = G__35825;
count__35186_35801 = G__35826;
i__35187_35802 = G__35827;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35798);
}


var G__35828 = cljs.core.next(seq__35161_35784__$1);
var G__35829 = null;
var G__35830 = (0);
var G__35831 = (0);
seq__35161_35711 = G__35828;
chunk__35162_35712 = G__35829;
count__35163_35713 = G__35830;
i__35164_35714 = G__35831;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35189 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35189);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35191 = cljs.core.seq(node);
var chunk__35192 = null;
var count__35193 = (0);
var i__35194 = (0);
while(true){
if((i__35194 < count__35193)){
var n = chunk__35192.cljs$core$IIndexed$_nth$arity$2(null,i__35194);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35837 = seq__35191;
var G__35838 = chunk__35192;
var G__35839 = count__35193;
var G__35840 = (i__35194 + (1));
seq__35191 = G__35837;
chunk__35192 = G__35838;
count__35193 = G__35839;
i__35194 = G__35840;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35191);
if(temp__5720__auto__){
var seq__35191__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35191__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35191__$1);
var G__35841 = cljs.core.chunk_rest(seq__35191__$1);
var G__35842 = c__4550__auto__;
var G__35843 = cljs.core.count(c__4550__auto__);
var G__35844 = (0);
seq__35191 = G__35841;
chunk__35192 = G__35842;
count__35193 = G__35843;
i__35194 = G__35844;
continue;
} else {
var n = cljs.core.first(seq__35191__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35847 = cljs.core.next(seq__35191__$1);
var G__35848 = null;
var G__35849 = (0);
var G__35850 = (0);
seq__35191 = G__35847;
chunk__35192 = G__35848;
count__35193 = G__35849;
i__35194 = G__35850;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35201 = shadow.dom.dom_node(new$);
var G__35202 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35201,G__35202);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35204 = arguments.length;
switch (G__35204) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35206 = arguments.length;
switch (G__35206) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35216 = arguments.length;
switch (G__35216) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35865 = arguments.length;
var i__4731__auto___35866 = (0);
while(true){
if((i__4731__auto___35866 < len__4730__auto___35865)){
args__4736__auto__.push((arguments[i__4731__auto___35866]));

var G__35867 = (i__4731__auto___35866 + (1));
i__4731__auto___35866 = G__35867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35220_35868 = cljs.core.seq(nodes);
var chunk__35221_35869 = null;
var count__35222_35870 = (0);
var i__35223_35871 = (0);
while(true){
if((i__35223_35871 < count__35222_35870)){
var node_35874 = chunk__35221_35869.cljs$core$IIndexed$_nth$arity$2(null,i__35223_35871);
fragment.appendChild(shadow.dom._to_dom(node_35874));


var G__35875 = seq__35220_35868;
var G__35876 = chunk__35221_35869;
var G__35877 = count__35222_35870;
var G__35878 = (i__35223_35871 + (1));
seq__35220_35868 = G__35875;
chunk__35221_35869 = G__35876;
count__35222_35870 = G__35877;
i__35223_35871 = G__35878;
continue;
} else {
var temp__5720__auto___35879 = cljs.core.seq(seq__35220_35868);
if(temp__5720__auto___35879){
var seq__35220_35880__$1 = temp__5720__auto___35879;
if(cljs.core.chunked_seq_QMARK_(seq__35220_35880__$1)){
var c__4550__auto___35881 = cljs.core.chunk_first(seq__35220_35880__$1);
var G__35882 = cljs.core.chunk_rest(seq__35220_35880__$1);
var G__35883 = c__4550__auto___35881;
var G__35884 = cljs.core.count(c__4550__auto___35881);
var G__35885 = (0);
seq__35220_35868 = G__35882;
chunk__35221_35869 = G__35883;
count__35222_35870 = G__35884;
i__35223_35871 = G__35885;
continue;
} else {
var node_35890 = cljs.core.first(seq__35220_35880__$1);
fragment.appendChild(shadow.dom._to_dom(node_35890));


var G__35892 = cljs.core.next(seq__35220_35880__$1);
var G__35893 = null;
var G__35894 = (0);
var G__35895 = (0);
seq__35220_35868 = G__35892;
chunk__35221_35869 = G__35893;
count__35222_35870 = G__35894;
i__35223_35871 = G__35895;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35219){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35219));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35244_35897 = cljs.core.seq(scripts);
var chunk__35245_35898 = null;
var count__35246_35899 = (0);
var i__35247_35900 = (0);
while(true){
if((i__35247_35900 < count__35246_35899)){
var vec__35254_35901 = chunk__35245_35898.cljs$core$IIndexed$_nth$arity$2(null,i__35247_35900);
var script_tag_35902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254_35901,(0),null);
var script_body_35903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254_35901,(1),null);
eval(script_body_35903);


var G__35906 = seq__35244_35897;
var G__35907 = chunk__35245_35898;
var G__35908 = count__35246_35899;
var G__35909 = (i__35247_35900 + (1));
seq__35244_35897 = G__35906;
chunk__35245_35898 = G__35907;
count__35246_35899 = G__35908;
i__35247_35900 = G__35909;
continue;
} else {
var temp__5720__auto___35917 = cljs.core.seq(seq__35244_35897);
if(temp__5720__auto___35917){
var seq__35244_35918__$1 = temp__5720__auto___35917;
if(cljs.core.chunked_seq_QMARK_(seq__35244_35918__$1)){
var c__4550__auto___35919 = cljs.core.chunk_first(seq__35244_35918__$1);
var G__35920 = cljs.core.chunk_rest(seq__35244_35918__$1);
var G__35921 = c__4550__auto___35919;
var G__35922 = cljs.core.count(c__4550__auto___35919);
var G__35923 = (0);
seq__35244_35897 = G__35920;
chunk__35245_35898 = G__35921;
count__35246_35899 = G__35922;
i__35247_35900 = G__35923;
continue;
} else {
var vec__35258_35924 = cljs.core.first(seq__35244_35918__$1);
var script_tag_35925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258_35924,(0),null);
var script_body_35926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258_35924,(1),null);
eval(script_body_35926);


var G__35927 = cljs.core.next(seq__35244_35918__$1);
var G__35928 = null;
var G__35929 = (0);
var G__35930 = (0);
seq__35244_35897 = G__35927;
chunk__35245_35898 = G__35928;
count__35246_35899 = G__35929;
i__35247_35900 = G__35930;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35261){
var vec__35262 = p__35261;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35262,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35262,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35265 = shadow.dom.dom_node(el);
var G__35266 = cls;
return goog.dom.getAncestorByClass(G__35265,G__35266);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35268 = arguments.length;
switch (G__35268) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35269 = shadow.dom.dom_node(el);
var G__35270 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35269,G__35270);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35271 = shadow.dom.dom_node(el);
var G__35272 = cljs.core.name(tag);
var G__35273 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35271,G__35272,G__35273);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35274 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35274);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35276 = shadow.dom.dom_node(dom);
var G__35277 = value;
return goog.dom.forms.setValue(G__35276,G__35277);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35290 = cljs.core.seq(style_keys);
var chunk__35291 = null;
var count__35292 = (0);
var i__35293 = (0);
while(true){
if((i__35293 < count__35292)){
var it = chunk__35291.cljs$core$IIndexed$_nth$arity$2(null,i__35293);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35938 = seq__35290;
var G__35939 = chunk__35291;
var G__35940 = count__35292;
var G__35941 = (i__35293 + (1));
seq__35290 = G__35938;
chunk__35291 = G__35939;
count__35292 = G__35940;
i__35293 = G__35941;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35290);
if(temp__5720__auto__){
var seq__35290__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35290__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35290__$1);
var G__35942 = cljs.core.chunk_rest(seq__35290__$1);
var G__35943 = c__4550__auto__;
var G__35944 = cljs.core.count(c__4550__auto__);
var G__35945 = (0);
seq__35290 = G__35942;
chunk__35291 = G__35943;
count__35292 = G__35944;
i__35293 = G__35945;
continue;
} else {
var it = cljs.core.first(seq__35290__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35946 = cljs.core.next(seq__35290__$1);
var G__35947 = null;
var G__35948 = (0);
var G__35949 = (0);
seq__35290 = G__35946;
chunk__35291 = G__35947;
count__35292 = G__35948;
i__35293 = G__35949;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35297,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35301 = k35297;
var G__35301__$1 = (((G__35301 instanceof cljs.core.Keyword))?G__35301.fqn:null);
switch (G__35301__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35297,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35302){
var vec__35303 = p__35302;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35296){
var self__ = this;
var G__35296__$1 = this;
return (new cljs.core.RecordIter((0),G__35296__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35306 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35306(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35298,other35299){
var self__ = this;
var this35298__$1 = this;
return (((!((other35299 == null)))) && ((this35298__$1.constructor === other35299.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35298__$1.x,other35299.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35298__$1.y,other35299.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35298__$1.__extmap,other35299.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35296){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35325 = cljs.core.keyword_identical_QMARK_;
var expr__35326 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35328 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35329 = expr__35326;
return (pred__35325.cljs$core$IFn$_invoke$arity$2 ? pred__35325.cljs$core$IFn$_invoke$arity$2(G__35328,G__35329) : pred__35325.call(null,G__35328,G__35329));
})())){
return (new shadow.dom.Coordinate(G__35296,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35330 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35331 = expr__35326;
return (pred__35325.cljs$core$IFn$_invoke$arity$2 ? pred__35325.cljs$core$IFn$_invoke$arity$2(G__35330,G__35331) : pred__35325.call(null,G__35330,G__35331));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35296,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35296),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35296){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35296,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35300){
var extmap__4424__auto__ = (function (){var G__35337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35300,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35300)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35337);
} else {
return G__35337;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35300),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35300),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35338 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35338);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35339 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35339);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35340 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35340);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35343,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35347 = k35343;
var G__35347__$1 = (((G__35347 instanceof cljs.core.Keyword))?G__35347.fqn:null);
switch (G__35347__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35343,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35358){
var vec__35359 = p__35358;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35342){
var self__ = this;
var G__35342__$1 = this;
return (new cljs.core.RecordIter((0),G__35342__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35364 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35364(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35344,other35345){
var self__ = this;
var this35344__$1 = this;
return (((!((other35345 == null)))) && ((this35344__$1.constructor === other35345.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35344__$1.w,other35345.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35344__$1.h,other35345.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35344__$1.__extmap,other35345.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35342){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35366 = cljs.core.keyword_identical_QMARK_;
var expr__35367 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35369 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35370 = expr__35367;
return (pred__35366.cljs$core$IFn$_invoke$arity$2 ? pred__35366.cljs$core$IFn$_invoke$arity$2(G__35369,G__35370) : pred__35366.call(null,G__35369,G__35370));
})())){
return (new shadow.dom.Size(G__35342,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35371 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35372 = expr__35367;
return (pred__35366.cljs$core$IFn$_invoke$arity$2 ? pred__35366.cljs$core$IFn$_invoke$arity$2(G__35371,G__35372) : pred__35366.call(null,G__35371,G__35372));
})())){
return (new shadow.dom.Size(self__.w,G__35342,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35342),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35342){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35342,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35346){
var extmap__4424__auto__ = (function (){var G__35375 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35346,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35346)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35375);
} else {
return G__35375;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35346),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35346),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35376 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35376);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36100 = (i + (1));
var G__36101 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36100;
ret = G__36101;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35381){
var vec__35382 = p__35381;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35386 = arguments.length;
switch (G__35386) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35389_36108 = new_node;
var G__35390_36109 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35389_36108,G__35390_36109);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35393_36110 = new_node;
var G__35394_36111 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35393_36110,G__35394_36111);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36115 = ps;
var G__36116 = (i + (1));
el__$1 = G__36115;
i = G__36116;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35402 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35402);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35406 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35406);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35408 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35408);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35410 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35413_36153 = cljs.core.seq(props);
var chunk__35414_36154 = null;
var count__35415_36155 = (0);
var i__35416_36156 = (0);
while(true){
if((i__35416_36156 < count__35415_36155)){
var vec__35427_36157 = chunk__35414_36154.cljs$core$IIndexed$_nth$arity$2(null,i__35416_36156);
var k_36158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35427_36157,(0),null);
var v_36159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35427_36157,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_36158);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36158),v_36159);


var G__36164 = seq__35413_36153;
var G__36165 = chunk__35414_36154;
var G__36166 = count__35415_36155;
var G__36167 = (i__35416_36156 + (1));
seq__35413_36153 = G__36164;
chunk__35414_36154 = G__36165;
count__35415_36155 = G__36166;
i__35416_36156 = G__36167;
continue;
} else {
var temp__5720__auto___36168 = cljs.core.seq(seq__35413_36153);
if(temp__5720__auto___36168){
var seq__35413_36169__$1 = temp__5720__auto___36168;
if(cljs.core.chunked_seq_QMARK_(seq__35413_36169__$1)){
var c__4550__auto___36173 = cljs.core.chunk_first(seq__35413_36169__$1);
var G__36174 = cljs.core.chunk_rest(seq__35413_36169__$1);
var G__36175 = c__4550__auto___36173;
var G__36176 = cljs.core.count(c__4550__auto___36173);
var G__36177 = (0);
seq__35413_36153 = G__36174;
chunk__35414_36154 = G__36175;
count__35415_36155 = G__36176;
i__35416_36156 = G__36177;
continue;
} else {
var vec__35431_36178 = cljs.core.first(seq__35413_36169__$1);
var k_36179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35431_36178,(0),null);
var v_36180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35431_36178,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_36179);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36179),v_36180);


var G__36182 = cljs.core.next(seq__35413_36169__$1);
var G__36183 = null;
var G__36184 = (0);
var G__36185 = (0);
seq__35413_36153 = G__36182;
chunk__35414_36154 = G__36183;
count__35415_36155 = G__36184;
i__35416_36156 = G__36185;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35445 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35445,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35445,(1),null);
var seq__35449_36192 = cljs.core.seq(node_children);
var chunk__35451_36193 = null;
var count__35452_36194 = (0);
var i__35453_36195 = (0);
while(true){
if((i__35453_36195 < count__35452_36194)){
var child_struct_36197 = chunk__35451_36193.cljs$core$IIndexed$_nth$arity$2(null,i__35453_36195);
if((!((child_struct_36197 == null)))){
if(typeof child_struct_36197 === 'string'){
var text_36198 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36198),child_struct_36197].join(''));
} else {
var children_36199 = shadow.dom.svg_node(child_struct_36197);
if(cljs.core.seq_QMARK_(children_36199)){
var seq__35487_36200 = cljs.core.seq(children_36199);
var chunk__35489_36201 = null;
var count__35490_36202 = (0);
var i__35491_36203 = (0);
while(true){
if((i__35491_36203 < count__35490_36202)){
var child_36208 = chunk__35489_36201.cljs$core$IIndexed$_nth$arity$2(null,i__35491_36203);
if(cljs.core.truth_(child_36208)){
node.appendChild(child_36208);


var G__36209 = seq__35487_36200;
var G__36210 = chunk__35489_36201;
var G__36211 = count__35490_36202;
var G__36212 = (i__35491_36203 + (1));
seq__35487_36200 = G__36209;
chunk__35489_36201 = G__36210;
count__35490_36202 = G__36211;
i__35491_36203 = G__36212;
continue;
} else {
var G__36217 = seq__35487_36200;
var G__36218 = chunk__35489_36201;
var G__36219 = count__35490_36202;
var G__36220 = (i__35491_36203 + (1));
seq__35487_36200 = G__36217;
chunk__35489_36201 = G__36218;
count__35490_36202 = G__36219;
i__35491_36203 = G__36220;
continue;
}
} else {
var temp__5720__auto___36221 = cljs.core.seq(seq__35487_36200);
if(temp__5720__auto___36221){
var seq__35487_36222__$1 = temp__5720__auto___36221;
if(cljs.core.chunked_seq_QMARK_(seq__35487_36222__$1)){
var c__4550__auto___36223 = cljs.core.chunk_first(seq__35487_36222__$1);
var G__36224 = cljs.core.chunk_rest(seq__35487_36222__$1);
var G__36225 = c__4550__auto___36223;
var G__36226 = cljs.core.count(c__4550__auto___36223);
var G__36227 = (0);
seq__35487_36200 = G__36224;
chunk__35489_36201 = G__36225;
count__35490_36202 = G__36226;
i__35491_36203 = G__36227;
continue;
} else {
var child_36228 = cljs.core.first(seq__35487_36222__$1);
if(cljs.core.truth_(child_36228)){
node.appendChild(child_36228);


var G__36229 = cljs.core.next(seq__35487_36222__$1);
var G__36230 = null;
var G__36231 = (0);
var G__36232 = (0);
seq__35487_36200 = G__36229;
chunk__35489_36201 = G__36230;
count__35490_36202 = G__36231;
i__35491_36203 = G__36232;
continue;
} else {
var G__36237 = cljs.core.next(seq__35487_36222__$1);
var G__36238 = null;
var G__36239 = (0);
var G__36240 = (0);
seq__35487_36200 = G__36237;
chunk__35489_36201 = G__36238;
count__35490_36202 = G__36239;
i__35491_36203 = G__36240;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36199);
}
}


var G__36244 = seq__35449_36192;
var G__36245 = chunk__35451_36193;
var G__36246 = count__35452_36194;
var G__36247 = (i__35453_36195 + (1));
seq__35449_36192 = G__36244;
chunk__35451_36193 = G__36245;
count__35452_36194 = G__36246;
i__35453_36195 = G__36247;
continue;
} else {
var G__36248 = seq__35449_36192;
var G__36249 = chunk__35451_36193;
var G__36250 = count__35452_36194;
var G__36251 = (i__35453_36195 + (1));
seq__35449_36192 = G__36248;
chunk__35451_36193 = G__36249;
count__35452_36194 = G__36250;
i__35453_36195 = G__36251;
continue;
}
} else {
var temp__5720__auto___36256 = cljs.core.seq(seq__35449_36192);
if(temp__5720__auto___36256){
var seq__35449_36258__$1 = temp__5720__auto___36256;
if(cljs.core.chunked_seq_QMARK_(seq__35449_36258__$1)){
var c__4550__auto___36260 = cljs.core.chunk_first(seq__35449_36258__$1);
var G__36262 = cljs.core.chunk_rest(seq__35449_36258__$1);
var G__36263 = c__4550__auto___36260;
var G__36264 = cljs.core.count(c__4550__auto___36260);
var G__36265 = (0);
seq__35449_36192 = G__36262;
chunk__35451_36193 = G__36263;
count__35452_36194 = G__36264;
i__35453_36195 = G__36265;
continue;
} else {
var child_struct_36277 = cljs.core.first(seq__35449_36258__$1);
if((!((child_struct_36277 == null)))){
if(typeof child_struct_36277 === 'string'){
var text_36278 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36278),child_struct_36277].join(''));
} else {
var children_36279 = shadow.dom.svg_node(child_struct_36277);
if(cljs.core.seq_QMARK_(children_36279)){
var seq__35499_36280 = cljs.core.seq(children_36279);
var chunk__35501_36281 = null;
var count__35502_36282 = (0);
var i__35503_36283 = (0);
while(true){
if((i__35503_36283 < count__35502_36282)){
var child_36284 = chunk__35501_36281.cljs$core$IIndexed$_nth$arity$2(null,i__35503_36283);
if(cljs.core.truth_(child_36284)){
node.appendChild(child_36284);


var G__36285 = seq__35499_36280;
var G__36286 = chunk__35501_36281;
var G__36287 = count__35502_36282;
var G__36288 = (i__35503_36283 + (1));
seq__35499_36280 = G__36285;
chunk__35501_36281 = G__36286;
count__35502_36282 = G__36287;
i__35503_36283 = G__36288;
continue;
} else {
var G__36289 = seq__35499_36280;
var G__36290 = chunk__35501_36281;
var G__36291 = count__35502_36282;
var G__36292 = (i__35503_36283 + (1));
seq__35499_36280 = G__36289;
chunk__35501_36281 = G__36290;
count__35502_36282 = G__36291;
i__35503_36283 = G__36292;
continue;
}
} else {
var temp__5720__auto___36293__$1 = cljs.core.seq(seq__35499_36280);
if(temp__5720__auto___36293__$1){
var seq__35499_36294__$1 = temp__5720__auto___36293__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35499_36294__$1)){
var c__4550__auto___36295 = cljs.core.chunk_first(seq__35499_36294__$1);
var G__36296 = cljs.core.chunk_rest(seq__35499_36294__$1);
var G__36297 = c__4550__auto___36295;
var G__36298 = cljs.core.count(c__4550__auto___36295);
var G__36299 = (0);
seq__35499_36280 = G__36296;
chunk__35501_36281 = G__36297;
count__35502_36282 = G__36298;
i__35503_36283 = G__36299;
continue;
} else {
var child_36300 = cljs.core.first(seq__35499_36294__$1);
if(cljs.core.truth_(child_36300)){
node.appendChild(child_36300);


var G__36301 = cljs.core.next(seq__35499_36294__$1);
var G__36302 = null;
var G__36303 = (0);
var G__36304 = (0);
seq__35499_36280 = G__36301;
chunk__35501_36281 = G__36302;
count__35502_36282 = G__36303;
i__35503_36283 = G__36304;
continue;
} else {
var G__36305 = cljs.core.next(seq__35499_36294__$1);
var G__36306 = null;
var G__36307 = (0);
var G__36308 = (0);
seq__35499_36280 = G__36305;
chunk__35501_36281 = G__36306;
count__35502_36282 = G__36307;
i__35503_36283 = G__36308;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36279);
}
}


var G__36309 = cljs.core.next(seq__35449_36258__$1);
var G__36310 = null;
var G__36311 = (0);
var G__36312 = (0);
seq__35449_36192 = G__36309;
chunk__35451_36193 = G__36310;
count__35452_36194 = G__36311;
i__35453_36195 = G__36312;
continue;
} else {
var G__36313 = cljs.core.next(seq__35449_36258__$1);
var G__36314 = null;
var G__36315 = (0);
var G__36316 = (0);
seq__35449_36192 = G__36313;
chunk__35451_36193 = G__36314;
count__35452_36194 = G__36315;
i__35453_36195 = G__36316;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35505_36317 = shadow.dom._to_svg;
var G__35506_36318 = "string";
var G__35507_36319 = ((function (G__35505_36317,G__35506_36318){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35505_36317,G__35506_36318))
;
goog.object.set(G__35505_36317,G__35506_36318,G__35507_36319);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35514_36320 = shadow.dom._to_svg;
var G__35515_36321 = "null";
var G__35516_36322 = ((function (G__35514_36320,G__35515_36321){
return (function (_){
return null;
});})(G__35514_36320,G__35515_36321))
;
goog.object.set(G__35514_36320,G__35515_36321,G__35516_36322);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36323 = arguments.length;
var i__4731__auto___36324 = (0);
while(true){
if((i__4731__auto___36324 < len__4730__auto___36323)){
args__4736__auto__.push((arguments[i__4731__auto___36324]));

var G__36325 = (i__4731__auto___36324 + (1));
i__4731__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35517){
var G__35518 = cljs.core.first(seq35517);
var seq35517__$1 = cljs.core.next(seq35517);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35518,seq35517__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35520 = arguments.length;
switch (G__35520) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35521_36327 = shadow.dom.dom_node(el);
var G__35522_36328 = cljs.core.name(event);
var G__35523_36329 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35521_36327,G__35522_36328,G__35523_36329) : shadow.dom.dom_listen.call(null,G__35521_36327,G__35522_36328,G__35523_36329));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33394__auto___36330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36330,buf,chan,event_fn){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36330,buf,chan,event_fn){
return (function (state_35528){
var state_val_35529 = (state_35528[(1)]);
if((state_val_35529 === (1))){
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(2),once_or_cleanup);
} else {
if((state_val_35529 === (2))){
var inst_35525 = (state_35528[(2)]);
var inst_35526 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35528__$1 = (function (){var statearr_35530 = state_35528;
(statearr_35530[(7)] = inst_35525);

return statearr_35530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35526);
} else {
return null;
}
}
});})(c__33394__auto___36330,buf,chan,event_fn))
;
return ((function (switch__33298__auto__,c__33394__auto___36330,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33299__auto__ = null;
var shadow$dom$state_machine__33299__auto____0 = (function (){
var statearr_35531 = [null,null,null,null,null,null,null,null];
(statearr_35531[(0)] = shadow$dom$state_machine__33299__auto__);

(statearr_35531[(1)] = (1));

return statearr_35531;
});
var shadow$dom$state_machine__33299__auto____1 = (function (state_35528){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e35532){if((e35532 instanceof Object)){
var ex__33302__auto__ = e35532;
var statearr_35533_36442 = state_35528;
(statearr_35533_36442[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36443 = state_35528;
state_35528 = G__36443;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
shadow$dom$state_machine__33299__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33299__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33299__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33299__auto____0;
shadow$dom$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33299__auto____1;
return shadow$dom$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36330,buf,chan,event_fn))
})();
var state__33396__auto__ = (function (){var statearr_35534 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_35534[(6)] = c__33394__auto___36330);

return statearr_35534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36330,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
