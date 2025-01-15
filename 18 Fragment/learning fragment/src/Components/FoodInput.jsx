import styles from "./FoodInput.module.css";

function FoodInput({handledKeyDown}){
    
return(
    <input type="text" placeholder="Enter food" className={styles.foods} onKeyDown={ handledKeyDown}/>
)
}
export default FoodInput;