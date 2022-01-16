import { screen, render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children content", () => {
    render(
      <Card>
        <p>some content</p>
      </Card>
    );

    const text = screen.getByText("some content");
    expect(text).toBeInTheDocument();
  });
});
