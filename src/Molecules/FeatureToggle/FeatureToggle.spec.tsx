import { screen, render, fireEvent } from "@testing-library/react";
import { FeatureToggle } from "./FeatureToggle";

describe("FeatureToggle", () => {
  let onToggleFn: jest.Mock;
  let onLimitValueChangeFn: jest.Mock;
  let commonProps: any = {
    id: "1234",
    features: {},
    enabled: true,
    name: "Notifications",
  };

  beforeEach(() => {
    onToggleFn = jest.fn();
    onLimitValueChangeFn = jest.fn();
    commonProps = {
      ...commonProps,
      onToggle: onToggleFn,
      onLimitValueChange: onLimitValueChangeFn,
    };
  });

  it("renders input when there is limit value provided", () => {
    render(<FeatureToggle {...commonProps} value={2} />);

    const input = screen.getByTestId("numeric-input");
    expect(input).toBeInTheDocument();
  });

  it('calls "onLimitValueChange" when a value has been introduced', () => {
    render(<FeatureToggle {...commonProps} value={2} />);

    fireEvent.change(screen.getByTestId("numeric-input"), {
      target: { value: "1" },
    });
    expect(onLimitValueChangeFn).toHaveBeenCalledWith(1);
  });

  it('calls "onToggleFn" when switch is clicked', () => {
    render(<FeatureToggle {...commonProps} />);

    fireEvent.click(screen.getByTestId("switch"));
    expect(onToggleFn).toHaveBeenCalled();
  });
});
