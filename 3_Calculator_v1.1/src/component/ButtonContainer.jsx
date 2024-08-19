import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.ButtonContainer}>
      {buttons.map((button) => (
        <button className={styles.Button}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
