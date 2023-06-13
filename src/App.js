import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import GameContainer from "./GameContainer";

function App({ gameImages, currGame, setCurrGame }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage images={gameImages} onLinkClick={setCurrGame} />}
        />
        <Route path="/leaderboards" element={<Leaderboard />} />
        <Route path="/game" element={<GameContainer currGame={currGame} />} />
      </Routes>
    </>
  );
}

export default App;
