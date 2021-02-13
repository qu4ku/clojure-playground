(ns grok.db.user
  (:require [datomic.api :as d]
            [grok.db.core :refer [conn]]
            [clojure.spec.alpha :as s]
            [clojure.test.check.generators :as gen]))


(defn validate-email [email]
  (let [pattern #"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"]
    (re-matches pattern email)))


(s/def :user/email
  (s/with-gen
    (s/and string? validate-email)
    #(s/gen #{"john@gmail.com" "jane@me.com"})))
(s/def :user/password
  (s/with-gen
    (s/and string? #(> (count %) 5))
    #(s/gen #{"pasword123" "1234567"})))
(s/def :user/username
  (s/with-gen
    string?
    #(s/gen #{"john" "benjamin"})))
(s/def :user/token
  (s/with-gen
    string?
    #(s/gen #{"sadfdsafsa" "sdfdsfsfd"})))
(s/def :user/id string?)



(s/def ::user
  (s/keys :req [:user/email :user/password]
          :opt [:user/id :user/token :user/username]))


(defn create! [conn user-params]
  (if (s/valid? ::user user-params)
    (let [user-id (d/squuid)
          tx-data (merge {:user/id user-id} user-params)]
      (d/transact conn [tx-data])
      user-id)
    (throw (ex-info "User is invalid"
                    {:grok/error-id :validation
                      :error "Invalid email or password provided"}))))


;; fetch user by id
(defn fetch [db user-id]
  nil)
