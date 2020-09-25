(ns exopaste.store
  (:require [com.stuartsierra.component :as component]))

(defn add-new-paste
  "Insert a new paste in the database, return its UUID."
  [store content]
  (let [uuid (.toString (java.util.UUID/randomUUID))]
    (swap! (:data store) assoc (keyword uuid) {:content content})
    uuid))

(defn get-paste-by-uuid
  "Find the paset corresponding to the pasted-in uuid, then return it."
  [store uuid]
  ((keyword uuid) @(:data store)))

(defrecord InMemoryStore [data]

  component/LifeCycle

  (start [this]
    (assoc this :data (atom {})))

  (stop [this] this))

(defn make-store
  []
  (map->InMemoryStore {}))
