(ns temp.core
  (:gen-class))

(= "HELLO WORLD" (.toUpperCase "hello world"))

(= (list :a :b :c) '(:a :b :c))

; list can be constructed in several ways
(= [:a :b :c] (list :a :b :c) (vec '(:a :b :c)) (vector :a :b :c))

(= '(:a) '(:a) '(:a))

; 7
(= [1 2 3 4] (conj [1 2 3] 4))

; 8
(= #{:a :b :c :d} (set '(:a :a :b :c :c :c :d :d)))
(set '(:a :a :b :c :c :c :d :d))

; 9
(= #{1 2 3 4} (conj #{1 4 3} 2))

; 10
(= 20 ((hash-map :a 10 :b 20 :c 30) :b))

; 11
(= {:a 1 :b 2 :c 3} (conj {:a 1} [:b 2] [:c 3]))

; 12
(= 3 (first '(3 2 1)))

; 13
(= [20 30 40] (rest [10 20 30 40]))

; 14
(= 8 ((fn add-five [x] (+ x 5)) 3))
(= 8 ((fn [x] (+ x 5)) 3))
(= 8 (#(+ % 5) 3))
(= 8 ((partial + 5) 3))

; 15
(= (* 2 2) 4)

; 16
(= (#(str "Hello, " % "!") "Dave") "Hello, Dave!")

; 17
(= '(6 7 8) (map #(+ % 5) '(1 2 3)))
(= '(6 7 8) (map (partial + 5) '(1 2 3)))

; 18
(= '(6 7) (filter #(> % 5) '(3 4 5 6 7)))

; 19
(= (last [1 2 3 4 5]) 5)
(= (#(get % (dec (count %))) [1 2]))

; 20
(= (#(second (reverse %)) (list 1 2 3 4 5)) 4)

; 21
(= ((fn [x y](last (take (inc y) x))) '(4 5 6 7) 2) 6)

; 22
((fn [x] (last-index-of (last x)) '(1 2 3 3 1)))

(#(inc (.lastIndexOf  % (last %))) '(1 2 3 3 1))

(.lastIndexOf '(1 2 3 4) 4)
(.lastIndexOf "kamil" (str(last "kamil")))


(str '(1 2 3))


(sequence "kamil")



(.lastIndexOf "kamil" (last (list"kamil")))
