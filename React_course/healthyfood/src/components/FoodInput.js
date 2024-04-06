import React from 'react'
import styles from "./FoodInput.module.css"
const FoodInput = ({handleKeyDown}) => {
    // const handleOnChange = (event) =>{
    //     console.log(event.target.value)
    //     console.log(event)
    // }
  return (
    <>
        <input type = "text" placeholder = "enter food items " className={`${styles.foodInput}`}
        onKeyDown={handleKeyDown}
        />
    </>
  )
}

export default FoodInput
