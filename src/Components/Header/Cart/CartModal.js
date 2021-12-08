import { useContext } from "react";
import CartContext from "../../../Context/cart-context";
import CartProduct from "./CartProduct";

function CartModal(props) {
  const ctx = useContext(CartContext);
  function removeProductHandler(id){
    ctx.removeProduct(id)
  }
  return (
    <div>
      {ctx.products.map((product) => (
        <CartProduct
          name={product.productName}
          price={product.price}
          amount={product.amount}
          onLiftRemoveProduct={removeProductHandler}
        ></CartProduct>
      ))}
      <div>{ctx.totalPrice}</div>
      <button onClick={props.onCloseModal}>Close</button>
    </div>
  );
}

export default CartModal;
