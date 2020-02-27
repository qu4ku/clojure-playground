(ns random-quote.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET]]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Quote"
                          :author "Author"}))

(def url "https://quote-garden.herokuapp.com/quotes/random")

(defn fetch-link! [state]
  (GET "https://quote-garden.herokuapp.com/quotes/random"
       {:handler (fn [data]
                   (swap! state assoc :author (get data "quoteAuthor"))
                   (swap! state assoc :text (get data "quoteText")))
        :error-handler (fn [{:keys [status status-text]}]
                         (js/console.log status status-text))}))

(defn tweet-link [state]
  (str "https://twitter.cm/intent/tweet?hashtags=quote&text=" 
       (:text @state) 
       " - "
       (:author @state)))

(defn quote [state]
  [:div
   [:h1 "Random Quote Generator"]
   [:div.quote
    [:div.quote-container
     [:p.quote-content (:text @state)]
     [:p.quote-author (:author @state)]]
     
    [:div.quote-buttons
     [:a {:href (tweet-link state)
          :target "_blank"} "tweet!"]
     [:button {:on-click #(fetch-link! state)} "GET QUOTE!"]]]])


(defn start []
  (reagent/render-component [quote app-state]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
