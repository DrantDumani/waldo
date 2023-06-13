import { useState, useEffect } from "react";
import { getImagesFromFireBase, getCoords } from "./firebaseConfig";
import Game from "./Game";

function GameContainer({ currGame }) {
  const [findImages, setFindImages] = useState([]);
  const [currentChoiceIndex, setCurrentChoiceIndex] = useState(0);

  const handleUserValidation = async (userInput, numIndex) => {
    setCurrentChoiceIndex(numIndex);
    const colId = currGame.id;
    const docId = findImages[numIndex];
    const coords = await getCoords(colId, docId);

    if (
      userInput.x >= coords.lowerX &&
      userInput.x <= coords.upperX &&
      userInput.y >= coords.lowerY &&
      userInput.y <= coords.upperY
    ) {
      const updatedImages = [...findImages];
      const foundImage = { ...findImages[numIndex], found: true };
      updatedImages[numIndex] = foundImage;
      setFindImages(updatedImages);
      return updatedImages;
    }
  };

  useEffect(() => {
    const getInitState = async () => {
      const path = "thumbnails/" + currGame["id"];
      const initState = await getImagesFromFireBase(path);
      setFindImages(initState);
    };
    getInitState();
  }, [currGame]);

  return (
    <Game
      imgData={currGame}
      thumbnails={findImages}
      onValidation={handleUserValidation}
      currentChoice={findImages[currentChoiceIndex]}
    />
  );
}

export default GameContainer;
