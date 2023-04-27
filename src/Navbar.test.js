import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders links to different pages", () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole("link", { name: "Leaderboards" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  describe("Does not render links for pages a user is currently viewing", () => {
    it("does not render the home page while on the home page", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      );

      expect(
        screen.queryByRole("link", { name: "Home" })
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Leaderboards" })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    });

    it("does not render the leaderboards page while on the leaderboard page", () => {
      render(
        <MemoryRouter initialEntries={["/leaderboards"]}>
          <Navbar />
        </MemoryRouter>
      );

      expect(
        screen.queryByRole("link", { name: "Leaderboards" })
      ).not.toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    });

    it("does not render the about page while on the about page", () => {
      render(
        <MemoryRouter initialEntries={["/about"]}>
          <Navbar />
        </MemoryRouter>
      );

      expect(
        screen.queryByRole("link", { name: "About" })
      ).not.toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Leaderboards" })
      ).toBeInTheDocument();
    });
  });
});
