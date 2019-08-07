(ns hpscraper.core
  (:require [net.cgrand.enlive-html :as html]
            [org.httpkit.client :as http]))


(def hn-link "https://news.ycombinator.com/")

(defn get-body [link] 
  (html/html-snippet
      (:body @(http/get link {:insecure? true}))))

(defn print-hn-titles [body]
  (apply map println (map :content (html/select body [:a.storylink]))))


(defn -main
  [& args]
  (println "Getting HackerNews headlines...")
  (println "")
  (try
    (print-hn-titles (get-body hn-link))
    (catch Exception e (str "caught exception: " (.getMessage e)))))
