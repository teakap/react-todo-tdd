import { screen, render } from "@testing-library/react";
import App from "./App";
// should be able to see the header with the correct text

describe("App", () => {
  it("should render the correct header", () => {
    render(<App />);
    expect(screen.getByText("TodoApp")).toBeInTheDocument();
  });
});
