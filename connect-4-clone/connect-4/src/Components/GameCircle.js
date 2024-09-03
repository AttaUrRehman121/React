import React from "react";
const onclickhandle = () => {
  console.log("clicked");
};
const GameCircle = ({ id }) => {
  console.log(id);
  return <div onClick={onclickhandle}>GameCircle - id: {id} </div>;
};

export default GameCircle;
