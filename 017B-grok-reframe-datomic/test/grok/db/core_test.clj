(ns grok.db.core-test
  (:require [clojure.test :refer [is deftest testing use-fixtures]]
            [datomic.api :as d]
            [grok.db.with-db :refer [with-db *conn*]]
            [grok.db.core :as SUT]))


;; SUT => Software Under Test
(use-fixtures :each with-db)

(deftest conn
  (testing "create-conn"
      (is (not (nil? *conn*)))))
