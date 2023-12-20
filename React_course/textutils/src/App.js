import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navabar from './components/Navabar';
import Tech from './components/Tech';
function App() {
  const [mode,setMode] = useState('light'); // where is my dark mode is true or false
  const toggleMode = () => {
    if(mode==='light'){
      setMode('black');
    }else{
      setMode('light');
    }
  }
  return (
    <>
    {/* this tiltle is prop from here i can change the tittle */}
      <Navabar title = "TextUtils" aboutText = "about-textutils" mode={mode} toggleMode = {toggleMode}/>
      <Tech/>
      <div className="container my-3">
          {/* <Tech heading = "Words counter "/> */}
          
      </div>
    </>
  );
}

export default App;
