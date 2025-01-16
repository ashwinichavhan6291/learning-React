import Display from '../Components/Display';
import styles from './App.module.css';
import ButtonContainer from '../Components/ButtonContainer';
import { useState } from 'react';

function App() {
  let[calVal, setCalval]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
setCalval("");
    }
    else if(buttonText==='='){
let result= eval(calVal);  // algebric operations
setCalval(result);
    }
    else{
      let newDisplayVal=calVal+buttonText;
      setCalval(newDisplayVal);
    }
  }
  
  return(
    <div className={styles.calculator}>
     
<Display displayValue={calVal}></Display>
      <ButtonContainer  onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  )
}

export default App
