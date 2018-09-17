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
; (fn [list]
;   (let [idx 0 max_id (count list) new_list ()]
;     (while (idx <= max_id)
;       (if (= (rem idx 2) 0)
;         (conj)))))
;
; (take (count list) )
