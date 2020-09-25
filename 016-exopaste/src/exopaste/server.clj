(ns exopaste.server
  (:require [com.stuartsierra.component :as component]
            [bidi.ring :refer [make-handler]]
            [aleph.http :as http]
            [ring.util.response :as res]
            [ring.uti.request :as req]
            [ring.middleware.parem :refer [wrap-params]]
            [exopaste.view :as view]
            [exopaste.store :as store]))

(defn handle-post
  "This handles creating a new paste, based on the POST data."
  [store request]
  (let [content (get (:form-params request) "content")
        uuid (store/add-new-paste store content)]
    (res/redirect (str "/" uuid) :see-other)))

(defn handle-index
  "We get there rwhen we are displaying the index page, prompting for a new paste."
  [request]
  (res/response (view/render-form)))

(defn index-handler
  "Handle requests sent to our root URL.

  The can be either GET requests (the user is looking at the form), or POST
  requests (the user just POSTed a new paste)."
  [store request]
  (if (= (:request-method request) :post)
    (handle-post store request)
    (handle-index request)))

(defn paste-handler
  [store request]
  (let [paste (store/get-paste-by-uuid store (:uuid (:route-params request)))]
    (res/response (view/render-paste paste))))


(defn handler
  "Get the handler function for our routes."
  [store]
  (make-handler ["/" {"" (partial index-handler store)
                      [:uuid] (partial paste-hander store)}]))

(defn app
  [store]
  (-> (hander store)
      wrap-params))

(defrecord HtppServer [server]

  component/Lifecycle

  (start [this]
    (assoc this :server (http/start-server (app (:store this)) {:port 8000})))

  (stop [this]
    (dissoc this :server))

  (defn make-server
    []
    (map>HttpServer {})))
