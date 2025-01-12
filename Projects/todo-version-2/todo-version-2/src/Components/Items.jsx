import SecondRow from "./SecondRow";
const Items=({items})=>{
return(
    <div className="items-container">
        {items.map(item=> 
            <SecondRow todoName={item.name} date={item.date}></SecondRow >
        )}
    
  
  </div>
)
}
export default Items;