import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameContainer from "./GameContainer";
import { getImagesFromFireBase, getCoords } from "./firebaseConfig";

jest.mock("./firebaseConfig", () => {
  return {
    getImagesFromFireBase: jest.fn(),
    getCoords: jest.fn(),
  };
});

jest.mock("./firebaseConfig", () => {
  return {
    getImagesFromFireBase: jest.fn(),
    getCoords: jest.fn(),
  };
});

describe("GameContainer integration", () => {
  it("game begins when user clicks the start button", async () => {
    const shareID = "mask";
    const mockGame = { src: "", id: shareID };
    getImagesFromFireBase.mockResolvedValue([{ src: "", id: "foo" }]);

    render(
      <MemoryRouter>
        <GameContainer currGame={mockGame} />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const startBtn = screen.getByRole("button", { name: /start/i });
    await user.click(startBtn);

    const gameImg = screen.getByAltText("game-screen");
    expect(gameImg).toBeInTheDocument();
    expect(startBtn).not.toBeInTheDocument();
  });

  it("Pulls up a dropdown menu underneath where the player clicked on the image", async () => {
    const shareID = "mask";
    const mockGame = { src: "", id: shareID };
    getImagesFromFireBase.mockResolvedValue([{ src: "", id: "foo" }]);
    render(
      <MemoryRouter>
        <GameContainer currGame={mockGame} />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /start/i }));

    const fakeMouseEvent = new MouseEvent("click", { bubbles: true });
    Object.defineProperties(fakeMouseEvent, {
      offsetX: { value: 400 },
      offsetY: { value: 200 },
    });
    const image = screen.getByAltText("game-screen");
    image.dispatchEvent(fakeMouseEvent);
    const buttonContainer = await screen.findByTestId("button-container");
    const containerOffsetX = Number(buttonContainer.style.left.match(/\d+/));
    const containerOffsetY = Number(buttonContainer.style.top.match(/\d+/));
    expect(containerOffsetX).toBe(fakeMouseEvent.offsetX);
    expect(containerOffsetY).toBeGreaterThan(fakeMouseEvent.offsetY);
  });

  //TODO
  //1. Write tests for making sure the correct validation text shows up. The user has to pick a choice.
  //Write code to pass the above tests

  //2. Write tests for playing the game. The game ends when a user finds all characters in the image.
  //Write code for passing the above tests

  //3. The game container tests should mock the external firebase functions. Instead of making a data request
  //just return fake game data and use that fake data as validation for the user in the tests.
});
