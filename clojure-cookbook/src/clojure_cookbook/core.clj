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

(defn gregorian-day-seq
  "Return an infinite sequence of formatted Gregorian day strings
  starting on January 1st of the given year (default 1970)"
  [& [start-year date-format]]
  (let [gd-format (java.text.SimpleDateFormat. (or date-format "EE M/d/yyyy"))
        start-date (java.util.GregorianCalendar. (or start-year 1970) 0 0 0 0)]
    (repeatedly
     (fn []
       (.add start-date java.util.Calendar/DAY_OF_YEAR 1)
       (.format gd-format (.getTime start-date))))))

; selects last sun of a year
(def y2k (take 365 (gregorian-day-seq 2000)))
(last (filter #(.startsWith % "Sun") y2k))


; 1.33 retrieving dates relative to one another
(require '[clj-time.core :as t])

; 1.day.from_now 
(-> 1
    t/days
    t/from-now)
(-> 3
    t/days
    t/ago)

(t/plus (t/now) (t/years 1))
(t/minus (t/date-time 2053 12 25) (t/years 2))
    

; 1.34 working with time zones
(def bday (t/from-time-zone (t/date-time 1980 10 20 18)
                            (t/time-zone-for-offset 2)))
bday
; what time was it in Brisbane when I was born?
(def australia-bday
  (t/to-time-zone bday (t/time-zone-for-id "Australia/Brisbane")))
australia-bday
; yet they are the same instant in time.
(compare bday australia-bday)

 
(def la-tz (t/time-zone-for-id "America/Los_Angeles"))

; in winter
(t/from-time-zone (t/date-time 2012 10 10) la-tz)
; in summer
(t/from-time-zone (t/date-time 2012 06 01) la-tz)


; 1.35 converting a unix timestamp to a date
(defn from-unix-time
  "Return a Java Date object form a Unix time representation expressed
  in whole seconds."
  [unix-time]
  (java.util.Date. unix-time))

(from-unix-time 1366127520000)

; the same but using clj-time
(require '[clj-time.coerce :as tc])
(defn datetime-from-unix-time
  [unix-time]
  (tc/from-long unix-time))
(datetime-from-unix-time 1366127520000)


; 1.36 converting a date to a unix timestamp
(defn to-unix-time [date]
  (.getTime date))

(def date2 (read-string "#inst \"2013-04-16T15:52:00.000-00:00\""))
(to-unix-time date2)

; same but with clj-time
(defn datetime-to-unix-time [datetime]
  (tc/to-long datetime))
(def datetime (clj-time.core/date-time 2013 04 15 15 52))
(datetime-to-unix-time datetime)


;; CHAPTER 2. COMPOSITE DATA 

; 2.1 Crating a list 
'(1 :2 "3")
(list 1 :2 "3")
; it's better to us list func. quoted lists also prevents from evealueating
(def x 2)
'(1 x) ; -> (1 x)
(list 1 x)

'()


; 2.2 crating a list from an existing data structure
; there are two ways 
(def ls_structure [1 2 3 4 5])
(apply list ls_structure)
(into '() ls_structure)
(into [] ls_structure)
; into sequentialy conjoins a sequence
; into utilizes clojure transients, which provide a coniserable performance 
; improvement


; 2.3 adding an item to a list
(conj (list 1 2 3) 4)
(conj (list 1 2 3) 4 5)
(conj [1 2 3] 4 5)
; conj add to the begining of the list and to the end of the vector
; it returns the same data structure

; cons add always on the beginning of the sequence and returns sequence
(cons 4 (list 1 2 3))
(class (cons 4 (list 1 2 3)))
(cons 4 [1 2 3])


; 2.4 removing an item from a list
(pop '(1 2 3))
(rest '(1 2 3))
(pop '()) ; illegal
(rest '())
(pop [1 2 3])
; pop works like conj - it deletes first if a list and last if a vector
; list doesn't support deleting from the middle/end - if needed you have to
; convert it to the different type and back to the list


; 2.5 testing for a list

; instead of using list? use seq? - 
(list? (list 1 2 3 4))
(seq? (list 1 2 3 4))
; cons looks like a list, but is actually a Cons
(list? (cons 1 '(2 3)))
(type (cons 1 '(2 3)))
(seq? (cons 1 '(2 3)))
(list? (range 3))
(seq? (range 3))
(type (range 3))


; 2.6 crating a vector
[1 :2 "3"]
(class [1 :2 "3"])
(vector 1 :2 "3")

; to construct a vector from an existing data structure use vec
(vec '(1 :2 "3"))
; alternatively you could use into
(into [] '(1 :2 "3"))


; 2.7 adding an item to a vector
(conj [1 2 3] 4)
(conj [1 2 3] 4 5)

(assoc [:a :b :c] 3 :x) ; you can assoc to the end
; and if index is grater than the length it will throw an error


; 2.8 removing an item from a vector
(pop [1 2 3 4]) ; removes from the end
(pop '(1 2 3 4))

; subvec romoves items from a boundries (inclusive, exclusive)
(subvec [:a :b :c :d] 1)
(subvec [:a :b :c :d] 1 3)
; it's teh only way to efficiently remove items from the beginning of a vector
; you can use rest or drop but these are sequence operations and they return
; is only guaranteed to be a sequence


; 2.9 getting the value at an index
; nth works on all sequences
(nth [:a :b :c :d] 2)
(nth [:a :b :c] 4) ; IndexOutOfBoundsException
(nth [:a :b :c] 4 :not-found)

; using vectors as functions of their indexes
([:a :b :c] 2) ; -> IndexOutOfBoundsException

; using get
(get [:a :b :c] 2)
(get [:a :b :c] 5) ; -> nill
(get [:a :b :c] 5 :not-found)

; 2.10 setting the value at an index
(assoc [:a :b :c] 1 :x)
(assoc [:a :b :c] 0 :y 2 :z)
; throws IndexOutOfBoundsException 


; 2.11 creating a set
#{:a :b :c}
(class #{:a :b :c})
#{:a :b :c :c} ; error

(hash-set :a :b :c)
(apply hash-set :a [:b :c])
(apply hash-set :a [:b [:c :d]])
(set "hello")
(seq "hello")

; alternatively
(into #{} [:a :b :c :c])
(into #{:a } [:a :b :c])
; into is faster for large collections of objects
(def largeseq (doall (range 1e5)))
(time (dotimes [_ 100] (set largeseq)))
(time (dotimes [_ 100] (into #{} largeseq)))

(sorted-set 99 4 32 7)
(into (sorted-set) "the quick brown fox jumps ove the lazy dog")

(def descending-set (sorted-set-by > 1 2 3))
(into descending-set [-1 20])


; 2.12 adding and removing items from sets
(conj #{:a :b :c} :d)
(conj #{:a :b :c} :d :e)
(disj #{:a :b :c} :c)
(disj #{:a :b :c} :a :b)


; 2.13 testing set membership
(contains? #{:red :white :green} :blue)
(contains? #{:red :white :green} :white)

(get #{:red :white :green} :blue)
(get #{:red :white :green} :white)

; set can be functions
(#{:red :white :green} :blue)
(#{:red :white :green} :white)

; keywords behave the same way as with maps:
(:white #{:red :white :green})
(:black #{:red :white :green})

 ; using set as a function, filter here:
(take 10
      (filter #{1 2 3}
              (repeatedly #(rand-int 10))))


; 2.14 using set operations
(clojure.set/union #{:red :white} #{:white :blue} #{:blue :green})
(clojure.set/intersection #{:red :white :blue}
                          #{:red :blue :green}
                          #{:yellow :blue :red})
(clojure.set/difference #{:red :white :blue :yellow}
                        #{:red :blue}
                        #{:white})

; subset returns true if the first argument is a subset of the second
(clojure.set/subset? #{:blue :white}
                     #{:red :white :blue})
(clojure.set/subset? #{:blue :black}
                     #{:red :white :blue})


; 2.15 creating a map
{:name ""
 :class :barbarian
 :race :half-orc
 :level 20
 :skills [:bashing :hacking :smashing]}

(array-map)
(sorted-map :key2 "val1" :key1 "val1")
; if key is used multiple time the last one will be used

(sorted-map-by #(< (count %1) (count %2))
               "pigs" 14
               "horses" 2
               "elephants" 1
               "manatees" 3)


; 2.16 retrieving values from a map
(get {:name "Kvothe" :class "Bard"} :name)
(get {:name "Kvothe" :class "Bard"} :race)
(get {:name "Kvothe" :class "Bard"} :race "Not-found")

; can use keywords as a functions 
(:name {:name "Kvothe" :class "Board"})
(:race {:name "Kvothe" :class "Board"})
(:race {:name "Kvothe" :class "Board"} "Default")

; for nested maps
(get-in {:name "Marcus" :weapon {:type :greatsword :damage 25}}
        [:weapon :damage])
(get-in {:name "Marcus"} [:weapon :damage])
(get-in {:name "Marcus"} [:weapon :damage] "Default-if-not-found")

; get-in can be combined with indexes of vectors
(get-in [{:name "Marcus" :class "Paladin"}
         {:name "Kam" :class "Druid"}]
        [1 :class])


; 2.17 retrieving multiplekeys from a map simultaneously
(def beans {:red 10
            :blue 3
            :green 1})
(reduce + (vals (select-keys beans [:red :green])))
(select-keys beans [:red :green])
(vals (select-keys beans [:red :green]))
; use juxt when order matters
((juxt :red :green) beans)
((juxt "a" "b") beans)
(def weird-map {"a" 1, {:foo :bar} :baz, 13 31})
(select-keys weird-map ["a" {:foo :bar}])
(vals {{:foo :bar} :baz, "a" 1})

; maps are not ordered, when order is important use juxt
(def a-str-then-foo-bar-map
  (juxt #(get % "a")
        #(get % {:foo :bar})))
(a-str-then-foo-bar-map weird-map)


; 2.18 setting keys in a map
(def villain {:honorific "Dr." :name "Mayhem"})
(assoc villain :occupation "Mad Scientist" :status :at-large)
; if key is already in, the new map will be updated with the new value
(def villain {:honorific "Dr." :name "Mayhem"
              :occupation "Mad Scientist" :status :at-large})
(assoc villain :status :deceased)
; dissoc for removing
(def villain {:honorific "Dr." :name "Mayhem"
              :occupation "Madman" :status :deceased})
(dissoc villain :occupation :honorific)

(def book {:title "Clojure Cookbook"
           :author {:name "Ryan Neufeld"
                    :residence {:country "USA"}}})
; it is possible to
(assoc book :author
       (assoc (:author book) :residence
              (assoc (:residence (:author book)) :country "Canada")))
(assoc-in book
          [:author :residence :country]
          "Canada")

; when we need to update the value based on previous one
(def website {:clojure-cookbook {:hits 1236}})
; register 101 new hits
(update-in website
           [:clojure-cookbook :hits]
           +
           101)

; update-in will also crate maps
(update-in {} [:author :residence] assoc :country "USA")

(def retail-data (atom {:customers [{:id 123 :name "Luke"}
                                    {:id 321 :name "Ryan"}]
                        :orders [{:sku "Q2M9" :customer 123 :qty 4}
                                 {:sku "43XP" :customer 321 :qty 1}]}))
(swap! retail-data update-in [:orders] conj
       {:sku "9QED" :customer 321 :qty 2})


; using composite values as map keys
(def chessboard {[:a 5] [:white :king]
                 [:a 4] [:white :pawn]
                 [:d 4] [:black :king]})
(defn move
  "Given a map representing a chessboard, move the piece at src to dest"
  [board source dest]
  (-> board
      (dissoc source)
      (assoc dest (board source))))
(move chessboard [:a 5] [:a 4])

(def plus-two (partial + 2))
(def plus-three (partial + 3))
(def weight-map {plus-two 1.0 plus-three 0.8})

(defn apply-weighted
  "Given a weight map, a function, and args, applies the function to the 
  args, multiplying the result by the weighting for the function. If the 
  weight map does not specify a weight for the function, a default of 1.0 is used."
  [weight-map f & args]
  (* (get weight-map f 1.0)
     (apply f args)))
(apply-weighted weight-map plus-two 2)
(apply-weighted weight-map plus-three 1)


; 2.20 treating maps as sequences (and vice versa)
(seq {:a 1 :b 2 :c 3 :d 4})
(def m {:a 1 :b 2})
(conj m [:c 3])
(conj m :g: 6) ; doesn't work
(conj m [:d 4 :e 5]) ; doesn't work

; into uses repeated applications of conj to add items from one sequence onto a
; collection 
(into {} [[:a 1] [:b 2] [:c 3]])
(zipmap [:a :b :c] [1 2 3])
; zipmap uses lenght of the shorest sequence - extra values are ignored

; hash-map will be in random order
(seq (hash-map :a 1 :b 2 :c 3))
(seq (sorted-map :a 1 :c 3 :b 2))

(def entry (first {:a 1 :b 2}))
entry
(class entry)
(key entry)
(val entry)


; 2.21 applying functions to map
(defn map-keys
  "Given a map and a funciton, return the map resutling from applying
  the function to each key."
  [m f]
  (zipmap (map f (keys m)) (vals m)))

(map-keys {"a" 1 "b" 2} keyword)

(defn map-vals
  "Given a map and a funciton, return the map resutling from applying
  the function to each key."
  [m f]
  (zipmap (keys m) (map f (vals m))))

(map-vals {:a 1 :b 1} inc)

(defn map-kv
  "Given a map and a fuction of two arguments, return the map
  resulting from applying the function to each of its entries. The
  provided function must return a pair (a two-element sequence.)"
  [m f]
  (into {} (map (fn [[k v]] (f k v)) m)))

(map-kv {"a" 1 "b" 1} (fn [k v] [(keyword k) (inc v)]))

; the same but without destructuring
(defn map-kv
  [m f]
  (into {} (map (fn [entry]
                  (f (key entry) (val entry)))
                m)))
            
; tests 
(into {} [[:a 1] [:b 2]])
(into {} [{:a 1 :b 2} {:c 3}])

(reduce-kv (fn [agg _ val]
             (+ agg val))
           0
           {:a 1 :b 2 :c 3})

; it's possible to define map-kv using reduce-kv
(defn map-kv
  [m f]
  (reduce-kv (fn [agg k v] (conj agg (f k v))) {} m))
(map-kv {:one 1 :two 2 :three 3}
        #(vector (-> %1 str (subs 1)) (inc %2)))


; 2.22 keeping multiple values for a key
(defprotocol MultiAssociative
  "An associative structure that can contain multiple values for a key"
  (insert [m key value] "Insert a value into a MultiAssociative")
  (delete [m key value] "Remove a value from a MultiAssociative")
  (get-all [m key] "Returns a set of all values stored at key in 
                    MultiAssociative. Returns the empty set if
                    there are no values."))

(defn- value-set?
  "Helper predicate that returns true if the value is a set that
  represents multiple values in a MultiAssociative"
  [v]
  (and (set? v) (::multi-value (meta v))))

(defn value-set
  "Given any number of items as arguments, returns a set 
  representing multiple values in a MultiAssociative. If there is
  only one item, simply returns the item."
  [& items]
  (if (= 1 (count items))
    (first items)
    (with-meta (set items) {::multi-value true})))

(extend-protocol MultiAssociative
  clojure.lang.Associative
  (insert [this key value]
    (let [v (get this key)]
      (assoc this key (cond
                        (nil? v) value
                        (value-set? v) (conj v value)
                        :else (value-set v value)))))
  (delete [this key value]
    (let [v (get this key)]
      (if (value-set? v)
        (assoc this key (apply value-set (disj v value)))
        (if (= v value)
            (dissoc this key)
            this))))
  (get-all [this key]
    (let [v (get this key)]
      (cond
        (value-set? v) v
        (nil? v) #{}
        :else #{v}))))
        
(require '[clojure.test :refer :all])

(deftest test-insert
  (testing "inserting to a new key"
    (is (= {:k :v} (insert {} :k :v))))
  (testing "inserting to an existing (single existing item)"
    (let [m (insert {} :k :v1)]
      (is (= {:k #{:v1 :v2}}
             (insert m :k :v2)))))
  (testing "inserting to an existing key (multiple existing items)"
    (let [m (insert (insert {} :k :v1) :k :v2)]
      (is (= {:k #{:v1 :v2 :v3}}
             (insert m :k :v3))))))

(deftest test-delete
  (testing "deletign a non-present key"
    (is (= {:k :v} (delete {:k :v} :nosuch :nada))))
  (testing "deleting a non-present value"
    (is (= {:k :v} (delete {:k :v} :k :nada))))
  (testing "deleting a single value"
    (is (= {} (delete {:k :v} :k :v))))
  (testing "deleting one of two values"
    (let [m (insert (insert {} :k :v1) :k :v2)]
      (is (= {:k #{:v1 :v2}} (delete m :k :v3)))))
  (testing "deleting one of several values"
    (let [m (insert (insert (insert {} :k :v1) :k :v2) :k :v3)]
      (is (= {:k #{:v1 :v2}} (delete m :k :v3))))))

(deftest test-get-all
  (testing "get a non-present key"
    (is (= #{} (get-all {} :nosuch))))
  (testing "get a single value"
    (is (= #{:v} (get-all {:k :v} :k))))
  (testing "get multiple values"
    (is (= #{:v1 :v2} (get-all (insert (insert {} :k :v1) :k :v2) :k)))))
(run-tests)


; 2.23 combining maps

; use merge to combine two or more maps with no keys in common
(def arizona-bird-counts {:cactus-wren 8})
(def florida-bird-counts {:gull 20 :pelican 14})
(merge arizona-bird-counts florida-bird-counts)

(def florida-bird-counts {:gull 20 :pelican 1 :egret 4})
(def california-bird-counts {:gull 12 :pelican 4 :jay 3})

(merge-with + california-bird-counts florida-bird-counts)

(def votes-am {:vanilla 3 :chocolate 4})
(def votes-pm {:vanilla 4 :napoliton 2})
(merge votes-am votes-pm)

(def alice {:loves #{:clojure :lisp :scheme} :hates #{:fortran :c :c++}})
(def bob {:loves #{:clojure :scheme} :hates #{:c :c++ :algol}})
(def ted {:loves #{:clojure :lisp :scheme} :hates #{:algol :basic :c++}})

(merge-with clojure.set/intersection alice bob ted)

; merge nested maps with a recursive merge function
(defn deep-merge
  [& maps]
  (apply merge-with deep-merge maps))
(deep-merge {:foo {:bar {:baz 1}}}
            {:foo {:bar {:quz 42}}})
(deep-merge {:foo {:bar 2}}
            {:foo {:kto {:ty "ty"}}})


; 2.24 comparing and sorting values
(compare 5 2)
(compare 0.5 1)
(compare (/ 1 4) 0.25)
(compare "brewer" "aardvark")

(apply str (filter #(not= % \space) (sort "The qucik brown fox jumped over the lazy dog")))

(sort > [1 4 3 2])
(sort < [1 4 3 2])
(sort #(< (count %1) (count %2)) ["z" "yy" "zzz" "a" "bb" "ccc"])

(def people [{:name "Luke" :role :author}
             {:name "Ryan" :role :author}
             {:name "John" :role :reviewer}
             {:name "Travis" :role :editor}])

(sort #(compare (:name %1) (:name %2)) people)
; same as:
(sort-by :name people)
(sort-by :role people)

; descending lexographic order
(sort-by str #(* -1 (compare %1 %2)) (range 1 20))
(sort-by str #(compare %1 %2) (range 1 20))

; vectors are compared first by their lenght second by the resutl 
; of applying compare to their first value
(sort [[2 1] [1] [1 2] [1 1 1] [2]])


; 2.25 removing duplicate elements from a collection

(set [:a :a :g :a :b :g])

; when the sequence is infinite or you wish to maintain ordering
; use distinct [to return lazy seq]
(distinct [:a :a :g :a :b :g])

(defn rand-int-seq
  "Returns an infinite sequence of ints from [0, n)"
  [n]
  (repeatedly #(rand-int n)))

; set will take an infinite sequence and never returns
; to limit it you need to use take
(set (take 10 (rand-int-seq 10)))

; distinct works no matter what
(take 10 (distinct (rand-int-seq 10)))
; calling set is two times faster though


; 2.26 determining if a collection holds one of several values
(some #{1 2} (range 10))
(some #{10 20} (range 10))
(some #{10 20 4 6} (range 10))

(if (some #{nil} [1 2 nil 3])
  :found
  :not-found) ; problem as some returns the item if found or nil if not

(if (some #{false} [1 2 false 3])
  :found
  :not-found) ; same

(if (some nil? [nil false])
  :found
  :not-found)
(if (some false? [nil false])
  :found
  :not-found)

; to test both cases at once
(if (some #(or (false? %)
               (nil? %))
          [nil false])
  :found
  :not-found)

; 2.27 implementing custom data strucutures: red black trees
(require '[clojure.core.match :refer [match]])

(defn balance
  "Ensures the given subtree stays balanced by rearranging black nodes
  that have at least one red child and one red grandchild"
  [tree]
  (match [tree]
         [(:or ;; Left child red with left red grandchild
               [:black [:red [:red a x b] y c] z d]
               ;; Left child red with right red grandchild
               [:black [:red a x [:red b y c]] z d]
               ;; Right child red with left red grandchild
               [:black a x [:red [:red b y c] z d]]
               ;; Right child red with right red grandchild
               [:black a x [:red b y [:red c z d]]])] [:red [:black a x b]
                                                            y
                                                            [:black c z d]]
               :else tree))
               
(defn insert-val
  "Inserts x in tree.
  Returns a node with x and no children if tree is nil.

  Returned tree is balanced. See also `balance`"
  [tree x]
  (let [ins (fn ins [tree]
              (match tree
                     nil [:red nil x nil]
                     [color a y b] (cond
                                    (< x y) (balance [color (ins a) y b])
                                    (> x y) (balance [color a y (ins b)])
                                    :else tree)))
        [_ a y b] (ins tree)]
    [:black a y b]))
  

(defn find-val
  "Finds value x in tree"
  [tree x]
  (match tree
         nil nil
         [_ a y b] (cond
                    (< x y) (recur a x)
                    (> x y) (recur b x)
                    :else x)))


; 2.28 implementing custom data structures: red black trees - part ii
; this one is not finised
(defn- rb-tree->tree-seq
  "Return a seq of all nodes in an red-black tree."
  [rb-tree]
  (tree-seq sequential? (fn [[_ left _ right]]
                          (remove nil? [left right]))
            rb-tree))

(defn rb-tree->seq
  "Convert a red-black tree to a seq of its values."
  [rb-tree]
  (map (fn [[_ _ val _]] val) (rb-tree->tree-seq rb-tree)))

(rb-tree->seq (-> nil
                  (insert-val 5)
                  (insert-val 2)))

(defn- rb-tree->tree-seq
  "Return a seq of all nodes in an red-black tree."
  [rb-tree]
  (tree-seq sequential? (fn [[_ left _ right]]
                          (remove nil? [left right]))
            rb-tree))

(defn rb-tree->seq
  "Convert a red-black tree to a seq of its values."
  [rb-tree]
  (map (fn [[_ _ val _]] val) (rb-tree->tree-seq rb-tree)))

(rb-tree->seq (-> nil
                  (insert-val 5)
                  (insert-val 2)))

; 3.2 interactive doccumentation

(use 'clojure.repl)

; get docs
(doc conj)

; get source code
(source reverse)

; find functions with documentation matching for a gieve reg expr
(find-doc #"defmacro")

(source source)

; without importing clojure.repl
(clojure.repl/doc reverse)


; 3.3 exploring namespaces

; print loaded libraries
(print (loaded-libs))

(use 'clojure.repl)
(dir clojure.instant)

; use ns-publics to obtain a mapping of symbols to public vars in 
; a namespace
(ns-publics 'clojure.instant)


; 3.4 trying a library without explicit dependencies
; use lein try - it will grab  the most recent version if not specified
; lein try clj-time
; or:
; lein try clj-time 0.5.1

; lein try [io.rkn/conformity "0.2.1"] [com.datomic/datomic-free "0.8.4020.26"]


; 3.5 running clojure programs 

; 3.6 running programs from the command line
; in any leiningen project, use lein run commnad to invoke your app

; 3.7 parsing command-line arguments
; use [org.clojure/tools.cli "0.4.1"]


(require '[clojure.tools.cli :refer [cli]])

(defn -main [& args]
  (let [[opts args banner] (cli args
                                ["-h" "--help" "Print this help"
                                 :default false :flag true])]
    (when (:help opts)
      (println banner))))
(-main "-h")


(def app-specs [["-n" "--count" :default 5
                                :parse-fn #(Integer. %)
                                :assoc-fn max]
                ["-v" "--verbose" :flag true
                                  :default true]])
(first (apply cli ["-n" "2" "-n" "50"] app-specs))
(first (apply cli ["--no-verbose"] app-specs))
(first (apply cli ["-n" "65"] app-specs))

(def required-opts #{:port})
(defn missing-required?
  "Returns true if opts is misssing any of the required-opts"
  [opts]
  (not-every? opts required-opts))
(defn -main [& args]
  (let [[opts args banner] (cli args
                                ["-h" "--help" "Print this help"
                                 :default false :flag true]
                                ["-p" "--port" :parse-fn #(integer. %)])]
    (when (or (:help opts)
              (missing-required? opts))
      (println banner))))
(second (apply cli ["-n" "5" "foo.txt" "bar.txt"] app-specs))
(second (apply cli ["-n" "5" "--" "--port" "80"]))
(second (apply cli ["-n" "5" "--" "--port" "80"] app-specs))

; 3.8 creating custom project templates > skip

; 3.9 building functions with polymorphic behaviour
; the easiest way to implement runtime polymorphism is via hand-rolled
; map-based dispatch
(defn area
  "Calculate the area of a shape"
  [shape]
  (condp = (:type shape)
    :triangle   (* (:base shape) (:height shape) (/ 1 2))
    :rectangle  (* (:length shape) (:width shape))))
(area {:type :triangle :base 2 :height 4})
(area {:type :rectangle :length 2 :width 4})
; use defmulti and defmethod macros to define a multimethod
(defmulti area-multi
  "Calculate the are a shape"
  :type)
(defmethod area-multi :rectangle [shape]
  (* (:length shape) (:widht shape)))
(area-multi {:type :rectangle :length 2 :widht 4})
(area-multi {:type :circle :radius 1}) ; error
(defmethod area-multi :circle [shape]
  (* (. Math PI) (:radius shape) (:radius shape)))
(area-multi {:type :circle :radius 1})

; use clojure's protocol facilities to define a protocol interface
; and extend it with concrete implementations
(defprotocol Shape
  (area [s] "Calculate the area of a shape")
  (perimeter [s] "Calcuclate the perimeter of a shape"))
; define a concrete shape, the rectangle
(defrecord Rectangle [length width]
  Shape
  (area [this] (* length width))
  (perimeter [this] (+ (* 2 length)
                       (* 2 width))))
(->Rectangle 2 4)
(area (->Rectangle 2 4))

(defmulti area ; the function name for a multimethod
  "Calcuclate the are af a shape"
  :type) ; the dispatch function

(defmulti ingest-message
  "Ingest a message into an application"
  (fn [app message]
    (:priority message))
  :default :low)
(defmethod ingest-message :low [app message]
  (println (str "ingesting message " message ", eventually..")))
(defmethod ingest-message :high [app message]
  (println (str "ingesting message " message ", now.")))
(ingest-message {} {:type :stats :value [1 2 3]})
(ingest-message {} {:type :heartbeat :priority :high})


; multiple dispatch - function can be dispatched upon any number of factors
(defmulti convert 
  "Convert a thing from one type to another"
  (fn [request thing]
    [(:input request) (:output request)]))

(require 'clojure.edn)
(defmethod convert [:edn :clojure]
  [_ str]
  (clojure.edn/read-string str))

(require 'clojure.data.json)
(defmethod convert [:clojure :json]
  [_ thing]
  (clojure.data.json/write-str thing))

(convert {:input :edn
          :output :clojure}
         "{:foo :bar}")
(convert {:input :clojure :output :json} [:foo [:bar :baz]])

[(:input {:input :clojure :output :json}) (:output {:input :clojure :output :json})]

(defprotocol Frobnozzle
  "Basic methods for any Frobnozzle"
  (blint [this x] "Blint the frobnozzle with x")
  (crand [this f] [this f x] (str "Crand a frobnozzle with another "
                                  "optionally incorporation x")))
; once protocol is deifned, there are numerous ways to provide
; an implementation for it: deftype, defrecodr, and reify

; deftype has a similar syntax, but is not really applicable for
; an immutable shape
(defrecord Square [length]
  Shape
  (area [this] (* length length))
  (perimeter [this] (* 4 length)))

(perimeter (->Square 1))

; define the area of a parallelogram without defining a record
(area
 (let [b 2
       h 3]
   (reify Shape
     (area [this] (* b h))
     (perimeter [this] (* 2 (+ b h))))))

; 3.10 extending a built-in type
(defprotocol Person
  "Represents the name of a person."
  (first-name [person])
  (last-name [person]))
; extend the type to the java.lang.String class:
(extend-type String
  Person
  (first-name [s] (first (clojure.string/split s #" ")))
  (last-name [s] (second (clojure.string/split s #" "))))

(first-name "john")
(last-name "john rambo")
