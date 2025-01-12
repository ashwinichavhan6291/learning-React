import styles from"./Item.module.css";
const Item=({food})=>{
  
    return (
        <li className={`${styles['kg-item']} list-group-item`}>
          <span className="kg-span">
          {food}
          </span>
        </li>
    );
};
export default Item;