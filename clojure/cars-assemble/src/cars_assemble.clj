(ns cars-assemble)

(defn production-rate
  "Returns the assembly line's production rate per hour,
   taking into account its success rate"
  [speed]
  (cond (= speed 0) 0.0
        (and (>= speed 1) (<= speed 4)) (* speed 221.0)
        (and (>= speed 5) (<= speed 8)) (* (- 1 0.1) (* speed 221.0))
        (= speed 9) (* (- 1 0.2) (* speed 221))
        (= speed 10) (* (- 1 0.23) (* speed 221))))

(defn working-items
  "Calculates how many working cars are produced per minute"
  [speed]
  (int (/ (production-rate speed) 60)))
