(ns shorturl.db
  (:require [clojure.java.jdbc :as j]
            [honey.sql :as sql]
            [honey.sql.helpers :refer :all]))

;; HOST=aws-eu-west-2.connect.psdb.cloud
;; USERNAME=kf25x0ws88q9jk0wvys3
;; PASSWORD=************
;; DATABASE=shorturl

(def mysql-db {:dbtype "mysql"
               :host "aws-eu-west-2.connect.psdb.cloud"
               :dbname "shorturl"
               :user "np4qlr4lwaygnah4mq1x"
               :password "pscale_pw_QGZHYj2Kput9Izx0VqeeyKisZ0SsxFa7vHKkOB2R44k"})

(defn query [q]
  (j/query mysql-db q))

(defn insert! [q]
  (j/db-do-prepared mysql-db q))

(defn insert-redirect! [slug url]
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values [[slug url]])
               (sql/format))))

(defn get-url [slug]
  (-> (query (-> (select :*)
                 (from :redirects)
                 (where [:= :slug slug])
                 (sql/format)))
      first
      :url))

(comment
  (query (-> (select :*)
             (from :redirects)
             (sql/format)))
  (get-url "test")
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values
                [["abc" "https://github.com/seancorfield/honeysql"]])
               (sql/format)))
  (insert-redirect! "test" "https://test.com"))
