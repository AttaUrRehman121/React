import TodoItem from "./TodoItem";
import stlyes from "./TodoItems.module.css";

const TodoItems = ({ todoitems }) => {
  return (
    <div className={stlyes.itemComtainer}>
      {todoitems.map((item) => (
        <TodoItem ItemName={item.name} Date={item.DueDate}></TodoItem>
      ))}
      ;
      {/* <TodoItem ItemName="Buy Milk " Date="20.7.2024"></TodoItem>
      <TodoItem ItemName="Buy Bread " Date="20.7.2024"></TodoItem> */}
    </div>
  );
};

export default TodoItems;
