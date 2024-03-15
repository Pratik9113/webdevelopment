function TodoItem2(){
    let todoName = "Buy MiLK";
    let todoDate = "12/02/2004";
    return (
        <div className="container">
            <div className="row kg-row" >
            <div className="col-6">
                {todoName}
            </div>
            <div className="col-4">
                {todoDate}
            </div>
            <div className="col-2">
                <button type="button" class="btn btn-danger kg-button">Delete</button>
            </div>
            </div>
        </div>
    )
}

export default TodoItem2;