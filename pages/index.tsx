import { useEffect, useState, useLayoutEffect } from "react";
import { CardDeck, DeckColors } from "../src/index";
import Game from "../src/game";
import Card from "../components/Card";
import styles from "./index.module.css";
import { includes } from "lodash";

function HomePage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [game, setGame] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  function startGame() {
    const g = new Game();
    g.deal();
    g.shuffle();
    setGame(g);
    setGameStarted(true);
    setMatchedCards([]);
    setSelectedCards([]);
  }

  function selectCard(idx) {
    const cards = [...selectedCards];
    cards.push(idx);
    setSelectedCards(cards);
  }

  useEffect(() => {
    if (gameStarted) {
      console.log("game has started ...");
    }
  }, [gameStarted]);

  useEffect(() => {
    console.log("handle selected cards...");
    if (selectedCards.length > 1) {
      const cards = game.dealtCards;
      const card1 = cards[selectedCards[0]];
      const card2 = cards[selectedCards[1]];
      const isMatchingPair = card1.id !== card2.id && card1.card === card2.card;
      if (isMatchingPair) {
        setMatchedCards([...matchedCards, ...selectedCards]);
      } else {
        console.log("NOT MATCHING PAIR");
      }
      // clear selected cards
      setSelectedCards([]);
    }
  }, [selectedCards]);

  let cards = [];
  if (game && game.dealtCards) {
    cards = game.dealtCards.map(({ id, card }, idx) => {
      const isMatched = includes(matchedCards, idx);
      const onSelect = isMatched ? null : () => selectCard(idx);
      return (
        <Card
          color={game.deck.color}
          isMatched={isMatched}
          isSelected={includes(selectedCards, idx)}
          key={id}
          onSelect={onSelect}
          suite={card.suite}
          value={card.value}
        />
      );
    });
  }

  return (
    <div>
      <button onClick={startGame}>Start</button>
      <div>Selected Cards: {JSON.stringify(selectedCards)}</div>
      <div className={styles.container}>{cards}</div>
    </div>
  );
}

export default HomePage;
