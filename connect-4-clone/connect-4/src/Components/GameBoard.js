import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <div>
      <h1>GameBoard</h1>
      <GameBoard id={1}>red</GameBoard>
      <GameBoard id={2}>green</GameBoard>
      <GameBoard id={3}>red</GameBoard>
      <GameBoard id={4}>green </GameBoard>
      <GameBoard id={5}>red</GameBoard>
      <GameBoard id={6}>green</GameBoard>
      <GameBoard id={7}>red</GameBoard>
      <GameBoard id={8}>green</GameBoard>
    </div>
  );
};

export default GameBoard;
