import "./Game.css";

const onClicked = (id) => {
  console.log("clicked " + id);
};

function GameCircle({ id, color }) {
  return (
    <div
      className="gameCircle"
      style={{
        backgroundColor: color,
      }}
      onClick={() => onClicked(id)}
    ></div>
  );
}

export default GameCircle;
