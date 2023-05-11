// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export default storage;
