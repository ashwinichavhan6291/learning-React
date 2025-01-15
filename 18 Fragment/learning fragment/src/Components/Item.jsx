import styles from"./Item.module.css";
const Item=({food,bought,handledBuyClick})=>{
  

    return (
        <li className={`${styles['kg-item']} list-group-item ${bought && 'active'}`}>
          <span className="kg-span">
          {food}
          </span>
          <button  className={`${styles.button} btn btn-info`} onClick={(event)=> handledBuyClick(event)}>Buy</button>
        </li>
    );
};
export default Item;