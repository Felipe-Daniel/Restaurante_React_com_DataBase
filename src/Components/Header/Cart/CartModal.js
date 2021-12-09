import { useContext } from "react";
import CartContext from "../../../Context/cart-context";
import CartProduct from "./CartProduct";
import classes from './CartModal.module.css'

function CartModal(props) {
  const ctx = useContext(CartContext);
  function removeProductHandler(id){
    ctx.removeProduct(id)
  }
  function plusAmountHandler(data){
    ctx.addProduct(data)
  }
  function minusAmountHandler(data){
    ctx.addProduct(data)
  }
  function sendOrderHandler(){
    console.log(ctx.products)
  }
  return (
      <div className={classes.overlay}>
        <div className={classes.modal}>
        {ctx.products.map((product) => (
            <CartProduct
            name={product.productName}
            price={product.price}
            amount={product.amount}
            onLiftRemoveProduct={removeProductHandler}
            onLiftPlusAmount={plusAmountHandler}
            onLiftMinusAmount={minusAmountHandler}
            ></CartProduct>
        ))}
        <div className={classes.total_price}>
          <div>Total Price</div>
          <div>{ctx.totalPrice}</div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.buttons__close_button} onClick={props.onCloseModal}>Close</button>
          <button className={classes.buttons__order_button} onClick={sendOrderHandler}>Order</button>
        </div>
        
        </div>
      </div>

  );
}

export default CartModal;
