import SecondRow from "./SecondRow";
const Items=({items,onHandledClick})=>{
return(
    <div className="items-container">
        {items.map(item=> 
            <SecondRow 
            key={item.name}todoName={item.name} 
            date={item.date} onDeleteClick={onHandledClick}></SecondRow >
        )}
    
  
  </div>
)
}
export default Items;