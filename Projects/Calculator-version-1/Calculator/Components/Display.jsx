// import styles from '../src/App.module.css';
import styles from "./Display.module.css"

const Display=({displayValue})=>{
return(
 
    <input type="text" className={styles.display} value={displayValue} readOnly/>
  
)
}
export default Display;
