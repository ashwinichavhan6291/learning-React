function FirstRow() {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter in Todo App" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}
export default FirstRow;
