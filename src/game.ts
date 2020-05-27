import { Card, CardDeck, DeckColors } from ".";

class Game {
  deck: CardDeck;
  dealtCards: { id: number; card: Card }[];

  constructor() {
    this.dealtCards = [];
    this.deck = new CardDeck(DeckColors.Purple);
    this.deck.shuffle();
  }

  public deal() {
    let count = 0;
    for (let c in this.deck.cards) {
      const card = this.deck.cards[c];
      this.dealtCards.push({ id: count++, card });
      this.dealtCards.push({ id: count++, card });
      if (Number(c) === 7) break;
    }
  }

  public shuffle() {
    const cards = [...this.dealtCards];
    for (let i = cards.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.dealtCards = cards;
  }
}

export default Game;
