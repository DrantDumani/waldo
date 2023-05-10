import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

const gameImgData = {
  src: "",
  id: 1,
};

const fakeThumbnails = [
  { src: "", id: "foo", found: false },
  { src: "", id: "bar", found: false },
];

describe("Game component", () => {
  it("game begins when user clicks the start button", async () => {
    render(
      <MemoryRouter>
        <Game imgData={gameImgData} thumbnails={fakeThumbnails} />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const startBtn = screen.getByRole("button", { name: /start/i });
    await user.click(startBtn);

    const gameImg = screen.getByAltText("game-screen");
    expect(gameImg).toBeInTheDocument();
    expect(startBtn).not.toBeInTheDocument();
  });

  // it("does stuff", async () => {
  //   render(
  //     <MemoryRouter>
  //       <DataContext.Provider value={{ mockFn }}>
  //         <Game imgData={gameImgData} />
  //       </DataContext.Provider>
  //     </MemoryRouter>
  //   );

  //   const gameImg = screen.getByAltText("game-screen");
  //   const event = new MouseEvent("click", { bubbles: true, clientX: 400 });
  //   Object.defineProperty(event, "offsetX", { value: 300 });
  //   console.log(event.clientX);
  //   gameImg.dispatchEvent(event);
  //   const victory = await screen.findByText("Finally");
  //   expect(victory).toBeInTheDocument();
  // });
});
