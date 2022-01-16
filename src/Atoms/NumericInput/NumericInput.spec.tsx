import { screen, render, fireEvent } from "@testing-library/react";
import { NumericInput } from "./NumericInput";

describe("NumericInput", () => {
  let onChangeFn: jest.Mock;

  beforeEach(() => {
    onChangeFn = jest.fn();
  });

  it('calls "onChangeFn" on input change', () => {
    render(<NumericInput onChange={onChangeFn} />);

    fireEvent.input(screen.getByTestId("numeric-input"), {
      target: { value: "1" },
    });

    expect(onChangeFn).toHaveBeenCalled();
  });
});
