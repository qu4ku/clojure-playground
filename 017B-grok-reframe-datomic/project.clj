(defproject grok "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [com.datomic/datomic-free "0.9.5697"]
                 [org.postgresql/postgresql "9.3-1102-jdbc41"]
                 [http-kit "2.4.0"]
                 [metosin/reitit "0.5.5"]
                 [proto-repl "0.3.1"]]
  :main ^:skip-aot grok.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
