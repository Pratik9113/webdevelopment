import AppTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import {useReducer} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import {TodoItemsContext} from "./store/todo-items-store"

function App() {
  return ( <TodoItemsContext.Provider>
      <center className = "todo-container">
        <AppName/>
        <AppTodo />
        {<WelcomeMessage/>}
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
