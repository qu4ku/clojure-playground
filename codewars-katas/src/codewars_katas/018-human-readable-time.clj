(ns human-readable-time
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/52685f7382004e774f0001f7


(defn human-readable
  [x]
  (let [h (int (/ x (* 60 60)))
        m (int (/ (mod x (* 60 60)) 60))
        s (mod x 60)]
    (format "%02d:%02d:%02d" h m s)))




(deftest Tests
  (is (= (human-readable      0) "00:00:00"))
  (is (= (human-readable     59) "00:00:59"))
  (is (= (human-readable     60) "00:01:00"))
  (is (= (human-readable     90) "00:01:30"))
  (is (= (human-readable  86399) "23:59:59"))
  (is (= (human-readable 359999) "99:59:59")))
