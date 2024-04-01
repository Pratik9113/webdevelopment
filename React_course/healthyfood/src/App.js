import './App.css';
import FoodItems  from './components/FoodItems';
import Errorcheck from './components/Errorcheck';
import Container from './components/Container';
function App() {
  let foodItems = ["dal", "chawal" ,"sabji" ,"roti"];
  return (
    // container for boundary 
    <>
    <Container>
      <h1> Healty food</h1>
      <FoodItems items = {foodItems}></FoodItems>
      <Errorcheck items = {foodItems}></Errorcheck>
    </Container>
    <Container>
      <p>above the food items </p>
    </Container>
    </>
  );
};

export default App;
