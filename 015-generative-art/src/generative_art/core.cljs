(ns generative-art.core
    (:require [quil.core :as q]
              [quil.middleware :as middleware]))

(enable-console-print!)

(println "This text is printed from src/generative-art/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(def body (.-body js/document))
(def w (.-clientWidth body))
(def h (.-clientHeight body))

(def palette 
  {:name        "purple haze"
   :background  [10 10 10]
   :colors      [[32 0 40]
                 [82 15 125]
                 [99 53 126]
                 [102 10 150]
                 [132 26 200]
                 [165 32 250]
                 [196 106 251]]})

(defn particle 
  "Creates a particle map."
  [id]
  {:id id
   :vx 1
   :vy 1
   :size 3
   :direction 0
   :x (q/random w)
   :y (q/random h)
   :color (rand-nth (:colors palette))})  

(defn position
  "Calculates the next position based on the current, the speed and a max."
  [current delta max]
  (mod (+ current delta) max))

(defn velocity
  "Calculates the next velocity based on the current and a delta. Capped at 2"
  [current delta]
  (mod (+ current delta) 2))

(def noise-zoom
  "Noise zoom level."
  0.05)

(defn direction
  "Calculates the next direction based on the prev and id of each particle."
  [x y z]
  (* 2
     Math/PI
     (+
       (q/noise (* x noise-zoom) (* y noise-zoom))
       (* 0.2 (q/noise (* x noise-zoom) (* y noise-zoom) (* z noise-zoom))))))


(defn sketch-setup []
  []
  (map particle (range 0 2000)))

(defn sketch-update 
  "Receives the current state. Returns the next state to render."
  [particles]
  (map (fn [p]
         (assoc p
                :x (position (:x p) (:vx p) w)
                :y (position (:y p) (:vx p) h)
                :direction (direction (:x p) (:y p) (:id p))
                :vx (velocity (:vx p) (Math/cos (:direction p)))
                :vy (velocity (:vy p) (Math/sin (:direction p)))))
       particles))
                             
        

(defn sketch-draw 
  "Draws the current state to the canvas. called on each iteration after sketch-update"
  [particles]
  ; (apply q/background (:background palette))
  (q/no-stroke)
  (doseq [p particles]
    (apply q/fill (:color p))
    (q/ellipse (:x p) (:y p) (:size p) (:size p))))
  
(defn create [canvas]
  (q/sketch
   :host canvas
   :size [w h]
   :draw #'sketch-draw
   :setup #'sketch-setup
   :update #'sketch-update
   :middleware [middleware/fun-mode]
   :settings (fn []
               (q/random-seed 666)
               (q/noise-seed 666))))



(defonce sketch (create "sketch"))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
