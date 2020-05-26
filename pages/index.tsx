import { useEffect } from "react";
import { CardDeck } from "../src/index";
import Card from "../components/Card";
import styles from "./index.module.css";

const deck = new CardDeck();

function HomePage() {
  useEffect(() => {}, []);
  const cards = deck.cards.map(({ value, suite }) => (
    <Card value={value} suite={suite} />
  ));
  return <div className={styles.container}>{cards}</div>;
}

export default HomePage;
