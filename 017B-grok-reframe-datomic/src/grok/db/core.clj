(ns grok.db.core
  (:require [datomic.api :as d]
            [grok.db.schema :refer [schema]]))


(def database-uri "datomic:mem://foo")

(defn create-conn [db-uri]
  (d/create-database db-uri)
  (let [conn (d/connect db-uri)]
    conn))

(def conn (create-conn database-uri))

(def tx @(d/transact conn schema))
