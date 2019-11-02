; https://www.hackerrank.com/challenges/fibonacci-fp/problem
; wip: good but with timout

(ns hackerrank-fp.fibonacci)

(def input "5
0
1
5
10
100")
(defn generate-fib [n counter table]
  (if (= n 0) 0
    (if (= n 1) 1
      (if (= 2 counter) table
        (recur n (dec counter) (conj table (reduce +' (take-last 2 table))))))))
(def fibs (generate-fib 10000 10000 [0 1]))

(defn generate-fibs2 [n]
  (let [acc (atom [0 1])]
    (doseq [_(range n)]
      (swap! acc conj (reduce +' (take-last 2 acc))))
    acc))
(generate-fibs2 3)

(defn ans2 [n]
  (let [n (Integer/parseInt n)
        fibn (get fibs n)
        ans (int (mod fibn 100000007))]
    ans))

(defn fib [n counter table]
  (if (= n 0) 0
    (if (= n 1) 1
      (if (= 1 counter) (last table)
        (fib n (dec counter) (conj table (reduce +' (take-last 2 table))))))))

(defn ans [n]
  (let [n (Integer/parseInt n)
        fibn (fib n n [0 1])
        ans (int (mod fibn 100000007))]
    ans))


(def n (Integer/parseInt (read-line)))
(doseq [_ (range n)]
  (println (ans (read-line))))


; tests
(do
  (assert (= 5 (ans "5")))
  (assert (= 55 (ans "10")))
  (assert (= 24278230 (ans "100"))))

(do
  (assert (= 0 (fib 0 0 [0 1])))
  (assert (= 1 (fib 1 1 [0 1])))
  (assert (= 5 (fib 5 5 [0 1])))
  (assert (= 55 (fib 10 10 [0 1])))
  (assert (= 218922995834555169026 (fib 99 99 [0 1])))
  (assert (= 354224848179261915075 (fib 100 100 [0 1]))))


; playground
(ans "101")
(fib2 100 100 [0 1])
(fib2 100 [0 1])

(reduce + (take-last 2 [2 3 4]))

(take-last 2 [2 3 4])
