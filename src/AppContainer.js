import { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import App from "./App";
import storage from "./firebaseConfig";

function AppContainer() {
  const [gameImages, setGameImages] = useState([]);
  const [currGameIndex, setCurrGameIndex] = useState(0);

  const changeIndex = (num) => {
    setCurrGameIndex(num);
  };

  useEffect(() => {
    const getInitState = async () => {
      const initState = await getImagesFromFireBase();
      setGameImages(initState);
    };
    getInitState();
  }, []);

  const getImagesFromFireBase = async () => {
    try {
      const imgList = [];
      const listRef = ref(storage, "gameImages");
      const { items } = await listAll(listRef);
      for (let item of items) {
        const path = item._location.path_;
        const url = await getDownloadURL(ref(storage, path));
        const name = path.match(/\w*(?=\.)/g)[0];
        imgList.push({ src: url, id: name });
      }
      return imgList;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <App
      gameImages={gameImages}
      currGame={gameImages[currGameIndex]}
      setCurrGame={changeIndex}
    />
  );
}

export default AppContainer;
