import { useState } from "react";
import { act } from "react-dom/test-utils";

function Game({ imgData, callback }) {
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
      act(() => {
        setFake(true);
      });
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
