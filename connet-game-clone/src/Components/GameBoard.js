import GameCircle from "./GameCircle";
import React, { useState } from "react";
import "./Game.css";
import Header from "./Header";
import Footer from "./Footer";

import { isWinner } from "./helper";

// created some const values so it never changes
const No_player = 0;
const Player_1 = 1;
const Player_2 = 2;

const No_circle = 16;

const GameBoard = () => {
  const [gameState, setGameState] = useState(Array(16).fill(No_player)); // created a state to store total number of player and starting player will be no player
  const [currentPlayer, setCurrentPlayer] = useState(Player_1); // second state to make sure which player is player currentkly and update state according to that

  console.log(gameState);

  const iniBoard = () =>
    // iniBoard function to render circle in initial state whem starts the game
    // we craeted that function to render 16 circles  using for loop and puch bulit in function
    {
      const circles = []; // we created a empty array to store rendered circles
      for (let i = 0; i < No_circle; i++) {
        circles.push(render_circle(i)); // we pushed the circles into array
      }
      return circles;
    };

  const onCircleClicked = (id) => {
    console.log("Circle clicked" + id);

    //gameState[id] = currentPlayer; // stating player will be player_1

    if (isWinner(gameState, id, currentPlayer)) {
      // it determines the player position give the result is player win or not
      console.log("winner");
    }
    setGameState((prev) => {
      // recommended way to update array and state
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    // its update the state of game which circle is filled with which color and by which player

    setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1); // this condition checks which player is currently playing and next which player should play

    console.log(gameState);
  };

  const render_circle = (id) => {
    // this const function render circle dynamicaly so we don't have to render it every time
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameState[id]}`} // used the Js template to update state circle color
        onCircleClicked={onCircleClicked} // called the circle clicked function
      ></GameCircle>
    );
  };
  return (
    <>
      <div className="gameBoard">
        {/* // fragment concept of react which alow us to have one or more div
      orcomponents in retrun statement */}
        {/* <GameCircle id={1} color={styles.Redd}></GameCircle>
      <GameCircle id={2} color={styles.circleB}></GameCircle>
      <GameCircle id={3} color={styles.Redd}></GameCircle>
      <GameCircle id={4} color={styles.circleB}></GameCircle>
      <GameCircle id={5} color={styles.Redd}></GameCircle>
      <GameCircle id={6} color={styles.circleB}></GameCircle>
      <GameCircle id={7} color={styles.Redd}></GameCircle>
      <GameCircle id={8} color={styles.circleB}></GameCircle> */}
        {/* {render_circle(0)}
      {render_circle(1)}
      {render_circle(2)}
      {render_circle(3)}
      {render_circle(4)}
      {render_circle(5)}
      {render_circle(6)}
      {render_circle(7)}
      {render_circle(8)}
      {render_circle(9)}      // we can render circles one by like this but its not the optimal way to render that much components 
      {render_circle(10)}
      {render_circle(11)}
      {render_circle(12)}
      {render_circle(13)}
      {render_circle(14)}
      {render_circle(15)} */}
        <Header player={currentPlayer} />
        {iniBoard()}
      </div>

      <Footer></Footer>
    </>
  );
};

export default GameBoard;
