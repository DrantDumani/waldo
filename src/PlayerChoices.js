function PlayerChoices({
  position,
  choices,
  onSelection,
  displayValidation,
  handleUserChoice,
  imgDimensions,
}) {
  return (
    <div
      data-testid="button-container"
      style={{
        left: position.x,
        top: position.y + 10,
        position: "absolute",
      }}
    >
      {choices.map((choice, ind) => (
        <button
          key={choice.id}
          onClick={() => {
            const userPosition = {
              x: Number(position.x) / imgDimensions.width,
              y: Number(position.y) / imgDimensions.height,
            };
            handleUserChoice(userPosition, ind);
            onSelection();
            displayValidation();
          }}
        >
          {choice.id}
        </button>
      ))}
    </div>
  );
}

export default PlayerChoices;
