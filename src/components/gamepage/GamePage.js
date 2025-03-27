import React from "react";
import GameConsole from "./GameConsole"; // Import the component
import "./GamePage.css";

const GamePage = () => {
  return (
    <div className="gamepage">
      <div className="game-content">
        <GameConsole /> {/* Add GameConsole here */}
      </div>
    </div>
  );
};

export default GamePage;
