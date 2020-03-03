(ns re-frame-clock.views
  (:require
   [re-frame.core :as re-frame]
   [re-frame-clock.subs :as subs]
   [cljs.pprint :refer [pprint]]
   [clojure.string :as str]))
   
   
(defn clock []
  [:div.example-clock
   {:style {:color @(re-frame/subscribe [:time-color])
            :font-size 60
            :margin-top "50px"}}
   (-> @(re-frame/subscribe [:time])
       .toTimeString
       (str/split " ")
       first)]) 

(defn color-input []
  [:div.color-input
   "Time color: "
   
   [:input {:type "text"
            :style {:margin-top "50px"}
            :value @(re-frame/subscribe [:time-color])
            :on-change #(re-frame/dispatch [:time-color-change (-> % .-target .-value)])}]])

(defn ui []
  [:div
   [:h1 "This is now!"]
   [clock]
   [color-input]])
  
