import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayerChoices from "./PlayerChoices";

describe("PlayerChoices component", () => {
  const position = {};
  const choices = ["Link", "Zelda", "Ganon"];

  it("renders all options in the choices array", () => {
    render(<PlayerChoices position={position} choices={choices} />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getAllByRole("button").length).toBe(choices.length);
  });

  it("calls a function when a button is clicked", async () => {
    const mockFn = jest.fn();
    render(
      <PlayerChoices
        position={position}
        choices={choices}
        handleClick={mockFn}
      />,
      {
        wrapper: MemoryRouter,
      }
    );
    const user = userEvent.setup();
    await user.click(screen.getAllByRole("button")[0]);
    expect(mockFn).toBeCalledTimes(1);
  });
});
