(ns resistor-color)

(def colors
  ;; definition value
  ["black" "brown" "red" "orange" "yellow" "green" "blue" "violet" "grey" "white"])

(defn color-code
  "Returns the numerical value associated with the given color."
  [color]
  ;; function body
  (cond (= color "black") 0
        (= color "brown") 1
        (= color "red") 2
        (= color "orange") 3
        (= color "yellow") 4
        (= color "green") 5
        (= color "blue") 6
        (= color "violet") 7
        (= color "grey") 8
        (= color "white") 9))
