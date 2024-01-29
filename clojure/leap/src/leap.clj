(ns leap)

(defn leap-year? [year] ;; <- argslist goes here
  (if 
      (and 
        (= (rem year 4) 0)
        (or
          (= (rem year 400) 0)
          (not= (rem year 100) 0)
        )
      ) 
    true 
    false)
)
