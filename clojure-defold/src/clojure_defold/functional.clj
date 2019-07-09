(ns clojure-defold.functional
  (require [clojure.string :as str]
           [clojure-defold.fundamentals :as fundamentals]))

(defn transform-random-name [transform-fn]
  (transform-fn (rand-nth fundamentals/names)))
(transform-random-name identity)
(transform-random-name str/upper-case)
(transform-random-name fundamentals/mangle)

(defn make-adder [x]
  (fn [y]
    (+ x y)))
(def increase (make-adder 1))
(def decrease (make-adder -1))

(increase 4)
(decrease 5)

(take 5 (iterate increase 0))

(filter (fn [name]
          (str/ends-with? name "e")) 
        fundamentals/names)

(filter #(str/ends-with? % "e") 
        fundamentals/names)


(map (fn [name]
       (str/upper-case name))
     fundamentals/names)

(map (fn [name index]
       (str (str/upper-case name) index))
     fundamentals/names
     (range (count fundamentals/names)))

(keep (fn [x] x < 2) [3 4])

; mapcat can append multiple elements to the result 
(mapcat (fn [name]
          [(str/upper-case name)
           (str/lower-case name)])
        fundamentals/names)

(group-by (fn [name]
            (subs name 0 1))
          fundamentals/names)

(into (sorted-map)
      (group-by (fn [name]
                  (subs name 0 1))
                fundamentals/names))

(reduce (fn [sum n]
          (+ sum n))
        0
        [1 2 3])

(reductions (fn [sum n]
              (* sum n))
            1
            [1 2 3])

(defn our-filter [test-fn coll]
  (reduce (fn [result element]
            (if (test-fn element)
              (conj result element)
              result))
          (empty coll)
          coll))

(defn our-map [transform-fn coll]
  (reduce (fn [result element]
            (conj result (transform-fn element)))
          (empty coll)
          coll))

(our-map (fn [x]
           (+ x 1))
         [1 2 3])

(reduce + [1 2 3])

(reduce + 10 [1 2 3])

(def increase2 (partial + 1))
(increase2 10)

(defn filter-options [option->text options filter-text]
  (if (empty? filter-text)
    options
    (map :option
      (sort-by :score
               (keep (fn [option]
                       (when-some [score (str/index-of (option->text option)
                                                       filter-text)]
                         {:option option
                          :score score}))
                     options)))))

; same as 
(defn decorate-with-score [filtered-text option]
  (keep (fn [option]
          (when-some [score (str/index-of (option->text option)
                                          filter-text)]
            {:option option
             :score score}))))
        
(defn filter-options [option->text options filter-text]
  (if (empty? filter-text)
    options
    (->> options
        (keep (partial decorate-with-score filter-text option->text))
        (sort-by :score)
        (map :option))))
      
