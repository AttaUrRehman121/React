function TodoItem2() {
  let ItemName = "Buy Milk";
  let Date = "20.7.2024";
  return (
    <div class="container ">
      <div class="row  kg-row">
        <div class="col-6">{ItemName}</div>

        <div class="col-4">{Date}</div>

        <div class="col-2">
          <button type="button" class="btn btn-danger  kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
