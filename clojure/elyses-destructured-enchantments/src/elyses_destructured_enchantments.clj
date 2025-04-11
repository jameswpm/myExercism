(ns elyses-destructured-enchantments)

(defn first-card
  "Returns the first card from deck."
  [deck]
  (get deck 0)
)

(defn second-card
  "Returns the second card from deck."
  [deck]
  (let [[f s] deck]
    s)
)

(defn swap-top-two-cards
  "Returns the deck with first two items reversed."
  [deck]
  (assoc deck 0 (second-card deck) 1 (first-card deck))
)

(defn discard-top-card
  "Returns a sequence containing the first card and
   a sequence of the remaining cards in the deck."
  [deck]
  [(first deck) (seq (rest deck))]
)

(def face-cards
  ["jack" "queen" "king"])

(defn insert-face-cards
  "Returns the deck with face cards between its head and tail."
  [deck]
  (if (seq deck)
    (let [[top rest] (discard-top-card deck)]
      (into [top] (concat face-cards rest)))
    face-cards)
)
