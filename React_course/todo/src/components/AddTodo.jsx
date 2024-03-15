function AddTodo() {
    return (
        <div className="row container">
            <div className="col-6">
                <input type="text" placeholder="Enter Todo  Here" />
            </div>
            <div className="col-4">
                <input type="date" ></input>
            </div>
            <div className="col-2">
                <button type="button" class="btn btn-success">Add</button>
            </div>
        </div>
    )
}
export default AddTodo;