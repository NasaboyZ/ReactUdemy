import { useState } from "react";

import { WINNING_COMBINATIONS } from "../winning-combinations";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function App() {
  
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  function updateBoard(row, col, player) {
    setGameBoard((prevBoard) => {
      const newBoard = prevBoard.map((innerRow) => [...innerRow]);
      newBoard[row][col] = player;
      return newBoard;
    });
  }
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbole = combinations;
  }

  function handlePlayerSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Spieler 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Spieler 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handlePlayerSquare}
          turns={gameTurns}
          activePlayer={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
