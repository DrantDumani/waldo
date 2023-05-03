import { useState, useEffect } from "react";
import PlayerChoices from "./PlayerChoices";
import UserTime from "./UserTime";

function PlayScreen({ imgData, choices }) {
  const [showSelections, setShowSelections] = useState(false);
  const [time, setTime] = useState(0);
  const [position, setPosition] = useState(null);

  const handleImageClick = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY + 10 });
    setShowSelections(true);
  };

  useEffect(() => {
    setTime((t) => t + 1);
  }, []);

  return (
    <div>
      <UserTime time={time} />
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
