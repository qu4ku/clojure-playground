(defproject clojure-api "0.1.0-SNAPSHOT"
  :description "simple clojure api"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [ring "1.7.1"]
                 [compojure "1.6.1"]
                 [ring/ring-json "0.5.0"]]
  :main ^:skip-aot clojure-api.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :ring {:auto-reload? ture
         :auto-refresh? true})
