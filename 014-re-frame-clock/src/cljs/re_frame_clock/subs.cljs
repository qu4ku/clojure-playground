(ns re-frame-clock.subs
  (:require
   [re-frame.core :as re-frame]))


(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-event-db
 :time-color-change
 (fn [db [_ new-color-value]]
   (assoc db :time-color new-color-value)))

(re-frame/reg-event-db
 :timer
 (fn [db [_ new-time]]
   (assoc db :time new-time)))

(re-frame/reg-sub
 :time
 (fn [db _]
   (:time db)))

(re-frame/reg-sub
 :time-color
 (fn [db _]
   (:time-color db)))
