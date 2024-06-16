import React, { useState } from "react";
import Squares from "./Squares";

function GameBoard() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const checkClick = (i) => {
    if (square[i] || winnerCalculation(square)) {
      return;
    }
    const newSquare = square.slice();
    newSquare[i] = isX ? "X" : "O";
    setSquare(newSquare);
    setIsX(!isX);
  };

  const winner = winnerCalculation(square);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Squares value={square[0]} onClick={() => checkClick(0)} />
            <Squares value={square[1]} onClick={() => checkClick(1)} />
            <Squares value={square[2]} onClick={() => checkClick(2)} />

            <Squares value={square[3]} onClick={() => checkClick(3)} />
            <Squares value={square[4]} onClick={() => checkClick(4)} />
            <Squares value={square[5]} onClick={() => checkClick(5)} />

            <Squares value={square[6]} onClick={() => checkClick(6)} />
            <Squares value={square[7]} onClick={() => checkClick(7)} />
            <Squares value={square[8]} onClick={() => checkClick(8)} />
          </div>
        </div>
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
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
