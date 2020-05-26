export class CardDeck {
  cards: Card[];
  color: DeckColor;

  constructor(color?: DeckColor) {
    this.color = color || DeckColor.Black;
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

export enum DeckColor {
  Black,
  Blue,
  Purple,
  Red,
}

export enum Suites {
  "Clubs" = "Clubs",
  "Diamonds" = "Diamonds",
  "Hearts" = "Hearts",
  "Spades" = "Spades",
}

function main() {
  console.log("hello from main");
}

export default main;
