import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Homepage from "./Homepage";

describe("Homepage component", () => {
  const fakeImgs = [
    { src: "", id: 1 },
    { src: "", id: 2 },
  ];
  it("renders all images in the fakeImgs array", () => {
    render(
      <MemoryRouter>
        <Homepage images={fakeImgs} />
      </MemoryRouter>
    );

    const imgs = screen.getAllByAltText("Pick a game!");
    expect(imgs.length).toBe(fakeImgs.length);
  });

  it("renders links equal to the length of the fakeImgs array", () => {
    render(
      <MemoryRouter>
        <Homepage images={fakeImgs} />
      </MemoryRouter>
    );

    const links = screen.getAllByTestId("game-link");
    expect(links.length).toBe(fakeImgs.length);
  });

  it("calls function when user clicks link", async () => {
    const mockFn = jest.fn();
    render(
      <MemoryRouter>
        <Homepage images={fakeImgs} onLinkClick={mockFn} />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const link = screen.getAllByTestId("game-link")[0];
    await user.click(link);
    expect(mockFn).toBeCalledTimes(1);
  });
});
