import { screen, render } from "@testing-library/react";
import { FeatureName } from "./FeatureName";

describe("FeatureName", () => {
  it("renders name", () => {
    render(<FeatureName name="Notifications" />);

    const name = screen.getByText(/Notifications/);
    expect(name).toBeInTheDocument();
  });

  it("renders background image", () => {
    render(<FeatureName name="Notifications" imageUrl={"/path/image.jpg"} />);

    const image = screen.getByTestId("feature-name-image");
    expect(image).toHaveStyle({ backgroundImage: "url(/path/image.jpg)" });
  });
});
