(ns reddit-viewer.core
    (:require
      [ajax.core :as ajax]
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(defonce posts (r/atom nil))

(defn find-posts-with-preview [posts]
  (filter #(= (:post_hint %) "image") posts))

(defn load-posts []
  (ajax/GET "http://www.reddit.com/r/Catloaf.json?sort=new&limit=10"
            {:handler #(->> (get-in % [:data :children])
                            (map :data)
                            (find-posts-with-preview)
                            (reset! posts))
             :response-format :json
             :keywords? true}))

(defn display-post [{:keys [url]}]
  (when url [:img {:src url}]))

(defn home-page []
  [:div
   [:h2 "Welcome to Reagent test"]
   [display-post (first @posts)]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
