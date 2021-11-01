import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";

function Cart() {
  return (
    <div className={classes.cart}>
      <CartIcon className={classes.icon}/>
      <div>Your Cart</div>
    </div>
  );
}

export default Cart;
