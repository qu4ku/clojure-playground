goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../clojure/browser/event.js", ['clojure.browser.event'], ['cljs.core', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.events']);
goog.addDependency("../clojure/browser/net.js", ['clojure.browser.net'], ['goog.net.xpc.CfgFields', 'goog.net.XhrIo', 'goog.json', 'goog.Uri', 'cljs.core', 'goog.object', 'goog.net.EventType', 'goog.net.xpc.CrossPageChannel', 'goog.net.WebSocket', 'clojure.browser.event']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../cljs/spec/gen/alpha.js", ['cljs.spec.gen.alpha'], ['goog.Uri', 'cljs.core']);
goog.addDependency("../cljs/spec/alpha.js", ['cljs.spec.alpha'], ['cljs.core', 'goog.object', 'clojure.string', 'clojure.walk', 'cljs.spec.gen.alpha']);
goog.addDependency("../cljs/repl.js", ['cljs.repl'], ['goog.string', 'cljs.core', 'goog.string.format', 'cljs.spec.alpha']);
goog.addDependency("../clojure/browser/repl.js", ['clojure.browser.repl'], ['goog.dom', 'goog.userAgent.product', 'goog.json', 'cljs.core', 'goog.object', 'clojure.browser.net', 'cljs.repl', 'goog.array', 'clojure.browser.event']);
goog.addDependency("../clojure/browser/repl/preload.js", ['clojure.browser.repl.preload'], ['clojure.browser.repl', 'cljs.core']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../static/simplest_static.js", ['static$.simplest_static'], ['cljs.core']);
