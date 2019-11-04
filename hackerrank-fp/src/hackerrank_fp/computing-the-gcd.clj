(ns hackerrank-fp.computing-the-gcd)

(defn gcd [x y]
  (if (= y 0) x
    (recur y (mod x y))))

(assert (= 1 (gcd 1 5)))
(assert (= 10 (gcd 10 100)))
(assert (= 1 (gcd 22 131)))
(assert (= 1 (gcd 131 22)))
