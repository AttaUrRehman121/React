import GameCircle from "./GameCircle";
import "../Components/Game.css";

const GameBoard = () => {
  return (
    <div className="gameBoard">
      {/* <GameCircle id={1} color={styles.Redd}></GameCircle>
      <GameCircle id={2} color={styles.circleB}></GameCircle>
      <GameCircle id={3} color={styles.Redd}></GameCircle>
      <GameCircle id={4} color={styles.circleB}></GameCircle>
      <GameCircle id={5} color={styles.Redd}></GameCircle>
      <GameCircle id={6} color={styles.circleB}></GameCircle>
      <GameCircle id={7} color={styles.Redd}></GameCircle>
      <GameCircle id={8} color={styles.circleB}></GameCircle> */}

      <GameCircle id={1}>
        {/* every thing between this is react childern which is passad  */}
        {/* <div>Red and Blue </div> */}
      </GameCircle>
      <GameCircle id={2}></GameCircle>
      <GameCircle id={3}></GameCircle>
      <GameCircle id={4}></GameCircle>
      <GameCircle id={5}></GameCircle>
      <GameCircle id={6}></GameCircle>
      <GameCircle id={7}></GameCircle>
      <GameCircle id={8}></GameCircle>
      <GameCircle id={9}></GameCircle>
      <GameCircle id={10}></GameCircle>
      <GameCircle id={11}></GameCircle>
      <GameCircle id={12}></GameCircle>
      <GameCircle id={13}></GameCircle>
      <GameCircle id={14}></GameCircle>
      <GameCircle id={15}></GameCircle>
      <GameCircle id={16}></GameCircle>
    </div>
  );
};

export default GameBoard;
