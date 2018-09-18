(ns hackerrank-functional-programming.core
  (:gen-class))



; Hello World N Times
(defn hello_word_n_times
  [n]
  (loop [n n]
    (if (> n 0)
      (do
        (println "Hello World")
        (recur (dec n))))))

; List Replication
(def n 3)
(def list [1 2 3 4])

(fn [n list]
  (map println (flatten (map #(repeat n %) list))))


; Filter Array
(def delim 3)
(def lst [10 9 8 2 7 5 1 3 0])

(map println (filter #(< % delim) list))


; Filter Positions in a List
(def list [0 1 2 3 4 5 6 7 8 9 10])

((defn solve [x] (take-nth 2 (rest x))) list)

; Array Of N Elements
(fn[n] (take n (range)))

; Reverse a List
(fn[lst] (reverse lst))

; Sum of Odd Elements
((fn [lst] (reduce + (filter odd? lst))) list)

; List Length
(fn [lst] (reduce + (map #(fn [x] 1) lst)))


; Update List
(def list [0 1 2 3 -4 5 6 7 -8 9 10])
(
  (fn [lst] (map (fn [x] (max x (- x))) lst))

 list)
