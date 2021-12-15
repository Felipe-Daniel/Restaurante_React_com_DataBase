import { useContext, useState } from "react";
import CartContext from "../../../Context/cart-context";
import CartProduct from "./CartProduct";
import classes from "./CartModal.module.css";
import FormModal from "./FormModal";
import ModalEndButtons from "./ModalEndButtons";

function CartModal(props) {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [formModalError, setFormModalError] = useState(null);

  const ctx = useContext(CartContext);
  function removeProductHandler(id) {
    ctx.removeProduct(id);
  }
  function plusAmountHandler(data) {
    ctx.addProduct(data);
  }
  function minusAmountHandler(data) {
    ctx.addProduct(data);
  }
  function showFormHandler() {
    if (!formModalOpen && ctx.products.length > 0) {
      setFormModalOpen(true);
      setFormModalError(null)
    } else {
      setFormModalError('Cart must not be empty')
    }

  }
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        {ctx.products.map((product) => (
          <CartProduct
            product={product}
            onLiftRemoveProduct={removeProductHandler}
            onLiftPlusAmount={plusAmountHandler}
            onLiftMinusAmount={minusAmountHandler}
          ></CartProduct>
        ))}
        <div className={classes.total_price}>
          <div>Total Price</div>
          <div>${Math.round(ctx.totalPrice * 100) / 100}</div>
        </div>

        {formModalOpen ? (
          <FormModal
          showFormHandler = {showFormHandler}
          onCloseModal = {props.onCloseModal}
          ></FormModal>
        ) : (
          <ModalEndButtons
            error = {formModalError}
            buttonText="Order"
            sendClick={showFormHandler}
            closeClick={props.onCloseModal}
          ></ModalEndButtons>
        )}
      </div>
    </div>
  );
}

export default CartModal;
