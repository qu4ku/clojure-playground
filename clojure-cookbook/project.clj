(defproject clojure-cookbook "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [inflections "0.13.0"]
                 [clojurewerkz/money "1.10.0"]
                 [clj-time "0.14.4"]
                 [org.clojure/core.match "0.2.0"]
                 [org.clojure/tools.cli "0.4.1"]
                 [org.clojure/data.json "0.2.5"]
                 [org.clojure/core.async "0.4.490"]
                 [org.clojure/core.logic "0.8.11"]
                 [overtone "0.10.3"]]


  :main ^:skip-aot clojure-cookbook.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
