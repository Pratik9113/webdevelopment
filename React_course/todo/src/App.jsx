import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "../src/App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <div className="row container">
        <div className="col-6">
          Buy milk
        </div>
        <div className="col-4">
          30/2/2421
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">Add</button>
        </div>
      </div>

      <div className="row container">
        <div className="col-6">
          go to clg
        </div>
        <div className="col-4">
          34/342111/23/4
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">Add</button>
        </div>
      </div>
    </center>
  );
}

export default App;