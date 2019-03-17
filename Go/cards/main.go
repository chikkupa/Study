package main

func main() {
	cards := newDeck()

	// hand, remainingCards := deal(cards, 5)

	// hand.print()
	// remainingCards.print()
	// cards.saveToFile("cards.txt")
	cards = newDeckFromFile("cards.txt")
	cards.shuffle()
	cards.print()
}

func newCard() string {
	return "Five of Diamonds"
}
