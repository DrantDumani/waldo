import React from "react";
import { Link } from "react-router-dom";

function Homepage({ images, onLinkClick }) {
  return (
    <main>
      <h1 className="title">Waldo without Waldo</h1>
      <div>
        {images.map((img) => (
          <Link
            onClick={onLinkClick}
            to="/game"
            key={img.id}
            data-testid="game-link"
          >
            <img src={img.src} alt="Pick a game!" />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Homepage;
