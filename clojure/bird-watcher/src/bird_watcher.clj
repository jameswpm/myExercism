(ns bird-watcher)

(def last-week 
  [0 2 5 3 7 8 4])

(defn today [birds]
  (get birds 6))

(defn inc-bird [birds]
  (assoc birds 6 (+ 1 (today birds))))

(defn day-without-birds? [birds]
  (or
    (zero? (get birds 0))
    (zero? (get birds 1))
    (zero? (get birds 2))
    (zero? (get birds 3))
    (zero? (get birds 4))
    (zero? (get birds 5))
    (zero? (get birds 6))))

(defn n-days-count [birds n]
  (+
    (if (>= n 1) (get birds 0) 0)
    (if (>= n 2) (get birds 1) 0)
    (if (>= n 3) (get birds 2) 0)
    (if (>= n 4) (get birds 3) 0)
    (if (>= n 5) (get birds 4) 0)
    (if (>= n 6) (get birds 5) 0)
    (if (>= n 7) (get birds 6) 0)))

(defn busy-days [birds]
  (+
    (if (>= (get birds 0) 5)  1 0)
    (if (>= (get birds 1) 5)  1 0)
    (if (>= (get birds 2) 5)  1 0)
    (if (>= (get birds 3) 5)  1 0)
    (if (>= (get birds 4) 5)  1 0)
    (if (>= (get birds 5) 5)  1 0)
    (if (>= (get birds 6) 5)  1 0)))

(defn odd-week? [birds]
  (and
    (= (get birds 0) 1)
    (zero? (get birds 1))
    (= (get birds 2) 1)
    (zero? (get birds 3))
    (= (get birds 4) 1)
    (zero? (get birds 5))
    (= (get birds 6) 1)))
