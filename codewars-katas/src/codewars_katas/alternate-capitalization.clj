(ns alternate-capitalization
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/59cfc000aeb2844d16000075


(defn capitalize-first [s]
  (->>
    (take-nth 2 s)
    (map clojure.string/capitalize)
    (#(map vector % (take-nth 2 (rest (concat s " ")))))
    (flatten)
    (clojure.string/join)
    (clojure.string/trim)))


(defn capitalize-second [s]
  (->>
    (concat (take-nth 2 (rest s)) " ")
    (map clojure.string/capitalize)
    (#(map vector (take-nth 2 s) %))
    (flatten)
    (clojure.string/join)
    (clojure.string/trim)))

(defn solve [s]
  (conj [] (capitalize-first s) (capitalize-second s)))



(defn dotest [n ans]
  (is (= (solve n) ans))
  (deftest Example-tests
    (testing "Basic Tests"
      (dotest  "abcdef" ["AbCdEf" "aBcDeF"])
      (dotest  "codewars" ["CoDeWaRs", "cOdEwArS"])
      (dotest "abracadabra" ["AbRaCaDaBrA", "aBrAcAdAbRa"])
      (dotest "indexinglessons" ["InDeXiNgLeSsOnS", "iNdExInGlEsSoNs"]))))
