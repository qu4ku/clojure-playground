(ns hackerrank-fp.010-filter-elements)
; https://www.hackerrank.com/challenges/filter-elements


(use '[clojure.string :only (split join)])

(dotimes [t (Integer/parseInt (read-line))]
    (let [[_ K] (map #(Integer/parseInt %) (split (read-line) #" "))]
        arr (map #(Integer/parseInt %) (split (read-line) #" "))
        
        (do 
            (println K) 
            (println arr))))
