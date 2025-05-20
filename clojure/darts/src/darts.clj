(ns darts
  (:require [clojure.math :as math]))

(defn score
  "Calculates the score of a dart throw"
  [x y]
  ;; find the radius of a circle using coordinates, using the formula: r = sqrt(( x2 − x1 )^ 2 + ( y2 − y1 ) ^ 2).**/
  (let [distance (math/sqrt (+ (math/pow x 2) (math/pow y 2)))]
    (cond
      (<= distance 1) 10
      (<= distance 5) 5
      (<= distance 10) 1
      :else 0)))
