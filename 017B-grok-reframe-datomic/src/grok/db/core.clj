(ns grok.db.core
  (:require [datomic.api :as d]
            [config.core :refer [env]]
            [grok.db.schema :refer [schema]]))

(keys env)

(def database-uri "datomic:mem://foo")

(defn create-conn [db-uri]
  (d/create-database db-uri)
  (let [conn (d/connect db-uri)]
    conn))


;; Conn
(def conn (create-conn database-uri))

;; Schema transaction
(comment
  (def tx @(d/transact conn schema)))
