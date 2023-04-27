import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("user navigation", () => {
  it("allows your user to navigate from the homepage to the leaderboard", async () => {
    render(
      <MemoryRouter>
        <App />
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

  it("user can visit the game page by clicking on a link", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const homeHeader = screen.getByRole("heading", {
      name: "Waldo without Waldo",
    });
    const gameLink = screen.getAllByTestId("game-link")[0];
    await user.click(gameLink);
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
    expect(homeHeader).not.toBeInTheDocument();
  });
});
