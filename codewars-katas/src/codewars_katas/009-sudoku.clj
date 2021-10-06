(ns sudoku
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/53db96041f1a7d32dc0004d2


(defn check-rows [board]
  (every? true? (into [] (map #(= 9 (count (distinct %))) board))))

(defn get-columns [board]
  (into [] (for [idx (range 9)]
             (map #(get % idx) board))))

(defn check-columns [board]
  (every? true? (into [] (map #(= 9 (count (distinct %))) (get-columns board)))))


(defn done-or-not [board]
 (if (every? true? [(check-rows board) (check-columns board)])
   "Finished!"
   "Try again!"))





(def board
  [[5 3 4 6 7 8 9 1 2]
   [6 7 2 1 9 5 3 4 8]
   [1 9 8 3 4 2 5 6 7]
   [8 5 9 7 6 1 4 2 3]
   [4 2 6 8 5 3 7 9 1]
   [7 1 3 9 2 4 8 5 6]
   [9 6 1 5 3 7 2 8 4]
   [2 8 7 4 1 9 6 3 5]
   [3 4 5 2 8 6 1 7 9]])

(def sudokus '[
               [[[5 3 4 6 7 8 9 1 2]]]
               [6 7 2 1 9 5 3 4 8]
               [1 9 8 3 4 2 5 6 7]
               [8 5 9 7 6 1 4 2 3]
               [4 2 6 8 5 3 7 9 1]
               [7 1 3 9 2 4 8 5 6]
               [9 6 1 5 3 7 2 8 4]
               [2 8 7 4 1 9 6 3 5]
               [3 4 5 2 8 6 1 7 9] "Finished!"

               [[[5 3 4 6 7 8 9 1 2]]]
               [6 7 2 1 9 0 3 4 9]
               [1 0 0 3 4 2 5 6 0]
               [8 5 9 7 6 1 0 2 0]
               [4 2 6 8 5 3 7 9 1]
               [7 1 3 9 2 4 8 5 6]
               [9 0 1 5 3 7 2 1 4]
               [2 8 7 4 1 9 6 3 5]
               [3 0 0 4 8 1 1 7 9] "Try again!"])

(deftest sudoku-tests
  (is (= (done-or-not (first (nth sudokus 0)))  (last (nth sudokus 0))))
  (is (= (done-or-not (first (nth sudokus 1)))  (last (nth sudokus 1)))))
