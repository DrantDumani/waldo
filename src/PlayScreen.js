import { useState, useEffect } from "react";
import PlayerChoices from "./PlayerChoices";
import UserTime from "./UserTime";
import ValidationText from "./ValidationText";

function PlayScreen({
  imgData,
  thumbnails,
  // checkGameOver,
  // onValidation,
  time,
  currentChoice,
  onUserChoice,
}) {
  const [showSelections, setShowSelections] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [position, setPosition] = useState(null);

  const handleImageClick = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY + 10 });
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
      <img
        onClick={handleImageClick}
        src={imgData.src}
        alt="game-screen"
        style={{ position: "relative" }}
      />
      {showSelections && (
        <PlayerChoices
          position={position}
          choices={thumbnails}
          // onValidation={onValidation}
          // checkGameOver={checkGameOver}
          onSelection={closeChoices}
          displayValidation={displayValidation}
          handleUserChoice={onUserChoice}
        />
      )}
      {showValidation && (
        <ValidationText boolean={currentChoice.found} name={currentChoice.id} />
      )}
    </div>
  );
}

export default PlayScreen;
