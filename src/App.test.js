import { MemoryRouter } from "react-router-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./Homepage", () => () => {
  return (
    <div>
      <h1>Waldo without Waldo</h1>;\
      <a href="mock" data-testid="game-link">
        mock
      </a>
    </div>
  );
});

jest.mock("./Leaderboard", () => () => {
  return <h1>Leaderboard</h1>;
});

describe("user navigation", () => {
  it("allows your user to navigate from the homepage to the leaderboard", async () => {
    const fakeImages = [];
    const fakeGame = {};
    const setFakeGame = jest.fn();
    render(
      <MemoryRouter>
        <App
          gameImages={fakeImages}
          currGame={fakeGame}
          setCurrGame={setFakeGame}
        />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const homeHeader = screen.getByRole("heading", {
      name: "Waldo without Waldo",
    });
    const leadBrdLink = screen.getByRole("link", { name: /Leaderboard/i });
    await user.click(leadBrdLink);
    const boardHeader = screen.getByRole("heading", { name: /Leaderboard/i });
    expect(boardHeader).toBeInTheDocument();
    expect(homeHeader).not.toBeInTheDocument();
  });

  it("navigates from leaderboard to homepage", async () => {
    render(
      <MemoryRouter initialEntries={["/leaderboards"]}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const boardHeader = screen.getByRole("heading", { name: "Leaderboard" });
    const homepageLink = screen.getByRole("link", { name: "Home" });
    await user.click(homepageLink);

    const homeHeader = screen.getByRole("heading", {
      name: "Waldo without Waldo",
    });
    expect(boardHeader).not.toBeInTheDocument();
    expect(homeHeader).toBeInTheDocument();
  });
});
