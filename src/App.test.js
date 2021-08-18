import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test App.js", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("renders logo in react", () => {
    const logoElement = screen.getByText(/Logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("renders shop now", () => {
    const shopLIink = document.querySelector("#shop-link");
    expect(shopLIink).toBeInTheDocument();
  });
});
