import React from "react";
import {
  // Game_state_DRAW,
  Game_state_PLAYING,
  Game_state_Win,
} from "./constents";

function Header({ gameState, currentPlayer, winPlayer }) {
  const renderLable = () => {
    // created a function to render the label of the game
    switch (gameState) {
      case Game_state_PLAYING:
        return `Player ${currentPlayer} Turn`;
      case Game_state_Win:
        return `Player ${winPlayer} Win`;
      default:
        return "Game Draw";
    }
  };

  return (
    <div className="Panel Header">
      <div className="Header_text">{renderLable()} </div>
    </div>
  );
}

export default Header;
