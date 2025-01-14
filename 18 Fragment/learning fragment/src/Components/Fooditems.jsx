import Item from "./item";

const Fooditems = ({food}) => {
  // let fooditems = ["Dal", "Rice", "Green veggy", "Milk", "Roti"];

  return (
    <ul className="list-group">
      {food.map((item) => (
       <Item key={item}food={item} handledBuyClick={()=>console.log(`${item} bought`)}></Item>
      ))}
    </ul>
  );
};
export default Fooditems;
