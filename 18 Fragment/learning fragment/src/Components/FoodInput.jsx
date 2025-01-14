import styles from "./FoodInput.module.css";

function FoodInput(){
    const handledOnChange=(event)=>{
        console.log(event.target.value)
    }
return(
    <input type="text" placeholder="Enter food" className={styles.foods} onChange={ handledOnChange}/>
)
}
export default FoodInput;