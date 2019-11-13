(ns reagent-circles.core
    (:require [reagent.core :as reagent :refer [atom]]))


(enable-console-print!)

(defonce app-state (atom {:text "SVG test"}))

(def color1 "blue")
(def color2 "orange")



(defn circles []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Click the circle!"]
   [:div
    [:svg {:width 100 :height 100}
     [:circle {:cx 50
               :cy 50
               :r 40
               :stroke "green"
               :stroke-width 4
               :fill (if (zero? (get-in @app-state [:fill-number]))
                       color1
                       color2)
               :on-click (fn circle-click [e]
                           (if (zero? (get-in @app-state [:fill-number]))
                             (do
                               (swap!
                                 app-state update-in [:fill-number]
                                 inc)
                               (swap!
                                 app-state assoc-in [:text]
                                 (str "Changed to " color2 "!")))
                             (println "Not zero")))}]]]
                             
   [:div
    [:button {:on-click (fn reset-click [e]         
                          (if (== (get-in @app-state [:fill-number]) 1)
                            (do
                              (swap! app-state update-in [:fill-number]
                                     dec)
                              (swap! app-state assoc-in [:text]
                                     (str "Back to " color1 "!")))
                            (println "Not one")))}
                            
     (str "Reset to color " color1)]]])
   

(reagent/render-component [circles]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
