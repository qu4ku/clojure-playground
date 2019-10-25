(ns simple-reframe.events
  (:require
   [re-frame.core :as re-frame]
   [simple-reframe.db :as db]))
   

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::name-change
 (fn [db [_ new-name-value]]
   (assoc db :name new-name-value)))
