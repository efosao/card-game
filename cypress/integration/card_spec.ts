import get from "lodash/get";
import { CardDeck } from "../../src/index";

describe("Card Deck", () => {
  const deck = new CardDeck();
  it("New deck constains 52 cards", () => {
    expect(get(deck, ["cards", "length"])).to.equal(52);
  });
});
