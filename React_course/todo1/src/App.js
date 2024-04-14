import AppTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import {useState} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import {TodoItemsContext} from "./store/todo-items-store"
function App() {
  const [todoItems, setTodoItems] = useState([])
  const addNewItem = (itemName,itemDueDate) => {
    console.log(`${itemName}`)
    setTodoItems((currValue)=>{
      const newTodoItem = [...currValue,{name : itemName,dueDate:itemDueDate }]
      return newTodoItem
    })
  }

  const deleteItem = (todoItemName) =>{
    const newTodoItem = todoItems.filter ( item => item.name !== todoItemName)
    setTodoItems(newTodoItem)
  }
  return (
    <>
    <TodoItemsContext.Provider value = {{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className = "todo-container">
        <AppName/>
        <AppTodo />
        {<WelcomeMessage/>}
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
    </>
  );
}

export default App;
