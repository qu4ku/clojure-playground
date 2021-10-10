(ns revrot
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/


(defn is-sum-cube? [sq]
  (->>
    sq
    (map #(Character/digit % 10))
    (map #(* % %))
    (reduce +)
    (#(mod % 2))
    (= 0)))


(defn rotate [sq]
  (conj (vec (rest sq)) (first sq)))


(defn revrot [s sz]
  (if (some true? [(empty? s) (= 0 sz)])
    ""
    (->>
      (map
        #(if (is-sum-cube? %)
          (reverse %)
          (rotate %))
        (partition sz s))
      (flatten)
      (map str)
      (clojure.string/join))))

(revrot "733049910872815764", 5)





(into [] (first '(\1 \2 \3)))

(conj (vec '(\1 \2)) \3)





(reverse '(\1 \2))



(defn test-assert [act exp]
  (is (= act exp)))

(deftest a-test1
  (testing "revrot"
    (test-assert(revrot "1234" 0) "")
    (test-assert(revrot  "" 0) "")
    (test-assert(revrot "1234", 5), "")
    (test-assert(revrot "733049910872815764", 5), "330479108928157")))
