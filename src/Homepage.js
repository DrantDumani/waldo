import React from "react";
import { Link } from "react-router-dom";

function Homepage({ images, onLinkClick }) {
  return (
    <main>
      <div className="padded-container">
        <h1 className="title">Waldo without Waldo</h1>
        <h2>Click and image to play a game</h2>
        <div className="img-grid-container">
          {images.map((img, ind) => (
            <div key={img.id}>
              <Link
                onClick={() => {
                  onLinkClick(ind);
                }}
                to="/game"
                data-testid="game-link"
              >
                <img src={img.src} alt="Pick a game!" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Homepage;
