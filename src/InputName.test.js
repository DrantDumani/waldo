import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import InputName from "./InputName";

describe("InputName Component", () => {
  const handleChange = jest.fn();
  const time = 100;
  it("calls function correct number of times upon user input", async () => {
    render(<InputName handleChange={handleChange} time={time} />, {
      wrapper: MemoryRouter,
    });
    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "Ganon");
    expect(handleChange).toBeCalledTimes(5);
  });
});
