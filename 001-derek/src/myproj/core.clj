(ns myproj.core
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

(defn -main
  [& args]
  (def secondString "Hello")
  (def aLong 15)
  (def second "h")
  (def aDouble 1.234)
  ; (format "This is a string %s" secondString)
  (format "5 spaces and %5d" aLong)
  (format "Leading zeros %04d" aLong)
  (format "%-4d left justify" aLong)
  (format "3 decimals %.3f" aDouble))
