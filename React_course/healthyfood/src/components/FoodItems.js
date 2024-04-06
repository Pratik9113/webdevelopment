import React, { useState } from "react"
import Item from "./Item";
const FoodItems = ({items}) =>{

    let [activeItem,setActiveItem] = useState([]);
    return (
        
        <ul className = "list-group">
            {items.map((item)=>(
                <Item key = {item} foodItem = {item} bought = {activeItem.includes(item)}
                handleBuyButton = {()=> console.log(` ${item} is clicked `)}
                />

        ))}
        </ul>
        
    )
}
export default FoodItems;