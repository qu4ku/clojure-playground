(ns clojure-cookbook.core
  (:gen-class)
  (:require [clojure.string :as str]))

; (require '[clojure.string :as str])


(str/blank? "")

(clojure.string/capitalize "this is a proper sentence.")
(clojure.string/lower-case "COLUMN_HEADER_ONE")

; characters like marks and digits will remain untouched
(clojure.string/lower-case "!!@#%#@%^^22")

(clojure.string/trim "\tBacon ipsum dolor sit.\n")

; Collapse whitespace into a single space
(clojure.string/replace "Who\t\nput   all this\fwhitespace here?" #"\s+" " ")

(str/replace "Look Ma, no hands" "hands" "long namespace prefixes")
(str/triml " Column Header\t")
(str/trimr "\t\t* Second-level bullet.\n")

; 1.3 Building string  from parts
(str "John" " " "Doe")
(def first-name "John")
(def last-name "Doe")
(def age 42)
(str last-name ", " first-name " - age: " age)

; use apply with str to concatenate a collection of values into a single string:
(def why_list [\W \h \y])
(apply str "ROT13 " [\W \h \y])
(str why_list)

; or reconstitute a file from lines

(def lines ["#! /bin/bash\n" "du -a ./ | sort -n -r\n"])
(apply str lines)


; 1.4 Treating a string as a sequence of characters
(seq "Hello, world!")

; You don't need to cal seq every time.
; Coun frequencies of eqch character in a string
(frequencies (str/lower-case "An adult all about A's"))

; Is every letter in a string capitalized?
(defn yelling? [s]
  (every? #(or (not (Character/isLetter %))
               (Character/isUpperCase %))
          s))
(yelling? "LOUD NOISES!")
(yelling? "Take a DEEP breath.")
