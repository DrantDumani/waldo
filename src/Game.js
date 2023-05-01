import { useState, useContext } from "react";
import { DataContext } from "./DataContext";

function Game({ imgData }) {
  const { gameData } = useContext(DataContext);
  const [gameBegin, setGameBegin] = useState(true);
  const [gamePlaying, setGamePlaying] = useState(true);
  const [fake, setFake] = useState(false);

  const handleStartClick = () => {
    setGameBegin(false);
    setGamePlaying(true);
  };

  const checkVic = (e) => {
    console.log(e.nativeEvent.offsetX);
    if (e.nativeEvent.offsetX > 200) {
      setFake(true);
    }
  };

  return (
    <main>
      {gameBegin && <button onClick={handleStartClick}>Start</button>}
      {gamePlaying && (
        <img src={imgData.src} alt="game-screen" onClick={checkVic} />
      )}
      {fake && <p>Finally</p>}
    </main>
  );
}

export default Game;
