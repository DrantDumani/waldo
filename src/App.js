import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import Game from "./Game";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/Waldo-without-Waldo/Leaderboard"
          element={<Leaderboard />}
        />
        <Route path="Waldo-without-Waldo/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
