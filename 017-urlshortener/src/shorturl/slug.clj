(ns shorturl.slug)

(def charset "qwfpbjluyarstgmneiozxcdvkh")

(defn generate-slug []
  (->> (repeatedly #(rand-nth charset))
       (take 4)
       (apply str)))

