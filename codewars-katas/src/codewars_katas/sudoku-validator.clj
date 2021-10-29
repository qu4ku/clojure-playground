(ns sudoku-validator
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/529bf0e9bdf7657179000008
; convoluted

(defn check-rows [board]
  (every? true? (into [] (map #(= 9 (count (distinct %))) board))))

(defn get-columns [board]
  (into [] (for [idx (range 9)]
             (map #(get % idx) board))))

(defn check-columns [board]
  (every? true? (into [] (map #(= 9 (count (distinct %))) (get-columns board)))))


(defn generate-pairs []
  (for [x (map #(range % (+ % 3)) [0 3 6])
        y (map #(range % (+ % 3)) [0 3 6])]
    [x y]))

(defn get-pieces [pair board]
  (let [[x y] pair]
    (for [idx x
          idy y]
      (get (get board idx) idy))))

(defn check-suboards [board]
  (every? true? (into [] (map #(= 9 (count (distinct (get-pieces % board))))
                              (generate-pairs)))))


(defn valid-solution [board]
 (if (every? true? [(check-suboards board) (check-rows board) (check-columns board)])
   true
   false))




(def test-board
  [[1 2 3 4 5 6 7 8 9]
   [2 3 1 5 6 4 8 9 7]
   [3 1 2 6 4 5 9 7 8]
   [4 5 6 7 8 9 1 2 3]
   [5 6 4 8 9 7 2 3 1]
   [6 4 5 9 7 8 3 1 2]
   [7 8 9 1 2 3 4 5 6]
   [8 9 7 2 3 1 5 6 4]
   [9 7 8 3 1 2 6 4 5]])


(deftest sudoku-test1
  (is (= (valid-solution [[5 3 4 6 7 8 9 1 2]
                          [6 7 2 1 9 5 3 4 8]
                          [1 9 8 3 4 2 5 6 7]
                          [8 5 9 7 6 1 4 2 3]
                          [4 2 6 8 5 3 7 9 1]
                          [7 1 3 9 2 4 8 5 6]
                          [9 6 1 5 3 7 2 8 4]
                          [2 8 7 4 1 9 6 3 5]
                          [3 4 5 2 8 6 1 7 9]]) true)))

(deftest sudoku-test2
  (is (= (valid-solution [[5 3 4 6 7 8 9 1 2]
                          [6 7 2 1 9 0 3 4 8]
                          [1 0 0 3 4 2 5 6 0]
                          [8 5 9 7 6 1 0 2 0]
                          [4 2 6 8 5 3 7 9 1]
                          [7 1 3 9 2 4 8 5 6]
                          [9 0 1 5 3 7 2 1 4]
                          [2 8 7 4 1 9 6 3 5]
                          [3 0 0 4 8 1 1 7 9]]) false)))
