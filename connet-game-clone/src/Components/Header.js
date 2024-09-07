import React from "react";

function Header({ player }) {
  return (
    <div className="Panel Header">
      <div className="Header_text">Player {player} Turn </div>
    </div>
  );
}

export default Header;
