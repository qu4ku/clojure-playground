(ns leading-zeros
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
; to slow

(defn factorial [n]
  (reduce *' (range 1 (+ 1 n))))


(defn num-of-zeros [l]
  (loop [l l
         ans 0]
    (if (some true? [(empty? l) (not= \0 (first l))])
      ans
      (recur (rest l) (+ 1 ans)))))

(defn zeros [n]
  (num-of-zeros (reverse (str (factorial n)))))

(defn zeros2 [n]
  (loop [i (factorial n)
         ans 0]
    (if (some true? [(= 0 i) (> 0 (/ i 10))])
      ans
      (if-not (= 0 (mod i 10))
        ans
        (recur (/ i 10) (+ 1 ans))))))

(defn zeros3 [n]
  (loop [i (factorial n)
         div 10]
    (if-not (= 0 (mod i div))
      (- (count (str div)) 2)
      (recur i (*' 10 div)))))

(defn zeros4 [n]
  (loop [i (str (factorial n))]))


(vector (str (factorial 10)))

(time (zeros 100000))
(time (zeros2 100000))
(time (- (count (str (zeros3 100))) 2))
(time (zeros3 100000))
(time (zeros 10000))
(time (factorial 10000))



(deftest Testing...
  (is (= (zeros 0) 0) "Zero has 0 trailing zeros")
  (is (= (zeros 6) 1))
  (is (= (zeros 30) 7)))
