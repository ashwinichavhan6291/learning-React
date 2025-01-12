const Fooditems = () => {
  let fooditems = ["Dal", "Rice", "Green veggy", "Milk", "Roti"];

  return (
    <ul className="list-group">
      {fooditems.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default Fooditems;
