import './App.css';
import About from './components/About';
import Navabar from './components/Navabar';
import Tech from './components/Tech';
function App() {
  return (
    <>
    {/* this tiltle is prop from here i can change the tittle */}
      <Navabar title = "TextUtils" aboutText = "about-textutils"/>
      <Tech/>
      <div className="container my-3">
          {/* <Tech heading = "Words counter "/> */}
          <About/>
      </div>
    </>
  );
}

export default App;
