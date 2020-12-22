goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50827 = arguments.length;
switch (G__50827) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50830 = (function (f,blockable,meta50831){
this.f = f;
this.blockable = blockable;
this.meta50831 = meta50831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50832,meta50831__$1){
var self__ = this;
var _50832__$1 = this;
return (new cljs.core.async.t_cljs$core$async50830(self__.f,self__.blockable,meta50831__$1));
}));

(cljs.core.async.t_cljs$core$async50830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50832){
var self__ = this;
var _50832__$1 = this;
return self__.meta50831;
}));

(cljs.core.async.t_cljs$core$async50830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50831","meta50831",-1211870954,null)], null);
}));

(cljs.core.async.t_cljs$core$async50830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50830");

(cljs.core.async.t_cljs$core$async50830.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50830.
 */
cljs.core.async.__GT_t_cljs$core$async50830 = (function cljs$core$async$__GT_t_cljs$core$async50830(f__$1,blockable__$1,meta50831){
return (new cljs.core.async.t_cljs$core$async50830(f__$1,blockable__$1,meta50831));
});

}

return (new cljs.core.async.t_cljs$core$async50830(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50856 = arguments.length;
switch (G__50856) {
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
var G__50867 = arguments.length;
switch (G__50867) {
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
var G__50884 = arguments.length;
switch (G__50884) {
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
var val_53347 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53347) : fn1.call(null,val_53347));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53347) : fn1.call(null,val_53347));
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
var G__50891 = arguments.length;
switch (G__50891) {
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
var n__4613__auto___53350 = n;
var x_53351 = (0);
while(true){
if((x_53351 < n__4613__auto___53350)){
(a[x_53351] = x_53351);

var G__53352 = (x_53351 + (1));
x_53351 = G__53352;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50926 = (function (flag,meta50927){
this.flag = flag;
this.meta50927 = meta50927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50928,meta50927__$1){
var self__ = this;
var _50928__$1 = this;
return (new cljs.core.async.t_cljs$core$async50926(self__.flag,meta50927__$1));
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50928){
var self__ = this;
var _50928__$1 = this;
return self__.meta50927;
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50927","meta50927",1000756108,null)], null);
}));

(cljs.core.async.t_cljs$core$async50926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50926");

(cljs.core.async.t_cljs$core$async50926.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50926.
 */
cljs.core.async.__GT_t_cljs$core$async50926 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50926(flag__$1,meta50927){
return (new cljs.core.async.t_cljs$core$async50926(flag__$1,meta50927));
});

}

return (new cljs.core.async.t_cljs$core$async50926(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50933 = (function (flag,cb,meta50934){
this.flag = flag;
this.cb = cb;
this.meta50934 = meta50934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50935,meta50934__$1){
var self__ = this;
var _50935__$1 = this;
return (new cljs.core.async.t_cljs$core$async50933(self__.flag,self__.cb,meta50934__$1));
}));

(cljs.core.async.t_cljs$core$async50933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50935){
var self__ = this;
var _50935__$1 = this;
return self__.meta50934;
}));

(cljs.core.async.t_cljs$core$async50933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50934","meta50934",-1204310609,null)], null);
}));

(cljs.core.async.t_cljs$core$async50933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50933");

(cljs.core.async.t_cljs$core$async50933.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50933.
 */
cljs.core.async.__GT_t_cljs$core$async50933 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50933(flag__$1,cb__$1,meta50934){
return (new cljs.core.async.t_cljs$core$async50933(flag__$1,cb__$1,meta50934));
});

}

return (new cljs.core.async.t_cljs$core$async50933(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50936_SHARP_){
var G__50938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50936_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50938) : fret.call(null,G__50938));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50937_SHARP_){
var G__50939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50937_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50939) : fret.call(null,G__50939));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53361 = (i + (1));
i = G__53361;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___53366 = arguments.length;
var i__4737__auto___53367 = (0);
while(true){
if((i__4737__auto___53367 < len__4736__auto___53366)){
args__4742__auto__.push((arguments[i__4737__auto___53367]));

var G__53368 = (i__4737__auto___53367 + (1));
i__4737__auto___53367 = G__53368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50942){
var map__50943 = p__50942;
var map__50943__$1 = (((((!((map__50943 == null))))?(((((map__50943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50943):map__50943);
var opts = map__50943__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50940){
var G__50941 = cljs.core.first(seq50940);
var seq50940__$1 = cljs.core.next(seq50940);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50941,seq50940__$1);
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
var G__50948 = arguments.length;
switch (G__50948) {
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
var c__50733__auto___53378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_50996){
var state_val_50997 = (state_50996[(1)]);
if((state_val_50997 === (7))){
var inst_50992 = (state_50996[(2)]);
var state_50996__$1 = state_50996;
var statearr_51001_53382 = state_50996__$1;
(statearr_51001_53382[(2)] = inst_50992);

(statearr_51001_53382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (1))){
var state_50996__$1 = state_50996;
var statearr_51002_53383 = state_50996__$1;
(statearr_51002_53383[(2)] = null);

(statearr_51002_53383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (4))){
var inst_50969 = (state_50996[(7)]);
var inst_50969__$1 = (state_50996[(2)]);
var inst_50973 = (inst_50969__$1 == null);
var state_50996__$1 = (function (){var statearr_51005 = state_50996;
(statearr_51005[(7)] = inst_50969__$1);

return statearr_51005;
})();
if(cljs.core.truth_(inst_50973)){
var statearr_51006_53384 = state_50996__$1;
(statearr_51006_53384[(1)] = (5));

} else {
var statearr_51007_53385 = state_50996__$1;
(statearr_51007_53385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (13))){
var state_50996__$1 = state_50996;
var statearr_51009_53386 = state_50996__$1;
(statearr_51009_53386[(2)] = null);

(statearr_51009_53386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (6))){
var inst_50969 = (state_50996[(7)]);
var state_50996__$1 = state_50996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50996__$1,(11),to,inst_50969);
} else {
if((state_val_50997 === (3))){
var inst_50994 = (state_50996[(2)]);
var state_50996__$1 = state_50996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50996__$1,inst_50994);
} else {
if((state_val_50997 === (12))){
var state_50996__$1 = state_50996;
var statearr_51016_53388 = state_50996__$1;
(statearr_51016_53388[(2)] = null);

(statearr_51016_53388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (2))){
var state_50996__$1 = state_50996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50996__$1,(4),from);
} else {
if((state_val_50997 === (11))){
var inst_50985 = (state_50996[(2)]);
var state_50996__$1 = state_50996;
if(cljs.core.truth_(inst_50985)){
var statearr_51017_53393 = state_50996__$1;
(statearr_51017_53393[(1)] = (12));

} else {
var statearr_51018_53394 = state_50996__$1;
(statearr_51018_53394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (9))){
var state_50996__$1 = state_50996;
var statearr_51019_53395 = state_50996__$1;
(statearr_51019_53395[(2)] = null);

(statearr_51019_53395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (5))){
var state_50996__$1 = state_50996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51020_53396 = state_50996__$1;
(statearr_51020_53396[(1)] = (8));

} else {
var statearr_51021_53397 = state_50996__$1;
(statearr_51021_53397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (14))){
var inst_50990 = (state_50996[(2)]);
var state_50996__$1 = state_50996;
var statearr_51022_53399 = state_50996__$1;
(statearr_51022_53399[(2)] = inst_50990);

(statearr_51022_53399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (10))){
var inst_50982 = (state_50996[(2)]);
var state_50996__$1 = state_50996;
var statearr_51026_53400 = state_50996__$1;
(statearr_51026_53400[(2)] = inst_50982);

(statearr_51026_53400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50997 === (8))){
var inst_50976 = cljs.core.async.close_BANG_(to);
var state_50996__$1 = state_50996;
var statearr_51028_53401 = state_50996__$1;
(statearr_51028_53401[(2)] = inst_50976);

(statearr_51028_53401[(1)] = (10));


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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_51029 = [null,null,null,null,null,null,null,null];
(statearr_51029[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_51029[(1)] = (1));

return statearr_51029;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_50996){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_50996);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51030){var ex__49505__auto__ = e51030;
var statearr_51031_53406 = state_50996;
(statearr_51031_53406[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_50996[(4)]))){
var statearr_51032_53407 = state_50996;
(statearr_51032_53407[(1)] = cljs.core.first((state_50996[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53410 = state_50996;
state_50996 = G__53410;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_50996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_50996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51033 = f__50734__auto__();
(statearr_51033[(6)] = c__50733__auto___53378);

return statearr_51033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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
var process = (function (p__51035){
var vec__51036 = p__51035;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51036,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51036,(1),null);
var job = vec__51036;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50733__auto___53412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51043){
var state_val_51044 = (state_51043[(1)]);
if((state_val_51044 === (1))){
var state_51043__$1 = state_51043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51043__$1,(2),res,v);
} else {
if((state_val_51044 === (2))){
var inst_51040 = (state_51043[(2)]);
var inst_51041 = cljs.core.async.close_BANG_(res);
var state_51043__$1 = (function (){var statearr_51045 = state_51043;
(statearr_51045[(7)] = inst_51040);

return statearr_51045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51043__$1,inst_51041);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0 = (function (){
var statearr_51046 = [null,null,null,null,null,null,null,null];
(statearr_51046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__);

(statearr_51046[(1)] = (1));

return statearr_51046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1 = (function (state_51043){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51043);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51048){var ex__49505__auto__ = e51048;
var statearr_51049_53417 = state_51043;
(statearr_51049_53417[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51043[(4)]))){
var statearr_51051_53418 = state_51043;
(statearr_51051_53418[(1)] = cljs.core.first((state_51043[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53419 = state_51043;
state_51043 = G__53419;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = function(state_51043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1.call(this,state_51043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51052 = f__50734__auto__();
(statearr_51052[(6)] = c__50733__auto___53412);

return statearr_51052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51053){
var vec__51055 = p__51053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51055,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51055,(1),null);
var job = vec__51055;
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
var n__4613__auto___53420 = n;
var __53421 = (0);
while(true){
if((__53421 < n__4613__auto___53420)){
var G__51058_53422 = type;
var G__51058_53423__$1 = (((G__51058_53422 instanceof cljs.core.Keyword))?G__51058_53422.fqn:null);
switch (G__51058_53423__$1) {
case "compute":
var c__50733__auto___53425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53421,c__50733__auto___53425,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async){
return (function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = ((function (__53421,c__50733__auto___53425,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async){
return (function (state_51071){
var state_val_51072 = (state_51071[(1)]);
if((state_val_51072 === (1))){
var state_51071__$1 = state_51071;
var statearr_51073_53430 = state_51071__$1;
(statearr_51073_53430[(2)] = null);

(statearr_51073_53430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51072 === (2))){
var state_51071__$1 = state_51071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51071__$1,(4),jobs);
} else {
if((state_val_51072 === (3))){
var inst_51069 = (state_51071[(2)]);
var state_51071__$1 = state_51071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51071__$1,inst_51069);
} else {
if((state_val_51072 === (4))){
var inst_51061 = (state_51071[(2)]);
var inst_51062 = process(inst_51061);
var state_51071__$1 = state_51071;
if(cljs.core.truth_(inst_51062)){
var statearr_51074_53431 = state_51071__$1;
(statearr_51074_53431[(1)] = (5));

} else {
var statearr_51075_53432 = state_51071__$1;
(statearr_51075_53432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51072 === (5))){
var state_51071__$1 = state_51071;
var statearr_51076_53433 = state_51071__$1;
(statearr_51076_53433[(2)] = null);

(statearr_51076_53433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51072 === (6))){
var state_51071__$1 = state_51071;
var statearr_51077_53434 = state_51071__$1;
(statearr_51077_53434[(2)] = null);

(statearr_51077_53434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51072 === (7))){
var inst_51067 = (state_51071[(2)]);
var state_51071__$1 = state_51071;
var statearr_51078_53435 = state_51071__$1;
(statearr_51078_53435[(2)] = inst_51067);

(statearr_51078_53435[(1)] = (3));


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
});})(__53421,c__50733__auto___53425,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async))
;
return ((function (__53421,switch__49501__auto__,c__50733__auto___53425,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0 = (function (){
var statearr_51079 = [null,null,null,null,null,null,null];
(statearr_51079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__);

(statearr_51079[(1)] = (1));

return statearr_51079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1 = (function (state_51071){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51071);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51081){var ex__49505__auto__ = e51081;
var statearr_51082_53444 = state_51071;
(statearr_51082_53444[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51071[(4)]))){
var statearr_51083_53445 = state_51071;
(statearr_51083_53445[(1)] = cljs.core.first((state_51071[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53450 = state_51071;
state_51071 = G__53450;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = function(state_51071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1.call(this,state_51071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__;
})()
;})(__53421,switch__49501__auto__,c__50733__auto___53425,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async))
})();
var state__50735__auto__ = (function (){var statearr_51086 = f__50734__auto__();
(statearr_51086[(6)] = c__50733__auto___53425);

return statearr_51086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
});})(__53421,c__50733__auto___53425,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async))
);


break;
case "async":
var c__50733__auto___53455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53421,c__50733__auto___53455,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async){
return (function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = ((function (__53421,c__50733__auto___53455,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async){
return (function (state_51103){
var state_val_51104 = (state_51103[(1)]);
if((state_val_51104 === (1))){
var state_51103__$1 = state_51103;
var statearr_51105_53456 = state_51103__$1;
(statearr_51105_53456[(2)] = null);

(statearr_51105_53456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (2))){
var state_51103__$1 = state_51103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51103__$1,(4),jobs);
} else {
if((state_val_51104 === (3))){
var inst_51101 = (state_51103[(2)]);
var state_51103__$1 = state_51103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51103__$1,inst_51101);
} else {
if((state_val_51104 === (4))){
var inst_51089 = (state_51103[(2)]);
var inst_51090 = async(inst_51089);
var state_51103__$1 = state_51103;
if(cljs.core.truth_(inst_51090)){
var statearr_51112_53458 = state_51103__$1;
(statearr_51112_53458[(1)] = (5));

} else {
var statearr_51113_53459 = state_51103__$1;
(statearr_51113_53459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (5))){
var state_51103__$1 = state_51103;
var statearr_51114_53460 = state_51103__$1;
(statearr_51114_53460[(2)] = null);

(statearr_51114_53460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (6))){
var state_51103__$1 = state_51103;
var statearr_51115_53462 = state_51103__$1;
(statearr_51115_53462[(2)] = null);

(statearr_51115_53462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (7))){
var inst_51095 = (state_51103[(2)]);
var state_51103__$1 = state_51103;
var statearr_51116_53463 = state_51103__$1;
(statearr_51116_53463[(2)] = inst_51095);

(statearr_51116_53463[(1)] = (3));


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
});})(__53421,c__50733__auto___53455,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async))
;
return ((function (__53421,switch__49501__auto__,c__50733__auto___53455,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0 = (function (){
var statearr_51121 = [null,null,null,null,null,null,null];
(statearr_51121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__);

(statearr_51121[(1)] = (1));

return statearr_51121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1 = (function (state_51103){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51103);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51122){var ex__49505__auto__ = e51122;
var statearr_51123_53466 = state_51103;
(statearr_51123_53466[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51103[(4)]))){
var statearr_51124_53469 = state_51103;
(statearr_51124_53469[(1)] = cljs.core.first((state_51103[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53472 = state_51103;
state_51103 = G__53472;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = function(state_51103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1.call(this,state_51103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__;
})()
;})(__53421,switch__49501__auto__,c__50733__auto___53455,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async))
})();
var state__50735__auto__ = (function (){var statearr_51128 = f__50734__auto__();
(statearr_51128[(6)] = c__50733__auto___53455);

return statearr_51128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
});})(__53421,c__50733__auto___53455,G__51058_53422,G__51058_53423__$1,n__4613__auto___53420,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51058_53423__$1)].join('')));

}

var G__53478 = (__53421 + (1));
__53421 = G__53478;
continue;
} else {
}
break;
}

var c__50733__auto___53481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51157){
var state_val_51158 = (state_51157[(1)]);
if((state_val_51158 === (7))){
var inst_51149 = (state_51157[(2)]);
var state_51157__$1 = state_51157;
var statearr_51162_53483 = state_51157__$1;
(statearr_51162_53483[(2)] = inst_51149);

(statearr_51162_53483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (1))){
var state_51157__$1 = state_51157;
var statearr_51163_53484 = state_51157__$1;
(statearr_51163_53484[(2)] = null);

(statearr_51163_53484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (4))){
var inst_51134 = (state_51157[(7)]);
var inst_51134__$1 = (state_51157[(2)]);
var inst_51135 = (inst_51134__$1 == null);
var state_51157__$1 = (function (){var statearr_51167 = state_51157;
(statearr_51167[(7)] = inst_51134__$1);

return statearr_51167;
})();
if(cljs.core.truth_(inst_51135)){
var statearr_51168_53494 = state_51157__$1;
(statearr_51168_53494[(1)] = (5));

} else {
var statearr_51169_53495 = state_51157__$1;
(statearr_51169_53495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (6))){
var inst_51139 = (state_51157[(8)]);
var inst_51134 = (state_51157[(7)]);
var inst_51139__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51141 = [inst_51134,inst_51139__$1];
var inst_51142 = (new cljs.core.PersistentVector(null,2,(5),inst_51140,inst_51141,null));
var state_51157__$1 = (function (){var statearr_51170 = state_51157;
(statearr_51170[(8)] = inst_51139__$1);

return statearr_51170;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51157__$1,(8),jobs,inst_51142);
} else {
if((state_val_51158 === (3))){
var inst_51151 = (state_51157[(2)]);
var state_51157__$1 = state_51157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51157__$1,inst_51151);
} else {
if((state_val_51158 === (2))){
var state_51157__$1 = state_51157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51157__$1,(4),from);
} else {
if((state_val_51158 === (9))){
var inst_51146 = (state_51157[(2)]);
var state_51157__$1 = (function (){var statearr_51173 = state_51157;
(statearr_51173[(9)] = inst_51146);

return statearr_51173;
})();
var statearr_51174_53500 = state_51157__$1;
(statearr_51174_53500[(2)] = null);

(statearr_51174_53500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (5))){
var inst_51137 = cljs.core.async.close_BANG_(jobs);
var state_51157__$1 = state_51157;
var statearr_51175_53501 = state_51157__$1;
(statearr_51175_53501[(2)] = inst_51137);

(statearr_51175_53501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (8))){
var inst_51139 = (state_51157[(8)]);
var inst_51144 = (state_51157[(2)]);
var state_51157__$1 = (function (){var statearr_51180 = state_51157;
(statearr_51180[(10)] = inst_51144);

return statearr_51180;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51157__$1,(9),results,inst_51139);
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
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0 = (function (){
var statearr_51181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__);

(statearr_51181[(1)] = (1));

return statearr_51181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1 = (function (state_51157){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51157);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51182){var ex__49505__auto__ = e51182;
var statearr_51183_53505 = state_51157;
(statearr_51183_53505[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51157[(4)]))){
var statearr_51184_53506 = state_51157;
(statearr_51184_53506[(1)] = cljs.core.first((state_51157[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53507 = state_51157;
state_51157 = G__53507;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = function(state_51157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1.call(this,state_51157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51185 = f__50734__auto__();
(statearr_51185[(6)] = c__50733__auto___53481);

return statearr_51185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


var c__50733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51230){
var state_val_51231 = (state_51230[(1)]);
if((state_val_51231 === (7))){
var inst_51226 = (state_51230[(2)]);
var state_51230__$1 = state_51230;
var statearr_51235_53508 = state_51230__$1;
(statearr_51235_53508[(2)] = inst_51226);

(statearr_51235_53508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (20))){
var state_51230__$1 = state_51230;
var statearr_51236_53512 = state_51230__$1;
(statearr_51236_53512[(2)] = null);

(statearr_51236_53512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (1))){
var state_51230__$1 = state_51230;
var statearr_51237_53513 = state_51230__$1;
(statearr_51237_53513[(2)] = null);

(statearr_51237_53513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (4))){
var inst_51192 = (state_51230[(7)]);
var inst_51192__$1 = (state_51230[(2)]);
var inst_51193 = (inst_51192__$1 == null);
var state_51230__$1 = (function (){var statearr_51238 = state_51230;
(statearr_51238[(7)] = inst_51192__$1);

return statearr_51238;
})();
if(cljs.core.truth_(inst_51193)){
var statearr_51239_53514 = state_51230__$1;
(statearr_51239_53514[(1)] = (5));

} else {
var statearr_51240_53515 = state_51230__$1;
(statearr_51240_53515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (15))){
var inst_51205 = (state_51230[(8)]);
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51230__$1,(18),to,inst_51205);
} else {
if((state_val_51231 === (21))){
var inst_51221 = (state_51230[(2)]);
var state_51230__$1 = state_51230;
var statearr_51241_53516 = state_51230__$1;
(statearr_51241_53516[(2)] = inst_51221);

(statearr_51241_53516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (13))){
var inst_51223 = (state_51230[(2)]);
var state_51230__$1 = (function (){var statearr_51242 = state_51230;
(statearr_51242[(9)] = inst_51223);

return statearr_51242;
})();
var statearr_51243_53517 = state_51230__$1;
(statearr_51243_53517[(2)] = null);

(statearr_51243_53517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (6))){
var inst_51192 = (state_51230[(7)]);
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51230__$1,(11),inst_51192);
} else {
if((state_val_51231 === (17))){
var inst_51216 = (state_51230[(2)]);
var state_51230__$1 = state_51230;
if(cljs.core.truth_(inst_51216)){
var statearr_51245_53518 = state_51230__$1;
(statearr_51245_53518[(1)] = (19));

} else {
var statearr_51247_53519 = state_51230__$1;
(statearr_51247_53519[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (3))){
var inst_51228 = (state_51230[(2)]);
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51230__$1,inst_51228);
} else {
if((state_val_51231 === (12))){
var inst_51202 = (state_51230[(10)]);
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51230__$1,(14),inst_51202);
} else {
if((state_val_51231 === (2))){
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51230__$1,(4),results);
} else {
if((state_val_51231 === (19))){
var state_51230__$1 = state_51230;
var statearr_51250_53520 = state_51230__$1;
(statearr_51250_53520[(2)] = null);

(statearr_51250_53520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (11))){
var inst_51202 = (state_51230[(2)]);
var state_51230__$1 = (function (){var statearr_51252 = state_51230;
(statearr_51252[(10)] = inst_51202);

return statearr_51252;
})();
var statearr_51255_53521 = state_51230__$1;
(statearr_51255_53521[(2)] = null);

(statearr_51255_53521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (9))){
var state_51230__$1 = state_51230;
var statearr_51259_53522 = state_51230__$1;
(statearr_51259_53522[(2)] = null);

(statearr_51259_53522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (5))){
var state_51230__$1 = state_51230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51264_53525 = state_51230__$1;
(statearr_51264_53525[(1)] = (8));

} else {
var statearr_51266_53526 = state_51230__$1;
(statearr_51266_53526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (14))){
var inst_51205 = (state_51230[(8)]);
var inst_51205__$1 = (state_51230[(2)]);
var inst_51209 = (inst_51205__$1 == null);
var inst_51210 = cljs.core.not(inst_51209);
var state_51230__$1 = (function (){var statearr_51267 = state_51230;
(statearr_51267[(8)] = inst_51205__$1);

return statearr_51267;
})();
if(inst_51210){
var statearr_51268_53527 = state_51230__$1;
(statearr_51268_53527[(1)] = (15));

} else {
var statearr_51269_53528 = state_51230__$1;
(statearr_51269_53528[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (16))){
var state_51230__$1 = state_51230;
var statearr_51270_53529 = state_51230__$1;
(statearr_51270_53529[(2)] = false);

(statearr_51270_53529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (10))){
var inst_51199 = (state_51230[(2)]);
var state_51230__$1 = state_51230;
var statearr_51273_53534 = state_51230__$1;
(statearr_51273_53534[(2)] = inst_51199);

(statearr_51273_53534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (18))){
var inst_51213 = (state_51230[(2)]);
var state_51230__$1 = state_51230;
var statearr_51275_53535 = state_51230__$1;
(statearr_51275_53535[(2)] = inst_51213);

(statearr_51275_53535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51231 === (8))){
var inst_51196 = cljs.core.async.close_BANG_(to);
var state_51230__$1 = state_51230;
var statearr_51278_53536 = state_51230__$1;
(statearr_51278_53536[(2)] = inst_51196);

(statearr_51278_53536[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0 = (function (){
var statearr_51281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__);

(statearr_51281[(1)] = (1));

return statearr_51281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1 = (function (state_51230){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51230);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51283){var ex__49505__auto__ = e51283;
var statearr_51284_53539 = state_51230;
(statearr_51284_53539[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51230[(4)]))){
var statearr_51286_53540 = state_51230;
(statearr_51286_53540[(1)] = cljs.core.first((state_51230[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53541 = state_51230;
state_51230 = G__53541;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__ = function(state_51230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1.call(this,state_51230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51288 = f__50734__auto__();
(statearr_51288[(6)] = c__50733__auto__);

return statearr_51288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

return c__50733__auto__;
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
var G__51294 = arguments.length;
switch (G__51294) {
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
var G__51315 = arguments.length;
switch (G__51315) {
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
var G__51335 = arguments.length;
switch (G__51335) {
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
var c__50733__auto___53561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51371){
var state_val_51372 = (state_51371[(1)]);
if((state_val_51372 === (7))){
var inst_51367 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
var statearr_51379_53562 = state_51371__$1;
(statearr_51379_53562[(2)] = inst_51367);

(statearr_51379_53562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (1))){
var state_51371__$1 = state_51371;
var statearr_51380_53563 = state_51371__$1;
(statearr_51380_53563[(2)] = null);

(statearr_51380_53563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (4))){
var inst_51346 = (state_51371[(7)]);
var inst_51346__$1 = (state_51371[(2)]);
var inst_51347 = (inst_51346__$1 == null);
var state_51371__$1 = (function (){var statearr_51382 = state_51371;
(statearr_51382[(7)] = inst_51346__$1);

return statearr_51382;
})();
if(cljs.core.truth_(inst_51347)){
var statearr_51383_53564 = state_51371__$1;
(statearr_51383_53564[(1)] = (5));

} else {
var statearr_51384_53565 = state_51371__$1;
(statearr_51384_53565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (13))){
var state_51371__$1 = state_51371;
var statearr_51387_53566 = state_51371__$1;
(statearr_51387_53566[(2)] = null);

(statearr_51387_53566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (6))){
var inst_51346 = (state_51371[(7)]);
var inst_51354 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51346) : p.call(null,inst_51346));
var state_51371__$1 = state_51371;
if(cljs.core.truth_(inst_51354)){
var statearr_51390_53567 = state_51371__$1;
(statearr_51390_53567[(1)] = (9));

} else {
var statearr_51391_53568 = state_51371__$1;
(statearr_51391_53568[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (3))){
var inst_51369 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51371__$1,inst_51369);
} else {
if((state_val_51372 === (12))){
var state_51371__$1 = state_51371;
var statearr_51393_53572 = state_51371__$1;
(statearr_51393_53572[(2)] = null);

(statearr_51393_53572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (2))){
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51371__$1,(4),ch);
} else {
if((state_val_51372 === (11))){
var inst_51346 = (state_51371[(7)]);
var inst_51358 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51371__$1,(8),inst_51358,inst_51346);
} else {
if((state_val_51372 === (9))){
var state_51371__$1 = state_51371;
var statearr_51395_53574 = state_51371__$1;
(statearr_51395_53574[(2)] = tc);

(statearr_51395_53574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (5))){
var inst_51351 = cljs.core.async.close_BANG_(tc);
var inst_51352 = cljs.core.async.close_BANG_(fc);
var state_51371__$1 = (function (){var statearr_51396 = state_51371;
(statearr_51396[(8)] = inst_51351);

return statearr_51396;
})();
var statearr_51398_53577 = state_51371__$1;
(statearr_51398_53577[(2)] = inst_51352);

(statearr_51398_53577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (14))){
var inst_51365 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
var statearr_51400_53579 = state_51371__$1;
(statearr_51400_53579[(2)] = inst_51365);

(statearr_51400_53579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (10))){
var state_51371__$1 = state_51371;
var statearr_51401_53580 = state_51371__$1;
(statearr_51401_53580[(2)] = fc);

(statearr_51401_53580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (8))){
var inst_51360 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
if(cljs.core.truth_(inst_51360)){
var statearr_51402_53585 = state_51371__$1;
(statearr_51402_53585[(1)] = (12));

} else {
var statearr_51403_53586 = state_51371__$1;
(statearr_51403_53586[(1)] = (13));

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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_51405 = [null,null,null,null,null,null,null,null,null];
(statearr_51405[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_51405[(1)] = (1));

return statearr_51405;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_51371){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51371);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51406){var ex__49505__auto__ = e51406;
var statearr_51407_53589 = state_51371;
(statearr_51407_53589[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51371[(4)]))){
var statearr_51408_53590 = state_51371;
(statearr_51408_53590[(1)] = cljs.core.first((state_51371[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53591 = state_51371;
state_51371 = G__53591;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_51371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_51371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51410 = f__50734__auto__();
(statearr_51410[(6)] = c__50733__auto___53561);

return statearr_51410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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
var c__50733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51437){
var state_val_51438 = (state_51437[(1)]);
if((state_val_51438 === (7))){
var inst_51433 = (state_51437[(2)]);
var state_51437__$1 = state_51437;
var statearr_51439_53592 = state_51437__$1;
(statearr_51439_53592[(2)] = inst_51433);

(statearr_51439_53592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (1))){
var inst_51415 = init;
var inst_51416 = inst_51415;
var state_51437__$1 = (function (){var statearr_51440 = state_51437;
(statearr_51440[(7)] = inst_51416);

return statearr_51440;
})();
var statearr_51441_53593 = state_51437__$1;
(statearr_51441_53593[(2)] = null);

(statearr_51441_53593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (4))){
var inst_51420 = (state_51437[(8)]);
var inst_51420__$1 = (state_51437[(2)]);
var inst_51421 = (inst_51420__$1 == null);
var state_51437__$1 = (function (){var statearr_51445 = state_51437;
(statearr_51445[(8)] = inst_51420__$1);

return statearr_51445;
})();
if(cljs.core.truth_(inst_51421)){
var statearr_51446_53594 = state_51437__$1;
(statearr_51446_53594[(1)] = (5));

} else {
var statearr_51447_53595 = state_51437__$1;
(statearr_51447_53595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (6))){
var inst_51416 = (state_51437[(7)]);
var inst_51424 = (state_51437[(9)]);
var inst_51420 = (state_51437[(8)]);
var inst_51424__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51416,inst_51420) : f.call(null,inst_51416,inst_51420));
var inst_51425 = cljs.core.reduced_QMARK_(inst_51424__$1);
var state_51437__$1 = (function (){var statearr_51448 = state_51437;
(statearr_51448[(9)] = inst_51424__$1);

return statearr_51448;
})();
if(inst_51425){
var statearr_51449_53596 = state_51437__$1;
(statearr_51449_53596[(1)] = (8));

} else {
var statearr_51450_53597 = state_51437__$1;
(statearr_51450_53597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (3))){
var inst_51435 = (state_51437[(2)]);
var state_51437__$1 = state_51437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51437__$1,inst_51435);
} else {
if((state_val_51438 === (2))){
var state_51437__$1 = state_51437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51437__$1,(4),ch);
} else {
if((state_val_51438 === (9))){
var inst_51424 = (state_51437[(9)]);
var inst_51416 = inst_51424;
var state_51437__$1 = (function (){var statearr_51454 = state_51437;
(statearr_51454[(7)] = inst_51416);

return statearr_51454;
})();
var statearr_51455_53598 = state_51437__$1;
(statearr_51455_53598[(2)] = null);

(statearr_51455_53598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (5))){
var inst_51416 = (state_51437[(7)]);
var state_51437__$1 = state_51437;
var statearr_51456_53599 = state_51437__$1;
(statearr_51456_53599[(2)] = inst_51416);

(statearr_51456_53599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (10))){
var inst_51431 = (state_51437[(2)]);
var state_51437__$1 = state_51437;
var statearr_51460_53600 = state_51437__$1;
(statearr_51460_53600[(2)] = inst_51431);

(statearr_51460_53600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51438 === (8))){
var inst_51424 = (state_51437[(9)]);
var inst_51427 = cljs.core.deref(inst_51424);
var state_51437__$1 = state_51437;
var statearr_51462_53601 = state_51437__$1;
(statearr_51462_53601[(2)] = inst_51427);

(statearr_51462_53601[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__49502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49502__auto____0 = (function (){
var statearr_51472 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51472[(0)] = cljs$core$async$reduce_$_state_machine__49502__auto__);

(statearr_51472[(1)] = (1));

return statearr_51472;
});
var cljs$core$async$reduce_$_state_machine__49502__auto____1 = (function (state_51437){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51437);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51473){var ex__49505__auto__ = e51473;
var statearr_51474_53603 = state_51437;
(statearr_51474_53603[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51437[(4)]))){
var statearr_51475_53604 = state_51437;
(statearr_51475_53604[(1)] = cljs.core.first((state_51437[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53607 = state_51437;
state_51437 = G__53607;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49502__auto__ = function(state_51437){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49502__auto____1.call(this,state_51437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49502__auto____0;
cljs$core$async$reduce_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49502__auto____1;
return cljs$core$async$reduce_$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51479 = f__50734__auto__();
(statearr_51479[(6)] = c__50733__auto__);

return statearr_51479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

return c__50733__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51485){
var state_val_51486 = (state_51485[(1)]);
if((state_val_51486 === (1))){
var inst_51480 = cljs.core.async.reduce(f__$1,init,ch);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51485__$1,(2),inst_51480);
} else {
if((state_val_51486 === (2))){
var inst_51482 = (state_51485[(2)]);
var inst_51483 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51482) : f__$1.call(null,inst_51482));
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51485__$1,inst_51483);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49502__auto____0 = (function (){
var statearr_51491 = [null,null,null,null,null,null,null];
(statearr_51491[(0)] = cljs$core$async$transduce_$_state_machine__49502__auto__);

(statearr_51491[(1)] = (1));

return statearr_51491;
});
var cljs$core$async$transduce_$_state_machine__49502__auto____1 = (function (state_51485){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51485);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51493){var ex__49505__auto__ = e51493;
var statearr_51494_53622 = state_51485;
(statearr_51494_53622[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51485[(4)]))){
var statearr_51495_53623 = state_51485;
(statearr_51495_53623[(1)] = cljs.core.first((state_51485[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53624 = state_51485;
state_51485 = G__53624;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49502__auto__ = function(state_51485){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49502__auto____1.call(this,state_51485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49502__auto____0;
cljs$core$async$transduce_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49502__auto____1;
return cljs$core$async$transduce_$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51496 = f__50734__auto__();
(statearr_51496[(6)] = c__50733__auto__);

return statearr_51496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

return c__50733__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51499 = arguments.length;
switch (G__51499) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51528){
var state_val_51529 = (state_51528[(1)]);
if((state_val_51529 === (7))){
var inst_51508 = (state_51528[(2)]);
var state_51528__$1 = state_51528;
var statearr_51535_53626 = state_51528__$1;
(statearr_51535_53626[(2)] = inst_51508);

(statearr_51535_53626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (1))){
var inst_51502 = cljs.core.seq(coll);
var inst_51503 = inst_51502;
var state_51528__$1 = (function (){var statearr_51537 = state_51528;
(statearr_51537[(7)] = inst_51503);

return statearr_51537;
})();
var statearr_51539_53627 = state_51528__$1;
(statearr_51539_53627[(2)] = null);

(statearr_51539_53627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (4))){
var inst_51503 = (state_51528[(7)]);
var inst_51506 = cljs.core.first(inst_51503);
var state_51528__$1 = state_51528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51528__$1,(7),ch,inst_51506);
} else {
if((state_val_51529 === (13))){
var inst_51522 = (state_51528[(2)]);
var state_51528__$1 = state_51528;
var statearr_51543_53630 = state_51528__$1;
(statearr_51543_53630[(2)] = inst_51522);

(statearr_51543_53630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (6))){
var inst_51511 = (state_51528[(2)]);
var state_51528__$1 = state_51528;
if(cljs.core.truth_(inst_51511)){
var statearr_51546_53631 = state_51528__$1;
(statearr_51546_53631[(1)] = (8));

} else {
var statearr_51548_53632 = state_51528__$1;
(statearr_51548_53632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (3))){
var inst_51526 = (state_51528[(2)]);
var state_51528__$1 = state_51528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51528__$1,inst_51526);
} else {
if((state_val_51529 === (12))){
var state_51528__$1 = state_51528;
var statearr_51556_53633 = state_51528__$1;
(statearr_51556_53633[(2)] = null);

(statearr_51556_53633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (2))){
var inst_51503 = (state_51528[(7)]);
var state_51528__$1 = state_51528;
if(cljs.core.truth_(inst_51503)){
var statearr_51560_53634 = state_51528__$1;
(statearr_51560_53634[(1)] = (4));

} else {
var statearr_51561_53635 = state_51528__$1;
(statearr_51561_53635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (11))){
var inst_51519 = cljs.core.async.close_BANG_(ch);
var state_51528__$1 = state_51528;
var statearr_51562_53636 = state_51528__$1;
(statearr_51562_53636[(2)] = inst_51519);

(statearr_51562_53636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (9))){
var state_51528__$1 = state_51528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51565_53637 = state_51528__$1;
(statearr_51565_53637[(1)] = (11));

} else {
var statearr_51567_53638 = state_51528__$1;
(statearr_51567_53638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (5))){
var inst_51503 = (state_51528[(7)]);
var state_51528__$1 = state_51528;
var statearr_51569_53639 = state_51528__$1;
(statearr_51569_53639[(2)] = inst_51503);

(statearr_51569_53639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (10))){
var inst_51524 = (state_51528[(2)]);
var state_51528__$1 = state_51528;
var statearr_51570_53642 = state_51528__$1;
(statearr_51570_53642[(2)] = inst_51524);

(statearr_51570_53642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51529 === (8))){
var inst_51503 = (state_51528[(7)]);
var inst_51513 = cljs.core.next(inst_51503);
var inst_51503__$1 = inst_51513;
var state_51528__$1 = (function (){var statearr_51572 = state_51528;
(statearr_51572[(7)] = inst_51503__$1);

return statearr_51572;
})();
var statearr_51573_53646 = state_51528__$1;
(statearr_51573_53646[(2)] = null);

(statearr_51573_53646[(1)] = (2));


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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_51574 = [null,null,null,null,null,null,null,null];
(statearr_51574[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_51574[(1)] = (1));

return statearr_51574;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_51528){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51528);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51575){var ex__49505__auto__ = e51575;
var statearr_51576_53648 = state_51528;
(statearr_51576_53648[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51528[(4)]))){
var statearr_51577_53649 = state_51528;
(statearr_51577_53649[(1)] = cljs.core.first((state_51528[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53650 = state_51528;
state_51528 = G__53650;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_51528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_51528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51580 = f__50734__auto__();
(statearr_51580[(6)] = c__50733__auto__);

return statearr_51580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

return c__50733__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51583 = arguments.length;
switch (G__51583) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53667 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53667(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53681 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53681(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53682 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53682(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53685 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53685(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51610 = (function (ch,cs,meta51611){
this.ch = ch;
this.cs = cs;
this.meta51611 = meta51611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51612,meta51611__$1){
var self__ = this;
var _51612__$1 = this;
return (new cljs.core.async.t_cljs$core$async51610(self__.ch,self__.cs,meta51611__$1));
}));

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51612){
var self__ = this;
var _51612__$1 = this;
return self__.meta51611;
}));

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51610.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51611","meta51611",220048332,null)], null);
}));

(cljs.core.async.t_cljs$core$async51610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51610");

(cljs.core.async.t_cljs$core$async51610.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51610.
 */
cljs.core.async.__GT_t_cljs$core$async51610 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51610(ch__$1,cs__$1,meta51611){
return (new cljs.core.async.t_cljs$core$async51610(ch__$1,cs__$1,meta51611));
});

}

return (new cljs.core.async.t_cljs$core$async51610(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50733__auto___53688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_51765){
var state_val_51766 = (state_51765[(1)]);
if((state_val_51766 === (7))){
var inst_51760 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51773_53689 = state_51765__$1;
(statearr_51773_53689[(2)] = inst_51760);

(statearr_51773_53689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (20))){
var inst_51660 = (state_51765[(7)]);
var inst_51673 = cljs.core.first(inst_51660);
var inst_51674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51673,(0),null);
var inst_51675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51673,(1),null);
var state_51765__$1 = (function (){var statearr_51776 = state_51765;
(statearr_51776[(8)] = inst_51674);

return statearr_51776;
})();
if(cljs.core.truth_(inst_51675)){
var statearr_51778_53690 = state_51765__$1;
(statearr_51778_53690[(1)] = (22));

} else {
var statearr_51782_53691 = state_51765__$1;
(statearr_51782_53691[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (27))){
var inst_51627 = (state_51765[(9)]);
var inst_51711 = (state_51765[(10)]);
var inst_51705 = (state_51765[(11)]);
var inst_51703 = (state_51765[(12)]);
var inst_51711__$1 = cljs.core._nth(inst_51703,inst_51705);
var inst_51713 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51711__$1,inst_51627,done);
var state_51765__$1 = (function (){var statearr_51790 = state_51765;
(statearr_51790[(10)] = inst_51711__$1);

return statearr_51790;
})();
if(cljs.core.truth_(inst_51713)){
var statearr_51792_53692 = state_51765__$1;
(statearr_51792_53692[(1)] = (30));

} else {
var statearr_51794_53693 = state_51765__$1;
(statearr_51794_53693[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (1))){
var state_51765__$1 = state_51765;
var statearr_51797_53694 = state_51765__$1;
(statearr_51797_53694[(2)] = null);

(statearr_51797_53694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (24))){
var inst_51660 = (state_51765[(7)]);
var inst_51680 = (state_51765[(2)]);
var inst_51681 = cljs.core.next(inst_51660);
var inst_51636 = inst_51681;
var inst_51637 = null;
var inst_51638 = (0);
var inst_51639 = (0);
var state_51765__$1 = (function (){var statearr_51800 = state_51765;
(statearr_51800[(13)] = inst_51637);

(statearr_51800[(14)] = inst_51639);

(statearr_51800[(15)] = inst_51636);

(statearr_51800[(16)] = inst_51638);

(statearr_51800[(17)] = inst_51680);

return statearr_51800;
})();
var statearr_51803_53695 = state_51765__$1;
(statearr_51803_53695[(2)] = null);

(statearr_51803_53695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (39))){
var state_51765__$1 = state_51765;
var statearr_51808_53696 = state_51765__$1;
(statearr_51808_53696[(2)] = null);

(statearr_51808_53696[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (4))){
var inst_51627 = (state_51765[(9)]);
var inst_51627__$1 = (state_51765[(2)]);
var inst_51628 = (inst_51627__$1 == null);
var state_51765__$1 = (function (){var statearr_51809 = state_51765;
(statearr_51809[(9)] = inst_51627__$1);

return statearr_51809;
})();
if(cljs.core.truth_(inst_51628)){
var statearr_51810_53697 = state_51765__$1;
(statearr_51810_53697[(1)] = (5));

} else {
var statearr_51811_53698 = state_51765__$1;
(statearr_51811_53698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (15))){
var inst_51637 = (state_51765[(13)]);
var inst_51639 = (state_51765[(14)]);
var inst_51636 = (state_51765[(15)]);
var inst_51638 = (state_51765[(16)]);
var inst_51654 = (state_51765[(2)]);
var inst_51656 = (inst_51639 + (1));
var tmp51804 = inst_51637;
var tmp51805 = inst_51636;
var tmp51806 = inst_51638;
var inst_51636__$1 = tmp51805;
var inst_51637__$1 = tmp51804;
var inst_51638__$1 = tmp51806;
var inst_51639__$1 = inst_51656;
var state_51765__$1 = (function (){var statearr_51813 = state_51765;
(statearr_51813[(13)] = inst_51637__$1);

(statearr_51813[(14)] = inst_51639__$1);

(statearr_51813[(15)] = inst_51636__$1);

(statearr_51813[(18)] = inst_51654);

(statearr_51813[(16)] = inst_51638__$1);

return statearr_51813;
})();
var statearr_51814_53703 = state_51765__$1;
(statearr_51814_53703[(2)] = null);

(statearr_51814_53703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (21))){
var inst_51684 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51819_53704 = state_51765__$1;
(statearr_51819_53704[(2)] = inst_51684);

(statearr_51819_53704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (31))){
var inst_51711 = (state_51765[(10)]);
var inst_51717 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51711);
var state_51765__$1 = state_51765;
var statearr_51821_53705 = state_51765__$1;
(statearr_51821_53705[(2)] = inst_51717);

(statearr_51821_53705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (32))){
var inst_51702 = (state_51765[(19)]);
var inst_51705 = (state_51765[(11)]);
var inst_51703 = (state_51765[(12)]);
var inst_51704 = (state_51765[(20)]);
var inst_51719 = (state_51765[(2)]);
var inst_51721 = (inst_51705 + (1));
var tmp51816 = inst_51702;
var tmp51817 = inst_51703;
var tmp51818 = inst_51704;
var inst_51702__$1 = tmp51816;
var inst_51703__$1 = tmp51817;
var inst_51704__$1 = tmp51818;
var inst_51705__$1 = inst_51721;
var state_51765__$1 = (function (){var statearr_51822 = state_51765;
(statearr_51822[(19)] = inst_51702__$1);

(statearr_51822[(21)] = inst_51719);

(statearr_51822[(11)] = inst_51705__$1);

(statearr_51822[(12)] = inst_51703__$1);

(statearr_51822[(20)] = inst_51704__$1);

return statearr_51822;
})();
var statearr_51824_53706 = state_51765__$1;
(statearr_51824_53706[(2)] = null);

(statearr_51824_53706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (40))){
var inst_51733 = (state_51765[(22)]);
var inst_51737 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51733);
var state_51765__$1 = state_51765;
var statearr_51825_53707 = state_51765__$1;
(statearr_51825_53707[(2)] = inst_51737);

(statearr_51825_53707[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (33))){
var inst_51724 = (state_51765[(23)]);
var inst_51726 = cljs.core.chunked_seq_QMARK_(inst_51724);
var state_51765__$1 = state_51765;
if(inst_51726){
var statearr_51828_53708 = state_51765__$1;
(statearr_51828_53708[(1)] = (36));

} else {
var statearr_51829_53709 = state_51765__$1;
(statearr_51829_53709[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (13))){
var inst_51648 = (state_51765[(24)]);
var inst_51651 = cljs.core.async.close_BANG_(inst_51648);
var state_51765__$1 = state_51765;
var statearr_51834_53710 = state_51765__$1;
(statearr_51834_53710[(2)] = inst_51651);

(statearr_51834_53710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (22))){
var inst_51674 = (state_51765[(8)]);
var inst_51677 = cljs.core.async.close_BANG_(inst_51674);
var state_51765__$1 = state_51765;
var statearr_51839_53715 = state_51765__$1;
(statearr_51839_53715[(2)] = inst_51677);

(statearr_51839_53715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (36))){
var inst_51724 = (state_51765[(23)]);
var inst_51728 = cljs.core.chunk_first(inst_51724);
var inst_51729 = cljs.core.chunk_rest(inst_51724);
var inst_51730 = cljs.core.count(inst_51728);
var inst_51702 = inst_51729;
var inst_51703 = inst_51728;
var inst_51704 = inst_51730;
var inst_51705 = (0);
var state_51765__$1 = (function (){var statearr_51841 = state_51765;
(statearr_51841[(19)] = inst_51702);

(statearr_51841[(11)] = inst_51705);

(statearr_51841[(12)] = inst_51703);

(statearr_51841[(20)] = inst_51704);

return statearr_51841;
})();
var statearr_51846_53717 = state_51765__$1;
(statearr_51846_53717[(2)] = null);

(statearr_51846_53717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (41))){
var inst_51724 = (state_51765[(23)]);
var inst_51739 = (state_51765[(2)]);
var inst_51740 = cljs.core.next(inst_51724);
var inst_51702 = inst_51740;
var inst_51703 = null;
var inst_51704 = (0);
var inst_51705 = (0);
var state_51765__$1 = (function (){var statearr_51847 = state_51765;
(statearr_51847[(19)] = inst_51702);

(statearr_51847[(25)] = inst_51739);

(statearr_51847[(11)] = inst_51705);

(statearr_51847[(12)] = inst_51703);

(statearr_51847[(20)] = inst_51704);

return statearr_51847;
})();
var statearr_51848_53719 = state_51765__$1;
(statearr_51848_53719[(2)] = null);

(statearr_51848_53719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (43))){
var state_51765__$1 = state_51765;
var statearr_51849_53720 = state_51765__$1;
(statearr_51849_53720[(2)] = null);

(statearr_51849_53720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (29))){
var inst_51748 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51850_53721 = state_51765__$1;
(statearr_51850_53721[(2)] = inst_51748);

(statearr_51850_53721[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (44))){
var inst_51757 = (state_51765[(2)]);
var state_51765__$1 = (function (){var statearr_51853 = state_51765;
(statearr_51853[(26)] = inst_51757);

return statearr_51853;
})();
var statearr_51854_53722 = state_51765__$1;
(statearr_51854_53722[(2)] = null);

(statearr_51854_53722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (6))){
var inst_51694 = (state_51765[(27)]);
var inst_51693 = cljs.core.deref(cs);
var inst_51694__$1 = cljs.core.keys(inst_51693);
var inst_51695 = cljs.core.count(inst_51694__$1);
var inst_51696 = cljs.core.reset_BANG_(dctr,inst_51695);
var inst_51701 = cljs.core.seq(inst_51694__$1);
var inst_51702 = inst_51701;
var inst_51703 = null;
var inst_51704 = (0);
var inst_51705 = (0);
var state_51765__$1 = (function (){var statearr_51859 = state_51765;
(statearr_51859[(19)] = inst_51702);

(statearr_51859[(28)] = inst_51696);

(statearr_51859[(11)] = inst_51705);

(statearr_51859[(27)] = inst_51694__$1);

(statearr_51859[(12)] = inst_51703);

(statearr_51859[(20)] = inst_51704);

return statearr_51859;
})();
var statearr_51860_53727 = state_51765__$1;
(statearr_51860_53727[(2)] = null);

(statearr_51860_53727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (28))){
var inst_51702 = (state_51765[(19)]);
var inst_51724 = (state_51765[(23)]);
var inst_51724__$1 = cljs.core.seq(inst_51702);
var state_51765__$1 = (function (){var statearr_51861 = state_51765;
(statearr_51861[(23)] = inst_51724__$1);

return statearr_51861;
})();
if(inst_51724__$1){
var statearr_51862_53730 = state_51765__$1;
(statearr_51862_53730[(1)] = (33));

} else {
var statearr_51863_53731 = state_51765__$1;
(statearr_51863_53731[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (25))){
var inst_51705 = (state_51765[(11)]);
var inst_51704 = (state_51765[(20)]);
var inst_51707 = (inst_51705 < inst_51704);
var inst_51708 = inst_51707;
var state_51765__$1 = state_51765;
if(cljs.core.truth_(inst_51708)){
var statearr_51865_53732 = state_51765__$1;
(statearr_51865_53732[(1)] = (27));

} else {
var statearr_51867_53735 = state_51765__$1;
(statearr_51867_53735[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (34))){
var state_51765__$1 = state_51765;
var statearr_51869_53737 = state_51765__$1;
(statearr_51869_53737[(2)] = null);

(statearr_51869_53737[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (17))){
var state_51765__$1 = state_51765;
var statearr_51872_53738 = state_51765__$1;
(statearr_51872_53738[(2)] = null);

(statearr_51872_53738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (3))){
var inst_51762 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51765__$1,inst_51762);
} else {
if((state_val_51766 === (12))){
var inst_51689 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51874_53739 = state_51765__$1;
(statearr_51874_53739[(2)] = inst_51689);

(statearr_51874_53739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (2))){
var state_51765__$1 = state_51765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51765__$1,(4),ch);
} else {
if((state_val_51766 === (23))){
var state_51765__$1 = state_51765;
var statearr_51878_53740 = state_51765__$1;
(statearr_51878_53740[(2)] = null);

(statearr_51878_53740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (35))){
var inst_51746 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51880_53741 = state_51765__$1;
(statearr_51880_53741[(2)] = inst_51746);

(statearr_51880_53741[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (19))){
var inst_51660 = (state_51765[(7)]);
var inst_51664 = cljs.core.chunk_first(inst_51660);
var inst_51665 = cljs.core.chunk_rest(inst_51660);
var inst_51666 = cljs.core.count(inst_51664);
var inst_51636 = inst_51665;
var inst_51637 = inst_51664;
var inst_51638 = inst_51666;
var inst_51639 = (0);
var state_51765__$1 = (function (){var statearr_51881 = state_51765;
(statearr_51881[(13)] = inst_51637);

(statearr_51881[(14)] = inst_51639);

(statearr_51881[(15)] = inst_51636);

(statearr_51881[(16)] = inst_51638);

return statearr_51881;
})();
var statearr_51883_53746 = state_51765__$1;
(statearr_51883_53746[(2)] = null);

(statearr_51883_53746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (11))){
var inst_51636 = (state_51765[(15)]);
var inst_51660 = (state_51765[(7)]);
var inst_51660__$1 = cljs.core.seq(inst_51636);
var state_51765__$1 = (function (){var statearr_51884 = state_51765;
(statearr_51884[(7)] = inst_51660__$1);

return statearr_51884;
})();
if(inst_51660__$1){
var statearr_51886_53748 = state_51765__$1;
(statearr_51886_53748[(1)] = (16));

} else {
var statearr_51887_53752 = state_51765__$1;
(statearr_51887_53752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (9))){
var inst_51691 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51889_53753 = state_51765__$1;
(statearr_51889_53753[(2)] = inst_51691);

(statearr_51889_53753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (5))){
var inst_51634 = cljs.core.deref(cs);
var inst_51635 = cljs.core.seq(inst_51634);
var inst_51636 = inst_51635;
var inst_51637 = null;
var inst_51638 = (0);
var inst_51639 = (0);
var state_51765__$1 = (function (){var statearr_51893 = state_51765;
(statearr_51893[(13)] = inst_51637);

(statearr_51893[(14)] = inst_51639);

(statearr_51893[(15)] = inst_51636);

(statearr_51893[(16)] = inst_51638);

return statearr_51893;
})();
var statearr_51894_53754 = state_51765__$1;
(statearr_51894_53754[(2)] = null);

(statearr_51894_53754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (14))){
var state_51765__$1 = state_51765;
var statearr_51896_53755 = state_51765__$1;
(statearr_51896_53755[(2)] = null);

(statearr_51896_53755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (45))){
var inst_51754 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51898_53756 = state_51765__$1;
(statearr_51898_53756[(2)] = inst_51754);

(statearr_51898_53756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (26))){
var inst_51694 = (state_51765[(27)]);
var inst_51750 = (state_51765[(2)]);
var inst_51751 = cljs.core.seq(inst_51694);
var state_51765__$1 = (function (){var statearr_51900 = state_51765;
(statearr_51900[(29)] = inst_51750);

return statearr_51900;
})();
if(inst_51751){
var statearr_51901_53757 = state_51765__$1;
(statearr_51901_53757[(1)] = (42));

} else {
var statearr_51902_53758 = state_51765__$1;
(statearr_51902_53758[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (16))){
var inst_51660 = (state_51765[(7)]);
var inst_51662 = cljs.core.chunked_seq_QMARK_(inst_51660);
var state_51765__$1 = state_51765;
if(inst_51662){
var statearr_51904_53759 = state_51765__$1;
(statearr_51904_53759[(1)] = (19));

} else {
var statearr_51906_53760 = state_51765__$1;
(statearr_51906_53760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (38))){
var inst_51743 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51907_53761 = state_51765__$1;
(statearr_51907_53761[(2)] = inst_51743);

(statearr_51907_53761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (30))){
var state_51765__$1 = state_51765;
var statearr_51910_53762 = state_51765__$1;
(statearr_51910_53762[(2)] = null);

(statearr_51910_53762[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (10))){
var inst_51637 = (state_51765[(13)]);
var inst_51639 = (state_51765[(14)]);
var inst_51647 = cljs.core._nth(inst_51637,inst_51639);
var inst_51648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51647,(0),null);
var inst_51649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51647,(1),null);
var state_51765__$1 = (function (){var statearr_51913 = state_51765;
(statearr_51913[(24)] = inst_51648);

return statearr_51913;
})();
if(cljs.core.truth_(inst_51649)){
var statearr_51915_53764 = state_51765__$1;
(statearr_51915_53764[(1)] = (13));

} else {
var statearr_51916_53765 = state_51765__$1;
(statearr_51916_53765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (18))){
var inst_51687 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
var statearr_51918_53766 = state_51765__$1;
(statearr_51918_53766[(2)] = inst_51687);

(statearr_51918_53766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (42))){
var state_51765__$1 = state_51765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51765__$1,(45),dchan);
} else {
if((state_val_51766 === (37))){
var inst_51627 = (state_51765[(9)]);
var inst_51733 = (state_51765[(22)]);
var inst_51724 = (state_51765[(23)]);
var inst_51733__$1 = cljs.core.first(inst_51724);
var inst_51734 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51733__$1,inst_51627,done);
var state_51765__$1 = (function (){var statearr_51919 = state_51765;
(statearr_51919[(22)] = inst_51733__$1);

return statearr_51919;
})();
if(cljs.core.truth_(inst_51734)){
var statearr_51920_53767 = state_51765__$1;
(statearr_51920_53767[(1)] = (39));

} else {
var statearr_51921_53768 = state_51765__$1;
(statearr_51921_53768[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (8))){
var inst_51639 = (state_51765[(14)]);
var inst_51638 = (state_51765[(16)]);
var inst_51641 = (inst_51639 < inst_51638);
var inst_51642 = inst_51641;
var state_51765__$1 = state_51765;
if(cljs.core.truth_(inst_51642)){
var statearr_51928_53769 = state_51765__$1;
(statearr_51928_53769[(1)] = (10));

} else {
var statearr_51929_53770 = state_51765__$1;
(statearr_51929_53770[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__49502__auto__ = null;
var cljs$core$async$mult_$_state_machine__49502__auto____0 = (function (){
var statearr_51935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51935[(0)] = cljs$core$async$mult_$_state_machine__49502__auto__);

(statearr_51935[(1)] = (1));

return statearr_51935;
});
var cljs$core$async$mult_$_state_machine__49502__auto____1 = (function (state_51765){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_51765);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e51939){var ex__49505__auto__ = e51939;
var statearr_51940_53774 = state_51765;
(statearr_51940_53774[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_51765[(4)]))){
var statearr_51945_53775 = state_51765;
(statearr_51945_53775[(1)] = cljs.core.first((state_51765[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53776 = state_51765;
state_51765 = G__53776;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49502__auto__ = function(state_51765){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49502__auto____1.call(this,state_51765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49502__auto____0;
cljs$core$async$mult_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49502__auto____1;
return cljs$core$async$mult_$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_51950 = f__50734__auto__();
(statearr_51950[(6)] = c__50733__auto___53688);

return statearr_51950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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
var G__51952 = arguments.length;
switch (G__51952) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_53778 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53778(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53781 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53781(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53782 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53782(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53783 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53783(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53784 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53784(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53785 = arguments.length;
var i__4737__auto___53786 = (0);
while(true){
if((i__4737__auto___53786 < len__4736__auto___53785)){
args__4742__auto__.push((arguments[i__4737__auto___53786]));

var G__53787 = (i__4737__auto___53786 + (1));
i__4737__auto___53786 = G__53787;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51979){
var map__51981 = p__51979;
var map__51981__$1 = (((((!((map__51981 == null))))?(((((map__51981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51981):map__51981);
var opts = map__51981__$1;
var statearr_51983_53788 = state;
(statearr_51983_53788[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51985_53789 = state;
(statearr_51985_53789[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51986_53790 = state;
(statearr_51986_53790[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51974){
var G__51975 = cljs.core.first(seq51974);
var seq51974__$1 = cljs.core.next(seq51974);
var G__51976 = cljs.core.first(seq51974__$1);
var seq51974__$2 = cljs.core.next(seq51974__$1);
var G__51977 = cljs.core.first(seq51974__$2);
var seq51974__$3 = cljs.core.next(seq51974__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51975,G__51976,G__51977,seq51974__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51994 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51995){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51995 = meta51995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51996,meta51995__$1){
var self__ = this;
var _51996__$1 = this;
return (new cljs.core.async.t_cljs$core$async51994(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51995__$1));
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51996){
var self__ = this;
var _51996__$1 = this;
return self__.meta51995;
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51994.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51995","meta51995",-712002960,null)], null);
}));

(cljs.core.async.t_cljs$core$async51994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51994");

(cljs.core.async.t_cljs$core$async51994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51994.
 */
cljs.core.async.__GT_t_cljs$core$async51994 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51994(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51995){
return (new cljs.core.async.t_cljs$core$async51994(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51995));
});

}

return (new cljs.core.async.t_cljs$core$async51994(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50733__auto___53797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_52167){
var state_val_52168 = (state_52167[(1)]);
if((state_val_52168 === (7))){
var inst_52060 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52172_53799 = state_52167__$1;
(statearr_52172_53799[(2)] = inst_52060);

(statearr_52172_53799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (20))){
var inst_52074 = (state_52167[(7)]);
var state_52167__$1 = state_52167;
var statearr_52173_53801 = state_52167__$1;
(statearr_52173_53801[(2)] = inst_52074);

(statearr_52173_53801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (27))){
var state_52167__$1 = state_52167;
var statearr_52174_53805 = state_52167__$1;
(statearr_52174_53805[(2)] = null);

(statearr_52174_53805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (1))){
var inst_52043 = (state_52167[(8)]);
var inst_52043__$1 = calc_state();
var inst_52045 = (inst_52043__$1 == null);
var inst_52046 = cljs.core.not(inst_52045);
var state_52167__$1 = (function (){var statearr_52179 = state_52167;
(statearr_52179[(8)] = inst_52043__$1);

return statearr_52179;
})();
if(inst_52046){
var statearr_52182_53809 = state_52167__$1;
(statearr_52182_53809[(1)] = (2));

} else {
var statearr_52183_53810 = state_52167__$1;
(statearr_52183_53810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (24))){
var inst_52103 = (state_52167[(9)]);
var inst_52115 = (state_52167[(10)]);
var inst_52137 = (state_52167[(11)]);
var inst_52137__$1 = (inst_52103.cljs$core$IFn$_invoke$arity$1 ? inst_52103.cljs$core$IFn$_invoke$arity$1(inst_52115) : inst_52103.call(null,inst_52115));
var state_52167__$1 = (function (){var statearr_52188 = state_52167;
(statearr_52188[(11)] = inst_52137__$1);

return statearr_52188;
})();
if(cljs.core.truth_(inst_52137__$1)){
var statearr_52190_53811 = state_52167__$1;
(statearr_52190_53811[(1)] = (29));

} else {
var statearr_52191_53812 = state_52167__$1;
(statearr_52191_53812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (4))){
var inst_52063 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52063)){
var statearr_52196_53814 = state_52167__$1;
(statearr_52196_53814[(1)] = (8));

} else {
var statearr_52200_53815 = state_52167__$1;
(statearr_52200_53815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (15))){
var inst_52097 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52097)){
var statearr_52204_53816 = state_52167__$1;
(statearr_52204_53816[(1)] = (19));

} else {
var statearr_52205_53817 = state_52167__$1;
(statearr_52205_53817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (21))){
var inst_52102 = (state_52167[(12)]);
var inst_52102__$1 = (state_52167[(2)]);
var inst_52103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52102__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52102__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52102__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52167__$1 = (function (){var statearr_52207 = state_52167;
(statearr_52207[(12)] = inst_52102__$1);

(statearr_52207[(9)] = inst_52103);

(statearr_52207[(13)] = inst_52104);

return statearr_52207;
})();
return cljs.core.async.ioc_alts_BANG_(state_52167__$1,(22),inst_52105);
} else {
if((state_val_52168 === (31))){
var inst_52146 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52146)){
var statearr_52211_53821 = state_52167__$1;
(statearr_52211_53821[(1)] = (32));

} else {
var statearr_52212_53822 = state_52167__$1;
(statearr_52212_53822[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (32))){
var inst_52114 = (state_52167[(14)]);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52167__$1,(35),out,inst_52114);
} else {
if((state_val_52168 === (33))){
var inst_52102 = (state_52167[(12)]);
var inst_52074 = inst_52102;
var state_52167__$1 = (function (){var statearr_52214 = state_52167;
(statearr_52214[(7)] = inst_52074);

return statearr_52214;
})();
var statearr_52216_53823 = state_52167__$1;
(statearr_52216_53823[(2)] = null);

(statearr_52216_53823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (13))){
var inst_52074 = (state_52167[(7)]);
var inst_52085 = inst_52074.cljs$lang$protocol_mask$partition0$;
var inst_52086 = (inst_52085 & (64));
var inst_52087 = inst_52074.cljs$core$ISeq$;
var inst_52088 = (cljs.core.PROTOCOL_SENTINEL === inst_52087);
var inst_52089 = ((inst_52086) || (inst_52088));
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52089)){
var statearr_52218_53825 = state_52167__$1;
(statearr_52218_53825[(1)] = (16));

} else {
var statearr_52219_53826 = state_52167__$1;
(statearr_52219_53826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (22))){
var inst_52115 = (state_52167[(10)]);
var inst_52114 = (state_52167[(14)]);
var inst_52110 = (state_52167[(2)]);
var inst_52114__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52110,(0),null);
var inst_52115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52110,(1),null);
var inst_52120 = (inst_52114__$1 == null);
var inst_52121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52115__$1,change);
var inst_52122 = ((inst_52120) || (inst_52121));
var state_52167__$1 = (function (){var statearr_52223 = state_52167;
(statearr_52223[(10)] = inst_52115__$1);

(statearr_52223[(14)] = inst_52114__$1);

return statearr_52223;
})();
if(cljs.core.truth_(inst_52122)){
var statearr_52224_53833 = state_52167__$1;
(statearr_52224_53833[(1)] = (23));

} else {
var statearr_52225_53834 = state_52167__$1;
(statearr_52225_53834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (36))){
var inst_52102 = (state_52167[(12)]);
var inst_52074 = inst_52102;
var state_52167__$1 = (function (){var statearr_52229 = state_52167;
(statearr_52229[(7)] = inst_52074);

return statearr_52229;
})();
var statearr_52230_53835 = state_52167__$1;
(statearr_52230_53835[(2)] = null);

(statearr_52230_53835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (29))){
var inst_52137 = (state_52167[(11)]);
var state_52167__$1 = state_52167;
var statearr_52231_53843 = state_52167__$1;
(statearr_52231_53843[(2)] = inst_52137);

(statearr_52231_53843[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (6))){
var state_52167__$1 = state_52167;
var statearr_52233_53845 = state_52167__$1;
(statearr_52233_53845[(2)] = false);

(statearr_52233_53845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (28))){
var inst_52131 = (state_52167[(2)]);
var inst_52134 = calc_state();
var inst_52074 = inst_52134;
var state_52167__$1 = (function (){var statearr_52238 = state_52167;
(statearr_52238[(15)] = inst_52131);

(statearr_52238[(7)] = inst_52074);

return statearr_52238;
})();
var statearr_52239_53850 = state_52167__$1;
(statearr_52239_53850[(2)] = null);

(statearr_52239_53850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (25))){
var inst_52161 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52240_53855 = state_52167__$1;
(statearr_52240_53855[(2)] = inst_52161);

(statearr_52240_53855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (34))){
var inst_52159 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52242_53856 = state_52167__$1;
(statearr_52242_53856[(2)] = inst_52159);

(statearr_52242_53856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (17))){
var state_52167__$1 = state_52167;
var statearr_52245_53861 = state_52167__$1;
(statearr_52245_53861[(2)] = false);

(statearr_52245_53861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (3))){
var state_52167__$1 = state_52167;
var statearr_52251_53862 = state_52167__$1;
(statearr_52251_53862[(2)] = false);

(statearr_52251_53862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (12))){
var inst_52163 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52167__$1,inst_52163);
} else {
if((state_val_52168 === (2))){
var inst_52043 = (state_52167[(8)]);
var inst_52048 = inst_52043.cljs$lang$protocol_mask$partition0$;
var inst_52049 = (inst_52048 & (64));
var inst_52054 = inst_52043.cljs$core$ISeq$;
var inst_52055 = (cljs.core.PROTOCOL_SENTINEL === inst_52054);
var inst_52056 = ((inst_52049) || (inst_52055));
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52056)){
var statearr_52253_53863 = state_52167__$1;
(statearr_52253_53863[(1)] = (5));

} else {
var statearr_52254_53864 = state_52167__$1;
(statearr_52254_53864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (23))){
var inst_52114 = (state_52167[(14)]);
var inst_52125 = (inst_52114 == null);
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52125)){
var statearr_52259_53866 = state_52167__$1;
(statearr_52259_53866[(1)] = (26));

} else {
var statearr_52260_53867 = state_52167__$1;
(statearr_52260_53867[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (35))){
var inst_52150 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52150)){
var statearr_52264_53877 = state_52167__$1;
(statearr_52264_53877[(1)] = (36));

} else {
var statearr_52265_53878 = state_52167__$1;
(statearr_52265_53878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (19))){
var inst_52074 = (state_52167[(7)]);
var inst_52099 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52074);
var state_52167__$1 = state_52167;
var statearr_52266_53879 = state_52167__$1;
(statearr_52266_53879[(2)] = inst_52099);

(statearr_52266_53879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (11))){
var inst_52074 = (state_52167[(7)]);
var inst_52079 = (inst_52074 == null);
var inst_52080 = cljs.core.not(inst_52079);
var state_52167__$1 = state_52167;
if(inst_52080){
var statearr_52268_53880 = state_52167__$1;
(statearr_52268_53880[(1)] = (13));

} else {
var statearr_52269_53885 = state_52167__$1;
(statearr_52269_53885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (9))){
var inst_52043 = (state_52167[(8)]);
var state_52167__$1 = state_52167;
var statearr_52273_53889 = state_52167__$1;
(statearr_52273_53889[(2)] = inst_52043);

(statearr_52273_53889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (5))){
var state_52167__$1 = state_52167;
var statearr_52275_53891 = state_52167__$1;
(statearr_52275_53891[(2)] = true);

(statearr_52275_53891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (14))){
var state_52167__$1 = state_52167;
var statearr_52276_53895 = state_52167__$1;
(statearr_52276_53895[(2)] = false);

(statearr_52276_53895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (26))){
var inst_52115 = (state_52167[(10)]);
var inst_52128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52115);
var state_52167__$1 = state_52167;
var statearr_52280_53896 = state_52167__$1;
(statearr_52280_53896[(2)] = inst_52128);

(statearr_52280_53896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (16))){
var state_52167__$1 = state_52167;
var statearr_52283_53898 = state_52167__$1;
(statearr_52283_53898[(2)] = true);

(statearr_52283_53898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (38))){
var inst_52155 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52284_53905 = state_52167__$1;
(statearr_52284_53905[(2)] = inst_52155);

(statearr_52284_53905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (30))){
var inst_52103 = (state_52167[(9)]);
var inst_52115 = (state_52167[(10)]);
var inst_52104 = (state_52167[(13)]);
var inst_52141 = cljs.core.empty_QMARK_(inst_52103);
var inst_52142 = (inst_52104.cljs$core$IFn$_invoke$arity$1 ? inst_52104.cljs$core$IFn$_invoke$arity$1(inst_52115) : inst_52104.call(null,inst_52115));
var inst_52143 = cljs.core.not(inst_52142);
var inst_52144 = ((inst_52141) && (inst_52143));
var state_52167__$1 = state_52167;
var statearr_52288_53910 = state_52167__$1;
(statearr_52288_53910[(2)] = inst_52144);

(statearr_52288_53910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (10))){
var inst_52043 = (state_52167[(8)]);
var inst_52068 = (state_52167[(2)]);
var inst_52070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52068,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52068,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52068,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52074 = inst_52043;
var state_52167__$1 = (function (){var statearr_52291 = state_52167;
(statearr_52291[(16)] = inst_52073);

(statearr_52291[(7)] = inst_52074);

(statearr_52291[(17)] = inst_52070);

(statearr_52291[(18)] = inst_52072);

return statearr_52291;
})();
var statearr_52293_53914 = state_52167__$1;
(statearr_52293_53914[(2)] = null);

(statearr_52293_53914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (18))){
var inst_52094 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52298_53918 = state_52167__$1;
(statearr_52298_53918[(2)] = inst_52094);

(statearr_52298_53918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (37))){
var state_52167__$1 = state_52167;
var statearr_52299_53920 = state_52167__$1;
(statearr_52299_53920[(2)] = null);

(statearr_52299_53920[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (8))){
var inst_52043 = (state_52167[(8)]);
var inst_52065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52043);
var state_52167__$1 = state_52167;
var statearr_52300_53922 = state_52167__$1;
(statearr_52300_53922[(2)] = inst_52065);

(statearr_52300_53922[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__49502__auto__ = null;
var cljs$core$async$mix_$_state_machine__49502__auto____0 = (function (){
var statearr_52302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52302[(0)] = cljs$core$async$mix_$_state_machine__49502__auto__);

(statearr_52302[(1)] = (1));

return statearr_52302;
});
var cljs$core$async$mix_$_state_machine__49502__auto____1 = (function (state_52167){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_52167);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e52304){var ex__49505__auto__ = e52304;
var statearr_52305_53931 = state_52167;
(statearr_52305_53931[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_52167[(4)]))){
var statearr_52306_53933 = state_52167;
(statearr_52306_53933[(1)] = cljs.core.first((state_52167[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53937 = state_52167;
state_52167 = G__53937;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49502__auto__ = function(state_52167){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49502__auto____1.call(this,state_52167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49502__auto____0;
cljs$core$async$mix_$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49502__auto____1;
return cljs$core$async$mix_$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_52308 = f__50734__auto__();
(statearr_52308[(6)] = c__50733__auto___53797);

return statearr_52308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_53945 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53945(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53952 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53952(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53953 = (function() {
var G__53954 = null;
var G__53954__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53954__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53954 = function(p,v){
switch(arguments.length){
case 1:
return G__53954__1.call(this,p);
case 2:
return G__53954__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53954.cljs$core$IFn$_invoke$arity$1 = G__53954__1;
G__53954.cljs$core$IFn$_invoke$arity$2 = G__53954__2;
return G__53954;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52332 = arguments.length;
switch (G__52332) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53953(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53953(p,v);
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
var G__52344 = arguments.length;
switch (G__52344) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52338_SHARP_){
if(cljs.core.truth_((p1__52338_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52338_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52338_SHARP_.call(null,topic)))){
return p1__52338_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52338_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52348 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52349){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52349 = meta52349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52350,meta52349__$1){
var self__ = this;
var _52350__$1 = this;
return (new cljs.core.async.t_cljs$core$async52348(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52349__$1));
}));

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52350){
var self__ = this;
var _52350__$1 = this;
return self__.meta52349;
}));

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52349","meta52349",1033331016,null)], null);
}));

(cljs.core.async.t_cljs$core$async52348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52348");

(cljs.core.async.t_cljs$core$async52348.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52348.
 */
cljs.core.async.__GT_t_cljs$core$async52348 = (function cljs$core$async$__GT_t_cljs$core$async52348(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52349){
return (new cljs.core.async.t_cljs$core$async52348(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52349));
});

}

return (new cljs.core.async.t_cljs$core$async52348(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50733__auto___53987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_52444){
var state_val_52445 = (state_52444[(1)]);
if((state_val_52445 === (7))){
var inst_52437 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
var statearr_52452_53988 = state_52444__$1;
(statearr_52452_53988[(2)] = inst_52437);

(statearr_52452_53988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (20))){
var state_52444__$1 = state_52444;
var statearr_52455_53989 = state_52444__$1;
(statearr_52455_53989[(2)] = null);

(statearr_52455_53989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (1))){
var state_52444__$1 = state_52444;
var statearr_52458_53994 = state_52444__$1;
(statearr_52458_53994[(2)] = null);

(statearr_52458_53994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (24))){
var inst_52417 = (state_52444[(7)]);
var inst_52429 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52417);
var state_52444__$1 = state_52444;
var statearr_52460_53995 = state_52444__$1;
(statearr_52460_53995[(2)] = inst_52429);

(statearr_52460_53995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (4))){
var inst_52357 = (state_52444[(8)]);
var inst_52357__$1 = (state_52444[(2)]);
var inst_52359 = (inst_52357__$1 == null);
var state_52444__$1 = (function (){var statearr_52461 = state_52444;
(statearr_52461[(8)] = inst_52357__$1);

return statearr_52461;
})();
if(cljs.core.truth_(inst_52359)){
var statearr_52462_53996 = state_52444__$1;
(statearr_52462_53996[(1)] = (5));

} else {
var statearr_52464_53997 = state_52444__$1;
(statearr_52464_53997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (15))){
var inst_52411 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
var statearr_52469_54000 = state_52444__$1;
(statearr_52469_54000[(2)] = inst_52411);

(statearr_52469_54000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (21))){
var inst_52434 = (state_52444[(2)]);
var state_52444__$1 = (function (){var statearr_52470 = state_52444;
(statearr_52470[(9)] = inst_52434);

return statearr_52470;
})();
var statearr_52487_54001 = state_52444__$1;
(statearr_52487_54001[(2)] = null);

(statearr_52487_54001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (13))){
var inst_52387 = (state_52444[(10)]);
var inst_52391 = cljs.core.chunked_seq_QMARK_(inst_52387);
var state_52444__$1 = state_52444;
if(inst_52391){
var statearr_52488_54007 = state_52444__$1;
(statearr_52488_54007[(1)] = (16));

} else {
var statearr_52489_54008 = state_52444__$1;
(statearr_52489_54008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (22))){
var inst_52425 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
if(cljs.core.truth_(inst_52425)){
var statearr_52490_54009 = state_52444__$1;
(statearr_52490_54009[(1)] = (23));

} else {
var statearr_52491_54010 = state_52444__$1;
(statearr_52491_54010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (6))){
var inst_52417 = (state_52444[(7)]);
var inst_52420 = (state_52444[(11)]);
var inst_52357 = (state_52444[(8)]);
var inst_52417__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52357) : topic_fn.call(null,inst_52357));
var inst_52419 = cljs.core.deref(mults);
var inst_52420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52419,inst_52417__$1);
var state_52444__$1 = (function (){var statearr_52493 = state_52444;
(statearr_52493[(7)] = inst_52417__$1);

(statearr_52493[(11)] = inst_52420__$1);

return statearr_52493;
})();
if(cljs.core.truth_(inst_52420__$1)){
var statearr_52494_54011 = state_52444__$1;
(statearr_52494_54011[(1)] = (19));

} else {
var statearr_52496_54012 = state_52444__$1;
(statearr_52496_54012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (25))){
var inst_52431 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
var statearr_52497_54014 = state_52444__$1;
(statearr_52497_54014[(2)] = inst_52431);

(statearr_52497_54014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (17))){
var inst_52387 = (state_52444[(10)]);
var inst_52400 = cljs.core.first(inst_52387);
var inst_52402 = cljs.core.async.muxch_STAR_(inst_52400);
var inst_52403 = cljs.core.async.close_BANG_(inst_52402);
var inst_52404 = cljs.core.next(inst_52387);
var inst_52369 = inst_52404;
var inst_52370 = null;
var inst_52371 = (0);
var inst_52372 = (0);
var state_52444__$1 = (function (){var statearr_52501 = state_52444;
(statearr_52501[(12)] = inst_52369);

(statearr_52501[(13)] = inst_52372);

(statearr_52501[(14)] = inst_52371);

(statearr_52501[(15)] = inst_52403);

(statearr_52501[(16)] = inst_52370);

return statearr_52501;
})();
var statearr_52502_54018 = state_52444__$1;
(statearr_52502_54018[(2)] = null);

(statearr_52502_54018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (3))){
var inst_52440 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52444__$1,inst_52440);
} else {
if((state_val_52445 === (12))){
var inst_52413 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
var statearr_52503_54020 = state_52444__$1;
(statearr_52503_54020[(2)] = inst_52413);

(statearr_52503_54020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (2))){
var state_52444__$1 = state_52444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52444__$1,(4),ch);
} else {
if((state_val_52445 === (23))){
var state_52444__$1 = state_52444;
var statearr_52504_54024 = state_52444__$1;
(statearr_52504_54024[(2)] = null);

(statearr_52504_54024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (19))){
var inst_52420 = (state_52444[(11)]);
var inst_52357 = (state_52444[(8)]);
var inst_52423 = cljs.core.async.muxch_STAR_(inst_52420);
var state_52444__$1 = state_52444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52444__$1,(22),inst_52423,inst_52357);
} else {
if((state_val_52445 === (11))){
var inst_52369 = (state_52444[(12)]);
var inst_52387 = (state_52444[(10)]);
var inst_52387__$1 = cljs.core.seq(inst_52369);
var state_52444__$1 = (function (){var statearr_52506 = state_52444;
(statearr_52506[(10)] = inst_52387__$1);

return statearr_52506;
})();
if(inst_52387__$1){
var statearr_52507_54036 = state_52444__$1;
(statearr_52507_54036[(1)] = (13));

} else {
var statearr_52508_54037 = state_52444__$1;
(statearr_52508_54037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (9))){
var inst_52415 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
var statearr_52510_54038 = state_52444__$1;
(statearr_52510_54038[(2)] = inst_52415);

(statearr_52510_54038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (5))){
var inst_52366 = cljs.core.deref(mults);
var inst_52367 = cljs.core.vals(inst_52366);
var inst_52368 = cljs.core.seq(inst_52367);
var inst_52369 = inst_52368;
var inst_52370 = null;
var inst_52371 = (0);
var inst_52372 = (0);
var state_52444__$1 = (function (){var statearr_52512 = state_52444;
(statearr_52512[(12)] = inst_52369);

(statearr_52512[(13)] = inst_52372);

(statearr_52512[(14)] = inst_52371);

(statearr_52512[(16)] = inst_52370);

return statearr_52512;
})();
var statearr_52513_54045 = state_52444__$1;
(statearr_52513_54045[(2)] = null);

(statearr_52513_54045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (14))){
var state_52444__$1 = state_52444;
var statearr_52518_54047 = state_52444__$1;
(statearr_52518_54047[(2)] = null);

(statearr_52518_54047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (16))){
var inst_52387 = (state_52444[(10)]);
var inst_52394 = cljs.core.chunk_first(inst_52387);
var inst_52395 = cljs.core.chunk_rest(inst_52387);
var inst_52397 = cljs.core.count(inst_52394);
var inst_52369 = inst_52395;
var inst_52370 = inst_52394;
var inst_52371 = inst_52397;
var inst_52372 = (0);
var state_52444__$1 = (function (){var statearr_52520 = state_52444;
(statearr_52520[(12)] = inst_52369);

(statearr_52520[(13)] = inst_52372);

(statearr_52520[(14)] = inst_52371);

(statearr_52520[(16)] = inst_52370);

return statearr_52520;
})();
var statearr_52521_54061 = state_52444__$1;
(statearr_52521_54061[(2)] = null);

(statearr_52521_54061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (10))){
var inst_52369 = (state_52444[(12)]);
var inst_52372 = (state_52444[(13)]);
var inst_52371 = (state_52444[(14)]);
var inst_52370 = (state_52444[(16)]);
var inst_52379 = cljs.core._nth(inst_52370,inst_52372);
var inst_52380 = cljs.core.async.muxch_STAR_(inst_52379);
var inst_52381 = cljs.core.async.close_BANG_(inst_52380);
var inst_52383 = (inst_52372 + (1));
var tmp52515 = inst_52369;
var tmp52516 = inst_52371;
var tmp52517 = inst_52370;
var inst_52369__$1 = tmp52515;
var inst_52370__$1 = tmp52517;
var inst_52371__$1 = tmp52516;
var inst_52372__$1 = inst_52383;
var state_52444__$1 = (function (){var statearr_52524 = state_52444;
(statearr_52524[(12)] = inst_52369__$1);

(statearr_52524[(17)] = inst_52381);

(statearr_52524[(13)] = inst_52372__$1);

(statearr_52524[(14)] = inst_52371__$1);

(statearr_52524[(16)] = inst_52370__$1);

return statearr_52524;
})();
var statearr_52525_54077 = state_52444__$1;
(statearr_52525_54077[(2)] = null);

(statearr_52525_54077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (18))){
var inst_52407 = (state_52444[(2)]);
var state_52444__$1 = state_52444;
var statearr_52526_54078 = state_52444__$1;
(statearr_52526_54078[(2)] = inst_52407);

(statearr_52526_54078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52445 === (8))){
var inst_52372 = (state_52444[(13)]);
var inst_52371 = (state_52444[(14)]);
var inst_52375 = (inst_52372 < inst_52371);
var inst_52376 = inst_52375;
var state_52444__$1 = state_52444;
if(cljs.core.truth_(inst_52376)){
var statearr_52527_54081 = state_52444__$1;
(statearr_52527_54081[(1)] = (10));

} else {
var statearr_52529_54083 = state_52444__$1;
(statearr_52529_54083[(1)] = (11));

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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_52533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52533[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_52533[(1)] = (1));

return statearr_52533;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_52444){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_52444);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e52536){var ex__49505__auto__ = e52536;
var statearr_52538_54087 = state_52444;
(statearr_52538_54087[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_52444[(4)]))){
var statearr_52540_54088 = state_52444;
(statearr_52540_54088[(1)] = cljs.core.first((state_52444[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54094 = state_52444;
state_52444 = G__54094;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_52444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_52444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_52543 = f__50734__auto__();
(statearr_52543[(6)] = c__50733__auto___53987);

return statearr_52543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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
var G__52556 = arguments.length;
switch (G__52556) {
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
var G__52563 = arguments.length;
switch (G__52563) {
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
var G__52567 = arguments.length;
switch (G__52567) {
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
var c__50733__auto___54118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_52621){
var state_val_52622 = (state_52621[(1)]);
if((state_val_52622 === (7))){
var state_52621__$1 = state_52621;
var statearr_52625_54131 = state_52621__$1;
(statearr_52625_54131[(2)] = null);

(statearr_52625_54131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (1))){
var state_52621__$1 = state_52621;
var statearr_52626_54133 = state_52621__$1;
(statearr_52626_54133[(2)] = null);

(statearr_52626_54133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (4))){
var inst_52575 = (state_52621[(7)]);
var inst_52576 = (state_52621[(8)]);
var inst_52578 = (inst_52576 < inst_52575);
var state_52621__$1 = state_52621;
if(cljs.core.truth_(inst_52578)){
var statearr_52629_54139 = state_52621__$1;
(statearr_52629_54139[(1)] = (6));

} else {
var statearr_52630_54140 = state_52621__$1;
(statearr_52630_54140[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (15))){
var inst_52607 = (state_52621[(9)]);
var inst_52612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52607);
var state_52621__$1 = state_52621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52621__$1,(17),out,inst_52612);
} else {
if((state_val_52622 === (13))){
var inst_52607 = (state_52621[(9)]);
var inst_52607__$1 = (state_52621[(2)]);
var inst_52608 = cljs.core.some(cljs.core.nil_QMARK_,inst_52607__$1);
var state_52621__$1 = (function (){var statearr_52632 = state_52621;
(statearr_52632[(9)] = inst_52607__$1);

return statearr_52632;
})();
if(cljs.core.truth_(inst_52608)){
var statearr_52633_54152 = state_52621__$1;
(statearr_52633_54152[(1)] = (14));

} else {
var statearr_52634_54154 = state_52621__$1;
(statearr_52634_54154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (6))){
var state_52621__$1 = state_52621;
var statearr_52635_54162 = state_52621__$1;
(statearr_52635_54162[(2)] = null);

(statearr_52635_54162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (17))){
var inst_52614 = (state_52621[(2)]);
var state_52621__$1 = (function (){var statearr_52647 = state_52621;
(statearr_52647[(10)] = inst_52614);

return statearr_52647;
})();
var statearr_52652_54166 = state_52621__$1;
(statearr_52652_54166[(2)] = null);

(statearr_52652_54166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (3))){
var inst_52619 = (state_52621[(2)]);
var state_52621__$1 = state_52621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52621__$1,inst_52619);
} else {
if((state_val_52622 === (12))){
var _ = (function (){var statearr_52653 = state_52621;
(statearr_52653[(4)] = cljs.core.rest((state_52621[(4)])));

return statearr_52653;
})();
var state_52621__$1 = state_52621;
var ex52644 = (state_52621__$1[(2)]);
var statearr_52654_54172 = state_52621__$1;
(statearr_52654_54172[(5)] = ex52644);


if((ex52644 instanceof Object)){
var statearr_52655_54173 = state_52621__$1;
(statearr_52655_54173[(1)] = (11));

(statearr_52655_54173[(5)] = null);

} else {
throw ex52644;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (2))){
var inst_52574 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52575 = cnt;
var inst_52576 = (0);
var state_52621__$1 = (function (){var statearr_52664 = state_52621;
(statearr_52664[(7)] = inst_52575);

(statearr_52664[(8)] = inst_52576);

(statearr_52664[(11)] = inst_52574);

return statearr_52664;
})();
var statearr_52667_54183 = state_52621__$1;
(statearr_52667_54183[(2)] = null);

(statearr_52667_54183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (11))){
var inst_52583 = (state_52621[(2)]);
var inst_52584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52621__$1 = (function (){var statearr_52672 = state_52621;
(statearr_52672[(12)] = inst_52583);

return statearr_52672;
})();
var statearr_52674_54199 = state_52621__$1;
(statearr_52674_54199[(2)] = inst_52584);

(statearr_52674_54199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (9))){
var inst_52576 = (state_52621[(8)]);
var _ = (function (){var statearr_52675 = state_52621;
(statearr_52675[(4)] = cljs.core.cons((12),(state_52621[(4)])));

return statearr_52675;
})();
var inst_52590 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52576) : chs__$1.call(null,inst_52576));
var inst_52592 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52576) : done.call(null,inst_52576));
var inst_52593 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52590,inst_52592);
var ___$1 = (function (){var statearr_52676 = state_52621;
(statearr_52676[(4)] = cljs.core.rest((state_52621[(4)])));

return statearr_52676;
})();
var state_52621__$1 = state_52621;
var statearr_52677_54212 = state_52621__$1;
(statearr_52677_54212[(2)] = inst_52593);

(statearr_52677_54212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (5))){
var inst_52605 = (state_52621[(2)]);
var state_52621__$1 = (function (){var statearr_52682 = state_52621;
(statearr_52682[(13)] = inst_52605);

return statearr_52682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52621__$1,(13),dchan);
} else {
if((state_val_52622 === (14))){
var inst_52610 = cljs.core.async.close_BANG_(out);
var state_52621__$1 = state_52621;
var statearr_52683_54226 = state_52621__$1;
(statearr_52683_54226[(2)] = inst_52610);

(statearr_52683_54226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (16))){
var inst_52617 = (state_52621[(2)]);
var state_52621__$1 = state_52621;
var statearr_52687_54228 = state_52621__$1;
(statearr_52687_54228[(2)] = inst_52617);

(statearr_52687_54228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (10))){
var inst_52576 = (state_52621[(8)]);
var inst_52596 = (state_52621[(2)]);
var inst_52599 = (inst_52576 + (1));
var inst_52576__$1 = inst_52599;
var state_52621__$1 = (function (){var statearr_52690 = state_52621;
(statearr_52690[(8)] = inst_52576__$1);

(statearr_52690[(14)] = inst_52596);

return statearr_52690;
})();
var statearr_52691_54235 = state_52621__$1;
(statearr_52691_54235[(2)] = null);

(statearr_52691_54235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52622 === (8))){
var inst_52603 = (state_52621[(2)]);
var state_52621__$1 = state_52621;
var statearr_52692_54241 = state_52621__$1;
(statearr_52692_54241[(2)] = inst_52603);

(statearr_52692_54241[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_52694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52694[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_52694[(1)] = (1));

return statearr_52694;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_52621){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_52621);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e52695){var ex__49505__auto__ = e52695;
var statearr_52696_54257 = state_52621;
(statearr_52696_54257[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_52621[(4)]))){
var statearr_52698_54259 = state_52621;
(statearr_52698_54259[(1)] = cljs.core.first((state_52621[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54265 = state_52621;
state_52621 = G__54265;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_52621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_52621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_52703 = f__50734__auto__();
(statearr_52703[(6)] = c__50733__auto___54118);

return statearr_52703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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
var G__52708 = arguments.length;
switch (G__52708) {
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
var c__50733__auto___54287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_52743){
var state_val_52744 = (state_52743[(1)]);
if((state_val_52744 === (7))){
var inst_52721 = (state_52743[(7)]);
var inst_52722 = (state_52743[(8)]);
var inst_52721__$1 = (state_52743[(2)]);
var inst_52722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52721__$1,(0),null);
var inst_52723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52721__$1,(1),null);
var inst_52724 = (inst_52722__$1 == null);
var state_52743__$1 = (function (){var statearr_52750 = state_52743;
(statearr_52750[(7)] = inst_52721__$1);

(statearr_52750[(8)] = inst_52722__$1);

(statearr_52750[(9)] = inst_52723);

return statearr_52750;
})();
if(cljs.core.truth_(inst_52724)){
var statearr_52751_54301 = state_52743__$1;
(statearr_52751_54301[(1)] = (8));

} else {
var statearr_52753_54307 = state_52743__$1;
(statearr_52753_54307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (1))){
var inst_52711 = cljs.core.vec(chs);
var inst_52712 = inst_52711;
var state_52743__$1 = (function (){var statearr_52754 = state_52743;
(statearr_52754[(10)] = inst_52712);

return statearr_52754;
})();
var statearr_52755_54311 = state_52743__$1;
(statearr_52755_54311[(2)] = null);

(statearr_52755_54311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (4))){
var inst_52712 = (state_52743[(10)]);
var state_52743__$1 = state_52743;
return cljs.core.async.ioc_alts_BANG_(state_52743__$1,(7),inst_52712);
} else {
if((state_val_52744 === (6))){
var inst_52739 = (state_52743[(2)]);
var state_52743__$1 = state_52743;
var statearr_52756_54319 = state_52743__$1;
(statearr_52756_54319[(2)] = inst_52739);

(statearr_52756_54319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (3))){
var inst_52741 = (state_52743[(2)]);
var state_52743__$1 = state_52743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52743__$1,inst_52741);
} else {
if((state_val_52744 === (2))){
var inst_52712 = (state_52743[(10)]);
var inst_52714 = cljs.core.count(inst_52712);
var inst_52715 = (inst_52714 > (0));
var state_52743__$1 = state_52743;
if(cljs.core.truth_(inst_52715)){
var statearr_52761_54327 = state_52743__$1;
(statearr_52761_54327[(1)] = (4));

} else {
var statearr_52762_54330 = state_52743__$1;
(statearr_52762_54330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (11))){
var inst_52712 = (state_52743[(10)]);
var inst_52732 = (state_52743[(2)]);
var tmp52759 = inst_52712;
var inst_52712__$1 = tmp52759;
var state_52743__$1 = (function (){var statearr_52766 = state_52743;
(statearr_52766[(11)] = inst_52732);

(statearr_52766[(10)] = inst_52712__$1);

return statearr_52766;
})();
var statearr_52767_54340 = state_52743__$1;
(statearr_52767_54340[(2)] = null);

(statearr_52767_54340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (9))){
var inst_52722 = (state_52743[(8)]);
var state_52743__$1 = state_52743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52743__$1,(11),out,inst_52722);
} else {
if((state_val_52744 === (5))){
var inst_52737 = cljs.core.async.close_BANG_(out);
var state_52743__$1 = state_52743;
var statearr_52772_54343 = state_52743__$1;
(statearr_52772_54343[(2)] = inst_52737);

(statearr_52772_54343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (10))){
var inst_52735 = (state_52743[(2)]);
var state_52743__$1 = state_52743;
var statearr_52773_54347 = state_52743__$1;
(statearr_52773_54347[(2)] = inst_52735);

(statearr_52773_54347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52744 === (8))){
var inst_52721 = (state_52743[(7)]);
var inst_52722 = (state_52743[(8)]);
var inst_52712 = (state_52743[(10)]);
var inst_52723 = (state_52743[(9)]);
var inst_52727 = (function (){var cs = inst_52712;
var vec__52717 = inst_52721;
var v = inst_52722;
var c = inst_52723;
return (function (p1__52704_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52704_SHARP_);
});
})();
var inst_52728 = cljs.core.filterv(inst_52727,inst_52712);
var inst_52712__$1 = inst_52728;
var state_52743__$1 = (function (){var statearr_52777 = state_52743;
(statearr_52777[(10)] = inst_52712__$1);

return statearr_52777;
})();
var statearr_52779_54357 = state_52743__$1;
(statearr_52779_54357[(2)] = null);

(statearr_52779_54357[(1)] = (2));


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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_52780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52780[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_52780[(1)] = (1));

return statearr_52780;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_52743){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_52743);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e52783){var ex__49505__auto__ = e52783;
var statearr_52784_54364 = state_52743;
(statearr_52784_54364[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_52743[(4)]))){
var statearr_52785_54367 = state_52743;
(statearr_52785_54367[(1)] = cljs.core.first((state_52743[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54368 = state_52743;
state_52743 = G__54368;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_52743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_52743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_52788 = f__50734__auto__();
(statearr_52788[(6)] = c__50733__auto___54287);

return statearr_52788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
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
var G__52794 = arguments.length;
switch (G__52794) {
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
var c__50733__auto___54379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_52822){
var state_val_52823 = (state_52822[(1)]);
if((state_val_52823 === (7))){
var inst_52804 = (state_52822[(7)]);
var inst_52804__$1 = (state_52822[(2)]);
var inst_52805 = (inst_52804__$1 == null);
var inst_52806 = cljs.core.not(inst_52805);
var state_52822__$1 = (function (){var statearr_52827 = state_52822;
(statearr_52827[(7)] = inst_52804__$1);

return statearr_52827;
})();
if(inst_52806){
var statearr_52828_54390 = state_52822__$1;
(statearr_52828_54390[(1)] = (8));

} else {
var statearr_52829_54391 = state_52822__$1;
(statearr_52829_54391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (1))){
var inst_52798 = (0);
var state_52822__$1 = (function (){var statearr_52831 = state_52822;
(statearr_52831[(8)] = inst_52798);

return statearr_52831;
})();
var statearr_52832_54395 = state_52822__$1;
(statearr_52832_54395[(2)] = null);

(statearr_52832_54395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (4))){
var state_52822__$1 = state_52822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52822__$1,(7),ch);
} else {
if((state_val_52823 === (6))){
var inst_52817 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
var statearr_52836_54396 = state_52822__$1;
(statearr_52836_54396[(2)] = inst_52817);

(statearr_52836_54396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (3))){
var inst_52819 = (state_52822[(2)]);
var inst_52820 = cljs.core.async.close_BANG_(out);
var state_52822__$1 = (function (){var statearr_52837 = state_52822;
(statearr_52837[(9)] = inst_52819);

return statearr_52837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52822__$1,inst_52820);
} else {
if((state_val_52823 === (2))){
var inst_52798 = (state_52822[(8)]);
var inst_52800 = (inst_52798 < n);
var state_52822__$1 = state_52822;
if(cljs.core.truth_(inst_52800)){
var statearr_52839_54403 = state_52822__$1;
(statearr_52839_54403[(1)] = (4));

} else {
var statearr_52840_54404 = state_52822__$1;
(statearr_52840_54404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (11))){
var inst_52798 = (state_52822[(8)]);
var inst_52809 = (state_52822[(2)]);
var inst_52810 = (inst_52798 + (1));
var inst_52798__$1 = inst_52810;
var state_52822__$1 = (function (){var statearr_52841 = state_52822;
(statearr_52841[(8)] = inst_52798__$1);

(statearr_52841[(10)] = inst_52809);

return statearr_52841;
})();
var statearr_52842_54406 = state_52822__$1;
(statearr_52842_54406[(2)] = null);

(statearr_52842_54406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (9))){
var state_52822__$1 = state_52822;
var statearr_52843_54407 = state_52822__$1;
(statearr_52843_54407[(2)] = null);

(statearr_52843_54407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (5))){
var state_52822__$1 = state_52822;
var statearr_52845_54408 = state_52822__$1;
(statearr_52845_54408[(2)] = null);

(statearr_52845_54408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (10))){
var inst_52814 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
var statearr_52847_54411 = state_52822__$1;
(statearr_52847_54411[(2)] = inst_52814);

(statearr_52847_54411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (8))){
var inst_52804 = (state_52822[(7)]);
var state_52822__$1 = state_52822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52822__$1,(11),out,inst_52804);
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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_52849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52849[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_52849[(1)] = (1));

return statearr_52849;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_52822){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_52822);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e52850){var ex__49505__auto__ = e52850;
var statearr_52851_54416 = state_52822;
(statearr_52851_54416[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_52822[(4)]))){
var statearr_52853_54417 = state_52822;
(statearr_52853_54417[(1)] = cljs.core.first((state_52822[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54419 = state_52822;
state_52822 = G__54419;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_52822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_52822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_52854 = f__50734__auto__();
(statearr_52854[(6)] = c__50733__auto___54379);

return statearr_52854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52858 = (function (f,ch,meta52859){
this.f = f;
this.ch = ch;
this.meta52859 = meta52859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52860,meta52859__$1){
var self__ = this;
var _52860__$1 = this;
return (new cljs.core.async.t_cljs$core$async52858(self__.f,self__.ch,meta52859__$1));
}));

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52860){
var self__ = this;
var _52860__$1 = this;
return self__.meta52859;
}));

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52864 = (function (f,ch,meta52859,_,fn1,meta52865){
this.f = f;
this.ch = ch;
this.meta52859 = meta52859;
this._ = _;
this.fn1 = fn1;
this.meta52865 = meta52865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52866,meta52865__$1){
var self__ = this;
var _52866__$1 = this;
return (new cljs.core.async.t_cljs$core$async52864(self__.f,self__.ch,self__.meta52859,self__._,self__.fn1,meta52865__$1));
}));

(cljs.core.async.t_cljs$core$async52864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52866){
var self__ = this;
var _52866__$1 = this;
return self__.meta52865;
}));

(cljs.core.async.t_cljs$core$async52864.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52864.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52855_SHARP_){
var G__52868 = (((p1__52855_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52855_SHARP_) : self__.f.call(null,p1__52855_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52868) : f1.call(null,G__52868));
});
}));

(cljs.core.async.t_cljs$core$async52864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52859","meta52859",1581241382,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52858","cljs.core.async/t_cljs$core$async52858",-2051010357,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52865","meta52865",-1457504665,null)], null);
}));

(cljs.core.async.t_cljs$core$async52864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52864");

(cljs.core.async.t_cljs$core$async52864.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52864.
 */
cljs.core.async.__GT_t_cljs$core$async52864 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52864(f__$1,ch__$1,meta52859__$1,___$2,fn1__$1,meta52865){
return (new cljs.core.async.t_cljs$core$async52864(f__$1,ch__$1,meta52859__$1,___$2,fn1__$1,meta52865));
});

}

return (new cljs.core.async.t_cljs$core$async52864(self__.f,self__.ch,self__.meta52859,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52872 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52872) : self__.f.call(null,G__52872));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52859","meta52859",1581241382,null)], null);
}));

(cljs.core.async.t_cljs$core$async52858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52858");

(cljs.core.async.t_cljs$core$async52858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52858.
 */
cljs.core.async.__GT_t_cljs$core$async52858 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52858(f__$1,ch__$1,meta52859){
return (new cljs.core.async.t_cljs$core$async52858(f__$1,ch__$1,meta52859));
});

}

return (new cljs.core.async.t_cljs$core$async52858(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52875 = (function (f,ch,meta52876){
this.f = f;
this.ch = ch;
this.meta52876 = meta52876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52877,meta52876__$1){
var self__ = this;
var _52877__$1 = this;
return (new cljs.core.async.t_cljs$core$async52875(self__.f,self__.ch,meta52876__$1));
}));

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52877){
var self__ = this;
var _52877__$1 = this;
return self__.meta52876;
}));

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52876","meta52876",167833169,null)], null);
}));

(cljs.core.async.t_cljs$core$async52875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52875");

(cljs.core.async.t_cljs$core$async52875.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52875.
 */
cljs.core.async.__GT_t_cljs$core$async52875 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52875(f__$1,ch__$1,meta52876){
return (new cljs.core.async.t_cljs$core$async52875(f__$1,ch__$1,meta52876));
});

}

return (new cljs.core.async.t_cljs$core$async52875(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52884 = (function (p,ch,meta52885){
this.p = p;
this.ch = ch;
this.meta52885 = meta52885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52886,meta52885__$1){
var self__ = this;
var _52886__$1 = this;
return (new cljs.core.async.t_cljs$core$async52884(self__.p,self__.ch,meta52885__$1));
}));

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52886){
var self__ = this;
var _52886__$1 = this;
return self__.meta52885;
}));

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52885","meta52885",-58999899,null)], null);
}));

(cljs.core.async.t_cljs$core$async52884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52884");

(cljs.core.async.t_cljs$core$async52884.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52884.
 */
cljs.core.async.__GT_t_cljs$core$async52884 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52884(p__$1,ch__$1,meta52885){
return (new cljs.core.async.t_cljs$core$async52884(p__$1,ch__$1,meta52885));
});

}

return (new cljs.core.async.t_cljs$core$async52884(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52896 = arguments.length;
switch (G__52896) {
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
var c__50733__auto___54458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_52927){
var state_val_52928 = (state_52927[(1)]);
if((state_val_52928 === (7))){
var inst_52923 = (state_52927[(2)]);
var state_52927__$1 = state_52927;
var statearr_52929_54463 = state_52927__$1;
(statearr_52929_54463[(2)] = inst_52923);

(statearr_52929_54463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (1))){
var state_52927__$1 = state_52927;
var statearr_52933_54464 = state_52927__$1;
(statearr_52933_54464[(2)] = null);

(statearr_52933_54464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (4))){
var inst_52906 = (state_52927[(7)]);
var inst_52906__$1 = (state_52927[(2)]);
var inst_52907 = (inst_52906__$1 == null);
var state_52927__$1 = (function (){var statearr_52934 = state_52927;
(statearr_52934[(7)] = inst_52906__$1);

return statearr_52934;
})();
if(cljs.core.truth_(inst_52907)){
var statearr_52935_54467 = state_52927__$1;
(statearr_52935_54467[(1)] = (5));

} else {
var statearr_52936_54468 = state_52927__$1;
(statearr_52936_54468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (6))){
var inst_52906 = (state_52927[(7)]);
var inst_52912 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52906) : p.call(null,inst_52906));
var state_52927__$1 = state_52927;
if(cljs.core.truth_(inst_52912)){
var statearr_52940_54469 = state_52927__$1;
(statearr_52940_54469[(1)] = (8));

} else {
var statearr_52941_54470 = state_52927__$1;
(statearr_52941_54470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (3))){
var inst_52925 = (state_52927[(2)]);
var state_52927__$1 = state_52927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52927__$1,inst_52925);
} else {
if((state_val_52928 === (2))){
var state_52927__$1 = state_52927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52927__$1,(4),ch);
} else {
if((state_val_52928 === (11))){
var inst_52915 = (state_52927[(2)]);
var state_52927__$1 = state_52927;
var statearr_52943_54471 = state_52927__$1;
(statearr_52943_54471[(2)] = inst_52915);

(statearr_52943_54471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (9))){
var state_52927__$1 = state_52927;
var statearr_52944_54472 = state_52927__$1;
(statearr_52944_54472[(2)] = null);

(statearr_52944_54472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (5))){
var inst_52909 = cljs.core.async.close_BANG_(out);
var state_52927__$1 = state_52927;
var statearr_52945_54474 = state_52927__$1;
(statearr_52945_54474[(2)] = inst_52909);

(statearr_52945_54474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (10))){
var inst_52918 = (state_52927[(2)]);
var state_52927__$1 = (function (){var statearr_52947 = state_52927;
(statearr_52947[(8)] = inst_52918);

return statearr_52947;
})();
var statearr_52948_54475 = state_52927__$1;
(statearr_52948_54475[(2)] = null);

(statearr_52948_54475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (8))){
var inst_52906 = (state_52927[(7)]);
var state_52927__$1 = state_52927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52927__$1,(11),out,inst_52906);
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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_52949 = [null,null,null,null,null,null,null,null,null];
(statearr_52949[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_52949[(1)] = (1));

return statearr_52949;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_52927){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_52927);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e52951){var ex__49505__auto__ = e52951;
var statearr_52952_54478 = state_52927;
(statearr_52952_54478[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_52927[(4)]))){
var statearr_52953_54479 = state_52927;
(statearr_52953_54479[(1)] = cljs.core.first((state_52927[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54480 = state_52927;
state_52927 = G__54480;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_52927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_52927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_52955 = f__50734__auto__();
(statearr_52955[(6)] = c__50733__auto___54458);

return statearr_52955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52958 = arguments.length;
switch (G__52958) {
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
var c__50733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_53030){
var state_val_53031 = (state_53030[(1)]);
if((state_val_53031 === (7))){
var inst_53025 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53033_54482 = state_53030__$1;
(statearr_53033_54482[(2)] = inst_53025);

(statearr_53033_54482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (20))){
var inst_52994 = (state_53030[(7)]);
var inst_53006 = (state_53030[(2)]);
var inst_53007 = cljs.core.next(inst_52994);
var inst_52980 = inst_53007;
var inst_52981 = null;
var inst_52982 = (0);
var inst_52983 = (0);
var state_53030__$1 = (function (){var statearr_53036 = state_53030;
(statearr_53036[(8)] = inst_52980);

(statearr_53036[(9)] = inst_53006);

(statearr_53036[(10)] = inst_52981);

(statearr_53036[(11)] = inst_52983);

(statearr_53036[(12)] = inst_52982);

return statearr_53036;
})();
var statearr_53037_54483 = state_53030__$1;
(statearr_53037_54483[(2)] = null);

(statearr_53037_54483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (1))){
var state_53030__$1 = state_53030;
var statearr_53038_54489 = state_53030__$1;
(statearr_53038_54489[(2)] = null);

(statearr_53038_54489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (4))){
var inst_52967 = (state_53030[(13)]);
var inst_52967__$1 = (state_53030[(2)]);
var inst_52969 = (inst_52967__$1 == null);
var state_53030__$1 = (function (){var statearr_53039 = state_53030;
(statearr_53039[(13)] = inst_52967__$1);

return statearr_53039;
})();
if(cljs.core.truth_(inst_52969)){
var statearr_53042_54497 = state_53030__$1;
(statearr_53042_54497[(1)] = (5));

} else {
var statearr_53043_54502 = state_53030__$1;
(statearr_53043_54502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (15))){
var state_53030__$1 = state_53030;
var statearr_53047_54508 = state_53030__$1;
(statearr_53047_54508[(2)] = null);

(statearr_53047_54508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (21))){
var state_53030__$1 = state_53030;
var statearr_53048_54509 = state_53030__$1;
(statearr_53048_54509[(2)] = null);

(statearr_53048_54509[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (13))){
var inst_52980 = (state_53030[(8)]);
var inst_52981 = (state_53030[(10)]);
var inst_52983 = (state_53030[(11)]);
var inst_52982 = (state_53030[(12)]);
var inst_52990 = (state_53030[(2)]);
var inst_52991 = (inst_52983 + (1));
var tmp53044 = inst_52980;
var tmp53045 = inst_52981;
var tmp53046 = inst_52982;
var inst_52980__$1 = tmp53044;
var inst_52981__$1 = tmp53045;
var inst_52982__$1 = tmp53046;
var inst_52983__$1 = inst_52991;
var state_53030__$1 = (function (){var statearr_53050 = state_53030;
(statearr_53050[(8)] = inst_52980__$1);

(statearr_53050[(10)] = inst_52981__$1);

(statearr_53050[(11)] = inst_52983__$1);

(statearr_53050[(12)] = inst_52982__$1);

(statearr_53050[(14)] = inst_52990);

return statearr_53050;
})();
var statearr_53052_54510 = state_53030__$1;
(statearr_53052_54510[(2)] = null);

(statearr_53052_54510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (22))){
var state_53030__$1 = state_53030;
var statearr_53053_54511 = state_53030__$1;
(statearr_53053_54511[(2)] = null);

(statearr_53053_54511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (6))){
var inst_52967 = (state_53030[(13)]);
var inst_52978 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52967) : f.call(null,inst_52967));
var inst_52979 = cljs.core.seq(inst_52978);
var inst_52980 = inst_52979;
var inst_52981 = null;
var inst_52982 = (0);
var inst_52983 = (0);
var state_53030__$1 = (function (){var statearr_53054 = state_53030;
(statearr_53054[(8)] = inst_52980);

(statearr_53054[(10)] = inst_52981);

(statearr_53054[(11)] = inst_52983);

(statearr_53054[(12)] = inst_52982);

return statearr_53054;
})();
var statearr_53057_54523 = state_53030__$1;
(statearr_53057_54523[(2)] = null);

(statearr_53057_54523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (17))){
var inst_52994 = (state_53030[(7)]);
var inst_52998 = cljs.core.chunk_first(inst_52994);
var inst_52999 = cljs.core.chunk_rest(inst_52994);
var inst_53000 = cljs.core.count(inst_52998);
var inst_52980 = inst_52999;
var inst_52981 = inst_52998;
var inst_52982 = inst_53000;
var inst_52983 = (0);
var state_53030__$1 = (function (){var statearr_53059 = state_53030;
(statearr_53059[(8)] = inst_52980);

(statearr_53059[(10)] = inst_52981);

(statearr_53059[(11)] = inst_52983);

(statearr_53059[(12)] = inst_52982);

return statearr_53059;
})();
var statearr_53060_54546 = state_53030__$1;
(statearr_53060_54546[(2)] = null);

(statearr_53060_54546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (3))){
var inst_53027 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53030__$1,inst_53027);
} else {
if((state_val_53031 === (12))){
var inst_53015 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53062_54547 = state_53030__$1;
(statearr_53062_54547[(2)] = inst_53015);

(statearr_53062_54547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (2))){
var state_53030__$1 = state_53030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53030__$1,(4),in$);
} else {
if((state_val_53031 === (23))){
var inst_53023 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53063_54557 = state_53030__$1;
(statearr_53063_54557[(2)] = inst_53023);

(statearr_53063_54557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (19))){
var inst_53010 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53064_54568 = state_53030__$1;
(statearr_53064_54568[(2)] = inst_53010);

(statearr_53064_54568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (11))){
var inst_52994 = (state_53030[(7)]);
var inst_52980 = (state_53030[(8)]);
var inst_52994__$1 = cljs.core.seq(inst_52980);
var state_53030__$1 = (function (){var statearr_53067 = state_53030;
(statearr_53067[(7)] = inst_52994__$1);

return statearr_53067;
})();
if(inst_52994__$1){
var statearr_53068_54583 = state_53030__$1;
(statearr_53068_54583[(1)] = (14));

} else {
var statearr_53069_54584 = state_53030__$1;
(statearr_53069_54584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (9))){
var inst_53017 = (state_53030[(2)]);
var inst_53018 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53030__$1 = (function (){var statearr_53070 = state_53030;
(statearr_53070[(15)] = inst_53017);

return statearr_53070;
})();
if(cljs.core.truth_(inst_53018)){
var statearr_53072_54585 = state_53030__$1;
(statearr_53072_54585[(1)] = (21));

} else {
var statearr_53073_54586 = state_53030__$1;
(statearr_53073_54586[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (5))){
var inst_52971 = cljs.core.async.close_BANG_(out);
var state_53030__$1 = state_53030;
var statearr_53074_54587 = state_53030__$1;
(statearr_53074_54587[(2)] = inst_52971);

(statearr_53074_54587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (14))){
var inst_52994 = (state_53030[(7)]);
var inst_52996 = cljs.core.chunked_seq_QMARK_(inst_52994);
var state_53030__$1 = state_53030;
if(inst_52996){
var statearr_53075_54588 = state_53030__$1;
(statearr_53075_54588[(1)] = (17));

} else {
var statearr_53076_54589 = state_53030__$1;
(statearr_53076_54589[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (16))){
var inst_53013 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53077_54590 = state_53030__$1;
(statearr_53077_54590[(2)] = inst_53013);

(statearr_53077_54590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (10))){
var inst_52981 = (state_53030[(10)]);
var inst_52983 = (state_53030[(11)]);
var inst_52988 = cljs.core._nth(inst_52981,inst_52983);
var state_53030__$1 = state_53030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53030__$1,(13),out,inst_52988);
} else {
if((state_val_53031 === (18))){
var inst_52994 = (state_53030[(7)]);
var inst_53004 = cljs.core.first(inst_52994);
var state_53030__$1 = state_53030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53030__$1,(20),out,inst_53004);
} else {
if((state_val_53031 === (8))){
var inst_52983 = (state_53030[(11)]);
var inst_52982 = (state_53030[(12)]);
var inst_52985 = (inst_52983 < inst_52982);
var inst_52986 = inst_52985;
var state_53030__$1 = state_53030;
if(cljs.core.truth_(inst_52986)){
var statearr_53078_54591 = state_53030__$1;
(statearr_53078_54591[(1)] = (10));

} else {
var statearr_53079_54592 = state_53030__$1;
(statearr_53079_54592[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__49502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49502__auto____0 = (function (){
var statearr_53080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53080[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49502__auto__);

(statearr_53080[(1)] = (1));

return statearr_53080;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49502__auto____1 = (function (state_53030){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_53030);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e53081){var ex__49505__auto__ = e53081;
var statearr_53082_54594 = state_53030;
(statearr_53082_54594[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_53030[(4)]))){
var statearr_53083_54595 = state_53030;
(statearr_53083_54595[(1)] = cljs.core.first((state_53030[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54596 = state_53030;
state_53030 = G__54596;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49502__auto__ = function(state_53030){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49502__auto____1.call(this,state_53030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_53085 = f__50734__auto__();
(statearr_53085[(6)] = c__50733__auto__);

return statearr_53085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));

return c__50733__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53087 = arguments.length;
switch (G__53087) {
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
var G__53090 = arguments.length;
switch (G__53090) {
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
var G__53097 = arguments.length;
switch (G__53097) {
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
var c__50733__auto___54604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_53126){
var state_val_53127 = (state_53126[(1)]);
if((state_val_53127 === (7))){
var inst_53121 = (state_53126[(2)]);
var state_53126__$1 = state_53126;
var statearr_53128_54609 = state_53126__$1;
(statearr_53128_54609[(2)] = inst_53121);

(statearr_53128_54609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (1))){
var inst_53103 = null;
var state_53126__$1 = (function (){var statearr_53129 = state_53126;
(statearr_53129[(7)] = inst_53103);

return statearr_53129;
})();
var statearr_53130_54610 = state_53126__$1;
(statearr_53130_54610[(2)] = null);

(statearr_53130_54610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (4))){
var inst_53106 = (state_53126[(8)]);
var inst_53106__$1 = (state_53126[(2)]);
var inst_53107 = (inst_53106__$1 == null);
var inst_53108 = cljs.core.not(inst_53107);
var state_53126__$1 = (function (){var statearr_53131 = state_53126;
(statearr_53131[(8)] = inst_53106__$1);

return statearr_53131;
})();
if(inst_53108){
var statearr_53132_54615 = state_53126__$1;
(statearr_53132_54615[(1)] = (5));

} else {
var statearr_53133_54616 = state_53126__$1;
(statearr_53133_54616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (6))){
var state_53126__$1 = state_53126;
var statearr_53134_54618 = state_53126__$1;
(statearr_53134_54618[(2)] = null);

(statearr_53134_54618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (3))){
var inst_53123 = (state_53126[(2)]);
var inst_53124 = cljs.core.async.close_BANG_(out);
var state_53126__$1 = (function (){var statearr_53135 = state_53126;
(statearr_53135[(9)] = inst_53123);

return statearr_53135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53126__$1,inst_53124);
} else {
if((state_val_53127 === (2))){
var state_53126__$1 = state_53126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53126__$1,(4),ch);
} else {
if((state_val_53127 === (11))){
var inst_53106 = (state_53126[(8)]);
var inst_53115 = (state_53126[(2)]);
var inst_53103 = inst_53106;
var state_53126__$1 = (function (){var statearr_53136 = state_53126;
(statearr_53136[(10)] = inst_53115);

(statearr_53136[(7)] = inst_53103);

return statearr_53136;
})();
var statearr_53137_54619 = state_53126__$1;
(statearr_53137_54619[(2)] = null);

(statearr_53137_54619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (9))){
var inst_53106 = (state_53126[(8)]);
var state_53126__$1 = state_53126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53126__$1,(11),out,inst_53106);
} else {
if((state_val_53127 === (5))){
var inst_53103 = (state_53126[(7)]);
var inst_53106 = (state_53126[(8)]);
var inst_53110 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53106,inst_53103);
var state_53126__$1 = state_53126;
if(inst_53110){
var statearr_53139_54620 = state_53126__$1;
(statearr_53139_54620[(1)] = (8));

} else {
var statearr_53140_54621 = state_53126__$1;
(statearr_53140_54621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (10))){
var inst_53118 = (state_53126[(2)]);
var state_53126__$1 = state_53126;
var statearr_53144_54622 = state_53126__$1;
(statearr_53144_54622[(2)] = inst_53118);

(statearr_53144_54622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53127 === (8))){
var inst_53103 = (state_53126[(7)]);
var tmp53138 = inst_53103;
var inst_53103__$1 = tmp53138;
var state_53126__$1 = (function (){var statearr_53145 = state_53126;
(statearr_53145[(7)] = inst_53103__$1);

return statearr_53145;
})();
var statearr_53146_54623 = state_53126__$1;
(statearr_53146_54623[(2)] = null);

(statearr_53146_54623[(1)] = (2));


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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_53147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53147[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_53147[(1)] = (1));

return statearr_53147;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_53126){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_53126);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e53148){var ex__49505__auto__ = e53148;
var statearr_53149_54624 = state_53126;
(statearr_53149_54624[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_53126[(4)]))){
var statearr_53150_54625 = state_53126;
(statearr_53150_54625[(1)] = cljs.core.first((state_53126[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54626 = state_53126;
state_53126 = G__54626;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_53126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_53126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_53151 = f__50734__auto__();
(statearr_53151[(6)] = c__50733__auto___54604);

return statearr_53151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53154 = arguments.length;
switch (G__53154) {
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
var c__50733__auto___54628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_53196){
var state_val_53197 = (state_53196[(1)]);
if((state_val_53197 === (7))){
var inst_53192 = (state_53196[(2)]);
var state_53196__$1 = state_53196;
var statearr_53203_54629 = state_53196__$1;
(statearr_53203_54629[(2)] = inst_53192);

(statearr_53203_54629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (1))){
var inst_53159 = (new Array(n));
var inst_53160 = inst_53159;
var inst_53161 = (0);
var state_53196__$1 = (function (){var statearr_53204 = state_53196;
(statearr_53204[(7)] = inst_53161);

(statearr_53204[(8)] = inst_53160);

return statearr_53204;
})();
var statearr_53205_54630 = state_53196__$1;
(statearr_53205_54630[(2)] = null);

(statearr_53205_54630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (4))){
var inst_53164 = (state_53196[(9)]);
var inst_53164__$1 = (state_53196[(2)]);
var inst_53165 = (inst_53164__$1 == null);
var inst_53166 = cljs.core.not(inst_53165);
var state_53196__$1 = (function (){var statearr_53206 = state_53196;
(statearr_53206[(9)] = inst_53164__$1);

return statearr_53206;
})();
if(inst_53166){
var statearr_53207_54631 = state_53196__$1;
(statearr_53207_54631[(1)] = (5));

} else {
var statearr_53208_54632 = state_53196__$1;
(statearr_53208_54632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (15))){
var inst_53186 = (state_53196[(2)]);
var state_53196__$1 = state_53196;
var statearr_53210_54633 = state_53196__$1;
(statearr_53210_54633[(2)] = inst_53186);

(statearr_53210_54633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (13))){
var state_53196__$1 = state_53196;
var statearr_53211_54634 = state_53196__$1;
(statearr_53211_54634[(2)] = null);

(statearr_53211_54634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (6))){
var inst_53161 = (state_53196[(7)]);
var inst_53182 = (inst_53161 > (0));
var state_53196__$1 = state_53196;
if(cljs.core.truth_(inst_53182)){
var statearr_53212_54635 = state_53196__$1;
(statearr_53212_54635[(1)] = (12));

} else {
var statearr_53214_54636 = state_53196__$1;
(statearr_53214_54636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (3))){
var inst_53194 = (state_53196[(2)]);
var state_53196__$1 = state_53196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53196__$1,inst_53194);
} else {
if((state_val_53197 === (12))){
var inst_53160 = (state_53196[(8)]);
var inst_53184 = cljs.core.vec(inst_53160);
var state_53196__$1 = state_53196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53196__$1,(15),out,inst_53184);
} else {
if((state_val_53197 === (2))){
var state_53196__$1 = state_53196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53196__$1,(4),ch);
} else {
if((state_val_53197 === (11))){
var inst_53176 = (state_53196[(2)]);
var inst_53177 = (new Array(n));
var inst_53160 = inst_53177;
var inst_53161 = (0);
var state_53196__$1 = (function (){var statearr_53218 = state_53196;
(statearr_53218[(7)] = inst_53161);

(statearr_53218[(8)] = inst_53160);

(statearr_53218[(10)] = inst_53176);

return statearr_53218;
})();
var statearr_53219_54637 = state_53196__$1;
(statearr_53219_54637[(2)] = null);

(statearr_53219_54637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (9))){
var inst_53160 = (state_53196[(8)]);
var inst_53174 = cljs.core.vec(inst_53160);
var state_53196__$1 = state_53196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53196__$1,(11),out,inst_53174);
} else {
if((state_val_53197 === (5))){
var inst_53161 = (state_53196[(7)]);
var inst_53160 = (state_53196[(8)]);
var inst_53164 = (state_53196[(9)]);
var inst_53169 = (state_53196[(11)]);
var inst_53168 = (inst_53160[inst_53161] = inst_53164);
var inst_53169__$1 = (inst_53161 + (1));
var inst_53170 = (inst_53169__$1 < n);
var state_53196__$1 = (function (){var statearr_53220 = state_53196;
(statearr_53220[(11)] = inst_53169__$1);

(statearr_53220[(12)] = inst_53168);

return statearr_53220;
})();
if(cljs.core.truth_(inst_53170)){
var statearr_53221_54638 = state_53196__$1;
(statearr_53221_54638[(1)] = (8));

} else {
var statearr_53222_54639 = state_53196__$1;
(statearr_53222_54639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (14))){
var inst_53189 = (state_53196[(2)]);
var inst_53190 = cljs.core.async.close_BANG_(out);
var state_53196__$1 = (function (){var statearr_53224 = state_53196;
(statearr_53224[(13)] = inst_53189);

return statearr_53224;
})();
var statearr_53225_54640 = state_53196__$1;
(statearr_53225_54640[(2)] = inst_53190);

(statearr_53225_54640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (10))){
var inst_53180 = (state_53196[(2)]);
var state_53196__$1 = state_53196;
var statearr_53226_54641 = state_53196__$1;
(statearr_53226_54641[(2)] = inst_53180);

(statearr_53226_54641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53197 === (8))){
var inst_53160 = (state_53196[(8)]);
var inst_53169 = (state_53196[(11)]);
var tmp53223 = inst_53160;
var inst_53160__$1 = tmp53223;
var inst_53161 = inst_53169;
var state_53196__$1 = (function (){var statearr_53227 = state_53196;
(statearr_53227[(7)] = inst_53161);

(statearr_53227[(8)] = inst_53160__$1);

return statearr_53227;
})();
var statearr_53228_54642 = state_53196__$1;
(statearr_53228_54642[(2)] = null);

(statearr_53228_54642[(1)] = (2));


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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_53229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53229[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_53229[(1)] = (1));

return statearr_53229;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_53196){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_53196);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e53230){var ex__49505__auto__ = e53230;
var statearr_53231_54643 = state_53196;
(statearr_53231_54643[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_53196[(4)]))){
var statearr_53232_54644 = state_53196;
(statearr_53232_54644[(1)] = cljs.core.first((state_53196[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54645 = state_53196;
state_53196 = G__54645;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_53196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_53196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_53233 = f__50734__auto__();
(statearr_53233[(6)] = c__50733__auto___54628);

return statearr_53233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53235 = arguments.length;
switch (G__53235) {
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
var c__50733__auto___54647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50734__auto__ = (function (){var switch__49501__auto__ = (function (state_53280){
var state_val_53281 = (state_53280[(1)]);
if((state_val_53281 === (7))){
var inst_53276 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53282_54648 = state_53280__$1;
(statearr_53282_54648[(2)] = inst_53276);

(statearr_53282_54648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (1))){
var inst_53236 = [];
var inst_53237 = inst_53236;
var inst_53238 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53280__$1 = (function (){var statearr_53283 = state_53280;
(statearr_53283[(7)] = inst_53238);

(statearr_53283[(8)] = inst_53237);

return statearr_53283;
})();
var statearr_53284_54649 = state_53280__$1;
(statearr_53284_54649[(2)] = null);

(statearr_53284_54649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (4))){
var inst_53241 = (state_53280[(9)]);
var inst_53241__$1 = (state_53280[(2)]);
var inst_53242 = (inst_53241__$1 == null);
var inst_53243 = cljs.core.not(inst_53242);
var state_53280__$1 = (function (){var statearr_53285 = state_53280;
(statearr_53285[(9)] = inst_53241__$1);

return statearr_53285;
})();
if(inst_53243){
var statearr_53286_54650 = state_53280__$1;
(statearr_53286_54650[(1)] = (5));

} else {
var statearr_53287_54651 = state_53280__$1;
(statearr_53287_54651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (15))){
var inst_53270 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53288_54652 = state_53280__$1;
(statearr_53288_54652[(2)] = inst_53270);

(statearr_53288_54652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (13))){
var state_53280__$1 = state_53280;
var statearr_53289_54653 = state_53280__$1;
(statearr_53289_54653[(2)] = null);

(statearr_53289_54653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (6))){
var inst_53237 = (state_53280[(8)]);
var inst_53265 = inst_53237.length;
var inst_53266 = (inst_53265 > (0));
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53266)){
var statearr_53290_54654 = state_53280__$1;
(statearr_53290_54654[(1)] = (12));

} else {
var statearr_53291_54655 = state_53280__$1;
(statearr_53291_54655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (3))){
var inst_53278 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53280__$1,inst_53278);
} else {
if((state_val_53281 === (12))){
var inst_53237 = (state_53280[(8)]);
var inst_53268 = cljs.core.vec(inst_53237);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53280__$1,(15),out,inst_53268);
} else {
if((state_val_53281 === (2))){
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53280__$1,(4),ch);
} else {
if((state_val_53281 === (11))){
var inst_53248 = (state_53280[(10)]);
var inst_53241 = (state_53280[(9)]);
var inst_53258 = (state_53280[(2)]);
var inst_53259 = [];
var inst_53260 = inst_53259.push(inst_53241);
var inst_53237 = inst_53259;
var inst_53238 = inst_53248;
var state_53280__$1 = (function (){var statearr_53292 = state_53280;
(statearr_53292[(7)] = inst_53238);

(statearr_53292[(11)] = inst_53258);

(statearr_53292[(12)] = inst_53260);

(statearr_53292[(8)] = inst_53237);

return statearr_53292;
})();
var statearr_53294_54656 = state_53280__$1;
(statearr_53294_54656[(2)] = null);

(statearr_53294_54656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (9))){
var inst_53237 = (state_53280[(8)]);
var inst_53256 = cljs.core.vec(inst_53237);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53280__$1,(11),out,inst_53256);
} else {
if((state_val_53281 === (5))){
var inst_53248 = (state_53280[(10)]);
var inst_53238 = (state_53280[(7)]);
var inst_53241 = (state_53280[(9)]);
var inst_53248__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53241) : f.call(null,inst_53241));
var inst_53249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53248__$1,inst_53238);
var inst_53250 = cljs.core.keyword_identical_QMARK_(inst_53238,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53251 = ((inst_53249) || (inst_53250));
var state_53280__$1 = (function (){var statearr_53295 = state_53280;
(statearr_53295[(10)] = inst_53248__$1);

return statearr_53295;
})();
if(cljs.core.truth_(inst_53251)){
var statearr_53296_54657 = state_53280__$1;
(statearr_53296_54657[(1)] = (8));

} else {
var statearr_53297_54658 = state_53280__$1;
(statearr_53297_54658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (14))){
var inst_53273 = (state_53280[(2)]);
var inst_53274 = cljs.core.async.close_BANG_(out);
var state_53280__$1 = (function (){var statearr_53301 = state_53280;
(statearr_53301[(13)] = inst_53273);

return statearr_53301;
})();
var statearr_53302_54659 = state_53280__$1;
(statearr_53302_54659[(2)] = inst_53274);

(statearr_53302_54659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (10))){
var inst_53263 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53303_54660 = state_53280__$1;
(statearr_53303_54660[(2)] = inst_53263);

(statearr_53303_54660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (8))){
var inst_53248 = (state_53280[(10)]);
var inst_53241 = (state_53280[(9)]);
var inst_53237 = (state_53280[(8)]);
var inst_53253 = inst_53237.push(inst_53241);
var tmp53299 = inst_53237;
var inst_53237__$1 = tmp53299;
var inst_53238 = inst_53248;
var state_53280__$1 = (function (){var statearr_53304 = state_53280;
(statearr_53304[(7)] = inst_53238);

(statearr_53304[(8)] = inst_53237__$1);

(statearr_53304[(14)] = inst_53253);

return statearr_53304;
})();
var statearr_53305_54661 = state_53280__$1;
(statearr_53305_54661[(2)] = null);

(statearr_53305_54661[(1)] = (2));


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
var cljs$core$async$state_machine__49502__auto__ = null;
var cljs$core$async$state_machine__49502__auto____0 = (function (){
var statearr_53306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53306[(0)] = cljs$core$async$state_machine__49502__auto__);

(statearr_53306[(1)] = (1));

return statearr_53306;
});
var cljs$core$async$state_machine__49502__auto____1 = (function (state_53280){
while(true){
var ret_value__49503__auto__ = (function (){try{while(true){
var result__49504__auto__ = switch__49501__auto__(state_53280);
if(cljs.core.keyword_identical_QMARK_(result__49504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49504__auto__;
}
break;
}
}catch (e53307){var ex__49505__auto__ = e53307;
var statearr_53308_54662 = state_53280;
(statearr_53308_54662[(2)] = ex__49505__auto__);


if(cljs.core.seq((state_53280[(4)]))){
var statearr_53309_54663 = state_53280;
(statearr_53309_54663[(1)] = cljs.core.first((state_53280[(4)])));

} else {
throw ex__49505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54664 = state_53280;
state_53280 = G__54664;
continue;
} else {
return ret_value__49503__auto__;
}
break;
}
});
cljs$core$async$state_machine__49502__auto__ = function(state_53280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49502__auto____1.call(this,state_53280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49502__auto____0;
cljs$core$async$state_machine__49502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49502__auto____1;
return cljs$core$async$state_machine__49502__auto__;
})()
})();
var state__50735__auto__ = (function (){var statearr_53310 = f__50734__auto__();
(statearr_53310[(6)] = c__50733__auto___54647);

return statearr_53310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50735__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
