// GamePage.tsx
import "./Game.css";
import ButtonGame from '../../components/buttongame/ButtonGame'
import React from "react";

const GamePage: React.FC = () => {
  return (
    <div className="game-bg">
      <div className="game-content">
        <div className="left-side">
          <h1>JOGANDOOOOOOOOOOOOOOOO</h1>
          <ButtonGame onClick={() => console.log("Botão clicado")} /> 
        </div>
        <div className="right-side">
          <h1>IMAGEMMMMMMMMMM</h1>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
