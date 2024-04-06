import styles from "./Item.module.css"
const Item = ({foodItem ,bought, handleBuyButton}) =>{
    return (
        <li  key = {foodItem} className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
            {foodItem}
            <button className={`${styles.button} btn btn-info`}
            onClick={handleBuyButton}
            > Buy</button>
        </li>
    )
}
export default Item;