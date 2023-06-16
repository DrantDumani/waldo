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
      width: e.target.clientWidth || 1,
      height: e.target.clientHeight || 1,
    });
    setShowSelections(true);
    e.stopPropagation();
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

  useEffect(() => {
    const removeChoiceMenu = () => {
      setShowSelections(false);
    };

    document.body.addEventListener("click", removeChoiceMenu);
    return () => {
      document.body.removeEventListener("click", removeChoiceMenu);
    };
  }, [showSelections]);

  const closeChoices = () => {
    setShowSelections(false);
  };

  return (
    <div>
      <div className="thumbnail-bar">
        <div className="thumbnail-nav">
          {thumbnails.map((pic) => (
            <div
              key={pic.id}
              className={`thumbnail-img ${pic.found && "found-img"}`}
            >
              <img src={pic.src} alt={pic.id} />
              <p>{pic.id}</p>
            </div>
          ))}
          <UserTime time={time} />
        </div>
        {showValidation && (
          <ValidationText
            boolean={currentChoice.found}
            name={currentChoice.id}
          />
        )}
      </div>
      <div className="game-img-container" style={{ position: "relative" }}>
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
    </div>
  );
}

export default PlayScreen;
