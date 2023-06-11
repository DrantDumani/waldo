import { useState, useEffect } from "react";
import Objectives from "./Objectives";
import PlayScreen from "./PlayScreen";
import InputName from "./InputName";

function Game({ imgData, thumbnails, onValidation, currentChoice }) {
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

  // const foundImage = (name) => {
  //   for (let i = 0; i < currGameData.length; i++) {
  //     if (name in currGameData[i]) {
  //       const found = { ...currGameData[i], found: true };
  //       const newGameData = [...currGameData];
  //       newGameData[i] = found;
  //       setCurrGameData(newGameData);
  //       break;
  //     }
  //   }
  //   handleGameOver();
  // };

  // const checkVic = (e) => {
  //   console.log(e.nativeEvent.offsetX);
  //   if (e.nativeEvent.offsetX > 200) {
  //     setFake(true);
  //   }
  // };

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
            // checkGameOver={handleGameOver}
            // onValidation={onValidation}
            time={time}
            currentChoice={currentChoice}
            onUserChoice={onUserChoice}
          />
        )}
        {gameState === "GameOver" && <InputName />}
      </div>
    </main>
  );
}

export default Game;
