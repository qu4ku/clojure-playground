(ns hamming-numbers
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/526d84b98f428f14a60008da
; not finished


(defn hamming [n]
  #_TODO)


(time (for [x (range 13)
            y (range 13)
            z (range 13)]
        (* x y z)))





(deftest first-20
  (doseq [n (range 20) :let [ham (nth hams n)]]
    (is (= ham (hamming-numbers/hamming n)))))
