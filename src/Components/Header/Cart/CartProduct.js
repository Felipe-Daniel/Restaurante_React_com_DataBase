import React from "react";
import classes from "./CartProduct.module.css";

function CartProduct(props) {
  function onLiftPlusAmount(){
      props.onLiftPlusAmount({productName: props.product.productName, price: props.product.price, amount: +1})
  }
  function onLiftMinusAmount(){
    props.onLiftMinusAmount({productName: props.product.productName, price: props.product.price, amount: -1})
  }
  return (
    <div className={classes.block}>
      <div className={classes.product}>
        <div className={classes.product__name}>{props.product.productName}</div>
        <div className={classes.product__price}>${props.product.price}</div>
        <div className={classes.product__amount}>x {props.product.amount}</div>
      </div>
        <button className={classes.product__btn} onClick={onLiftPlusAmount}>+</button>
        <button className={classes.product__btn} onClick={onLiftMinusAmount}>-</button>
    </div>
  );
}

export default CartProduct;
