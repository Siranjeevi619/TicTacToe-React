import React, { useState } from "react";
import Squares from "./Squares";
import "./styles/square.css";
import WinnerAnnouncement from "./WinnerAnnouncement";
import DogIcon from "../assets/icons/BowBow.png";
import CatIcon from "../assets/icons/kitty.png";

function GameBoard() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showWinnerAnnouncement, setShowWinnerAnnouncement] = useState(false);

  const checkClick = (i) => {
    if (square[i] || winnerCalculation(square)) {
      return;
    }
    const newSquare = square.slice();
    newSquare[i] = isX ? DogIcon : CatIcon;
    setSquare(newSquare);
    setIsX(!isX);

    const currentWinner = winnerCalculation(newSquare);
    if (currentWinner) {
      setWinner(currentWinner);
      setShowWinnerAnnouncement(true);
    } else if (!newSquare.includes(null)) {
      setWinner("D");
      setShowWinnerAnnouncement(true);
    }
  };

  const handleCloseAnnouncement = () => {
    setShowWinnerAnnouncement(false);
    setSquare(Array(9).fill(null));
    setIsX(true);
    setWinner(null);
  };

  return (
    <div className="container ms-lg-3 mt-5">
      <div className="row justify-content-center">
        <div className="ms-md-5 s ms-lg-0">
          <div className="row ms-md-2">
            <Squares value={square[0]} onClick={() => checkClick(0)} />
            <Squares value={square[1]} onClick={() => checkClick(1)} />
            <Squares value={square[2]} onClick={() => checkClick(2)} />
          </div>
          <div className="row ms-md-2">
            <Squares value={square[3]} onClick={() => checkClick(3)} />
            <Squares value={square[4]} onClick={() => checkClick(4)} />
            <Squares value={square[5]} onClick={() => checkClick(5)} />
          </div>
          <div className="row ms-md-2">
            <Squares value={square[6]} onClick={() => checkClick(6)} />
            <Squares value={square[7]} onClick={() => checkClick(7)} />
            <Squares value={square[8]} onClick={() => checkClick(8)} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 me-lg-0 col-9 col-md-7 me-sm-0 mt-5">
            <div className="justify-content-center d-flex align-items-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSquare(Array(9).fill(null));
                }}
              >
                Reset Game
              </button>
            </div>
          </div>
        </div>
      </div>
      <WinnerAnnouncement
        winner={winner}
        visible={showWinnerAnnouncement}
        onClose={handleCloseAnnouncement}
      />
    </div>
  );
}

function winnerCalculation(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default GameBoard;
