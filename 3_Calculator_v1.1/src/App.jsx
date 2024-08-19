import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  return (
    <div id="calculator " className={styles.calculator}>
      <Display DisplayValue={calVal}></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
