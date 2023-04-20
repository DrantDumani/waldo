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
    const homeHeader = screen.getByRole("heading", {
      name: "Waldo without Waldo",
    });
    const leadBrdLink = screen.getByRole("link", { name: "Leaderboard" });
    await userEvent.click(leadBrdLink);
    const boardHeader = screen.getByRole("heading", { name: "Leaderboard" });
    expect(boardHeader).toBeInTheDocument();
    expect(homeHeader).not.toBeInTheDocument();
  });

  it("navigates from leaderboard to homepage", async () => {
    render(
      <MemoryRouter initialEntries={["/Waldo-without-Waldo/Leaderboard"]}>
        <App />
      </MemoryRouter>
    );

    const boardHeader = screen.getByRole("heading", { name: "Leaderboard" });
    const homepageLink = screen.getByRole("link", { name: "Home" });
    await userEvent.click(homepageLink);

    const homeHeader = screen.getByRole("heading", {
      name: "Waldo without Waldo",
    });
    expect(boardHeader).not.toBeInTheDocument();
    expect(homeHeader).toBeInTheDocument();
  });
});
