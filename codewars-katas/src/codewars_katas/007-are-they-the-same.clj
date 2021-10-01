(ns are-they-the-same
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/550498447451fbbd7600041c
; fails due to ambiguous instructions so fck it


(defn is-in? [n xs]
  (boolean (some #{n} xs)))

(defn compSame [a b]
  (if (any empty? [a b])
    false
    (every? true? (map
                    #(is-in? (* % %) b)
                    a))))



(deftest a-test1
  (testing "Test 1"
    (def ur [121, 144, 19, 161, 19, 144, 19, 11])
    (def vr [121, 14641, 20736, 361, 25921, 361, 20736, 361])
    (is (= (compSame ur vr) true))))
