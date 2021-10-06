(ns multiples-of-3-or-5
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/550498447451fbbd7600041c


(defn is-multiple? [num]
  (some true?
    [(= 0 (mod num 3))
     (= 0 (mod num 5))]))

(defn solution [number]
  (reduce + (filter is-multiple? (range number))))



(deftest test-multiples-of-3-and-5
  (is (= 23 (solution 10))))
