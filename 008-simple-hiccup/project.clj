(defproject simple-hiccup "0.1.0-SNAPSHOT"
  :description "Simple hiccup website"
  :plugins [[lein-ring "0.8.7"]
            [compojure "1.1.6"]]
  ; provides a handler that points to /src/simple-hiccup
  :ring {:handler simple-hiccup.core/handler
         :auto-reload? true
         :auto-refresh? false}
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [ring/ring "1.2.0"]
                 [hiccup "1.0.4"]
                 [compojure "1.1.6"]]
  :repl-options {:init-ns simple-hiccup.core})
