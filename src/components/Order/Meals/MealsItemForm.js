import React, { useRef } from "react";
import classes from './Meals.module.css'
import Input from "./Input";

const MealsItemForm = (props) => {
  const AmountIpnutRef = useRef();
const submitHandler=(event)=>{
    event.preventDefault();
    const enteredAmount=AmountIpnutRef.current.value;
    const enteredAmountNumber=+enteredAmount;
    props.onAddCart(enteredAmountNumber);

}

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={AmountIpnutRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: "1",
        }}
      />
      <button>+ </button>
    </form>
  );
};

export default MealsItemForm;
