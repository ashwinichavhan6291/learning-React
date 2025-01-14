import styles from "./FoodInput.module.css";

function FoodInput({handledOnChange}){
    
return(
    <input type="text" placeholder="Enter food" className={styles.foods} onChange={ handledOnChange}/>
)
}
export default FoodInput;