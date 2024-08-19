import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButton = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      setCalVal(calVal + buttonText);
    }
  };
  return (
    <div id="calculator " className={styles.calculator}>
      <Display DisplayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButton}></ButtonContainer>
    </div>
  );
}

export default App;
