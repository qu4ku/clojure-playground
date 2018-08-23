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
