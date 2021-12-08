import React from "react";

function CartProduct(props) {''
    function removeProduct(){
        props.onLiftRemoveProduct(props.name)
    }
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.amount}</div>
      <button onClick={removeProduct}>Remove</button>
    </div>
  );
}

export default CartProduct;
