import { MemoryRouter } from "react-router-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImgList from "./ImgList";

describe("ImgList Component", () => {
  it("calls a function whenever the user clicks on one of the image buttons", async () => {
    const gameImages = [{ src: "", id: "foo" }];
    const handleBtnClick = jest.fn();
    render(<ImgList gameImages={gameImages} handleBtnClick={handleBtnClick} />);

    const user = userEvent.setup();
    const btn = screen.getAllByRole("button")[0];
    await user.click(btn);
    expect(handleBtnClick).toBeCalled();
  });

  it("displays all images passed to it as buttons", () => {
    const gameImages = [{ src: "", id: "foo" }];
    const handleBtnClick = jest.fn();
    render(<ImgList gameImages={gameImages} handleBtnClick={handleBtnClick} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(gameImages.length);
  });
});
