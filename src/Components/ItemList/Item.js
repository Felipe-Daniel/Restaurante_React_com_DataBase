import InputInCart from "./InputInCart";
import classes from "./Item.module.css";
function Item(props) {
  return (
    <div className={classes.item}>
      <div>
        <div className={props.title}></div>
        <div className={props.description}></div>
        <div className={props.price}></div>
      </div>
      <InputInCart/>
    </div>
  );
}

export default Item;
