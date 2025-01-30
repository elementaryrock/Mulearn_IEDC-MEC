import styles from "./Events.module.css";
import data from "../../../data.json";

const Events = () => {
  return (
    <div className={styles.events}>
      <h2>Our Event Journey</h2>
      <div className={styles.grid}>
        {data.events.map((event, index) => (
          <div className={styles.card} key={index}>
            <img src={event.img} alt="" />
            <div className={styles.content}>
              <div className={styles.date}>
                <span>{event.month}</span>
                <span>{event.date}</span>
              </div>
              <div className={styles.text}>
                <strong>{event.head}</strong>
                <span>{event.para}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
