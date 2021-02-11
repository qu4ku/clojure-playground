(ns grok.db.core
  (:require [datomic.api :as d]
            [grok.db.schema :refer [schema ]]))


(def database-uri "datomic:sql://grok-development?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic")

(defn create-conn [db-uri]
  (d/create-database db-uri)
  (let [conn (d/connect db-uri)]
    conn))

(def conn (create-conn database-uri))

(def tx @(d/transact))
