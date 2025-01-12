import Item from "./item";

const Fooditems = ({food}) => {
  // let fooditems = ["Dal", "Rice", "Green veggy", "Milk", "Roti"];

  return (
    <ul className="list-group">
      {food.map((item) => (
       <Item key={item}food={item}></Item>
      ))}
    </ul>
  );
};
export default Fooditems;
