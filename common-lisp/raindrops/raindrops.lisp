(defpackage :raindrops
  (:use :cl)
  (:export :convert))

(in-package :raindrops)

(defun convert (n)
  "Converts a number to a string of raindrop sounds."
  (let ((result ""))
  (setq result (concatenate 'string result
               (if (= (mod n 3) 0) "Pling" "")
               (if (= (mod n 5) 0) "Plang" "")
               (if (= (mod n 7) 0) "Plong" "")))
  (if (string= result "")
        (format nil "~a" n)
        result)))
   
