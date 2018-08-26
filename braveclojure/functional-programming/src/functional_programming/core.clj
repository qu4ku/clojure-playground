(ns functional-programming.core
  (:gen-class))

(+ 1 2)

(defn wisdom
  [words]
  (str words ", Daniel-san"))

(wisdom "Always bathe on Fridays")

(defn year-end-evaluation
  []
  (if (> (rand) 0.5)
    "You get a raise!"
    "Better luck next year!"))

(year-end-evaluation)

(defn analyze-file
  [filename]
  (analysis (slurp filename)))

(defn analysis
  [text]
  (str "Character count: " (count text)))

(def great-baby-name "Rosmary")
great-baby-name

(let [great-baby-name "Sunny"]
  great-baby-name)
great-baby-name


(defn sum
  ([vals] (sum vals 0))
  ([vals accumulating-total]
   (if (empty? vals)
     accumulating-total
     (sum (rest vals) (+ (first vals) accumulating-total))


     (defn sum
       ([vals] (sum vals 0))
       ([vals accumulating-total]
        (if (empty? vals)
          accumulating-total
          (recur (rest vals) (+ (first vals) accumulating-total))))))))

(sum [10 20])


(require '[clojure.string :as s])
(defn clean
  [text]
  (s/replace (s/trim text) #"lol" "LOL"))

(clean "My boa constrictor is so sassy lol!   ")


; comp
((comp inc *) 2 3)

(def character
  {:name "Smooches McCutes"
   :attributes {:intelligence 10
                :strength 4
                :dexterity 5}})

(def c-int (comp :intelligence :attributes))
(def c-str (comp :strength :attributes))
(def c-dex (comp :dexterity :attributes))

(c-int character)
(c-str character)

; same as
((fn [c] (:strength (:attributes c))) character)

(defn spell-slots
  [char]
  (int (int (/ (c-int char) 2))))

(spell-slots character)

(def spell-slots-comp (comp int inc #(/ % 2) c-int))

(spell-slots-comp character)

(defn two-comp
  [f g]
  (fn [& args]
    (f (apply g args))))

(+ 3 (+ 5 8))

(+ 3 13)

(defn sleepy-identity
  "Returns the given value after 1 second"
  [x]
  (Thread/sleep 1000)
  x)

(sleepy-identity "Mr. Fantastico")

(sleepy-identity "Mr. Fantastico")

(def memo-sleepy-identity (memoize sleepy-identity))

(memo-sleepy-identity "Mr. T")

(memo-sleepy-identity "Mr. T")
