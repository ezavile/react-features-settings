import { screen, render, fireEvent } from "@testing-library/react";
import { ChevronButton } from "./ChevronButton";

describe("ChevronButton", () => {
  let onClickFn: jest.Mock;

  beforeEach(() => {
    onClickFn = jest.fn();
  });

  it('sets "is-top" class when is on', () => {
    render(<ChevronButton on onClick={onClickFn} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("is-top");
  });

  it('sets "is-bottom" class when is off', () => {
    render(<ChevronButton on={false} onClick={onClickFn} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("is-bottom");
  });

  it("calls 'onClickFn' when button is clicked", () => {
    render(<ChevronButton on={false} onClick={onClickFn} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClickFn).toHaveBeenCalled();
  });
});
