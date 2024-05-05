import './App.css';
import ClockHeading from './components/Heading';
import Slogan from './components/Slogan';
import Time from './components/Time';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
    <center>
        <ClockHeading/>
        <Slogan/>
        <Time/>
      </center>
    </>
  );
}

export default App;
