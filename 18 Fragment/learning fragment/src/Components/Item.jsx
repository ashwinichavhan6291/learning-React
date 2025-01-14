import styles from"./Item.module.css";
const Item=({food})=>{
  const handledBuyClick=(event)=>{
    console.log(event);
    console.log(`${food} being bought`);
  }
    return (
        <li className={`${styles['kg-item']} list-group-item`}>
          <span className="kg-span">
          {food}
          </span>
          <button  className={`${styles.button} btn btn-info`} onClick={(event)=> handledBuyClick(event)}>Buy</button>
        </li>
    );
};
export default Item;