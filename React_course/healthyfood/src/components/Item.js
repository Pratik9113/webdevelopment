import styles from "./Item.module.css"
const Item = ({foodItem , handleBuyButton}) =>{
    return (
        <li  key = {foodItem} className={`${styles["kg-item"]} list-group-item`}>
            {foodItem}
            <button className={`${styles.button} btn btn-info`}
            onClick={handleBuyButton}
            > Buy</button>
        </li>
    )
}
export default Item;