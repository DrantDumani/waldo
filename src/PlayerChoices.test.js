import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayerChoices from "./PlayerChoices";

describe("PlayerChoices component", () => {
  const position = {};
  const choices = [{ id: "Link" }, { id: "Zelda" }, { id: "Ganon" }];
  const mockSelection = jest.fn();
  const mockDisplay = jest.fn();
  const mockUserChoice = jest.fn();
  const mockDimensions = { width: 1, height: 1 };

  it("renders all options in the choices array", () => {
    render(
      <PlayerChoices
        position={position}
        choices={choices}
        onSelection={mockSelection}
        displayValidation={mockDisplay}
        handleUserChoice={mockUserChoice}
        imgDimensions={mockDimensions}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(screen.getAllByRole("button").length).toBe(choices.length);
    expect(screen.getByRole("button", { name: "Link" })).toBeInTheDocument();
  });

  it("calls a function with correct args when a button is clicked", async () => {
    render(
      <PlayerChoices
        position={position}
        choices={choices}
        onSelection={mockSelection}
        displayValidation={mockDisplay}
        handleUserChoice={mockUserChoice}
        imgDimensions={mockDimensions}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const user = userEvent.setup();
    const plyrChoices = await screen.findAllByRole("button");
    await user.click(plyrChoices[0]);
    expect(mockSelection).toBeCalled();
    expect(mockDisplay).toBeCalled();
    expect(mockUserChoice).toBeCalled();
  });
});
