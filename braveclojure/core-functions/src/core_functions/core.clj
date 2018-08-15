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


(take-while #(< (:month %) 4)
            (drop-while #(< (:month %) 2) food-journal))

(filter #(< (:human %) 5) food-journal)

(filter #(< (:human %) 5)
        (filter #(> (:human %) 4) food-journal))

; checks if collection contains values that are true for certain function
(some #(> (:critter %) 5) food-journal)
(some #(< (:critter %) 4) food-journal)

(some #(and (> (:critter %) 3) %) food-journal)


(sort [3 1 32])

(sort-by count["aaa" "c" "bb"])

(sort (concat [1 2] [2 4] [34 5]))

(def vampire-database
  {0 {:makes-blood-puns? false :has-pulse? true :name "MCFishwisch"}
   1 {:makes-blood-puns? false :has-pulse? true :name "Someone"}
   2 {:makes-blood-puns? true :has-pulse? false :name "KingFisher"}
   3 {:makes-blood-puns? true :has-pulse? true :name "Mickey"}})


(defn vampire-related-details
  [social-security-number]
  (Thread/sleep 1000)
  (get vampire-database social-security-number))

(vampire-related-details 1)

(defn vampire?
  [record]
  (and (:makes-blood-puns? record)
       (not (:has-pulse? record))
       record))

(defn identify-vampire
  [social-security-numbers]
  (first (filter vampire?
                 (map vampire-related-details social-security-numbers))))

(time (vampire-related-details 0))

(time (def mapped-details (map vampire-related-details (range 0 1000000))))

(time (first mapped-details))

(time (identify-vampire (range 0 100000)))

; Infinite sequences
(concat (take 8 (repeat "na")) ["Batman!"])

(take 8 (repeat "na"))

(take 3 (repeatedly (fn [] (rand-int 10))))

(defn even-numbers
  ([] (even-numbers 0))
  ([n] (cons n (lazy-seq (even-numbers (+ n 2))))))

(take 10 (even-numbers))

(cons 0 '(2 5  6))


; the collection abstraction

(empty? [])
(empty? ["no!"])
(empty? [{} {} {}])


(map identity {:sunlight-reaction "Glitter!"})
(into {} (map identity {:sunlight-reaction "Glitter"}))
(map identity [:garlic :sesame-oil :fried-eggs])
(into {} (map identity {:sunlight-reaction "Glitter"}))

(map identity [:garlic :sesame-oil :fried-eggs])
(into [] (map identity [:garlic :sesame-oil :fried-eggs]))


(map identity [:garlic-clove :garlic-clove])
(into #{} (map identity [:garlic-clove :garlic-clove]))

(into #{} ["kamil" "kamil"])

(into {:favourite-emotion "gloomy"} [[:sunlight-reaction "glitter"]])

(into ["cherry"] '("pine" "spruce"))

(into {:favorite-animal "kitty"} {:least-favorite-smell "dog"
                                  :relationship-with-teenager "creep"})
(conj [0] [1])
(into [0] [1])
(into [0] [[1]])

(conj [0] 1)
(conj [0] 1 2 3 4)

(conj {:time "midnight"} [:place "ye olde cemetarium"])


(defn my-conj
  [target & additions]
  (into target additions))
(my-conj [0] 1 2 3)
(my-conj [0] [2])


(max 0 1 2)
(max [0 1 3])

(apply max [0 1 2])

(defn my-into
  [target additions]
  (apply conj target additions))
(my-into [0] [1 2 3])


(def add10 (partial + 10))
(add10 3)

(def add-missing-elements
  (partial conj ["water" "earth" "air"]))
(add-missing-elements "unobtainium" "adamantium")

(defn my-partial
  [partialized-fn & args]
  (fn [& more-args]
    (apply partialized-fn (into args more-args))))

(def add20 (my-partial + 20))
(add20 3)
