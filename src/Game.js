import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";
import Objectives from "./Objectives";
import PlayScreen from "./PlayScreen";
import InputName from "./InputName";

//what is the game data object supposed to look like?
//set it to the game's object state.
/*
{
  thumbnails: [{src: img src, alt: img name, id: img id}],
}
*/

function Game({ imgData }) {
  const { getGameData } = useContext(DataContext);
  const [gameState, setGameState] = useState("Intro");
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    getGameData(imgData, setGameData);
  }, [getGameData, imgData]);

  const handleStartClick = () => {
    setGameState("Playing");
  };

  // const checkVic = (e) => {
  //   console.log(e.nativeEvent.offsetX);
  //   if (e.nativeEvent.offsetX > 200) {
  //     setFake(true);
  //   }
  // };

  return (
    <main>
      {gameData ? (
        <p>Now Loading...</p>
      ) : (
        <div>
          {gameState === "Intro" && (
            <Objectives
              handleClick={handleStartClick}
              thumbnails={gameData.thumbnails}
            />
          )}
          {gameState === "Playing" && (
            <PlayScreen imgData={imgData} thumbnails={gameData.thumbnails} />
          )}
          {gameState === "GameOver" && <InputName />}
          {/* {gameState === "Playing" && (
        <img src={imgData.src} alt="game-screen" onClick={checkVic} />
      )} */}
        </div>
      )}
    </main>
  );
}

export default Game;
