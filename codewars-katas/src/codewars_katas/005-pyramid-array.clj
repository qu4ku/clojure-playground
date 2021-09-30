(ns greed-is-good
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/515f51d438015969f7000013


(defn create-row [n]
  (vec (map (fn [_] 1) (range n))))

(defn pyramid [n]
  (if (= 0 n) []
    (vec (rest (map create-row (range (+ 1 n)))))))


(defn tester [n e]
  (testing (str "Testing for " n)
    (is (= (pyramid n) e))))
(deftest basic-tests
  (tester 0 [])
  (tester 1 [[1]])
  (tester 2 [[1] [1 1]])
  (tester 3 [[1] [1 1] [1 1 1]]))
