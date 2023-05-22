function PlayerChoices({
  position,
  choices,
  onValidation,
  checkGameOver,
  onSelection,
  displayValidation,
  handleUserChoice,
}) {
  return (
    <div
      data-testid="button-container"
      style={{ left: position.x, top: position.y, position: "absolute" }}
    >
      {choices.map((choice, ind) => (
        <button
          key={choice.id}
          onClick={() => {
            onValidation(position, choice.id, checkGameOver);
            handleUserChoice(ind);
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
