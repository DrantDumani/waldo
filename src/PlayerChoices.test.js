import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayerChoices from "./PlayerChoices";
// import { DataContext } from "./DataContext";

describe("PlayerChoices component", () => {
  const position = {};
  const mockFn = jest.fn();
  const choices = [{ id: "Link" }, { id: "Zelda" }, { id: "Ganon" }];
  const mockGameOver = jest.fn();
  const mockSelection = jest.fn();
  const mockDisplay = jest.fn();
  const mockUserChoice = jest.fn();

  it("renders all options in the choices array", () => {
    render(
      <PlayerChoices
        position={position}
        choices={choices}
        onValidation={mockFn}
        checkGameOver={mockGameOver}
        onSelection={mockSelection}
        displayValidation={mockDisplay}
        handleUserChoice={mockUserChoice}
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
        onValidation={mockFn}
        checkGameOver={mockGameOver}
        onSelection={mockSelection}
        displayValidation={mockDisplay}
        handleUserChoice={mockUserChoice}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const user = userEvent.setup();
    await user.click(screen.getAllByRole("button")[0]);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(position, choices[0].id, mockGameOver);
    expect(mockSelection).toBeCalled();
    expect(mockDisplay).toBeCalled();
    expect(mockUserChoice).toBeCalled();
  });
});
