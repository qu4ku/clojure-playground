(ns hackerrank-fp.missing-numbers)

; https://www.hackerrank.com/challenges/missing-numbers-fp/problem

(def a "203 204 205 206 207 208 203 204 205 206")
(def b "203 204 204 205 206 207 205 208 203 206 205 206 204")


; solution 
(let [a (map #(Integer/parseInt %) (clojure.string/split a #" "))
      b (map #(Integer/parseInt %) (clojure.string/split b #" "))
      fa (frequencies a)
      fb (frequencies b)]
  (doseq [x (sort (keys fb))]
    (let [dif (- (get fb x) (get fa x 0))]  
      (if (<= 1 dif)
        (print x "")))))


; tests
(def dominator {:rock :paper :scissors :rock})
(def moves (into #{} (keys dominator)))
(empty? [])


; solutions analysis
(merge-with +
            {:a 10 :b 50}
            {:a 50})
(apply merge-with +
            [{:a 10 :b 100} 
             {:a 50}])
