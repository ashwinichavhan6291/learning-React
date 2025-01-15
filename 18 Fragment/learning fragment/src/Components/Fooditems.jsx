import Item from "./item";
import { useState } from "react";
const Fooditems = ({food}) => {
 
  let[activeItems,setActiveItmes]=useState([]);

  let onBuyButton=(item,  event)=>{
    let newItems=[...activeItems,item];
    setActiveItmes(newItems);
}

  return (
    <ul className="list-group">
      {food.map((item) => (
        
       <Item key={item}food={item} bought={activeItems.includes(item) }
       handledBuyClick={(event)=>onBuyButton(item)}></Item>
      ))}
    </ul>
  );
};
export default Fooditems;
