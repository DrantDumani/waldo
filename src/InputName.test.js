import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import InputName from "./InputName";
import { NameContext } from "./NameContext";
// import { DataContext } from "./DataContext";

describe("InputName Component", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn((e) => e.preventDefault());
  const time = 100;
  const mockName = "";
  const mockGameName = "";
  it("calls function correct number of times when user types in input", async () => {
    render(
      <NameContext.Provider
        value={{ name: mockName, onNameChange: handleChange }}
      >
        <InputName
          time={time}
          handleSubmit={handleSubmit}
          gameName={mockGameName}
        />
      </NameContext.Provider>,
      {
        wrapper: MemoryRouter,
      }
    );
    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "Ganon");
    expect(handleChange).toBeCalledTimes(5);
  });

  it("calls submit function with the correct arguments", async () => {
    render(
      <NameContext.Provider
        value={{ name: mockName, onNameChange: handleChange }}
      >
        <InputName
          time={time}
          handleSubmit={handleSubmit}
          gameName={mockGameName}
        />
      </NameContext.Provider>,
      {
        wrapper: MemoryRouter,
      }
    );

    const submit = screen.getByRole("button", { name: "Submit Score!" });
    const user = userEvent.setup();
    await user.click(submit);

    expect(handleSubmit).toBeCalledWith(time, mockName, mockGameName);
  });
});
