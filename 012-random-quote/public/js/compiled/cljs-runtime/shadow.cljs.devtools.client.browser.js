goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36425 = arguments.length;
var i__4790__auto___36426 = (0);
while(true){
if((i__4790__auto___36426 < len__4789__auto___36425)){
args__4795__auto__.push((arguments[i__4790__auto___36426]));

var G__36427 = (i__4790__auto___36426 + (1));
i__4790__auto___36426 = G__36427;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36244){
var G__36245 = cljs.core.first(seq36244);
var seq36244__$1 = cljs.core.next(seq36244);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36245,seq36244__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36246 = cljs.core.seq(sources);
var chunk__36247 = null;
var count__36248 = (0);
var i__36249 = (0);
while(true){
if((i__36249 < count__36248)){
var map__36264 = chunk__36247.cljs$core$IIndexed$_nth$arity$2(null,i__36249);
var map__36264__$1 = (((((!((map__36264 == null))))?(((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36264):map__36264);
var src = map__36264__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36266){var e_36428 = e36266;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36428);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36428.message)].join('')));
}

var G__36429 = seq__36246;
var G__36430 = chunk__36247;
var G__36431 = count__36248;
var G__36432 = (i__36249 + (1));
seq__36246 = G__36429;
chunk__36247 = G__36430;
count__36248 = G__36431;
i__36249 = G__36432;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36246);
if(temp__5735__auto__){
var seq__36246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36246__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36246__$1);
var G__36433 = cljs.core.chunk_rest(seq__36246__$1);
var G__36434 = c__4609__auto__;
var G__36435 = cljs.core.count(c__4609__auto__);
var G__36436 = (0);
seq__36246 = G__36433;
chunk__36247 = G__36434;
count__36248 = G__36435;
i__36249 = G__36436;
continue;
} else {
var map__36269 = cljs.core.first(seq__36246__$1);
var map__36269__$1 = (((((!((map__36269 == null))))?(((((map__36269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36269):map__36269);
var src = map__36269__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36271){var e_36437 = e36271;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36437);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36437.message)].join('')));
}

var G__36438 = cljs.core.next(seq__36246__$1);
var G__36439 = null;
var G__36440 = (0);
var G__36441 = (0);
seq__36246 = G__36438;
chunk__36247 = G__36439;
count__36248 = G__36440;
i__36249 = G__36441;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36274 = cljs.core.seq(js_requires);
var chunk__36275 = null;
var count__36276 = (0);
var i__36277 = (0);
while(true){
if((i__36277 < count__36276)){
var js_ns = chunk__36275.cljs$core$IIndexed$_nth$arity$2(null,i__36277);
var require_str_36442 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36442);


var G__36443 = seq__36274;
var G__36444 = chunk__36275;
var G__36445 = count__36276;
var G__36446 = (i__36277 + (1));
seq__36274 = G__36443;
chunk__36275 = G__36444;
count__36276 = G__36445;
i__36277 = G__36446;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36274);
if(temp__5735__auto__){
var seq__36274__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36274__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36274__$1);
var G__36447 = cljs.core.chunk_rest(seq__36274__$1);
var G__36448 = c__4609__auto__;
var G__36449 = cljs.core.count(c__4609__auto__);
var G__36450 = (0);
seq__36274 = G__36447;
chunk__36275 = G__36448;
count__36276 = G__36449;
i__36277 = G__36450;
continue;
} else {
var js_ns = cljs.core.first(seq__36274__$1);
var require_str_36451 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36451);


var G__36452 = cljs.core.next(seq__36274__$1);
var G__36453 = null;
var G__36454 = (0);
var G__36455 = (0);
seq__36274 = G__36452;
chunk__36275 = G__36453;
count__36276 = G__36454;
i__36277 = G__36455;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36288 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36288) : callback.call(null,G__36288));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36290){
var map__36291 = p__36290;
var map__36291__$1 = (((((!((map__36291 == null))))?(((((map__36291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36291):map__36291);
var msg = map__36291__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36291__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36291__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36293(s__36294){
return (new cljs.core.LazySeq(null,(function (){
var s__36294__$1 = s__36294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36300 = cljs.core.first(xs__6292__auto__);
var map__36300__$1 = (((((!((map__36300 == null))))?(((((map__36300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36300):map__36300);
var src = map__36300__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36300__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36300__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__36294__$1,map__36300,map__36300__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36291,map__36291__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36293_$_iter__36295(s__36296){
return (new cljs.core.LazySeq(null,((function (s__36294__$1,map__36300,map__36300__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36291,map__36291__$1,msg,info,reload_info){
return (function (){
var s__36296__$1 = s__36296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36296__$1);
if(temp__5735__auto____$1){
var s__36296__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36296__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36296__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36298 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36297 = (0);
while(true){
if((i__36297 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__36297);
cljs.core.chunk_append(b__36298,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36456 = (i__36297 + (1));
i__36297 = G__36456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36298),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36293_$_iter__36295(cljs.core.chunk_rest(s__36296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36298),null);
}
} else {
var warning = cljs.core.first(s__36296__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36293_$_iter__36295(cljs.core.rest(s__36296__$2)));
}
} else {
return null;
}
break;
}
});})(s__36294__$1,map__36300,map__36300__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36291,map__36291__$1,msg,info,reload_info))
,null,null));
});})(s__36294__$1,map__36300,map__36300__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36291,map__36291__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36293(cljs.core.rest(s__36294__$1)));
} else {
var G__36458 = cljs.core.rest(s__36294__$1);
s__36294__$1 = G__36458;
continue;
}
} else {
var G__36459 = cljs.core.rest(s__36294__$1);
s__36294__$1 = G__36459;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36309_36460 = cljs.core.seq(warnings);
var chunk__36310_36461 = null;
var count__36311_36462 = (0);
var i__36312_36463 = (0);
while(true){
if((i__36312_36463 < count__36311_36462)){
var map__36321_36464 = chunk__36310_36461.cljs$core$IIndexed$_nth$arity$2(null,i__36312_36463);
var map__36321_36465__$1 = (((((!((map__36321_36464 == null))))?(((((map__36321_36464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36321_36464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36321_36464):map__36321_36464);
var w_36466 = map__36321_36465__$1;
var msg_36467__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321_36465__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321_36465__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321_36465__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321_36465__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36470)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36468),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36469),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36467__$1)].join(''));


var G__36471 = seq__36309_36460;
var G__36472 = chunk__36310_36461;
var G__36473 = count__36311_36462;
var G__36474 = (i__36312_36463 + (1));
seq__36309_36460 = G__36471;
chunk__36310_36461 = G__36472;
count__36311_36462 = G__36473;
i__36312_36463 = G__36474;
continue;
} else {
var temp__5735__auto___36475 = cljs.core.seq(seq__36309_36460);
if(temp__5735__auto___36475){
var seq__36309_36476__$1 = temp__5735__auto___36475;
if(cljs.core.chunked_seq_QMARK_(seq__36309_36476__$1)){
var c__4609__auto___36477 = cljs.core.chunk_first(seq__36309_36476__$1);
var G__36478 = cljs.core.chunk_rest(seq__36309_36476__$1);
var G__36479 = c__4609__auto___36477;
var G__36480 = cljs.core.count(c__4609__auto___36477);
var G__36481 = (0);
seq__36309_36460 = G__36478;
chunk__36310_36461 = G__36479;
count__36311_36462 = G__36480;
i__36312_36463 = G__36481;
continue;
} else {
var map__36323_36483 = cljs.core.first(seq__36309_36476__$1);
var map__36323_36484__$1 = (((((!((map__36323_36483 == null))))?(((((map__36323_36483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36323_36483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36323_36483):map__36323_36483);
var w_36485 = map__36323_36484__$1;
var msg_36486__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323_36484__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323_36484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323_36484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323_36484__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36489)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36487),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36488),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36486__$1)].join(''));


var G__36491 = cljs.core.next(seq__36309_36476__$1);
var G__36492 = null;
var G__36493 = (0);
var G__36494 = (0);
seq__36309_36460 = G__36491;
chunk__36310_36461 = G__36492;
count__36311_36462 = G__36493;
i__36312_36463 = G__36494;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36289_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36289_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36325){
var map__36326 = p__36325;
var map__36326__$1 = (((((!((map__36326 == null))))?(((((map__36326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36326):map__36326);
var msg = map__36326__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36326__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36328 = cljs.core.seq(updates);
var chunk__36330 = null;
var count__36331 = (0);
var i__36332 = (0);
while(true){
if((i__36332 < count__36331)){
var path = chunk__36330.cljs$core$IIndexed$_nth$arity$2(null,i__36332);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36362_36508 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36365_36509 = null;
var count__36366_36510 = (0);
var i__36367_36511 = (0);
while(true){
if((i__36367_36511 < count__36366_36510)){
var node_36512 = chunk__36365_36509.cljs$core$IIndexed$_nth$arity$2(null,i__36367_36511);
var path_match_36513 = shadow.cljs.devtools.client.browser.match_paths(node_36512.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36513)){
var new_link_36514 = (function (){var G__36373 = node_36512.cloneNode(true);
G__36373.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36513),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36373;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36513], 0));

goog.dom.insertSiblingAfter(new_link_36514,node_36512);

goog.dom.removeNode(node_36512);


var G__36515 = seq__36362_36508;
var G__36516 = chunk__36365_36509;
var G__36517 = count__36366_36510;
var G__36518 = (i__36367_36511 + (1));
seq__36362_36508 = G__36515;
chunk__36365_36509 = G__36516;
count__36366_36510 = G__36517;
i__36367_36511 = G__36518;
continue;
} else {
var G__36519 = seq__36362_36508;
var G__36520 = chunk__36365_36509;
var G__36521 = count__36366_36510;
var G__36522 = (i__36367_36511 + (1));
seq__36362_36508 = G__36519;
chunk__36365_36509 = G__36520;
count__36366_36510 = G__36521;
i__36367_36511 = G__36522;
continue;
}
} else {
var temp__5735__auto___36523 = cljs.core.seq(seq__36362_36508);
if(temp__5735__auto___36523){
var seq__36362_36524__$1 = temp__5735__auto___36523;
if(cljs.core.chunked_seq_QMARK_(seq__36362_36524__$1)){
var c__4609__auto___36525 = cljs.core.chunk_first(seq__36362_36524__$1);
var G__36526 = cljs.core.chunk_rest(seq__36362_36524__$1);
var G__36527 = c__4609__auto___36525;
var G__36528 = cljs.core.count(c__4609__auto___36525);
var G__36529 = (0);
seq__36362_36508 = G__36526;
chunk__36365_36509 = G__36527;
count__36366_36510 = G__36528;
i__36367_36511 = G__36529;
continue;
} else {
var node_36530 = cljs.core.first(seq__36362_36524__$1);
var path_match_36531 = shadow.cljs.devtools.client.browser.match_paths(node_36530.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36531)){
var new_link_36532 = (function (){var G__36374 = node_36530.cloneNode(true);
G__36374.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36531),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36374;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36531], 0));

goog.dom.insertSiblingAfter(new_link_36532,node_36530);

goog.dom.removeNode(node_36530);


var G__36533 = cljs.core.next(seq__36362_36524__$1);
var G__36534 = null;
var G__36535 = (0);
var G__36536 = (0);
seq__36362_36508 = G__36533;
chunk__36365_36509 = G__36534;
count__36366_36510 = G__36535;
i__36367_36511 = G__36536;
continue;
} else {
var G__36537 = cljs.core.next(seq__36362_36524__$1);
var G__36538 = null;
var G__36539 = (0);
var G__36540 = (0);
seq__36362_36508 = G__36537;
chunk__36365_36509 = G__36538;
count__36366_36510 = G__36539;
i__36367_36511 = G__36540;
continue;
}
}
} else {
}
}
break;
}


var G__36541 = seq__36328;
var G__36542 = chunk__36330;
var G__36543 = count__36331;
var G__36544 = (i__36332 + (1));
seq__36328 = G__36541;
chunk__36330 = G__36542;
count__36331 = G__36543;
i__36332 = G__36544;
continue;
} else {
var G__36545 = seq__36328;
var G__36546 = chunk__36330;
var G__36547 = count__36331;
var G__36548 = (i__36332 + (1));
seq__36328 = G__36545;
chunk__36330 = G__36546;
count__36331 = G__36547;
i__36332 = G__36548;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36328);
if(temp__5735__auto__){
var seq__36328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36328__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36328__$1);
var G__36549 = cljs.core.chunk_rest(seq__36328__$1);
var G__36550 = c__4609__auto__;
var G__36551 = cljs.core.count(c__4609__auto__);
var G__36552 = (0);
seq__36328 = G__36549;
chunk__36330 = G__36550;
count__36331 = G__36551;
i__36332 = G__36552;
continue;
} else {
var path = cljs.core.first(seq__36328__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36376_36555 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36379_36556 = null;
var count__36380_36557 = (0);
var i__36381_36558 = (0);
while(true){
if((i__36381_36558 < count__36380_36557)){
var node_36559 = chunk__36379_36556.cljs$core$IIndexed$_nth$arity$2(null,i__36381_36558);
var path_match_36560 = shadow.cljs.devtools.client.browser.match_paths(node_36559.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36560)){
var new_link_36561 = (function (){var G__36388 = node_36559.cloneNode(true);
G__36388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36560),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36388;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36560], 0));

goog.dom.insertSiblingAfter(new_link_36561,node_36559);

goog.dom.removeNode(node_36559);


var G__36562 = seq__36376_36555;
var G__36563 = chunk__36379_36556;
var G__36564 = count__36380_36557;
var G__36565 = (i__36381_36558 + (1));
seq__36376_36555 = G__36562;
chunk__36379_36556 = G__36563;
count__36380_36557 = G__36564;
i__36381_36558 = G__36565;
continue;
} else {
var G__36566 = seq__36376_36555;
var G__36567 = chunk__36379_36556;
var G__36568 = count__36380_36557;
var G__36569 = (i__36381_36558 + (1));
seq__36376_36555 = G__36566;
chunk__36379_36556 = G__36567;
count__36380_36557 = G__36568;
i__36381_36558 = G__36569;
continue;
}
} else {
var temp__5735__auto___36570__$1 = cljs.core.seq(seq__36376_36555);
if(temp__5735__auto___36570__$1){
var seq__36376_36571__$1 = temp__5735__auto___36570__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36376_36571__$1)){
var c__4609__auto___36573 = cljs.core.chunk_first(seq__36376_36571__$1);
var G__36575 = cljs.core.chunk_rest(seq__36376_36571__$1);
var G__36576 = c__4609__auto___36573;
var G__36577 = cljs.core.count(c__4609__auto___36573);
var G__36578 = (0);
seq__36376_36555 = G__36575;
chunk__36379_36556 = G__36576;
count__36380_36557 = G__36577;
i__36381_36558 = G__36578;
continue;
} else {
var node_36579 = cljs.core.first(seq__36376_36571__$1);
var path_match_36580 = shadow.cljs.devtools.client.browser.match_paths(node_36579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36580)){
var new_link_36581 = (function (){var G__36389 = node_36579.cloneNode(true);
G__36389.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36580),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36389;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36580], 0));

goog.dom.insertSiblingAfter(new_link_36581,node_36579);

goog.dom.removeNode(node_36579);


var G__36582 = cljs.core.next(seq__36376_36571__$1);
var G__36583 = null;
var G__36584 = (0);
var G__36585 = (0);
seq__36376_36555 = G__36582;
chunk__36379_36556 = G__36583;
count__36380_36557 = G__36584;
i__36381_36558 = G__36585;
continue;
} else {
var G__36586 = cljs.core.next(seq__36376_36571__$1);
var G__36587 = null;
var G__36588 = (0);
var G__36589 = (0);
seq__36376_36555 = G__36586;
chunk__36379_36556 = G__36587;
count__36380_36557 = G__36588;
i__36381_36558 = G__36589;
continue;
}
}
} else {
}
}
break;
}


var G__36590 = cljs.core.next(seq__36328__$1);
var G__36591 = null;
var G__36592 = (0);
var G__36593 = (0);
seq__36328 = G__36590;
chunk__36330 = G__36591;
count__36331 = G__36592;
i__36332 = G__36593;
continue;
} else {
var G__36594 = cljs.core.next(seq__36328__$1);
var G__36595 = null;
var G__36596 = (0);
var G__36597 = (0);
seq__36328 = G__36594;
chunk__36330 = G__36595;
count__36331 = G__36596;
i__36332 = G__36597;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36392){
var map__36393 = p__36392;
var map__36393__$1 = (((((!((map__36393 == null))))?(((((map__36393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36393):map__36393);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36393__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36397,done){
var map__36398 = p__36397;
var map__36398__$1 = (((((!((map__36398 == null))))?(((((map__36398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36398):map__36398);
var msg = map__36398__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36401){
var map__36402 = p__36401;
var map__36402__$1 = (((((!((map__36402 == null))))?(((((map__36402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36402):map__36402);
var src = map__36402__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36405){var e = e36405;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36406,done){
var map__36407 = p__36406;
var map__36407__$1 = (((((!((map__36407 == null))))?(((((map__36407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36407):map__36407);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36410){
var map__36411 = p__36410;
var map__36411__$1 = (((((!((map__36411 == null))))?(((((map__36411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36411):map__36411);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36413,done){
var map__36414 = p__36413;
var map__36414__$1 = (((((!((map__36414 == null))))?(((((map__36414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36414):map__36414);
var msg = map__36414__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36414__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36417_36600 = type;
var G__36417_36601__$1 = (((G__36417_36600 instanceof cljs.core.Keyword))?G__36417_36600.fqn:null);
switch (G__36417_36601__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36420 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36420.cljs$core$IFn$_invoke$arity$1 ? fexpr__36420.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36420.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36421){var e = e36421;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36606 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36606)){
var s_36607 = temp__5735__auto___36606;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36607.onclose = (function (e){
return null;
}));

s_36607.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
