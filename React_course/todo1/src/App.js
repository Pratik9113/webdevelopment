import AppTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import {useState} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialTodoItems = [{
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

  const [todoItems, setTodoItems] = useState(initialTodoItems)
  const handleNewItem = (itemName,itemDueDate) => {
    console.log(`${itemName}`)
    // const newTodoItem = [...todoItems,{name : itemName,dueDate:itemDueDate }]
    setTodoItems((currValue)=>{
      const newTodoItem = [...currValue,{name : itemName,dueDate:itemDueDate }]
      return newTodoItem
    })
  }

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItem = todoItems.filter ( item => item.name !== todoItemName)
    setTodoItems(newTodoItem)
  }
  return (
    <>
    <center className = "todo-container">
      <AppName/>
      <AppTodo onNewItem = {handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems onDeleteClick = {handleDeleteItem}  todoItems = {todoItems} />
    </center>
    </>
  );
}

export default App;
