(ns peg-game.core
  (require [clojure.set :as set])
  (:gen-class))

(declare successful-move prompt-move game-over query-rows)


(defn tri*
  "Generate lazy sequence of triangular numbers"
  ([] (tri* 0 1))
  ([sum n]
   (let [new-sum (+ sum n)]
     (cons new-sum (lazy-seq (tri* new-sum (inc n)))))))

(take 10 (tri*))

(def tri (tri*))

(take 5 tri)

(defn triangular?
  "Is the number triangular? e.g. 1, 3, 6, 10, 15, etc"
  [n]
  (= n (last (take-while #(>= n %) tri))))

(triangular? 5)

(triangular? 6)

(defn row-tri
  "The triangular number at the end of row n"
  [n]
  (last (take n tri)))

(row-tri 1)
(row-tri 2)
(row-tri 4)

(defn row-num
  "Returns row number the position belongs to: pos 1 in row 1,
positions 2 and 3 in row 2, etc"
  [pos]
  (inc (count (take-while #(> pos %) tri))))

(row-num 1)
(row-num 5)

(defn connect
  "Form a mutual connection between two positions"
  [board max-pos pos neighbor destination]
  (if (<= destination max-pos)
    (reduce (fn [new-board [p1 p2]]
              (assoc-in new-board [p1 :connections p2] neighbor))
            board[[pos destination] [destination pos]])
    board))

(connect {} 15 1 2 4)


(assoc {} [:cookie :monster :vocals] "Finntroll")
(assoc-in {} [:cookie :monster :vocals] "Finntroll")

(get-in {:cookie {:monster {:vocals "Finntroll"}}} [:cookie :monster])

(assoc-in {} [1 :connections 4] 2)

(defn connect-right
  [board max-pos pos]
  (let [neighbor (inc pos)
        destination (inc neighbor)]
    (if-not (or (triangular? neighbor) (triangular? pos))
      (connect board max-pos pos neighbor destination)
      board)))

(defn connect-down-left
  [board max-pos pos]
  (let [row (row-num pos)
        neighbor (+ row pos)
        destination (+ 1 row neighbor)]
    (connect board max-pos pos neighbor destination)))

(defn connect-down-right
  [board max-pos pos]
  (let [row (row-num pos)
        neighbor (+ 1 row pos)
        destination (+ 2 row neighbor)]
    (connect board max-pos pos neighbor destination)))

(connect-down-left {} 15 1)

(connect-down-right {} 15 3)

(defn add-pos
  "Pegs the position and performs connection"
  [board max-pos pos]
  (let [pegged-board (assoc-in board [pos :pegged] true)]
    (reduce (fn [new-board connection-creation-fn]
             (connection-creation-fn new-board max-pos pos))
            pegged-board
            [connect-right connect-down-left connect-down-right])))


(add-pos {} 15 1)

(defn clean [text]
  (reduce (fn [string string-fn] (string-fn string))
          text
          [s/trim #(s/replace % #"lol" "LOL")]))
