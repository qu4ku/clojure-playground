goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31091){
var map__31092 = p__31091;
var map__31092__$1 = (((((!((map__31092 == null))))?(((((map__31092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31092):map__31092);
var m = map__31092__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31097_31202 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31098_31203 = null;
var count__31099_31204 = (0);
var i__31100_31205 = (0);
while(true){
if((i__31100_31205 < count__31099_31204)){
var f_31206 = chunk__31098_31203.cljs$core$IIndexed$_nth$arity$2(null,i__31100_31205);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31206], 0));


var G__31207 = seq__31097_31202;
var G__31208 = chunk__31098_31203;
var G__31209 = count__31099_31204;
var G__31210 = (i__31100_31205 + (1));
seq__31097_31202 = G__31207;
chunk__31098_31203 = G__31208;
count__31099_31204 = G__31209;
i__31100_31205 = G__31210;
continue;
} else {
var temp__5720__auto___31211 = cljs.core.seq(seq__31097_31202);
if(temp__5720__auto___31211){
var seq__31097_31212__$1 = temp__5720__auto___31211;
if(cljs.core.chunked_seq_QMARK_(seq__31097_31212__$1)){
var c__4550__auto___31213 = cljs.core.chunk_first(seq__31097_31212__$1);
var G__31214 = cljs.core.chunk_rest(seq__31097_31212__$1);
var G__31215 = c__4550__auto___31213;
var G__31216 = cljs.core.count(c__4550__auto___31213);
var G__31217 = (0);
seq__31097_31202 = G__31214;
chunk__31098_31203 = G__31215;
count__31099_31204 = G__31216;
i__31100_31205 = G__31217;
continue;
} else {
var f_31218 = cljs.core.first(seq__31097_31212__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31218], 0));


var G__31219 = cljs.core.next(seq__31097_31212__$1);
var G__31220 = null;
var G__31221 = (0);
var G__31222 = (0);
seq__31097_31202 = G__31219;
chunk__31098_31203 = G__31220;
count__31099_31204 = G__31221;
i__31100_31205 = G__31222;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31223 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31223], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31223)))?cljs.core.second(arglists_31223):arglists_31223)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31104_31224 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31105_31225 = null;
var count__31106_31226 = (0);
var i__31107_31227 = (0);
while(true){
if((i__31107_31227 < count__31106_31226)){
var vec__31118_31228 = chunk__31105_31225.cljs$core$IIndexed$_nth$arity$2(null,i__31107_31227);
var name_31229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31118_31228,(0),null);
var map__31121_31230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31118_31228,(1),null);
var map__31121_31231__$1 = (((((!((map__31121_31230 == null))))?(((((map__31121_31230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31121_31230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31121_31230):map__31121_31230);
var doc_31232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31121_31231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31121_31231__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31229], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31233], 0));

if(cljs.core.truth_(doc_31232)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31232], 0));
} else {
}


var G__31234 = seq__31104_31224;
var G__31235 = chunk__31105_31225;
var G__31236 = count__31106_31226;
var G__31237 = (i__31107_31227 + (1));
seq__31104_31224 = G__31234;
chunk__31105_31225 = G__31235;
count__31106_31226 = G__31236;
i__31107_31227 = G__31237;
continue;
} else {
var temp__5720__auto___31238 = cljs.core.seq(seq__31104_31224);
if(temp__5720__auto___31238){
var seq__31104_31239__$1 = temp__5720__auto___31238;
if(cljs.core.chunked_seq_QMARK_(seq__31104_31239__$1)){
var c__4550__auto___31240 = cljs.core.chunk_first(seq__31104_31239__$1);
var G__31241 = cljs.core.chunk_rest(seq__31104_31239__$1);
var G__31242 = c__4550__auto___31240;
var G__31243 = cljs.core.count(c__4550__auto___31240);
var G__31244 = (0);
seq__31104_31224 = G__31241;
chunk__31105_31225 = G__31242;
count__31106_31226 = G__31243;
i__31107_31227 = G__31244;
continue;
} else {
var vec__31123_31245 = cljs.core.first(seq__31104_31239__$1);
var name_31246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31123_31245,(0),null);
var map__31126_31247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31123_31245,(1),null);
var map__31126_31248__$1 = (((((!((map__31126_31247 == null))))?(((((map__31126_31247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31126_31247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31126_31247):map__31126_31247);
var doc_31249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31246], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31250], 0));

if(cljs.core.truth_(doc_31249)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31249], 0));
} else {
}


var G__31296 = cljs.core.next(seq__31104_31239__$1);
var G__31297 = null;
var G__31298 = (0);
var G__31299 = (0);
seq__31104_31224 = G__31296;
chunk__31105_31225 = G__31297;
count__31106_31226 = G__31298;
i__31107_31227 = G__31299;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31128 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31129 = null;
var count__31130 = (0);
var i__31131 = (0);
while(true){
if((i__31131 < count__31130)){
var role = chunk__31129.cljs$core$IIndexed$_nth$arity$2(null,i__31131);
var temp__5720__auto___31300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31300__$1)){
var spec_31301 = temp__5720__auto___31300__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31301)], 0));
} else {
}


var G__31302 = seq__31128;
var G__31303 = chunk__31129;
var G__31304 = count__31130;
var G__31305 = (i__31131 + (1));
seq__31128 = G__31302;
chunk__31129 = G__31303;
count__31130 = G__31304;
i__31131 = G__31305;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31128);
if(temp__5720__auto____$1){
var seq__31128__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31128__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31128__$1);
var G__31306 = cljs.core.chunk_rest(seq__31128__$1);
var G__31307 = c__4550__auto__;
var G__31308 = cljs.core.count(c__4550__auto__);
var G__31309 = (0);
seq__31128 = G__31306;
chunk__31129 = G__31307;
count__31130 = G__31308;
i__31131 = G__31309;
continue;
} else {
var role = cljs.core.first(seq__31128__$1);
var temp__5720__auto___31310__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31310__$2)){
var spec_31311 = temp__5720__auto___31310__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31311)], 0));
} else {
}


var G__31312 = cljs.core.next(seq__31128__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31128 = G__31312;
chunk__31129 = G__31313;
count__31130 = G__31314;
i__31131 = G__31315;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31318 = cljs.core.ex_cause(t);
via = G__31317;
t = G__31318;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31135 = datafied_throwable;
var map__31135__$1 = (((((!((map__31135 == null))))?(((((map__31135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31135):map__31135);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31135__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31135__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31135__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31136 = cljs.core.last(via);
var map__31136__$1 = (((((!((map__31136 == null))))?(((((map__31136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31136):map__31136);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31136__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31136__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31136__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31137 = data;
var map__31137__$1 = (((((!((map__31137 == null))))?(((((map__31137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31137):map__31137);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31137__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31137__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31137__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31138 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31138__$1 = (((((!((map__31138 == null))))?(((((map__31138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31138):map__31138);
var top_data = map__31138__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31138__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31143 = phase;
var G__31143__$1 = (((G__31143 instanceof cljs.core.Keyword))?G__31143.fqn:null);
switch (G__31143__$1) {
case "read-source":
var map__31144 = data;
var map__31144__$1 = (((((!((map__31144 == null))))?(((((map__31144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31144):map__31144);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31144__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31144__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31146 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31146__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31146,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31146);
var G__31146__$2 = (cljs.core.truth_((function (){var fexpr__31147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31147.cljs$core$IFn$_invoke$arity$1 ? fexpr__31147.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31147.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31146__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31146__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31146__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31146__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31148 = top_data;
var G__31148__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31148,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31148);
var G__31148__$2 = (cljs.core.truth_((function (){var fexpr__31149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31149.cljs$core$IFn$_invoke$arity$1 ? fexpr__31149.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31149.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31148__$1);
var G__31148__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31148__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31148__$2);
var G__31148__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31148__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31148__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31148__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31148__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31150 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150,(3),null);
var G__31153 = top_data;
var G__31153__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31153,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31153);
var G__31153__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31153__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31153__$1);
var G__31153__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31153__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31153__$2);
var G__31153__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31153__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31153__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31153__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31153__$4;
}

break;
case "execution":
var vec__31154 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31154,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31154,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31154,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31154,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31154,source__$1,method,file,line,G__31143,G__31143__$1,map__31135,map__31135__$1,via,trace,phase,map__31136,map__31136__$1,type,message,data,map__31137,map__31137__$1,problems,fn,caller,map__31138,map__31138__$1,top_data,source){
return (function (p1__31134_SHARP_){
var or__4131__auto__ = (p1__31134_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31158.cljs$core$IFn$_invoke$arity$1 ? fexpr__31158.cljs$core$IFn$_invoke$arity$1(p1__31134_SHARP_) : fexpr__31158.call(null,p1__31134_SHARP_));
}
});})(vec__31154,source__$1,method,file,line,G__31143,G__31143__$1,map__31135,map__31135__$1,via,trace,phase,map__31136,map__31136__$1,type,message,data,map__31137,map__31137__$1,problems,fn,caller,map__31138,map__31138__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31159 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31159__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31159,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31159);
var G__31159__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31159__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31159__$1);
var G__31159__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31159__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31159__$2);
var G__31159__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31159__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31159__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31159__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31159__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31143__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31162){
var map__31163 = p__31162;
var map__31163__$1 = (((((!((map__31163 == null))))?(((((map__31163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31163):map__31163);
var triage_data = map__31163__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31165 = phase;
var G__31165__$1 = (((G__31165 instanceof cljs.core.Keyword))?G__31165.fqn:null);
switch (G__31165__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31166 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31167 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31168 = loc;
var G__31169 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31170_31327 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31171_31328 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31172_31329 = true;
var _STAR_print_fn_STAR__temp_val__31173_31330 = ((function (_STAR_print_newline_STAR__orig_val__31170_31327,_STAR_print_fn_STAR__orig_val__31171_31328,_STAR_print_newline_STAR__temp_val__31172_31329,sb__4661__auto__,G__31166,G__31167,G__31168,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31170_31327,_STAR_print_fn_STAR__orig_val__31171_31328,_STAR_print_newline_STAR__temp_val__31172_31329,sb__4661__auto__,G__31166,G__31167,G__31168,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31172_31329;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31173_31330;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31170_31327,_STAR_print_fn_STAR__orig_val__31171_31328,_STAR_print_newline_STAR__temp_val__31172_31329,_STAR_print_fn_STAR__temp_val__31173_31330,sb__4661__auto__,G__31166,G__31167,G__31168,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31170_31327,_STAR_print_fn_STAR__orig_val__31171_31328,_STAR_print_newline_STAR__temp_val__31172_31329,_STAR_print_fn_STAR__temp_val__31173_31330,sb__4661__auto__,G__31166,G__31167,G__31168,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31160_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31160_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31170_31327,_STAR_print_fn_STAR__orig_val__31171_31328,_STAR_print_newline_STAR__temp_val__31172_31329,_STAR_print_fn_STAR__temp_val__31173_31330,sb__4661__auto__,G__31166,G__31167,G__31168,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31170_31327,_STAR_print_fn_STAR__orig_val__31171_31328,_STAR_print_newline_STAR__temp_val__31172_31329,_STAR_print_fn_STAR__temp_val__31173_31330,sb__4661__auto__,G__31166,G__31167,G__31168,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31171_31328;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31170_31327;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31166,G__31167,G__31168,G__31169) : format.call(null,G__31166,G__31167,G__31168,G__31169));

break;
case "macroexpansion":
var G__31174 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31175 = cause_type;
var G__31176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31177 = loc;
var G__31178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31174,G__31175,G__31176,G__31177,G__31178) : format.call(null,G__31174,G__31175,G__31176,G__31177,G__31178));

break;
case "compile-syntax-check":
var G__31179 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31180 = cause_type;
var G__31181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31182 = loc;
var G__31183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31179,G__31180,G__31181,G__31182,G__31183) : format.call(null,G__31179,G__31180,G__31181,G__31182,G__31183));

break;
case "compilation":
var G__31184 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31185 = cause_type;
var G__31186 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31187 = loc;
var G__31188 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31184,G__31185,G__31186,G__31187,G__31188) : format.call(null,G__31184,G__31185,G__31186,G__31187,G__31188));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31189 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31190 = symbol;
var G__31191 = loc;
var G__31192 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31193_31334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31194_31335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31195_31336 = true;
var _STAR_print_fn_STAR__temp_val__31196_31337 = ((function (_STAR_print_newline_STAR__orig_val__31193_31334,_STAR_print_fn_STAR__orig_val__31194_31335,_STAR_print_newline_STAR__temp_val__31195_31336,sb__4661__auto__,G__31189,G__31190,G__31191,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31193_31334,_STAR_print_fn_STAR__orig_val__31194_31335,_STAR_print_newline_STAR__temp_val__31195_31336,sb__4661__auto__,G__31189,G__31190,G__31191,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31195_31336;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31196_31337;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31193_31334,_STAR_print_fn_STAR__orig_val__31194_31335,_STAR_print_newline_STAR__temp_val__31195_31336,_STAR_print_fn_STAR__temp_val__31196_31337,sb__4661__auto__,G__31189,G__31190,G__31191,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31193_31334,_STAR_print_fn_STAR__orig_val__31194_31335,_STAR_print_newline_STAR__temp_val__31195_31336,_STAR_print_fn_STAR__temp_val__31196_31337,sb__4661__auto__,G__31189,G__31190,G__31191,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31161_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31161_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31193_31334,_STAR_print_fn_STAR__orig_val__31194_31335,_STAR_print_newline_STAR__temp_val__31195_31336,_STAR_print_fn_STAR__temp_val__31196_31337,sb__4661__auto__,G__31189,G__31190,G__31191,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31193_31334,_STAR_print_fn_STAR__orig_val__31194_31335,_STAR_print_newline_STAR__temp_val__31195_31336,_STAR_print_fn_STAR__temp_val__31196_31337,sb__4661__auto__,G__31189,G__31190,G__31191,G__31165,G__31165__$1,loc,class_name,simple_class,cause_type,format,map__31163,map__31163__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31194_31335;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31193_31334;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31189,G__31190,G__31191,G__31192) : format.call(null,G__31189,G__31190,G__31191,G__31192));
} else {
var G__31197 = "Execution error%s at %s(%s).\n%s\n";
var G__31198 = cause_type;
var G__31199 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31200 = loc;
var G__31201 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31197,G__31198,G__31199,G__31200,G__31201) : format.call(null,G__31197,G__31198,G__31199,G__31200,G__31201));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31165__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
