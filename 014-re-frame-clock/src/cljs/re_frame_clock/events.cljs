(ns re-frame-clock.events
  (:require
   [re-frame.core :as re-frame]
   [re-frame-clock.db :as db]))
   

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   {:time (js/Date.)
    :time-color "orange"}))

(defn dispatch-timer-event []
  (let [now (js/Date.)]
    (re-frame/dispatch [:timer now])))

;; call the dispatching function every second
;; defonce is like a def but it makes sure it is created only once
;; when reloading
(defonce do-timer (js/setInterval dispatch-timer-event 1000))
