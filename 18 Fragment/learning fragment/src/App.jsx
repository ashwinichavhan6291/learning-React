import Fooditems from "./Components/Fooditems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
FoodInput;
function App() {
  // let fooditems=[];
  // let fooditems = ["Dal", "Rice", "Green veggy", "Milk", "Roti"];
  
  
  let[fooditems,setfoodItems]=useState([
    
  ]);
  
  const onKeyDown=(event)=>{
    if(event.key=="Enter"){
      let newFoodItems=event.target.value;
      let newItems=[...fooditems,newFoodItems];
      setfoodItems(newItems);
    }
         
     }
   
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage food={fooditems}></ErrorMessage>

      <FoodInput handledKeyDown={onKeyDown}></FoodInput>
      
      <Fooditems food={fooditems}></Fooditems>
    </Container>

    {/* <Container>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias deleniti itaque qui. Sed sapiente ipsam explicabo repudiandae soluta nemo non fuga vero. Explicabo illum neque labore unde! Voluptates, voluptatibus?</p>
    </Container> */}
    </>
  );
}

export default App;
