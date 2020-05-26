export class CardDeck {
  cards: Card[];

  constructor() {
    this.init();
  }

  public init() {
    const cards = [];

    for (let s in Suites) {
      for (let i = 0; i < 13; i += 1) {
        cards.push(new Card(i + 1, Suites[s]));
      }
    }
    this.cards = cards;
  }
}

export class Card {
  value: number;
  suite: Suites;

  constructor(value: number, suite: Suites) {
    this.suite = suite;
    this.value = value;
  }
}

enum Suites {
  "clubs" = "Clubs",
  "Diamonds" = "Diamonds",
  "Hearts" = "Hearts",
  "Spades" = "Spades",
}

function main() {
  console.log("hello from main");
}

export default main;
