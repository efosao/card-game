import styles from "./Card.module.css";

function Card({ value, suite }) {
  return (
    <div className={styles.card}>
      {value}
      {suite}
    </div>
  );
}

export default Card;
