(defn greet
	[name]
	(str "Hello, " name "!"))

(doseq [name *command-line-args*]
	(println (greet name)))

; java -cp clojure.jar clojure.main hello.clj Alice Bob