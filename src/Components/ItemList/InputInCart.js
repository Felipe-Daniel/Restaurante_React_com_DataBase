import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./InputInCart.module.css";

function InputInCart(props) {
  const ctx = useContext(CartContext);
  function submitHandler(event) {
    event.preventDefault();
    ctx.onAddProduct({
      type: "ADD",
      product: {
        productName: props.productName,
        price: props.price,
        amount: event.target.querySelector("input").value,
      },
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.amount}>
        <label htmlFor="amount">Amount: </label>
        <input type="number" name="amount" />
      </div>
      <button type="submit">+Add</button>
    </form>
  );
}

export default InputInCart;
