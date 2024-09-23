import styles from "./Items.module.css";
const Items = ({foodItem}) => {
    return <li class={`${styles["kg-item"]}  "list-group-item"`}>{foodItem}</li>

}
export default Items