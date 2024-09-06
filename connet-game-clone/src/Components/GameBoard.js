import GameCircle from "./GameCircle";
import "../Components/Game.css";
import styles from "./GameCircle.module.css";

const GameBoard = () => {
  return (
    <div className={styles.circleGrid}>
      {/* <GameCircle id={1} color={styles.Redd}></GameCircle>
      <GameCircle id={2} color={styles.circleB}></GameCircle>
      <GameCircle id={3} color={styles.Redd}></GameCircle>
      <GameCircle id={4} color={styles.circleB}></GameCircle>
      <GameCircle id={5} color={styles.Redd}></GameCircle>
      <GameCircle id={6} color={styles.circleB}></GameCircle>
      <GameCircle id={7} color={styles.Redd}></GameCircle>
      <GameCircle id={8} color={styles.circleB}></GameCircle> */}

      <GameCircle id={1} color="red">
        {/* every thing between this is react childern which is passad  */}
        {/* <div>Red and Blue </div> */}
      </GameCircle>
      <GameCircle id={2} color="Blue"></GameCircle>
      <GameCircle id={3} color="red"></GameCircle>
      <GameCircle id={4} color="Blue"></GameCircle>
      <GameCircle id={5} color="red"></GameCircle>
      <GameCircle id={6} color="Blue"></GameCircle>
      <GameCircle id={7} color="red"></GameCircle>
      <GameCircle id={8} color="Blue"></GameCircle>
      <GameCircle id={9} color="red"></GameCircle>
      <GameCircle id={10} color="Blue"></GameCircle>
      <GameCircle id={11} color="red"></GameCircle>
      <GameCircle id={12} color="Blue"></GameCircle>
      <GameCircle id={13} color="red"></GameCircle>
      <GameCircle id={14} color="Blue"></GameCircle>
      <GameCircle id={15} color="red"></GameCircle>
      <GameCircle id={16} color="Blue"></GameCircle>
    </div>
  );
};

export default GameBoard;
