import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";

function App() {
  return (
    <div id="calculator " className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
