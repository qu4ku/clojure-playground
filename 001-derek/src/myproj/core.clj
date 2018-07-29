(ns myproj.core
  (:require [clojure.string :as str])
  (:require [proto-repl])
  (:gen-class))

; (defn -main
;   "I don't do a whole lot ... yet."
;   [& args]
;   (def aLong 15)
;   (nil? aLong))
;
; (pos? 15)
; (neg? 15)
; (integer? 15)
; (odd? 15)
; (even? 15)
; (float? 15)
; (zero? 0)

; (defn -main
;   [& args]
;   (def aLong 15)
;   (def someVariable "h")
;   (def aDoubleSec 1.234)
;   (format "This is a string %s" someVariable)
;   (format "5 spaces and %5d" aLong)
;   (format "Leading zeros %04d" aLong)
;   (format "%-4d left justify" aLong)
;   (format "3 decimals %.3f" aDoubleSec))


(defn -main
  [& args]
  (def str1 "This is my 2nd string")
  (def str2 "")
  (str/blank? str1))
  ; (str/blank? str2))
