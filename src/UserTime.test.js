import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserTime from "./UserTime";

describe("UserTime component", () => {
  describe("display the correct time in 00:00 format", () => {
    it("should displays 00:05", () => {
      render(<UserTime time={5} />, { wrapper: MemoryRouter });
      expect(screen.getByText("00:05")).toBeInTheDocument();
    });

    it("Should display 06:30", () => {
      render(<UserTime time={390} />, { wrapper: MemoryRouter });
      expect(screen.getByText("06:30")).toBeInTheDocument();
    });
  });
});
