(ns organizing-project.core
  (:gen-class))

(ns-name *ns*)

inc

'inc

(map inc [1 2])

(inc 1)

(map inc (lazy-seq [1 2]))

'(map inc [1 2])

(def great-books ["East of Eden" "The glass"])
great-books

(def randomz [2])

(ns-interns *ns*)

(ns-map *ns*)

(deref #'peg-game.core/randomz)

(create-ns 'cheese.taxonomy)

; creates namespace if it doesn't exist and switches to it
(in-ns 'cheese.analysis)

(in-ns 'cheese.taxonomy)
(def cheddars ["mild" "medium"])
(in-ns 'cheese.analysis)


cheddars

cheese.taxonomy/cheddars

(in-ns 'cheese.taxonomy)
(def cheddars ["mild" "medium"])
(def bries ["wisconsin" "somerset"])
(in-ns 'cheese.analysis)
bries
(clojure.core/refer 'cheese.taxonomy)
bries

(clojure.core/refer 'cheese.taxonomy :only ['bries])
(clojure.core/refer 'cheese.taxonomy :exclude ['bries])
(clojure.core/refer 'cheese.taxonomy :rename {'bries 'yummy-bries})

; private functions - available only in one namespace
(in-ns 'cheese.analysis)
(defn- private-functions
  "Just an example function"
  [])

(in-ns 'cheese.taxonomy)
(clojure.core/refer-clojure)
(cheese.analysis/private-function)
(refer 'cheese.analysis :only ['private-function])


(clojure.core/alias 'taxonomy 'cheese.taxonomy)
taxonomy/bries


(in-ns 'cheese.taxonomy)
(def cheddars ["mild" "medium" "strong"])
(def bries ["wisconsin" "sommers" "brie de meaux"])
(in-ns 'cheese.analysis)
bries
cheddars


(clojure.core/get (clojure.core/ns-map clojure.core/*ns*) 'bries)
