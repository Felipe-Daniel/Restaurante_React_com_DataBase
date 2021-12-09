import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./InputInCart.module.css";

function InputInCart(props) {
  const ctx = useContext(CartContext);
  function submitHandler(event) {
    event.preventDefault();
    let amount = parseInt(event.target.querySelector("input").value)
    if(amount > 0 && amount <=5){
      ctx.addProduct({
        productName: props.productName,
        price: props.price,
        amount: amount,
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
