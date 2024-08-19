import AddName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoitems = [
    { name: "buy Some Canddy ", DueDate: "20.7.2024" },
    { name: "buy Milk", DueDate: "20.7.2024" },
    { name: "Like This Video ", DueDate: "20.7.2024" },
  ];

  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo></AddTodo>
      <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

// 2:50 min

export default App;
