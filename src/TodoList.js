import TodoItem from "./TodoItem";

function App() {
    return (
        <div className="list-container" data-testid="todo-list">
            <TodoItem />
        </div>
    );
}

export default App;
