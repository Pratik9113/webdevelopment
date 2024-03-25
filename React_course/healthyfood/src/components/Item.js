import styles from "./Item.module.css"
const Item = ({foodItem}) =>{
    return (
        <li key = {foodItem} className={`${styles["kg-item"]}`}>
            {foodItem}
        </li>
    )
}
export default Item;