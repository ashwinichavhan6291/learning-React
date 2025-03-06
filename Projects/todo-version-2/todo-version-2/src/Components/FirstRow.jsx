import { useState } from "react";
import styles from"./FirstRow.module.css";
import { IoIosAddCircle } from "react-icons/io";
function FirstRow({onNewItem}) {

  const [todoName,setTodoname]=useState();
  const [dueDate,setdueDate]=useState();

  let handledNameChange=(event)=>{
    setTodoname(event.target.value);
    
  }
let handledDateChange=(event)=>{
    setdueDate(event.target.value);
      }

let handledAddButtonClick=()=>{
  onNewItem(todoName,dueDate);
  setTodoname("");
  setdueDate("");

}

  return (
    <div className="col-6 " style={{display:"flex",}}>
    <div className="row">
      
        <input type="text" style={{marginLeft:"20px"}} placeholder="Enter in Todo App" value={todoName} onChange={handledNameChange} />
      </div>
      <div className="col-4">
        <input type="date"  value={dueDate} style={{marginLeft:"40px", marginTop:"10px"}}onChange={handledDateChange}/>
      </div>
      <div className="col-2">
       
        <button type="button" className={`${styles.button} btn btn-success`} onClick={handledAddButtonClick}>
          {/* Add
           */}
           <IoIosAddCircle />
        </button>
      
        
    </div>
    </div>
  
  );
}
export default FirstRow;
