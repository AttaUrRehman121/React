import AddName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/welcomeMessage";

import "./App.css";
import { useState } from "react";

function App() {
  // const todoitems = [
  //   { name: "buy Some Canddy ", DueDate: "20.7.2024" },
  //   { name: "buy Milk", DueDate: "20.7.2024" },
  //   { name: "Like This Video ", DueDate: "20.7.2024" },
  // ];

  const todoitems = [];

  const [todoList, setTodo] = useState(todoitems); // useState

  const handleNewItem = (ItemName, ItemDueDate) => {
    const newTodoItems = [
      ...todoList,
      { name: ItemName, DueDate: ItemDueDate },
    ];
    setTodo(newTodoItems);
  };

  const handleDeteItem = (todoItemName) => {
    const updatedTodoItems = todoList.filter(
      (item) => item.name !== todoItemName
    );
    setTodo(updatedTodoItems);
    console.log(`item Deleted ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoitems={todoList}
        onDeleteClick={handleDeteItem}
      ></TodoItems>
    </center>
  );
}

// 2:50 min

export default App;
