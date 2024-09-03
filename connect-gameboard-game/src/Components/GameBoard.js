import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <div>
      <h1>GameBoard</h1>
      <GameCircle id={1}></GameCircle>
      <GameCircle id={2}></GameCircle>
      <GameCircle id={3}></GameCircle>
      <GameCircle id={4}></GameCircle>
      <GameCircle id={5}></GameCircle>
      <GameCircle id={6}></GameCircle>
      <GameCircle id={7}></GameCircle>
      <GameCircle id={8}></GameCircle>
    </div>
  );
};

export default GameBoard;
