import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";
import React, { useState } from 'react';
import CartModal from "./CartModal";
import ReactDom from "react-dom";

function Cart() {
  const [existModal, setExistModal] = useState(false);
  function openModalHandler(){
    setExistModal(true)
  }
  function closeModalHandler(){
    setExistModal(false)
  }
  return (
    <>  
      <div onClick={openModalHandler} className={classes.cart}><CartIcon className={classes.icon}/> Your Cart</div>
      {existModal && ReactDom.createPortal(
        <CartModal onCloseModal={closeModalHandler}></CartModal>,
        document.getElementById("cart_modal")
      )}
    </>
  );
}

export default Cart;
