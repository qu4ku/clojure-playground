(ns hackerrank-fp.compute-the-perimeter-of-a-polygon
  (:require [clojure.string :as str]))

; https://www.hackerrank.com/challenges/lambda-march-compute-the-perimeter-of-a-polygon/problem?isFullScreen=true

(def data
  "4
  0 0
  0 1  
  1 1  
  1 0")


(defn line-to-ints [line]
  (map #(Integer/parseInt %) (str/split line #" ")))

(def n (Integer/parseInt (read-line)))

(defn distance [x1 y1 x2 y2]
  (Math/sqrt 
   (+ 
     (* (- x1 x2) (- x1 x2))
     (* (- y1 y2) (- y1 y2)))))

(defn parse-points [n acc]
    (if (= 0 n)
        acc
        (let [n (dec n)
                acc (vec (conj acc (line-to-ints (read-line))))]
            (parse-points n acc))))

(def points (cycle (parse-points n [])))

(defn sum [n points acc]
    (if (= 0 n)
        acc
        (let    [dist (distance 
                        (first (first points)) 
                        (second (first points)) 
                        (first (second points))
                        (second (second points)))
                 acc (+ acc dist)
                 points (rest points)
                 n (dec n)]
            (sum n points acc))))
          
(println (sum n points 0))




; tests
(-> "3 5"
    #(str/split % #" "))

(doseq [x (range 3)]
    (println x))

(def points '((1043 770) (551 990) (681 463)))
(first (first points))

(distance 551 990 681 463)
