import { useState } from "react";

function Game({ imgData }) {
  const [gameBegin, setGameBegin] = useState(true);
  const [gamePlaying, setGamePlaying] = useState(false);

  const handleStartClick = () => {
    setGameBegin(false);
    setGamePlaying(true);
  };

  return (
    <main>
      {gameBegin && <button onClick={handleStartClick}>Start</button>}
      {gamePlaying && <img src={imgData.src} alt="game-screen" />}
    </main>
  );
}

export default Game;
