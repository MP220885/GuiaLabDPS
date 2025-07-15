import styles from "./Card.module.css";

const Card = ({ language, openModal }) => {
  return (
    <div className={styles.card}>
      <img src={language.image} alt={language.name} />
      <h3>{language.name}</h3>
      <button onClick={() => openModal(language)}>Ver más</button>
    </div>
  );
};

export default Card;
