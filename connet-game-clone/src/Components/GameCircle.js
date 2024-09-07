import "./Game.css";

const GameCircle = ({ id, onCircleClicked, className }) => {
  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => onCircleClicked(id)}

      // just add dynamicly chnaging color based on condition
    ></div>
  );
};

export default GameCircle;
