(ns fwpd.core)
(def filename "/Users/kamilwroniewicz/_code/_github/_clojure-playground/braveclojure/fwpd/suspects.csv")

(slurp filename)

(def vamp-keys [:name :glitter-index])

(defn str->int
  [str]
  (Integer. str))

(def conversions {:name identity
                  :glitter-index str->int})

(defn convert
  [vamp-key value]
  ((get conversions vamp-key) value))

(defn parse
  "Convert a CSV into rows of columns"
  [string]
  (map #(clojure.string/split % #",")
       (clojure.string/split string #"\n")))

(parse (slurp filename))

(defn mapify
  "Return a seq of maps like {:name \"Edward Cullen\" :glitter-index 10}"
  [rows]
  (map (fn [unmapped-row]
         (reduce (fn [row-map [vamp-key value]]
                  (assoc row-map vamp-key (convert vamp-key value)))
                {}
                (map vector vamp-keys unmapped-row)))
       rows))


(first (mapify (parse (slurp filename))))


(defn glitter-filter
  [minimum-glitter records]
  (filter #(>= (:glitter-index %) minimum-glitter) records))

(glitter-filter 3 (mapify (parse (slurp filename))))


; my-version
(defn row-into-map
  [row]
  {:name (first row)
   :glitter-index (Integer. (second row))})

(defn rows-into-maps
  [rows]
  (#(map row-into-map %) rows))

(rows-into-maps (parse (slurp filename)))

; Turn the result of your glitter parser into a list of names.
(map #(:name %) (rows-into-maps (parse (slurp filename))))

(defn append
  [fn]
  (into '({:name "kamil" :glitter-index 9}) fn))

(append (glitter-filter 3 (mapify (parse (slurp filename)))))


; Write a function, validate, which will check that :name and :glitter-index are present
(defn validate-map
  [map]
  (and
   (contains? map :name)
   (contains? map :glitter-index)
   true))

(validate-map {:name "ku" :gitter-index 2})
(validate-map {:name "ku" :glitter-index 2})




; Write a function that will take your list of maps and convert it back to a CSV string. You’ll need to use the clojure.string/join function.


(save-to-csv
 "Take list of maps and save as csv"
 [list-of-maps]
 ())

(def col '({:name "Edward Cullen" :glitter-index 10} {:name "Bella Swan" :glitter-index 0} {:name "Charlie Swan" :glitter-index 0} {:name "Jacob Black" :glitter-index 3} {:name "Carlisle Cullen" :glitter-index 6}))
(clojure.string/join "\n" col)

(map #(clojure.string/join "\n" %) col)

(clojure.string/join "\n" (map join "," (map #(:name %) col) (map #(:glitter-index %) col)))




(apply reduce into {} col)


(defn into-str
  [map]
  (str (:name map) (str ",") (:glitter-index map)))

(clojure.string/join "\n " (map into-str col))
