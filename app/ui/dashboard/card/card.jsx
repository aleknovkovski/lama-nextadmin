import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{`{item.title}`}</span>
        <span className={styles.number}>{`{item.number}`}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>
            {`{item.change}`}%
          </span>{" "}
          {"more/less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;