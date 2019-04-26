(ns tictactoe.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn new-board [n]
  (vec (repeat n (vec (repeat n "B")))))

(def board-size 3)

(defonce app-state 
  (atom {:text "Welcome to tic tac toe"
         :board (new-board board-size)}))

; (defn compute-move [board])
  ; (let [board (:board @app-state)
  ;       remaining-spotes [(for [i (range board-size)
  ;                               j (range board-size)
  ;                               :when (= (get-in board [j i]) "B")]
  ;                           [i j])]
  ;       move (rand-nth remaining-spotes)]
  ; 
  ;   ; (println (assoc-in board move "C"))
  ;   (println remaining-spotes)))
  ;   ; (assoc-in board move "C")))
(defn compute-move [board]
  (let [board (:board @app-state)
        remaining-spotes (for [i (range board-size)
                                j (range board-size)
                               :when (= (get-in board [j i]) "B")]
                           [i j])
        move (rand-nth remaining-spotes)]
    (assoc-in board move "C")))

; (deftest computer-move-test
;   (is (= [["C"]]
;          (computer-move [["B"]]))))

(defn blank [i j]
  [:rect {:width 0.9
          :height 0.9
          :fill "grey"
          :x i
          :y j
          :on-click
          (fn rect-click [e]
            (prn "You clicked me!" i j)
            (swap! app-state assoc-in [:board j i] "P")
            (swap! app-state assoc :board compute-move)
            (prn (:board app-state)))}])

(defn circle [i j]
  [:circle
   {:r 0.45
    :cx (+ 0.45 i)
    :cy (+ 0.45 j)
    :fill "red"}])

(defn cross [i j]
  [:g {:stroke "black"
       :stroke-width 0.2
       :stroke-linecap "round"
       :transform (str "translate(" (+ 0.20 i) "," (+ 0.25 j) ") " "scale(0.5)")}
   [:line {:x1 0 :y1 0 :x2 1 :y2 1}]
   [:line {:x1 1 :y1 0 :x2 0 :y2 1}]])

(defn tictactoe []
  [:center
   [:h1 (:text @app-state)]
   (into
     [:svg 
      {:view-box (str "0 0 " board-size " " board-size)
       :width 500
       :height 500}
      (for [i (range board-size)
            j (range board-size)]
        (case (get-in @app-state [:board j i])
          "B" [blank i j]
          "C" [circle i j]
          "P" [cross i j]))])
   [:p
    [:button 
     {:on-click
      (fn new-game-click [e]
        (swap! app-state assoc :board (new-board board-size)))}
     "New Game"]]])

                  

(reagent/render-component [tictactoe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  ; (swap! app-state assoc-in [:board 0 0] 2))
  (prn (:board @app-state)))
