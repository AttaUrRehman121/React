import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoitems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoitems.map((item, index) => (
        <TodoItem
          key={index}
          ItemName={item.name}
          Date={item.DueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
