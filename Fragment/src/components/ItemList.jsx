import styles from "./itmes.module.css";

//
/**
 * The ItemList component defines a function that logs a message when a buy button is clicked.
 */

/**
 * The ItemList component defines a function handleBuyButtonClicked that logs an event and a message
 * including the food item prop.
 */
const ItemList = ({ fooditem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-items"]} list-group-item ${bought && `active`}`}
    >
      <span className={styles.kgSpan}>{fooditem}</span>
      <button
        className={`${styles.Button} btn btn-info`}
        onClick={handleBuyButton}
      >
        buy
      </button>
    </li>
  );
};
//  ``
export default ItemList;
