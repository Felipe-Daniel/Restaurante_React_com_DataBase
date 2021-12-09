import React from "react";
import classes from "./CartProduct.module.css";

function CartProduct(props) {
  function onLiftPlusAmount(){
      props.onLiftPlusAmount({productName: props.name, amount: +1})
  }
  function onLiftMinusAmount(){
    props.onLiftMinusAmount({productName: props.name, amount: -1})
  }
  return (
    <div className={classes.block}>
      <div className={classes.product}>
        <div className={classes.product__name}>{props.name}</div>
        <div className={classes.product__price}>${props.price}</div>
        <div className={classes.product__amount}>x {props.amount}</div>
      </div>
        <button className={classes.product__btn} onClick={onLiftPlusAmount}>+</button>
        <button className={classes.product__btn} onClick={onLiftMinusAmount}>-</button>
    </div>
  );
}

export default CartProduct;
