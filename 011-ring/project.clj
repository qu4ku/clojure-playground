(defproject ring "0.1.0-SNAPSHOT"
  :description "I wanted to develop a web application in Clojure with only one dependency, one source file and contained in one function (for the most part). The motivation for this exercise is educational. Beginners can expect to get a feel for the development experience in Clojure, how the REPL stands in the center of the workflow, how evaluation of individual forms provides a live environment. Experienced users may learn about the intricacies of Ring middleware, how it actually comes down to function composition, but without the mathematical guarantees."
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.immutant/web "2.1.10"]]
                 
  :main ^:skip-aot ring.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
