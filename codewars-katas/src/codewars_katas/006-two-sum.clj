(ns two-sum
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/52c31f8e6605bcc646000082


; dirty solution, sry
(defn exchange-at-index [xs idx]
  (concat (take idx xs) "_" (drop (+ 1 idx) xs)))


(defn get-indexes [xs nums]
  (let [aix (.indexOf xs (get nums 0))
        bix (.indexOf (exchange-at-index xs aix) (get nums 1))]
    (vector aix bix)))


(defn twosum [numbers target]
  (take 2
    (remove nil?
      (flatten
        (for [a numbers]
          (for [b (rest numbers)]
            (if (= (+ a b) target)
              (get-indexes numbers [a b]))))))))





(ns twosum-test
  (:require [clojure.test :refer :all]
            [twosum :refer :all]))

(deftest twosum-example-tests
  (is (= (sort < (twosum '[1 2 3] 4)) '[0 2]))
  (is (= (sort < (twosum '[1234 5678 9012] 14690)) '[1 2]))
  (is (= (sort < (twosum '[2 2 3] 4)) '[0 1])))
