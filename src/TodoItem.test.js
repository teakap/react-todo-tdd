import { screen, render } from "@testing-library/react";
import TodoItem from "./TodoItem";
// should be able to see the header with the correct text

describe("App", () => {
    it("should render TodoItem", () => {
        render(<TodoItem />);
        expect(screen.getByTestId("todo-item")).toBeInTheDocument();
    });
});