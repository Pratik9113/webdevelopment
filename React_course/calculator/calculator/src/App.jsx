import { useState } from 'react'
import Display from './components/Display'
import ButtonContainer from './components/ButtonsContainer'
import styles from './App.module.css'
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("")
    } else if (buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
    }
  }
  return (
    <>
      <div className={styles.calculator}>
        <Display key={calVal} displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  )
}

export default App;