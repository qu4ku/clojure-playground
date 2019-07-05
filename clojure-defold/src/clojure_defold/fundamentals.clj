(ns clojure-defold.fundamentals
  (:use [clojure.repl])
  (:require [clojure.string :as string]))

(println "Hello")
(println "Hello" 3 4)
(println "Hello"
         (+ 2 3)
         (slurp "/usr/share/dict/connectives"))

(doc slurp)

nil
true
false
\H \r \space
#".*" ;; evaluates to the pattern
:name 
[1 2 3]
{:a 1 :b 2}
#{:a :b}
'(1 2 3)
(println (string/upper-case "Hello"))

(def names (string/split-lines (slurp "/usr/share/dict/connectives")))

(def mangle
  (fn [string]
    (string/join "-" (string/reverse string))))

(mangle "kamil")

(defn demangle [string]
  (string/reverse (string/replace string "-" "")))
(demangle "l-i-m-a-k")

(defn palindrome? [word]
  (let [lower-case (string/lower-case word)
        reversed (string/reverse lower-case)]
    (= lower-case reversed)))

(palindrome? "kamil")
(palindrome? "anna")
