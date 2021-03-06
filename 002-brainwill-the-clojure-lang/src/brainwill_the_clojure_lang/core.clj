(ns brainwill-the-clojure-lang.core
  (:gen-class))

(def char 'H')
(class char)
(println char)
(class 'H')
(class "H")
(class "HH")

(defn check-class [xs]
  (doseq [x xs]
    (println (str x ": " (class x)))))
(check-class ["k" 'k' :foo 4 4.5 '(1 2 3) [1 2 3] {:k 2 :w 3}])

(print "te" "st")
(print "te")

(loop [x 2 y []]
  (if (< x 5)
    (recur
      (inc x)
      (conj y (fn [] (println x))))
    y))

(conj ((fn [& args] (println args)) 3) 15) ; test

; quote
(foo (bar 7 4)) ; invokes foo with the bar resolved
(foo (quote (bar 7 4))) ; invokes foo with a list of the symbol bar and the values 7 and 4
(foo '(bar 7 4))

; exceptions
(throw exception)
(try body catch-clauses)
(catch class exception-binding body)
  
(try 
  (foo)
  (baz)
  (catch BadThing alice
    (bar alice))
  (catch OtherBadThing fred
    (carol fred)))
(finally
  (bob))

; var
(var symbol)

foo/bar ; returns the value mapped to bar in the namespace foo
(var foo/bar) ; returns the var mapped to bar in the namespace foo

; new special form 
(new class arguments)
(new java.io.File "myfile.dat") ; returns new instance of java.io.File by
                                ; invoking its constructor with the string as argument
(. class field) ; returns value of a static field of the class
(. java.lang.Math PI) ; returns value of static field PI of the java.lang.Math class
(. foo bar) ; return field bar of instance foo
(. (ack) bar) ; return field bar of instance returned by (ack)
(. class (method arguments)) ; invoke a static method
(. class (method arguments)) ; invoke an instance method
(. java.lang.Math (atan 5))
(. foo (bar)) ; invoke method bar of instance foo with no arguments

; the set! special form
; assigns value of an expression to the field of an instance or class specified by a dot form
(set! dot-form expression)
(set! (. java.lang.Math PI) 3) ; assign 3 to the static field PI of java.lang.Math class
(set! (. foo bar) 3) ; assign 3 to the field bar of the instance foo


; factorial
(defn factorial [n]
  (if (= n 0) 1
    (* n (factorial (dec n)))))

; works:
(factorial 20)

; integer overflow
(factorial 21)
; *' uses big int but it causes stack-overflow eventually
(defn factorial-bigint [n]
  (if (= n 0) 1
    (*' n (factorial-bigint (dec n)))))
(factorial-bigint 23)


; recur doesn't work because is not in a tail position
(defn factorial-bigint-recur [n]
  (if (= n 0) 1
    (* n (recur (dec n)))))

(factorial-bigint 23)
(defn factorial-bigint-loop [n]
  (if (= n 0) 1
    (loop [val n i n]
      (if (<= i 1) val
        (recur (*' val (dec i)) (dec i))))))


(defn fizz-buzz []
  (loop [i 1]
    (if (<= i 100)
      (do
        (if (and (= (rem i 3) 0) (= (rem i 5) 0))
          (println "FizzBuzz")
          (if (= (rem i 3) 0)
            (println "Fizz")
            (if (= (rem i 5) 0)
              (println "Buzz")
              (println i))))
        (recur (inc i))))))

(and (= (rem 6 3) 5) (= (rem 12 4) 5))
(or (= (rem 6 3) 2) (= (rem 12 4) 0))

(fizz-buzz)

; fizz-buzz using cond
(defn fizz-buzz-cond []
  (loop [i 1]
    (if (<= i 100)
      (do
        (cond
          (and (= (rem i 3) 0) (= (rem i 5) 0)) (println "FizzBuzz")
          (= (rem i 3) 0) (println "Fizz")
          (= (rem i 5) 0) (println "Buzz")
          :else (println i))
        (recur (inc i))))))


; COLLECTIONS

(def l [1 2 3 4 5])

(count l)
(list? l)
(vector? l)
(map? l)
(contains? l 5)
(contains? l 4)
(contains? l 1)
(contains? l 5)
; contains seems to return if index/key is in instead of if element is in
(def m {:a 1 :b 2})
(contains? m 1)
(contains? m :a)

(count {3 6 "hi" 3})  ; count of key/value pair in maps
(count l)

; conj : returns new collection with an added element or key-value pair
; assoc : returns new collection with added/modified value for given key or index
; dissoc : returns new map in which a key has been removed
; merge : returns a new map that comibnes the key-value pairs of one or more maps

(conj {3 6 "hi" 8} ["bye" 7])
(conj {3 6 "hi" 8} ["hi" 7])
(conj {3 6 "hi" 8} "bye" 7)
(conj {"hi" 8} {"bye" 8})

(println '(1 2))


(conj '(1 2 3) true)
(conj [1 2 3] true)

(assoc {3 6 "hi" 8} "bye" 7)
(assoc {3 6 "hi" 8} "hi" 5)

; index value
(assoc [1 2 3 4] 3 true)
(assoc [1 2 3 4] 2 true)
(assoc [1 2 3 4] 11 true)

; assoc doesn't work on lists
(assoc '(1 2 3) 2 true)

(dissoc {3 6 "hi" 8} "hi")
(dissoc {3 6 "hi" 8} "bye")

; dissoc doesn't work on lists or vectors. hm.
(dissoc [1 2 3 4] 3)
(dissoc '(1 2 3 4 3) 3)

(merge {3 6 "hi" 8})
(merge {3 6 "hi" 8} {"hi" 7 :yo 5})
(merge {3 6 "hi" 8} {"hi" 7 :yo 5} {:yo 4})

; core collection functions
; get : returns value for a given key or index
; pop : returns new collection without the first [vectors]/last [list] element / key-value pair
; peek : returns the element / key-value pair that would be removed by pop

(get {3 6 "hi" 8} "hi")
(get {3 6 "hi" 8} "bye")
(get '(1 2 3 4 5) 2)  ; get returns nil for a list
(get [1 2 3 4] 2)
(get [1 2 3 4] 11)

(pop [1 2 3 4])
(pop '(1 2 3 4))
(pop {2 5 "hi" 8})  ; pop doesn't works on maps

(peek [1 2 3 4])
(peek '(1 2 3 4))
(peek {2 3 4 5})  ; peek doesn't work on maps
; sequences
; first : returns first element of the collection or nil if empty
; rest : returns a sequence of all the elements except the first one

(seq [1 2 3 4 5])
(seq '(1 2 3 4 5))
(seq {3 5 "hi" 8})
(keys {3 5 "hi" 8})
(vals {3 6 "hi" 8})

(first {3 6 "hi" 8})
; same as:
(first (seq {3 6 "hi" 8}))

; cons is a sequence type which holds a value and a reference to another sequences
(def x (cons 3 nil))
(first x)
(rest x)
(def y (cons 4 '(7 8 9)))
(first y)
(rest y)
(cons 3 [5 3 4])

(cons 5 (cons 6 (cons 3 nil)))
(def z (cons 5 (cons 6 (cons 3 nil))))
(first z)
(rest z)
(first (rest z))
(rest (rest z))


; lazy sequences
; range : returns a lazy sequence of integers that span a specified range
; repeat : returns an infinite lazy seq that repeats a value
; repeatedly : returns an infinite lazy seq of vals generated by calls to a given function
; iterate : like repeatedly, but each call to the function takes the previous element as argument
; cycle : returns an infinite lazy seq that repeats the leements of a collection

; (range) from 0 to infinity
(range 3)
(range 4)
(range 2 11)
(range 2 11 2)
(range 11 2 -1)
(range 11 2 -3)
(range 2 5 0.5)

(take 3 (repeat 5))
(take 6 (repeat 3 5))
(repeat 3 5)
(repeat 3 "ha")

(take 3 (repeatedly rand))
(repeatedly 3 rand)

(take 10 (cycle [3 4 5]))
(take 10 (iterate dec 2))
(take 10 (iterate inc 0))

; The lazy-seq macro creates a lazy sequence from a body.
; The last expression of the body should return a sequence.
; The body is only run the first time we invoke first or rest on the lazy sequence.

; general form
; (lazy-seq body)

(defn zeros []
  (lazy-seq
   (cons 0 (zeros))))

(first (zeros))

(defn increasing [n]
  (lazy-seq (cons n (increasing (inc n)))))
(take 5 (increasing 5))

(take 4 (rest (increasing 2)))

; core sequence functions
; next : rest, but returns nil for sequences of zero or one elements
; nth : get, but works on sequences
; apply : invokes a function with arguments taken from a sequence
; map : returns a lazy sequence produced by invoking a funciton with arguments from seq
; reduce : returns result of invoking a funciton on successive pairs of elements
; reduction : returns a lazy sequence of the intermediate values that would be produced by reduce

(next [2 3 4])
(next [2])
(next [])
(rest [2])
(rest [])

(nth [1 2 3 4 5] 4)
(nth '(1 2 3 4 5 6) 3)
(get [1 2 3 4 5] 2)
(get '(1 2 3 4 5) 2)
(get [1 2] 10)
(nth [1 2] 10)
; get is faster
(nth [1 2] 5 "hi")
(apply + [7 -2 10])
(apply str ["yo" "ho"])
(apply str "hi" "bye" ["yo" "ho"])
(apply str {:a "yo" :b "ho"})
(apply str "hi" "bye" ["yo" "ho" ["no" "way"]])

(map + [1 2 3] [4 5 6 7 8])
(map * [1 2 3] [4 5 6] [7 8])

(reduce + [1 2 3 4 5])
(reduce + -20 [1 2 3 4 5])

(reductions + [2 3 4 5])
(reductions + -20 [2 3 4 5 6])


; filter : returns a lazy sequence of elements of another sequence for which a condition function returns true
; remove : like filter, but contains the elements for which the condition function returns false
; take : returns a lazy sequence of the first n elements of a sequence
; take-last : returns a lazy sequence of the last n elements of a sequence
; take-nth : returns a lazy sequence of every nth element of a sequence
; conccat : returns a lazy sequence that concatenates together multiple sequences

(filter even? [1 2 3 4 5 6 6])
(filter odd? [1 2 3 4 5 6 6])

(remove even? [1 2 3 4 5 6])
(remove odd? [1 2 3 4 5 6])

(take 3 [1 2 3 4 5 6])
(take-last 3 [1 2 3 4 5 6])
(take-nth 3 [1 2 3 4 5 6 7])

(concat [1 2] [3 4 5] [6])
(concat [1 [2 3]] [3 [4 5]] [6])
(concat 1 [2 3]) ; illegal

; core sequence functions

; interleave  : returns a lazy sequence that takes element form multiple collections round-robin
; interpose   : returns a lazy sequence in which a value is inserted in between elements of a sequence
; distinct    : returns a lazy sequence in which only the first occurrance of any value is retained
; reverse     : returns a list of the elements of a sequence in reverse order
; flatten     : returns a lazy sequence containing the elements of a sequence and its nested sequences
; sort        : returns a non-lazy sequence of the elements of another sequence in sorted order

(interleave [1 2 3] [1 2 5] [1 2 6 7])
(interleave [1 2] [2 3] [4 5 6])
(interpose 3 [7 8 9 10 11])

(distinct [1 1 4 2 3 1 4])
(reverse [1 2 3])

(flatten [1 2 [3 4 [5 6] 7 8] 9])

(sort [7 3 -5 2])
(compare 3 4)
(compare 4 3)
(compare 3 3)


; the in-ns function crates a namespace and makes it the current namespace
(in-ns 'foo')

; symbol-to-var (interned)
(def bar 4)
(defn zeros []
  (lazy-seq
   (cons 0 (zeros))))

; symbol-to-var (reffered)
(clojure.core/refer 'foo)

; symbol-to-class
(clojure.core/import java.util.Date)

; symbol-to-namespace
(clojure.core/alias 'super' 'supercalifragilisticexpialadocius)
(supe/foo) ;same as (supercalifragilisticexpialadocius/foo)


; read-eval a file with the load function
(load "bar/baz")

; the require function loads a lib by its symbolic name and ensures switch back
; namepsace before the load

(in-ns 'foo)
(require 'clojure.java.io)  ; loads clojure/java/io.clj
; .. foo is still current namespace
(require '(clojure.java [io :as bar]))


; the use function is like require but also refers the namespace of the same name

; loads clojure/java/io.clj and refers bar.baz in current namespace
(use 'clojure.java.io)


; the ns macro conveniently bundles the functionality of in-ns, require, use, and import.

(ns foo.bar
  (:require clojure.contrib.sql)
  (:use clojure.test)
  (:import java.util.Date java.util.Timer))


; any clojure object (except numbers, booleans, string, and nil)
; can have an associated map as metadata.
(with-meta [1 2] {:so-meta true})

(def x (with-meta [1 2] {:so-meta true}))
(meta x)
; another way to attach metadata
^{:so-meta true} [1 2]
(def y ^{:so-meta true} [1 2])
(:so-meta (meta y))

(def ^{:so-meta true} z 3)

(= ^{:so-meta true} [1 2] ^{:so-meta false} [1 2])


; a function can have multiple arities
(def foo
  (fn
    ([a b c]
     (+ a b c))
    ([a b]
     (- a b))))
(foo 1 2 3)
(foo 3 5)


; 'destructuring' alows us to conveniently bind elements of collecions to symbols.
(def s [1 2 3])

; without destructuring
(let [x (first s)
      y (second s)]
  (+ x y))

; with destructuring
(let [[x y] s]
  (+ x y))

(let [[x y z] s]
  (do-stuff x y z l)) ; + 1 2 3 nil

(def m {:y 3 :x 8 :z -5})

; with destructuring - works with maps too
(let [{x :x} m]
  (+ x))
(let [{x :x} m
      {y :y} m]
  (+ x y))

; nested
(def n {:y 3 :x [8 10] :z -5})
(let [{[a b] :x} n]
  (+ a b))

(defn foo [[a b]]
  (print a b))
(foo [6 4])

(def s (hash-set 5 8 "hi" 8))
(conj s 11)
(get s "hi")
(get s 24)
; to remove element:
(disj s 5)

; soreted-set
(def s (sorted-set 7 2 -5 9))
(first s)
(rest s)

; sort-by
(def s (sorted-set-by > 7 2 -5 9))
(first s)
(rest s)

; collection objects are functions
([8 5 13] 1)
({:x 9 :y 4} :y)
(:y {:x 9 :y 4})


; #(exp) is shorthand for a function with one expression in the body
#(print "hello")  ; (fn [] (print "hello"))
#(print %2 %1)  ; (fn [a b] (print b a))
#(print %2 %)  ; (fn [a b] (print b a))

; shorthand for a hash set
#{5 2 "hi"}
; but it doesn't accept duplicates
#{5 2 "hi" 5}
(hash-set 5 2 "hi" 5)

; #' is shorthand for the var special form.
#'x  ; (var x)


; ^symbol is shorthand for ^{:tag symbol}
^foo  ; ^{:tag foo}

; ^keyword is shorthand for ^{keyword true}
^:foo  ; ^{:foo true}


; rock-paper-scissors
; returns "r" for rock, "p" for paper, "s" for scissors
; returns nil on invalid input

(defn get-guess []
  ; we must use println instead of print to immediately flush the buffer, apparently
  (println "Play your hand: (r)ock, (p)aper, (s)cissors")
  (let [guess (read-line)]
    (if (get {"r" true "p" true "s" true} guess) guess)))

; returns 1 for player 1 wins, 2 for player 2 wins, and 0 for a tie
(defn winner [guess1 guess2]
  (let [guesses [guess1 guess2]]
    (cond
      (= guess1 guess2) 0
      (= guesses ["p" "r"]) 1
      (= guesses ["r" "p"]) 2
      (= guesses ["r" "s"]) 1
      (= guesses ["s" "r"]) 2
      (= guesses ["s" "p"]) 1
      (= guesses ["p" "s"]) 2)))

(defn play-hand []
  (let [computer-guess (rand-nth ["r" "p" "s"])
        play-guess (get-guess)
        winner (winner computer-guess player-guess)]
    (println "the computer guessed:" computer-guess)
    (println "You guessed:" player-guess)
    (cond
      (= player-guess nill) (println "Your entry was invalid.")
      (= winner 0) (println "Game tied!")
      (= winner 1) (println "Computer wins!")
      (= winner 2) (println "Player wins!"))))

(loop []
  (play-hand)
  (recure))




; TIC-TAC-TOE

(defn triple-winner? [triple]
  (if (every? #{:x} triple) :x
    (if (every? #{:o} triple) :o)))

(declare triples)

(defn winner?
  "returns :x if x's win, :o if o's win, otherwise nil if no winner (not necessarily a draw)"
  [board]
  (first (filter #{:x :o} (map triple-winner? (triples board)))))

(defn triples
  "return sequence of 'triples' (the rows, columns, and diagonals of the board)"
  [board]
  (concat
   (partition-all 3 board)                        ; the rows
   (list
    (take-nth 3 board)                            ; first column
    (take-nth 3 (drop 1 board))                   ; second column
    (take-nth 3 (drop 2 board))                   ; third column
    (take-nth 4 board)                            ; top-left to bottom-right
    (take-nth 2 (drop-last 2 (drop 2 board))))))  ; top-right to bottom-left diagonal

(defn full-board?
  "Check if all pieces on the board are full"
  [board]
  (every? #{:x :o} board)) ; check if every piec is an element from the soreted

(defn print-board [board]
  (let [board (map #(if (keyword? %) (subs (str %) 1) %) board)]
    (println (nth board 0) (nth board 1) (nth board 2))
    (println (nth board 3) (nth board 4) (nth board 5))
    (println (nth board 6) (nth board 7) (nth board 8))))

(defn player-name
  "translates :x or :o into "x" or "o""
  [player]
  (subs (str player) 1))

(def starting-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn get-move
  "Returns nil if invalid input or invalid slot number"
  [board]
  (let [input (try
                (. Integer parseInt (read-line))
                (catch Exception e nil))]
    (if (some #{input} board)
      input
      nil)))

(defn take-turn
  "'Player' as identified by their mark (:x or :o)"
  [player board]
  (println "Select your move, player" (player-name player) " (press 1-9 and hit enter):")
  (loop [move (get-move board)]
    (if move
      (assoc board (dec move) player)
      (do
        (println "move was invalid. Select yhour move, player" (str (player-name player) ":"))
        (recur (get-move board))))))

(defn play-game []
  (loop [board starting-board player-sequence player-sequence]
    (let [winner (winner? board)]
      (println "Current board:")
      (print-board board)
      (cond
        winner (println "Player" (player-name winner) "wins!")
        (full-board? board) (println "Game is a draw.")
        :else
          (recur
            (take-turn (first player-sequence) board)
            (rest player-sequence))))))


; REFERENCE TYPES

(def x 3)  ; in the current namespace, map symbol x to a new var holding the value 3
(def x 4)  ; reassign that var the value 4

; map foo to a new var holding a function that prints "hi"
(defn foo []
  (print "hi"))

(def ^{:dynamic ture} *x* 3)  ; create a dynamic var mapped to the symbol *x*

; general form
(binding [dynamic-var-symbol value] body)


(def ^{:dynamic true} *x* 3)
(defn foo []
  (print *x*))

(foo)

(binding [*x* 5]
  (foo))  ; prints 5
(foo)  ; prints 3

(def a (atom 3))
(def b (agent 9))
(def c (ref -7))

(deref a)
(deref b)
(deref c)

(swap! a + 4 1)  ; update atom
(send-off b + 4 1)  ; update agent
(alter c + 4 1)  ; exception

(dosync
  (alter c + 4 1))  ; update ref

(def x (ref 3))
(def y (ref 7))

(dosync
  (alter x + (deref y)))

(def a (agent 9))
(send-off a + 4 1)

(def a (agent 9))
(send-off a + 4 1)

(deref a)  ; returns either 9 or 14
(await a)
(deref a)  ; returns 14 (probabyly)



; create a macro with the macro
(defmacro if-not [condition expression]
  (list 'if condition nil expression))

; (if (> 35) nil (print("hi"))

(if-not (> 3 5) (print "hi"))


(defmacro if-not
  ([condition expression]
   (list 'if condition nil expression))
  ([condition expression2 expression3]
   (list 'if condition expression3 expression2)))

(if-not (> 3 5) (print "hi") (print "bye"))

; first rule of macro club: don't write macros!
; macros only run at compile time
; strange macros cand o strange things


; the gensym function generates a unique symbol

; returns symbol G_x, where x is some number that has not been previously used
(gensym)

; returns symbol foox, where x is some number that has not been previously used
(gensym "foo")

(defmacro make-fn [exp]
  (list 'fn '[foo] (list 'foo exp)))
(make-fn bar)
(make-fn foo)


(defmacro make-fn [exp]
  (let [x (gensym)]
    (list 'fn (vector x) (list x exp))))

(make-fn bar)
(make-fn foo)
