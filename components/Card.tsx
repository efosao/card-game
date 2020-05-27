import styles from "./Card.module.css";
import { DeckColors } from "../src/index";

function Card({
  color,
  value,
  suite,
  onSelect = null,
  isSelected = false,
  isMatched = false,
}) {
  const cssColor = color.toLowerCase();
  let cardName = value;
  if (value === 1) cardName = "Ace";
  else if (value === 11) cardName = "Jack";
  else if (value === 12) cardName = "Queen";
  else if (value === 13) cardName = "King";

  const isSelectedClass = isSelected ? "selected" : "";
  const isMatchedClass = isMatched ? "matched" : "";
  const classes = `${styles.card} ${styles[cssColor]} ${styles[isSelectedClass]} ${styles[isMatchedClass]}`;

  return (
    <div className={classes} onClick={onSelect}>
      {cardName}
      <br />
      {suite}
    </div>
  );
}

export default Card;
