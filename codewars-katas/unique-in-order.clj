(ns unique-in-order
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/54e6533c92449cc251001667/


(defn unique-in-order [input]
  (if (empty? input)
    []
    (loop [last (first input)
           s (rest input)
           ans (vector last)]
      (if (empty? s)
        ans
        (if (= last (first s))
          (recur last (rest s) ans)
          (recur (first s) (rest s) (conj ans (first s))))))))

(unique-in-order "AAAABBBCCDAABBB")



(deftest sample-tests
  (testing "do-nothing-vector"
    (is (= (unique-in-order [1 2 3]), [1 2 3])))

  (testing "do-nothing-string"
    (is (= (unique-in-order "ABC"), [\A \B \C])))

  (testing "do-nothing-list"
    (is (= (unique-in-order '(1 2 3)), [1 2 3])))

  (is (= (unique-in-order [0 0 0 0 1 1 1 2 2 0 0 1 1 1]) [0 1 2 0 1]))
  (is (= (unique-in-order "AAAABBBCCDAABBB") [\A \B \C \D \A \B])))
