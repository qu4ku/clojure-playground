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

; lst Replication
(def n 3)
(def lst [1 2 3 4])

(fn [n lst]
  (map println (flatten (map #(repeat n %) lst))))

; Filter Array
(def delim 3)
(def lst [10 9 8 2 7 5 1 3 0])

(map println (filter #(< % delim) lst))

; Filter Positions in a lst
(def lst [0 1 2 3 4 5 6 7 8 9 10])

((defn solve [x] (take-nth 2 (rest x))) lst)

; Array Of N Elements
(fn [n] (take n (range)))

; Reverse a lst
(fn [lst] (reverse lst))

; Sum of Odd Elements
((fn [lst] (reduce + (filter odd? lst))) lst)

; lst Length
(fn [lst] (reduce + (map #(fn [x] 1) lst)))

; Update lst
(def lst [0 1 2 3 -4 5 6 7 -8 9 10])
((fn [lst] (map (fn [x] (max x (- x))) lst))

 lst)

; Evaluating e^x
(fn [n]
  (print n))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(doseq [n-itr (range n)]
  (def x (Double/parseDouble (clojure.string/trim (read-line))))
  (loop [n 0 total [] x x]
    (if (= n 10)
      (println (format "%.4f" (float (reduce + total))))
      (recur (inc n) (conj total (/ (Math/pow x n) (reduce * (rest (take (+ n 1) (range)))))) x))))

; k

(def x_str "1 2 3 4 5")

(map #(Integer/parseInt %) (clojure.string/split x_str #" "))
(clojure.string/split x_str #" ")

(map #(Integer/parseInt %) ["7" "8"])


(clojure.string/capitalize "kaMil")

; string mingling 

(println (clojure.string/join "" (flatten (map vector (read-line) (read-line)))))


; String-o-Permute
(doseq [n-itr (range (Integer/parseInt (read-line)))]
  (let [s (read-line)
        fst (take-nth 2 s)
        scd (take-nth 2 (rest s))]
    (println (clojure.string/join "" (flatten (map vector scd fst))))
  

    (def string (read-line))))



; String Reductions
(def string "accabb")
(loop [final []
       fst (first string)
       rst (rest string)]
  (if (empty? rst)
    (println (apply str final))
    (if (contains? final fst)
      (recur final (first rst) (rest rst))
      (do 
        (println class fst)
        (recur (conj final fst) (first rst) (rest rst))))))
