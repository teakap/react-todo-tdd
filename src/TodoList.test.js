import { screen, render } from "@testing-library/react";
import TodoList from "./TodoList";
// should be able to see the header with the correct text

describe("App", () => {
    it("should render TodoList", () => {
        render(<TodoList />);
        expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    });
});