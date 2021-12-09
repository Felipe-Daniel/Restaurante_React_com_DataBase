import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./InputInCart.module.css";

function InputInCart(props) {
  const ctx = useContext(CartContext);
  function submitHandler(event) {
    event.preventDefault();
    if(!event.target.querySelector("input").value <0 || !event.target.querySelector("input").value >5){
      ctx.addProduct({
        productName: props.productName,
        price: props.price,
        amount: event.target.querySelector("input").value,
      });
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.amount}>
        <label htmlFor="amount">Amount: </label>
        <input type="number" name="amount" min="0" max="5"/>
      </div>
      <button type="submit">+Add</button>
    </form>
  );
}

export default InputInCart;
