import { render, screen } from "@testing-library/react";
import Leaderboard from "./Leaderboard";

describe("Leaderboard component", () => {
  it("renders all entries in ascending order of time", () => {
    const mockEntries = [
      { time: 2, name: "Bob", id: "foo" },
      { time: 5, name: "Billy", id: "bar" },
      { time: 3, name: "Buck", id: "baz" },
    ];
    render(<Leaderboard entries={mockEntries} />);
    const names = screen.getAllByTestId("name-field");
    expect(names.length).toBe(mockEntries.length);
    expect(names[0].textContent).toBe("Bob");
    expect(names[1].textContent).toBe("Buck");
    expect(names[2].textContent).toBe("Billy");
  });

  it("renders a message about an empty leaderboard if entries contains no elements", () => {
    const mockEntries = [];
    render(<Leaderboard entries={mockEntries} />);
    expect(
      screen.getByText(
        /The Leaderboard is empty! Be the first to submit a score!/
      )
    ).toBeInTheDocument();
  });
});
