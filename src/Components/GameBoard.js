import React, { useState } from "react";
import Squares from "./Squares";
import "./square.css";
import WinnerAnnouncement from "./WinnerAnnouncement";

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
    newSquare[i] = isX ? "X" : "O";
    setSquare(newSquare);
    setIsX(!isX);

    const currentWinner = winnerCalculation(newSquare);
    if (currentWinner && !showWinnerAnnouncement) {
      setWinner(currentWinner);
      setShowWinnerAnnouncement(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="row">
          <Squares value={square[0]} onClick={() => checkClick(0)} />
          <Squares value={square[1]} onClick={() => checkClick(1)} />
          <Squares value={square[2]} onClick={() => checkClick(2)} />
        </div>
        <div className="row">
          <Squares value={square[3]} onClick={() => checkClick(3)} />
          <Squares value={square[4]} onClick={() => checkClick(4)} />
          <Squares value={square[5]} onClick={() => checkClick(5)} />
        </div>
        <div className="row">
          <Squares value={square[6]} onClick={() => checkClick(6)} />
          <Squares value={square[7]} onClick={() => checkClick(7)} />
          <Squares value={square[8]} onClick={() => checkClick(8)} />
        </div>
      </div>
      {winner && <div className="winner mt-3">Winner: {winner}</div>}
      <WinnerAnnouncement
        winner={winner}
        visible={showWinnerAnnouncement}
        onClose={() => setShowWinnerAnnouncement(true)}
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
