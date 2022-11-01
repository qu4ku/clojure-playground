(ns shorturl.db
  (:require [clojure.java.jdbc :as j]
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


(j/query mysql-db
         ["select * from redirects"])

