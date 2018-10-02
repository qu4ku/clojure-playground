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


; 1.5 converting between characters and integers

; character into its integer value
(int \a)
(map int "Hello World")
; integer into character
(char 97)
(map char (range 0x0410 0x042F))


; 1.6 formatting string
(def me {:first-name "kamil" :favarite-language "Clojure"})
(str "My name is " (:first-name me)
     ", and I really like to program in " (:favarite-language me))
(apply str (interpose " " [1 2.00 (/ 3 1) (/ 4 9)]))
(interpose " " [1 2.00 (/ 3 1) (/ 4 9)])

(defn filename [name i]
  (format "%03d-%s" i name))
(filename "my-awesome-file.txt" 42)

; create table using justificatoin
(defn tableify [row]
  (apply format "%-20s | %-20s | %-20s" row))
(def header ["First Name" "Last Name" "Employee ID"])
(def employees [["Ryan" "Neufeld", 2]
                ["Luke" "Vanderhart" 1]])
(->> (concat [header] employees)
     (map tableify)
     (mapv println))

; 1.7 searching a string by pattern

; any contiguous groups of numbers
(re-find #"\d+" "I've just finished reading Fahrenheit 451")
(re-find #"Bees" "Beads aren't cheap.")

; re-matches matches only if whole string matches
(re-find #"\w+" "my-params")
(re-matches #"\w+" "my-params")
(re-matches #"\w+" "justLetters")

; extract pattern into sequence
(re-seq #"\w+" "My Favorite Things")
(re-seq #"\d{3}-\d{4}" "My phone number is 555-1234.")

; extract all of the twitter usernames and hashtags in a tweet
(defn mentions [tweet]
  (re-seq #"(@|#)(\w+)" tweet))
(mentions "so long, @earth, and thangs for all the #fish. #goodbye")

; 1.9 performin find and replace on strings
(def about-me "My favorite color is green!")
(clojure.string/replace about-me "green" "red")

(defn de-canadianize [s]
  (clojure.string/replace s "ou" "o"))
(de-canadianize "Those Canadian neighbours have coloured behavioiur")

(defn linkify-comment
  "Add Markdown-style links for any GitHub issue numbers present in comment"
  [repo comment]
  (clojure.string/replace comment
                         #"(\d+)"
                         (str "[#$1](https://github.com/" repo "/issues/$1)")))
(linkify-comment "next/big-thing" "As soon as we fix #42 and #1337 we should be set to release!")

; linkify-comment rewritten with linkification as a separate function
(defn linkify [repo [full-match id]]
  (str "[" full-match "](https://github.com/" repo "/issues/" id ")"))
(defn linkify-comment [repo comment]
  (clojure.string/replace comment #"#(\d+)" (partial linkify repo)))
