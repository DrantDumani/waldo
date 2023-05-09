import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayerChoices from "./PlayerChoices";
// import { DataContext } from "./DataContext";

describe("PlayerChoices component", () => {
  const position = {};
  const mockFn = jest.fn();
  const mockGame = "loz";
  const choices = [
    { name: "Link", id: 1 },
    { name: "Zelda", id: 2 },
    { name: "Ganon", id: 3 },
  ];

  it("renders all options in the choices array", () => {
    render(
      // <DataContext.Provider value={{ checkValidation: mockFn }}>
      <PlayerChoices
        position={position}
        choices={choices}
        gameName={mockGame}
        onValidation={mockFn}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(screen.getAllByRole("button").length).toBe(choices.length);
  });

  it("calls a function with correct args when a button is clicked", async () => {
    render(
      // <DataContext.Provider value={{ checkValidation: mockFn }}>
      <PlayerChoices
        position={position}
        choices={choices}
        gameName={mockGame}
        onValidation={mockFn}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const user = userEvent.setup();
    await user.click(screen.getAllByRole("button")[0]);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(position, choices[0].name, mockGame);
  });
});
