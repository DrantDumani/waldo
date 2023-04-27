import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Objectives from "./Objectives";

describe("Objectives component", () => {
  const thumbnails = [
    { src: "", id: "1" },
    { src: "", id: "2" },
  ];
  it("should render all images in the thumbnails array", () => {
    render(
      <MemoryRouter>
        <Objectives thumbnails={thumbnails} />
      </MemoryRouter>
    );

    expect(screen.getAllByAltText("thumbnail").length).toBe(thumbnails.length);
  });

  it("should call function when start button is clicked", async () => {
    const mockFn = jest.fn();
    render(
      <MemoryRouter>
        <Objectives thumbnails={thumbnails} onStart={mockFn} />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /start/i }));
    expect(mockFn).toBeCalledTimes(1);
  });
});
