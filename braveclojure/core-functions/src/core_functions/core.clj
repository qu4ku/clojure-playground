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


(def sum #(reduce + %))
(def avg #(/ (sum %) (count %)))
(defn stats
  [numbers]
  (map #(% numbers) [sum count avg]))

(stats [3 4 10])
(stats [80 1 44 13 6])


(def identities [
                 {:alias "batman" :real "bruce wayne"}
                 {:alias "spider-man" :real "peter parker"}
                 {:alias "santa" :real "your mum"}])
(map :real identities)


(reduce (fn [new-map [key val]]
          (assoc new-map key (inc val)))
        {}
        {:max 30 :min 10})

(assoc (assoc {} :max (inc 30))
       :min (inc 10))

(take 3 [1])
(take 3 [1 2 3 4 54])


(drop 3 [1 2 3 4 5 6])


(def food-journal
  [{:month 1 :day 1 :human 5.3 :critter 2.3}
   {:month 1 :day 2 :human 5.1 :critter 2.0}
   {:month 2 :day 1 :human 4.9 :critter 2.1}
   {:month 2 :day 2 :human 5.0 :critter 2.5}
   {:month 3 :day 1 :human 4.2 :critter 3.3}
   {:month 3 :day 2 :human 4.0 :critter 3.8}
   {:month 4 :day 1 :human 3.7 :critter 3.9}
   {:month 4 :day 2 :human 3.7 :critter 3.6}])

(map :day food-journal)

(take-while #(< (:month %) 3) food-journal)
(drop-while #(< (:month %) 3) food-journal)
