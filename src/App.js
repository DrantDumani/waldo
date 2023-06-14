import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import GameContainer from "./GameContainer";
import { useState } from "react";
import PageWrapper from "./PageWrapper";

function App({ gameImages, currGame, setCurrGame }) {
  const [name, setName] = useState("");

  const confirmNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Navbar />
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
      </Routes>
    </>
  );
}

export default App;
