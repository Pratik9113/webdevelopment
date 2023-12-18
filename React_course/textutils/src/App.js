import './App.css';
import Navabar from './components/Navabar';
import Tech from './components/Tech';
function App() {
  return (
    <>
    {/* this tiltle is prop from here i can change the tittle */}
      <Navabar title = "TextUtils" aboutText = "about-textutils"/>
      <div className="container my-3">
          <Tech heading = "enter the test to anlayze below"/>
      </div>
    </>
  );
}

export default App;
