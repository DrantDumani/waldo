import { useState } from "react";
import PlayerChoices from "./PlayerChoices";

function PlayScreen({ imgData, choices }) {
  const [showSelections, setShowSelections] = useState(false);
  const [position, setPosition] = useState({ x: 80, y: 0 });

  const handleImageClick = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY + 10 });
    setShowSelections(true);
  };

  return (
    <div>
      <img
        onClick={handleImageClick}
        src={imgData.src}
        alt="game-screen"
        style={{ position: "relative" }}
      />
      {showSelections && (
        <PlayerChoices position={position} choices={choices} />
      )}
    </div>
  );
}

export default PlayScreen;
