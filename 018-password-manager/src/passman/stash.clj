(ns passman.stash)

(def ^{:doc "path to stash file"} stash-file-path "passman.stash")

(babashka.pods/load-pod 'rorokimdim/stash "0.2.0")

(require '[pod.rorokimdim.stash :as stash])

(defn stash-init [password]
  (stash/init {"encryption-key" password
               "stash-path" stash-file-path
               "create-stash-if-missing" true}))

(defn stash-add [parent-id k v]
  (stash/add parent-id k v))

(defn add-password [url username password]
  (stash-add 0 (str url username) password))

(defn stash-nodes
  ([] (stash-nodes 0))
  ([parent-id] (stash/nodes parent-id)))

(defn find-password [url username]
  (let [nodes (stash-nodes)
        key (str url username)
        found-node (first (filter (fn [n]
                                    (= key (:key n))) nodes))]
    (:value found-node)))

(comment
  (stash-init "test"))
