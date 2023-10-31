import styles from "./Sales.module.css";
import sales from "../../sales";

const Sales = () => {
  return (
    <section className={styles.salesSection}>
      <h2 className={styles.salesTitle}>Sales</h2>
      <section className={styles.salesContainer}>
        {sales.map((sales) => (
          <section className={styles.sales} key={sales.id}>
            <section className={styles.salesContent}>
              <img src={sales.image} alt=""  width={"50%"}/>
              <h3>{sales.title}</h3>
              <h4>{sales.category}</h4>
              <p>{sales.description}</p>
              <h4>{sales.price}</h4>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Sales;
