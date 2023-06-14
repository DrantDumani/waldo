import { useState, useEffect } from "react";
import PlayerChoices from "./PlayerChoices";
import UserTime from "./UserTime";
import ValidationText from "./ValidationText";

function PlayScreen({
  imgData,
  thumbnails,
  time,
  currentChoice,
  onUserChoice,
}) {
  const [showSelections, setShowSelections] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [position, setPosition] = useState(null);
  const [dimensions, setDimensions] = useState(null);

  const handleImageClick = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    setDimensions({
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    });
    setShowSelections(true);
  };

  const displayValidation = () => {
    setShowValidation(true);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setShowValidation(false);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [showValidation]);

  const closeChoices = () => {
    setShowSelections(false);
  };

  return (
    <div>
      <UserTime time={time} />
      <div style={{ position: "relative" }}>
        <img onClick={handleImageClick} src={imgData.src} alt="game-screen" />
        {showSelections && (
          <PlayerChoices
            position={position}
            choices={thumbnails}
            onSelection={closeChoices}
            displayValidation={displayValidation}
            handleUserChoice={onUserChoice}
            imgDimensions={dimensions}
          />
        )}
      </div>
      {showValidation && (
        <ValidationText boolean={currentChoice.found} name={currentChoice.id} />
      )}
    </div>
  );
}

export default PlayScreen;
