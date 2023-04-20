import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";

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
      </Routes>
    </>
  );
}

export default App;
