(ns leap)

(defn leap-year? [year] ;; <- argslist goes here
      (and 
        (zero? (rem year 4))
        (or
          (zero? (rem year 400))
          (pos? (rem year 100)))))
