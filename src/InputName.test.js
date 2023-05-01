import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import InputName from "./InputName";

describe("InputName Component", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn((e) => e.preventDefault());
  const time = 100;
  const name = "";
  it("calls function correct number of times upon user input", async () => {
    render(<InputName handleChange={handleChange} time={time} name={name} />, {
      wrapper: MemoryRouter,
    });
    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "Ganon");
    expect(handleChange).toBeCalledTimes(5);
  });

  it("calls submit function with the correct arguments", async () => {
    render(<InputName handleSubmit={handleSubmit} time={time} name={name} />, {
      wrapper: MemoryRouter,
    });

    const submit = screen.getByRole("button", { name: "Submit Score!" });
    const user = userEvent.setup();
    await user.click(submit);

    expect(handleSubmit).toBeCalledWith(time, name);
  });
});
