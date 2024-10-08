// in this project we used some importent cocept of react like , useState, useEffect , Callbacks function. we learn props , dunamic styling inline , dynamic classes.

// that was fun

import GameCircle from "./GameCircle";
import React, { useEffect, useState } from "react";
import "./Game.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  No_circle,
  No_player,
  Player_1,
  Player_2,
  Game_state_PLAYING,
  Game_state_Win,
  Game_state_DRAW,
} from "./constents";

import { getComputerMove, isDraw, isWinner } from "./helper";

// // created some const values so it never changes
// const No_player = 0;
// const Player_1 = 1;
// const Player_2 = 2;

// const No_circle = 16;

// //  now we declared some state of games like start , playig stopped etc

// const Game_state_IDLE = 0;
// const Game_state_PLAYING = 1;
// const Game_state_Win = 2;
// const Game_state_DRAW = 3;

const GameBoard = () => {
  const [gameBoard, setgameBoard] = useState(Array(16).fill(No_player)); // created a state to store total number of player and starting player will be no player
  const [currentPlayer, setCurrentPlayer] = useState(Player_1); // second state to make sure which player is player currentkly and update state according to that
  const [gameState, setgameState] = useState(Game_state_PLAYING); // created a new useState to determine and set the current state play or in idle state etc
  const [winPlayer, setwinPlayer] = useState(No_player);
  console.log(gameBoard);

  // useEffect(() => {
  //   // useEffect is a hook in React that allows you to perform side effects in functional components
  //   // It is commonly used for fetching data, subscribing to events, or updating the DOM
  //   // In this case, you can use useEffect to check if the game is over (win or draw) and perform any necessary actions

  //   if (gameState === Game_state_Win) {
  //     // If the game is won by a player, you can display a message or perform any other actions
  //     console.log(`Player ${winPlayer} wins!`);
  //   }

  //   if (gameState === Game_state_DRAW) {
  //     // If the game is a draw, you can display a message or perform any other actions
  //     console.log("It's a draw!");
  //   }

  //   // You can also use useEffect to perform cleanup actions when the component is unmounted
  //   return () => {
  //     // Cleanup code here
  //   };
  // }, [gameState, winPlayer]);

  useEffect(() => {
    // we used useEffect to change the state effect of the game so the reset and start from
    console.log("initiliazing the Game");

    iniGame();
  }, []);

  const iniGame = () => {
    setgameBoard(Array(16).fill(No_player));
    setCurrentPlayer(Player_1);
    setgameState(Game_state_PLAYING);
  };

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

  const suggest = () => {
    // suggest function to suggest the circle to fill by computer
    console.log("suggestion clicked");
    onCircleClicked(getComputerMove(gameBoard));
  };

  const onCircleClicked = (id) => {
    console.log("Circle clicked" + id);

    if (gameBoard[id] !== No_player) return; // this condition make sure that player don't click twice on same circle

    if (gameState !== Game_state_PLAYING) return; // this condition make sure that if any of player win the game should stop over there it don't proced to next circle or palyer not able to fill next circle
    //gameBoard[id] = currentPlayer; // stating player will be player_1

    if (isWinner(gameBoard, id, currentPlayer)) {
      // it determines the player position give the result is player win or not
      setgameState(Game_state_Win);
      setwinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      // it determines the player position give the result is player draw the match
      setgameState(Game_state_DRAW);
      setwinPlayer(No_player);
    }

    setgameBoard((prev) => {
      // recommended way to update array and state
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    // its update the state of game which circle is filled with which color and by which player

    setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1); // this condition checks which player is currently playing and next which player should play

    console.log(gameBoard);
  };

  const render_circle = (id) => {
    // this const function render circle dynamicaly so we don't have to render it every time
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`} // used the Js template to update state circle color
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

        <Header
          gameState={gameState}
          currentPlayer={currentPlayer}
          winPlayer={winPlayer}
        />
        {iniBoard()}
      </div>
      <Footer
        onNewGameClick={iniGame}
        onSuggestClick={suggest}
        gameState={gameState}
      ></Footer>
    </>
  );
};

export default GameBoard;
