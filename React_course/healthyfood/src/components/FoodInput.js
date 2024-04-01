import React from 'react'
import styles from "./FoodInput.module.css"
const FoodInput = () => {
    const handleOnChange = (event) =>{
        console.log(event.target.value)
        console.log(event)
    }
  return (
    <>
        <input type = "text" placeholder = "enter food items " className={`${styles.foodInput}`}
        onChange={handleOnChange}
        />
    </>
  )
}

export default FoodInput
