(ns clojure-defold.collections)

[1 2 3]
([1 2 3] 0)

(let [my-map {:a 1 :b 2}]
  (my-map :a))

(let [my-vec [1 2 3]]
  (my-vec 2))

(let [my-set #{:a :b}]
  (my-set :a))

(let [special-vector (vector-of :double 1.2 3.0)]
  (special-vector 1))

(let [my-map2 {:name "Mats"}]
  (:name my-map2))

(get [1 2] 7)
(get [1 2] 7 :not-found)

(assoc [1 2] 0 3)

(assoc {:a 1 :b 2} :c 3)

(dissoc {:a 1 :b 2} :b)

(get-in {:a 1 :b {:d 3 :c 3}} [:b :c])
