(ns simple-hiccup.core
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [simple-hiccup.my-view :as index-view]))
 
; in project.clj ring points to this function
(defroutes app-routes
           (GET "/" [] (index-view/index-page))
           (route/resources "/")
           ; if page is not found
           (route/not-found "Page not found"))
 
;; site function creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler
  (handler/site app-routes))
