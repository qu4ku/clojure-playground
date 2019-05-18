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
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37223 = arguments.length;
var i__4731__auto___37224 = (0);
while(true){
if((i__4731__auto___37224 < len__4730__auto___37223)){
args__4736__auto__.push((arguments[i__4731__auto___37224]));

var G__37225 = (i__4731__auto___37224 + (1));
i__4731__auto___37224 = G__37225;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36951){
var G__36952 = cljs.core.first(seq36951);
var seq36951__$1 = cljs.core.next(seq36951);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36952,seq36951__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36962){
var map__36964 = p__36962;
var map__36964__$1 = (((((!((map__36964 == null))))?(((((map__36964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36964):map__36964);
var src = map__36964__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36964__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36964__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36977 = cljs.core.seq(sources);
var chunk__36978 = null;
var count__36979 = (0);
var i__36980 = (0);
while(true){
if((i__36980 < count__36979)){
var map__36985 = chunk__36978.cljs$core$IIndexed$_nth$arity$2(null,i__36980);
var map__36985__$1 = (((((!((map__36985 == null))))?(((((map__36985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36985):map__36985);
var src = map__36985__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36985__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36985__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36985__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36985__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37241 = seq__36977;
var G__37242 = chunk__36978;
var G__37243 = count__36979;
var G__37244 = (i__36980 + (1));
seq__36977 = G__37241;
chunk__36978 = G__37242;
count__36979 = G__37243;
i__36980 = G__37244;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36977);
if(temp__5720__auto__){
var seq__36977__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36977__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36977__$1);
var G__37245 = cljs.core.chunk_rest(seq__36977__$1);
var G__37246 = c__4550__auto__;
var G__37247 = cljs.core.count(c__4550__auto__);
var G__37248 = (0);
seq__36977 = G__37245;
chunk__36978 = G__37246;
count__36979 = G__37247;
i__36980 = G__37248;
continue;
} else {
var map__36987 = cljs.core.first(seq__36977__$1);
var map__36987__$1 = (((((!((map__36987 == null))))?(((((map__36987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36987):map__36987);
var src = map__36987__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36987__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36987__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36987__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36987__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37249 = cljs.core.next(seq__36977__$1);
var G__37250 = null;
var G__37251 = (0);
var G__37252 = (0);
seq__36977 = G__37249;
chunk__36978 = G__37250;
count__36979 = G__37251;
i__36980 = G__37252;
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
var seq__36992 = cljs.core.seq(js_requires);
var chunk__36993 = null;
var count__36994 = (0);
var i__36995 = (0);
while(true){
if((i__36995 < count__36994)){
var js_ns = chunk__36993.cljs$core$IIndexed$_nth$arity$2(null,i__36995);
var require_str_37253 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37253);


var G__37254 = seq__36992;
var G__37255 = chunk__36993;
var G__37256 = count__36994;
var G__37257 = (i__36995 + (1));
seq__36992 = G__37254;
chunk__36993 = G__37255;
count__36994 = G__37256;
i__36995 = G__37257;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36992);
if(temp__5720__auto__){
var seq__36992__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36992__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36992__$1);
var G__37258 = cljs.core.chunk_rest(seq__36992__$1);
var G__37259 = c__4550__auto__;
var G__37260 = cljs.core.count(c__4550__auto__);
var G__37261 = (0);
seq__36992 = G__37258;
chunk__36993 = G__37259;
count__36994 = G__37260;
i__36995 = G__37261;
continue;
} else {
var js_ns = cljs.core.first(seq__36992__$1);
var require_str_37262 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37262);


var G__37263 = cljs.core.next(seq__36992__$1);
var G__37264 = null;
var G__37265 = (0);
var G__37266 = (0);
seq__36992 = G__37263;
chunk__36993 = G__37264;
count__36994 = G__37265;
i__36995 = G__37266;
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
var G__36996 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36996) : callback.call(null,G__36996));
} else {
var G__36997 = shadow.cljs.devtools.client.env.files_url();
var G__36998 = ((function (G__36997){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__36997))
;
var G__36999 = "POST";
var G__37000 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37001 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36997,G__36998,G__36999,G__37000,G__37001);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37003){
var map__37004 = p__37003;
var map__37004__$1 = (((((!((map__37004 == null))))?(((((map__37004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37004):map__37004);
var msg = map__37004__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37006 = info;
var map__37006__$1 = (((((!((map__37006 == null))))?(((((map__37006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37006):map__37006);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37008(s__37009){
return (new cljs.core.LazySeq(null,((function (map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info){
return (function (){
var s__37009__$1 = s__37009;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37009__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37014 = cljs.core.first(xs__6277__auto__);
var map__37014__$1 = (((((!((map__37014 == null))))?(((((map__37014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37014):map__37014);
var src = map__37014__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37009__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37008_$_iter__37010(s__37011){
return (new cljs.core.LazySeq(null,((function (s__37009__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info){
return (function (){
var s__37011__$1 = s__37011;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37011__$1);
if(temp__5720__auto____$1){
var s__37011__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37011__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37011__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37013 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37012 = (0);
while(true){
if((i__37012 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37012);
cljs.core.chunk_append(b__37013,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37267 = (i__37012 + (1));
i__37012 = G__37267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37013),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37008_$_iter__37010(cljs.core.chunk_rest(s__37011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37013),null);
}
} else {
var warning = cljs.core.first(s__37011__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37008_$_iter__37010(cljs.core.rest(s__37011__$2)));
}
} else {
return null;
}
break;
}
});})(s__37009__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info))
,null,null));
});})(s__37009__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37008(cljs.core.rest(s__37009__$1)));
} else {
var G__37268 = cljs.core.rest(s__37009__$1);
s__37009__$1 = G__37268;
continue;
}
} else {
var G__37269 = cljs.core.rest(s__37009__$1);
s__37009__$1 = G__37269;
continue;
}
} else {
return null;
}
break;
}
});})(map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info))
,null,null));
});})(map__37006,map__37006__$1,sources,compiled,map__37004,map__37004__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37049_37270 = cljs.core.seq(warnings);
var chunk__37050_37271 = null;
var count__37051_37272 = (0);
var i__37052_37273 = (0);
while(true){
if((i__37052_37273 < count__37051_37272)){
var map__37057_37274 = chunk__37050_37271.cljs$core$IIndexed$_nth$arity$2(null,i__37052_37273);
var map__37057_37275__$1 = (((((!((map__37057_37274 == null))))?(((((map__37057_37274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37057_37274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37057_37274):map__37057_37274);
var w_37276 = map__37057_37275__$1;
var msg_37277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37275__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37275__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37280)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37278),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37279),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37277__$1)].join(''));


var G__37281 = seq__37049_37270;
var G__37282 = chunk__37050_37271;
var G__37283 = count__37051_37272;
var G__37284 = (i__37052_37273 + (1));
seq__37049_37270 = G__37281;
chunk__37050_37271 = G__37282;
count__37051_37272 = G__37283;
i__37052_37273 = G__37284;
continue;
} else {
var temp__5720__auto___37285 = cljs.core.seq(seq__37049_37270);
if(temp__5720__auto___37285){
var seq__37049_37286__$1 = temp__5720__auto___37285;
if(cljs.core.chunked_seq_QMARK_(seq__37049_37286__$1)){
var c__4550__auto___37287 = cljs.core.chunk_first(seq__37049_37286__$1);
var G__37288 = cljs.core.chunk_rest(seq__37049_37286__$1);
var G__37289 = c__4550__auto___37287;
var G__37290 = cljs.core.count(c__4550__auto___37287);
var G__37291 = (0);
seq__37049_37270 = G__37288;
chunk__37050_37271 = G__37289;
count__37051_37272 = G__37290;
i__37052_37273 = G__37291;
continue;
} else {
var map__37060_37292 = cljs.core.first(seq__37049_37286__$1);
var map__37060_37293__$1 = (((((!((map__37060_37292 == null))))?(((((map__37060_37292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37060_37292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37060_37292):map__37060_37292);
var w_37294 = map__37060_37293__$1;
var msg_37295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37293__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37293__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37293__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37298)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37296),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37297),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37295__$1)].join(''));


var G__37299 = cljs.core.next(seq__37049_37286__$1);
var G__37300 = null;
var G__37301 = (0);
var G__37302 = (0);
seq__37049_37270 = G__37299;
chunk__37050_37271 = G__37300;
count__37051_37272 = G__37301;
i__37052_37273 = G__37302;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info){
return (function (p__37062){
var map__37063 = p__37062;
var map__37063__$1 = (((((!((map__37063 == null))))?(((((map__37063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37063):map__37063);
var src = map__37063__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37063__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37063__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info){
return (function (p__37066){
var map__37067 = p__37066;
var map__37067__$1 = (((((!((map__37067 == null))))?(((((map__37067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37067):map__37067);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info){
return (function (p__37069){
var map__37070 = p__37069;
var map__37070__$1 = (((((!((map__37070 == null))))?(((((map__37070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37070):map__37070);
var rc = map__37070__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37070__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info){
return (function (p1__37002_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37002_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37006,map__37006__$1,sources,compiled,warnings,map__37004,map__37004__$1,msg,info,reload_info))
);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37072){
var map__37073 = p__37072;
var map__37073__$1 = (((((!((map__37073 == null))))?(((((map__37073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37073):map__37073);
var msg = map__37073__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37073__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37075 = cljs.core.seq(updates);
var chunk__37077 = null;
var count__37078 = (0);
var i__37079 = (0);
while(true){
if((i__37079 < count__37078)){
var path = chunk__37077.cljs$core$IIndexed$_nth$arity$2(null,i__37079);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37105_37327 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37108_37328 = null;
var count__37109_37329 = (0);
var i__37110_37330 = (0);
while(true){
if((i__37110_37330 < count__37109_37329)){
var node_37331 = chunk__37108_37328.cljs$core$IIndexed$_nth$arity$2(null,i__37110_37330);
var path_match_37332 = shadow.cljs.devtools.client.browser.match_paths(node_37331.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37332)){
var new_link_37333 = (function (){var G__37115 = node_37331.cloneNode(true);
G__37115.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37332),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37115;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37332], 0));

goog.dom.insertSiblingAfter(new_link_37333,node_37331);

goog.dom.removeNode(node_37331);


var G__37334 = seq__37105_37327;
var G__37335 = chunk__37108_37328;
var G__37336 = count__37109_37329;
var G__37337 = (i__37110_37330 + (1));
seq__37105_37327 = G__37334;
chunk__37108_37328 = G__37335;
count__37109_37329 = G__37336;
i__37110_37330 = G__37337;
continue;
} else {
var G__37338 = seq__37105_37327;
var G__37339 = chunk__37108_37328;
var G__37340 = count__37109_37329;
var G__37341 = (i__37110_37330 + (1));
seq__37105_37327 = G__37338;
chunk__37108_37328 = G__37339;
count__37109_37329 = G__37340;
i__37110_37330 = G__37341;
continue;
}
} else {
var temp__5720__auto___37342 = cljs.core.seq(seq__37105_37327);
if(temp__5720__auto___37342){
var seq__37105_37343__$1 = temp__5720__auto___37342;
if(cljs.core.chunked_seq_QMARK_(seq__37105_37343__$1)){
var c__4550__auto___37344 = cljs.core.chunk_first(seq__37105_37343__$1);
var G__37345 = cljs.core.chunk_rest(seq__37105_37343__$1);
var G__37346 = c__4550__auto___37344;
var G__37347 = cljs.core.count(c__4550__auto___37344);
var G__37348 = (0);
seq__37105_37327 = G__37345;
chunk__37108_37328 = G__37346;
count__37109_37329 = G__37347;
i__37110_37330 = G__37348;
continue;
} else {
var node_37349 = cljs.core.first(seq__37105_37343__$1);
var path_match_37350 = shadow.cljs.devtools.client.browser.match_paths(node_37349.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37350)){
var new_link_37351 = (function (){var G__37116 = node_37349.cloneNode(true);
G__37116.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37350),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37116;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37350], 0));

goog.dom.insertSiblingAfter(new_link_37351,node_37349);

goog.dom.removeNode(node_37349);


var G__37352 = cljs.core.next(seq__37105_37343__$1);
var G__37353 = null;
var G__37354 = (0);
var G__37355 = (0);
seq__37105_37327 = G__37352;
chunk__37108_37328 = G__37353;
count__37109_37329 = G__37354;
i__37110_37330 = G__37355;
continue;
} else {
var G__37356 = cljs.core.next(seq__37105_37343__$1);
var G__37357 = null;
var G__37358 = (0);
var G__37359 = (0);
seq__37105_37327 = G__37356;
chunk__37108_37328 = G__37357;
count__37109_37329 = G__37358;
i__37110_37330 = G__37359;
continue;
}
}
} else {
}
}
break;
}


var G__37360 = seq__37075;
var G__37361 = chunk__37077;
var G__37362 = count__37078;
var G__37363 = (i__37079 + (1));
seq__37075 = G__37360;
chunk__37077 = G__37361;
count__37078 = G__37362;
i__37079 = G__37363;
continue;
} else {
var G__37364 = seq__37075;
var G__37365 = chunk__37077;
var G__37366 = count__37078;
var G__37367 = (i__37079 + (1));
seq__37075 = G__37364;
chunk__37077 = G__37365;
count__37078 = G__37366;
i__37079 = G__37367;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37075);
if(temp__5720__auto__){
var seq__37075__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37075__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37075__$1);
var G__37368 = cljs.core.chunk_rest(seq__37075__$1);
var G__37369 = c__4550__auto__;
var G__37370 = cljs.core.count(c__4550__auto__);
var G__37371 = (0);
seq__37075 = G__37368;
chunk__37077 = G__37369;
count__37078 = G__37370;
i__37079 = G__37371;
continue;
} else {
var path = cljs.core.first(seq__37075__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37117_37372 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37120_37373 = null;
var count__37121_37374 = (0);
var i__37122_37375 = (0);
while(true){
if((i__37122_37375 < count__37121_37374)){
var node_37376 = chunk__37120_37373.cljs$core$IIndexed$_nth$arity$2(null,i__37122_37375);
var path_match_37377 = shadow.cljs.devtools.client.browser.match_paths(node_37376.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37377)){
var new_link_37378 = (function (){var G__37149 = node_37376.cloneNode(true);
G__37149.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37377),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37149;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37377], 0));

goog.dom.insertSiblingAfter(new_link_37378,node_37376);

goog.dom.removeNode(node_37376);


var G__37379 = seq__37117_37372;
var G__37380 = chunk__37120_37373;
var G__37381 = count__37121_37374;
var G__37382 = (i__37122_37375 + (1));
seq__37117_37372 = G__37379;
chunk__37120_37373 = G__37380;
count__37121_37374 = G__37381;
i__37122_37375 = G__37382;
continue;
} else {
var G__37383 = seq__37117_37372;
var G__37384 = chunk__37120_37373;
var G__37385 = count__37121_37374;
var G__37386 = (i__37122_37375 + (1));
seq__37117_37372 = G__37383;
chunk__37120_37373 = G__37384;
count__37121_37374 = G__37385;
i__37122_37375 = G__37386;
continue;
}
} else {
var temp__5720__auto___37387__$1 = cljs.core.seq(seq__37117_37372);
if(temp__5720__auto___37387__$1){
var seq__37117_37388__$1 = temp__5720__auto___37387__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37117_37388__$1)){
var c__4550__auto___37389 = cljs.core.chunk_first(seq__37117_37388__$1);
var G__37390 = cljs.core.chunk_rest(seq__37117_37388__$1);
var G__37391 = c__4550__auto___37389;
var G__37392 = cljs.core.count(c__4550__auto___37389);
var G__37393 = (0);
seq__37117_37372 = G__37390;
chunk__37120_37373 = G__37391;
count__37121_37374 = G__37392;
i__37122_37375 = G__37393;
continue;
} else {
var node_37394 = cljs.core.first(seq__37117_37388__$1);
var path_match_37395 = shadow.cljs.devtools.client.browser.match_paths(node_37394.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37395)){
var new_link_37396 = (function (){var G__37150 = node_37394.cloneNode(true);
G__37150.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37395),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37150;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37395], 0));

goog.dom.insertSiblingAfter(new_link_37396,node_37394);

goog.dom.removeNode(node_37394);


var G__37397 = cljs.core.next(seq__37117_37388__$1);
var G__37398 = null;
var G__37399 = (0);
var G__37400 = (0);
seq__37117_37372 = G__37397;
chunk__37120_37373 = G__37398;
count__37121_37374 = G__37399;
i__37122_37375 = G__37400;
continue;
} else {
var G__37401 = cljs.core.next(seq__37117_37388__$1);
var G__37402 = null;
var G__37403 = (0);
var G__37404 = (0);
seq__37117_37372 = G__37401;
chunk__37120_37373 = G__37402;
count__37121_37374 = G__37403;
i__37122_37375 = G__37404;
continue;
}
}
} else {
}
}
break;
}


var G__37405 = cljs.core.next(seq__37075__$1);
var G__37406 = null;
var G__37407 = (0);
var G__37408 = (0);
seq__37075 = G__37405;
chunk__37077 = G__37406;
count__37078 = G__37407;
i__37079 = G__37408;
continue;
} else {
var G__37409 = cljs.core.next(seq__37075__$1);
var G__37410 = null;
var G__37411 = (0);
var G__37412 = (0);
seq__37075 = G__37409;
chunk__37077 = G__37410;
count__37078 = G__37411;
i__37079 = G__37412;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37153){
var map__37154 = p__37153;
var map__37154__$1 = (((((!((map__37154 == null))))?(((((map__37154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37154):map__37154);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37154,map__37154__$1,id,js){
return (function (){
return eval(js);
});})(map__37154,map__37154__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37158){
var map__37159 = p__37158;
var map__37159__$1 = (((((!((map__37159 == null))))?(((((map__37159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37159):map__37159);
var msg = map__37159__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37159,map__37159__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37161){
var map__37162 = p__37161;
var map__37162__$1 = (((((!((map__37162 == null))))?(((((map__37162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37162):map__37162);
var src = map__37162__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37162__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37159,map__37159__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37159,map__37159__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37159,map__37159__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37171){
var map__37172 = p__37171;
var map__37172__$1 = (((((!((map__37172 == null))))?(((((map__37172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37172):map__37172);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37172,map__37172__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37172,map__37172__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37185){
var map__37186 = p__37185;
var map__37186__$1 = (((((!((map__37186 == null))))?(((((map__37186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37186):map__37186);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37192){
var map__37193 = p__37192;
var map__37193__$1 = (((((!((map__37193 == null))))?(((((map__37193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37193):map__37193);
var msg = map__37193__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37195 = type;
var G__37195__$1 = (((G__37195 instanceof cljs.core.Keyword))?G__37195.fqn:null);
switch (G__37195__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37196 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37197 = ((function (G__37196){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37196))
;
var G__37198 = "POST";
var G__37199 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37200 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37196,G__37197,G__37198,G__37199,G__37200);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37222){var e = e37222;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37418 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37418)){
var s_37419 = temp__5720__auto___37418;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37419.onclose = ((function (s_37419,temp__5720__auto___37418){
return (function (e){
return null;
});})(s_37419,temp__5720__auto___37418))
;

s_37419.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
