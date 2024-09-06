import "./Game.css";

const onClicked = (id) => {
  console.log("clicked " + id);
};

const GameCircle = ({ id, color }) => {
  return (
    <div
      className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`}
      // just add dynamicly chnaging color based on condition

      onClick={() => onClicked(id)}
    ></div>
  );
};

export default GameCircle;
