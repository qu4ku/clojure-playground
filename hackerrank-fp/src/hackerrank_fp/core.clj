(ns hackerrank-fp.core
  (:gen-class))
; 
; 
; ; Hello World N Times
; (defn hello_word_n_times
;   [n]
;   (loop [n n]
;     (if (> n 0)
;       (do
;         (println "Hello World")
;         (recur (dec n))))))
; 
; ; lst Replication
; (def n 3)
; (def lst [1 2 3 4])
; 
; (fn [n lst]
;   (map println (flatten (map #(repeat n %) lst))))
; 
; ; Filter Array
; (def delim 3)
; (def lst [10 9 8 2 7 5 1 3 0])
; 
; (map println (filter #(< % delim) lst))
; 
; ; Filter Positions in a lst
; (def lst [0 1 2 3 4 5 6 7 8 9 10])
; 
; ((defn solve [x] (take-nth 2 (rest x))) lst)
; 
; ; Array Of N Elements
; (fn [n] (take n (range)))
; 
; ; Reverse a lst
; (fn [lst] (reverse lst))
; 
; ; Sum of Odd Elements
; ((fn [lst] (reduce + (filter odd? lst))) lst)
; 
; ; lst Length
; (fn [lst] (reduce + (map #(fn [x] 1) lst)))
; 
; ; Update lst
; (def lst [0 1 2 3 -4 5 6 7 -8 9 10])
; ((fn [lst] (map (fn [x] (max x (- x))) lst))
; 
;  lst)
; 
; ; Evaluating e^x
; (fn [n]
;   (print n))
; 
; (def n (Integer/parseInt (clojure.string/trim (read-line))))
; 
; (doseq [n-itr (range n)]
;   (def x (Double/parseDouble (clojure.string/trim (read-line))))
;   (loop [n 0 total [] x x]
;     (if (= n 10)
;       (println (format "%.4f" (float (reduce + total))))
;       (recur (inc n) (conj total (/ (Math/pow x n) (reduce * (rest (take (+ n 1) (range)))))) x))))
; 
; ; k
; 
; (def x_str "1 2 3 4 5")
; 
; (map #(Integer/parseInt %) (clojure.string/split x_str #" "))
; (clojure.string/split x_str #" ")
; 
; (map #(Integer/parseInt %) ["7" "8"])
; 
; 
; (clojure.string/capitalize "kaMil")
; 
; ; string mingling 
; 
; (println (clojure.string/join "" (flatten (map vector (read-line) (read-line)))))
; 
; 
; ; String-o-Permute
; (doseq [n-itr (range (Integer/parseInt (read-line)))]
;   (let [s (read-line)
;         fst (take-nth 2 s)
;         scd (take-nth 2 (rest s))]
;     (println (clojure.string/join "" (flatten (map vector scd fst))))
; 
; 
;     (def string (read-line))))
; 
; 
; 
; ; String Reductions
; (def string "abc")
; (loop [final []
;        f (first string)
;        r (rest string)]
;   (if (empty? r)
;     (println (apply str final))
;     (if (some #(= % f) final)
;       (recur final (first r) (rest r))
;       (recur (conj final f) (first r) (rest r)))))
; 
; 
; ; tests
; (def fst (first "kamil"))
; (def final (conj [] (first "kamil")))
; (contains? (conj [] (first "kamil")) (first "kamil"))
; (map keyword final)
; fst
; (contains? final fst)
; 
; [\k \b]
; 
; (contains? (apply keyword [\k \b]) (keyword \k))
; (contains? [\k \b] (first "kamil"))
; ([\k \b] \k)
; (or (map #(= % \k) [\k \b]))
; (map #(= % \k) [\k \b])
; (if (some #(= % \d) [\k \b])
;   (println "true")
;   (println "false"))
; 
; 
; 
; ; Remove Duplicates)
; (def input (read-line))
; 
; (defn ans [input ans]
;   (if (= 0 (count input))
;     (println (apply str ans))
;     (let [char (first input)
;           rest (rest input)]
;       (if (some #{char} ans)
;         (recur rest ans)
;         (recur rest (conj ans char))))))
; 
; (ans input [])
; 
; 
; ;; Functions or not
; ; https://www.hackerrank.com/challenges/functions-or-not/problem
; 
; (require '[clojure.string :as str])
; ; (def input(slurp *in*))
; 
; (def input "2  
;   3  
;   1 1  
;   2 2  
;   3 3  
;   4
;   1 2
;   2 4
;   3 6  
;   4 8  ")
; 
; (defn str-to-int
;   [line]
;   (if (= 2 (count (str/split (str/trim line) #" ")))
;     (let [x (Integer/parseInt (get (str/split (str/trim line) #" ") 0))
;           y (Integer/parseInt (get (str/split (str/trim line) #" ") 1))]
;       (vector x y))
;     (Integer/parseInt (str/trim line))))
; 
; (def input-int (map str-to-int (str/split input #"\n")))
; 
; (def n-cases (first input-int))
; (def data (rest input-int))
; 
; (defn is-function? [xs ans]
;   (if (empty? xs)
;     (if (apply = true ans)
;       (println "YES")
;       (println "NO"))
;     (let [x (first (first xs))
;           is_good (apply = (filter #(= x (get % 0)) xs))]
;       (recur (rest xs) (conj ans is_good)))))
; 
; (defn solve [data]
;   (if-not (empty? data)
;     (let [n (first data)
;           case-data (take n (rest data))
;           x (first (first case-data))]
;       (is-function? case-data [])
;       (recur (subvec (vec data) (+ n 1))))))
; 
; (solve data)
; 
; ; knowledge from solutions 
; (repeatedly 5 #(println "rep"))
; (repeatedly 5 #(rand-int 100))
; ; (Long/parseLong "3 ")
; (dotimes [n 4]
;          (println "dotimes" n))
; (Integer/parseInt "3")
; (distinct [[1 2] [2 3]])
; (distinct? [[1 2] [2 3]])
; (distinct? [[1 2] [1 2]])
; (distinct? [1 2 3 4 5 4])

;; Pascal's Triangle
;; https://www.hackerrank.com/challenges/pascals-triangle/problem
; 
; (require '[clojure.string :as str])
; 
; (defn factorial [n]
;   (if (= n 0)
;     1
;     (* n (factorial (- n 1)))))
; 
; (defn pascal-value [n r]
;   (/ (factorial n) (* (factorial r) (factorial (- n r)))))
; 
; (defn pascal-line [n]
;   (map (partial pascal-value (dec n)) (range 0 n)))
; 
; (defn pascal-triangle [n]
;   (map pascal-line (range 1 (inc n))))
; 
; (defn solve [n]
;   (doseq [x (pascal-triangle n)]
;     (println (str/join " " x))))
; 
; (solve (Integer/parseInt (str/trim (read-line))))


; knowledge - unrelated
((comp #(* % %) -) 6 3)
((comp #(* 0.01 %) *) 1000 20)


;; The Sums of Powers
https://www.hackerrank.com/challenges/functional-programming-the-sums-of-powers/problem

(require '[clojure.string :as str])

(defn same [s]
  (def acc (atom 1))
  (let [char (first s)]
    (while (= char (get s @acc))
      (swap! acc inc)))
  @acc)

(defn solve [s ans]
  (if (empty? s)
    (println ans)
    (let [n (same s)
          new (str/join "" (str (first s) 
                                (if (> n 1) (str n) "")))
          new-ans (apply str ans new)
          rest (str/join "" (drop n s))]
      (recur rest new-ans))))

(solve "kaaamm" "")
