(ns myproj.core
  (:require [clojure.string :as str])
  (:require [proto-repl])
  (:gen-class))

(type false)
(pos? 15)
(neg? 15)
(integer? 15)
(odd? 15)
(even? 15)
(float? 15)
(zero? 0)

(def a_string "Hello")
(def a_double 1.234)
(def a_long 15)
(format "This is a string %s" a_string)
(format "5 spaces and %5d" a_long)
(format "%-4d left justified" a_long)
(format "2 decimals: %.2f" a_double)
(format "Leading zeros: %04d" a_long)

(def str1 "this is my 2nd string")
(str/blank? str1)
(str/includes? str1 "my")
(str/index-of str1 "my")
(str/split str1 #" ")
(str/split str1 #"\d")
(str/join " " ["the" "big" "cheese"])
(str/replace "I am 43" #"43" "20")
(str/upper-case str1)
(str/lower-case str1)

; lists 
(println (list "dog" 1 3.4 true))
(println (first (list 1 2 3)))
(println (rest (list 1 2 3)))
(println (nth (list 1 2 3) 1))
(cons 3 (list 1 2))
(conj (list 1 2) 3)

; sets 
(set '(1 2 3 3))
(conj (set '(3 2)) 5)
(contains? (set '(3 4)) 2)
(contains? (set '(3 4)) 3)
(disj (set '(3 4)) 3)

; vectors
(vector 3 2)
(get (vector 3 2) 1)
(conj (vector 3 2) 1)
(cons 1 (vector 3 2))
(pop (vector 3 2))
(subvec (vector 2 3 4 5) 0 2)

; maps
(hash-map "Name" "Derek" "Age" 42)
(sorted-map 3 42 2 "Banas" 1 "Derek")
(get (hash-map "name" "derek" "age" 42) "name")
(find (hash-map "name" "derek" "age" 42) "name")
(contains? (hash-map "name" "derek" "age" 42) "name")
(keys (hash-map "name" "derek" "age" 42))
(vals (hash-map "name" "derek" "age" 42))
(merge-with + (hash-map "some" "thing") (hash-map "name" "derek" "age" 42))
(merge (hash-map "some" "thing") (hash-map "name" "derek" "age" 42))

; atoms
(defn atom-x [x]
  (def atom_x (atom x))
  (add-watch atom_x :watcher
       (fn [key atom old-state new-state]
         (println "atom_ex changed from " old-state " to " new-state)))
  (println "1st x" @atom_x)
  (reset! atom_x 10)
  (println "2nd x" @atom_x)
  (swap! atom_x inc)
  (println "Increment x" @atom_x))

(atom-x 5)

; agent
(defn agent-x []
  (def tickets-sold (agent 0))
  (send tickets-sold + 15)
  (println)
  (println "tickets " @tickets-sold)
  (send tickets-sold + 10)
  (await-for 100 tickets-sold)
  (println "tickets " @tickets-sold)
  (shutdown-agents))

(agent-x)

; math funcionts
(+ 1 2 3)
(- 1 2 3)
(* 2 5)
(/ 10 5)
(mod 12 3)
(Math/abs -10)
(Math/cbrt 8) ;; cube root
(Math/sqrt 4)
(Math/ceil 4.5)
(Math/floor 4.5)
(Math/exp 2) ;; e to the power of 2
(Math/hypot 2 2) ;; sqrt(x^2 + y^2)
(Math/log 2.71)
(Math/log10 100)
(Math/max 1 5)
(Math/min 1 -54)
(Math/pow 2 5)
(rand-int 20)
(reduce + [1 2 3])
(Math/PI)


; functions
(defn say-hello
  "Receives a name with 1 paramenter and responds"
  [name]
  (println "Hello again" name))

(defn get-sum [x y]
  (+ x y))

(defn get-sum-more 
  ([x y z]
   (+ x y z))
  ([x y]
   (+ x y)))

(defn hello-you [name]
  (str "Hello " name))

(defn hello-all [& names]
  (map hello-you names))

(say-hello "darek")
(get-sum 4 5)
(get-sum-more 4 5)
(get-sum-more 4 5 6)
(hello-all "marek" "jurek")


; decision makers

  
  
