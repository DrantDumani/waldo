import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Objectives from "./Objectives";

describe("Objectives component", () => {
  const thumbnails = [
    { src: "", id: "The" },
    { src: "", id: "Big" },
  ];
  it("should render all images in the thumbnails array with correct alt text", () => {
    render(
      <MemoryRouter>
        <Objectives thumbnails={thumbnails} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(thumbnails[0].id)).toBeInTheDocument();
    expect(screen.getByAltText(thumbnails[1].id)).toBeInTheDocument();
  });

  it("should render all name properties in the thumbnails array", () => {
    render(
      <MemoryRouter>
        <Objectives thumbnails={thumbnails} />
      </MemoryRouter>
    );

    expect(screen.getByText(thumbnails[0].id)).toBeInTheDocument();
    expect(screen.getByText(thumbnails[1].id)).toBeInTheDocument();
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
