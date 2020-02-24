; constrain is to use immutant.web only so no hiccup etc
(ns ring.core
  (:gen-class)
  (:require [immutant.web :refer [run]]
            [ring.util.response :as utils]
            [clojure.java.io :as io])
  (:import [org.slf4j LoggerFactory]
           [ch.qos.logback.classic Level]))

(defonce logger (LoggerFactory/getLogger "ring.core"))

(defn log [s]
  (.setLevel logger Level/DEBUG)
  (.debug logger (str s)))

(def index 
  "<!DOCTYPE html>
  <html lang=\"en\">
    <head>
      <meta charset=\"utf-8\">
      <title>Demo</title>
    </head>
    <body>
     <p>Welcome to our randomiser!</p>
     <a href=\"/random\">Random</a>
    </body>
  </html>")

(defn wrap-logger [handler]
  (fn [{server-name :server-name :as request}]
    (log server-name)
    (handler request)))

(def counter (atom 0))

; first fn is a set of middlewares chained by comp
; second is a router
(run ((comp 
       (fn [handler]
        (fn [request]
          (swap! counter inc)
          (handler request)))
       wrap-logger)
      (fn [{uri :uri :as req}] 
       (case uri
             "/" (->
                  (utils/response index)
                  (utils/content-type "text/html"))
             "/random" (let [image (io/input-stream "https://source.unsplash.com/random")] 
                         (-> (utils/response image) 
                             (utils/content-type "image/jpeg")))))))
