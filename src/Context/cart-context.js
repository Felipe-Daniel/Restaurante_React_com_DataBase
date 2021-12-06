import React, { useReducer } from "react";

const CartContext = React.createContext({
  productHandler: () => {},
  product: {
    productName: 0,
    amount: 0,
    price: 0,
  },
  totalAmount: 0,
});

export function CartContextProvider(props) {
  const [products, dispatchProducts] = useReducer(productsReducer, {
    products: [],
    totalPrice: 0,
  });

  function productsReducer(state, action) {
    if (action.type === "ADD") {
        const existingProductIndex = state.products.findIndex(
          (products) => action.product.productName === products.productName
        );
        const updatedTotalPrice = parseFloat(action.product.price)
                                  * parseFloat(action.product.amount)
                                  + state.totalPrice;
        let updatedProducts
        let existingProduct = state.products[existingProductIndex];
        if(!existingProduct){
          // if don't have yet

          updatedProducts = state.products.concat(action.product)
        } else{
          let newAmount = parseInt(action.product.amount) + parseInt(existingProduct.amount);
          if (newAmount < 0) {
            newAmount = 0;
          }
          existingProduct = { ...existingProduct, amount: newAmount };
          updatedProducts = [...state.products]
          updatedProducts[existingProductIndex] = existingProduct
        }

        return{...state,totalPrice: updatedTotalPrice, products: updatedProducts}
    }
  }
  function addProductHandler(product) {
    dispatchProducts(product);
  }
  return (
    <CartContext.Provider
      value={{
        onAddProduct: addProductHandler,
        product: {
          amount: 0,
          price: 0,
        },
        totalPrice: 0,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;
