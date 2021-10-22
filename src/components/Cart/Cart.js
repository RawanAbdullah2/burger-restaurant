import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const addItemHandler=item=>{
    ctx.addItem(item);
}
const removeItemHandler=id=>{
    ctx.removeItem(id)
}
  const cartItems = (
      ctx.items.map((item) => (
        <section className={classes.cartItems}>
          <h3>{item.name}</h3>
          <p >{item.price} $</p>
          <p className={classes.price}> X {item.amount}</p>
          <div className={classes.act}> <button onClick={removeItemHandler.bind(null,item.id)}>-</button>
          <button onClick={addItemHandler.bind(null,item)}>+</button></div>
        </section>
      ))
  );

  const price = ctx.TotalAmount;
  return (
    <Modal onClose={() => props.onClickCart(false)}>
     <div className={classes.tem}> {cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => props.onClickCart(false)}
          className={classes["button--alt"]}
        >
          close
        </button>
        <button className={classes.button}> Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
