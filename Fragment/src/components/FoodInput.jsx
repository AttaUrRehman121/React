import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a food"
        className={styles.foodInput}
        onKeyDown={handleKeyDown} // key dowm function
      />
    </div>
  );
};

export default FoodInput;
