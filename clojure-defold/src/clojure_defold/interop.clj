(ns clojure-defold.interop
  (:import (java.awt Frame Color Window EventQueue)
           (java.io IOException)))
;; java functions 
(String. "sdf")  ; new String ("asdf") in java

;; java methods
(let [string (String. "asdf")]
  (.charAt string 1)) ; string.charAt(1)

(let [string (String. "asdf")]
  (. string charAt 1)) ; different syntax / not commmon

(System/getProperty "java.version")

;; chain java api
(.. (StringBuilder.)
    (append "Running Java scpace ")
    (append (System/getProperty "java.version"))
    (toString))

(let [frame (doto (Frame.)
                (.setLayout nil)
                (.setSize 400 300)
                (.setBackground Color/ORANGE)
                (.setVisible true))]
    (.start (Thread. (fn []
                       (Thread/sleep 1000)
                       (EventQueue/invokeLater (fn []
                                                 (.dispose frame)))))))
                  
                  
(let [perform-io! (fn [] (throw (IOException.)))
      clean-up! (fn [] (println "cleaned"))
      result (try
               (perform-io!)
               :success
               (catch IOException e
                 :io-error)
               (catch Exception e
                 :unknown-error)
               (finally 
                 (clean-up!)))]
  result)
