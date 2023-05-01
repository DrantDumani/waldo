function PlayerChoices({ position, choices, handleClick }) {
  return (
    <div
      data-testid="button-container"
      style={{ left: position.x, top: position.y, position: "absolute" }}
    >
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => {
            handleClick(position);
          }}
        >
          {choice.name}
        </button>
      ))}
      {position.x}
    </div>
  );
}

export default PlayerChoices;
