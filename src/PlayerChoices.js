function PlayerChoices({
  position,
  choices,
  onSelection,
  displayValidation,
  handleUserChoice,
}) {
  return (
    <div
      data-testid="button-container"
      style={{ left: position.x, top: position.y + 10, position: "absolute" }}
    >
      {choices.map((choice, ind) => (
        <button
          key={choice.id}
          onClick={() => {
            handleUserChoice(position, ind);
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
