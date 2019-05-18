goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33452 = arguments.length;
switch (G__33452) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33453 = (function (f,blockable,meta33454){
this.f = f;
this.blockable = blockable;
this.meta33454 = meta33454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33455,meta33454__$1){
var self__ = this;
var _33455__$1 = this;
return (new cljs.core.async.t_cljs$core$async33453(self__.f,self__.blockable,meta33454__$1));
});

cljs.core.async.t_cljs$core$async33453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33455){
var self__ = this;
var _33455__$1 = this;
return self__.meta33454;
});

cljs.core.async.t_cljs$core$async33453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33454","meta33454",2006887814,null)], null);
});

cljs.core.async.t_cljs$core$async33453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33453";

cljs.core.async.t_cljs$core$async33453.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33453");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33453.
 */
cljs.core.async.__GT_t_cljs$core$async33453 = (function cljs$core$async$__GT_t_cljs$core$async33453(f__$1,blockable__$1,meta33454){
return (new cljs.core.async.t_cljs$core$async33453(f__$1,blockable__$1,meta33454));
});

}

return (new cljs.core.async.t_cljs$core$async33453(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__33458 = arguments.length;
switch (G__33458) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__33462 = arguments.length;
switch (G__33462) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34918 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34918) : fn1.call(null,val_34918));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34918,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34918) : fn1.call(null,val_34918));
});})(val_34918,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__33465 = arguments.length;
switch (G__33465) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34951 = n;
var x_34952 = (0);
while(true){
if((x_34952 < n__4607__auto___34951)){
(a[x_34952] = (0));

var G__34953 = (x_34952 + (1));
x_34952 = G__34953;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34955 = (i + (1));
i = G__34955;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33466 = (function (flag,meta33467){
this.flag = flag;
this.meta33467 = meta33467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33468,meta33467__$1){
var self__ = this;
var _33468__$1 = this;
return (new cljs.core.async.t_cljs$core$async33466(self__.flag,meta33467__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33468){
var self__ = this;
var _33468__$1 = this;
return self__.meta33467;
});})(flag))
;

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33466.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33467","meta33467",2139457490,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33466";

cljs.core.async.t_cljs$core$async33466.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33466");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33466.
 */
cljs.core.async.__GT_t_cljs$core$async33466 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33466(flag__$1,meta33467){
return (new cljs.core.async.t_cljs$core$async33466(flag__$1,meta33467));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33466(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33469 = (function (flag,cb,meta33470){
this.flag = flag;
this.cb = cb;
this.meta33470 = meta33470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33471,meta33470__$1){
var self__ = this;
var _33471__$1 = this;
return (new cljs.core.async.t_cljs$core$async33469(self__.flag,self__.cb,meta33470__$1));
});

cljs.core.async.t_cljs$core$async33469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33471){
var self__ = this;
var _33471__$1 = this;
return self__.meta33470;
});

cljs.core.async.t_cljs$core$async33469.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33469.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33470","meta33470",1496878674,null)], null);
});

cljs.core.async.t_cljs$core$async33469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33469";

cljs.core.async.t_cljs$core$async33469.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33469");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33469.
 */
cljs.core.async.__GT_t_cljs$core$async33469 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33469(flag__$1,cb__$1,meta33470){
return (new cljs.core.async.t_cljs$core$async33469(flag__$1,cb__$1,meta33470));
});

}

return (new cljs.core.async.t_cljs$core$async33469(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__33473_SHARP_){
var G__33475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33473_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33475) : fret.call(null,G__33475));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33474_SHARP_){
var G__33476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33474_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33476) : fret.call(null,G__33476));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35017 = (i + (1));
i = G__35017;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___35022 = arguments.length;
var i__4731__auto___35023 = (0);
while(true){
if((i__4731__auto___35023 < len__4730__auto___35022)){
args__4736__auto__.push((arguments[i__4731__auto___35023]));

var G__35026 = (i__4731__auto___35023 + (1));
i__4731__auto___35023 = G__35026;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33482){
var map__33483 = p__33482;
var map__33483__$1 = (((((!((map__33483 == null))))?(((((map__33483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33483):map__33483);
var opts = map__33483__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33479){
var G__33480 = cljs.core.first(seq33479);
var seq33479__$1 = cljs.core.next(seq33479);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33480,seq33479__$1);
});

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
var G__33486 = arguments.length;
switch (G__33486) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33394__auto___35085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35085){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35085){
return (function (state_33510){
var state_val_33511 = (state_33510[(1)]);
if((state_val_33511 === (7))){
var inst_33506 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33512_35089 = state_33510__$1;
(statearr_33512_35089[(2)] = inst_33506);

(statearr_33512_35089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (1))){
var state_33510__$1 = state_33510;
var statearr_33513_35093 = state_33510__$1;
(statearr_33513_35093[(2)] = null);

(statearr_33513_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (4))){
var inst_33489 = (state_33510[(7)]);
var inst_33489__$1 = (state_33510[(2)]);
var inst_33490 = (inst_33489__$1 == null);
var state_33510__$1 = (function (){var statearr_33514 = state_33510;
(statearr_33514[(7)] = inst_33489__$1);

return statearr_33514;
})();
if(cljs.core.truth_(inst_33490)){
var statearr_33515_35097 = state_33510__$1;
(statearr_33515_35097[(1)] = (5));

} else {
var statearr_33516_35101 = state_33510__$1;
(statearr_33516_35101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (13))){
var state_33510__$1 = state_33510;
var statearr_33517_35102 = state_33510__$1;
(statearr_33517_35102[(2)] = null);

(statearr_33517_35102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (6))){
var inst_33489 = (state_33510[(7)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33510__$1,(11),to,inst_33489);
} else {
if((state_val_33511 === (3))){
var inst_33508 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33510__$1,inst_33508);
} else {
if((state_val_33511 === (12))){
var state_33510__$1 = state_33510;
var statearr_33518_35106 = state_33510__$1;
(statearr_33518_35106[(2)] = null);

(statearr_33518_35106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (2))){
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33510__$1,(4),from);
} else {
if((state_val_33511 === (11))){
var inst_33499 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33499)){
var statearr_33519_35110 = state_33510__$1;
(statearr_33519_35110[(1)] = (12));

} else {
var statearr_33520_35111 = state_33510__$1;
(statearr_33520_35111[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (9))){
var state_33510__$1 = state_33510;
var statearr_33521_35112 = state_33510__$1;
(statearr_33521_35112[(2)] = null);

(statearr_33521_35112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (5))){
var state_33510__$1 = state_33510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33522_35113 = state_33510__$1;
(statearr_33522_35113[(1)] = (8));

} else {
var statearr_33523_35114 = state_33510__$1;
(statearr_33523_35114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (14))){
var inst_33504 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33524_35115 = state_33510__$1;
(statearr_33524_35115[(2)] = inst_33504);

(statearr_33524_35115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (10))){
var inst_33496 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33527_35117 = state_33510__$1;
(statearr_33527_35117[(2)] = inst_33496);

(statearr_33527_35117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (8))){
var inst_33493 = cljs.core.async.close_BANG_(to);
var state_33510__$1 = state_33510;
var statearr_33528_35118 = state_33510__$1;
(statearr_33528_35118[(2)] = inst_33493);

(statearr_33528_35118[(1)] = (10));


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
});})(c__33394__auto___35085))
;
return ((function (switch__33298__auto__,c__33394__auto___35085){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_33529 = [null,null,null,null,null,null,null,null];
(statearr_33529[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_33529[(1)] = (1));

return statearr_33529;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_33510){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33510);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33530){if((e33530 instanceof Object)){
var ex__33302__auto__ = e33530;
var statearr_33531_35119 = state_33510;
(statearr_33531_35119[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35120 = state_33510;
state_33510 = G__35120;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_33510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_33510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35085))
})();
var state__33396__auto__ = (function (){var statearr_33532 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33532[(6)] = c__33394__auto___35085);

return statearr_33532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35085))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33533){
var vec__33534 = p__33533;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33534,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33534,(1),null);
var job = vec__33534;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33394__auto___35121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35121,res,vec__33534,v,p,job,jobs,results){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35121,res,vec__33534,v,p,job,jobs,results){
return (function (state_33541){
var state_val_33542 = (state_33541[(1)]);
if((state_val_33542 === (1))){
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33541__$1,(2),res,v);
} else {
if((state_val_33542 === (2))){
var inst_33538 = (state_33541[(2)]);
var inst_33539 = cljs.core.async.close_BANG_(res);
var state_33541__$1 = (function (){var statearr_33543 = state_33541;
(statearr_33543[(7)] = inst_33538);

return statearr_33543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33541__$1,inst_33539);
} else {
return null;
}
}
});})(c__33394__auto___35121,res,vec__33534,v,p,job,jobs,results))
;
return ((function (switch__33298__auto__,c__33394__auto___35121,res,vec__33534,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0 = (function (){
var statearr_33544 = [null,null,null,null,null,null,null,null];
(statearr_33544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__);

(statearr_33544[(1)] = (1));

return statearr_33544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1 = (function (state_33541){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33541);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33545){if((e33545 instanceof Object)){
var ex__33302__auto__ = e33545;
var statearr_33546_35122 = state_33541;
(statearr_33546_35122[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35123 = state_33541;
state_33541 = G__35123;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = function(state_33541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1.call(this,state_33541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35121,res,vec__33534,v,p,job,jobs,results))
})();
var state__33396__auto__ = (function (){var statearr_33547 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33547[(6)] = c__33394__auto___35121);

return statearr_33547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35121,res,vec__33534,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33548){
var vec__33549 = p__33548;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33549,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33549,(1),null);
var job = vec__33549;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35126 = n;
var __35127 = (0);
while(true){
if((__35127 < n__4607__auto___35126)){
var G__33552_35128 = type;
var G__33552_35129__$1 = (((G__33552_35128 instanceof cljs.core.Keyword))?G__33552_35128.fqn:null);
switch (G__33552_35129__$1) {
case "compute":
var c__33394__auto___35131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35127,c__33394__auto___35131,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (__35127,c__33394__auto___35131,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async){
return (function (state_33565){
var state_val_33566 = (state_33565[(1)]);
if((state_val_33566 === (1))){
var state_33565__$1 = state_33565;
var statearr_33567_35132 = state_33565__$1;
(statearr_33567_35132[(2)] = null);

(statearr_33567_35132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (2))){
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33565__$1,(4),jobs);
} else {
if((state_val_33566 === (3))){
var inst_33563 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33565__$1,inst_33563);
} else {
if((state_val_33566 === (4))){
var inst_33555 = (state_33565[(2)]);
var inst_33556 = process(inst_33555);
var state_33565__$1 = state_33565;
if(cljs.core.truth_(inst_33556)){
var statearr_33568_35134 = state_33565__$1;
(statearr_33568_35134[(1)] = (5));

} else {
var statearr_33569_35136 = state_33565__$1;
(statearr_33569_35136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (5))){
var state_33565__$1 = state_33565;
var statearr_33570_35138 = state_33565__$1;
(statearr_33570_35138[(2)] = null);

(statearr_33570_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (6))){
var state_33565__$1 = state_33565;
var statearr_33571_35139 = state_33565__$1;
(statearr_33571_35139[(2)] = null);

(statearr_33571_35139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (7))){
var inst_33561 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
var statearr_33572_35144 = state_33565__$1;
(statearr_33572_35144[(2)] = inst_33561);

(statearr_33572_35144[(1)] = (3));


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
});})(__35127,c__33394__auto___35131,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async))
;
return ((function (__35127,switch__33298__auto__,c__33394__auto___35131,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0 = (function (){
var statearr_33573 = [null,null,null,null,null,null,null];
(statearr_33573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__);

(statearr_33573[(1)] = (1));

return statearr_33573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1 = (function (state_33565){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33565);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33574){if((e33574 instanceof Object)){
var ex__33302__auto__ = e33574;
var statearr_33575_35153 = state_33565;
(statearr_33575_35153[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35154 = state_33565;
state_33565 = G__35154;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = function(state_33565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1.call(this,state_33565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__;
})()
;})(__35127,switch__33298__auto__,c__33394__auto___35131,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async))
})();
var state__33396__auto__ = (function (){var statearr_33576 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33576[(6)] = c__33394__auto___35131);

return statearr_33576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(__35127,c__33394__auto___35131,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async))
);


break;
case "async":
var c__33394__auto___35157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35127,c__33394__auto___35157,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (__35127,c__33394__auto___35157,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async){
return (function (state_33589){
var state_val_33590 = (state_33589[(1)]);
if((state_val_33590 === (1))){
var state_33589__$1 = state_33589;
var statearr_33591_35195 = state_33589__$1;
(statearr_33591_35195[(2)] = null);

(statearr_33591_35195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33590 === (2))){
var state_33589__$1 = state_33589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33589__$1,(4),jobs);
} else {
if((state_val_33590 === (3))){
var inst_33587 = (state_33589[(2)]);
var state_33589__$1 = state_33589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33589__$1,inst_33587);
} else {
if((state_val_33590 === (4))){
var inst_33579 = (state_33589[(2)]);
var inst_33580 = async(inst_33579);
var state_33589__$1 = state_33589;
if(cljs.core.truth_(inst_33580)){
var statearr_33592_35196 = state_33589__$1;
(statearr_33592_35196[(1)] = (5));

} else {
var statearr_33593_35197 = state_33589__$1;
(statearr_33593_35197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33590 === (5))){
var state_33589__$1 = state_33589;
var statearr_33594_35198 = state_33589__$1;
(statearr_33594_35198[(2)] = null);

(statearr_33594_35198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33590 === (6))){
var state_33589__$1 = state_33589;
var statearr_33595_35199 = state_33589__$1;
(statearr_33595_35199[(2)] = null);

(statearr_33595_35199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33590 === (7))){
var inst_33585 = (state_33589[(2)]);
var state_33589__$1 = state_33589;
var statearr_33596_35200 = state_33589__$1;
(statearr_33596_35200[(2)] = inst_33585);

(statearr_33596_35200[(1)] = (3));


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
});})(__35127,c__33394__auto___35157,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async))
;
return ((function (__35127,switch__33298__auto__,c__33394__auto___35157,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0 = (function (){
var statearr_33597 = [null,null,null,null,null,null,null];
(statearr_33597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__);

(statearr_33597[(1)] = (1));

return statearr_33597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1 = (function (state_33589){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33589);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33598){if((e33598 instanceof Object)){
var ex__33302__auto__ = e33598;
var statearr_33599_35207 = state_33589;
(statearr_33599_35207[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35208 = state_33589;
state_33589 = G__35208;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = function(state_33589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1.call(this,state_33589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__;
})()
;})(__35127,switch__33298__auto__,c__33394__auto___35157,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async))
})();
var state__33396__auto__ = (function (){var statearr_33600 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33600[(6)] = c__33394__auto___35157);

return statearr_33600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(__35127,c__33394__auto___35157,G__33552_35128,G__33552_35129__$1,n__4607__auto___35126,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33552_35129__$1)].join('')));

}

var G__35209 = (__35127 + (1));
__35127 = G__35209;
continue;
} else {
}
break;
}

var c__33394__auto___35210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35210,jobs,results,process,async){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35210,jobs,results,process,async){
return (function (state_33622){
var state_val_33623 = (state_33622[(1)]);
if((state_val_33623 === (7))){
var inst_33618 = (state_33622[(2)]);
var state_33622__$1 = state_33622;
var statearr_33624_35211 = state_33622__$1;
(statearr_33624_35211[(2)] = inst_33618);

(statearr_33624_35211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (1))){
var state_33622__$1 = state_33622;
var statearr_33625_35212 = state_33622__$1;
(statearr_33625_35212[(2)] = null);

(statearr_33625_35212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (4))){
var inst_33603 = (state_33622[(7)]);
var inst_33603__$1 = (state_33622[(2)]);
var inst_33604 = (inst_33603__$1 == null);
var state_33622__$1 = (function (){var statearr_33626 = state_33622;
(statearr_33626[(7)] = inst_33603__$1);

return statearr_33626;
})();
if(cljs.core.truth_(inst_33604)){
var statearr_33627_35213 = state_33622__$1;
(statearr_33627_35213[(1)] = (5));

} else {
var statearr_33628_35214 = state_33622__$1;
(statearr_33628_35214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (6))){
var inst_33603 = (state_33622[(7)]);
var inst_33608 = (state_33622[(8)]);
var inst_33608__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33610 = [inst_33603,inst_33608__$1];
var inst_33611 = (new cljs.core.PersistentVector(null,2,(5),inst_33609,inst_33610,null));
var state_33622__$1 = (function (){var statearr_33629 = state_33622;
(statearr_33629[(8)] = inst_33608__$1);

return statearr_33629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33622__$1,(8),jobs,inst_33611);
} else {
if((state_val_33623 === (3))){
var inst_33620 = (state_33622[(2)]);
var state_33622__$1 = state_33622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33622__$1,inst_33620);
} else {
if((state_val_33623 === (2))){
var state_33622__$1 = state_33622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33622__$1,(4),from);
} else {
if((state_val_33623 === (9))){
var inst_33615 = (state_33622[(2)]);
var state_33622__$1 = (function (){var statearr_33630 = state_33622;
(statearr_33630[(9)] = inst_33615);

return statearr_33630;
})();
var statearr_33631_35217 = state_33622__$1;
(statearr_33631_35217[(2)] = null);

(statearr_33631_35217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (5))){
var inst_33606 = cljs.core.async.close_BANG_(jobs);
var state_33622__$1 = state_33622;
var statearr_33632_35218 = state_33622__$1;
(statearr_33632_35218[(2)] = inst_33606);

(statearr_33632_35218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (8))){
var inst_33608 = (state_33622[(8)]);
var inst_33613 = (state_33622[(2)]);
var state_33622__$1 = (function (){var statearr_33633 = state_33622;
(statearr_33633[(10)] = inst_33613);

return statearr_33633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33622__$1,(9),results,inst_33608);
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
});})(c__33394__auto___35210,jobs,results,process,async))
;
return ((function (switch__33298__auto__,c__33394__auto___35210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0 = (function (){
var statearr_33634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__);

(statearr_33634[(1)] = (1));

return statearr_33634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1 = (function (state_33622){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33622);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33635){if((e33635 instanceof Object)){
var ex__33302__auto__ = e33635;
var statearr_33636_35224 = state_33622;
(statearr_33636_35224[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35225 = state_33622;
state_33622 = G__35225;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = function(state_33622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1.call(this,state_33622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35210,jobs,results,process,async))
})();
var state__33396__auto__ = (function (){var statearr_33637 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33637[(6)] = c__33394__auto___35210);

return statearr_33637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35210,jobs,results,process,async))
);


var c__33394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto__,jobs,results,process,async){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto__,jobs,results,process,async){
return (function (state_33675){
var state_val_33676 = (state_33675[(1)]);
if((state_val_33676 === (7))){
var inst_33671 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33677_35226 = state_33675__$1;
(statearr_33677_35226[(2)] = inst_33671);

(statearr_33677_35226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (20))){
var state_33675__$1 = state_33675;
var statearr_33678_35227 = state_33675__$1;
(statearr_33678_35227[(2)] = null);

(statearr_33678_35227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (1))){
var state_33675__$1 = state_33675;
var statearr_33679_35228 = state_33675__$1;
(statearr_33679_35228[(2)] = null);

(statearr_33679_35228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (4))){
var inst_33640 = (state_33675[(7)]);
var inst_33640__$1 = (state_33675[(2)]);
var inst_33641 = (inst_33640__$1 == null);
var state_33675__$1 = (function (){var statearr_33680 = state_33675;
(statearr_33680[(7)] = inst_33640__$1);

return statearr_33680;
})();
if(cljs.core.truth_(inst_33641)){
var statearr_33681_35229 = state_33675__$1;
(statearr_33681_35229[(1)] = (5));

} else {
var statearr_33682_35230 = state_33675__$1;
(statearr_33682_35230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (15))){
var inst_33653 = (state_33675[(8)]);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33675__$1,(18),to,inst_33653);
} else {
if((state_val_33676 === (21))){
var inst_33666 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33683_35231 = state_33675__$1;
(statearr_33683_35231[(2)] = inst_33666);

(statearr_33683_35231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (13))){
var inst_33668 = (state_33675[(2)]);
var state_33675__$1 = (function (){var statearr_33684 = state_33675;
(statearr_33684[(9)] = inst_33668);

return statearr_33684;
})();
var statearr_33685_35232 = state_33675__$1;
(statearr_33685_35232[(2)] = null);

(statearr_33685_35232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (6))){
var inst_33640 = (state_33675[(7)]);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33675__$1,(11),inst_33640);
} else {
if((state_val_33676 === (17))){
var inst_33661 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
if(cljs.core.truth_(inst_33661)){
var statearr_33686_35233 = state_33675__$1;
(statearr_33686_35233[(1)] = (19));

} else {
var statearr_33687_35234 = state_33675__$1;
(statearr_33687_35234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (3))){
var inst_33673 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33675__$1,inst_33673);
} else {
if((state_val_33676 === (12))){
var inst_33650 = (state_33675[(10)]);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33675__$1,(14),inst_33650);
} else {
if((state_val_33676 === (2))){
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33675__$1,(4),results);
} else {
if((state_val_33676 === (19))){
var state_33675__$1 = state_33675;
var statearr_33688_35235 = state_33675__$1;
(statearr_33688_35235[(2)] = null);

(statearr_33688_35235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (11))){
var inst_33650 = (state_33675[(2)]);
var state_33675__$1 = (function (){var statearr_33689 = state_33675;
(statearr_33689[(10)] = inst_33650);

return statearr_33689;
})();
var statearr_33690_35236 = state_33675__$1;
(statearr_33690_35236[(2)] = null);

(statearr_33690_35236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (9))){
var state_33675__$1 = state_33675;
var statearr_33691_35237 = state_33675__$1;
(statearr_33691_35237[(2)] = null);

(statearr_33691_35237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (5))){
var state_33675__$1 = state_33675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33692_35238 = state_33675__$1;
(statearr_33692_35238[(1)] = (8));

} else {
var statearr_33693_35239 = state_33675__$1;
(statearr_33693_35239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (14))){
var inst_33655 = (state_33675[(11)]);
var inst_33653 = (state_33675[(8)]);
var inst_33653__$1 = (state_33675[(2)]);
var inst_33654 = (inst_33653__$1 == null);
var inst_33655__$1 = cljs.core.not(inst_33654);
var state_33675__$1 = (function (){var statearr_33694 = state_33675;
(statearr_33694[(11)] = inst_33655__$1);

(statearr_33694[(8)] = inst_33653__$1);

return statearr_33694;
})();
if(inst_33655__$1){
var statearr_33695_35240 = state_33675__$1;
(statearr_33695_35240[(1)] = (15));

} else {
var statearr_33696_35241 = state_33675__$1;
(statearr_33696_35241[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (16))){
var inst_33655 = (state_33675[(11)]);
var state_33675__$1 = state_33675;
var statearr_33697_35242 = state_33675__$1;
(statearr_33697_35242[(2)] = inst_33655);

(statearr_33697_35242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (10))){
var inst_33647 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33698_35243 = state_33675__$1;
(statearr_33698_35243[(2)] = inst_33647);

(statearr_33698_35243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (18))){
var inst_33658 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33699_35257 = state_33675__$1;
(statearr_33699_35257[(2)] = inst_33658);

(statearr_33699_35257[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (8))){
var inst_33644 = cljs.core.async.close_BANG_(to);
var state_33675__$1 = state_33675;
var statearr_33700_35275 = state_33675__$1;
(statearr_33700_35275[(2)] = inst_33644);

(statearr_33700_35275[(1)] = (10));


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
});})(c__33394__auto__,jobs,results,process,async))
;
return ((function (switch__33298__auto__,c__33394__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0 = (function (){
var statearr_33701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__);

(statearr_33701[(1)] = (1));

return statearr_33701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1 = (function (state_33675){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33675);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33702){if((e33702 instanceof Object)){
var ex__33302__auto__ = e33702;
var statearr_33703_35278 = state_33675;
(statearr_33703_35278[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35279 = state_33675;
state_33675 = G__35279;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__ = function(state_33675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1.call(this,state_33675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto__,jobs,results,process,async))
})();
var state__33396__auto__ = (function (){var statearr_33704 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33704[(6)] = c__33394__auto__);

return statearr_33704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto__,jobs,results,process,async))
);

return c__33394__auto__;
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
var G__33706 = arguments.length;
switch (G__33706) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__33708 = arguments.length;
switch (G__33708) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__33710 = arguments.length;
switch (G__33710) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33394__auto___35283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35283,tc,fc){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35283,tc,fc){
return (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (7))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33738_35284 = state_33736__$1;
(statearr_33738_35284[(2)] = inst_33732);

(statearr_33738_35284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (1))){
var state_33736__$1 = state_33736;
var statearr_33739_35285 = state_33736__$1;
(statearr_33739_35285[(2)] = null);

(statearr_33739_35285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (4))){
var inst_33713 = (state_33736[(7)]);
var inst_33713__$1 = (state_33736[(2)]);
var inst_33714 = (inst_33713__$1 == null);
var state_33736__$1 = (function (){var statearr_33740 = state_33736;
(statearr_33740[(7)] = inst_33713__$1);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33714)){
var statearr_33741_35286 = state_33736__$1;
(statearr_33741_35286[(1)] = (5));

} else {
var statearr_33742_35287 = state_33736__$1;
(statearr_33742_35287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (13))){
var state_33736__$1 = state_33736;
var statearr_33743_35288 = state_33736__$1;
(statearr_33743_35288[(2)] = null);

(statearr_33743_35288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (6))){
var inst_33713 = (state_33736[(7)]);
var inst_33719 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33713) : p.call(null,inst_33713));
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33719)){
var statearr_33744_35289 = state_33736__$1;
(statearr_33744_35289[(1)] = (9));

} else {
var statearr_33745_35294 = state_33736__$1;
(statearr_33745_35294[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (3))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (12))){
var state_33736__$1 = state_33736;
var statearr_33746_35295 = state_33736__$1;
(statearr_33746_35295[(2)] = null);

(statearr_33746_35295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (2))){
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33736__$1,(4),ch);
} else {
if((state_val_33737 === (11))){
var inst_33713 = (state_33736[(7)]);
var inst_33723 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33736__$1,(8),inst_33723,inst_33713);
} else {
if((state_val_33737 === (9))){
var state_33736__$1 = state_33736;
var statearr_33747_35307 = state_33736__$1;
(statearr_33747_35307[(2)] = tc);

(statearr_33747_35307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (5))){
var inst_33716 = cljs.core.async.close_BANG_(tc);
var inst_33717 = cljs.core.async.close_BANG_(fc);
var state_33736__$1 = (function (){var statearr_33748 = state_33736;
(statearr_33748[(8)] = inst_33716);

return statearr_33748;
})();
var statearr_33749_35308 = state_33736__$1;
(statearr_33749_35308[(2)] = inst_33717);

(statearr_33749_35308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (14))){
var inst_33730 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33750_35309 = state_33736__$1;
(statearr_33750_35309[(2)] = inst_33730);

(statearr_33750_35309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (10))){
var state_33736__$1 = state_33736;
var statearr_33751_35310 = state_33736__$1;
(statearr_33751_35310[(2)] = fc);

(statearr_33751_35310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (8))){
var inst_33725 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33725)){
var statearr_33752_35311 = state_33736__$1;
(statearr_33752_35311[(1)] = (12));

} else {
var statearr_33753_35312 = state_33736__$1;
(statearr_33753_35312[(1)] = (13));

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
});})(c__33394__auto___35283,tc,fc))
;
return ((function (switch__33298__auto__,c__33394__auto___35283,tc,fc){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_33754 = [null,null,null,null,null,null,null,null,null];
(statearr_33754[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_33754[(1)] = (1));

return statearr_33754;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_33736){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33736);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33755){if((e33755 instanceof Object)){
var ex__33302__auto__ = e33755;
var statearr_33756_35313 = state_33736;
(statearr_33756_35313[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35314 = state_33736;
state_33736 = G__35314;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35283,tc,fc))
})();
var state__33396__auto__ = (function (){var statearr_33757 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33757[(6)] = c__33394__auto___35283);

return statearr_33757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35283,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto__){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto__){
return (function (state_33778){
var state_val_33779 = (state_33778[(1)]);
if((state_val_33779 === (7))){
var inst_33774 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
var statearr_33780_35315 = state_33778__$1;
(statearr_33780_35315[(2)] = inst_33774);

(statearr_33780_35315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (1))){
var inst_33758 = init;
var state_33778__$1 = (function (){var statearr_33781 = state_33778;
(statearr_33781[(7)] = inst_33758);

return statearr_33781;
})();
var statearr_33782_35316 = state_33778__$1;
(statearr_33782_35316[(2)] = null);

(statearr_33782_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (4))){
var inst_33761 = (state_33778[(8)]);
var inst_33761__$1 = (state_33778[(2)]);
var inst_33762 = (inst_33761__$1 == null);
var state_33778__$1 = (function (){var statearr_33783 = state_33778;
(statearr_33783[(8)] = inst_33761__$1);

return statearr_33783;
})();
if(cljs.core.truth_(inst_33762)){
var statearr_33784_35317 = state_33778__$1;
(statearr_33784_35317[(1)] = (5));

} else {
var statearr_33785_35318 = state_33778__$1;
(statearr_33785_35318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (6))){
var inst_33758 = (state_33778[(7)]);
var inst_33765 = (state_33778[(9)]);
var inst_33761 = (state_33778[(8)]);
var inst_33765__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33758,inst_33761) : f.call(null,inst_33758,inst_33761));
var inst_33766 = cljs.core.reduced_QMARK_(inst_33765__$1);
var state_33778__$1 = (function (){var statearr_33786 = state_33778;
(statearr_33786[(9)] = inst_33765__$1);

return statearr_33786;
})();
if(inst_33766){
var statearr_33787_35319 = state_33778__$1;
(statearr_33787_35319[(1)] = (8));

} else {
var statearr_33788_35320 = state_33778__$1;
(statearr_33788_35320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (3))){
var inst_33776 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33778__$1,inst_33776);
} else {
if((state_val_33779 === (2))){
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33778__$1,(4),ch);
} else {
if((state_val_33779 === (9))){
var inst_33765 = (state_33778[(9)]);
var inst_33758 = inst_33765;
var state_33778__$1 = (function (){var statearr_33789 = state_33778;
(statearr_33789[(7)] = inst_33758);

return statearr_33789;
})();
var statearr_33790_35321 = state_33778__$1;
(statearr_33790_35321[(2)] = null);

(statearr_33790_35321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (5))){
var inst_33758 = (state_33778[(7)]);
var state_33778__$1 = state_33778;
var statearr_33791_35322 = state_33778__$1;
(statearr_33791_35322[(2)] = inst_33758);

(statearr_33791_35322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (10))){
var inst_33772 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
var statearr_33792_35323 = state_33778__$1;
(statearr_33792_35323[(2)] = inst_33772);

(statearr_33792_35323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (8))){
var inst_33765 = (state_33778[(9)]);
var inst_33768 = cljs.core.deref(inst_33765);
var state_33778__$1 = state_33778;
var statearr_33793_35324 = state_33778__$1;
(statearr_33793_35324[(2)] = inst_33768);

(statearr_33793_35324[(1)] = (10));


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
});})(c__33394__auto__))
;
return ((function (switch__33298__auto__,c__33394__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33299__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33299__auto____0 = (function (){
var statearr_33794 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33794[(0)] = cljs$core$async$reduce_$_state_machine__33299__auto__);

(statearr_33794[(1)] = (1));

return statearr_33794;
});
var cljs$core$async$reduce_$_state_machine__33299__auto____1 = (function (state_33778){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33778);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33795){if((e33795 instanceof Object)){
var ex__33302__auto__ = e33795;
var statearr_33796_35332 = state_33778;
(statearr_33796_35332[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35333 = state_33778;
state_33778 = G__35333;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33299__auto__ = function(state_33778){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33299__auto____1.call(this,state_33778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33299__auto____0;
cljs$core$async$reduce_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33299__auto____1;
return cljs$core$async$reduce_$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto__))
})();
var state__33396__auto__ = (function (){var statearr_33797 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33797[(6)] = c__33394__auto__);

return statearr_33797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto__))
);

return c__33394__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto__,f__$1){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto__,f__$1){
return (function (state_33803){
var state_val_33804 = (state_33803[(1)]);
if((state_val_33804 === (1))){
var inst_33798 = cljs.core.async.reduce(f__$1,init,ch);
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33803__$1,(2),inst_33798);
} else {
if((state_val_33804 === (2))){
var inst_33800 = (state_33803[(2)]);
var inst_33801 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33800) : f__$1.call(null,inst_33800));
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33803__$1,inst_33801);
} else {
return null;
}
}
});})(c__33394__auto__,f__$1))
;
return ((function (switch__33298__auto__,c__33394__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33299__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33299__auto____0 = (function (){
var statearr_33805 = [null,null,null,null,null,null,null];
(statearr_33805[(0)] = cljs$core$async$transduce_$_state_machine__33299__auto__);

(statearr_33805[(1)] = (1));

return statearr_33805;
});
var cljs$core$async$transduce_$_state_machine__33299__auto____1 = (function (state_33803){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33803);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33806){if((e33806 instanceof Object)){
var ex__33302__auto__ = e33806;
var statearr_33807_35334 = state_33803;
(statearr_33807_35334[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35335 = state_33803;
state_33803 = G__35335;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33299__auto__ = function(state_33803){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33299__auto____1.call(this,state_33803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33299__auto____0;
cljs$core$async$transduce_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33299__auto____1;
return cljs$core$async$transduce_$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto__,f__$1))
})();
var state__33396__auto__ = (function (){var statearr_33808 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33808[(6)] = c__33394__auto__);

return statearr_33808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto__,f__$1))
);

return c__33394__auto__;
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
var G__33810 = arguments.length;
switch (G__33810) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto__){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto__){
return (function (state_33835){
var state_val_33836 = (state_33835[(1)]);
if((state_val_33836 === (7))){
var inst_33817 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33837_35341 = state_33835__$1;
(statearr_33837_35341[(2)] = inst_33817);

(statearr_33837_35341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (1))){
var inst_33811 = cljs.core.seq(coll);
var inst_33812 = inst_33811;
var state_33835__$1 = (function (){var statearr_33838 = state_33835;
(statearr_33838[(7)] = inst_33812);

return statearr_33838;
})();
var statearr_33839_35348 = state_33835__$1;
(statearr_33839_35348[(2)] = null);

(statearr_33839_35348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (4))){
var inst_33812 = (state_33835[(7)]);
var inst_33815 = cljs.core.first(inst_33812);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33835__$1,(7),ch,inst_33815);
} else {
if((state_val_33836 === (13))){
var inst_33829 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33840_35349 = state_33835__$1;
(statearr_33840_35349[(2)] = inst_33829);

(statearr_33840_35349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (6))){
var inst_33820 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
if(cljs.core.truth_(inst_33820)){
var statearr_33841_35350 = state_33835__$1;
(statearr_33841_35350[(1)] = (8));

} else {
var statearr_33842_35351 = state_33835__$1;
(statearr_33842_35351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (3))){
var inst_33833 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33835__$1,inst_33833);
} else {
if((state_val_33836 === (12))){
var state_33835__$1 = state_33835;
var statearr_33843_35352 = state_33835__$1;
(statearr_33843_35352[(2)] = null);

(statearr_33843_35352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (2))){
var inst_33812 = (state_33835[(7)]);
var state_33835__$1 = state_33835;
if(cljs.core.truth_(inst_33812)){
var statearr_33844_35353 = state_33835__$1;
(statearr_33844_35353[(1)] = (4));

} else {
var statearr_33845_35354 = state_33835__$1;
(statearr_33845_35354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (11))){
var inst_33826 = cljs.core.async.close_BANG_(ch);
var state_33835__$1 = state_33835;
var statearr_33846_35355 = state_33835__$1;
(statearr_33846_35355[(2)] = inst_33826);

(statearr_33846_35355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (9))){
var state_33835__$1 = state_33835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33847_35356 = state_33835__$1;
(statearr_33847_35356[(1)] = (11));

} else {
var statearr_33848_35357 = state_33835__$1;
(statearr_33848_35357[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (5))){
var inst_33812 = (state_33835[(7)]);
var state_33835__$1 = state_33835;
var statearr_33849_35362 = state_33835__$1;
(statearr_33849_35362[(2)] = inst_33812);

(statearr_33849_35362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (10))){
var inst_33831 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33850_35363 = state_33835__$1;
(statearr_33850_35363[(2)] = inst_33831);

(statearr_33850_35363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (8))){
var inst_33812 = (state_33835[(7)]);
var inst_33822 = cljs.core.next(inst_33812);
var inst_33812__$1 = inst_33822;
var state_33835__$1 = (function (){var statearr_33851 = state_33835;
(statearr_33851[(7)] = inst_33812__$1);

return statearr_33851;
})();
var statearr_33852_35365 = state_33835__$1;
(statearr_33852_35365[(2)] = null);

(statearr_33852_35365[(1)] = (2));


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
});})(c__33394__auto__))
;
return ((function (switch__33298__auto__,c__33394__auto__){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_33853 = [null,null,null,null,null,null,null,null];
(statearr_33853[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_33853[(1)] = (1));

return statearr_33853;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_33835){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33835);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e33854){if((e33854 instanceof Object)){
var ex__33302__auto__ = e33854;
var statearr_33855_35373 = state_33835;
(statearr_33855_35373[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35374 = state_33835;
state_33835 = G__35374;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_33835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_33835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto__))
})();
var state__33396__auto__ = (function (){var statearr_33856 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_33856[(6)] = c__33394__auto__);

return statearr_33856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto__))
);

return c__33394__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33857 = (function (ch,cs,meta33858){
this.ch = ch;
this.cs = cs;
this.meta33858 = meta33858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33859,meta33858__$1){
var self__ = this;
var _33859__$1 = this;
return (new cljs.core.async.t_cljs$core$async33857(self__.ch,self__.cs,meta33858__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33859){
var self__ = this;
var _33859__$1 = this;
return self__.meta33858;
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33858","meta33858",1001927402,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33857";

cljs.core.async.t_cljs$core$async33857.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33857");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33857.
 */
cljs.core.async.__GT_t_cljs$core$async33857 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33857(ch__$1,cs__$1,meta33858){
return (new cljs.core.async.t_cljs$core$async33857(ch__$1,cs__$1,meta33858));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33857(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33394__auto___35387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35387,cs,m,dchan,dctr,done){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35387,cs,m,dchan,dctr,done){
return (function (state_33994){
var state_val_33995 = (state_33994[(1)]);
if((state_val_33995 === (7))){
var inst_33990 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_33996_35388 = state_33994__$1;
(statearr_33996_35388[(2)] = inst_33990);

(statearr_33996_35388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (20))){
var inst_33893 = (state_33994[(7)]);
var inst_33905 = cljs.core.first(inst_33893);
var inst_33906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33905,(0),null);
var inst_33907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33905,(1),null);
var state_33994__$1 = (function (){var statearr_33997 = state_33994;
(statearr_33997[(8)] = inst_33906);

return statearr_33997;
})();
if(cljs.core.truth_(inst_33907)){
var statearr_33998_35391 = state_33994__$1;
(statearr_33998_35391[(1)] = (22));

} else {
var statearr_33999_35392 = state_33994__$1;
(statearr_33999_35392[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (27))){
var inst_33942 = (state_33994[(9)]);
var inst_33937 = (state_33994[(10)]);
var inst_33862 = (state_33994[(11)]);
var inst_33935 = (state_33994[(12)]);
var inst_33942__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33935,inst_33937);
var inst_33943 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33942__$1,inst_33862,done);
var state_33994__$1 = (function (){var statearr_34000 = state_33994;
(statearr_34000[(9)] = inst_33942__$1);

return statearr_34000;
})();
if(cljs.core.truth_(inst_33943)){
var statearr_34001_35395 = state_33994__$1;
(statearr_34001_35395[(1)] = (30));

} else {
var statearr_34002_35396 = state_33994__$1;
(statearr_34002_35396[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (1))){
var state_33994__$1 = state_33994;
var statearr_34003_35397 = state_33994__$1;
(statearr_34003_35397[(2)] = null);

(statearr_34003_35397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (24))){
var inst_33893 = (state_33994[(7)]);
var inst_33912 = (state_33994[(2)]);
var inst_33913 = cljs.core.next(inst_33893);
var inst_33871 = inst_33913;
var inst_33872 = null;
var inst_33873 = (0);
var inst_33874 = (0);
var state_33994__$1 = (function (){var statearr_34004 = state_33994;
(statearr_34004[(13)] = inst_33872);

(statearr_34004[(14)] = inst_33871);

(statearr_34004[(15)] = inst_33873);

(statearr_34004[(16)] = inst_33874);

(statearr_34004[(17)] = inst_33912);

return statearr_34004;
})();
var statearr_34005_35398 = state_33994__$1;
(statearr_34005_35398[(2)] = null);

(statearr_34005_35398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (39))){
var state_33994__$1 = state_33994;
var statearr_34009_35399 = state_33994__$1;
(statearr_34009_35399[(2)] = null);

(statearr_34009_35399[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (4))){
var inst_33862 = (state_33994[(11)]);
var inst_33862__$1 = (state_33994[(2)]);
var inst_33863 = (inst_33862__$1 == null);
var state_33994__$1 = (function (){var statearr_34010 = state_33994;
(statearr_34010[(11)] = inst_33862__$1);

return statearr_34010;
})();
if(cljs.core.truth_(inst_33863)){
var statearr_34011_35400 = state_33994__$1;
(statearr_34011_35400[(1)] = (5));

} else {
var statearr_34012_35401 = state_33994__$1;
(statearr_34012_35401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (15))){
var inst_33872 = (state_33994[(13)]);
var inst_33871 = (state_33994[(14)]);
var inst_33873 = (state_33994[(15)]);
var inst_33874 = (state_33994[(16)]);
var inst_33889 = (state_33994[(2)]);
var inst_33890 = (inst_33874 + (1));
var tmp34006 = inst_33872;
var tmp34007 = inst_33871;
var tmp34008 = inst_33873;
var inst_33871__$1 = tmp34007;
var inst_33872__$1 = tmp34006;
var inst_33873__$1 = tmp34008;
var inst_33874__$1 = inst_33890;
var state_33994__$1 = (function (){var statearr_34013 = state_33994;
(statearr_34013[(13)] = inst_33872__$1);

(statearr_34013[(18)] = inst_33889);

(statearr_34013[(14)] = inst_33871__$1);

(statearr_34013[(15)] = inst_33873__$1);

(statearr_34013[(16)] = inst_33874__$1);

return statearr_34013;
})();
var statearr_34014_35403 = state_33994__$1;
(statearr_34014_35403[(2)] = null);

(statearr_34014_35403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (21))){
var inst_33916 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34018_35404 = state_33994__$1;
(statearr_34018_35404[(2)] = inst_33916);

(statearr_34018_35404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (31))){
var inst_33942 = (state_33994[(9)]);
var inst_33946 = done(null);
var inst_33947 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33942);
var state_33994__$1 = (function (){var statearr_34019 = state_33994;
(statearr_34019[(19)] = inst_33946);

return statearr_34019;
})();
var statearr_34020_35405 = state_33994__$1;
(statearr_34020_35405[(2)] = inst_33947);

(statearr_34020_35405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (32))){
var inst_33937 = (state_33994[(10)]);
var inst_33934 = (state_33994[(20)]);
var inst_33935 = (state_33994[(12)]);
var inst_33936 = (state_33994[(21)]);
var inst_33949 = (state_33994[(2)]);
var inst_33950 = (inst_33937 + (1));
var tmp34015 = inst_33934;
var tmp34016 = inst_33935;
var tmp34017 = inst_33936;
var inst_33934__$1 = tmp34015;
var inst_33935__$1 = tmp34016;
var inst_33936__$1 = tmp34017;
var inst_33937__$1 = inst_33950;
var state_33994__$1 = (function (){var statearr_34021 = state_33994;
(statearr_34021[(10)] = inst_33937__$1);

(statearr_34021[(20)] = inst_33934__$1);

(statearr_34021[(12)] = inst_33935__$1);

(statearr_34021[(21)] = inst_33936__$1);

(statearr_34021[(22)] = inst_33949);

return statearr_34021;
})();
var statearr_34022_35407 = state_33994__$1;
(statearr_34022_35407[(2)] = null);

(statearr_34022_35407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (40))){
var inst_33962 = (state_33994[(23)]);
var inst_33966 = done(null);
var inst_33967 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33962);
var state_33994__$1 = (function (){var statearr_34023 = state_33994;
(statearr_34023[(24)] = inst_33966);

return statearr_34023;
})();
var statearr_34024_35409 = state_33994__$1;
(statearr_34024_35409[(2)] = inst_33967);

(statearr_34024_35409[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (33))){
var inst_33953 = (state_33994[(25)]);
var inst_33955 = cljs.core.chunked_seq_QMARK_(inst_33953);
var state_33994__$1 = state_33994;
if(inst_33955){
var statearr_34025_35420 = state_33994__$1;
(statearr_34025_35420[(1)] = (36));

} else {
var statearr_34026_35421 = state_33994__$1;
(statearr_34026_35421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (13))){
var inst_33883 = (state_33994[(26)]);
var inst_33886 = cljs.core.async.close_BANG_(inst_33883);
var state_33994__$1 = state_33994;
var statearr_34027_35422 = state_33994__$1;
(statearr_34027_35422[(2)] = inst_33886);

(statearr_34027_35422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (22))){
var inst_33906 = (state_33994[(8)]);
var inst_33909 = cljs.core.async.close_BANG_(inst_33906);
var state_33994__$1 = state_33994;
var statearr_34028_35423 = state_33994__$1;
(statearr_34028_35423[(2)] = inst_33909);

(statearr_34028_35423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (36))){
var inst_33953 = (state_33994[(25)]);
var inst_33957 = cljs.core.chunk_first(inst_33953);
var inst_33958 = cljs.core.chunk_rest(inst_33953);
var inst_33959 = cljs.core.count(inst_33957);
var inst_33934 = inst_33958;
var inst_33935 = inst_33957;
var inst_33936 = inst_33959;
var inst_33937 = (0);
var state_33994__$1 = (function (){var statearr_34029 = state_33994;
(statearr_34029[(10)] = inst_33937);

(statearr_34029[(20)] = inst_33934);

(statearr_34029[(12)] = inst_33935);

(statearr_34029[(21)] = inst_33936);

return statearr_34029;
})();
var statearr_34030_35430 = state_33994__$1;
(statearr_34030_35430[(2)] = null);

(statearr_34030_35430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (41))){
var inst_33953 = (state_33994[(25)]);
var inst_33969 = (state_33994[(2)]);
var inst_33970 = cljs.core.next(inst_33953);
var inst_33934 = inst_33970;
var inst_33935 = null;
var inst_33936 = (0);
var inst_33937 = (0);
var state_33994__$1 = (function (){var statearr_34031 = state_33994;
(statearr_34031[(10)] = inst_33937);

(statearr_34031[(20)] = inst_33934);

(statearr_34031[(12)] = inst_33935);

(statearr_34031[(21)] = inst_33936);

(statearr_34031[(27)] = inst_33969);

return statearr_34031;
})();
var statearr_34032_35434 = state_33994__$1;
(statearr_34032_35434[(2)] = null);

(statearr_34032_35434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (43))){
var state_33994__$1 = state_33994;
var statearr_34033_35435 = state_33994__$1;
(statearr_34033_35435[(2)] = null);

(statearr_34033_35435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (29))){
var inst_33978 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34034_35436 = state_33994__$1;
(statearr_34034_35436[(2)] = inst_33978);

(statearr_34034_35436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (44))){
var inst_33987 = (state_33994[(2)]);
var state_33994__$1 = (function (){var statearr_34035 = state_33994;
(statearr_34035[(28)] = inst_33987);

return statearr_34035;
})();
var statearr_34036_35437 = state_33994__$1;
(statearr_34036_35437[(2)] = null);

(statearr_34036_35437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (6))){
var inst_33926 = (state_33994[(29)]);
var inst_33925 = cljs.core.deref(cs);
var inst_33926__$1 = cljs.core.keys(inst_33925);
var inst_33927 = cljs.core.count(inst_33926__$1);
var inst_33928 = cljs.core.reset_BANG_(dctr,inst_33927);
var inst_33933 = cljs.core.seq(inst_33926__$1);
var inst_33934 = inst_33933;
var inst_33935 = null;
var inst_33936 = (0);
var inst_33937 = (0);
var state_33994__$1 = (function (){var statearr_34037 = state_33994;
(statearr_34037[(10)] = inst_33937);

(statearr_34037[(20)] = inst_33934);

(statearr_34037[(29)] = inst_33926__$1);

(statearr_34037[(12)] = inst_33935);

(statearr_34037[(21)] = inst_33936);

(statearr_34037[(30)] = inst_33928);

return statearr_34037;
})();
var statearr_34038_35438 = state_33994__$1;
(statearr_34038_35438[(2)] = null);

(statearr_34038_35438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (28))){
var inst_33934 = (state_33994[(20)]);
var inst_33953 = (state_33994[(25)]);
var inst_33953__$1 = cljs.core.seq(inst_33934);
var state_33994__$1 = (function (){var statearr_34039 = state_33994;
(statearr_34039[(25)] = inst_33953__$1);

return statearr_34039;
})();
if(inst_33953__$1){
var statearr_34040_35440 = state_33994__$1;
(statearr_34040_35440[(1)] = (33));

} else {
var statearr_34041_35441 = state_33994__$1;
(statearr_34041_35441[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (25))){
var inst_33937 = (state_33994[(10)]);
var inst_33936 = (state_33994[(21)]);
var inst_33939 = (inst_33937 < inst_33936);
var inst_33940 = inst_33939;
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33940)){
var statearr_34042_35442 = state_33994__$1;
(statearr_34042_35442[(1)] = (27));

} else {
var statearr_34043_35443 = state_33994__$1;
(statearr_34043_35443[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (34))){
var state_33994__$1 = state_33994;
var statearr_34044_35444 = state_33994__$1;
(statearr_34044_35444[(2)] = null);

(statearr_34044_35444[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (17))){
var state_33994__$1 = state_33994;
var statearr_34045_35448 = state_33994__$1;
(statearr_34045_35448[(2)] = null);

(statearr_34045_35448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (3))){
var inst_33992 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33994__$1,inst_33992);
} else {
if((state_val_33995 === (12))){
var inst_33921 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34046_35461 = state_33994__$1;
(statearr_34046_35461[(2)] = inst_33921);

(statearr_34046_35461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (2))){
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33994__$1,(4),ch);
} else {
if((state_val_33995 === (23))){
var state_33994__$1 = state_33994;
var statearr_34047_35462 = state_33994__$1;
(statearr_34047_35462[(2)] = null);

(statearr_34047_35462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (35))){
var inst_33976 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34048_35463 = state_33994__$1;
(statearr_34048_35463[(2)] = inst_33976);

(statearr_34048_35463[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (19))){
var inst_33893 = (state_33994[(7)]);
var inst_33897 = cljs.core.chunk_first(inst_33893);
var inst_33898 = cljs.core.chunk_rest(inst_33893);
var inst_33899 = cljs.core.count(inst_33897);
var inst_33871 = inst_33898;
var inst_33872 = inst_33897;
var inst_33873 = inst_33899;
var inst_33874 = (0);
var state_33994__$1 = (function (){var statearr_34049 = state_33994;
(statearr_34049[(13)] = inst_33872);

(statearr_34049[(14)] = inst_33871);

(statearr_34049[(15)] = inst_33873);

(statearr_34049[(16)] = inst_33874);

return statearr_34049;
})();
var statearr_34050_35464 = state_33994__$1;
(statearr_34050_35464[(2)] = null);

(statearr_34050_35464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (11))){
var inst_33893 = (state_33994[(7)]);
var inst_33871 = (state_33994[(14)]);
var inst_33893__$1 = cljs.core.seq(inst_33871);
var state_33994__$1 = (function (){var statearr_34051 = state_33994;
(statearr_34051[(7)] = inst_33893__$1);

return statearr_34051;
})();
if(inst_33893__$1){
var statearr_34052_35465 = state_33994__$1;
(statearr_34052_35465[(1)] = (16));

} else {
var statearr_34053_35466 = state_33994__$1;
(statearr_34053_35466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (9))){
var inst_33923 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34054_35467 = state_33994__$1;
(statearr_34054_35467[(2)] = inst_33923);

(statearr_34054_35467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (5))){
var inst_33869 = cljs.core.deref(cs);
var inst_33870 = cljs.core.seq(inst_33869);
var inst_33871 = inst_33870;
var inst_33872 = null;
var inst_33873 = (0);
var inst_33874 = (0);
var state_33994__$1 = (function (){var statearr_34055 = state_33994;
(statearr_34055[(13)] = inst_33872);

(statearr_34055[(14)] = inst_33871);

(statearr_34055[(15)] = inst_33873);

(statearr_34055[(16)] = inst_33874);

return statearr_34055;
})();
var statearr_34056_35474 = state_33994__$1;
(statearr_34056_35474[(2)] = null);

(statearr_34056_35474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (14))){
var state_33994__$1 = state_33994;
var statearr_34057_35475 = state_33994__$1;
(statearr_34057_35475[(2)] = null);

(statearr_34057_35475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (45))){
var inst_33984 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34058_35476 = state_33994__$1;
(statearr_34058_35476[(2)] = inst_33984);

(statearr_34058_35476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (26))){
var inst_33926 = (state_33994[(29)]);
var inst_33980 = (state_33994[(2)]);
var inst_33981 = cljs.core.seq(inst_33926);
var state_33994__$1 = (function (){var statearr_34059 = state_33994;
(statearr_34059[(31)] = inst_33980);

return statearr_34059;
})();
if(inst_33981){
var statearr_34060_35477 = state_33994__$1;
(statearr_34060_35477[(1)] = (42));

} else {
var statearr_34061_35478 = state_33994__$1;
(statearr_34061_35478[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (16))){
var inst_33893 = (state_33994[(7)]);
var inst_33895 = cljs.core.chunked_seq_QMARK_(inst_33893);
var state_33994__$1 = state_33994;
if(inst_33895){
var statearr_34062_35479 = state_33994__$1;
(statearr_34062_35479[(1)] = (19));

} else {
var statearr_34063_35480 = state_33994__$1;
(statearr_34063_35480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (38))){
var inst_33973 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34064_35481 = state_33994__$1;
(statearr_34064_35481[(2)] = inst_33973);

(statearr_34064_35481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (30))){
var state_33994__$1 = state_33994;
var statearr_34065_35482 = state_33994__$1;
(statearr_34065_35482[(2)] = null);

(statearr_34065_35482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (10))){
var inst_33872 = (state_33994[(13)]);
var inst_33874 = (state_33994[(16)]);
var inst_33882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33872,inst_33874);
var inst_33883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33882,(0),null);
var inst_33884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33882,(1),null);
var state_33994__$1 = (function (){var statearr_34066 = state_33994;
(statearr_34066[(26)] = inst_33883);

return statearr_34066;
})();
if(cljs.core.truth_(inst_33884)){
var statearr_34067_35483 = state_33994__$1;
(statearr_34067_35483[(1)] = (13));

} else {
var statearr_34068_35484 = state_33994__$1;
(statearr_34068_35484[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (18))){
var inst_33919 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34069_35485 = state_33994__$1;
(statearr_34069_35485[(2)] = inst_33919);

(statearr_34069_35485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (42))){
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33994__$1,(45),dchan);
} else {
if((state_val_33995 === (37))){
var inst_33962 = (state_33994[(23)]);
var inst_33862 = (state_33994[(11)]);
var inst_33953 = (state_33994[(25)]);
var inst_33962__$1 = cljs.core.first(inst_33953);
var inst_33963 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33962__$1,inst_33862,done);
var state_33994__$1 = (function (){var statearr_34070 = state_33994;
(statearr_34070[(23)] = inst_33962__$1);

return statearr_34070;
})();
if(cljs.core.truth_(inst_33963)){
var statearr_34071_35486 = state_33994__$1;
(statearr_34071_35486[(1)] = (39));

} else {
var statearr_34072_35493 = state_33994__$1;
(statearr_34072_35493[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (8))){
var inst_33873 = (state_33994[(15)]);
var inst_33874 = (state_33994[(16)]);
var inst_33876 = (inst_33874 < inst_33873);
var inst_33877 = inst_33876;
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33877)){
var statearr_34073_35494 = state_33994__$1;
(statearr_34073_35494[(1)] = (10));

} else {
var statearr_34074_35495 = state_33994__$1;
(statearr_34074_35495[(1)] = (11));

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
});})(c__33394__auto___35387,cs,m,dchan,dctr,done))
;
return ((function (switch__33298__auto__,c__33394__auto___35387,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33299__auto__ = null;
var cljs$core$async$mult_$_state_machine__33299__auto____0 = (function (){
var statearr_34075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34075[(0)] = cljs$core$async$mult_$_state_machine__33299__auto__);

(statearr_34075[(1)] = (1));

return statearr_34075;
});
var cljs$core$async$mult_$_state_machine__33299__auto____1 = (function (state_33994){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_33994);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34076){if((e34076 instanceof Object)){
var ex__33302__auto__ = e34076;
var statearr_34077_35496 = state_33994;
(statearr_34077_35496[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35497 = state_33994;
state_33994 = G__35497;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33299__auto__ = function(state_33994){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33299__auto____1.call(this,state_33994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33299__auto____0;
cljs$core$async$mult_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33299__auto____1;
return cljs$core$async$mult_$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35387,cs,m,dchan,dctr,done))
})();
var state__33396__auto__ = (function (){var statearr_34078 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34078[(6)] = c__33394__auto___35387);

return statearr_34078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35387,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34080 = arguments.length;
switch (G__34080) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35508 = arguments.length;
var i__4731__auto___35509 = (0);
while(true){
if((i__4731__auto___35509 < len__4730__auto___35508)){
args__4736__auto__.push((arguments[i__4731__auto___35509]));

var G__35510 = (i__4731__auto___35509 + (1));
i__4731__auto___35509 = G__35510;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34085){
var map__34086 = p__34085;
var map__34086__$1 = (((((!((map__34086 == null))))?(((((map__34086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34086):map__34086);
var opts = map__34086__$1;
var statearr_34088_35511 = state;
(statearr_34088_35511[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__34086,map__34086__$1,opts){
return (function (val){
var statearr_34089_35512 = state;
(statearr_34089_35512[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34086,map__34086__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34090_35513 = state;
(statearr_34090_35513[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34081){
var G__34082 = cljs.core.first(seq34081);
var seq34081__$1 = cljs.core.next(seq34081);
var G__34083 = cljs.core.first(seq34081__$1);
var seq34081__$2 = cljs.core.next(seq34081__$1);
var G__34084 = cljs.core.first(seq34081__$2);
var seq34081__$3 = cljs.core.next(seq34081__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34082,G__34083,G__34084,seq34081__$3);
});

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34091 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34092){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34092 = meta34092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34093,meta34092__$1){
var self__ = this;
var _34093__$1 = this;
return (new cljs.core.async.t_cljs$core$async34091(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34092__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34093){
var self__ = this;
var _34093__$1 = this;
return self__.meta34092;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34092","meta34092",265923954,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34091";

cljs.core.async.t_cljs$core$async34091.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34091");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34091.
 */
cljs.core.async.__GT_t_cljs$core$async34091 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34091(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34092){
return (new cljs.core.async.t_cljs$core$async34091(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34092));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34091(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33394__auto___35535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34195){
var state_val_34196 = (state_34195[(1)]);
if((state_val_34196 === (7))){
var inst_34110 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34197_35536 = state_34195__$1;
(statearr_34197_35536[(2)] = inst_34110);

(statearr_34197_35536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (20))){
var inst_34122 = (state_34195[(7)]);
var state_34195__$1 = state_34195;
var statearr_34198_35537 = state_34195__$1;
(statearr_34198_35537[(2)] = inst_34122);

(statearr_34198_35537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (27))){
var state_34195__$1 = state_34195;
var statearr_34199_35538 = state_34195__$1;
(statearr_34199_35538[(2)] = null);

(statearr_34199_35538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (1))){
var inst_34097 = (state_34195[(8)]);
var inst_34097__$1 = calc_state();
var inst_34099 = (inst_34097__$1 == null);
var inst_34100 = cljs.core.not(inst_34099);
var state_34195__$1 = (function (){var statearr_34200 = state_34195;
(statearr_34200[(8)] = inst_34097__$1);

return statearr_34200;
})();
if(inst_34100){
var statearr_34201_35539 = state_34195__$1;
(statearr_34201_35539[(1)] = (2));

} else {
var statearr_34202_35540 = state_34195__$1;
(statearr_34202_35540[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (24))){
var inst_34169 = (state_34195[(9)]);
var inst_34146 = (state_34195[(10)]);
var inst_34155 = (state_34195[(11)]);
var inst_34169__$1 = (inst_34146.cljs$core$IFn$_invoke$arity$1 ? inst_34146.cljs$core$IFn$_invoke$arity$1(inst_34155) : inst_34146.call(null,inst_34155));
var state_34195__$1 = (function (){var statearr_34203 = state_34195;
(statearr_34203[(9)] = inst_34169__$1);

return statearr_34203;
})();
if(cljs.core.truth_(inst_34169__$1)){
var statearr_34204_35541 = state_34195__$1;
(statearr_34204_35541[(1)] = (29));

} else {
var statearr_34205_35542 = state_34195__$1;
(statearr_34205_35542[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (4))){
var inst_34113 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34113)){
var statearr_34206_35543 = state_34195__$1;
(statearr_34206_35543[(1)] = (8));

} else {
var statearr_34207_35544 = state_34195__$1;
(statearr_34207_35544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (15))){
var inst_34140 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34140)){
var statearr_34208_35545 = state_34195__$1;
(statearr_34208_35545[(1)] = (19));

} else {
var statearr_34209_35546 = state_34195__$1;
(statearr_34209_35546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (21))){
var inst_34145 = (state_34195[(12)]);
var inst_34145__$1 = (state_34195[(2)]);
var inst_34146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34145__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34145__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34145__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34195__$1 = (function (){var statearr_34210 = state_34195;
(statearr_34210[(12)] = inst_34145__$1);

(statearr_34210[(13)] = inst_34147);

(statearr_34210[(10)] = inst_34146);

return statearr_34210;
})();
return cljs.core.async.ioc_alts_BANG_(state_34195__$1,(22),inst_34148);
} else {
if((state_val_34196 === (31))){
var inst_34177 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34177)){
var statearr_34211_35547 = state_34195__$1;
(statearr_34211_35547[(1)] = (32));

} else {
var statearr_34212_35548 = state_34195__$1;
(statearr_34212_35548[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (32))){
var inst_34154 = (state_34195[(14)]);
var state_34195__$1 = state_34195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34195__$1,(35),out,inst_34154);
} else {
if((state_val_34196 === (33))){
var inst_34145 = (state_34195[(12)]);
var inst_34122 = inst_34145;
var state_34195__$1 = (function (){var statearr_34213 = state_34195;
(statearr_34213[(7)] = inst_34122);

return statearr_34213;
})();
var statearr_34214_35552 = state_34195__$1;
(statearr_34214_35552[(2)] = null);

(statearr_34214_35552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (13))){
var inst_34122 = (state_34195[(7)]);
var inst_34129 = inst_34122.cljs$lang$protocol_mask$partition0$;
var inst_34130 = (inst_34129 & (64));
var inst_34131 = inst_34122.cljs$core$ISeq$;
var inst_34132 = (cljs.core.PROTOCOL_SENTINEL === inst_34131);
var inst_34133 = ((inst_34130) || (inst_34132));
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34133)){
var statearr_34215_35558 = state_34195__$1;
(statearr_34215_35558[(1)] = (16));

} else {
var statearr_34216_35559 = state_34195__$1;
(statearr_34216_35559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (22))){
var inst_34155 = (state_34195[(11)]);
var inst_34154 = (state_34195[(14)]);
var inst_34153 = (state_34195[(2)]);
var inst_34154__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34153,(0),null);
var inst_34155__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34153,(1),null);
var inst_34156 = (inst_34154__$1 == null);
var inst_34157 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34155__$1,change);
var inst_34158 = ((inst_34156) || (inst_34157));
var state_34195__$1 = (function (){var statearr_34217 = state_34195;
(statearr_34217[(11)] = inst_34155__$1);

(statearr_34217[(14)] = inst_34154__$1);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34158)){
var statearr_34218_35561 = state_34195__$1;
(statearr_34218_35561[(1)] = (23));

} else {
var statearr_34219_35562 = state_34195__$1;
(statearr_34219_35562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (36))){
var inst_34145 = (state_34195[(12)]);
var inst_34122 = inst_34145;
var state_34195__$1 = (function (){var statearr_34220 = state_34195;
(statearr_34220[(7)] = inst_34122);

return statearr_34220;
})();
var statearr_34221_35564 = state_34195__$1;
(statearr_34221_35564[(2)] = null);

(statearr_34221_35564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (29))){
var inst_34169 = (state_34195[(9)]);
var state_34195__$1 = state_34195;
var statearr_34222_35565 = state_34195__$1;
(statearr_34222_35565[(2)] = inst_34169);

(statearr_34222_35565[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (6))){
var state_34195__$1 = state_34195;
var statearr_34223_35566 = state_34195__$1;
(statearr_34223_35566[(2)] = false);

(statearr_34223_35566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (28))){
var inst_34165 = (state_34195[(2)]);
var inst_34166 = calc_state();
var inst_34122 = inst_34166;
var state_34195__$1 = (function (){var statearr_34224 = state_34195;
(statearr_34224[(15)] = inst_34165);

(statearr_34224[(7)] = inst_34122);

return statearr_34224;
})();
var statearr_34225_35567 = state_34195__$1;
(statearr_34225_35567[(2)] = null);

(statearr_34225_35567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (25))){
var inst_34191 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34226_35568 = state_34195__$1;
(statearr_34226_35568[(2)] = inst_34191);

(statearr_34226_35568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (34))){
var inst_34189 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34227_35569 = state_34195__$1;
(statearr_34227_35569[(2)] = inst_34189);

(statearr_34227_35569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (17))){
var state_34195__$1 = state_34195;
var statearr_34228_35570 = state_34195__$1;
(statearr_34228_35570[(2)] = false);

(statearr_34228_35570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (3))){
var state_34195__$1 = state_34195;
var statearr_34229_35571 = state_34195__$1;
(statearr_34229_35571[(2)] = false);

(statearr_34229_35571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (12))){
var inst_34193 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34195__$1,inst_34193);
} else {
if((state_val_34196 === (2))){
var inst_34097 = (state_34195[(8)]);
var inst_34102 = inst_34097.cljs$lang$protocol_mask$partition0$;
var inst_34103 = (inst_34102 & (64));
var inst_34104 = inst_34097.cljs$core$ISeq$;
var inst_34105 = (cljs.core.PROTOCOL_SENTINEL === inst_34104);
var inst_34106 = ((inst_34103) || (inst_34105));
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34106)){
var statearr_34230_35574 = state_34195__$1;
(statearr_34230_35574[(1)] = (5));

} else {
var statearr_34231_35575 = state_34195__$1;
(statearr_34231_35575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (23))){
var inst_34154 = (state_34195[(14)]);
var inst_34160 = (inst_34154 == null);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34160)){
var statearr_34232_35577 = state_34195__$1;
(statearr_34232_35577[(1)] = (26));

} else {
var statearr_34233_35578 = state_34195__$1;
(statearr_34233_35578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (35))){
var inst_34180 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34180)){
var statearr_34234_35579 = state_34195__$1;
(statearr_34234_35579[(1)] = (36));

} else {
var statearr_34235_35580 = state_34195__$1;
(statearr_34235_35580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (19))){
var inst_34122 = (state_34195[(7)]);
var inst_34142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34122);
var state_34195__$1 = state_34195;
var statearr_34236_35581 = state_34195__$1;
(statearr_34236_35581[(2)] = inst_34142);

(statearr_34236_35581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (11))){
var inst_34122 = (state_34195[(7)]);
var inst_34126 = (inst_34122 == null);
var inst_34127 = cljs.core.not(inst_34126);
var state_34195__$1 = state_34195;
if(inst_34127){
var statearr_34237_35583 = state_34195__$1;
(statearr_34237_35583[(1)] = (13));

} else {
var statearr_34238_35584 = state_34195__$1;
(statearr_34238_35584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (9))){
var inst_34097 = (state_34195[(8)]);
var state_34195__$1 = state_34195;
var statearr_34239_35585 = state_34195__$1;
(statearr_34239_35585[(2)] = inst_34097);

(statearr_34239_35585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (5))){
var state_34195__$1 = state_34195;
var statearr_34240_35586 = state_34195__$1;
(statearr_34240_35586[(2)] = true);

(statearr_34240_35586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (14))){
var state_34195__$1 = state_34195;
var statearr_34241_35588 = state_34195__$1;
(statearr_34241_35588[(2)] = false);

(statearr_34241_35588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (26))){
var inst_34155 = (state_34195[(11)]);
var inst_34162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34155);
var state_34195__$1 = state_34195;
var statearr_34242_35607 = state_34195__$1;
(statearr_34242_35607[(2)] = inst_34162);

(statearr_34242_35607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (16))){
var state_34195__$1 = state_34195;
var statearr_34243_35609 = state_34195__$1;
(statearr_34243_35609[(2)] = true);

(statearr_34243_35609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (38))){
var inst_34185 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34244_35613 = state_34195__$1;
(statearr_34244_35613[(2)] = inst_34185);

(statearr_34244_35613[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (30))){
var inst_34147 = (state_34195[(13)]);
var inst_34146 = (state_34195[(10)]);
var inst_34155 = (state_34195[(11)]);
var inst_34172 = cljs.core.empty_QMARK_(inst_34146);
var inst_34173 = (inst_34147.cljs$core$IFn$_invoke$arity$1 ? inst_34147.cljs$core$IFn$_invoke$arity$1(inst_34155) : inst_34147.call(null,inst_34155));
var inst_34174 = cljs.core.not(inst_34173);
var inst_34175 = ((inst_34172) && (inst_34174));
var state_34195__$1 = state_34195;
var statearr_34245_35622 = state_34195__$1;
(statearr_34245_35622[(2)] = inst_34175);

(statearr_34245_35622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (10))){
var inst_34097 = (state_34195[(8)]);
var inst_34118 = (state_34195[(2)]);
var inst_34119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34118,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34118,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34118,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34122 = inst_34097;
var state_34195__$1 = (function (){var statearr_34246 = state_34195;
(statearr_34246[(7)] = inst_34122);

(statearr_34246[(16)] = inst_34121);

(statearr_34246[(17)] = inst_34119);

(statearr_34246[(18)] = inst_34120);

return statearr_34246;
})();
var statearr_34247_35631 = state_34195__$1;
(statearr_34247_35631[(2)] = null);

(statearr_34247_35631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (18))){
var inst_34137 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34248_35636 = state_34195__$1;
(statearr_34248_35636[(2)] = inst_34137);

(statearr_34248_35636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (37))){
var state_34195__$1 = state_34195;
var statearr_34249_35637 = state_34195__$1;
(statearr_34249_35637[(2)] = null);

(statearr_34249_35637[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (8))){
var inst_34097 = (state_34195[(8)]);
var inst_34115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34097);
var state_34195__$1 = state_34195;
var statearr_34250_35638 = state_34195__$1;
(statearr_34250_35638[(2)] = inst_34115);

(statearr_34250_35638[(1)] = (10));


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
});})(c__33394__auto___35535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33298__auto__,c__33394__auto___35535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33299__auto__ = null;
var cljs$core$async$mix_$_state_machine__33299__auto____0 = (function (){
var statearr_34251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34251[(0)] = cljs$core$async$mix_$_state_machine__33299__auto__);

(statearr_34251[(1)] = (1));

return statearr_34251;
});
var cljs$core$async$mix_$_state_machine__33299__auto____1 = (function (state_34195){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34195);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34252){if((e34252 instanceof Object)){
var ex__33302__auto__ = e34252;
var statearr_34253_35640 = state_34195;
(statearr_34253_35640[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35647 = state_34195;
state_34195 = G__35647;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33299__auto__ = function(state_34195){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33299__auto____1.call(this,state_34195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33299__auto____0;
cljs$core$async$mix_$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33299__auto____1;
return cljs$core$async$mix_$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33396__auto__ = (function (){var statearr_34254 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34254[(6)] = c__33394__auto___35535);

return statearr_34254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34256 = arguments.length;
switch (G__34256) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__34259 = arguments.length;
switch (G__34259) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34257_SHARP_){
if(cljs.core.truth_((p1__34257_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34257_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34257_SHARP_.call(null,topic)))){
return p1__34257_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34257_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34260 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34261){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34261 = meta34261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34262,meta34261__$1){
var self__ = this;
var _34262__$1 = this;
return (new cljs.core.async.t_cljs$core$async34260(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34261__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34262){
var self__ = this;
var _34262__$1 = this;
return self__.meta34261;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34261","meta34261",880662366,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34260";

cljs.core.async.t_cljs$core$async34260.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34260");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34260.
 */
cljs.core.async.__GT_t_cljs$core$async34260 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34261){
return (new cljs.core.async.t_cljs$core$async34260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34261));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34260(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33394__auto___35715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35715,mults,ensure_mult,p){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35715,mults,ensure_mult,p){
return (function (state_34334){
var state_val_34335 = (state_34334[(1)]);
if((state_val_34335 === (7))){
var inst_34330 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34336_35722 = state_34334__$1;
(statearr_34336_35722[(2)] = inst_34330);

(statearr_34336_35722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (20))){
var state_34334__$1 = state_34334;
var statearr_34337_35723 = state_34334__$1;
(statearr_34337_35723[(2)] = null);

(statearr_34337_35723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (1))){
var state_34334__$1 = state_34334;
var statearr_34338_35724 = state_34334__$1;
(statearr_34338_35724[(2)] = null);

(statearr_34338_35724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (24))){
var inst_34313 = (state_34334[(7)]);
var inst_34322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34313);
var state_34334__$1 = state_34334;
var statearr_34339_35725 = state_34334__$1;
(statearr_34339_35725[(2)] = inst_34322);

(statearr_34339_35725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (4))){
var inst_34265 = (state_34334[(8)]);
var inst_34265__$1 = (state_34334[(2)]);
var inst_34266 = (inst_34265__$1 == null);
var state_34334__$1 = (function (){var statearr_34340 = state_34334;
(statearr_34340[(8)] = inst_34265__$1);

return statearr_34340;
})();
if(cljs.core.truth_(inst_34266)){
var statearr_34341_35727 = state_34334__$1;
(statearr_34341_35727[(1)] = (5));

} else {
var statearr_34342_35729 = state_34334__$1;
(statearr_34342_35729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (15))){
var inst_34307 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34343_35730 = state_34334__$1;
(statearr_34343_35730[(2)] = inst_34307);

(statearr_34343_35730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (21))){
var inst_34327 = (state_34334[(2)]);
var state_34334__$1 = (function (){var statearr_34344 = state_34334;
(statearr_34344[(9)] = inst_34327);

return statearr_34344;
})();
var statearr_34345_35731 = state_34334__$1;
(statearr_34345_35731[(2)] = null);

(statearr_34345_35731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (13))){
var inst_34289 = (state_34334[(10)]);
var inst_34291 = cljs.core.chunked_seq_QMARK_(inst_34289);
var state_34334__$1 = state_34334;
if(inst_34291){
var statearr_34346_35732 = state_34334__$1;
(statearr_34346_35732[(1)] = (16));

} else {
var statearr_34347_35733 = state_34334__$1;
(statearr_34347_35733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (22))){
var inst_34319 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
if(cljs.core.truth_(inst_34319)){
var statearr_34348_35735 = state_34334__$1;
(statearr_34348_35735[(1)] = (23));

} else {
var statearr_34349_35736 = state_34334__$1;
(statearr_34349_35736[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (6))){
var inst_34315 = (state_34334[(11)]);
var inst_34265 = (state_34334[(8)]);
var inst_34313 = (state_34334[(7)]);
var inst_34313__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34265) : topic_fn.call(null,inst_34265));
var inst_34314 = cljs.core.deref(mults);
var inst_34315__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34314,inst_34313__$1);
var state_34334__$1 = (function (){var statearr_34350 = state_34334;
(statearr_34350[(11)] = inst_34315__$1);

(statearr_34350[(7)] = inst_34313__$1);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34315__$1)){
var statearr_34351_35741 = state_34334__$1;
(statearr_34351_35741[(1)] = (19));

} else {
var statearr_34352_35742 = state_34334__$1;
(statearr_34352_35742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (25))){
var inst_34324 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34353_35744 = state_34334__$1;
(statearr_34353_35744[(2)] = inst_34324);

(statearr_34353_35744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (17))){
var inst_34289 = (state_34334[(10)]);
var inst_34298 = cljs.core.first(inst_34289);
var inst_34299 = cljs.core.async.muxch_STAR_(inst_34298);
var inst_34300 = cljs.core.async.close_BANG_(inst_34299);
var inst_34301 = cljs.core.next(inst_34289);
var inst_34275 = inst_34301;
var inst_34276 = null;
var inst_34277 = (0);
var inst_34278 = (0);
var state_34334__$1 = (function (){var statearr_34354 = state_34334;
(statearr_34354[(12)] = inst_34275);

(statearr_34354[(13)] = inst_34278);

(statearr_34354[(14)] = inst_34277);

(statearr_34354[(15)] = inst_34276);

(statearr_34354[(16)] = inst_34300);

return statearr_34354;
})();
var statearr_34355_35746 = state_34334__$1;
(statearr_34355_35746[(2)] = null);

(statearr_34355_35746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (3))){
var inst_34332 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34334__$1,inst_34332);
} else {
if((state_val_34335 === (12))){
var inst_34309 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34356_35747 = state_34334__$1;
(statearr_34356_35747[(2)] = inst_34309);

(statearr_34356_35747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (2))){
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34334__$1,(4),ch);
} else {
if((state_val_34335 === (23))){
var state_34334__$1 = state_34334;
var statearr_34357_35752 = state_34334__$1;
(statearr_34357_35752[(2)] = null);

(statearr_34357_35752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (19))){
var inst_34315 = (state_34334[(11)]);
var inst_34265 = (state_34334[(8)]);
var inst_34317 = cljs.core.async.muxch_STAR_(inst_34315);
var state_34334__$1 = state_34334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34334__$1,(22),inst_34317,inst_34265);
} else {
if((state_val_34335 === (11))){
var inst_34275 = (state_34334[(12)]);
var inst_34289 = (state_34334[(10)]);
var inst_34289__$1 = cljs.core.seq(inst_34275);
var state_34334__$1 = (function (){var statearr_34358 = state_34334;
(statearr_34358[(10)] = inst_34289__$1);

return statearr_34358;
})();
if(inst_34289__$1){
var statearr_34359_35834 = state_34334__$1;
(statearr_34359_35834[(1)] = (13));

} else {
var statearr_34360_35835 = state_34334__$1;
(statearr_34360_35835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (9))){
var inst_34311 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34361_35836 = state_34334__$1;
(statearr_34361_35836[(2)] = inst_34311);

(statearr_34361_35836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (5))){
var inst_34272 = cljs.core.deref(mults);
var inst_34273 = cljs.core.vals(inst_34272);
var inst_34274 = cljs.core.seq(inst_34273);
var inst_34275 = inst_34274;
var inst_34276 = null;
var inst_34277 = (0);
var inst_34278 = (0);
var state_34334__$1 = (function (){var statearr_34362 = state_34334;
(statearr_34362[(12)] = inst_34275);

(statearr_34362[(13)] = inst_34278);

(statearr_34362[(14)] = inst_34277);

(statearr_34362[(15)] = inst_34276);

return statearr_34362;
})();
var statearr_34363_35845 = state_34334__$1;
(statearr_34363_35845[(2)] = null);

(statearr_34363_35845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (14))){
var state_34334__$1 = state_34334;
var statearr_34367_35846 = state_34334__$1;
(statearr_34367_35846[(2)] = null);

(statearr_34367_35846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (16))){
var inst_34289 = (state_34334[(10)]);
var inst_34293 = cljs.core.chunk_first(inst_34289);
var inst_34294 = cljs.core.chunk_rest(inst_34289);
var inst_34295 = cljs.core.count(inst_34293);
var inst_34275 = inst_34294;
var inst_34276 = inst_34293;
var inst_34277 = inst_34295;
var inst_34278 = (0);
var state_34334__$1 = (function (){var statearr_34368 = state_34334;
(statearr_34368[(12)] = inst_34275);

(statearr_34368[(13)] = inst_34278);

(statearr_34368[(14)] = inst_34277);

(statearr_34368[(15)] = inst_34276);

return statearr_34368;
})();
var statearr_34369_35851 = state_34334__$1;
(statearr_34369_35851[(2)] = null);

(statearr_34369_35851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (10))){
var inst_34275 = (state_34334[(12)]);
var inst_34278 = (state_34334[(13)]);
var inst_34277 = (state_34334[(14)]);
var inst_34276 = (state_34334[(15)]);
var inst_34283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34276,inst_34278);
var inst_34284 = cljs.core.async.muxch_STAR_(inst_34283);
var inst_34285 = cljs.core.async.close_BANG_(inst_34284);
var inst_34286 = (inst_34278 + (1));
var tmp34364 = inst_34275;
var tmp34365 = inst_34277;
var tmp34366 = inst_34276;
var inst_34275__$1 = tmp34364;
var inst_34276__$1 = tmp34366;
var inst_34277__$1 = tmp34365;
var inst_34278__$1 = inst_34286;
var state_34334__$1 = (function (){var statearr_34370 = state_34334;
(statearr_34370[(12)] = inst_34275__$1);

(statearr_34370[(13)] = inst_34278__$1);

(statearr_34370[(14)] = inst_34277__$1);

(statearr_34370[(15)] = inst_34276__$1);

(statearr_34370[(17)] = inst_34285);

return statearr_34370;
})();
var statearr_34371_35891 = state_34334__$1;
(statearr_34371_35891[(2)] = null);

(statearr_34371_35891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (18))){
var inst_34304 = (state_34334[(2)]);
var state_34334__$1 = state_34334;
var statearr_34372_35896 = state_34334__$1;
(statearr_34372_35896[(2)] = inst_34304);

(statearr_34372_35896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34335 === (8))){
var inst_34278 = (state_34334[(13)]);
var inst_34277 = (state_34334[(14)]);
var inst_34280 = (inst_34278 < inst_34277);
var inst_34281 = inst_34280;
var state_34334__$1 = state_34334;
if(cljs.core.truth_(inst_34281)){
var statearr_34373_35904 = state_34334__$1;
(statearr_34373_35904[(1)] = (10));

} else {
var statearr_34374_35905 = state_34334__$1;
(statearr_34374_35905[(1)] = (11));

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
});})(c__33394__auto___35715,mults,ensure_mult,p))
;
return ((function (switch__33298__auto__,c__33394__auto___35715,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34375[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34375[(1)] = (1));

return statearr_34375;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34334){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34334);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34376){if((e34376 instanceof Object)){
var ex__33302__auto__ = e34376;
var statearr_34377_35911 = state_34334;
(statearr_34377_35911[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35913 = state_34334;
state_34334 = G__35913;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35715,mults,ensure_mult,p))
})();
var state__33396__auto__ = (function (){var statearr_34378 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34378[(6)] = c__33394__auto___35715);

return statearr_34378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35715,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34380 = arguments.length;
switch (G__34380) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__34382 = arguments.length;
switch (G__34382) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__34384 = arguments.length;
switch (G__34384) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33394__auto___35959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___35959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___35959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var state_34423__$1 = state_34423;
var statearr_34425_35963 = state_34423__$1;
(statearr_34425_35963[(2)] = null);

(statearr_34425_35963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_35964 = state_34423__$1;
(statearr_34426_35964[(2)] = null);

(statearr_34426_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34387 = (state_34423[(7)]);
var inst_34389 = (inst_34387 < cnt);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34389)){
var statearr_34427_35968 = state_34423__$1;
(statearr_34427_35968[(1)] = (6));

} else {
var statearr_34428_35969 = state_34423__$1;
(statearr_34428_35969[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (15))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34429_35970 = state_34423__$1;
(statearr_34429_35970[(2)] = inst_34419);

(statearr_34429_35970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var inst_34412 = cljs.core.async.close_BANG_(out);
var state_34423__$1 = state_34423;
var statearr_34430_35974 = state_34423__$1;
(statearr_34430_35974[(2)] = inst_34412);

(statearr_34430_35974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var state_34423__$1 = state_34423;
var statearr_34431_35975 = state_34423__$1;
(statearr_34431_35975[(2)] = null);

(statearr_34431_35975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var inst_34409 = (state_34423[(8)]);
var inst_34409__$1 = (state_34423[(2)]);
var inst_34410 = cljs.core.some(cljs.core.nil_QMARK_,inst_34409__$1);
var state_34423__$1 = (function (){var statearr_34432 = state_34423;
(statearr_34432[(8)] = inst_34409__$1);

return statearr_34432;
})();
if(cljs.core.truth_(inst_34410)){
var statearr_34433_35977 = state_34423__$1;
(statearr_34433_35977[(1)] = (13));

} else {
var statearr_34434_35979 = state_34423__$1;
(statearr_34434_35979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var inst_34386 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34387 = (0);
var state_34423__$1 = (function (){var statearr_34435 = state_34423;
(statearr_34435[(7)] = inst_34387);

(statearr_34435[(9)] = inst_34386);

return statearr_34435;
})();
var statearr_34436_35981 = state_34423__$1;
(statearr_34436_35981[(2)] = null);

(statearr_34436_35981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (11))){
var inst_34387 = (state_34423[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34423,(10),Object,null,(9));
var inst_34396 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34387) : chs__$1.call(null,inst_34387));
var inst_34397 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34387) : done.call(null,inst_34387));
var inst_34398 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34396,inst_34397);
var state_34423__$1 = state_34423;
var statearr_34437_35982 = state_34423__$1;
(statearr_34437_35982[(2)] = inst_34398);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var inst_34387 = (state_34423[(7)]);
var inst_34400 = (state_34423[(2)]);
var inst_34401 = (inst_34387 + (1));
var inst_34387__$1 = inst_34401;
var state_34423__$1 = (function (){var statearr_34438 = state_34423;
(statearr_34438[(10)] = inst_34400);

(statearr_34438[(7)] = inst_34387__$1);

return statearr_34438;
})();
var statearr_34439_35993 = state_34423__$1;
(statearr_34439_35993[(2)] = null);

(statearr_34439_35993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var inst_34407 = (state_34423[(2)]);
var state_34423__$1 = (function (){var statearr_34440 = state_34423;
(statearr_34440[(11)] = inst_34407);

return statearr_34440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(12),dchan);
} else {
if((state_val_34424 === (14))){
var inst_34409 = (state_34423[(8)]);
var inst_34414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34409);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(16),out,inst_34414);
} else {
if((state_val_34424 === (16))){
var inst_34416 = (state_34423[(2)]);
var state_34423__$1 = (function (){var statearr_34441 = state_34423;
(statearr_34441[(12)] = inst_34416);

return statearr_34441;
})();
var statearr_34442_35998 = state_34423__$1;
(statearr_34442_35998[(2)] = null);

(statearr_34442_35998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34391 = (state_34423[(2)]);
var inst_34392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34423__$1 = (function (){var statearr_34443 = state_34423;
(statearr_34443[(13)] = inst_34391);

return statearr_34443;
})();
var statearr_34444_36003 = state_34423__$1;
(statearr_34444_36003[(2)] = inst_34392);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34405 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34445_36005 = state_34423__$1;
(statearr_34445_36005[(2)] = inst_34405);

(statearr_34445_36005[(1)] = (5));


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
});})(c__33394__auto___35959,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33298__auto__,c__33394__auto___35959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34446[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34446[(1)] = (1));

return statearr_34446;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34423){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34423);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34447){if((e34447 instanceof Object)){
var ex__33302__auto__ = e34447;
var statearr_34448_36007 = state_34423;
(statearr_34448_36007[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36008 = state_34423;
state_34423 = G__36008;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___35959,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33396__auto__ = (function (){var statearr_34449 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34449[(6)] = c__33394__auto___35959);

return statearr_34449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___35959,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34452 = arguments.length;
switch (G__34452) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33394__auto___36011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36011,out){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36011,out){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (7))){
var inst_34464 = (state_34484[(7)]);
var inst_34463 = (state_34484[(8)]);
var inst_34463__$1 = (state_34484[(2)]);
var inst_34464__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34463__$1,(0),null);
var inst_34465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34463__$1,(1),null);
var inst_34466 = (inst_34464__$1 == null);
var state_34484__$1 = (function (){var statearr_34486 = state_34484;
(statearr_34486[(7)] = inst_34464__$1);

(statearr_34486[(8)] = inst_34463__$1);

(statearr_34486[(9)] = inst_34465);

return statearr_34486;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34487_36019 = state_34484__$1;
(statearr_34487_36019[(1)] = (8));

} else {
var statearr_34488_36020 = state_34484__$1;
(statearr_34488_36020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (1))){
var inst_34453 = cljs.core.vec(chs);
var inst_34454 = inst_34453;
var state_34484__$1 = (function (){var statearr_34489 = state_34484;
(statearr_34489[(10)] = inst_34454);

return statearr_34489;
})();
var statearr_34490_36021 = state_34484__$1;
(statearr_34490_36021[(2)] = null);

(statearr_34490_36021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (4))){
var inst_34454 = (state_34484[(10)]);
var state_34484__$1 = state_34484;
return cljs.core.async.ioc_alts_BANG_(state_34484__$1,(7),inst_34454);
} else {
if((state_val_34485 === (6))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34491_36022 = state_34484__$1;
(statearr_34491_36022[(2)] = inst_34480);

(statearr_34491_36022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (3))){
var inst_34482 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34484__$1,inst_34482);
} else {
if((state_val_34485 === (2))){
var inst_34454 = (state_34484[(10)]);
var inst_34456 = cljs.core.count(inst_34454);
var inst_34457 = (inst_34456 > (0));
var state_34484__$1 = state_34484;
if(cljs.core.truth_(inst_34457)){
var statearr_34493_36023 = state_34484__$1;
(statearr_34493_36023[(1)] = (4));

} else {
var statearr_34494_36024 = state_34484__$1;
(statearr_34494_36024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (11))){
var inst_34454 = (state_34484[(10)]);
var inst_34473 = (state_34484[(2)]);
var tmp34492 = inst_34454;
var inst_34454__$1 = tmp34492;
var state_34484__$1 = (function (){var statearr_34495 = state_34484;
(statearr_34495[(10)] = inst_34454__$1);

(statearr_34495[(11)] = inst_34473);

return statearr_34495;
})();
var statearr_34496_36025 = state_34484__$1;
(statearr_34496_36025[(2)] = null);

(statearr_34496_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (9))){
var inst_34464 = (state_34484[(7)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34484__$1,(11),out,inst_34464);
} else {
if((state_val_34485 === (5))){
var inst_34478 = cljs.core.async.close_BANG_(out);
var state_34484__$1 = state_34484;
var statearr_34497_36026 = state_34484__$1;
(statearr_34497_36026[(2)] = inst_34478);

(statearr_34497_36026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (10))){
var inst_34476 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34498_36031 = state_34484__$1;
(statearr_34498_36031[(2)] = inst_34476);

(statearr_34498_36031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (8))){
var inst_34454 = (state_34484[(10)]);
var inst_34464 = (state_34484[(7)]);
var inst_34463 = (state_34484[(8)]);
var inst_34465 = (state_34484[(9)]);
var inst_34468 = (function (){var cs = inst_34454;
var vec__34459 = inst_34463;
var v = inst_34464;
var c = inst_34465;
return ((function (cs,vec__34459,v,c,inst_34454,inst_34464,inst_34463,inst_34465,state_val_34485,c__33394__auto___36011,out){
return (function (p1__34450_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34450_SHARP_);
});
;})(cs,vec__34459,v,c,inst_34454,inst_34464,inst_34463,inst_34465,state_val_34485,c__33394__auto___36011,out))
})();
var inst_34469 = cljs.core.filterv(inst_34468,inst_34454);
var inst_34454__$1 = inst_34469;
var state_34484__$1 = (function (){var statearr_34499 = state_34484;
(statearr_34499[(10)] = inst_34454__$1);

return statearr_34499;
})();
var statearr_34500_36039 = state_34484__$1;
(statearr_34500_36039[(2)] = null);

(statearr_34500_36039[(1)] = (2));


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
});})(c__33394__auto___36011,out))
;
return ((function (switch__33298__auto__,c__33394__auto___36011,out){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34501[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34501[(1)] = (1));

return statearr_34501;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34484){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34484);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object)){
var ex__33302__auto__ = e34502;
var statearr_34503_36044 = state_34484;
(statearr_34503_36044[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36045 = state_34484;
state_34484 = G__36045;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36011,out))
})();
var state__33396__auto__ = (function (){var statearr_34504 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34504[(6)] = c__33394__auto___36011);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36011,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__34506 = arguments.length;
switch (G__34506) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33394__auto___36047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36047,out){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36047,out){
return (function (state_34530){
var state_val_34531 = (state_34530[(1)]);
if((state_val_34531 === (7))){
var inst_34512 = (state_34530[(7)]);
var inst_34512__$1 = (state_34530[(2)]);
var inst_34513 = (inst_34512__$1 == null);
var inst_34514 = cljs.core.not(inst_34513);
var state_34530__$1 = (function (){var statearr_34532 = state_34530;
(statearr_34532[(7)] = inst_34512__$1);

return statearr_34532;
})();
if(inst_34514){
var statearr_34533_36048 = state_34530__$1;
(statearr_34533_36048[(1)] = (8));

} else {
var statearr_34534_36049 = state_34530__$1;
(statearr_34534_36049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (1))){
var inst_34507 = (0);
var state_34530__$1 = (function (){var statearr_34535 = state_34530;
(statearr_34535[(8)] = inst_34507);

return statearr_34535;
})();
var statearr_34536_36050 = state_34530__$1;
(statearr_34536_36050[(2)] = null);

(statearr_34536_36050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (4))){
var state_34530__$1 = state_34530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34530__$1,(7),ch);
} else {
if((state_val_34531 === (6))){
var inst_34525 = (state_34530[(2)]);
var state_34530__$1 = state_34530;
var statearr_34537_36058 = state_34530__$1;
(statearr_34537_36058[(2)] = inst_34525);

(statearr_34537_36058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (3))){
var inst_34527 = (state_34530[(2)]);
var inst_34528 = cljs.core.async.close_BANG_(out);
var state_34530__$1 = (function (){var statearr_34538 = state_34530;
(statearr_34538[(9)] = inst_34527);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34530__$1,inst_34528);
} else {
if((state_val_34531 === (2))){
var inst_34507 = (state_34530[(8)]);
var inst_34509 = (inst_34507 < n);
var state_34530__$1 = state_34530;
if(cljs.core.truth_(inst_34509)){
var statearr_34539_36073 = state_34530__$1;
(statearr_34539_36073[(1)] = (4));

} else {
var statearr_34540_36074 = state_34530__$1;
(statearr_34540_36074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (11))){
var inst_34507 = (state_34530[(8)]);
var inst_34517 = (state_34530[(2)]);
var inst_34518 = (inst_34507 + (1));
var inst_34507__$1 = inst_34518;
var state_34530__$1 = (function (){var statearr_34541 = state_34530;
(statearr_34541[(8)] = inst_34507__$1);

(statearr_34541[(10)] = inst_34517);

return statearr_34541;
})();
var statearr_34542_36075 = state_34530__$1;
(statearr_34542_36075[(2)] = null);

(statearr_34542_36075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (9))){
var state_34530__$1 = state_34530;
var statearr_34543_36076 = state_34530__$1;
(statearr_34543_36076[(2)] = null);

(statearr_34543_36076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (5))){
var state_34530__$1 = state_34530;
var statearr_34544_36077 = state_34530__$1;
(statearr_34544_36077[(2)] = null);

(statearr_34544_36077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (10))){
var inst_34522 = (state_34530[(2)]);
var state_34530__$1 = state_34530;
var statearr_34545_36078 = state_34530__$1;
(statearr_34545_36078[(2)] = inst_34522);

(statearr_34545_36078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34531 === (8))){
var inst_34512 = (state_34530[(7)]);
var state_34530__$1 = state_34530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34530__$1,(11),out,inst_34512);
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
});})(c__33394__auto___36047,out))
;
return ((function (switch__33298__auto__,c__33394__auto___36047,out){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34546[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34546[(1)] = (1));

return statearr_34546;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34530){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34530);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34547){if((e34547 instanceof Object)){
var ex__33302__auto__ = e34547;
var statearr_34548_36080 = state_34530;
(statearr_34548_36080[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36081 = state_34530;
state_34530 = G__36081;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36047,out))
})();
var state__33396__auto__ = (function (){var statearr_34549 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34549[(6)] = c__33394__auto___36047);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36047,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34551 = (function (f,ch,meta34552){
this.f = f;
this.ch = ch;
this.meta34552 = meta34552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34553,meta34552__$1){
var self__ = this;
var _34553__$1 = this;
return (new cljs.core.async.t_cljs$core$async34551(self__.f,self__.ch,meta34552__$1));
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34553){
var self__ = this;
var _34553__$1 = this;
return self__.meta34552;
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34554 = (function (f,ch,meta34552,_,fn1,meta34555){
this.f = f;
this.ch = ch;
this.meta34552 = meta34552;
this._ = _;
this.fn1 = fn1;
this.meta34555 = meta34555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34556,meta34555__$1){
var self__ = this;
var _34556__$1 = this;
return (new cljs.core.async.t_cljs$core$async34554(self__.f,self__.ch,self__.meta34552,self__._,self__.fn1,meta34555__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34556){
var self__ = this;
var _34556__$1 = this;
return self__.meta34555;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34550_SHARP_){
var G__34557 = (((p1__34550_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34550_SHARP_) : self__.f.call(null,p1__34550_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34557) : f1.call(null,G__34557));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34554.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34552","meta34552",-1298837368,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34551","cljs.core.async/t_cljs$core$async34551",-316805249,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34555","meta34555",190907183,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34554";

cljs.core.async.t_cljs$core$async34554.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34554");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34554.
 */
cljs.core.async.__GT_t_cljs$core$async34554 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34554(f__$1,ch__$1,meta34552__$1,___$2,fn1__$1,meta34555){
return (new cljs.core.async.t_cljs$core$async34554(f__$1,ch__$1,meta34552__$1,___$2,fn1__$1,meta34555));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34554(self__.f,self__.ch,self__.meta34552,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34558 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34558) : self__.f.call(null,G__34558));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34552","meta34552",-1298837368,null)], null);
});

cljs.core.async.t_cljs$core$async34551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34551";

cljs.core.async.t_cljs$core$async34551.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34551");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34551.
 */
cljs.core.async.__GT_t_cljs$core$async34551 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34551(f__$1,ch__$1,meta34552){
return (new cljs.core.async.t_cljs$core$async34551(f__$1,ch__$1,meta34552));
});

}

return (new cljs.core.async.t_cljs$core$async34551(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34559 = (function (f,ch,meta34560){
this.f = f;
this.ch = ch;
this.meta34560 = meta34560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34561,meta34560__$1){
var self__ = this;
var _34561__$1 = this;
return (new cljs.core.async.t_cljs$core$async34559(self__.f,self__.ch,meta34560__$1));
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34561){
var self__ = this;
var _34561__$1 = this;
return self__.meta34560;
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34560","meta34560",303769187,null)], null);
});

cljs.core.async.t_cljs$core$async34559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34559";

cljs.core.async.t_cljs$core$async34559.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34559");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34559.
 */
cljs.core.async.__GT_t_cljs$core$async34559 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34559(f__$1,ch__$1,meta34560){
return (new cljs.core.async.t_cljs$core$async34559(f__$1,ch__$1,meta34560));
});

}

return (new cljs.core.async.t_cljs$core$async34559(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34562 = (function (p,ch,meta34563){
this.p = p;
this.ch = ch;
this.meta34563 = meta34563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34564,meta34563__$1){
var self__ = this;
var _34564__$1 = this;
return (new cljs.core.async.t_cljs$core$async34562(self__.p,self__.ch,meta34563__$1));
});

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34564){
var self__ = this;
var _34564__$1 = this;
return self__.meta34563;
});

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34563","meta34563",1931407786,null)], null);
});

cljs.core.async.t_cljs$core$async34562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34562";

cljs.core.async.t_cljs$core$async34562.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34562");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34562.
 */
cljs.core.async.__GT_t_cljs$core$async34562 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34562(p__$1,ch__$1,meta34563){
return (new cljs.core.async.t_cljs$core$async34562(p__$1,ch__$1,meta34563));
});

}

return (new cljs.core.async.t_cljs$core$async34562(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34566 = arguments.length;
switch (G__34566) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33394__auto___36333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36333,out){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36333,out){
return (function (state_34587){
var state_val_34588 = (state_34587[(1)]);
if((state_val_34588 === (7))){
var inst_34583 = (state_34587[(2)]);
var state_34587__$1 = state_34587;
var statearr_34589_36334 = state_34587__$1;
(statearr_34589_36334[(2)] = inst_34583);

(statearr_34589_36334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (1))){
var state_34587__$1 = state_34587;
var statearr_34590_36335 = state_34587__$1;
(statearr_34590_36335[(2)] = null);

(statearr_34590_36335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (4))){
var inst_34569 = (state_34587[(7)]);
var inst_34569__$1 = (state_34587[(2)]);
var inst_34570 = (inst_34569__$1 == null);
var state_34587__$1 = (function (){var statearr_34591 = state_34587;
(statearr_34591[(7)] = inst_34569__$1);

return statearr_34591;
})();
if(cljs.core.truth_(inst_34570)){
var statearr_34592_36336 = state_34587__$1;
(statearr_34592_36336[(1)] = (5));

} else {
var statearr_34593_36337 = state_34587__$1;
(statearr_34593_36337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (6))){
var inst_34569 = (state_34587[(7)]);
var inst_34574 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34569) : p.call(null,inst_34569));
var state_34587__$1 = state_34587;
if(cljs.core.truth_(inst_34574)){
var statearr_34594_36339 = state_34587__$1;
(statearr_34594_36339[(1)] = (8));

} else {
var statearr_34595_36340 = state_34587__$1;
(statearr_34595_36340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (3))){
var inst_34585 = (state_34587[(2)]);
var state_34587__$1 = state_34587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34587__$1,inst_34585);
} else {
if((state_val_34588 === (2))){
var state_34587__$1 = state_34587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34587__$1,(4),ch);
} else {
if((state_val_34588 === (11))){
var inst_34577 = (state_34587[(2)]);
var state_34587__$1 = state_34587;
var statearr_34596_36341 = state_34587__$1;
(statearr_34596_36341[(2)] = inst_34577);

(statearr_34596_36341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (9))){
var state_34587__$1 = state_34587;
var statearr_34597_36342 = state_34587__$1;
(statearr_34597_36342[(2)] = null);

(statearr_34597_36342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (5))){
var inst_34572 = cljs.core.async.close_BANG_(out);
var state_34587__$1 = state_34587;
var statearr_34598_36347 = state_34587__$1;
(statearr_34598_36347[(2)] = inst_34572);

(statearr_34598_36347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (10))){
var inst_34580 = (state_34587[(2)]);
var state_34587__$1 = (function (){var statearr_34599 = state_34587;
(statearr_34599[(8)] = inst_34580);

return statearr_34599;
})();
var statearr_34600_36348 = state_34587__$1;
(statearr_34600_36348[(2)] = null);

(statearr_34600_36348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (8))){
var inst_34569 = (state_34587[(7)]);
var state_34587__$1 = state_34587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34587__$1,(11),out,inst_34569);
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
});})(c__33394__auto___36333,out))
;
return ((function (switch__33298__auto__,c__33394__auto___36333,out){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34601 = [null,null,null,null,null,null,null,null,null];
(statearr_34601[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34601[(1)] = (1));

return statearr_34601;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34587){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34587);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34602){if((e34602 instanceof Object)){
var ex__33302__auto__ = e34602;
var statearr_34603_36359 = state_34587;
(statearr_34603_36359[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_34587;
state_34587 = G__36375;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36333,out))
})();
var state__33396__auto__ = (function (){var statearr_34604 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34604[(6)] = c__33394__auto___36333);

return statearr_34604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36333,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34606 = arguments.length;
switch (G__34606) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto__){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto__){
return (function (state_34668){
var state_val_34669 = (state_34668[(1)]);
if((state_val_34669 === (7))){
var inst_34664 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34670_36415 = state_34668__$1;
(statearr_34670_36415[(2)] = inst_34664);

(statearr_34670_36415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (20))){
var inst_34634 = (state_34668[(7)]);
var inst_34645 = (state_34668[(2)]);
var inst_34646 = cljs.core.next(inst_34634);
var inst_34620 = inst_34646;
var inst_34621 = null;
var inst_34622 = (0);
var inst_34623 = (0);
var state_34668__$1 = (function (){var statearr_34671 = state_34668;
(statearr_34671[(8)] = inst_34621);

(statearr_34671[(9)] = inst_34622);

(statearr_34671[(10)] = inst_34645);

(statearr_34671[(11)] = inst_34620);

(statearr_34671[(12)] = inst_34623);

return statearr_34671;
})();
var statearr_34672_36416 = state_34668__$1;
(statearr_34672_36416[(2)] = null);

(statearr_34672_36416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (1))){
var state_34668__$1 = state_34668;
var statearr_34673_36417 = state_34668__$1;
(statearr_34673_36417[(2)] = null);

(statearr_34673_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (4))){
var inst_34609 = (state_34668[(13)]);
var inst_34609__$1 = (state_34668[(2)]);
var inst_34610 = (inst_34609__$1 == null);
var state_34668__$1 = (function (){var statearr_34674 = state_34668;
(statearr_34674[(13)] = inst_34609__$1);

return statearr_34674;
})();
if(cljs.core.truth_(inst_34610)){
var statearr_34675_36418 = state_34668__$1;
(statearr_34675_36418[(1)] = (5));

} else {
var statearr_34676_36419 = state_34668__$1;
(statearr_34676_36419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (15))){
var state_34668__$1 = state_34668;
var statearr_34680_36421 = state_34668__$1;
(statearr_34680_36421[(2)] = null);

(statearr_34680_36421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (21))){
var state_34668__$1 = state_34668;
var statearr_34681_36422 = state_34668__$1;
(statearr_34681_36422[(2)] = null);

(statearr_34681_36422[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (13))){
var inst_34621 = (state_34668[(8)]);
var inst_34622 = (state_34668[(9)]);
var inst_34620 = (state_34668[(11)]);
var inst_34623 = (state_34668[(12)]);
var inst_34630 = (state_34668[(2)]);
var inst_34631 = (inst_34623 + (1));
var tmp34677 = inst_34621;
var tmp34678 = inst_34622;
var tmp34679 = inst_34620;
var inst_34620__$1 = tmp34679;
var inst_34621__$1 = tmp34677;
var inst_34622__$1 = tmp34678;
var inst_34623__$1 = inst_34631;
var state_34668__$1 = (function (){var statearr_34682 = state_34668;
(statearr_34682[(8)] = inst_34621__$1);

(statearr_34682[(9)] = inst_34622__$1);

(statearr_34682[(11)] = inst_34620__$1);

(statearr_34682[(12)] = inst_34623__$1);

(statearr_34682[(14)] = inst_34630);

return statearr_34682;
})();
var statearr_34683_36436 = state_34668__$1;
(statearr_34683_36436[(2)] = null);

(statearr_34683_36436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (22))){
var state_34668__$1 = state_34668;
var statearr_34684_36437 = state_34668__$1;
(statearr_34684_36437[(2)] = null);

(statearr_34684_36437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (6))){
var inst_34609 = (state_34668[(13)]);
var inst_34618 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34609) : f.call(null,inst_34609));
var inst_34619 = cljs.core.seq(inst_34618);
var inst_34620 = inst_34619;
var inst_34621 = null;
var inst_34622 = (0);
var inst_34623 = (0);
var state_34668__$1 = (function (){var statearr_34685 = state_34668;
(statearr_34685[(8)] = inst_34621);

(statearr_34685[(9)] = inst_34622);

(statearr_34685[(11)] = inst_34620);

(statearr_34685[(12)] = inst_34623);

return statearr_34685;
})();
var statearr_34686_36441 = state_34668__$1;
(statearr_34686_36441[(2)] = null);

(statearr_34686_36441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (17))){
var inst_34634 = (state_34668[(7)]);
var inst_34638 = cljs.core.chunk_first(inst_34634);
var inst_34639 = cljs.core.chunk_rest(inst_34634);
var inst_34640 = cljs.core.count(inst_34638);
var inst_34620 = inst_34639;
var inst_34621 = inst_34638;
var inst_34622 = inst_34640;
var inst_34623 = (0);
var state_34668__$1 = (function (){var statearr_34687 = state_34668;
(statearr_34687[(8)] = inst_34621);

(statearr_34687[(9)] = inst_34622);

(statearr_34687[(11)] = inst_34620);

(statearr_34687[(12)] = inst_34623);

return statearr_34687;
})();
var statearr_34688_36444 = state_34668__$1;
(statearr_34688_36444[(2)] = null);

(statearr_34688_36444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (3))){
var inst_34666 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34668__$1,inst_34666);
} else {
if((state_val_34669 === (12))){
var inst_34654 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34689_36445 = state_34668__$1;
(statearr_34689_36445[(2)] = inst_34654);

(statearr_34689_36445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (2))){
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34668__$1,(4),in$);
} else {
if((state_val_34669 === (23))){
var inst_34662 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34690_36446 = state_34668__$1;
(statearr_34690_36446[(2)] = inst_34662);

(statearr_34690_36446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (19))){
var inst_34649 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34691_36447 = state_34668__$1;
(statearr_34691_36447[(2)] = inst_34649);

(statearr_34691_36447[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (11))){
var inst_34620 = (state_34668[(11)]);
var inst_34634 = (state_34668[(7)]);
var inst_34634__$1 = cljs.core.seq(inst_34620);
var state_34668__$1 = (function (){var statearr_34692 = state_34668;
(statearr_34692[(7)] = inst_34634__$1);

return statearr_34692;
})();
if(inst_34634__$1){
var statearr_34693_36448 = state_34668__$1;
(statearr_34693_36448[(1)] = (14));

} else {
var statearr_34694_36449 = state_34668__$1;
(statearr_34694_36449[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (9))){
var inst_34656 = (state_34668[(2)]);
var inst_34657 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34668__$1 = (function (){var statearr_34695 = state_34668;
(statearr_34695[(15)] = inst_34656);

return statearr_34695;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34696_36450 = state_34668__$1;
(statearr_34696_36450[(1)] = (21));

} else {
var statearr_34697_36451 = state_34668__$1;
(statearr_34697_36451[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (5))){
var inst_34612 = cljs.core.async.close_BANG_(out);
var state_34668__$1 = state_34668;
var statearr_34698_36452 = state_34668__$1;
(statearr_34698_36452[(2)] = inst_34612);

(statearr_34698_36452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (14))){
var inst_34634 = (state_34668[(7)]);
var inst_34636 = cljs.core.chunked_seq_QMARK_(inst_34634);
var state_34668__$1 = state_34668;
if(inst_34636){
var statearr_34699_36453 = state_34668__$1;
(statearr_34699_36453[(1)] = (17));

} else {
var statearr_34700_36454 = state_34668__$1;
(statearr_34700_36454[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (16))){
var inst_34652 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34701_36455 = state_34668__$1;
(statearr_34701_36455[(2)] = inst_34652);

(statearr_34701_36455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (10))){
var inst_34621 = (state_34668[(8)]);
var inst_34623 = (state_34668[(12)]);
var inst_34628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34621,inst_34623);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34668__$1,(13),out,inst_34628);
} else {
if((state_val_34669 === (18))){
var inst_34634 = (state_34668[(7)]);
var inst_34643 = cljs.core.first(inst_34634);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34668__$1,(20),out,inst_34643);
} else {
if((state_val_34669 === (8))){
var inst_34622 = (state_34668[(9)]);
var inst_34623 = (state_34668[(12)]);
var inst_34625 = (inst_34623 < inst_34622);
var inst_34626 = inst_34625;
var state_34668__$1 = state_34668;
if(cljs.core.truth_(inst_34626)){
var statearr_34702_36456 = state_34668__$1;
(statearr_34702_36456[(1)] = (10));

} else {
var statearr_34703_36457 = state_34668__$1;
(statearr_34703_36457[(1)] = (11));

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
});})(c__33394__auto__))
;
return ((function (switch__33298__auto__,c__33394__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33299__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33299__auto____0 = (function (){
var statearr_34704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33299__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33299__auto____1 = (function (state_34668){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34668);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object)){
var ex__33302__auto__ = e34705;
var statearr_34706_36458 = state_34668;
(statearr_34706_36458[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36459 = state_34668;
state_34668 = G__36459;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33299__auto__ = function(state_34668){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33299__auto____1.call(this,state_34668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33299__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33299__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto__))
})();
var state__33396__auto__ = (function (){var statearr_34707 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34707[(6)] = c__33394__auto__);

return statearr_34707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto__))
);

return c__33394__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34709 = arguments.length;
switch (G__34709) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34711 = arguments.length;
switch (G__34711) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34713 = arguments.length;
switch (G__34713) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33394__auto___36465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36465,out){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36465,out){
return (function (state_34737){
var state_val_34738 = (state_34737[(1)]);
if((state_val_34738 === (7))){
var inst_34732 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34739_36466 = state_34737__$1;
(statearr_34739_36466[(2)] = inst_34732);

(statearr_34739_36466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (1))){
var inst_34714 = null;
var state_34737__$1 = (function (){var statearr_34740 = state_34737;
(statearr_34740[(7)] = inst_34714);

return statearr_34740;
})();
var statearr_34741_36467 = state_34737__$1;
(statearr_34741_36467[(2)] = null);

(statearr_34741_36467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (4))){
var inst_34717 = (state_34737[(8)]);
var inst_34717__$1 = (state_34737[(2)]);
var inst_34718 = (inst_34717__$1 == null);
var inst_34719 = cljs.core.not(inst_34718);
var state_34737__$1 = (function (){var statearr_34742 = state_34737;
(statearr_34742[(8)] = inst_34717__$1);

return statearr_34742;
})();
if(inst_34719){
var statearr_34743_36468 = state_34737__$1;
(statearr_34743_36468[(1)] = (5));

} else {
var statearr_34744_36469 = state_34737__$1;
(statearr_34744_36469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (6))){
var state_34737__$1 = state_34737;
var statearr_34745_36470 = state_34737__$1;
(statearr_34745_36470[(2)] = null);

(statearr_34745_36470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (3))){
var inst_34734 = (state_34737[(2)]);
var inst_34735 = cljs.core.async.close_BANG_(out);
var state_34737__$1 = (function (){var statearr_34746 = state_34737;
(statearr_34746[(9)] = inst_34734);

return statearr_34746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34737__$1,inst_34735);
} else {
if((state_val_34738 === (2))){
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34737__$1,(4),ch);
} else {
if((state_val_34738 === (11))){
var inst_34717 = (state_34737[(8)]);
var inst_34726 = (state_34737[(2)]);
var inst_34714 = inst_34717;
var state_34737__$1 = (function (){var statearr_34747 = state_34737;
(statearr_34747[(10)] = inst_34726);

(statearr_34747[(7)] = inst_34714);

return statearr_34747;
})();
var statearr_34748_36471 = state_34737__$1;
(statearr_34748_36471[(2)] = null);

(statearr_34748_36471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (9))){
var inst_34717 = (state_34737[(8)]);
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34737__$1,(11),out,inst_34717);
} else {
if((state_val_34738 === (5))){
var inst_34717 = (state_34737[(8)]);
var inst_34714 = (state_34737[(7)]);
var inst_34721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34714);
var state_34737__$1 = state_34737;
if(inst_34721){
var statearr_34750_36472 = state_34737__$1;
(statearr_34750_36472[(1)] = (8));

} else {
var statearr_34751_36473 = state_34737__$1;
(statearr_34751_36473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (10))){
var inst_34729 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34752_36474 = state_34737__$1;
(statearr_34752_36474[(2)] = inst_34729);

(statearr_34752_36474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (8))){
var inst_34714 = (state_34737[(7)]);
var tmp34749 = inst_34714;
var inst_34714__$1 = tmp34749;
var state_34737__$1 = (function (){var statearr_34753 = state_34737;
(statearr_34753[(7)] = inst_34714__$1);

return statearr_34753;
})();
var statearr_34754_36475 = state_34737__$1;
(statearr_34754_36475[(2)] = null);

(statearr_34754_36475[(1)] = (2));


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
});})(c__33394__auto___36465,out))
;
return ((function (switch__33298__auto__,c__33394__auto___36465,out){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34755[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34755[(1)] = (1));

return statearr_34755;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34737){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34737);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34756){if((e34756 instanceof Object)){
var ex__33302__auto__ = e34756;
var statearr_34757_36510 = state_34737;
(statearr_34757_36510[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36511 = state_34737;
state_34737 = G__36511;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36465,out))
})();
var state__33396__auto__ = (function (){var statearr_34758 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34758[(6)] = c__33394__auto___36465);

return statearr_34758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36465,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34760 = arguments.length;
switch (G__34760) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33394__auto___36513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36513,out){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36513,out){
return (function (state_34798){
var state_val_34799 = (state_34798[(1)]);
if((state_val_34799 === (7))){
var inst_34794 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34800_36514 = state_34798__$1;
(statearr_34800_36514[(2)] = inst_34794);

(statearr_34800_36514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (1))){
var inst_34761 = (new Array(n));
var inst_34762 = inst_34761;
var inst_34763 = (0);
var state_34798__$1 = (function (){var statearr_34801 = state_34798;
(statearr_34801[(7)] = inst_34763);

(statearr_34801[(8)] = inst_34762);

return statearr_34801;
})();
var statearr_34802_36515 = state_34798__$1;
(statearr_34802_36515[(2)] = null);

(statearr_34802_36515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (4))){
var inst_34766 = (state_34798[(9)]);
var inst_34766__$1 = (state_34798[(2)]);
var inst_34767 = (inst_34766__$1 == null);
var inst_34768 = cljs.core.not(inst_34767);
var state_34798__$1 = (function (){var statearr_34803 = state_34798;
(statearr_34803[(9)] = inst_34766__$1);

return statearr_34803;
})();
if(inst_34768){
var statearr_34804_36516 = state_34798__$1;
(statearr_34804_36516[(1)] = (5));

} else {
var statearr_34805_36517 = state_34798__$1;
(statearr_34805_36517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (15))){
var inst_34788 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34806_36518 = state_34798__$1;
(statearr_34806_36518[(2)] = inst_34788);

(statearr_34806_36518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (13))){
var state_34798__$1 = state_34798;
var statearr_34807_36519 = state_34798__$1;
(statearr_34807_36519[(2)] = null);

(statearr_34807_36519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (6))){
var inst_34763 = (state_34798[(7)]);
var inst_34784 = (inst_34763 > (0));
var state_34798__$1 = state_34798;
if(cljs.core.truth_(inst_34784)){
var statearr_34808_36520 = state_34798__$1;
(statearr_34808_36520[(1)] = (12));

} else {
var statearr_34809_36521 = state_34798__$1;
(statearr_34809_36521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (3))){
var inst_34796 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34798__$1,inst_34796);
} else {
if((state_val_34799 === (12))){
var inst_34762 = (state_34798[(8)]);
var inst_34786 = cljs.core.vec(inst_34762);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34798__$1,(15),out,inst_34786);
} else {
if((state_val_34799 === (2))){
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34798__$1,(4),ch);
} else {
if((state_val_34799 === (11))){
var inst_34778 = (state_34798[(2)]);
var inst_34779 = (new Array(n));
var inst_34762 = inst_34779;
var inst_34763 = (0);
var state_34798__$1 = (function (){var statearr_34810 = state_34798;
(statearr_34810[(10)] = inst_34778);

(statearr_34810[(7)] = inst_34763);

(statearr_34810[(8)] = inst_34762);

return statearr_34810;
})();
var statearr_34811_36522 = state_34798__$1;
(statearr_34811_36522[(2)] = null);

(statearr_34811_36522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (9))){
var inst_34762 = (state_34798[(8)]);
var inst_34776 = cljs.core.vec(inst_34762);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34798__$1,(11),out,inst_34776);
} else {
if((state_val_34799 === (5))){
var inst_34771 = (state_34798[(11)]);
var inst_34763 = (state_34798[(7)]);
var inst_34766 = (state_34798[(9)]);
var inst_34762 = (state_34798[(8)]);
var inst_34770 = (inst_34762[inst_34763] = inst_34766);
var inst_34771__$1 = (inst_34763 + (1));
var inst_34772 = (inst_34771__$1 < n);
var state_34798__$1 = (function (){var statearr_34812 = state_34798;
(statearr_34812[(11)] = inst_34771__$1);

(statearr_34812[(12)] = inst_34770);

return statearr_34812;
})();
if(cljs.core.truth_(inst_34772)){
var statearr_34813_36527 = state_34798__$1;
(statearr_34813_36527[(1)] = (8));

} else {
var statearr_34814_36528 = state_34798__$1;
(statearr_34814_36528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (14))){
var inst_34791 = (state_34798[(2)]);
var inst_34792 = cljs.core.async.close_BANG_(out);
var state_34798__$1 = (function (){var statearr_34816 = state_34798;
(statearr_34816[(13)] = inst_34791);

return statearr_34816;
})();
var statearr_34817_36529 = state_34798__$1;
(statearr_34817_36529[(2)] = inst_34792);

(statearr_34817_36529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (10))){
var inst_34782 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34818_36530 = state_34798__$1;
(statearr_34818_36530[(2)] = inst_34782);

(statearr_34818_36530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (8))){
var inst_34771 = (state_34798[(11)]);
var inst_34762 = (state_34798[(8)]);
var tmp34815 = inst_34762;
var inst_34762__$1 = tmp34815;
var inst_34763 = inst_34771;
var state_34798__$1 = (function (){var statearr_34819 = state_34798;
(statearr_34819[(7)] = inst_34763);

(statearr_34819[(8)] = inst_34762__$1);

return statearr_34819;
})();
var statearr_34820_36531 = state_34798__$1;
(statearr_34820_36531[(2)] = null);

(statearr_34820_36531[(1)] = (2));


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
});})(c__33394__auto___36513,out))
;
return ((function (switch__33298__auto__,c__33394__auto___36513,out){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34821[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34821[(1)] = (1));

return statearr_34821;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34798){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34798);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34822){if((e34822 instanceof Object)){
var ex__33302__auto__ = e34822;
var statearr_34823_36532 = state_34798;
(statearr_34823_36532[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36533 = state_34798;
state_34798 = G__36533;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36513,out))
})();
var state__33396__auto__ = (function (){var statearr_34824 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34824[(6)] = c__33394__auto___36513);

return statearr_34824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36513,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34826 = arguments.length;
switch (G__34826) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33394__auto___36535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36535,out){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36535,out){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (7))){
var inst_34864 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34870_36536 = state_34868__$1;
(statearr_34870_36536[(2)] = inst_34864);

(statearr_34870_36536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (1))){
var inst_34827 = [];
var inst_34828 = inst_34827;
var inst_34829 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34868__$1 = (function (){var statearr_34871 = state_34868;
(statearr_34871[(7)] = inst_34829);

(statearr_34871[(8)] = inst_34828);

return statearr_34871;
})();
var statearr_34872_36537 = state_34868__$1;
(statearr_34872_36537[(2)] = null);

(statearr_34872_36537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (4))){
var inst_34832 = (state_34868[(9)]);
var inst_34832__$1 = (state_34868[(2)]);
var inst_34833 = (inst_34832__$1 == null);
var inst_34834 = cljs.core.not(inst_34833);
var state_34868__$1 = (function (){var statearr_34873 = state_34868;
(statearr_34873[(9)] = inst_34832__$1);

return statearr_34873;
})();
if(inst_34834){
var statearr_34874_36538 = state_34868__$1;
(statearr_34874_36538[(1)] = (5));

} else {
var statearr_34875_36539 = state_34868__$1;
(statearr_34875_36539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (15))){
var inst_34858 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34876_36540 = state_34868__$1;
(statearr_34876_36540[(2)] = inst_34858);

(statearr_34876_36540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (13))){
var state_34868__$1 = state_34868;
var statearr_34877_36541 = state_34868__$1;
(statearr_34877_36541[(2)] = null);

(statearr_34877_36541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (6))){
var inst_34828 = (state_34868[(8)]);
var inst_34853 = inst_34828.length;
var inst_34854 = (inst_34853 > (0));
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34854)){
var statearr_34878_36542 = state_34868__$1;
(statearr_34878_36542[(1)] = (12));

} else {
var statearr_34879_36543 = state_34868__$1;
(statearr_34879_36543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34866 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (12))){
var inst_34828 = (state_34868[(8)]);
var inst_34856 = cljs.core.vec(inst_34828);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34868__$1,(15),out,inst_34856);
} else {
if((state_val_34869 === (2))){
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34868__$1,(4),ch);
} else {
if((state_val_34869 === (11))){
var inst_34836 = (state_34868[(10)]);
var inst_34832 = (state_34868[(9)]);
var inst_34846 = (state_34868[(2)]);
var inst_34847 = [];
var inst_34848 = inst_34847.push(inst_34832);
var inst_34828 = inst_34847;
var inst_34829 = inst_34836;
var state_34868__$1 = (function (){var statearr_34880 = state_34868;
(statearr_34880[(11)] = inst_34848);

(statearr_34880[(7)] = inst_34829);

(statearr_34880[(12)] = inst_34846);

(statearr_34880[(8)] = inst_34828);

return statearr_34880;
})();
var statearr_34881_36551 = state_34868__$1;
(statearr_34881_36551[(2)] = null);

(statearr_34881_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (9))){
var inst_34828 = (state_34868[(8)]);
var inst_34844 = cljs.core.vec(inst_34828);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34868__$1,(11),out,inst_34844);
} else {
if((state_val_34869 === (5))){
var inst_34829 = (state_34868[(7)]);
var inst_34836 = (state_34868[(10)]);
var inst_34832 = (state_34868[(9)]);
var inst_34836__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34832) : f.call(null,inst_34832));
var inst_34837 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34836__$1,inst_34829);
var inst_34838 = cljs.core.keyword_identical_QMARK_(inst_34829,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34839 = ((inst_34837) || (inst_34838));
var state_34868__$1 = (function (){var statearr_34882 = state_34868;
(statearr_34882[(10)] = inst_34836__$1);

return statearr_34882;
})();
if(cljs.core.truth_(inst_34839)){
var statearr_34883_36552 = state_34868__$1;
(statearr_34883_36552[(1)] = (8));

} else {
var statearr_34884_36553 = state_34868__$1;
(statearr_34884_36553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (14))){
var inst_34861 = (state_34868[(2)]);
var inst_34862 = cljs.core.async.close_BANG_(out);
var state_34868__$1 = (function (){var statearr_34886 = state_34868;
(statearr_34886[(13)] = inst_34861);

return statearr_34886;
})();
var statearr_34887_36554 = state_34868__$1;
(statearr_34887_36554[(2)] = inst_34862);

(statearr_34887_36554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (10))){
var inst_34851 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34888_36555 = state_34868__$1;
(statearr_34888_36555[(2)] = inst_34851);

(statearr_34888_36555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34828 = (state_34868[(8)]);
var inst_34836 = (state_34868[(10)]);
var inst_34832 = (state_34868[(9)]);
var inst_34841 = inst_34828.push(inst_34832);
var tmp34885 = inst_34828;
var inst_34828__$1 = tmp34885;
var inst_34829 = inst_34836;
var state_34868__$1 = (function (){var statearr_34889 = state_34868;
(statearr_34889[(7)] = inst_34829);

(statearr_34889[(8)] = inst_34828__$1);

(statearr_34889[(14)] = inst_34841);

return statearr_34889;
})();
var statearr_34890_36556 = state_34868__$1;
(statearr_34890_36556[(2)] = null);

(statearr_34890_36556[(1)] = (2));


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
});})(c__33394__auto___36535,out))
;
return ((function (switch__33298__auto__,c__33394__auto___36535,out){
return (function() {
var cljs$core$async$state_machine__33299__auto__ = null;
var cljs$core$async$state_machine__33299__auto____0 = (function (){
var statearr_34891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34891[(0)] = cljs$core$async$state_machine__33299__auto__);

(statearr_34891[(1)] = (1));

return statearr_34891;
});
var cljs$core$async$state_machine__33299__auto____1 = (function (state_34868){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_34868);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e34892){if((e34892 instanceof Object)){
var ex__33302__auto__ = e34892;
var statearr_34893_36557 = state_34868;
(statearr_34893_36557[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36558 = state_34868;
state_34868 = G__36558;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
cljs$core$async$state_machine__33299__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33299__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33299__auto____0;
cljs$core$async$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33299__auto____1;
return cljs$core$async$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36535,out))
})();
var state__33396__auto__ = (function (){var statearr_34894 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_34894[(6)] = c__33394__auto___36535);

return statearr_34894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
