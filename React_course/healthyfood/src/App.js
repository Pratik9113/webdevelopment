import './App.css';
import FoodItems  from './components/FoodItems';
import Errorcheck from './components/Errorcheck';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';
function App() {
 
  let [foodItems, setFoodItems] = useState(["dal", "chawal" ,"sabji" ,"roti"])
  
  const handleKeyDown = (event) =>{
    if (event.key === 'Enter'){
      let newFoodItem = event.target.value 
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems)
    }
  }
  return (
    // container for boundary 
    <>
    <Container>
      <h1> Healty food</h1>
      <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
      {/* <p>{textToShow}</p> */}
      <FoodItems items = {foodItems}></FoodItems>
      <Errorcheck items = {foodItems}></Errorcheck>
    </Container>
    {/* <Container>
      <p>above the food items </p>
    </Container> */}
    </>
  );
};

export default App;
