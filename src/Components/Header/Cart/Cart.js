import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";
import React, { useState, useEffect, useContext } from "react";
import CartModal from "./CartModal";
import ReactDom from "react-dom";
import CartContext from "../../../Context/cart-context";

function Cart() {
  const [existModal, setExistModal] = useState(false);
  function openModalHandler() {
    setExistModal(true);
  }
  function closeModalHandler() {
    setExistModal(false);
  }
  const ctx = useContext(CartContext);
  let { products } = ctx;
  const [buttonIsAnimated, setButtonIsAnimated] = useState();

  useEffect(() => {
    if (products.length === 0) {
      return;
    }
    setButtonIsAnimated(true);
    const timer = setTimeout(() => {
      setButtonIsAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [products]);
  let cartClasses = `${classes.cart} ${buttonIsAnimated ? classes.bump : ""} `;
  let totalAmount = products.map((product)=>{return product.amount}).reduce((a,b)=>{return a+b},0)
  return (
    <>
      <div onClick={openModalHandler} className={cartClasses}>
        <CartIcon className={classes.icon} />
        &nbsp; Your Cart
        &nbsp; <div className={classes.cart__number}>{totalAmount}</div>
      </div>
      {existModal &&
        ReactDom.createPortal(
          <CartModal onCloseModal={closeModalHandler}></CartModal>,
          document.getElementById("cart_modal")
        )}
    </>
  );
}

export default Cart;
