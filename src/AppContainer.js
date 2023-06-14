import { useState, useEffect } from "react";
import App from "./App";
import { getImagesFromFireBase } from "./firebaseConfig";

function AppContainer() {
  const [gameImages, setGameImages] = useState([]);
  const [currGameIndex, setCurrGameIndex] = useState(0);

  const changeIndex = (num) => {
    setCurrGameIndex(num);
  };

  useEffect(() => {
    const getInitState = async () => {
      const initState = await getImagesFromFireBase("gameImages");
      setGameImages(initState);
    };
    getInitState();
  }, []);

  return (
    <App
      gameImages={gameImages}
      currGame={gameImages[currGameIndex] || {}}
      setCurrGame={changeIndex}
    />
  );
}

export default AppContainer;
