import { useContext } from "react";
import { DataContext } from "./DataContext";

function PlayerChoices({ position, choices }) {
  const { checkValidation } = useContext(DataContext);

  return (
    <div
      data-testid="button-container"
      style={{ left: position.x, top: position.y, position: "absolute" }}
    >
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => {
            checkValidation(position);
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
