import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import Game from "./Game";

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
        <Route path="/game" element={<Game imgData={gameImages} />} />
      </Routes>
    </>
  );
}

export default App;
