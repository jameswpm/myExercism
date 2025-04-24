(ns squeaky-clean
  (:require [clojure.string :as str]))

(defn replace-iso-control
  [s]
  (->> s
       (map (fn [ch]
              (if (Character/isISOControl ch)
                "CTRL"
                ch)))
       (apply str)))

(defn replace-non-letters
  [s]
  (->> s
       (filter (fn [ch]
               (or (Character/isLetter ch) (= ch \_))))
       (apply str)))

(defn replace-greek-letters
  [s]
  (->> s
       (remove (fn [ch]
               (<= 945 (int ch) 969 )))
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
               coll-of-str))

(defn clean
  "The function executes a specific cleaning operation on a given string s, executing each operation in order."
  [s]
  (-> s
       (str/replace #"\s" "_")
       (str/split #"-")
       kebab-to-camel
       (str/join)
       replace-iso-control
       replace-non-letters
       replace-greek-letters))
