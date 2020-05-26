import get from "lodash/get";
import { CardDeck, Suites } from "../../src/index";
import { Suite } from "mocha";

describe("Card Deck", () => {
  const deck = new CardDeck();
  const { cards } = deck;
  it("New deck constains 52 cards", () => {
    for (let c in cards) {
      cy.log(JSON.stringify(cards[c]));
    }
    expect(cards.length).to.equal(52);
  });
  it("It has 13 Clubs", () => {
    expect(cards.filter((c) => c.suite === Suites.Clubs).length).to.equal(13);
  });
  it("It has 13 Diamonds", () => {
    expect(cards.filter((c) => c.suite === Suites.Diamonds).length).to.equal(
      13
    );
  });
  it("It has 13 Hearts", () => {
    expect(cards.filter((c) => c.suite === Suites.Hearts).length).to.equal(13);
  });
  it("It has 13 Spades", () => {
    expect(cards.filter((c) => c.suite === Suites.Spades).length).to.equal(13);
  });
});
