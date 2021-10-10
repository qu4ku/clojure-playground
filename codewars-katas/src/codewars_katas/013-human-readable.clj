(ns human-readable
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/52742f58faf5485cae000b9a


(def duration
  {:year (* 60 60 24 365)
   :day (* 60 60 24)
   :hour (* 60 60)
   :minute (* 60)})

(defn generate-numbers [secs]
  (let [years (int (/ secs (:year duration)))
        days (int (/ (mod secs (:year duration)) (:day duration)))
        hours (int (/ (mod secs (:day duration)) (:hour duration)))
        minutes (int (/ (mod secs (:hour duration)) (:minute duration)))
        seconds (mod secs (:minute duration))]
    [years days hours minutes seconds]))

(defn generate-strings [l]
  (if (= 0 (reduce + l))
    ["now"]
    (remove nil?
      [
        (case (get l 0)
          0 nil
          1 "1 year"
          (str (get l 0) " years"))
        (case (get l 1)
          0 nil
          1 "1 day"
          (str (get l 1) " days"))
        (case (get l 2)
          0 nil
          1 "1 hour"
          (str (get l 2) " hours"))
        (case (get l 3)
          0 nil
          1 "1 minute"
          (str (get l 3) " minutes"))
        (case (get l 4)
          0 nil
          1 "1 second"
          (str (get l 4) " seconds"))])))



(defn formatDuration [secs]
  (let [l (generate-strings (generate-numbers secs))]
    (case (count l)
      1 (str (first l))
      2 (str (clojure.string/join " and " l))
      3 (str
          (nth l 0) ", " (nth l 1) " and " (nth l 2))
      4 (str (nth l 0) ", " (nth l 1) ", " (nth l 2) " and " (nth l 3))
      5 (str (nth l 0) ", " (nth l 1) ", " (nth l 2) ", " (nth l 3) " and " (nth l 4)))))




(deftest test-human-readable-duration
  (is (= (formatDuration 0) "now"))
  (is (= (formatDuration 1) "1 second"))
  (is (= (formatDuration 62) "1 minute and 2 seconds"))
  (is (= (formatDuration 120) "2 minutes"))
  (is (= (formatDuration 3600) "1 hour"))
  (is (= (formatDuration 3662) "1 hour, 1 minute and 2 seconds")))
