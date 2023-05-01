import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Objectives from "./Objectives";

describe("Objectives component", () => {
  const thumbnails = [
    { src: "", id: "1", name: "The" },
    { src: "", id: "2", name: "Big" },
  ];
  it("should render all images in the thumbnails array with correct alt text", () => {
    render(
      <MemoryRouter>
        <Objectives thumbnails={thumbnails} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("The")).toBeInTheDocument();
    expect(screen.getByAltText("Big")).toBeInTheDocument();
  });

  it("should render all name properties in the thumbnails array", () => {
    render(
      <MemoryRouter>
        <Objectives thumbnails={thumbnails} />
      </MemoryRouter>
    );

    expect(screen.getByText("The")).toBeInTheDocument();
    expect(screen.getByText("Big")).toBeInTheDocument();
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
