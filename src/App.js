import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import GameContainer from "./GameContainer";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import About from "./About";

function App({ gameImages, currGame, setCurrGame }) {
  const [name, setName] = useState("");

  const confirmNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div id="game-app">
      <header className="header">
        <Navbar />
      </header>
      <Routes>
        <Route
          path="/"
          element={<Homepage images={gameImages} onLinkClick={setCurrGame} />}
        />
        <Route
          path="/leaderboards"
          element={
            <PageWrapper
              gameImages={gameImages}
              handleClick={setCurrGame}
              gameName={currGame.id}
            />
          }
        />
        <Route
          path="/game"
          element={
            <GameContainer
              currGame={currGame}
              plyrName={name}
              confirmNameChange={confirmNameChange}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
