(ns clojure-noob.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (do
    (println "no prompt here")
    (+ 1 2)))


(if true
  "text if true"
  "text if not true")

(if false
  "text if true"
  "text if not true")


(if true
  (do (println "Success!")
    "By Zeus's hammer!"))

(when true
  (println "Success!")
  "abra cadabra")

(nil? 1)
(nil? nil)

(if "some true"
  "first one will be executed")

(if nil
  "second one will be"
  "executed.")

(= 1 1)
(= nil nil)
(= 1 2)

(or false nil :first_true_executed :not_last)
(or (= 0 1) (= "if no true" "the last one is executed"))

(and :first_false_executed :if_not_false_the_last_one_executed)


(def failed-protagonist-names
  ["Lary Potter" "Some Other Guy"])

(defn error-message
  [severity]
  (str "OH GOD! IT'S A DISASTER! WE'RE "
       (if (= severity :mild)
         "MILDLY INCONVENIENCED!"
         "DOOOOMED!")))
(error-message :mild)

(def quote "\"He use a quote\"")
(println quote)

{}

{:first-name "Charlie" :last-name "McFisherman"}
(def map_name {:first-name "Charlie" :last-name "McFisherman"})

(get map_name :first-name)

(map_name :first-name)

(hash-map :a 1 :b 2)

(get {:a 0 :b 2} :a)

(get {:a 0 :b 1} :c "default value")

; to get inner map
(get-in {:a 0 :b {:c "ho hum"}} [:b :c])


(:a {:a 3 :b 3})

[2 3 4]

(get [3 4 5] 0)

(get ["a" {:name "some name"} "c"] 1)

(vector "creepy" "full" "moon")

(conj [1 2 3] 4)

(conj '(1 2 3) 4)

(nth '(1 3 4 5) 3)
(nth '(1 3 4 5) 10 "default")

(list 1 "two" {3 4})


; set
#{"kurt vonnegut" 20 :icicle}

(hash-set "kurt vonnegut" 20 :icicle)

(hash-set 1 2 1 2 22)

(conj #{:a :b} :b)

(set [3 3 4 4 4])

(contains? #{:a :b} :a)
(contains? #{:a :b} 3)
(contains? #{nil} nil)

(:a #{:a :b})

(get #{:a :b} :a)
(get #{:a nil} nil)
(get #{:a :b} "kurt")

(+ 1 2 3 4)
(* 1 2 3 4)
(first [1 2 3 4])

;returns +
(or + -)

((or + -) 1 2 3)

((and (= 1 1) +) 1 2 3)
((first [+ 0]) 1 2 3)

; not valid
(1 2 3 4)

(inc 1.1)
(map inc [0 1 2 3])

(+ (inc 199) (/ 100 (- 7 2)))


; functions
(defn too-enthusiastic
  "This is docstring"
  [argument]
  (str "OH. MY. GOD! " argument " YOU ARE BEAUTIFUL!"))
(too-enthusiastic "kamil")


; arity / default value
(defn x-chop
  "Describe the kind of chop you're inflicting on someone"
  ([name chop-type]
   (str "I " chop-type " chop" name "! Take that!"))
  ([name]
   (x-chop name "karate")))
(x-chop "kanye West" "slap")
(x-chop "Kanye East")


(defn codger-communication
  [whippersnapper]
  (str "Get off my lawn, " whippersnapper "!!!"))

(defn codger
  [& whippersnappers]
  (map codger-communication whippersnappers))

(codger "Billy" "Anne-Marie" "The Incredible Bulk")


(defn favorite-things
  [name & things]
  (str "Hi, " name ", here are my favorite thigns: "
       (clojure.string/join ", " things)))
(favorite-things "Jozeph" "gum" "shoes")

; Destructing
(defn my-first
  [[first-thing]]
  first-thing)
(my-first ["oven" "bike" "war-axe"])

(defn chooser
  [[first-choice second-choice & unimportant-choices]]
  (println (str "Your first choice is: " first-choice))
  (println (str "Your second choice is: " second-choice))
  (println (str "The rest: "
                (clojure.string/join ", " unimportant-choices))))

(chooser ["marmelade" "handsom jack" "pigeon" "aquaman"])


(defn announce-treasure-location
  [{lat :lat lng :lng}]
  (println (str "Treasure lat: " lat))
  (println (str "treasure lng: " lng)))
(announce-treasure-location {:lat 28.22 :lng 81.22})


(defn steer-ship
  [& args]
  (println (clojure.string/join " • " args)))
(defn announce-treasure-location
  [{:keys [lat lng] :as treasure-location}]
  ; (println (str "Treasure lat: " lat))
  ; (println (str "treasure lng: " lng))
  (steer-ship treasure-location))
(announce-treasure-location {:lat 28.22 :lng 81.22})


(defn illustrative-function
  []
  (+ 1 304)
  30
  "joe")
(illustrative-function)

(defn number-comment
  [x]
  (if (> x 6)
    "Oh my gosh! What a big number!"
    "That number's OK, I guess"))
(number-comment 5)
(number-comment 7)

; anonymous functions
(fn [param-list]
  function body)

(map (fn [name] (str "hi, " name))
     ["Darth Vader" "Mr. Magoo"])

((fn [x] (* x 3)) 8)

(def my-special-multiplier (fn [x] (* x 3)))
(my-special-multiplier 12)

; comact anonymous functions
#(* % 3)
(#(* % 3) 8)

(map #(str "Hi, " %)
     ["Darth Vader" "Mr. Robot"])

; % means %1 - first argument
(#(str %1 " and " % %2) "cornbread" "butter beans")

; identity returns the argument it's given without altering it
(#(identity %&) 1 "blarg" :yip)

; returning functions
(defn inc-maker
  "create a custom incrementor"
  [inc-by]
  #(+ % inc-by))
(def inc3 (inc-maker 3))
(inc3 7)



(def asym-hobbit-body-parts [{:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouht" :size 1}
                             {:name "nose" :size 1}
                             {:name "neck" :size 2}
                             {:name "left-shoulder" :size 3}
                             {:name "left-upper-arm" :size 3}
                             {:name "chest" :size 10}
                             {:name "back" :size 10}
                             {:name "left-forearm" :size 3}
                             {:name "abdomen" :size 6}
                             {:name "left-kidney" :size 1}
                             {:name "left-hand" :size 2}
                             {:name "left-knee" :size 2}
                             {:name "left-thigh" :size 4}
                             {:name "left-lower-leg" :size 3}
                             {:name "left-achilles" :size 1}
                             {:name "left-foot" :size 2}])

; tests
; (println asym-hobbit-body-parts)
(defn print-part
  [{:keys [name size]}]
  (println (clojure.string/join ", " [name size])))
; (print-part {:name "test-head" :size 10})

(for [part asym-hobbit-body-parts]
  ; (println part))
  ; (println part)
  (print-part [part]))

; real functions
(defn matching-part
  [part]
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
   :size (:size part)})

(defn symmetrize-body-parts
  "Expects a seq of maps that havea a :name and :size"
  [asym-body-parts]
  (loop [remaining-asym-parts asym-body-parts
         final-body-parts []]
    (if (empty? remaining-asym-parts)
      final-body-parts
      (let [[part & remaining] remaining-asym-parts]
        (recur remaining
          (into final-body-parts
                (set [part (matching-part part)])))))))
(symmetrize-body-parts asym-hobbit-body-parts)


(let [x 3]
  (inc x))

(def dalmatian-list
  ["Pongo" "Perdita" "Puppy 1" "Puppy 2"])
(let [dalmatians (take 2 dalmatian-list)]
  dalmatians)

(def x 0)
(let [x 1] x)

(def x 0)
(let [x (inc x)] x)

(let [[pongo & dalmatians] dalmatian-list]
  [pongo dalmatians])

(into [] (set [:a :a]))

(loop [iteration 0]
  (println (str "Iteration " iteration))
  (if (> iteration 4)
    (println "Goodbye!")
    (recur (inc iteration))))



(defn recursive-printer
  ([]
   (recursive-printer 0))
  ([iteration]
   (println iteration)
   (if (> iteration 3)
     (println "goodbye!")
     (recursive-printer (inc iteration)))))
(recursive-printer)

#"regular-expression"


; takes 1 2 for the first iteration
(reduce + [1 2 3 4])

; you can add initial value for the first Iteration
(reduce + 1 [2 3 4])
