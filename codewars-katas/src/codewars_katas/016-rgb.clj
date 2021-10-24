(ns rgb
  (:require [clojure.test :refer :all]))

; https://www.codewars.com/kata/513e08acc600c94f01000001


(defn normalize [c]
  (if (< c 0)
    0
    (if (> c 255)
      255
      c)))

(defn rgb [r g b]
  (apply str (map
               #(format "%02X" %)
               [(normalize r) (normalize g) (normalize b)])))



(deftest a-test1
         (testing "0 0 0"
                  (is (= "000000" (rgb 0 0 0))))
         (testing "0 0 -20"
                  (is (= "000000" (rgb 0 0 -20))))
         (testing "300 255 255"
                  (is (= "FFFFFF" (rgb 300 255 255))))
         (testing "173 255 47"
                  (is (= "ADFF2F" (rgb 173 255 47))))
         (testing "148 0 211"
                  (is (= "9400D3" (rgb 148 0 211)))))
