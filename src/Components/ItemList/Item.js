import InputInCart from "./InputInCart";
import classes from "./Item.module.css";
function Item(props) {
  return (
  <div className={classes.item}>
      <div>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <InputInCart productName={props.title} price={props.price}/>
    </div>
  );
}

export default Item;
