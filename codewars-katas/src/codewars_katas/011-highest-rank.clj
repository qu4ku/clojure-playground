(ns highest-rank
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004


(defn highest-rank
  [data]
  (first (last (sort-by second (frequencies data)))))

(defn highest-rank
  [data]
  (->> data frequencies (sort-by val) last key))

(highest-rank [12, 10, 8, 12, 7, 6, 4, 10, 10])



(deftest Testing...
  (testing
   "[12, 10, 8, 12, 7, 6, 4, 10, 12]"
   (is (= (highest-rank [12, 10, 8, 12, 7, 6, 4, 10, 12])
          12)))
  (testing
   "[12, 10, 8, 12, 7, 6, 4, 10, 10]"
   (is (= (highest-rank [12, 10, 8, 12, 7, 6, 4, 10, 10])
          10)))
  (testing
   "[12, 10, 8, 12, 7, 6, 4, 10, 10, 12, 12]"
   (is (= (highest-rank [12, 10, 8, 12, 7, 6, 4, 10, 10, 12, 12])
          12)))
  (testing
   "[12, 10, 8, 12, 7, 6, 4, 10, 10, 12, 12, 14, 14, 14, 14]"
   (is (= (highest-rank [12, 10, 8, 12, 7, 6, 4, 10, 10, 12, 12, 14, 14, 14, 14])
          14))))
