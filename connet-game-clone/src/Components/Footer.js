import React from "react";

import { Game_state_PLAYING } from "./constents";

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
  const renderButton = () => {
    if (gameState === Game_state_PLAYING) {
      return (
        <button className="Footer_button" onClick={onSuggestClick}>
          Suggestions
        </button>
      );
    } else {
      return (
        <button className="Footer_button" onClick={onNewGameClick}>
          New Game
        </button>
      );
    }
  };
  return (
    <div className="Panel Footer">
      {
        renderButton()
        /*  // added the conditional rendering so required button apperaed when it
      needed 
      {gameState === Game_state_PLAYING && (
        <button className="Footer_button" onClick={onSuggestClick}>
          Suggestions
        </button>
      )}
      {gameState !== Game_state_PLAYING && (
        <button className="Footer_button" onClick={onNewGameClick}>
          New Game
        </button>
      )} */
      }
    </div>
  );
};

export default Footer;
