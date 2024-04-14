import AppTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import {useReducer} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import {TodoItemsContext} from "./store/todo-items-store"
const todoItemReducer = (currTodoItems, action) =>{
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM"){
    newTodoItems = [...currTodoItems,{name : action.payload.itemName,dueDate:action.payload.itemDueDate }]
  }
  else if (action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter ( item => item.name !== action.payload.itemName)
  }
  return newTodoItems;
}
function App() {
  // const [todoItems, setTodoItems] = useState([])

  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])



  const addNewItem = (itemName,itemDueDate) => {

    const newItemAction = {
      type : "NEW_ITEM",
      payload : {
        itemName,
        itemDueDate,
      }
    };
    dispatchTodoItems(newItemAction)


    /* console.log(`${itemName}`)
    setTodoItems((currValue)=>{
      const newTodoItem = [...currValue,{name : itemName,dueDate:itemDueDate }]
      return newTodoItem
    })*/ 
  }

  const deleteItem = (todoItemName) =>{

    const deleteItemAction = {
      type : "DELETE_ITEM",
      payload : {
        itemName : todoItemName,
      }
    };
    dispatchTodoItems(deleteItemAction)
    // const newTodoItem = todoItems.filter ( item => item.name !== todoItemName)
    // setTodoItems(newTodoItem)
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
