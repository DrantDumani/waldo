import React from "react";

import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <h1 className="title">Waldo without Waldo</h1>
      <Link to="Waldo-without-Waldo/game" data-testid="game-link">
        Replace with pic
      </Link>
    </main>
  );
}

export default Homepage;
