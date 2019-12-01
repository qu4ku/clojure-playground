(ns hackerrank-fp.009-pentagonal-numbers)
; https://www.hackerrank.com/challenges/pentagonal-numbers

(def n (Integer/parseInt (read-line)))

(defn pentagonal [n]
  (/ 
   (* n (- (* 3 n) 1)) 
   2))

(doseq [_ (range n)]
    (println (pentagonal (Integer/parseInt (read-line)))))


; compact
(dotimes [t (read)]
  (let [n (read)]
    (println (/ (* n (- (* 3 n) 1))2))))


; solutions knowledge
(dotimes [t 4]
  (println "test"))

(Integer. "4")
