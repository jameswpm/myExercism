(ns interest-is-interesting)

(require '[clojure.math :refer [ceil floor round]])

(defn interest-rate
  "Returns the interest rate based on the specified balance."
  [balance]
  (double 
    (cond (< balance 0) -3.213
          (>= balance 5000) 2.475
          (>= balance 1000) 1.621
          (< balance 1000) 0.5)))

(defn annual-balance-update
  "Returns the annual balance update, taking into account the interest rate."
  [balance]
  (let [rate (bigdec (interest-rate balance))]
    (if (> rate 0)
      (bigdec (+ balance (* balance (/ rate 100))))
      (bigdec (* balance (- 1 (/ rate 100)))))))

(defn amount-to-donate
  "Returns how much money to donate based on the balance and the tax-free percentage."
  [balance tax-free-percentage]
  (int 
    (floor 
      (if 
        (> balance 0) 
        (* (* balance (/ tax-free-percentage 100)) 2) 
        0
      ))))