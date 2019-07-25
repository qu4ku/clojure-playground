(ns hackerrank-fp.prefix-compression
  (:require [clojure.string :as str]))

; https://www.hackerrank.com/challenges/prefix-compression/problem


(def data "xmisdjjuvpzptsggizolmegzhyrczlyfwiivlzeudqvetsuzojmcjkehjicoswutldfwcraswsstvkhzzeatydjjqyrxinzsrfurxzshhyzurgqpyvsxzrdrbwzaatixkbpccuehkozmkkvygtgbymvbikqadxsiesvuxaewrjqxxkwjqnfrcfhckokjzlfmubkuzrxytzzaujblzkkxehcwbljluzadsgubpqkuefroddinvhprxmdlnrocjquwjzgqndvahpfhknhsxindvunwuyxvbhrhpothsclhagienyvbtikedzxgotyqsrcurlzzahzqdtdwoerhwqmiaezokpueuqotgmycvkiwdjewvsvlpgbrwkrwoctubvszwvlhgqbqdwawyarlcnrgjqlsoktkhaexugyfkylsrfgxqjlwmjetbnaaljxskbonycbtyxxfqixyyozrteeoyndabpdehicpgptjrqtdoerjejhoygbkjryavspeshtelhdeuvbimpmthoouvkrawjadpmdfbevsyusqdxgnurgzzoxlbatvvjgdfthyyculgwrotzwhwohmmpjmkregwcwklcqblyrfxuwgmddhlburpqeppjmfyyezojrhviiduloztklxazsogtxborjnyoqhstniewmwjslzgtxdzempoaluyapykdxedmbjoohcmswqycxfsqbhipmtxjdrviybtfhlviegfdvtycguxcwuqmdgtppwhwdxdyuhdoxrcvwcnyztlxbxcgngezgiwxgxiuablqsrhgwoyyaqmnzqukmqcgterfjhdlotonxueyivluxgzpajkcawwkdupnrnbuyeolatxurygvxexjahatbpsaejehvrzlxpzcyomtrzwpyhsbxyczgsxmqjtylzpgwbpogzdvfhuscxbscwfllhisqjjjjxloypevjgixbpbbhjkjhozmajrnkkbitjodrwibkrldjfxxe
xmisdjjuvpzptsggizolmegzhyrczlyfwiivlzeudqvetsuzojmcjkehjicoswutldfwcraswsstvkhzzeatydjjqyrxinzsrfurxzshhyzurgqpyvsxzrdrbwzaatixkbpccuehkozmkkvygtgbymvbikqadxsiesvuxaewrjqxxkwjqnfrcfhckokjzlfmubkuzrxytzzaujblzkkxehcwbljluzadsgubpqkuefroddinvhprxmdlnrocjquwjzgqndvahpfhknhsxindvunwuyxvbhrhpothsclhagienyvbtikedzxgotyqsrcurlzzahzqdtdtzzatduoezefqdimljrrvdbjgiacjnknpacghfwlmudgmwowhtuyrdrrzgdaenzrkbcjotniouzvazwbxolfgttyyhcbtyeeoxadptgbjfbwmeglhubutazwtkbywcietjsounxkhzdluavkfezjaafibvkirdsckxauocbgxxnanjrgwtegnexswdlcnbetpdjfvmepyjatmsandykwihweiwmkfjtvzsohrqijyojlndvtrlxopdyhkqmefxnwcfblfbmssyzuneqkadjvskudssnwepmvhsalytkpajsqsyjzbrmuwqxipcgrwboxzliqmulxvqmgsxczvxfuoxutqrvucaotqqwzsjkpcnhpxuhtlyqgwkbofobxcozgncucrxzeulwqvfzwcskmnshsscuoyvjlvcdbwddibhxrzkwdwqrbrcltxnjuhfjwtlkualapuljjccyiogsgfifclmxngaszgfpadgpmwttqhvcfwhlccunvqmmvmikapfmwhnwpiezvlbwrtqrxnjvylkoakqowubjukaftajzpetybxxvsgjtlvmmwisvbzhhewuxcczbmhibhjbfqfdcagbvzqrcfcevehxuwobrqrtzlcmspglhloypfrhhgohngporskxxbyqzzhvfcpyemiqscz")


;; solution 

(def x (get (clojure.string/split data #"\n") 0))
(def y (get (clojure.string/split data #"\n") 1))

(defn counter [s accumulator]
  (if (empty? s)
      accumulator
      (if (= 0 (first s))
          accumulator
          (recur (rest s) (inc accumulator)))))

(defn num-of-sames [x y]
  (let [zipped (map vector x y)
        sameness (map #(if (apply = %) 1 0) zipped)]
    (counter sameness 0)))

(defn solve [x y]
  (let [n-sames (num-of-sames x y)]
    (do
      (println n-sames (clojure.string/join (take n-sames x)))
      (println (- (count x) n-sames) (clojure.string/join (drop n-sames x)))
      (println (- (count y) n-sames) (clojure.string/join (drop n-sames y))))))


(solve x y)







    

;; tests
(apply = [\a \a])

(drop 3 (seq "ksldfkdlf"))

(num-of-sames [[\a \a] [\b \c]])

(reduce #(println %)
        
  (seq [[0 1] [1 1]]))

(seq [[0 1] [2 3]])

(reduce str
        [[0 0] [1 2]])
