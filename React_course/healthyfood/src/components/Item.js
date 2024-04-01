import styles from "./Item.module.css"
const Item = ({foodItem}) =>{

    const handleBuyButtonClicked = (event) =>{
        console.log(event)
        console.log(`${foodItem} item being brought `)
    }
    return (
        <li  key = {foodItem} className={`${styles["kg-item"]} list-group-item`}>
            {foodItem}
            <button className={`${styles.button} btn btn-info`}
            onClick={(event) => handleBuyButtonClicked(event)}
            > Buy</button>
        </li>
    )
}
export default Item;