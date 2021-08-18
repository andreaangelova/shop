import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Shop from "./Shop";

describe("test App.js", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Shop />
      </Provider>
    );
  });
  it("renders shop text", () => {
    const text = screen.getByText(/This is shop page/i);
    expect(text).toBeInTheDocument();
  });
  it.only("renders add items button", () => {
    const addItem = document.querySelector(".add-item");
    expect(addItem).toBeInTheDocument();
    addItem.click();
    alert = document.querySelector(".alert");
    expect(alert).toBeInTheDocument();
  });
});
