(ns bird-watcher)

(def last-week 
  [0 2 5 3 7 8 4])

(defn today [birds]
  (get birds 5))

(defn inc-bird [birds]
  (assoc birds 5 (+ 1 (today birds))))

(defn day-without-birds? [birds]
  (or
    (zero? (get birds 0))
    (zero? (get birds 1))
    (zero? (get birds 2))
    (zero? (get birds 3))
    (zero? (get birds 4))
    (zero? (get birds 5))))

(defn n-days-count [birds n]
  )

(defn busy-days [birds]
  )

(defn odd-week? [birds]
  )
