import React, { useState } from "react"
import Item from "./Item";
const FoodItems = ({items}) =>{

    let [activeItem,setActiveItem] = useState([]);
    let onBuyButton = (item ,event) =>{
        let newItems =  [...activeItem,item]
        setActiveItem(newItems)
    }
    return (
        
        <ul className = "list-group">
            {items.map((item)=>(
                <Item key = {item} foodItem = {item} bought = {activeItem.includes(item)}
                handleBuyButton = {(event)=> onBuyButton(item,event)}
                />
        ))}
        </ul>
        
    )
}
export default FoodItems;