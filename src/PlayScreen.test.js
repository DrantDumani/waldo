import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PlayScreen from "./PlayScreen";
import { DataContext } from "./DataContext";

describe("PlayScreen component", () => {
  const fakeImg = { src: "" };
  const choices = [];
  const mockFn = jest.fn();
  it("Pulls up a dropdown menu underneath where the player clicked on the image", async () => {
    render(
      <DataContext.Provider value={{ checkValidation: mockFn }}>
        <MemoryRouter>
          <PlayScreen imgData={fakeImg} choices={choices} />
        </MemoryRouter>
      </DataContext.Provider>
    );
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
});
