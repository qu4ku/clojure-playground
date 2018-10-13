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


; 1.10 splittin a stling into parts

(clojure.string/split "HEADER1,HEADER2,HEADER3" #",")
(clojure.string/split "Spaces      Newlines\n\n" #"\s+")

; splitting on whitespace without an explicit limit performs an implicit triml
(clojure.string/split "field1    field2   field3  " #"\s+")

; if you want every match, including trailing empty ones
(clojure.string/split "ryan,neufeld," #"," -1)

(def data-delimiters #"[ :-]")
(def date "2013-04-05 14:39")
(clojure.string/split date data-delimiters)
; limit of 1 returns full string
(clojure.string/split date data-delimiters 1)
(clojure.string/split date data-delimiters 2)
(clojure.string/split date data-delimiters 3)


; 1.11 pluralizing string based on quantity
; lein try inflections
(require '[inflections.core :as inf])
(inf/pluralize 1 "monkey")
(inf/pluralize 12 "monkey")
(inf/pluralize 1 "box" "boxen")
(inf/pluralize 22 "box" "boxen")
(inf/plural "box")
; words ending in 'ox' pluralize with 'en' (and not 'es')
(inf/plural! #"(ox)(?i)$" "$1en")
(inf/plural "box")
(inf/pluralize 2 "box")
; convert snake_case to CamelCase
; (inf/camelize "my_object") ; doesn't work
(inf/parameterize "My most favorite URL!")
(inf/ordinalize 42)

; 1.12 converting between string, symbols, and keywords
; to convert from string to a symbol
(symbol "valid?")
; from symbol to string
(str 'valid?)
; keyword to str
(name :triumph)
(str :triumph)
; from a string or symbol to keyword
(keyword "fantastic")
(keyword 'fantastic')
(symbol (name :wonderful))

(name :user/valid?)
(str :user/valid?)
(namespace :user/valid?)
(.substring (str :user/valid?) 1) ; takes substring starting from index 1
(keyword 'produce/onions)
(symbol (.substring (str :produce/onions) 1))
(keyword "bakery" "bagels")
(symbol "bakery" "cakes")


; 1.13 maintaining accuracy with extremely large/small numbers
; avogardo's number
6.0221413e23
; 1 angstrom in meters
1e-10

(* 9999 9999 9999 9999 9999)
; use quote version of numeric operations like - or * to allow Big types
; clojure will use BigInteger if needed
(*' 9999 9999 9999 9999 9999)

; for floats you need to use BigDecimal
; bot BigInteger and BigDecimal are "contagious"
; = it infects all of the follow-on results
(* 2 Double/MAX_VALUE)
(* 2 (bigdec Double/MAX_VALUE))


; 1.14 working with rational numbers
(/ 1 3)
(type (/ 1 3))
(* 3 (/ 1 3))
; use rationalize on doubles to coerce them to rationals to avoid losing precion
(+ (/ 1 3) 0.3)
(rationalize 0.3)
(+ (/ 1 3) (rationalize 0.3))
(rationalize 0.999999)


; 1.15 parsing numbers
(Integer/parseInt "-42")
(Double/parseDouble "3.14")
(rationalize (Double/parseDouble "3.14"))
; when the numbers you are parsin are either abnormally large or abnormaly precise,
; you'll need to parse them with BigInteger or BigDecimal
(bigdec "3.430932974329874982374982739847293847298374")
(bigint "3284723894798237498237498238749872398472938479273")


; 1.16 truncating and rounding numbers
(int 2.0001)
(int 2.9999)
(Math/round 2.0001)
(Math/round 2.9999)
(Math/round 2.5000)
(Math/round 2.4999)

; Math/floor ~ceil return float
(Math/ceil 2.0001)
(Math/floor 2.999)
(int (Math/floor 2.999))

(with-precision 3 (/ 7M 9))
(with-precision 1 (/ 7M 9))
(with-precision 1 :rounding FLOOR (/ 7M 9))

; gotcha - you need to convert to BigDecimal
(with-precision 3 (/ 1 3))
(with-precision 3 (bigdec(/ 1 3)))


; 1.17 performing fuzzy comparison
; by-hand implementation
(defn fuzzy= [tolerance x y]
  (let [diff (Math/abs (- x y))]
    (< diff tolerance)))
(fuzzy= 0.01 10 10.000000001)
(fuzzy= 0.01 10 10.1)
(- 0.22 0.23)
(- 0.23 0.24)
; if absolute precision is what you're after, use BigDecimal or BigInt
(def equal-within-ten? (partial fuzzy= 10))
(equal-within-ten? 100 109)
(equal-within-ten? 100 110)


;; partial
(defn sum [x y]
  (+ x y))
(sum 2 5)
(map (partial sum 10) [1 2 20 30])
(reduce + [1 2 3 4])
(reduce + [1 2 3 4] [5 6 7 8]) ; invalid arguments
(map (partial reduce +)[[1 2 3 4] [5 6 7 8]])

(defn fuzzy-comparator [tolerance]
  (fn [x y]
    (if (fuzzy= tolerance x y)
      0
      (compare x y))))

(sort (fuzzy-comparator 10) [100 11 150 10 8])

(sort [100 11 150 10 8])


; 1.18 performing trigonometry
; all of the trigonometric functions are accessible via java.long.Math

; calculation sin(a + b): sin(a + b) = sin a * cos b cos a
(defn sin-plus [a b]
  (+
   (* (Math/sin a) (Math/cos b))
   (* (Math/sin b) (Math/cos a))))
(sin-plus 0.1 0.3)

; calculating the distance in kilometers between two poins on earth
(def earth-radius 6371.009)

(defn degrees->radians [point]
  (mapv #(Math/toRadians %) point))

(defn distance-between
  "Calculate the distance in km between two points on Earth. Earch point is
  a pair of degrees latitude and longitude, in that order."
  ([p1 p2] (distance-between p1 p2 earth-radius))
  ([p1 p2 radius]
   (let [[lat1 long1] (degrees->radians p1)
         [lat2 long2] (degrees->radians p2)]
     (* radius
        (Math/acos (+ (* (Math/sin lat1) (Math/sin lat2))
                      (* (Math/cos lat1)
                         (Math/cos lat1)
                         (Math/cos lat2)
                         (Math/cos (- long1 long2)))))))))
(distance-between [49.2000 -98.1000] [35.9939 -78.8989])


; 1.19 inputting and outputting integers with different bases

; Specify the base or radix of a literal number by prefixing it with the radix
; numberand the letter r

2r101010
3r1120
16r2a
36rABUNCH

(Integer/toString 13 2)
(Integer/toString 42 16)
(Integer/toString 35 36)

; unlike the ordering of most clojure functions, this method thakes an integer
; first and the optional base second, making it hard to partially apply
(defn to-base [radix n]
  (Integer/toString n radix))
(def base-two (partial to-base 2))
(base-two 9001)


; 1.20 calculating statistics on collections of nmbers
(defn mean [coll]
  (let [sum (apply + coll)
        count (count coll)]
    (if (pos? count)
      (/ sum count)
      0)))
(mean [1 2 3 4])
(bigdec (mean [1 2 3 4]))
(mean [1 1.6 7.4 10])
(mean [])

(reduce + [1 2 3 4])
(apply + [1 2 3 4])

(defn median [coll]
  (let [sorted (sort coll)
        cnt (count sorted)
        halfway (int (/ cnt 2))]
    (if (odd? cnt)
      (nth sorted halfway)
      (let [bottom (dec halfway)
            bottom-val (nth sorted bottom)
            top-val (nth sorted halfway)]
        (mean [bottom-val top-val])))))
(median [5 2 4 1 3])
(median [7 0 2 4])

(defn mode [coll]
  (let [freqs (frequencies coll)
        occurances (group-by second freqs)
        modes (last (sort occurances))
        modes (->> modes
                   second
                   (map first))]
    modes))

(mode [:alan :bob :alan :greg])
(mode [:smith :carpenter :doe :smith :doe])

(frequencies [1 2 2 3 4 5 1 1 1])
(get (frequencies [1 2 2 3 4 5 1 1 1]) 1)
((frequencies [1 2 2 3 4 5 1 1 1]) 1)
(group-by second (frequencies [1 2 2 3 4 5 1 1 1]))

(filter #{1} [1 2 3])

(defn standard-deviation [coll]
  (let [avg (mean coll)
        squares (for [x coll]
                  (let [x-avg (- x avg)]
                    (* x-avg x-avg)))
        total (count coll)]
    (-> (/ (apply + squares)
           (- total 1))
        (Math/sqrt))))

(standard-deviation [1 3 4 55 4])


; 1.21 performing bitwise operations
; modeling a subset of unix filesystem flags in a single integer
(def fs-flags [:owner-read :owner-write
               :group-read :group-write
               :global-read :global-write])
(def bitmap (zipmap fs-flags
                    (map (partial bit-shift-left 1) (range))))
bitmap
(zipmap fs-flags (map inc (range)))

(defn permissions-int [& flags]
  (reduce bit-or 0 (map bitmap flags)))
(def owner-only (permissions-int :owner-read :owner-write))
(Integer/toBinaryString owner-only)
(def read-only (permissions-int :owner-read :group-read :global-read))
(Integer/toBinaryString read-only)
(defn able-to? [permissions flag]
  (not= 0 (bit-and permissions (bitmap flag))))
(able-to? read-only :global-read)
(able-to? read-only :global-write)

; modeling a subset of unix filesystem flags in a signle integer
(def fs-flags [:owner-read :owner-write
               :group-read :group-write
               :global-read :global-write])
(def bitmap (zipmap fs-flags
                    (map #(.indexOf fs-flags %) fs-flags)))
(def no-permissions 0)
(def owner-read (bit-set no-permissions (:owner-read bitmap)))
(Integer/toBinaryString owner-read)

(def anything (reduce #(bit-set %1 (bitmap %2)) no-permissions fs-flags))
(Integer/toBinaryString anything)


; 1.22 generating random numbers
(rand)
(rand)
; rand-int for random integers
; emulating a six-sided die
(defn roll-d6 []
  (inc (rand-int 6)))
(roll-d6)

; random from collection
(rand-nth [1 2 3])
(rand-nth '(:a :b :c))
; whis won't work for sets or hash maps, however
; need to convert into sequence
(rand-nth (seq #{:heads :tails}))
; to randomly sort a collection
(shuffle [1 2 3 4 5 6])


; 1.23 working with currency
(require '[clojurewerkz.money.amounts :as ma])
(require '[clojurewerkz.money.currencies :as mc])

(def two (ma/amount-of mc/USD 2))
two
(ma/plus two two)
(ma/minus two two)
(ma/< two (ma/amount-of mc/USD 2.01))
(ma/total [two two two two])

; don't trust build in numerical types with handling currency
(- 0.23 0.24)

(ma/round (ma/amount-of mc/USD 3.14) 0 :down)
(ma/convert-to (ma/amount-of mc/CAD 152.34) mc/USD 1.01696 :down)


; 1.24 generating unique ids
(java.util.UUID/randomUUID)


; 1.25 obtaining the current data and time
(defn now []
  (java.util.Date.))
(now)
(now)
(System/currentTimeMillis)
(System/currentTimeMillis)

(require '[clj-time.core :as t])
(t/now)
(require '[clj-time.local :as tl])
(tl/local-now)


; 1.26 representing dates as literals
(def date_now (java.util.Date.))
(println date_now)

; a faux communication channel that "receives" edn strings
(require 'clojure.edn)
(import '[java.io PushbackReader StringReader])

(defn remote-server-receive-date []
  (-> "#inst \"1987-02-18T18:00:00.000-00:00\""
      (StringReader.)
      (PushbackReader.)))
(clojure.edn/read (remote-server-receive-date))

(def instant "#inst \"1987-02-18T18:00:00.000-00:00\"")

(binding [*data-readers* {'inst clojure.instant/read-instant-calendar}]
  (class (read-string instant)))
(binding [*data-readers* {'inst clojure.instant/read-instant-timestamp}]
  (class (read-string instant)))


; 1.27 parsing dates and times using clj-time
(require '[clj-time.format :as tf])
(def government-forms-date (tf/formatter "MM/dd/yy"))
(tf/parse government-forms-date "02/18/87")
(def wonky-format (tf/formatter "HH:mm:ss:SS' on 'yyy-MM-dd"))
(tf/parse wonky-format "16:13:49:06 on 2013-04-06")

(class wonky-format)


; 1.28 formatting dates using clj-time
(require '[clj-time.format :as tf])
(require '[clj-time.core :as t])
(tf/unparse (tf/formatters :date) (t/now))
(t/now)
(def my-format (tf/formatter "MMM d, yyyy 'at' hh:mm"))
(tf/unparse my-format (t/now))
(def abbr-day (tf/formatter "E"))
(def full-day (tf/formatter "EEEE"))
(tf/unparse abbr-day (t/now))
(tf/unparse full-day (t/now))

; if you need native java date/time instances
(require '[clj-time.coerce :as tc])
(tc/from-date (java.util.Date.))
(tc/to-date (t/now))
(tc/to-long (t/now))


; 1.29 comparing dates
(defn now [] (java.util.Date.))
(def one-second-ago (now))
(Thread/sleep 1000)

; it's necessary to use the compare. can't use <=, >, etc.
; first argument is grater than second
(compare (now) one-second-ago)
; first argument is less
(compare one-second-ago (now))
; 0 for equality
(compare one-second-ago one-second-ago)

; clojure sort use compare under the hood


; 1.30 calculating the length of a time interval
(def since-april-first
  (t/interval (t/date-time 2013 04 01) (t/now)))
(t/in-days since-april-first)
(t/in-years since-april-first)

; years since the moon landing
(t/in-years (t/interval (t/date-time 1969 07 20) (t/now)))

; days from feb 28 to march 1 in 2012 (a leap year)
(t/in-days (t/interval (t/date-time 2012 02 28)
                       (t/date-time 2012 03 01)))
; and in a non-leap year
(t/in-days (t/interval (t/date-time 2018 02 28)
                      (t/date-time 2018 03 01)))


; 1.31 generating ranges of dates and times
(require '[clj-time.periodic :as tp])
(defn time-range
  "Return a lazy sequence of DateTimes from start to end,
  incremented by 'step' units of time."
  [start end step]
  (let [inf-range (tp/periodic-seq start step)
        below-end? (fn [t] (t/within? (t/interval start end) t))]
    (take-while below-end? inf-range)))

(def months-of-the-year (time-range (t/date-time 2012 01)
                                    (t/date-time 2013 01)
                                    (t/months 1)))
; months-of-the-year is an unrealized lazy sequence
(realized? months-of-the-year)
(count months-of-the-year)
(realized? months-of-the-year)
; there is time-range in clojure


; 1.32 generating ranges of dates and times using native java types
(def daily-from-epoch
  (let [start-date (java.util.GregorianCalendar. 1970 0 0 0 0)]
    (repeatedly
     (fn []
       (.add start-date java.util.Calendar/DAY_OF_YEAR 1)
       (.clone start-date)))))
(take 2 (drop 57 daily-from-epoch))

(defn daily-from-year [& [start-year]]
  (let [start-date (java.util.GregorianCalendar. (or start-year 1970) 0 0 0 0)]
    (repeatedly
     (fn []
       (.add start-date java.util.Calendar/DAY_OF_YEAR 1)
       (.clone start-date)))))
(take 3 (daily-from-year 1999))
(take 2 (daily-from-year))

(def end-of-days (take 3 (drop 353 (daily-from-year 2012))))
(def cal-format (java.text.SimpleDateFormat. "EEE M/d/yyyy"))
(def iso8601-format (java.text.SimpleDateFormat. "yyyy-MM-dd'T'HH:mm:ss'Z'"))

(map #(.format cal-format (.getTime %)) end-of-days)
(map #(.format iso8601-format (.getTime %)) end-of-days)
