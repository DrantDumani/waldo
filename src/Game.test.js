import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

const gameImgData = {
  src: "https://cdnb.artstation.com/p/assets/images/images/028/956/671/large/aaron-hibiki-earthbound-fuzzy-pickles.jpg?1596028225",
};

describe("Game component", () => {
  it("game begins when user clicks the start button", async () => {
    render(
      <MemoryRouter>
        <Game imgData={gameImgData} />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const startBtn = screen.getByRole("button", { name: /start/i });
    await user.click(startBtn);

    const gameImg = screen.getByAltText("game-screen");
    expect(gameImg).toBeInTheDocument();
    expect(startBtn).not.toBeInTheDocument();
  });
});
