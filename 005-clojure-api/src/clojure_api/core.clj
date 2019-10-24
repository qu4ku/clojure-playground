(ns clojure-api.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [clojure.pprint :refer [pprint]]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :refer [not-found]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.util.response :refer [response]]))


(def my-routes
  (routes
   (GET "/endpoint-a" [] (response {:foo "bar"}))
   (GET "/endpoint-b" [] (response {:baz "qux"}))
   (POST "/debug" request (response (with-out-str (pprint request))))
   (not-found "<h1>Page not found</h1>")))

(def app
  (-> my-routes
      wrap-json-body
      wrap-json-response))

(defn -main
  []
  (run-jetty app {:port 3000}))
