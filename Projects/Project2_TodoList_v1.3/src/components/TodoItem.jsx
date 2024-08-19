function TodoItem({ ItemName, Date, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{ItemName}</div>

        <div className="col-4">{Date}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(ItemName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
