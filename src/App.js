import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import Game from "./Game";

function App() {
  //handle on backend later
  const imgData = {
    src: "https://cdnb.artstation.com/p/assets/images/images/028/956/671/large/aaron-hibiki-earthbound-fuzzy-pickles.jpg?1596028225",
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage images={[imgData]} />} />
        <Route
          path="/Waldo-without-Waldo/leaderboards"
          element={<Leaderboard />}
        />
        <Route
          path="home/Waldo-without-Waldo/game"
          element={<Game imgData={imgData} />}
        />
      </Routes>
    </>
  );
}

export default App;
