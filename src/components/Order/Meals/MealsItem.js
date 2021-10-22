import React ,{useContext}from 'react'
import CartContext from "../../../store/cart-context";
import MealsItemForm from "./MealsItemForm";


const MealsItem = (props) => {
    const ctx = useContext(CartContext);

    const CartHandler = (amounts) => {
        ctx.addItem({
          id: props.id,
          name: props.name,
          price: props.size,
          amount: amounts,
        });
      };
    return (
               <div id={props.id}>
              <img src={props.img} alt={props.id} />
              <h3>{props.name}</h3>
              <p>{props.size} $</p>
              <MealsItemForm onAddCart={CartHandler} />
            </div>
    )
}

export default MealsItem
