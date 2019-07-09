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


(= ["hello" 2 3] [(str "hell" "o") 2 3])

(contains? #{"a" "b" "hello"}
           (str "hell" "o"))

(if (= "hello" (str "hell" "o"))
  "YES")

(or false true false)
(and true true false)
(and true true true)

(if (= 1 1)
  (do 
    (println "log no")
    (println "log noo")))

(when (= 1 1)
  (println "log no")
  (println "log noo"))

(defn acceptable-number? [n]
  (if (or (odd? n)
          (and (even? n)
               (< 10 n)))
    :acceptable
    :not-acceptable))

;; implement method on the interface
(Thread/setDefaultUncaughtExceptionHandler
 (reify Thread$UncaughtExceptionHandler
   (uncaughtException [this thread throwable]
      (println (.getMessage throwable)))))

; (proxy [KeyAdapter] []
;   (keyPressed [event]
;     (println "KeyPressed" this (.getKeyCode event))))
