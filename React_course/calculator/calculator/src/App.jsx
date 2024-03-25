import { useState } from 'react'
import Display from './components/Display'
import ButtonContainer from './components/ButtonsContainer'
import styles from './App.module.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer />
      </div>
    </>
  )
}

export default App;