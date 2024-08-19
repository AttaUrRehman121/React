import AddName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo></AddTodo>

      <div className="item-comtainer">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

// 2:50 min

export default App;
