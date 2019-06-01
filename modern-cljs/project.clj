(defproject modern-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clujure/clojurescipt "1.10.520"]]
  
  ;; lein-cljsbuild plugin to build a cljs defproject
  :plugins [[lein-cljsbuild "1.1.0"]]
  
  ;; cljsbuild options configuration
  :cljsbuild {:builds
              [{;; CLJS source code path
                :source-paths ["src/cljs"]
                
                ;; google closuer (cls) options configuration
                :compiler {
                           :output-to "resources/public/js/modern.js"
                           
                           ;; minimal js optimization directive
                           :optimizations :whitespace
                           :pretty-print true}}]}
  :clean-targets ^{:protect false} [:target-path "resources/public/js/"])
  
