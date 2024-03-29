import AppTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [{
    name : 'Buy Milk',
    dueDate  :"4/02/2023"
  },
  {
    name : 'Buy Milk',
    dueDate  :"5/02/2023"
  },
  {
    name : 'Buy',
    dueDate  :"6/02/2023"
  }];
  return (
    <>
    <center className = "todo-container">
      <AppName/>
      <AppTodo/>
      <TodoItems key = {todoItems} todoItems = {todoItems} />
    </center>
    </>
  );
}

export default App;
