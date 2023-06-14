import { useState, useEffect } from "react";
import Objectives from "./Objectives";
import PlayScreen from "./PlayScreen";
// import InputName from "./InputName";
import InputNameContainer from "./InputNameContainer";

function Game({
  imgData,
  thumbnails,
  onValidation,
  currentChoice,
  plyrName,
  confirmNameChange,
  gameName,
}) {
  const [gameState, setGameState] = useState("Intro");
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (gameState === "Playing") {
      const id = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [gameState]);

  const handleStartClick = () => {
    setGameState("Playing");
  };

  const handleGameOver = (arr) => {
    if (arr.every((image) => image.found === true)) {
      setGameState("GameOver");
    }
  };

  const onUserChoice = async (userInput, num) => {
    const gameResult = await onValidation(userInput, num);
    if (gameResult) {
      handleGameOver(gameResult);
    }
  };

  return (
    <main>
      <div>
        {gameState === "Intro" && (
          <Objectives handleClick={handleStartClick} thumbnails={thumbnails} />
        )}
        {gameState === "Playing" && (
          <PlayScreen
            imgData={imgData}
            thumbnails={thumbnails}
            time={time}
            currentChoice={currentChoice}
            onUserChoice={onUserChoice}
          />
        )}
        {gameState === "GameOver" && (
          <InputNameContainer
            time={time}
            plyrName={plyrName}
            confirmNameChange={confirmNameChange}
            gameName={gameName}
          />
        )}
      </div>
    </main>
  );
}

export default Game;
