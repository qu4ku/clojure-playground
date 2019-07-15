(ns example
  (:require [reagent.core :as r :refer [atom]]))

(defn my-div []
  (let [this (reagent/current-component)]
    (into [:div.custom (reagent/props this)
           (reagent/children this)])))

(defn call-my-div []
  [:div
   [my-div "Some text."]
   [my-div {:style {:font-weight 'bold}}
    [:p "Some other text in bold."]
    [:p "some other text"]]])


;; A test combination of props and functions

(defn comment-item [props & children]
  [:div.comment
   (into [:p.commentAuthor {:style (:sytle props)} (:author props)]
         children)])

(defn comment-list []
  [:div.commentList
   [comment-item {:author "Pate Hunt"} "This is one comment"]
   [comment-item {:author "Jordan Walke" :style {:font-weight 'bold}} "This is *another* commment"]])

()
