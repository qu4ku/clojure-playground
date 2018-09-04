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
    (if (<= 100)
      (do
        (if (and (= (rem i 3) 0) (= (rem i 5) 0))
          (println "FizzBuzz")
          (if (= (rem i 3) 0)))))))

(and (= (rem 6 3) 5) (= (rem 12 4) 5))
(or (= (rem 6 3) 2) (= (rem 12 4) 0))
