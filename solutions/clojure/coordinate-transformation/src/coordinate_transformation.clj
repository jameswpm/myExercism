(ns coordinate-transformation)

(defn translate2d 
  "Returns a function making use of a closure to
   perform a repeatable 2d translation of a coordinate pair."
  [dx dy]
    (fn [x y]
      [(+ x dx) (+ y dy)]))


(defn scale2d 
  "Returns a function making use of a closure to
   perform a repeatable 2d scale of a coordinate pair."
  [sx sy]
    (fn [x y]
      [(* x sx) (* y sy)]))

(defn compose-transform
  "Create a composition function that returns a function that 
   combines two functions to perform a repeatable transformation."
  [f g]
   (fn [x y]
     (let [[sx sy] (f x y)]
      (g sx sy)))) 

(defn memoize-transform
  "Returns a function that memoizes the last result.
   If the arguments are the same as the last call,
   the memoized result is returned."
  [f]
  (let [last-call (atom {:args nil :result nil})]
    (fn [& args]
      (let [{prev-args :args prev-result :result} @last-call]
        (if (= args prev-args)
          prev-result
          (let [result (apply f args)]
            (reset! last-call {:args args :result result})
            result))))))
