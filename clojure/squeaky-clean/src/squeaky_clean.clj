(ns squeaky-clean
  (:require [clojure.string :as str]))

(defn replace-iso-control
  [s]
  (->> s
       (map (fn [ch]
              (if (Character/isISOControl ch)
                "CTRL"
                (str ch))))
       (apply str))
  )

(defn replace-non-letters
  [s]
  (->> s
       (map (fn [ch]
              (if (or (Character/isLetter ch) (= ch \_))
                (str ch)
                "")))
       (apply str))
  )

(defn replace-greek-letters
  [s]
  (->> s
       (map (fn [ch]
              (if (and (>= (int ch) 945) (<= (int ch) 969))
                ""
                (str ch))))
       (apply str))
  )

(defn capitalize-first
  [s]
  (if (empty? s)
    s
    (str (str/upper-case (subs s 0 1)) (subs s 1))))

(defn kebab-to-camel
  [coll-of-str]
  (map-indexed (fn [i word]
                      (if (zero? i)
                        word
                        (capitalize-first word))
                      )
               coll-of-str
  )
)

(defn clean
  "TODO: add docstring"
  [s]
  (-> s
       (str/replace #"\s" "_")
       (str/split #"-")
       kebab-to-camel
       (str/join)
       replace-iso-control
       replace-non-letters
       replace-greek-letters
    )
  )
