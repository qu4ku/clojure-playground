(ns reagent-react-intro.prod
  (:require [reagent-react-intro.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
