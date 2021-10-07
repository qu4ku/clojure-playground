(ns digital-root
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/541c8630095125aba6000c00


(defn digital-root [n]
  (if (< n 10)
    n
    (recur (reduce + (map #(Character/digit % 10) (seq (str n)))))))





(deftest digital-root-example-test
  (is (= (digital-root 16) 7))
  (is (= (digital-root 456) 6)))
