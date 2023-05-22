import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh0xod2Av1PNNMvbrC14a7nT-xtipj0Vk",
  authDomain: "waldo-without-waldo.firebaseapp.com",
  projectId: "waldo-without-waldo",
  storageBucket: "waldo-without-waldo.appspot.com",
  messagingSenderId: "594212970202",
  appId: "1:594212970202:web:60a9708cce00e547638fe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

const getCoords = async (collectionId, docId) => {
  const docRef = doc(firestore, collectionId, docId);
  const coords = await getDoc(docRef);

  if (coords.exists()) {
    return coords;
  } else {
    throw new Error("Error fetching coordinates from firestore");
  }
};

const getImagesFromFireBase = async (refString) => {
  try {
    const imgList = [];
    const listRef = ref(storage, refString);
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
    return [];
  }
};

export { getImagesFromFireBase, getCoords };
