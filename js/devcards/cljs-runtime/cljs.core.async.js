goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42669 = arguments.length;
switch (G__42669) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42675 = (function (f,blockable,meta42676){
this.f = f;
this.blockable = blockable;
this.meta42676 = meta42676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42677,meta42676__$1){
var self__ = this;
var _42677__$1 = this;
return (new cljs.core.async.t_cljs$core$async42675(self__.f,self__.blockable,meta42676__$1));
}));

(cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42677){
var self__ = this;
var _42677__$1 = this;
return self__.meta42676;
}));

(cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42676","meta42676",967778844,null)], null);
}));

(cljs.core.async.t_cljs$core$async42675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42675");

(cljs.core.async.t_cljs$core$async42675.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42675.
 */
cljs.core.async.__GT_t_cljs$core$async42675 = (function cljs$core$async$__GT_t_cljs$core$async42675(f__$1,blockable__$1,meta42676){
return (new cljs.core.async.t_cljs$core$async42675(f__$1,blockable__$1,meta42676));
});

}

return (new cljs.core.async.t_cljs$core$async42675(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42685 = arguments.length;
switch (G__42685) {
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
var G__42696 = arguments.length;
switch (G__42696) {
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
var G__42703 = arguments.length;
switch (G__42703) {
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
var val_45745 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45745) : fn1.call(null,val_45745));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45745) : fn1.call(null,val_45745));
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
var G__42710 = arguments.length;
switch (G__42710) {
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
var n__4613__auto___45772 = n;
var x_45773 = (0);
while(true){
if((x_45773 < n__4613__auto___45772)){
(a[x_45773] = x_45773);

var G__45775 = (x_45773 + (1));
x_45773 = G__45775;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42729 = (function (flag,meta42730){
this.flag = flag;
this.meta42730 = meta42730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42731,meta42730__$1){
var self__ = this;
var _42731__$1 = this;
return (new cljs.core.async.t_cljs$core$async42729(self__.flag,meta42730__$1));
}));

(cljs.core.async.t_cljs$core$async42729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42731){
var self__ = this;
var _42731__$1 = this;
return self__.meta42730;
}));

(cljs.core.async.t_cljs$core$async42729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42730","meta42730",2060730195,null)], null);
}));

(cljs.core.async.t_cljs$core$async42729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42729");

(cljs.core.async.t_cljs$core$async42729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42729.
 */
cljs.core.async.__GT_t_cljs$core$async42729 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42729(flag__$1,meta42730){
return (new cljs.core.async.t_cljs$core$async42729(flag__$1,meta42730));
});

}

return (new cljs.core.async.t_cljs$core$async42729(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42752 = (function (flag,cb,meta42753){
this.flag = flag;
this.cb = cb;
this.meta42753 = meta42753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42754,meta42753__$1){
var self__ = this;
var _42754__$1 = this;
return (new cljs.core.async.t_cljs$core$async42752(self__.flag,self__.cb,meta42753__$1));
}));

(cljs.core.async.t_cljs$core$async42752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42754){
var self__ = this;
var _42754__$1 = this;
return self__.meta42753;
}));

(cljs.core.async.t_cljs$core$async42752.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42753","meta42753",1025350429,null)], null);
}));

(cljs.core.async.t_cljs$core$async42752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42752");

(cljs.core.async.t_cljs$core$async42752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42752.
 */
cljs.core.async.__GT_t_cljs$core$async42752 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42752(flag__$1,cb__$1,meta42753){
return (new cljs.core.async.t_cljs$core$async42752(flag__$1,cb__$1,meta42753));
});

}

return (new cljs.core.async.t_cljs$core$async42752(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42773_SHARP_){
var G__42778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42773_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42778) : fret.call(null,G__42778));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42774_SHARP_){
var G__42783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42774_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42783) : fret.call(null,G__42783));
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
var G__45828 = (i + (1));
i = G__45828;
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
var len__4736__auto___45832 = arguments.length;
var i__4737__auto___45833 = (0);
while(true){
if((i__4737__auto___45833 < len__4736__auto___45832)){
args__4742__auto__.push((arguments[i__4737__auto___45833]));

var G__45834 = (i__4737__auto___45833 + (1));
i__4737__auto___45833 = G__45834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42795){
var map__42796 = p__42795;
var map__42796__$1 = (((((!((map__42796 == null))))?(((((map__42796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42796):map__42796);
var opts = map__42796__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42789){
var G__42790 = cljs.core.first(seq42789);
var seq42789__$1 = cljs.core.next(seq42789);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42790,seq42789__$1);
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
var G__42799 = arguments.length;
switch (G__42799) {
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
var c__42582__auto___45844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_42837){
var state_val_42838 = (state_42837[(1)]);
if((state_val_42838 === (7))){
var inst_42828 = (state_42837[(2)]);
var state_42837__$1 = state_42837;
var statearr_42845_45848 = state_42837__$1;
(statearr_42845_45848[(2)] = inst_42828);

(statearr_42845_45848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (1))){
var state_42837__$1 = state_42837;
var statearr_42846_45849 = state_42837__$1;
(statearr_42846_45849[(2)] = null);

(statearr_42846_45849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (4))){
var inst_42803 = (state_42837[(7)]);
var inst_42803__$1 = (state_42837[(2)]);
var inst_42805 = (inst_42803__$1 == null);
var state_42837__$1 = (function (){var statearr_42847 = state_42837;
(statearr_42847[(7)] = inst_42803__$1);

return statearr_42847;
})();
if(cljs.core.truth_(inst_42805)){
var statearr_42848_45851 = state_42837__$1;
(statearr_42848_45851[(1)] = (5));

} else {
var statearr_42849_45852 = state_42837__$1;
(statearr_42849_45852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (13))){
var state_42837__$1 = state_42837;
var statearr_42850_45854 = state_42837__$1;
(statearr_42850_45854[(2)] = null);

(statearr_42850_45854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (6))){
var inst_42803 = (state_42837[(7)]);
var state_42837__$1 = state_42837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42837__$1,(11),to,inst_42803);
} else {
if((state_val_42838 === (3))){
var inst_42832 = (state_42837[(2)]);
var state_42837__$1 = state_42837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42837__$1,inst_42832);
} else {
if((state_val_42838 === (12))){
var state_42837__$1 = state_42837;
var statearr_42854_45855 = state_42837__$1;
(statearr_42854_45855[(2)] = null);

(statearr_42854_45855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (2))){
var state_42837__$1 = state_42837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42837__$1,(4),from);
} else {
if((state_val_42838 === (11))){
var inst_42817 = (state_42837[(2)]);
var state_42837__$1 = state_42837;
if(cljs.core.truth_(inst_42817)){
var statearr_42858_45860 = state_42837__$1;
(statearr_42858_45860[(1)] = (12));

} else {
var statearr_42859_45861 = state_42837__$1;
(statearr_42859_45861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (9))){
var state_42837__$1 = state_42837;
var statearr_42860_45867 = state_42837__$1;
(statearr_42860_45867[(2)] = null);

(statearr_42860_45867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (5))){
var state_42837__$1 = state_42837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42861_45868 = state_42837__$1;
(statearr_42861_45868[(1)] = (8));

} else {
var statearr_42862_45870 = state_42837__$1;
(statearr_42862_45870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (14))){
var inst_42826 = (state_42837[(2)]);
var state_42837__$1 = state_42837;
var statearr_42863_45874 = state_42837__$1;
(statearr_42863_45874[(2)] = inst_42826);

(statearr_42863_45874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (10))){
var inst_42813 = (state_42837[(2)]);
var state_42837__$1 = state_42837;
var statearr_42864_45875 = state_42837__$1;
(statearr_42864_45875[(2)] = inst_42813);

(statearr_42864_45875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42838 === (8))){
var inst_42808 = cljs.core.async.close_BANG_(to);
var state_42837__$1 = state_42837;
var statearr_42865_45877 = state_42837__$1;
(statearr_42865_45877[(2)] = inst_42808);

(statearr_42865_45877[(1)] = (10));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_42870 = [null,null,null,null,null,null,null,null];
(statearr_42870[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_42870[(1)] = (1));

return statearr_42870;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_42837){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_42837);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e42873){var ex__42119__auto__ = e42873;
var statearr_42874_45882 = state_42837;
(statearr_42874_45882[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_42837[(4)]))){
var statearr_42875_45883 = state_42837;
(statearr_42875_45883[(1)] = cljs.core.first((state_42837[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45889 = state_42837;
state_42837 = G__45889;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_42837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_42837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_42877 = f__42583__auto__();
(statearr_42877[(6)] = c__42582__auto___45844);

return statearr_42877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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
var process = (function (p__42900){
var vec__42901 = p__42900;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42901,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42901,(1),null);
var job = vec__42901;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42582__auto___45898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_42912){
var state_val_42913 = (state_42912[(1)]);
if((state_val_42913 === (1))){
var state_42912__$1 = state_42912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42912__$1,(2),res,v);
} else {
if((state_val_42913 === (2))){
var inst_42907 = (state_42912[(2)]);
var inst_42910 = cljs.core.async.close_BANG_(res);
var state_42912__$1 = (function (){var statearr_42924 = state_42912;
(statearr_42924[(7)] = inst_42907);

return statearr_42924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42912__$1,inst_42910);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0 = (function (){
var statearr_42933 = [null,null,null,null,null,null,null,null];
(statearr_42933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__);

(statearr_42933[(1)] = (1));

return statearr_42933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1 = (function (state_42912){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_42912);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e42939){var ex__42119__auto__ = e42939;
var statearr_42940_45912 = state_42912;
(statearr_42940_45912[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_42912[(4)]))){
var statearr_42943_45913 = state_42912;
(statearr_42943_45913[(1)] = cljs.core.first((state_42912[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45915 = state_42912;
state_42912 = G__45915;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = function(state_42912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1.call(this,state_42912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_42952 = f__42583__auto__();
(statearr_42952[(6)] = c__42582__auto___45898);

return statearr_42952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42962){
var vec__42963 = p__42962;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42963,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42963,(1),null);
var job = vec__42963;
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
var n__4613__auto___45926 = n;
var __45927 = (0);
while(true){
if((__45927 < n__4613__auto___45926)){
var G__42979_45928 = type;
var G__42979_45929__$1 = (((G__42979_45928 instanceof cljs.core.Keyword))?G__42979_45928.fqn:null);
switch (G__42979_45929__$1) {
case "compute":
var c__42582__auto___45931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45927,c__42582__auto___45931,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async){
return (function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = ((function (__45927,c__42582__auto___45931,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async){
return (function (state_43002){
var state_val_43003 = (state_43002[(1)]);
if((state_val_43003 === (1))){
var state_43002__$1 = state_43002;
var statearr_43013_45935 = state_43002__$1;
(statearr_43013_45935[(2)] = null);

(statearr_43013_45935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43003 === (2))){
var state_43002__$1 = state_43002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43002__$1,(4),jobs);
} else {
if((state_val_43003 === (3))){
var inst_43000 = (state_43002[(2)]);
var state_43002__$1 = state_43002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43002__$1,inst_43000);
} else {
if((state_val_43003 === (4))){
var inst_42988 = (state_43002[(2)]);
var inst_42991 = process(inst_42988);
var state_43002__$1 = state_43002;
if(cljs.core.truth_(inst_42991)){
var statearr_43014_45943 = state_43002__$1;
(statearr_43014_45943[(1)] = (5));

} else {
var statearr_43015_45944 = state_43002__$1;
(statearr_43015_45944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43003 === (5))){
var state_43002__$1 = state_43002;
var statearr_43018_45946 = state_43002__$1;
(statearr_43018_45946[(2)] = null);

(statearr_43018_45946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43003 === (6))){
var state_43002__$1 = state_43002;
var statearr_43019_45947 = state_43002__$1;
(statearr_43019_45947[(2)] = null);

(statearr_43019_45947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43003 === (7))){
var inst_42997 = (state_43002[(2)]);
var state_43002__$1 = state_43002;
var statearr_43022_45949 = state_43002__$1;
(statearr_43022_45949[(2)] = inst_42997);

(statearr_43022_45949[(1)] = (3));


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
});})(__45927,c__42582__auto___45931,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async))
;
return ((function (__45927,switch__42115__auto__,c__42582__auto___45931,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0 = (function (){
var statearr_43043 = [null,null,null,null,null,null,null];
(statearr_43043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__);

(statearr_43043[(1)] = (1));

return statearr_43043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1 = (function (state_43002){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43002);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43047){var ex__42119__auto__ = e43047;
var statearr_43048_45959 = state_43002;
(statearr_43048_45959[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43002[(4)]))){
var statearr_43050_45960 = state_43002;
(statearr_43050_45960[(1)] = cljs.core.first((state_43002[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45966 = state_43002;
state_43002 = G__45966;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = function(state_43002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1.call(this,state_43002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__;
})()
;})(__45927,switch__42115__auto__,c__42582__auto___45931,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async))
})();
var state__42584__auto__ = (function (){var statearr_43054 = f__42583__auto__();
(statearr_43054[(6)] = c__42582__auto___45931);

return statearr_43054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
});})(__45927,c__42582__auto___45931,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async))
);


break;
case "async":
var c__42582__auto___45970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45927,c__42582__auto___45970,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async){
return (function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = ((function (__45927,c__42582__auto___45970,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async){
return (function (state_43071){
var state_val_43072 = (state_43071[(1)]);
if((state_val_43072 === (1))){
var state_43071__$1 = state_43071;
var statearr_43083_45972 = state_43071__$1;
(statearr_43083_45972[(2)] = null);

(statearr_43083_45972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43072 === (2))){
var state_43071__$1 = state_43071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43071__$1,(4),jobs);
} else {
if((state_val_43072 === (3))){
var inst_43067 = (state_43071[(2)]);
var state_43071__$1 = state_43071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43071__$1,inst_43067);
} else {
if((state_val_43072 === (4))){
var inst_43058 = (state_43071[(2)]);
var inst_43059 = async(inst_43058);
var state_43071__$1 = state_43071;
if(cljs.core.truth_(inst_43059)){
var statearr_43097_45977 = state_43071__$1;
(statearr_43097_45977[(1)] = (5));

} else {
var statearr_43099_45978 = state_43071__$1;
(statearr_43099_45978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43072 === (5))){
var state_43071__$1 = state_43071;
var statearr_43103_45982 = state_43071__$1;
(statearr_43103_45982[(2)] = null);

(statearr_43103_45982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43072 === (6))){
var state_43071__$1 = state_43071;
var statearr_43108_45984 = state_43071__$1;
(statearr_43108_45984[(2)] = null);

(statearr_43108_45984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43072 === (7))){
var inst_43064 = (state_43071[(2)]);
var state_43071__$1 = state_43071;
var statearr_43113_45988 = state_43071__$1;
(statearr_43113_45988[(2)] = inst_43064);

(statearr_43113_45988[(1)] = (3));


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
});})(__45927,c__42582__auto___45970,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async))
;
return ((function (__45927,switch__42115__auto__,c__42582__auto___45970,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0 = (function (){
var statearr_43119 = [null,null,null,null,null,null,null];
(statearr_43119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__);

(statearr_43119[(1)] = (1));

return statearr_43119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1 = (function (state_43071){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43071);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43123){var ex__42119__auto__ = e43123;
var statearr_43125_45994 = state_43071;
(statearr_43125_45994[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43071[(4)]))){
var statearr_43128_45995 = state_43071;
(statearr_43128_45995[(1)] = cljs.core.first((state_43071[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46001 = state_43071;
state_43071 = G__46001;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = function(state_43071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1.call(this,state_43071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__;
})()
;})(__45927,switch__42115__auto__,c__42582__auto___45970,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async))
})();
var state__42584__auto__ = (function (){var statearr_43136 = f__42583__auto__();
(statearr_43136[(6)] = c__42582__auto___45970);

return statearr_43136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
});})(__45927,c__42582__auto___45970,G__42979_45928,G__42979_45929__$1,n__4613__auto___45926,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42979_45929__$1)].join('')));

}

var G__46004 = (__45927 + (1));
__45927 = G__46004;
continue;
} else {
}
break;
}

var c__42582__auto___46006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_43182){
var state_val_43183 = (state_43182[(1)]);
if((state_val_43183 === (7))){
var inst_43174 = (state_43182[(2)]);
var state_43182__$1 = state_43182;
var statearr_43201_46010 = state_43182__$1;
(statearr_43201_46010[(2)] = inst_43174);

(statearr_43201_46010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43183 === (1))){
var state_43182__$1 = state_43182;
var statearr_43207_46014 = state_43182__$1;
(statearr_43207_46014[(2)] = null);

(statearr_43207_46014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43183 === (4))){
var inst_43150 = (state_43182[(7)]);
var inst_43150__$1 = (state_43182[(2)]);
var inst_43151 = (inst_43150__$1 == null);
var state_43182__$1 = (function (){var statearr_43217 = state_43182;
(statearr_43217[(7)] = inst_43150__$1);

return statearr_43217;
})();
if(cljs.core.truth_(inst_43151)){
var statearr_43219_46019 = state_43182__$1;
(statearr_43219_46019[(1)] = (5));

} else {
var statearr_43220_46021 = state_43182__$1;
(statearr_43220_46021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43183 === (6))){
var inst_43157 = (state_43182[(8)]);
var inst_43150 = (state_43182[(7)]);
var inst_43157__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43165 = [inst_43150,inst_43157__$1];
var inst_43166 = (new cljs.core.PersistentVector(null,2,(5),inst_43163,inst_43165,null));
var state_43182__$1 = (function (){var statearr_43228 = state_43182;
(statearr_43228[(8)] = inst_43157__$1);

return statearr_43228;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43182__$1,(8),jobs,inst_43166);
} else {
if((state_val_43183 === (3))){
var inst_43176 = (state_43182[(2)]);
var state_43182__$1 = state_43182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43182__$1,inst_43176);
} else {
if((state_val_43183 === (2))){
var state_43182__$1 = state_43182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43182__$1,(4),from);
} else {
if((state_val_43183 === (9))){
var inst_43170 = (state_43182[(2)]);
var state_43182__$1 = (function (){var statearr_43246 = state_43182;
(statearr_43246[(9)] = inst_43170);

return statearr_43246;
})();
var statearr_43248_46031 = state_43182__$1;
(statearr_43248_46031[(2)] = null);

(statearr_43248_46031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43183 === (5))){
var inst_43155 = cljs.core.async.close_BANG_(jobs);
var state_43182__$1 = state_43182;
var statearr_43249_46035 = state_43182__$1;
(statearr_43249_46035[(2)] = inst_43155);

(statearr_43249_46035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43183 === (8))){
var inst_43157 = (state_43182[(8)]);
var inst_43168 = (state_43182[(2)]);
var state_43182__$1 = (function (){var statearr_43250 = state_43182;
(statearr_43250[(10)] = inst_43168);

return statearr_43250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43182__$1,(9),results,inst_43157);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0 = (function (){
var statearr_43251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__);

(statearr_43251[(1)] = (1));

return statearr_43251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1 = (function (state_43182){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43182);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43252){var ex__42119__auto__ = e43252;
var statearr_43253_46041 = state_43182;
(statearr_43253_46041[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43182[(4)]))){
var statearr_43256_46042 = state_43182;
(statearr_43256_46042[(1)] = cljs.core.first((state_43182[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46043 = state_43182;
state_43182 = G__46043;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = function(state_43182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1.call(this,state_43182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_43257 = f__42583__auto__();
(statearr_43257[(6)] = c__42582__auto___46006);

return statearr_43257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_43306){
var state_val_43307 = (state_43306[(1)]);
if((state_val_43307 === (7))){
var inst_43302 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
var statearr_43320_46049 = state_43306__$1;
(statearr_43320_46049[(2)] = inst_43302);

(statearr_43320_46049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (20))){
var state_43306__$1 = state_43306;
var statearr_43326_46051 = state_43306__$1;
(statearr_43326_46051[(2)] = null);

(statearr_43326_46051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (1))){
var state_43306__$1 = state_43306;
var statearr_43327_46054 = state_43306__$1;
(statearr_43327_46054[(2)] = null);

(statearr_43327_46054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (4))){
var inst_43264 = (state_43306[(7)]);
var inst_43264__$1 = (state_43306[(2)]);
var inst_43266 = (inst_43264__$1 == null);
var state_43306__$1 = (function (){var statearr_43330 = state_43306;
(statearr_43330[(7)] = inst_43264__$1);

return statearr_43330;
})();
if(cljs.core.truth_(inst_43266)){
var statearr_43331_46057 = state_43306__$1;
(statearr_43331_46057[(1)] = (5));

} else {
var statearr_43332_46059 = state_43306__$1;
(statearr_43332_46059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (15))){
var inst_43280 = (state_43306[(8)]);
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43306__$1,(18),to,inst_43280);
} else {
if((state_val_43307 === (21))){
var inst_43297 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
var statearr_43340_46064 = state_43306__$1;
(statearr_43340_46064[(2)] = inst_43297);

(statearr_43340_46064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (13))){
var inst_43299 = (state_43306[(2)]);
var state_43306__$1 = (function (){var statearr_43341 = state_43306;
(statearr_43341[(9)] = inst_43299);

return statearr_43341;
})();
var statearr_43344_46065 = state_43306__$1;
(statearr_43344_46065[(2)] = null);

(statearr_43344_46065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (6))){
var inst_43264 = (state_43306[(7)]);
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43306__$1,(11),inst_43264);
} else {
if((state_val_43307 === (17))){
var inst_43292 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
if(cljs.core.truth_(inst_43292)){
var statearr_43347_46069 = state_43306__$1;
(statearr_43347_46069[(1)] = (19));

} else {
var statearr_43349_46071 = state_43306__$1;
(statearr_43349_46071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (3))){
var inst_43304 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43306__$1,inst_43304);
} else {
if((state_val_43307 === (12))){
var inst_43277 = (state_43306[(10)]);
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43306__$1,(14),inst_43277);
} else {
if((state_val_43307 === (2))){
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43306__$1,(4),results);
} else {
if((state_val_43307 === (19))){
var state_43306__$1 = state_43306;
var statearr_43360_46080 = state_43306__$1;
(statearr_43360_46080[(2)] = null);

(statearr_43360_46080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (11))){
var inst_43277 = (state_43306[(2)]);
var state_43306__$1 = (function (){var statearr_43363 = state_43306;
(statearr_43363[(10)] = inst_43277);

return statearr_43363;
})();
var statearr_43364_46083 = state_43306__$1;
(statearr_43364_46083[(2)] = null);

(statearr_43364_46083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (9))){
var state_43306__$1 = state_43306;
var statearr_43367_46088 = state_43306__$1;
(statearr_43367_46088[(2)] = null);

(statearr_43367_46088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (5))){
var state_43306__$1 = state_43306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43368_46090 = state_43306__$1;
(statearr_43368_46090[(1)] = (8));

} else {
var statearr_43371_46091 = state_43306__$1;
(statearr_43371_46091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (14))){
var inst_43280 = (state_43306[(8)]);
var inst_43280__$1 = (state_43306[(2)]);
var inst_43283 = (inst_43280__$1 == null);
var inst_43284 = cljs.core.not(inst_43283);
var state_43306__$1 = (function (){var statearr_43390 = state_43306;
(statearr_43390[(8)] = inst_43280__$1);

return statearr_43390;
})();
if(inst_43284){
var statearr_43393_46092 = state_43306__$1;
(statearr_43393_46092[(1)] = (15));

} else {
var statearr_43395_46093 = state_43306__$1;
(statearr_43395_46093[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (16))){
var state_43306__$1 = state_43306;
var statearr_43396_46094 = state_43306__$1;
(statearr_43396_46094[(2)] = false);

(statearr_43396_46094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (10))){
var inst_43274 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
var statearr_43399_46095 = state_43306__$1;
(statearr_43399_46095[(2)] = inst_43274);

(statearr_43399_46095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (18))){
var inst_43289 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
var statearr_43402_46096 = state_43306__$1;
(statearr_43402_46096[(2)] = inst_43289);

(statearr_43402_46096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (8))){
var inst_43271 = cljs.core.async.close_BANG_(to);
var state_43306__$1 = state_43306;
var statearr_43403_46099 = state_43306__$1;
(statearr_43403_46099[(2)] = inst_43271);

(statearr_43403_46099[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0 = (function (){
var statearr_43410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__);

(statearr_43410[(1)] = (1));

return statearr_43410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1 = (function (state_43306){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43306);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43415){var ex__42119__auto__ = e43415;
var statearr_43417_46102 = state_43306;
(statearr_43417_46102[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43306[(4)]))){
var statearr_43419_46104 = state_43306;
(statearr_43419_46104[(1)] = cljs.core.first((state_43306[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46105 = state_43306;
state_43306 = G__46105;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__ = function(state_43306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1.call(this,state_43306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_43430 = f__42583__auto__();
(statearr_43430[(6)] = c__42582__auto__);

return statearr_43430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
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
var G__43448 = arguments.length;
switch (G__43448) {
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
var G__43478 = arguments.length;
switch (G__43478) {
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
var G__43515 = arguments.length;
switch (G__43515) {
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
var c__42582__auto___46126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_43555){
var state_val_43556 = (state_43555[(1)]);
if((state_val_43556 === (7))){
var inst_43551 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
var statearr_43559_46127 = state_43555__$1;
(statearr_43559_46127[(2)] = inst_43551);

(statearr_43559_46127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (1))){
var state_43555__$1 = state_43555;
var statearr_43560_46129 = state_43555__$1;
(statearr_43560_46129[(2)] = null);

(statearr_43560_46129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (4))){
var inst_43532 = (state_43555[(7)]);
var inst_43532__$1 = (state_43555[(2)]);
var inst_43533 = (inst_43532__$1 == null);
var state_43555__$1 = (function (){var statearr_43563 = state_43555;
(statearr_43563[(7)] = inst_43532__$1);

return statearr_43563;
})();
if(cljs.core.truth_(inst_43533)){
var statearr_43564_46134 = state_43555__$1;
(statearr_43564_46134[(1)] = (5));

} else {
var statearr_43565_46135 = state_43555__$1;
(statearr_43565_46135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (13))){
var state_43555__$1 = state_43555;
var statearr_43566_46136 = state_43555__$1;
(statearr_43566_46136[(2)] = null);

(statearr_43566_46136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (6))){
var inst_43532 = (state_43555[(7)]);
var inst_43538 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43532) : p.call(null,inst_43532));
var state_43555__$1 = state_43555;
if(cljs.core.truth_(inst_43538)){
var statearr_43567_46137 = state_43555__$1;
(statearr_43567_46137[(1)] = (9));

} else {
var statearr_43568_46138 = state_43555__$1;
(statearr_43568_46138[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (3))){
var inst_43553 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43555__$1,inst_43553);
} else {
if((state_val_43556 === (12))){
var state_43555__$1 = state_43555;
var statearr_43571_46139 = state_43555__$1;
(statearr_43571_46139[(2)] = null);

(statearr_43571_46139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (2))){
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43555__$1,(4),ch);
} else {
if((state_val_43556 === (11))){
var inst_43532 = (state_43555[(7)]);
var inst_43542 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43555__$1,(8),inst_43542,inst_43532);
} else {
if((state_val_43556 === (9))){
var state_43555__$1 = state_43555;
var statearr_43576_46146 = state_43555__$1;
(statearr_43576_46146[(2)] = tc);

(statearr_43576_46146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (5))){
var inst_43535 = cljs.core.async.close_BANG_(tc);
var inst_43536 = cljs.core.async.close_BANG_(fc);
var state_43555__$1 = (function (){var statearr_43579 = state_43555;
(statearr_43579[(8)] = inst_43535);

return statearr_43579;
})();
var statearr_43580_46150 = state_43555__$1;
(statearr_43580_46150[(2)] = inst_43536);

(statearr_43580_46150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (14))){
var inst_43549 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
var statearr_43581_46151 = state_43555__$1;
(statearr_43581_46151[(2)] = inst_43549);

(statearr_43581_46151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (10))){
var state_43555__$1 = state_43555;
var statearr_43582_46156 = state_43555__$1;
(statearr_43582_46156[(2)] = fc);

(statearr_43582_46156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43556 === (8))){
var inst_43544 = (state_43555[(2)]);
var state_43555__$1 = state_43555;
if(cljs.core.truth_(inst_43544)){
var statearr_43584_46158 = state_43555__$1;
(statearr_43584_46158[(1)] = (12));

} else {
var statearr_43587_46161 = state_43555__$1;
(statearr_43587_46161[(1)] = (13));

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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_43589 = [null,null,null,null,null,null,null,null,null];
(statearr_43589[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_43589[(1)] = (1));

return statearr_43589;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_43555){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43555);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43592){var ex__42119__auto__ = e43592;
var statearr_43593_46163 = state_43555;
(statearr_43593_46163[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43555[(4)]))){
var statearr_43596_46164 = state_43555;
(statearr_43596_46164[(1)] = cljs.core.first((state_43555[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46167 = state_43555;
state_43555 = G__46167;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_43555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_43555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_43599 = f__42583__auto__();
(statearr_43599[(6)] = c__42582__auto___46126);

return statearr_43599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_43625){
var state_val_43626 = (state_43625[(1)]);
if((state_val_43626 === (7))){
var inst_43621 = (state_43625[(2)]);
var state_43625__$1 = state_43625;
var statearr_43628_46173 = state_43625__$1;
(statearr_43628_46173[(2)] = inst_43621);

(statearr_43628_46173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (1))){
var inst_43602 = init;
var inst_43603 = inst_43602;
var state_43625__$1 = (function (){var statearr_43634 = state_43625;
(statearr_43634[(7)] = inst_43603);

return statearr_43634;
})();
var statearr_43635_46177 = state_43625__$1;
(statearr_43635_46177[(2)] = null);

(statearr_43635_46177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (4))){
var inst_43607 = (state_43625[(8)]);
var inst_43607__$1 = (state_43625[(2)]);
var inst_43608 = (inst_43607__$1 == null);
var state_43625__$1 = (function (){var statearr_43638 = state_43625;
(statearr_43638[(8)] = inst_43607__$1);

return statearr_43638;
})();
if(cljs.core.truth_(inst_43608)){
var statearr_43640_46182 = state_43625__$1;
(statearr_43640_46182[(1)] = (5));

} else {
var statearr_43642_46183 = state_43625__$1;
(statearr_43642_46183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (6))){
var inst_43607 = (state_43625[(8)]);
var inst_43603 = (state_43625[(7)]);
var inst_43611 = (state_43625[(9)]);
var inst_43611__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43603,inst_43607) : f.call(null,inst_43603,inst_43607));
var inst_43612 = cljs.core.reduced_QMARK_(inst_43611__$1);
var state_43625__$1 = (function (){var statearr_43645 = state_43625;
(statearr_43645[(9)] = inst_43611__$1);

return statearr_43645;
})();
if(inst_43612){
var statearr_43650_46184 = state_43625__$1;
(statearr_43650_46184[(1)] = (8));

} else {
var statearr_43653_46185 = state_43625__$1;
(statearr_43653_46185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (3))){
var inst_43623 = (state_43625[(2)]);
var state_43625__$1 = state_43625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43625__$1,inst_43623);
} else {
if((state_val_43626 === (2))){
var state_43625__$1 = state_43625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43625__$1,(4),ch);
} else {
if((state_val_43626 === (9))){
var inst_43611 = (state_43625[(9)]);
var inst_43603 = inst_43611;
var state_43625__$1 = (function (){var statearr_43665 = state_43625;
(statearr_43665[(7)] = inst_43603);

return statearr_43665;
})();
var statearr_43666_46186 = state_43625__$1;
(statearr_43666_46186[(2)] = null);

(statearr_43666_46186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (5))){
var inst_43603 = (state_43625[(7)]);
var state_43625__$1 = state_43625;
var statearr_43668_46187 = state_43625__$1;
(statearr_43668_46187[(2)] = inst_43603);

(statearr_43668_46187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (10))){
var inst_43618 = (state_43625[(2)]);
var state_43625__$1 = state_43625;
var statearr_43670_46188 = state_43625__$1;
(statearr_43670_46188[(2)] = inst_43618);

(statearr_43670_46188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43626 === (8))){
var inst_43611 = (state_43625[(9)]);
var inst_43614 = cljs.core.deref(inst_43611);
var state_43625__$1 = state_43625;
var statearr_43673_46189 = state_43625__$1;
(statearr_43673_46189[(2)] = inst_43614);

(statearr_43673_46189[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42116__auto____0 = (function (){
var statearr_43674 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43674[(0)] = cljs$core$async$reduce_$_state_machine__42116__auto__);

(statearr_43674[(1)] = (1));

return statearr_43674;
});
var cljs$core$async$reduce_$_state_machine__42116__auto____1 = (function (state_43625){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43625);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43676){var ex__42119__auto__ = e43676;
var statearr_43677_46190 = state_43625;
(statearr_43677_46190[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43625[(4)]))){
var statearr_43678_46192 = state_43625;
(statearr_43678_46192[(1)] = cljs.core.first((state_43625[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46195 = state_43625;
state_43625 = G__46195;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42116__auto__ = function(state_43625){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42116__auto____1.call(this,state_43625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42116__auto____0;
cljs$core$async$reduce_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42116__auto____1;
return cljs$core$async$reduce_$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_43681 = f__42583__auto__();
(statearr_43681[(6)] = c__42582__auto__);

return statearr_43681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_43691){
var state_val_43692 = (state_43691[(1)]);
if((state_val_43692 === (1))){
var inst_43686 = cljs.core.async.reduce(f__$1,init,ch);
var state_43691__$1 = state_43691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43691__$1,(2),inst_43686);
} else {
if((state_val_43692 === (2))){
var inst_43688 = (state_43691[(2)]);
var inst_43689 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43688) : f__$1.call(null,inst_43688));
var state_43691__$1 = state_43691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43691__$1,inst_43689);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42116__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42116__auto____0 = (function (){
var statearr_43695 = [null,null,null,null,null,null,null];
(statearr_43695[(0)] = cljs$core$async$transduce_$_state_machine__42116__auto__);

(statearr_43695[(1)] = (1));

return statearr_43695;
});
var cljs$core$async$transduce_$_state_machine__42116__auto____1 = (function (state_43691){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43691);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43697){var ex__42119__auto__ = e43697;
var statearr_43698_46200 = state_43691;
(statearr_43698_46200[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43691[(4)]))){
var statearr_43701_46201 = state_43691;
(statearr_43701_46201[(1)] = cljs.core.first((state_43691[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46202 = state_43691;
state_43691 = G__46202;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42116__auto__ = function(state_43691){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42116__auto____1.call(this,state_43691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42116__auto____0;
cljs$core$async$transduce_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42116__auto____1;
return cljs$core$async$transduce_$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_43705 = f__42583__auto__();
(statearr_43705[(6)] = c__42582__auto__);

return statearr_43705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
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
var G__43710 = arguments.length;
switch (G__43710) {
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
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_43746){
var state_val_43747 = (state_43746[(1)]);
if((state_val_43747 === (7))){
var inst_43726 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
var statearr_43753_46207 = state_43746__$1;
(statearr_43753_46207[(2)] = inst_43726);

(statearr_43753_46207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (1))){
var inst_43720 = cljs.core.seq(coll);
var inst_43721 = inst_43720;
var state_43746__$1 = (function (){var statearr_43754 = state_43746;
(statearr_43754[(7)] = inst_43721);

return statearr_43754;
})();
var statearr_43755_46208 = state_43746__$1;
(statearr_43755_46208[(2)] = null);

(statearr_43755_46208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (4))){
var inst_43721 = (state_43746[(7)]);
var inst_43724 = cljs.core.first(inst_43721);
var state_43746__$1 = state_43746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43746__$1,(7),ch,inst_43724);
} else {
if((state_val_43747 === (13))){
var inst_43738 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
var statearr_43760_46213 = state_43746__$1;
(statearr_43760_46213[(2)] = inst_43738);

(statearr_43760_46213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (6))){
var inst_43729 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
if(cljs.core.truth_(inst_43729)){
var statearr_43762_46215 = state_43746__$1;
(statearr_43762_46215[(1)] = (8));

} else {
var statearr_43765_46216 = state_43746__$1;
(statearr_43765_46216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (3))){
var inst_43742 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43746__$1,inst_43742);
} else {
if((state_val_43747 === (12))){
var state_43746__$1 = state_43746;
var statearr_43768_46221 = state_43746__$1;
(statearr_43768_46221[(2)] = null);

(statearr_43768_46221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (2))){
var inst_43721 = (state_43746[(7)]);
var state_43746__$1 = state_43746;
if(cljs.core.truth_(inst_43721)){
var statearr_43769_46222 = state_43746__$1;
(statearr_43769_46222[(1)] = (4));

} else {
var statearr_43771_46224 = state_43746__$1;
(statearr_43771_46224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (11))){
var inst_43735 = cljs.core.async.close_BANG_(ch);
var state_43746__$1 = state_43746;
var statearr_43774_46225 = state_43746__$1;
(statearr_43774_46225[(2)] = inst_43735);

(statearr_43774_46225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (9))){
var state_43746__$1 = state_43746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43778_46230 = state_43746__$1;
(statearr_43778_46230[(1)] = (11));

} else {
var statearr_43780_46231 = state_43746__$1;
(statearr_43780_46231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (5))){
var inst_43721 = (state_43746[(7)]);
var state_43746__$1 = state_43746;
var statearr_43781_46235 = state_43746__$1;
(statearr_43781_46235[(2)] = inst_43721);

(statearr_43781_46235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (10))){
var inst_43740 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
var statearr_43784_46236 = state_43746__$1;
(statearr_43784_46236[(2)] = inst_43740);

(statearr_43784_46236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (8))){
var inst_43721 = (state_43746[(7)]);
var inst_43731 = cljs.core.next(inst_43721);
var inst_43721__$1 = inst_43731;
var state_43746__$1 = (function (){var statearr_43786 = state_43746;
(statearr_43786[(7)] = inst_43721__$1);

return statearr_43786;
})();
var statearr_43787_46241 = state_43746__$1;
(statearr_43787_46241[(2)] = null);

(statearr_43787_46241[(1)] = (2));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_43791 = [null,null,null,null,null,null,null,null];
(statearr_43791[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_43791[(1)] = (1));

return statearr_43791;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_43746){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_43746);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e43794){var ex__42119__auto__ = e43794;
var statearr_43796_46252 = state_43746;
(statearr_43796_46252[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_43746[(4)]))){
var statearr_43798_46257 = state_43746;
(statearr_43798_46257[(1)] = cljs.core.first((state_43746[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46261 = state_43746;
state_43746 = G__46261;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_43746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_43746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_43801 = f__42583__auto__();
(statearr_43801[(6)] = c__42582__auto__);

return statearr_43801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
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
var G__43811 = arguments.length;
switch (G__43811) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46277 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_46277(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46281 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_46281(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46287 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_46287(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46296 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_46296(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43848 = (function (ch,cs,meta43849){
this.ch = ch;
this.cs = cs;
this.meta43849 = meta43849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43850,meta43849__$1){
var self__ = this;
var _43850__$1 = this;
return (new cljs.core.async.t_cljs$core$async43848(self__.ch,self__.cs,meta43849__$1));
}));

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43850){
var self__ = this;
var _43850__$1 = this;
return self__.meta43849;
}));

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43848.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43849","meta43849",832465111,null)], null);
}));

(cljs.core.async.t_cljs$core$async43848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43848");

(cljs.core.async.t_cljs$core$async43848.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43848.
 */
cljs.core.async.__GT_t_cljs$core$async43848 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43848(ch__$1,cs__$1,meta43849){
return (new cljs.core.async.t_cljs$core$async43848(ch__$1,cs__$1,meta43849));
});

}

return (new cljs.core.async.t_cljs$core$async43848(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42582__auto___46307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_44009){
var state_val_44010 = (state_44009[(1)]);
if((state_val_44010 === (7))){
var inst_44005 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44012_46308 = state_44009__$1;
(statearr_44012_46308[(2)] = inst_44005);

(statearr_44012_46308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (20))){
var inst_43907 = (state_44009[(7)]);
var inst_43922 = cljs.core.first(inst_43907);
var inst_43923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43922,(0),null);
var inst_43924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43922,(1),null);
var state_44009__$1 = (function (){var statearr_44014 = state_44009;
(statearr_44014[(8)] = inst_43923);

return statearr_44014;
})();
if(cljs.core.truth_(inst_43924)){
var statearr_44016_46310 = state_44009__$1;
(statearr_44016_46310[(1)] = (22));

} else {
var statearr_44017_46311 = state_44009__$1;
(statearr_44017_46311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (27))){
var inst_43954 = (state_44009[(9)]);
var inst_43959 = (state_44009[(10)]);
var inst_43952 = (state_44009[(11)]);
var inst_43874 = (state_44009[(12)]);
var inst_43959__$1 = cljs.core._nth(inst_43952,inst_43954);
var inst_43960 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43959__$1,inst_43874,done);
var state_44009__$1 = (function (){var statearr_44021 = state_44009;
(statearr_44021[(10)] = inst_43959__$1);

return statearr_44021;
})();
if(cljs.core.truth_(inst_43960)){
var statearr_44025_46316 = state_44009__$1;
(statearr_44025_46316[(1)] = (30));

} else {
var statearr_44026_46317 = state_44009__$1;
(statearr_44026_46317[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (1))){
var state_44009__$1 = state_44009;
var statearr_44027_46318 = state_44009__$1;
(statearr_44027_46318[(2)] = null);

(statearr_44027_46318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (24))){
var inst_43907 = (state_44009[(7)]);
var inst_43929 = (state_44009[(2)]);
var inst_43930 = cljs.core.next(inst_43907);
var inst_43884 = inst_43930;
var inst_43885 = null;
var inst_43886 = (0);
var inst_43887 = (0);
var state_44009__$1 = (function (){var statearr_44029 = state_44009;
(statearr_44029[(13)] = inst_43929);

(statearr_44029[(14)] = inst_43887);

(statearr_44029[(15)] = inst_43884);

(statearr_44029[(16)] = inst_43885);

(statearr_44029[(17)] = inst_43886);

return statearr_44029;
})();
var statearr_44030_46326 = state_44009__$1;
(statearr_44030_46326[(2)] = null);

(statearr_44030_46326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (39))){
var state_44009__$1 = state_44009;
var statearr_44037_46331 = state_44009__$1;
(statearr_44037_46331[(2)] = null);

(statearr_44037_46331[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (4))){
var inst_43874 = (state_44009[(12)]);
var inst_43874__$1 = (state_44009[(2)]);
var inst_43875 = (inst_43874__$1 == null);
var state_44009__$1 = (function (){var statearr_44042 = state_44009;
(statearr_44042[(12)] = inst_43874__$1);

return statearr_44042;
})();
if(cljs.core.truth_(inst_43875)){
var statearr_44043_46336 = state_44009__$1;
(statearr_44043_46336[(1)] = (5));

} else {
var statearr_44044_46337 = state_44009__$1;
(statearr_44044_46337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (15))){
var inst_43887 = (state_44009[(14)]);
var inst_43884 = (state_44009[(15)]);
var inst_43885 = (state_44009[(16)]);
var inst_43886 = (state_44009[(17)]);
var inst_43902 = (state_44009[(2)]);
var inst_43903 = (inst_43887 + (1));
var tmp44032 = inst_43884;
var tmp44033 = inst_43885;
var tmp44034 = inst_43886;
var inst_43884__$1 = tmp44032;
var inst_43885__$1 = tmp44033;
var inst_43886__$1 = tmp44034;
var inst_43887__$1 = inst_43903;
var state_44009__$1 = (function (){var statearr_44046 = state_44009;
(statearr_44046[(14)] = inst_43887__$1);

(statearr_44046[(15)] = inst_43884__$1);

(statearr_44046[(18)] = inst_43902);

(statearr_44046[(16)] = inst_43885__$1);

(statearr_44046[(17)] = inst_43886__$1);

return statearr_44046;
})();
var statearr_44048_46342 = state_44009__$1;
(statearr_44048_46342[(2)] = null);

(statearr_44048_46342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (21))){
var inst_43933 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44054_46343 = state_44009__$1;
(statearr_44054_46343[(2)] = inst_43933);

(statearr_44054_46343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (31))){
var inst_43959 = (state_44009[(10)]);
var inst_43963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43959);
var state_44009__$1 = state_44009;
var statearr_44057_46345 = state_44009__$1;
(statearr_44057_46345[(2)] = inst_43963);

(statearr_44057_46345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (32))){
var inst_43954 = (state_44009[(9)]);
var inst_43952 = (state_44009[(11)]);
var inst_43951 = (state_44009[(19)]);
var inst_43953 = (state_44009[(20)]);
var inst_43965 = (state_44009[(2)]);
var inst_43966 = (inst_43954 + (1));
var tmp44049 = inst_43952;
var tmp44050 = inst_43951;
var tmp44051 = inst_43953;
var inst_43951__$1 = tmp44050;
var inst_43952__$1 = tmp44049;
var inst_43953__$1 = tmp44051;
var inst_43954__$1 = inst_43966;
var state_44009__$1 = (function (){var statearr_44058 = state_44009;
(statearr_44058[(9)] = inst_43954__$1);

(statearr_44058[(11)] = inst_43952__$1);

(statearr_44058[(21)] = inst_43965);

(statearr_44058[(19)] = inst_43951__$1);

(statearr_44058[(20)] = inst_43953__$1);

return statearr_44058;
})();
var statearr_44059_46355 = state_44009__$1;
(statearr_44059_46355[(2)] = null);

(statearr_44059_46355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (40))){
var inst_43978 = (state_44009[(22)]);
var inst_43982 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43978);
var state_44009__$1 = state_44009;
var statearr_44060_46364 = state_44009__$1;
(statearr_44060_46364[(2)] = inst_43982);

(statearr_44060_46364[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (33))){
var inst_43969 = (state_44009[(23)]);
var inst_43971 = cljs.core.chunked_seq_QMARK_(inst_43969);
var state_44009__$1 = state_44009;
if(inst_43971){
var statearr_44061_46368 = state_44009__$1;
(statearr_44061_46368[(1)] = (36));

} else {
var statearr_44062_46369 = state_44009__$1;
(statearr_44062_46369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (13))){
var inst_43896 = (state_44009[(24)]);
var inst_43899 = cljs.core.async.close_BANG_(inst_43896);
var state_44009__$1 = state_44009;
var statearr_44063_46372 = state_44009__$1;
(statearr_44063_46372[(2)] = inst_43899);

(statearr_44063_46372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (22))){
var inst_43923 = (state_44009[(8)]);
var inst_43926 = cljs.core.async.close_BANG_(inst_43923);
var state_44009__$1 = state_44009;
var statearr_44064_46377 = state_44009__$1;
(statearr_44064_46377[(2)] = inst_43926);

(statearr_44064_46377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (36))){
var inst_43969 = (state_44009[(23)]);
var inst_43973 = cljs.core.chunk_first(inst_43969);
var inst_43974 = cljs.core.chunk_rest(inst_43969);
var inst_43975 = cljs.core.count(inst_43973);
var inst_43951 = inst_43974;
var inst_43952 = inst_43973;
var inst_43953 = inst_43975;
var inst_43954 = (0);
var state_44009__$1 = (function (){var statearr_44069 = state_44009;
(statearr_44069[(9)] = inst_43954);

(statearr_44069[(11)] = inst_43952);

(statearr_44069[(19)] = inst_43951);

(statearr_44069[(20)] = inst_43953);

return statearr_44069;
})();
var statearr_44070_46383 = state_44009__$1;
(statearr_44070_46383[(2)] = null);

(statearr_44070_46383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (41))){
var inst_43969 = (state_44009[(23)]);
var inst_43984 = (state_44009[(2)]);
var inst_43985 = cljs.core.next(inst_43969);
var inst_43951 = inst_43985;
var inst_43952 = null;
var inst_43953 = (0);
var inst_43954 = (0);
var state_44009__$1 = (function (){var statearr_44074 = state_44009;
(statearr_44074[(9)] = inst_43954);

(statearr_44074[(25)] = inst_43984);

(statearr_44074[(11)] = inst_43952);

(statearr_44074[(19)] = inst_43951);

(statearr_44074[(20)] = inst_43953);

return statearr_44074;
})();
var statearr_44075_46393 = state_44009__$1;
(statearr_44075_46393[(2)] = null);

(statearr_44075_46393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (43))){
var state_44009__$1 = state_44009;
var statearr_44076_46395 = state_44009__$1;
(statearr_44076_46395[(2)] = null);

(statearr_44076_46395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (29))){
var inst_43993 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44077_46398 = state_44009__$1;
(statearr_44077_46398[(2)] = inst_43993);

(statearr_44077_46398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (44))){
var inst_44002 = (state_44009[(2)]);
var state_44009__$1 = (function (){var statearr_44079 = state_44009;
(statearr_44079[(26)] = inst_44002);

return statearr_44079;
})();
var statearr_44081_46400 = state_44009__$1;
(statearr_44081_46400[(2)] = null);

(statearr_44081_46400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (6))){
var inst_43943 = (state_44009[(27)]);
var inst_43942 = cljs.core.deref(cs);
var inst_43943__$1 = cljs.core.keys(inst_43942);
var inst_43944 = cljs.core.count(inst_43943__$1);
var inst_43945 = cljs.core.reset_BANG_(dctr,inst_43944);
var inst_43950 = cljs.core.seq(inst_43943__$1);
var inst_43951 = inst_43950;
var inst_43952 = null;
var inst_43953 = (0);
var inst_43954 = (0);
var state_44009__$1 = (function (){var statearr_44085 = state_44009;
(statearr_44085[(9)] = inst_43954);

(statearr_44085[(11)] = inst_43952);

(statearr_44085[(19)] = inst_43951);

(statearr_44085[(27)] = inst_43943__$1);

(statearr_44085[(20)] = inst_43953);

(statearr_44085[(28)] = inst_43945);

return statearr_44085;
})();
var statearr_44086_46402 = state_44009__$1;
(statearr_44086_46402[(2)] = null);

(statearr_44086_46402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (28))){
var inst_43969 = (state_44009[(23)]);
var inst_43951 = (state_44009[(19)]);
var inst_43969__$1 = cljs.core.seq(inst_43951);
var state_44009__$1 = (function (){var statearr_44088 = state_44009;
(statearr_44088[(23)] = inst_43969__$1);

return statearr_44088;
})();
if(inst_43969__$1){
var statearr_44090_46406 = state_44009__$1;
(statearr_44090_46406[(1)] = (33));

} else {
var statearr_44091_46407 = state_44009__$1;
(statearr_44091_46407[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (25))){
var inst_43954 = (state_44009[(9)]);
var inst_43953 = (state_44009[(20)]);
var inst_43956 = (inst_43954 < inst_43953);
var inst_43957 = inst_43956;
var state_44009__$1 = state_44009;
if(cljs.core.truth_(inst_43957)){
var statearr_44092_46409 = state_44009__$1;
(statearr_44092_46409[(1)] = (27));

} else {
var statearr_44093_46410 = state_44009__$1;
(statearr_44093_46410[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (34))){
var state_44009__$1 = state_44009;
var statearr_44096_46411 = state_44009__$1;
(statearr_44096_46411[(2)] = null);

(statearr_44096_46411[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (17))){
var state_44009__$1 = state_44009;
var statearr_44097_46412 = state_44009__$1;
(statearr_44097_46412[(2)] = null);

(statearr_44097_46412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (3))){
var inst_44007 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44009__$1,inst_44007);
} else {
if((state_val_44010 === (12))){
var inst_43938 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44098_46414 = state_44009__$1;
(statearr_44098_46414[(2)] = inst_43938);

(statearr_44098_46414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (2))){
var state_44009__$1 = state_44009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44009__$1,(4),ch);
} else {
if((state_val_44010 === (23))){
var state_44009__$1 = state_44009;
var statearr_44101_46419 = state_44009__$1;
(statearr_44101_46419[(2)] = null);

(statearr_44101_46419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (35))){
var inst_43991 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44104_46420 = state_44009__$1;
(statearr_44104_46420[(2)] = inst_43991);

(statearr_44104_46420[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (19))){
var inst_43907 = (state_44009[(7)]);
var inst_43914 = cljs.core.chunk_first(inst_43907);
var inst_43915 = cljs.core.chunk_rest(inst_43907);
var inst_43916 = cljs.core.count(inst_43914);
var inst_43884 = inst_43915;
var inst_43885 = inst_43914;
var inst_43886 = inst_43916;
var inst_43887 = (0);
var state_44009__$1 = (function (){var statearr_44109 = state_44009;
(statearr_44109[(14)] = inst_43887);

(statearr_44109[(15)] = inst_43884);

(statearr_44109[(16)] = inst_43885);

(statearr_44109[(17)] = inst_43886);

return statearr_44109;
})();
var statearr_44112_46422 = state_44009__$1;
(statearr_44112_46422[(2)] = null);

(statearr_44112_46422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (11))){
var inst_43884 = (state_44009[(15)]);
var inst_43907 = (state_44009[(7)]);
var inst_43907__$1 = cljs.core.seq(inst_43884);
var state_44009__$1 = (function (){var statearr_44113 = state_44009;
(statearr_44113[(7)] = inst_43907__$1);

return statearr_44113;
})();
if(inst_43907__$1){
var statearr_44114_46427 = state_44009__$1;
(statearr_44114_46427[(1)] = (16));

} else {
var statearr_44115_46428 = state_44009__$1;
(statearr_44115_46428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (9))){
var inst_43940 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44121_46429 = state_44009__$1;
(statearr_44121_46429[(2)] = inst_43940);

(statearr_44121_46429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (5))){
var inst_43882 = cljs.core.deref(cs);
var inst_43883 = cljs.core.seq(inst_43882);
var inst_43884 = inst_43883;
var inst_43885 = null;
var inst_43886 = (0);
var inst_43887 = (0);
var state_44009__$1 = (function (){var statearr_44128 = state_44009;
(statearr_44128[(14)] = inst_43887);

(statearr_44128[(15)] = inst_43884);

(statearr_44128[(16)] = inst_43885);

(statearr_44128[(17)] = inst_43886);

return statearr_44128;
})();
var statearr_44129_46430 = state_44009__$1;
(statearr_44129_46430[(2)] = null);

(statearr_44129_46430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (14))){
var state_44009__$1 = state_44009;
var statearr_44131_46432 = state_44009__$1;
(statearr_44131_46432[(2)] = null);

(statearr_44131_46432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (45))){
var inst_43999 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44133_46435 = state_44009__$1;
(statearr_44133_46435[(2)] = inst_43999);

(statearr_44133_46435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (26))){
var inst_43943 = (state_44009[(27)]);
var inst_43995 = (state_44009[(2)]);
var inst_43996 = cljs.core.seq(inst_43943);
var state_44009__$1 = (function (){var statearr_44136 = state_44009;
(statearr_44136[(29)] = inst_43995);

return statearr_44136;
})();
if(inst_43996){
var statearr_44137_46438 = state_44009__$1;
(statearr_44137_46438[(1)] = (42));

} else {
var statearr_44139_46439 = state_44009__$1;
(statearr_44139_46439[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (16))){
var inst_43907 = (state_44009[(7)]);
var inst_43911 = cljs.core.chunked_seq_QMARK_(inst_43907);
var state_44009__$1 = state_44009;
if(inst_43911){
var statearr_44140_46440 = state_44009__$1;
(statearr_44140_46440[(1)] = (19));

} else {
var statearr_44141_46441 = state_44009__$1;
(statearr_44141_46441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (38))){
var inst_43988 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44144_46442 = state_44009__$1;
(statearr_44144_46442[(2)] = inst_43988);

(statearr_44144_46442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (30))){
var state_44009__$1 = state_44009;
var statearr_44145_46443 = state_44009__$1;
(statearr_44145_46443[(2)] = null);

(statearr_44145_46443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (10))){
var inst_43887 = (state_44009[(14)]);
var inst_43885 = (state_44009[(16)]);
var inst_43895 = cljs.core._nth(inst_43885,inst_43887);
var inst_43896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43895,(0),null);
var inst_43897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43895,(1),null);
var state_44009__$1 = (function (){var statearr_44146 = state_44009;
(statearr_44146[(24)] = inst_43896);

return statearr_44146;
})();
if(cljs.core.truth_(inst_43897)){
var statearr_44149_46447 = state_44009__$1;
(statearr_44149_46447[(1)] = (13));

} else {
var statearr_44150_46448 = state_44009__$1;
(statearr_44150_46448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (18))){
var inst_43936 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44151_46449 = state_44009__$1;
(statearr_44151_46449[(2)] = inst_43936);

(statearr_44151_46449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (42))){
var state_44009__$1 = state_44009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44009__$1,(45),dchan);
} else {
if((state_val_44010 === (37))){
var inst_43969 = (state_44009[(23)]);
var inst_43978 = (state_44009[(22)]);
var inst_43874 = (state_44009[(12)]);
var inst_43978__$1 = cljs.core.first(inst_43969);
var inst_43979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43978__$1,inst_43874,done);
var state_44009__$1 = (function (){var statearr_44155 = state_44009;
(statearr_44155[(22)] = inst_43978__$1);

return statearr_44155;
})();
if(cljs.core.truth_(inst_43979)){
var statearr_44156_46452 = state_44009__$1;
(statearr_44156_46452[(1)] = (39));

} else {
var statearr_44158_46454 = state_44009__$1;
(statearr_44158_46454[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (8))){
var inst_43887 = (state_44009[(14)]);
var inst_43886 = (state_44009[(17)]);
var inst_43889 = (inst_43887 < inst_43886);
var inst_43890 = inst_43889;
var state_44009__$1 = state_44009;
if(cljs.core.truth_(inst_43890)){
var statearr_44159_46456 = state_44009__$1;
(statearr_44159_46456[(1)] = (10));

} else {
var statearr_44160_46457 = state_44009__$1;
(statearr_44160_46457[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42116__auto__ = null;
var cljs$core$async$mult_$_state_machine__42116__auto____0 = (function (){
var statearr_44169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44169[(0)] = cljs$core$async$mult_$_state_machine__42116__auto__);

(statearr_44169[(1)] = (1));

return statearr_44169;
});
var cljs$core$async$mult_$_state_machine__42116__auto____1 = (function (state_44009){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_44009);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e44170){var ex__42119__auto__ = e44170;
var statearr_44171_46458 = state_44009;
(statearr_44171_46458[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_44009[(4)]))){
var statearr_44173_46460 = state_44009;
(statearr_44173_46460[(1)] = cljs.core.first((state_44009[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46462 = state_44009;
state_44009 = G__46462;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42116__auto__ = function(state_44009){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42116__auto____1.call(this,state_44009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42116__auto____0;
cljs$core$async$mult_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42116__auto____1;
return cljs$core$async$mult_$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_44176 = f__42583__auto__();
(statearr_44176[(6)] = c__42582__auto___46307);

return statearr_44176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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
var G__44180 = arguments.length;
switch (G__44180) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_46469 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_46469(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46473 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_46473(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46478 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46478(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46484 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_46484(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46488 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46488(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46496 = arguments.length;
var i__4737__auto___46498 = (0);
while(true){
if((i__4737__auto___46498 < len__4736__auto___46496)){
args__4742__auto__.push((arguments[i__4737__auto___46498]));

var G__46499 = (i__4737__auto___46498 + (1));
i__4737__auto___46498 = G__46499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44224){
var map__44225 = p__44224;
var map__44225__$1 = (((((!((map__44225 == null))))?(((((map__44225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44225):map__44225);
var opts = map__44225__$1;
var statearr_44228_46501 = state;
(statearr_44228_46501[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44230_46502 = state;
(statearr_44230_46502[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44232_46507 = state;
(statearr_44232_46507[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44217){
var G__44218 = cljs.core.first(seq44217);
var seq44217__$1 = cljs.core.next(seq44217);
var G__44219 = cljs.core.first(seq44217__$1);
var seq44217__$2 = cljs.core.next(seq44217__$1);
var G__44220 = cljs.core.first(seq44217__$2);
var seq44217__$3 = cljs.core.next(seq44217__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44218,G__44219,G__44220,seq44217__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44249 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44250){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44250 = meta44250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44251,meta44250__$1){
var self__ = this;
var _44251__$1 = this;
return (new cljs.core.async.t_cljs$core$async44249(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44250__$1));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44251){
var self__ = this;
var _44251__$1 = this;
return self__.meta44250;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44250","meta44250",825774025,null)], null);
}));

(cljs.core.async.t_cljs$core$async44249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44249");

(cljs.core.async.t_cljs$core$async44249.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44249.
 */
cljs.core.async.__GT_t_cljs$core$async44249 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44249(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44250){
return (new cljs.core.async.t_cljs$core$async44249(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44250));
});

}

return (new cljs.core.async.t_cljs$core$async44249(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42582__auto___46530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_44394){
var state_val_44395 = (state_44394[(1)]);
if((state_val_44395 === (7))){
var inst_44291 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44399_46533 = state_44394__$1;
(statearr_44399_46533[(2)] = inst_44291);

(statearr_44399_46533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (20))){
var inst_44305 = (state_44394[(7)]);
var state_44394__$1 = state_44394;
var statearr_44401_46538 = state_44394__$1;
(statearr_44401_46538[(2)] = inst_44305);

(statearr_44401_46538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (27))){
var state_44394__$1 = state_44394;
var statearr_44403_46541 = state_44394__$1;
(statearr_44403_46541[(2)] = null);

(statearr_44403_46541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (1))){
var inst_44274 = (state_44394[(8)]);
var inst_44274__$1 = calc_state();
var inst_44277 = (inst_44274__$1 == null);
var inst_44278 = cljs.core.not(inst_44277);
var state_44394__$1 = (function (){var statearr_44406 = state_44394;
(statearr_44406[(8)] = inst_44274__$1);

return statearr_44406;
})();
if(inst_44278){
var statearr_44408_46548 = state_44394__$1;
(statearr_44408_46548[(1)] = (2));

} else {
var statearr_44410_46549 = state_44394__$1;
(statearr_44410_46549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (24))){
var inst_44345 = (state_44394[(9)]);
var inst_44366 = (state_44394[(10)]);
var inst_44333 = (state_44394[(11)]);
var inst_44366__$1 = (inst_44333.cljs$core$IFn$_invoke$arity$1 ? inst_44333.cljs$core$IFn$_invoke$arity$1(inst_44345) : inst_44333.call(null,inst_44345));
var state_44394__$1 = (function (){var statearr_44411 = state_44394;
(statearr_44411[(10)] = inst_44366__$1);

return statearr_44411;
})();
if(cljs.core.truth_(inst_44366__$1)){
var statearr_44412_46557 = state_44394__$1;
(statearr_44412_46557[(1)] = (29));

} else {
var statearr_44413_46563 = state_44394__$1;
(statearr_44413_46563[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (4))){
var inst_44294 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44294)){
var statearr_44415_46564 = state_44394__$1;
(statearr_44415_46564[(1)] = (8));

} else {
var statearr_44416_46565 = state_44394__$1;
(statearr_44416_46565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (15))){
var inst_44327 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44327)){
var statearr_44417_46567 = state_44394__$1;
(statearr_44417_46567[(1)] = (19));

} else {
var statearr_44418_46568 = state_44394__$1;
(statearr_44418_46568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (21))){
var inst_44332 = (state_44394[(12)]);
var inst_44332__$1 = (state_44394[(2)]);
var inst_44333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44332__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44332__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44332__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44394__$1 = (function (){var statearr_44422 = state_44394;
(statearr_44422[(12)] = inst_44332__$1);

(statearr_44422[(13)] = inst_44334);

(statearr_44422[(11)] = inst_44333);

return statearr_44422;
})();
return cljs.core.async.ioc_alts_BANG_(state_44394__$1,(22),inst_44335);
} else {
if((state_val_44395 === (31))){
var inst_44374 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44374)){
var statearr_44425_46574 = state_44394__$1;
(statearr_44425_46574[(1)] = (32));

} else {
var statearr_44426_46575 = state_44394__$1;
(statearr_44426_46575[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (32))){
var inst_44342 = (state_44394[(14)]);
var state_44394__$1 = state_44394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44394__$1,(35),out,inst_44342);
} else {
if((state_val_44395 === (33))){
var inst_44332 = (state_44394[(12)]);
var inst_44305 = inst_44332;
var state_44394__$1 = (function (){var statearr_44428 = state_44394;
(statearr_44428[(7)] = inst_44305);

return statearr_44428;
})();
var statearr_44429_46576 = state_44394__$1;
(statearr_44429_46576[(2)] = null);

(statearr_44429_46576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (13))){
var inst_44305 = (state_44394[(7)]);
var inst_44316 = inst_44305.cljs$lang$protocol_mask$partition0$;
var inst_44317 = (inst_44316 & (64));
var inst_44318 = inst_44305.cljs$core$ISeq$;
var inst_44319 = (cljs.core.PROTOCOL_SENTINEL === inst_44318);
var inst_44320 = ((inst_44317) || (inst_44319));
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44320)){
var statearr_44431_46581 = state_44394__$1;
(statearr_44431_46581[(1)] = (16));

} else {
var statearr_44432_46582 = state_44394__$1;
(statearr_44432_46582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (22))){
var inst_44345 = (state_44394[(9)]);
var inst_44342 = (state_44394[(14)]);
var inst_44341 = (state_44394[(2)]);
var inst_44342__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44341,(0),null);
var inst_44345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44341,(1),null);
var inst_44350 = (inst_44342__$1 == null);
var inst_44351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44345__$1,change);
var inst_44352 = ((inst_44350) || (inst_44351));
var state_44394__$1 = (function (){var statearr_44434 = state_44394;
(statearr_44434[(9)] = inst_44345__$1);

(statearr_44434[(14)] = inst_44342__$1);

return statearr_44434;
})();
if(cljs.core.truth_(inst_44352)){
var statearr_44435_46589 = state_44394__$1;
(statearr_44435_46589[(1)] = (23));

} else {
var statearr_44436_46590 = state_44394__$1;
(statearr_44436_46590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (36))){
var inst_44332 = (state_44394[(12)]);
var inst_44305 = inst_44332;
var state_44394__$1 = (function (){var statearr_44438 = state_44394;
(statearr_44438[(7)] = inst_44305);

return statearr_44438;
})();
var statearr_44439_46591 = state_44394__$1;
(statearr_44439_46591[(2)] = null);

(statearr_44439_46591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (29))){
var inst_44366 = (state_44394[(10)]);
var state_44394__$1 = state_44394;
var statearr_44441_46592 = state_44394__$1;
(statearr_44441_46592[(2)] = inst_44366);

(statearr_44441_46592[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (6))){
var state_44394__$1 = state_44394;
var statearr_44442_46593 = state_44394__$1;
(statearr_44442_46593[(2)] = false);

(statearr_44442_46593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (28))){
var inst_44360 = (state_44394[(2)]);
var inst_44362 = calc_state();
var inst_44305 = inst_44362;
var state_44394__$1 = (function (){var statearr_44444 = state_44394;
(statearr_44444[(7)] = inst_44305);

(statearr_44444[(15)] = inst_44360);

return statearr_44444;
})();
var statearr_44445_46595 = state_44394__$1;
(statearr_44445_46595[(2)] = null);

(statearr_44445_46595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (25))){
var inst_44388 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44446_46598 = state_44394__$1;
(statearr_44446_46598[(2)] = inst_44388);

(statearr_44446_46598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (34))){
var inst_44386 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44448_46602 = state_44394__$1;
(statearr_44448_46602[(2)] = inst_44386);

(statearr_44448_46602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (17))){
var state_44394__$1 = state_44394;
var statearr_44449_46605 = state_44394__$1;
(statearr_44449_46605[(2)] = false);

(statearr_44449_46605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (3))){
var state_44394__$1 = state_44394;
var statearr_44451_46606 = state_44394__$1;
(statearr_44451_46606[(2)] = false);

(statearr_44451_46606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (12))){
var inst_44390 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44394__$1,inst_44390);
} else {
if((state_val_44395 === (2))){
var inst_44274 = (state_44394[(8)]);
var inst_44283 = inst_44274.cljs$lang$protocol_mask$partition0$;
var inst_44284 = (inst_44283 & (64));
var inst_44285 = inst_44274.cljs$core$ISeq$;
var inst_44286 = (cljs.core.PROTOCOL_SENTINEL === inst_44285);
var inst_44287 = ((inst_44284) || (inst_44286));
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44287)){
var statearr_44453_46611 = state_44394__$1;
(statearr_44453_46611[(1)] = (5));

} else {
var statearr_44454_46612 = state_44394__$1;
(statearr_44454_46612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (23))){
var inst_44342 = (state_44394[(14)]);
var inst_44355 = (inst_44342 == null);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44355)){
var statearr_44455_46618 = state_44394__$1;
(statearr_44455_46618[(1)] = (26));

} else {
var statearr_44457_46620 = state_44394__$1;
(statearr_44457_46620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (35))){
var inst_44377 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44377)){
var statearr_44458_46626 = state_44394__$1;
(statearr_44458_46626[(1)] = (36));

} else {
var statearr_44459_46631 = state_44394__$1;
(statearr_44459_46631[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (19))){
var inst_44305 = (state_44394[(7)]);
var inst_44329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44305);
var state_44394__$1 = state_44394;
var statearr_44461_46641 = state_44394__$1;
(statearr_44461_46641[(2)] = inst_44329);

(statearr_44461_46641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (11))){
var inst_44305 = (state_44394[(7)]);
var inst_44313 = (inst_44305 == null);
var inst_44314 = cljs.core.not(inst_44313);
var state_44394__$1 = state_44394;
if(inst_44314){
var statearr_44462_46648 = state_44394__$1;
(statearr_44462_46648[(1)] = (13));

} else {
var statearr_44464_46649 = state_44394__$1;
(statearr_44464_46649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (9))){
var inst_44274 = (state_44394[(8)]);
var state_44394__$1 = state_44394;
var statearr_44465_46651 = state_44394__$1;
(statearr_44465_46651[(2)] = inst_44274);

(statearr_44465_46651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (5))){
var state_44394__$1 = state_44394;
var statearr_44467_46652 = state_44394__$1;
(statearr_44467_46652[(2)] = true);

(statearr_44467_46652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (14))){
var state_44394__$1 = state_44394;
var statearr_44468_46654 = state_44394__$1;
(statearr_44468_46654[(2)] = false);

(statearr_44468_46654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (26))){
var inst_44345 = (state_44394[(9)]);
var inst_44357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44345);
var state_44394__$1 = state_44394;
var statearr_44470_46655 = state_44394__$1;
(statearr_44470_46655[(2)] = inst_44357);

(statearr_44470_46655[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (16))){
var state_44394__$1 = state_44394;
var statearr_44471_46656 = state_44394__$1;
(statearr_44471_46656[(2)] = true);

(statearr_44471_46656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (38))){
var inst_44382 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44473_46660 = state_44394__$1;
(statearr_44473_46660[(2)] = inst_44382);

(statearr_44473_46660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (30))){
var inst_44334 = (state_44394[(13)]);
var inst_44345 = (state_44394[(9)]);
var inst_44333 = (state_44394[(11)]);
var inst_44369 = cljs.core.empty_QMARK_(inst_44333);
var inst_44370 = (inst_44334.cljs$core$IFn$_invoke$arity$1 ? inst_44334.cljs$core$IFn$_invoke$arity$1(inst_44345) : inst_44334.call(null,inst_44345));
var inst_44371 = cljs.core.not(inst_44370);
var inst_44372 = ((inst_44369) && (inst_44371));
var state_44394__$1 = state_44394;
var statearr_44475_46662 = state_44394__$1;
(statearr_44475_46662[(2)] = inst_44372);

(statearr_44475_46662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (10))){
var inst_44274 = (state_44394[(8)]);
var inst_44299 = (state_44394[(2)]);
var inst_44300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44299,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44299,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44299,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44305 = inst_44274;
var state_44394__$1 = (function (){var statearr_44476 = state_44394;
(statearr_44476[(16)] = inst_44303);

(statearr_44476[(17)] = inst_44301);

(statearr_44476[(18)] = inst_44300);

(statearr_44476[(7)] = inst_44305);

return statearr_44476;
})();
var statearr_44478_46666 = state_44394__$1;
(statearr_44478_46666[(2)] = null);

(statearr_44478_46666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (18))){
var inst_44324 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44479_46667 = state_44394__$1;
(statearr_44479_46667[(2)] = inst_44324);

(statearr_44479_46667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (37))){
var state_44394__$1 = state_44394;
var statearr_44481_46668 = state_44394__$1;
(statearr_44481_46668[(2)] = null);

(statearr_44481_46668[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (8))){
var inst_44274 = (state_44394[(8)]);
var inst_44296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44274);
var state_44394__$1 = state_44394;
var statearr_44482_46671 = state_44394__$1;
(statearr_44482_46671[(2)] = inst_44296);

(statearr_44482_46671[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__42116__auto__ = null;
var cljs$core$async$mix_$_state_machine__42116__auto____0 = (function (){
var statearr_44484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44484[(0)] = cljs$core$async$mix_$_state_machine__42116__auto__);

(statearr_44484[(1)] = (1));

return statearr_44484;
});
var cljs$core$async$mix_$_state_machine__42116__auto____1 = (function (state_44394){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_44394);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e44486){var ex__42119__auto__ = e44486;
var statearr_44487_46673 = state_44394;
(statearr_44487_46673[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_44394[(4)]))){
var statearr_44488_46674 = state_44394;
(statearr_44488_46674[(1)] = cljs.core.first((state_44394[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46676 = state_44394;
state_44394 = G__46676;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42116__auto__ = function(state_44394){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42116__auto____1.call(this,state_44394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42116__auto____0;
cljs$core$async$mix_$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42116__auto____1;
return cljs$core$async$mix_$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_44490 = f__42583__auto__();
(statearr_44490[(6)] = c__42582__auto___46530);

return statearr_44490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_46678 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_46678(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46684 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_46684(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46695 = (function() {
var G__46697 = null;
var G__46697__1 = (function (p){
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
var G__46697__2 = (function (p,v){
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
G__46697 = function(p,v){
switch(arguments.length){
case 1:
return G__46697__1.call(this,p);
case 2:
return G__46697__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46697.cljs$core$IFn$_invoke$arity$1 = G__46697__1;
G__46697.cljs$core$IFn$_invoke$arity$2 = G__46697__2;
return G__46697;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44503 = arguments.length;
switch (G__44503) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46695(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46695(p,v);
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
var G__44510 = arguments.length;
switch (G__44510) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44507_SHARP_){
if(cljs.core.truth_((p1__44507_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44507_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44507_SHARP_.call(null,topic)))){
return p1__44507_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44507_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44514 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44515){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44515 = meta44515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44516,meta44515__$1){
var self__ = this;
var _44516__$1 = this;
return (new cljs.core.async.t_cljs$core$async44514(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44515__$1));
}));

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44516){
var self__ = this;
var _44516__$1 = this;
return self__.meta44515;
}));

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44515","meta44515",545472768,null)], null);
}));

(cljs.core.async.t_cljs$core$async44514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44514");

(cljs.core.async.t_cljs$core$async44514.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44514.
 */
cljs.core.async.__GT_t_cljs$core$async44514 = (function cljs$core$async$__GT_t_cljs$core$async44514(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44515){
return (new cljs.core.async.t_cljs$core$async44514(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44515));
});

}

return (new cljs.core.async.t_cljs$core$async44514(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42582__auto___46733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_44598){
var state_val_44599 = (state_44598[(1)]);
if((state_val_44599 === (7))){
var inst_44594 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44601_46735 = state_44598__$1;
(statearr_44601_46735[(2)] = inst_44594);

(statearr_44601_46735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (20))){
var state_44598__$1 = state_44598;
var statearr_44603_46740 = state_44598__$1;
(statearr_44603_46740[(2)] = null);

(statearr_44603_46740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (1))){
var state_44598__$1 = state_44598;
var statearr_44604_46741 = state_44598__$1;
(statearr_44604_46741[(2)] = null);

(statearr_44604_46741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (24))){
var inst_44576 = (state_44598[(7)]);
var inst_44586 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44576);
var state_44598__$1 = state_44598;
var statearr_44606_46742 = state_44598__$1;
(statearr_44606_46742[(2)] = inst_44586);

(statearr_44606_46742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (4))){
var inst_44526 = (state_44598[(8)]);
var inst_44526__$1 = (state_44598[(2)]);
var inst_44527 = (inst_44526__$1 == null);
var state_44598__$1 = (function (){var statearr_44607 = state_44598;
(statearr_44607[(8)] = inst_44526__$1);

return statearr_44607;
})();
if(cljs.core.truth_(inst_44527)){
var statearr_44609_46744 = state_44598__$1;
(statearr_44609_46744[(1)] = (5));

} else {
var statearr_44610_46745 = state_44598__$1;
(statearr_44610_46745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (15))){
var inst_44570 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44611_46746 = state_44598__$1;
(statearr_44611_46746[(2)] = inst_44570);

(statearr_44611_46746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (21))){
var inst_44591 = (state_44598[(2)]);
var state_44598__$1 = (function (){var statearr_44613 = state_44598;
(statearr_44613[(9)] = inst_44591);

return statearr_44613;
})();
var statearr_44614_46747 = state_44598__$1;
(statearr_44614_46747[(2)] = null);

(statearr_44614_46747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (13))){
var inst_44551 = (state_44598[(10)]);
var inst_44554 = cljs.core.chunked_seq_QMARK_(inst_44551);
var state_44598__$1 = state_44598;
if(inst_44554){
var statearr_44616_46749 = state_44598__$1;
(statearr_44616_46749[(1)] = (16));

} else {
var statearr_44617_46750 = state_44598__$1;
(statearr_44617_46750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (22))){
var inst_44583 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
if(cljs.core.truth_(inst_44583)){
var statearr_44618_46751 = state_44598__$1;
(statearr_44618_46751[(1)] = (23));

} else {
var statearr_44619_46753 = state_44598__$1;
(statearr_44619_46753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (6))){
var inst_44526 = (state_44598[(8)]);
var inst_44576 = (state_44598[(7)]);
var inst_44578 = (state_44598[(11)]);
var inst_44576__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44526) : topic_fn.call(null,inst_44526));
var inst_44577 = cljs.core.deref(mults);
var inst_44578__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44577,inst_44576__$1);
var state_44598__$1 = (function (){var statearr_44621 = state_44598;
(statearr_44621[(7)] = inst_44576__$1);

(statearr_44621[(11)] = inst_44578__$1);

return statearr_44621;
})();
if(cljs.core.truth_(inst_44578__$1)){
var statearr_44623_46759 = state_44598__$1;
(statearr_44623_46759[(1)] = (19));

} else {
var statearr_44624_46761 = state_44598__$1;
(statearr_44624_46761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (25))){
var inst_44588 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44625_46763 = state_44598__$1;
(statearr_44625_46763[(2)] = inst_44588);

(statearr_44625_46763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (17))){
var inst_44551 = (state_44598[(10)]);
var inst_44561 = cljs.core.first(inst_44551);
var inst_44562 = cljs.core.async.muxch_STAR_(inst_44561);
var inst_44563 = cljs.core.async.close_BANG_(inst_44562);
var inst_44564 = cljs.core.next(inst_44551);
var inst_44537 = inst_44564;
var inst_44538 = null;
var inst_44539 = (0);
var inst_44540 = (0);
var state_44598__$1 = (function (){var statearr_44627 = state_44598;
(statearr_44627[(12)] = inst_44563);

(statearr_44627[(13)] = inst_44537);

(statearr_44627[(14)] = inst_44538);

(statearr_44627[(15)] = inst_44539);

(statearr_44627[(16)] = inst_44540);

return statearr_44627;
})();
var statearr_44628_46770 = state_44598__$1;
(statearr_44628_46770[(2)] = null);

(statearr_44628_46770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (3))){
var inst_44596 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44598__$1,inst_44596);
} else {
if((state_val_44599 === (12))){
var inst_44572 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44630_46774 = state_44598__$1;
(statearr_44630_46774[(2)] = inst_44572);

(statearr_44630_46774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (2))){
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44598__$1,(4),ch);
} else {
if((state_val_44599 === (23))){
var state_44598__$1 = state_44598;
var statearr_44632_46779 = state_44598__$1;
(statearr_44632_46779[(2)] = null);

(statearr_44632_46779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (19))){
var inst_44526 = (state_44598[(8)]);
var inst_44578 = (state_44598[(11)]);
var inst_44581 = cljs.core.async.muxch_STAR_(inst_44578);
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44598__$1,(22),inst_44581,inst_44526);
} else {
if((state_val_44599 === (11))){
var inst_44551 = (state_44598[(10)]);
var inst_44537 = (state_44598[(13)]);
var inst_44551__$1 = cljs.core.seq(inst_44537);
var state_44598__$1 = (function (){var statearr_44634 = state_44598;
(statearr_44634[(10)] = inst_44551__$1);

return statearr_44634;
})();
if(inst_44551__$1){
var statearr_44635_46781 = state_44598__$1;
(statearr_44635_46781[(1)] = (13));

} else {
var statearr_44636_46782 = state_44598__$1;
(statearr_44636_46782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (9))){
var inst_44574 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44638_46784 = state_44598__$1;
(statearr_44638_46784[(2)] = inst_44574);

(statearr_44638_46784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (5))){
var inst_44533 = cljs.core.deref(mults);
var inst_44534 = cljs.core.vals(inst_44533);
var inst_44535 = cljs.core.seq(inst_44534);
var inst_44537 = inst_44535;
var inst_44538 = null;
var inst_44539 = (0);
var inst_44540 = (0);
var state_44598__$1 = (function (){var statearr_44640 = state_44598;
(statearr_44640[(13)] = inst_44537);

(statearr_44640[(14)] = inst_44538);

(statearr_44640[(15)] = inst_44539);

(statearr_44640[(16)] = inst_44540);

return statearr_44640;
})();
var statearr_44641_46791 = state_44598__$1;
(statearr_44641_46791[(2)] = null);

(statearr_44641_46791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (14))){
var state_44598__$1 = state_44598;
var statearr_44645_46795 = state_44598__$1;
(statearr_44645_46795[(2)] = null);

(statearr_44645_46795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (16))){
var inst_44551 = (state_44598[(10)]);
var inst_44556 = cljs.core.chunk_first(inst_44551);
var inst_44557 = cljs.core.chunk_rest(inst_44551);
var inst_44558 = cljs.core.count(inst_44556);
var inst_44537 = inst_44557;
var inst_44538 = inst_44556;
var inst_44539 = inst_44558;
var inst_44540 = (0);
var state_44598__$1 = (function (){var statearr_44647 = state_44598;
(statearr_44647[(13)] = inst_44537);

(statearr_44647[(14)] = inst_44538);

(statearr_44647[(15)] = inst_44539);

(statearr_44647[(16)] = inst_44540);

return statearr_44647;
})();
var statearr_44649_46799 = state_44598__$1;
(statearr_44649_46799[(2)] = null);

(statearr_44649_46799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (10))){
var inst_44537 = (state_44598[(13)]);
var inst_44538 = (state_44598[(14)]);
var inst_44539 = (state_44598[(15)]);
var inst_44540 = (state_44598[(16)]);
var inst_44545 = cljs.core._nth(inst_44538,inst_44540);
var inst_44546 = cljs.core.async.muxch_STAR_(inst_44545);
var inst_44547 = cljs.core.async.close_BANG_(inst_44546);
var inst_44548 = (inst_44540 + (1));
var tmp44642 = inst_44537;
var tmp44643 = inst_44538;
var tmp44644 = inst_44539;
var inst_44537__$1 = tmp44642;
var inst_44538__$1 = tmp44643;
var inst_44539__$1 = tmp44644;
var inst_44540__$1 = inst_44548;
var state_44598__$1 = (function (){var statearr_44651 = state_44598;
(statearr_44651[(13)] = inst_44537__$1);

(statearr_44651[(17)] = inst_44547);

(statearr_44651[(14)] = inst_44538__$1);

(statearr_44651[(15)] = inst_44539__$1);

(statearr_44651[(16)] = inst_44540__$1);

return statearr_44651;
})();
var statearr_44652_46805 = state_44598__$1;
(statearr_44652_46805[(2)] = null);

(statearr_44652_46805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (18))){
var inst_44567 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44653_46807 = state_44598__$1;
(statearr_44653_46807[(2)] = inst_44567);

(statearr_44653_46807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (8))){
var inst_44539 = (state_44598[(15)]);
var inst_44540 = (state_44598[(16)]);
var inst_44542 = (inst_44540 < inst_44539);
var inst_44543 = inst_44542;
var state_44598__$1 = state_44598;
if(cljs.core.truth_(inst_44543)){
var statearr_44655_46808 = state_44598__$1;
(statearr_44655_46808[(1)] = (10));

} else {
var statearr_44656_46809 = state_44598__$1;
(statearr_44656_46809[(1)] = (11));

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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_44658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44658[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_44658[(1)] = (1));

return statearr_44658;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_44598){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_44598);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e44660){var ex__42119__auto__ = e44660;
var statearr_44661_46810 = state_44598;
(statearr_44661_46810[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_44598[(4)]))){
var statearr_44662_46811 = state_44598;
(statearr_44662_46811[(1)] = cljs.core.first((state_44598[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46812 = state_44598;
state_44598 = G__46812;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_44598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_44598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_44664 = f__42583__auto__();
(statearr_44664[(6)] = c__42582__auto___46733);

return statearr_44664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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
var G__44667 = arguments.length;
switch (G__44667) {
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
var G__44673 = arguments.length;
switch (G__44673) {
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
var G__44677 = arguments.length;
switch (G__44677) {
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
var c__42582__auto___46823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_44727){
var state_val_44728 = (state_44727[(1)]);
if((state_val_44728 === (7))){
var state_44727__$1 = state_44727;
var statearr_44730_46825 = state_44727__$1;
(statearr_44730_46825[(2)] = null);

(statearr_44730_46825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (1))){
var state_44727__$1 = state_44727;
var statearr_44732_46826 = state_44727__$1;
(statearr_44732_46826[(2)] = null);

(statearr_44732_46826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (4))){
var inst_44684 = (state_44727[(7)]);
var inst_44685 = (state_44727[(8)]);
var inst_44687 = (inst_44685 < inst_44684);
var state_44727__$1 = state_44727;
if(cljs.core.truth_(inst_44687)){
var statearr_44733_46827 = state_44727__$1;
(statearr_44733_46827[(1)] = (6));

} else {
var statearr_44735_46828 = state_44727__$1;
(statearr_44735_46828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (15))){
var inst_44712 = (state_44727[(9)]);
var inst_44718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44712);
var state_44727__$1 = state_44727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44727__$1,(17),out,inst_44718);
} else {
if((state_val_44728 === (13))){
var inst_44712 = (state_44727[(9)]);
var inst_44712__$1 = (state_44727[(2)]);
var inst_44713 = cljs.core.some(cljs.core.nil_QMARK_,inst_44712__$1);
var state_44727__$1 = (function (){var statearr_44737 = state_44727;
(statearr_44737[(9)] = inst_44712__$1);

return statearr_44737;
})();
if(cljs.core.truth_(inst_44713)){
var statearr_44738_46830 = state_44727__$1;
(statearr_44738_46830[(1)] = (14));

} else {
var statearr_44739_46831 = state_44727__$1;
(statearr_44739_46831[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (6))){
var state_44727__$1 = state_44727;
var statearr_44741_46832 = state_44727__$1;
(statearr_44741_46832[(2)] = null);

(statearr_44741_46832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (17))){
var inst_44720 = (state_44727[(2)]);
var state_44727__$1 = (function (){var statearr_44745 = state_44727;
(statearr_44745[(10)] = inst_44720);

return statearr_44745;
})();
var statearr_44747_46833 = state_44727__$1;
(statearr_44747_46833[(2)] = null);

(statearr_44747_46833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (3))){
var inst_44725 = (state_44727[(2)]);
var state_44727__$1 = state_44727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44727__$1,inst_44725);
} else {
if((state_val_44728 === (12))){
var _ = (function (){var statearr_44748 = state_44727;
(statearr_44748[(4)] = cljs.core.rest((state_44727[(4)])));

return statearr_44748;
})();
var state_44727__$1 = state_44727;
var ex44744 = (state_44727__$1[(2)]);
var statearr_44750_46835 = state_44727__$1;
(statearr_44750_46835[(5)] = ex44744);


if((ex44744 instanceof Object)){
var statearr_44751_46837 = state_44727__$1;
(statearr_44751_46837[(1)] = (11));

(statearr_44751_46837[(5)] = null);

} else {
throw ex44744;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (2))){
var inst_44683 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44684 = cnt;
var inst_44685 = (0);
var state_44727__$1 = (function (){var statearr_44754 = state_44727;
(statearr_44754[(11)] = inst_44683);

(statearr_44754[(7)] = inst_44684);

(statearr_44754[(8)] = inst_44685);

return statearr_44754;
})();
var statearr_44756_46840 = state_44727__$1;
(statearr_44756_46840[(2)] = null);

(statearr_44756_46840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (11))){
var inst_44690 = (state_44727[(2)]);
var inst_44692 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44727__$1 = (function (){var statearr_44757 = state_44727;
(statearr_44757[(12)] = inst_44690);

return statearr_44757;
})();
var statearr_44758_46846 = state_44727__$1;
(statearr_44758_46846[(2)] = inst_44692);

(statearr_44758_46846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (9))){
var inst_44685 = (state_44727[(8)]);
var _ = (function (){var statearr_44760 = state_44727;
(statearr_44760[(4)] = cljs.core.cons((12),(state_44727[(4)])));

return statearr_44760;
})();
var inst_44698 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44685) : chs__$1.call(null,inst_44685));
var inst_44699 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44685) : done.call(null,inst_44685));
var inst_44700 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44698,inst_44699);
var ___$1 = (function (){var statearr_44761 = state_44727;
(statearr_44761[(4)] = cljs.core.rest((state_44727[(4)])));

return statearr_44761;
})();
var state_44727__$1 = state_44727;
var statearr_44762_46848 = state_44727__$1;
(statearr_44762_46848[(2)] = inst_44700);

(statearr_44762_46848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (5))){
var inst_44710 = (state_44727[(2)]);
var state_44727__$1 = (function (){var statearr_44764 = state_44727;
(statearr_44764[(13)] = inst_44710);

return statearr_44764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44727__$1,(13),dchan);
} else {
if((state_val_44728 === (14))){
var inst_44716 = cljs.core.async.close_BANG_(out);
var state_44727__$1 = state_44727;
var statearr_44765_46849 = state_44727__$1;
(statearr_44765_46849[(2)] = inst_44716);

(statearr_44765_46849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (16))){
var inst_44723 = (state_44727[(2)]);
var state_44727__$1 = state_44727;
var statearr_44767_46850 = state_44727__$1;
(statearr_44767_46850[(2)] = inst_44723);

(statearr_44767_46850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (10))){
var inst_44685 = (state_44727[(8)]);
var inst_44703 = (state_44727[(2)]);
var inst_44704 = (inst_44685 + (1));
var inst_44685__$1 = inst_44704;
var state_44727__$1 = (function (){var statearr_44768 = state_44727;
(statearr_44768[(8)] = inst_44685__$1);

(statearr_44768[(14)] = inst_44703);

return statearr_44768;
})();
var statearr_44770_46851 = state_44727__$1;
(statearr_44770_46851[(2)] = null);

(statearr_44770_46851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (8))){
var inst_44708 = (state_44727[(2)]);
var state_44727__$1 = state_44727;
var statearr_44771_46853 = state_44727__$1;
(statearr_44771_46853[(2)] = inst_44708);

(statearr_44771_46853[(1)] = (5));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_44773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44773[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_44773[(1)] = (1));

return statearr_44773;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_44727){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_44727);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e44774){var ex__42119__auto__ = e44774;
var statearr_44775_46858 = state_44727;
(statearr_44775_46858[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_44727[(4)]))){
var statearr_44777_46859 = state_44727;
(statearr_44777_46859[(1)] = cljs.core.first((state_44727[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46860 = state_44727;
state_44727 = G__46860;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_44727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_44727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_44779 = f__42583__auto__();
(statearr_44779[(6)] = c__42582__auto___46823);

return statearr_44779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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
var G__44783 = arguments.length;
switch (G__44783) {
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
var c__42582__auto___46865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_44818){
var state_val_44819 = (state_44818[(1)]);
if((state_val_44819 === (7))){
var inst_44796 = (state_44818[(7)]);
var inst_44797 = (state_44818[(8)]);
var inst_44796__$1 = (state_44818[(2)]);
var inst_44797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44796__$1,(0),null);
var inst_44798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44796__$1,(1),null);
var inst_44799 = (inst_44797__$1 == null);
var state_44818__$1 = (function (){var statearr_44822 = state_44818;
(statearr_44822[(7)] = inst_44796__$1);

(statearr_44822[(9)] = inst_44798);

(statearr_44822[(8)] = inst_44797__$1);

return statearr_44822;
})();
if(cljs.core.truth_(inst_44799)){
var statearr_44823_46866 = state_44818__$1;
(statearr_44823_46866[(1)] = (8));

} else {
var statearr_44824_46867 = state_44818__$1;
(statearr_44824_46867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (1))){
var inst_44786 = cljs.core.vec(chs);
var inst_44787 = inst_44786;
var state_44818__$1 = (function (){var statearr_44826 = state_44818;
(statearr_44826[(10)] = inst_44787);

return statearr_44826;
})();
var statearr_44827_46868 = state_44818__$1;
(statearr_44827_46868[(2)] = null);

(statearr_44827_46868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (4))){
var inst_44787 = (state_44818[(10)]);
var state_44818__$1 = state_44818;
return cljs.core.async.ioc_alts_BANG_(state_44818__$1,(7),inst_44787);
} else {
if((state_val_44819 === (6))){
var inst_44814 = (state_44818[(2)]);
var state_44818__$1 = state_44818;
var statearr_44829_46869 = state_44818__$1;
(statearr_44829_46869[(2)] = inst_44814);

(statearr_44829_46869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (3))){
var inst_44816 = (state_44818[(2)]);
var state_44818__$1 = state_44818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44818__$1,inst_44816);
} else {
if((state_val_44819 === (2))){
var inst_44787 = (state_44818[(10)]);
var inst_44789 = cljs.core.count(inst_44787);
var inst_44790 = (inst_44789 > (0));
var state_44818__$1 = state_44818;
if(cljs.core.truth_(inst_44790)){
var statearr_44832_46873 = state_44818__$1;
(statearr_44832_46873[(1)] = (4));

} else {
var statearr_44833_46874 = state_44818__$1;
(statearr_44833_46874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (11))){
var inst_44787 = (state_44818[(10)]);
var inst_44807 = (state_44818[(2)]);
var tmp44830 = inst_44787;
var inst_44787__$1 = tmp44830;
var state_44818__$1 = (function (){var statearr_44834 = state_44818;
(statearr_44834[(10)] = inst_44787__$1);

(statearr_44834[(11)] = inst_44807);

return statearr_44834;
})();
var statearr_44836_46875 = state_44818__$1;
(statearr_44836_46875[(2)] = null);

(statearr_44836_46875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (9))){
var inst_44797 = (state_44818[(8)]);
var state_44818__$1 = state_44818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44818__$1,(11),out,inst_44797);
} else {
if((state_val_44819 === (5))){
var inst_44812 = cljs.core.async.close_BANG_(out);
var state_44818__$1 = state_44818;
var statearr_44839_46878 = state_44818__$1;
(statearr_44839_46878[(2)] = inst_44812);

(statearr_44839_46878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (10))){
var inst_44810 = (state_44818[(2)]);
var state_44818__$1 = state_44818;
var statearr_44841_46884 = state_44818__$1;
(statearr_44841_46884[(2)] = inst_44810);

(statearr_44841_46884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44819 === (8))){
var inst_44787 = (state_44818[(10)]);
var inst_44796 = (state_44818[(7)]);
var inst_44798 = (state_44818[(9)]);
var inst_44797 = (state_44818[(8)]);
var inst_44802 = (function (){var cs = inst_44787;
var vec__44792 = inst_44796;
var v = inst_44797;
var c = inst_44798;
return (function (p1__44780_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44780_SHARP_);
});
})();
var inst_44803 = cljs.core.filterv(inst_44802,inst_44787);
var inst_44787__$1 = inst_44803;
var state_44818__$1 = (function (){var statearr_44843 = state_44818;
(statearr_44843[(10)] = inst_44787__$1);

return statearr_44843;
})();
var statearr_44844_46887 = state_44818__$1;
(statearr_44844_46887[(2)] = null);

(statearr_44844_46887[(1)] = (2));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_44846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44846[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_44846[(1)] = (1));

return statearr_44846;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_44818){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_44818);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e44847){var ex__42119__auto__ = e44847;
var statearr_44848_46890 = state_44818;
(statearr_44848_46890[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_44818[(4)]))){
var statearr_44849_46895 = state_44818;
(statearr_44849_46895[(1)] = cljs.core.first((state_44818[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46900 = state_44818;
state_44818 = G__46900;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_44818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_44818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_44851 = f__42583__auto__();
(statearr_44851[(6)] = c__42582__auto___46865);

return statearr_44851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
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
var G__44855 = arguments.length;
switch (G__44855) {
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
var c__42582__auto___46905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_44882){
var state_val_44883 = (state_44882[(1)]);
if((state_val_44883 === (7))){
var inst_44863 = (state_44882[(7)]);
var inst_44863__$1 = (state_44882[(2)]);
var inst_44865 = (inst_44863__$1 == null);
var inst_44866 = cljs.core.not(inst_44865);
var state_44882__$1 = (function (){var statearr_44885 = state_44882;
(statearr_44885[(7)] = inst_44863__$1);

return statearr_44885;
})();
if(inst_44866){
var statearr_44887_46908 = state_44882__$1;
(statearr_44887_46908[(1)] = (8));

} else {
var statearr_44888_46909 = state_44882__$1;
(statearr_44888_46909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (1))){
var inst_44858 = (0);
var state_44882__$1 = (function (){var statearr_44889 = state_44882;
(statearr_44889[(8)] = inst_44858);

return statearr_44889;
})();
var statearr_44890_46910 = state_44882__$1;
(statearr_44890_46910[(2)] = null);

(statearr_44890_46910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (4))){
var state_44882__$1 = state_44882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44882__$1,(7),ch);
} else {
if((state_val_44883 === (6))){
var inst_44877 = (state_44882[(2)]);
var state_44882__$1 = state_44882;
var statearr_44892_46912 = state_44882__$1;
(statearr_44892_46912[(2)] = inst_44877);

(statearr_44892_46912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (3))){
var inst_44879 = (state_44882[(2)]);
var inst_44880 = cljs.core.async.close_BANG_(out);
var state_44882__$1 = (function (){var statearr_44894 = state_44882;
(statearr_44894[(9)] = inst_44879);

return statearr_44894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44882__$1,inst_44880);
} else {
if((state_val_44883 === (2))){
var inst_44858 = (state_44882[(8)]);
var inst_44860 = (inst_44858 < n);
var state_44882__$1 = state_44882;
if(cljs.core.truth_(inst_44860)){
var statearr_44895_46917 = state_44882__$1;
(statearr_44895_46917[(1)] = (4));

} else {
var statearr_44896_46918 = state_44882__$1;
(statearr_44896_46918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (11))){
var inst_44858 = (state_44882[(8)]);
var inst_44869 = (state_44882[(2)]);
var inst_44870 = (inst_44858 + (1));
var inst_44858__$1 = inst_44870;
var state_44882__$1 = (function (){var statearr_44898 = state_44882;
(statearr_44898[(10)] = inst_44869);

(statearr_44898[(8)] = inst_44858__$1);

return statearr_44898;
})();
var statearr_44899_46919 = state_44882__$1;
(statearr_44899_46919[(2)] = null);

(statearr_44899_46919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (9))){
var state_44882__$1 = state_44882;
var statearr_44901_46924 = state_44882__$1;
(statearr_44901_46924[(2)] = null);

(statearr_44901_46924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (5))){
var state_44882__$1 = state_44882;
var statearr_44902_46926 = state_44882__$1;
(statearr_44902_46926[(2)] = null);

(statearr_44902_46926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (10))){
var inst_44874 = (state_44882[(2)]);
var state_44882__$1 = state_44882;
var statearr_44903_46927 = state_44882__$1;
(statearr_44903_46927[(2)] = inst_44874);

(statearr_44903_46927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (8))){
var inst_44863 = (state_44882[(7)]);
var state_44882__$1 = state_44882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44882__$1,(11),out,inst_44863);
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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_44904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44904[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_44904[(1)] = (1));

return statearr_44904;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_44882){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_44882);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e44907){var ex__42119__auto__ = e44907;
var statearr_44913_46930 = state_44882;
(statearr_44913_46930[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_44882[(4)]))){
var statearr_44914_46932 = state_44882;
(statearr_44914_46932[(1)] = cljs.core.first((state_44882[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46934 = state_44882;
state_44882 = G__46934;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_44882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_44882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_44915 = f__42583__auto__();
(statearr_44915[(6)] = c__42582__auto___46905);

return statearr_44915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44918 = (function (f,ch,meta44919){
this.f = f;
this.ch = ch;
this.meta44919 = meta44919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44920,meta44919__$1){
var self__ = this;
var _44920__$1 = this;
return (new cljs.core.async.t_cljs$core$async44918(self__.f,self__.ch,meta44919__$1));
}));

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44920){
var self__ = this;
var _44920__$1 = this;
return self__.meta44919;
}));

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44926 = (function (f,ch,meta44919,_,fn1,meta44927){
this.f = f;
this.ch = ch;
this.meta44919 = meta44919;
this._ = _;
this.fn1 = fn1;
this.meta44927 = meta44927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44928,meta44927__$1){
var self__ = this;
var _44928__$1 = this;
return (new cljs.core.async.t_cljs$core$async44926(self__.f,self__.ch,self__.meta44919,self__._,self__.fn1,meta44927__$1));
}));

(cljs.core.async.t_cljs$core$async44926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44928){
var self__ = this;
var _44928__$1 = this;
return self__.meta44927;
}));

(cljs.core.async.t_cljs$core$async44926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44917_SHARP_){
var G__44934 = (((p1__44917_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44917_SHARP_) : self__.f.call(null,p1__44917_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44934) : f1.call(null,G__44934));
});
}));

(cljs.core.async.t_cljs$core$async44926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44919","meta44919",-2091208958,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44918","cljs.core.async/t_cljs$core$async44918",406040442,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44927","meta44927",-2092190037,null)], null);
}));

(cljs.core.async.t_cljs$core$async44926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44926");

(cljs.core.async.t_cljs$core$async44926.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44926.
 */
cljs.core.async.__GT_t_cljs$core$async44926 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44926(f__$1,ch__$1,meta44919__$1,___$2,fn1__$1,meta44927){
return (new cljs.core.async.t_cljs$core$async44926(f__$1,ch__$1,meta44919__$1,___$2,fn1__$1,meta44927));
});

}

return (new cljs.core.async.t_cljs$core$async44926(self__.f,self__.ch,self__.meta44919,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44936 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44936) : self__.f.call(null,G__44936));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44919","meta44919",-2091208958,null)], null);
}));

(cljs.core.async.t_cljs$core$async44918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44918");

(cljs.core.async.t_cljs$core$async44918.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44918.
 */
cljs.core.async.__GT_t_cljs$core$async44918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44918(f__$1,ch__$1,meta44919){
return (new cljs.core.async.t_cljs$core$async44918(f__$1,ch__$1,meta44919));
});

}

return (new cljs.core.async.t_cljs$core$async44918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44944 = (function (f,ch,meta44945){
this.f = f;
this.ch = ch;
this.meta44945 = meta44945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44946,meta44945__$1){
var self__ = this;
var _44946__$1 = this;
return (new cljs.core.async.t_cljs$core$async44944(self__.f,self__.ch,meta44945__$1));
}));

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44946){
var self__ = this;
var _44946__$1 = this;
return self__.meta44945;
}));

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44945","meta44945",2139397373,null)], null);
}));

(cljs.core.async.t_cljs$core$async44944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44944");

(cljs.core.async.t_cljs$core$async44944.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44944.
 */
cljs.core.async.__GT_t_cljs$core$async44944 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44944(f__$1,ch__$1,meta44945){
return (new cljs.core.async.t_cljs$core$async44944(f__$1,ch__$1,meta44945));
});

}

return (new cljs.core.async.t_cljs$core$async44944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44974 = (function (p,ch,meta44975){
this.p = p;
this.ch = ch;
this.meta44975 = meta44975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44976,meta44975__$1){
var self__ = this;
var _44976__$1 = this;
return (new cljs.core.async.t_cljs$core$async44974(self__.p,self__.ch,meta44975__$1));
}));

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44976){
var self__ = this;
var _44976__$1 = this;
return self__.meta44975;
}));

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44975","meta44975",1080004652,null)], null);
}));

(cljs.core.async.t_cljs$core$async44974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44974");

(cljs.core.async.t_cljs$core$async44974.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44974.
 */
cljs.core.async.__GT_t_cljs$core$async44974 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44974(p__$1,ch__$1,meta44975){
return (new cljs.core.async.t_cljs$core$async44974(p__$1,ch__$1,meta44975));
});

}

return (new cljs.core.async.t_cljs$core$async44974(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45010 = arguments.length;
switch (G__45010) {
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
var c__42582__auto___46964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_45044){
var state_val_45045 = (state_45044[(1)]);
if((state_val_45045 === (7))){
var inst_45040 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
var statearr_45048_46969 = state_45044__$1;
(statearr_45048_46969[(2)] = inst_45040);

(statearr_45048_46969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (1))){
var state_45044__$1 = state_45044;
var statearr_45050_46976 = state_45044__$1;
(statearr_45050_46976[(2)] = null);

(statearr_45050_46976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (4))){
var inst_45024 = (state_45044[(7)]);
var inst_45024__$1 = (state_45044[(2)]);
var inst_45026 = (inst_45024__$1 == null);
var state_45044__$1 = (function (){var statearr_45051 = state_45044;
(statearr_45051[(7)] = inst_45024__$1);

return statearr_45051;
})();
if(cljs.core.truth_(inst_45026)){
var statearr_45053_46985 = state_45044__$1;
(statearr_45053_46985[(1)] = (5));

} else {
var statearr_45055_46988 = state_45044__$1;
(statearr_45055_46988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (6))){
var inst_45024 = (state_45044[(7)]);
var inst_45031 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45024) : p.call(null,inst_45024));
var state_45044__$1 = state_45044;
if(cljs.core.truth_(inst_45031)){
var statearr_45057_46999 = state_45044__$1;
(statearr_45057_46999[(1)] = (8));

} else {
var statearr_45058_47001 = state_45044__$1;
(statearr_45058_47001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (3))){
var inst_45042 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45044__$1,inst_45042);
} else {
if((state_val_45045 === (2))){
var state_45044__$1 = state_45044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45044__$1,(4),ch);
} else {
if((state_val_45045 === (11))){
var inst_45034 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
var statearr_45063_47022 = state_45044__$1;
(statearr_45063_47022[(2)] = inst_45034);

(statearr_45063_47022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (9))){
var state_45044__$1 = state_45044;
var statearr_45064_47023 = state_45044__$1;
(statearr_45064_47023[(2)] = null);

(statearr_45064_47023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (5))){
var inst_45029 = cljs.core.async.close_BANG_(out);
var state_45044__$1 = state_45044;
var statearr_45070_47024 = state_45044__$1;
(statearr_45070_47024[(2)] = inst_45029);

(statearr_45070_47024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (10))){
var inst_45037 = (state_45044[(2)]);
var state_45044__$1 = (function (){var statearr_45073 = state_45044;
(statearr_45073[(8)] = inst_45037);

return statearr_45073;
})();
var statearr_45074_47026 = state_45044__$1;
(statearr_45074_47026[(2)] = null);

(statearr_45074_47026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45045 === (8))){
var inst_45024 = (state_45044[(7)]);
var state_45044__$1 = state_45044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45044__$1,(11),out,inst_45024);
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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_45076 = [null,null,null,null,null,null,null,null,null];
(statearr_45076[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_45076[(1)] = (1));

return statearr_45076;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_45044){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_45044);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e45078){var ex__42119__auto__ = e45078;
var statearr_45080_47033 = state_45044;
(statearr_45080_47033[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_45044[(4)]))){
var statearr_45081_47034 = state_45044;
(statearr_45081_47034[(1)] = cljs.core.first((state_45044[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47037 = state_45044;
state_45044 = G__47037;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_45044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_45044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_45083 = f__42583__auto__();
(statearr_45083[(6)] = c__42582__auto___46964);

return statearr_45083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45092 = arguments.length;
switch (G__45092) {
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
var c__42582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_45169){
var state_val_45170 = (state_45169[(1)]);
if((state_val_45170 === (7))){
var inst_45165 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45177_47053 = state_45169__$1;
(statearr_45177_47053[(2)] = inst_45165);

(statearr_45177_47053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (20))){
var inst_45131 = (state_45169[(7)]);
var inst_45146 = (state_45169[(2)]);
var inst_45147 = cljs.core.next(inst_45131);
var inst_45113 = inst_45147;
var inst_45114 = null;
var inst_45115 = (0);
var inst_45116 = (0);
var state_45169__$1 = (function (){var statearr_45178 = state_45169;
(statearr_45178[(8)] = inst_45115);

(statearr_45178[(9)] = inst_45146);

(statearr_45178[(10)] = inst_45116);

(statearr_45178[(11)] = inst_45113);

(statearr_45178[(12)] = inst_45114);

return statearr_45178;
})();
var statearr_45183_47059 = state_45169__$1;
(statearr_45183_47059[(2)] = null);

(statearr_45183_47059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (1))){
var state_45169__$1 = state_45169;
var statearr_45184_47065 = state_45169__$1;
(statearr_45184_47065[(2)] = null);

(statearr_45184_47065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (4))){
var inst_45100 = (state_45169[(13)]);
var inst_45100__$1 = (state_45169[(2)]);
var inst_45101 = (inst_45100__$1 == null);
var state_45169__$1 = (function (){var statearr_45186 = state_45169;
(statearr_45186[(13)] = inst_45100__$1);

return statearr_45186;
})();
if(cljs.core.truth_(inst_45101)){
var statearr_45190_47069 = state_45169__$1;
(statearr_45190_47069[(1)] = (5));

} else {
var statearr_45191_47070 = state_45169__$1;
(statearr_45191_47070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (15))){
var state_45169__$1 = state_45169;
var statearr_45199_47074 = state_45169__$1;
(statearr_45199_47074[(2)] = null);

(statearr_45199_47074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (21))){
var state_45169__$1 = state_45169;
var statearr_45202_47080 = state_45169__$1;
(statearr_45202_47080[(2)] = null);

(statearr_45202_47080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (13))){
var inst_45115 = (state_45169[(8)]);
var inst_45116 = (state_45169[(10)]);
var inst_45113 = (state_45169[(11)]);
var inst_45114 = (state_45169[(12)]);
var inst_45126 = (state_45169[(2)]);
var inst_45127 = (inst_45116 + (1));
var tmp45195 = inst_45115;
var tmp45196 = inst_45113;
var tmp45197 = inst_45114;
var inst_45113__$1 = tmp45196;
var inst_45114__$1 = tmp45197;
var inst_45115__$1 = tmp45195;
var inst_45116__$1 = inst_45127;
var state_45169__$1 = (function (){var statearr_45206 = state_45169;
(statearr_45206[(8)] = inst_45115__$1);

(statearr_45206[(14)] = inst_45126);

(statearr_45206[(10)] = inst_45116__$1);

(statearr_45206[(11)] = inst_45113__$1);

(statearr_45206[(12)] = inst_45114__$1);

return statearr_45206;
})();
var statearr_45208_47087 = state_45169__$1;
(statearr_45208_47087[(2)] = null);

(statearr_45208_47087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (22))){
var state_45169__$1 = state_45169;
var statearr_45212_47091 = state_45169__$1;
(statearr_45212_47091[(2)] = null);

(statearr_45212_47091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (6))){
var inst_45100 = (state_45169[(13)]);
var inst_45111 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45100) : f.call(null,inst_45100));
var inst_45112 = cljs.core.seq(inst_45111);
var inst_45113 = inst_45112;
var inst_45114 = null;
var inst_45115 = (0);
var inst_45116 = (0);
var state_45169__$1 = (function (){var statearr_45216 = state_45169;
(statearr_45216[(8)] = inst_45115);

(statearr_45216[(10)] = inst_45116);

(statearr_45216[(11)] = inst_45113);

(statearr_45216[(12)] = inst_45114);

return statearr_45216;
})();
var statearr_45218_47097 = state_45169__$1;
(statearr_45218_47097[(2)] = null);

(statearr_45218_47097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (17))){
var inst_45131 = (state_45169[(7)]);
var inst_45139 = cljs.core.chunk_first(inst_45131);
var inst_45140 = cljs.core.chunk_rest(inst_45131);
var inst_45141 = cljs.core.count(inst_45139);
var inst_45113 = inst_45140;
var inst_45114 = inst_45139;
var inst_45115 = inst_45141;
var inst_45116 = (0);
var state_45169__$1 = (function (){var statearr_45222 = state_45169;
(statearr_45222[(8)] = inst_45115);

(statearr_45222[(10)] = inst_45116);

(statearr_45222[(11)] = inst_45113);

(statearr_45222[(12)] = inst_45114);

return statearr_45222;
})();
var statearr_45225_47112 = state_45169__$1;
(statearr_45225_47112[(2)] = null);

(statearr_45225_47112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (3))){
var inst_45167 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45169__$1,inst_45167);
} else {
if((state_val_45170 === (12))){
var inst_45155 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45233_47114 = state_45169__$1;
(statearr_45233_47114[(2)] = inst_45155);

(statearr_45233_47114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (2))){
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45169__$1,(4),in$);
} else {
if((state_val_45170 === (23))){
var inst_45163 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45237_47118 = state_45169__$1;
(statearr_45237_47118[(2)] = inst_45163);

(statearr_45237_47118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (19))){
var inst_45150 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45240_47120 = state_45169__$1;
(statearr_45240_47120[(2)] = inst_45150);

(statearr_45240_47120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (11))){
var inst_45131 = (state_45169[(7)]);
var inst_45113 = (state_45169[(11)]);
var inst_45131__$1 = cljs.core.seq(inst_45113);
var state_45169__$1 = (function (){var statearr_45243 = state_45169;
(statearr_45243[(7)] = inst_45131__$1);

return statearr_45243;
})();
if(inst_45131__$1){
var statearr_45244_47129 = state_45169__$1;
(statearr_45244_47129[(1)] = (14));

} else {
var statearr_45245_47133 = state_45169__$1;
(statearr_45245_47133[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (9))){
var inst_45157 = (state_45169[(2)]);
var inst_45158 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45169__$1 = (function (){var statearr_45247 = state_45169;
(statearr_45247[(15)] = inst_45157);

return statearr_45247;
})();
if(cljs.core.truth_(inst_45158)){
var statearr_45248_47149 = state_45169__$1;
(statearr_45248_47149[(1)] = (21));

} else {
var statearr_45249_47150 = state_45169__$1;
(statearr_45249_47150[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (5))){
var inst_45103 = cljs.core.async.close_BANG_(out);
var state_45169__$1 = state_45169;
var statearr_45251_47151 = state_45169__$1;
(statearr_45251_47151[(2)] = inst_45103);

(statearr_45251_47151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (14))){
var inst_45131 = (state_45169[(7)]);
var inst_45134 = cljs.core.chunked_seq_QMARK_(inst_45131);
var state_45169__$1 = state_45169;
if(inst_45134){
var statearr_45253_47153 = state_45169__$1;
(statearr_45253_47153[(1)] = (17));

} else {
var statearr_45256_47154 = state_45169__$1;
(statearr_45256_47154[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (16))){
var inst_45153 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45259_47155 = state_45169__$1;
(statearr_45259_47155[(2)] = inst_45153);

(statearr_45259_47155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45170 === (10))){
var inst_45116 = (state_45169[(10)]);
var inst_45114 = (state_45169[(12)]);
var inst_45121 = cljs.core._nth(inst_45114,inst_45116);
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45169__$1,(13),out,inst_45121);
} else {
if((state_val_45170 === (18))){
var inst_45131 = (state_45169[(7)]);
var inst_45144 = cljs.core.first(inst_45131);
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45169__$1,(20),out,inst_45144);
} else {
if((state_val_45170 === (8))){
var inst_45115 = (state_45169[(8)]);
var inst_45116 = (state_45169[(10)]);
var inst_45118 = (inst_45116 < inst_45115);
var inst_45119 = inst_45118;
var state_45169__$1 = state_45169;
if(cljs.core.truth_(inst_45119)){
var statearr_45261_47156 = state_45169__$1;
(statearr_45261_47156[(1)] = (10));

} else {
var statearr_45262_47157 = state_45169__$1;
(statearr_45262_47157[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42116__auto____0 = (function (){
var statearr_45267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45267[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42116__auto__);

(statearr_45267[(1)] = (1));

return statearr_45267;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42116__auto____1 = (function (state_45169){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_45169);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e45268){var ex__42119__auto__ = e45268;
var statearr_45270_47163 = state_45169;
(statearr_45270_47163[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_45169[(4)]))){
var statearr_45271_47164 = state_45169;
(statearr_45271_47164[(1)] = cljs.core.first((state_45169[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47166 = state_45169;
state_45169 = G__47166;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42116__auto__ = function(state_45169){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42116__auto____1.call(this,state_45169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_45272 = f__42583__auto__();
(statearr_45272[(6)] = c__42582__auto__);

return statearr_45272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));

return c__42582__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45278 = arguments.length;
switch (G__45278) {
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
var G__45285 = arguments.length;
switch (G__45285) {
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
var G__45298 = arguments.length;
switch (G__45298) {
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
var c__42582__auto___47189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_45330){
var state_val_45331 = (state_45330[(1)]);
if((state_val_45331 === (7))){
var inst_45325 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45337_47191 = state_45330__$1;
(statearr_45337_47191[(2)] = inst_45325);

(statearr_45337_47191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (1))){
var inst_45303 = null;
var state_45330__$1 = (function (){var statearr_45341 = state_45330;
(statearr_45341[(7)] = inst_45303);

return statearr_45341;
})();
var statearr_45342_47192 = state_45330__$1;
(statearr_45342_47192[(2)] = null);

(statearr_45342_47192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (4))){
var inst_45307 = (state_45330[(8)]);
var inst_45307__$1 = (state_45330[(2)]);
var inst_45310 = (inst_45307__$1 == null);
var inst_45311 = cljs.core.not(inst_45310);
var state_45330__$1 = (function (){var statearr_45347 = state_45330;
(statearr_45347[(8)] = inst_45307__$1);

return statearr_45347;
})();
if(inst_45311){
var statearr_45348_47212 = state_45330__$1;
(statearr_45348_47212[(1)] = (5));

} else {
var statearr_45349_47225 = state_45330__$1;
(statearr_45349_47225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (6))){
var state_45330__$1 = state_45330;
var statearr_45350_47228 = state_45330__$1;
(statearr_45350_47228[(2)] = null);

(statearr_45350_47228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (3))){
var inst_45327 = (state_45330[(2)]);
var inst_45328 = cljs.core.async.close_BANG_(out);
var state_45330__$1 = (function (){var statearr_45351 = state_45330;
(statearr_45351[(9)] = inst_45327);

return statearr_45351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45330__$1,inst_45328);
} else {
if((state_val_45331 === (2))){
var state_45330__$1 = state_45330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45330__$1,(4),ch);
} else {
if((state_val_45331 === (11))){
var inst_45307 = (state_45330[(8)]);
var inst_45319 = (state_45330[(2)]);
var inst_45303 = inst_45307;
var state_45330__$1 = (function (){var statearr_45354 = state_45330;
(statearr_45354[(7)] = inst_45303);

(statearr_45354[(10)] = inst_45319);

return statearr_45354;
})();
var statearr_45355_47235 = state_45330__$1;
(statearr_45355_47235[(2)] = null);

(statearr_45355_47235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (9))){
var inst_45307 = (state_45330[(8)]);
var state_45330__$1 = state_45330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45330__$1,(11),out,inst_45307);
} else {
if((state_val_45331 === (5))){
var inst_45303 = (state_45330[(7)]);
var inst_45307 = (state_45330[(8)]);
var inst_45314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45307,inst_45303);
var state_45330__$1 = state_45330;
if(inst_45314){
var statearr_45361_47236 = state_45330__$1;
(statearr_45361_47236[(1)] = (8));

} else {
var statearr_45362_47237 = state_45330__$1;
(statearr_45362_47237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (10))){
var inst_45322 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45363_47238 = state_45330__$1;
(statearr_45363_47238[(2)] = inst_45322);

(statearr_45363_47238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (8))){
var inst_45303 = (state_45330[(7)]);
var tmp45359 = inst_45303;
var inst_45303__$1 = tmp45359;
var state_45330__$1 = (function (){var statearr_45364 = state_45330;
(statearr_45364[(7)] = inst_45303__$1);

return statearr_45364;
})();
var statearr_45365_47241 = state_45330__$1;
(statearr_45365_47241[(2)] = null);

(statearr_45365_47241[(1)] = (2));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_45369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45369[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_45369[(1)] = (1));

return statearr_45369;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_45330){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_45330);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e45371){var ex__42119__auto__ = e45371;
var statearr_45372_47244 = state_45330;
(statearr_45372_47244[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_45330[(4)]))){
var statearr_45375_47248 = state_45330;
(statearr_45375_47248[(1)] = cljs.core.first((state_45330[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47260 = state_45330;
state_45330 = G__47260;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_45330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_45330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_45379 = f__42583__auto__();
(statearr_45379[(6)] = c__42582__auto___47189);

return statearr_45379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45386 = arguments.length;
switch (G__45386) {
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
var c__42582__auto___47270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_45444){
var state_val_45446 = (state_45444[(1)]);
if((state_val_45446 === (7))){
var inst_45436 = (state_45444[(2)]);
var state_45444__$1 = state_45444;
var statearr_45451_47277 = state_45444__$1;
(statearr_45451_47277[(2)] = inst_45436);

(statearr_45451_47277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (1))){
var inst_45399 = (new Array(n));
var inst_45400 = inst_45399;
var inst_45401 = (0);
var state_45444__$1 = (function (){var statearr_45453 = state_45444;
(statearr_45453[(7)] = inst_45400);

(statearr_45453[(8)] = inst_45401);

return statearr_45453;
})();
var statearr_45456_47290 = state_45444__$1;
(statearr_45456_47290[(2)] = null);

(statearr_45456_47290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (4))){
var inst_45406 = (state_45444[(9)]);
var inst_45406__$1 = (state_45444[(2)]);
var inst_45407 = (inst_45406__$1 == null);
var inst_45408 = cljs.core.not(inst_45407);
var state_45444__$1 = (function (){var statearr_45462 = state_45444;
(statearr_45462[(9)] = inst_45406__$1);

return statearr_45462;
})();
if(inst_45408){
var statearr_45466_47299 = state_45444__$1;
(statearr_45466_47299[(1)] = (5));

} else {
var statearr_45469_47300 = state_45444__$1;
(statearr_45469_47300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (15))){
var inst_45430 = (state_45444[(2)]);
var state_45444__$1 = state_45444;
var statearr_45470_47307 = state_45444__$1;
(statearr_45470_47307[(2)] = inst_45430);

(statearr_45470_47307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (13))){
var state_45444__$1 = state_45444;
var statearr_45473_47308 = state_45444__$1;
(statearr_45473_47308[(2)] = null);

(statearr_45473_47308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (6))){
var inst_45401 = (state_45444[(8)]);
var inst_45426 = (inst_45401 > (0));
var state_45444__$1 = state_45444;
if(cljs.core.truth_(inst_45426)){
var statearr_45476_47309 = state_45444__$1;
(statearr_45476_47309[(1)] = (12));

} else {
var statearr_45477_47310 = state_45444__$1;
(statearr_45477_47310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (3))){
var inst_45438 = (state_45444[(2)]);
var state_45444__$1 = state_45444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45444__$1,inst_45438);
} else {
if((state_val_45446 === (12))){
var inst_45400 = (state_45444[(7)]);
var inst_45428 = cljs.core.vec(inst_45400);
var state_45444__$1 = state_45444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45444__$1,(15),out,inst_45428);
} else {
if((state_val_45446 === (2))){
var state_45444__$1 = state_45444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45444__$1,(4),ch);
} else {
if((state_val_45446 === (11))){
var inst_45420 = (state_45444[(2)]);
var inst_45421 = (new Array(n));
var inst_45400 = inst_45421;
var inst_45401 = (0);
var state_45444__$1 = (function (){var statearr_45485 = state_45444;
(statearr_45485[(7)] = inst_45400);

(statearr_45485[(8)] = inst_45401);

(statearr_45485[(10)] = inst_45420);

return statearr_45485;
})();
var statearr_45486_47319 = state_45444__$1;
(statearr_45486_47319[(2)] = null);

(statearr_45486_47319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (9))){
var inst_45400 = (state_45444[(7)]);
var inst_45418 = cljs.core.vec(inst_45400);
var state_45444__$1 = state_45444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45444__$1,(11),out,inst_45418);
} else {
if((state_val_45446 === (5))){
var inst_45400 = (state_45444[(7)]);
var inst_45401 = (state_45444[(8)]);
var inst_45411 = (state_45444[(11)]);
var inst_45406 = (state_45444[(9)]);
var inst_45410 = (inst_45400[inst_45401] = inst_45406);
var inst_45411__$1 = (inst_45401 + (1));
var inst_45412 = (inst_45411__$1 < n);
var state_45444__$1 = (function (){var statearr_45489 = state_45444;
(statearr_45489[(11)] = inst_45411__$1);

(statearr_45489[(12)] = inst_45410);

return statearr_45489;
})();
if(cljs.core.truth_(inst_45412)){
var statearr_45495_47330 = state_45444__$1;
(statearr_45495_47330[(1)] = (8));

} else {
var statearr_45496_47332 = state_45444__$1;
(statearr_45496_47332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (14))){
var inst_45433 = (state_45444[(2)]);
var inst_45434 = cljs.core.async.close_BANG_(out);
var state_45444__$1 = (function (){var statearr_45499 = state_45444;
(statearr_45499[(13)] = inst_45433);

return statearr_45499;
})();
var statearr_45501_47337 = state_45444__$1;
(statearr_45501_47337[(2)] = inst_45434);

(statearr_45501_47337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (10))){
var inst_45424 = (state_45444[(2)]);
var state_45444__$1 = state_45444;
var statearr_45503_47339 = state_45444__$1;
(statearr_45503_47339[(2)] = inst_45424);

(statearr_45503_47339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (8))){
var inst_45400 = (state_45444[(7)]);
var inst_45411 = (state_45444[(11)]);
var tmp45498 = inst_45400;
var inst_45400__$1 = tmp45498;
var inst_45401 = inst_45411;
var state_45444__$1 = (function (){var statearr_45506 = state_45444;
(statearr_45506[(7)] = inst_45400__$1);

(statearr_45506[(8)] = inst_45401);

return statearr_45506;
})();
var statearr_45507_47341 = state_45444__$1;
(statearr_45507_47341[(2)] = null);

(statearr_45507_47341[(1)] = (2));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_45511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45511[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_45511[(1)] = (1));

return statearr_45511;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_45444){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_45444);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e45513){var ex__42119__auto__ = e45513;
var statearr_45514_47349 = state_45444;
(statearr_45514_47349[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_45444[(4)]))){
var statearr_45515_47352 = state_45444;
(statearr_45515_47352[(1)] = cljs.core.first((state_45444[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47353 = state_45444;
state_45444 = G__47353;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_45444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_45444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_45523 = f__42583__auto__();
(statearr_45523[(6)] = c__42582__auto___47270);

return statearr_45523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45527 = arguments.length;
switch (G__45527) {
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
var c__42582__auto___47363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42583__auto__ = (function (){var switch__42115__auto__ = (function (state_45581){
var state_val_45582 = (state_45581[(1)]);
if((state_val_45582 === (7))){
var inst_45576 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
var statearr_45586_47364 = state_45581__$1;
(statearr_45586_47364[(2)] = inst_45576);

(statearr_45586_47364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (1))){
var inst_45535 = [];
var inst_45536 = inst_45535;
var inst_45537 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45581__$1 = (function (){var statearr_45587 = state_45581;
(statearr_45587[(7)] = inst_45536);

(statearr_45587[(8)] = inst_45537);

return statearr_45587;
})();
var statearr_45588_47368 = state_45581__$1;
(statearr_45588_47368[(2)] = null);

(statearr_45588_47368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (4))){
var inst_45540 = (state_45581[(9)]);
var inst_45540__$1 = (state_45581[(2)]);
var inst_45541 = (inst_45540__$1 == null);
var inst_45542 = cljs.core.not(inst_45541);
var state_45581__$1 = (function (){var statearr_45591 = state_45581;
(statearr_45591[(9)] = inst_45540__$1);

return statearr_45591;
})();
if(inst_45542){
var statearr_45593_47377 = state_45581__$1;
(statearr_45593_47377[(1)] = (5));

} else {
var statearr_45594_47382 = state_45581__$1;
(statearr_45594_47382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (15))){
var inst_45570 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
var statearr_45598_47385 = state_45581__$1;
(statearr_45598_47385[(2)] = inst_45570);

(statearr_45598_47385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (13))){
var state_45581__$1 = state_45581;
var statearr_45600_47391 = state_45581__$1;
(statearr_45600_47391[(2)] = null);

(statearr_45600_47391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (6))){
var inst_45536 = (state_45581[(7)]);
var inst_45562 = inst_45536.length;
var inst_45563 = (inst_45562 > (0));
var state_45581__$1 = state_45581;
if(cljs.core.truth_(inst_45563)){
var statearr_45601_47397 = state_45581__$1;
(statearr_45601_47397[(1)] = (12));

} else {
var statearr_45602_47398 = state_45581__$1;
(statearr_45602_47398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (3))){
var inst_45578 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45581__$1,inst_45578);
} else {
if((state_val_45582 === (12))){
var inst_45536 = (state_45581[(7)]);
var inst_45568 = cljs.core.vec(inst_45536);
var state_45581__$1 = state_45581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45581__$1,(15),out,inst_45568);
} else {
if((state_val_45582 === (2))){
var state_45581__$1 = state_45581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45581__$1,(4),ch);
} else {
if((state_val_45582 === (11))){
var inst_45544 = (state_45581[(10)]);
var inst_45540 = (state_45581[(9)]);
var inst_45555 = (state_45581[(2)]);
var inst_45556 = [];
var inst_45557 = inst_45556.push(inst_45540);
var inst_45536 = inst_45556;
var inst_45537 = inst_45544;
var state_45581__$1 = (function (){var statearr_45616 = state_45581;
(statearr_45616[(11)] = inst_45557);

(statearr_45616[(7)] = inst_45536);

(statearr_45616[(8)] = inst_45537);

(statearr_45616[(12)] = inst_45555);

return statearr_45616;
})();
var statearr_45618_47399 = state_45581__$1;
(statearr_45618_47399[(2)] = null);

(statearr_45618_47399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (9))){
var inst_45536 = (state_45581[(7)]);
var inst_45553 = cljs.core.vec(inst_45536);
var state_45581__$1 = state_45581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45581__$1,(11),out,inst_45553);
} else {
if((state_val_45582 === (5))){
var inst_45544 = (state_45581[(10)]);
var inst_45537 = (state_45581[(8)]);
var inst_45540 = (state_45581[(9)]);
var inst_45544__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45540) : f.call(null,inst_45540));
var inst_45546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45544__$1,inst_45537);
var inst_45547 = cljs.core.keyword_identical_QMARK_(inst_45537,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45548 = ((inst_45546) || (inst_45547));
var state_45581__$1 = (function (){var statearr_45630 = state_45581;
(statearr_45630[(10)] = inst_45544__$1);

return statearr_45630;
})();
if(cljs.core.truth_(inst_45548)){
var statearr_45632_47421 = state_45581__$1;
(statearr_45632_47421[(1)] = (8));

} else {
var statearr_45634_47422 = state_45581__$1;
(statearr_45634_47422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (14))){
var inst_45573 = (state_45581[(2)]);
var inst_45574 = cljs.core.async.close_BANG_(out);
var state_45581__$1 = (function (){var statearr_45637 = state_45581;
(statearr_45637[(13)] = inst_45573);

return statearr_45637;
})();
var statearr_45638_47423 = state_45581__$1;
(statearr_45638_47423[(2)] = inst_45574);

(statearr_45638_47423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (10))){
var inst_45560 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
var statearr_45641_47424 = state_45581__$1;
(statearr_45641_47424[(2)] = inst_45560);

(statearr_45641_47424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45582 === (8))){
var inst_45544 = (state_45581[(10)]);
var inst_45536 = (state_45581[(7)]);
var inst_45540 = (state_45581[(9)]);
var inst_45550 = inst_45536.push(inst_45540);
var tmp45635 = inst_45536;
var inst_45536__$1 = tmp45635;
var inst_45537 = inst_45544;
var state_45581__$1 = (function (){var statearr_45647 = state_45581;
(statearr_45647[(7)] = inst_45536__$1);

(statearr_45647[(8)] = inst_45537);

(statearr_45647[(14)] = inst_45550);

return statearr_45647;
})();
var statearr_45652_47441 = state_45581__$1;
(statearr_45652_47441[(2)] = null);

(statearr_45652_47441[(1)] = (2));


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
var cljs$core$async$state_machine__42116__auto__ = null;
var cljs$core$async$state_machine__42116__auto____0 = (function (){
var statearr_45655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45655[(0)] = cljs$core$async$state_machine__42116__auto__);

(statearr_45655[(1)] = (1));

return statearr_45655;
});
var cljs$core$async$state_machine__42116__auto____1 = (function (state_45581){
while(true){
var ret_value__42117__auto__ = (function (){try{while(true){
var result__42118__auto__ = switch__42115__auto__(state_45581);
if(cljs.core.keyword_identical_QMARK_(result__42118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42118__auto__;
}
break;
}
}catch (e45657){var ex__42119__auto__ = e45657;
var statearr_45658_47447 = state_45581;
(statearr_45658_47447[(2)] = ex__42119__auto__);


if(cljs.core.seq((state_45581[(4)]))){
var statearr_45661_47448 = state_45581;
(statearr_45661_47448[(1)] = cljs.core.first((state_45581[(4)])));

} else {
throw ex__42119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47449 = state_45581;
state_45581 = G__47449;
continue;
} else {
return ret_value__42117__auto__;
}
break;
}
});
cljs$core$async$state_machine__42116__auto__ = function(state_45581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42116__auto____1.call(this,state_45581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42116__auto____0;
cljs$core$async$state_machine__42116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42116__auto____1;
return cljs$core$async$state_machine__42116__auto__;
})()
})();
var state__42584__auto__ = (function (){var statearr_45667 = f__42583__auto__();
(statearr_45667[(6)] = c__42582__auto___47363);

return statearr_45667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42584__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
