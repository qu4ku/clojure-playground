goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32875 = arguments.length;
switch (G__32875) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32876 = (function (f,blockable,meta32877){
this.f = f;
this.blockable = blockable;
this.meta32877 = meta32877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32878,meta32877__$1){
var self__ = this;
var _32878__$1 = this;
return (new cljs.core.async.t_cljs$core$async32876(self__.f,self__.blockable,meta32877__$1));
}));

(cljs.core.async.t_cljs$core$async32876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32878){
var self__ = this;
var _32878__$1 = this;
return self__.meta32877;
}));

(cljs.core.async.t_cljs$core$async32876.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32876.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32877","meta32877",643435503,null)], null);
}));

(cljs.core.async.t_cljs$core$async32876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32876");

(cljs.core.async.t_cljs$core$async32876.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32876.
 */
cljs.core.async.__GT_t_cljs$core$async32876 = (function cljs$core$async$__GT_t_cljs$core$async32876(f__$1,blockable__$1,meta32877){
return (new cljs.core.async.t_cljs$core$async32876(f__$1,blockable__$1,meta32877));
});

}

return (new cljs.core.async.t_cljs$core$async32876(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32881 = arguments.length;
switch (G__32881) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32885 = arguments.length;
switch (G__32885) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34520 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34520) : fn1.call(null,val_34520));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34520) : fn1.call(null,val_34520));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32887 = arguments.length;
switch (G__32887) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___34522 = n;
var x_34523 = (0);
while(true){
if((x_34523 < n__4666__auto___34522)){
(a[x_34523] = x_34523);

var G__34524 = (x_34523 + (1));
x_34523 = G__34524;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32888 = (function (flag,meta32889){
this.flag = flag;
this.meta32889 = meta32889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32890,meta32889__$1){
var self__ = this;
var _32890__$1 = this;
return (new cljs.core.async.t_cljs$core$async32888(self__.flag,meta32889__$1));
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32890){
var self__ = this;
var _32890__$1 = this;
return self__.meta32889;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32889","meta32889",-722211566,null)], null);
}));

(cljs.core.async.t_cljs$core$async32888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32888");

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32888.
 */
cljs.core.async.__GT_t_cljs$core$async32888 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32888(flag__$1,meta32889){
return (new cljs.core.async.t_cljs$core$async32888(flag__$1,meta32889));
});

}

return (new cljs.core.async.t_cljs$core$async32888(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32891 = (function (flag,cb,meta32892){
this.flag = flag;
this.cb = cb;
this.meta32892 = meta32892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32893,meta32892__$1){
var self__ = this;
var _32893__$1 = this;
return (new cljs.core.async.t_cljs$core$async32891(self__.flag,self__.cb,meta32892__$1));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32893){
var self__ = this;
var _32893__$1 = this;
return self__.meta32892;
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32892","meta32892",1738472187,null)], null);
}));

(cljs.core.async.t_cljs$core$async32891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32891");

(cljs.core.async.t_cljs$core$async32891.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32891.
 */
cljs.core.async.__GT_t_cljs$core$async32891 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32891(flag__$1,cb__$1,meta32892){
return (new cljs.core.async.t_cljs$core$async32891(flag__$1,cb__$1,meta32892));
});

}

return (new cljs.core.async.t_cljs$core$async32891(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32898_SHARP_){
var G__32901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32898_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32901) : fret.call(null,G__32901));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32899_SHARP_){
var G__32902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32899_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32902) : fret.call(null,G__32902));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34525 = (i + (1));
i = G__34525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34526 = arguments.length;
var i__4790__auto___34527 = (0);
while(true){
if((i__4790__auto___34527 < len__4789__auto___34526)){
args__4795__auto__.push((arguments[i__4790__auto___34527]));

var G__34528 = (i__4790__auto___34527 + (1));
i__4790__auto___34527 = G__34528;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32905){
var map__32906 = p__32905;
var map__32906__$1 = (((((!((map__32906 == null))))?(((((map__32906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32906):map__32906);
var opts = map__32906__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32903){
var G__32904 = cljs.core.first(seq32903);
var seq32903__$1 = cljs.core.next(seq32903);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32904,seq32903__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32909 = arguments.length;
switch (G__32909) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32817__auto___34530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_32933){
var state_val_32934 = (state_32933[(1)]);
if((state_val_32934 === (7))){
var inst_32929 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32937_34531 = state_32933__$1;
(statearr_32937_34531[(2)] = inst_32929);

(statearr_32937_34531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (1))){
var state_32933__$1 = state_32933;
var statearr_32938_34532 = state_32933__$1;
(statearr_32938_34532[(2)] = null);

(statearr_32938_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (4))){
var inst_32912 = (state_32933[(7)]);
var inst_32912__$1 = (state_32933[(2)]);
var inst_32913 = (inst_32912__$1 == null);
var state_32933__$1 = (function (){var statearr_32939 = state_32933;
(statearr_32939[(7)] = inst_32912__$1);

return statearr_32939;
})();
if(cljs.core.truth_(inst_32913)){
var statearr_32940_34533 = state_32933__$1;
(statearr_32940_34533[(1)] = (5));

} else {
var statearr_32941_34534 = state_32933__$1;
(statearr_32941_34534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (13))){
var state_32933__$1 = state_32933;
var statearr_32942_34535 = state_32933__$1;
(statearr_32942_34535[(2)] = null);

(statearr_32942_34535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (6))){
var inst_32912 = (state_32933[(7)]);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32933__$1,(11),to,inst_32912);
} else {
if((state_val_32934 === (3))){
var inst_32931 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32933__$1,inst_32931);
} else {
if((state_val_32934 === (12))){
var state_32933__$1 = state_32933;
var statearr_32943_34536 = state_32933__$1;
(statearr_32943_34536[(2)] = null);

(statearr_32943_34536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (2))){
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32933__$1,(4),from);
} else {
if((state_val_32934 === (11))){
var inst_32922 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
if(cljs.core.truth_(inst_32922)){
var statearr_32944_34537 = state_32933__$1;
(statearr_32944_34537[(1)] = (12));

} else {
var statearr_32945_34538 = state_32933__$1;
(statearr_32945_34538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (9))){
var state_32933__$1 = state_32933;
var statearr_32946_34539 = state_32933__$1;
(statearr_32946_34539[(2)] = null);

(statearr_32946_34539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (5))){
var state_32933__$1 = state_32933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32947_34540 = state_32933__$1;
(statearr_32947_34540[(1)] = (8));

} else {
var statearr_32948_34541 = state_32933__$1;
(statearr_32948_34541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (14))){
var inst_32927 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32949_34542 = state_32933__$1;
(statearr_32949_34542[(2)] = inst_32927);

(statearr_32949_34542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (10))){
var inst_32919 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32950_34543 = state_32933__$1;
(statearr_32950_34543[(2)] = inst_32919);

(statearr_32950_34543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (8))){
var inst_32916 = cljs.core.async.close_BANG_(to);
var state_32933__$1 = state_32933;
var statearr_32951_34544 = state_32933__$1;
(statearr_32951_34544[(2)] = inst_32916);

(statearr_32951_34544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_32952 = [null,null,null,null,null,null,null,null];
(statearr_32952[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_32952[(1)] = (1));

return statearr_32952;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_32933){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_32933);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e32953){if((e32953 instanceof Object)){
var ex__32736__auto__ = e32953;
var statearr_32954_34545 = state_32933;
(statearr_32954_34545[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_32933;
state_32933 = G__34546;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_32933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_32933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_32955 = f__32818__auto__();
(statearr_32955[(6)] = c__32817__auto___34530);

return statearr_32955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32956){
var vec__32957 = p__32956;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(1),null);
var job = vec__32957;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32817__auto___34547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_32964){
var state_val_32965 = (state_32964[(1)]);
if((state_val_32965 === (1))){
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32964__$1,(2),res,v);
} else {
if((state_val_32965 === (2))){
var inst_32961 = (state_32964[(2)]);
var inst_32962 = cljs.core.async.close_BANG_(res);
var state_32964__$1 = (function (){var statearr_32966 = state_32964;
(statearr_32966[(7)] = inst_32961);

return statearr_32966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32964__$1,inst_32962);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_32967 = [null,null,null,null,null,null,null,null];
(statearr_32967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_32967[(1)] = (1));

return statearr_32967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_32964){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_32964);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e32968){if((e32968 instanceof Object)){
var ex__32736__auto__ = e32968;
var statearr_32969_34548 = state_32964;
(statearr_32969_34548[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34549 = state_32964;
state_32964 = G__34549;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_32964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_32964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_32970 = f__32818__auto__();
(statearr_32970[(6)] = c__32817__auto___34547);

return statearr_32970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32971){
var vec__32972 = p__32971;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32972,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32972,(1),null);
var job = vec__32972;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___34550 = n;
var __34551 = (0);
while(true){
if((__34551 < n__4666__auto___34550)){
var G__32975_34552 = type;
var G__32975_34553__$1 = (((G__32975_34552 instanceof cljs.core.Keyword))?G__32975_34552.fqn:null);
switch (G__32975_34553__$1) {
case "compute":
var c__32817__auto___34555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34551,c__32817__auto___34555,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async){
return (function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = ((function (__34551,c__32817__auto___34555,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async){
return (function (state_32988){
var state_val_32989 = (state_32988[(1)]);
if((state_val_32989 === (1))){
var state_32988__$1 = state_32988;
var statearr_32990_34556 = state_32988__$1;
(statearr_32990_34556[(2)] = null);

(statearr_32990_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (2))){
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32988__$1,(4),jobs);
} else {
if((state_val_32989 === (3))){
var inst_32986 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32988__$1,inst_32986);
} else {
if((state_val_32989 === (4))){
var inst_32978 = (state_32988[(2)]);
var inst_32979 = process(inst_32978);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32979)){
var statearr_32991_34557 = state_32988__$1;
(statearr_32991_34557[(1)] = (5));

} else {
var statearr_32992_34558 = state_32988__$1;
(statearr_32992_34558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (5))){
var state_32988__$1 = state_32988;
var statearr_32993_34559 = state_32988__$1;
(statearr_32993_34559[(2)] = null);

(statearr_32993_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (6))){
var state_32988__$1 = state_32988;
var statearr_32994_34560 = state_32988__$1;
(statearr_32994_34560[(2)] = null);

(statearr_32994_34560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (7))){
var inst_32984 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32995_34561 = state_32988__$1;
(statearr_32995_34561[(2)] = inst_32984);

(statearr_32995_34561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34551,c__32817__auto___34555,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async))
;
return ((function (__34551,switch__32732__auto__,c__32817__auto___34555,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_32996 = [null,null,null,null,null,null,null];
(statearr_32996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_32996[(1)] = (1));

return statearr_32996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_32988){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_32988);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e32997){if((e32997 instanceof Object)){
var ex__32736__auto__ = e32997;
var statearr_32998_34562 = state_32988;
(statearr_32998_34562[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_32988;
state_32988 = G__34563;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(__34551,switch__32732__auto__,c__32817__auto___34555,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async))
})();
var state__32819__auto__ = (function (){var statearr_32999 = f__32818__auto__();
(statearr_32999[(6)] = c__32817__auto___34555);

return statearr_32999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
});})(__34551,c__32817__auto___34555,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async))
);


break;
case "async":
var c__32817__auto___34564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34551,c__32817__auto___34564,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async){
return (function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = ((function (__34551,c__32817__auto___34564,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async){
return (function (state_33012){
var state_val_33013 = (state_33012[(1)]);
if((state_val_33013 === (1))){
var state_33012__$1 = state_33012;
var statearr_33014_34581 = state_33012__$1;
(statearr_33014_34581[(2)] = null);

(statearr_33014_34581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (2))){
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33012__$1,(4),jobs);
} else {
if((state_val_33013 === (3))){
var inst_33010 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33012__$1,inst_33010);
} else {
if((state_val_33013 === (4))){
var inst_33002 = (state_33012[(2)]);
var inst_33003 = async(inst_33002);
var state_33012__$1 = state_33012;
if(cljs.core.truth_(inst_33003)){
var statearr_33015_34589 = state_33012__$1;
(statearr_33015_34589[(1)] = (5));

} else {
var statearr_33016_34590 = state_33012__$1;
(statearr_33016_34590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (5))){
var state_33012__$1 = state_33012;
var statearr_33017_34591 = state_33012__$1;
(statearr_33017_34591[(2)] = null);

(statearr_33017_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (6))){
var state_33012__$1 = state_33012;
var statearr_33018_34592 = state_33012__$1;
(statearr_33018_34592[(2)] = null);

(statearr_33018_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (7))){
var inst_33008 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33019_34593 = state_33012__$1;
(statearr_33019_34593[(2)] = inst_33008);

(statearr_33019_34593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34551,c__32817__auto___34564,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async))
;
return ((function (__34551,switch__32732__auto__,c__32817__auto___34564,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33012){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33012);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33021){if((e33021 instanceof Object)){
var ex__32736__auto__ = e33021;
var statearr_33022_34594 = state_33012;
(statearr_33022_34594[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34595 = state_33012;
state_33012 = G__34595;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(__34551,switch__32732__auto__,c__32817__auto___34564,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async))
})();
var state__32819__auto__ = (function (){var statearr_33023 = f__32818__auto__();
(statearr_33023[(6)] = c__32817__auto___34564);

return statearr_33023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
});})(__34551,c__32817__auto___34564,G__32975_34552,G__32975_34553__$1,n__4666__auto___34550,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32975_34553__$1)].join('')));

}

var G__34596 = (__34551 + (1));
__34551 = G__34596;
continue;
} else {
}
break;
}

var c__32817__auto___34597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33045){
var state_val_33046 = (state_33045[(1)]);
if((state_val_33046 === (7))){
var inst_33041 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
var statearr_33047_34604 = state_33045__$1;
(statearr_33047_34604[(2)] = inst_33041);

(statearr_33047_34604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (1))){
var state_33045__$1 = state_33045;
var statearr_33048_34605 = state_33045__$1;
(statearr_33048_34605[(2)] = null);

(statearr_33048_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (4))){
var inst_33026 = (state_33045[(7)]);
var inst_33026__$1 = (state_33045[(2)]);
var inst_33027 = (inst_33026__$1 == null);
var state_33045__$1 = (function (){var statearr_33049 = state_33045;
(statearr_33049[(7)] = inst_33026__$1);

return statearr_33049;
})();
if(cljs.core.truth_(inst_33027)){
var statearr_33050_34609 = state_33045__$1;
(statearr_33050_34609[(1)] = (5));

} else {
var statearr_33051_34610 = state_33045__$1;
(statearr_33051_34610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (6))){
var inst_33026 = (state_33045[(7)]);
var inst_33031 = (state_33045[(8)]);
var inst_33031__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33033 = [inst_33026,inst_33031__$1];
var inst_33034 = (new cljs.core.PersistentVector(null,2,(5),inst_33032,inst_33033,null));
var state_33045__$1 = (function (){var statearr_33052 = state_33045;
(statearr_33052[(8)] = inst_33031__$1);

return statearr_33052;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33045__$1,(8),jobs,inst_33034);
} else {
if((state_val_33046 === (3))){
var inst_33043 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33045__$1,inst_33043);
} else {
if((state_val_33046 === (2))){
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33045__$1,(4),from);
} else {
if((state_val_33046 === (9))){
var inst_33038 = (state_33045[(2)]);
var state_33045__$1 = (function (){var statearr_33053 = state_33045;
(statearr_33053[(9)] = inst_33038);

return statearr_33053;
})();
var statearr_33054_34615 = state_33045__$1;
(statearr_33054_34615[(2)] = null);

(statearr_33054_34615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (5))){
var inst_33029 = cljs.core.async.close_BANG_(jobs);
var state_33045__$1 = state_33045;
var statearr_33055_34616 = state_33045__$1;
(statearr_33055_34616[(2)] = inst_33029);

(statearr_33055_34616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (8))){
var inst_33031 = (state_33045[(8)]);
var inst_33036 = (state_33045[(2)]);
var state_33045__$1 = (function (){var statearr_33056 = state_33045;
(statearr_33056[(10)] = inst_33036);

return statearr_33056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33045__$1,(9),results,inst_33031);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33057[(1)] = (1));

return statearr_33057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33045){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33045);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33058){if((e33058 instanceof Object)){
var ex__32736__auto__ = e33058;
var statearr_33059_34617 = state_33045;
(statearr_33059_34617[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34618 = state_33045;
state_33045 = G__34618;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33060 = f__32818__auto__();
(statearr_33060[(6)] = c__32817__auto___34597);

return statearr_33060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


var c__32817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33098){
var state_val_33099 = (state_33098[(1)]);
if((state_val_33099 === (7))){
var inst_33094 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33100_34619 = state_33098__$1;
(statearr_33100_34619[(2)] = inst_33094);

(statearr_33100_34619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (20))){
var state_33098__$1 = state_33098;
var statearr_33101_34620 = state_33098__$1;
(statearr_33101_34620[(2)] = null);

(statearr_33101_34620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (1))){
var state_33098__$1 = state_33098;
var statearr_33102_34621 = state_33098__$1;
(statearr_33102_34621[(2)] = null);

(statearr_33102_34621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (4))){
var inst_33063 = (state_33098[(7)]);
var inst_33063__$1 = (state_33098[(2)]);
var inst_33064 = (inst_33063__$1 == null);
var state_33098__$1 = (function (){var statearr_33103 = state_33098;
(statearr_33103[(7)] = inst_33063__$1);

return statearr_33103;
})();
if(cljs.core.truth_(inst_33064)){
var statearr_33104_34622 = state_33098__$1;
(statearr_33104_34622[(1)] = (5));

} else {
var statearr_33105_34623 = state_33098__$1;
(statearr_33105_34623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (15))){
var inst_33076 = (state_33098[(8)]);
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33098__$1,(18),to,inst_33076);
} else {
if((state_val_33099 === (21))){
var inst_33089 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33106_34624 = state_33098__$1;
(statearr_33106_34624[(2)] = inst_33089);

(statearr_33106_34624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (13))){
var inst_33091 = (state_33098[(2)]);
var state_33098__$1 = (function (){var statearr_33107 = state_33098;
(statearr_33107[(9)] = inst_33091);

return statearr_33107;
})();
var statearr_33108_34625 = state_33098__$1;
(statearr_33108_34625[(2)] = null);

(statearr_33108_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (6))){
var inst_33063 = (state_33098[(7)]);
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33098__$1,(11),inst_33063);
} else {
if((state_val_33099 === (17))){
var inst_33084 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
if(cljs.core.truth_(inst_33084)){
var statearr_33109_34626 = state_33098__$1;
(statearr_33109_34626[(1)] = (19));

} else {
var statearr_33110_34627 = state_33098__$1;
(statearr_33110_34627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (3))){
var inst_33096 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33098__$1,inst_33096);
} else {
if((state_val_33099 === (12))){
var inst_33073 = (state_33098[(10)]);
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33098__$1,(14),inst_33073);
} else {
if((state_val_33099 === (2))){
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33098__$1,(4),results);
} else {
if((state_val_33099 === (19))){
var state_33098__$1 = state_33098;
var statearr_33111_34628 = state_33098__$1;
(statearr_33111_34628[(2)] = null);

(statearr_33111_34628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (11))){
var inst_33073 = (state_33098[(2)]);
var state_33098__$1 = (function (){var statearr_33112 = state_33098;
(statearr_33112[(10)] = inst_33073);

return statearr_33112;
})();
var statearr_33113_34629 = state_33098__$1;
(statearr_33113_34629[(2)] = null);

(statearr_33113_34629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (9))){
var state_33098__$1 = state_33098;
var statearr_33114_34630 = state_33098__$1;
(statearr_33114_34630[(2)] = null);

(statearr_33114_34630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (5))){
var state_33098__$1 = state_33098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33115_34631 = state_33098__$1;
(statearr_33115_34631[(1)] = (8));

} else {
var statearr_33116_34632 = state_33098__$1;
(statearr_33116_34632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (14))){
var inst_33076 = (state_33098[(8)]);
var inst_33076__$1 = (state_33098[(2)]);
var inst_33077 = (inst_33076__$1 == null);
var inst_33078 = cljs.core.not(inst_33077);
var state_33098__$1 = (function (){var statearr_33117 = state_33098;
(statearr_33117[(8)] = inst_33076__$1);

return statearr_33117;
})();
if(inst_33078){
var statearr_33118_34635 = state_33098__$1;
(statearr_33118_34635[(1)] = (15));

} else {
var statearr_33119_34636 = state_33098__$1;
(statearr_33119_34636[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (16))){
var state_33098__$1 = state_33098;
var statearr_33120_34637 = state_33098__$1;
(statearr_33120_34637[(2)] = false);

(statearr_33120_34637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (10))){
var inst_33070 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33121_34638 = state_33098__$1;
(statearr_33121_34638[(2)] = inst_33070);

(statearr_33121_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (18))){
var inst_33081 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33122_34639 = state_33098__$1;
(statearr_33122_34639[(2)] = inst_33081);

(statearr_33122_34639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (8))){
var inst_33067 = cljs.core.async.close_BANG_(to);
var state_33098__$1 = state_33098;
var statearr_33123_34640 = state_33098__$1;
(statearr_33123_34640[(2)] = inst_33067);

(statearr_33123_34640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33124[(1)] = (1));

return statearr_33124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33098){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33098);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33125){if((e33125 instanceof Object)){
var ex__32736__auto__ = e33125;
var statearr_33126_34641 = state_33098;
(statearr_33126_34641[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34642 = state_33098;
state_33098 = G__34642;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33127 = f__32818__auto__();
(statearr_33127[(6)] = c__32817__auto__);

return statearr_33127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));

return c__32817__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33129 = arguments.length;
switch (G__33129) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33131 = arguments.length;
switch (G__33131) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33133 = arguments.length;
switch (G__33133) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32817__auto___34655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (7))){
var inst_33155 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33161_34657 = state_33159__$1;
(statearr_33161_34657[(2)] = inst_33155);

(statearr_33161_34657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (1))){
var state_33159__$1 = state_33159;
var statearr_33162_34662 = state_33159__$1;
(statearr_33162_34662[(2)] = null);

(statearr_33162_34662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (4))){
var inst_33136 = (state_33159[(7)]);
var inst_33136__$1 = (state_33159[(2)]);
var inst_33137 = (inst_33136__$1 == null);
var state_33159__$1 = (function (){var statearr_33163 = state_33159;
(statearr_33163[(7)] = inst_33136__$1);

return statearr_33163;
})();
if(cljs.core.truth_(inst_33137)){
var statearr_33164_34666 = state_33159__$1;
(statearr_33164_34666[(1)] = (5));

} else {
var statearr_33165_34667 = state_33159__$1;
(statearr_33165_34667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (13))){
var state_33159__$1 = state_33159;
var statearr_33166_34668 = state_33159__$1;
(statearr_33166_34668[(2)] = null);

(statearr_33166_34668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (6))){
var inst_33136 = (state_33159[(7)]);
var inst_33142 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33136) : p.call(null,inst_33136));
var state_33159__$1 = state_33159;
if(cljs.core.truth_(inst_33142)){
var statearr_33167_34669 = state_33159__$1;
(statearr_33167_34669[(1)] = (9));

} else {
var statearr_33168_34670 = state_33159__$1;
(statearr_33168_34670[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (3))){
var inst_33157 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33159__$1,inst_33157);
} else {
if((state_val_33160 === (12))){
var state_33159__$1 = state_33159;
var statearr_33169_34671 = state_33159__$1;
(statearr_33169_34671[(2)] = null);

(statearr_33169_34671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (2))){
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33159__$1,(4),ch);
} else {
if((state_val_33160 === (11))){
var inst_33136 = (state_33159[(7)]);
var inst_33146 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33159__$1,(8),inst_33146,inst_33136);
} else {
if((state_val_33160 === (9))){
var state_33159__$1 = state_33159;
var statearr_33170_34673 = state_33159__$1;
(statearr_33170_34673[(2)] = tc);

(statearr_33170_34673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (5))){
var inst_33139 = cljs.core.async.close_BANG_(tc);
var inst_33140 = cljs.core.async.close_BANG_(fc);
var state_33159__$1 = (function (){var statearr_33171 = state_33159;
(statearr_33171[(8)] = inst_33139);

return statearr_33171;
})();
var statearr_33172_34674 = state_33159__$1;
(statearr_33172_34674[(2)] = inst_33140);

(statearr_33172_34674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (14))){
var inst_33153 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33173_34675 = state_33159__$1;
(statearr_33173_34675[(2)] = inst_33153);

(statearr_33173_34675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (10))){
var state_33159__$1 = state_33159;
var statearr_33174_34676 = state_33159__$1;
(statearr_33174_34676[(2)] = fc);

(statearr_33174_34676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (8))){
var inst_33148 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
if(cljs.core.truth_(inst_33148)){
var statearr_33175_34677 = state_33159__$1;
(statearr_33175_34677[(1)] = (12));

} else {
var statearr_33176_34678 = state_33159__$1;
(statearr_33176_34678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33177 = [null,null,null,null,null,null,null,null,null];
(statearr_33177[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33177[(1)] = (1));

return statearr_33177;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33159){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33159);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33178){if((e33178 instanceof Object)){
var ex__32736__auto__ = e33178;
var statearr_33179_34679 = state_33159;
(statearr_33179_34679[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34680 = state_33159;
state_33159 = G__34680;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33180 = f__32818__auto__();
(statearr_33180[(6)] = c__32817__auto___34655);

return statearr_33180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33201){
var state_val_33202 = (state_33201[(1)]);
if((state_val_33202 === (7))){
var inst_33197 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33203_34681 = state_33201__$1;
(statearr_33203_34681[(2)] = inst_33197);

(statearr_33203_34681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (1))){
var inst_33181 = init;
var state_33201__$1 = (function (){var statearr_33204 = state_33201;
(statearr_33204[(7)] = inst_33181);

return statearr_33204;
})();
var statearr_33205_34682 = state_33201__$1;
(statearr_33205_34682[(2)] = null);

(statearr_33205_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (4))){
var inst_33184 = (state_33201[(8)]);
var inst_33184__$1 = (state_33201[(2)]);
var inst_33185 = (inst_33184__$1 == null);
var state_33201__$1 = (function (){var statearr_33206 = state_33201;
(statearr_33206[(8)] = inst_33184__$1);

return statearr_33206;
})();
if(cljs.core.truth_(inst_33185)){
var statearr_33207_34683 = state_33201__$1;
(statearr_33207_34683[(1)] = (5));

} else {
var statearr_33208_34684 = state_33201__$1;
(statearr_33208_34684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (6))){
var inst_33181 = (state_33201[(7)]);
var inst_33188 = (state_33201[(9)]);
var inst_33184 = (state_33201[(8)]);
var inst_33188__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33181,inst_33184) : f.call(null,inst_33181,inst_33184));
var inst_33189 = cljs.core.reduced_QMARK_(inst_33188__$1);
var state_33201__$1 = (function (){var statearr_33209 = state_33201;
(statearr_33209[(9)] = inst_33188__$1);

return statearr_33209;
})();
if(inst_33189){
var statearr_33210_34685 = state_33201__$1;
(statearr_33210_34685[(1)] = (8));

} else {
var statearr_33211_34696 = state_33201__$1;
(statearr_33211_34696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (3))){
var inst_33199 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33201__$1,inst_33199);
} else {
if((state_val_33202 === (2))){
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33201__$1,(4),ch);
} else {
if((state_val_33202 === (9))){
var inst_33188 = (state_33201[(9)]);
var inst_33181 = inst_33188;
var state_33201__$1 = (function (){var statearr_33212 = state_33201;
(statearr_33212[(7)] = inst_33181);

return statearr_33212;
})();
var statearr_33213_34697 = state_33201__$1;
(statearr_33213_34697[(2)] = null);

(statearr_33213_34697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (5))){
var inst_33181 = (state_33201[(7)]);
var state_33201__$1 = state_33201;
var statearr_33214_34698 = state_33201__$1;
(statearr_33214_34698[(2)] = inst_33181);

(statearr_33214_34698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (10))){
var inst_33195 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33215_34699 = state_33201__$1;
(statearr_33215_34699[(2)] = inst_33195);

(statearr_33215_34699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (8))){
var inst_33188 = (state_33201[(9)]);
var inst_33191 = cljs.core.deref(inst_33188);
var state_33201__$1 = state_33201;
var statearr_33216_34700 = state_33201__$1;
(statearr_33216_34700[(2)] = inst_33191);

(statearr_33216_34700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32733__auto____0 = (function (){
var statearr_33217 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33217[(0)] = cljs$core$async$reduce_$_state_machine__32733__auto__);

(statearr_33217[(1)] = (1));

return statearr_33217;
});
var cljs$core$async$reduce_$_state_machine__32733__auto____1 = (function (state_33201){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33201);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33218){if((e33218 instanceof Object)){
var ex__32736__auto__ = e33218;
var statearr_33219_34701 = state_33201;
(statearr_33219_34701[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34702 = state_33201;
state_33201 = G__34702;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32733__auto__ = function(state_33201){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32733__auto____1.call(this,state_33201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32733__auto____0;
cljs$core$async$reduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32733__auto____1;
return cljs$core$async$reduce_$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33220 = f__32818__auto__();
(statearr_33220[(6)] = c__32817__auto__);

return statearr_33220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));

return c__32817__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33226){
var state_val_33227 = (state_33226[(1)]);
if((state_val_33227 === (1))){
var inst_33221 = cljs.core.async.reduce(f__$1,init,ch);
var state_33226__$1 = state_33226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33226__$1,(2),inst_33221);
} else {
if((state_val_33227 === (2))){
var inst_33223 = (state_33226[(2)]);
var inst_33224 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33223) : f__$1.call(null,inst_33223));
var state_33226__$1 = state_33226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33226__$1,inst_33224);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32733__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32733__auto____0 = (function (){
var statearr_33228 = [null,null,null,null,null,null,null];
(statearr_33228[(0)] = cljs$core$async$transduce_$_state_machine__32733__auto__);

(statearr_33228[(1)] = (1));

return statearr_33228;
});
var cljs$core$async$transduce_$_state_machine__32733__auto____1 = (function (state_33226){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33226);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33229){if((e33229 instanceof Object)){
var ex__32736__auto__ = e33229;
var statearr_33230_34703 = state_33226;
(statearr_33230_34703[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34704 = state_33226;
state_33226 = G__34704;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32733__auto__ = function(state_33226){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32733__auto____1.call(this,state_33226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32733__auto____0;
cljs$core$async$transduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32733__auto____1;
return cljs$core$async$transduce_$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33231 = f__32818__auto__();
(statearr_33231[(6)] = c__32817__auto__);

return statearr_33231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));

return c__32817__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33233 = arguments.length;
switch (G__33233) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33258){
var state_val_33259 = (state_33258[(1)]);
if((state_val_33259 === (7))){
var inst_33240 = (state_33258[(2)]);
var state_33258__$1 = state_33258;
var statearr_33260_34706 = state_33258__$1;
(statearr_33260_34706[(2)] = inst_33240);

(statearr_33260_34706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (1))){
var inst_33234 = cljs.core.seq(coll);
var inst_33235 = inst_33234;
var state_33258__$1 = (function (){var statearr_33261 = state_33258;
(statearr_33261[(7)] = inst_33235);

return statearr_33261;
})();
var statearr_33262_34707 = state_33258__$1;
(statearr_33262_34707[(2)] = null);

(statearr_33262_34707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (4))){
var inst_33235 = (state_33258[(7)]);
var inst_33238 = cljs.core.first(inst_33235);
var state_33258__$1 = state_33258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33258__$1,(7),ch,inst_33238);
} else {
if((state_val_33259 === (13))){
var inst_33252 = (state_33258[(2)]);
var state_33258__$1 = state_33258;
var statearr_33263_34708 = state_33258__$1;
(statearr_33263_34708[(2)] = inst_33252);

(statearr_33263_34708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (6))){
var inst_33243 = (state_33258[(2)]);
var state_33258__$1 = state_33258;
if(cljs.core.truth_(inst_33243)){
var statearr_33264_34709 = state_33258__$1;
(statearr_33264_34709[(1)] = (8));

} else {
var statearr_33265_34710 = state_33258__$1;
(statearr_33265_34710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (3))){
var inst_33256 = (state_33258[(2)]);
var state_33258__$1 = state_33258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33258__$1,inst_33256);
} else {
if((state_val_33259 === (12))){
var state_33258__$1 = state_33258;
var statearr_33266_34711 = state_33258__$1;
(statearr_33266_34711[(2)] = null);

(statearr_33266_34711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (2))){
var inst_33235 = (state_33258[(7)]);
var state_33258__$1 = state_33258;
if(cljs.core.truth_(inst_33235)){
var statearr_33267_34712 = state_33258__$1;
(statearr_33267_34712[(1)] = (4));

} else {
var statearr_33268_34713 = state_33258__$1;
(statearr_33268_34713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (11))){
var inst_33249 = cljs.core.async.close_BANG_(ch);
var state_33258__$1 = state_33258;
var statearr_33269_34714 = state_33258__$1;
(statearr_33269_34714[(2)] = inst_33249);

(statearr_33269_34714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (9))){
var state_33258__$1 = state_33258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33270_34715 = state_33258__$1;
(statearr_33270_34715[(1)] = (11));

} else {
var statearr_33271_34716 = state_33258__$1;
(statearr_33271_34716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (5))){
var inst_33235 = (state_33258[(7)]);
var state_33258__$1 = state_33258;
var statearr_33272_34717 = state_33258__$1;
(statearr_33272_34717[(2)] = inst_33235);

(statearr_33272_34717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (10))){
var inst_33254 = (state_33258[(2)]);
var state_33258__$1 = state_33258;
var statearr_33273_34718 = state_33258__$1;
(statearr_33273_34718[(2)] = inst_33254);

(statearr_33273_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33259 === (8))){
var inst_33235 = (state_33258[(7)]);
var inst_33245 = cljs.core.next(inst_33235);
var inst_33235__$1 = inst_33245;
var state_33258__$1 = (function (){var statearr_33274 = state_33258;
(statearr_33274[(7)] = inst_33235__$1);

return statearr_33274;
})();
var statearr_33275_34719 = state_33258__$1;
(statearr_33275_34719[(2)] = null);

(statearr_33275_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33276 = [null,null,null,null,null,null,null,null];
(statearr_33276[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33276[(1)] = (1));

return statearr_33276;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33258){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33258);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33277){if((e33277 instanceof Object)){
var ex__32736__auto__ = e33277;
var statearr_33278_34720 = state_33258;
(statearr_33278_34720[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34721 = state_33258;
state_33258 = G__34721;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33279 = f__32818__auto__();
(statearr_33279[(6)] = c__32817__auto__);

return statearr_33279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));

return c__32817__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33280 = (function (ch,cs,meta33281){
this.ch = ch;
this.cs = cs;
this.meta33281 = meta33281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33282,meta33281__$1){
var self__ = this;
var _33282__$1 = this;
return (new cljs.core.async.t_cljs$core$async33280(self__.ch,self__.cs,meta33281__$1));
}));

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33282){
var self__ = this;
var _33282__$1 = this;
return self__.meta33281;
}));

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33281","meta33281",-1039130762,null)], null);
}));

(cljs.core.async.t_cljs$core$async33280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33280");

(cljs.core.async.t_cljs$core$async33280.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33280.
 */
cljs.core.async.__GT_t_cljs$core$async33280 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33280(ch__$1,cs__$1,meta33281){
return (new cljs.core.async.t_cljs$core$async33280(ch__$1,cs__$1,meta33281));
});

}

return (new cljs.core.async.t_cljs$core$async33280(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32817__auto___34725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33415){
var state_val_33416 = (state_33415[(1)]);
if((state_val_33416 === (7))){
var inst_33411 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33417_34727 = state_33415__$1;
(statearr_33417_34727[(2)] = inst_33411);

(statearr_33417_34727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (20))){
var inst_33316 = (state_33415[(7)]);
var inst_33328 = cljs.core.first(inst_33316);
var inst_33329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33328,(0),null);
var inst_33330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33328,(1),null);
var state_33415__$1 = (function (){var statearr_33418 = state_33415;
(statearr_33418[(8)] = inst_33329);

return statearr_33418;
})();
if(cljs.core.truth_(inst_33330)){
var statearr_33419_34728 = state_33415__$1;
(statearr_33419_34728[(1)] = (22));

} else {
var statearr_33420_34729 = state_33415__$1;
(statearr_33420_34729[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (27))){
var inst_33360 = (state_33415[(9)]);
var inst_33358 = (state_33415[(10)]);
var inst_33285 = (state_33415[(11)]);
var inst_33365 = (state_33415[(12)]);
var inst_33365__$1 = cljs.core._nth(inst_33358,inst_33360);
var inst_33366 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33365__$1,inst_33285,done);
var state_33415__$1 = (function (){var statearr_33421 = state_33415;
(statearr_33421[(12)] = inst_33365__$1);

return statearr_33421;
})();
if(cljs.core.truth_(inst_33366)){
var statearr_33422_34730 = state_33415__$1;
(statearr_33422_34730[(1)] = (30));

} else {
var statearr_33423_34731 = state_33415__$1;
(statearr_33423_34731[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (1))){
var state_33415__$1 = state_33415;
var statearr_33424_34732 = state_33415__$1;
(statearr_33424_34732[(2)] = null);

(statearr_33424_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (24))){
var inst_33316 = (state_33415[(7)]);
var inst_33335 = (state_33415[(2)]);
var inst_33336 = cljs.core.next(inst_33316);
var inst_33294 = inst_33336;
var inst_33295 = null;
var inst_33296 = (0);
var inst_33297 = (0);
var state_33415__$1 = (function (){var statearr_33425 = state_33415;
(statearr_33425[(13)] = inst_33335);

(statearr_33425[(14)] = inst_33295);

(statearr_33425[(15)] = inst_33297);

(statearr_33425[(16)] = inst_33296);

(statearr_33425[(17)] = inst_33294);

return statearr_33425;
})();
var statearr_33426_34733 = state_33415__$1;
(statearr_33426_34733[(2)] = null);

(statearr_33426_34733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (39))){
var state_33415__$1 = state_33415;
var statearr_33430_34734 = state_33415__$1;
(statearr_33430_34734[(2)] = null);

(statearr_33430_34734[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (4))){
var inst_33285 = (state_33415[(11)]);
var inst_33285__$1 = (state_33415[(2)]);
var inst_33286 = (inst_33285__$1 == null);
var state_33415__$1 = (function (){var statearr_33431 = state_33415;
(statearr_33431[(11)] = inst_33285__$1);

return statearr_33431;
})();
if(cljs.core.truth_(inst_33286)){
var statearr_33432_34735 = state_33415__$1;
(statearr_33432_34735[(1)] = (5));

} else {
var statearr_33433_34736 = state_33415__$1;
(statearr_33433_34736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (15))){
var inst_33295 = (state_33415[(14)]);
var inst_33297 = (state_33415[(15)]);
var inst_33296 = (state_33415[(16)]);
var inst_33294 = (state_33415[(17)]);
var inst_33312 = (state_33415[(2)]);
var inst_33313 = (inst_33297 + (1));
var tmp33427 = inst_33295;
var tmp33428 = inst_33296;
var tmp33429 = inst_33294;
var inst_33294__$1 = tmp33429;
var inst_33295__$1 = tmp33427;
var inst_33296__$1 = tmp33428;
var inst_33297__$1 = inst_33313;
var state_33415__$1 = (function (){var statearr_33434 = state_33415;
(statearr_33434[(14)] = inst_33295__$1);

(statearr_33434[(18)] = inst_33312);

(statearr_33434[(15)] = inst_33297__$1);

(statearr_33434[(16)] = inst_33296__$1);

(statearr_33434[(17)] = inst_33294__$1);

return statearr_33434;
})();
var statearr_33435_34737 = state_33415__$1;
(statearr_33435_34737[(2)] = null);

(statearr_33435_34737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (21))){
var inst_33339 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33439_34738 = state_33415__$1;
(statearr_33439_34738[(2)] = inst_33339);

(statearr_33439_34738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (31))){
var inst_33365 = (state_33415[(12)]);
var inst_33369 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33365);
var state_33415__$1 = state_33415;
var statearr_33440_34739 = state_33415__$1;
(statearr_33440_34739[(2)] = inst_33369);

(statearr_33440_34739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (32))){
var inst_33360 = (state_33415[(9)]);
var inst_33359 = (state_33415[(19)]);
var inst_33358 = (state_33415[(10)]);
var inst_33357 = (state_33415[(20)]);
var inst_33371 = (state_33415[(2)]);
var inst_33372 = (inst_33360 + (1));
var tmp33436 = inst_33359;
var tmp33437 = inst_33358;
var tmp33438 = inst_33357;
var inst_33357__$1 = tmp33438;
var inst_33358__$1 = tmp33437;
var inst_33359__$1 = tmp33436;
var inst_33360__$1 = inst_33372;
var state_33415__$1 = (function (){var statearr_33441 = state_33415;
(statearr_33441[(21)] = inst_33371);

(statearr_33441[(9)] = inst_33360__$1);

(statearr_33441[(19)] = inst_33359__$1);

(statearr_33441[(10)] = inst_33358__$1);

(statearr_33441[(20)] = inst_33357__$1);

return statearr_33441;
})();
var statearr_33442_34740 = state_33415__$1;
(statearr_33442_34740[(2)] = null);

(statearr_33442_34740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (40))){
var inst_33384 = (state_33415[(22)]);
var inst_33388 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33384);
var state_33415__$1 = state_33415;
var statearr_33443_34741 = state_33415__$1;
(statearr_33443_34741[(2)] = inst_33388);

(statearr_33443_34741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (33))){
var inst_33375 = (state_33415[(23)]);
var inst_33377 = cljs.core.chunked_seq_QMARK_(inst_33375);
var state_33415__$1 = state_33415;
if(inst_33377){
var statearr_33444_34742 = state_33415__$1;
(statearr_33444_34742[(1)] = (36));

} else {
var statearr_33445_34743 = state_33415__$1;
(statearr_33445_34743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (13))){
var inst_33306 = (state_33415[(24)]);
var inst_33309 = cljs.core.async.close_BANG_(inst_33306);
var state_33415__$1 = state_33415;
var statearr_33446_34744 = state_33415__$1;
(statearr_33446_34744[(2)] = inst_33309);

(statearr_33446_34744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (22))){
var inst_33329 = (state_33415[(8)]);
var inst_33332 = cljs.core.async.close_BANG_(inst_33329);
var state_33415__$1 = state_33415;
var statearr_33447_34745 = state_33415__$1;
(statearr_33447_34745[(2)] = inst_33332);

(statearr_33447_34745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (36))){
var inst_33375 = (state_33415[(23)]);
var inst_33379 = cljs.core.chunk_first(inst_33375);
var inst_33380 = cljs.core.chunk_rest(inst_33375);
var inst_33381 = cljs.core.count(inst_33379);
var inst_33357 = inst_33380;
var inst_33358 = inst_33379;
var inst_33359 = inst_33381;
var inst_33360 = (0);
var state_33415__$1 = (function (){var statearr_33448 = state_33415;
(statearr_33448[(9)] = inst_33360);

(statearr_33448[(19)] = inst_33359);

(statearr_33448[(10)] = inst_33358);

(statearr_33448[(20)] = inst_33357);

return statearr_33448;
})();
var statearr_33449_34746 = state_33415__$1;
(statearr_33449_34746[(2)] = null);

(statearr_33449_34746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (41))){
var inst_33375 = (state_33415[(23)]);
var inst_33390 = (state_33415[(2)]);
var inst_33391 = cljs.core.next(inst_33375);
var inst_33357 = inst_33391;
var inst_33358 = null;
var inst_33359 = (0);
var inst_33360 = (0);
var state_33415__$1 = (function (){var statearr_33450 = state_33415;
(statearr_33450[(9)] = inst_33360);

(statearr_33450[(19)] = inst_33359);

(statearr_33450[(10)] = inst_33358);

(statearr_33450[(20)] = inst_33357);

(statearr_33450[(25)] = inst_33390);

return statearr_33450;
})();
var statearr_33451_34747 = state_33415__$1;
(statearr_33451_34747[(2)] = null);

(statearr_33451_34747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (43))){
var state_33415__$1 = state_33415;
var statearr_33452_34748 = state_33415__$1;
(statearr_33452_34748[(2)] = null);

(statearr_33452_34748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (29))){
var inst_33399 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33453_34749 = state_33415__$1;
(statearr_33453_34749[(2)] = inst_33399);

(statearr_33453_34749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (44))){
var inst_33408 = (state_33415[(2)]);
var state_33415__$1 = (function (){var statearr_33454 = state_33415;
(statearr_33454[(26)] = inst_33408);

return statearr_33454;
})();
var statearr_33455_34776 = state_33415__$1;
(statearr_33455_34776[(2)] = null);

(statearr_33455_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (6))){
var inst_33349 = (state_33415[(27)]);
var inst_33348 = cljs.core.deref(cs);
var inst_33349__$1 = cljs.core.keys(inst_33348);
var inst_33350 = cljs.core.count(inst_33349__$1);
var inst_33351 = cljs.core.reset_BANG_(dctr,inst_33350);
var inst_33356 = cljs.core.seq(inst_33349__$1);
var inst_33357 = inst_33356;
var inst_33358 = null;
var inst_33359 = (0);
var inst_33360 = (0);
var state_33415__$1 = (function (){var statearr_33456 = state_33415;
(statearr_33456[(9)] = inst_33360);

(statearr_33456[(28)] = inst_33351);

(statearr_33456[(19)] = inst_33359);

(statearr_33456[(10)] = inst_33358);

(statearr_33456[(20)] = inst_33357);

(statearr_33456[(27)] = inst_33349__$1);

return statearr_33456;
})();
var statearr_33457_34777 = state_33415__$1;
(statearr_33457_34777[(2)] = null);

(statearr_33457_34777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (28))){
var inst_33375 = (state_33415[(23)]);
var inst_33357 = (state_33415[(20)]);
var inst_33375__$1 = cljs.core.seq(inst_33357);
var state_33415__$1 = (function (){var statearr_33458 = state_33415;
(statearr_33458[(23)] = inst_33375__$1);

return statearr_33458;
})();
if(inst_33375__$1){
var statearr_33459_34781 = state_33415__$1;
(statearr_33459_34781[(1)] = (33));

} else {
var statearr_33460_34782 = state_33415__$1;
(statearr_33460_34782[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (25))){
var inst_33360 = (state_33415[(9)]);
var inst_33359 = (state_33415[(19)]);
var inst_33362 = (inst_33360 < inst_33359);
var inst_33363 = inst_33362;
var state_33415__$1 = state_33415;
if(cljs.core.truth_(inst_33363)){
var statearr_33461_34783 = state_33415__$1;
(statearr_33461_34783[(1)] = (27));

} else {
var statearr_33462_34784 = state_33415__$1;
(statearr_33462_34784[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (34))){
var state_33415__$1 = state_33415;
var statearr_33463_34785 = state_33415__$1;
(statearr_33463_34785[(2)] = null);

(statearr_33463_34785[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (17))){
var state_33415__$1 = state_33415;
var statearr_33464_34787 = state_33415__$1;
(statearr_33464_34787[(2)] = null);

(statearr_33464_34787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (3))){
var inst_33413 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33415__$1,inst_33413);
} else {
if((state_val_33416 === (12))){
var inst_33344 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33465_34788 = state_33415__$1;
(statearr_33465_34788[(2)] = inst_33344);

(statearr_33465_34788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (2))){
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33415__$1,(4),ch);
} else {
if((state_val_33416 === (23))){
var state_33415__$1 = state_33415;
var statearr_33466_34789 = state_33415__$1;
(statearr_33466_34789[(2)] = null);

(statearr_33466_34789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (35))){
var inst_33397 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33467_34799 = state_33415__$1;
(statearr_33467_34799[(2)] = inst_33397);

(statearr_33467_34799[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (19))){
var inst_33316 = (state_33415[(7)]);
var inst_33320 = cljs.core.chunk_first(inst_33316);
var inst_33321 = cljs.core.chunk_rest(inst_33316);
var inst_33322 = cljs.core.count(inst_33320);
var inst_33294 = inst_33321;
var inst_33295 = inst_33320;
var inst_33296 = inst_33322;
var inst_33297 = (0);
var state_33415__$1 = (function (){var statearr_33468 = state_33415;
(statearr_33468[(14)] = inst_33295);

(statearr_33468[(15)] = inst_33297);

(statearr_33468[(16)] = inst_33296);

(statearr_33468[(17)] = inst_33294);

return statearr_33468;
})();
var statearr_33469_34806 = state_33415__$1;
(statearr_33469_34806[(2)] = null);

(statearr_33469_34806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (11))){
var inst_33316 = (state_33415[(7)]);
var inst_33294 = (state_33415[(17)]);
var inst_33316__$1 = cljs.core.seq(inst_33294);
var state_33415__$1 = (function (){var statearr_33470 = state_33415;
(statearr_33470[(7)] = inst_33316__$1);

return statearr_33470;
})();
if(inst_33316__$1){
var statearr_33471_34807 = state_33415__$1;
(statearr_33471_34807[(1)] = (16));

} else {
var statearr_33472_34808 = state_33415__$1;
(statearr_33472_34808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (9))){
var inst_33346 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33473_34809 = state_33415__$1;
(statearr_33473_34809[(2)] = inst_33346);

(statearr_33473_34809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (5))){
var inst_33292 = cljs.core.deref(cs);
var inst_33293 = cljs.core.seq(inst_33292);
var inst_33294 = inst_33293;
var inst_33295 = null;
var inst_33296 = (0);
var inst_33297 = (0);
var state_33415__$1 = (function (){var statearr_33474 = state_33415;
(statearr_33474[(14)] = inst_33295);

(statearr_33474[(15)] = inst_33297);

(statearr_33474[(16)] = inst_33296);

(statearr_33474[(17)] = inst_33294);

return statearr_33474;
})();
var statearr_33475_34810 = state_33415__$1;
(statearr_33475_34810[(2)] = null);

(statearr_33475_34810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (14))){
var state_33415__$1 = state_33415;
var statearr_33476_34811 = state_33415__$1;
(statearr_33476_34811[(2)] = null);

(statearr_33476_34811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (45))){
var inst_33405 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33477_34812 = state_33415__$1;
(statearr_33477_34812[(2)] = inst_33405);

(statearr_33477_34812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (26))){
var inst_33349 = (state_33415[(27)]);
var inst_33401 = (state_33415[(2)]);
var inst_33402 = cljs.core.seq(inst_33349);
var state_33415__$1 = (function (){var statearr_33478 = state_33415;
(statearr_33478[(29)] = inst_33401);

return statearr_33478;
})();
if(inst_33402){
var statearr_33479_34813 = state_33415__$1;
(statearr_33479_34813[(1)] = (42));

} else {
var statearr_33480_34814 = state_33415__$1;
(statearr_33480_34814[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (16))){
var inst_33316 = (state_33415[(7)]);
var inst_33318 = cljs.core.chunked_seq_QMARK_(inst_33316);
var state_33415__$1 = state_33415;
if(inst_33318){
var statearr_33481_34815 = state_33415__$1;
(statearr_33481_34815[(1)] = (19));

} else {
var statearr_33482_34816 = state_33415__$1;
(statearr_33482_34816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (38))){
var inst_33394 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33483_34823 = state_33415__$1;
(statearr_33483_34823[(2)] = inst_33394);

(statearr_33483_34823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (30))){
var state_33415__$1 = state_33415;
var statearr_33484_34824 = state_33415__$1;
(statearr_33484_34824[(2)] = null);

(statearr_33484_34824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (10))){
var inst_33295 = (state_33415[(14)]);
var inst_33297 = (state_33415[(15)]);
var inst_33305 = cljs.core._nth(inst_33295,inst_33297);
var inst_33306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33305,(0),null);
var inst_33307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33305,(1),null);
var state_33415__$1 = (function (){var statearr_33485 = state_33415;
(statearr_33485[(24)] = inst_33306);

return statearr_33485;
})();
if(cljs.core.truth_(inst_33307)){
var statearr_33486_34825 = state_33415__$1;
(statearr_33486_34825[(1)] = (13));

} else {
var statearr_33487_34826 = state_33415__$1;
(statearr_33487_34826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (18))){
var inst_33342 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33488_34827 = state_33415__$1;
(statearr_33488_34827[(2)] = inst_33342);

(statearr_33488_34827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (42))){
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33415__$1,(45),dchan);
} else {
if((state_val_33416 === (37))){
var inst_33375 = (state_33415[(23)]);
var inst_33384 = (state_33415[(22)]);
var inst_33285 = (state_33415[(11)]);
var inst_33384__$1 = cljs.core.first(inst_33375);
var inst_33385 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33384__$1,inst_33285,done);
var state_33415__$1 = (function (){var statearr_33489 = state_33415;
(statearr_33489[(22)] = inst_33384__$1);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33385)){
var statearr_33490_34828 = state_33415__$1;
(statearr_33490_34828[(1)] = (39));

} else {
var statearr_33491_34829 = state_33415__$1;
(statearr_33491_34829[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (8))){
var inst_33297 = (state_33415[(15)]);
var inst_33296 = (state_33415[(16)]);
var inst_33299 = (inst_33297 < inst_33296);
var inst_33300 = inst_33299;
var state_33415__$1 = state_33415;
if(cljs.core.truth_(inst_33300)){
var statearr_33492_34830 = state_33415__$1;
(statearr_33492_34830[(1)] = (10));

} else {
var statearr_33493_34831 = state_33415__$1;
(statearr_33493_34831[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32733__auto__ = null;
var cljs$core$async$mult_$_state_machine__32733__auto____0 = (function (){
var statearr_33494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33494[(0)] = cljs$core$async$mult_$_state_machine__32733__auto__);

(statearr_33494[(1)] = (1));

return statearr_33494;
});
var cljs$core$async$mult_$_state_machine__32733__auto____1 = (function (state_33415){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33415);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33495){if((e33495 instanceof Object)){
var ex__32736__auto__ = e33495;
var statearr_33496_34832 = state_33415;
(statearr_33496_34832[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34833 = state_33415;
state_33415 = G__34833;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32733__auto__ = function(state_33415){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32733__auto____1.call(this,state_33415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32733__auto____0;
cljs$core$async$mult_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32733__auto____1;
return cljs$core$async$mult_$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33497 = f__32818__auto__();
(statearr_33497[(6)] = c__32817__auto___34725);

return statearr_33497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33499 = arguments.length;
switch (G__33499) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34849 = arguments.length;
var i__4790__auto___34850 = (0);
while(true){
if((i__4790__auto___34850 < len__4789__auto___34849)){
args__4795__auto__.push((arguments[i__4790__auto___34850]));

var G__34851 = (i__4790__auto___34850 + (1));
i__4790__auto___34850 = G__34851;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33504){
var map__33505 = p__33504;
var map__33505__$1 = (((((!((map__33505 == null))))?(((((map__33505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33505):map__33505);
var opts = map__33505__$1;
var statearr_33507_34852 = state;
(statearr_33507_34852[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33508_34853 = state;
(statearr_33508_34853[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33509_34854 = state;
(statearr_33509_34854[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33500){
var G__33501 = cljs.core.first(seq33500);
var seq33500__$1 = cljs.core.next(seq33500);
var G__33502 = cljs.core.first(seq33500__$1);
var seq33500__$2 = cljs.core.next(seq33500__$1);
var G__33503 = cljs.core.first(seq33500__$2);
var seq33500__$3 = cljs.core.next(seq33500__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33501,G__33502,G__33503,seq33500__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33510 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33511){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33511 = meta33511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33512,meta33511__$1){
var self__ = this;
var _33512__$1 = this;
return (new cljs.core.async.t_cljs$core$async33510(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33511__$1));
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33512){
var self__ = this;
var _33512__$1 = this;
return self__.meta33511;
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33511","meta33511",196252925,null)], null);
}));

(cljs.core.async.t_cljs$core$async33510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33510");

(cljs.core.async.t_cljs$core$async33510.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33510.
 */
cljs.core.async.__GT_t_cljs$core$async33510 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33510(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33511){
return (new cljs.core.async.t_cljs$core$async33510(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33511));
});

}

return (new cljs.core.async.t_cljs$core$async33510(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32817__auto___34868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33614){
var state_val_33615 = (state_33614[(1)]);
if((state_val_33615 === (7))){
var inst_33529 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33616_34869 = state_33614__$1;
(statearr_33616_34869[(2)] = inst_33529);

(statearr_33616_34869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (20))){
var inst_33541 = (state_33614[(7)]);
var state_33614__$1 = state_33614;
var statearr_33617_34870 = state_33614__$1;
(statearr_33617_34870[(2)] = inst_33541);

(statearr_33617_34870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (27))){
var state_33614__$1 = state_33614;
var statearr_33618_34871 = state_33614__$1;
(statearr_33618_34871[(2)] = null);

(statearr_33618_34871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (1))){
var inst_33516 = (state_33614[(8)]);
var inst_33516__$1 = calc_state();
var inst_33518 = (inst_33516__$1 == null);
var inst_33519 = cljs.core.not(inst_33518);
var state_33614__$1 = (function (){var statearr_33619 = state_33614;
(statearr_33619[(8)] = inst_33516__$1);

return statearr_33619;
})();
if(inst_33519){
var statearr_33620_34872 = state_33614__$1;
(statearr_33620_34872[(1)] = (2));

} else {
var statearr_33621_34873 = state_33614__$1;
(statearr_33621_34873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (24))){
var inst_33588 = (state_33614[(9)]);
var inst_33574 = (state_33614[(10)]);
var inst_33565 = (state_33614[(11)]);
var inst_33588__$1 = (inst_33565.cljs$core$IFn$_invoke$arity$1 ? inst_33565.cljs$core$IFn$_invoke$arity$1(inst_33574) : inst_33565.call(null,inst_33574));
var state_33614__$1 = (function (){var statearr_33622 = state_33614;
(statearr_33622[(9)] = inst_33588__$1);

return statearr_33622;
})();
if(cljs.core.truth_(inst_33588__$1)){
var statearr_33623_34874 = state_33614__$1;
(statearr_33623_34874[(1)] = (29));

} else {
var statearr_33624_34875 = state_33614__$1;
(statearr_33624_34875[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (4))){
var inst_33532 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33532)){
var statearr_33625_34876 = state_33614__$1;
(statearr_33625_34876[(1)] = (8));

} else {
var statearr_33626_34877 = state_33614__$1;
(statearr_33626_34877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (15))){
var inst_33559 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33559)){
var statearr_33627_34878 = state_33614__$1;
(statearr_33627_34878[(1)] = (19));

} else {
var statearr_33628_34879 = state_33614__$1;
(statearr_33628_34879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (21))){
var inst_33564 = (state_33614[(12)]);
var inst_33564__$1 = (state_33614[(2)]);
var inst_33565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33564__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33564__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33564__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33614__$1 = (function (){var statearr_33629 = state_33614;
(statearr_33629[(12)] = inst_33564__$1);

(statearr_33629[(11)] = inst_33565);

(statearr_33629[(13)] = inst_33566);

return statearr_33629;
})();
return cljs.core.async.ioc_alts_BANG_(state_33614__$1,(22),inst_33567);
} else {
if((state_val_33615 === (31))){
var inst_33596 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33596)){
var statearr_33630_34880 = state_33614__$1;
(statearr_33630_34880[(1)] = (32));

} else {
var statearr_33631_34881 = state_33614__$1;
(statearr_33631_34881[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (32))){
var inst_33573 = (state_33614[(14)]);
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33614__$1,(35),out,inst_33573);
} else {
if((state_val_33615 === (33))){
var inst_33564 = (state_33614[(12)]);
var inst_33541 = inst_33564;
var state_33614__$1 = (function (){var statearr_33632 = state_33614;
(statearr_33632[(7)] = inst_33541);

return statearr_33632;
})();
var statearr_33633_34882 = state_33614__$1;
(statearr_33633_34882[(2)] = null);

(statearr_33633_34882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (13))){
var inst_33541 = (state_33614[(7)]);
var inst_33548 = inst_33541.cljs$lang$protocol_mask$partition0$;
var inst_33549 = (inst_33548 & (64));
var inst_33550 = inst_33541.cljs$core$ISeq$;
var inst_33551 = (cljs.core.PROTOCOL_SENTINEL === inst_33550);
var inst_33552 = ((inst_33549) || (inst_33551));
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33552)){
var statearr_33634_34883 = state_33614__$1;
(statearr_33634_34883[(1)] = (16));

} else {
var statearr_33635_34884 = state_33614__$1;
(statearr_33635_34884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (22))){
var inst_33573 = (state_33614[(14)]);
var inst_33574 = (state_33614[(10)]);
var inst_33572 = (state_33614[(2)]);
var inst_33573__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33572,(0),null);
var inst_33574__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33572,(1),null);
var inst_33575 = (inst_33573__$1 == null);
var inst_33576 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33574__$1,change);
var inst_33577 = ((inst_33575) || (inst_33576));
var state_33614__$1 = (function (){var statearr_33636 = state_33614;
(statearr_33636[(14)] = inst_33573__$1);

(statearr_33636[(10)] = inst_33574__$1);

return statearr_33636;
})();
if(cljs.core.truth_(inst_33577)){
var statearr_33637_34885 = state_33614__$1;
(statearr_33637_34885[(1)] = (23));

} else {
var statearr_33638_34886 = state_33614__$1;
(statearr_33638_34886[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (36))){
var inst_33564 = (state_33614[(12)]);
var inst_33541 = inst_33564;
var state_33614__$1 = (function (){var statearr_33639 = state_33614;
(statearr_33639[(7)] = inst_33541);

return statearr_33639;
})();
var statearr_33640_34887 = state_33614__$1;
(statearr_33640_34887[(2)] = null);

(statearr_33640_34887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (29))){
var inst_33588 = (state_33614[(9)]);
var state_33614__$1 = state_33614;
var statearr_33641_34888 = state_33614__$1;
(statearr_33641_34888[(2)] = inst_33588);

(statearr_33641_34888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (6))){
var state_33614__$1 = state_33614;
var statearr_33642_34889 = state_33614__$1;
(statearr_33642_34889[(2)] = false);

(statearr_33642_34889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (28))){
var inst_33584 = (state_33614[(2)]);
var inst_33585 = calc_state();
var inst_33541 = inst_33585;
var state_33614__$1 = (function (){var statearr_33643 = state_33614;
(statearr_33643[(15)] = inst_33584);

(statearr_33643[(7)] = inst_33541);

return statearr_33643;
})();
var statearr_33644_34890 = state_33614__$1;
(statearr_33644_34890[(2)] = null);

(statearr_33644_34890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (25))){
var inst_33610 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33645_34891 = state_33614__$1;
(statearr_33645_34891[(2)] = inst_33610);

(statearr_33645_34891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (34))){
var inst_33608 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33646_34892 = state_33614__$1;
(statearr_33646_34892[(2)] = inst_33608);

(statearr_33646_34892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (17))){
var state_33614__$1 = state_33614;
var statearr_33647_34893 = state_33614__$1;
(statearr_33647_34893[(2)] = false);

(statearr_33647_34893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (3))){
var state_33614__$1 = state_33614;
var statearr_33648_34894 = state_33614__$1;
(statearr_33648_34894[(2)] = false);

(statearr_33648_34894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (12))){
var inst_33612 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33614__$1,inst_33612);
} else {
if((state_val_33615 === (2))){
var inst_33516 = (state_33614[(8)]);
var inst_33521 = inst_33516.cljs$lang$protocol_mask$partition0$;
var inst_33522 = (inst_33521 & (64));
var inst_33523 = inst_33516.cljs$core$ISeq$;
var inst_33524 = (cljs.core.PROTOCOL_SENTINEL === inst_33523);
var inst_33525 = ((inst_33522) || (inst_33524));
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33525)){
var statearr_33649_34895 = state_33614__$1;
(statearr_33649_34895[(1)] = (5));

} else {
var statearr_33650_34896 = state_33614__$1;
(statearr_33650_34896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (23))){
var inst_33573 = (state_33614[(14)]);
var inst_33579 = (inst_33573 == null);
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33579)){
var statearr_33651_34897 = state_33614__$1;
(statearr_33651_34897[(1)] = (26));

} else {
var statearr_33652_34898 = state_33614__$1;
(statearr_33652_34898[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (35))){
var inst_33599 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33599)){
var statearr_33653_34899 = state_33614__$1;
(statearr_33653_34899[(1)] = (36));

} else {
var statearr_33654_34900 = state_33614__$1;
(statearr_33654_34900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (19))){
var inst_33541 = (state_33614[(7)]);
var inst_33561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33541);
var state_33614__$1 = state_33614;
var statearr_33655_34901 = state_33614__$1;
(statearr_33655_34901[(2)] = inst_33561);

(statearr_33655_34901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (11))){
var inst_33541 = (state_33614[(7)]);
var inst_33545 = (inst_33541 == null);
var inst_33546 = cljs.core.not(inst_33545);
var state_33614__$1 = state_33614;
if(inst_33546){
var statearr_33656_34902 = state_33614__$1;
(statearr_33656_34902[(1)] = (13));

} else {
var statearr_33657_34903 = state_33614__$1;
(statearr_33657_34903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (9))){
var inst_33516 = (state_33614[(8)]);
var state_33614__$1 = state_33614;
var statearr_33658_34904 = state_33614__$1;
(statearr_33658_34904[(2)] = inst_33516);

(statearr_33658_34904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (5))){
var state_33614__$1 = state_33614;
var statearr_33659_34905 = state_33614__$1;
(statearr_33659_34905[(2)] = true);

(statearr_33659_34905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (14))){
var state_33614__$1 = state_33614;
var statearr_33660_34906 = state_33614__$1;
(statearr_33660_34906[(2)] = false);

(statearr_33660_34906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (26))){
var inst_33574 = (state_33614[(10)]);
var inst_33581 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33574);
var state_33614__$1 = state_33614;
var statearr_33661_34909 = state_33614__$1;
(statearr_33661_34909[(2)] = inst_33581);

(statearr_33661_34909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (16))){
var state_33614__$1 = state_33614;
var statearr_33662_34910 = state_33614__$1;
(statearr_33662_34910[(2)] = true);

(statearr_33662_34910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (38))){
var inst_33604 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33663_34911 = state_33614__$1;
(statearr_33663_34911[(2)] = inst_33604);

(statearr_33663_34911[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (30))){
var inst_33574 = (state_33614[(10)]);
var inst_33565 = (state_33614[(11)]);
var inst_33566 = (state_33614[(13)]);
var inst_33591 = cljs.core.empty_QMARK_(inst_33565);
var inst_33592 = (inst_33566.cljs$core$IFn$_invoke$arity$1 ? inst_33566.cljs$core$IFn$_invoke$arity$1(inst_33574) : inst_33566.call(null,inst_33574));
var inst_33593 = cljs.core.not(inst_33592);
var inst_33594 = ((inst_33591) && (inst_33593));
var state_33614__$1 = state_33614;
var statearr_33664_34912 = state_33614__$1;
(statearr_33664_34912[(2)] = inst_33594);

(statearr_33664_34912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (10))){
var inst_33516 = (state_33614[(8)]);
var inst_33537 = (state_33614[(2)]);
var inst_33538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33537,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33537,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33537,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33541 = inst_33516;
var state_33614__$1 = (function (){var statearr_33665 = state_33614;
(statearr_33665[(16)] = inst_33539);

(statearr_33665[(17)] = inst_33538);

(statearr_33665[(18)] = inst_33540);

(statearr_33665[(7)] = inst_33541);

return statearr_33665;
})();
var statearr_33666_34913 = state_33614__$1;
(statearr_33666_34913[(2)] = null);

(statearr_33666_34913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (18))){
var inst_33556 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33667_34914 = state_33614__$1;
(statearr_33667_34914[(2)] = inst_33556);

(statearr_33667_34914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (37))){
var state_33614__$1 = state_33614;
var statearr_33668_34915 = state_33614__$1;
(statearr_33668_34915[(2)] = null);

(statearr_33668_34915[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (8))){
var inst_33516 = (state_33614[(8)]);
var inst_33534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33516);
var state_33614__$1 = state_33614;
var statearr_33669_34916 = state_33614__$1;
(statearr_33669_34916[(2)] = inst_33534);

(statearr_33669_34916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32733__auto__ = null;
var cljs$core$async$mix_$_state_machine__32733__auto____0 = (function (){
var statearr_33670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33670[(0)] = cljs$core$async$mix_$_state_machine__32733__auto__);

(statearr_33670[(1)] = (1));

return statearr_33670;
});
var cljs$core$async$mix_$_state_machine__32733__auto____1 = (function (state_33614){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33614);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33671){if((e33671 instanceof Object)){
var ex__32736__auto__ = e33671;
var statearr_33672_34919 = state_33614;
(statearr_33672_34919[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34920 = state_33614;
state_33614 = G__34920;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32733__auto__ = function(state_33614){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32733__auto____1.call(this,state_33614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32733__auto____0;
cljs$core$async$mix_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32733__auto____1;
return cljs$core$async$mix_$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33673 = f__32818__auto__();
(statearr_33673[(6)] = c__32817__auto___34868);

return statearr_33673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33675 = arguments.length;
switch (G__33675) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33676_SHARP_){
if(cljs.core.truth_((p1__33676_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33676_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33676_SHARP_.call(null,topic)))){
return p1__33676_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33676_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33679 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33680){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33680 = meta33680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33681,meta33680__$1){
var self__ = this;
var _33681__$1 = this;
return (new cljs.core.async.t_cljs$core$async33679(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33680__$1));
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33681){
var self__ = this;
var _33681__$1 = this;
return self__.meta33680;
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33680","meta33680",-1267985446,null)], null);
}));

(cljs.core.async.t_cljs$core$async33679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33679");

(cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33679.
 */
cljs.core.async.__GT_t_cljs$core$async33679 = (function cljs$core$async$__GT_t_cljs$core$async33679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33680){
return (new cljs.core.async.t_cljs$core$async33679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33680));
});

}

return (new cljs.core.async.t_cljs$core$async33679(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32817__auto___34938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (7))){
var inst_33749 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33755_34939 = state_33753__$1;
(statearr_33755_34939[(2)] = inst_33749);

(statearr_33755_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (20))){
var state_33753__$1 = state_33753;
var statearr_33756_34940 = state_33753__$1;
(statearr_33756_34940[(2)] = null);

(statearr_33756_34940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (1))){
var state_33753__$1 = state_33753;
var statearr_33757_34941 = state_33753__$1;
(statearr_33757_34941[(2)] = null);

(statearr_33757_34941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (24))){
var inst_33732 = (state_33753[(7)]);
var inst_33741 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33732);
var state_33753__$1 = state_33753;
var statearr_33758_34942 = state_33753__$1;
(statearr_33758_34942[(2)] = inst_33741);

(statearr_33758_34942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (4))){
var inst_33684 = (state_33753[(8)]);
var inst_33684__$1 = (state_33753[(2)]);
var inst_33685 = (inst_33684__$1 == null);
var state_33753__$1 = (function (){var statearr_33759 = state_33753;
(statearr_33759[(8)] = inst_33684__$1);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33685)){
var statearr_33760_34943 = state_33753__$1;
(statearr_33760_34943[(1)] = (5));

} else {
var statearr_33761_34948 = state_33753__$1;
(statearr_33761_34948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (15))){
var inst_33726 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33762_35040 = state_33753__$1;
(statearr_33762_35040[(2)] = inst_33726);

(statearr_33762_35040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (21))){
var inst_33746 = (state_33753[(2)]);
var state_33753__$1 = (function (){var statearr_33763 = state_33753;
(statearr_33763[(9)] = inst_33746);

return statearr_33763;
})();
var statearr_33764_35041 = state_33753__$1;
(statearr_33764_35041[(2)] = null);

(statearr_33764_35041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (13))){
var inst_33708 = (state_33753[(10)]);
var inst_33710 = cljs.core.chunked_seq_QMARK_(inst_33708);
var state_33753__$1 = state_33753;
if(inst_33710){
var statearr_33765_35042 = state_33753__$1;
(statearr_33765_35042[(1)] = (16));

} else {
var statearr_33766_35043 = state_33753__$1;
(statearr_33766_35043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (22))){
var inst_33738 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
if(cljs.core.truth_(inst_33738)){
var statearr_33767_35045 = state_33753__$1;
(statearr_33767_35045[(1)] = (23));

} else {
var statearr_33768_35046 = state_33753__$1;
(statearr_33768_35046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (6))){
var inst_33734 = (state_33753[(11)]);
var inst_33732 = (state_33753[(7)]);
var inst_33684 = (state_33753[(8)]);
var inst_33732__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33684) : topic_fn.call(null,inst_33684));
var inst_33733 = cljs.core.deref(mults);
var inst_33734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33733,inst_33732__$1);
var state_33753__$1 = (function (){var statearr_33769 = state_33753;
(statearr_33769[(11)] = inst_33734__$1);

(statearr_33769[(7)] = inst_33732__$1);

return statearr_33769;
})();
if(cljs.core.truth_(inst_33734__$1)){
var statearr_33770_35047 = state_33753__$1;
(statearr_33770_35047[(1)] = (19));

} else {
var statearr_33771_35048 = state_33753__$1;
(statearr_33771_35048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (25))){
var inst_33743 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33772_35053 = state_33753__$1;
(statearr_33772_35053[(2)] = inst_33743);

(statearr_33772_35053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (17))){
var inst_33708 = (state_33753[(10)]);
var inst_33717 = cljs.core.first(inst_33708);
var inst_33718 = cljs.core.async.muxch_STAR_(inst_33717);
var inst_33719 = cljs.core.async.close_BANG_(inst_33718);
var inst_33720 = cljs.core.next(inst_33708);
var inst_33694 = inst_33720;
var inst_33695 = null;
var inst_33696 = (0);
var inst_33697 = (0);
var state_33753__$1 = (function (){var statearr_33773 = state_33753;
(statearr_33773[(12)] = inst_33719);

(statearr_33773[(13)] = inst_33695);

(statearr_33773[(14)] = inst_33696);

(statearr_33773[(15)] = inst_33697);

(statearr_33773[(16)] = inst_33694);

return statearr_33773;
})();
var statearr_33774_35055 = state_33753__$1;
(statearr_33774_35055[(2)] = null);

(statearr_33774_35055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (3))){
var inst_33751 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33753__$1,inst_33751);
} else {
if((state_val_33754 === (12))){
var inst_33728 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33775_35057 = state_33753__$1;
(statearr_33775_35057[(2)] = inst_33728);

(statearr_33775_35057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (2))){
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33753__$1,(4),ch);
} else {
if((state_val_33754 === (23))){
var state_33753__$1 = state_33753;
var statearr_33776_35059 = state_33753__$1;
(statearr_33776_35059[(2)] = null);

(statearr_33776_35059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (19))){
var inst_33734 = (state_33753[(11)]);
var inst_33684 = (state_33753[(8)]);
var inst_33736 = cljs.core.async.muxch_STAR_(inst_33734);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33753__$1,(22),inst_33736,inst_33684);
} else {
if((state_val_33754 === (11))){
var inst_33708 = (state_33753[(10)]);
var inst_33694 = (state_33753[(16)]);
var inst_33708__$1 = cljs.core.seq(inst_33694);
var state_33753__$1 = (function (){var statearr_33777 = state_33753;
(statearr_33777[(10)] = inst_33708__$1);

return statearr_33777;
})();
if(inst_33708__$1){
var statearr_33778_35064 = state_33753__$1;
(statearr_33778_35064[(1)] = (13));

} else {
var statearr_33779_35065 = state_33753__$1;
(statearr_33779_35065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (9))){
var inst_33730 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33780_35066 = state_33753__$1;
(statearr_33780_35066[(2)] = inst_33730);

(statearr_33780_35066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (5))){
var inst_33691 = cljs.core.deref(mults);
var inst_33692 = cljs.core.vals(inst_33691);
var inst_33693 = cljs.core.seq(inst_33692);
var inst_33694 = inst_33693;
var inst_33695 = null;
var inst_33696 = (0);
var inst_33697 = (0);
var state_33753__$1 = (function (){var statearr_33781 = state_33753;
(statearr_33781[(13)] = inst_33695);

(statearr_33781[(14)] = inst_33696);

(statearr_33781[(15)] = inst_33697);

(statearr_33781[(16)] = inst_33694);

return statearr_33781;
})();
var statearr_33782_35067 = state_33753__$1;
(statearr_33782_35067[(2)] = null);

(statearr_33782_35067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (14))){
var state_33753__$1 = state_33753;
var statearr_33786_35068 = state_33753__$1;
(statearr_33786_35068[(2)] = null);

(statearr_33786_35068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (16))){
var inst_33708 = (state_33753[(10)]);
var inst_33712 = cljs.core.chunk_first(inst_33708);
var inst_33713 = cljs.core.chunk_rest(inst_33708);
var inst_33714 = cljs.core.count(inst_33712);
var inst_33694 = inst_33713;
var inst_33695 = inst_33712;
var inst_33696 = inst_33714;
var inst_33697 = (0);
var state_33753__$1 = (function (){var statearr_33787 = state_33753;
(statearr_33787[(13)] = inst_33695);

(statearr_33787[(14)] = inst_33696);

(statearr_33787[(15)] = inst_33697);

(statearr_33787[(16)] = inst_33694);

return statearr_33787;
})();
var statearr_33788_35069 = state_33753__$1;
(statearr_33788_35069[(2)] = null);

(statearr_33788_35069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (10))){
var inst_33695 = (state_33753[(13)]);
var inst_33696 = (state_33753[(14)]);
var inst_33697 = (state_33753[(15)]);
var inst_33694 = (state_33753[(16)]);
var inst_33702 = cljs.core._nth(inst_33695,inst_33697);
var inst_33703 = cljs.core.async.muxch_STAR_(inst_33702);
var inst_33704 = cljs.core.async.close_BANG_(inst_33703);
var inst_33705 = (inst_33697 + (1));
var tmp33783 = inst_33695;
var tmp33784 = inst_33696;
var tmp33785 = inst_33694;
var inst_33694__$1 = tmp33785;
var inst_33695__$1 = tmp33783;
var inst_33696__$1 = tmp33784;
var inst_33697__$1 = inst_33705;
var state_33753__$1 = (function (){var statearr_33789 = state_33753;
(statearr_33789[(17)] = inst_33704);

(statearr_33789[(13)] = inst_33695__$1);

(statearr_33789[(14)] = inst_33696__$1);

(statearr_33789[(15)] = inst_33697__$1);

(statearr_33789[(16)] = inst_33694__$1);

return statearr_33789;
})();
var statearr_33790_35073 = state_33753__$1;
(statearr_33790_35073[(2)] = null);

(statearr_33790_35073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (18))){
var inst_33723 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33791_35075 = state_33753__$1;
(statearr_33791_35075[(2)] = inst_33723);

(statearr_33791_35075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (8))){
var inst_33696 = (state_33753[(14)]);
var inst_33697 = (state_33753[(15)]);
var inst_33699 = (inst_33697 < inst_33696);
var inst_33700 = inst_33699;
var state_33753__$1 = state_33753;
if(cljs.core.truth_(inst_33700)){
var statearr_33792_35076 = state_33753__$1;
(statearr_33792_35076[(1)] = (10));

} else {
var statearr_33793_35077 = state_33753__$1;
(statearr_33793_35077[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33794[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33794[(1)] = (1));

return statearr_33794;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33753){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33753);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33795){if((e33795 instanceof Object)){
var ex__32736__auto__ = e33795;
var statearr_33796_35079 = state_33753;
(statearr_33796_35079[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35080 = state_33753;
state_33753 = G__35080;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33797 = f__32818__auto__();
(statearr_33797[(6)] = c__32817__auto___34938);

return statearr_33797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33799 = arguments.length;
switch (G__33799) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33801 = arguments.length;
switch (G__33801) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33803 = arguments.length;
switch (G__33803) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32817__auto___35145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33842){
var state_val_33843 = (state_33842[(1)]);
if((state_val_33843 === (7))){
var state_33842__$1 = state_33842;
var statearr_33844_35153 = state_33842__$1;
(statearr_33844_35153[(2)] = null);

(statearr_33844_35153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (1))){
var state_33842__$1 = state_33842;
var statearr_33845_35154 = state_33842__$1;
(statearr_33845_35154[(2)] = null);

(statearr_33845_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (4))){
var inst_33806 = (state_33842[(7)]);
var inst_33808 = (inst_33806 < cnt);
var state_33842__$1 = state_33842;
if(cljs.core.truth_(inst_33808)){
var statearr_33846_35155 = state_33842__$1;
(statearr_33846_35155[(1)] = (6));

} else {
var statearr_33847_35200 = state_33842__$1;
(statearr_33847_35200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (15))){
var inst_33838 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
var statearr_33848_35201 = state_33842__$1;
(statearr_33848_35201[(2)] = inst_33838);

(statearr_33848_35201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (13))){
var inst_33831 = cljs.core.async.close_BANG_(out);
var state_33842__$1 = state_33842;
var statearr_33849_35203 = state_33842__$1;
(statearr_33849_35203[(2)] = inst_33831);

(statearr_33849_35203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (6))){
var state_33842__$1 = state_33842;
var statearr_33850_35211 = state_33842__$1;
(statearr_33850_35211[(2)] = null);

(statearr_33850_35211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (3))){
var inst_33840 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33842__$1,inst_33840);
} else {
if((state_val_33843 === (12))){
var inst_33828 = (state_33842[(8)]);
var inst_33828__$1 = (state_33842[(2)]);
var inst_33829 = cljs.core.some(cljs.core.nil_QMARK_,inst_33828__$1);
var state_33842__$1 = (function (){var statearr_33851 = state_33842;
(statearr_33851[(8)] = inst_33828__$1);

return statearr_33851;
})();
if(cljs.core.truth_(inst_33829)){
var statearr_33852_35219 = state_33842__$1;
(statearr_33852_35219[(1)] = (13));

} else {
var statearr_33853_35220 = state_33842__$1;
(statearr_33853_35220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (2))){
var inst_33805 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33806 = (0);
var state_33842__$1 = (function (){var statearr_33854 = state_33842;
(statearr_33854[(7)] = inst_33806);

(statearr_33854[(9)] = inst_33805);

return statearr_33854;
})();
var statearr_33855_35221 = state_33842__$1;
(statearr_33855_35221[(2)] = null);

(statearr_33855_35221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (11))){
var inst_33806 = (state_33842[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33842,(10),Object,null,(9));
var inst_33815 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33806) : chs__$1.call(null,inst_33806));
var inst_33816 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33806) : done.call(null,inst_33806));
var inst_33817 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33815,inst_33816);
var state_33842__$1 = state_33842;
var statearr_33856_35229 = state_33842__$1;
(statearr_33856_35229[(2)] = inst_33817);


cljs.core.async.impl.ioc_helpers.process_exception(state_33842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (9))){
var inst_33806 = (state_33842[(7)]);
var inst_33819 = (state_33842[(2)]);
var inst_33820 = (inst_33806 + (1));
var inst_33806__$1 = inst_33820;
var state_33842__$1 = (function (){var statearr_33857 = state_33842;
(statearr_33857[(7)] = inst_33806__$1);

(statearr_33857[(10)] = inst_33819);

return statearr_33857;
})();
var statearr_33858_35240 = state_33842__$1;
(statearr_33858_35240[(2)] = null);

(statearr_33858_35240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (5))){
var inst_33826 = (state_33842[(2)]);
var state_33842__$1 = (function (){var statearr_33859 = state_33842;
(statearr_33859[(11)] = inst_33826);

return statearr_33859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33842__$1,(12),dchan);
} else {
if((state_val_33843 === (14))){
var inst_33828 = (state_33842[(8)]);
var inst_33833 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33828);
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33842__$1,(16),out,inst_33833);
} else {
if((state_val_33843 === (16))){
var inst_33835 = (state_33842[(2)]);
var state_33842__$1 = (function (){var statearr_33860 = state_33842;
(statearr_33860[(12)] = inst_33835);

return statearr_33860;
})();
var statearr_33861_35266 = state_33842__$1;
(statearr_33861_35266[(2)] = null);

(statearr_33861_35266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (10))){
var inst_33810 = (state_33842[(2)]);
var inst_33811 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33842__$1 = (function (){var statearr_33862 = state_33842;
(statearr_33862[(13)] = inst_33810);

return statearr_33862;
})();
var statearr_33863_35268 = state_33842__$1;
(statearr_33863_35268[(2)] = inst_33811);


cljs.core.async.impl.ioc_helpers.process_exception(state_33842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (8))){
var inst_33824 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
var statearr_33864_35269 = state_33842__$1;
(statearr_33864_35269[(2)] = inst_33824);

(statearr_33864_35269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33865[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33865[(1)] = (1));

return statearr_33865;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33842){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33842);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33866){if((e33866 instanceof Object)){
var ex__32736__auto__ = e33866;
var statearr_33867_35270 = state_33842;
(statearr_33867_35270[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35271 = state_33842;
state_33842 = G__35271;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33868 = f__32818__auto__();
(statearr_33868[(6)] = c__32817__auto___35145);

return statearr_33868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33871 = arguments.length;
switch (G__33871) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32817__auto___35277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33903){
var state_val_33904 = (state_33903[(1)]);
if((state_val_33904 === (7))){
var inst_33883 = (state_33903[(7)]);
var inst_33882 = (state_33903[(8)]);
var inst_33882__$1 = (state_33903[(2)]);
var inst_33883__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33882__$1,(0),null);
var inst_33884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33882__$1,(1),null);
var inst_33885 = (inst_33883__$1 == null);
var state_33903__$1 = (function (){var statearr_33905 = state_33903;
(statearr_33905[(7)] = inst_33883__$1);

(statearr_33905[(8)] = inst_33882__$1);

(statearr_33905[(9)] = inst_33884);

return statearr_33905;
})();
if(cljs.core.truth_(inst_33885)){
var statearr_33906_35278 = state_33903__$1;
(statearr_33906_35278[(1)] = (8));

} else {
var statearr_33907_35279 = state_33903__$1;
(statearr_33907_35279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (1))){
var inst_33872 = cljs.core.vec(chs);
var inst_33873 = inst_33872;
var state_33903__$1 = (function (){var statearr_33908 = state_33903;
(statearr_33908[(10)] = inst_33873);

return statearr_33908;
})();
var statearr_33909_35299 = state_33903__$1;
(statearr_33909_35299[(2)] = null);

(statearr_33909_35299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (4))){
var inst_33873 = (state_33903[(10)]);
var state_33903__$1 = state_33903;
return cljs.core.async.ioc_alts_BANG_(state_33903__$1,(7),inst_33873);
} else {
if((state_val_33904 === (6))){
var inst_33899 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33910_35300 = state_33903__$1;
(statearr_33910_35300[(2)] = inst_33899);

(statearr_33910_35300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (3))){
var inst_33901 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33903__$1,inst_33901);
} else {
if((state_val_33904 === (2))){
var inst_33873 = (state_33903[(10)]);
var inst_33875 = cljs.core.count(inst_33873);
var inst_33876 = (inst_33875 > (0));
var state_33903__$1 = state_33903;
if(cljs.core.truth_(inst_33876)){
var statearr_33912_35304 = state_33903__$1;
(statearr_33912_35304[(1)] = (4));

} else {
var statearr_33913_35305 = state_33903__$1;
(statearr_33913_35305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (11))){
var inst_33873 = (state_33903[(10)]);
var inst_33892 = (state_33903[(2)]);
var tmp33911 = inst_33873;
var inst_33873__$1 = tmp33911;
var state_33903__$1 = (function (){var statearr_33914 = state_33903;
(statearr_33914[(11)] = inst_33892);

(statearr_33914[(10)] = inst_33873__$1);

return statearr_33914;
})();
var statearr_33915_35310 = state_33903__$1;
(statearr_33915_35310[(2)] = null);

(statearr_33915_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (9))){
var inst_33883 = (state_33903[(7)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33903__$1,(11),out,inst_33883);
} else {
if((state_val_33904 === (5))){
var inst_33897 = cljs.core.async.close_BANG_(out);
var state_33903__$1 = state_33903;
var statearr_33916_35311 = state_33903__$1;
(statearr_33916_35311[(2)] = inst_33897);

(statearr_33916_35311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (10))){
var inst_33895 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33917_35312 = state_33903__$1;
(statearr_33917_35312[(2)] = inst_33895);

(statearr_33917_35312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (8))){
var inst_33883 = (state_33903[(7)]);
var inst_33882 = (state_33903[(8)]);
var inst_33873 = (state_33903[(10)]);
var inst_33884 = (state_33903[(9)]);
var inst_33887 = (function (){var cs = inst_33873;
var vec__33878 = inst_33882;
var v = inst_33883;
var c = inst_33884;
return (function (p1__33869_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33869_SHARP_);
});
})();
var inst_33888 = cljs.core.filterv(inst_33887,inst_33873);
var inst_33873__$1 = inst_33888;
var state_33903__$1 = (function (){var statearr_33918 = state_33903;
(statearr_33918[(10)] = inst_33873__$1);

return statearr_33918;
})();
var statearr_33919_35314 = state_33903__$1;
(statearr_33919_35314[(2)] = null);

(statearr_33919_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33920[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33920[(1)] = (1));

return statearr_33920;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33903){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33903);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33921){if((e33921 instanceof Object)){
var ex__32736__auto__ = e33921;
var statearr_33922_35316 = state_33903;
(statearr_33922_35316[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_33903;
state_33903 = G__35317;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33923 = f__32818__auto__();
(statearr_33923[(6)] = c__32817__auto___35277);

return statearr_33923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33925 = arguments.length;
switch (G__33925) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32817__auto___35319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_33949){
var state_val_33950 = (state_33949[(1)]);
if((state_val_33950 === (7))){
var inst_33931 = (state_33949[(7)]);
var inst_33931__$1 = (state_33949[(2)]);
var inst_33932 = (inst_33931__$1 == null);
var inst_33933 = cljs.core.not(inst_33932);
var state_33949__$1 = (function (){var statearr_33951 = state_33949;
(statearr_33951[(7)] = inst_33931__$1);

return statearr_33951;
})();
if(inst_33933){
var statearr_33952_35320 = state_33949__$1;
(statearr_33952_35320[(1)] = (8));

} else {
var statearr_33953_35321 = state_33949__$1;
(statearr_33953_35321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (1))){
var inst_33926 = (0);
var state_33949__$1 = (function (){var statearr_33954 = state_33949;
(statearr_33954[(8)] = inst_33926);

return statearr_33954;
})();
var statearr_33955_35322 = state_33949__$1;
(statearr_33955_35322[(2)] = null);

(statearr_33955_35322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (4))){
var state_33949__$1 = state_33949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33949__$1,(7),ch);
} else {
if((state_val_33950 === (6))){
var inst_33944 = (state_33949[(2)]);
var state_33949__$1 = state_33949;
var statearr_33956_35323 = state_33949__$1;
(statearr_33956_35323[(2)] = inst_33944);

(statearr_33956_35323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (3))){
var inst_33946 = (state_33949[(2)]);
var inst_33947 = cljs.core.async.close_BANG_(out);
var state_33949__$1 = (function (){var statearr_33957 = state_33949;
(statearr_33957[(9)] = inst_33946);

return statearr_33957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33949__$1,inst_33947);
} else {
if((state_val_33950 === (2))){
var inst_33926 = (state_33949[(8)]);
var inst_33928 = (inst_33926 < n);
var state_33949__$1 = state_33949;
if(cljs.core.truth_(inst_33928)){
var statearr_33958_35325 = state_33949__$1;
(statearr_33958_35325[(1)] = (4));

} else {
var statearr_33959_35326 = state_33949__$1;
(statearr_33959_35326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (11))){
var inst_33926 = (state_33949[(8)]);
var inst_33936 = (state_33949[(2)]);
var inst_33937 = (inst_33926 + (1));
var inst_33926__$1 = inst_33937;
var state_33949__$1 = (function (){var statearr_33960 = state_33949;
(statearr_33960[(8)] = inst_33926__$1);

(statearr_33960[(10)] = inst_33936);

return statearr_33960;
})();
var statearr_33961_35327 = state_33949__$1;
(statearr_33961_35327[(2)] = null);

(statearr_33961_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (9))){
var state_33949__$1 = state_33949;
var statearr_33962_35328 = state_33949__$1;
(statearr_33962_35328[(2)] = null);

(statearr_33962_35328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (5))){
var state_33949__$1 = state_33949;
var statearr_33963_35329 = state_33949__$1;
(statearr_33963_35329[(2)] = null);

(statearr_33963_35329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (10))){
var inst_33941 = (state_33949[(2)]);
var state_33949__$1 = state_33949;
var statearr_33964_35330 = state_33949__$1;
(statearr_33964_35330[(2)] = inst_33941);

(statearr_33964_35330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (8))){
var inst_33931 = (state_33949[(7)]);
var state_33949__$1 = state_33949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33949__$1,(11),out,inst_33931);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33965[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33965[(1)] = (1));

return statearr_33965;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33949){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33949);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33966){if((e33966 instanceof Object)){
var ex__32736__auto__ = e33966;
var statearr_33967_35332 = state_33949;
(statearr_33967_35332[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35333 = state_33949;
state_33949 = G__35333;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_33968 = f__32818__auto__();
(statearr_33968[(6)] = c__32817__auto___35319);

return statearr_33968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33970 = (function (f,ch,meta33971){
this.f = f;
this.ch = ch;
this.meta33971 = meta33971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33972,meta33971__$1){
var self__ = this;
var _33972__$1 = this;
return (new cljs.core.async.t_cljs$core$async33970(self__.f,self__.ch,meta33971__$1));
}));

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33972){
var self__ = this;
var _33972__$1 = this;
return self__.meta33971;
}));

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33973 = (function (f,ch,meta33971,_,fn1,meta33974){
this.f = f;
this.ch = ch;
this.meta33971 = meta33971;
this._ = _;
this.fn1 = fn1;
this.meta33974 = meta33974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33975,meta33974__$1){
var self__ = this;
var _33975__$1 = this;
return (new cljs.core.async.t_cljs$core$async33973(self__.f,self__.ch,self__.meta33971,self__._,self__.fn1,meta33974__$1));
}));

(cljs.core.async.t_cljs$core$async33973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33975){
var self__ = this;
var _33975__$1 = this;
return self__.meta33974;
}));

(cljs.core.async.t_cljs$core$async33973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33969_SHARP_){
var G__33976 = (((p1__33969_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33969_SHARP_) : self__.f.call(null,p1__33969_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33976) : f1.call(null,G__33976));
});
}));

(cljs.core.async.t_cljs$core$async33973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33971","meta33971",-1729290500,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33970","cljs.core.async/t_cljs$core$async33970",1832033057,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33974","meta33974",1797508234,null)], null);
}));

(cljs.core.async.t_cljs$core$async33973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33973");

(cljs.core.async.t_cljs$core$async33973.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33973.
 */
cljs.core.async.__GT_t_cljs$core$async33973 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33973(f__$1,ch__$1,meta33971__$1,___$2,fn1__$1,meta33974){
return (new cljs.core.async.t_cljs$core$async33973(f__$1,ch__$1,meta33971__$1,___$2,fn1__$1,meta33974));
});

}

return (new cljs.core.async.t_cljs$core$async33973(self__.f,self__.ch,self__.meta33971,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33977 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33977) : self__.f.call(null,G__33977));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33971","meta33971",-1729290500,null)], null);
}));

(cljs.core.async.t_cljs$core$async33970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33970");

(cljs.core.async.t_cljs$core$async33970.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33970.
 */
cljs.core.async.__GT_t_cljs$core$async33970 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33970(f__$1,ch__$1,meta33971){
return (new cljs.core.async.t_cljs$core$async33970(f__$1,ch__$1,meta33971));
});

}

return (new cljs.core.async.t_cljs$core$async33970(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33978 = (function (f,ch,meta33979){
this.f = f;
this.ch = ch;
this.meta33979 = meta33979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33980,meta33979__$1){
var self__ = this;
var _33980__$1 = this;
return (new cljs.core.async.t_cljs$core$async33978(self__.f,self__.ch,meta33979__$1));
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33980){
var self__ = this;
var _33980__$1 = this;
return self__.meta33979;
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33979","meta33979",599461607,null)], null);
}));

(cljs.core.async.t_cljs$core$async33978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33978");

(cljs.core.async.t_cljs$core$async33978.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33978.
 */
cljs.core.async.__GT_t_cljs$core$async33978 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33978(f__$1,ch__$1,meta33979){
return (new cljs.core.async.t_cljs$core$async33978(f__$1,ch__$1,meta33979));
});

}

return (new cljs.core.async.t_cljs$core$async33978(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33981 = (function (p,ch,meta33982){
this.p = p;
this.ch = ch;
this.meta33982 = meta33982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33983,meta33982__$1){
var self__ = this;
var _33983__$1 = this;
return (new cljs.core.async.t_cljs$core$async33981(self__.p,self__.ch,meta33982__$1));
}));

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33983){
var self__ = this;
var _33983__$1 = this;
return self__.meta33982;
}));

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33982","meta33982",-1116159687,null)], null);
}));

(cljs.core.async.t_cljs$core$async33981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33981");

(cljs.core.async.t_cljs$core$async33981.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33981.
 */
cljs.core.async.__GT_t_cljs$core$async33981 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33981(p__$1,ch__$1,meta33982){
return (new cljs.core.async.t_cljs$core$async33981(p__$1,ch__$1,meta33982));
});

}

return (new cljs.core.async.t_cljs$core$async33981(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33985 = arguments.length;
switch (G__33985) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32817__auto___35342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_34006){
var state_val_34007 = (state_34006[(1)]);
if((state_val_34007 === (7))){
var inst_34002 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34008_35343 = state_34006__$1;
(statearr_34008_35343[(2)] = inst_34002);

(statearr_34008_35343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (1))){
var state_34006__$1 = state_34006;
var statearr_34009_35345 = state_34006__$1;
(statearr_34009_35345[(2)] = null);

(statearr_34009_35345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (4))){
var inst_33988 = (state_34006[(7)]);
var inst_33988__$1 = (state_34006[(2)]);
var inst_33989 = (inst_33988__$1 == null);
var state_34006__$1 = (function (){var statearr_34010 = state_34006;
(statearr_34010[(7)] = inst_33988__$1);

return statearr_34010;
})();
if(cljs.core.truth_(inst_33989)){
var statearr_34011_35346 = state_34006__$1;
(statearr_34011_35346[(1)] = (5));

} else {
var statearr_34012_35347 = state_34006__$1;
(statearr_34012_35347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (6))){
var inst_33988 = (state_34006[(7)]);
var inst_33993 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33988) : p.call(null,inst_33988));
var state_34006__$1 = state_34006;
if(cljs.core.truth_(inst_33993)){
var statearr_34013_35349 = state_34006__$1;
(statearr_34013_35349[(1)] = (8));

} else {
var statearr_34014_35351 = state_34006__$1;
(statearr_34014_35351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (3))){
var inst_34004 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34006__$1,inst_34004);
} else {
if((state_val_34007 === (2))){
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34006__$1,(4),ch);
} else {
if((state_val_34007 === (11))){
var inst_33996 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34015_35353 = state_34006__$1;
(statearr_34015_35353[(2)] = inst_33996);

(statearr_34015_35353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (9))){
var state_34006__$1 = state_34006;
var statearr_34016_35354 = state_34006__$1;
(statearr_34016_35354[(2)] = null);

(statearr_34016_35354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (5))){
var inst_33991 = cljs.core.async.close_BANG_(out);
var state_34006__$1 = state_34006;
var statearr_34017_35361 = state_34006__$1;
(statearr_34017_35361[(2)] = inst_33991);

(statearr_34017_35361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (10))){
var inst_33999 = (state_34006[(2)]);
var state_34006__$1 = (function (){var statearr_34018 = state_34006;
(statearr_34018[(8)] = inst_33999);

return statearr_34018;
})();
var statearr_34019_35362 = state_34006__$1;
(statearr_34019_35362[(2)] = null);

(statearr_34019_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (8))){
var inst_33988 = (state_34006[(7)]);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34006__$1,(11),out,inst_33988);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34020 = [null,null,null,null,null,null,null,null,null];
(statearr_34020[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34020[(1)] = (1));

return statearr_34020;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34006){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34006);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34021){if((e34021 instanceof Object)){
var ex__32736__auto__ = e34021;
var statearr_34022_35379 = state_34006;
(statearr_34022_35379[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35388 = state_34006;
state_34006 = G__35388;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_34023 = f__32818__auto__();
(statearr_34023[(6)] = c__32817__auto___35342);

return statearr_34023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34025 = arguments.length;
switch (G__34025) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_34087){
var state_val_34088 = (state_34087[(1)]);
if((state_val_34088 === (7))){
var inst_34083 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34089_35403 = state_34087__$1;
(statearr_34089_35403[(2)] = inst_34083);

(statearr_34089_35403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (20))){
var inst_34053 = (state_34087[(7)]);
var inst_34064 = (state_34087[(2)]);
var inst_34065 = cljs.core.next(inst_34053);
var inst_34039 = inst_34065;
var inst_34040 = null;
var inst_34041 = (0);
var inst_34042 = (0);
var state_34087__$1 = (function (){var statearr_34090 = state_34087;
(statearr_34090[(8)] = inst_34064);

(statearr_34090[(9)] = inst_34039);

(statearr_34090[(10)] = inst_34042);

(statearr_34090[(11)] = inst_34041);

(statearr_34090[(12)] = inst_34040);

return statearr_34090;
})();
var statearr_34091_35414 = state_34087__$1;
(statearr_34091_35414[(2)] = null);

(statearr_34091_35414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (1))){
var state_34087__$1 = state_34087;
var statearr_34092_35415 = state_34087__$1;
(statearr_34092_35415[(2)] = null);

(statearr_34092_35415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (4))){
var inst_34028 = (state_34087[(13)]);
var inst_34028__$1 = (state_34087[(2)]);
var inst_34029 = (inst_34028__$1 == null);
var state_34087__$1 = (function (){var statearr_34093 = state_34087;
(statearr_34093[(13)] = inst_34028__$1);

return statearr_34093;
})();
if(cljs.core.truth_(inst_34029)){
var statearr_34094_35416 = state_34087__$1;
(statearr_34094_35416[(1)] = (5));

} else {
var statearr_34095_35417 = state_34087__$1;
(statearr_34095_35417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (15))){
var state_34087__$1 = state_34087;
var statearr_34099_35418 = state_34087__$1;
(statearr_34099_35418[(2)] = null);

(statearr_34099_35418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (21))){
var state_34087__$1 = state_34087;
var statearr_34100_35419 = state_34087__$1;
(statearr_34100_35419[(2)] = null);

(statearr_34100_35419[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (13))){
var inst_34039 = (state_34087[(9)]);
var inst_34042 = (state_34087[(10)]);
var inst_34041 = (state_34087[(11)]);
var inst_34040 = (state_34087[(12)]);
var inst_34049 = (state_34087[(2)]);
var inst_34050 = (inst_34042 + (1));
var tmp34096 = inst_34039;
var tmp34097 = inst_34041;
var tmp34098 = inst_34040;
var inst_34039__$1 = tmp34096;
var inst_34040__$1 = tmp34098;
var inst_34041__$1 = tmp34097;
var inst_34042__$1 = inst_34050;
var state_34087__$1 = (function (){var statearr_34101 = state_34087;
(statearr_34101[(9)] = inst_34039__$1);

(statearr_34101[(10)] = inst_34042__$1);

(statearr_34101[(14)] = inst_34049);

(statearr_34101[(11)] = inst_34041__$1);

(statearr_34101[(12)] = inst_34040__$1);

return statearr_34101;
})();
var statearr_34102_35474 = state_34087__$1;
(statearr_34102_35474[(2)] = null);

(statearr_34102_35474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (22))){
var state_34087__$1 = state_34087;
var statearr_34103_35479 = state_34087__$1;
(statearr_34103_35479[(2)] = null);

(statearr_34103_35479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (6))){
var inst_34028 = (state_34087[(13)]);
var inst_34037 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34028) : f.call(null,inst_34028));
var inst_34038 = cljs.core.seq(inst_34037);
var inst_34039 = inst_34038;
var inst_34040 = null;
var inst_34041 = (0);
var inst_34042 = (0);
var state_34087__$1 = (function (){var statearr_34104 = state_34087;
(statearr_34104[(9)] = inst_34039);

(statearr_34104[(10)] = inst_34042);

(statearr_34104[(11)] = inst_34041);

(statearr_34104[(12)] = inst_34040);

return statearr_34104;
})();
var statearr_34105_35508 = state_34087__$1;
(statearr_34105_35508[(2)] = null);

(statearr_34105_35508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (17))){
var inst_34053 = (state_34087[(7)]);
var inst_34057 = cljs.core.chunk_first(inst_34053);
var inst_34058 = cljs.core.chunk_rest(inst_34053);
var inst_34059 = cljs.core.count(inst_34057);
var inst_34039 = inst_34058;
var inst_34040 = inst_34057;
var inst_34041 = inst_34059;
var inst_34042 = (0);
var state_34087__$1 = (function (){var statearr_34106 = state_34087;
(statearr_34106[(9)] = inst_34039);

(statearr_34106[(10)] = inst_34042);

(statearr_34106[(11)] = inst_34041);

(statearr_34106[(12)] = inst_34040);

return statearr_34106;
})();
var statearr_34107_35516 = state_34087__$1;
(statearr_34107_35516[(2)] = null);

(statearr_34107_35516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (3))){
var inst_34085 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34087__$1,inst_34085);
} else {
if((state_val_34088 === (12))){
var inst_34073 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34108_35524 = state_34087__$1;
(statearr_34108_35524[(2)] = inst_34073);

(statearr_34108_35524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (2))){
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34087__$1,(4),in$);
} else {
if((state_val_34088 === (23))){
var inst_34081 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34109_35526 = state_34087__$1;
(statearr_34109_35526[(2)] = inst_34081);

(statearr_34109_35526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (19))){
var inst_34068 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34110_35528 = state_34087__$1;
(statearr_34110_35528[(2)] = inst_34068);

(statearr_34110_35528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (11))){
var inst_34039 = (state_34087[(9)]);
var inst_34053 = (state_34087[(7)]);
var inst_34053__$1 = cljs.core.seq(inst_34039);
var state_34087__$1 = (function (){var statearr_34111 = state_34087;
(statearr_34111[(7)] = inst_34053__$1);

return statearr_34111;
})();
if(inst_34053__$1){
var statearr_34112_35529 = state_34087__$1;
(statearr_34112_35529[(1)] = (14));

} else {
var statearr_34113_35530 = state_34087__$1;
(statearr_34113_35530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (9))){
var inst_34075 = (state_34087[(2)]);
var inst_34076 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34087__$1 = (function (){var statearr_34114 = state_34087;
(statearr_34114[(15)] = inst_34075);

return statearr_34114;
})();
if(cljs.core.truth_(inst_34076)){
var statearr_34115_35531 = state_34087__$1;
(statearr_34115_35531[(1)] = (21));

} else {
var statearr_34116_35532 = state_34087__$1;
(statearr_34116_35532[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (5))){
var inst_34031 = cljs.core.async.close_BANG_(out);
var state_34087__$1 = state_34087;
var statearr_34117_35533 = state_34087__$1;
(statearr_34117_35533[(2)] = inst_34031);

(statearr_34117_35533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (14))){
var inst_34053 = (state_34087[(7)]);
var inst_34055 = cljs.core.chunked_seq_QMARK_(inst_34053);
var state_34087__$1 = state_34087;
if(inst_34055){
var statearr_34118_35534 = state_34087__$1;
(statearr_34118_35534[(1)] = (17));

} else {
var statearr_34119_35535 = state_34087__$1;
(statearr_34119_35535[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (16))){
var inst_34071 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34120_35536 = state_34087__$1;
(statearr_34120_35536[(2)] = inst_34071);

(statearr_34120_35536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (10))){
var inst_34042 = (state_34087[(10)]);
var inst_34040 = (state_34087[(12)]);
var inst_34047 = cljs.core._nth(inst_34040,inst_34042);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34087__$1,(13),out,inst_34047);
} else {
if((state_val_34088 === (18))){
var inst_34053 = (state_34087[(7)]);
var inst_34062 = cljs.core.first(inst_34053);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34087__$1,(20),out,inst_34062);
} else {
if((state_val_34088 === (8))){
var inst_34042 = (state_34087[(10)]);
var inst_34041 = (state_34087[(11)]);
var inst_34044 = (inst_34042 < inst_34041);
var inst_34045 = inst_34044;
var state_34087__$1 = state_34087;
if(cljs.core.truth_(inst_34045)){
var statearr_34121_35537 = state_34087__$1;
(statearr_34121_35537[(1)] = (10));

} else {
var statearr_34122_35538 = state_34087__$1;
(statearr_34122_35538[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_34123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34123[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__);

(statearr_34123[(1)] = (1));

return statearr_34123;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____1 = (function (state_34087){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34087);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34124){if((e34124 instanceof Object)){
var ex__32736__auto__ = e34124;
var statearr_34125_35539 = state_34087;
(statearr_34125_35539[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35562 = state_34087;
state_34087 = G__35562;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__ = function(state_34087){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____1.call(this,state_34087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_34126 = f__32818__auto__();
(statearr_34126[(6)] = c__32817__auto__);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));

return c__32817__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34128 = arguments.length;
switch (G__34128) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34130 = arguments.length;
switch (G__34130) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34132 = arguments.length;
switch (G__34132) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32817__auto___35568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_34156){
var state_val_34157 = (state_34156[(1)]);
if((state_val_34157 === (7))){
var inst_34151 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34158_35569 = state_34156__$1;
(statearr_34158_35569[(2)] = inst_34151);

(statearr_34158_35569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (1))){
var inst_34133 = null;
var state_34156__$1 = (function (){var statearr_34159 = state_34156;
(statearr_34159[(7)] = inst_34133);

return statearr_34159;
})();
var statearr_34160_35570 = state_34156__$1;
(statearr_34160_35570[(2)] = null);

(statearr_34160_35570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (4))){
var inst_34136 = (state_34156[(8)]);
var inst_34136__$1 = (state_34156[(2)]);
var inst_34137 = (inst_34136__$1 == null);
var inst_34138 = cljs.core.not(inst_34137);
var state_34156__$1 = (function (){var statearr_34161 = state_34156;
(statearr_34161[(8)] = inst_34136__$1);

return statearr_34161;
})();
if(inst_34138){
var statearr_34162_35571 = state_34156__$1;
(statearr_34162_35571[(1)] = (5));

} else {
var statearr_34163_35572 = state_34156__$1;
(statearr_34163_35572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (6))){
var state_34156__$1 = state_34156;
var statearr_34164_35573 = state_34156__$1;
(statearr_34164_35573[(2)] = null);

(statearr_34164_35573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (3))){
var inst_34153 = (state_34156[(2)]);
var inst_34154 = cljs.core.async.close_BANG_(out);
var state_34156__$1 = (function (){var statearr_34165 = state_34156;
(statearr_34165[(9)] = inst_34153);

return statearr_34165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34156__$1,inst_34154);
} else {
if((state_val_34157 === (2))){
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34156__$1,(4),ch);
} else {
if((state_val_34157 === (11))){
var inst_34136 = (state_34156[(8)]);
var inst_34145 = (state_34156[(2)]);
var inst_34133 = inst_34136;
var state_34156__$1 = (function (){var statearr_34166 = state_34156;
(statearr_34166[(10)] = inst_34145);

(statearr_34166[(7)] = inst_34133);

return statearr_34166;
})();
var statearr_34167_35574 = state_34156__$1;
(statearr_34167_35574[(2)] = null);

(statearr_34167_35574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (9))){
var inst_34136 = (state_34156[(8)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34156__$1,(11),out,inst_34136);
} else {
if((state_val_34157 === (5))){
var inst_34136 = (state_34156[(8)]);
var inst_34133 = (state_34156[(7)]);
var inst_34140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34136,inst_34133);
var state_34156__$1 = state_34156;
if(inst_34140){
var statearr_34169_35593 = state_34156__$1;
(statearr_34169_35593[(1)] = (8));

} else {
var statearr_34170_35595 = state_34156__$1;
(statearr_34170_35595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (10))){
var inst_34148 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34171_35596 = state_34156__$1;
(statearr_34171_35596[(2)] = inst_34148);

(statearr_34171_35596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (8))){
var inst_34133 = (state_34156[(7)]);
var tmp34168 = inst_34133;
var inst_34133__$1 = tmp34168;
var state_34156__$1 = (function (){var statearr_34172 = state_34156;
(statearr_34172[(7)] = inst_34133__$1);

return statearr_34172;
})();
var statearr_34173_35597 = state_34156__$1;
(statearr_34173_35597[(2)] = null);

(statearr_34173_35597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34174[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34174[(1)] = (1));

return statearr_34174;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34156){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34156);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34175){if((e34175 instanceof Object)){
var ex__32736__auto__ = e34175;
var statearr_34176_35716 = state_34156;
(statearr_34176_35716[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35721 = state_34156;
state_34156 = G__35721;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_34177 = f__32818__auto__();
(statearr_34177[(6)] = c__32817__auto___35568);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34179 = arguments.length;
switch (G__34179) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32817__auto___35741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_34217){
var state_val_34218 = (state_34217[(1)]);
if((state_val_34218 === (7))){
var inst_34213 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34219_35743 = state_34217__$1;
(statearr_34219_35743[(2)] = inst_34213);

(statearr_34219_35743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (1))){
var inst_34180 = (new Array(n));
var inst_34181 = inst_34180;
var inst_34182 = (0);
var state_34217__$1 = (function (){var statearr_34220 = state_34217;
(statearr_34220[(7)] = inst_34182);

(statearr_34220[(8)] = inst_34181);

return statearr_34220;
})();
var statearr_34221_35748 = state_34217__$1;
(statearr_34221_35748[(2)] = null);

(statearr_34221_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (4))){
var inst_34185 = (state_34217[(9)]);
var inst_34185__$1 = (state_34217[(2)]);
var inst_34186 = (inst_34185__$1 == null);
var inst_34187 = cljs.core.not(inst_34186);
var state_34217__$1 = (function (){var statearr_34222 = state_34217;
(statearr_34222[(9)] = inst_34185__$1);

return statearr_34222;
})();
if(inst_34187){
var statearr_34223_35749 = state_34217__$1;
(statearr_34223_35749[(1)] = (5));

} else {
var statearr_34224_35750 = state_34217__$1;
(statearr_34224_35750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (15))){
var inst_34207 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34225_35751 = state_34217__$1;
(statearr_34225_35751[(2)] = inst_34207);

(statearr_34225_35751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (13))){
var state_34217__$1 = state_34217;
var statearr_34226_35752 = state_34217__$1;
(statearr_34226_35752[(2)] = null);

(statearr_34226_35752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (6))){
var inst_34182 = (state_34217[(7)]);
var inst_34203 = (inst_34182 > (0));
var state_34217__$1 = state_34217;
if(cljs.core.truth_(inst_34203)){
var statearr_34227_35753 = state_34217__$1;
(statearr_34227_35753[(1)] = (12));

} else {
var statearr_34228_35754 = state_34217__$1;
(statearr_34228_35754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (3))){
var inst_34215 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34217__$1,inst_34215);
} else {
if((state_val_34218 === (12))){
var inst_34181 = (state_34217[(8)]);
var inst_34205 = cljs.core.vec(inst_34181);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34217__$1,(15),out,inst_34205);
} else {
if((state_val_34218 === (2))){
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34217__$1,(4),ch);
} else {
if((state_val_34218 === (11))){
var inst_34197 = (state_34217[(2)]);
var inst_34198 = (new Array(n));
var inst_34181 = inst_34198;
var inst_34182 = (0);
var state_34217__$1 = (function (){var statearr_34229 = state_34217;
(statearr_34229[(7)] = inst_34182);

(statearr_34229[(8)] = inst_34181);

(statearr_34229[(10)] = inst_34197);

return statearr_34229;
})();
var statearr_34230_35755 = state_34217__$1;
(statearr_34230_35755[(2)] = null);

(statearr_34230_35755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (9))){
var inst_34181 = (state_34217[(8)]);
var inst_34195 = cljs.core.vec(inst_34181);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34217__$1,(11),out,inst_34195);
} else {
if((state_val_34218 === (5))){
var inst_34190 = (state_34217[(11)]);
var inst_34182 = (state_34217[(7)]);
var inst_34181 = (state_34217[(8)]);
var inst_34185 = (state_34217[(9)]);
var inst_34189 = (inst_34181[inst_34182] = inst_34185);
var inst_34190__$1 = (inst_34182 + (1));
var inst_34191 = (inst_34190__$1 < n);
var state_34217__$1 = (function (){var statearr_34231 = state_34217;
(statearr_34231[(11)] = inst_34190__$1);

(statearr_34231[(12)] = inst_34189);

return statearr_34231;
})();
if(cljs.core.truth_(inst_34191)){
var statearr_34232_35756 = state_34217__$1;
(statearr_34232_35756[(1)] = (8));

} else {
var statearr_34233_35757 = state_34217__$1;
(statearr_34233_35757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (14))){
var inst_34210 = (state_34217[(2)]);
var inst_34211 = cljs.core.async.close_BANG_(out);
var state_34217__$1 = (function (){var statearr_34235 = state_34217;
(statearr_34235[(13)] = inst_34210);

return statearr_34235;
})();
var statearr_34236_35758 = state_34217__$1;
(statearr_34236_35758[(2)] = inst_34211);

(statearr_34236_35758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (10))){
var inst_34201 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34237_35759 = state_34217__$1;
(statearr_34237_35759[(2)] = inst_34201);

(statearr_34237_35759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (8))){
var inst_34190 = (state_34217[(11)]);
var inst_34181 = (state_34217[(8)]);
var tmp34234 = inst_34181;
var inst_34181__$1 = tmp34234;
var inst_34182 = inst_34190;
var state_34217__$1 = (function (){var statearr_34238 = state_34217;
(statearr_34238[(7)] = inst_34182);

(statearr_34238[(8)] = inst_34181__$1);

return statearr_34238;
})();
var statearr_34239_35761 = state_34217__$1;
(statearr_34239_35761[(2)] = null);

(statearr_34239_35761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34217){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34217);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34241){if((e34241 instanceof Object)){
var ex__32736__auto__ = e34241;
var statearr_34242_35762 = state_34217;
(statearr_34242_35762[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35763 = state_34217;
state_34217 = G__35763;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_34243 = f__32818__auto__();
(statearr_34243[(6)] = c__32817__auto___35741);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34245 = arguments.length;
switch (G__34245) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32817__auto___35769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32818__auto__ = (function (){var switch__32732__auto__ = (function (state_34287){
var state_val_34288 = (state_34287[(1)]);
if((state_val_34288 === (7))){
var inst_34283 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34289_35772 = state_34287__$1;
(statearr_34289_35772[(2)] = inst_34283);

(statearr_34289_35772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (1))){
var inst_34246 = [];
var inst_34247 = inst_34246;
var inst_34248 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34287__$1 = (function (){var statearr_34290 = state_34287;
(statearr_34290[(7)] = inst_34248);

(statearr_34290[(8)] = inst_34247);

return statearr_34290;
})();
var statearr_34291_35774 = state_34287__$1;
(statearr_34291_35774[(2)] = null);

(statearr_34291_35774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (4))){
var inst_34251 = (state_34287[(9)]);
var inst_34251__$1 = (state_34287[(2)]);
var inst_34252 = (inst_34251__$1 == null);
var inst_34253 = cljs.core.not(inst_34252);
var state_34287__$1 = (function (){var statearr_34292 = state_34287;
(statearr_34292[(9)] = inst_34251__$1);

return statearr_34292;
})();
if(inst_34253){
var statearr_34293_35775 = state_34287__$1;
(statearr_34293_35775[(1)] = (5));

} else {
var statearr_34294_35776 = state_34287__$1;
(statearr_34294_35776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (15))){
var inst_34277 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34295_35777 = state_34287__$1;
(statearr_34295_35777[(2)] = inst_34277);

(statearr_34295_35777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (13))){
var state_34287__$1 = state_34287;
var statearr_34296_35778 = state_34287__$1;
(statearr_34296_35778[(2)] = null);

(statearr_34296_35778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (6))){
var inst_34247 = (state_34287[(8)]);
var inst_34272 = inst_34247.length;
var inst_34273 = (inst_34272 > (0));
var state_34287__$1 = state_34287;
if(cljs.core.truth_(inst_34273)){
var statearr_34297_35779 = state_34287__$1;
(statearr_34297_35779[(1)] = (12));

} else {
var statearr_34298_35780 = state_34287__$1;
(statearr_34298_35780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (3))){
var inst_34285 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34287__$1,inst_34285);
} else {
if((state_val_34288 === (12))){
var inst_34247 = (state_34287[(8)]);
var inst_34275 = cljs.core.vec(inst_34247);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34287__$1,(15),out,inst_34275);
} else {
if((state_val_34288 === (2))){
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34287__$1,(4),ch);
} else {
if((state_val_34288 === (11))){
var inst_34251 = (state_34287[(9)]);
var inst_34255 = (state_34287[(10)]);
var inst_34265 = (state_34287[(2)]);
var inst_34266 = [];
var inst_34267 = inst_34266.push(inst_34251);
var inst_34247 = inst_34266;
var inst_34248 = inst_34255;
var state_34287__$1 = (function (){var statearr_34299 = state_34287;
(statearr_34299[(7)] = inst_34248);

(statearr_34299[(11)] = inst_34265);

(statearr_34299[(12)] = inst_34267);

(statearr_34299[(8)] = inst_34247);

return statearr_34299;
})();
var statearr_34300_35783 = state_34287__$1;
(statearr_34300_35783[(2)] = null);

(statearr_34300_35783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (9))){
var inst_34247 = (state_34287[(8)]);
var inst_34263 = cljs.core.vec(inst_34247);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34287__$1,(11),out,inst_34263);
} else {
if((state_val_34288 === (5))){
var inst_34248 = (state_34287[(7)]);
var inst_34251 = (state_34287[(9)]);
var inst_34255 = (state_34287[(10)]);
var inst_34255__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34251) : f.call(null,inst_34251));
var inst_34256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34255__$1,inst_34248);
var inst_34257 = cljs.core.keyword_identical_QMARK_(inst_34248,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34258 = ((inst_34256) || (inst_34257));
var state_34287__$1 = (function (){var statearr_34301 = state_34287;
(statearr_34301[(10)] = inst_34255__$1);

return statearr_34301;
})();
if(cljs.core.truth_(inst_34258)){
var statearr_34302_35788 = state_34287__$1;
(statearr_34302_35788[(1)] = (8));

} else {
var statearr_34303_35789 = state_34287__$1;
(statearr_34303_35789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (14))){
var inst_34280 = (state_34287[(2)]);
var inst_34281 = cljs.core.async.close_BANG_(out);
var state_34287__$1 = (function (){var statearr_34305 = state_34287;
(statearr_34305[(13)] = inst_34280);

return statearr_34305;
})();
var statearr_34306_35790 = state_34287__$1;
(statearr_34306_35790[(2)] = inst_34281);

(statearr_34306_35790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (10))){
var inst_34270 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34307_35796 = state_34287__$1;
(statearr_34307_35796[(2)] = inst_34270);

(statearr_34307_35796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (8))){
var inst_34251 = (state_34287[(9)]);
var inst_34247 = (state_34287[(8)]);
var inst_34255 = (state_34287[(10)]);
var inst_34260 = inst_34247.push(inst_34251);
var tmp34304 = inst_34247;
var inst_34247__$1 = tmp34304;
var inst_34248 = inst_34255;
var state_34287__$1 = (function (){var statearr_34308 = state_34287;
(statearr_34308[(7)] = inst_34248);

(statearr_34308[(14)] = inst_34260);

(statearr_34308[(8)] = inst_34247__$1);

return statearr_34308;
})();
var statearr_34309_35797 = state_34287__$1;
(statearr_34309_35797[(2)] = null);

(statearr_34309_35797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34310[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34310[(1)] = (1));

return statearr_34310;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34287){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34287);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34311){if((e34311 instanceof Object)){
var ex__32736__auto__ = e34311;
var statearr_34312_35798 = state_34287;
(statearr_34312_35798[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35799 = state_34287;
state_34287 = G__35799;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
})();
var state__32819__auto__ = (function (){var statearr_34313 = f__32818__auto__();
(statearr_34313[(6)] = c__32817__auto___35769);

return statearr_34313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32819__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
