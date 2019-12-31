(ns hackerrank-fp.010-filter-elements)
; https://www.hackerrank.com/challenges/filter-elements


(use '[clojure.string :only (split join)])

(dotimes [t (Integer/parseInt (read-line))]
    (let [[_ K] (map #(Integer/parseInt %) (split (read-line) #" "))]
        arr (map #(Integer/parseInt %) (split (read-line) #" "))
        
        (do 
            (println K) 
            (println arr))))

(def K 2)
(def line '(4 5 2 5 4 3 1 3 4))

(println line)


(def lines "607733
733180
862004
986826
1107926
1232248
1356624
1483121
1608926
1734102
1861934
1989458
2114439
2236926
2363985
2490384
2615115
2740826
2867597
2992047
3116296
3242819
3366203
3489830
3615325
3740290
3865670
3990605
4115228
4239260
4368336
4496715
4621454
4747911
4873180
4996401
5122731
5251285
5376829
5501754
5625419
5748387
5871052
5999295
6126499
6254518
6380456
6380476")

(* 3 (count (clojure.string/split lines #"\n")))
