import React from "react";

function Footer({ onClickEvent }) {
  return (
    <div className="Panel Footer">
      <button className="Footer_button" onClick={onClickEvent}>
        New Game
      </button>
    </div>
  );
}

export default Footer;
