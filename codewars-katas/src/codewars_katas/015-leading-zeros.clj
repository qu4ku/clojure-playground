(ns leading-zeros
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/52f787eb172a8b4ae1000a34


(defn zeros
  "https://math.stackexchange.com/questions/1543659/explanation-for-the-the-number-of-trailing-zeros-in-a-factorial"
  [n]
  (loop [zeros 0
         power 5]
    (if-not (<= power n)
      zeros
      (recur (+ zeros (int (Math/floor (/ n power)))) (* 5 power)))))

(time (zeros 100000))



(deftest Testing...
  (is (= (zeros 0) 0) "Zero has 0 trailing zeros")
  (is (= (zeros 6) 1))
  (is (= (zeros 30) 7)))
