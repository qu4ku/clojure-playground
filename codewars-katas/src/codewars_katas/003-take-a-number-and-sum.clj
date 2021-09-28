(ns take-a-number-and-sum
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/5626b561280a42ecc50000d1
; wip


(defn num-to-list [n]
  (let [c (count (str n))
        nums (map #(Character/digit % 10) (seq (str n)))
        powers (range 1 (+ c 1))
        list (vec (map vector nums powers))]
    list))


(defn sum-of-cons-powers [s]
  (int (reduce + (map #(+ (Math/pow (get % 0) (get % 1))) (num-to-list s)))))


(defn sum-dig-pow [a b]
  (let [nums (range a (+ 1 b))]
    (filter #(= (sum-of-cons-powers %) %) nums)))



(defn dotest [a b ans]
  (is (= (sum-dig-pow a b) ans)))
(deftest a-test1
  (println "Basic Tests sum-dig-pow"
    (dotest 1 10 [1, 2, 3, 4, 5, 6, 7, 8, 9])
    (dotest 1 100 [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
    (dotest 10 100  [89])
    (dotest 90 100 [])
    (dotest 90 150 [135])
    (dotest 50 150 [89, 135])
    (dotest 10 150 [89, 135])))
