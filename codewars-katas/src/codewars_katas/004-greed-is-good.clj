(ns greed-is-good
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/5270d0d18625160ada0000e4/



(def points {31 1000
             41 1100
             51 1200
             36 600
             46 600
             56 600
             35 500
             45 550
             55 600
             34 400
             44 400
             54 400
             33 300
             43 300
             53 300
             32 200
             42 200
             52 200
             21 200
             25 100
             11 100
             15 50})



(defn count-occurances [n s]
  (->>
    s
    (filter #{n})
    (count)
    (#(+ (* % 10) n))))

(defn get-occurancies [dice]
  (filter #(>= % 11) (map #(count-occurances % dice) [1 2 3 4 5 6])))


(defn score [dice]
  (reduce + (remove nil? (map #(get points %) (get-occurancies dice)))))



(deftest basic-tests
         (is (= (score [1 1 1 3 3]) 1000))
         (is (= (score [2 2 2 3 3])  200))
         (is (= (score [3 3 3 3 3])  300))
         (is (= (score [4 4 4 3 3])  400))
         (is (= (score [5 5 5 3 3])  500))
         (is (= (score [6 6 6 3 3])  600))

         (is (= (score [1 1 1 1 3])  1100))
         (is (= (score [1 1 1 1 5])  1150))
         (is (= (score [2 4 4 5 4])  450))
         (is (= (score [3 4 5 3 3])  350))
         (is (= (score [1 5 1 3 4])  250)))
