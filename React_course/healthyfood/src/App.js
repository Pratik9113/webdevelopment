import './App.css';
import FoodItems  from './components/FoodItems';
import Errorcheck from './components/Errorcheck';
function App() {
  let foodItems = ["dal", "chawal" ,"sabji" ,"roti"];
  return (
    <>
      <h1> Healty food</h1>
      <FoodItems items = {foodItems}></FoodItems>
      <Errorcheck items = {foodItems}></Errorcheck>
    </>
  );
};

export default App;
