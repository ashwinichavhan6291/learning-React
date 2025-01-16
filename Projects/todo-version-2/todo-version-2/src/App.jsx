import AppName from "./Components/AppName";
import FirstRow from "./Components/FirstRow";
import WelcomeMessage from "./Components/WelcomeMessage";
import Items from "./Components/items";
import { useState } from "react";
import "./App.css";

function App() {
  
let[todoitems,setTodoItem]=useState([]);


const HandledNewItem=(newItem,Date)=>{
// console.log(`${newItem} is added on ${Date}`);
const newName= [...todoitems, { name: newItem, date: Date }];
setTodoItem(newName);
}
let onDeleteClick = (todoitemName) => {
  const newTodoItem = todoitems.filter((item) => item.name !== todoitemName);
  setTodoItem(newTodoItem);
};




  return (
    <div className="todo-container" style={{ textAlign: "center" }}>
      <AppName />
     
      <FirstRow onNewItem={HandledNewItem}></FirstRow>
      {todoitems.length==0 && <WelcomeMessage></WelcomeMessage>}
      <Items items={todoitems} onHandledClick={onDeleteClick}></Items>
    </div>
  );
}

export default App;
