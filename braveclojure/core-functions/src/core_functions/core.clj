(ns core-functions.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn titleize
  [topic]
  (str topic " for the Brave and True"))

(map titleize ["Hamsters" "Ragnarok"])
(map titleize ["Emapthy" "Decorating"])
(map #(titleize (second %)) {:uncomfortable-thing "Winking"})


(def node1 {:name "some" :val 2})
(println str (:name node1) "mapped!")

(seq '(1 2 3))
(seq [1 2 3])
(seq #{1 2 3})
(seq {:name "Billy" :occupation "Gravedigger"})
; (map second (seq {:name "Billy" :occupation "Gravedigger"}))

(into {} (seq {:a 1 :b 2 :c 3}))

(map inc [1 2 3])

(map str ["a" "b" "c"] ["A" "B" "C"])
(list (str "a" "B") (str "b" "B") (str "c" "C"))

(def human-consumption [8.1 7.3 6.6 5.0])
(def critter-consumption [0.0 0.2 0.3 1.1])
(defn unify-diet-data
  [human critter]
  {:human human
   :critter critter})
(map unify-diet-data human-consumption critter-consumption)
