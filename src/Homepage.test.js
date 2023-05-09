import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Homepage from "./Homepage";

describe("Homepage component", () => {
  const fakeImgs = [
    { src: "", id: "foo" },
    { src: "", id: "bar" },
    { src: "", id: "baz" },
  ];
  const mockFn = jest.fn();
  it("renders all images in the images prop", () => {
    render(
      <MemoryRouter>
        <Homepage images={fakeImgs} onLinkClick={mockFn} />
      </MemoryRouter>
    );

    const imgs = screen.getAllByAltText("Pick a game!");
    expect(imgs.length).toBe(fakeImgs.length);
  });

  it("renders number of links equal to the length of images prop", () => {
    render(
      <MemoryRouter>
        <Homepage images={fakeImgs} onLinkClick={mockFn} />
      </MemoryRouter>
    );

    const links = screen.getAllByTestId("game-link");
    expect(links.length).toBe(fakeImgs.length);
  });

  it("calls function with correct argument when user clicks link", async () => {
    render(
      <MemoryRouter>
        <Homepage images={fakeImgs} onLinkClick={mockFn} />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const link = screen.getAllByTestId("game-link")[0];
    await user.click(link);
    expect(mockFn).toBeCalledWith(fakeImgs[0].id);
  });
});
