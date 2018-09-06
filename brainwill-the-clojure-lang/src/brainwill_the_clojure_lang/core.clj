(ns brainwill-the-clojure-lang.core
  (:gen-class))


; factorial
(defn factorial [n]
  (if (= n 0) 1
    (* n (factorial (dec n)))))

; works:
(factorial 20)

; integer overflow
(factorial 21)
; *' uses big int but it causes stack-overflow eventually
(defn factorial-bigint [n]
  (if (= n 0) 1
    (*' n (factorial-bigint (dec n)))))
(factorial-bigint 23)


; recur doesn't work because is not in a tail position
(defn factorial-bigint-recur [n]
  (if (= n 0) 1
    (* n (recur (dec n)))))

(factorial-bigint 23)
(defn factorial-bigint-loop [n]
  (if (= n 0) 1
    (loop [val n i n]
      (if (<= i 1) val
        (recur (*' val (dec i)) (dec i))))))


(defn fizz-buzz []
  (loop [i 1]
    (if (<= i 100)
      (do
        (if (and (= (rem i 3) 0) (= (rem i 5) 0))
          (println "FizzBuzz")
          (if (= (rem i 3) 0)
            (println "Fizz")
            (if (= (rem i 5) 0)
              (println "Buzz")
              (println i))))
        (recur (inc i))))))

(and (= (rem 6 3) 5) (= (rem 12 4) 5))
(or (= (rem 6 3) 2) (= (rem 12 4) 0))

(fizz-buzz)

; fizz-buzz using cond
(defn fizz-buzz-cond []
  (loop [i 1]
    (if (<= i 100)
      (do
        (cond
          (and (= (rem i 3) 0) (= (rem i 5) 0)) (println "FizzBuzz")
          (= (rem i 3) 0) (println "Fizz")
          (= (rem i 5) 0) (println "Buzz")
          :else (println i))
        (recur (inc i))))))


; COLLECTIONS

(def l [1 2 3 4 5])

(count l)
(list? l)
(vector? l)
(map? l)
(contains? l 5)
(contains? l 4)
(contains? l 1)
(contains? l 5)
; contains seems to return if index/key is in instead of if element is in
(def m {:a 1 :b 2})
(contains? m 1)
(contains? m :a)

(count {3 6 "hi" 3})  ; count of key/value pair in maps
(count l)

; conj : returns new collection with an added element or key-value pair
; assoc : returns new collection with added/modified value for given key or index
; dissoc : returns new map in which a key has been removed
; merge : returns a new map that comibnes the key-value pairs of one or more maps

(conj {3 6 "hi" 8} ["bye" 7])
(conj {3 6 "hi" 8} ["hi" 7])
(conj {3 6 "hi" 8} "bye" 7)
(conj {"hi" 8} {"bye" 8})

(println '(1 2))


(conj '(1 2 3) true)
(conj [1 2 3] true)

(assoc {3 6 "hi" 8} "bye" 7)
(assoc {3 6 "hi" 8} "hi" 5)

; index value
(assoc [1 2 3 4] 3 true)
(assoc [1 2 3 4] 2 true)
(assoc [1 2 3 4] 11 true)

; assoc doesn't work on lists
(assoc '(1 2 3) 2 true)

(dissoc {3 6 "hi" 8} "hi")
(dissoc {3 6 "hi" 8} "bye")

; dissoc doesn't work on lists or vectors. hm.
(dissoc [1 2 3 4] 3)
(dissoc '(1 2 3 4 3) 3)

(merge {3 6 "hi" 8})
(merge {3 6 "hi" 8} {"hi" 7 :yo 5})
(merge {3 6 "hi" 8} {"hi" 7 :yo 5} {:yo 4})

; core collection functions
; get : returns value for a given key or index
; pop : returns new collection without the first [vectors]/last [list] element / key-value pair
; peek : returns the element / key-value pair that would be removed by pop

(get {3 6 "hi" 8} "hi")
(get {3 6 "hi" 8} "bye")
(get '(1 2 3 4 5) 2)  ; get returns nil for a list
(get [1 2 3 4] 2)
(get [1 2 3 4] 11)

(pop [1 2 3 4])
(pop '(1 2 3 4))
(pop {2 5 "hi" 8})  ; pop doesn't works on maps

(peek [1 2 3 4])
(peek '(1 2 3 4))
(peek {2 3 4 5})  ; peek doesn't work on maps
; sequences
; first : returns first element of the collection or nil if empty
; rest : returns a sequence of all the elements except the first one

(seq [1 2 3 4 5])
(seq '(1 2 3 4 5))
(seq {3 5 "hi" 8})
(keys {3 5 "hi" 8})
(vals {3 6 "hi" 8})

(first {3 6 "hi" 8})
; same as:
(first (seq {3 6 "hi" 8}))

; cons is a sequence type which holds a value and a reference to another sequences
(def x (cons 3 nil))
(first x)
(rest x)
(def y (cons 4 '(7 8 9)))
(first y)
(rest y)
(cons 3 [5 3 4])

(cons 5 (cons 6 (cons 3 nil)))
(def z (cons 5 (cons 6 (cons 3 nil))))
(first z)
(rest z)
(first (rest z))
(rest (rest z))
