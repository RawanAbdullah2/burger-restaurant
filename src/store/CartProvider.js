import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
      const UpdateTotalAmount = state.totalAmount + (action.items.price * action.items.amount);
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.items.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updateItems;
      if (existingCartItem) {
          const updateItem = { ...existingCartItem, amount:existingCartItem.amount+action.items.amount,};
          updateItems = [...state.items];
          updateItems[existingCartItemIndex] = updateItem;
      }
      else updateItems = state.items.concat(action.items);
      return {
        items: updateItems,
        totalAmount: UpdateTotalAmount,
      };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const UpdateTotalAmount = state.totalAmount - existingCartItem.price ;
    let updateItems;
    if(existingCartItem.amount===1){
      updateItems=state.items.filter(item=>item.id!==action.id)
    }
    else {
      const updateItem={...existingCartItem,amount:existingCartItem.amount-1,};
      updateItems=[...state.items];
      updateItems[existingCartItemIndex]=updateItem;
    }
    return {
      items: updateItems,
      totalAmount: UpdateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", items: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    TotalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
