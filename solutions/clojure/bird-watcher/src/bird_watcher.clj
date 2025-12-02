(ns bird-watcher)

(def last-week 
  [0 2 5 3 7 8 4])

(defn today [birds]
  (get birds 6))

(defn inc-bird [birds]
  (-> birds
      (assoc 6 (+ 1 (today birds)))))

(defn day-without-birds? [birds]
  (boolean 
    (->> birds
        (map zero?)
        (some true?))))

(defn n-days-count [birds n]
  (->> birds
       (take n)
       (reduce +)))

(defn busy-days [birds]
  (->> birds
       (map #(if (>= % 5) 1 0))
       (reduce +)))

(defn odd-week? [birds]
  (and
    (= (get birds 0) 1)
    (zero? (get birds 1))
    (= (get birds 2) 1)
    (zero? (get birds 3))
    (= (get birds 4) 1)
    (zero? (get birds 5))
    (= (get birds 6) 1)))
