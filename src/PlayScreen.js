import { useState } from "react";

function PlayScreen({ imgData }) {
  const [showSelections, setShowSelections] = useState(false);
  const [position, setPosition] = useState({ x: 80, y: 0 });

  const handleImageClick = (e) => {
    console.log(e.nativeEvent.offsetX);
    // act(() => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY + 10 });
    setShowSelections(true);
    // });
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
        <div
          data-testid="button-container"
          style={{ left: position.x, top: position.y, position: "absolute" }}
        >
          {position.x}
        </div>
      )}
    </div>
  );
}

export default PlayScreen;
