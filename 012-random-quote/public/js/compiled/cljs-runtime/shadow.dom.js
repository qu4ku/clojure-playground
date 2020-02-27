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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34350 = coll;
var G__34351 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34350,G__34351) : shadow.dom.lazy_native_coll_seq.call(null,G__34350,G__34351));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

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
var G__34393 = arguments.length;
switch (G__34393) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34409 = arguments.length;
switch (G__34409) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34411 = arguments.length;
switch (G__34411) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34417 = arguments.length;
switch (G__34417) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34425){if((e34425 instanceof Object)){
var e = e34425;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34425;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34429 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34430 = null;
var count__34431 = (0);
var i__34432 = (0);
while(true){
if((i__34432 < count__34431)){
var el = chunk__34430.cljs$core$IIndexed$_nth$arity$2(null,i__34432);
var handler_34979__$1 = ((function (seq__34429,chunk__34430,count__34431,i__34432,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34429,chunk__34430,count__34431,i__34432,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34979__$1);


var G__34980 = seq__34429;
var G__34981 = chunk__34430;
var G__34982 = count__34431;
var G__34983 = (i__34432 + (1));
seq__34429 = G__34980;
chunk__34430 = G__34981;
count__34431 = G__34982;
i__34432 = G__34983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34429);
if(temp__5735__auto__){
var seq__34429__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34429__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34429__$1);
var G__34987 = cljs.core.chunk_rest(seq__34429__$1);
var G__34988 = c__4609__auto__;
var G__34989 = cljs.core.count(c__4609__auto__);
var G__34990 = (0);
seq__34429 = G__34987;
chunk__34430 = G__34988;
count__34431 = G__34989;
i__34432 = G__34990;
continue;
} else {
var el = cljs.core.first(seq__34429__$1);
var handler_34991__$1 = ((function (seq__34429,chunk__34430,count__34431,i__34432,el,seq__34429__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34429,chunk__34430,count__34431,i__34432,el,seq__34429__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34991__$1);


var G__34992 = cljs.core.next(seq__34429__$1);
var G__34993 = null;
var G__34994 = (0);
var G__34995 = (0);
seq__34429 = G__34992;
chunk__34430 = G__34993;
count__34431 = G__34994;
i__34432 = G__34995;
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
var G__34434 = arguments.length;
switch (G__34434) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34435 = cljs.core.seq(events);
var chunk__34436 = null;
var count__34437 = (0);
var i__34438 = (0);
while(true){
if((i__34438 < count__34437)){
var vec__34445 = chunk__34436.cljs$core$IIndexed$_nth$arity$2(null,i__34438);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35003 = seq__34435;
var G__35004 = chunk__34436;
var G__35005 = count__34437;
var G__35006 = (i__34438 + (1));
seq__34435 = G__35003;
chunk__34436 = G__35004;
count__34437 = G__35005;
i__34438 = G__35006;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34435);
if(temp__5735__auto__){
var seq__34435__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34435__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34435__$1);
var G__35007 = cljs.core.chunk_rest(seq__34435__$1);
var G__35008 = c__4609__auto__;
var G__35009 = cljs.core.count(c__4609__auto__);
var G__35010 = (0);
seq__34435 = G__35007;
chunk__34436 = G__35008;
count__34437 = G__35009;
i__34438 = G__35010;
continue;
} else {
var vec__34448 = cljs.core.first(seq__34435__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34448,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35011 = cljs.core.next(seq__34435__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34435 = G__35011;
chunk__34436 = G__35012;
count__34437 = G__35013;
i__34438 = G__35014;
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
var seq__34451 = cljs.core.seq(styles);
var chunk__34452 = null;
var count__34453 = (0);
var i__34454 = (0);
while(true){
if((i__34454 < count__34453)){
var vec__34461 = chunk__34452.cljs$core$IIndexed$_nth$arity$2(null,i__34454);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34461,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35019 = seq__34451;
var G__35020 = chunk__34452;
var G__35021 = count__34453;
var G__35022 = (i__34454 + (1));
seq__34451 = G__35019;
chunk__34452 = G__35020;
count__34453 = G__35021;
i__34454 = G__35022;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34451);
if(temp__5735__auto__){
var seq__34451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34451__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34451__$1);
var G__35023 = cljs.core.chunk_rest(seq__34451__$1);
var G__35024 = c__4609__auto__;
var G__35025 = cljs.core.count(c__4609__auto__);
var G__35026 = (0);
seq__34451 = G__35023;
chunk__34452 = G__35024;
count__34453 = G__35025;
i__34454 = G__35026;
continue;
} else {
var vec__34464 = cljs.core.first(seq__34451__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35027 = cljs.core.next(seq__34451__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__34451 = G__35027;
chunk__34452 = G__35028;
count__34453 = G__35029;
i__34454 = G__35030;
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
var G__34467_35031 = key;
var G__34467_35032__$1 = (((G__34467_35031 instanceof cljs.core.Keyword))?G__34467_35031.fqn:null);
switch (G__34467_35032__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_35036 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_35036,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_35036,"aria-");
}
})())){
el.setAttribute(ks_35036,value);
} else {
(el[ks_35036] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34468){
var map__34469 = p__34468;
var map__34469__$1 = (((((!((map__34469 == null))))?(((((map__34469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34469):map__34469);
var props = map__34469__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34469__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34471 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34474 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34474,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34474;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34476 = arguments.length;
switch (G__34476) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34477){
var vec__34478 = p__34477;
var seq__34479 = cljs.core.seq(vec__34478);
var first__34480 = cljs.core.first(seq__34479);
var seq__34479__$1 = cljs.core.next(seq__34479);
var nn = first__34480;
var first__34480__$1 = cljs.core.first(seq__34479__$1);
var seq__34479__$2 = cljs.core.next(seq__34479__$1);
var np = first__34480__$1;
var nc = seq__34479__$2;
var node = vec__34478;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34481 = nn;
var G__34482 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34481,G__34482) : create_fn.call(null,G__34481,G__34482));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34483 = nn;
var G__34484 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34483,G__34484) : create_fn.call(null,G__34483,G__34484));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34485 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34485,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34485,(1),null);
var seq__34488_35081 = cljs.core.seq(node_children);
var chunk__34489_35082 = null;
var count__34490_35083 = (0);
var i__34491_35084 = (0);
while(true){
if((i__34491_35084 < count__34490_35083)){
var child_struct_35085 = chunk__34489_35082.cljs$core$IIndexed$_nth$arity$2(null,i__34491_35084);
var children_35086 = shadow.dom.dom_node(child_struct_35085);
if(cljs.core.seq_QMARK_(children_35086)){
var seq__34505_35087 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35086));
var chunk__34507_35088 = null;
var count__34508_35089 = (0);
var i__34509_35090 = (0);
while(true){
if((i__34509_35090 < count__34508_35089)){
var child_35092 = chunk__34507_35088.cljs$core$IIndexed$_nth$arity$2(null,i__34509_35090);
if(cljs.core.truth_(child_35092)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35092);


var G__35093 = seq__34505_35087;
var G__35094 = chunk__34507_35088;
var G__35095 = count__34508_35089;
var G__35096 = (i__34509_35090 + (1));
seq__34505_35087 = G__35093;
chunk__34507_35088 = G__35094;
count__34508_35089 = G__35095;
i__34509_35090 = G__35096;
continue;
} else {
var G__35097 = seq__34505_35087;
var G__35098 = chunk__34507_35088;
var G__35099 = count__34508_35089;
var G__35100 = (i__34509_35090 + (1));
seq__34505_35087 = G__35097;
chunk__34507_35088 = G__35098;
count__34508_35089 = G__35099;
i__34509_35090 = G__35100;
continue;
}
} else {
var temp__5735__auto___35101 = cljs.core.seq(seq__34505_35087);
if(temp__5735__auto___35101){
var seq__34505_35102__$1 = temp__5735__auto___35101;
if(cljs.core.chunked_seq_QMARK_(seq__34505_35102__$1)){
var c__4609__auto___35103 = cljs.core.chunk_first(seq__34505_35102__$1);
var G__35104 = cljs.core.chunk_rest(seq__34505_35102__$1);
var G__35105 = c__4609__auto___35103;
var G__35106 = cljs.core.count(c__4609__auto___35103);
var G__35107 = (0);
seq__34505_35087 = G__35104;
chunk__34507_35088 = G__35105;
count__34508_35089 = G__35106;
i__34509_35090 = G__35107;
continue;
} else {
var child_35108 = cljs.core.first(seq__34505_35102__$1);
if(cljs.core.truth_(child_35108)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35108);


var G__35110 = cljs.core.next(seq__34505_35102__$1);
var G__35111 = null;
var G__35112 = (0);
var G__35113 = (0);
seq__34505_35087 = G__35110;
chunk__34507_35088 = G__35111;
count__34508_35089 = G__35112;
i__34509_35090 = G__35113;
continue;
} else {
var G__35114 = cljs.core.next(seq__34505_35102__$1);
var G__35115 = null;
var G__35116 = (0);
var G__35117 = (0);
seq__34505_35087 = G__35114;
chunk__34507_35088 = G__35115;
count__34508_35089 = G__35116;
i__34509_35090 = G__35117;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35086);
}


var G__35118 = seq__34488_35081;
var G__35119 = chunk__34489_35082;
var G__35120 = count__34490_35083;
var G__35121 = (i__34491_35084 + (1));
seq__34488_35081 = G__35118;
chunk__34489_35082 = G__35119;
count__34490_35083 = G__35120;
i__34491_35084 = G__35121;
continue;
} else {
var temp__5735__auto___35122 = cljs.core.seq(seq__34488_35081);
if(temp__5735__auto___35122){
var seq__34488_35124__$1 = temp__5735__auto___35122;
if(cljs.core.chunked_seq_QMARK_(seq__34488_35124__$1)){
var c__4609__auto___35125 = cljs.core.chunk_first(seq__34488_35124__$1);
var G__35126 = cljs.core.chunk_rest(seq__34488_35124__$1);
var G__35127 = c__4609__auto___35125;
var G__35128 = cljs.core.count(c__4609__auto___35125);
var G__35129 = (0);
seq__34488_35081 = G__35126;
chunk__34489_35082 = G__35127;
count__34490_35083 = G__35128;
i__34491_35084 = G__35129;
continue;
} else {
var child_struct_35130 = cljs.core.first(seq__34488_35124__$1);
var children_35131 = shadow.dom.dom_node(child_struct_35130);
if(cljs.core.seq_QMARK_(children_35131)){
var seq__34512_35132 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35131));
var chunk__34514_35133 = null;
var count__34515_35134 = (0);
var i__34516_35135 = (0);
while(true){
if((i__34516_35135 < count__34515_35134)){
var child_35136 = chunk__34514_35133.cljs$core$IIndexed$_nth$arity$2(null,i__34516_35135);
if(cljs.core.truth_(child_35136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35136);


var G__35137 = seq__34512_35132;
var G__35138 = chunk__34514_35133;
var G__35139 = count__34515_35134;
var G__35140 = (i__34516_35135 + (1));
seq__34512_35132 = G__35137;
chunk__34514_35133 = G__35138;
count__34515_35134 = G__35139;
i__34516_35135 = G__35140;
continue;
} else {
var G__35141 = seq__34512_35132;
var G__35142 = chunk__34514_35133;
var G__35143 = count__34515_35134;
var G__35144 = (i__34516_35135 + (1));
seq__34512_35132 = G__35141;
chunk__34514_35133 = G__35142;
count__34515_35134 = G__35143;
i__34516_35135 = G__35144;
continue;
}
} else {
var temp__5735__auto___35146__$1 = cljs.core.seq(seq__34512_35132);
if(temp__5735__auto___35146__$1){
var seq__34512_35147__$1 = temp__5735__auto___35146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34512_35147__$1)){
var c__4609__auto___35148 = cljs.core.chunk_first(seq__34512_35147__$1);
var G__35149 = cljs.core.chunk_rest(seq__34512_35147__$1);
var G__35150 = c__4609__auto___35148;
var G__35151 = cljs.core.count(c__4609__auto___35148);
var G__35152 = (0);
seq__34512_35132 = G__35149;
chunk__34514_35133 = G__35150;
count__34515_35134 = G__35151;
i__34516_35135 = G__35152;
continue;
} else {
var child_35156 = cljs.core.first(seq__34512_35147__$1);
if(cljs.core.truth_(child_35156)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35156);


var G__35157 = cljs.core.next(seq__34512_35147__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__34512_35132 = G__35157;
chunk__34514_35133 = G__35158;
count__34515_35134 = G__35159;
i__34516_35135 = G__35160;
continue;
} else {
var G__35161 = cljs.core.next(seq__34512_35147__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__34512_35132 = G__35161;
chunk__34514_35133 = G__35162;
count__34515_35134 = G__35163;
i__34516_35135 = G__35164;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35131);
}


var G__35169 = cljs.core.next(seq__34488_35124__$1);
var G__35170 = null;
var G__35171 = (0);
var G__35172 = (0);
seq__34488_35081 = G__35169;
chunk__34489_35082 = G__35170;
count__34490_35083 = G__35171;
i__34491_35084 = G__35172;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34566 = cljs.core.seq(node);
var chunk__34567 = null;
var count__34568 = (0);
var i__34569 = (0);
while(true){
if((i__34569 < count__34568)){
var n = chunk__34567.cljs$core$IIndexed$_nth$arity$2(null,i__34569);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35179 = seq__34566;
var G__35180 = chunk__34567;
var G__35181 = count__34568;
var G__35182 = (i__34569 + (1));
seq__34566 = G__35179;
chunk__34567 = G__35180;
count__34568 = G__35181;
i__34569 = G__35182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34566);
if(temp__5735__auto__){
var seq__34566__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34566__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34566__$1);
var G__35189 = cljs.core.chunk_rest(seq__34566__$1);
var G__35190 = c__4609__auto__;
var G__35191 = cljs.core.count(c__4609__auto__);
var G__35192 = (0);
seq__34566 = G__35189;
chunk__34567 = G__35190;
count__34568 = G__35191;
i__34569 = G__35192;
continue;
} else {
var n = cljs.core.first(seq__34566__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35193 = cljs.core.next(seq__34566__$1);
var G__35194 = null;
var G__35195 = (0);
var G__35196 = (0);
seq__34566 = G__35193;
chunk__34567 = G__35194;
count__34568 = G__35195;
i__34569 = G__35196;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34571 = arguments.length;
switch (G__34571) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34573 = arguments.length;
switch (G__34573) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__34575 = arguments.length;
switch (G__34575) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35208 = arguments.length;
var i__4790__auto___35209 = (0);
while(true){
if((i__4790__auto___35209 < len__4789__auto___35208)){
args__4795__auto__.push((arguments[i__4790__auto___35209]));

var G__35210 = (i__4790__auto___35209 + (1));
i__4790__auto___35209 = G__35210;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34577_35212 = cljs.core.seq(nodes);
var chunk__34578_35213 = null;
var count__34579_35214 = (0);
var i__34580_35215 = (0);
while(true){
if((i__34580_35215 < count__34579_35214)){
var node_35222 = chunk__34578_35213.cljs$core$IIndexed$_nth$arity$2(null,i__34580_35215);
fragment.appendChild(shadow.dom._to_dom(node_35222));


var G__35223 = seq__34577_35212;
var G__35224 = chunk__34578_35213;
var G__35225 = count__34579_35214;
var G__35226 = (i__34580_35215 + (1));
seq__34577_35212 = G__35223;
chunk__34578_35213 = G__35224;
count__34579_35214 = G__35225;
i__34580_35215 = G__35226;
continue;
} else {
var temp__5735__auto___35227 = cljs.core.seq(seq__34577_35212);
if(temp__5735__auto___35227){
var seq__34577_35228__$1 = temp__5735__auto___35227;
if(cljs.core.chunked_seq_QMARK_(seq__34577_35228__$1)){
var c__4609__auto___35230 = cljs.core.chunk_first(seq__34577_35228__$1);
var G__35231 = cljs.core.chunk_rest(seq__34577_35228__$1);
var G__35232 = c__4609__auto___35230;
var G__35233 = cljs.core.count(c__4609__auto___35230);
var G__35234 = (0);
seq__34577_35212 = G__35231;
chunk__34578_35213 = G__35232;
count__34579_35214 = G__35233;
i__34580_35215 = G__35234;
continue;
} else {
var node_35235 = cljs.core.first(seq__34577_35228__$1);
fragment.appendChild(shadow.dom._to_dom(node_35235));


var G__35236 = cljs.core.next(seq__34577_35228__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__34577_35212 = G__35236;
chunk__34578_35213 = G__35237;
count__34579_35214 = G__35238;
i__34580_35215 = G__35239;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34576){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34576));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34582_35241 = cljs.core.seq(scripts);
var chunk__34583_35242 = null;
var count__34584_35243 = (0);
var i__34585_35244 = (0);
while(true){
if((i__34585_35244 < count__34584_35243)){
var vec__34601_35245 = chunk__34583_35242.cljs$core$IIndexed$_nth$arity$2(null,i__34585_35244);
var script_tag_35246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601_35245,(0),null);
var script_body_35247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601_35245,(1),null);
eval(script_body_35247);


var G__35248 = seq__34582_35241;
var G__35249 = chunk__34583_35242;
var G__35250 = count__34584_35243;
var G__35251 = (i__34585_35244 + (1));
seq__34582_35241 = G__35248;
chunk__34583_35242 = G__35249;
count__34584_35243 = G__35250;
i__34585_35244 = G__35251;
continue;
} else {
var temp__5735__auto___35252 = cljs.core.seq(seq__34582_35241);
if(temp__5735__auto___35252){
var seq__34582_35253__$1 = temp__5735__auto___35252;
if(cljs.core.chunked_seq_QMARK_(seq__34582_35253__$1)){
var c__4609__auto___35254 = cljs.core.chunk_first(seq__34582_35253__$1);
var G__35255 = cljs.core.chunk_rest(seq__34582_35253__$1);
var G__35256 = c__4609__auto___35254;
var G__35257 = cljs.core.count(c__4609__auto___35254);
var G__35258 = (0);
seq__34582_35241 = G__35255;
chunk__34583_35242 = G__35256;
count__34584_35243 = G__35257;
i__34585_35244 = G__35258;
continue;
} else {
var vec__34606_35259 = cljs.core.first(seq__34582_35253__$1);
var script_tag_35260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34606_35259,(0),null);
var script_body_35261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34606_35259,(1),null);
eval(script_body_35261);


var G__35262 = cljs.core.next(seq__34582_35253__$1);
var G__35263 = null;
var G__35264 = (0);
var G__35265 = (0);
seq__34582_35241 = G__35262;
chunk__34583_35242 = G__35263;
count__34584_35243 = G__35264;
i__34585_35244 = G__35265;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34611){
var vec__34612 = p__34611;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34612,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34612,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34634 = arguments.length;
switch (G__34634) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__34644 = cljs.core.seq(style_keys);
var chunk__34645 = null;
var count__34646 = (0);
var i__34647 = (0);
while(true){
if((i__34647 < count__34646)){
var it = chunk__34645.cljs$core$IIndexed$_nth$arity$2(null,i__34647);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35273 = seq__34644;
var G__35274 = chunk__34645;
var G__35275 = count__34646;
var G__35276 = (i__34647 + (1));
seq__34644 = G__35273;
chunk__34645 = G__35274;
count__34646 = G__35275;
i__34647 = G__35276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34644);
if(temp__5735__auto__){
var seq__34644__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34644__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34644__$1);
var G__35280 = cljs.core.chunk_rest(seq__34644__$1);
var G__35281 = c__4609__auto__;
var G__35282 = cljs.core.count(c__4609__auto__);
var G__35283 = (0);
seq__34644 = G__35280;
chunk__34645 = G__35281;
count__34646 = G__35282;
i__34647 = G__35283;
continue;
} else {
var it = cljs.core.first(seq__34644__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35284 = cljs.core.next(seq__34644__$1);
var G__35285 = null;
var G__35286 = (0);
var G__35287 = (0);
seq__34644 = G__35284;
chunk__34645 = G__35285;
count__34646 = G__35286;
i__34647 = G__35287;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34650,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34656 = k34650;
var G__34656__$1 = (((G__34656 instanceof cljs.core.Keyword))?G__34656.fqn:null);
switch (G__34656__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34650,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34658){
var vec__34659 = p__34658;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34659,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34659,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34649){
var self__ = this;
var G__34649__$1 = this;
return (new cljs.core.RecordIter((0),G__34649__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34651,other34652){
var self__ = this;
var this34651__$1 = this;
return (((!((other34652 == null)))) && ((this34651__$1.constructor === other34652.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34651__$1.x,other34652.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34651__$1.y,other34652.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34651__$1.__extmap,other34652.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34649){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34663 = cljs.core.keyword_identical_QMARK_;
var expr__34664 = k__4447__auto__;
if(cljs.core.truth_((pred__34663.cljs$core$IFn$_invoke$arity$2 ? pred__34663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34664) : pred__34663.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34664)))){
return (new shadow.dom.Coordinate(G__34649,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34663.cljs$core$IFn$_invoke$arity$2 ? pred__34663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34664) : pred__34663.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34664)))){
return (new shadow.dom.Coordinate(self__.x,G__34649,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34649),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34649){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34649,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34653){
var extmap__4478__auto__ = (function (){var G__34672 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34653,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34653)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34672);
} else {
return G__34672;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34653),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34653),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34687,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34691 = k34687;
var G__34691__$1 = (((G__34691 instanceof cljs.core.Keyword))?G__34691.fqn:null);
switch (G__34691__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34687,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34692){
var vec__34693 = p__34692;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34686){
var self__ = this;
var G__34686__$1 = this;
return (new cljs.core.RecordIter((0),G__34686__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34688,other34689){
var self__ = this;
var this34688__$1 = this;
return (((!((other34689 == null)))) && ((this34688__$1.constructor === other34689.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34688__$1.w,other34689.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34688__$1.h,other34689.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34688__$1.__extmap,other34689.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34686){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34722 = cljs.core.keyword_identical_QMARK_;
var expr__34723 = k__4447__auto__;
if(cljs.core.truth_((pred__34722.cljs$core$IFn$_invoke$arity$2 ? pred__34722.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34723) : pred__34722.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34723)))){
return (new shadow.dom.Size(G__34686,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34722.cljs$core$IFn$_invoke$arity$2 ? pred__34722.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34723) : pred__34722.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34723)))){
return (new shadow.dom.Size(self__.w,G__34686,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34686),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34686){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34686,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34690){
var extmap__4478__auto__ = (function (){var G__34726 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34690,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34690)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34726);
} else {
return G__34726;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34690),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34690),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__35340 = (i + (1));
var G__35341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35340;
ret = G__35341;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34754){
var vec__34755 = p__34754;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34759 = arguments.length;
switch (G__34759) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__35355 = ps;
var G__35356 = (i + (1));
el__$1 = G__35355;
i = G__35356;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34760 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34763_35368 = cljs.core.seq(props);
var chunk__34764_35369 = null;
var count__34765_35370 = (0);
var i__34766_35371 = (0);
while(true){
if((i__34766_35371 < count__34765_35370)){
var vec__34773_35372 = chunk__34764_35369.cljs$core$IIndexed$_nth$arity$2(null,i__34766_35371);
var k_35373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34773_35372,(0),null);
var v_35374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34773_35372,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35373);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35373),v_35374);


var G__35375 = seq__34763_35368;
var G__35376 = chunk__34764_35369;
var G__35377 = count__34765_35370;
var G__35378 = (i__34766_35371 + (1));
seq__34763_35368 = G__35375;
chunk__34764_35369 = G__35376;
count__34765_35370 = G__35377;
i__34766_35371 = G__35378;
continue;
} else {
var temp__5735__auto___35380 = cljs.core.seq(seq__34763_35368);
if(temp__5735__auto___35380){
var seq__34763_35381__$1 = temp__5735__auto___35380;
if(cljs.core.chunked_seq_QMARK_(seq__34763_35381__$1)){
var c__4609__auto___35382 = cljs.core.chunk_first(seq__34763_35381__$1);
var G__35384 = cljs.core.chunk_rest(seq__34763_35381__$1);
var G__35385 = c__4609__auto___35382;
var G__35386 = cljs.core.count(c__4609__auto___35382);
var G__35387 = (0);
seq__34763_35368 = G__35384;
chunk__34764_35369 = G__35385;
count__34765_35370 = G__35386;
i__34766_35371 = G__35387;
continue;
} else {
var vec__34778_35389 = cljs.core.first(seq__34763_35381__$1);
var k_35390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778_35389,(0),null);
var v_35391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778_35389,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35390);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35390),v_35391);


var G__35392 = cljs.core.next(seq__34763_35381__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__34763_35368 = G__35392;
chunk__34764_35369 = G__35393;
count__34765_35370 = G__35394;
i__34766_35371 = G__35395;
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
var vec__34790 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(1),null);
var seq__34793_35397 = cljs.core.seq(node_children);
var chunk__34795_35398 = null;
var count__34796_35399 = (0);
var i__34797_35400 = (0);
while(true){
if((i__34797_35400 < count__34796_35399)){
var child_struct_35401 = chunk__34795_35398.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35400);
if((!((child_struct_35401 == null)))){
if(typeof child_struct_35401 === 'string'){
var text_35402 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35402),child_struct_35401].join(''));
} else {
var children_35404 = shadow.dom.svg_node(child_struct_35401);
if(cljs.core.seq_QMARK_(children_35404)){
var seq__34835_35405 = cljs.core.seq(children_35404);
var chunk__34837_35406 = null;
var count__34838_35407 = (0);
var i__34839_35408 = (0);
while(true){
if((i__34839_35408 < count__34838_35407)){
var child_35409 = chunk__34837_35406.cljs$core$IIndexed$_nth$arity$2(null,i__34839_35408);
if(cljs.core.truth_(child_35409)){
node.appendChild(child_35409);


var G__35410 = seq__34835_35405;
var G__35411 = chunk__34837_35406;
var G__35412 = count__34838_35407;
var G__35413 = (i__34839_35408 + (1));
seq__34835_35405 = G__35410;
chunk__34837_35406 = G__35411;
count__34838_35407 = G__35412;
i__34839_35408 = G__35413;
continue;
} else {
var G__35423 = seq__34835_35405;
var G__35424 = chunk__34837_35406;
var G__35425 = count__34838_35407;
var G__35426 = (i__34839_35408 + (1));
seq__34835_35405 = G__35423;
chunk__34837_35406 = G__35424;
count__34838_35407 = G__35425;
i__34839_35408 = G__35426;
continue;
}
} else {
var temp__5735__auto___35427 = cljs.core.seq(seq__34835_35405);
if(temp__5735__auto___35427){
var seq__34835_35432__$1 = temp__5735__auto___35427;
if(cljs.core.chunked_seq_QMARK_(seq__34835_35432__$1)){
var c__4609__auto___35433 = cljs.core.chunk_first(seq__34835_35432__$1);
var G__35434 = cljs.core.chunk_rest(seq__34835_35432__$1);
var G__35435 = c__4609__auto___35433;
var G__35436 = cljs.core.count(c__4609__auto___35433);
var G__35437 = (0);
seq__34835_35405 = G__35434;
chunk__34837_35406 = G__35435;
count__34838_35407 = G__35436;
i__34839_35408 = G__35437;
continue;
} else {
var child_35438 = cljs.core.first(seq__34835_35432__$1);
if(cljs.core.truth_(child_35438)){
node.appendChild(child_35438);


var G__35439 = cljs.core.next(seq__34835_35432__$1);
var G__35440 = null;
var G__35441 = (0);
var G__35442 = (0);
seq__34835_35405 = G__35439;
chunk__34837_35406 = G__35440;
count__34838_35407 = G__35441;
i__34839_35408 = G__35442;
continue;
} else {
var G__35443 = cljs.core.next(seq__34835_35432__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__34835_35405 = G__35443;
chunk__34837_35406 = G__35444;
count__34838_35407 = G__35445;
i__34839_35408 = G__35446;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35404);
}
}


var G__35447 = seq__34793_35397;
var G__35448 = chunk__34795_35398;
var G__35449 = count__34796_35399;
var G__35450 = (i__34797_35400 + (1));
seq__34793_35397 = G__35447;
chunk__34795_35398 = G__35448;
count__34796_35399 = G__35449;
i__34797_35400 = G__35450;
continue;
} else {
var G__35451 = seq__34793_35397;
var G__35452 = chunk__34795_35398;
var G__35453 = count__34796_35399;
var G__35454 = (i__34797_35400 + (1));
seq__34793_35397 = G__35451;
chunk__34795_35398 = G__35452;
count__34796_35399 = G__35453;
i__34797_35400 = G__35454;
continue;
}
} else {
var temp__5735__auto___35455 = cljs.core.seq(seq__34793_35397);
if(temp__5735__auto___35455){
var seq__34793_35456__$1 = temp__5735__auto___35455;
if(cljs.core.chunked_seq_QMARK_(seq__34793_35456__$1)){
var c__4609__auto___35457 = cljs.core.chunk_first(seq__34793_35456__$1);
var G__35458 = cljs.core.chunk_rest(seq__34793_35456__$1);
var G__35459 = c__4609__auto___35457;
var G__35460 = cljs.core.count(c__4609__auto___35457);
var G__35461 = (0);
seq__34793_35397 = G__35458;
chunk__34795_35398 = G__35459;
count__34796_35399 = G__35460;
i__34797_35400 = G__35461;
continue;
} else {
var child_struct_35462 = cljs.core.first(seq__34793_35456__$1);
if((!((child_struct_35462 == null)))){
if(typeof child_struct_35462 === 'string'){
var text_35463 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35463),child_struct_35462].join(''));
} else {
var children_35464 = shadow.dom.svg_node(child_struct_35462);
if(cljs.core.seq_QMARK_(children_35464)){
var seq__34841_35465 = cljs.core.seq(children_35464);
var chunk__34843_35466 = null;
var count__34844_35467 = (0);
var i__34845_35468 = (0);
while(true){
if((i__34845_35468 < count__34844_35467)){
var child_35469 = chunk__34843_35466.cljs$core$IIndexed$_nth$arity$2(null,i__34845_35468);
if(cljs.core.truth_(child_35469)){
node.appendChild(child_35469);


var G__35470 = seq__34841_35465;
var G__35471 = chunk__34843_35466;
var G__35472 = count__34844_35467;
var G__35473 = (i__34845_35468 + (1));
seq__34841_35465 = G__35470;
chunk__34843_35466 = G__35471;
count__34844_35467 = G__35472;
i__34845_35468 = G__35473;
continue;
} else {
var G__35475 = seq__34841_35465;
var G__35476 = chunk__34843_35466;
var G__35477 = count__34844_35467;
var G__35478 = (i__34845_35468 + (1));
seq__34841_35465 = G__35475;
chunk__34843_35466 = G__35476;
count__34844_35467 = G__35477;
i__34845_35468 = G__35478;
continue;
}
} else {
var temp__5735__auto___35480__$1 = cljs.core.seq(seq__34841_35465);
if(temp__5735__auto___35480__$1){
var seq__34841_35481__$1 = temp__5735__auto___35480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34841_35481__$1)){
var c__4609__auto___35482 = cljs.core.chunk_first(seq__34841_35481__$1);
var G__35483 = cljs.core.chunk_rest(seq__34841_35481__$1);
var G__35484 = c__4609__auto___35482;
var G__35485 = cljs.core.count(c__4609__auto___35482);
var G__35486 = (0);
seq__34841_35465 = G__35483;
chunk__34843_35466 = G__35484;
count__34844_35467 = G__35485;
i__34845_35468 = G__35486;
continue;
} else {
var child_35487 = cljs.core.first(seq__34841_35481__$1);
if(cljs.core.truth_(child_35487)){
node.appendChild(child_35487);


var G__35488 = cljs.core.next(seq__34841_35481__$1);
var G__35489 = null;
var G__35490 = (0);
var G__35491 = (0);
seq__34841_35465 = G__35488;
chunk__34843_35466 = G__35489;
count__34844_35467 = G__35490;
i__34845_35468 = G__35491;
continue;
} else {
var G__35492 = cljs.core.next(seq__34841_35481__$1);
var G__35493 = null;
var G__35494 = (0);
var G__35495 = (0);
seq__34841_35465 = G__35492;
chunk__34843_35466 = G__35493;
count__34844_35467 = G__35494;
i__34845_35468 = G__35495;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35464);
}
}


var G__35496 = cljs.core.next(seq__34793_35456__$1);
var G__35497 = null;
var G__35498 = (0);
var G__35499 = (0);
seq__34793_35397 = G__35496;
chunk__34795_35398 = G__35497;
count__34796_35399 = G__35498;
i__34797_35400 = G__35499;
continue;
} else {
var G__35500 = cljs.core.next(seq__34793_35456__$1);
var G__35501 = null;
var G__35502 = (0);
var G__35503 = (0);
seq__34793_35397 = G__35500;
chunk__34795_35398 = G__35501;
count__34796_35399 = G__35502;
i__34797_35400 = G__35503;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35509 = arguments.length;
var i__4790__auto___35510 = (0);
while(true){
if((i__4790__auto___35510 < len__4789__auto___35509)){
args__4795__auto__.push((arguments[i__4790__auto___35510]));

var G__35511 = (i__4790__auto___35510 + (1));
i__4790__auto___35510 = G__35511;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34847){
var G__34848 = cljs.core.first(seq34847);
var seq34847__$1 = cljs.core.next(seq34847);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34848,seq34847__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34856 = arguments.length;
switch (G__34856) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__32817__auto___35527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_34861){
var state_val_34862 = (state_34861[(1)]);
if((state_val_34862 === (1))){
var state_34861__$1 = state_34861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34861__$1,(2),once_or_cleanup);
} else {
if((state_val_34862 === (2))){
var inst_34858 = (state_34861[(2)]);
var inst_34859 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34861__$1 = (function (){var statearr_34863 = state_34861;
(statearr_34863[(7)] = inst_34858);

return statearr_34863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34861__$1,inst_34859);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32733__auto__ = null;
var shadow$dom$state_machine__32733__auto____0 = (function (){
var statearr_34864 = [null,null,null,null,null,null,null,null];
(statearr_34864[(0)] = shadow$dom$state_machine__32733__auto__);

(statearr_34864[(1)] = (1));

return statearr_34864;
});
var shadow$dom$state_machine__32733__auto____1 = (function (state_34861){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34861);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34865){if((e34865 instanceof Object)){
var ex__32736__auto__ = e34865;
var statearr_34866_35561 = state_34861;
(statearr_34866_35561[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35563 = state_34861;
state_34861 = G__35563;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
shadow$dom$state_machine__32733__auto__ = function(state_34861){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32733__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32733__auto____1.call(this,state_34861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32733__auto____0;
shadow$dom$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32733__auto____1;
return shadow$dom$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_34867 = f__32818__auto__();
(statearr_34867[(6)] = c__32817__auto___35527);

return statearr_34867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
